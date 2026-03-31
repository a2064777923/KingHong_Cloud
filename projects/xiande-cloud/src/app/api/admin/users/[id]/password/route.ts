import { requireAdmin } from "@/lib/auth";
import { hashPassword } from "@/lib/crypto";
import { db } from "@/lib/db";
import { badRequest, ok } from "@/lib/http";
import { adminResetPasswordSchema } from "@/lib/validators";

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await context.params;
  const payload = await request.json();
  const parsed = adminResetPasswordSchema.safeParse({ ...payload, userId: id });
  if (!parsed.success) return badRequest("密码参数不合法");

  const user = await db.user.findUnique({ where: { id } });
  if (!user) return badRequest("用户不存在", 404);

  await db.user.update({
    where: { id },
    data: { passwordHash: await hashPassword(parsed.data.newPassword) },
  });

  return ok({ userId: id });
}
