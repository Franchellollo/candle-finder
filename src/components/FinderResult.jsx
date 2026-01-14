export default function FinderResult({ onRestart }) {
  return (
    <div className="text-center">
      {/* Title */}
      <h2 className="font-serif font-semibold text-3xl text-[#3A2A1A] mb-2">
        Your Perfect Match Found
      </h2>

      <p className="text-[#6B5B4A] mb-10">Based on your mood and preferences</p>

      {/* Main result */}
      <div className="bg-[#FFF8F1] border border-[#E6D5C3] rounded-2xl px-10 py-10 max-w-xl mx-auto mb-12">
        <h3 className="font-serif text-2xl text-[#3A2A1A] mb-4">
          Citrus Relaxed Harmony
        </h3>

        <p className="text-[#6B5B4A] mb-8">
          A calming blend of soft citrus notes designed to help you unwind and
          bring balance to your space.
        </p>

        <a
          href="#"
          className="inline-flex items-center justify-center
            bg-[#3A2A1A] text-white
            px-8 py-4 rounded-full
            text-sm font-medium
            transition hover:bg-[#2A1E14]"
        >
          View collection on Amazon →
        </a>
      </div>

      {/* Alternatives */}
      <div className="max-w-3xl mx-auto mb-10">
        <p className="text-sm text-[#6B5B4A] mb-6">
          Also fits your preferences
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Citrus Morning Boost",
              desc: "Bright citrus aromas to gently energize your mornings.",
            },
            {
              title: "Citrus & Green Balance",
              desc: "Fresh citrus softened by green and herbal notes.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-[#E6D5C3] rounded-xl px-6 py-6 text-left"
            >
              <h4 className="font-medium text-[#3A2A1A] mb-2">{item.title}</h4>
              <p className="text-sm text-[#6B5B4A] mb-3">{item.desc}</p>
              <a href="#" className="text-sm text-[#D6A36C] hover:underline">
                View on Amazon →
              </a>
            </div>
          ))}
        </div>
      </div>

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
