"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock,
  FiArrowUp
} from "react-icons/fi";
import { FaWhatsapp, FaFacebookMessenger, FaFacebook, FaInstagram } from "react-icons/fa";
import { cn } from "@/lib/utils";

const contactInfo = {
  companyName: "",
  phone: "+48 721 986 278",
  email: "biuro@roletmix.pl",
  address: "Kłyż 89, 33-250 Otfinów, woj. małopolskie",
  hours: {
    weekdays: "Poniedziałek - Piątek: 8:00 - 17:00",
    saturday: "Sobota: Zamknięte",
    sunday: "Niedziela: Zamknięte"
  }
};

const quickLinks = [
  { label: "Strona główna", href: "/" },
  { label: "O nas", href: "#about" },
  { label: "Usługi", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Produkty", href: "#products" },
  { label: "Kontakt", href: "#contact" }
];

const services = [
  { label: "Rolety zewnętrzne", href: "#products" },
  { label: "Żaluzje poziome", href: "#products" },
  { label: "Żaluzje pionowe", href: "#products" },
  { label: "Siatki przeciw owadom", href: "#products" },
  { label: "Żaluzje dachowe", href: "#products" },
  { label: "Serwis i naprawa", href: "#products" }
];

const socialLinks = [
  {
    icon: FaFacebook,
    label: "Facebook",
    href: "https://facebook.com/roletmix",
    color: "hover:text-blue-500"
  },
  {
    icon: FaInstagram,
    label: "Instagram", 
    href: "https://instagram.com/roletmix",
    color: "hover:text-pink-500"
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/48721986278",
    color: "hover:text-green-500"
  },
  {
    icon: FaFacebookMessenger,
    label: "Messenger",
    href: "https://m.me/roletmix",
    color: "hover:text-blue-600"
  }
];

const legalLinks = [
  { label: "Polityka prywatności", href: "/privacy-policy" },
  { label: "Regulamin", href: "/terms" },
  { label: "RODO", href: "/gdpr" },
  { label: "Cookies", href: "/cookies" }
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
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" className="text-white" />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="mb-8">
                <Image
                  src="/logo-biale.svg"
                  alt="Rolet-Mix Logo"
                  width={180}
                  height={60}
                  className="mb-6"
                  priority
                />
                <h3 className="text-xl font-bold mb-4 text-amber-400">
                  {contactInfo.companyName}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Specjalizujemy się w innowacyjnych systemach osłonowych. 
                  Projektujemy, produkujemy i montujemy rozwiązania najwyższej jakości.
                </p>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Śledź nas</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-all duration-300",
                        social.color,
                        "hover:bg-white/20 hover:scale-110"
                      )}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-amber-400">Nawigacja</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-amber-400">Nasze Usługi</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-amber-400">Kontakt</h4>
              <div className="space-y-4">
                
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <FiMapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <FiPhone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                  >
                    {contactInfo.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <FiMail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3">
                  <FiClock className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-gray-300 text-sm space-y-1">
                      <p>{contactInfo.hours.weekdays}</p>
                      <p>{contactInfo.hours.saturday}</p>
                      <p className="text-gray-400">{contactInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div variants={itemVariants}>
            {/* Separator */}
            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
                
                {/* Copyright */}
                <div className="text-center lg:text-left">
                  <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Rolet-Mix. Wszystkie prawa zastrzeżone.
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Projekt i wykonanie:{" "}
                    <a 
                      href="https://www.serviceflow.agency/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 transition-colors duration-300 hover:underline"
                    >
                      ServiceFlow Agency
                    </a>
                  </p>
                </div>

                {/* Legal Links */}
                <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-6">
                  {legalLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 text-xs transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Scroll to Top */}
                <motion.button
                  onClick={scrollToTop}
                  className="flex items-center justify-center w-10 h-10 bg-amber-400/20 hover:bg-amber-400/30 rounded-full transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiArrowUp className="w-5 h-5 text-amber-400 group-hover:text-amber-300" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;