import { CalendarClock, KeyRound, Link2 } from "lucide-react";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function SharesPage() {
  const user = await requireUser();
  const shares = await db.share.findMany({
    where: { creatorId: user.id },
    include: { items: { include: { file: true } } },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return (
    <div className="space-y-4">
      {shares.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.04] p-8 text-sm text-slate-300">
          还没有任何分享链接。后续接入多选文件后，这里会统一展示分享状态、下载次数、密码保护和过期控制。
        </div>
      ) : (
        shares.map((share) => (
          <article key={share.id} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-cyan-200">
                  <Link2 className="h-4 w-4" />
                  <span className="text-sm">/share/{share.token}</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">包含 {share.items.length} 个文件，已下载 {share.downloadCount} 次。</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1">
                  <KeyRound className="h-3.5 w-3.5" />
                  {share.passwordHash ? "密码保护" : "公开链接"}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1">
                  <CalendarClock className="h-3.5 w-3.5" />
                  {share.expiresAt ? share.expiresAt.toLocaleString("zh-CN") : "永久有效"}
                </span>
              </div>
            </div>
          </article>
        ))
      )}
    </div>
  );
}
