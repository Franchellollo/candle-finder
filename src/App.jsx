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
    <div className="min-h-screen bg-[#FBF3E8] flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Pagaidām rādam tikai Home */}
        <Home />

        {/* Šīs lapas ir gatavas pieslēgšanai vēlāk */}
        {/*
        <Finder />
        <Sets />
        <Benefits />
        <Reviews />
        <Contacts />
        */}
      </main>

      <Footer />
    </div>
  );
}
