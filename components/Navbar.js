"use client";
import { useState } from "react";
import Link from "next/link";

const links = ["Shop", "Sell", "How It Works", "About"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-cream/90 backdrop-blur-md border-b border-sand/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold text-walnut tracking-wide">
          Kayra<span className="text-sand">Craft</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-charcoal">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-sand transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex gap-3">
          <Link href="/contact" className="px-4 py-2 text-sm border border-walnut text-walnut rounded-full hover:bg-walnut hover:text-cream transition-all">
            Contact Us
          </Link>
          <a href="/#sell" className="px-4 py-2 text-sm bg-walnut text-cream rounded-full hover:bg-sand transition-all">
            Start Selling
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-walnut" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-sand/30 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-charcoal hover:text-sand font-medium" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <Link href="/contact" className="text-center px-4 py-2 border border-walnut text-walnut rounded-full hover:bg-walnut hover:text-cream transition-all" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
          <a href="/#sell" className="text-center px-4 py-2 bg-walnut text-cream rounded-full hover:bg-sand transition-all" onClick={() => setOpen(false)}>
            Start Selling
          </a>
        </div>
      )}
    </nav>
  );
}
