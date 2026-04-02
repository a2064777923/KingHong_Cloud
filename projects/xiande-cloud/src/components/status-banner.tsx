import { CheckCircle2, CircleAlert, Info, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type StatusTone = "info" | "success" | "error" | "pending";

const toneMap: Record<
  StatusTone,
  { icon: typeof Info; className: string }
> = {
  info: {
    icon: Info,
    className: "border-cyan-400/20 bg-cyan-400/10 text-cyan-100",
  },
  success: {
    icon: CheckCircle2,
    className: "border-emerald-400/20 bg-emerald-400/10 text-emerald-100",
  },
  error: {
    icon: CircleAlert,
    className: "border-rose-400/20 bg-rose-400/10 text-rose-100",
  },
  pending: {
    icon: LoaderCircle,
    className: "border-amber-400/20 bg-amber-400/10 text-amber-100",
  },
};

export function StatusBanner({
  tone = "info",
  message,
  className,
}: {
  tone?: StatusTone;
  message: string;
  className?: string;
}) {
  const { icon: Icon, className: toneClassName } = toneMap[tone];

  return (
    <div
      className={cn(
        "flex items-start gap-2 rounded-2xl border px-4 py-3 text-sm",
        toneClassName,
        className,
      )}
    >
      <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", tone === "pending" ? "animate-spin" : "")} />
      <p>{message}</p>
    </div>
  );
}
