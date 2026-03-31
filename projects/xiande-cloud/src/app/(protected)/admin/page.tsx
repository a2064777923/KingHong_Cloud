import { BarChart3, HardDrive, Shield, Users } from "lucide-react";
import { MetricCard } from "@/components/metric-card";
import { AdminUserPanel } from "@/components/admin-user-panel";
import { requireAdmin } from "@/lib/auth";
import { db } from "@/lib/db";
import { formatBytes } from "@/lib/files";

export default async function AdminPage() {
  await requireAdmin();

  const [userCount, shareCount, fileCount, files, users] = await Promise.all([
    db.user.count(),
    db.share.count(),
    db.fileEntry.count(),
    db.fileEntry.findMany({ select: { sizeBytes: true }, take: 500 }),
    db.user.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        username: true,
        role: true,
        isActive: true,
        maxUploadBytes: true,
        createdAt: true,
      },
    }),
  ]);

  const totalBytes = files.reduce((sum, item) => sum + Number(item.sizeBytes), 0);
  const initialUsers = users.map((user) => ({
    ...user,
    maxUploadBytes: user.maxUploadBytes ? Number(user.maxUploadBytes) : null,
    createdAt: user.createdAt.toISOString(),
  }));

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="账号" value={String(userCount)} hint="用户总数" icon={<Users className="h-5 w-5" />} />
        <MetricCard label="文件" value={String(fileCount)} hint="文件总数" icon={<HardDrive className="h-5 w-5" />} />
        <MetricCard label="分享" value={String(shareCount)} hint="分享链接总数" icon={<Shield className="h-5 w-5" />} />
        <MetricCard label="容量" value={formatBytes(totalBytes)} hint="样本统计" icon={<BarChart3 className="h-5 w-5" />} />
      </section>

      <AdminUserPanel initialUsers={initialUsers} />
    </div>
  );
}
