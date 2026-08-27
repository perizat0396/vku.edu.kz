import { useTranslation } from "react-i18next";
import { ArrowRight, HeartHandshake, Globe2 } from "lucide-react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { PatternArt } from "../ui/PatternArt";
import { Photo } from "../ui/Photo";
import { Reveal } from "../ui/Reveal";

type Tile =
  | { kind: "photo"; src: string; alt: string; aspect: string; rotate: string }
  | { kind: "pattern"; theme: "blue" | "mint" | "sand"; icon: any; aspect: string; rotate: string; label: string };

const TILES: Tile[] = [
  { kind: "photo", src: "IMG_4817-scaled.jpg", alt: "Amanzholov University sports team with medals", aspect: "aspect-[4/5]", rotate: "-rotate-1" },
  { kind: "photo", src: "MG_2102.jpg", alt: "Student dance ensemble performance", aspect: "aspect-square", rotate: "rotate-1" },
  { kind: "pattern", theme: "mint", icon: HeartHandshake, aspect: "aspect-[4/3]", rotate: "rotate-1", label: "Volunteering" },
  { kind: "photo", src: "6C8A1180.JPG", alt: "Student dance crew performance", aspect: "aspect-[3/4]", rotate: "-rotate-1" },
  { kind: "pattern", theme: "sand", icon: Globe2, aspect: "aspect-square", rotate: "-rotate-1", label: "Exchange" },
];

export function StudentLife() {
  const { t } = useTranslation();
  const tags = t("studentLife.tags", { returnObjects: true }) as string[];

  return (
    <section id="student-life" className="overflow-hidden bg-white py-20 md:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
        <Reveal>
          <Eyebrow tone="sand" className="mb-5">
            {t("studentLife.eyebrow")}
          </Eyebrow>
          <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.12] text-[var(--color-ink-900)] sm:text-4xl lg:text-[2.75rem]">
            {t("studentLife.title")}
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-[var(--color-ink-500)]">
            {t("studentLife.subtitle")}
          </p>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[var(--color-line-strong)] px-3.5 py-1.5 text-[13.5px] font-medium text-[var(--color-ink-700)]"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Button href="#" icon={<ArrowRight size={17} />}>
              {t("studentLife.cta")}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="columns-2 gap-3.5 sm:gap-4 [column-fill:balance]">
            {TILES.map((tile) => {
              const tileClassName = `mb-3.5 w-full break-inside-avoid shadow-[var(--shadow-soft)] transition-transform duration-500 hover:scale-[1.02] hover:rotate-0 sm:mb-4 ${tile.aspect} ${tile.rotate}`;
              return tile.kind === "photo" ? (
                <Photo key={tile.src} src={tile.src} alt={tile.alt} rounded="lg" className={tileClassName} />
              ) : (
                <PatternArt
                  key={tile.label}
                  theme={tile.theme}
                  icon={<tile.icon />}
                  label=""
                  showLabel={false}
                  rounded="lg"
                  className={tileClassName}
                />
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
