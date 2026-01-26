import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[#FBF3E8]/95 backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-4"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-1">
            <img
              src="/logo.png"
              alt="Candle Finder"
              className="h-28 w-auto -my-10 translate-x-12" // ← negatīvā margin augšā un apakšā
            />
            <span className="font-serif text-xl font-bold text-black">
              Candle Finder
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-2 text-sm text-black">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full transition-all duration-300
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
        </div>
      </div>
    </header>
  );
}
