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
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FBF3E8]/90 backdrop-blur-md border-b border-[#E7DAC8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl">🔥</span>
            <span className="font-serif text-2xl font-bold tracking-tight text-black">
              Candle Finder
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 text-[14px] text-black">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `
                  px-4 py-[6px] rounded-full
                  transition-all duration-150
                  ${
                    isActive
                      ? "bg-[#D9A66B] text-white font-medium"
                      : "hover:bg-black/5"
                  }
                `
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
