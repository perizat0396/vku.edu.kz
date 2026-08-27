import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import kk from "./locales/kk.json";
import ru from "./locales/ru.json";
import en from "./locales/en.json";

export const LANGUAGES = [
  { code: "kk", label: "KZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

const STORAGE_KEY = "vku-language";
const DEFAULT_LANGUAGE: LanguageCode = "kk";

function isLanguageCode(value: string | null): value is LanguageCode {
  return value === "kk" || value === "ru" || value === "en";
}

function getInitialLanguage(): LanguageCode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLanguageCode(stored)) return stored;
  } catch {
    // localStorage can throw in private-browsing / storage-restricted contexts —
    // fall through to the default rather than letting init() blow up.
  }
  return DEFAULT_LANGUAGE;
}

i18n.use(initReactI18next).init({
  resources: {
    kk: { translation: kk },
    ru: { translation: ru },
    en: { translation: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: ["kk", "ru", "en"],
  interpolation: { escapeValue: false },
});

// Persist explicit language switches so a returning visitor's choice sticks —
// first-time visitors (nothing in storage yet) always land on Kazakh.
i18n.on("languageChanged", (lng) => {
  try {
    if (isLanguageCode(lng)) localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    // ignore — nothing useful to do if storage is unavailable
  }
});

export default i18n;
