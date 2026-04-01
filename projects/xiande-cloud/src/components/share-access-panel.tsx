"use client";

import { useState } from "react";

type ShareAccessPanelProps = {
  token: string;
  requiresPassword: boolean;
  initialVerified: boolean;
  children: React.ReactNode;
};

export function ShareAccessPanel({ token, requiresPassword, initialVerified, children }: ShareAccessPanelProps) {
  const [verified, setVerified] = useState(initialVerified || !requiresPassword);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function verifyShare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");

    const response = await fetch(`/api/shares/${token}/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const result = await response.json();
    setBusy(false);

    if (!response.ok) {
      setMessage(result.message ?? "验证失败");
      return;
    }

    setVerified(true);
    setMessage("验证成功");
  }

  if (!verified) {
    return (
      <form onSubmit={verifyShare} className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <h2 className="text-lg font-medium">输入分享密码</h2>
        <p className="mt-2 text-sm text-slate-300">该分享已设置访问密码，验证后才能预览或下载文件。</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="请输入分享密码"
          className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-300/40"
        />
        <button disabled={busy} className="mt-4 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 disabled:opacity-70">
          {busy ? "验证中..." : "验证密码"}
        </button>
        {message ? <p className="mt-3 text-sm text-slate-300">{message}</p> : null}
      </form>
    );
  }

  return <div className="mt-6">{children}</div>;
}
