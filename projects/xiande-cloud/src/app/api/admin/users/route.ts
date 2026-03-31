import { UserRole } from "@prisma/client";
import { requireAdmin } from "@/lib/auth";
import { hashPassword } from "@/lib/crypto";
import { db } from "@/lib/db";
import { env } from "@/lib/env";
import { badRequest, ok } from "@/lib/http";
import { createUserSchema } from "@/lib/validators";

export async function GET() {
  await requireAdmin();
  const users = await db.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      username: true,
      role: true,
      isActive: true,
      maxUploadBytes: true,
      createdAt: true,
    },
  });
  return ok(users);
}

export async function POST(request: Request) {
  await requireAdmin();
  const payload = await request.json();
  const parsed = createUserSchema.safeParse(payload);
  if (!parsed.success) return badRequest("用户参数不合法");

  const { username, password, role, maxUploadMb } = parsed.data;
  const exists = await db.user.findUnique({ where: { username } });
  if (exists) return badRequest("用户名已存在");

  const user = await db.user.create({
    data: {
      username,
      passwordHash: await hashPassword(password),
      role: role as UserRole,
      maxUploadBytes:
        role === "ADMIN"
          ? null
          : BigInt((maxUploadMb ?? Math.floor(Number(env.maxUploadBytesUser) / (1024 * 1024))) * 1024 * 1024),
    },
    select: {
      id: true,
      username: true,
      role: true,
      isActive: true,
      maxUploadBytes: true,
      createdAt: true,
    },
  });

  return ok(user, 201);
}
