import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Stary URL oferta
      {
        source: '/oferta',
        destination: '/#products',
        permanent: true, // 301 redirect
      },
      
      // Fix: /contact → /#contact
      // Google znalazł wiele wersji (http/https, www/bez www)
      {
        source: '/contact',
        destination: '/#contact',
        permanent: true,
      },
      
      // Fix: /o-firmie → strona główna (sekcja About/Trust)
      {
        source: '/o-firmie',
        destination: '/#about',
        permanent: true,
      },
      
      // Fix: /galeria-zdjec → /#portfolio
      // Obsługuje też paginację (?page=1, ?page=2, etc.)
      {
        source: '/galeria-zdjec',
        destination: '/#portfolio',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
