import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { Directions } from "./components/sections/Directions";
import { News } from "./components/sections/News";
import { StudentLife } from "./components/sections/StudentLife";
import { Science } from "./components/sections/Science";
import { Admission } from "./components/sections/Admission";
import { QuickAccess } from "./components/sections/QuickAccess";
import { Partners } from "./components/sections/Partners";

function DocumentMeta() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title = t("meta.title");
  }, [i18n.language, t]);

  return null;
}

export default function App() {
  return (
    <>
      <DocumentMeta />
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <Directions />
        <News />
        <StudentLife />
        <Science />
        <Admission />
        <QuickAccess />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
