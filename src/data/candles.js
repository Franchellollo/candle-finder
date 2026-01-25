export const candles = [
  {
    id: "lavender-relax",
    name: "Lavender Relaxation",
    description: "Calming lavender aroma for stress relief",
    mood: "Relaxed & Calm",
    scent: "Floral & Soft",
    image: "/images/candles/lavender.png",
    searchTerm: "lavender candle natural soy wax",
  },
  {
    id: "vanilla-cozy",
    name: "Vanilla Comfort",
    description: "Warm vanilla and caramel cozy feeling",
    mood: "Cozy & Warm",
    scent: "Sweet & Cozy",
    image: "/images/candles/vanilla.png",
    searchTerm: "vanilla caramel candle cozy",
  },
  {
    id: "citrus-energy",
    name: "Citrus Energy",
    description: "Fresh citrus aroma for focus and concentration",
    mood: "Energized & Bright",
    scent: "Citrus & Bright",
    image: "/images/candles/citrus.png",
    searchTerm: "citrus lemon candle energizing",
  },
  {
    id: "sandalwood-romantic",
    name: "Sandalwood Romance",
    description: "Deep, woody aroma for special moments",
    mood: "Romantic & Soft",
    scent: "Warm & Woody",
    image: "/images/candles/sandalwood.png",
    searchTerm: "sandalwood candle romantic",
  },
  {
    id: "fresh-linen",
    name: "Fresh Linen",
    description: "Clean, airy aroma for everyday use",
    mood: "Relaxed & Calm",
    scent: "Fresh & Clean",
    image: "/images/candles/linen.png",
    searchTerm: "fresh linen candle clean scent",
  },
  {
    id: "rose-elegant",
    name: "Rose Elegance",
    description: "Classic rose bouquet for romantic evenings",
    mood: "Romantic & Soft",
    scent: "Floral & Soft",
    image: "/images/candles/rose.png",
    searchTerm: "rose candle elegant gift",
  },
];

// Affiliate configuration
export const affiliateConfig = {
  DE: { name: "Amazon Germany", flag: "🇩🇪", tag: "yourDE-21" },
  FR: { name: "Amazon France", flag: "🇫🇷", tag: "yourFR-21" },
  UK: { name: "Amazon UK", flag: "🇬🇧", tag: "yourUK-21" },
  PL: { name: "Amazon Poland", flag: "🇵🇱", tag: "yourPL-21" },
  IT: { name: "Amazon Italy", flag: "🇮🇹", tag: "yourIT-21" },
  ES: { name: "Amazon Spain", flag: "🇪🇸", tag: "yourES-21" },
  NL: { name: "Amazon Netherlands", flag: "🇳🇱", tag: "yourNL-21" },
};

// Generate affiliate link function
export function getAffiliateLink(country, searchTerm) {
  const config = affiliateConfig[country] || affiliateConfig["DE"];
  const domain = country === "UK" ? "co.uk" : country.toLowerCase();
  const encodedQuery = encodeURIComponent(searchTerm);

  return `https://www.amazon.${domain}/s?k=${encodedQuery}`;
}
