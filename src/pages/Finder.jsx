export default function Finder() {
  const step = 3; // manuāli: 1 | 2 | 3 (vēl bez loģikas)

  return (
    <section className="bg-[#FBF3E8] px-6 pt-28 pb-32">
      <div className="max-w-5xl mx-auto text-center">
        {/* Intro */}
        <p className="text-[15px] tracking-wide text-[#D6A36C] mb-4 italic">
          Curated for You
        </p>

        <h1 className="font-serif font-semibold text-4xl md:text-5xl text-[#3A2A1A] mb-4">
          Discover Your Signature Scent
        </h1>

        <p className="text-[#6B5B4A] max-w-2xl mx-auto mb-16">
          Let us guide you to the perfect aroma to elevate your space and
          spirit.
        </p>

        {/* Card */}
        <div
          className="relative bg-white rounded-[32px]
                     px-16 py-20
                     max-w-[960px] mx-auto
                     shadow-[0_30px_90px_rgba(0,0,0,0.10)]
                     hover:shadow-[0_40px_120px_rgba(0,0,0,0.14)]
                     transition-all duration-300"
        >
          {/* STEP 1 */}
          {step === 1 && (
            <>
              <StepIndicator step={1} />
              <Question title="How do you want to feel?" />

              <Options
                items={[
                  { label: "Relaxed & Calm", icon: "😌" },
                  { label: "Energized & Bright", icon: "⚡" },
                  { label: "Romantic & Soft", icon: "💗" },
                  { label: "Cozy & Warm", icon: "🏠" },
                ]}
              />
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <StepIndicator step={2} />
              <Question title="What is the occasion?" />

              <Options
                items={[
                  { label: "Everyday Moments", icon: "☀️" },
                  { label: "Relaxing Evenings", icon: "🌙" },
                  { label: "Special Occasions", icon: "✨" },
                  { label: "Gifts & Surprises", icon: "🎁" },
                ]}
              />
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <StepIndicator step={3} />
              <Question title="Which scent profile calls to you?" />

              <Options
                items={[
                  { label: "Floral & Soft", icon: "🌸" },
                  { label: "Warm & Woody", icon: "🌲" },
                  { label: "Fresh & Clean", icon: "🍃" },
                  { label: "Sweet & Cozy", icon: "🍯" },
                  { label: "Citrus & Bright", icon: "🍋" },
                ]}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Subcomponents (UI only) ---------- */

function StepIndicator({ step }) {
  const width = step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full";

  return (
    <div className="mb-10">
      <div className="mx-auto w-[380px]">
        <div className="text-xs font-semibold tracking-widest text-[#9C7A52] mb-4 text-left">
          STEP {step} / 3
        </div>
        <div className="h-[4px] bg-[#E9DED2] rounded-full overflow-hidden">
          <div className={`h-full ${width} bg-[#D6A36C] rounded-full`} />
        </div>
      </div>
    </div>
  );
}

function Question({ title }) {
  return (
    <h2 className="font-serif font-extrabold tracking-[-0.015em] text-3xl text-[#3A2A1A] mb-10">
      {title}
    </h2>
  );
}

function Options({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[720px] mx-auto">
      {items.map((item) => (
        <button
          key={item.label}
          className="group flex items-center gap-4
                     border border-[#E6D5C3] rounded-xl
                     pl-6 pr-4 py-7
                     text-left text-[17px]
                     transition
                     hover:border-[#D6A36C] hover:bg-[#FFF8F1]"
        >
          <span className="text-xl">{item.icon}</span>
          <span className="font-medium text-[#3A2A1A]">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
