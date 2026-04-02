"use client";

import { formatUploadBytes, formatUploadSpeed, type UploadProgress } from "@/lib/upload-client";

export function UploadProgressIndicator({ progress }: { progress: UploadProgress | null }) {
  if (!progress) return null;

  const percentage = Math.round(progress.progress * 100);

  return (
    <div className="w-full max-w-[260px] rounded-2xl border border-cyan-400/20 bg-slate-950/60 p-2.5 sm:max-w-xs">
      <div className="flex items-center justify-between gap-2 text-[11px] leading-4 text-cyan-100 sm:text-xs">
        <span className="truncate">
          {progress.fileIndex} / {progress.totalFiles} · {progress.fileName}
        </span>
        <span>{percentage}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-cyan-400 transition-[width] duration-150" style={{ width: `${percentage}%` }} />
      </div>
      <div className="mt-2 flex items-center justify-between gap-2 text-[11px] leading-4 text-slate-400 sm:text-xs">
        <span>
          {formatUploadBytes(progress.loadedBytes)} / {formatUploadBytes(progress.totalBytes)}
        </span>
        <span>{formatUploadSpeed(progress.speedBytesPerSecond)}</span>
      </div>
    </div>
  );
}
