import { hashPassword, generateOpaqueToken } from "@/lib/crypto";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { env } from "@/lib/env";
import { badRequest, ok } from "@/lib/http";
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

  return ok({
    id: share.id,
    token: share.token,
    url: `${env.appBaseUrl}/share/${share.token}`,
  }, 201);
}
