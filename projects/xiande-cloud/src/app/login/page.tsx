import { redirect } from "next/navigation";
import { authenticate, createSession, getCurrentUser } from "@/lib/auth";

async function loginAction(formData: FormData) {
  "use server";

  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const user = await authenticate(username, password);
  if (!user) {
    redirect("/login?error=1");
  }

  await createSession(user.id);
  redirect(user.role === "ADMIN" ? "/admin" : "/app");
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const currentUser = await getCurrentUser();
  if (currentUser) {
    redirect(currentUser.role === "ADMIN" ? "/admin" : "/app");
  }

  const params = await searchParams;
  const hasError = params.error === "1";

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Secure Login</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">登录到贤得慌又云里雾里</h1>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          使用你的账号进入专属文件空间。管理员首登后请尽快修改默认密码，不要给攻击者省事。
        </p>

        <form action={loginAction} className="mt-8 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">用户名</span>
            <input
              name="username"
              className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-300/40"
              placeholder="admin"
              required
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">密码</span>
            <input
              type="password"
              name="password"
              className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-300/40"
              placeholder="••••••••"
              required
            />
          </label>
          {hasError ? (
            <div className="rounded-2xl border border-rose-300/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
              登录失败：用户名或密码错误。
            </div>
          ) : null}
          <button className="w-full rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">
            登录
          </button>
        </form>
      </div>
    </main>
  );
}
