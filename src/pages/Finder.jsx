import { useState } from "react";
import FinderResult from "../components/FinderResult";

export default function Finder() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    mood: null,
    scent: null,
  });

  function handleSelect(key, value) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (step < 2) {
      setStep(step + 1);
    } else {
      setStep(3);
    }
  }

  function resetFinder() {
    setStep(1);
    setAnswers({ mood: null, scent: null });
  }

  return (
    <section
      className="min-h-screen px-6 pt-28 pb-32 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1603006905003-be475563bc59?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#FBF3E8]/85"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-[15px] tracking-wide text-[#D6A36C] mb-4 italic">
          Curated for You
        </p>

        <h1 className="font-serif font-semibold text-4xl md:text-5xl text-[#3A2A1A] mb-4">
          Discover Your Signature Scent
        </h1>

        <p className="text-[#6B5B4A] max-w-2xl mx-auto mb-16">
          Two simple questions to find your perfect candle.
        </p>

        <div className="relative bg-white/95 backdrop-blur-sm rounded-[32px] px-16 py-20 max-w-[960px] mx-auto shadow-[0_30px_90px_rgba(0,0,0,0.10)]">
          {step <= 2 && (
            <div className="mb-12">
              <div className="mx-auto w-[420px] text-left">
                <div className="text-xs font-semibold tracking-widest text-[#9C7A52] mb-4">
                  STEP {step} / 2
                </div>
                <div className="h-[5px] bg-[#E9DED2] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#D6A36C] rounded-full transition-all duration-300"
                    style={{ width: `${(step / 2) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <>
              <h2 className="font-serif font-extrabold text-3xl text-[#3A2A1A] mb-10">
                How do you want to feel?
              </h2>
              <Options
                items={[
                  { label: "Relaxed & Calm", icon: "😌" },
                  { label: "Energized & Bright", icon: "⚡" },
                  { label: "Romantic & Soft", icon: "💗" },
                  { label: "Cozy & Warm", icon: "🏠" },
                ]}
                onSelect={(val) => handleSelect("mood", val)}
              />
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="font-serif font-extrabold text-3xl text-[#3A2A1A] mb-10">
                Which scent profile calls to you?
              </h2>
              <Options
                items={[
                  { label: "Floral & Soft", icon: "🌸" },
                  { label: "Warm & Woody", icon: "🌲" },
                  { label: "Fresh & Clean", icon: "🍃" },
                  { label: "Sweet & Cozy", icon: "🍯" },
                  { label: "Citrus & Bright", icon: "🍋" },
                ]}
                onSelect={(val) => handleSelect("scent", val)}
              />
            </>
          )}

          {step === 3 && (
            <FinderResult answers={answers} onRestart={resetFinder} />
          )}
        </div>
      </div>
    </section>
  );
}

function Options({ items, onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[720px] mx-auto">
      {items.map((item) => (
        <button
          key={item.label}
          onClick={() => onSelect(item.label)}
          className="group flex items-center gap-4 border border-[#E6D5C3] rounded-xl pl-6 pr-4 py-7 text-left text-[17px] transition hover:border-[#D6A36C] hover:bg-[#FFF8F1]"
        >
          <span className="text-xl">{item.icon}</span>
          <span className="font-medium text-[#3A2A1A]">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
