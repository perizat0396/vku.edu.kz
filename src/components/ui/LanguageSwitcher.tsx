import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../i18n";
import { cn } from "../../lib/cn";

export function LanguageSwitcher({ inverse = false }: { inverse?: boolean }) {
  const { i18n } = useTranslation();
  const current = i18n.language.slice(0, 2);

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-full p-0.5 text-[13px] font-semibold",
        inverse ? "bg-white/10" : "bg-[var(--color-mist)]"
      )}
      role="group"
      aria-label="Language"
    >
      {LANGUAGES.map((lang) => {
        const active = current === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => i18n.changeLanguage(lang.code)}
            aria-pressed={active}
            className={cn(
              "rounded-full px-2.5 py-1.5 transition-colors duration-150",
              active
                ? inverse
                  ? "bg-white text-[var(--color-ink-900)]"
                  : "bg-white text-[var(--color-ink-900)] shadow-[var(--shadow-soft)]"
                : inverse
                  ? "text-white/70 hover:text-white"
                  : "text-[var(--color-ink-500)] hover:text-[var(--color-ink-900)]"
            )}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
