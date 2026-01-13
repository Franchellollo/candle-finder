import QuoteImage from "../assets/QuoteCandle.jpg"; // vari izmantot to pašu bildi vai citu

export default function QuoteSection() {
  return (
    <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden">
      {/* Background image */}
      <img
        src={QuoteImage}
        alt="Candle quote background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#3A2418]/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
        <div className="max-w-3xl text-[#F7F2EC]">
          <p className="font-serif italic text-2xl md:text-3xl leading-relaxed mb-4">
            “The sense of smell is the hair-trigger of memory.”
          </p>

          <span className="text-sm uppercase tracking-widest text-[#D6A36C]">
            — Mary Oliver
          </span>
        </div>
      </div>
    </section>
  );
}
