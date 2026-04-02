import Link from "next/link";
import { ChevronRight, Folder, Home } from "lucide-react";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { FileKind } from "@prisma/client";
import { AppShell } from "@/components/app-shell";
import { CreateFolderPanel } from "@/components/create-folder-panel";
import { FolderActions } from "@/components/folder-actions";
import { PaginationBar } from "@/components/pagination-bar";
import { FilePageClient } from "@/components/file-page-client";
import { FileBrowserToolbar } from "@/components/file-browser-toolbar";

type SortValue = "latest" | "oldest" | "name-asc" | "name-desc" | "size-desc" | "size-asc";

function resolveFileOrderBy(sort: SortValue) {
  switch (sort) {
    case "oldest":
      return { createdAt: "asc" as const };
    case "name-asc":
      return { originalName: "asc" as const };
    case "name-desc":
      return { originalName: "desc" as const };
    case "size-asc":
      return { sizeBytes: "asc" as const };
    case "size-desc":
      return { sizeBytes: "desc" as const };
    case "latest":
    default:
      return { createdAt: "desc" as const };
  }
}

function resolveFolderOrderBy(sort: SortValue) {
  switch (sort) {
    case "oldest":
      return { createdAt: "asc" as const };
    case "name-desc":
      return { name: "desc" as const };
    case "name-asc":
      return { name: "asc" as const };
    case "latest":
    case "size-asc":
    case "size-desc":
    default:
      return { createdAt: "desc" as const };
  }
}

export default async function AppPage({
  searchParams,
}: {
  searchParams?: Promise<{
    folder?: string;
    page?: string;
    pageSize?: string;
    q?: string;
    sort?: string;
  }>;
}) {
  const user = await requireUser();
  const params = (await searchParams) ?? {};
  const currentFolderId = params.folder ?? null;
  const page = Math.max(1, Number(params.page ?? "1") || 1);
  const pageSize = Math.min(24, Math.max(6, Number(params.pageSize ?? "12") || 12));
  const searchQuery = String(params.q ?? "").trim();
  const sort = (
    ["latest", "oldest", "name-asc", "name-desc", "size-desc", "size-asc"].includes(
      String(params.sort ?? ""),
    )
      ? params.sort
      : "latest"
  ) as SortValue;

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
      where: {
        ownerId: user.id,
        folderId: effectiveFolderId,
        ...(searchQuery
          ? {
              originalName: {
                contains: searchQuery,
              },
            }
          : {}),
      },
      orderBy: resolveFileOrderBy(sort),
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    db.folder.findMany({
      where: {
        ownerId: user.id,
        parentId: effectiveFolderId,
        ...(searchQuery
          ? {
              name: {
                contains: searchQuery,
              },
            }
          : {}),
      },
      orderBy: resolveFolderOrderBy(sort),
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
    db.fileEntry.count({
      where: {
        ownerId: user.id,
        folderId: effectiveFolderId,
        ...(searchQuery
          ? {
              originalName: {
                contains: searchQuery,
              },
            }
          : {}),
      },
    }),
    db.folder.count({
      where: {
        ownerId: user.id,
        parentId: effectiveFolderId,
        ...(searchQuery
          ? {
              name: {
                contains: searchQuery,
              },
            }
          : {}),
      },
    }),
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
        <FileBrowserToolbar
          folderId={effectiveFolderId}
          initialQuery={searchQuery}
          initialSort={sort}
        />

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
          query={{
            folder: effectiveFolderId ?? undefined,
            q: searchQuery || undefined,
            sort: sort !== "latest" ? sort : undefined,
          }}
        />
      </div>
    </AppShell>
  );
}
