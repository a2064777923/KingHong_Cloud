import Link from "next/link";
import { ArrowRight, LockKeyhole, MonitorSmartphone, Share2, Sparkles, UploadCloud } from "lucide-react";

const highlights = [
  {
    title: "账户隔离",
    desc: "默认按账号隔离文件空间，管理员统一控权，同时为未来的文件夹级授权预留接口。",
    icon: LockKeyhole,
  },
  {
    title: "多端自适应",
    desc: "桌面端强调密集信息与批量操作，移动端强调触控、底部操作与卡片式浏览。",
    icon: MonitorSmartphone,
  },
  {
    title: "受控分享",
    desc: "支持多选文件创建分享链接，可设置密码、失效时间和最大下载次数。",
    icon: Share2,
  },
  {
    title: "上传与预览",
    desc: "按文件类型提供不同图标、列表样式和预览能力，优先保证舒适与直觉。",
    icon: UploadCloud,
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
                <Sparkles className="h-4 w-4" />
                私有部署 · 安全可控 · 高颜值多端云档案
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                贤得慌又云里雾里
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                一个面向电脑、手机、平板的私有云上传、预览、下载与分享系统。强调安全可靠、代码清晰、可持续扩展，也顺手把界面做得不那么像上世纪遗留系统。
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
                >
                  进入系统
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/share/demo"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/6 px-5 py-3 text-sm text-white/90 transition hover:bg-white/10"
                >
                  查看分享页原型
                </Link>
              </div>
            </div>
            <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-slate-950/40 p-4 shadow-inner shadow-cyan-500/5">
              <div className="rounded-[1.5rem] border border-white/8 bg-gradient-to-br from-cyan-400/15 via-slate-900/70 to-slate-950 p-5">
                <p className="text-sm text-cyan-100/75">默认管理员</p>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/6 px-4 py-3">
                    <span>用户名</span>
                    <strong>admin</strong>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/6 px-4 py-3">
                    <span>初始密码</span>
                    <strong>ab123456</strong>
                  </div>
                  <div className="rounded-2xl border border-amber-300/20 bg-amber-400/10 px-4 py-3 text-amber-100/90">
                    首次上线后应立即修改默认密码。你要是一直用默认口令，那安全事故就不是系统的锅了。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-lg font-medium">{title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-300">{desc}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
