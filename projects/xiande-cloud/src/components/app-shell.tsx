import Link from "next/link";
import { ReactNode } from "react";
import { FolderKanban, ShieldCheck, Share2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/app", label: "文件空间", icon: FolderKanban },
  { href: "/app/shares", label: "分享链接", icon: Share2 },
  { href: "/admin", label: "管理后台", icon: ShieldCheck },
];

export function AppShell({
  title,
  subtitle,
  children,
  pathname,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  pathname: string;
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(86,133,255,0.18),_transparent_35%),linear-gradient(180deg,#07111f_0%,#0b1322_35%,#09101c_100%)] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 lg:flex-row lg:px-8">
        <aside className="mb-4 rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur-xl lg:mb-0 lg:w-72 lg:p-6">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/20 text-cyan-200 shadow-lg shadow-cyan-500/10">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70">Xiande Cloud</p>
              <h1 className="text-lg font-semibold">贤得慌又云里雾里</h1>
            </div>
          </div>
          <nav className="space-y-2">
            {nav.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition",
                    active
                      ? "bg-cyan-400/15 text-cyan-100 shadow-lg shadow-cyan-500/10"
                      : "text-slate-300 hover:bg-white/8 hover:text-white",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-4 text-sm text-cyan-50/90">
            <p className="font-medium">默认策略</p>
            <ul className="mt-2 space-y-1 text-cyan-50/75">
              <li>• Admin 上传不限大小</li>
              <li>• 普通账号单文件 100MB</li>
              <li>• 分享支持密码 / 失效 / 次数</li>
            </ul>
          </div>
        </aside>

        <main className="flex-1 lg:pl-6">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
            <header className="mb-8 flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Control Surface</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">{subtitle}</p>
              </div>
            </header>
            {children}
          </section>
        </main>
      </div>
    </div>
  );
}
