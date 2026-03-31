"use client";

import { useState } from "react";

type FolderActionsProps = {
  folderId: string;
  folderName: string;
};

export function FolderActions({ folderId, folderName }: FolderActionsProps) {
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function renameFolder() {
    const nextName = window.prompt("新的文件夹名称", folderName)?.trim();
    if (!nextName || nextName === folderName) return;

    setBusy(true);
    setMessage("");
    const response = await fetch("/api/folders", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: folderId, name: nextName }),
    });
    const result = await response.json();
    setBusy(false);

    if (!response.ok) {
      setMessage(result.message ?? "重命名失败");
      return;
    }

    window.location.reload();
  }

  async function deleteFolder() {
    const ok = window.confirm(`确认删除文件夹「${folderName}」？其下子文件夹中的记录也会一起删除。`);
    if (!ok) return;

    setBusy(true);
    setMessage("");
    const response = await fetch(`/api/folders?id=${encodeURIComponent(folderId)}`, {
      method: "DELETE",
    });
    const result = await response.json();
    setBusy(false);

    if (!response.ok) {
      setMessage(result.message ?? "删除失败");
      return;
    }

    window.location.reload();
  }

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={renameFolder}
        disabled={busy}
        className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300 hover:bg-white/8 disabled:opacity-60"
      >
        重命名
      </button>
      <button
        type="button"
        onClick={deleteFolder}
        disabled={busy}
        className="rounded-2xl border border-rose-300/20 bg-rose-400/10 px-3 py-2 text-xs text-rose-100 disabled:opacity-60"
      >
        删除
      </button>
      {message ? <p className="w-full text-xs text-slate-300">{message}</p> : null}
    </div>
  );
}
