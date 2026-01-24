export default function TermsOfService() {
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
            Terms of Service
          </h1>

          <p className="text-[#6B5B4A] text-sm mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8 text-[#6B5B4A] leading-relaxed">
            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using CandleFinder ("the Service"), you accept
                and agree to be bound by these Terms of Service. If you do not
                agree, please do not use our Service.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                2. Description of Service
              </h2>
              <p>
                CandleFinder is a recommendation tool that helps users find
                candles on Amazon. We do not sell products directly. All
                purchases are made through Amazon's website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                3. Affiliate Disclosure
              </h2>
              <p>
                CandleFinder participates in the Amazon Associates Program. This
                means we earn a commission when you click on affiliate links and
                make purchases. This comes at no additional cost to you.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                4. User Conduct
              </h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for any illegal purpose</li>
                <li>Attempt to interfere with the Service's functionality</li>
                <li>Scrape or automate access to our content</li>
                <li>Misrepresent your identity in communications</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                5. Intellectual Property
              </h2>
              <p>
                All content on CandleFinder, including text, graphics, logos,
                and code, is our property or used with permission. You may not
                copy, modify, or distribute our content without written
                permission.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                6. Disclaimer of Warranties
              </h2>
              <p>
                The Service is provided "as is" without warranties of any kind.
                We do not guarantee that recommendations will meet your specific
                needs or that Amazon products will be available.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                7. Limitation of Liability
              </h2>
              <p>
                CandleFinder is not responsible for any issues arising from your
                purchases on Amazon, including product quality, delivery, or
                returns. All such matters must be handled directly with Amazon.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                8. Changes to Terms
              </h2>
              <p>
                We may update these Terms at any time. Continued use of the
                Service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                9. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of the European Union. Any
                disputes will be resolved in accordance with EU regulations.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-[#3A2A1A] mb-4">
                10. Contact
              </h2>
              <p>
                For questions about these Terms, contact us at
                hello@candlefinder.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
