import type { ComponentType } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Target,
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

const BADGE_TONE: Record<Tone, string> = {
  blue: "bg-[var(--color-blue-50)] text-[var(--color-blue-600)]",
  mint: "bg-[var(--color-mint-50)] text-[var(--color-mint-600)]",
  sand: "bg-[var(--color-sand-50)] text-[var(--color-sand-600)]",
};

const AVATAR_TONE: Record<Tone, string> = {
  blue: "bg-[var(--color-blue-100)] text-[var(--color-blue-700)]",
  mint: "bg-[var(--color-mint-100)] text-[var(--color-mint-600)]",
  sand: "bg-[var(--color-sand-100)] text-[var(--color-sand-600)]",
};

function IconBadge({ icon: Icon, tone, className }: { icon: ComponentType<{ size?: number }>; tone: Tone; className?: string }) {
  return (
    <span className={cn("grid h-12 w-12 shrink-0 place-items-center rounded-2xl", BADGE_TONE[tone], className)}>
      <Icon size={22} />
    </span>
  );
}

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

            <Eyebrow tone="sand" className="mb-4">
              {t("studentKurultai.eyebrow")}
            </Eyebrow>
            <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.1] text-[var(--color-ink-900)] sm:text-5xl">
              {t("studentKurultai.title")}
            </h1>
            <p className="mt-4 max-w-xl text-[18px] leading-relaxed text-[var(--color-ink-500)]">
              {t("studentKurultai.subtitle")}
            </p>
          </Reveal>
        </Container>
      </div>

      <Container className="max-w-3xl">
        {/* Mission */}
        <Reveal>
          <div className="mt-14 flex flex-col gap-5 rounded-[28px] border border-[var(--color-mint-100)] bg-[var(--color-mint-50)] p-7 sm:flex-row sm:items-start sm:p-8">
            <IconBadge icon={Target} tone="mint" className="bg-white" />
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-wide text-[var(--color-mint-600)]">
                {t("studentKurultai.missionLabel")}
              </p>
              <p className="mt-2 text-[17px] leading-relaxed text-[var(--color-ink-900)]">
                {t("studentKurultai.missionText")}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Tasks */}
        <Reveal>
          <h2 className="mt-16 font-display text-2xl font-extrabold text-[var(--color-ink-900)]">
            {t("studentKurultai.tasksLabel")}
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {tasks.map((task, i) => (
            <Reveal key={task.title} delay={Math.min(i * 0.04, 0.24)}>
              <div className="h-full rounded-2xl border border-[var(--color-line)] p-6 transition-shadow hover:shadow-[var(--shadow-soft)]">
                <IconBadge icon={TASK_ICONS[i % TASK_ICONS.length]} tone={TONE_ORDER[i % TONE_ORDER.length]} />
                <h3 className="mt-4 font-display text-[16.5px] font-bold text-[var(--color-ink-900)]">{task.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-[var(--color-ink-500)]">{task.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Functions */}
        <Reveal>
          <h2 className="mt-16 font-display text-2xl font-extrabold text-[var(--color-ink-900)]">
            {t("studentKurultai.functionsLabel")}
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-wrap gap-3">
            {functions.map((fn, i) => {
              const Icon = FUNCTION_ICONS[i % FUNCTION_ICONS.length];
              return (
                <span
                  key={fn}
                  className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-line-strong)] px-4 py-2.5 text-[14px] font-medium text-[var(--color-ink-700)]"
                >
                  <Icon size={16} className="text-[var(--color-blue-600)]" />
                  {fn}
                </span>
              );
            })}
          </div>
        </Reveal>

        {/* Organizational structure */}
        <Reveal>
          <h2 className="mt-16 font-display text-2xl font-extrabold text-[var(--color-ink-900)]">
            {t("studentKurultai.structureLabel")}
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {structure.map((label, i) => (
            <Reveal key={label} delay={Math.min(i * 0.04, 0.16)}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-[var(--color-line)] p-6 text-center">
                <IconBadge icon={STRUCTURE_ICONS[i % STRUCTURE_ICONS.length]} tone={TONE_ORDER[i % TONE_ORDER.length]} />
                <h3 className="font-display text-[15px] font-bold leading-snug text-[var(--color-ink-900)]">{label}</h3>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Leadership */}
        <Reveal>
          <h2 className="mt-16 font-display text-2xl font-extrabold text-[var(--color-ink-900)]">
            {t("studentKurultai.leadersLabel")}
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, i) => {
            const tone = TONE_ORDER[i % TONE_ORDER.length];
            return (
              <Reveal key={leader.name} delay={Math.min(i * 0.05, 0.2)}>
                <div className="flex h-full flex-col items-center rounded-[24px] border border-[var(--color-line)] p-6 text-center transition-shadow hover:shadow-[var(--shadow-soft)]">
                  <span
                    className={cn(
                      "grid h-24 w-24 place-items-center rounded-full font-display text-2xl font-extrabold",
                      AVATAR_TONE[tone]
                    )}
                  >
                    {initials(leader.name)}
                  </span>
                  <h3 className="mt-4 font-display text-[17px] font-bold leading-snug text-[var(--color-ink-900)]">
                    {leader.name}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] font-semibold uppercase tracking-wide text-[var(--color-blue-600)]">
                    {leader.role}
                  </p>
                  <p className="mt-2.5 inline-block rounded-full bg-[var(--color-mist)] px-3.5 py-1.5 text-[13px] text-[var(--color-ink-500)]">
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
              </Reveal>
            );
          })}
        </div>

        {/* Management structure */}
        <Reveal>
          <h2 className="mt-16 font-display text-2xl font-extrabold text-[var(--color-ink-900)]">
            {t("studentKurultai.managementLabel")}
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {management.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 0.06, 0.18)}>
              <div className="h-full rounded-2xl border border-[var(--color-line)] p-6">
                <IconBadge icon={i === 0 ? UserCog : Users} tone={TONE_ORDER[i % TONE_ORDER.length]} />
                <h3 className="mt-4 font-display text-[16.5px] font-bold text-[var(--color-ink-900)]">{item.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--color-ink-700)]">
                  {item.textBefore}
                  <span className="font-semibold text-[var(--color-ink-900)]">{item.textBold}</span>
                  {item.textAfter}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
