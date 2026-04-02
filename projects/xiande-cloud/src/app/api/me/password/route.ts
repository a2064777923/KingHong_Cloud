import { requireUser } from "@/lib/auth";
import { hashPassword, verifyPassword } from "@/lib/crypto";
import { db } from "@/lib/db";
import { badRequest, ok } from "@/lib/http";
import { getRequestLogContext, writeSystemLog } from "@/lib/system-log";
import { changePasswordSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const user = await requireUser();
  const payload = await request.json();
  const parsed = changePasswordSchema.safeParse(payload);
  if (!parsed.success) {
    await writeSystemLog({
      action: "user.password.change",
      status: "failed",
      actorId: user.id,
      actorUsername: user.username,
      actorRole: user.role,
      targetType: "user",
      targetId: user.id,
      detail: "密码参数不合法",
      ...getRequestLogContext(request),
    });
    return badRequest("密码参数不合法");
  }

  const valid = await verifyPassword(user.passwordHash, parsed.data.currentPassword);
  if (!valid) {
    await writeSystemLog({
      action: "user.password.change",
      status: "failed",
      actorId: user.id,
      actorUsername: user.username,
      actorRole: user.role,
      targetType: "user",
      targetId: user.id,
      detail: "当前密码错误",
      ...getRequestLogContext(request),
    });
    return badRequest("当前密码错误", 401);
  }

  await db.user.update({
    where: { id: user.id },
    data: { passwordHash: await hashPassword(parsed.data.newPassword) },
  });

  await writeSystemLog({
    action: "user.password.change",
    actorId: user.id,
    actorUsername: user.username,
    actorRole: user.role,
    targetType: "user",
    targetId: user.id,
    detail: "修改本人密码",
    ...getRequestLogContext(request),
  });

  return ok({ userId: user.id });
}
