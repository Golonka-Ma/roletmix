"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock, 
  FiMessageCircle, 
  FiSend,
  FiUser,
  FiHash
} from "react-icons/fi";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const contactInfo = {
  phone: "+48 721 986 278",
  email: "biuro@roletmix.pl",
  address: "Kłyż 89, 33-250 Otfinów, woj. małopolskie",
  hours: {
    weekdays: "Poniedziałek - Piątek: 8:00 - 17:00",
    saturday: "Sobota: Zamknięte",
    sunday: "Niedziela: Zamknięte"
  }
};

const quickActions = [
  {
    icon: FiPhone,
    label: "Zadzwoń",
    action: "call",
    color: "bg-green-500 hover:bg-green-600",
    href: `tel:${contactInfo.phone}`
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    action: "whatsapp",
    color: "bg-green-600 hover:bg-green-700",
    href: `https://wa.me/48721986278`
  },
  {
    icon: FaFacebookMessenger,
    label: "Messenger",
    action: "messenger",
    color: "bg-blue-600 hover:bg-blue-700",
    href: "https://m.me/roletmix"
  },
  {
    icon: FiMail,
    label: "Email",
    action: "email",
    color: "bg-primary hover:bg-primary/90",
    href: `mailto:${contactInfo.email}`
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { 
    y: 40, 
    opacity: 0,
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    postalCode: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Reset status when user starts typing
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          phone: "",
          postalCode: "",
          message: ""
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Wystąpił błąd podczas wysyłania wiadomości');
      }
    } catch (error) {
      console.error('Błąd wysyłania formularza:', error);
      setSubmitStatus('error');
      setErrorMessage('Wystąpił błąd połączenia. Sprawdź połączenie internetowe i spróbuj ponownie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact"
      ref={ref}
      className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" className="text-white" />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
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
            <span className="px-6 py-3 text-sm font-semibold tracking-wide text-amber-400 bg-amber-400/10 backdrop-blur-sm rounded-full border border-amber-400/30">
              📞 SKONTAKTUJ SIĘ Z NAMI
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 text-white">
            Rozpocznij Swoją
            <br />
            <span className="text-amber-400">Transformację</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-medium tracking-wide text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Skontaktuj się z nami już dziś i otrzymaj{" "}
            <span className="text-amber-400 font-semibold">bezpłatną wycenę i pomiar</span>{" "}
            w ciągu 24 godzin.
          </p>
        </div>

        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Contact Form */}
          <motion.div variants={itemVariants} className="h-full">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-10 h-full flex flex-col">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Otrzymaj Bezpłatną Wycenę
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div className="flex-1 space-y-6">
                  {/* Name Field */}
                  <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Imię i nazwisko
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="Wprowadź swoje imię i nazwisko"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Numer telefonu
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="Wprowadź numer telefonu"
                    />
                  </div>
                </div>

                {/* Postal Code Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Kod pocztowy
                  </label>
                  <div className="relative">
                    <FiHash className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{2}-[0-9]{3}"
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="00-000"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Wiadomość (opcjonalnie)
                  </label>
                  <div className="relative">
                    <FiMessageCircle className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300 resize-none"
                      placeholder="Opisz swoje potrzeby..."
                    />
                  </div>
                </div>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-sm"
                  >
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Wiadomość została wysłana!</p>
                        <p className="text-green-300">Skontaktujemy się z Tobą w ciągu 24 godzin.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-sm"
                  >
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Błąd wysyłania</p>
                        <p className="text-red-300">{errorMessage}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg disabled:cursor-not-allowed flex items-center justify-center ${
                    submitStatus === 'success' 
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : submitStatus === 'error'
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-gradient-to-r from-amber-400 to-amber-500 text-black hover:from-amber-500 hover:to-amber-600 hover:shadow-amber-400/25'
                  } ${isSubmitting ? 'opacity-70' : ''}`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-3"></div>
                      Wysyłanie...
                    </div>
                  ) : submitStatus === 'success' ? (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Wysłano pomyślnie
                    </div>
                  ) : submitStatus === 'error' ? (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Spróbuj ponownie
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <FiSend className="w-5 h-5 mr-3" />
                      Wyślij Zapytanie
                    </div>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Column - Map & Contact Info */}
          <motion.div variants={itemVariants} className="h-full">
            {/* Map Placeholder */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-10 h-full flex flex-col">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Znajdź Nas
              </h3>
              
              {/* Map Container */}
              <div className="relative flex-1 min-h-64 rounded-2xl overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps?q=Kłyż+89,+33-250+Otfinów&output=embed&z=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Rolet-Mix: Kłyż 89, 33-250 Otfinów"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
                
                {/* Subtle overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 pointer-events-none rounded-2xl"></div>
                
                {/* Corner logo/branding */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <FiMapPin className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-gray-800">Rolet-Mix</span>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-400/20 rounded-xl flex items-center justify-center">
                    <FiMapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Adres</h4>
                    <p className="text-gray-300">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-400/20 rounded-xl flex items-center justify-center">
                    <FiPhone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Telefon</h4>
                    <p className="text-gray-300">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-400/20 rounded-xl flex items-center justify-center">
                    <FiMail className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-400/20 rounded-xl flex items-center justify-center">
                    <FiClock className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Godziny pracy</h4>
                    <div className="text-gray-300 text-sm space-y-1">
                      <p>{contactInfo.hours.weekdays}</p>
                      <p>{contactInfo.hours.saturday}</p>
                      <p>{contactInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Quick Contact Actions - Sticky on Mobile */}
        <motion.div
          className="fixed bottom-6 right-6 lg:relative lg:bottom-auto lg:right-auto lg:mt-16 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="lg:text-center lg:mb-12">
            <h3 className="hidden lg:block text-2xl lg:text-3xl font-bold text-white mb-8">
              Szybki Kontakt
            </h3>
          </div>

          <div className="flex lg:grid lg:grid-cols-4 gap-4 lg:max-w-4xl lg:mx-auto">
            {quickActions.map((action, index) => (
              <motion.a
                key={action.action}
                href={action.href}
                target={action.action === 'whatsapp' || action.action === 'messenger' ? '_blank' : '_self'}
                rel={action.action === 'whatsapp' || action.action === 'messenger' ? 'noopener noreferrer' : ''}
                className={`flex lg:flex-col items-center justify-center p-4 lg:p-6 ${action.color} text-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <action.icon className="w-6 h-6 lg:w-8 lg:h-8 lg:mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="hidden lg:block font-semibold text-sm lg:text-base">
                  {action.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default ContactSection;