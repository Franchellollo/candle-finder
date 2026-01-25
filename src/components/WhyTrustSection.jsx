// src/components/WhyTrustSection.jsx
import { Leaf, Heart, Sparkles } from "lucide-react";

export default function WhyTrustSection() {
  const features = [
    {
      icon: Leaf,
      title: "Natural & Clean Choices",
      description:
        "We focus on candles made with clean-burning waxes, natural ingredients, and thoughtfully selected fragrances — prioritizing health, comfort, and air quality in your home.",
    },
    {
      icon: Heart,
      title: "Research-Based Recommendations",
      description:
        "We research, compare, and review candles across brands and styles — so you can make informed choices without hours of searching.",
    },
    {
      icon: Sparkles,
      title: "Wellness & Everyday Living",
      description:
        "Our recommendations are based on real-life use — focusing on mood, relaxation, gifting, and creating cozy, meaningful spaces.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#3a2a1a] mb-4">
            Why Trust Candle Finder
          </h2>
          <div className="w-20 h-1 bg-[#d6a36c] mx-auto"></div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-[#fbf8f4] border border-[#e6d5c3] rounded-2xl p-8 text-center transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2 hover:border-[#d6a36c]"
              >
                {/* Icon with pulse effect on hover */}
                <div className="relative w-16 h-16 bg-[#f6f1ea] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#d6a36c]/10 group-hover:scale-110">
                  <IconComponent
                    className="w-7 h-7 text-[#3a2a1a] transition-all duration-300 group-hover:text-[#d6a36c]"
                    strokeWidth={1.5}
                  />
                  {/* Subtle pulse ring on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#d6a36c]/0 transition-all duration-500 group-hover:border-[#d6a36c]/30 group-hover:scale-125"></div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-[#3a2a1a] mb-4 transition-colors duration-300 group-hover:text-[#d6a36c]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6b5b4a] leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line - appears on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#d6a36c] rounded-full transition-all duration-500 group-hover:w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
