"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarClock, Check, Copy, Eye, Infinity, KeyRound, Link2, ShieldOff, Trash2, X } from "lucide-react";
import { copyText } from "@/lib/clipboard";
import { formatDateTime } from "@/lib/date";

type ShareItem = {
  id: string;
  token: string;
  url: string;
  createdAt: string;
  expiresAt: string | null;
  downloadCount: number;
  maxDownloads: number | null;
  allowPreview: boolean;
  passwordProtected: boolean;
  itemCount: number;
  fileNames: string[];
};

function ShareStatus({ share, nowMs }: { share: ShareItem; nowMs: number }) {
  const expired = share.expiresAt ? new Date(share.expiresAt).getTime() < nowMs : false;
  const exhausted = share.maxDownloads !== null && share.downloadCount >= share.maxDownloads;

  if (expired) {
    return <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 px-3 py-1 text-xs text-amber-200">已过期</span>;
  }

  if (exhausted) {
    return <span className="inline-flex items-center gap-1 rounded-full border border-rose-400/30 px-3 py-1 text-xs text-rose-200">次数已耗尽</span>;
  }

  return <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 px-3 py-1 text-xs text-emerald-200">生效中</span>;
}

export function SharesPageClient({
  initialShares,
  nowIso,
}: {
  initialShares: ShareItem[];
  nowIso: string;
}) {
  const router = useRouter();
  const [shares, setShares] = useState(initialShares);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const nowMs = new Date(nowIso).getTime();

  const allSelected = useMemo(
    () => shares.length > 0 && selectedIds.length === shares.length,
    [selectedIds.length, shares.length],
  );

  function toggleSelect(shareId: string) {
    setSelectedIds((current) =>
      current.includes(shareId) ? current.filter((item) => item !== shareId) : [...current, shareId],
    );
  }

  function toggleSelectAll() {
    setSelectedIds((current) => (current.length === shares.length ? [] : shares.map((share) => share.id)));
  }

  async function handleCopy(url: string) {
    const copied = await copyText(url);
    setMessage(copied ? "链接已复制到剪贴板" : "复制失败，请手动复制");
  }

  async function deleteShares(shareIds: string[]) {
    if (shareIds.length === 0) return;

    const confirmed = window.confirm(`确定要删除 ${shareIds.length} 个分享链接吗？删除后会立即失效。`);
    if (!confirmed) return;

    setBusy(true);
    setMessage("");

    try {
      const response = await fetch("/api/shares", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shareIds }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok) {
        setMessage(result?.message ?? "删除分享失败");
        return;
      }

      setShares((current) => current.filter((share) => !shareIds.includes(share.id)));
      setSelectedIds((current) => current.filter((id) => !shareIds.includes(id)));
      setMessage(`已删除 ${shareIds.length} 个分享链接`);
      router.refresh();
    } catch {
      setMessage("删除分享失败，请重试");
    } finally {
      setBusy(false);
    }
  }

  if (shares.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.04] p-8 text-sm text-slate-300">
        还没有任何分享链接。创建分享后，这里会显示完整链接、创建时间、下载次数和失效状态。
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {selectedIds.length > 0 ? (
        <div className="sticky top-3 z-20 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-cyan-400/30 bg-slate-950/90 px-4 py-3 shadow-lg shadow-cyan-900/20 backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-cyan-200">已选择 {selectedIds.length} 个分享</span>
            <button
              type="button"
              onClick={() => setSelectedIds([])}
              className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300 hover:bg-white/8"
            >
              <X className="h-3.5 w-3.5" />
              清空
            </button>
          </div>
          <button
            type="button"
            disabled={busy}
            onClick={() => deleteShares(selectedIds)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-2 text-sm text-red-300 hover:bg-red-400/20 disabled:opacity-60"
          >
            <Trash2 className="h-4 w-4" />
            多选删除
          </button>
        </div>
      ) : null}

      {message ? (
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-200">
          {message}
        </div>
      ) : null}

      <div className="rounded-3xl border border-white/10 bg-white/[0.04]">
        <div className="hidden grid-cols-[40px_1.2fr_1fr_140px_160px_180px] gap-4 border-b border-white/10 px-4 py-3 text-xs text-slate-400 lg:grid">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-600 bg-slate-800"
              checked={allSelected}
              onChange={toggleSelectAll}
            />
          </div>
          <div>完整链接</div>
          <div>分享信息</div>
          <div>创建时间</div>
          <div>失效时间</div>
          <div className="text-right">操作</div>
        </div>

        {shares.map((share) => (
          <article
            key={share.id}
            className="grid gap-4 border-b border-white/10 px-4 py-4 last:border-b-0 lg:grid-cols-[40px_1.2fr_1fr_140px_160px_180px]"
          >
            <div className="flex items-start pt-1">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-600 bg-slate-800"
                checked={selectedIds.includes(share.id)}
                onChange={() => toggleSelect(share.id)}
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2 text-cyan-200">
                <Link2 className="h-4 w-4 shrink-0" />
                <a href={share.url} target="_blank" rel="noreferrer" className="min-w-0 break-all text-sm hover:text-cyan-100">
                  {share.url}
                </a>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Token：<span className="break-all">{share.token}</span>
              </p>
            </div>

              <div className="space-y-2 text-sm text-slate-300">
              <div className="flex flex-wrap gap-2">
                <ShareStatus share={share} nowMs={nowMs} />
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-xs">
                  <KeyRound className="h-3.5 w-3.5" />
                  {share.passwordProtected ? "密码保护" : "公开链接"}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-xs">
                  {share.allowPreview ? <Eye className="h-3.5 w-3.5" /> : <ShieldOff className="h-3.5 w-3.5" />}
                  {share.allowPreview ? "允许预览" : "禁止预览"}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                包含 {share.itemCount} 个文件，已下载 {share.downloadCount} 次，
                {share.maxDownloads === null ? (
                  <span className="inline-flex items-center gap-1">
                    <Infinity className="h-3.5 w-3.5" />
                    不限次数
                  </span>
                ) : (
                  <span>最多 {share.maxDownloads} 次</span>
                )}
              </p>
              <p className="text-xs text-slate-500 break-all">
                文件：{share.fileNames.join("、")}
              </p>
            </div>

            <div className="text-xs text-slate-300">
              <div className="inline-flex items-center gap-1">
                <CalendarClock className="h-3.5 w-3.5" />
                {formatDateTime(share.createdAt)}
              </div>
            </div>

            <div className="text-xs text-slate-300">
              {share.expiresAt ? formatDateTime(share.expiresAt) : "永久有效"}
            </div>

            <div className="flex items-start gap-2 lg:justify-end">
              <button
                type="button"
                onClick={() => handleCopy(share.url)}
                className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs hover:bg-white/8"
              >
                <Copy className="h-3.5 w-3.5" />
                复制
              </button>
              <button
                type="button"
                disabled={busy}
                onClick={() => deleteShares([share.id])}
                className="inline-flex items-center gap-1 rounded-xl border border-red-400/30 bg-red-400/10 px-3 py-2 text-xs text-red-300 hover:bg-red-400/20 disabled:opacity-60"
              >
                <Trash2 className="h-3.5 w-3.5" />
                删除
              </button>
            </div>
          </article>
        ))}
      </div>

      {message === "链接已复制到剪贴板" ? (
        <div className="flex items-center gap-2 text-xs text-green-300">
          <Check className="h-3.5 w-3.5" />
          {message}
        </div>
      ) : null}
    </div>
  );
}
