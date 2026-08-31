import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  TrendingUp,
  Users,
  FilePen,
  MessagesSquare,
  ShieldCheck,
  Landmark,
  CalendarCheck,
  GraduationCap,
  Lightbulb,
  UserCheck,
  Rocket,
  Handshake,
  ListChecks,
  Network,
  School,
  Home as HomeIcon,
  UserCog,
  Phone,
  Mail,
} from "lucide-react";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { cn } from "../lib/cn";

type Tone = "blue" | "mint" | "sand";
const TONE_ORDER: Tone[] = ["blue", "mint", "sand"];

const SOLID_BG: Record<Tone, string> = {
  blue: "bg-[var(--color-blue-600)]",
  mint: "bg-[var(--color-mint-600)]",
  sand: "bg-[var(--color-sand-600)]",
};

const SOLID_TEXT: Record<Tone, string> = {
  blue: "text-[var(--color-blue-600)]",
  mint: "text-[var(--color-mint-600)]",
  sand: "text-[var(--color-sand-600)]",
};

const CARD_TILT = ["-rotate-2", "rotate-2", "-rotate-1"];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

type Task = { title: string; description: string };
type Leader = { name: string; role: string; spec: string; phone: string; email: string };
type ManagementItem = { title: string; textBefore: string; textBold: string; textAfter: string };

const TASK_ICONS = [TrendingUp, Users, FilePen, MessagesSquare, ShieldCheck, Landmark, CalendarCheck, GraduationCap];
const FUNCTION_ICONS = [Lightbulb, UserCheck, Rocket, Handshake, ListChecks];
const STRUCTURE_ICONS = [Network, School, HomeIcon, UserCog];

function SectionLabel({ children, tone = "blue" }: { children: string; tone?: Tone }) {
  return (
    <h2 className="flex items-center gap-3 font-display text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--color-ink-400)]">
      <span className={cn("h-2.5 w-2.5 rounded-full", SOLID_BG[tone])} aria-hidden />
      {children}
    </h2>
  );
}

export function StudentKurultai() {
  const { t } = useTranslation();
  const tasks = t("studentKurultai.tasks", { returnObjects: true }) as Task[];
  const functions = t("studentKurultai.functions", { returnObjects: true }) as string[];
  const structure = t("studentKurultai.structure", { returnObjects: true }) as string[];
  const leaders = t("studentKurultai.leaders", { returnObjects: true }) as Leader[];
  const management = t("studentKurultai.management", { returnObjects: true }) as ManagementItem[];

  return (
    <div className="overflow-hidden bg-white pb-16 md:pb-24">
      <div className="relative">
        <div
          className="pointer-events-none absolute -top-24 right-[-8%] h-[440px] w-[440px] rounded-full opacity-70 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-sand-100), transparent 70%)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-32 left-[-12%] h-[360px] w-[360px] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-mint-100), transparent 70%)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-64 right-[10%] h-[260px] w-[260px] rounded-full opacity-50 blur-3xl"
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
              {t("studentKurultai.eyebrow")}
            </Eyebrow>
            <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.1] text-[var(--color-ink-900)] sm:text-6xl">
              {t("studentKurultai.title")}
            </h1>
            <p className="mt-4 max-w-xl text-[18px] leading-relaxed text-[var(--color-ink-500)]">
              {t("studentKurultai.subtitle")}
            </p>
          </Reveal>
        </Container>
      </div>

      <Container className="max-w-3xl">
        {/* Mission — pure typography, no box */}
        <Reveal>
          <p className="mt-16 font-display text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--color-blue-600)]">
            {t("studentKurultai.missionLabel")}
          </p>
          <p className="mt-4 text-balance font-display text-[30px] font-black leading-[1.25] text-[var(--color-ink-900)] sm:text-[44px]">
            {t("studentKurultai.missionText")}
          </p>
        </Reveal>

        {/* Tasks — numbered manifesto rows */}
        <Reveal>
          <div className="mt-20">
            <SectionLabel tone="blue">{t("studentKurultai.tasksLabel")}</SectionLabel>
          </div>
        </Reveal>
        <div className="mt-2 flex flex-col border-t border-[var(--color-line)]">
          {tasks.map((task, i) => {
            const tone = TONE_ORDER[i % TONE_ORDER.length];
            const Icon = TASK_ICONS[i % TASK_ICONS.length];
            return (
              <Reveal key={task.title} delay={Math.min(i * 0.03, 0.24)}>
                <div className="flex flex-col gap-4 border-b border-[var(--color-line)] py-7 sm:flex-row sm:items-center sm:gap-8">
                  <div className="flex shrink-0 items-center gap-4 sm:w-[168px]">
                    <span className={cn("select-none font-display text-[40px] font-black leading-none", SOLID_TEXT[tone])}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={cn("grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white", SOLID_BG[tone])}>
                      <Icon size={19} />
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-[18px] font-bold leading-snug text-[var(--color-ink-900)]">
                      {task.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--color-ink-500)]">{task.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Functions — colored chips */}
        <Reveal>
          <div className="mt-20">
            <SectionLabel tone="mint">{t("studentKurultai.functionsLabel")}</SectionLabel>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-wrap gap-3">
            {functions.map((fn, i) => {
              const Icon = FUNCTION_ICONS[i % FUNCTION_ICONS.length];
              const tone = TONE_ORDER[i % TONE_ORDER.length];
              return (
                <span
                  key={fn}
                  className={cn(
                    "inline-flex items-center gap-2.5 rounded-full px-4.5 py-2.5 text-[14px] font-semibold text-white shadow-[var(--shadow-soft)]",
                    SOLID_BG[tone]
                  )}
                >
                  <Icon size={16} />
                  {fn}
                </span>
              );
            })}
          </div>
        </Reveal>

        {/* Organizational structure — floating icons, no boxes */}
        <Reveal>
          <div className="mt-20">
            <SectionLabel tone="sand">{t("studentKurultai.structureLabel")}</SectionLabel>
          </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {structure.map((label, i) => {
            const tone = TONE_ORDER[i % TONE_ORDER.length];
            const Icon = STRUCTURE_ICONS[i % STRUCTURE_ICONS.length];
            return (
              <Reveal key={label} delay={Math.min(i * 0.04, 0.16)}>
                <div className="flex flex-col items-center gap-3 text-center">
                  <span className={cn("grid h-16 w-16 place-items-center rounded-full text-white shadow-[var(--shadow-lift)]", SOLID_BG[tone])}>
                    <Icon size={26} />
                  </span>
                  <p className="font-display text-[14px] font-bold leading-snug text-[var(--color-ink-900)]">{label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Leadership — badge cards */}
        <Reveal>
          <div className="mt-20">
            <SectionLabel tone="blue">{t("studentKurultai.leadersLabel")}</SectionLabel>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-8 pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, i) => {
            const tone = TONE_ORDER[i % TONE_ORDER.length];
            return (
              <Reveal key={leader.name} delay={Math.min(i * 0.05, 0.2)}>
                <div
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-[26px] bg-white pt-10 text-center shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-0",
                    CARD_TILT[i % CARD_TILT.length]
                  )}
                >
                  <div className={cn("absolute inset-x-0 top-0 h-16", SOLID_BG[tone])} aria-hidden />
                  <span className="relative z-10 mx-auto grid h-20 w-20 place-items-center rounded-full border-4 border-white bg-white font-display text-xl font-extrabold text-[var(--color-ink-900)] shadow-[var(--shadow-soft)]">
                    {initials(leader.name)}
                  </span>
                  <div className="flex flex-1 flex-col px-6 pb-6">
                    <h3 className="mt-4 font-display text-[17px] font-bold leading-snug text-[var(--color-ink-900)]">
                      {leader.name}
                    </h3>
                    <p className={cn("mt-1.5 text-[12.5px] font-semibold uppercase tracking-wide", SOLID_TEXT[tone])}>
                      {leader.role}
                    </p>
                    <p className="mt-2.5 inline-block self-center rounded-full bg-[var(--color-mist)] px-3.5 py-1.5 text-[13px] text-[var(--color-ink-500)]">
                      {leader.spec}
                    </p>
                    <div className="mt-5 flex w-full flex-col gap-2 border-t border-[var(--color-line)] pt-4 text-left">
                      <a
                        href={`tel:${leader.phone.replace(/[^+\d]/g, "")}`}
                        className="flex items-center gap-2 text-[13.5px] text-[var(--color-ink-500)] transition-colors hover:text-[var(--color-blue-600)]"
                      >
                        <Phone size={14} className="shrink-0 text-[var(--color-blue-600)]" />
                        {leader.phone}
                      </a>
                      <a
                        href={`mailto:${leader.email}`}
                        className="flex items-center gap-2 text-[13.5px] text-[var(--color-ink-500)] transition-colors hover:text-[var(--color-blue-600)]"
                      >
                        <Mail size={14} className="shrink-0 text-[var(--color-blue-600)]" />
                        {leader.email}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Management structure — matching numeral treatment */}
        <Reveal>
          <div className="mt-20">
            <SectionLabel tone="mint">{t("studentKurultai.managementLabel")}</SectionLabel>
          </div>
        </Reveal>
        <div className="mt-2 flex flex-col border-t border-[var(--color-line)]">
          {management.map((item, i) => {
            const tone: Tone = i === 0 ? "blue" : "sand";
            return (
              <Reveal key={item.title} delay={Math.min(i * 0.06, 0.18)}>
                <div className="flex flex-col gap-4 border-b border-[var(--color-line)] py-7 sm:flex-row sm:items-start sm:gap-8">
                  <span className={cn("select-none font-display text-[40px] font-black leading-none sm:w-[168px]", SOLID_TEXT[tone])}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-[18px] font-bold leading-snug text-[var(--color-ink-900)]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--color-ink-500)]">
                      {item.textBefore}
                      <span className="font-semibold text-[var(--color-ink-900)]">{item.textBold}</span>
                      {item.textAfter}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
