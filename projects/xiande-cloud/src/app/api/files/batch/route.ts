import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { deleteStoredFileArtifacts } from "@/lib/files";
import { badRequest, ok } from "@/lib/http";
import { getRequestLogContext, writeSystemLog } from "@/lib/system-log";

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json();
  const { fileIds } = body;

  if (!Array.isArray(fileIds) || fileIds.length === 0) {
    return badRequest("未选择文件");
  }

  // Verify ownership and delete
  const files = await db.fileEntry.findMany({
    where: {
      id: { in: fileIds },
      ownerId: user.id,
    },
  });

  if (files.length !== fileIds.length) {
    return badRequest("部分文件不存在或无权限");
  }

  // Delete each file
  for (const file of files) {
    await deleteStoredFileArtifacts(file.storageKey);
    await db.fileEntry.delete({ where: { id: file.id } });
  }

  await writeSystemLog({
    action: "file.batch-delete",
    actorId: user.id,
    actorUsername: user.username,
    actorRole: user.role,
    targetType: "file",
    detail: `批量删除 ${files.length} 个文件`,
    metadata: {
      fileIds: files.map((file) => file.id),
      fileNames: files.map((file) => file.originalName),
    },
    ...getRequestLogContext(request),
  });

  return ok({ deleted: files.length });
}
