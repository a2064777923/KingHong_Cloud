import fs from "node:fs/promises";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { resolveStoragePath } from "@/lib/files";

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await context.params;
  const file = await db.fileEntry.findFirst({ where: { id, ownerId: user.id } });

  if (!file) {
    return Response.json({ ok: false, message: "文件不存在" }, { status: 404 });
  }

  const buffer = await fs.readFile(resolveStoragePath(file.storageKey));

  return new Response(buffer, {
    headers: {
      "Content-Type": file.mimeType,
      "Content-Length": String(buffer.byteLength),
      "Content-Disposition": `inline; filename*=UTF-8''${encodeURIComponent(file.originalName)}`,
    },
  });
}
