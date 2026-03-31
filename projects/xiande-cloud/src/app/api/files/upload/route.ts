import crypto from "node:crypto";
import path from "node:path";
import fs from "node:fs/promises";
import { NextRequest } from "next/server";
import { FileKind } from "@/generated/prisma";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { env } from "@/lib/env";
import { detectFileKind, ensureDataDirs, resolveStoragePath } from "@/lib/files";
import { badRequest, ok } from "@/lib/http";

export async function POST(request: NextRequest) {
  const user = await requireUser();
  const formData = await request.formData();
  const file = formData.get("file");
  const folderId = String(formData.get("folderId") ?? "").trim() || null;

  if (!(file instanceof File)) {
    return badRequest("未收到文件");
  }

  if (user.role !== "ADMIN" && file.size > Number(env.maxUploadBytesUser)) {
    return badRequest("普通账号单文件大小不能超过 100MB", 413);
  }

  if (folderId) {
    const folder = await db.folder.findFirst({ where: { id: folderId, ownerId: user.id } });
    if (!folder) return badRequest("目标文件夹不存在", 404);
  }

  await ensureDataDirs();
  const ext = path.extname(file.name).replace(/^\./, "") || null;
  const storageKey = `${user.id}/${Date.now()}-${crypto.randomUUID()}${ext ? `.${ext}` : ""}`;
  const absolutePath = resolveStoragePath(storageKey);
  await fs.mkdir(path.dirname(absolutePath), { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(absolutePath, buffer);

  const checksumSha256 = crypto.createHash("sha256").update(buffer).digest("hex");
  const kind = detectFileKind(file.type || "application/octet-stream", ext) as FileKind;

  const record = await db.fileEntry.create({
    data: {
      ownerId: user.id,
      folderId,
      storageKey,
      originalName: file.name,
      extension: ext,
      mimeType: file.type || "application/octet-stream",
      sizeBytes: BigInt(file.size),
      checksumSha256,
      kind,
    },
  });

  return ok({
    id: record.id,
    originalName: record.originalName,
    sizeBytes: file.size,
    kind: record.kind,
  }, 201);
}
