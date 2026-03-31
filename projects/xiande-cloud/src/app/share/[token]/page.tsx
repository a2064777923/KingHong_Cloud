import { notFound } from "next/navigation";
import { CalendarClock, Download, Eye, KeyRound } from "lucide-react";
import { db } from "@/lib/db";
import { formatBytes } from "@/lib/files";
import { FileKindIcon } from "@/components/file-kind-icon";

export default async function SharePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;

  if (token === "demo") {
    return <DemoSharePage />;
  }

  const share = await db.share.findUnique({
    where: { token },
    include: { items: { include: { file: true } } },
  });

  if (!share) notFound();

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Shared Files</p>
            <h1 className="mt-2 text-3xl font-semibold">分享文件</h1>
            <p className="mt-3 text-sm leading-7 text-slate-300">该页面面向外部访问者，强调清爽、可信、低认知负担。能预览就预览，不能预览就直接下载，别故作高深。</p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1">
              <KeyRound className="h-3.5 w-3.5" />
              {share.passwordHash ? "需密码访问" : "免密码访问"}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1">
              <CalendarClock className="h-3.5 w-3.5" />
              {share.expiresAt ? share.expiresAt.toLocaleString("zh-CN") : "未设置失效时间"}
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
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
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm">
                  <Eye className="h-4 w-4" />
                  预览
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950">
                  <Download className="h-4 w-4" />
                  下载
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function DemoSharePage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-cyan-300/15 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Demo Share</p>
        <h1 className="mt-2 text-3xl font-semibold">分享展示页原型</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
          这里模拟外部访问者看到的页面：入口清晰、主按钮明确、文件信息可扫一眼就懂。后续会接上分享密码校验、下载次数扣减、预览流与真实下载链路。
        </p>
      </section>
    </main>
  );
}
