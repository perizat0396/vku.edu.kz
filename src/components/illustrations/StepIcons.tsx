import type { ReactElement } from "react";
import { cn } from "../../lib/cn";

export type StepIconId = "advisor" | "platonus" | "library" | "active" | "support" | "safety" | "opportunity";
export type StepTone = "blue" | "mint" | "sand";

export const STEP_ICON_ORDER: StepIconId[] = ["advisor", "platonus", "library", "active", "support", "safety", "opportunity"];
export const STEP_TONE_ORDER: StepTone[] = ["blue", "mint", "sand"];

const shared = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" {...shared}>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M14.6 9.4 13 13l-3.6 1.6L11 11l3.6-1.6Z" strokeLinejoin="round" fill="currentColor" fillOpacity="0.18" />
      <path d="M12 4.6v1.3M12 18.1v1.3M19.4 12h-1.3M5.9 12H4.6" />
    </svg>
  );
}

function PlatonusIcon() {
  return (
    <svg viewBox="0 0 24 24" {...shared}>
      <rect x="6.25" y="3.25" width="11.5" height="17.5" rx="2.6" />
      <path d="M9 7.3h6M9 10.6h6M9 13.9h3.4" />
      <circle cx="16.6" cy="6.4" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LibraryIcon() {
  return (
    <svg viewBox="0 0 24 24" {...shared}>
      <path d="M12 6.2c-1.7-1.2-4-1.7-6.3-1.4v13.3c2.3-.3 4.6.2 6.3 1.4 1.7-1.2 4-1.7 6.3-1.4V4.8c-2.3-.3-4.6.2-6.3 1.4Z" />
      <path d="M12 6.2v13.3" />
      <path d="M8 9h2.2M8 12h2.2" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" {...shared}>
      <path d="M12 3.4c2.4 1.9 3.7 4.8 3.7 8.1 0 2-.5 3.7-1.2 5l-2.5 2-2.5-2c-.7-1.3-1.2-3-1.2-5 0-3.3 1.3-6.2 3.7-8.1Z" />
      <circle cx="12" cy="10.6" r="1.6" />
      <path d="M8.5 13.4c-1.4.4-2.3 1.5-2.6 3.4 1.8-.2 3-.9 3.7-2.1M15.5 13.4c1.4.4 2.3 1.5 2.6 3.4-1.8-.2-3-.9-3.7-2.1" />
      <path d="M10.6 18.6c.3.8.8 1.4 1.4 1.9.6-.5 1.1-1.1 1.4-1.9" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" {...shared}>
      <path d="M12 15.2 9.7 13c-1-.9-1-2.4-.1-3.3.9-.9 2.3-.8 3.2.1l1.2 1.2 1.2-1.2c.9-.9 2.3-1 3.2-.1.9.9.9 2.4-.1 3.3l-3.7 3.5Z" />
      <path d="M4.6 15.6c1.4 1.7 3.4 2.9 5.8 3.2M4.2 12.4c-.2-3.6 2.2-6.6 5.6-6.9" />
      <path d="M5.6 18.2 4 19.7l-.4-2.3 1.9-1.8Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" {...shared}>
      <path d="M12 3.6 18.4 6v5.1c0 4.2-2.7 7.2-6.4 8.3-3.7-1.1-6.4-4.1-6.4-8.3V6L12 3.6Z" />
      <path d="M9.2 12.1 11.3 14l3.5-4" />
    </svg>
  );
}

function OpportunityIcon() {
  return (
    <svg viewBox="0 0 24 24" {...shared}>
      <path d="m12 5.4 7.6 3.4-7.6 3.4-7.6-3.4L12 5.4Z" strokeLinejoin="round" />
      <path d="M7.6 10.4v3.4c0 1.4 2 2.6 4.4 2.6s4.4-1.2 4.4-2.6v-3.4" />
      <path d="M19.6 8.8v4.3" />
      <path d="M17.3 16.6c.4.5.9.8 1.5.8s1.1-.3 1.5-.8" />
    </svg>
  );
}

const ICONS: Record<StepIconId, () => ReactElement> = {
  advisor: CompassIcon,
  platonus: PlatonusIcon,
  library: LibraryIcon,
  active: RocketIcon,
  support: SupportIcon,
  safety: ShieldIcon,
  opportunity: OpportunityIcon,
};

const TONE_CLASSES: Record<StepTone, string> = {
  blue: "bg-[var(--color-blue-50)] text-[var(--color-blue-600)] ring-[var(--color-blue-100)]",
  mint: "bg-[var(--color-mint-50)] text-[var(--color-mint-600)] ring-[var(--color-mint-100)]",
  sand: "bg-[var(--color-sand-50)] text-[var(--color-sand-600)] ring-[var(--color-sand-100)]",
};

export const NUMBER_TONE_CLASSES: Record<StepTone, string> = {
  blue: "text-[var(--color-blue-500)]",
  mint: "text-[var(--color-mint-600)]",
  sand: "text-[var(--color-sand-600)]",
};

export const DOT_TONE_CLASSES: Record<StepTone, string> = {
  blue: "bg-[var(--color-blue-300)]",
  mint: "bg-[var(--color-mint-500)]",
  sand: "bg-[var(--color-sand-400)]",
};

export const NOTE_TONE_CLASSES: Record<StepTone, string> = {
  blue: "bg-[var(--color-blue-50)] text-[var(--color-blue-700)]",
  mint: "bg-[var(--color-mint-50)] text-[var(--color-mint-600)]",
  sand: "bg-[var(--color-sand-50)] text-[var(--color-sand-600)]",
};

export function StepIcon({ id, tone, className }: { id: StepIconId; tone: StepTone; className?: string }) {
  const Icon = ICONS[id];
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-2xl ring-1 [&>svg]:h-7 [&>svg]:w-7",
        TONE_CLASSES[tone],
        className
      )}
    >
      <Icon />
    </span>
  );
}
