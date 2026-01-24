import { Link } from "react-router-dom";

export default function Benefits() {
  const benefits = [
    {
      icon: "🎯",
      title: "Personalized Recommendations",
      description:
        "Our smart quiz analyzes your preferences to find the perfect candle match for your mood and space.",
    },
    {
      icon: "🌍",
      title: "Local Options",
      description:
        "We show you the best available candles from Amazon in your country, with fast delivery options.",
    },
    {
      icon: "⏱️",
      title: "Save Time",
      description:
        "No more endless browsing. Find your ideal scent in under 2 minutes with our guided finder.",
    },
    {
      icon: "💰",
      title: "Best Prices",
      description:
        "We compare options to help you find quality candles that fit your budget.",
    },
    {
      icon: "🎁",
      title: "Perfect Gifts",
      description:
        "Not sure what to gift? Our finder helps you choose candles that match anyone's personality.",
    },
    {
      icon: "🌿",
      title: "Quality Focus",
      description:
        "We prioritize natural ingredients, long burn times, and trusted brands in our recommendations.",
    },
  ];

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
        <div className="text-center mb-16">
          <p className="text-[15px] tracking-wide text-[#D6A36C] mb-4 italic">
            Why Choose Us
          </p>
          <h1 className="font-serif font-semibold text-4xl md:text-5xl text-[#3A2A1A] mb-4">
            Benefits of Using CandleFinder
          </h1>
          <p className="text-[#6B5B4A] max-w-2xl mx-auto">
            We make finding the perfect candle simple, fast, and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-5xl mb-6">{benefit.icon}</div>
              <h3 className="font-serif text-xl text-[#3A2A1A] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#6B5B4A] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-lg">
          <h2 className="font-serif text-2xl text-[#3A2A1A] mb-4">
            Ready to find your perfect candle?
          </h2>
          <p className="text-[#6B5B4A] mb-6">
            Take our 30-second quiz and discover scents you'll love.
          </p>
          <Link
            to="/finder"
            className="inline-block bg-[#D6A36C] text-white px-8 py-4 rounded-full font-medium hover:bg-[#C48F55] transition"
          >
            Start the Quiz →
          </Link>
        </div>
      </div>
    </section>
  );
}
