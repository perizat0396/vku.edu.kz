import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";

export function AdmissionBar() {
  const { t } = useTranslation();

  return (
    <div className="bg-[var(--color-blue-700)] text-white">
      <Container wide className="flex h-10 items-center justify-center gap-3 text-[13px] sm:justify-between">
        <p className="hidden min-w-0 truncate font-medium sm:block">{t("admissionBar.text")}</p>
        <a
          href="#admission"
          className="inline-flex min-w-0 shrink-0 items-center gap-1.5 truncate font-semibold text-white transition-opacity hover:opacity-80"
        >
          <span className="truncate">{t("admissionBar.cta")}</span>
          <ArrowRight size={14} className="shrink-0" />
        </a>
      </Container>
    </div>
  );
}
