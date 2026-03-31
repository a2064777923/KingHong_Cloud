import { ReactNode } from "react";
import { AppShell } from "@/components/app-shell";
import { requireUser } from "@/lib/auth";

export default async function ProtectedLayout({ children }: { children: ReactNode }) {
  const user = await requireUser();
  const pathname = user.role === "ADMIN" ? "/admin" : "/app";

  return (
    <AppShell
      title={user.role === "ADMIN" ? "管理" : "文件"}
      subtitle={user.role === "ADMIN" ? `${user.username}` : `${user.username}`}
      pathname={pathname}
    >
      {children}
    </AppShell>
  );
}
