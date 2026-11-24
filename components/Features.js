const features = [
  {
    icon: "🪵",
    title: "Authentic Craftsmanship",
    desc: "Every item is handmade by verified artisans using sustainable, quality materials.",
  },
  {
    icon: "🔒",
    title: "Secure Transactions",
    desc: "Buyer protection on every order. Sell with confidence using our escrow system.",
  },
  {
    icon: "🚚",
    title: "White-Glove Delivery",
    desc: "Furniture delivered and assembled at your doorstep, handled with care.",
  },
  {
    icon: "💰",
    title: "Best Seller Rates",
    desc: "Keep up to 90% of your sale. No hidden fees, transparent pricing always.",
  },
];

export default function Features() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sand font-semibold uppercase tracking-widest text-sm">Why Kayra Craft</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-walnut mt-2">
            Built for Makers & Buyers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-sand/20 hover:border-sand/50 transition-all group"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-lg font-bold text-walnut mb-2 group-hover:text-sand transition-colors">{title}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
