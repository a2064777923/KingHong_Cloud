import { Search, SlidersHorizontal, UploadCloud } from "lucide-react";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { formatBytes } from "@/lib/files";
import { FileKindIcon } from "@/components/file-kind-icon";

export default async function AppPage() {
  const user = await requireUser();
  const files = await db.fileEntry.findMany({
    where: { ownerId: user.id },
    orderBy: { createdAt: "desc" },
    take: 12,
  });

  return (
    <div className="space-y-6">
      <section className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-3">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            disabled
            placeholder="搜索文件、扩展名、类型、标签（原型阶段）"
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
          />
        </div>
        <div className="flex gap-3">
          <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm">
            <SlidersHorizontal className="h-4 w-4" />
            排序与筛选
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-medium text-slate-950">
            <UploadCloud className="h-4 w-4" />
            上传文件
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {files.length === 0 ? (
          <div className="col-span-full rounded-3xl border border-dashed border-white/15 bg-white/[0.04] p-8 text-sm text-slate-300">
            当前还没有文件。下一步我会接上真实上传、文件夹和预览逻辑，现在这里先给你看界面骨架。
          </div>
        ) : (
          files.map((file) => (
            <article key={file.id} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.06]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-200">
                    <FileKindIcon kind={file.kind} />
                  </div>
                  <div>
                    <h3 className="max-w-52 truncate text-sm font-medium">{file.originalName}</h3>
                    <p className="mt-1 text-xs text-slate-400">{file.mimeType}</p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                  {formatBytes(file.sizeBytes)}
                </span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 text-sm">
                <button className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2">预览</button>
                <button className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2">下载</button>
                <button className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2">分享</button>
              </div>
            </article>
          ))
        )}
      </section>
    </div>
  );
}
