import { cn } from "../../lib/cn";

/**
 * Placeholder for the official university crest + wordmark.
 * Swap the <svg> mark and text for the real logo asset when available —
 * this component is the single place that needs to change.
 */
export function Logo({
  inverse = false,
  compact = false,
  iconOnly = false,
  className,
}: {
  inverse?: boolean;
  compact?: boolean;
  iconOnly?: boolean;
  className?: string;
}) {
  const ink = inverse ? "#ffffff" : "var(--color-ink-900)";

  return (
    <a
      href="#top"
      className={cn("flex items-center gap-2.5 shrink-0", className)}
      aria-label="Amanzholov University — home. Logo placeholder: swap for the official crest."
    >
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden className="shrink-0">
        <rect
          x="1"
          y="1"
          width="32"
          height="32"
          rx="9"
          stroke={ink}
          strokeWidth="1.4"
          strokeDasharray="3 2.5"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M17 9L22.5 24H20.1L18.7 20.3H15.3L13.9 24H11.5L17 9ZM17 12.9L15.5 18.4H18.5L17 12.9Z"
          fill={ink}
        />
      </svg>
      {!iconOnly && (
        <span className="leading-tight">
          {!compact && (
            <span
              className="block text-[10px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: inverse ? "rgba(255,255,255,0.6)" : "var(--color-ink-500)" }}
            >
              [University logo]
            </span>
          )}
          <span
            className="block whitespace-nowrap text-[15px] font-extrabold tracking-tight"
            style={{ color: ink, fontFamily: "var(--font-display)" }}
          >
            Amanzholov University
          </span>
        </span>
      )}
    </a>
  );
}
