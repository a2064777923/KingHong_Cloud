"use client";

import type { ApiResult } from "@/lib/http";

export type UploadProgress = {
  fileIndex: number;
  totalFiles: number;
  fileName: string;
  loadedBytes: number;
  totalBytes: number;
  progress: number;
  speedBytesPerSecond: number;
};

function formatBytes(size: number) {
  if (!Number.isFinite(size) || size <= 0) return "0 B";
  if (size < 1024) return `${Math.round(size)} B`;

  const units = ["KB", "MB", "GB", "TB"];
  let current = size / 1024;
  let unitIndex = 0;

  while (current >= 1024 && unitIndex < units.length - 1) {
    current /= 1024;
    unitIndex += 1;
  }

  return `${current.toFixed(current >= 10 ? 0 : 1)} ${units[unitIndex]}`;
}

export function formatUploadBytes(size: number) {
  return formatBytes(size);
}

export function formatUploadSpeed(speedBytesPerSecond: number) {
  return `${formatBytes(speedBytesPerSecond)}/s`;
}

function parseXhrResult(xhr: XMLHttpRequest): ApiResult {
  const contentType = xhr.getResponseHeader("content-type") ?? "";
  const responseText = xhr.responseText?.trim() ?? "";

  if (contentType.includes("application/json") && responseText) {
    try {
      return JSON.parse(responseText) as ApiResult;
    } catch {
      return {
        ok: xhr.status >= 200 && xhr.status < 300,
        message: responseText || `请求失败（${xhr.status}）`,
      };
    }
  }

  return {
    ok: xhr.status >= 200 && xhr.status < 300,
    message: responseText || `请求失败（${xhr.status || "网络错误"}）`,
  };
}

function uploadSingleFile({
  file,
  folderId,
  fileIndex,
  totalFiles,
  onProgress,
}: {
  file: File;
  folderId?: string | null;
  fileIndex: number;
  totalFiles: number;
  onProgress?: (progress: UploadProgress) => void;
}) {
  return new Promise<{ ok: boolean; result: ApiResult }>((resolve) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    const totalBytes = file.size;
    const startedAt = performance.now();

    formData.append("file", file);
    if (folderId) {
      formData.append("folderId", folderId);
    }

    const emitProgress = (loadedBytes: number, overrideTotalBytes?: number) => {
      const safeTotalBytes = Math.max(overrideTotalBytes ?? totalBytes, totalBytes, 1);
      const elapsedMs = Math.max(performance.now() - startedAt, 1);
      onProgress?.({
        fileIndex,
        totalFiles,
        fileName: file.name,
        loadedBytes,
        totalBytes: safeTotalBytes,
        progress: Math.min(loadedBytes / safeTotalBytes, 1),
        speedBytesPerSecond: (loadedBytes * 1000) / elapsedMs,
      });
    };

    emitProgress(0, totalBytes);

    xhr.upload.addEventListener("progress", (event) => {
      const knownTotalBytes = event.lengthComputable ? event.total : totalBytes;
      emitProgress(event.loaded, knownTotalBytes);
    });

    xhr.addEventListener("load", () => {
      emitProgress(totalBytes, totalBytes);
      resolve({
        ok: xhr.status >= 200 && xhr.status < 300,
        result: parseXhrResult(xhr),
      });
    });

    xhr.addEventListener("error", () => {
      resolve({
        ok: false,
        result: {
          ok: false,
          message: "网络错误，请重试",
        },
      });
    });

    xhr.open("POST", "/api/files/upload");
    xhr.send(formData);
  });
}

export async function uploadFilesSequentially({
  files,
  folderId,
  onProgress,
}: {
  files: File[];
  folderId?: string | null;
  onProgress?: (progress: UploadProgress) => void;
}) {
  const failed: string[] = [];
  let successCount = 0;

  for (let index = 0; index < files.length; index += 1) {
    const file = files[index];
    const { ok, result } = await uploadSingleFile({
      file,
      folderId,
      fileIndex: index + 1,
      totalFiles: files.length,
      onProgress,
    });

    if (ok) {
      successCount += 1;
      continue;
    }

    failed.push(result.message ? `${file.name}（${result.message}）` : file.name);
  }

  return { failed, successCount };
}
