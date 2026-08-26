import { cn } from "../../lib/cn";

const TONES: Record<string, string> = {
  blue: "bg-[var(--color-blue-50)] text-[var(--color-blue-700)]",
  mint: "bg-[var(--color-mint-50)] text-[var(--color-mint-600)]",
  sand: "bg-[var(--color-sand-50)] text-[var(--color-sand-600)]",
  ink: "bg-[var(--color-mist)] text-[var(--color-ink-700)]",
};

export function CategoryPill({
  children,
  tone = "blue",
  className,
}: {
  children: string;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[12px] font-semibold",
        TONES[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
