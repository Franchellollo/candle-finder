export default function Footer() {
  return (
    <footer className="bg-[#F6EFE6] border-t border-[#E7DAC8]">
      <div className="max-w-7xl mx-auto px-6 py-12 text-sm text-[#5A4A3A]">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div>
            <p
              className="font-serif text-[#3A2A1A] text-lg mb-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Candle Finder
            </p>
            <p className="max-w-xs opacity-75 leading-relaxed">
              Discover candles that match your mood, space and moments.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {["Home", "Finder", "Sets", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="opacity-70 hover:opacity-100 transition"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-xs text-[#8A7A6A] opacity-70">
          © {new Date().getFullYear()} Candle Finder. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
