import { requireAdmin } from "@/lib/auth";
import { hashPassword } from "@/lib/crypto";
import { db } from "@/lib/db";
import { badRequest, ok } from "@/lib/http";
import { getRequestLogContext, writeSystemLog } from "@/lib/system-log";
import { adminResetPasswordSchema } from "@/lib/validators";

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin();
  const { id } = await context.params;
  const payload = await request.json();
  const parsed = adminResetPasswordSchema.safeParse({ ...payload, userId: id });
  if (!parsed.success) {
    await writeSystemLog({
      action: "admin.user.reset-password",
      status: "failed",
      actorId: admin.id,
      actorUsername: admin.username,
      actorRole: admin.role,
      targetType: "user",
      targetId: id,
      detail: "密码参数不合法",
      ...getRequestLogContext(request),
    });
    return badRequest("密码参数不合法");
  }

  const user = await db.user.findUnique({ where: { id } });
  if (!user) {
    await writeSystemLog({
      action: "admin.user.reset-password",
      status: "failed",
      actorId: admin.id,
      actorUsername: admin.username,
      actorRole: admin.role,
      targetType: "user",
      targetId: id,
      detail: "用户不存在",
      ...getRequestLogContext(request),
    });
    return badRequest("用户不存在", 404);
  }

  await db.user.update({
    where: { id },
    data: { passwordHash: await hashPassword(parsed.data.newPassword) },
  });

  await writeSystemLog({
    action: "admin.user.reset-password",
    actorId: admin.id,
    actorUsername: admin.username,
    actorRole: admin.role,
    targetType: "user",
    targetId: user.id,
    detail: `重置用户 ${user.username} 密码`,
    ...getRequestLogContext(request),
  });

  return ok({ userId: id });
}
