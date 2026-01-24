export default function PrivacyPolicy() {
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
      <div className="absolute inset-0 bg-[#FBF3E8]/90"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="font-serif text-3xl md:text-4xl text-[#3A2A1A] mb-8">
            Privacy Policy
          </h1>

          <p className="text-[#6B5B4A] text-sm mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8 text-[#6B5B4A] leading-relaxed">
            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                1. Introduction
              </h2>
              <p>
                CandleFinder ("we", "our", or "us") respects your privacy. This
                Privacy Policy explains how we collect, use, and protect your
                personal information when you use our website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                2. Information We Collect
              </h2>
              <p className="mb-4">We collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Location data:</strong> We detect your country to show
                  relevant Amazon links. This is done via your IP address.
                </li>
                <li>
                  <strong>Usage data:</strong> We use Google Analytics to
                  understand how visitors use our site.
                </li>
                <li>
                  <strong>Contact form data:</strong> If you contact us, we
                  store your name, email, and message.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide personalized candle recommendations</li>
                <li>
                  To show relevant Amazon affiliate links for your country
                </li>
                <li>To improve our website and user experience</li>
                <li>To respond to your inquiries</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                4. Affiliate Links
              </h2>
              <p>
                Our website contains affiliate links to Amazon. When you click
                these links and make a purchase, we may earn a commission. This
                does not affect your price. Amazon handles all payment and
                delivery.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                5. Cookies
              </h2>
              <p>
                We use cookies to remember your country selection and for
                analytics. You can disable cookies in your browser settings, but
                some features may not work properly.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                6. Third-Party Services
              </h2>
              <p>We use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> For website analytics
                </li>
                <li>
                  <strong>ipapi.co:</strong> For country detection
                </li>
                <li>
                  <strong>Amazon:</strong> For affiliate product links
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                7. Your Rights
              </h2>
              <p>
                You have the right to access, correct, or delete your personal
                data. Contact us at hello@candlefinder.com for any
                privacy-related requests.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                8. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact
                us at hello@candlefinder.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
