"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { UploadPanel } from "@/components/upload-panel";
import { StatusBanner } from "@/components/status-banner";

const sortOptions = [
  { value: "latest", label: "最新上传" },
  { value: "oldest", label: "最早上传" },
  { value: "name-asc", label: "名称 A-Z" },
  { value: "name-desc", label: "名称 Z-A" },
  { value: "size-desc", label: "文件从大到小" },
  { value: "size-asc", label: "文件从小到大" },
] as const;

type SortValue = (typeof sortOptions)[number]["value"];

export function FileBrowserToolbar({
  folderId,
  initialQuery,
  initialSort,
}: {
  folderId: string | null;
  initialQuery: string;
  initialSort: SortValue;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState(initialQuery);
  const [sort, setSort] = useState<SortValue>(initialSort);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    setSort(initialSort);
  }, [initialSort]);

  function buildUrl(nextQuery: string, nextSort: SortValue) {
    const params = new URLSearchParams();

    if (folderId) {
      params.set("folder", folderId);
    }

    if (nextQuery.trim()) {
      params.set("q", nextQuery.trim());
    }

    if (nextSort !== "latest") {
      params.set("sort", nextSort);
    }

    return `/app${params.toString() ? `?${params.toString()}` : ""}`;
  }

  function apply(nextQuery: string, nextSort: SortValue) {
    startTransition(() => {
      router.replace(buildUrl(nextQuery, nextSort));
    });
  }

  return (
    <section className="space-y-3">
      <div className="flex flex-wrap items-center gap-3 lg:flex-nowrap">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            apply(query, sort);
          }}
          className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
        >
          <Search className="h-4 w-4 shrink-0 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="按文件名或文件夹名搜索"
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                apply("", sort);
              }}
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/8"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex min-w-[88px] items-center justify-center rounded-xl bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 disabled:opacity-70"
          >
            {isPending ? "搜索中..." : "搜索"}
          </button>
        </form>

        <div className="flex items-start gap-2 shrink-0">
          <label className="inline-flex h-[52px] items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-slate-200">
            <SlidersHorizontal className="h-4 w-4 shrink-0" />
            <select
              value={sort}
              onChange={(event) => {
                const nextSort = event.target.value as SortValue;
                setSort(nextSort);
                apply(query, nextSort);
              }}
              disabled={isPending}
              className="min-w-[132px] bg-transparent outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-slate-950 text-white">
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <UploadPanel folderId={folderId} compact />
        </div>
      </div>

      {isPending ? (
        <StatusBanner tone="pending" message="正在更新文件列表..." />
      ) : initialQuery ? (
        <StatusBanner tone="info" message={`当前筛选关键词：${initialQuery}`} />
      ) : null}
    </section>
  );
}
