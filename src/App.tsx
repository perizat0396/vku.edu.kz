import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import { AdmissionBar } from "./components/layout/AdmissionBar";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { Home } from "./pages/Home";
import { StudentNavigator } from "./pages/StudentNavigator";
import { StudentKurultai } from "./pages/StudentKurultai";
import { NewsPage } from "./pages/News";
import { NewsArticle } from "./pages/NewsArticle";
import { Announcements } from "./pages/Announcements";
import { AnnouncementDetail } from "./pages/AnnouncementDetail";

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
          <Route path="/students/kurultai" element={<StudentKurultai />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsArticle />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/announcements/:id" element={<AnnouncementDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
