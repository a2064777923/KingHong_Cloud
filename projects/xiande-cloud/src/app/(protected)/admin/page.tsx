import { BarChart3, HardDrive, Shield, Users } from "lucide-react";
import { MetricCard } from "@/components/metric-card";
import { requireAdmin } from "@/lib/auth";
import { db } from "@/lib/db";
import { formatBytes } from "@/lib/files";

export default async function AdminPage() {
  await requireAdmin();

  const [userCount, shareCount, fileCount, files] = await Promise.all([
    db.user.count(),
    db.share.count(),
    db.fileEntry.count(),
    db.fileEntry.findMany({ select: { sizeBytes: true }, take: 500 }),
  ]);

  const totalBytes = files.reduce((sum, item) => sum + Number(item.sizeBytes), 0);

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="账号总数" value={String(userCount)} hint="支持账号创建、禁用、密码重置" icon={<Users className="h-5 w-5" />} />
        <MetricCard label="文件总数" value={String(fileCount)} hint="后续会接入文件夹统计与检索" icon={<HardDrive className="h-5 w-5" />} />
        <MetricCard label="分享链接" value={String(shareCount)} hint="统一查看分享生命周期与风险面" icon={<Shield className="h-5 w-5" />} />
        <MetricCard label="样本容量" value={formatBytes(totalBytes)} hint="当前按已采样文件体积估算" icon={<BarChart3 className="h-5 w-5" />} />
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <h3 className="text-lg font-medium">管理员待接入模块</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            <li>• 用户管理：创建账号、重置密码、启停用、配额设定</li>
            <li>• 文件治理：按用户查看、批量删除、审计记录</li>
            <li>• 分享治理：强制失效、访问日志、下载限次追踪</li>
            <li>• 系统设置：上传限制、安全策略、对外访问参数</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-cyan-300/15 bg-cyan-400/8 p-5">
          <h3 className="text-lg font-medium text-cyan-50">当前架构意图</h3>
          <p className="mt-3 text-sm leading-7 text-cyan-50/85">
            先按简单权限模型做稳：用户仅见自己的文件，管理员统一管理。数据库和服务层已经预留 Folder / Share / AuditLog 等实体，后面要升级到文件夹级授权不会把地基掀掉。
          </p>
        </div>
      </section>
    </div>
  );
}
