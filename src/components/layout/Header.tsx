import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { Logo } from "../ui/Logo";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { Container } from "../ui/Container";
import { cn } from "../../lib/cn";

const NAV_KEYS: { key: string; href: string }[] = [
  { key: "university", href: "#top" },
  { key: "education", href: "#admission" },
  { key: "science", href: "#science" },
  { key: "students", href: "#student-life" },
  { key: "admission", href: "#admission" },
  { key: "cooperation", href: "#partners" },
  { key: "news", href: "#news" },
  { key: "digest", href: "#digest" },
  { key: "contacts", href: "#site-footer" },
];

export function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[var(--color-line)] bg-white/80 backdrop-blur-lg"
          : "border-b border-transparent bg-white/0"
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-[60] focus:rounded-lg focus:bg-[var(--color-ink-900)] focus:px-4 focus:py-2 focus:text-white"
      >
        {t("common.skipToContent")}
      </a>

      <Container wide className={cn("flex items-center justify-between transition-all duration-300", scrolled ? "h-16" : "h-20")}>
        <Logo compact className="xl:hidden" />
        <Logo compact iconOnly className="hidden xl:flex" />

        <nav className="hidden items-center xl:flex" aria-label="Main">
          {NAV_KEYS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 text-[13.5px] font-medium text-[var(--color-ink-700)] transition-colors hover:bg-[var(--color-mist)] hover:text-[var(--color-ink-900)]"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center md:flex">
            <AnimatePresence initial={false}>
              {searchOpen && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  autoFocus
                  type="search"
                  placeholder={t("nav.searchPlaceholder") ?? ""}
                  className="mr-1 rounded-full border border-[var(--color-line-strong)] bg-white px-3.5 py-2 text-sm outline-none focus-visible:border-[var(--color-blue-500)]"
                  onBlur={() => setSearchOpen(false)}
                />
              )}
            </AnimatePresence>
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label={t("nav.search") ?? "Search"}
              className="grid h-10 w-10 place-items-center rounded-full text-[var(--color-ink-700)] transition-colors hover:bg-[var(--color-mist)]"
            >
              <Search size={18} strokeWidth={1.8} />
            </button>
          </div>

          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={t("nav.menu") ?? "Menu"}
            className="grid h-10 w-10 place-items-center rounded-full text-[var(--color-ink-900)] transition-colors hover:bg-[var(--color-mist)] xl:hidden"
          >
            <Menu size={20} strokeWidth={1.8} />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[var(--color-ink-900)]/30 backdrop-blur-sm xl:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-white p-6"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between">
                <Logo compact />
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label={t("common.close") ?? "Close"}
                  className="grid h-10 w-10 place-items-center rounded-full text-[var(--color-ink-900)] hover:bg-[var(--color-mist)]"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {NAV_KEYS.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-3 py-3.5 text-[17px] font-semibold text-[var(--color-ink-900)] transition-colors hover:bg-[var(--color-mist)]"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                ))}
              </nav>

              <div className="mt-auto border-t border-[var(--color-line)] pt-6">
                <LanguageSwitcher />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
