"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiStar, FiExternalLink } from "react-icons/fi";

const portfolioItems = [
  {
    id: 1,
    title: "Nowoczesne Rolety Tekstylne",
    category: "Rolety Tekstylne",
    image: "/images/gallery/textile-blinds-1.jpg",
    size: "large" // 2x2
  },
  {
    id: 2,
    title: "Eleganckie Żaluzje Pionowe",
    category: "Verticale",
    image: "/images/gallery/vertical-blinds-1.jpg",
    size: "medium" // 1x2
  },
  {
    id: 3,
    title: "Rolety Dachowe Premium",
    category: "Rolety Dachowe",
    image: "/images/gallery/roof-blinds-1.jpg",
    size: "medium" // 1x2
  },
  {
    id: 4,
    title: "Stylowe Plisy Okienne",
    category: "Plisy",
    image: "/images/gallery/pleated-blinds-1.jpg",
    size: "small" // 1x1
  },
  {
    id: 5,
    title: "Moskitiery Profesjonalne",
    category: "Moskitiery",
    image: "/images/gallery/mosquito-nets-1.jpg",
    size: "small" // 1x1
  },
  {
    id: 6,
    title: "Rolety Zewnętrzne Antywłamaniowe",
    category: "Rolety Zewnętrzne",
    image: "/images/gallery/external-shutters-1.jpg",
    size: "large" // 2x2
  },
  {
    id: 7,
    title: "Żaluzje Poziome Drewniane",
    category: "Żaluzje Poziome",
    image: "/images/gallery/horizontal-blinds-1.jpg",
    size: "medium" // 1x2
  },
  {
    id: 8,
    title: "Kompleksowy Serwis",
    category: "Serwis",
    image: "/images/gallery/service-1.jpg",
    size: "small" // 1x1
  }
];

const testimonials = [
  {
    id: 1,
    name: "Anna Kowalska",
    location: "Warszawa, Mokotów",
    rating: 5,
    text: "Profesjonalna obsługa od początku do końca. Rolety tekstylne wyglądają rewelacyjnie i idealnie pasują do naszego wnętrza. Polecam!",
    avatar: "/images/placeholder-avatar-1.jpg",
    platform: "Google",
    date: "2 tygodnie temu"
  },
  {
    id: 2,
    name: "Marek Nowak",
    location: "Kraków, Krowodrza",
    rating: 5,
    text: "Świetna jakość wykonania i terminowość. Rolety dachowe rozwiązują problem z nasłonecznieniem na poddaszu. Dziękuję za profesjonalizm!",
    avatar: "/images/placeholder-avatar-2.jpg",
    platform: "Facebook",
    date: "1 miesiąc temu"
  },
  {
    id: 3,
    name: "Katarzyna Wiśniewska",
    location: "Poznań, Jeżyce",
    rating: 5,
    text: "Kompleksowa obsługa - pomiar, montaż i serwis. Moskitiery są praktyczne i estetyczne. Na pewno skorzystam ponownie!",
    avatar: "/images/placeholder-avatar-3.jpg",
    platform: "Google",
    date: "3 tygodnie temu"
  },
  {
    id: 4,
    name: "Piotr Zieliński",
    location: "Wrocław, Krzyki",
    rating: 5,
    text: "Rolety zewnętrzne to najlepsza inwestycja w naszym domu. Oszczędność energii i bezpieczeństwo. Polecam wszystkim!",
    avatar: "/images/placeholder-avatar-4.jpg",
    platform: "Facebook",
    date: "2 miesiące temu"
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

  const getGridClass = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "medium":
        return "col-span-1 row-span-2";
      case "small":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <section 
      id="portfolio"
      ref={ref}
      className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
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
        <div className="text-center mb-20">
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="px-6 py-3 text-sm font-semibold tracking-wide text-primary bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
              🏆 NASZE REALIZACJE
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
        </div>

        {/* Portfolio Bento Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-3xl ${getGridClass(item.size)}`}
            >
              <div className="relative w-full h-full min-h-[200px] md:min-h-[250px] lg:min-h-[300px]">
                {/* Placeholder background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"></div>
                
                {/* Overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-medium text-amber-400 mb-1">{item.category}</div>
                    <h3 className="text-sm lg:text-base font-semibold mb-2">{item.title}</h3>
                    <div className="flex items-center text-xs text-gray-300">
                      <FiExternalLink className="w-3 h-3 mr-1" />
                      Zobacz szczegóły
                    </div>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Co Mówią Nasi Klienci?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Zobacz opinie zadowolonych klientów z Google i Facebook
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header with Avatar and Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-lg">👤</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 truncate">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 truncate">{testimonial.location}</p>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-3 line-clamp-4">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{testimonial.platform}</span>
                  <span>{testimonial.date}</span>
                </div>
              </motion.div>
            ))}
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
              Zainspiruj się naszymi realizacjami i dołącz do grona zadowolonych klientów
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-full hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-primary/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Zobacz Więcej Realizacji</span>
                <FiExternalLink className="ml-3 w-5 h-5" />
              </motion.button>
              <motion.button
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold rounded-full hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-amber-400/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Sprawdź Opinie Klientów</span>
                <FiStar className="ml-3 w-5 h-5" />
              </motion.button>
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