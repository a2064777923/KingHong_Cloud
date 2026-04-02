import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { badRequest, ok } from "@/lib/http";
import { getRequestLogContext, writeSystemLog } from "@/lib/system-log";

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await context.params;
  const payload = await request.json();
  const folderId = payload.folderId ? String(payload.folderId).trim() : null;

  const file = await db.fileEntry.findFirst({ where: { id, ownerId: user.id } });
  if (!file) return badRequest("文件不存在", 404);

  if (folderId) {
    const folder = await db.folder.findFirst({ where: { id: folderId, ownerId: user.id } });
    if (!folder) return badRequest("目标文件夹不存在", 404);
  }

  const updated = await db.fileEntry.update({
    where: { id: file.id },
    data: { folderId },
    select: {
      id: true,
      folderId: true,
    },
  });

  await writeSystemLog({
    action: "file.move",
    actorId: user.id,
    actorUsername: user.username,
    actorRole: user.role,
    targetType: "file",
    targetId: file.id,
    detail: `移动文件 ${file.originalName}`,
    metadata: { fromFolderId: file.folderId, toFolderId: folderId },
    ...getRequestLogContext(request),
  });

  return ok(updated);
}
