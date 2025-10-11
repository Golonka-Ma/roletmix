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
          "@type": "Service",
          "name": "Montaż rolet i żaluzji",
          "description": "Profesjonalny montaż systemów osłonowych w Żabnie i okolicach",
          "provider": {
            "@type": "Organization",
            "name": "Rolet-Mix"
          },
          "areaServed": {
            "@type": "State",
            "name": "Małopolskie"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Serwis i naprawa",
          "description": "Serwis i naprawy rolet oraz żaluzji",
          "provider": {
            "@type": "Organization",
            "name": "Rolet-Mix"
          },
          "areaServed": {
            "@type": "State",
            "name": "Małopolskie"
          }
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

// Service Schemas - Usługi produkcji i montażu na wymiar (BEZ KONKRETNYCH CEN)
// Dla firm usługowych gdzie cena ustalana indywidualnie
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Usługi Produkcji Rolet i Żaluzji na Wymiar",
  "description": "Profesjonalna produkcja i montaż systemów osłonowych w Żabnie i Dąbrowie Tarnowskiej",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "@id": "https://www.roletmix.pl/#rolety-tekstylne",
        "name": "Rolety Tekstylne na Wymiar",
        "description": "Kompletna gama rolet tekstylnych: dzień/noc, materiałowe, zaciemniające i wolnowiszące. Każda roleta produkowana według indywidualnych wymiarów klienta.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Rolet-Mix",
          "image": "https://www.roletmix.pl/images/logo-light.svg",
          "telephone": "+48-721-986-278",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rynek 21",
            "addressLocality": "Żabno",
            "addressRegion": "Małopolskie",
            "postalCode": "33-240",
            "addressCountry": "PL"
          }
        },
        "image": [
          "https://www.roletmix.pl/images/textile-blinds.jpg",
          "https://www.roletmix.pl/images/gallery/textile-blinds-1.jpg",
          "https://www.roletmix.pl/images/gallery/textile-blinds-2.jpg",
          "https://www.roletmix.pl/images/gallery/textile-blinds-3.jpg"
        ],
        "serviceType": "Produkcja i montaż rolet tekstylnych",
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
            "@type": "State",
            "name": "Małopolskie"
          }
        ],
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://www.roletmix.pl/#contact",
          "servicePhone": "+48-721-986-278"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "@id": "https://www.roletmix.pl/#rolety-zewnetrzne",
        "name": "Rolety Zewnętrzne Antywłamaniowe",
        "description": "Profesjonalne rolety zewnętrzne i bramy garażowe z pełną automatyzacją. Najwyższy poziom ochrony i izolacji termicznej. Produkcja na wymiar.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Rolet-Mix",
          "image": "https://www.roletmix.pl/images/logo-light.svg",
          "telephone": "+48-721-986-278",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rynek 21",
            "addressLocality": "Żabno",
            "addressRegion": "Małopolskie",
            "postalCode": "33-240",
            "addressCountry": "PL"
          }
        },
        "image": [
          "https://www.roletmix.pl/images/external-shutters.jpg",
          "https://www.roletmix.pl/images/gallery/external-shutters-1.jpg",
          "https://www.roletmix.pl/images/gallery/external-shutters-2.jpg",
          "https://www.roletmix.pl/images/gallery/external-shutters-3.jpg"
        ],
        "serviceType": "Produkcja i montaż rolet zewnętrznych",
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
            "@type": "State",
            "name": "Małopolskie"
          }
        ],
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://www.roletmix.pl/#contact",
          "servicePhone": "+48-721-986-278"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "@id": "https://www.roletmix.pl/#rolety-dachowe",
        "name": "Rolety Dachowe na Wymiar",
        "description": "Specjalistyczne rolety do okien dachowych zapewniające kontrolę światła i temperatury. Doskonałe rozwiązania dla poddaszy produkowane na wymiar.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Rolet-Mix",
          "image": "https://www.roletmix.pl/images/logo-light.svg",
          "telephone": "+48-721-986-278",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rynek 21",
            "addressLocality": "Żabno",
            "addressRegion": "Małopolskie",
            "postalCode": "33-240",
            "addressCountry": "PL"
          }
        },
        "image": [
          "https://www.roletmix.pl/images/roof-blinds.jpg",
          "https://www.roletmix.pl/images/gallery/roof-blinds-1.jpg",
          "https://www.roletmix.pl/images/gallery/roof-blinds-2.jpg",
          "https://www.roletmix.pl/images/gallery/roof-blinds-3.jpg"
        ],
        "serviceType": "Produkcja i montaż rolet dachowych",
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
            "@type": "State",
            "name": "Małopolskie"
          }
        ],
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://www.roletmix.pl/#contact",
          "servicePhone": "+48-721-986-278"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "@id": "https://www.roletmix.pl/#zaluzje-poziome",
        "name": "Żaluzje Poziome Drewniane i Aluminiowe",
        "description": "Drewniane i aluminiowe żaluzje poziome na wymiar. Ponadczasowa elegancja w każdym wnętrzu. Produkcja według indywidualnych wymiarów.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Rolet-Mix",
          "image": "https://www.roletmix.pl/images/logo-light.svg",
          "telephone": "+48-721-986-278",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rynek 21",
            "addressLocality": "Żabno",
            "addressRegion": "Małopolskie",
            "postalCode": "33-240",
            "addressCountry": "PL"
          }
        },
        "image": [
          "https://www.roletmix.pl/images/horizontal-blinds.jpg",
          "https://www.roletmix.pl/images/gallery/horizontal-blinds-1.jpg",
          "https://www.roletmix.pl/images/gallery/horizontal-blinds-2.jpg",
          "https://www.roletmix.pl/images/gallery/horizontal-blinds-3.jpg"
        ],
        "serviceType": "Produkcja i montaż żaluzji poziomych",
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
            "@type": "State",
            "name": "Małopolskie"
          }
        ],
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://www.roletmix.pl/#contact",
          "servicePhone": "+48-721-986-278"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "@id": "https://www.roletmix.pl/#zaluzje-pionowe",
        "name": "Żaluzje Pionowe (Verticale) na Wymiar",
        "description": "Klasyczne żaluzje pionowe idealne do dużych przeszkleń w biurach i domach. Eleganckie i praktyczne rozwiązanie produkowane według wymiarów klienta.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Rolet-Mix",
          "image": "https://www.roletmix.pl/images/logo-light.svg",
          "telephone": "+48-721-986-278",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rynek 21",
            "addressLocality": "Żabno",
            "addressRegion": "Małopolskie",
            "postalCode": "33-240",
            "addressCountry": "PL"
          }
        },
        "image": [
          "https://www.roletmix.pl/images/vertical-blinds.jpg",
          "https://www.roletmix.pl/images/gallery/vertical-blinds-1.jpg",
          "https://www.roletmix.pl/images/gallery/vertical-blinds-2.jpg",
          "https://www.roletmix.pl/images/gallery/vertical-blinds-3.jpg"
        ],
        "serviceType": "Produkcja i montaż żaluzji pionowych",
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
            "@type": "State",
            "name": "Małopolskie"
          }
        ],
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://www.roletmix.pl/#contact",
          "servicePhone": "+48-721-986-278"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Service",
        "@id": "https://www.roletmix.pl/#moskitiery",
        "name": "Moskitiery na Wymiar",
        "description": "Pełna gama moskitier chroniąca przed owadami bez kompromisów w designie. Skuteczna ochrona dla Twojego domu. Produkcja na wymiar.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Rolet-Mix",
          "image": "https://www.roletmix.pl/images/logo-light.svg",
          "telephone": "+48-721-986-278",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rynek 21",
            "addressLocality": "Żabno",
            "addressRegion": "Małopolskie",
            "postalCode": "33-240",
            "addressCountry": "PL"
          }
        },
        "image": [
          "https://www.roletmix.pl/images/mosquito-nets.jpg",
          "https://www.roletmix.pl/images/gallery/mosquito-nets-1.jpg",
          "https://www.roletmix.pl/images/gallery/mosquito-nets-2.jpg",
          "https://www.roletmix.pl/images/gallery/mosquito-nets-3.jpg"
        ],
        "serviceType": "Produkcja i montaż moskitier",
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
            "@type": "State",
            "name": "Małopolskie"
          }
        ],
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://www.roletmix.pl/#contact",
          "servicePhone": "+48-721-986-278"
        }
      }
    }
  ]
};

