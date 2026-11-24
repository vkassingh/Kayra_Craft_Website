const buyerSteps = [
  { step: "01", title: "Browse & Discover", desc: "Explore thousands of handcrafted pieces filtered by style, material, and budget." },
  { step: "02", title: "Connect with Artisan", desc: "Chat directly with the maker, request customizations, or ask questions." },
  { step: "03", title: "Secure Checkout", desc: "Pay safely. Your money is held until you confirm delivery and satisfaction." },
];

const sellerSteps = [
  { step: "01", title: "Create Your Shop", desc: "Sign up free and set up your artisan profile in under 5 minutes." },
  { step: "02", title: "List Your Pieces", desc: "Upload photos, set your price, and describe your craft story." },
  { step: "03", title: "Get Paid", desc: "Receive payments directly to your bank. We handle the rest." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sand font-semibold uppercase tracking-widest text-sm">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-walnut mt-2">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Buyers */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-sand/20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🛒</span>
              <h3 className="text-2xl font-serif font-bold text-walnut">For Buyers</h3>
            </div>
            <div className="space-y-6">
              {buyerSteps.map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <span className="text-3xl font-bold text-sand/40 font-serif leading-none">{step}</span>
                  <div>
                    <h4 className="font-bold text-walnut mb-1">{title}</h4>
                    <p className="text-charcoal/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#listings" className="mt-8 inline-block px-6 py-3 bg-walnut text-cream rounded-full hover:bg-sand hover:text-walnut transition-all font-medium">
              Start Shopping
            </a>
          </div>

          {/* Sellers */}
          <div className="bg-walnut rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🔨</span>
              <h3 className="text-2xl font-serif font-bold text-cream">For Sellers</h3>
            </div>
            <div className="space-y-6">
              {sellerSteps.map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <span className="text-3xl font-bold text-sand/40 font-serif leading-none">{step}</span>
                  <div>
                    <h4 className="font-bold text-cream mb-1">{title}</h4>
                    <p className="text-cream/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#sell" className="mt-8 inline-block px-6 py-3 bg-sand text-walnut rounded-full hover:bg-cream transition-all font-medium">
              Start Selling Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
