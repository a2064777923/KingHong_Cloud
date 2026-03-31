export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">404</p>
        <h1 className="mt-3 text-3xl font-semibold">页面走丢了</h1>
        <p className="mt-3 text-sm leading-7 text-slate-300">可能是分享链接不存在，或者它已经失效了。</p>
      </div>
    </main>
  );
}
