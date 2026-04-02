import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { createInlineFileResponse } from "@/lib/files";

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await context.params;
  const file = await db.fileEntry.findFirst({ where: { id, ownerId: user.id } });

  if (!file) {
    return Response.json({ ok: false, message: "文件不存在" }, { status: 404 });
  }

  return createInlineFileResponse({
    request,
    storageKey: file.storageKey,
    mimeType: file.mimeType,
    originalName: file.originalName,
  });
}
