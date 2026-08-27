import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";

type NavigatorStep = {
  emoji: string;
  title: string;
  intro: string;
  bulletsIntro?: string;
  bullets: string[];
  subBlockIntro?: string;
  subBullets?: string[];
  note: string;
};

export function StudentNavigator() {
  const { t } = useTranslation();
  const steps = t("studentNavigator.steps", { returnObjects: true }) as NavigatorStep[];

  return (
    <div className="bg-white py-16 md:py-24">
      <Container className="max-w-3xl">
        <Reveal>
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--color-ink-500)] transition-colors hover:text-[var(--color-ink-900)]"
          >
            <ArrowLeft size={15} />
            {t("studentNavigator.backLink")}
          </Link>

          <Eyebrow tone="sand" className="mb-4">
            {t("studentNavigator.eyebrow")}
          </Eyebrow>
          <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.1] text-[var(--color-ink-900)] sm:text-5xl">
            {t("studentNavigator.title")}
          </h1>
          <p className="mt-4 text-[19px] font-medium text-[var(--color-blue-600)]">{t("studentNavigator.subtitle")}</p>
        </Reveal>

        <ol className="mt-14 flex flex-col gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={Math.min(i * 0.05, 0.3)}>
              <li className="relative rounded-[28px] border border-[var(--color-line)] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--color-blue-50)] text-2xl">
                    {step.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-display text-[13px] font-bold text-[var(--color-blue-500)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display text-[19px] font-bold leading-snug text-[var(--color-ink-900)] sm:text-[21px]">
                        {step.title}
                      </h2>
                    </div>

                    <p className="mt-3 text-[15.5px] leading-relaxed text-[var(--color-ink-700)]">{step.intro}</p>

                    {step.bulletsIntro && (
                      <p className="mt-4 text-[13.5px] font-semibold uppercase tracking-wide text-[var(--color-ink-400)]">
                        {step.bulletsIntro}
                      </p>
                    )}
                    <ul className="mt-2.5 flex flex-col gap-1.5">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-[15px] leading-relaxed text-[var(--color-ink-700)]">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-blue-300)]" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {step.subBlockIntro && step.subBullets && (
                      <div className="mt-4 rounded-2xl bg-[var(--color-mist)] p-4">
                        <p className="text-[13.5px] font-semibold text-[var(--color-ink-700)]">{step.subBlockIntro}</p>
                        <ul className="mt-2 flex flex-col gap-1">
                          {step.subBullets.map((b) => (
                            <li key={b} className="flex gap-2.5 text-[14px] leading-relaxed text-[var(--color-ink-500)]">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink-400)]" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <p className="mt-4 rounded-xl bg-[var(--color-sand-50)] px-4 py-3 text-[14px] leading-relaxed text-[var(--color-sand-600)]">
                      {step.note}
                    </p>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <div
            className="mt-10 rounded-[28px] p-8 text-center sm:p-12"
            style={{ background: "linear-gradient(135deg, #1f3f97 0%, #14294d 100%)" }}
          >
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">{t("studentNavigator.finalTitle")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-white/75">
              {t("studentNavigator.finalText1")} {t("studentNavigator.finalText2")}
            </p>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
