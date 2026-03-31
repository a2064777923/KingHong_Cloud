import Link from "next/link";
import { ChevronRight, Folder, Home, Search, SlidersHorizontal } from "lucide-react";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { formatBytes } from "@/lib/files";
import { FileKindIcon } from "@/components/file-kind-icon";
import { formatDateTime } from "@/lib/date";
import { UploadPanel } from "@/components/upload-panel";
import { AppShell } from "@/components/app-shell";
import { CreateFolderPanel } from "@/components/create-folder-panel";
import { FolderActions } from "@/components/folder-actions";
import { FileMovePanel } from "@/components/file-move-panel";

export default async function AppPage({
  searchParams,
}: {
  searchParams?: Promise<{ folder?: string }>;
}) {
  const user = await requireUser();
  const params = (await searchParams) ?? {};
  const currentFolderId = params.folder ?? null;

  const currentFolder = currentFolderId
    ? await db.folder.findFirst({
        where: { id: currentFolderId, ownerId: user.id },
        select: { id: true, name: true, path: true },
      })
    : null;

  const effectiveFolderId = currentFolder?.id ?? null;
  const breadcrumbPaths = currentFolder
    ? currentFolder.path
        .split("/")
        .filter(Boolean)
        .map((_, index, parts) => `/${parts.slice(0, index + 1).join("/")}`)
    : [];

  const [files, folders, breadcrumbFolders, allFolders] = await Promise.all([
    db.fileEntry.findMany({
      where: { ownerId: user.id, folderId: effectiveFolderId },
      orderBy: { createdAt: "desc" },
      take: 24,
    }),
    db.folder.findMany({
      where: { ownerId: user.id, parentId: effectiveFolderId },
      orderBy: { createdAt: "asc" },
      take: 24,
    }),
    breadcrumbPaths.length
      ? db.folder.findMany({
          where: {
            ownerId: user.id,
            path: { in: breadcrumbPaths },
          },
          orderBy: { path: "asc" },
          select: { id: true, name: true, path: true },
        })
      : Promise.resolve([]),
    db.folder.findMany({
      where: { ownerId: user.id },
      orderBy: { path: "asc" },
      select: { id: true, name: true, path: true },
    }),
  ]);

  return (
    <AppShell title="文件" subtitle={user.username} pathname="/app" isAdmin={user.role === "ADMIN"}>
      <div className="space-y-6">
        <section className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              disabled
              placeholder="搜索文件（后续补）"
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
            />
          </div>
          <div className="flex gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm">
              <SlidersHorizontal className="h-4 w-4" />
              排序
            </button>
            <UploadPanel folderId={effectiveFolderId} />
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
              <Link href="/app" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 hover:bg-white/8">
                <Home className="h-4 w-4" />
                根目录
              </Link>
              {breadcrumbFolders.map((folder) => (
                <div key={folder.id} className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                  <Link href={`/app?folder=${folder.id}`} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 hover:bg-white/8">
                    {folder.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              {currentFolder ? (
                <Link href={breadcrumbFolders.length > 1 ? `/app?folder=${breadcrumbFolders[breadcrumbFolders.length - 2]?.id}` : "/app"} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 hover:bg-white/8">
                  返回上一级
                </Link>
              ) : null}
              <span>当前目录：{currentFolder?.path ?? "/"}</span>
            </div>
          </div>
        </section>

        <section className="grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <CreateFolderPanel parentId={effectiveFolderId} />

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">文件夹</h3>
                <span className="text-sm text-slate-400">{folders.length}</span>
              </div>
              <div className="mt-4 space-y-3">
                {folders.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-white/15 px-4 py-6 text-sm text-slate-300">
                    当前目录下暂无文件夹。你可以先新建一个，再把文件分层放进去。
                  </div>
                ) : (
                  folders.map((folder) => (
                    <div key={folder.id} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                      <Link href={`/app?folder=${folder.id}`} className="block transition hover:text-white">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="text-sm font-medium">{folder.name}</div>
                            <div className="mt-1 text-xs text-slate-400">{folder.path}</div>
                          </div>
                          <Folder className="h-4 w-4 text-slate-400" />
                        </div>
                      </Link>
                      <FolderActions folderId={folder.id} folderName={folder.name} />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {files.length === 0 ? (
              <div className="col-span-full rounded-3xl border border-dashed border-white/15 bg-white/[0.04] p-8 text-sm text-slate-300">
                当前目录下暂无文件
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
                    <a href={`/app/preview/${file.id}${effectiveFolderId ? `?folder=${effectiveFolderId}` : ""}`} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center">预览</a>
                    <a href={`/api/files/${file.id}/download`} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center">下载</a>
                    <a href={`/app/shares`} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center">分享</a>
                  </div>
                  <FileMovePanel fileId={file.id} currentFolderId={effectiveFolderId} folders={allFolders.filter((folder) => folder.id !== effectiveFolderId)} />
                </article>
              ))
            )}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
