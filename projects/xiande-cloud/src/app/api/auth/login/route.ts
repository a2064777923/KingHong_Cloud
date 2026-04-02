import { authenticate, createSession } from "@/lib/auth";
import { badRequest, ok } from "@/lib/http";
import { loginSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = loginSchema.safeParse(payload);
  if (!parsed.success) return badRequest("用户名或密码格式不正确");

  const user = await authenticate(parsed.data.username, parsed.data.password);
  if (!user) return badRequest("用户名或密码错误", 401);

  await createSession(user.id);

  return ok({
    redirectTo: "/app",
  });
}
