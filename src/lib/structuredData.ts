// Structured Data (JSON-LD) for SEO

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.roletmix.pl",
  "name": "Rolet-Mix",
  "description": "Profesjonalne rolety i żaluzje na wymiar w Żabnie i Dąbrowie Tarnowskiej. Produkcja, montaż i serwis systemów osłonowych najwyższej jakości.",
  "url": "https://www.roletmix.pl",
  "telephone": "+48-721-986-278",
  "email": "biuro@roletmix.pl",
  "priceRange": "$$",
  "image": "https://www.roletmix.pl/images/logo-light.svg",
  "logo": "https://www.roletmix.pl/images/logo-light.svg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rynek 21",
    "addressLocality": "Żabno",
    "addressRegion": "Małopolskie",
    "postalCode": "33-240",
    "addressCountry": "PL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.0831",
    "longitude": "20.8997"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Żabno"
    },
    {
      "@type": "City",
      "name": "Dąbrowa Tarnowska"
    },
    {
      "@type": "City",
      "name": "Tarnów"
    },
    {
      "@type": "State",
      "name": "Małopolskie"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/rolet.mix",
    "https://www.instagram.com/roletmix"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Produkty i Usługi",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Rolety zewnętrzne na wymiar",
          "description": "Profesjonalne rolety zewnętrzne produkowane na wymiar dla Żabna i Dąbrowy Tarnowskiej",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "PLN",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Rolet-Mix"
            }
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Żaluzje na wymiar",
          "description": "Żaluzje poziome, pionowe, plisowane i dachowe na wymiar",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "PLN",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Rolet-Mix"
            }
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Moskitiery",
          "description": "Siatki przeciw owadom do okien i drzwi",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "PLN",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Rolet-Mix"
            }
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Montaż rolet i żaluzji",
          "description": "Profesjonalny montaż systemów osłonowych w Żabnie i okolicach"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Serwis i naprawa",
          "description": "Serwis i naprawy rolet oraz żaluzji"
        }
      }
    ]
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rolet-Mix",
  "url": "https://www.roletmix.pl",
  "logo": "https://www.roletmix.pl/images/logo-light.svg",
  "description": "Wiodący producent rolet i żaluzji na wymiar w Żabnie i Dąbrowie Tarnowskiej",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rynek 21",
    "addressLocality": "Żabno",
    "addressRegion": "Małopolskie",
    "postalCode": "33-240",
    "addressCountry": "PL"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+48-721-986-278",
    "contactType": "customer service",
    "areaServed": "PL",
    "availableLanguage": "Polish"
  }
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Strona główna",
      "item": "https://www.roletmix.pl"
    }
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Czy oferujecie rolety na wymiar w Żabnie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak, Rolet-Mix specjalizuje się w produkcji rolet zewnętrznych na wymiar w Żabnie i okolicach. Oferujemy bezpłatny pomiar, profesjonalny montaż i pełną gwarancję na nasze produkty."
      }
    },
    {
      "@type": "Question",
      "name": "Jakie żaluzje oferujecie w Dąbrowie Tarnowskiej?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "W Dąbrowie Tarnowskiej oferujemy pełen asortyment żaluzji na wymiar: żaluzje poziome, pionowe, plisowane oraz dachowe. Wszystkie produkty są produkowane według indywidualnych wymiarów klienta."
      }
    },
    {
      "@type": "Question",
      "name": "Ile kosztuje montaż rolet w Żabnie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Koszt montażu rolet zależy od rodzaju i wielkości produktu. Oferujemy bezpłatną wycenę w ciągu 24h oraz konkurencyjne ceny montażu. Skontaktuj się z nami, aby otrzymać indywidualną ofertę."
      }
    },
    {
      "@type": "Question",
      "name": "Jak długo trwa realizacja zamówienia rolet na wymiar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standardowy czas realizacji zamówienia rolet i żaluzji na wymiar wynosi od 7 do 14 dni roboczych. W pilnych przypadkach możemy skrócić ten czas - skontaktuj się z nami aby omówić możliwości."
      }
    },
    {
      "@type": "Question",
      "name": "Czy serwisujecie rolety w Żabnie i Dąbrowie Tarnowskiej?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak, oferujemy kompleksowy serwis i naprawy rolet oraz żaluzji w Żabnie, Dąbrowie Tarnowskiej i całym regionie. Nasz serwis obejmuje zarówno produkty własne, jak i innych producentów."
      }
    },
    {
      "@type": "Question",
      "name": "Jaką gwarancję oferujecie na rolety i żaluzje?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na wszystkie nasze produkty oferujemy gwarancję producenta. Dokładny okres gwarancji zależy od rodzaju produktu i zostanie określony w umowie. Zapewniamy również serwis pogwarancyjny."
      }
    }
  ]
};

