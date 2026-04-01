"use client";

import { useMemo, useState } from "react";

type ShareCreatePanelProps = {
  files: { id: string; originalName: string }[];
};

export function ShareCreatePanel({ files }: ShareCreatePanelProps) {
  const [open, setOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [password, setPassword] = useState("");
  const [maxDownloads, setMaxDownloads] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [allowPreview, setAllowPreview] = useState(true);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [shareUrl, setShareUrl] = useState("");

  const selectedFiles = useMemo(
    () => files.filter((file) => selectedIds.includes(file.id)),
    [files, selectedIds],
  );

  function toggleFile(id: string) {
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  async function createShare() {
    if (selectedIds.length === 0) {
      setMessage("请先至少选择一个文件");
      return;
    }

    setBusy(true);
    setMessage("");
    setShareUrl("");

    const response = await fetch("/api/shares", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fileIds: selectedIds,
        password,
        expiresAt,
        maxDownloads: maxDownloads ? Number(maxDownloads) : undefined,
        allowPreview,
      }),
    });

    const result = await response.json();
    setBusy(false);

    if (!response.ok) {
      setMessage(result.message ?? "创建分享失败");
      return;
    }

    setShareUrl(result.data.url);
    setMessage("分享链接已创建");
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-medium">创建分享</h3>
          <p className="mt-1 text-sm text-slate-300">多选文件后生成分享链接。</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200"
        >
          {open ? "收起" : "展开"}
        </button>
      </div>

      {open ? (
        <>
          <div className="mt-4 max-h-56 space-y-2 overflow-auto rounded-2xl border border-white/10 bg-slate-950/30 p-3">
            {files.length === 0 ? (
              <p className="text-sm text-slate-400">当前页没有可分享文件</p>
            ) : (
              files.map((file) => (
                <label key={file.id} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(file.id)}
                    onChange={() => toggleFile(file.id)}
                    className="h-4 w-4"
                  />
                  <span className="truncate">{file.originalName}</span>
                </label>
              ))
            )}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="分享密码（可选）"
              className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
            />
            <input
              value={maxDownloads}
              onChange={(e) => setMaxDownloads(e.target.value)}
              placeholder="最大下载次数（可选）"
              className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
            />
            <input
              type="datetime-local"
              value={expiresAt}
              onChange={(e) => setExpiresAt(e.target.value ? new Date(e.target.value).toISOString() : "")}
              className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm outline-none focus:border-cyan-300/40"
            />
            <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-200">
              <input type="checkbox" checked={allowPreview} onChange={(e) => setAllowPreview(e.target.checked)} className="h-4 w-4" />
              允许预览
            </label>
          </div>

          <button
            type="button"
            onClick={createShare}
            disabled={busy || files.length === 0}
            className="mt-4 w-full rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 disabled:opacity-70 sm:w-auto"
          >
            {busy ? "创建中..." : `创建分享（已选 ${selectedFiles.length} 个）`}
          </button>

          {message ? <p className="mt-3 text-sm text-slate-300">{message}</p> : null}
          {shareUrl ? (
            <div className="mt-3 rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-sm text-cyan-200 break-all">
              <div className="text-xs text-slate-300">分享链接</div>
              <div className="mt-1">{shareUrl}</div>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
