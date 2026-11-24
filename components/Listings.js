"use client";

const listings = [
  {
    id: 1,
    name: "Walnut Dining Table",
    artisan: "Ravi Woodworks",
    price: "₹28,500",
    tag: "Bestseller",
    img: "/images/dining-table.jpg",
    fallback: "🪑",
  },
  {
    id: 2,
    name: "Rattan Lounge Chair",
    artisan: "Priya Crafts",
    price: "₹12,000",
    tag: "New",
    img: "/images/lounge-chair.jpg",
    fallback: "🛋️",
  },
  {
    id: 3,
    name: "Sheesham Bookshelf",
    artisan: "Arjun Furniture Co.",
    price: "₹18,750",
    tag: "Popular",
    img: "/images/bookshelf.jpg",
    fallback: "📚",
  },
  {
    id: 4,
    name: "Mango Wood Bed Frame",
    artisan: "Craftsmen Guild",
    price: "₹42,000",
    tag: "Premium",
    img: "/images/bed-frame.jpg",
    fallback: "🛏️",
  },
  {
    id: 5,
    name: "Teak Coffee Table",
    artisan: "Sunita Artisans",
    price: "₹9,500",
    tag: "Sale",
    img: "/images/coffee-table.jpg",
    fallback: "☕",
  },
  {
    id: 6,
    name: "Cane Side Cabinet",
    artisan: "Heritage Crafts",
    price: "₹15,200",
    tag: "Handpicked",
    img: "/images/side-cabinet.jpg",
    fallback: "🗄️",
  },
];

const tagColors = {
  Bestseller: "bg-sand text-walnut",
  New: "bg-green-100 text-green-700",
  Popular: "bg-blue-100 text-blue-700",
  Premium: "bg-purple-100 text-purple-700",
  Sale: "bg-red-100 text-red-600",
  Handpicked: "bg-amber-100 text-amber-700",
};

export default function Listings() {
  return (
    <section id="listings" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sand font-semibold uppercase tracking-widest text-sm">Curated Collection</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-walnut mt-2">
            Shop Handcrafted Pieces
          </h2>
          <p className="text-charcoal/60 mt-4 max-w-xl mx-auto">
            Each piece is unique, made by skilled artisans who pour their heart into every joint and finish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map(({ id, name, artisan, price, tag, img, fallback }) => (
            <div
              key={id}
              className="group bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-sand/20"
            >
              {/* Image / Fallback */}
              <div className="relative h-56 bg-gradient-to-br from-sand/20 to-walnut/10 flex items-center justify-center overflow-hidden">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="absolute inset-0 items-center justify-center text-7xl hidden"
                  style={{ display: "none" }}
                >
                  {fallback}
                </div>
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${tagColors[tag]}`}>
                  {tag}
                </span>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-all">
                  ♡
                </button>
              </div>

              <div className="p-5">
                <p className="text-xs text-sand font-medium mb-1">{artisan}</p>
                <h3 className="text-lg font-bold text-walnut mb-3">{name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-charcoal">{price}</span>
                  <button className="px-4 py-2 bg-walnut text-cream text-sm rounded-full hover:bg-sand hover:text-walnut transition-all font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 border-2 border-walnut text-walnut font-semibold rounded-full hover:bg-walnut hover:text-cream transition-all"
          >
            View All Listings →
          </a>
        </div>
      </div>
    </section>
  );
}
