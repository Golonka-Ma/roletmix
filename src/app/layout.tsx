import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Footer from "@/components/layout/Footer";
import { localBusinessSchema, organizationSchema, breadcrumbSchema, faqSchema } from "@/lib/structuredData";

const figtree = Figtree({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.roletmix.pl"),
  title: {
    default: "Rolety Żabno, Dąbrowa Tarnowska | Żaluzje na Wymiar - Rolet-Mix",
    template: "%s | Rolet-Mix"
  },
  description: "Profesjonalne rolety Żabno i Dąbrowa Tarnowska ✓ Żaluzje na wymiar ✓ Produkcja i montaż systemów osłonowych ✓ 15 lat doświadczenia ✓ Bezpłatna wycena w 24h ✓ Gwarancja jakości",
  keywords: [
    // Główne słowa kluczowe lokalne
    "rolety żabno",
    "żaluzje żabno", 
    "rolety dąbrowa tarnowska",
    "żaluzje dąbrowa tarnowska",
    "rolety na wymiar",
    
    // Rozszerzone lokalne
    "rolety zewnętrzne żabno",
    "żaluzje na wymiar żabno",
    "montaż rolet żabno",
    "rolety zewnętrzne dąbrowa tarnowska",
    "żaluzje na wymiar dąbrowa tarnowska",
    "montaż rolet dąbrowa tarnowska",
    
    // Produkty
    "rolety zewnętrzne na wymiar",
    "żaluzje poziome",
    "żaluzje pionowe",
    "żaluzje plisowane",
    "żaluzje dachowe",
    "moskitiery",
    
    // Usługi
    "producent rolet",
    "montaż rolet",
    "serwis rolet",
    "naprawa rolet",
    
    // Lokalizacje
    "rolety otfinów",
    "rolety tarnów",
    "żaluzje małopolskie",
    "systemy osłonowe małopolska"
  ],
  authors: [{ name: "Rolet-Mix" }],
  creator: "Rolet-Mix",
  publisher: "Rolet-Mix",
  
  alternates: {
    canonical: "https://www.roletmix.pl",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://www.roletmix.pl",
    siteName: "Rolet-Mix",
    title: "Rolety Żabno, Dąbrowa Tarnowska | Żaluzje na Wymiar - Rolet-Mix",
    description: "Profesjonalne rolety i żaluzje na wymiar w Żabnie i Dąbrowie Tarnowskiej. Produkcja, montaż i serwis. 15 lat doświadczenia. Bezpłatna wycena w 24h.",
    images: [
      {
        url: "/images/logo-light.svg",
        width: 1200,
        height: 630,
        alt: "Rolet-Mix - Rolety i Żaluzje Żabno"
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Rolety Żabno, Dąbrowa Tarnowska | Żaluzje na Wymiar",
    description: "Profesjonalne rolety i żaluzje na wymiar. Produkcja, montaż i serwis w Żabnie i okolicach.",
  },
  
  verification: {
    google: "verification_token", // Dodaj swój token po weryfikacji w Google Search Console
  },
  
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={figtree.className}>
      <head>
        {/* Structured Data - LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        {/* Structured Data - Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
        {/* Structured Data - FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
      </head>
      <body className={cn("bg-background text-foreground")}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
