import { AppShell } from "@/components/app-shell";
import { ChangePasswordPanel } from "@/components/change-password-panel";
import { LogoutButton } from "@/components/logout-button";
import { logoutAction } from "@/app/actions";
import { requireUser } from "@/lib/auth";

export default async function SettingsPage() {
  const user = await requireUser();
  const roleLabel = user.role === "ADMIN" ? "管理员" : "普通成员";

  return (
    <AppShell title="账户设置" subtitle={user.username} pathname="/app/settings" isAdmin={user.role === "ADMIN"}>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <ChangePasswordPanel />

        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <h3 className="text-lg font-medium">登录与安全</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            退出入口放在设置页里，能减少误触，也不影响现有登录、上传和分享流程。
          </p>

          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <span>当前账号</span>
              <span className="font-medium text-white">{user.username}</span>
            </div>
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <span>账号角色</span>
              <span className="font-medium text-white">{roleLabel}</span>
            </div>
          </div>

          <form action={logoutAction} className="mt-5">
            <LogoutButton />
          </form>

          <p className="mt-3 text-xs leading-5 text-slate-500">
            仅退出当前设备会话；不会修改密码，也不会影响其他已登录设备。
          </p>
        </section>
      </div>
    </AppShell>
  );
}
