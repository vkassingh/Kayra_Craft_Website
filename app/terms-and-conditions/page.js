import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Acceptance of These Terms",
    paragraphs: [
      "Welcome to Kayra Craft. These Terms and Conditions apply when you access or use the Kayra Craft website, app, or marketplace services. By using the service, you agree to these Terms. If you do not agree, please do not use the service.",
    ],
  },
  {
    title: "2. Eligibility and Accounts",
    items: [
      "You must provide accurate and current information when creating or using an account and keep your account details up to date.",
      "You are responsible for activity carried out through your account and for keeping your sign-in details secure.",
      "The service is not intended for children under 18. Anyone under 18 may use it only with the involvement and supervision of a parent or legal guardian.",
    ],
  },
  {
    title: "3. Kayra Craft Marketplace",
    paragraphs: [
      "Kayra Craft provides a marketplace where buyers can discover furniture listings and sellers can offer furniture for sale. Unless explicitly stated otherwise, sellers are responsible for their products, listing details, and fulfillment. Kayra Craft is not the maker of every item listed.",
    ],
  },
  {
    title: "4. Buyer Responsibilities",
    items: [
      "Review the listing description, photos, price, and other available information before placing an order.",
      "Provide accurate contact and delivery information and promptly respond to reasonable delivery coordination requests.",
      "Contact Kayra Craft through the support details provided on the website if there is an issue with an order.",
    ],
  },
  {
    title: "5. Seller Responsibilities",
    items: [
      "Provide accurate descriptions, prices, categories, and photos for listed furniture.",
      "Only list items you are authorized to sell, and ensure your listings and sales comply with applicable laws.",
      "Respond to confirmed orders and coordinate fulfillment in a timely and professional manner.",
      "Review any platform commission or other applicable charges disclosed to you before accepting or fulfilling orders.",
    ],
  },
  {
    title: "6. Orders, Payments, and Seller Payouts",
    items: [
      "Order and payment instructions will be provided during the applicable transaction. An order is subject to confirmation and availability.",
      "Where the escrow payment process is offered, the buyer pays to Kayra Craft's designated payment account. Kayra Craft holds the amount until successful delivery and buyer confirmation, then transfers the seller's amount after deducting the disclosed platform commission.",
      "Payment verification may require the transaction reference (UTR). Never share your UPI PIN, OTP, bank password, or card CVV with anyone, including someone claiming to represent Kayra Craft.",
      "Payment processing or bank delays may affect confirmation or payout timing. Contact support if a payment or payout appears incorrect.",
    ],
  },
  {
    title: "7. Delivery, Cancellations, Returns, and Refunds",
    paragraphs: [
      "Delivery arrangements and estimated timelines may vary by item, seller, and location. Any cancellation, return, replacement, or refund is subject to the terms shown for the relevant order and applicable law. Contact Kayra Craft support promptly if an item is damaged, delayed, or materially different from its listing.",
    ],
  },
  {
    title: "8. Listings, Photos, and Intellectual Property",
    items: [
      "You retain ownership of content you submit, including listing photos and descriptions. You confirm that you have the rights needed to submit and display that content.",
      "By submitting listing content, you give Kayra Craft permission to use, reproduce, and display it as needed to operate and promote the marketplace and show listings to buyers. This permission ends when the content is removed, except where retention is needed for legal, safety, or operational reasons.",
      "The Kayra Craft name, branding, and website materials may not be copied or used without permission, except as allowed by law.",
    ],
  },
  {
    title: "9. Acceptable Use",
    items: [
      "Do not post false, misleading, unlawful, infringing, or harmful content.",
      "Do not interfere with the operation or security of the service, misuse another person's account, or attempt to evade payment or platform processes.",
      "We may remove content or restrict access where we reasonably believe these Terms or applicable law have been violated.",
    ],
  },
  {
    title: "10. Disclaimers and Limitation of Liability",
    paragraphs: [
      "To the extent permitted by law, the marketplace is provided on an \"as available\" basis. We do not guarantee uninterrupted access or that every listing, seller, or buyer will meet another user's expectations. Nothing in these Terms excludes rights or remedies that cannot be excluded under applicable law.",
      "To the extent permitted by law, Kayra Craft is not responsible for indirect or consequential loss arising from use of the marketplace. This does not limit liability that cannot legally be limited.",
    ],
  },
  {
    title: "11. Suspension and Termination",
    paragraphs: [
      "You may stop using the service at any time. We may suspend or restrict access where necessary to protect users, investigate suspected misuse, comply with law, or enforce these Terms. Any outstanding orders, payments, refunds, or legal obligations may continue to be handled after account access ends.",
    ],
  },
  {
    title: "12. Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. The updated version will be posted on this page with a revised date. Your continued use of the service after an update means you accept the updated Terms.",
    ],
  },
  {
    title: "13. Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of India, subject to any mandatory consumer protections and other rights available under applicable law.",
    ],
  },
  {
    title: "14. Contact Us",
    paragraphs: ["For questions about these Terms, contact Kayra Craft:"],
    contacts: [
      { label: "Email", value: "44vikasrajput44@gmail.com", href: "mailto:44vikasrajput44@gmail.com" },
      { label: "WhatsApp", value: "729195073" },
      { label: "Address", value: "Faridabad,Haryana" },
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-cream min-h-screen">
        <section
          className="py-20 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #3B2314 0%, #5C3D2E 50%, #8B5E3C 100%)" }}
        >
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-sand/10 blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <span className="inline-block mb-4 px-4 py-1 bg-sand/20 text-sand text-sm rounded-full border border-sand/40 tracking-widest uppercase">
              Terms of Use
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-4">
              Terms <span className="text-sand">&amp; Conditions</span>
            </h1>
            <p className="text-cream/80 text-lg">for Kayra Craft</p>
            <p className="text-cream/50 text-sm mt-4">Last Updated: 24 November 2026</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path fill="#FAF7F2" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
            </svg>
          </div>
        </section>

        <section className="py-12 bg-cream">
          <div className="max-w-4xl mx-auto px-6 space-y-6">
            {sections.map(({ title, paragraphs, items, contacts }) => (
              <article key={title} className="bg-white rounded-2xl p-8 border border-sand/20 shadow-sm">
                <h2 className="text-xl font-bold text-walnut mb-4 font-serif">{title}</h2>
                {paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-charcoal/70 text-sm leading-relaxed mb-3 last:mb-0">
                    {paragraph}
                  </p>
                ))}
                {items && (
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex gap-3 text-charcoal/70 text-sm leading-relaxed">
                        <span className="text-sand flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {contacts && (
                  <div className="space-y-2 mt-4 text-sm text-charcoal/70">
                    {contacts.map(({ label, value, href }) => (
                      <p key={label}>
                        <span className="font-semibold text-walnut">{label}:</span>{" "}
                        {href ? <a href={href} className="text-sand hover:underline">{value}</a> : value}
                      </p>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
