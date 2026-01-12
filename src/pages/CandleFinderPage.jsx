export default function CandleFinderPage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-5xl font-serif text-[#3a2a1a] mb-4">
        Candle Finder
      </h1>

      <p className="text-lg text-[#6b4f3a] mb-8 text-center max-w-xl">
        Find the perfect candle based on your mood, space and preferences.
      </p>

      <button className="bg-[#d6a46c] hover:bg-[#c48f55] text-white px-6 py-3 rounded-full transition">
        Start Finder
      </button>
    </div>
  );
}
