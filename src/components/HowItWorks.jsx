// src/components/HowItWorks.jsx
import { Target, Search, ShoppingBag } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "Step 1",
      icon: Target,
      title: "Answer 2 Questions",
      description: "Tell us about your mood and preferences",
    },
    {
      number: "Step 2",
      icon: Search,
      title: "We Find Perfect Match",
      description: "Our algorithm selects the ideal candle for you",
    },
    {
      number: "Step 3",
      icon: ShoppingBag,
      title: "Buy With One Click",
      description: "Direct to Amazon - fast and secure",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#f6f1ea]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-[#9c7a52] uppercase mb-4">
            Simple & Fast
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#3a2a1a] mb-4">
            How It Works
          </h2>
          <p className="text-[#6b5b4a] text-lg">
            Find your perfect candle in 60 seconds
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-px bg-[#d6a36c]/40"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative bg-white border border-[#e6d5c3] rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Step number */}
                  <span className="absolute top-4 right-4 text-xs font-medium text-[#9c7a52] tracking-wide">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#f6f1ea] rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent
                      className="w-7 h-7 text-[#3a2a1a]"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl text-[#3a2a1a] mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#6b5b4a] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="/finder"
            className="inline-flex items-center gap-2 bg-[#3a2a1a] text-white px-10 py-4 rounded-full text-sm font-medium transition hover:bg-[#2a1e14]"
          >
            Start Finder
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
