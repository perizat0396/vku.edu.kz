import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { StudentCharacter, CelebratingCharacter } from "../components/illustrations/Characters";
import {
  StepIcon,
  STEP_ICON_ORDER,
  STEP_TONE_ORDER,
  NUMBER_TONE_CLASSES,
  DOT_TONE_CLASSES,
  NOTE_TONE_CLASSES,
} from "../components/illustrations/StepIcons";

type NavigatorStep = {
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
    <div className="overflow-hidden bg-white pb-16 md:pb-24">
      <div className="relative">
        <div
          className="pointer-events-none absolute -top-24 right-[-8%] h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-blue-100), transparent 70%)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-40 left-[-10%] h-[320px] w-[320px] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-sand-100), transparent 70%)" }}
          aria-hidden
        />

        <Container className="relative grid gap-10 pt-16 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8">
          <Reveal>
            <Link
              to="/"
              className="mb-10 flex w-fit items-center gap-1.5 text-[14px] font-medium text-[var(--color-ink-500)] transition-colors hover:text-[var(--color-ink-900)]"
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
            <p className="mt-4 max-w-md text-[19px] font-medium text-[var(--color-blue-600)]">
              {t("studentNavigator.subtitle")}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[300px]">
              <div
                className="absolute inset-[6%] rounded-full opacity-80"
                style={{ background: "radial-gradient(circle, var(--color-blue-50), transparent 72%)" }}
                aria-hidden
              />
              <StudentCharacter className="relative h-auto w-full" />
            </div>
          </Reveal>
        </Container>
      </div>

      <Container className="max-w-3xl">
        <ol className="mt-16">
          {steps.map((step, i) => {
            const tone = STEP_TONE_ORDER[i % STEP_TONE_ORDER.length];
            const iconId = STEP_ICON_ORDER[i % STEP_ICON_ORDER.length];
            return (
              <Reveal key={step.title} delay={Math.min(i * 0.05, 0.3)}>
                <li className="relative flex gap-5 pb-12 last:pb-0 sm:gap-6">
                  {i < steps.length - 1 && (
                    <div
                      className="absolute bottom-0 left-[27px] top-[56px] w-[3px] rounded-full bg-[var(--color-line-strong)] sm:left-[31px] sm:top-16"
                      aria-hidden
                    />
                  )}
                  <div className="relative z-10 flex w-14 shrink-0 justify-center sm:w-16">
                    <StepIcon id={iconId} tone={tone} className="h-14 w-14 sm:h-16 sm:w-16" />
                  </div>
                  <div className="min-w-0 flex-1 pt-1">
                    <div className="flex items-baseline gap-2.5">
                      <span className={`shrink-0 whitespace-nowrap font-display text-[13px] font-bold ${NUMBER_TONE_CLASSES[tone]}`}>
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
                          <span className={`mt-2.5 h-1 w-1 shrink-0 rounded-full ${DOT_TONE_CLASSES[tone]}`} />
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

                    <p className={`mt-4 inline-block rounded-xl px-4 py-3 text-[14px] leading-relaxed ${NOTE_TONE_CLASSES[tone]}`}>
                      {step.note}
                    </p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>

        <Reveal delay={0.1}>
          <div
            className="relative mt-4 overflow-hidden rounded-[28px] p-8 sm:p-10"
            style={{ background: "linear-gradient(135deg, #1f3f97 0%, #14294d 100%)" }}
          >
            <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left">
              <div className="w-32 shrink-0 sm:w-36">
                <CelebratingCharacter className="h-auto w-full" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                  {t("studentNavigator.finalTitle")}
                </h2>
                <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-white/75">
                  {t("studentNavigator.finalText1")} {t("studentNavigator.finalText2")}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
