import { headers } from "next/headers";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { AppShell } from "@/components/app-shell";
import { PaginationBar } from "@/components/pagination-bar";
import { buildShareUrl } from "@/lib/public-url";
import { SharesPageClient } from "@/components/shares-page-client";

export default async function SharesPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string; pageSize?: string }>;
}) {
  const user = await requireUser();
  const params = (await searchParams) ?? {};
  const page = Math.max(1, Number(params.page ?? "1") || 1);
  const pageSize = Math.min(20, Math.max(6, Number(params.pageSize ?? "10") || 10));

  const [shares, total] = await Promise.all([
    db.share.findMany({
      where: { creatorId: user.id },
      include: { items: { include: { file: true } } },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    db.share.count({ where: { creatorId: user.id } }),
  ]);
  const headerStore = await headers();
  const nowIso = new Date().toISOString();
  const shareItems = shares.map((share) => ({
    id: share.id,
    token: share.token,
    url: buildShareUrl(share.token, headerStore),
    createdAt: share.createdAt.toISOString(),
    expiresAt: share.expiresAt?.toISOString() ?? null,
    downloadCount: share.downloadCount,
    maxDownloads: share.maxDownloads,
    allowPreview: share.allowPreview,
    passwordProtected: Boolean(share.passwordHash),
    itemCount: share.items.length,
    fileNames: share.items.map(({ file }) => file.originalName),
  }));

  return (
    <AppShell title="分享" subtitle={user.username} pathname="/app/shares" isAdmin={user.role === "ADMIN"}>
      <div className="space-y-4">
        <SharesPageClient initialShares={shareItems} nowIso={nowIso} />

        <PaginationBar page={page} pageSize={pageSize} total={total} pathname="/app/shares" />
      </div>
    </AppShell>
  );
}
