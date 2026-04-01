import { verifyPassword } from "@/lib/crypto";
import { db } from "@/lib/db";
import { badRequest, ok } from "@/lib/http";
import { markShareVerified } from "@/lib/share-auth";

export async function POST(request: Request, context: { params: Promise<{ token: string }> }) {
  const { token } = await context.params;
  const body = await request.json();
  const password = String(body?.password ?? "");

  const share = await db.share.findUnique({ where: { token } });
  if (!share) return badRequest("分享不存在", 404);
  if (!share.passwordHash) {
    await markShareVerified(token);
    return ok({ verified: true });
  }

  const verified = await verifyPassword(share.passwordHash, password);
  if (!verified) return badRequest("分享密码错误", 401);

  await markShareVerified(token);
  return ok({ verified: true });
}
