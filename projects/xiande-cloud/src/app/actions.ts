"use server";

import { redirect } from "next/navigation";
import { clearSession, getCurrentUser } from "@/lib/auth";
import { writeSystemLog } from "@/lib/system-log";

export async function logoutAction() {
  const user = await getCurrentUser();
  await clearSession();
  if (user) {
    await writeSystemLog({
      action: "auth.logout",
      actorId: user.id,
      actorUsername: user.username,
      actorRole: user.role,
      targetType: "session",
      detail: "退出登录",
    });
  }
  redirect("/login");
}
