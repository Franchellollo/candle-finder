import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* GPU Rendering Fix - inline styles */}
      <style>{`
        footer {
          position: relative;
          isolation: isolate;
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: transform;
        }
      `}</style>

      <footer className="bg-[#2C1912] text-[#EDE4DA]">
        {/* TOP PART */}
        <div className="max-w-7xl mx-auto px-6 pt-[96px] pb-[112px]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-x-30 gap-y-16 items-start">
            {/* BRAND */}
            <div>
              {/* Logo */}
              <div className="inline-flex items-start mb-8 h-8 -ml-10">
                <img
                  src="/logo.png"
                  alt="Candle Finder"
                  className="h-16 w-auto -my-5"
                />
                <span className="font-serif text-base font-medium tracking-wide text-[#D6A86C] -ml-4">
                  Candle Finder
                </span>
              </div>

              <p className="text-sm leading-relaxed text-[#D8CFC4] max-w-sm mb-8 pl-0">
                Elevate your daily rituals with scents that speak to your soul.
                Discover the perfect ambiance for every moment.
              </p>

              {/* Social icons */}
              <div className="flex gap-4 text-[#D8CFC4]">
                <div className="cursor-pointer hover:text-[#D6A86C] transition">
                  <Instagram size={20} strokeWidth={1.5} />
                </div>
                <div className="cursor-pointer hover:text-[#D6A86C] transition">
                  <Facebook size={20} strokeWidth={1.5} />
                </div>
                <div className="cursor-pointer hover:text-[#D6A86C] transition">
                  <Twitter size={20} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="md:justify-self-center">
              <h4 className="font-serif text-base font-medium tracking-wide text-[#D6A86C] mb-8 h-8 flex items-center">
                Quick Links
              </h4>

              <div className="grid grid-cols-2 gap-x-30 gap-y-4 text-sm text-[#D8CFC4]">
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
                <Link to="/finder" className="hover:text-white transition">
                  Finder
                </Link>
                <Link to="/sets" className="hover:text-white transition">
                  Sets
                </Link>
                <Link to="/benefits" className="hover:text-white transition">
                  Benefits
                </Link>
                <Link to="/reviews" className="hover:text-white transition">
                  Reviews
                </Link>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </div>
            </div>

            {/* AFFILIATE */}
            <div>
              <h4 className="font-serif text-base font-medium tracking-wide text-[#D6A86C] mb-8 h-8 flex items-center">
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
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
