import { useTranslation } from "react-i18next";
import { ArrowRight, BookOpen, Download } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { PatternArt } from "../ui/PatternArt";
import { Reveal } from "../ui/Reveal";

type DigestItem = { issue: string; date: string; title: string };

const THEMES = ["blue", "mint", "sand", "blue"] as const;

export function Digest() {
  const { t } = useTranslation();
  const items = t("digest.items", { returnObjects: true }) as DigestItem[];

  return (
    <section id="digest" className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("digest.eyebrow") ?? undefined}
          title={t("digest.title")}
          subtitle={t("digest.subtitle")}
          action={
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--color-blue-600)] transition-colors hover:text-[var(--color-blue-700)]"
            >
              {t("digest.viewAll")}
              <ArrowRight size={16} />
            </a>
          }
        />

        <div className="mt-10 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.issue} delay={i * 0.06} className="w-[78%] shrink-0 snap-start sm:w-auto">
              <a href="#" className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[var(--color-line)] bg-white transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <PatternArt
                    theme={THEMES[i % THEMES.length]}
                    icon={<BookOpen />}
                    label=""
                    showLabel={false}
                    rounded="md"
                    className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[12px] font-bold text-[var(--color-ink-900)] backdrop-blur-md">
                    №{item.issue}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <p className="text-[12.5px] font-semibold uppercase tracking-wide text-[var(--color-ink-400)]">{item.date}</p>
                  <h3 className="line-clamp-3 flex-1 font-display text-[15px] font-bold leading-snug text-[var(--color-ink-900)]">
                    {item.title}
                  </h3>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[var(--color-blue-600)]">
                    <Download size={14} />
                    {t("digest.download")}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
