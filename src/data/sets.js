export const sets = [
  {
    id: "starter-set",
    name: "Starter Set",
    description: "Perfect introduction with three popular scents",
    candles: ["Lavender", "Vanilla", "Citrus"],
    bestFor: "New to candles",
    image: "/images/sets/starter.png", // ← .png
    searchUrl: {
      de: "https://amazon.de/s?k=soy+candle+gift+set+lavender+vanilla+citrus+natural+3+pack",
      uk: "https://amazon.co.uk/s?k=soy+candle+gift+set+lavender+vanilla+citrus+natural+3+pack",
      fr: "https://amazon.fr/s?k=coffret+bougies+parfumées+lavande+vanille+citron+3",
      pl: "https://amazon.pl/s?k=zestaw+świec+zapachowych+lawenda+wanilia+cytryna",
    },
  },
  {
    id: "relaxation-set",
    name: "Relaxation Set",
    description: "Calming scents for peaceful moments",
    candles: ["Lavender", "Fresh Linen", "Sandalwood"],
    bestFor: "Self-care",
    image: "/images/sets/relaxation.png", // ← .png
    searchUrl: {
      de: "https://amazon.de/s?k=relax+candle+gift+set+lavender+linen+sandalwood+aromatherapy",
      uk: "https://amazon.co.uk/s?k=relax+candle+gift+set+lavender+linen+sandalwood+aromatherapy",
      fr: "https://amazon.fr/s?k=coffret+bougies+relaxation+lavande+lin+santal",
      pl: "https://amazon.pl/s?k=zestaw+świec+relaksacyjnych+lawenda+len+sandalowiec",
    },
  },
  {
    id: "ultimate-gift-set",
    name: "Ultimate Gift Set",
    description: "Complete collection of all signature scents",
    candles: ["6 assorted scents"],
    bestFor: "Special occasions",
    image: "/images/sets/ultimate.png", // ← .png
    searchUrl: {
      de: "https://amazon.de/s?k=luxury+candle+gift+set+6+pieces+premium+soy+wax",
      uk: "https://amazon.co.uk/s?k=luxury+candle+gift+set+6+pieces+premium+soy+wax",
      fr: "https://amazon.fr/s?k=coffret+luxe+bougies+6+pièces+cire+soja",
      pl: "https://amazon.pl/s?k=luksusowy+zestaw+świec+zapachowych+6+sztuk",
    },
  },
];

export function getSetAffiliateLink(set, country) {
  const url =
    set.searchUrl[country] || set.searchUrl["de"] || set.searchUrl["uk"];
  return url;
}
