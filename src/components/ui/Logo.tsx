import { cn } from "../../lib/cn";

/**
 * Official university crest, supplied by the client (public/logo.png —
 * full lockup with wordmark — and public/logo-icon.png, a tight crop of
 * just the AU monogram; both have the flat background removed).
 *
 * The wordmark is baked into logo.png, so it only stays legible at a
 * decent size (footer, mobile drawer). Small header contexts use the
 * monogram crop paired with real HTML text instead, so the name stays
 * crisp no matter how tight the space gets.
 */
export function Logo({
  compact = false,
  iconOnly = false,
  className,
}: {
  compact?: boolean;
  iconOnly?: boolean;
  className?: string;
}) {
  if (compact || iconOnly) {
    return (
      <a href="#top" className={cn("flex shrink-0 items-center gap-2.5", className)} aria-label="Amanzholov University — home">
        <img src="/logo-icon.png" alt="" className="h-9 w-auto shrink-0" />
        {!iconOnly && (
          <span className="whitespace-nowrap font-display text-[15px] font-extrabold tracking-tight text-[var(--color-ink-900)]">
            Amanzholov University
          </span>
        )}
      </a>
    );
  }

  return (
    <a href="#top" className={cn("flex shrink-0 items-center", className)} aria-label="Amanzholov University — home">
      <img src="/logo.png" alt="Amanzholov University" className="h-20 w-auto" />
    </a>
  );
}
