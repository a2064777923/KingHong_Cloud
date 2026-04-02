import { AppShell } from "@/components/app-shell";
import { ChangePasswordPanel } from "@/components/change-password-panel";
import { LogoutButton } from "@/components/logout-button";
import { logoutAction } from "@/app/actions";
import { requireUser } from "@/lib/auth";

export default async function SettingsPage() {
  const user = await requireUser();

  return (
    <AppShell title="账户设置" subtitle={user.username} pathname="/app/settings" isAdmin={user.role === "ADMIN"}>
      <div className="max-w-2xl space-y-4">
        <ChangePasswordPanel />
        <form action={logoutAction}>
          <LogoutButton />
        </form>
      </div>
    </AppShell>
  );
}
