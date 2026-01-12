export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FBF3E8]/90 backdrop-blur-md border-b border-[#E7DAC8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl">🔥</span>
            <span className="font-serif text-2xl font-bold tracking-wide text-black">
              Candle Finder
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-4 text-[14px] text-black">
            {/* Active */}
            <span className="px-4 py-[6px] rounded-full bg-[#D9A66B] text-white font-medium">
              Home
            </span>

            {/* Links */}
            {["Finder", "Sets", "Benefits", "Reviews", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    px-4 py-[6px] rounded-full          // ★ pievienots (pill forma)
                    transition-colors duration-200     // ★ maigā animācija
                    hover:bg-black/5                   // ★ Hostinger-style hover fons
                  "
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
