import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "Personal identification information (name, email address, phone number) when you register or place an order.",
      "Payment information processed securely through third-party payment gateways. We never store your full card details.",
      "Shipping address and delivery preferences.",
      "Device and usage data (browser type, IP address, pages visited) collected automatically via cookies and analytics tools.",
      "Communications you send us via email, WhatsApp, or our contact form.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "To process and fulfill your orders, including delivery coordination and order tracking.",
      "To communicate with you about your orders, returns, refunds, and support requests.",
      "To send you important service updates, security alerts, and account notifications.",
      "To improve our platform, personalize your experience, and develop new features.",
      "To prevent fraud, enforce our Terms of Service, and comply with legal obligations.",
      "With your consent, to send promotional offers and newsletters (you can unsubscribe anytime).",
    ],
  },
  {
    title: "3. How We Share Your Information",
    content: [
      "With artisan sellers only to the extent necessary to fulfill your order (e.g., your delivery address).",
      "With trusted third-party service providers (payment processors, logistics partners, analytics tools) under strict confidentiality agreements.",
      "With law enforcement or regulatory authorities when required by law.",
      "We do NOT sell, rent, or trade your personal information to any third party for marketing purposes.",
    ],
  },
  {
    title: "4. Data Security",
    content: [
      "All data transmitted between your browser and our servers is encrypted using SSL/TLS technology.",
      "Payment transactions are processed through PCI-DSS compliant payment gateways.",
      "We implement industry-standard security measures including firewalls, access controls, and regular security audits.",
      "Despite our best efforts, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and keep your account credentials confidential.",
    ],
  },
  {
    title: "5. Cookies & Tracking",
    content: [
      "We use cookies to maintain your session, remember your preferences, and analyze site traffic.",
      "Essential cookies are required for the platform to function and cannot be disabled.",
      "Analytics cookies (e.g., Google Analytics) help us understand how users interact with our site. These can be disabled via your browser settings.",
      "You can control cookie preferences through your browser settings at any time.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "Access: You have the right to request a copy of the personal data we hold about you.",
      "Correction: You can update or correct your personal information at any time through your account settings.",
      "Deletion: You may request deletion of your personal data, subject to legal retention requirements.",
      "Opt-out: You can unsubscribe from marketing communications at any time by clicking 'Unsubscribe' in any email or contacting us directly.",
      "Data Portability: You may request your data in a structured, machine-readable format.",
      "To exercise any of these rights, contact us at support@kayracraft.in or WhatsApp +91 72919 58073.",
    ],
  },
  {
    title: "7. Data Retention",
    content: [
      "We retain your personal data for as long as your account is active or as needed to provide services.",
      "Order and transaction records are retained for 7 years as required by Indian tax and accounting laws.",
      "You may request deletion of your account and associated data at any time, subject to legal obligations.",
    ],
  },
  {
    title: "8. Third-Party Links",
    content: [
      "Our platform may contain links to third-party websites (e.g., payment gateways, social media). We are not responsible for the privacy practices of these external sites.",
      "We encourage you to review the privacy policies of any third-party sites you visit.",
    ],
  },
  {
    title: "9. Children's Privacy",
    content: [
      "Kayra Craft is not intended for use by individuals under the age of 18.",
      "We do not knowingly collect personal information from minors. If we become aware that a minor has provided us with personal data, we will delete it promptly.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.",
      "We will notify you of significant changes via email or a prominent notice on our website.",
      "Your continued use of Kayra Craft after changes are posted constitutes your acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-cream min-h-screen">

        {/* Hero */}
        <section
          className="py-20 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #3B2314 0%, #5C3D2E 50%, #8B5E3C 100%)" }}
        >
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-sand/10 blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <span className="inline-block mb-4 px-4 py-1 bg-sand/20 text-sand text-sm rounded-full border border-sand/40 tracking-widest uppercase">
              Transparency First
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-4">
              Privacy <span className="text-sand">Policy</span>
            </h1>
            <p className="text-cream/80 text-lg max-w-xl mx-auto">
              We believe you deserve to know exactly how your data is used. Here's our full, plain-language privacy policy.
            </p>
            <p className="text-cream/50 text-sm mt-4">Last updated: June 2025</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path fill="#FAF7F2" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
            </svg>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 bg-cream">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-walnut/5 border border-sand/30 rounded-2xl p-8">
              <p className="text-charcoal/70 leading-relaxed">
                At <span className="font-bold text-walnut">Kayra Craft</span>, your privacy is not an afterthought — it's a core part of how we operate. This Privacy Policy explains what personal information we collect, why we collect it, how we use it, and the choices you have. By using our platform, you agree to the practices described in this policy. If you have any questions, you can always reach us at{" "}
                <a href="mailto:support@kayracraft.in" className="text-sand hover:underline">support@kayracraft.in</a> or WhatsApp{" "}
                <a href="https://wa.me/917291958073" className="text-sand hover:underline" target="_blank" rel="noopener noreferrer">+91 72919 58073</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Policy Sections */}
        <section className="pb-16 bg-cream">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            {sections.map(({ title, content }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-sand/20 shadow-sm">
                <h2 className="text-xl font-bold text-walnut mb-4 font-serif">{title}</h2>
                <ul className="space-y-3">
                  {content.map((item, i) => (
                    <li key={i} className="flex gap-3 text-charcoal/70 text-sm leading-relaxed">
                      <span className="text-sand mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <div className="text-4xl mb-4">🔒</div>
            <h2 className="text-3xl font-serif font-bold text-walnut mb-3">Questions About Your Privacy?</h2>
            <p className="text-charcoal/60 mb-6 leading-relaxed">
              We're committed to being fully transparent. If you have any questions, concerns, or requests regarding your personal data, reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917291958073?text=Hi%2C%20I%20have%20a%20privacy%20question."
                target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all"
              >
                💬 WhatsApp Us
              </a>
              <a
                href="mailto:support@kayracraft.in"
                className="px-6 py-3 border-2 border-walnut text-walnut font-semibold rounded-full hover:bg-walnut hover:text-cream transition-all"
              >
                ✉️ Email Us
              </a>
              <a
                href="/contact"
                className="px-6 py-3 bg-walnut text-cream font-semibold rounded-full hover:bg-sand hover:text-walnut transition-all"
              >
                Contact Page →
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
