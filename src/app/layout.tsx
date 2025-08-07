import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { StagewiseToolbar } from "@stagewise/toolbar-next";
import { ReactPlugin } from "@stagewise-plugins/react";
import { cn } from "@/lib/utils";

import Footer from "@/components/layout/Footer";

const figtree = Figtree({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rolet-Mix - Innowacyjne Systemy Osłonowe | Rolety, Żaluzje, Montaż",
  description: "Specjalizujemy się w projektowaniu, produkcji i montażu rolet oraz żaluzji. Wieloletnie doświadczenie, najwyższa jakość, gwarancja. Bezpłatna wycena w 24h.",
  keywords: "rolety, żaluzje, systemy osłonowe, montaż rolet, żaluzje na wymiar, Otfinów, małopolskie",
  authors: [{ name: "Rolet-Mix" }],
  creator: "Rolet-Mix",
  publisher: "Rolet-Mix",
  openGraph: {
    title: "Rolet-Mix - Innowacyjne Systemy Osłonowe",
    description: "Projektujemy, produkujemy i montujemy najwyższej jakości rolety i żaluzje.",
    url: "https://roletmix.pl",
    siteName: "Rolet-Mix",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={figtree.className}>
      <body className={cn("bg-background text-foreground")}>
        <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
