"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const trustPillars = [
  {
    iconSrc: "/icons/medal.png",
    iconAlt: "Medal - symbol doświadczenia",
    title: "Wieloletnie Doświadczenie",
    description: "Ponad dekada doskonalenia sztuki systemów osłonowych dla tysięcy zadowolonych klientów."
  },
  {
    iconSrc: "/icons/shield.png",
    iconAlt: "Tarcza - symbol gwarancji",
    title: "Gwarancja Jakości",
    description: "Używamy wyłącznie najwyższej jakości materiałów z rozszerzoną gwarancją na wszystkie produkty."
  },
  {
    iconSrc: "/icons/tool.png",
    iconAlt: "Narzędzie - symbol kompleksowej obsługi",
    title: "Kompleksowa Obsługa",
    description: "Od projektu przez produkcję aż po montaż - wszystko w jednym miejscu, bez dodatkowych komplikacji."
  },
  {
    iconSrc: "/icons/target.png",
    iconAlt: "Cel - symbol precyzji i troski o detale",
    title: "Troska o Detale",
    description: "Indywidualne podejście do każdego projektu, precyzja wykonania i perfekcyjne dopasowanie do Twoich potrzeb."
  }
];

// Enhanced animation variants for premium feel
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    y: 60, 
    opacity: 0,
    scale: 0.8,
    rotateX: -15
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
    },
  },
};



const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="trust"
      ref={ref}
      className="relative w-full py-24 md:py-32 overflow-hidden"
    >
      {/* Premium Background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/10"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
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
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-primary/20" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="px-4 py-2 text-sm font-semibold tracking-wide text-primary bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
              ✨ NASZE WARTOŚCI
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-gray-900">
            Fundamenty Twojego
            <br />
            <span className="text-primary">Zaufania</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-medium tracking-wide text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Odkryj, dlaczego tysiące klientów wybiera Rolet Mix.{" "}
            <span className="text-primary font-semibold">Nasze wartości to gwarancja Twojego spokoju.</span>
          </p>
        </div>

        {/* Premium Trust Pillars Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {trustPillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group perspective-1000"
              style={{ perspective: 1000 }}
            >
              <div className="relative h-full">
                {/* Glassmorphism Card */}
                <div className="relative text-center p-8 lg:p-10 h-full bg-white/40 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl hover:shadow-lg transition-all duration-300 group-hover:bg-white/50 group-hover:border-amber-400/30 overflow-hidden">
                  
                  {/* Subtle amber glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Subtle border glow */}
                  <div className="absolute inset-0 rounded-3xl bg-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  
                  <div className="relative z-10">
                    {/* Premium Icon Container */}
                    <div className="inline-flex items-center justify-center w-28 h-28 lg:w-32 lg:h-32 mb-8 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm rounded-full border border-white/40 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                      {/* Subtle amber icon glow */}
                      <div className="absolute inset-0 rounded-full bg-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                      
                      <div className="relative w-14 h-14 lg:w-16 lg:h-16">
                        <Image
                          src={pillar.iconSrc}
                          alt={pillar.iconAlt}
                          fill
                          className="object-contain filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-500"
                          sizes="(max-width: 1024px) 56px, 64px"
                          quality={100}
                          priority={true}
                        />
                      </div>
                    </div>
                    
                    {/* Premium Content */}
                    <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-4 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed font-medium tracking-wide group-hover:text-gray-700 transition-colors duration-300">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Subtle animated dots */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 bg-amber-400/60 rounded-full group-hover:bg-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>

      {/* Premium background overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default TrustSection;