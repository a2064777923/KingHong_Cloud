"use client";

import { useState } from "react";

export function ChangePasswordPanel() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const response = await fetch("/api/me/password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentPassword, newPassword }),
    });

    const result = await response.json();
    setMessage(response.ok ? "密码修改成功" : result.message ?? "修改失败");
    if (response.ok) {
      setCurrentPassword("");
      setNewPassword("");
    }
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <h3 className="text-lg font-medium">修改密码</h3>
      <div className="mt-4 space-y-3">
        <input className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm outline-none" type="password" placeholder="当前密码" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
        <input className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm outline-none" type="password" placeholder="新密码" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <button className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm">提交</button>
        {message ? <p className="text-xs text-slate-300">{message}</p> : null}
      </div>
    </form>
  );
}
