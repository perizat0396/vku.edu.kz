import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

export function Eyebrow({
  children,
  tone = "blue",
  inverse = false,
  className,
}: {
  children: ReactNode;
  tone?: "blue" | "mint" | "sand" | "ink";
  inverse?: boolean;
  className?: string;
}) {
  const dot = {
    blue: "bg-[var(--color-blue-500)]",
    mint: "bg-[var(--color-mint-500)]",
    sand: "bg-[var(--color-sand-400)]",
    ink: "bg-[var(--color-ink-900)]",
  }[tone];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em]",
        inverse ? "text-white/65" : "text-[var(--color-ink-500)]",
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", inverse ? "bg-[var(--color-sand-400)]" : dot)} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "blue",
  align = "left",
  action,
  titleClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  tone?: "blue" | "mint" | "sand" | "ink";
  align?: "left" | "center";
  action?: ReactNode;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center"
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <Eyebrow tone={tone} className="mb-3">
            {eyebrow}
          </Eyebrow>
        )}
        <h2
          className={cn(
            "text-balance text-3xl font-extrabold text-[var(--color-ink-900)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
            titleClassName
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-[17px] leading-relaxed text-[var(--color-ink-500)]">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
