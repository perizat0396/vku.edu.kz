import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import { AdmissionBar } from "./components/layout/AdmissionBar";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { Home } from "./pages/Home";
import { StudentNavigator } from "./pages/StudentNavigator";

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
      <ScrollToTop />
      <AdmissionBar />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students/navigator" element={<StudentNavigator />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
