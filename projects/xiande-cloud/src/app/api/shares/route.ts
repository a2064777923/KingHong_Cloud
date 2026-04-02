import { hashPassword, generateOpaqueToken } from "@/lib/crypto";
import { requireUser } from "@/lib/auth";
import { buildShareUrl } from "@/lib/public-url";
import { db } from "@/lib/db";
import { badRequest, ok } from "@/lib/http";
import { getRequestLogContext, writeSystemLog } from "@/lib/system-log";
import { createShareSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const user = await requireUser();
  const payload = await request.json();
  const parsed = createShareSchema.safeParse(payload);
  if (!parsed.success) return badRequest("分享参数不合法");

  const { fileIds, password, expiresAt, maxDownloads, allowPreview } = parsed.data;
  const files = await db.fileEntry.findMany({
    where: {
      id: { in: fileIds },
      ownerId: user.id,
    },
  });

  if (files.length !== fileIds.length) {
    return badRequest("存在无权限文件，无法分享", 403);
  }

  const share = await db.share.create({
    data: {
      creatorId: user.id,
      token: generateOpaqueToken(),
      passwordHash: password ? await hashPassword(password) : null,
      expiresAt: expiresAt ? new Date(expiresAt) : null,
      maxDownloads: maxDownloads ?? null,
      allowPreview: allowPreview ?? true,
      items: {
        create: fileIds.map((fileId) => ({ fileId })),
      },
    },
  });

  await writeSystemLog({
    action: "share.create",
    actorId: user.id,
    actorUsername: user.username,
    actorRole: user.role,
    targetType: "share",
    targetId: share.id,
    detail: `创建分享 ${share.token}`,
    metadata: {
      fileIds,
      allowPreview: share.allowPreview,
      maxDownloads: share.maxDownloads,
      expiresAt: share.expiresAt?.toISOString() ?? null,
      passwordProtected: Boolean(share.passwordHash),
    },
    ...getRequestLogContext(request),
  });

  return ok({
    id: share.id,
    token: share.token,
    url: buildShareUrl(share.token, request.headers),
  }, 201);
}

export async function DELETE(request: Request) {
  const user = await requireUser();
  const payload = (await request.json().catch(() => null)) as { shareIds?: unknown } | null;
  const shareIdsRaw = Array.isArray(payload?.shareIds) ? payload.shareIds : [];
  const shareIds = shareIdsRaw.filter(
    (value): value is string => typeof value === "string" && value.trim().length > 0,
  );

  if (shareIds.length === 0) {
    return badRequest("未选择分享链接");
  }

  const ownedShareCount = await db.share.count({
    where: {
      id: { in: shareIds },
      creatorId: user.id,
    },
  });

  if (ownedShareCount !== shareIds.length) {
    return badRequest("部分分享不存在或无权限", 403);
  }

  const result = await db.share.deleteMany({
    where: {
      id: { in: shareIds },
      creatorId: user.id,
    },
  });

  await writeSystemLog({
    action: "share.delete",
    actorId: user.id,
    actorUsername: user.username,
    actorRole: user.role,
    targetType: "share",
    detail: `删除 ${result.count} 个分享`,
    metadata: { shareIds },
    ...getRequestLogContext(request),
  });

  return ok({ deleted: result.count });
}
