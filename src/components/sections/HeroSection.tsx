"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import React, { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Funkcja do obsługi zakończenia filmu
  const handleEnded = () => {
    setTimeout(() => {
      videoRef.current?.play();
    }, 10000); // 10 sekund pauzy
  };

  return (
    <section id="hero" className="relative flex items-center justify-center w-full min-h-screen text-white bg-black">
      {/* Tło wideo */}
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 w-full h-full object-cover"
        src="/videos/hero-background.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
      />
      {/* Overlay dla lepszej czytelności tekstu */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-0"></div>
      {/* Treść */}
      <motion.div
        className="relative z-10 flex flex-col items-center w-full max-w-4xl px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          variants={itemVariants}
        >
          Innowacyjne Systemy Osłonowe.
          <br />
          <span className="text-amber-400">Precyzja i Styl dla Twojej Przestrzeni.</span>
        </motion.h1>
        <motion.p
          className="max-w-2xl mt-6 text-lg tracking-wide text-gray-200 md:text-xl"
          variants={itemVariants}
        >
          Zaufaj wieloletniemu doświadczeniu. Projektujemy, produkujemy i montujemy rozwiązania,
          które definiują komfort, bezpieczeństwo i estetykę Twojego domu i biura.
        </motion.p>
        <motion.div
          className="flex flex-col items-center justify-center w-full mt-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6"
          variants={itemVariants}
        >
          <a
            href="#contact"
                          className="flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-black transition-transform duration-300 transform bg-amber-400 rounded-full shadow-lg sm:w-auto hover:bg-amber-300 hover:scale-105"
          >
            Uzyskaj Bezpłatną Wycenę
          </a>
          <a
            href="#portfolio"
            className="flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-300 transform bg-transparent border-2 border-white rounded-full sm:w-auto hover:bg-white hover:text-black group"
          >
            Zobacz Nasze Realizacje
            <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
      {/* Wskaźnik scrollowania */}
      <motion.div
        className="absolute z-10 bottom-10"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{
          delay: 1.5,
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full">
          <div className="w-1 h-2 mx-auto mt-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 