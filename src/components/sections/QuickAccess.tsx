import { useTranslation } from "react-i18next";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { quickAccessItems } from "../../data/content";

type QuickAccessItem = { label: string };

export function QuickAccess() {
  const { t } = useTranslation();
  const items = t("quickAccess.items", { returnObjects: true }) as QuickAccessItem[];

  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow tone="blue" className="mb-3">
            {t("quickAccess.eyebrow")}
          </Eyebrow>
          <h2 className="font-display text-2xl font-extrabold text-[var(--color-ink-900)] sm:text-3xl">
            {t("quickAccess.title")}
          </h2>
        </Reveal>

        <div className="mt-9 grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-4">
          {items.map((item, i) => {
            const Icon = quickAccessItems[i].icon;
            return (
              <Reveal key={item.label} delay={i * 0.03}>
                <a
                  href={quickAccessItems[i].href}
                  className="group flex items-center gap-3.5 rounded-2xl border border-[var(--color-line)] bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-blue-500)]/30 hover:shadow-[var(--shadow-soft)] sm:p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--color-blue-50)] text-[var(--color-blue-600)] transition-colors group-hover:bg-[var(--color-blue-600)] group-hover:text-white">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0 text-[14.5px] font-semibold leading-tight text-[var(--color-ink-900)]">
                    {item.label}
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
