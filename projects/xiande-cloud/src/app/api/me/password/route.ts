import { requireUser } from "@/lib/auth";
import { hashPassword, verifyPassword } from "@/lib/crypto";
import { db } from "@/lib/db";
import { badRequest, ok } from "@/lib/http";
import { changePasswordSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const user = await requireUser();
  const payload = await request.json();
  const parsed = changePasswordSchema.safeParse(payload);
  if (!parsed.success) return badRequest("密码参数不合法");

  const valid = await verifyPassword(user.passwordHash, parsed.data.currentPassword);
  if (!valid) return badRequest("当前密码错误", 401);

  await db.user.update({
    where: { id: user.id },
    data: { passwordHash: await hashPassword(parsed.data.newPassword) },
  });

  return ok({ userId: user.id });
}
