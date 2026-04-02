import { authenticate, createSession } from "@/lib/auth";
import { badRequest, ok } from "@/lib/http";
import { getRequestLogContext, writeSystemLog } from "@/lib/system-log";
import { loginSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = loginSchema.safeParse(payload);
  if (!parsed.success) {
    await writeSystemLog({
      action: "auth.login",
      status: "failed",
      actorUsername: typeof payload?.username === "string" ? payload.username : "unknown",
      targetType: "session",
      detail: "用户名或密码格式不正确",
      ...getRequestLogContext(request),
    });
    return badRequest("用户名或密码格式不正确");
  }

  const user = await authenticate(parsed.data.username, parsed.data.password);
  if (!user) {
    await writeSystemLog({
      action: "auth.login",
      status: "failed",
      actorUsername: parsed.data.username,
      targetType: "session",
      detail: "用户名或密码错误",
      ...getRequestLogContext(request),
    });
    return badRequest("用户名或密码错误", 401);
  }

  await createSession(user.id);
  await writeSystemLog({
    action: "auth.login",
    actorId: user.id,
    actorUsername: user.username,
    actorRole: user.role,
    targetType: "session",
    detail: "登录成功",
    ...getRequestLogContext(request),
  });

  return ok({
    redirectTo: "/app",
  });
}
