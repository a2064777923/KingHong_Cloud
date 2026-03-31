import fs from "node:fs/promises";
import { db } from "@/lib/db";
import { resolveStoragePath } from "@/lib/files";

export async function GET(request: Request, context: { params: Promise<{ token: string; fileId: string }> }) {
  const { token, fileId } = await context.params;

  const share = await db.share.findUnique({
    where: { token },
    include: { items: { include: { file: true } } },
  });

  if (!share) {
    return Response.json({ ok: false, message: "分享不存在" }, { status: 404 });
  }

  if (share.expiresAt && share.expiresAt.getTime() < Date.now()) {
    return Response.json({ ok: false, message: "分享已过期" }, { status: 410 });
  }

  if (share.maxDownloads !== null && share.downloadCount >= share.maxDownloads) {
    return Response.json({ ok: false, message: "分享下载次数已用尽" }, { status: 410 });
  }

  const password = new URL(request.url).searchParams.get("password") ?? "";
  if (share.passwordHash) {
    const { verifyPassword } = await import("@/lib/crypto");
    const valid = await verifyPassword(share.passwordHash, password);
    if (!valid) {
      return Response.json({ ok: false, message: "分享密码错误" }, { status: 401 });
    }
  }

  const item = share.items.find((entry) => entry.fileId === fileId);
  if (!item) {
    return Response.json({ ok: false, message: "文件不在分享范围内" }, { status: 404 });
  }

  const file = item.file;
  const buffer = await fs.readFile(resolveStoragePath(file.storageKey));

  await db.share.update({
    where: { id: share.id },
    data: { downloadCount: { increment: 1 } },
  });

  await db.shareAccessLog.create({
    data: {
      shareId: share.id,
      action: "download",
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for"),
    },
  });

  return new Response(buffer, {
    headers: {
      "Content-Type": file.mimeType,
      "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(file.originalName)}`,
      "Content-Length": String(buffer.byteLength),
    },
  });
}
