"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiSettings, FiMail, FiPhone } from "react-icons/fi";
import LegalNavbar from "@/components/layout/LegalNavbar";

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

export default function CookiesPage() {
  return (
    <>
      <LegalNavbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cookies-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cookies-grid)" className="text-white" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 text-sm font-semibold tracking-wide text-amber-400 bg-amber-400/10 backdrop-blur-sm rounded-full border border-amber-400/30">
                <FiSettings className="inline w-4 h-4 mr-2" />
                COOKIES
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Polityka Cookies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Informacje o wykorzystywaniu plików cookies na stronie roletmix.pl
            </p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12">
            <div className="prose prose-invert max-w-none">
              
              <h2 className="text-2xl font-bold text-amber-400 mb-4">1. Co to są pliki cookies?</h2>
              <p className="mb-6">
                Pliki cookies to małe pliki tekstowe zapisywane na urządzeniu użytkownika podczas przeglądania stron internetowych. 
                Zawierają informacje o preferencjach użytkownika i umożliwiają lepsze dostosowanie treści strony oraz jej funkcjonalności.
              </p>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">2. Administrator cookies</h2>
              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <p><strong>Administratorem cookies na stronie roletmix.pl jest:</strong></p>
                <p className="mt-2">
                  F.H.U. Rolet-Mix Zbigniew Piesyk<br/>
                  Kłyż 89<br/>
                  33-250 Otfinów<br/>
                  woj. małopolskie
                </p>
                <p className="mt-4">
                  <FiPhone className="inline w-4 h-4 mr-2" />
                  <strong>Telefon:</strong> 721 986 278<br/>
                  <FiMail className="inline w-4 h-4 mr-2" />
                  <strong>E-mail:</strong> biuro@roletmix.pl
                </p>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">3. Rodzaje wykorzystywanych cookies</h2>

              <h3 className="text-xl font-semibold text-amber-300 mb-3">3.1 Cookies niezbędne (techniczne)</h3>
              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <p className="mb-2"><strong>Cel:</strong> Zapewnienie podstawowej funkcjonalności strony</p>
                <p className="mb-2"><strong>Czas przechowywania:</strong> Sesja lub do 1 roku</p>
                <p className="mb-2"><strong>Podstawa prawna:</strong> Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes)</p>
                <p><strong>Funkcje:</strong></p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Zapamiętywanie preferencji użytkownika</li>
                  <li>Obsługa formularzy kontaktowych</li>
                  <li>Zabezpieczenia przed atakami CSRF</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-amber-300 mb-3">3.2 Cookies analityczne</h3>
              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <p className="mb-2"><strong>Cel:</strong> Analiza ruchu i zachowań użytkowników</p>
                <p className="mb-2"><strong>Czas przechowywania:</strong> Do 26 miesięcy</p>
                <p className="mb-2"><strong>Podstawa prawna:</strong> Zgoda użytkownika (art. 6 ust. 1 lit. a RODO)</p>
                <p><strong>Dostawcy:</strong></p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Google Analytics - analiza statystyk strony</li>
                  <li>Facebook Pixel - analiza skuteczności reklam</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-amber-300 mb-3">3.3 Cookies marketingowe</h3>
              <div className="bg-white/5 rounded-xl p-4 mb-6">
                <p className="mb-2"><strong>Cel:</strong> Personalizacja reklam i remarketing</p>
                <p className="mb-2"><strong>Czas przechowywania:</strong> Do 13 miesięcy</p>
                <p className="mb-2"><strong>Podstawa prawna:</strong> Zgoda użytkownika (art. 6 ust. 1 lit. a RODO)</p>
                <p><strong>Funkcje:</strong></p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Wyświetlanie spersonalizowanych reklam</li>
                  <li>Retargeting w sieciach reklamowych</li>
                  <li>Śledzenie konwersji z reklam</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">4. Szczegółowa lista cookies</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 text-amber-300">Nazwa</th>
                      <th className="text-left p-3 text-amber-300">Dostawca</th>
                      <th className="text-left p-3 text-amber-300">Cel</th>
                      <th className="text-left p-3 text-amber-300">Czas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="p-3">_ga</td>
                      <td className="p-3">Google Analytics</td>
                      <td className="p-3">Identyfikacja użytkownika</td>
                      <td className="p-3">2 lata</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">_gid</td>
                      <td className="p-3">Google Analytics</td>
                      <td className="p-3">Identyfikacja sesji</td>
                      <td className="p-3">24 godziny</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">_fbp</td>
                      <td className="p-3">Facebook</td>
                      <td className="p-3">Śledzenie konwersji</td>
                      <td className="p-3">3 miesiące</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">consent_*</td>
                      <td className="p-3">Rolet-Mix</td>
                      <td className="p-3">Preferencje cookies</td>
                      <td className="p-3">1 rok</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">5. Zarządzanie cookies</h2>

              <h3 className="text-xl font-semibold text-amber-300 mb-3">5.1 Zgoda na cookies</h3>
              <p className="mb-4">
                Podczas pierwszej wizyty na stronie zostanie wyświetlony banner informujący o wykorzystywaniu cookies. 
                Możesz wyrazić zgodę na wszystkie cookies lub dostosować preferencje wybierając konkretne kategorie.
              </p>

              <h3 className="text-xl font-semibold text-amber-300 mb-3">5.2 Wycofanie zgody</h3>
              <p className="mb-4">
                Zgodę na cookies możesz wycofać w dowolnym momencie poprzez:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Zmianę ustawień w przeglądarce internetowej</li>
                <li>Usunięcie zapisanych cookies</li>
                <li>Kontakt z administratorem strony</li>
              </ul>

              <h3 className="text-xl font-semibold text-amber-300 mb-3">5.3 Ustawienia przeglądarki</h3>
              <p className="mb-4">Instrukcje zarządzania cookies w popularnych przeglądarkach:</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Google Chrome</h4>
                  <p className="text-sm">Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Mozilla Firefox</h4>
                  <p className="text-sm">Opcje → Prywatność i bezpieczeństwo → Pliki cookie</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Safari</h4>
                  <p className="text-sm">Preferencje → Prywatność → Zarządzaj danymi stron</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Microsoft Edge</h4>
                  <p className="text-sm">Ustawienia → Prywatność → Pliki cookie</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">6. Konsekwencje wyłączenia cookies</h2>
              <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-6 mb-6">
                <p className="mb-2">
                  <strong>⚠️ Ważne:</strong> Wyłączenie wszystkich cookies może wpłynąć na funkcjonalność strony:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Problemy z działaniem formularzy kontaktowych</li>
                  <li>Brak zapamiętywania preferencji</li>
                  <li>Ograniczona funkcjonalność interaktywnych elementów</li>
                  <li>Powtarzające się komunikaty o cookies</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">7. Cookies podmiotów trzecich</h2>
              <p className="mb-4">
                Na naszej stronie wykorzystywane są również cookies pochodzące od podmiotów trzecich:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Google Inc.</strong> - analityka i reklamy (Polityka: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">policies.google.com/privacy</a>)</li>
                <li><strong>Meta Platforms Inc.</strong> - Facebook Pixel (Polityka: <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">facebook.com/privacy/policy</a>)</li>
              </ul>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">8. Kontakt</h2>
              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <p className="mb-4">
                  W sprawach dotyczących polityki cookies prosimy o kontakt:
                </p>
                <p>
                  <FiMail className="inline w-4 h-4 mr-2" />
                  <strong>E-mail:</strong> biuro@roletmix.pl<br/>
                  <FiPhone className="inline w-4 h-4 mr-2" />
                  <strong>Telefon:</strong> 721 986 278
                </p>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">9. Zmiany polityki cookies</h2>
              <p className="mb-6">
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Cookies. 
                O wszystkich istotnych zmianach będziemy informować poprzez komunikat na stronie internetowej.
              </p>

              <div className="border-t border-white/20 pt-6">
                <p className="text-sm text-gray-400">
                  <strong>Data ostatniej aktualizacji:</strong> {new Date().toLocaleDateString('pl-PL')}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
    </>
  );
}