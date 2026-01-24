import useLocation from "../hooks/useLocation";
import { candles, getAffiliateLink } from "../data/candles";

export default function FinderResult({ answers, onRestart }) {
  const { country, setCountry, loading } = useLocation();

  // Find best matching candle
  const matchedCandle =
    candles.find((c) => c.mood === answers.mood && c.scent === answers.scent) ||
    candles.find((c) => c.mood === answers.mood) ||
    candles[0];

  // Two alternatives
  const alternatives = candles
    .filter((c) => c.id !== matchedCandle.id)
    .slice(0, 2);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D6A36C] mx-auto mb-4"></div>
        <p className="text-[#6B5B4A]">Detecting your location...</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      {/* Country selector */}
      <div className="mb-8">
        <label className="text-sm text-[#6B5B4A] mr-3">Shop in:</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="bg-white border border-[#E6D5C3] rounded-lg px-3 py-2 text-sm"
        >
          <option value="DE">🇩🇪 Germany</option>
          <option value="FR">🇫🇷 France</option>
          <option value="UK">🇬🇧 UK</option>
          <option value="PL">🇵🇱 Poland</option>
          <option value="IT">🇮🇹 Italy</option>
          <option value="ES">🇪🇸 Spain</option>
          <option value="NL">🇳🇱 Netherlands</option>
        </select>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-[#9C7A52] mb-6 italic">
        We recommend similar products. Prices and availability may vary.
      </p>

      {/* Main result */}
      <h2 className="font-serif font-semibold text-3xl text-[#3A2A1A] mb-2">
        Your Perfect Match
      </h2>
      <p className="text-[#6B5B4A] mb-10">
        {matchedCandle.mood} • {matchedCandle.scent}
      </p>

      <div className="bg-[#FFF8F1] border border-[#E6D5C3] rounded-2xl px-10 py-10 max-w-xl mx-auto mb-12">
        <div className="w-32 h-32 bg-[#E6D5C3] rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
          🕯️
        </div>

        <h3 className="font-serif text-2xl text-[#3A2A1A] mb-4">
          {matchedCandle.name}
        </h3>

        <p className="text-[#6B5B4A] mb-8">{matchedCandle.description}</p>

        <a
          href={getAffiliateLink(country, matchedCandle.searchTerm)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#3A2A1A] text-white px-8 py-4 rounded-full text-sm font-medium transition hover:bg-[#2A1E14]"
        >
          Find on Amazon {country} →
        </a>
      </div>

      {/* Alternatives */}
      {alternatives.length > 0 && (
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-sm text-[#6B5B4A] mb-6">You might also like</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {alternatives.map((candle) => (
              <div
                key={candle.id}
                className="border border-[#E6D5C3] rounded-xl px-6 py-6 text-left"
              >
                <h4 className="font-medium text-[#3A2A1A] mb-2">
                  {candle.name}
                </h4>
                <p className="text-sm text-[#6B5B4A] mb-3">
                  {candle.description}
                </p>
                <a
                  href={getAffiliateLink(country, candle.searchTerm)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#D6A36C] hover:underline"
                >
                  Amazon →
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Restart */}
      <button
        onClick={onRestart}
        className="text-sm text-[#9C7A52] hover:underline"
      >
        ↺ Start over
      </button>
    </div>
  );
}
