import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import kk from "./locales/kk.json";
import ru from "./locales/ru.json";
import en from "./locales/en.json";

export const LANGUAGES = [
  { code: "kk", label: "KZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      kk: { translation: kk },
      ru: { translation: ru },
      en: { translation: en },
    },
    fallbackLng: "kk",
    supportedLngs: ["kk", "ru", "en"],
    interpolation: { escapeValue: false },
    lng: localStorage.getItem("vku-language") ?? "kk",
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
      lookupLocalStorage: "vku-language",
    },
  });

export default i18n;
