export default function Hero() {
  return (
    <section
      id="shop"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #3B2314 0%, #5C3D2E 40%, #8B5E3C 70%, #D4A96A 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-sand/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-walnut/20 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <span className="inline-block mb-4 px-4 py-1 bg-sand/20 text-sand text-sm rounded-full border border-sand/40 tracking-widest uppercase">
          Handcrafted with Love
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream leading-tight mb-6 text-shadow">
          Where Every Piece <br />
          <span className="text-sand">Tells a Story</span>
        </h1>
        <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10">
          Discover one-of-a-kind handcrafted furniture from artisans around the world — or turn your own creations into income.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#listings"
            className="px-8 py-4 bg-sand text-walnut font-semibold rounded-full hover:bg-cream transition-all shadow-lg hover:shadow-xl text-lg"
          >
            Shop Furniture
          </a>
          <a
            href="#sell"
            className="px-8 py-4 border-2 border-cream text-cream font-semibold rounded-full hover:bg-cream hover:text-walnut transition-all text-lg"
          >
            Sell Your Piece
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[["2,400+", "Listings"], ["840+", "Artisans"], ["12K+", "Happy Buyers"]].map(([num, label]) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-bold text-sand">{num}</p>
              <p className="text-cream/60 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path fill="#FAF7F2" d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
