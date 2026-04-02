"use client";

import { useId, useState } from "react";
import { UploadProgressIndicator } from "@/components/upload-progress-indicator";
import { type UploadProgress, uploadFilesSequentially } from "@/lib/upload-client";

export function UploadPanel({ folderId }: { folderId?: string | null }) {
  const [message, setMessage] = useState<string>("");
  const [busy, setBusy] = useState(false);
  const [progressText, setProgressText] = useState<string>("");
  const [uploadProgress, setUploadProgress] = useState<UploadProgress | null>(null);
  const inputId = useId();

  async function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    if (files.length === 0) return;

    setBusy(true);
    setMessage("");
    setUploadProgress(null);
    setProgressText(`准备上传 1 / ${files.length}`);

    const { failed, successCount } = await uploadFilesSequentially({
      files,
      folderId,
      onProgress: (progress) => {
        setUploadProgress(progress);
        setProgressText(`上传中 ${progress.fileIndex} / ${progress.totalFiles}`);
      },
    });

    setBusy(false);
    event.target.value = "";
    setUploadProgress(null);

    if (failed.length > 0) {
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
      <UploadProgressIndicator progress={uploadProgress} />
      {progressText ? (
        <p className="max-w-[260px] text-[11px] leading-4 text-cyan-200 sm:max-w-none sm:text-xs">{progressText}</p>
      ) : null}
      {message ? <p className="max-w-[260px] text-[11px] leading-4 text-slate-300 sm:max-w-none sm:text-xs">{message}</p> : null}
      <p className="max-w-[260px] text-[11px] leading-4 text-slate-500 sm:max-w-none sm:text-xs">手机端可一次选择多个文件；桌面端支持点击选择和拖拽上传。</p>
    </div>
  );
}
