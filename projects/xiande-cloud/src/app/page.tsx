import Link from "next/link";
import { ArrowRight, LockKeyhole, MonitorSmartphone, Share2, UploadCloud } from "lucide-react";

const highlights = [
  {
    title: "账户隔离",
    desc: "按账号隔离文件空间，管理员统一控权。",
    icon: LockKeyhole,
  },
  {
    title: "多端适配",
    desc: "兼顾桌面、手机和平板的使用习惯。",
    icon: MonitorSmartphone,
  },
  {
    title: "受控分享",
    desc: "支持密码、失效时间和下载次数控制。",
    icon: Share2,
  },
  {
    title: "上传与预览",
    desc: "按文件类型提供合适的图标与预览方式。",
    icon: UploadCloud,
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                贤得慌又云里雾里
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                私有部署的文件上传、预览、下载与分享服务。
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
                >
                  登录
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/40 p-6 shadow-inner shadow-cyan-500/5">
              <div className="rounded-[1.5rem] border border-white/8 bg-gradient-to-br from-cyan-400/15 via-slate-900/70 to-slate-950 p-6">
                <p className="text-sm text-cyan-100/75">安全与访问控制</p>
                <div className="mt-4 grid gap-3 text-sm text-slate-200">
                  <div className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3">账户登录后访问各自可见范围内的文件</div>
                  <div className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3">分享链接可设置密码、失效时间、最大下载次数</div>
                  <div className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3">管理员具备用户与文件治理能力</div>
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
