import { UserRole } from "@prisma/client";
import { requireAdmin } from "@/lib/auth";
import { hashPassword } from "@/lib/crypto";
import { db } from "@/lib/db";
import { env } from "@/lib/env";
import { badRequest, ok } from "@/lib/http";
import { getRequestLogContext, writeSystemLog } from "@/lib/system-log";
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
  const admin = await requireAdmin();
  const payload = await request.json();
  const parsed = createUserSchema.safeParse(payload);
  if (!parsed.success) {
    await writeSystemLog({
      action: "admin.user.create",
      status: "failed",
      actorId: admin.id,
      actorUsername: admin.username,
      actorRole: admin.role,
      targetType: "user",
      detail: "用户参数不合法",
      metadata: { username: payload?.username, role: payload?.role },
      ...getRequestLogContext(request),
    });
    return badRequest("用户参数不合法");
  }

  const { username, password, role, maxUploadMb } = parsed.data;
  const exists = await db.user.findUnique({ where: { username } });
  if (exists) {
    await writeSystemLog({
      action: "admin.user.create",
      status: "failed",
      actorId: admin.id,
      actorUsername: admin.username,
      actorRole: admin.role,
      targetType: "user",
      targetId: exists.id,
      detail: "用户名已存在",
      metadata: { username, role },
      ...getRequestLogContext(request),
    });
    return badRequest("用户名已存在");
  }

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

  await writeSystemLog({
    action: "admin.user.create",
    actorId: admin.id,
    actorUsername: admin.username,
    actorRole: admin.role,
    targetType: "user",
    targetId: user.id,
    detail: `创建用户 ${user.username}`,
    metadata: {
      username: user.username,
      role: user.role,
      maxUploadBytes: user.maxUploadBytes ? Number(user.maxUploadBytes) : null,
    },
    ...getRequestLogContext(request),
  });

  return ok(user, 201);
}
