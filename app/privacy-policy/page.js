import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "Welcome to Kayra Craft. We respect your privacy. This Privacy Policy explains what information we collect when you use our App, how we use it, and how we protect it. By using our App, you agree to this policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: ["We collect only the information needed to run the App:"],
    groups: [
      {
        title: "Personal Information you provide",
        items: ["Name, Mobile Number, Email Address", "Profile Photo", "Address for Delivery / Pickup", "UPI ID for Payments and Refunds"],
      },
      {
        title: "Furniture Listing Information",
        items: ["Photos, Price, Description, Category of furniture you upload for selling."],
      },
      {
        title: "Automatically Collected Information",
        items: ["Device type, App version, Log data, and Crash reports to fix bugs."],
      },
    ],
    notice: "We do NOT collect your UPI PIN, Bank Password, OTP, or Card CVV. Never share these with anyone.",
  },
  {
    title: "3. How We Use Your Information",
    items: [
      "To create and manage your account",
      "To show your furniture listings to buyers",
      "To process orders, payments, and refunds",
      "To verify UTR / Payment for order confirmation",
      "To provide customer support and prevent fraud",
      "To send order updates, notifications, and important alerts",
    ],
  },
  {
    title: "4. Payment and Escrow System",
    items: [
      "Payments in this App are collected by the Admin as an Escrow (holding amount).",
      "Buyer pays to Admin's UPI.",
      "Admin holds the amount safely.",
      "After successful delivery and buyer confirmation, Admin transfers the amount to the Seller after deducting platform commission.",
      "Seller's UPI ID is used only for transferring their payment. We do not store your UPI PIN.",
    ],
  },
  {
    title: "5. How We Share Your Information",
    paragraphs: ["We do NOT sell your personal data to anyone. We share limited information only when necessary:"],
    items: [
      "With Buyer / Seller: Only Name, Mobile Number, and City for delivery coordination, after an order is confirmed.",
      "With Service Providers: For hosting, analytics, and crash reporting.",
      "With Law Enforcement: If required by Indian Law.",
    ],
  },
  {
    title: "6. Photos and Listings",
    paragraphs: [
      "When you upload furniture photos, you confirm that the photos belong to you. You give us permission to display those photos inside the App to buyers. You can delete your listing anytime from My Listings.",
    ],
  },
  {
    title: "7. Data Security",
    paragraphs: [
      "We use industry-standard security to protect your data. However, no method over the internet is 100% secure.",
    ],
    notice: "Please do not share your OTP or UPI PIN with anyone, even if someone claims to be from our team.",
  },
  {
    title: "8. Data Retention and Delete Account",
    paragraphs: [
      "We keep your data only as long as your account is active. You can delete your account anytime from App > Profile > Settings > Delete Account. After deletion, your personal data will be deleted within 30 days, except order records required by law.",
    ],
  },
  {
    title: "9. Children's Privacy",
    paragraphs: [
      "This App is not for children under 18 years of age. If you are under 18, please use the App with a parent or guardian.",
    ],
  },
  {
    title: "10. Changes To This Policy",
    paragraphs: [
      "We may update this policy from time to time. The new version will be updated on this page with a new date.",
    ],
  },
  {
    title: "11. Contact Us",
    paragraphs: ["If you have any questions about this Privacy Policy, contact us:"],
    contacts: [
      { label: "Email", value: "44vikasrajput44@gmail.com", href: "mailto:44vikasrajput44@gmail.com" },
      { label: "WhatsApp", value: "729195073" },
      { label: "Address", value: "Faridabad,Haryana" },
    ],
  },
];

export default function PrivacyPolicyPage() {
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
              Transparency First
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-4">
              Privacy <span className="text-sand">Policy</span>
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
            {sections.map(({ title, paragraphs, groups, items, notice, contacts }) => (
              <article key={title} className="bg-white rounded-2xl p-8 border border-sand/20 shadow-sm">
                <h2 className="text-xl font-bold text-walnut mb-4 font-serif">{title}</h2>
                {paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-charcoal/70 text-sm leading-relaxed mb-3 last:mb-0">
                    {paragraph}
                  </p>
                ))}
                {groups?.map(({ title: groupTitle, items: groupItems }) => (
                  <div key={groupTitle} className="mt-5">
                    <h3 className="font-semibold text-walnut text-sm mb-2">{groupTitle}:</h3>
                    <ul className="space-y-2">
                      {groupItems.map((item) => (
                        <li key={item} className="flex gap-3 text-charcoal/70 text-sm leading-relaxed">
                          <span className="text-sand flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {items && (
                  <ul className="space-y-3 mt-3">
                    {items.map((item) => (
                      <li key={item} className="flex gap-3 text-charcoal/70 text-sm leading-relaxed">
                        <span className="text-sand flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {notice && (
                  <p className="mt-5 rounded-xl bg-walnut/5 border border-sand/30 p-4 text-walnut text-sm font-medium leading-relaxed">
                    {notice}
                  </p>
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
