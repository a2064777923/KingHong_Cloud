import Link from "next/link";

type PaginationBarProps = {
  page: number;
  pageSize: number;
  total: number;
  pathname: string;
  query?: Record<string, string | number | undefined | null>;
};

function buildHref(
  pathname: string,
  page: number,
  pageSize: number,
  query: Record<string, string | number | undefined | null> = {},
) {
  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.set(key, String(value));
    }
  });
  params.set("page", String(page));
  params.set("pageSize", String(pageSize));
  return `${pathname}?${params.toString()}`;
}

export function PaginationBar({ page, pageSize, total, pathname, query }: PaginationBarProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
      <div>
        第 {page} / {totalPages} 页 · 共 {total} 条
      </div>
      <div className="flex gap-2">
        <Link
          href={buildHref(pathname, Math.max(1, page - 1), pageSize, query)}
          className={`rounded-2xl border border-white/10 px-4 py-2 ${page <= 1 ? "pointer-events-none opacity-40" : "hover:bg-white/8"}`}
        >
          上一页
        </Link>
        <Link
          href={buildHref(pathname, Math.min(totalPages, page + 1), pageSize, query)}
          className={`rounded-2xl border border-white/10 px-4 py-2 ${page >= totalPages ? "pointer-events-none opacity-40" : "hover:bg-white/8"}`}
        >
          下一页
        </Link>
      </div>
    </div>
  );
}
