"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FiArrowRight, FiEye } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  onClick: () => void;
  className?: string;
}

const ProductCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  onClick,
  className
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-3xl cursor-pointer perspective-1000",
        className
      )}
      style={{ perspective: 1000 }}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glassmorphism Card Container */}
      <div className="relative h-full bg-white/40 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:bg-white/50 group-hover:border-amber-400/30 overflow-hidden">
        
        {/* Subtle amber glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Subtle border glow */}
        <div className="absolute inset-0 rounded-3xl bg-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
        
        {/* Enhanced Image container */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-3xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Premium floating action button */}
          <motion.div
            className="absolute top-6 right-6 z-20"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: isHovered ? 1 : 0.8, 
              rotate: isHovered ? 0 : -90,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-lg backdrop-blur-sm border border-white/20 group-hover:shadow-amber-400/50 transition-all duration-300">
              <FiEye className="w-5 h-5 text-white" />
            </div>
          </motion.div>

          {/* Category tag */}
          <motion.div
            className="absolute bottom-4 left-4 z-20"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-white bg-black/40 backdrop-blur-sm rounded-full border border-white/20">
              PREMIUM
            </span>
          </motion.div>
        </div>
        
        {/* Enhanced Content */}
        <div className="relative z-20 p-8">
          {/* Title with enhanced typography */}
          <motion.h3 
            className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-all duration-400"
            layout
          >
            {title}
          </motion.h3>
          
          {/* Enhanced description */}
          <motion.p 
            className="text-gray-600 text-sm lg:text-base leading-relaxed line-clamp-3 mb-6"
            layout
          >
            {description}
          </motion.p>
          
          {/* Premium action area */}
          <motion.div
            className="flex items-center justify-between pt-4 border-t border-white/20"
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest">
                Zobacz szczegóły
              </span>
              <span className="text-xs text-gray-500 mt-1">
                Pełna specyfikacja
              </span>
            </div>
            
            {/* Enhanced arrow with premium styling */}
            <motion.div
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-amber-400/20 to-amber-500/20 rounded-full border border-amber-400/30 group-hover:from-amber-400 group-hover:to-amber-500 group-hover:border-transparent transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 45 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiArrowRight className="w-4 h-4 text-amber-600 group-hover:text-white transition-colors duration-300" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Enhanced shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1500" />
        </div>

        {/* Additional subtle effects */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-amber-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 translate-x-12 translate-y-12"></div>
      </div>
    </motion.div>
  );
};

export default ProductCard;