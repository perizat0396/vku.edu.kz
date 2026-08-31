import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
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

const TILE_TONE: Record<Tone, string> = {
  blue: "bg-[var(--color-blue-600)]",
  mint: "bg-[var(--color-mint-600)]",
  sand: "bg-[var(--color-sand-600)]",
};

const TILE_ROTATE = ["-rotate-1", "rotate-1", "-rotate-1", "rotate-1"];

const CHIP_TONE: Record<Tone, string> = {
  blue: "bg-[var(--color-blue-600)]",
  mint: "bg-[var(--color-mint-600)]",
  sand: "bg-[var(--color-sand-600)]",
};

const BAND_TONE: Record<Tone, string> = {
  blue: "bg-[var(--color-blue-600)]",
  mint: "bg-[var(--color-mint-600)]",
  sand: "bg-[var(--color-sand-600)]",
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
        {/* Mission — bold gradient banner with a big pull-quote treatment */}
        <Reveal>
          <div
            className="relative mt-14 overflow-hidden rounded-[32px] p-8 sm:p-12"
            style={{
              background:
                "linear-gradient(120deg, var(--color-blue-700) 0%, var(--color-blue-600) 45%, var(--color-mint-600) 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
                backgroundSize: "18px 18px",
              }}
              aria-hidden
            />
            <svg
              className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rotate-12 text-white/[0.1]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              aria-hidden
            >
              <path d="m12 5.4 7.6 3.4-7.6 3.4-7.6-3.4L12 5.4Z" strokeLinejoin="round" />
              <path d="M7.6 10.4v3.4c0 1.4 2 2.6 4.4 2.6s4.4-1.2 4.4-2.6v-3.4" />
            </svg>

            <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white text-[var(--color-blue-600)] shadow-[var(--shadow-lift)]">
              <Sparkles size={24} />
            </span>

            <p className="relative mt-6 select-none font-display text-[90px] font-black leading-none text-white/15 sm:text-[120px]">
              &ldquo;
            </p>

            <span className="relative -mt-10 block text-[13px] font-bold uppercase tracking-[0.16em] text-white/70 sm:-mt-14">
              {t("studentKurultai.missionLabel")}
            </span>
            <p className="relative mt-3 max-w-2xl text-balance font-display text-[24px] font-bold leading-[1.35] text-white sm:text-[30px]">
              {t("studentKurultai.missionText")}
            </p>
          </div>
        </Reveal>

        {/* Tasks — saturated color tiles */}
        <Reveal>
          <h2 className="mt-16 font-display text-2xl font-extrabold text-[var(--color-ink-900)] sm:text-3xl">
            {t("studentKurultai.tasksLabel")}
          </h2>
        </Reveal>
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {tasks.map((task, i) => {
            const tone = TONE_ORDER[i % TONE_ORDER.length];
            return (
              <Reveal key={task.title} delay={Math.min(i * 0.04, 0.24)}>
                <div
                  className={cn(
                    "relative h-full overflow-hidden rounded-[26px] p-6 text-white shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-0",
                    TILE_TONE[tone],
                    TILE_ROTATE[i % TILE_ROTATE.length]
                  )}
                >
                  <span
                    className="pointer-events-none absolute -right-2 -top-5 select-none font-display text-[88px] font-black leading-none text-white/[0.13]"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-white text-[var(--color-ink-900)]">
                    {(() => {
                      const Icon = TASK_ICONS[i % TASK_ICONS.length];
                      return <Icon size={20} />;
                    })()}
                  </span>
                  <h3 className="relative mt-4 font-display text-[17px] font-bold leading-snug">{task.title}</h3>
                  <p className="relative mt-1.5 text-[14.5px] leading-relaxed text-white/85">{task.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Functions — colored chips */}
        <Reveal>
          <h2 className="mt-16 font-display text-2xl font-extrabold text-[var(--color-ink-900)] sm:text-3xl">
            {t("studentKurultai.functionsLabel")}
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-7 flex flex-wrap gap-3">
            {functions.map((fn, i) => {
              const Icon = FUNCTION_ICONS[i % FUNCTION_ICONS.length];
              const tone = TONE_ORDER[i % TONE_ORDER.length];
              return (
                <span
                  key={fn}
                  className={cn(
                    "inline-flex items-center gap-2.5 rounded-full px-4.5 py-2.5 text-[14px] font-semibold text-white shadow-[var(--shadow-soft)]",
                    CHIP_TONE[tone]
                  )}
                >
                  <Icon size={16} />
                  {fn}
                </span>
              );
            })}
          </div>
        </Reveal>

        {/* Organizational structure — connected row */}
        <Reveal>
          <h2 className="mt-16 font-display text-2xl font-extrabold text-[var(--color-ink-900)] sm:text-3xl">
            {t("studentKurultai.structureLabel")}
          </h2>
        </Reveal>
        <div className="relative mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-[var(--color-line-strong)] lg:block"
            aria-hidden
          />
          {structure.map((label, i) => {
            const tone = TONE_ORDER[i % TONE_ORDER.length];
            const Icon = STRUCTURE_ICONS[i % STRUCTURE_ICONS.length];
            return (
              <Reveal key={label} delay={Math.min(i * 0.04, 0.16)}>
                <div className="relative flex h-full flex-col items-center gap-3 rounded-[22px] border border-[var(--color-line)] bg-white p-6 text-center">
                  <span className={cn("relative z-10 grid h-14 w-14 place-items-center rounded-2xl text-white shadow-[var(--shadow-soft)]", BAND_TONE[tone])}>
                    <Icon size={24} />
                  </span>
                  <h3 className="font-display text-[15px] font-bold leading-snug text-[var(--color-ink-900)]">{label}</h3>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Leadership — badge cards */}
        <Reveal>
          <h2 className="mt-16 font-display text-2xl font-extrabold text-[var(--color-ink-900)] sm:text-3xl">
            {t("studentKurultai.leadersLabel")}
          </h2>
        </Reveal>
        <div className="mt-7 grid gap-8 pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, i) => {
            const tone = TONE_ORDER[i % TONE_ORDER.length];
            return (
              <Reveal key={leader.name} delay={Math.min(i * 0.05, 0.2)}>
                <div
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[var(--color-line)] bg-white pt-10 text-center shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-0",
                    CARD_TILT[i % CARD_TILT.length]
                  )}
                >
                  <div className={cn("absolute inset-x-0 top-0 h-16", BAND_TONE[tone])} aria-hidden />
                  <span className="relative z-10 mx-auto grid h-20 w-20 place-items-center rounded-full border-4 border-white bg-white font-display text-xl font-extrabold text-[var(--color-ink-900)] shadow-[var(--shadow-soft)]">
                    {initials(leader.name)}
                  </span>
                  <div className="flex flex-1 flex-col px-6 pb-6">
                    <h3 className="mt-4 font-display text-[17px] font-bold leading-snug text-[var(--color-ink-900)]">
                      {leader.name}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] font-semibold uppercase tracking-wide text-[var(--color-blue-600)]">
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

        {/* Management structure */}
        <Reveal>
          <h2 className="mt-16 font-display text-2xl font-extrabold text-[var(--color-ink-900)] sm:text-3xl">
            {t("studentKurultai.managementLabel")}
          </h2>
        </Reveal>
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {management.map((item, i) => {
            const tone: Tone = i === 0 ? "blue" : "sand";
            const Icon = i === 0 ? UserCog : Users;
            return (
              <Reveal key={item.title} delay={Math.min(i * 0.06, 0.18)}>
                <div className={cn("h-full rounded-[26px] p-6", tone === "blue" ? "bg-[var(--color-blue-50)]" : "bg-[var(--color-sand-50)]")}>
                  <span className={cn("grid h-12 w-12 place-items-center rounded-2xl text-white", TILE_TONE[tone])}>
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 font-display text-[16.5px] font-bold text-[var(--color-ink-900)]">{item.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--color-ink-700)]">
                    {item.textBefore}
                    <span className="font-semibold text-[var(--color-ink-900)]">{item.textBold}</span>
                    {item.textAfter}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
