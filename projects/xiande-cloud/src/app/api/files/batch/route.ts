import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { deleteStoredFileArtifacts } from "@/lib/files";
import { badRequest, ok } from "@/lib/http";

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

  return ok({ deleted: files.length });
}
