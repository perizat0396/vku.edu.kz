import { cn } from "../../lib/cn";

/**
 * University crest, redrawn as SVG from the supplied artwork (A monogram
 * with flanking flourishes, "1952", "Amanzholov University" wordmark).
 * Swap the <svg> mark for the exact original asset once a vector/PNG file
 * is available — this component is the single place that needs to change.
 */
function Crest({ color, size, detailed }: { color: string; size: number; detailed: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 260 300" fill="none" aria-hidden className="shrink-0">
      {detailed && (
        <g stroke={color} strokeWidth="11" strokeLinecap="round" fill="none">
          <path d="M 100,58 C 80,50 60,54 48,70 C 38,84 40,100 54,106 C 50,94 52,82 62,72 C 70,64 82,60 100,58 Z" />
          <path d="M 160,58 C 180,50 200,54 212,70 C 222,84 220,100 206,106 C 210,94 208,82 198,72 C 190,64 178,60 160,58 Z" />
        </g>
      )}
      <text
        x="130"
        y="150"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="108"
        fill={color}
      >
        A
      </text>
      {detailed && (
        <text x="130" y="140" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" fill={color}>
          1952
        </text>
      )}
    </svg>
  );
}

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
  // The flourishes read as noise below ~40px, so small header contexts get a
  // clean "A" monogram; the full crest with flourishes needs more room.
  const detailed = !compact;

  return (
    <a href="#top" className={cn("flex items-center gap-2.5 shrink-0", className)} aria-label="Amanzholov University — home">
      <Crest color={ink} size={detailed ? 40 : 30} detailed={detailed} />
      {!iconOnly &&
        (compact ? (
          <span
            className="whitespace-nowrap text-[15px] font-extrabold tracking-tight"
            style={{ color: ink, fontFamily: "var(--font-display)" }}
          >
            Amanzholov University
          </span>
        ) : (
          <span className="leading-[1.15]" style={{ color: ink, fontFamily: "var(--font-display)" }}>
            <span className="block text-[15px] font-extrabold tracking-wide">AMANZHOLOV</span>
            <span className="block text-[15px] font-extrabold tracking-[0.12em]">UNIVERSITY</span>
          </span>
        ))}
    </a>
  );
}
