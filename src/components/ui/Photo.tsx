import { cn } from "../../lib/cn";

const ROUNDED = { md: "rounded-[18px]", lg: "rounded-[24px]", xl: "rounded-[28px]" } as const;

/**
 * Real photo, sized/rounded to match PatternArt's API so either can drop
 * into the same layout slot. `src` is a filename under public/ — resolved
 * through BASE_URL (see Logo.tsx) so it still works once the site is
 * served from a sub-path instead of the domain root.
 */
export function Photo({
  src,
  alt,
  className,
  rounded,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  /** Omit when className already carries its own (e.g. responsive) rounding. */
  rounded?: keyof typeof ROUNDED;
  objectPosition?: string;
}) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}${src}`}
      alt={alt}
      loading="lazy"
      className={cn("h-full w-full object-cover", rounded && ROUNDED[rounded], className)}
      style={{ objectPosition }}
    />
  );
}
