import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterTransition from "./components/FooterTransition";
import CookieBanner from "./components/CookieBanner";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Finder from "./pages/Finder";
import Sets from "./pages/Sets";
import Benefits from "./pages/Benefits";
import Reviews from "./pages/Reviews";
import Contacts from "./pages/Contacts";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

import { initGA, logPageView } from "./hooks/useAnalytics";

// Analytics komponents (iekš Router, lai redzētu location)
function Analytics() {
  const location = useLocation();

  useEffect(() => {
    initGA(); // Mēģina inicializēt (ja ir piekrišana)
  }, []);

  useEffect(() => {
    logPageView(location.pathname); // Nosūta katru lapas maiņu
  }, [location]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Analytics /> {/* JAUNS: Šeit ielikts! */}
      <ScrollToTop />
      <div className="min-h-screen bg-[#FBF3E8] flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/finder" element={<Finder />} />
            <Route path="/sets" element={<Sets />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>

        <FooterTransition />
        <Footer />
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}
