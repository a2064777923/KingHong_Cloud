import Image from "next/image";
import { env } from "@/lib/env";
import { cn } from "@/lib/utils";

const variants = {
  sm: {
    frame: "h-10 w-10",
    title: "text-base font-semibold",
    subtitle: "text-[11px] tracking-[0.24em]",
  },
  md: {
    frame: "h-12 w-12",
    title: "text-lg font-semibold",
    subtitle: "text-xs tracking-[0.3em]",
  },
  lg: {
    frame: "h-16 w-16",
    title: "text-2xl font-semibold sm:text-3xl",
    subtitle: "text-xs tracking-[0.32em] sm:text-sm",
  },
} as const;

export function SiteBrand({
  size = "md",
  subtitle = "文件上传与分享",
  className,
  titleClassName,
}: {
  size?: keyof typeof variants;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
}) {
  const variant = variants[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative isolate overflow-hidden rounded-full border border-cyan-200/15 shadow-lg shadow-cyan-950/30",
          "bg-[radial-gradient(circle_at_22%_18%,rgba(103,232,249,0.28),transparent_38%),linear-gradient(160deg,rgba(15,23,42,0.98)_0%,rgba(7,17,31,0.96)_58%,rgba(2,6,23,1)_100%)]",
          variant.frame,
        )}
      >
        <div className="absolute inset-[7%] rounded-full border border-white/10 bg-white/[0.04] shadow-inner shadow-white/10" />
        <div
          className={cn(
            "absolute inset-[14%] overflow-hidden rounded-full border border-cyan-100/12 bg-[radial-gradient(circle_at_30%_28%,rgba(165,243,252,0.12),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
          )}
        >
          <Image
            src="/brand/site-brand-cutout.png"
            alt={`${env.appName} 图标`}
            fill
            sizes={size === "lg" ? "64px" : size === "md" ? "48px" : "40px"}
            className="object-contain object-center scale-[1.08] opacity-95"
            priority={size !== "sm"}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/12 via-transparent to-slate-950/30" />
        </div>
        <div className="absolute inset-x-[22%] bottom-[12%] h-[16%] rounded-full bg-cyan-200/15 blur-md" />
      </div>
      <div className="min-w-0">
        <p className={cn("uppercase text-cyan-200/70", variant.subtitle)}>{subtitle}</p>
        <div className={cn("truncate text-white", variant.title, titleClassName)}>{env.appName}</div>
      </div>
    </div>
  );
}
