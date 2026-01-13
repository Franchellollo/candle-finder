import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterTransition from "./components/FooterTransition";

import Home from "./pages/Home";
import Finder from "./pages/Finder";
import Sets from "./pages/Sets";
import Benefits from "./pages/Benefits";
import Reviews from "./pages/Reviews";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <BrowserRouter>
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
          </Routes>
        </main>
        <FooterTransition />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
