import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

/**
 * Signature visual placeholder used everywhere the site will later carry a
 * real photograph. Rather than faking a stock photo, it renders a themed
 * gradient-mesh "campus pattern" tile with a line-art motif and a small
 * caption naming what belongs there — honest, on-brand, and replaceable.
 */
const THEMES = {
  blue: {
    bg: "linear-gradient(155deg, #eef4fd 0%, #dbe8fb 45%, #c3d9f7 100%)",
    blob1: "#93b3ea",
    blob2: "#f3e6cc",
    icon: "#1f3f97",
  },
  mint: {
    bg: "linear-gradient(155deg, #eef4fd 0%, #d3f0e3 55%, #b9e6d2 100%)",
    blob1: "#2f9e7c",
    blob2: "#dbe8fb",
    icon: "#23825f",
  },
  sand: {
    bg: "linear-gradient(155deg, #fbf6ec 0%, #f3e6cc 55%, #e9d3a3 100%)",
    blob1: "#d9b77f",
    blob2: "#dbe8fb",
    icon: "#8a6633",
  },
  ink: {
    bg: "linear-gradient(155deg, #1a2744 0%, #14294d 55%, #0d1c38 100%)",
    blob1: "#3d6fd6",
    blob2: "#2f9e7c",
    icon: "#dbe8fb",
  },
} as const;

export function PatternArt({
  theme = "blue",
  icon,
  label,
  className,
  rounded = "xl",
  showLabel = true,
}: {
  theme?: keyof typeof THEMES;
  icon?: ReactNode;
  label: string;
  className?: string;
  rounded?: "lg" | "xl" | "md";
  showLabel?: boolean;
}) {
  const t = THEMES[theme];
  const radius = { md: "rounded-[18px]", lg: "rounded-[24px]", xl: "rounded-[28px]" }[rounded];

  return (
    <div
      className={cn("relative isolate overflow-hidden", radius, className)}
      style={{ background: t.bg }}
      role="img"
      aria-label={label}
    >
      <div
        className="pointer-events-none absolute -top-1/4 -right-1/4 h-2/3 w-2/3 rounded-full opacity-40 blur-3xl"
        style={{ background: t.blob1 }}
      />
      <div
        className="pointer-events-none absolute -bottom-1/3 -left-1/4 h-1/2 w-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: t.blob2 }}
      />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay" aria-hidden>
        <filter id={`grain-${theme}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#grain-${theme})`} />
      </svg>

      {icon && (
        <div
          className="absolute inset-0 flex items-center justify-center opacity-[0.16]"
          style={{ color: t.icon }}
          aria-hidden
        >
          <div className="h-[42%] w-[42%] [&>svg]:h-full [&>svg]:w-full [&>svg]:stroke-[0.9]">{icon}</div>
        </div>
      )}

      {showLabel && (
        <span
          className={cn(
            "absolute bottom-3 left-3 rounded-full px-3 py-1 text-[11px] font-medium backdrop-blur-md",
            theme === "ink"
              ? "bg-white/10 text-white/70 ring-1 ring-inset ring-white/15"
              : "bg-white/60 text-[var(--color-ink-500)] ring-1 ring-inset ring-black/5"
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
