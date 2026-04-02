import { verifyPassword } from "@/lib/crypto";
import { db } from "@/lib/db";
import { badRequest, ok } from "@/lib/http";
import { markShareVerified } from "@/lib/share-auth";
import { getRequestLogContext, writeSystemLog } from "@/lib/system-log";

export async function POST(request: Request, context: { params: Promise<{ token: string }> }) {
  const { token } = await context.params;
  const body = await request.json();
  const password = String(body?.password ?? "");

  const share = await db.share.findUnique({ where: { token } });
  if (!share) return badRequest("分享不存在", 404);
  if (!share.passwordHash) {
    await markShareVerified(token);
    await writeSystemLog({
      action: "share.verify",
      actorUsername: "anonymous-share",
      targetType: "share",
      targetId: share.id,
      detail: `验证公开分享 ${share.token}`,
      ...getRequestLogContext(request),
    });
    return ok({ verified: true });
  }

  const verified = await verifyPassword(share.passwordHash, password);
  if (!verified) {
    await writeSystemLog({
      action: "share.verify",
      status: "failed",
      actorUsername: "anonymous-share",
      targetType: "share",
      targetId: share.id,
      detail: `分享 ${share.token} 密码错误`,
      ...getRequestLogContext(request),
    });
    return badRequest("分享密码错误", 401);
  }

  await markShareVerified(token);
  await writeSystemLog({
    action: "share.verify",
    actorUsername: "anonymous-share",
    targetType: "share",
    targetId: share.id,
    detail: `通过密码验证分享 ${share.token}`,
    ...getRequestLogContext(request),
  });
  return ok({ verified: true });
}
