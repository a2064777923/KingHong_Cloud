"use client";

import { useState } from "react";

export function UploadPanel() {
  const [message, setMessage] = useState<string>("");
  const [busy, setBusy] = useState(false);

  async function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setBusy(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);

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
    <div className="flex flex-col gap-2">
      <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-medium text-slate-950">
        {busy ? "上传中..." : "上传"}
        <input type="file" className="hidden" onChange={onChange} disabled={busy} />
      </label>
      {message ? <p className="text-xs text-slate-300">{message}</p> : null}
    </div>
  );
}
