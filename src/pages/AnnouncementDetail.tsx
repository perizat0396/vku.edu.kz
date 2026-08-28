import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { announcementCategoryTone } from "../data/content";

type Announcement = { category: string; date: string; title: string };

const EYEBROW_TONE: Record<string, "blue" | "mint" | "sand" | "ink"> = {
  blue: "blue",
  mint: "mint",
  sand: "sand",
  ink: "ink",
};

export function AnnouncementDetail() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const items = t("announcements.items", { returnObjects: true }) as Announcement[];
  const item = items[Number(id)];

  if (!item) {
    return (
      <div className="bg-white py-24 text-center">
        <Container className="max-w-2xl">
          <p className="text-[18px] text-[var(--color-ink-500)]">{t("announcements.title")}</p>
          <Link
            to="/announcements"
            className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--color-blue-600)] hover:text-[var(--color-blue-700)]"
          >
            <ArrowLeft size={16} />
            {t("common.backToHome")}
          </Link>
        </Container>
      </div>
    );
  }

  const tone = announcementCategoryTone[item.category];

  return (
    <div className="bg-white pb-16 md:pb-24">
      <Container className="max-w-2xl pt-16 md:pt-20">
        <Reveal>
          <Link
            to="/announcements"
            className="mb-10 flex w-fit items-center gap-1.5 text-[14px] font-medium text-[var(--color-ink-500)] transition-colors hover:text-[var(--color-ink-900)]"
          >
            <ArrowLeft size={15} />
            {t("announcements.viewAll")}
          </Link>

          <Eyebrow tone={EYEBROW_TONE[tone]} className="mb-4">
            {t(`announcements.categories.${item.category}`)}
          </Eyebrow>

          <h1 className="text-balance font-display text-3xl font-extrabold leading-[1.2] text-[var(--color-ink-900)] sm:text-4xl">
            {item.title}
          </h1>

          <p className="mt-5 text-[15px] font-medium text-[var(--color-ink-500)]">{item.date}</p>
        </Reveal>
      </Container>
    </div>
  );
}
