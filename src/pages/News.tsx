import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Newspaper } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/SectionHeading";
import { PatternArt } from "../components/ui/PatternArt";
import { CategoryPill } from "../components/ui/CategoryPill";
import { Reveal } from "../components/ui/Reveal";
import { cn } from "../lib/cn";
import { newsCategoryTone } from "../data/content";

type NewsItem = { category: string; date: string; title: string; excerpt: string };

function formatDate(iso: string, locale: string) {
  try {
    return new Intl.DateTimeFormat(locale, { day: "2-digit", month: "long", year: "numeric" }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function NewsPage() {
  const { t, i18n } = useTranslation();
  const items = t("news.items", { returnObjects: true }) as NewsItem[];
  const categoryKeys = Object.keys(t("news.categories", { returnObjects: true }) as Record<string, string>);
  const [active, setActive] = useState<string | "all">("all");

  const filtered = useMemo(
    () => (active === "all" ? items : items.filter((item) => item.category === active)),
    [items, active]
  );

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

        <Container className="relative max-w-3xl pt-16 md:pt-20">
          <Reveal>
            <Link
              to="/"
              className="mb-10 flex w-fit items-center gap-1.5 text-[14px] font-medium text-[var(--color-ink-500)] transition-colors hover:text-[var(--color-ink-900)]"
            >
              <ArrowLeft size={15} />
              {t("common.backToHome")}
            </Link>

            <Eyebrow tone="blue" className="mb-4">
              {t("news.eyebrow")}
            </Eyebrow>
            <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.1] text-[var(--color-ink-900)] sm:text-5xl">
              {t("news.title")}
            </h1>
            <p className="mt-4 max-w-md text-[19px] font-medium text-[var(--color-blue-600)]">
              {t("news.pageSubtitle")}
            </p>
          </Reveal>
        </Container>
      </div>

      <Container>
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
                {t(`news.categories.${key}`)}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 0.05, 0.3)}>
              <a
                href="#"
                className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white ring-1 ring-[var(--color-line)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <PatternArt
                    theme={newsCategoryTone[item.category] === "ink" ? "ink" : newsCategoryTone[item.category]}
                    icon={<Newspaper />}
                    label=""
                    showLabel={false}
                    rounded="md"
                    className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center gap-2.5">
                    <CategoryPill tone={newsCategoryTone[item.category]}>
                      {t(`news.categories.${item.category}`)}
                    </CategoryPill>
                    <time className="text-[13px] text-[var(--color-ink-400)]" dateTime={item.date}>
                      {formatDate(item.date, i18n.language)}
                    </time>
                  </div>
                  <h2 className="text-balance font-display text-xl font-bold leading-snug text-[var(--color-ink-900)]">
                    {item.title}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-[var(--color-ink-500)]">{item.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[14px] font-semibold text-[var(--color-blue-600)]">
                    {t("common.readMore")}
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
