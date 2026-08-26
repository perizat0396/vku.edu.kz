import { useTranslation } from "react-i18next";
import { useCountUp } from "../../hooks/useCountUp";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

type StatItem = { value: number; suffix: string; label: string };

function StatFigure({ item, index }: { item: StatItem; index: number }) {
  const { ref, value } = useCountUp(item.value, 1200 + index * 150);

  return (
    <Reveal delay={index * 0.08} className="border-t border-white/15 pt-6 first:border-t-0 sm:border-t-0 sm:border-l sm:pl-8 sm:first:pl-0">
      <p
        ref={ref as any}
        className="font-display text-[2.75rem] font-extrabold leading-none tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
      >
        {value.toLocaleString("en-US")}
        <span className="text-[var(--color-sand-400)]">{item.suffix}</span>
      </p>
      <p className="mt-3 text-[15px] font-medium text-white/70">{item.label}</p>
    </Reveal>
  );
}

export function Stats() {
  const { t } = useTranslation();
  const items = t("stats.items", { returnObjects: true }) as StatItem[];

  return (
    <section id="stats" className="relative overflow-hidden bg-[var(--color-ink-900)] py-20 md:py-24">
      <div
        className="pointer-events-none absolute -top-1/2 left-1/2 h-[600px] w-[900px] -translate-x-1/2 opacity-30 blur-3xl"
        style={{ background: "radial-gradient(ellipse, var(--color-blue-700), transparent 60%)" }}
        aria-hidden
      />
      <Container className="relative">
        <Eyebrow tone="sand" inverse className="mb-4">
          {t("stats.eyebrow")}
        </Eyebrow>
        <h2 className="max-w-xl text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          {t("stats.title")}
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-8">
          {items.map((item, i) => (
            <StatFigure key={item.label} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
