"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiShield, FiMail, FiPhone } from "react-icons/fi";
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

export default function PrivacyPolicyPage() {
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
            <pattern id="privacy-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#privacy-grid)" className="text-white" />
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
                <FiShield className="inline w-4 h-4 mr-2" />
                POLITYKA PRYWATNOŚCI
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Polityka Prywatności
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Informacje o przetwarzaniu danych osobowych w F.H.U. Rolet-Mix
            </p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12">
            <div className="prose prose-invert max-w-none">
              
              <h2 className="text-2xl font-bold text-amber-400 mb-4">1. Informacje ogólne</h2>
              <p className="mb-6">
                Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez użytkowników w związku z korzystaniem ze strony internetowej roletmix.pl oraz usług świadczonych przez F.H.U. Rolet-Mix.
              </p>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">2. Administrator danych osobowych</h2>
              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <p><strong>Administratorem danych osobowych jest:</strong></p>
                <p className="mt-2">
                  F.H.U. Rolet-Mix Zbigniew Piesyk<br/>
                  Kłyż 89<br/>
                  33-250 Otfinów<br/>
                  woj. małopolskie
                </p>
                <p className="mt-4">
                  <strong>NIP:</strong> 8711226197<br/>
                  <strong>REGON:</strong> 121474307
                </p>
                <p className="mt-4">
                  <FiPhone className="inline w-4 h-4 mr-2" />
                  <strong>Telefon:</strong> 721 986 278<br/>
                  <FiMail className="inline w-4 h-4 mr-2" />
                  <strong>E-mail:</strong> biuro@roletmix.pl
                </p>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">3. Cel i podstawa prawna przetwarzania danych</h2>
              <p className="mb-4">Dane osobowe przetwarzane są w następujących celach:</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Odpowiedzi na zapytania przesłane przez formularz kontaktowy (art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes)</li>
                <li>Przygotowania oferty handlowej (art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes)</li>
                <li>Realizacji umowy o świadczenie usług (art. 6 ust. 1 lit. b RODO - wykonanie umowy)</li>
                <li>Prowadzenia księgowości (art. 6 ust. 1 lit. c RODO - obowiązek prawny)</li>
                <li>Marketingu bezpośredniego (art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes)</li>
                <li>Analityka strony internetowej (art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes)</li>
              </ul>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">4. Rodzaj przetwarzanych danych</h2>
              <p className="mb-4">Przetwarzamy następujące kategorie danych osobowych:</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Dane identyfikacyjne (imię, nazwisko, nazwa firmy)</li>
                <li>Dane kontaktowe (adres e-mail, numer telefonu, adres)</li>
                <li>Dane dotyczące preferencji i potrzeb związanych z oferowanymi usługami</li>
                <li>Dane o aktywności na stronie internetowej (adres IP, cookies)</li>
              </ul>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">5. Okres przechowywania danych</h2>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Zapytania przez formularz:</strong> do momentu udzielenia odpowiedzi, maksymalnie 3 lata</li>
                <li><strong>Realizacja umów:</strong> przez okres obowiązywania umowy oraz 3 lata po jej zakończeniu</li>
                <li><strong>Księgowość:</strong> 5 lat od końca roku kalendarzowego (obowiązek prawny)</li>
                <li><strong>Marketing:</strong> do momentu wyrażenia sprzeciwu lub wycofania zgody</li>
                <li><strong>Cookies analityczne:</strong> maksymalnie 26 miesięcy</li>
              </ul>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">6. Udostępnianie danych</h2>
              <p className="mb-4">Dane osobowe mogą być udostępniane:</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Podmiotom przetwarzającym dane w naszym imieniu (dostawcy usług IT, księgowość)</li>
                <li>Organom państwowym - jeżeli wynika to z obowiązujących przepisów prawa</li>
                <li>Nie sprzedajemy ani nie udostępniamy danych osobowych podmiotom trzecim w celach marketingowych</li>
              </ul>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">7. Prawa osoby, której dane dotyczą</h2>
              <p className="mb-4">Przysługują Państwu następujące prawa:</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Prawo dostępu</strong> do swoich danych osobowych</li>
                <li><strong>Prawo sprostowania</strong> nieprawidłowych danych</li>
                <li><strong>Prawo usunięcia</strong> danych (prawo do bycia zapomnianym)</li>
                <li><strong>Prawo ograniczenia</strong> przetwarzania</li>
                <li><strong>Prawo przenoszenia</strong> danych</li>
                <li><strong>Prawo sprzeciwu</strong> wobec przetwarzania</li>
                <li><strong>Prawo wycofania zgody</strong> w dowolnym momencie</li>
                <li><strong>Prawo wniesienia skargi</strong> do organu nadzorczego</li>
              </ul>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">8. Bezpieczeństwo danych</h2>
              <p className="mb-6">
                Stosujemy odpowiednie środki techniczne i organizacyjne w celu zapewnienia bezpieczeństwa przetwarzanych danych osobowych, w tym w szczególności zabezpieczenia przed nieprawomocnym ujawnieniem, zniszczeniem, modyfikacją lub nieuprawnionym dostępem.
              </p>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">9. Kontakt w sprawach ochrony danych</h2>
              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <p className="mb-2">
                  W sprawach dotyczących ochrony danych osobowych prosimy o kontakt:
                </p>
                <p>
                  <FiMail className="inline w-4 h-4 mr-2" />
                  <strong>E-mail:</strong> biuro@roletmix.pl<br/>
                  <FiPhone className="inline w-4 h-4 mr-2" />
                  <strong>Telefon:</strong> 721 986 278
                </p>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">10. Zmiany polityki prywatności</h2>
              <p className="mb-6">
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. O wszelkich zmianach będziemy informować na stronie internetowej. Zmiany wchodzą w życie w dniu ich publikacji.
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