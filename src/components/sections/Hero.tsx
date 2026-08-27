import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Globe2, Users } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Eyebrow } from "../ui/SectionHeading";
import { Photo } from "../ui/Photo";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="relative overflow-hidden bg-[var(--color-mist)]">
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-blue-100), transparent 70%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-sand-100), transparent 70%)" }}
        aria-hidden
      />

      <Container className="relative grid gap-14 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow tone="blue" className="mb-6">
            {t("hero.eyebrow")}
          </Eyebrow>

          <h1 className="text-balance text-[2.6rem] font-extrabold leading-[1.06] tracking-tight text-[var(--color-ink-900)] sm:text-6xl lg:text-[3.75rem]">
            {t("hero.title")}{" "}
            <span className="relative inline-block text-[var(--color-blue-600)]">
              {t("hero.titleAccent")}
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 14"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d="M2 10C60 3 240 3 298 10" stroke="var(--color-sand-400)" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-[46ch] text-balance text-lg leading-relaxed text-[var(--color-ink-500)]">
            {t("hero.subtitle")}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#admission" icon={<ArrowRight size={17} />}>
              {t("hero.ctaApply")}
            </Button>
            <Button href="#stats" variant="secondary">
              {t("hero.ctaAbout")}
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-[var(--color-line-strong)] pt-7">
            <div>
              <dt className="font-display text-2xl font-extrabold text-[var(--color-ink-900)]">15 000+</dt>
              <dd className="mt-1 text-[13px] leading-snug text-[var(--color-ink-500)]">{t("hero.cardStudents")}</dd>
            </div>
            <div>
              <dt className="font-display text-2xl font-extrabold text-[var(--color-ink-900)]">100+</dt>
              <dd className="mt-1 text-[13px] leading-snug text-[var(--color-ink-500)]">{t("hero.cardPrograms")}</dd>
            </div>
            <div>
              <dt className="font-display text-2xl font-extrabold text-[var(--color-ink-900)]">30+</dt>
              <dd className="mt-1 text-[13px] leading-snug text-[var(--color-ink-500)]">{t("hero.cardGlobal")}</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <Photo
            src="campus2.jpg"
            alt="Amanzholov University campus"
            rounded="xl"
            className="aspect-[4/5] w-full shadow-[var(--shadow-lift)] sm:aspect-[5/5.5]"
          />

          <div className="absolute -left-4 top-8 hidden w-44 rounded-2xl bg-white/90 p-4 shadow-[var(--shadow-lift)] ring-1 ring-black/5 backdrop-blur-md sm:block animate-float">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--color-mint-50)] text-[var(--color-mint-600)]">
                <Users size={17} />
              </span>
              <div>
                <p className="font-display text-base font-extrabold leading-none text-[var(--color-ink-900)]">15 000+</p>
                <p className="mt-1 text-[11px] leading-none text-[var(--color-ink-500)]">{t("hero.cardStudents")}</p>
              </div>
            </div>
          </div>

          <div
            className="absolute -bottom-6 -right-3 w-48 rounded-2xl bg-white/90 p-4 shadow-[var(--shadow-lift)] ring-1 ring-black/5 backdrop-blur-md sm:-right-6 animate-float"
            style={{ animationDelay: "1.4s" }}
          >
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--color-blue-50)] text-[var(--color-blue-600)]">
                <Globe2 size={17} />
              </span>
              <div>
                <p className="font-display text-base font-extrabold leading-none text-[var(--color-ink-900)]">30+</p>
                <p className="mt-1 text-[11px] leading-none text-[var(--color-ink-500)]">{t("hero.cardGlobal")}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      <div className="relative hidden justify-center pb-8 lg:flex">
        <a
          href="#stats"
          className="flex flex-col items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--color-ink-400)] transition-colors hover:text-[var(--color-ink-700)]"
        >
          {t("hero.scroll")}
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
