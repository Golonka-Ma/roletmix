"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

const LegalNavbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo-biale.svg"
              alt="Rolet-Mix Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Back to Home Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-amber-400 bg-amber-400/10 backdrop-blur-sm rounded-lg border border-amber-400/30 hover:bg-amber-400/20 hover:text-amber-300 hover:border-amber-400/50 transition-all duration-300 group"
            >
              <FiArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Powrót do strony głównej
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default LegalNavbar;