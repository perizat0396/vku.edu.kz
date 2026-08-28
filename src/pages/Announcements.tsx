import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { cn } from "../lib/cn";
import { announcementCategoryTone } from "../data/content";

type Announcement = { category: string; date: string; title: string };

const DOT_TONE: Record<string, string> = {
  blue: "bg-[var(--color-blue-500)]",
  mint: "bg-[var(--color-mint-500)]",
  sand: "bg-[var(--color-sand-400)]",
  ink: "bg-[var(--color-ink-400)]",
};

export function Announcements() {
  const { t } = useTranslation();
  const items = t("announcements.items", { returnObjects: true }) as Announcement[];
  const categoryKeys = Object.keys(t("announcements.categories", { returnObjects: true }) as Record<string, string>);
  const [active, setActive] = useState<string | "all">("all");

  const indexed = useMemo(() => items.map((item, index) => ({ item, index })), [items]);
  const filtered = useMemo(
    () => (active === "all" ? indexed : indexed.filter(({ item }) => item.category === active)),
    [indexed, active]
  );

  return (
    <div className="overflow-hidden bg-white pb-16 md:pb-24">
      <div className="relative">
        <div
          className="pointer-events-none absolute -top-24 right-[-8%] h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-sand-100), transparent 70%)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-40 left-[-10%] h-[320px] w-[320px] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-blue-100), transparent 70%)" }}
          aria-hidden
        />

        <Container className="relative max-w-3xl pt-16 md:pt-20">
          <Reveal>
            <Link
              to="/"
              className="mb-10 flex w-fit items-center gap-1.5 text-[14px] font-medium text-[var(--color-ink-500)] transition-colors hover:text-[var(--color-ink-900)]"
            >
              <ArrowLeft size={15} />
              {t("common.backToHome")}
            </Link>

            <Eyebrow tone="sand" className="mb-4">
              {t("announcements.eyebrow")}
            </Eyebrow>
            <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.1] text-[var(--color-ink-900)] sm:text-5xl">
              {t("announcements.title")}
            </h1>
            <p className="mt-4 max-w-md text-[19px] font-medium text-[var(--color-blue-600)]">
              {t("announcements.pageSubtitle")}
            </p>
          </Reveal>
        </Container>
      </div>

      <Container className="max-w-3xl">
        <Reveal>
          <div className="flex flex-wrap gap-2" role="group" aria-label={t("announcements.filterAll") ?? undefined}>
            <button
              type="button"
              onClick={() => setActive("all")}
              className={cn(
                "rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors",
                active === "all"
                  ? "bg-[var(--color-ink-900)] text-white"
                  : "bg-[var(--color-mist)] text-[var(--color-ink-700)] hover:bg-[var(--color-cloud)]"
              )}
            >
              {t("announcements.filterAll")}
            </button>
            {categoryKeys.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                className={cn(
                  "rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors",
                  active === key
                    ? "bg-[var(--color-ink-900)] text-white"
                    : "bg-[var(--color-mist)] text-[var(--color-ink-700)] hover:bg-[var(--color-cloud)]"
                )}
              >
                {t(`announcements.categories.${key}`)}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="mt-8 flex flex-col divide-y divide-[var(--color-line)] rounded-[28px] border border-[var(--color-line)]">
          {filtered.map(({ item, index }, i) => (
            <Reveal key={item.title} delay={Math.min(i * 0.04, 0.24)}>
              <li>
                <Link
                  to={`/announcements/${index}`}
                  className="group flex items-start gap-4 p-5 transition-colors hover:bg-[var(--color-mist)] sm:p-6"
                >
                  <span
                    className={cn("mt-2 h-2 w-2 shrink-0 rounded-full", DOT_TONE[announcementCategoryTone[item.category]])}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-ink-400)]">
                      {item.date} · {t(`announcements.categories.${item.category}`)}
                    </p>
                    <p className="mt-1.5 text-[16px] font-medium leading-snug text-[var(--color-ink-900)]">
                      {item.title}
                    </p>
                  </div>
                  <ArrowRight
                    size={17}
                    className="mt-1 shrink-0 text-[var(--color-ink-400)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--color-ink-700)]"
                  />
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </div>
  );
}
