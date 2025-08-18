"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiAward, FiUsers, FiHome, FiShield } from "react-icons/fi";
import Image from "next/image";

const aboutStats = [
  {
    icon: FiAward,
    value: "15+",
    label: "Lat Doświadczenia",
    description: "W branży systemów osłonowych"
  },
  {
    icon: FiUsers,
    value: "5000+",
    label: "Zadowolonych Klientów",
    description: "Lokalnie i na terenie całej Polski"
  },
  {
    icon: FiHome,
    value: "10000+",
    label: "Zrealizowanych Projektów",
    description: "Od małych do dużych"
  },
  {
    icon: FiShield,
    value: "100%",
    label: "Gwarancja Jakości",
    description: "Na wszystkie produkty"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { 
    y: 40, 
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

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="about"
      ref={ref}
      className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" className="text-white" />
        </svg>
      </div>

      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="currentColor" className="text-amber-400/30" />
              <circle cx="20" cy="20" r="0.5" fill="currentColor" className="text-amber-400/20" />
              <circle cx="60" cy="60" r="0.5" fill="currentColor" className="text-amber-400/20" />
              <circle cx="20" cy="60" r="0.5" fill="currentColor" className="text-amber-400/20" />
              <circle cx="60" cy="20" r="0.5" fill="currentColor" className="text-amber-400/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-pattern)" />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
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
              🏆 O FIRMIE ROLET MIX
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 text-white">
            Tworzymy
            <br />
            <span className="text-amber-400">Perfekcyjne Przestrzenie</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-medium tracking-wide text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Od ponad 15 lat specjalizujemy się w projektowaniu i montażu systemów osłonowych. 
            Nasza pasja to tworzenie rozwiązań, które łączą{" "}
            <span className="text-amber-400 font-semibold">funkcjonalność z elegancją</span>.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Nasza Historia
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Rozpoczęliśmy naszą podróż w 2008 roku z prostą misją: dostarczania 
                  najwyższej jakości systemów osłonowych, które nie tylko chronią 
                  przed słońcem, ale także dodają charakteru każdemu wnętrzu.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Dziś, po tysiącach zrealizowanych projektów, pozostajemy wierni 
                  naszym wartościom:  <span className="text-amber-400 font-semibold"> jakości, innowacji i zadowoleniu klienta. </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              {/* Placeholder for company image */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-primary/20 to-secondary/20 rounded-3xl"></div>
              
              {/* Overlay content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <motion.div 
                    className="mb-6"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image 
                      src="/logo_biale.svg" 
                      alt="Rolet Mix Logo" 
                      width={384}
                      height={384}
                      className="w-64 h-64 md:w-48 md:h-48 lg:w-96 lg:h-96 filter drop-shadow-lg"
                    />
                  </motion.div>

                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-amber-400/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {aboutStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:bg-white/10">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-amber-400/20 to-amber-500/20 rounded-2xl group-hover:from-amber-400/30 group-hover:to-amber-500/30 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-amber-400" />
                </div>
                
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {stat.value}
                </div>
                
                <div className="text-sm lg:text-base font-semibold text-gray-300 mb-1 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
                
                <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-300 text-lg mb-8">
              Dołącz do grona zadowolonych klientów i odkryj, jak możemy przekształcić Twoje wnętrze
            </p>
            <motion.a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold rounded-full hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-amber-400/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Poznaj Naszą Ofertę</span>
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

export default AboutSection; 