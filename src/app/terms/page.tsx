"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiFileText, FiMail, FiPhone } from "react-icons/fi";
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

export default function TermsPage() {
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
            <pattern id="terms-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#terms-grid)" className="text-white" />
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
                <FiFileText className="inline w-4 h-4 mr-2" />
                REGULAMIN
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Regulamin Świadczenia Usług
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Warunki współpracy i świadczenia usług przez F.H.U. Rolet-Mix
            </p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12">
            <div className="prose prose-invert max-w-none">
              
              <h2 className="text-2xl font-bold text-amber-400 mb-4">§ 1. Postanowienia ogólne</h2>
              <ol className="list-decimal list-inside mb-6 space-y-2">
                <li>Niniejszy Regulamin określa warunki świadczenia usług przez F.H.U. Rolet-Mix Zbigniew Piesyk.</li>
                <li>Regulamin obowiązuje wszystkich klientów korzystających z usług świadczonych przez firmę.</li>
                <li>Zawierając umowę, klient potwierdza, że zapoznał się z niniejszym Regulaminem i akceptuje jego postanowienia.</li>
              </ol>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">§ 2. Dane usługodawcy</h2>
              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <p><strong>Usługodawca:</strong></p>
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
                <p className="mt-4">
                  <strong>Godziny pracy:</strong><br/>
                  Poniedziałek - Piątek: 8:00 - 20:00<br/>
                  Sobota: 8:00 - 16:00<br/>
                  Niedziela: zamknięte
                </p>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">§ 3. Zakres usług</h2>
              <ol className="list-decimal list-inside mb-6 space-y-2">
                <li>Usługodawca świadczy usługi w zakresie:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Projektowania systemów osłonowych</li>
                    <li>Produkcji rolet zewnętrznych i żaluzji</li>
                    <li>Montażu i instalacji systemów osłonowych</li>
                    <li>Serwisu i napraw</li>
                    <li>Doradztwa technicznego</li>
                  </ul>
                </li>
                <li>Szczegółowy zakres usług określany jest indywidualnie w umowie z klientem.</li>
              </ol>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">§ 4. Zawarcie umowy</h2>
              <ol className="list-decimal list-inside mb-6 space-y-2">
                <li>Umowa zostaje zawarta w momencie złożenia przez klienta zamówienia i jego przyjęcia przez usługodawcę.</li>
                <li>Przed zawarciem umowy przeprowadzany jest bezpłatny pomiar i wycena.</li>
                <li>Oferta jest ważna przez 30 dni od daty jej sporządzenia.</li>
                <li>Usługodawca zastrzega sobie prawo do odmowy wykonania usługi bez podania przyczyny.</li>
              </ol>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">§ 5. Ceny i płatności</h2>
              <ol className="list-decimal list-inside mb-6 space-y-2">
                <li>Ceny usług podawane są w złotych polskich i zawierają podatek VAT.</li>
                <li>Płatność realizowana jest według uzgodnionych warunków:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Zaliczka - do 50% wartości zamówienia</li>
                    <li>Pozostała kwota - przy odbiorze lub zgodnie z umową</li>
                  </ul>
                </li>
                <li>Akceptowane formy płatności: przelew, gotówka, karta płatnicza.</li>
                <li>W przypadku opóźnienia w płatności, usługodawca może naliczyć odsetki ustawowe.</li>
              </ol>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">§ 6. Realizacja usług</h2>
              <ol className="list-decimal list-inside mb-6 space-y-2">
                <li>Termin realizacji usługi określany jest indywidualnie i podawany w ofercie.</li>
                <li>Usługodawca dołoży wszelkich starań, aby dotrzymać uzgodnionego terminu.</li>
                <li>Przekroczenie terminu realizacji o maksymalnie 7 dni nie stanowi podstawy do odstąpienia od umowy.</li>
                <li>Klient zobowiązany jest zapewnić dostęp do miejsca wykonywania usług.</li>
              </ol>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">§ 7. Gwarancja</h2>
              <ol className="list-decimal list-inside mb-6 space-y-2">
                <li>Na wykonane usługi udzielamy gwarancji zgodnie z obowiązującymi przepisami.</li>
                <li>Okres gwarancji:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Roboty montażowe - 2 lata</li>
                    <li>Produkty - zgodnie z gwarancją producenta (min. 2 lata)</li>
                  </ul>
                </li>
                <li>Gwarancja nie obejmuje uszkodzeń powstałych wskutek nieprawidłowego użytkowania.</li>
                <li>Zgłoszenia gwarancyjne przyjmowane są telefonicznie lub mailowo.</li>
              </ol>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">§ 8. Reklamacje</h2>
              <ol className="list-decimal list-inside mb-6 space-y-2">
                <li>Reklamacje można składać:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Pisemnie na adres: Kłyż 89, 33-250 Otfinów</li>
                    <li>Mailowo na: biuro@roletmix.pl</li>
                    <li>Telefonicznie: 721 986 278</li>
                  </ul>
                </li>
                <li>Reklamacja powinna zawierać opis problemu oraz dane kontaktowe.</li>
                <li>Odpowiedź na reklamację zostanie udzielona w terminie 14 dni roboczych.</li>
              </ol>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">§ 9. Odstąpienie od umowy</h2>
              <ol className="list-decimal list-inside mb-6 space-y-2">
                <li>Klient może odstąpić od umowy w terminie 14 dni bez podania przyczyny (dotyczy konsumentów).</li>
                <li>Prawo odstąpienia nie dotyczy usług wykonanych na indywidualne zamówienie.</li>
                <li>Usługodawca może odstąpić od umowy w przypadku:</li>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Opóźnienia w płatności przekraczającego 14 dni</li>
                  <li>Braku możliwości wykonania usługi z przyczyn niezależnych</li>
                </ul>
              </ol>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">§ 10. Odpowiedzialność</h2>
              <ol className="list-decimal list-inside mb-6 space-y-2">
                <li>Usługodawca odpowiada za wykonanie usługi zgodnie ze sztuką budowlaną i obowiązującymi normami.</li>
                <li>Odpowiedzialność ograniczona jest do wysokości wartości zamówienia.</li>
                <li>Usługodawca nie ponosi odpowiedzialności za szkody pośrednie.</li>
              </ol>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">§ 11. Ochrona danych osobowych</h2>
              <ol className="list-decimal list-inside mb-6 space-y-2">
                <li>Dane osobowe przetwarzane są zgodnie z obowiązującymi przepisami i Polityką Prywatności.</li>
                <li>Szczegółowe informacje dostępne są w <Link href="/privacy-policy" className="text-amber-400 hover:text-amber-300 underline">Polityce Prywatności</Link>.</li>
              </ol>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">§ 12. Postanowienia końcowe</h2>
              <ol className="list-decimal list-inside mb-6 space-y-2">
                <li>W sprawach nieuregulowanych niniejszym Regulaminem mają zastosowanie przepisy Kodeksu Cywilnego.</li>
                <li>Wszelkie spory rozstrzygane będą przez sąd właściwy dla siedziby usługodawcy.</li>
                <li>Usługodawca zastrzega sobie prawo do zmiany Regulaminu z 30-dniowym wypowiedzeniem.</li>
                <li>Regulamin wchodzi w życie z dniem publikacji na stronie internetowej.</li>
              </ol>

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