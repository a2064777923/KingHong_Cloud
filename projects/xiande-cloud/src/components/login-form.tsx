"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();
    setBusy(false);

    if (!response.ok) {
      setMessage(result.message ?? "登录失败");
      return;
    }

    router.replace(result.data.redirectTo);
    router.refresh();
  }

  return (
    <form onSubmit={submit} className="mt-8 space-y-4">
      <label className="block">
        <span className="mb-2 block text-sm text-slate-300">用户名</span>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-300/40"
          placeholder="请输入用户名"
          required
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm text-slate-300">密码</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-300/40"
          placeholder="请输入密码"
          required
        />
      </label>
      {message ? (
        <div className="rounded-2xl border border-rose-300/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
          {message}
        </div>
      ) : null}
      <button disabled={busy} className="w-full rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300 disabled:opacity-70">
        {busy ? "登录中..." : "登录"}
      </button>
    </form>
  );
}
