import HeroImage from "../assets/HeroCandle.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      {/* Background image */}
      <img
        src={HeroImage}
        alt="Natural candles"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Gradient + vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl text-[#F6EFE6] animate-fadeIn">
          {/* Small guide text */}
          <p className="uppercase tracking-[0.3em] text-xs mb-6 text-[#E7C9A3]">
            Your guide to natural & beautiful candles
          </p>

          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            A Personal Candle Guide —{" "}
            <em className="font-light italic block md:inline">
              Curated with Care for Cozy Homes
            </em>
          </h1>

          {/* Description */}
          <p
            className="max-w-2xl mx-auto text-sm md:text-base text-[#EFE6DA]/90 mb-10"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            We research, compare and recommend high-quality natural candles — so
            you can choose with confidence and create a calmer, cozier home.
          </p>

          {/* CTA */}
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-7 py-3 rounded-full bg-[#D8B07E] text-[#2B1C0F] font-medium shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              Find My Candle
            </button>

            <button className="px-7 py-3 rounded-full border border-[#EAD9C3] text-[#EAD9C3] hover:bg-[#EAD9C3] hover:text-[#2B1C0F] transition-all duration-300">
              Explore Best Sets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
