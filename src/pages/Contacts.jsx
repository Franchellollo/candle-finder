import { useState } from "react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
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
        <div className="text-center mb-16">
          <p className="text-[15px] tracking-wide text-[#D6A36C] mb-4 italic">
            Get in Touch
          </p>
          <h1 className="font-serif font-semibold text-4xl md:text-5xl text-[#3A2A1A] mb-4">
            Contact Us
          </h1>
          <p className="text-[#6B5B4A] max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="font-serif text-xl text-[#3A2A1A] mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFF8F1] rounded-full flex items-center justify-center text-[#D6A36C]">
                    📧
                  </div>
                  <div>
                    <p className="font-medium text-[#3A2A1A]">Email</p>
                    <p className="text-[#6B5B4A] text-sm">
                      hello@candlefinder.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFF8F1] rounded-full flex items-center justify-center text-[#D6A36C]">
                    🕐
                  </div>
                  <div>
                    <p className="font-medium text-[#3A2A1A]">Response Time</p>
                    <p className="text-[#6B5B4A] text-sm">Within 24-48 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFF8F1] rounded-full flex items-center justify-center text-[#D6A36C]">
                    🌍
                  </div>
                  <div>
                    <p className="font-medium text-[#3A2A1A]">Location</p>
                    <p className="text-[#6B5B4A] text-sm">
                      Serving Europe & UK
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="font-serif text-xl text-[#3A2A1A] mb-6">
                Quick Answers
              </h3>

              <div className="space-y-4 text-sm">
                <details className="group">
                  <summary className="font-medium text-[#3A2A1A] cursor-pointer list-none flex justify-between items-center">
                    How does the quiz work?
                    <span className="text-[#D6A36C] group-open:rotate-180 transition">
                      ▼
                    </span>
                  </summary>
                  <p className="text-[#6B5B4A] mt-2 pl-4">
                    Our quiz asks about your mood, occasion, and scent
                    preferences to match you with the perfect candle from
                    Amazon.
                  </p>
                </details>

                <details className="group">
                  <summary className="font-medium text-[#3A2A1A] cursor-pointer list-none flex justify-between items-center">
                    Do you sell candles directly?
                    <span className="text-[#D6A36C] group-open:rotate-180 transition">
                      ▼
                    </span>
                  </summary>
                  <p className="text-[#6B5B4A] mt-2 pl-4">
                    No, we help you find the best candles on Amazon in your
                    country. We earn a small commission from affiliate links.
                  </p>
                </details>

                <details className="group">
                  <summary className="font-medium text-[#3A2A1A] cursor-pointer list-none flex justify-between items-center">
                    Is this service free?
                    <span className="text-[#D6A36C] group-open:rotate-180 transition">
                      ▼
                    </span>
                  </summary>
                  <p className="text-[#6B5B4A] mt-2 pl-4">
                    Yes! Our quiz and recommendations are completely free to
                    use.
                  </p>
                </details>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="font-serif text-xl text-[#3A2A1A] mb-6">
              Send us a Message
            </h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h4 className="font-serif text-xl text-[#3A2A1A] mb-2">
                  Message Sent!
                </h4>
                <p className="text-[#6B5B4A]">
                  We'll get back to you within 24-48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#3A2A1A] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E6D5C3] rounded-lg focus:outline-none focus:border-[#D6A36C] bg-[#FBF3E8]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3A2A1A] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E6D5C3] rounded-lg focus:outline-none focus:border-[#D6A36C] bg-[#FBF3E8]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3A2A1A] mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E6D5C3] rounded-lg focus:outline-none focus:border-[#D6A36C] bg-[#FBF3E8]"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Question</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3A2A1A] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[#E6D5C3] rounded-lg focus:outline-none focus:border-[#D6A36C] bg-[#FBF3E8] resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D6A36C] text-white py-4 rounded-full font-medium hover:bg-[#C48F55] transition"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
