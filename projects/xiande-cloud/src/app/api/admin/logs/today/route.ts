import fs from "node:fs/promises";
import { requireAdmin } from "@/lib/auth";
import { getSystemLogPath, writeSystemLog } from "@/lib/system-log";

export async function GET(request: Request) {
  const user = await requireAdmin();
  const logPath = getSystemLogPath();
  const content = await fs
    .readFile(logPath, "utf8")
    .catch(() => `# ${new Date().toISOString().slice(0, 10)}\n今日暂无系统日志。\n`);

  await writeSystemLog({
    action: "admin.logs.download",
    actorId: user.id,
    actorUsername: user.username,
    actorRole: user.role,
    targetType: "system-log",
    targetId: logPath,
    detail: "下载今日日志",
    ...{
      ip: request.headers.get("x-forwarded-for"),
      userAgent: request.headers.get("user-agent"),
    },
  });

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(logPath.split("/").pop() ?? "today.log")}`,
    },
  });
}
