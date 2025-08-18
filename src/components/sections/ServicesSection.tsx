"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiTruck, FiTool, FiShield, FiClock, FiHome, FiUsers } from "react-icons/fi";

const services = [
  {
    icon: FiHome,
    title: "Bezpłatny Pomiar",
    description: "Nasz specjalista przyjedzie do Ciebie i dokona precyzyjnego pomiaru okien. Bezpłatnie i bez zobowiązań.",
    features: ["Dokładny pomiar wszystkich okien", "Konsultacja z ekspertem", "Bezpłatna wycena", "Bez zobowiązań"]
  },
  {
    icon: FiTool,
    title: "Profesjonalny Montaż",
    description: "Montaż wykonywany przez doświadczonych fachowców z wieloletnim doświadczeniem w branży.",
    features: ["Certyfikowani montażyści", "Szybki i precyzyjny montaż", "Czyszczenie po montażu", "Instrukcja użytkowania"]
  },
  {
    icon: FiShield,
    title: "Gwarancja i Serwis",
    description: "Kompleksowa gwarancja na wszystkie produkty oraz profesjonalny serwis przez cały okres użytkowania.",
    features: ["5-10 lat gwarancji", "Serwis gwarancyjny", "Wymiana części", "Wsparcie techniczne"]
  },
  {
    icon: FiTruck,
    title: "Dostawa i Logistyka",
    description: "Bezpieczna dostawa produktów bezpośrednio do Twojego domu w uzgodnionym terminie.",
    features: ["Bezpłatna dostawa", "Terminowość", "Bezpieczny transport", "Rozładunek"]
  },
  {
    icon: FiUsers,
    title: "Obsługa Klienta",
    description: "Dedykowany opiekun klienta, który towarzyszy Ci na każdym etapie realizacji projektu.",
    features: ["Opiekun projektu", "Regularne aktualizacje", "Szybka komunikacja", "Rozwiązanie problemów"]
  },
  {
    icon: FiClock,
    title: "Szybka Realizacja",
    description: "Krótkie terminy realizacji - od zamówienia do montażu w ciągu kilku dni.",
    features: ["Szybkie terminy", "Elastyczne harmonogramy", "Priorytetowe zamówienia", "Status online"]
  }
];

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
    y: 50, 
    opacity: 0,
    scale: 0.9,
  },
  visible: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="services"
      ref={ref}
      className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" className="text-white" />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-secondary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="px-6 py-3 text-sm font-semibold tracking-wide text-amber-400 bg-amber-400/10 backdrop-blur-sm rounded-full border border-amber-400/30">
            🚀 NASZE USŁUGI
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 text-white">
            Kompleksowa
            <br />
            <span className="text-amber-400">Obsługa Klienta</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-medium tracking-wide text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Oferujemy pełen zakres usług - od bezpłatnego pomiaru po profesjonalny montaż. 
            Nasze{" "}
            <span className="text-amber-400 font-semibold">doświadczenie to gwarancja jakości</span>.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="relative h-full p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-secondary/30 transition-all duration-300 hover:bg-white/10 overflow-hidden">
                
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-2xl group-hover:from-secondary/30 group-hover:to-secondary/40 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-secondary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-amber-400 mb-4 group-hover:text-amber-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-secondary/60 rounded-full mr-3 group-hover:bg-secondary transition-colors duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-secondary/20 rounded-tr-lg group-hover:border-secondary/40 transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
              Jak Działamy?
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Prosty proces od kontaktu do montażu w 4 krokach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Kontakt", desc: "Skontaktuj się z nami" },
              { step: "02", title: "Pomiar", desc: "Bezpłatny pomiar i wycena" },
              { step: "03", title: "Zamówienie", desc: "Wybór produktów i terminów" },
              { step: "04", title: "Montaż", desc: "Profesjonalny montaż" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-full flex items-center justify-center group-hover:from-secondary/30 group-hover:to-secondary/40 transition-all duration-300">
                    <span className="text-2xl font-bold text-secondary">{item.step}</span>
                  </div>
                  

                </div>
                
                <h4 className="text-lg font-semibold text-amber-400 mb-2 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-300 text-lg mb-8">
              Gotowy na transformację swojego wnętrza? Skontaktuj się z nami już dziś!
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-400 text-black font-semibold rounded-full hover:from-secondary/90 hover:to-secondary transition-all duration-300 shadow-lg hover:shadow-secondary/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Zamów Bezpłatny Pomiar</span>
              <motion.div
                className="ml-3"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.div>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default ServicesSection; 