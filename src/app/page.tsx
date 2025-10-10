import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ProductsHubSection from "@/components/sections/ProductsHubSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Rolety Żabno, Dąbrowa Tarnowska | Żaluzje na Wymiar - Rolet-Mix",
  description: "Profesjonalne rolety i żaluzje na wymiar w Żabnie i Dąbrowie Tarnowskiej. ✓ Produkcja rolet zewnętrznych ✓ Montaż żaluzji ✓ 15 lat doświadczenia ✓ Bezpłatna wycena w 24h. Zaufaj lokalnym ekspertom!",
  openGraph: {
    title: "Rolety Żabno, Dąbrowa Tarnowska | Żaluzje na Wymiar - Rolet-Mix",
    description: "Najlepsze rolety i żaluzje w Żabnie i Dąbrowie Tarnowskiej. Produkcja na wymiar, profesjonalny montaż, gwarancja jakości.",
    url: "https://www.roletmix.pl",
    type: "website",
    locale: "pl_PL",
  },
  alternates: {
    canonical: "https://www.roletmix.pl",
  },
};

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
