"use client";

import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface FullscreenMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const menuLinks = [
  { href: "#about", label: "O Nas" },
  { href: "#services", label: "Usługi" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#products", label: "Produkty" },
  { href: "#contact", label: "Kontakt" },
];

const FullscreenMenu = ({ isOpen, setIsOpen }: FullscreenMenuProps) => {
  const handleLinkClick = (href: string) => {
    // Zamknij menu
    setIsOpen(false);
    
    // Płynne przewijanie do sekcji
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    exit: {
      y: 20,
      opacity: 0,
    },
  };

  const ctaVariants: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: 0.2,
      },
    },
    exit: {
      y: 20,
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md flex flex-col items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          {/* Logo */}
          <motion.div 
            className="mb-12"
            variants={linkVariants}
          >
            <Link href="/" className="flex items-center">
              <img 
                src="/images/logo_navbar.svg" 
                alt="Rolet-Mix" 
                className="h-12 w-auto"
              />
            </Link>
          </motion.div>

          <nav className="flex flex-col items-center space-y-8 px-6 py-12">
            {menuLinks.map((link, index) => (
              <motion.div key={link.href} variants={linkVariants} custom={index}>
                <button
                  onClick={() => handleLinkClick(link.href)}
                  className="text-3xl font-semibold text-foreground hover:text-primary transition-colors tracking-wide"
                >
                  {link.label}
                </button>
              </motion.div>
            ))}
            <motion.div variants={ctaVariants} className="mt-8 pt-8">
              <button
                onClick={() => handleLinkClick("#contact")}
                className="relative bg-amber-400 text-black px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-400/25 overflow-hidden group tracking-wide"
              >
                <span className="relative z-10">Bezpłatna wycena</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </button>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullscreenMenu; 