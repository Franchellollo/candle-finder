import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Finder", path: "/finder" },
  { label: "Sets", path: "/sets" },
  { label: "Benefits", path: "/benefits" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`
          sticky top-0 z-50 transition-all duration-300 w-full overflow-x-hidden
          ${
            scrolled
              ? "bg-[#FBF3E8]/95 backdrop-blur-md shadow-md py-2"
              : "bg-transparent py-4"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo + Nosaukums - tagad tuvāk kreisajai malai */}
            <NavLink
              to="/"
              className="flex items-center gap-0 z-50 -ml-4 sm:ml-1"
            >
              <img
                src="/logo.png"
                alt="Candle Finder"
                className="h-14 w-auto md:h-28 -my-5 md:-my-10 -mr-3"
              />
              <span className="font-serif text-lg md:text-xl font-bold text-black whitespace-nowrap">
                Candle Finder
              </span>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2 text-sm text-black">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap
                     ${
                       isActive
                         ? "bg-[#D9A66B] text-white shadow-md"
                         : "hover:bg-black/5"
                     }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Burger poga */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 ml-2"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay un Panelis */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 w-[70%] max-w-[300px] h-full bg-[#FBF3E8] z-50 md:hidden shadow-2xl flex flex-col pt-24 px-6">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg transition-all duration-300 text-lg font-serif
                     ${
                       isActive
                         ? "bg-[#D9A66B] text-white shadow-md"
                         : "text-black hover:bg-black/5"
                     }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
