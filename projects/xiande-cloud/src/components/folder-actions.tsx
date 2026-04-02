"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { StatusBanner } from "@/components/status-banner";
import { readApiResult } from "@/lib/http";

type FolderActionsProps = {
  folderId: string;
  folderName: string;
};

export function FolderActions({ folderId, folderName }: FolderActionsProps) {
  const router = useRouter();
  const [isRefreshing, startTransition] = useTransition();
  const [status, setStatus] = useState<{ tone: "success" | "error" | "pending"; message: string } | null>(null);
  const [busy, setBusy] = useState(false);

  async function renameFolder() {
    const nextName = window.prompt("新的文件夹名称", folderName)?.trim();
    if (!nextName || nextName === folderName) return;

    setBusy(true);
    setStatus({ tone: "pending", message: `正在重命名 ${folderName}...` });
    const response = await fetch("/api/folders", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: folderId, name: nextName }),
    });
    const result = await readApiResult(response);
    setBusy(false);

    if (!response.ok) {
      setStatus({ tone: "error", message: result.message ?? "重命名失败" });
      return;
    }

    setStatus({ tone: "success", message: "文件夹已重命名，正在刷新..." });
    startTransition(() => router.refresh());
  }

  async function deleteFolder() {
    const ok = window.confirm(`确认删除文件夹「${folderName}」？其下子文件夹中的记录也会一起删除。`);
    if (!ok) return;

    setBusy(true);
    setStatus({ tone: "pending", message: `正在删除 ${folderName}...` });
    const response = await fetch(`/api/folders?id=${encodeURIComponent(folderId)}`, {
      method: "DELETE",
    });
    const result = await readApiResult(response);
    setBusy(false);

    if (!response.ok) {
      setStatus({ tone: "error", message: result.message ?? "删除失败" });
      return;
    }

    setStatus({ tone: "success", message: "文件夹已删除，正在刷新..." });
    startTransition(() => router.refresh());
  }

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={renameFolder}
        disabled={busy || isRefreshing}
        className="inline-flex h-9 items-center rounded-2xl border border-white/10 bg-white/[0.04] px-3 text-xs text-slate-300 hover:bg-white/8 disabled:opacity-60"
      >
        重命名
      </button>
      <button
        type="button"
        onClick={deleteFolder}
        disabled={busy || isRefreshing}
        className="inline-flex h-9 items-center rounded-2xl border border-rose-300/20 bg-rose-400/10 px-3 text-xs text-rose-100 disabled:opacity-60"
      >
        删除
      </button>
      {status ? <StatusBanner tone={status.tone} message={status.message} className="w-full" /> : null}
    </div>
  );
}
