const footerLinks = {
  Shop: ["New Arrivals", "Bestsellers", "Living Room", "Bedroom", "Outdoor"],
  Sell: ["Start Selling", "Seller Guide", "Pricing", "Artisan Stories"],
  Company: ["About Us", "Blog", "Careers", "Press"],
  Support: ["Help Center", "Shipping Policy", "Returns", "Contact Us"],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-serif font-bold text-cream mb-3">
              Kayra<span className="text-sand">Craft</span>
            </p>
            <p className="text-sm leading-relaxed mb-4">
              A marketplace for handcrafted furniture, connecting artisans with people who love beautiful things.
            </p>
            <div className="flex gap-3">
              {["𝕏", "f", "in", "📷"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm hover:bg-sand hover:text-walnut transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-cream font-semibold mb-4 text-sm uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-sand transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream/40">
          <p>© 2025 KayraCraft. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sand transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-sand transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
