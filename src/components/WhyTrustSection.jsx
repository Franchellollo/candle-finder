export default function WhyTrustSection() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-[2.75rem] text-[#3A2A1A] mb-5">
            {" "}
            Why Trust Candle Finder
          </h2>
          <div className="w-25 h-[4px] bg-[#D6A36C] mx-auto mb-12 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-[#FFFCF7] rounded-2xl p-10 text-center">
            <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[#F1E8DC] flex items-center justify-center text-xl">
              🌿
            </div>
            <h3 className="font-serif font-bold text-xl text-[#3A2A1A] mb-3">
              Natural & Clean Choices
            </h3>
            <p className="text-[15px] md:text-base text-[#5A4A3A] leading-relaxed">
              We focus on candles made with clean-burning waxes, natural
              ingredients, and thoughtfully selected fragrances — prioritizing
              health, comfort, and air quality in your home.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFFCF7] rounded-2xl p-10 text-center">
            <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[#F1E8DC] flex items-center justify-center text-xl">
              ❤️
            </div>
            <h3 className="font-serif font-bold text-xl text-[#3A2A1A] mb-3">
              Research-Based Recommendations
            </h3>
            <p className="text-[15px] md:text-base text-[#5A4A3A] leading-relaxed">
              We research, compare, and review candles across brands and styles
              — so you can make informed choices without hours of searching.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFFCF7] rounded-2xl p-10 text-center">
            <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[#F1E8DC] flex items-center justify-center text-xl">
              ⭐
            </div>
            <h3 className="font-serif font-bold text-xl text-[#3A2A1A] mb-3">
              Wellness & Everyday Living
            </h3>
            <p className="text-[15px] md:text-base text-[#5A4A3A] leading-relaxed">
              Our recommendations are based on real-life use — focusing on mood,
              relaxation, gifting, and creating cozy, meaningful spaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
