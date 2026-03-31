import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function PreviewPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ folder?: string }>;
}) {
  const user = await requireUser();
  const { id } = await params;
  const qs = (await searchParams) ?? {};
  const backHref = qs.folder ? `/app?folder=${qs.folder}` : "/app";

  const file = await db.fileEntry.findFirst({
    where: { id, ownerId: user.id },
    select: {
      id: true,
      originalName: true,
      mimeType: true,
    },
  });

  if (!file) notFound();

  const isImage = file.mimeType.startsWith("image/");
  const isPdf = file.mimeType === "application/pdf";
  const isVideo = file.mimeType.startsWith("video/");
  const isAudio = file.mimeType.startsWith("audio/");
  const previewUrl = `/api/files/${file.id}/preview`;

  return (
    <AppShell title="文件预览" subtitle={file.originalName} pathname="/app" isAdmin={user.role === "ADMIN"}>
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4">
          <Link href={backHref} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm hover:bg-white/8">
            <ArrowLeft className="h-4 w-4" />
            返回文件列表
          </Link>
          <a href={previewUrl} target="_blank" className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm hover:bg-white/8">
            新窗口打开原始预览
          </a>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
          {isImage ? (
            <img src={previewUrl} alt={file.originalName} className="mx-auto max-h-[75vh] rounded-2xl" />
          ) : isPdf ? (
            <iframe src={previewUrl} title={file.originalName} className="h-[75vh] w-full rounded-2xl bg-white" />
          ) : isVideo ? (
            <video src={previewUrl} controls className="max-h-[75vh] w-full rounded-2xl bg-black" />
          ) : isAudio ? (
            <audio src={previewUrl} controls className="w-full" />
          ) : (
            <div className="rounded-2xl border border-dashed border-white/15 px-4 py-8 text-sm text-slate-300">
              当前文件类型暂不支持内嵌预览，请使用上方“新窗口打开原始预览”或直接下载查看。
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
