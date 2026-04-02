"use client";

import { useMemo, useState } from "react";

export function UploadPanel({ folderId }: { folderId?: string | null }) {
  const [message, setMessage] = useState<string>("");
  const [busy, setBusy] = useState(false);
  const [progressText, setProgressText] = useState<string>("");
  const inputId = useMemo(() => `upload-input-${Math.random().toString(36).slice(2)}`, []);

  async function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    if (files.length === 0) return;

    setBusy(true);
    setMessage("");
    setProgressText(`准备上传 0 / ${files.length}`);

    const failed: string[] = [];

    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];
      const formData = new FormData();
      formData.append("file", file);
      if (folderId) {
        formData.append("folderId", folderId);
      }

      setProgressText(`上传中 ${index + 1} / ${files.length}：${file.name}`);

      try {
        const response = await fetch("/api/files/upload", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        if (!response.ok) {
          failed.push(result.message ? `${file.name}（${result.message}）` : file.name);
        }
      } catch {
        failed.push(file.name);
      }
    }

    setBusy(false);
    event.target.value = "";

    if (failed.length > 0) {
      const successCount = files.length - failed.length;
      setMessage(
        successCount > 0
          ? `已上传 ${successCount} 个，失败 ${failed.length} 个：${failed.join("、")}`
          : `上传失败：${failed.join("、")}`,
      );
      setProgressText("");
      if (successCount > 0) {
        window.location.reload();
      }
      return;
    }

    setMessage(`上传成功：共 ${files.length} 个文件`);
    setProgressText("");
    window.location.reload();
  }

  return (
    <div className="flex min-w-0 flex-col items-stretch gap-1.5 sm:gap-2">
      <label
        htmlFor={inputId}
        className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-medium text-slate-950 whitespace-nowrap"
      >
        {busy ? "上传中..." : "批量上传"}
      </label>
      <input id={inputId} type="file" className="hidden" onChange={onChange} disabled={busy} multiple />
      {progressText ? (
        <p className="max-w-[220px] text-[11px] leading-4 text-cyan-200 sm:max-w-none sm:text-xs">{progressText}</p>
      ) : null}
      {message ? <p className="max-w-[220px] text-[11px] leading-4 text-slate-300 sm:max-w-none sm:text-xs">{message}</p> : null}
    </div>
  );
}
