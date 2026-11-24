import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Listings from "@/components/Listings";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import SellBanner from "@/components/SellBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Listings />
      <HowItWorks />
      <Testimonials />
      <SellBanner />
      <Footer />
    </main>
  );
}
