import Link from "next/link";
import { ChevronRight, Folder, Home, Search, SlidersHorizontal } from "lucide-react";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { FileKind } from "@prisma/client";
import { UploadPanel } from "@/components/upload-panel";
import { AppShell } from "@/components/app-shell";
import { CreateFolderPanel } from "@/components/create-folder-panel";
import { FolderActions } from "@/components/folder-actions";
import { PaginationBar } from "@/components/pagination-bar";
import { FilePageClient } from "@/components/file-page-client";

export default async function AppPage({
  searchParams,
}: {
  searchParams?: Promise<{ folder?: string; page?: string; pageSize?: string }>;
}) {
  const user = await requireUser();
  const params = (await searchParams) ?? {};
  const currentFolderId = params.folder ?? null;
  const page = Math.max(1, Number(params.page ?? "1") || 1);
  const pageSize = Math.min(24, Math.max(6, Number(params.pageSize ?? "12") || 12));

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

  const [files, folders, breadcrumbFolders, fileCount, folderCount] = await Promise.all([
    db.fileEntry.findMany({
      where: { ownerId: user.id, folderId: effectiveFolderId },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    db.folder.findMany({
      where: { ownerId: user.id, parentId: effectiveFolderId },
      orderBy: { createdAt: "asc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
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
    db.fileEntry.count({ where: { ownerId: user.id, folderId: effectiveFolderId } }),
    db.folder.count({ where: { ownerId: user.id, parentId: effectiveFolderId } }),
  ]);

  const fileItems = files.map((file) => ({
    id: file.id,
    originalName: file.originalName,
    kind: file.kind as FileKind,
    mimeType: file.mimeType,
    sizeBytes: file.sizeBytes,
    createdAt: file.createdAt,
  }));

  return (
    <AppShell title="文件" subtitle={user.username} pathname="/app" isAdmin={user.role === "ADMIN"}>
      <div className="space-y-6">
        {/* Top toolbar */}
        <section className="flex flex-wrap items-center gap-3 lg:flex-nowrap">
          <div className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <Search className="h-4 w-4 text-slate-400 shrink-0" />
            <input
              disabled
              placeholder="搜索文件"
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
            />
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm whitespace-nowrap">
              <SlidersHorizontal className="h-4 w-4" />
              排序
            </button>
            <UploadPanel folderId={effectiveFolderId} />
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link href="/app" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 hover:bg-white/8">
              <Home className="h-4 w-4" />
              根目录
            </Link>
            {breadcrumbFolders.map((folder) => (
              <div key={folder.id} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-slate-500" />
                <Link href={`/app?folder=${folder.id}`} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 hover:bg-white/8">
                  {folder.name}
                </Link>
              </div>
            ))}
          </div>
          {currentFolder && (
            <Link href={breadcrumbFolders.length > 1 ? `/app?folder=${breadcrumbFolders[breadcrumbFolders.length - 2]?.id}` : "/app"} className="text-sm text-slate-400 hover:text-white">
              返回上一级
            </Link>
          )}
        </section>

        {/* Main content: sidebar + file area */}
        <section className="grid gap-6 xl:grid-cols-[280px_1fr] xl:items-start">
          {/* Left sidebar: folders */}
          <aside className="space-y-4 xl:sticky xl:top-4 xl:self-start">
            <CreateFolderPanel parentId={effectiveFolderId} />

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">文件夹</h3>
                <span className="text-sm text-slate-400">{folderCount}</span>
              </div>
              <div className="space-y-2">
                {folders.length === 0 ? (
                  <p className="text-sm text-slate-400">暂无文件夹</p>
                ) : (
                  folders.map((folder) => (
                    <div key={folder.id} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                      <Link href={`/app?folder=${folder.id}`} className="flex items-center justify-between gap-2 hover:text-white">
                        <div className="flex items-center gap-2 min-w-0">
                          <Folder className="h-4 w-4 text-cyan-300 shrink-0" />
                          <span className="truncate text-sm">{folder.name}</span>
                        </div>
                      </Link>
                      <FolderActions folderId={folder.id} folderName={folder.name} />
                    </div>
                  ))
                )}
              </div>
            </div>
          </aside>

          {/* Right: file list with batch operations */}
          <div className="min-w-0">
            <FilePageClient initialFiles={fileItems} folderId={effectiveFolderId} />
          </div>
        </section>

        <PaginationBar
          page={page}
          pageSize={pageSize}
          total={Math.max(fileCount, folderCount)}
          pathname="/app"
          query={{ folder: effectiveFolderId ?? undefined }}
        />
      </div>
    </AppShell>
  );
}
