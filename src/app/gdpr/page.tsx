"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiLock, FiMail, FiPhone, FiShield } from "react-icons/fi";
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

export default function GDPRPage() {
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
            <pattern id="gdpr-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gdpr-grid)" className="text-white" />
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
                <FiLock className="inline w-4 h-4 mr-2" />
                RODO
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Informacja RODO
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Szczegółowe informacje o przetwarzaniu danych osobowych zgodnie z RODO
            </p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12">
            <div className="prose prose-invert max-w-none">
              
              <h2 className="text-2xl font-bold text-amber-400 mb-4">1. Administrator danych osobowych</h2>
              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <p className="mb-4">
                  <FiShield className="inline w-5 h-5 mr-2 text-amber-400" />
                  <strong>Administratorem Państwa danych osobowych jest:</strong>
                </p>
                <p>
                  F.H.U. Rolet-Mix Zbigniew Piesyk<br/>
                  Kłyż 89, 33-250 Otfinów, woj. małopolskie<br/>
                  NIP: 8711226197, REGON: 121474307
                </p>
                <p className="mt-4">
                  <FiPhone className="inline w-4 h-4 mr-2" />
                  Tel: 721 986 278<br/>
                  <FiMail className="inline w-4 h-4 mr-2" />
                  E-mail: biuro@roletmix.pl
                </p>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">2. Cele przetwarzania danych osobowych</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-300 mb-2">a) Odpowiedzi na zapytania (art. 6 ust. 1 lit. f RODO)</h4>
                  <p className="text-sm">Prawnie uzasadniony interes administratora polegający na prowadzeniu korespondencji handlowej</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-300 mb-2">b) Realizacja umowy (art. 6 ust. 1 lit. b RODO)</h4>
                  <p className="text-sm">Wykonanie umowy o świadczenie usług zawartej z osobą, której dane dotyczą</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-300 mb-2">c) Obowiązki prawne (art. 6 ust. 1 lit. c RODO)</h4>
                  <p className="text-sm">Prowadzenie księgowości, archiwizacja dokumentów zgodnie z prawem podatkowym</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-300 mb-2">d) Marketing bezpośredni (art. 6 ust. 1 lit. f RODO)</h4>
                  <p className="text-sm">Prawnie uzasadniony interes administratora w promowaniu swoich usług</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">3. Kategorie przetwarzanych danych</h2>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Dane identyfikacyjne:</strong> imię, nazwisko, nazwa firmy</li>
                <li><strong>Dane kontaktowe:</strong> adres e-mail, numer telefonu, adres korespondencyjny</li>
                <li><strong>Dane związane z zamówieniem:</strong> preferencje, wymagania techniczne</li>
                <li><strong>Dane techniczne:</strong> adres IP, informacje o przeglądarce (cookies)</li>
                <li><strong>Dane finansowe:</strong> informacje o płatnościach (jeśli dotyczy)</li>
              </ul>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">4. Źródła danych osobowych</h2>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Bezpośrednio od osoby, której dane dotyczą (formularze kontaktowe)</li>
                <li>Z publicznie dostępnych rejestrów (dane firm)</li>
                <li>Od partnerów biznesowych (za zgodą osoby, której dane dotyczą)</li>
              </ul>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">5. Odbiorcy danych osobowych</h2>
              <p className="mb-4">Dane osobowe mogą być przekazywane:</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Biuro rachunkowe</strong> - w celu prowadzenia księgowości</li>
                <li><strong>Dostawcy usług IT</strong> - hosting, utrzymanie systemów informatycznych</li>
                <li><strong>Firmy kurierskie</strong> - w celu dostarczenia przesyłek</li>
                <li><strong>Organy państwowe</strong> - jeżeli wymagają tego przepisy prawa</li>
                <li><strong>Podwykonawcy</strong> - w przypadku realizacji wspólnych projektów</li>
              </ul>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">6. Okres przechowywania danych</h2>
              <div className="space-y-3 mb-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p><strong>Korespondencja handlowa:</strong> 3 lata od ostatniego kontaktu</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p><strong>Umowy i faktury:</strong> 5 lat (obowiązek prawny)</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p><strong>Marketing bezpośredni:</strong> do wycofania zgody lub złożenia sprzeciwu</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p><strong>Cookies analityczne:</strong> maksymalnie 26 miesięcy</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">7. Prawa osoby, której dane dotyczą</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-300 mb-2">Prawo dostępu (art. 15 RODO)</h4>
                  <p className="text-sm">Możliwość uzyskania informacji o przetwarzanych danych</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-300 mb-2">Prawo sprostowania (art. 16 RODO)</h4>
                  <p className="text-sm">Możliwość poprawienia nieprawidłowych danych</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-300 mb-2">Prawo usunięcia (art. 17 RODO)</h4>
                  <p className="text-sm">Prawo do bycia zapomnianym w określonych przypadkach</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-300 mb-2">Prawo ograniczenia (art. 18 RODO)</h4>
                  <p className="text-sm">Możliwość ograniczenia przetwarzania danych</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-300 mb-2">Prawo przenoszenia (art. 20 RODO)</h4>
                  <p className="text-sm">Otrzymanie danych w formacie umożliwiającym przeniesienie</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-300 mb-2">Prawo sprzeciwu (art. 21 RODO)</h4>
                  <p className="text-sm">Sprzeciw wobec przetwarzania w określonych przypadkach</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">8. Prawo wniesienia skargi</h2>
              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <p className="mb-4">
                  Przysługuje Państwu prawo wniesienia skargi do organu nadzorczego:
                </p>
                <p>
                  <strong>Prezes Urzędu Ochrony Danych Osobowych</strong><br/>
                  ul. Stawki 2, 00-193 Warszawa<br/>
                  Tel: 22 531 03 00<br/>
                  E-mail: kancelaria@uodo.gov.pl
                </p>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">9. Profilowanie i automatyczne podejmowanie decyzji</h2>
              <p className="mb-6">
                Administrator nie stosuje profilowania ani automatycznego podejmowania decyzji w rozumieniu art. 22 RODO.
              </p>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">10. Przekazywanie danych do państw trzecich</h2>
              <p className="mb-6">
                Dane osobowe nie są przekazywane do państw trzecich ani organizacji międzynarodowych, z wyjątkiem konieczności korzystania z usług dostawców technologii (np. Google Analytics) - w takich przypadkach stosowane są odpowiednie zabezpieczenia.
              </p>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">11. Obowiązek podania danych</h2>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Dobrowolne:</strong> dane podawane przez formularz kontaktowy</li>
                <li><strong>Umowne:</strong> dane niezbędne do realizacji umowy</li>
                <li><strong>Prawne:</strong> dane wymagane przepisami prawa (faktury, księgowość)</li>
              </ul>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">12. Sposób realizacji praw</h2>
              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <p className="mb-4">
                  <strong>Żądania dotyczące realizacji praw można składać:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Mailowo: biuro@roletmix.pl</li>
                  <li>Telefonicznie: 721 986 278</li>
                  <li>Pisemnie: Kłyż 89, 33-250 Otfinów</li>
                </ul>
                <p className="mt-4 text-sm text-gray-400">
                  Administrator udzieli odpowiedzi bez zbędnej zwłoki, nie później niż w ciągu miesiąca od otrzymania żądania.
                </p>
              </div>

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