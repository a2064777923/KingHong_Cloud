"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FolderOption = {
  id: string;
  name: string;
  path: string;
};

export function FileMovePanel({
  fileId,
  currentFolderId,
  folders,
}: {
  fileId: string;
  currentFolderId: string | null;
  folders: FolderOption[];
}) {
  const [targetFolderId, setTargetFolderId] = useState(currentFolderId ?? "root");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function moveFile() {
    setBusy(true);
    setMessage("");

    const response = await fetch(`/api/files/${fileId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ folderId: targetFolderId === "root" ? null : targetFolderId }),
    });

    const result = await response.json();
    setBusy(false);

    if (!response.ok) {
      setMessage(result.message ?? "移动失败");
      return;
    }

    setMessage("文件已移动");
    window.location.reload();
  }

  return (
    <div className="mt-3 space-y-2">
      <div className="relative">
        <select
          value={targetFolderId}
          onChange={(e) => setTargetFolderId(e.target.value)}
          className="w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/50 px-3 py-2 pr-9 text-xs outline-none focus:border-cyan-300/40"
        >
          <option value="root">移动到根目录</option>
          {folders.map((folder) => (
            <option key={folder.id} value={folder.id}>
              {folder.path}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      </div>
      <button
        type="button"
        onClick={moveFile}
        disabled={busy}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300 hover:bg-white/8 disabled:opacity-60"
      >
        {busy ? "移动中..." : "移动文件"}
      </button>
      {message ? <p className="text-xs text-slate-300">{message}</p> : null}
    </div>
  );
}
