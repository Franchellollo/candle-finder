export default function FeaturedSetsSection() {
  return (
    <section className="bg-[#FBF6EE] py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          {/* Left text */}
          <div>
            <p className="font-serif italic text-[15px] text-[#E0A96D] mb-4">
              Our Favorites
            </p>
            <h2 className="font-serif font-bold text-4xl md:text-[2.75rem] text-[#3A2A1A]">
              Featured Candle Sets & Gift Ideas
            </h2>
          </div>

          {/* Right link */}
          <a
            href="#"
            className="text-sm font-medium flex items-center gap-2 transition-all
             text-[#B07A3C] hover:text-[#9A662F] hover:gap-3"
          >
            View All Sets <span>→</span>
          </a>
        </div>

        {/* Placeholder grid (next step we fill cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Placeholder card */}
          <div className="bg-white rounded-2xl h-[320px]" />
          <div className="bg-white rounded-2xl h-[320px]" />
          <div className="bg-white rounded-2xl h-[320px]" />
        </div>
      </div>
    </section>
  );
}
