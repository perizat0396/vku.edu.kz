import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, Megaphone } from "lucide-react";
import { Eyebrow } from "../ui/SectionHeading";
import { cn } from "../../lib/cn";
import { announcementCategoryTone } from "../../data/content";

type Announcement = { category: string; date: string; title: string };

export function AnnouncementsPanel() {
  const { t } = useTranslation();
  const items = t("announcements.items", { returnObjects: true }) as Announcement[];
  const categoryKeys = Object.keys(t("announcements.categories", { returnObjects: true }) as Record<string, string>);
  const [active, setActive] = useState<string | "all">("all");

  const filtered = useMemo(
    () => (active === "all" ? items : items.filter((item) => item.category === active)),
    [items, active]
  );

  return (
    <aside className="flex flex-col rounded-[28px] bg-[var(--color-ink-900)] p-6 text-white sm:p-7" aria-label={t("announcements.title") ?? undefined}>
      <div className="flex items-center gap-2.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-[var(--color-sand-400)]">
          <Megaphone size={16} />
        </span>
        <div>
          <Eyebrow inverse tone="sand" className="mb-0.5">
            {t("announcements.eyebrow")}
          </Eyebrow>
          <h2 className="font-display text-lg font-bold">{t("announcements.title")}</h2>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5" role="group" aria-label={t("announcements.filterAll") ?? undefined}>
        <button
          type="button"
          onClick={() => setActive("all")}
          className={cn(
            "rounded-full px-3 py-1.5 text-[12.5px] font-semibold transition-colors",
            active === "all" ? "bg-white text-[var(--color-ink-900)]" : "bg-white/10 text-white/70 hover:bg-white/15"
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
              "rounded-full px-3 py-1.5 text-[12.5px] font-semibold transition-colors",
              active === key ? "bg-white text-[var(--color-ink-900)]" : "bg-white/10 text-white/70 hover:bg-white/15"
            )}
          >
            {t(`announcements.categories.${key}`)}
          </button>
        ))}
      </div>

      <ul className="mt-6 flex flex-col divide-y divide-white/10">
        {filtered.map((item) => (
          <li key={item.title}>
            <a href="#" className="group flex items-start gap-3 py-4 first:pt-0">
              <span
                className={cn(
                  "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                  {
                    blue: "bg-[var(--color-blue-300)]",
                    mint: "bg-[var(--color-mint-500)]",
                    sand: "bg-[var(--color-sand-400)]",
                    ink: "bg-white/40",
                  }[announcementCategoryTone[item.category]]
                )}
              />
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-medium uppercase tracking-wide text-white/45">
                  {item.date} · {t(`announcements.categories.${item.category}`)}
                </p>
                <p className="mt-1 text-[14.5px] font-medium leading-snug text-white/90 transition-colors group-hover:text-white">
                  {item.title}
                </p>
              </div>
              <ArrowRight size={15} className="mt-1 shrink-0 text-white/30 transition-transform group-hover:translate-x-0.5 group-hover:text-white/70" />
            </a>
          </li>
        ))}
      </ul>

      <Link
        to="/announcements"
        className="mt-5 inline-flex items-center gap-1.5 self-start text-[13.5px] font-semibold text-white/70 transition-colors hover:text-white"
      >
        {t("announcements.viewAll")}
        <ArrowRight size={14} />
      </Link>
    </aside>
  );
}
