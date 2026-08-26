import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const sizes = {
  md: "px-5 py-3 text-[15px]",
  sm: "px-4 py-2.5 text-sm",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-ink-900)] text-white hover:bg-[var(--color-blue-700)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5",
  secondary:
    "bg-white text-[var(--color-ink-900)] border border-[var(--color-line-strong)] hover:border-[var(--color-ink-900)] hover:-translate-y-0.5",
  inverse:
    "bg-white text-[var(--color-blue-700)] hover:bg-[var(--color-blue-50)] shadow-[var(--shadow-soft)] hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-[var(--color-ink-900)] hover:bg-[var(--color-mist)]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  onClick,
  type = "button",
  icon,
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  icon?: ReactNode;
}) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
