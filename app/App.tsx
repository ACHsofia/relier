import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Seo from "./components/Seo";
import HomePage from "./pages/HomePage";
import PageComplementaire1 from "./pages/PageComplementaire1";
import PageComplementaire2 from "./pages/PageComplementaire2";
import PageComplementaire3 from "./pages/PageComplementaire3";
import PageComplementaire4 from "./pages/PageComplementaire4";
import SoutiensPage from "./pages/SoutiensPage";
import TemoignagesPage from "./pages/TemoignagesPage";
import NotFoundPage from "./pages/NotFoundPage";

function ScrollToTopOnNavigate() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => {
        const target = document.getElementById(location.hash.replace("#", ""));
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Seo />
      <ScrollToTopOnNavigate />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page-complementaire-1" element={<PageComplementaire1 />} />
          <Route path="/page-complementaire-2" element={<PageComplementaire2 />} />
          <Route path="/page-complementaire-3" element={<PageComplementaire3 />} />
          <Route path="/page-complementaire-4" element={<PageComplementaire4 />} />
          <Route path="/soutiens" element={<SoutiensPage />} />
          <Route path="/temoignages" element={<TemoignagesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}
