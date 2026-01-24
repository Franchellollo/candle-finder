import { sets, getSetAffiliateLink } from "../data/sets";
import useLocation from "../hooks/useLocation";

export default function Sets() {
  const { country, setCountry, loading } = useLocation();

  if (loading) {
    return (
      <section className="min-h-screen bg-[#FBF3E8] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D6A36C] mx-auto mb-4"></div>
          <p className="text-[#6B5B4A]">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="min-h-screen px-6 pt-28 pb-20 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1603006905003-be475563bc59?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#FBF3E8]/85"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[15px] tracking-wide text-[#D6A36C] mb-4 italic">
            Gift Collection
          </p>
          <h1 className="font-serif font-semibold text-4xl md:text-5xl text-[#3A2A1A] mb-4">
            Curated Candle Sets
          </h1>
          <p className="text-[#6B5B4A] max-w-2xl mx-auto mb-8">
            Beautifully packaged gift sets for every occasion.
          </p>

          <div className="inline-block">
            <label className="text-sm text-[#6B5B4A] mr-3">Shop in:</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="bg-white/90 backdrop-blur-sm border border-[#E6D5C3] rounded-lg px-4 py-2"
            >
              <option value="DE">🇩🇪 Germany</option>
              <option value="FR">🇫🇷 France</option>
              <option value="UK">🇬🇧 United Kingdom</option>
              <option value="PL">🇵🇱 Poland</option>
              <option value="IT">🇮🇹 Italy</option>
              <option value="ES">🇪🇸 Spain</option>
              <option value="NL">🇳🇱 Netherlands</option>
            </select>
          </div>
        </div>

        <div className="bg-[#FFF8F1] border border-[#E6D5C3] rounded-xl p-4 mb-10 text-center">
          <p className="text-sm text-[#6B5B4A]">
            💡 We recommend similar products on Amazon.
            <span className="font-medium">
              {" "}
              Prices, availability, and exact packaging may vary.
            </span>
          </p>
        </div>

        <p className="text-xs text-[#9C7A52] text-center mb-10 italic">
          This page contains affiliate links. We may earn a commission for
          purchases made through these links.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sets.map((set) => (
            <div
              key={set.id}
              className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Bilde ar img tagu */}
              <img
                src={set.image}
                alt={set.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs bg-[#D6A36C] text-white px-2 py-1 rounded">
                    {set.bestFor}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#3A2A1A] mb-2">
                  {set.name}
                </h3>

                <p className="text-[#6B5B4A] text-sm mb-4">{set.description}</p>

                <div className="mb-4">
                  <p className="text-xs text-[#9C7A52] mb-1">
                    Scents included:
                  </p>
                  <p className="text-sm text-[#3A2A1A]">
                    {set.candles.join(", ")}
                  </p>
                </div>

                <a
                  href={getSetAffiliateLink(set, country)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#3A2A1A] text-white py-3 rounded-full font-medium hover:bg-[#2A1E14] transition"
                >
                  Find similar on Amazon {country} →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-lg">
          <h2 className="font-serif text-2xl text-[#3A2A1A] mb-4">
            Looking for individual candles?
          </h2>
          <p className="text-[#6B5B4A] mb-6">
            Explore our full collection and find your perfect match.
          </p>
          <a
            href="/finder"
            className="inline-block bg-[#D6A36C] text-white px-8 py-4 rounded-full font-medium hover:bg-[#C48F55] transition"
          >
            Use the Finder →
          </a>
        </div>
      </div>
    </section>
  );
}
