import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE_NAME } from "@/lib/constants";
import { signSessionToken, generateOpaqueToken, hashPassword, verifyPassword } from "@/lib/crypto";
import { db } from "@/lib/db";
import { env } from "@/lib/env";
import { UserRole } from "@prisma/client";

export async function ensureSeedAdmin() {
  const existing = await db.user.findUnique({
    where: { username: env.initialAdminUsername },
  });

  if (existing) return existing;

  const passwordHash = await hashPassword(env.initialAdminPassword);

  return db.user.create({
    data: {
      username: env.initialAdminUsername,
      passwordHash,
      role: UserRole.ADMIN,
      maxUploadBytes: null,
    },
  });
}

export async function createSession(userId: string) {
  const rawToken = generateOpaqueToken(32);
  const tokenHash = signSessionToken(rawToken);
  const now = new Date();
  const expiresAt = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 7);
  const headerList = await headers();

  await db.session.create({
    data: {
      userId,
      tokenHash,
      expiresAt,
      ip: headerList.get("x-forwarded-for") ?? null,
      userAgent: headerList.get("user-agent") ?? null,
    },
  });

  const cookieStore = await cookies();
  const forwardedProto = headerList.get("x-forwarded-proto");
  const isHttps = forwardedProto === "https";

  cookieStore.set(SESSION_COOKIE_NAME, rawToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: isHttps,
    expires: expiresAt,
    path: "/",
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  const rawToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (rawToken) {
    await db.session.deleteMany({
      where: { tokenHash: signSessionToken(rawToken) },
    });
  }
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function authenticate(username: string, password: string) {
  await ensureSeedAdmin();
  const user = await db.user.findUnique({ where: { username } });
  if (!user || !user.isActive) return null;
  const ok = await verifyPassword(user.passwordHash, password);
  if (!ok) return null;
  return user;
}

export async function getCurrentUser() {
  await ensureSeedAdmin();
  const cookieStore = await cookies();
  const rawToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!rawToken) return null;

  const tokenHash = signSessionToken(rawToken);
  const session = await db.session.findUnique({
    where: { tokenHash },
    include: { user: true },
  });

  if (!session) return null;
  if (session.expiresAt.getTime() < Date.now()) {
    await db.session.delete({ where: { id: session.id } });
    cookieStore.delete(SESSION_COOKIE_NAME);
    return null;
  }

  await db.session.update({
    where: { id: session.id },
    data: { lastSeenAt: new Date() },
  });

  return session.user;
}

export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}

export async function requireAdmin() {
  const user = await requireUser();
  if (user.role !== UserRole.ADMIN) redirect("/app");
  return user;
}
