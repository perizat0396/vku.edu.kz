import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Newspaper } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { PatternArt } from "../ui/PatternArt";
import { CategoryPill } from "../ui/CategoryPill";
import { Reveal } from "../ui/Reveal";
import { AnnouncementsPanel } from "./AnnouncementsPanel";
import { newsCategoryTone } from "../../data/content";

type NewsItem = { category: string; date: string; title: string; excerpt: string };

function formatDate(iso: string, locale: string) {
  try {
    return new Intl.DateTimeFormat(locale, { day: "2-digit", month: "long", year: "numeric" }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function News() {
  const { t, i18n } = useTranslation();
  const items = t("news.items", { returnObjects: true }) as NewsItem[];
  const [featured, ...rest] = items;

  return (
    <section id="news" className="bg-[var(--color-mist)] py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-10">
          <div>
            <SectionHeading
              eyebrow={t("news.eyebrow") ?? undefined}
              title={t("news.title")}
              action={
                <div className="flex items-center gap-5">
                  <Link
                    to="/news"
                    className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--color-blue-600)] transition-colors hover:text-[var(--color-blue-700)]"
                  >
                    {t("news.viewAll")}
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--color-ink-500)] transition-colors hover:text-[var(--color-ink-900)]"
                  >
                    {t("nav.digest")}
                    <ArrowRight size={16} />
                  </a>
                </div>
              }
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Reveal className="md:row-span-2">
                <Link to="/news/0" className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white ring-1 ring-[var(--color-line)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <PatternArt
                      theme="blue"
                      icon={<Newspaper />}
                      label=""
                      showLabel={false}
                      rounded="md"
                      className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center gap-2.5">
                      <CategoryPill tone={newsCategoryTone[featured.category]}>
                        {t(`news.categories.${featured.category}`)}
                      </CategoryPill>
                      <time className="text-[13px] text-[var(--color-ink-400)]" dateTime={featured.date}>
                        {formatDate(featured.date, i18n.language)}
                      </time>
                    </div>
                    <h3 className="text-balance font-display text-xl font-bold leading-snug text-[var(--color-ink-900)]">
                      {featured.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[var(--color-ink-500)]">{featured.excerpt}</p>
                  </div>
                </Link>
              </Reveal>

              <div className="flex flex-col gap-6">
                {rest.map((item, i) => (
                  <Reveal key={item.title} delay={0.1 + i * 0.06}>
                    <Link
                      to={`/news/${i + 1}`}
                      className="group flex gap-4 rounded-2xl bg-white p-4 ring-1 ring-[var(--color-line)] transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]"
                    >
                      <PatternArt
                        theme={i % 2 === 0 ? "mint" : "sand"}
                        icon={<Newspaper />}
                        label=""
                        showLabel={false}
                        rounded="md"
                        className="aspect-square w-24 shrink-0 sm:w-28"
                      />
                      <div className="flex min-w-0 flex-col justify-center gap-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <CategoryPill tone={newsCategoryTone[item.category]}>
                            {t(`news.categories.${item.category}`)}
                          </CategoryPill>
                          <time className="text-[12px] text-[var(--color-ink-400)]" dateTime={item.date}>
                            {formatDate(item.date, i18n.language)}
                          </time>
                        </div>
                        <h4 className="line-clamp-2 font-display text-[15px] font-bold leading-snug text-[var(--color-ink-900)]">
                          {item.title}
                        </h4>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="ml-auto mt-1 shrink-0 self-start text-[var(--color-ink-400)] opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <AnnouncementsPanel />
        </div>
      </Container>
    </section>
  );
}
