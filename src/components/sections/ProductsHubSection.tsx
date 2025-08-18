"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import ProductExpandedModal from "@/components/ui/ProductExpandedModal";

// Rozszerzone dane produktów z detalami dla modalów
const productCategories = [
  {
    id: "rolety-tekstylne",
    title: "Rolety Tekstylne",
    shortDescription: "Kompletna gama rolet tekstylnych: dzień/noc, materiałowe, zaciemniające i wolnowiszące.",
    imageSrc: "/images/textile-blinds.jpg",
    imageAlt: "Eleganckie rolety tekstylne w nowoczesnym wnętrzu",
    
    // Rozszerzone dane dla modala
    detailedDescription: "Nasze rolety tekstylne to idealne połączenie funkcjonalności i elegancji. Oferujemy szeroki wybór materiałów, kolorów i mechanizmów sterowania, które perfekcyjnie dopasują się do charakteru Twojego wnętrza.",
    features: [
      "Rolety dzień/noc - optymalna kontrola światła przez cały dzień",
      "Rolety materiałowe - klasyczne rozwiązania w różnych fakturach", 
      "Rolety zaciemniające - idealne do sypialni i sal multimedialnych",
      "Rolety wolnowiszące - nowoczesne rozwiązania bez wiercenia",
      "Dostępność w kasecie lub bez kasety",
      "Szeroki wybór kolorów i wzorów",
      "Mechanizmy ręczne i elektryczne",
      "Tkaniny filtry UV chroniące wnętrze"
    ],
    gallery: [
      "/images/textile-blinds.jpg",
      "/images/gallery/textile-blinds-1.jpg",
      "/images/gallery/textile-blinds-2.jpg",
      "/images/gallery/textile-blinds-3.jpg"
    ],
    applications: ["Salony", "Sypialnie", "Kuchnie", "Biura", "Sale konferencyjne"],
    warranty: "5 lat gwarancji na wszystkie mechanizmy"
  },
  {
    id: "rolety-zewnetrzne",
    title: "Rolety Zewnętrzne",
    shortDescription: "Antywłamaniowe rolety zewnętrzne i bramy garażowe z pełną automatyzacją.",
    imageSrc: "/images/external-shutters.jpg", 
    imageAlt: "Nowoczesne rolety zewnętrzne na budynku",
    
    detailedDescription: "Rolety zewnętrzne to najwyższy poziom ochrony, komfortu i oszczędności energetycznej. Nasze systemy łączą funkcję antywłamaniową z doskonałą izolacyjnością termiczną i akustyczną.",
    features: [
      "Rolety podtynkowe - niewidoczne z zewnątrz",
      "Rolety natynkowe - łatwy montaż w istniejących budynkach", 
      "Bramy garażowe rolowane - segmentowe i pancerne",
      "Sterownie ręczne, elektryczne i radiowe",
      "Pancerz aluminiowy o różnej grubości",
      "Systemy inteligentnego domu",
      "Prowadnice antywłamaniowe",
      "Izolacyjność termiczna do 1.8 W/m²K"
    ],
    gallery: [
      "/images/external-shutters.jpg",
      "/images/gallery/external-shutters-1.jpg",
      "/images/gallery/external-shutters-2.jpg", 
      "/images/gallery/external-shutters-3.jpg"
    ],
    applications: ["Domy jednorodzinne", "Apartamentowce", "Biura", "Sklepy", "Garaże"],
    warranty: "5 lat gwarancji na konstrukcję, 2 lata na automatykę"
  },
  {
    id: "rolety-dachowe",
    title: "Rolety Dachowe", 
    shortDescription: "Specjalistyczne rozwiązania do okien dachowych zapewniające kontrolę światła i temperatury.",
    imageSrc: "/images/roof-blinds.jpg",
    imageAlt: "Rolety dachowe w nowoczesnym poddaszu",
    
    detailedDescription: "Rolety dachowe to wyspecjalizowane systemy osłonowe projektowane specjalnie do okien dachowych. Doskonale radzą sobie z wyzwaniami związanymi z nietypowymi kątami nasłonecznienia i zapewniają komfort przez cały rok.",
    features: [
      "Idealnie dopasowane do okien dachowych wszystkich marek",
      "Zaawansowana kontrola temperatury w poddaszu",
      "Materiały odporne na promieniowanie UV",
      "Systemy napinające zapobiegające opadaniu",
      "Łatwy montaż bez uszkadzania ramy okna",
      "Dostępność w wersji manualnej i elektrycznej",
      "Specjalne prowadnice boczne",
      "Materiały nieprzemakalnie i paroprzepuszczalne"
    ],
    gallery: [
      "/images/roof-blinds.jpg",
      "/images/gallery/roof-blinds-1.jpg", 
      "/images/gallery/roof-blinds-2.jpg",
      "/images/gallery/roof-blinds-3.jpg"
    ],
    applications: ["Poddasza mieszkalne", "Biura na poddaszu", "Pracownie artystyczne", "Pokoje dziecięce"],
    warranty: "5 lat gwarancji - specjalnie dla warunków dachowych"
  },
  {
    id: "zaluzje-poziome",
    title: "Żaluzje Poziome", 
    shortDescription: "Drewniane i aluminiowe żaluzje poziome - ponadczasowa elegancja w każdym wnętrzu.",
    imageSrc: "/images/horizontal-blinds.jpg",
    imageAlt: "Drewniane żaluzje poziome w stylowym wnętrzu",
    
    detailedDescription: "Żaluzje poziome to klasyka, która nigdy nie wychodzi z mody. Oferujemy zarówno naturalne drewniane lamele, jak i praktyczne rozwiązania aluminiowe, które idealnie komponują się z każdym stylem wnętrza.",
    features: [
      "Żaluzje drewniane z naturalnego drewna lipowego",
      "Żaluzje aluminiowe w szerokiej gamie kolorów",
      "Lamele 25mm, 35mm i 50mm",
      "Impregnacja przeciwwilgociowa",
      "Mechanizmy sterowania sznurkowe i łańcuszkowe",
      "Możliwość montażu w kasecie",
      "Systemy automatyczne z pilotem",
      "Lakiery i bejce w kolorach RAL"
    ],
    gallery: [
      "/images/horizontal-blinds.jpg",
      "/images/gallery/horizontal-blinds-1.jpg",
      "/images/gallery/horizontal-blinds-2.jpg",
      "/images/gallery/horizontal-blinds-3.jpg"
    ],
    applications: ["Salony", "Gabinety", "Restauracje", "Hotele", "Biura reprezentacyjne"],
    warranty: "7 lat gwarancji na drewno, 5 lat na aluminium"
  },
  {
    id: "verticale",
    title: "Żaluzje Pionowe (Verticale)",
    shortDescription: "Klasyczne żaluzje pionowe idealne do dużych przeszkleń w biurach i domach.",
    imageSrc: "/images/vertical-blinds.jpg",
    imageAlt: "Żaluzje pionowe w przestronnym wnętrzu",
    
    detailedDescription: "Verticale to ponadczasowe rozwiązanie idealne do dużych powierzchni szklanych. Pionowe lamele zapewniają doskonałą kontrolę światła i prywatności, jednocześnie nadając wnętrzom elegancki, profesjonalny charakter.",
    features: [
      "Lamele o szerokości 89mm i 127mm",
      "Materiały: PVC, tkanina, aluminium",
      "Systemy jednokierunkowe i dwukierunkowe",
      "Mechanizm sznurkowy lub łańcuszkowy",
      "Możliwość automatyzacji elektrycznej",
      "Lamele perforowane dla lepszej wentylacji",
      "Łatwe czyszczenie i wymiana pojedynczych elementów",
      "Dostępność w wersjach biurowych i domowych"
    ],
    gallery: [
      "/images/vertical-blinds.jpg",
      "/images/gallery/vertical-blinds-1.jpg",
      "/images/gallery/vertical-blinds-2.jpg",
      "/images/gallery/vertical-blinds-3.jpg"
    ],
    applications: ["Biura", "Sale konferencyjne", "Salony", "Tarasy przeszklone", "Centra handlowe"],
    warranty: "5 lat gwarancji na mechanizmy, 2 lata na tkaniny"
  },
  {
    id: "moskitiery",
    title: "Moskitiery",
    shortDescription: "Pełna gama moskitier chroniąca przed owadami bez kompromisów w designie.",
    imageSrc: "/images/mosquito-nets.jpg",
    imageAlt: "Moskitiery w różnych konfiguracjach",
    
    detailedDescription: "Nasze moskitiery to skuteczna ochrona przed owadami połączona z dbałością o estetykę. Oferujemy kompletną gamę rozwiązań dopasowanych do każdego typu okna i drzwi.",
    features: [
      "Moskitiery okienne ramkowe i rolowane",
      "Moskitiery drzwiowe przesuwne i wahadłowe", 
      "Moskitiery przesuwne do dużych przeszkleń",
      "Moskitiery dachowe do okien skośnych",
      "Moskitiery nietypowe (trapezowe, łukowe)",
      "Siatki z włókna szklanego i poliestrowe",
      "Ramy aluminiowe w kolorach RAL",
      "Niewidzialne systemy magnetyczne"
    ],
    gallery: [
      "/images/mosquito-nets.jpg",
      "/images/gallery/mosquito-nets-1.jpg",
      "/images/gallery/mosquito-nets-2.jpg",
      "/images/gallery/mosquito-nets-3.jpg"
    ],
    applications: ["Domy jednorodzinne", "Apartamenty", "Restauracje", "Hotele", "Obiekty rekreacyjne"],
    warranty: "3 lata gwarancji na konstrukcję, 1 rok na siatkę"
  }
];

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { 
    y: 60, 
    opacity: 0,
    scale: 0.9,
  },
  visible: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6
    },
  },
};



const ProductsHubSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [selectedProduct, setSelectedProduct] = useState<typeof productCategories[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: typeof productCategories[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300); // Delay to allow exit animation
  };

  return (
    <section 
      id="products"
      ref={ref}
      className="relative w-full py-24 md:py-32 overflow-hidden"
    >
      {/* Premium Background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/10"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="product-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#product-grid)" className="text-amber-400/20" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-block mb-8"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="px-6 py-3 text-sm font-semibold tracking-wide text-amber-600 bg-amber-400/10 backdrop-blur-sm rounded-full border border-amber-400/20 shadow-lg">
              ⚙️ NASZE ROZWIĄZANIA
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 text-gray-900">
            Odkryj Perfekcję 
            <br />
            <span className="text-amber-500">w Każdym Detalu</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-medium tracking-wide text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Każda kategoria to brama do świata możliwości. Wybierz rozwiązanie dopasowane 
            do Twoich potrzeb i odkryj, jak możemy{" "}
            <span className="text-amber-600 font-semibold">przekształcić Twoje wnętrze</span>.
          </p>
        </div>

        {/* Premium Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {productCategories.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="h-full"
            >
              <ProductCard
                title={product.title}
                description={product.shortDescription}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                onClick={() => openModal(product)}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg mb-6">
              Potrzebujesz indywidualnej porady lub masz pytania dotyczące naszych produktów?
            </p>
            <a href="#contact">
              <motion.div
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-400/20 to-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full hover:from-amber-400/30 hover:to-amber-500/30 transition-all duration-300 cursor-pointer group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-amber-700 font-semibold group-hover:text-amber-800 transition-colors">
                  Skontaktuj się z nami
                </span>
                <motion.div
                  className="ml-3 text-amber-600 group-hover:text-amber-700 transition-colors"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.div>
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Product Modal */}
      <ProductExpandedModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default ProductsHubSection;