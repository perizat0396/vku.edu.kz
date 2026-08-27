import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
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
    <div className="overflow-hidden bg-white py-16 md:py-24">
      <div className="relative">
        <div
          className="pointer-events-none absolute -top-24 right-[-8%] h-[380px] w-[380px] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-blue-100), transparent 70%)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-32 left-[-10%] h-[300px] w-[300px] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-sand-100), transparent 70%)" }}
          aria-hidden
        />

        <Container className="relative max-w-3xl">
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
        </Container>
      </div>

      <Container className="max-w-3xl">
        <ol className="mt-14 flex flex-col gap-6">
          {steps.map((step, i) => {
            const tone = STEP_TONE_ORDER[i % STEP_TONE_ORDER.length];
            const iconId = STEP_ICON_ORDER[i % STEP_ICON_ORDER.length];
            return (
              <Reveal key={step.title} delay={Math.min(i * 0.05, 0.3)}>
                <li className="relative rounded-[28px] border border-[var(--color-line)] p-6 transition-shadow hover:shadow-[var(--shadow-soft)] sm:p-8">
                  <div className="flex items-start gap-4">
                    <StepIcon id={iconId} tone={tone} className="h-14 w-14 sm:h-16 sm:w-16" />
                    <div className="min-w-0 flex-1">
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

                      <p className={`mt-4 rounded-xl px-4 py-3 text-[14px] leading-relaxed ${NOTE_TONE_CLASSES[tone]}`}>
                        {step.note}
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>

        <Reveal delay={0.1}>
          <div
            className="relative mt-10 overflow-hidden rounded-[28px] p-8 text-center sm:p-12"
            style={{ background: "linear-gradient(135deg, #1f3f97 0%, #14294d 100%)" }}
          >
            <svg
              className="pointer-events-none absolute -left-6 -top-6 h-32 w-32 -rotate-12 text-white/[0.08]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              aria-hidden
            >
              <path d="M12 3.4c2.4 1.9 3.7 4.8 3.7 8.1 0 2-.5 3.7-1.2 5l-2.5 2-2.5-2c-.7-1.3-1.2-3-1.2-5 0-3.3 1.3-6.2 3.7-8.1Z" />
              <circle cx="12" cy="10.6" r="1.6" />
            </svg>
            <svg
              className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rotate-12 text-white/[0.08]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              aria-hidden
            >
              <path d="m12 5.4 7.6 3.4-7.6 3.4-7.6-3.4L12 5.4Z" strokeLinejoin="round" />
              <path d="M7.6 10.4v3.4c0 1.4 2 2.6 4.4 2.6s4.4-1.2 4.4-2.6v-3.4" />
            </svg>

            <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-white">
              <Lightbulb size={24} strokeWidth={1.75} />
            </span>
            <h2 className="relative mt-5 font-display text-2xl font-extrabold text-white sm:text-3xl">
              {t("studentNavigator.finalTitle")}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-white/75">
              {t("studentNavigator.finalText1")} {t("studentNavigator.finalText2")}
            </p>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
