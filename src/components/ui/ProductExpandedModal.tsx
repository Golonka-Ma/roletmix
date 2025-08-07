"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, CheckCircle, Users, Shield, Phone, Download } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProductData {
  id: string;
  title: string;
  shortDescription: string;
  imageSrc: string;
  imageAlt: string;
  detailedDescription: string;
  features: string[];
  gallery: string[];
  applications: string[];
  warranty: string;
}

interface ProductExpandedModalProps {
  product: ProductData | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductExpandedModal = ({ product, isOpen, onClose }: ProductExpandedModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  // Reset image index when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [product?.id]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const nextImage = () => {
    if (product) {
      setCurrentImageIndex((prev) => (prev + 1) % product.gallery.length);
    }
  };

  const prevImage = () => {
    if (product) {
      setCurrentImageIndex((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);
    }
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Premium Backdrop with enhanced blur */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Enhanced Modal Content with glassmorphism */}
          <motion.div
            ref={modalRef}
            className="relative z-10 w-full max-w-7xl max-h-[95vh] bg-white/20 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Premium background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-amber-500/10"></div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/10 via-transparent to-amber-500/10 opacity-50 blur-xl"></div>

            {/* Enhanced Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 z-30 flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full hover:bg-red-500/80 hover:border-red-400/50 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-5 h-5 text-gray-800 group-hover:text-white transition-colors" />
            </motion.button>

            {/* Content Container */}
            <div className="flex flex-col lg:flex-row h-full max-h-[95vh]">
              {/* Left Side - Enhanced Gallery */}
              <div className="lg:w-1/2 relative bg-white/10 backdrop-blur-sm">
                {/* Main Image */}
                <div className="relative aspect-[4/3] lg:h-full lg:aspect-auto">
                  <Image
                    src={product.gallery[currentImageIndex]}
                    alt={`${product.title} - zdjęcie ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Premium Navigation Arrows */}
                  {product.gallery.length > 1 && (
                    <>
                      <motion.button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full hover:bg-amber-400/80 hover:border-amber-400/50 transition-all duration-300 group"
                        whileHover={{ scale: 1.1, x: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowLeft className="w-5 h-5 text-gray-800 group-hover:text-white transition-colors" />
                      </motion.button>
                      <motion.button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full hover:bg-amber-400/80 hover:border-amber-400/50 transition-all duration-300 group"
                        whileHover={{ scale: 1.1, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowRight className="w-5 h-5 text-gray-800 group-hover:text-white transition-colors" />
                      </motion.button>
                    </>
                  )}
                  
                  {/* Enhanced Image Counter */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full">
                    <span className="text-sm font-medium text-gray-800">
                      {currentImageIndex + 1} / {product.gallery.length}
                    </span>
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                {product.gallery.length > 1 && (
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2 overflow-x-auto">
                    {product.gallery.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={cn(
                          "flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all",
                          index === currentImageIndex 
                            ? "border-amber-400 scale-105 shadow-lg" 
                            : "border-white/30 hover:border-amber-400/50"
                        )}
                      >
                        <Image
                          src={image}
                          alt={`${product.title} thumbnail ${index + 1}`}
                          width={64}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Side - Enhanced Content */}
              <div className="lg:w-1/2 overflow-y-auto bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm">
                <div className="p-8 lg:p-10">
                  {/* Enhanced Header */}
                  <div className="mb-8">
                    <motion.h2 
                      className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {product.title}
                    </motion.h2>
                    <motion.p 
                      className="text-gray-700 text-lg lg:text-xl leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      {product.detailedDescription}
                    </motion.p>
                  </div>

                  {/* Enhanced Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <CheckCircle className="w-6 h-6 text-amber-500 mr-3" />
                      Cechy Produktu
                    </h3>
                    <div className="space-y-4">
                      {product.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-4 p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index, duration: 0.3 }}
                        >
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm lg:text-base leading-relaxed">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Applications */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <Users className="w-6 h-6 text-amber-500 mr-3" />
                      Zastosowania
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {product.applications.map((app, index) => (
                        <motion.span
                          key={index}
                          className="px-4 py-2 bg-gray-400/20 text-gray-700 text-sm font-medium rounded-full border border-gray-400/30 backdrop-blur-sm hover:bg-gray-400/30 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {app}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Warranty */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <Shield className="w-6 h-6 text-amber-500 mr-3" />
                      Gwarancja
                    </h3>
                    <div className="p-6 bg-gradient-to-r from-amber-400/20 to-amber-500/20 border border-amber-400/30 rounded-2xl backdrop-blur-sm">
                      <p className="text-gray-700 text-base font-medium">
                        {product.warranty}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced CTA Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <motion.button 
                      className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-amber-400/50 transition-all duration-300 group flex items-center justify-center"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      <span className="flex items-center">
                        Zapytaj o Ofertę
                        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>
                    <motion.button 
                      className="flex-1 px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 rounded-xl font-semibold hover:bg-white/30 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Pobierz Katalog
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductExpandedModal;