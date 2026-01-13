export default function Footer() {
  return (
    <footer className="bg-[#2C1912] text-[#EDE4DA]">
      {/* TOP PART */}
      <div className="max-w-7xl mx-auto px-6 pt-[96px] pb-[112px]">
        {/* ⚠️ VIENS grid, nevis divi */}
        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-x-30 gap-y-16
"
        >
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xl">🕯️</span>
              <span className="font-serif text-xl font-semibold tracking-wide">
                Candle Finder
              </span>
            </div>

            <p className="text-sm leading-relaxed text-[#D8CFC4] max-w-sm mb-8">
              Elevate your daily rituals with scents that speak to your soul.
              Discover the perfect ambiance for every moment.
            </p>

            {/* Social icons */}
            <div className="flex gap-5 text-lg text-[#D8CFC4]">
              <span className="cursor-pointer hover:text-white transition">
                📸
              </span>
              <span className="cursor-pointer hover:text-white transition">
                📘
              </span>
              <span className="cursor-pointer hover:text-white transition">
                🐦
              </span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:justify-self-center">
            <h4 className="font-serif text-base font-medium tracking-wide text-[#D6A86C] mb-8">
              Quick Links
            </h4>

            <div className="grid grid-cols-2 gap-x-30 gap-y-4 text-sm text-[#D8CFC4]">
              <span className="cursor-pointer hover:text-white transition">
                Home
              </span>
              <span className="cursor-pointer hover:text-white transition">
                Finder
              </span>

              <span className="cursor-pointer hover:text-white transition">
                Sets
              </span>
              <span className="cursor-pointer hover:text-white transition">
                Benefits
              </span>

              <span className="cursor-pointer hover:text-white transition">
                Reviews
              </span>
              <span className="cursor-pointer hover:text-white transition">
                Contact
              </span>
            </div>
          </div>

          {/* AFFILIATE */}
          <div>
            <h4 className="font-serif text-base font-medium tracking-wide text-[#D6A86C] mb-8">
              Affiliate Disclosure
            </h4>

            <p className="text-sm leading-relaxed text-[#D8CFC4] max-w-sm">
              As an affiliate, we may earn from qualifying purchases. This
              supports our mission to help you find peace and tranquility
              through scent.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#FFFFFF1A]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#CFC5BA] gap-4">
          <span>© 2026 Candle Finder. All rights reserved.</span>

          <div className="flex gap-8">
            <span className="cursor-pointer hover:underline">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:underline">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
