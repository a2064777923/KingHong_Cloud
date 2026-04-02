import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { createInlineAbsoluteFileResponse, createInlineFileResponse } from "@/lib/files";
import { ensureLowResolutionVideoPreview, getVideoPreviewResponseMeta } from "@/lib/video-preview";

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await context.params;
  const file = await db.fileEntry.findFirst({ where: { id, ownerId: user.id } });

  if (!file) {
    return Response.json({ ok: false, message: "文件不存在" }, { status: 404 });
  }

  const variant = new URL(request.url).searchParams.get("variant");
  if (file.mimeType.startsWith("video/") && variant !== "original") {
    try {
      const previewPath = await ensureLowResolutionVideoPreview(file.storageKey);
      const previewMeta = getVideoPreviewResponseMeta(file.originalName);

      return createInlineAbsoluteFileResponse({
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

  return createInlineFileResponse({
    request,
    storageKey: file.storageKey,
    mimeType: file.mimeType,
    originalName: file.originalName,
  });
}
