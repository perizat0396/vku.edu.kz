import { useTranslation } from "react-i18next";
import { Landmark } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { partnerCount } from "../../data/content";

export function Partners() {
  const { t } = useTranslation();

  return (
    <section id="partners" className="bg-[var(--color-mist)] py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t("partners.eyebrow") ?? undefined}
          title={t("partners.title")}
          subtitle={t("partners.subtitle")}
          align="center"
        />

        <div className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {Array.from({ length: partnerCount }).map((_, i) => (
            <Reveal key={i} delay={(i % 5) * 0.04}>
              <div className="flex h-24 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-white transition-colors hover:border-[var(--color-line-strong)]">
                <Landmark size={26} strokeWidth={1.4} className="text-[var(--color-ink-400)]" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
