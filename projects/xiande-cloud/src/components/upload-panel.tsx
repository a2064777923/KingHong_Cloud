"use client";

import { useState } from "react";

export function UploadPanel({ folderId }: { folderId?: string | null }) {
  const [message, setMessage] = useState<string>("");
  const [busy, setBusy] = useState(false);

  async function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setBusy(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);
    if (folderId) {
      formData.append("folderId", folderId);
    }

    const response = await fetch("/api/files/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    setBusy(false);

    if (!response.ok) {
      setMessage(result.message ?? "上传失败");
      return;
    }

    setMessage(`上传成功：${result.data.originalName}`);
    window.location.reload();
  }

  return (
    <div className="flex min-w-0 flex-col items-stretch gap-1.5 sm:gap-2">
      <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-medium text-slate-950 whitespace-nowrap">
        {busy ? "上传中..." : "上传"}
        <input type="file" className="hidden" onChange={onChange} disabled={busy} />
      </label>
      {message ? <p className="max-w-[180px] text-[11px] leading-4 text-slate-300 sm:max-w-none sm:text-xs">{message}</p> : null}
    </div>
  );
}
