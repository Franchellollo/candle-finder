export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FBF3E8]/90 backdrop-blur-md border-b border-[#E7DAC8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl">🔥</span>
            <span className="font-serif text-[18px] tracking-tight text-[#3A2A1A]">
              Candle Finder
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 text-[14px] text-[#5A4A3A]">
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
                  className="hover:text-[#3A2A1A] transition-colors duration-150"
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
