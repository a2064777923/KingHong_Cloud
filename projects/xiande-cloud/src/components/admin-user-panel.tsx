"use client";

import { ChevronDown, Info } from "lucide-react";
import { useState } from "react";

type UserRecord = {
  id: string;
  username: string;
  role: "ADMIN" | "USER";
  isActive: boolean;
  maxUploadBytes: number | null;
  createdAt: string;
};

export function AdminUserPanel({ initialUsers }: { initialUsers: UserRecord[] }) {
  const [users, setUsers] = useState(initialUsers);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({ username: "", password: "", role: "USER", maxUploadMb: "100" });

  async function createUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const response = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
        role: form.role,
        maxUploadMb: form.role === "ADMIN" ? undefined : Number(form.maxUploadMb),
      }),
    });

    const result = await response.json();
    if (!response.ok) {
      setMessage(result.message ?? "创建失败");
      return;
    }

    setUsers([result.data, ...users]);
    setForm({ username: "", password: "", role: "USER", maxUploadMb: "100" });
    setMessage("用户创建成功");
  }

  async function resetPassword(userId: string) {
    const newPassword = window.prompt("请输入新密码");
    if (!newPassword) return;

    const response = await fetch(`/api/admin/users/${userId}/password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPassword }),
    });

    const result = await response.json();
    setMessage(response.ok ? "密码已重置" : result.message ?? "重置失败");
  }

  return (
    <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
      <form onSubmit={createUser} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <h3 className="text-lg font-medium">新建用户</h3>
        <div className="mt-4 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">用户名</span>
            <input
              className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-300/40"
              placeholder="例如：demo_user"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">初始密码</span>
            <input
              className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-300/40"
              placeholder="至少 6 位"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">用户角色</span>
              <div className="relative">
                <select
                  className="w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 pr-10 text-sm outline-none ring-0 focus:border-cyan-300/40"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value as "ADMIN" | "USER" })}
                >
                  <option value="USER">普通用户</option>
                  <option value="ADMIN">管理员</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">单文件上传上限（MB）</span>
              <input
                className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-300/40"
                placeholder="普通用户默认 100"
                value={form.maxUploadMb}
                onChange={(e) => setForm({ ...form, maxUploadMb: e.target.value })}
                disabled={form.role === "ADMIN"}
              />
            </label>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-xs leading-6 text-slate-300">
            <div className="flex items-start gap-2">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
              <div>
                <p>“单文件上传上限” 只对普通用户生效，默认值 100 代表单个文件最大 100MB。</p>
                <p>管理员不受该限制。</p>
              </div>
            </div>
          </div>

          <button className="w-full rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-medium text-slate-950">创建</button>
          {message ? <p className="text-xs text-slate-300">{message}</p> : null}
        </div>
      </form>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <h3 className="text-lg font-medium">用户列表</h3>
        <div className="mt-4 space-y-3">
          {users.map((user) => (
            <div key={user.id} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-medium">{user.username}</div>
                <div className="mt-1 text-xs text-slate-400">{user.role} · {user.isActive ? "启用" : "停用"}</div>
              </div>
              <button onClick={() => resetPassword(user.id)} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm">
                重置密码
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
