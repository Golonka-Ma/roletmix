import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ProductsHubSection from "@/components/sections/ProductsHubSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TrustSection />
        <ServicesSection />
        <PortfolioSection />
        <ProductsHubSection />
        <ContactSection />
      </main>
    </>
  );
}
