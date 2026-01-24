import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user already accepted
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#2C1912] text-[#EDE4DA] p-4 md:p-6 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-[#D8CFC4] max-w-2xl">
          <p>
            We use cookies to enhance your experience, analyze site traffic, and
            serve personalized content. By clicking "Accept", you consent to our
            use of cookies. Read our{" "}
            <a href="/privacy" className="text-[#D6A86C] hover:underline">
              Privacy Policy
            </a>{" "}
            for more info.
          </p>
        </div>

        <div className="flex gap-3 shrink-0">
          <button
            onClick={acceptCookies}
            className="bg-[#D6A86C] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#C48F55] transition"
          >
            Accept
          </button>

          <button
            onClick={acceptCookies}
            className="border border-[#D8CFC4] text-[#D8CFC4] px-6 py-2 rounded-full text-sm hover:bg-[#FFFFFF1A] transition"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
