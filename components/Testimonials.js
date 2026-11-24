const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Interior Designer, Mumbai",
    quote: "Kayra Craft is my go-to for sourcing unique pieces. The quality is unmatched and artisans are so responsive!",
    avatar: "AS",
  },
  {
    name: "Ravi Kumar",
    role: "Artisan Seller, Jaipur",
    quote: "I've sold over 200 pieces through Kayra Craft. The platform is simple and the payouts are always on time.",
    avatar: "RK",
  },
  {
    name: "Meera Patel",
    role: "Homeowner, Bangalore",
    quote: "Found the most beautiful teak dining set. The delivery was careful and the table is exactly as described.",
    avatar: "MP",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sand font-semibold uppercase tracking-widest text-sm">Loved by Many</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-walnut mt-2">What People Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ name, role, quote, avatar }) => (
            <div key={name} className="bg-cream rounded-2xl p-8 border border-sand/20 hover:shadow-md transition-all">
              <div className="text-sand text-4xl mb-4 font-serif">"</div>
              <p className="text-charcoal/70 leading-relaxed mb-6 italic">{quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-walnut text-cream flex items-center justify-center text-sm font-bold">
                  {avatar}
                </div>
                <div>
                  <p className="font-bold text-walnut text-sm">{name}</p>
                  <p className="text-charcoal/50 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
