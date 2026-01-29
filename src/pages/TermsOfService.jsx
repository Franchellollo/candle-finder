export default function TermsOfService() {
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
            Terms of Service
          </h1>

          <p className="text-[#6B5B4A] text-sm mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8 text-[#6B5B4A] leading-relaxed">
            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                1. Service Provider
              </h2>
              <p className="mb-2">This service is provided by:</p>
              <p className="mb-2">
                <strong>SIA "ARLANIKO"</strong>
                <br />
                Registration No.: 44103059058
                <br />
                Address: Sporta iela 57, Valmiera, LV-4201, Latvia
                <br />
                EU VAT: LV44103059058
              </p>
              <p>
                Operating the website: candle-finder.vercel.app (CandleFinder)
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                2. Acceptance of Terms
              </h2>
              <p>
                By accessing and using CandleFinder ("the Service"), you accept
                and agree to be bound by these Terms of Service. If you do not
                agree, please do not use our Service.
              </p>
            </section>

            {/* Pārējais saturs... */}

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                10. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of the Republic of Latvia
                and the European Union. Any disputes will be resolved in
                accordance with EU regulations, specifically the General Data
                Protection Regulation (GDPR) for data-related matters.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                11. Contact
              </h2>
              <p>
                <strong>SIA "ARLANIKO"</strong>
                <br />
                Sporta iela 57, Valmiera, LV-4201, Latvia
                <br />
                Email: hello@candlefinder.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
