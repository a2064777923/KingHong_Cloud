import { ReactNode } from "react";
import { AppShell } from "@/components/app-shell";
import { requireUser } from "@/lib/auth";

export default async function ProtectedLayout({ children }: { children: ReactNode }) {
  const user = await requireUser();
  const pathname = user.role === "ADMIN" ? "/admin" : "/app";

  return (
    <AppShell
      title={user.role === "ADMIN" ? "管理与控制" : "我的文件空间"}
      subtitle={
        user.role === "ADMIN"
          ? `当前登录：${user.username}。这里放管理员高频动作、账号维护、分享治理与系统运行概览。`
          : `当前登录：${user.username}。你可以浏览、上传、预览、搜索和分享自己有权限访问的文件。`
      }
      pathname={pathname}
    >
      {children}
    </AppShell>
  );
}
