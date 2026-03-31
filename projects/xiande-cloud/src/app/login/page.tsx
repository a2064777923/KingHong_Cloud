import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { LoginForm } from "@/components/login-form";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  const currentUser = await getCurrentUser();
  if (currentUser) {
    redirect("/app");
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Login</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">登录</h1>
        <p className="mt-3 text-sm leading-7 text-slate-300">请输入账号信息继续访问。</p>
        <LoginForm />
      </div>
    </main>
  );
}
