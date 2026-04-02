"use client";

import { ChevronDown, Download, Info, ShieldQuestion } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { PaginationBar } from "@/components/pagination-bar";
import { StatusBanner } from "@/components/status-banner";
import { readApiResult } from "@/lib/http";

type UserRecord = {
  id: string;
  username: string;
  role: "ADMIN" | "USER";
  isActive: boolean;
  maxUploadBytes: number | null;
  createdAt: string;
};

export function AdminUserPanel({
  initialUsers,
  page,
  pageSize,
  total,
  initialFlashMessage,
  todayLogExists,
}: {
  initialUsers: UserRecord[];
  page: number;
  pageSize: number;
  total: number;
  initialFlashMessage: string;
  todayLogExists: boolean;
}) {
  const router = useRouter();
  const [isRefreshing, startTransition] = useTransition();
  const [users, setUsers] = useState(initialUsers);
  const [status, setStatus] = useState<{ tone: "info" | "success" | "error" | "pending"; message: string } | null>(
    initialFlashMessage ? { tone: "success", message: initialFlashMessage } : null,
  );
  const [form, setForm] = useState({ username: "", password: "", role: "USER", maxUploadMb: "100" });
  const [creating, setCreating] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [resettingUserId, setResettingUserId] = useState<string | null>(null);

  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers]);

  useEffect(() => {
    if (initialFlashMessage) {
      setStatus({ tone: "success", message: initialFlashMessage });
    }
  }, [initialFlashMessage]);

  function openCreateConfirm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    if (!form.username.trim()) {
      setStatus({ tone: "error", message: "请先输入用户名" });
      return;
    }

    if (form.password.length < 6) {
      setStatus({ tone: "error", message: "初始密码至少 6 位" });
      return;
    }

    setConfirmOpen(true);
  }

  async function createUser() {
    setCreating(true);
    setStatus({ tone: "pending", message: `正在创建用户 ${form.username}...` });

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

    const result = await readApiResult<UserRecord>(response);
    setCreating(false);

    if (!response.ok) {
      setStatus({ tone: "error", message: result.message ?? "创建失败" });
      return;
    }

    const nextUser = result.data;
    if (nextUser) {
      setUsers((current) => [nextUser, ...current.filter((item) => item.id !== nextUser.id)]);
    }

    setForm({ username: "", password: "", role: "USER", maxUploadMb: "100" });
    setConfirmOpen(false);
    setStatus({ tone: "success", message: `用户 ${result.data?.username ?? form.username} 创建成功，正在同步列表...` });

    startTransition(() => {
      router.replace(`/admin?created=${encodeURIComponent(result.data?.username ?? form.username)}&page=1&pageSize=${pageSize}`);
      router.refresh();
    });
  }

  async function resetPassword(userId: string) {
    const newPassword = window.prompt("请输入新密码");
    if (!newPassword) return;

    setResettingUserId(userId);
    setStatus({ tone: "pending", message: "正在重置密码..." });

    const response = await fetch(`/api/admin/users/${userId}/password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPassword }),
    });

    const result = await readApiResult(response);
    setResettingUserId(null);
    setStatus({
      tone: response.ok ? "success" : "error",
      message: response.ok ? "密码已重置" : result.message ?? "重置失败",
    });
  }

  return (
    <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
      <form onSubmit={openCreateConfirm} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <h3 className="text-lg font-medium">新建用户</h3>
        <div className="mt-4 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">用户名</span>
            <input
              className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-300/40"
              placeholder="例如：demo_user"
              value={form.username}
              disabled={creating || isRefreshing}
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
              disabled={creating || isRefreshing}
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
                  disabled={creating || isRefreshing}
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
                disabled={form.role === "ADMIN" || creating || isRefreshing}
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

          <button
            disabled={creating || isRefreshing}
            className="w-full rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-medium text-slate-950 disabled:opacity-70"
          >
            {creating ? "创建中..." : isRefreshing ? "同步中..." : "创建用户"}
          </button>
          {status ? <StatusBanner tone={status.tone} message={status.message} /> : null}
          {isRefreshing ? <StatusBanner tone="pending" message="正在刷新管理员列表..." /> : null}
        </div>
      </form>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-medium">用户列表</h3>
          <a
            href="/api/admin/logs/today"
            className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm ${
              todayLogExists
                ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-100 hover:bg-cyan-400/15"
                : "border-white/10 bg-white/[0.04] text-slate-300"
            }`}
          >
            <Download className="h-4 w-4" />
            下载今日日志
          </a>
        </div>
        {!todayLogExists ? (
          <p className="mt-3 text-xs text-slate-400">今日日志文件尚未生成，产生操作后即可下载。</p>
        ) : null}
        <div className="mt-4 space-y-3">
          {users.map((user) => (
            <div key={user.id} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-medium">{user.username}</div>
                <div className="mt-1 text-xs text-slate-400">{user.role} · {user.isActive ? "启用" : "停用"}</div>
              </div>
              <button
                onClick={() => resetPassword(user.id)}
                disabled={resettingUserId === user.id}
                className="inline-flex h-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm disabled:opacity-70"
              >
                {resettingUserId === user.id ? "重置中..." : "重置密码"}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <PaginationBar page={page} pageSize={pageSize} total={total} pathname="/admin" />
        </div>
      </div>

      {confirmOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-6">
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-200">
                <ShieldQuestion className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-medium">确认创建用户</h4>
                <p className="mt-2 text-sm text-slate-300">
                  将创建账号 <span className="font-medium text-white">{form.username}</span>，
                  角色为 {form.role === "ADMIN" ? "管理员" : "普通用户"}。
                </p>
                {form.role === "USER" ? (
                  <p className="mt-2 text-sm text-slate-400">单文件上传上限：{form.maxUploadMb || "100"} MB</p>
                ) : null}
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setConfirmOpen(false)}
                disabled={creating}
                className="inline-flex h-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-slate-200 disabled:opacity-70"
              >
                取消
              </button>
              <button
                type="button"
                onClick={createUser}
                disabled={creating}
                className="inline-flex h-10 items-center justify-center rounded-2xl bg-cyan-400 px-4 text-sm font-medium text-slate-950 disabled:opacity-70"
              >
                {creating ? "创建中..." : "确认创建"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
