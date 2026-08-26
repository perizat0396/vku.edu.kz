import { useTranslation } from "react-i18next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "../ui/SocialIcons";

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram" },
  { icon: FacebookIcon, label: "Facebook" },
  { icon: YoutubeIcon, label: "YouTube" },
];

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const linkColumns = ["university", "education", "students"] as const;

  return (
    <footer id="site-footer" className="border-t border-[var(--color-line)] bg-[var(--color-mist)]">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[26ch] text-[15px] leading-relaxed text-[var(--color-ink-500)]">
              {t("footer.tagline")}
            </p>
          </div>

          {linkColumns.map((col) => (
            <nav key={col} aria-label={t(`footer.columns.${col}.title`) ?? undefined}>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--color-ink-500)]">
                {t(`footer.columns.${col}.title`)}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {(t(`footer.columns.${col}.links`, { returnObjects: true }) as string[]).map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[15px] text-[var(--color-ink-700)] transition-colors hover:text-[var(--color-ink-900)]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--color-ink-500)]">
              {t("footer.columns.contacts.title")}
            </h3>
            <ul className="mt-4 flex flex-col gap-3.5 text-[15px] text-[var(--color-ink-700)]">
              <li className="flex items-start gap-2.5">
                <MapPin size={17} className="mt-0.5 shrink-0 text-[var(--color-ink-400)]" />
                <span>{t("footer.columns.contacts.address")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={17} className="mt-0.5 shrink-0 text-[var(--color-ink-400)]" />
                <a href={`tel:${t("footer.columns.contacts.phone")}`} className="hover:text-[var(--color-ink-900)]">
                  {t("footer.columns.contacts.phone")}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={17} className="mt-0.5 shrink-0 text-[var(--color-ink-400)]" />
                <a href={`mailto:${t("footer.columns.contacts.email")}`} className="hover:text-[var(--color-ink-900)]">
                  {t("footer.columns.contacts.email")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-[var(--color-line-strong)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--color-ink-500)]">
            © {year} {t("footer.rights")}
          </p>

          <div className="flex items-center gap-5">
            <LanguageSwitcher />
            <div className="flex items-center gap-1" role="group" aria-label={t("footer.socialLabel") ?? undefined}>
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full text-[var(--color-ink-500)] transition-colors hover:bg-white hover:text-[var(--color-ink-900)]"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
