import {
  GraduationCap,
  FlaskConical,
  Rocket,
  Globe2,
  Users,
  Briefcase,
  Library,
  LayoutGrid,
  CalendarDays,
  Mail,
  ShieldCheck,
  BookOpenCheck,
  UserRound,
  Cpu,
  Bot,
  Dna,
} from "lucide-react";

/**
 * Structural (non-translated) data paired positionally with the i18n arrays
 * of the same name. Text lives in the locale JSON files; icons, hrefs and
 * visual themes live here so the CMS/API layer can eventually replace either
 * side independently.
 */

export const directionIcons = [GraduationCap, FlaskConical, Rocket, Globe2, Users, Briefcase];
export const directionThemes = ["blue", "mint", "sand", "blue", "mint", "sand"] as const;

export const newsCategoryTone: Record<string, "blue" | "mint" | "sand" | "ink"> = {
  science: "mint",
  admission: "blue",
  international: "sand",
  campus: "ink",
  achievement: "mint",
};

export const announcementCategoryTone: Record<string, "blue" | "mint" | "sand" | "ink"> = {
  academic: "blue",
  event: "sand",
  scholarship: "mint",
  administrative: "ink",
};

export const quickAccessItems = [
  { icon: LayoutGrid, href: "#" },
  { icon: UserRound, href: "#" },
  { icon: CalendarDays, href: "#" },
  { icon: Library, href: "#" },
  { icon: BookOpenCheck, href: "#" },
  { icon: GraduationCap, href: "#" },
  { icon: ShieldCheck, href: "#" },
  { icon: Mail, href: "#" },
];

export const sciencePointIcons = [Cpu, Bot, Dna];

export const partnerCount = 10;
