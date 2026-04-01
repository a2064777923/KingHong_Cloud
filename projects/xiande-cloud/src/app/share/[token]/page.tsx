import { notFound } from "next/navigation";
import { CalendarClock, Download, Eye, KeyRound } from "lucide-react";
import { db } from "@/lib/db";
import { formatDateTime } from "@/lib/date";
import { formatBytes } from "@/lib/files";
import { FileKindIcon } from "@/components/file-kind-icon";
import { ShareAccessPanel } from "@/components/share-access-panel";
import { isShareVerified } from "@/lib/share-auth";

export default async function SharePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;

  const share = await db.share.findUnique({
    where: { token },
    include: { items: { include: { file: true } } },
  });

  if (!share) notFound();

  const now = new Date();
  const expired = share.expiresAt ? share.expiresAt.getTime() < now.getTime() : false;
  const exhausted = share.maxDownloads !== null ? share.downloadCount >= share.maxDownloads : false;
  const verified = share.passwordHash ? await isShareVerified(token) : true;

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Shared Files</p>
            <h1 className="mt-2 text-3xl font-semibold">分享文件</h1>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1">
              <KeyRound className="h-3.5 w-3.5" />
              {share.passwordHash ? "需密码访问" : "免密码访问"}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1">
              <CalendarClock className="h-3.5 w-3.5" />
              {share.expiresAt ? formatDateTime(share.expiresAt) : "未设置失效时间"}
            </span>
          </div>
        </div>

        {expired || exhausted ? (
          <div className="mt-6 rounded-3xl border border-amber-300/20 bg-amber-400/10 px-4 py-4 text-sm text-amber-100">
            {expired ? "该分享已过期。" : "该分享的最大下载次数已用尽。"}
          </div>
        ) : (
          <ShareAccessPanel token={share.token} requiresPassword={Boolean(share.passwordHash)} initialVerified={verified}>
            <div className="grid gap-3">
              {share.items.map(({ file }) => (
                <article key={file.id} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-200">
                      <FileKindIcon kind={file.kind} />
                    </div>
                    <div>
                      <h2 className="text-sm font-medium">{file.originalName}</h2>
                      <p className="mt-1 text-xs text-slate-400">{formatBytes(file.sizeBytes)} · {file.mimeType}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {share.allowPreview ? (
                      <a href={`/api/shares/${share.token}/preview/${file.id}`} target="_blank" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm">
                        <Eye className="h-4 w-4" />
                        预览
                      </a>
                    ) : null}
                    <a href={`/api/shares/${share.token}/download/${file.id}`} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950">
                      <Download className="h-4 w-4" />
                      下载
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </ShareAccessPanel>
        )}
      </section>
    </main>
  );
}
