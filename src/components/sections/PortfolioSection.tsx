"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiStar, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "Nowoczesne Rolety Tekstylne - Najwyższa Jakość",
    category: "Rolety Tekstylne",
    image: "/images/gallery/textile-blinds-1.jpg",
    size: "large", // 2x2
    hasRealImage: true,
    alt: "Nowoczesne rolety tekstylne na okna - realizacja Rolet Mix w Tarnowie",
    description: "Profesjonalny montaż rolet tekstylnych w nowoczesnym stylu"
  },
  {
    id: 2,
    title: "Eleganckie Żaluzje Pionowe do Biura",
    category: "Żaluzje Pionowe",
    image: "/images/gallery/vertical-blinds-1.jpg",
    size: "large", // 2x2
    hasRealImage: true,
    alt: "Żaluzje pionowe w biurze - montaż rolet i żaluzji Kraków",
    description: "Stylowe żaluzje pionowe idealne do pomieszczeń biurowych"
  },
  {
    id: 3,
    title: "Profesjonalny Serwis Rolet i Żaluzji",
    category: "Serwis Rolet",
    image: "/images/gallery/service-x.jpg",
    size: "tall", // 2x1
    hasRealImage: true,
    alt: "Serwis i naprawa rolet - fachowy montaż Małopolska",
    description: "Kompleksowy serwis rolet zewnętrznych i wewnętrznych"
  },
  {
    id: 4,
    title: "Rolety Materiałowe na Wymiar",
    category: "Rolety na Wymiar",
    image: "/images/gallery/plus-blinders.jpg",
    size: "large", // 2x2
    hasRealImage: true,
    alt: "Rolety materiałowe na wymiar - producent rolet Tarnów",
    description: "Rolety materiałowe szyte na indywidualne wymiary okien"
  },  
  {
    id: 5,
    title: "Transport i Montaż Rolet",
    category: "Dostawa Rolet",
    image: "/images/gallery/delivery-truck.jpg",
    size: "tall", // 2x1
    hasRealImage: true,
    alt: "Transport i dostawa rolet na terenie Małopolski",
    description: "Bezpłatna dostawa i profesjonalny montaż rolet"
  },
  {
    id: 6,
    title: "Rolety Zewnętrzne Antywłamaniowe Premium",
    category: "Rolety Zewnętrzne",
    image: "/images/gallery/external-shutters-1.jpg",
    size: "large", // 2x2
    hasRealImage: true,
    alt: "Rolety zewnętrzne antywłamaniowe - najlepsze rolety Tarnów",
    description: "Bezpieczne rolety zewnętrzne z funkcją antywłamaniową"
  },
  {
    id: 7,
    title: "Rolety Dachowe do Okien Połaciowych",
    category: "Rolety Dachowe",
    image: "/images/gallery/roof-blinds-1.jpg",
    size: "large", // 2x2
    hasRealImage: true,
    alt: "Rolety dachowe Velux - montaż rolet do okien dachowych",
    description: "Specjalistyczne rolety do okien dachowych marki Velux"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Paulina Majcher",
    location: "Tarnów",
    rating: 5,
    text: "Bardzo miła obsługa od samego początku. Rolety tekstylne prezentują się świetnie i idealnie pasują do naszego wystroju. Najlepsze rolety w Tarnowie! Jestem zadowolona i polecam Rolet Mix.",
    avatar: "/images/placeholder-avatar-1.jpg",
    platform: "Google",
    date: "2 tygodnie temu",
    keywords: ["rolety tekstylne", "rolety Tarnów", "Rolet Mix"]
  },
  {
    id: 2,
    name: "Łukasz Bartoszek",
    location: "Kraków, Krowodrza",
    rating: 5,
    text: "Profesjonalne wykonanie i montaż rolet na czas. Rolety dachowe Velux naprawdę pomagają przy mocnym słońcu na poddaszu. Polecam najlepszego producenta rolet w Krakowie!",
    avatar: "/images/placeholder-avatar-2.jpg",
    platform: "Facebook",
    date: "1 miesiąc temu",
    keywords: ["rolety dachowe", "rolety Velux", "montaż rolet", "producent rolet Kraków"]
  },
  {
    id: 3,
    name: "Karolina Cieślik",
    location: "Radłów",
    rating: 5,
    text: "Kompleksowa usługa rolet i żaluzji – od pomiaru po montaż. Rolety zewnętrzne i moskitiery są bardzo solidne. Na pewno wrócę po kolejne rolety do domu.",
    avatar: "/images/placeholder-avatar-3.jpg",
    platform: "Google",
    date: "3 tygodnie temu",
    keywords: ["rolety zewnętrzne", "rolety i żaluzje", "montaż rolet", "moskitiery"]
  },
  {
    id: 4,
    name: "Adrian Warchał",
    location: "Gorzyce",
    rating: 5,
    text: "Rolety zewnętrzne antywłamaniowe to był strzał w dziesiątkę – w domu jest chłodniej i czuję się bezpieczniej. Najwyższa jakość rolet w regionie. Polecam znajomym Rolet Mix!",
    avatar: "/images/placeholder-avatar-4.jpg",
    platform: "Facebook",
    date: "2 miesiące temu",
    keywords: ["rolety zewnętrzne antywłamaniowe", "rolety bezpieczeństwo", "jakość rolet", "Rolet Mix"]
  }
];  

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    y: 30, 
    opacity: 0,
    scale: 0.95,
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

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };



  return (
    <section 
      id="portfolio"
      ref={ref}
      className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
      aria-labelledby="portfolio-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="portfolio-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#portfolio-grid)" className="text-primary/20" />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
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
        <header className="text-center mb-20">
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="px-6 py-3 text-sm font-semibold tracking-wide text-primary bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
              🏆 NASZE REALIZACJE ROLET
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 text-gray-900">
            Przekształcamy
            <br />
            <span className="text-primary">Przestrzenie</span>
          </h2>
          
                     <p className="text-xl md:text-2xl font-medium tracking-wide text-gray-600 max-w-4xl mx-auto leading-relaxed">
             Odkryj nasze najnowsze realizacje i przekonaj się, jak możemy{" "}
             <span className="text-primary font-semibold">przekształcić Twoje wnętrze</span>.
           </p>
         </header>
        {/* Portfolio Bento Grid - Improved Layout */}
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 mb-24"
          style={{ gridAutoRows: 'minmax(200px, auto)' }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          role="gallery"
          aria-label="Galeria realizacji rolet"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                 item.size === "large" 
                   ? "col-span-1 sm:col-span-2 row-span-1 sm:row-span-2" 
                   : item.size === "medium" 
                   ? "col-span-1 sm:col-span-2 row-span-1" 
                   : item.size === "tall"
                   ? "col-span-1 row-span-1 sm:row-span-2"
                   : "col-span-1 row-span-1"
               }`}
              itemScope
              itemType="https://schema.org/ImageObject"
              role="img"
              aria-label={item.alt}
            >
              <div className="relative w-full h-full">
                                 {/* Background Image or SVG Placeholder */}
                 {item.hasRealImage ? (
                  <>
                    <Image 
                      src={item.image} 
                      alt={item.alt}
                      title={item.description}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Always visible text overlay for real images */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-xs font-semibold text-amber-400 mb-2 uppercase tracking-wide">{item.category}</div>
                        <h3 className="text-base lg:text-lg font-bold mb-2 leading-tight">{item.title}</h3>
                      </div>
                    </div>
                  </>
                 ) : (
                   <div 
                     className="w-full h-full"
                     dangerouslySetInnerHTML={{
                       __html: `
                         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
                           <rect width="100%" height="100%" fill="#1f1f1f"/>
                           <rect x="10%" y="10%" width="80%" height="80%" fill="#2a2a2a" stroke="#a21622" stroke-width="2"/>
                           <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="14" fill="#fcf7f8" text-anchor="middle" dominant-baseline="middle">${item.category}</text>
                           <text x="50%" y="65%" font-family="Arial, sans-serif" font-size="12" fill="#0085FF" text-anchor="middle" dominant-baseline="middle">${item.title}</text>
                         </svg>
                       `
                     }}
                   />
                 )}
                
                {/* Overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-semibold text-amber-400 mb-2 uppercase tracking-wide">{item.category}</div>
                    <h3 className="text-base lg:text-lg font-bold mb-2 leading-tight">{item.title}</h3>
                  </div>
                </div>

                {/* Hover effect with primary color */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Subtle border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl lg:rounded-3xl transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Opinie o Roletach - Co Mówią Nasi Klienci?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Zobacz prawdziwe opinie zadowolonych klientów o <strong>roletach i żaluzjach Rolet Mix</strong> z Google i Facebook
            </p>
          </div>

          {/* Desktop Grid - Hidden on mobile */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                itemScope
                itemType="https://schema.org/Review"
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Header with Avatar and Info */}
                <div className="relative flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 ring-2 ring-white/50">
                    <div className="text-xl">👤</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 text-base" itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">{testimonial.name}</span>
                      </h3>
                      <div className="flex items-center gap-1" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                        <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                        <meta itemProp="bestRating" content="5" />
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FiStar key={i} className="w-4 h-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2" itemProp="author" itemScope itemType="https://schema.org/Person">
                      <span itemProp="address">{testimonial.location}</span>
                    </p>
                    {/* Platform with logo */}
                    <div className="flex items-center gap-2">
                      {testimonial.platform === "Google" ? (
                        <FaGoogle className="w-4 h-4 text-blue-500" />
                      ) : (
                        <FaFacebook className="w-4 h-4 text-blue-600" />
                      )}
                      <span className="text-sm font-medium text-gray-700">{testimonial.platform}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <time className="text-xs text-gray-500" itemProp="datePublished">{testimonial.date}</time>
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="relative text-gray-700 leading-relaxed text-sm line-clamp-4 italic" itemProp="reviewBody">
                  <span className="text-primary text-2xl absolute -top-2 -left-1">&ldquo;</span>
                  <span className="ml-4">{testimonial.text}</span>
                  <span className="text-primary text-2xl">&rdquo;</span>
                </blockquote>
                
                {/* itemReviewed - hidden structured data */}
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness" style={{ display: 'none' }}>
                  <span itemProp="name">Rolet Mix</span>
                  <link itemProp="url" href="https://www.roletmix.pl/" />
                </div>
                
                {/* Bottom border accent */}
                <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Slider - Visible only on mobile */}
          <div className="md:hidden relative max-w-sm mx-auto">
            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mb-4">
              <motion.button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronLeft className="w-5 h-5 text-gray-700" />
              </motion.button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "bg-primary w-6" 
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronRight className="w-5 h-5 text-gray-700" />
              </motion.button>
            </div>

            {/* Slider Container */}
            <div className="relative overflow-hidden rounded-2xl">
              <motion.div
                className="flex"
                animate={{ x: -currentSlide * 100 + "%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{ left: -(testimonials.length - 1) * 100, right: 0 }}
                onDragEnd={(_, { offset }) => {
                  if (offset.x > 100) {
                    prevSlide();
                  } else if (offset.x < -100) {
                    nextSlide();
                  }
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 shadow-lg" itemScope itemType="https://schema.org/Review">
                      {/* Subtle background pattern */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
                      
                      {/* Header with Avatar and Info */}
                      <div className="relative flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 ring-2 ring-white/50">
                          <div className="text-xl">👤</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div itemProp="author" itemScope itemType="https://schema.org/Person" style={{ display: 'none' }}>
                            <span itemProp="name">{testimonial.name}</span>
                          </div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900 text-base">{testimonial.name}</h4>
                            <div className="flex items-center gap-1" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                              <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                              <meta itemProp="bestRating" content="5" />
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <FiStar key={i} className="w-4 h-4 text-amber-400 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{testimonial.location}</p>
                          {/* Platform with logo */}
                          <div className="flex items-center gap-2">
                            {testimonial.platform === "Google" ? (
                              <FaGoogle className="w-4 h-4 text-blue-500" />
                            ) : (
                              <FaFacebook className="w-4 h-4 text-blue-600" />
                            )}
                            <span className="text-sm font-medium text-gray-700">{testimonial.platform}</span>
                            <span className="text-xs text-gray-500">•</span>
                            <time className="text-xs text-gray-500" itemProp="datePublished">{testimonial.date}</time>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="relative text-gray-700 leading-relaxed text-sm italic" itemProp="reviewBody">
                        <span className="text-primary text-2xl absolute -top-2 -left-1">&ldquo;</span>
                        <span className="ml-4">{testimonial.text}</span>
                        <span className="text-primary text-2xl">&rdquo;</span>
                      </blockquote>
                      
                      {/* itemReviewed - hidden structured data */}
                      <div itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness" style={{ display: 'none' }}>
                        <span itemProp="name">Rolet Mix</span>
                        <link itemProp="url" href="https://www.roletmix.pl/" />
                      </div>
                      
                      {/* Bottom border accent */}
                      <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full"></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg mb-8">
              Zainspiruj się naszymi realizacjami <strong>rolet zewnętrznych, dachowych i tekstylnych</strong> i dołącz do grona zadowolonych klientów w Małopolsce
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-full hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-primary/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Zobacz więcej realizacji rolet w naszym portfolio"
              >
                <span>Zobacz Więcej Realizacji Rolet</span>
                <FiExternalLink className="ml-3 w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.google.com/search?sca_esv=b0a1351e93cb2bd4&sxsrf=AE3TifOhwaYxTBgDCKiij5nyyqnBuaCkoQ:1755535502654&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-Lacd7tfoANMeUBg83zdGLxLxBMbxxdCd6VgUpDVYgcG6GaPi-EpnH9qrF0oMRmGIRxuMZK_5oZzOz3KPqpPk2YXc8iTI3phIyk6qVA-A1yUO5s-A%3D%3D&q=Rolety+i+%C5%BBaluzje+Rolet+Mix+Reviews&sa=X&ved=2ahUKEwiO3Jqw55SPAxWRBNsEHQMNMIIQ0bkNegQISxAE&biw=1920&bih=911&dpr=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold rounded-full hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-amber-400/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Sprawdź opinie klientów o roletach Rolet Mix"
              >
                <span>Sprawdź Opinie o Roletach</span>
                <FiStar className="ml-3 w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default PortfolioSection; 