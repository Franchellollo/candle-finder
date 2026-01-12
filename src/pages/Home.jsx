import HeroCandle from "../assets/HeroCandle.jpg";

export default function Home() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-16">
      {/* Background Image */}
      <img
        src={HeroCandle}
        alt="Natural candles"
        className="absolute inset-0 w-full h-full object-cover scale-[1.1] animate-slowZoom"
      />

      {/* Base overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Vignette – dark edges, clear center */}
      <div className="pointer-events-none absolute inset-0 bg-radial-gradient" />

      {/* Content */}
      <div className="relative z-10 px-6 pt-[30vh]">
        <div className="max-w-4xl mx-auto text-center text-[#F7F2EC] animate-heroFade">
          {/* Eyebrow */}
          <p
            className="uppercase tracking-[0.35em] text-xs mb-6 opacity-70"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Your guide to natural & beautiful candles
          </p>

          {/* Headline */}
          <h1
            className="text-[3rem] md:text-[4.5rem] leading-[1.03] mb-7 font-medium tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            A Personal Candle Guide —
            <br />
            <span className="italic font-light opacity-90 tracking-[-0.01em]">
              Curated with Care for Cozy Homes
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-base md:text-lg max-w-3xl mx-auto mb-12 opacity-75"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            We research, compare and recommend high-quality natural candles — so
            you can choose with confidence and create a calmer, cozier home.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-14 py-[14px] rounded-full bg-[#D6A36C] text-[#3A2A1A] text-[15px] font-medium transition hover:bg-[#c79560]">
              Find My Candle
            </button>

            <button className="px-14 py-[14px] rounded-full border border-white/35 text-[#F7F2EC] text-[15px] backdrop-blur-sm transition hover:bg-white/10">
              Explore Best Sets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
