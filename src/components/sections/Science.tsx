import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Photo } from "../ui/Photo";
import { Reveal } from "../ui/Reveal";
import { sciencePointIcons } from "../../data/content";

type SciencePoint = { title: string; description: string };

export function Science() {
  const { t } = useTranslation();
  const points = t("science.points", { returnObjects: true }) as SciencePoint[];

  return (
    <section id="science" className="bg-white py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
        <Reveal>
          <Photo
            src="chemistry-lab.jpg"
            alt="Amanzholov University student in a chemistry laboratory"
            rounded="xl"
            className="aspect-[4/5] w-full shadow-[var(--shadow-lift)] sm:aspect-[16/13]"
          />
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow tone="mint" className="mb-5">
              {t("science.eyebrow")}
            </Eyebrow>
            <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.12] text-[var(--color-ink-900)] sm:text-4xl lg:text-[2.75rem]">
              {t("science.title")}
            </h2>
            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-[var(--color-ink-500)]">
              {t("science.subtitle")}
            </p>
          </Reveal>

          <div className="mt-9 flex flex-col gap-5">
            {points.map((point, i) => {
              const Icon = sciencePointIcons[i];
              return (
                <Reveal key={point.title} delay={0.08 + i * 0.06}>
                  <div className="flex gap-4 rounded-2xl border border-[var(--color-line)] p-5 transition-colors hover:border-[var(--color-mint-500)]/40 hover:bg-[var(--color-mint-50)]/40">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--color-mint-50)] text-[var(--color-mint-600)]">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="font-display text-[16px] font-bold text-[var(--color-ink-900)]">{point.title}</h3>
                      <p className="mt-1 text-[14.5px] leading-relaxed text-[var(--color-ink-500)]">{point.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.3} className="mt-8">
            <Button href="#" variant="secondary" icon={<ArrowRight size={17} />}>
              {t("science.cta")}
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
