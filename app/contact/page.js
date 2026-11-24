"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    q: "I placed an order but haven't received a confirmation. What should I do?",
    a: "Don't worry! Confirmation emails sometimes land in spam. If you haven't received anything within 30 minutes, call or WhatsApp us at +91 72919 58073 and we'll sort it out immediately.",
  },
  {
    q: "My furniture arrived damaged. What happens now?",
    a: "We take full responsibility. Contact us within 48 hours of delivery with photos of the damage. We will arrange a free replacement or a full refund — no questions asked.",
  },
  {
    q: "Can I customize a furniture piece before ordering?",
    a: "Absolutely! Most of our artisans accept custom orders for size, finish, and material. Reach out to us and we'll connect you directly with the right maker.",
  },
  {
    q: "How long does delivery take?",
    a: "Standard delivery takes 7–14 business days depending on your location. Custom pieces may take 3–5 weeks. You'll receive tracking updates at every stage.",
  },
  {
    q: "I want to sell my furniture on Kayra Craft. How do I start?",
    a: "It's free and easy! WhatsApp us at +91 72919 58073 with photos of your work and we'll guide you through the onboarding process personally.",
  },
  {
    q: "What if I'm not satisfied with my purchase?",
    a: "We offer a 7-day return window on all eligible items. If the piece doesn't match the listing or arrives in poor condition, we'll make it right — full refund or exchange guaranteed.",
  },
  {
    q: "Is my payment secure on Kayra Craft?",
    a: "Yes. All transactions are encrypted and processed through trusted payment gateways. We never store your card details. Your money is held safely until you confirm delivery.",
  },
  {
    q: "Can I track my order?",
    a: "Yes! Once your order is dispatched, you'll receive a tracking link via SMS and email. You can also WhatsApp us anytime for a real-time update.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-sand/30 rounded-2xl overflow-hidden">
      <button
        className="w-full flex justify-between items-center px-6 py-5 text-left bg-white hover:bg-cream transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-walnut pr-4 text-sm">{q}</span>
        <span className={`text-sand text-xl flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-6 py-4 bg-cream text-charcoal/70 text-sm leading-relaxed border-t border-sand/20">
          {a}
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-cream min-h-screen">

        {/* Hero */}
        <section
          className="py-20 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #3B2314 0%, #5C3D2E 50%, #8B5E3C 100%)" }}
        >
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sand/10 blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <span className="inline-block mb-4 px-4 py-1 bg-sand/20 text-sand text-sm rounded-full border border-sand/40 tracking-widest uppercase">
              We're Here for You
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-4">
              Contact <span className="text-sand">Us</span>
            </h1>
            <p className="text-cream/80 text-lg max-w-xl mx-auto">
              Have a question, concern, or just want to say hello? A real human will respond — fast.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path fill="#FAF7F2" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
            </svg>
          </div>
        </section>

        {/* Promise Banner */}
        <section className="py-10 bg-cream">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-walnut rounded-3xl p-8 md:p-10 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-cream mb-3">Our Promise to You</h2>
              <p className="text-cream/80 max-w-2xl mx-auto leading-relaxed">
                We built Kayra Craft to make buying and selling furniture a{" "}
                <span className="text-sand font-semibold">completely worry-free experience</span>. If anything ever goes wrong — a delayed delivery, a damaged item, a payment issue, or anything else — we personally take responsibility and make it right. You are never alone in this.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 bg-cream">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-walnut">Reach Us Directly</h2>
              <p className="text-charcoal/60 mt-2">Multiple ways to get in touch — pick what's easiest for you.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

              {/* Call */}
              <a href="tel:+917291958073" className="group bg-white rounded-2xl p-8 border border-sand/20 hover:border-sand hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 bg-walnut/10 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-walnut transition-all">📞</div>
                <h3 className="font-bold text-walnut text-lg mb-1">Call Us</h3>
                <p className="text-sand font-semibold text-lg">+91 72919 58073</p>
                <p className="text-charcoal/50 text-sm mt-2">Mon–Sat, 9 AM – 7 PM</p>
                <span className="inline-block mt-4 text-xs text-walnut border border-walnut/30 px-3 py-1 rounded-full group-hover:bg-walnut group-hover:text-cream transition-all">
                  Tap to Call
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917291958073?text=Hi%20Kayra%20Craft%2C%20I%20need%20help."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-8 border border-sand/20 hover:border-green-400 hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-green-500 transition-all">💬</div>
                <h3 className="font-bold text-walnut text-lg mb-1">WhatsApp</h3>
                <p className="text-green-600 font-semibold text-lg">+91 72919 58073</p>
                <p className="text-charcoal/50 text-sm mt-2">Fastest — usually replies within minutes</p>
                <span className="inline-block mt-4 text-xs text-green-700 border border-green-300 px-3 py-1 rounded-full group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500 transition-all">
                  Chat on WhatsApp
                </span>
              </a>

              {/* Email */}
              <a href="mailto:support@kayracraft.in" className="group bg-white rounded-2xl p-8 border border-sand/20 hover:border-sand hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 bg-sand/10 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-sand transition-all">✉️</div>
                <h3 className="font-bold text-walnut text-lg mb-1">Email Us</h3>
                <p className="text-sand font-semibold">support@kayracraft.in</p>
                <p className="text-charcoal/50 text-sm mt-2">We reply within 24 hours</p>
                <span className="inline-block mt-4 text-xs text-walnut border border-walnut/30 px-3 py-1 rounded-full group-hover:bg-sand group-hover:border-sand transition-all">
                  Send Email
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Reassurance Strips */}
        <section className="py-10 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "⚡", title: "Quick Response", desc: "WhatsApp replies within minutes during business hours." },
                { icon: "🛡️", title: "Buyer Protection", desc: "Every order is covered. No risk, ever." },
                { icon: "🔄", title: "Easy Returns", desc: "7-day hassle-free return on all eligible items." },
                { icon: "💯", title: "100% Satisfaction", desc: "We don't close a case until you're happy." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-3 items-start p-4 rounded-xl hover:bg-cream transition-colors">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <p className="font-bold text-walnut text-sm">{title}</p>
                    <p className="text-charcoal/60 text-xs mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + FAQs */}
        <section className="py-16 bg-cream">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

            {/* Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-walnut mb-2">Send Us a Message</h2>
              <p className="text-charcoal/60 mb-8 text-sm">Fill in the form and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <div className="bg-walnut rounded-2xl p-10 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-cream mb-2">Message Received!</h3>
                  <p className="text-cream/70 text-sm">
                    We'll get back to you within 24 hours. For urgent help, WhatsApp us at{" "}
                    <span className="text-sand font-semibold">+91 72919 58073</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-walnut uppercase tracking-wider mb-1 block">Your Name</label>
                      <input
                        required type="text" placeholder="Ananya Sharma"
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-sand/30 bg-white focus:outline-none focus:border-walnut text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-walnut uppercase tracking-wider mb-1 block">Email Address</label>
                      <input
                        required type="email" placeholder="you@example.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-sand/30 bg-white focus:outline-none focus:border-walnut text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-walnut uppercase tracking-wider mb-1 block">Subject</label>
                    <select
                      value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-sand/30 bg-white focus:outline-none focus:border-walnut text-sm text-charcoal"
                    >
                      <option value="">Select a topic...</option>
                      <option>Order Issue</option>
                      <option>Damaged Item</option>
                      <option>Return / Refund</option>
                      <option>Delivery Delay</option>
                      <option>Seller Onboarding</option>
                      <option>Payment Problem</option>
                      <option>Custom Order</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-walnut uppercase tracking-wider mb-1 block">Message</label>
                    <textarea
                      required rows={5} placeholder="Describe your issue or question in detail..."
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-sand/30 bg-white focus:outline-none focus:border-walnut text-sm resize-none"
                    />
                  </div>
                  <button type="submit" className="w-full py-3 bg-walnut text-cream font-semibold rounded-full hover:bg-sand hover:text-walnut transition-all">
                    Send Message →
                  </button>
                  <p className="text-xs text-charcoal/40 text-center">
                    For urgent issues, WhatsApp us at{" "}
                    <a href="https://wa.me/917291958073" className="text-sand hover:underline" target="_blank" rel="noopener noreferrer">
                      +91 72919 58073
                    </a>
                  </p>
                </form>
              )}
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-walnut mb-2">Common Questions</h2>
              <p className="text-charcoal/60 mb-8 text-sm">Quick answers to the most frequent concerns.</p>
              <div className="space-y-3">
                {faqs.map((faq) => <FAQItem key={faq.q} {...faq} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <div className="text-4xl mb-4">💛</div>
            <h2 className="text-3xl font-serif font-bold text-walnut mb-3">Still Not Sure?</h2>
            <p className="text-charcoal/60 mb-6 leading-relaxed">
              Just send us a WhatsApp message. No bots, no long wait times — a real person from our team will respond and make sure your experience with Kayra Craft is nothing short of excellent.
            </p>
            <a
              href="https://wa.me/917291958073?text=Hi%20Kayra%20Craft%2C%20I%20have%20a%20question."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all shadow-lg text-lg"
            >
              💬 WhatsApp Us Now
            </a>
            <p className="text-charcoal/40 text-xs mt-4">+91 72919 58073 · Usually replies within minutes</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
