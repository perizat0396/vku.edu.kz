import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Newspaper } from "lucide-react";
import { Container } from "../components/ui/Container";
import { CategoryPill } from "../components/ui/CategoryPill";
import { PatternArt } from "../components/ui/PatternArt";
import { Reveal } from "../components/ui/Reveal";
import { newsCategoryTone } from "../data/content";

type NewsItem = { category: string; date: string; title: string; excerpt: string };

function formatDate(iso: string, locale: string) {
  try {
    return new Intl.DateTimeFormat(locale, { day: "2-digit", month: "long", year: "numeric" }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function NewsArticle() {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const items = t("news.items", { returnObjects: true }) as NewsItem[];
  const item = items[Number(id)];

  if (!item) {
    return (
      <div className="bg-white py-24 text-center">
        <Container className="max-w-2xl">
          <p className="text-[18px] text-[var(--color-ink-500)]">{t("news.title")}</p>
          <Link
            to="/news"
            className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--color-blue-600)] hover:text-[var(--color-blue-700)]"
          >
            <ArrowLeft size={16} />
            {t("common.backToHome")}
          </Link>
        </Container>
      </div>
    );
  }

  const tone = newsCategoryTone[item.category];

  return (
    <div className="bg-white pb-16 md:pb-24">
      <Container className="max-w-2xl pt-16 md:pt-20">
        <Reveal>
          <Link
            to="/news"
            className="mb-8 flex w-fit items-center gap-1.5 text-[14px] font-medium text-[var(--color-ink-500)] transition-colors hover:text-[var(--color-ink-900)]"
          >
            <ArrowLeft size={15} />
            {t("news.viewAll")}
          </Link>

          <div className="flex items-center gap-2.5">
            <CategoryPill tone={tone}>{t(`news.categories.${item.category}`)}</CategoryPill>
            <time className="text-[13px] text-[var(--color-ink-400)]" dateTime={item.date}>
              {formatDate(item.date, i18n.language)}
            </time>
          </div>

          <h1 className="mt-4 text-balance font-display text-3xl font-extrabold leading-[1.15] text-[var(--color-ink-900)] sm:text-4xl">
            {item.title}
          </h1>

          <p className="mt-6 text-[18px] leading-relaxed text-[var(--color-ink-700)]">{item.excerpt}</p>

          <div className="relative mt-8 aspect-[21/9] overflow-hidden rounded-2xl">
            <PatternArt
              theme={tone === "ink" ? "ink" : tone}
              icon={<Newspaper />}
              label=""
              showLabel={false}
              rounded="lg"
              className="h-full w-full"
            />
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
