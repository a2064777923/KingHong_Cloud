import { Search, SlidersHorizontal } from "lucide-react";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { formatBytes } from "@/lib/files";
import { FileKindIcon } from "@/components/file-kind-icon";
import { formatDateTime } from "@/lib/date";
import { UploadPanel } from "@/components/upload-panel";
import { ChangePasswordPanel } from "@/components/change-password-panel";

export default async function AppPage() {
  const user = await requireUser();
  const [files, folders] = await Promise.all([
    db.fileEntry.findMany({
      where: { ownerId: user.id },
      orderBy: { createdAt: "desc" },
      take: 24,
    }),
    db.folder.findMany({
      where: { ownerId: user.id },
      orderBy: { createdAt: "desc" },
      take: 24,
    }),
  ]);

  return (
    <div className="space-y-6">
      <section className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-3">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            disabled
            placeholder="搜索文件"
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
          />
        </div>
        <div className="flex gap-3">
          <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm">
            <SlidersHorizontal className="h-4 w-4" />
            排序
          </button>
          <UploadPanel />
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">文件夹</h3>
              <span className="text-sm text-slate-400">{folders.length}</span>
            </div>
            <div className="mt-4 space-y-3">
              {folders.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-white/15 px-4 py-6 text-sm text-slate-300">
                  暂无文件夹
                </div>
              ) : (
                folders.map((folder) => (
                  <div key={folder.id} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <div className="text-sm font-medium">{folder.name}</div>
                    <div className="mt-1 text-xs text-slate-400">{folder.path}</div>
                  </div>
                ))
              )}
            </div>
          </div>

          <ChangePasswordPanel />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {files.length === 0 ? (
            <div className="col-span-full rounded-3xl border border-dashed border-white/15 bg-white/[0.04] p-8 text-sm text-slate-300">
              暂无文件
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
                <div className="mt-4 text-xs text-slate-400">{formatDateTime(file.createdAt)}</div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-sm">
                  <a href={`/api/files/${file.id}/preview`} target="_blank" className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center">预览</a>
                  <a href={`/api/files/${file.id}/download`} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center">下载</a>
                  <a href={`/app/shares`} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center">分享</a>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
