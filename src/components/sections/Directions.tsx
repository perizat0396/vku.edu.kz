import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { PatternArt } from "../ui/PatternArt";
import { Reveal } from "../ui/Reveal";
import { directionIcons, directionThemes } from "../../data/content";
import { cn } from "../../lib/cn";

type Direction = { title: string; description: string };

const SPANS = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-1",
];

export function Directions() {
  const { t } = useTranslation();
  const items = t("directions.items", { returnObjects: true }) as Direction[];

  return (
    <section id="directions" className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("directions.eyebrow") ?? undefined}
          title={t("directions.title")}
          subtitle={t("directions.subtitle")}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:auto-rows-[12rem] sm:grid-flow-dense">
          {items.map((item, i) => {
            const Icon = directionIcons[i];
            const theme = directionThemes[i];
            const big = i === 0;

            return (
              <Reveal key={item.title} delay={i * 0.06} className={cn("flex", SPANS[i])}>
                <article className="group flex w-full flex-col overflow-hidden rounded-[28px] border border-[var(--color-line)] bg-white transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
                  <div className="relative flex-1 overflow-hidden">
                    <PatternArt
                      theme={theme}
                      icon={<Icon />}
                      label=""
                      showLabel={false}
                      rounded="md"
                      className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-[var(--color-ink-900)] opacity-0 shadow-sm backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  <div className={cn("flex flex-col gap-1.5 p-5", big ? "sm:p-7" : "")}>
                    <h3 className={cn("font-display font-bold text-[var(--color-ink-900)]", big ? "text-xl sm:text-2xl" : "text-lg")}>
                      {item.title}
                    </h3>
                    <p className={cn("text-[var(--color-ink-500)]", big ? "text-[15px] leading-relaxed" : "text-[14px] leading-relaxed line-clamp-3")}>
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
