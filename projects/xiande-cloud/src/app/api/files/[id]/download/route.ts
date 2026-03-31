import fs from "node:fs/promises";
import { NextRequest } from "next/server";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { resolveStoragePath } from "@/lib/files";

export async function GET(_request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await context.params;

  const file = await db.fileEntry.findFirst({ where: { id, ownerId: user.id } });
  if (!file) {
    return Response.json({ ok: false, message: "文件不存在" }, { status: 404 });
  }

  const absolutePath = resolveStoragePath(file.storageKey);
  const buffer = await fs.readFile(absolutePath);

  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": file.mimeType,
      "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(file.originalName)}`,
      "Content-Length": String(buffer.byteLength),
    },
  });
}
