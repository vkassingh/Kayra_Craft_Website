"use client";

export default function SellBanner() {
  return (
    <section
      id="sell"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #5C3D2E 0%, #8B5E3C 50%, #D4A96A 100%)",
      }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-black/10 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block mb-4 px-4 py-1 bg-white/10 text-cream text-sm rounded-full border border-white/20 tracking-widest uppercase">
          Join 840+ Artisans
        </span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
          Your Craft Deserves <br />
          <span className="text-sand">a Global Stage</span>
        </h2>
        <p className="text-cream/80 text-lg mb-10 max-w-2xl mx-auto">
          List your furniture for free. Reach thousands of buyers who appreciate authentic, handcrafted quality.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email to get started"
            className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/30 text-cream placeholder-cream/50 focus:outline-none focus:border-sand backdrop-blur-sm"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-sand text-walnut font-semibold rounded-full hover:bg-cream transition-all whitespace-nowrap"
          >
            Get Started Free
          </button>
        </form>

        <p className="text-cream/50 text-xs mt-4">No credit card required. Free forever for your first 5 listings.</p>
      </div>
    </section>
  );
}
