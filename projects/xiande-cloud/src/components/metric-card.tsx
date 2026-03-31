import { ReactNode } from "react";

export function MetricCard({ label, value, hint, icon }: { label: string; value: string; hint: string; icon: ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 shadow-lg shadow-black/10">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-300">{label}</p>
        <div className="rounded-2xl bg-white/8 p-2 text-cyan-200">{icon}</div>
      </div>
      <div className="mt-4 text-3xl font-semibold tracking-tight">{value}</div>
      <p className="mt-2 text-sm text-slate-400">{hint}</p>
    </div>
  );
}
