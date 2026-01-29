export default function PrivacyPolicy() {
  return (
    <section
      className="min-h-screen px-6 pt-28 pb-20 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1603006905003-be475563bc59?w=1920&q=80 ')`,
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
                1. Data Controller
              </h2>
              <p className="mb-2">
                <strong>SIA "ARLANIKO"</strong>
                <br />
                Registration No.: 44103059058
                <br />
                Legal Address: Sporta iela 57, Valmiera, LV-4201, Latvia
                <br />
                Email: hello@candlefinder.com
              </p>
              <p>
                This website is operated by SIA "ARLANIKO", a company registered
                in Latvia, European Union.
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
                  understand how visitors use our site. Data may be transferred
                  to the USA (see Section 8).
                </li>
                <li>
                  <strong>Contact form data:</strong> If you contact us, we
                  store your name, email, and message.
                </li>
              </ul>
            </section>

            {/* Pārējais saturs paliek tas pats... */}

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                6. Third-Party Services & Data Transfers
              </h2>
              <p className="mb-4">We use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Google Analytics:</strong> For website analytics. Data
                  is transferred to the USA under the EU-US Data Privacy
                  Framework.
                </li>
                <li>
                  <strong>ipapi.co:</strong> For country detection
                </li>
                <li>
                  <strong>Amazon:</strong> For affiliate product links
                </li>
              </ul>
              <p>
                When using Google Analytics, your data (IP address, browsing
                behavior) may be transferred to the United States. We have
                enabled IP anonymization and use Google Analytics 4 with
                privacy-focused settings.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                8. Your Rights (GDPR)
              </h2>
              <p className="mb-4">
                Under the General Data Protection Regulation (GDPR), you have
                the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Request deletion of your data ("right to be forgotten")</li>
                <li>Object to processing</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at hello@candlefinder.com.
                We will respond within 30 days as required by GDPR.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                9. Contact Us
              </h2>
              <p>
                <strong>SIA "ARLANIKO"</strong>
                <br />
                Sporta iela 57, Valmiera, LV-4201, Latvia
                <br />
                Email: hello@candlefinder.com
                <br />
                Phone: +371 29333171 (ARLANIKO)
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
