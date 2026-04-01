import fs from "node:fs/promises";
import { db } from "@/lib/db";
import { resolveStoragePath } from "@/lib/files";
import { isShareVerified } from "@/lib/share-auth";

export async function GET(_request: Request, context: { params: Promise<{ token: string; fileId: string }> }) {
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

  if (!share.allowPreview) {
    return Response.json({ ok: false, message: "当前分享未开放预览" }, { status: 403 });
  }

  if (share.passwordHash) {
    const verified = await isShareVerified(token);
    if (!verified) {
      return Response.json({ ok: false, message: "请先验证分享密码" }, { status: 401 });
    }
  }

  const item = share.items.find((entry) => entry.fileId === fileId);
  if (!item) {
    return Response.json({ ok: false, message: "文件不在分享范围内" }, { status: 404 });
  }

  const file = item.file;
  const buffer = await fs.readFile(resolveStoragePath(file.storageKey));

  await db.shareAccessLog.create({
    data: {
      shareId: share.id,
      action: "preview",
      userAgent: null,
      ip: null,
    },
  });

  return new Response(buffer, {
    headers: {
      "Content-Type": file.mimeType,
      "Content-Length": String(buffer.byteLength),
      "Content-Disposition": `inline; filename*=UTF-8''${encodeURIComponent(file.originalName)}`,
    },
  });
}
