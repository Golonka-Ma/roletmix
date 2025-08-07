"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MenuTrigger from "@/components/ui/MenuTrigger";
import FullscreenMenu from "@/components/layout/FullscreenMenu";

const navigationLinks = [
  { href: "/", label: "Strona główna" },
  { href: "#about", label: "O Nas" },
  { href: "#services", label: "Usługi" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#products", label: "Produkty" },
  { href: "#contact", label: "Kontakt" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Pokazuj navbar zawsze gdy jesteśmy na górze strony
      if (currentScrollY <= 10) {
        setIsNavbarVisible(true);
      } 
      // Ukryj navbar gdy scrollujemy w dół
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
      }
      // Pokaż navbar gdy scrollujemy w górę
      else if (currentScrollY < lastScrollY) {
        setIsNavbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Desktop & Tablet Pill-shaped Navbar */}
      <motion.nav 
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block w-full max-w-7xl px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isNavbarVisible ? 0 : -100, 
          opacity: isNavbarVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div 
          className="relative bg-card/95 backdrop-blur-xl border border-border/50 rounded-full px-4 lg:px-6 xl:px-8 py-3 lg:py-4 shadow-2xl overflow-hidden w-fit mx-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-full" />
          
                      {/* Content */}
            <div className="relative flex items-center space-x-3 lg:space-x-4 xl:space-x-6">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src="/images/logo_navbar.svg" 
                alt="Rolet-Mix" 
                className="h-7 lg:h-8 xl:h-9 w-auto"
              />
            </Link>
            
            {/* Separator */}
            <div className="w-px h-5 lg:h-6 bg-border/50" />
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-2 lg:space-x-3 xl:space-x-4">
              {navigationLinks.slice(1).map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-xs lg:text-sm xl:text-base font-semibold text-foreground/90 hover:text-primary transition-all duration-300 relative group px-1.5 lg:px-2 xl:px-3 py-1 rounded-md hover:bg-primary/10 whitespace-nowrap tracking-wide"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-[calc(100%-1rem)]" />
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Separator */}
            <div className="w-px h-5 lg:h-6 bg-border/50" />
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              <Link
                href="/wycena"
                className="relative bg-amber-400 text-black px-3 lg:px-4 xl:px-5 py-2 lg:py-2.5 xl:py-3 rounded-full text-xs lg:text-sm xl:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-400/25 overflow-hidden group tracking-wide whitespace-nowrap"
              >
                <span className="relative z-10">Bezpłatna wycena</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Logo */}
        {!isOpen && (
          <motion.div
            className="fixed top-4 left-4 z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="flex items-center">
              <img 
                src="/images/logo_navbar.svg" 
                alt="Rolet-Mix" 
                className="h-8 w-auto"
              />
            </Link>
          </motion.div>
        )}
        
        <MenuTrigger isOpen={isOpen} setIsOpen={setIsOpen} />
        <FullscreenMenu isOpen={isOpen} />
      </div>
    </>
  );
};

export default Navbar; 