import { useState } from "react";
import { Link } from "react-router-dom";

export default function Reviews() {
  const [activeFilter, setActiveFilter] = useState("all");

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      location: "Germany",
      rating: 5,
      text: "Found the perfect lavender candle for my bedroom. The quiz was spot on! Love that it shows local Amazon options.",
      candle: "Lavender Relaxation",
      filter: "relax",
    },
    {
      id: 2,
      name: "Michael K.",
      location: "UK",
      rating: 5,
      text: "Finally, no more endless scrolling through Amazon. This quiz understood exactly what I wanted for my home office.",
      candle: "Citrus Energy",
      filter: "energy",
    },
    {
      id: 3,
      name: "Anna L.",
      location: "France",
      rating: 4,
      text: "Great recommendations! The location feature is brilliant - got my candles delivered next day from Amazon FR.",
      candle: "Vanilla Comfort",
      filter: "cozy",
    },
    {
      id: 4,
      name: "James R.",
      location: "Poland",
      rating: 5,
      text: "Bought as a gift for my wife. The quiz helped me choose something she actually loves. Will use again!",
      candle: "Rose Elegance",
      filter: "gift",
    },
    {
      id: 5,
      name: "Emma T.",
      location: "Netherlands",
      rating: 5,
      text: "So easy to use! Found a beautiful sandalwood candle that smells amazing. Highly recommend.",
      candle: "Sandalwood Romance",
      filter: "romantic",
    },
    {
      id: 6,
      name: "David H.",
      location: "Italy",
      rating: 4,
      text: "Clean interface, accurate recommendations. Saved me hours of research. Great tool!",
      candle: "Fresh Linen",
      filter: "fresh",
    },
  ];

  const filters = [
    { key: "all", label: "All Reviews" },
    { key: "relax", label: "Relaxation" },
    { key: "energy", label: "Energy" },
    { key: "cozy", label: "Cozy" },
    { key: "gift", label: "Gifts" },
    { key: "romantic", label: "Romantic" },
    { key: "fresh", label: "Fresh" },
  ];

  const filteredReviews =
    activeFilter === "all"
      ? reviews
      : reviews.filter((r) => r.filter === activeFilter);

  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

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
            Customer Stories
          </p>
          <h1 className="font-serif font-semibold text-4xl md:text-5xl text-[#3A2A1A] mb-4">
            What Our Users Say
          </h1>
          <p className="text-[#6B5B4A] max-w-2xl mx-auto">
            Real reviews from candle lovers who found their perfect match.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow">
            <div className="text-3xl font-bold text-[#3A2A1A]">500+</div>
            <div className="text-sm text-[#6B5B4A]">Happy Users</div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow">
            <div className="text-3xl font-bold text-[#3A2A1A]">4.8</div>
            <div className="text-sm text-[#6B5B4A]">Average Rating</div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow">
            <div className="text-3xl font-bold text-[#3A2A1A]">7</div>
            <div className="text-sm text-[#6B5B4A]">Countries</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                activeFilter === filter.key
                  ? "bg-[#D6A36C] text-white"
                  : "bg-white/95 backdrop-blur-sm text-[#6B5B4A] hover:bg-[#FFF8F1]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg">{renderStars(review.rating)}</div>
                <span className="text-xs text-[#9C7A52] bg-[#FFF8F1] px-2 py-1 rounded">
                  {review.location}
                </span>
              </div>

              <p className="text-[#6B5B4A] text-sm mb-4 leading-relaxed">
                "{review.text}"
              </p>

              <div className="border-t border-[#E6D5C3] pt-4">
                <p className="font-medium text-[#3A2A1A] text-sm">
                  {review.name}
                </p>
                <p className="text-xs text-[#9C7A52]">Found: {review.candle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-lg">
          <h2 className="font-serif text-2xl text-[#3A2A1A] mb-4">
            Join our happy customers
          </h2>
          <p className="text-[#6B5B4A] mb-6">
            Find your perfect candle in just 30 seconds.
          </p>
          <Link
            to="/finder"
            className="inline-block bg-[#D6A36C] text-white px-8 py-4 rounded-full font-medium hover:bg-[#C48F55] transition"
          >
            Try the Quiz →
          </Link>
        </div>
      </div>
    </section>
  );
}
