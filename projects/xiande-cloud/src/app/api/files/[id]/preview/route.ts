import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { createInlineAbsoluteFileResponse, createInlineFileResponse } from "@/lib/files";
import { getRequestLogContext, writeSystemLog } from "@/lib/system-log";
import { ensureLowResolutionVideoPreview, getVideoPreviewResponseMeta } from "@/lib/video-preview";

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await context.params;
  const file = await db.fileEntry.findFirst({ where: { id, ownerId: user.id } });

  if (!file) {
    return Response.json({ ok: false, message: "文件不存在" }, { status: 404 });
  }

  const variant = new URL(request.url).searchParams.get("variant");
  let response: Response | null = null;
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
      console.error("Failed to generate video preview", {
        fileId: file.id,
        storageKey: file.storageKey,
        error,
      });
    }
  }

  if (!response) {
    response = await createInlineFileResponse({
      request,
      storageKey: file.storageKey,
      mimeType: file.mimeType,
      originalName: file.originalName,
    });
  }

  const rangeHeader = request.headers.get("range");
  if (!rangeHeader || rangeHeader.startsWith("bytes=0-")) {
    await writeSystemLog({
      action: "file.preview",
      actorId: user.id,
      actorUsername: user.username,
      actorRole: user.role,
      targetType: "file",
      targetId: file.id,
      detail: `预览文件 ${file.originalName}`,
      metadata: { variant: variant ?? "default" },
      ...getRequestLogContext(request),
    });
  }

  return response;
}
