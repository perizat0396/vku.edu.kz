import { useTranslation } from "react-i18next";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { PatternArt } from "../ui/PatternArt";
import { Reveal } from "../ui/Reveal";

export function Admission() {
  const { t } = useTranslation();

  return (
    <section id="admission" className="bg-[var(--color-mist)] py-20 md:py-28">
      <Container>
        <Reveal>
          <div
            className="grid overflow-hidden rounded-[32px] lg:grid-cols-2"
            style={{ background: "linear-gradient(135deg, #1f3f97 0%, #14294d 100%)" }}
          >
            <div className="flex flex-col justify-center p-9 sm:p-14">
              <Eyebrow inverse tone="sand" className="mb-5">
                {t("admission.eyebrow")}
              </Eyebrow>
              <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-[2.75rem]">
                {t("admission.title")}
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/70">{t("admission.subtitle")}</p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="#" variant="inverse" icon={<ArrowRight size={17} />}>
                  {t("admission.ctaApply")}
                </Button>
                <Button href="#directions" variant="ghost" className="text-white hover:bg-white/10">
                  {t("admission.ctaPrograms")}
                </Button>
              </div>
              <a href="#" className="mt-6 inline-flex w-fit items-center gap-1.5 text-[14px] font-medium text-white/60 underline decoration-white/25 underline-offset-4 hover:text-white/90">
                {t("admission.ctaCommittee")}
              </a>
            </div>

            <div className="relative min-h-[280px]">
              <PatternArt
                theme="blue"
                icon={<GraduationCap />}
                label="Entrants photo — placeholder"
                rounded="md"
                className="absolute inset-0 h-full w-full rounded-none lg:rounded-l-[40px]"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
