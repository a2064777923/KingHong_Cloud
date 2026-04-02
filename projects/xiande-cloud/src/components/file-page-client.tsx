"use client";

import { useCallback, useEffect, useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { CloudUpload, Share2, Trash2, X, Copy, Check } from "lucide-react";
import { FileKindIcon } from "@/components/file-kind-icon";
import { UploadProgressIndicator } from "@/components/upload-progress-indicator";
import { StatusBanner } from "@/components/status-banner";
import { copyText } from "@/lib/clipboard";
import { type UploadProgress, uploadFilesSequentially } from "@/lib/upload-client";
import { readApiResult } from "@/lib/http";
import { FileKind } from "@prisma/client";

// Helper functions (inlined to avoid import chain with server code)
function formatBytes(size: bigint | number) {
  const value = typeof size === "bigint" ? Number(size) : size;
  if (value < 1024) return `${value} B`;
  const units = ["KB", "MB", "GB", "TB"];
  let current = value / 1024;
  let unitIndex = 0;
  while (current >= 1024 && unitIndex < units.length - 1) {
    current /= 1024;
    unitIndex++;
  }
  return `${current.toFixed(1)} ${units[unitIndex]}`;
}

function formatDateTime(date: Date | string) {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleString("zh-CN", { 
    year: "numeric", 
    month: "2-digit", 
    day: "2-digit", 
    hour: "2-digit", 
    minute: "2-digit" 
  });
}

type FileItem = {
  id: string;
  originalName: string;
  kind: FileKind;
  mimeType: string;
  sizeBytes: bigint | number;
  createdAt: Date | string;
};

interface BatchActionsBarProps {
  selectedCount: number;
  busy?: boolean;
  onClear: () => void;
  onDelete: () => void;
  onShare: () => void;
}

function BatchActionsBar({
  selectedCount,
  busy = false,
  onClear,
  onDelete,
  onShare,
}: BatchActionsBarProps) {
  if (selectedCount === 0) return null;

  return (
    <div className="sticky top-3 z-20 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-cyan-400/30 bg-slate-950/90 px-4 py-3 shadow-lg shadow-cyan-900/20 backdrop-blur">
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-cyan-200">已选择 {selectedCount} 个文件</span>
        <button
          onClick={onClear}
          disabled={busy}
          className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300 hover:bg-white/8"
        >
          <X className="h-3.5 w-3.5" />
          清空
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onShare}
          disabled={busy}
          className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-300 disabled:opacity-70"
        >
          <Share2 className="h-4 w-4" />
          批量分享
        </button>
        <button
          onClick={onDelete}
          disabled={busy}
          className="inline-flex items-center gap-1.5 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-2 text-sm text-red-300 hover:bg-red-400/20 disabled:opacity-70"
        >
          <Trash2 className="h-4 w-4" />
          {busy ? "删除中..." : "批量删除"}
        </button>
      </div>
    </div>
  );
}

interface BatchShareModalProps {
  fileIds: string[];
  onClose: () => void;
  onSuccess: (message: string) => void;
}

function BatchShareModal({ fileIds, onClose, onSuccess }: BatchShareModalProps) {
  const [password, setPassword] = useState("");
  const [maxDownloads, setMaxDownloads] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [allowPreview, setAllowPreview] = useState(true);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [shareUrl, setShareUrl] = useState("");

  async function createShare() {
    setBusy(true);
    setMessage("");
    setShareUrl("");

    try {
      const response = await fetch("/api/shares", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileIds,
          password: password || undefined,
          maxDownloads: maxDownloads ? Number(maxDownloads) : undefined,
          expiresAt: expiresAt ? new Date(expiresAt).toISOString() : undefined,
          allowPreview,
        }),
      });

      const result = await response.json();

      if (result.ok) {
        setShareUrl(result.data.url ?? `${window.location.origin}/share/${result.data.token}`);
        setMessage("分享链接已创建");
        onSuccess(`已创建 ${fileIds.length} 个文件的批量分享`);
      } else {
        setMessage(result.message || "创建失败");
      }
    } catch {
      setMessage("创建失败，请重试");
    } finally {
      setBusy(false);
    }
  }

  async function copyUrl() {
    if (!shareUrl) return;

    const copied = await copyText(shareUrl);
    setMessage(copied ? "链接已复制到剪贴板" : "复制失败，请手动复制");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-medium flex items-center gap-2">
            <Share2 className="h-5 w-5 text-cyan-400" />
            批量分享 {fileIds.length} 个文件
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-xl">
            <X className="h-5 w-5 text-slate-400" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-slate-300 mb-2">分享密码（可选）</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="设置密码保护"
              className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm outline-none focus:border-cyan-300/40"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-2">最大下载次数</label>
              <input
                type="number"
                value={maxDownloads}
                onChange={(e) => setMaxDownloads(e.target.value)}
                placeholder="不限制"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm outline-none focus:border-cyan-300/40"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-2">失效时间</label>
              <input
                type="datetime-local"
                value={expiresAt}
                onChange={(e) => setExpiresAt(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm outline-none focus:border-cyan-300/40"
              />
            </div>
          </div>

          <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-200 cursor-pointer">
            <input
              type="checkbox"
              checked={allowPreview}
              onChange={(e) => setAllowPreview(e.target.checked)}
              className="h-4 w-4"
            />
            允许预览
          </label>

          <button
            onClick={createShare}
            disabled={busy || fileIds.length === 0}
            className="w-full rounded-2xl bg-cyan-400 py-3 text-sm font-medium text-slate-950 disabled:opacity-50 hover:bg-cyan-300"
          >
            {busy ? "创建中..." : "创建分享链接"}
          </button>

          {message && !shareUrl && (
            <p className="text-sm text-red-300 text-center">{message}</p>
          )}

          {shareUrl && (
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <div className="text-xs text-slate-300 mb-2">分享链接</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 text-sm text-cyan-200 break-all">{shareUrl}</div>
                <button
                  type="button"
                  onClick={copyUrl}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 shrink-0"
                >
                  <Copy className="h-4 w-4 text-cyan-200" />
                </button>
              </div>
              {message === "链接已复制到剪贴板" && (
                <p className="text-xs text-green-300 mt-2 flex items-center gap-1">
                  <Check className="h-3 w-3" /> {message}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function FilePageClient({
  initialFiles,
  folderId,
}: {
  initialFiles: FileItem[];
  folderId: string | null;
}) {
  const router = useRouter();
  const [isRefreshing, startTransition] = useTransition();
  const [files, setFiles] = useState(initialFiles);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  const [uploadProgress, setUploadProgress] = useState<UploadProgress | null>(null);
  const [uploading, setUploading] = useState(false);
  const [deleteBusy, setDeleteBusy] = useState(false);
  const [status, setStatus] = useState<{ tone: "info" | "success" | "error" | "pending"; message: string } | null>(null);

  useEffect(() => {
    setFiles(initialFiles);
  }, [initialFiles]);

  const allSelected = useMemo(
    () => files.length > 0 && selectedIds.length === files.length,
    [files.length, selectedIds.length],
  );

  const toggleSelect = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      return next;
    });
  }, []);

  const toggleSelectAll = useCallback(() => {
    const allIds = files.map((f) => f.id);
    setSelectedIds((prev) => (prev.length === allIds.length ? [] : allIds));
  }, [files]);

  const handleClearSelection = useCallback(() => {
    setSelectedIds([]);
  }, []);

  const handleBatchDelete = useCallback(async () => {
    if (selectedIds.length === 0) return;
    const deletingIds = [...selectedIds];
    if (!confirm(`确定要删除选中的 ${deletingIds.length} 个文件吗？此操作不可恢复。`)) return;

    setDeleteBusy(true);
    setStatus({ tone: "pending", message: `正在删除 ${deletingIds.length} 个文件...` });

    try {
      const response = await fetch("/api/files/batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileIds: deletingIds }),
      });

      const result = await readApiResult<{ deleted: number }>(response);
      if (response.ok) {
        setFiles((prev) => prev.filter((f) => !deletingIds.includes(f.id)));
        setSelectedIds([]);
        setStatus({
          tone: "success",
          message: `已删除 ${result.data?.deleted ?? deletingIds.length} 个文件`,
        });
        startTransition(() => router.refresh());
      } else {
        setStatus({ tone: "error", message: result.message ?? "删除失败" });
      }
    } catch {
      setStatus({ tone: "error", message: "删除失败，请重试" });
    } finally {
      setDeleteBusy(false);
    }
  }, [router, selectedIds, startTransition]);

  const handleBatchShare = useCallback(() => {
    if (selectedIds.length > 0) {
      setShowShareModal(true);
      setStatus(null);
    }
  }, [selectedIds]);

  // Drag and drop upload
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length === 0) return;

    setUploading(true);
    setUploadMessage("");
    setUploadProgress(null);
    setStatus({ tone: "pending", message: `准备上传 ${droppedFiles.length} 个文件...` });

    const { failed, successCount } = await uploadFilesSequentially({
      files: droppedFiles,
      folderId,
      onProgress: setUploadProgress,
    });

    setUploading(false);
    setUploadProgress(null);

    if (failed.length > 0) {
      setUploadMessage(
        successCount > 0
          ? `已上传 ${successCount} 个，失败 ${failed.length} 个：${failed.join("、")}`
          : `上传失败：${failed.join("、")}`,
      );
      if (successCount > 0) {
        setStatus({ tone: "info", message: `已上传 ${successCount} 个文件，正在刷新列表...` });
        startTransition(() => router.refresh());
      }
      return;
    }

    try {
      setStatus({ tone: "success", message: `上传成功，共 ${droppedFiles.length} 个文件` });
      startTransition(() => router.refresh());
    } catch {
      setUploadMessage("上传失败");
    }
  }, [folderId, router, startTransition]);

  return (
    <div
      className={`relative min-h-[200px] rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition-colors ${
        dragOver ? "bg-cyan-400/10 border-cyan-400" : ""
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Drag overlay indicator */}
      {dragOver && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-3xl bg-black/40">
          <div className="text-center">
            <CloudUpload className="mx-auto h-12 w-12 text-cyan-400" />
            <p className="mt-2 text-cyan-200">松开鼠标上传文件</p>
          </div>
        </div>
      )}

      {/* Batch actions bar */}
      <BatchActionsBar
        selectedCount={selectedIds.length}
        busy={deleteBusy}
        onClear={handleClearSelection}
        onDelete={handleBatchDelete}
        onShare={handleBatchShare}
      />

      {selectedIds.length === 0 && files.length > 0 ? (
        <StatusBanner tone="info" message="先勾选文件，再使用顶部的批量分享或批量删除。" className="mt-4" />
      ) : null}

      {status ? <StatusBanner tone={status.tone} message={status.message} className="mt-4" /> : null}
      {isRefreshing ? <StatusBanner tone="pending" message="正在同步最新列表..." className="mt-4" /> : null}

      {(uploading || uploadProgress || uploadMessage) && (
        <div className="mt-4 flex flex-col gap-2">
          <UploadProgressIndicator progress={uploadProgress} />
          {uploading ? <p className="text-xs text-cyan-200">正在上传拖拽文件…</p> : null}
          {uploadMessage ? <p className="text-xs text-slate-300">{uploadMessage}</p> : null}
        </div>
      )}

      {/* Desktop Table */}
      <div className="hidden lg:block mt-4">
        <div className="grid grid-cols-[40px_1fr_140px_100px_160px_180px] gap-4 border-b border-white/10 px-4 py-2 text-xs text-slate-400">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-600 bg-slate-800"
              checked={allSelected}
              onChange={toggleSelectAll}
            />
          </div>
          <div>文件名</div>
          <div>类型</div>
          <div>大小</div>
          <div>上传时间</div>
          <div className="text-right">操作</div>
        </div>

        {files.length === 0 ? (
          <div className="px-4 py-8 text-center text-sm text-slate-400">
            当前目录下暂无文件
          </div>
        ) : (
          files.map((file) => (
            <div
              key={file.id}
              className="grid grid-cols-[40px_1fr_140px_100px_160px_180px] gap-4 border-b border-white/10 px-4 py-3 text-sm hover:bg-white/[0.04] transition"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-600 bg-slate-800"
                  checked={selectedIds.includes(file.id)}
                  onChange={() => toggleSelect(file.id)}
                />
              </div>
              <div className="flex items-center gap-3 min-w-0">
                <div className="rounded-lg bg-cyan-400/10 p-1.5 text-cyan-200">
                  <FileKindIcon kind={file.kind} />
                </div>
                <span className="truncate">{file.originalName}</span>
              </div>
              <div className="flex items-center text-slate-400 text-xs">{file.mimeType}</div>
              <div className="flex items-center text-slate-300">{formatBytes(file.sizeBytes)}</div>
              <div className="flex items-center text-slate-400 text-xs">{formatDateTime(file.createdAt)}</div>
              <div className="flex items-center justify-end gap-2 self-center">
                <a
                  href={`/app/preview/${file.id}${folderId ? `?folder=${folderId}` : ""}`}
                  className="inline-flex h-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-3 text-xs hover:bg-white/8"
                >
                  预览
                </a>
                <a
                  href={`/api/files/${file.id}/download`}
                  className="inline-flex h-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-3 text-xs hover:bg-white/8"
                >
                  下载
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden grid gap-3 mt-4 md:grid-cols-2">
        {files.length === 0 ? (
          <div className="col-span-full rounded-2xl border border-dashed border-white/15 bg-white/[0.04] p-6 text-sm text-slate-300 text-center">
            当前目录下暂无文件
          </div>
        ) : (
          files.map((file) => (
            <article
              key={file.id}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-600 bg-slate-800 shrink-0"
                    checked={selectedIds.includes(file.id)}
                    onChange={() => toggleSelect(file.id)}
                  />
                  <div className="rounded-lg bg-cyan-400/10 p-1.5 text-cyan-200">
                    <FileKindIcon kind={file.kind} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-medium">{file.originalName}</h3>
                    <p className="text-[11px] text-slate-400">{formatBytes(file.sizeBytes)}</p>
                    <p className="mt-1 text-[11px] text-slate-500">上传于 {formatDateTime(file.createdAt)}</p>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex gap-2 text-xs">
                <a
                  href={`/app/preview/${file.id}${folderId ? `?folder=${folderId}` : ""}`}
                  className="inline-flex h-10 flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-center"
                >
                  预览
                </a>
                <a
                  href={`/api/files/${file.id}/download`}
                  className="inline-flex h-10 flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-center"
                >
                  下载
                </a>
              </div>
            </article>
          ))
        )}
      </div>

      {/* Share modal */}
      {showShareModal && (
        <BatchShareModal
          fileIds={selectedIds}
          onClose={() => setShowShareModal(false)}
          onSuccess={(message) => setStatus({ tone: "success", message })}
        />
      )}
    </div>
  );
}
