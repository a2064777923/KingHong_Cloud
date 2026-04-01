import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { badRequest, ok } from "@/lib/http";
import { env } from "@/lib/env";
import path from "node:path";
import fs from "node:fs/promises";

async function deleteFile(storageKey: string) {
  const filePath = path.resolve(process.cwd(), env.filesRoot, storageKey);
  try {
    await fs.unlink(filePath);
  } catch {
    // File may not exist, ignore
  }
}

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
    await deleteFile(file.storageKey);
    await db.fileEntry.delete({ where: { id: file.id } });
  }

  return ok({ deleted: files.length });
}