import { db } from "@/lib/db";
import { createInlineAbsoluteFileResponse, createInlineFileResponse } from "@/lib/files";
import { isShareVerified } from "@/lib/share-auth";
import { ensureLowResolutionVideoPreview, getVideoPreviewResponseMeta } from "@/lib/video-preview";

export async function GET(request: Request, context: { params: Promise<{ token: string; fileId: string }> }) {
  const { token, fileId } = await context.params;

  const share = await db.share.findUnique({
    where: { token },
    include: { items: { include: { file: true } } },
  });

  if (!share) {
    return Response.json({ ok: false, message: "分享不存在" }, { status: 404 });
  }

  if (share.expiresAt && share.expiresAt.getTime() < Date.now()) {
    return Response.json({ ok: false, message: "分享已过期" }, { status: 410 });
  }

  if (!share.allowPreview) {
    return Response.json({ ok: false, message: "当前分享未开放预览" }, { status: 403 });
  }

  if (share.passwordHash) {
    const verified = await isShareVerified(token);
    if (!verified) {
      return Response.json({ ok: false, message: "请先验证分享密码" }, { status: 401 });
    }
  }

  const item = share.items.find((entry) => entry.fileId === fileId);
  if (!item) {
    return Response.json({ ok: false, message: "文件不在分享范围内" }, { status: 404 });
  }

  const file = item.file;
  const variant = new URL(request.url).searchParams.get("variant");
  let response: Response;

  if (file.mimeType.startsWith("video/") && variant !== "original") {
    try {
      const previewPath = await ensureLowResolutionVideoPreview(file.storageKey);
      const previewMeta = getVideoPreviewResponseMeta(file.originalName);

      response = await createInlineAbsoluteFileResponse({
        request,
        absolutePath: previewPath,
        mimeType: previewMeta.mimeType,
        originalName: previewMeta.originalName,
      });
    } catch (error) {
      console.error("Failed to generate shared video preview", {
        shareId: share.id,
        fileId: file.id,
        storageKey: file.storageKey,
        error,
      });

      response = await createInlineFileResponse({
        request,
        storageKey: file.storageKey,
        mimeType: file.mimeType,
        originalName: file.originalName,
      });
    }
  } else {
    response = await createInlineFileResponse({
      request,
      storageKey: file.storageKey,
      mimeType: file.mimeType,
      originalName: file.originalName,
    });
  }

  const rangeHeader = request.headers.get("range");
  if (!rangeHeader || rangeHeader.startsWith("bytes=0-")) {
    await db.shareAccessLog.create({
      data: {
        shareId: share.id,
        action: "preview",
        userAgent: null,
        ip: null,
      },
    });
  }

  return response;
}
