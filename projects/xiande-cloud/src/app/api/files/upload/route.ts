import crypto from "node:crypto";
import path from "node:path";
import fsSync from "node:fs";
import fs from "node:fs/promises";
import { Readable, Transform } from "node:stream";
import { pipeline } from "node:stream/promises";
import { NextRequest } from "next/server";
import { FileKind } from "@prisma/client";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { env } from "@/lib/env";
import { detectFileKind, ensureDataDirs, formatBytes, resolveStoragePath } from "@/lib/files";
import { badRequest, ok } from "@/lib/http";

export async function POST(request: NextRequest) {
  const user = await requireUser();
  const formData = await request.formData();
  const file = formData.get("file");
  const folderId = String(formData.get("folderId") ?? "").trim() || null;

  if (!(file instanceof File)) {
    return badRequest("未收到文件");
  }

  const effectiveLimit = user.maxUploadBytes ?? (user.role === "ADMIN" ? env.maxUploadBytesAdmin : env.maxUploadBytesUser);
  if (file.size > Number(effectiveLimit)) {
    return badRequest(`单文件大小不能超过 ${formatBytes(effectiveLimit)}`, 413);
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

  const checksum = crypto.createHash("sha256");
  const hashStream = new Transform({
    transform(chunk, _encoding, callback) {
      checksum.update(chunk);
      callback(null, chunk);
    },
  });

  try {
    await pipeline(
      Readable.fromWeb(file.stream() as never),
      hashStream,
      fsSync.createWriteStream(absolutePath),
    );
  } catch (error) {
    await fs.rm(absolutePath, { force: true });
    throw error;
  }

  const checksumSha256 = checksum.digest("hex");
  const mimeType = file.type || "application/octet-stream";
  const kind = detectFileKind(mimeType, ext) as FileKind;

  const record = await db.fileEntry.create({
    data: {
      ownerId: user.id,
      folderId,
      storageKey,
      originalName: file.name,
      extension: ext,
      mimeType,
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
