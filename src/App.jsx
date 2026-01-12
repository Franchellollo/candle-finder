import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

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

        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/finder" element={<Finder />} />
            <Route path="/sets" element={<Sets />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
