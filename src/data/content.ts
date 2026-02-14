export const siteData = {
  config: {
    languages: ["fr", "es", "en"],
    primary_color: "#0ea5e9",
    whatsapp_main: "+593985242309",
    whatsapp_secondary: "+593986170582",
    currency: "USD"
  },
  sections: {
    hero: {
      title: {
        fr: "Votre refuge authentique au bord du Quilotoa",
        es: "Tu refugio auténtico al borde del Quilotoa",
        en: "Your Authentic Retreat by the Quilotoa Crater"
      },
      subtitle: {
        fr: "À seulement 8 minutes à pied de la lagune turquoise. Vivez l'accueil d'une famille locale à 3900m d'altitude.",
        es: "A solo 8 minutos a pie de la laguna turquesa. Vive el calor de una familia local a 3900m de altura.",
        en: "Just an 8-minute walk from the turquoise lagoon. Experience local family hospitality at 3,900m."
      },
      cta: {
        fr: "Réserver sur WhatsApp",
        es: "Reservar por WhatsApp",
        en: "Book on WhatsApp"
      },
      image: {
        url: "/images/martitas-house.jpeg",
        alt_seo: {
          fr: "Vue panoramique de la lagune du volcan Quilotoa Équateur",
          es: "Vista panorámica de la laguna del volcán Quilotoa Ecuador",
          en: "Panoramic view of Quilotoa volcano lagoon Ecuador"
        }
      }
    },
    about: {
      title: {
        fr: "L'Esprit de Martita's House",
        es: "El Espíritu de Martita's House",
        en: "The Spirit of Martita's House"
      },
      content: {
        fr: "Géré par Martita, José et Dane, notre hostal est le cœur de la communauté de Quilotoa. Construit en 2018 avec une architecture Art Déco adaptée à la montagne, nous offrons chaleur et confort thermique (parquet, cheminées) aux randonneurs du monde entier.",
        es: "Gestionado por Martita, José y Dane, nuestro hostal es el corazón de la comunidad de Quilotoa. Construido en 2018 con arquitectura Art Déco adaptada a la montaña, ofrecemos calor y confort térmico a los excursionistas del mundo.",
        en: "Managed by Martita, José, and Dane, our hostal is the heart of the Quilotoa community. Built in 2018 with mountain-adapted Art Deco architecture, we provide warmth and thermal comfort to hikers from around the globe."
      },
      features: [
        { fr: "Famille Indigène", es: "Familia Indígena", en: "Indigenous Family" },
        { fr: "8 min du Cratère", es: "8 min del Cráter", en: "8 min from Crater" },
        { fr: "Eau Chaude 24h", es: "Agua Caliente 24h", en: "24h Hot Water" }
      ],
      image: {
        url: "/images/martica-andin_style.jpeg",
        alt_seo: {
          fr: "Intérieur chaleureux style andin Martita's House",
          es: "Interior acogedor estilo andino Martita's House",
          en: "Cozy Andean style interior Martita's House"
        }
      }
    },
    rooms: {
  title: { 
    fr: "Nos Chambres & Suites", 
    es: "Nuestras Habitaciones y Suites", 
    en: "Our Rooms & Suites" 
  },
  items: [
    {
      name: { 
        fr: "Chambre Familiale avec Baignoire", 
        es: "Habitación Familiar con Bañera", 
        en: "Family Room with Bathtub" 
      },
      details: "55m² | 6 Pax",
      price: "72",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600",
      beds: {
        fr: "2 lits simples et 2 grands lits doubles",
        es: "2 camas individuales y 2 camas dobles grandes",
        en: "2 single beds and 2 large double beds"
      },
      amenities: { 
        fr: ["Baignoire", "Vue Montagne/Ville", "Parquet", "Chauffage", "Sèche-linge"], 
        es: ["Bañera", "Vista Montaña/Ciudad", "Parqué", "Calefacción", "Secadora"], 
        en: ["Bathtub", "Mountain/City View", "Parquet", "Heating", "Tumble dryer"] 
      }
    },
    {
      name: { 
        fr: "Chambre Familiale avec Balcon", 
        es: "Habitación Familiar con Balcón", 
        en: "Family Room with Balcony" 
      },
      details: "30m² | 5 Pax",
      price: "65",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600",
      beds: {
        fr: "1 lit double, 1 lit superposé et 1 grand lit double",
        es: "1 cama doble, 1 litera y 1 cama doble grande",
        en: "1 double bed, 1 bunk bed, and 1 large double bed"
      },
      amenities: { 
        fr: ["Balcon", "Vue Montagne", "Parquet", "Chauffage", "Sèche-linge"], 
        es: ["Balcón", "Vista Montaña", "Parqué", "Calefacción", "Secadora"], 
        en: ["Balcony", "Mountain View", "Parquet", "Heating", "Tumble dryer"] 
      }
    },
    {
      name: { 
        fr: "Chambre Triple avec Baignoire & Cheminée", 
        es: "Habitación Triple con Bañera y Chimenea", 
        en: "Triple Room with Bath & Fireplace" 
      },
      details: "25m² | 3 Pax",
      price: "55",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600",
      beds: {
        fr: "1 lit simple et 1 grand lit double",
        es: "1 cama individual y 1 cama doble grande",
        en: "1 single bed and 1 large double bed"
      },
      amenities: { 
        fr: ["Cheminée", "Balcon", "Terrasse/Patio", "Vue Montagne", "Parquet"], 
        es: ["Chimenea", "Balcón", "Terraza/Patio", "Vista Montaña", "Parqué"], 
        en: ["Fireplace", "Balcony", "Terrace/Patio", "Mountain View", "Parquet"] 
      }
    },
    {
      name: { 
        fr: "Chambre Quadruple Économique (PMR)", 
        es: "Habitación Cuádruple Económica (PMR)", 
        en: "Economic Quadruple Room (Accessible)" 
      },
      details: "25m² | 4 Pax",
      price: "60",
      image: "/images/rooms/Quadruple-bedroom.jpg",
      beds: {
        fr: "2 lits simples et 1 grand lit double",
        es: "2 camas individuales y 1 cama doble grande",
        en: "2 single beds and 1 large double bed"
      },
      amenities: { 
        fr: ["Accès Fauteuil Roulant", "Cheminée", "Patio", "Vue Montagne", "Parquet"], 
        es: ["Acceso Silla de Ruedas", "Chimenea", "Patio", "Vista Montaña", "Parqué"], 
        en: ["Wheelchair Accessible", "Fireplace", "Patio", "Mountain View", "Parquet"] 
      }
    },
    {
      name: { 
        fr: "Chambre Double Économique", 
        es: "Habitación Doble Económica", 
        en: "Budget Double Room" 
      },
      details: "15m² | 2 Pax",
      price: "45",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=600",
      beds: {
        fr: "1 grand lit double",
        es: "1 cama doble grande",
        en: "1 large double bed"
      },
      amenities: { 
        fr: ["Terrasse", "Vue Cour Intérieure", "Calme", "Parquet", "Chauffage"], 
        es: ["Terraza", "Vista Patio Interior", "Tranquila", "Parqué", "Calefacción"], 
        en: ["Terrace", "Inner Courtyard View", "Quiet", "Parquet", "Heating"] 
      }
    }
  ]
},
    services: {
      title: { fr: "Plus qu'un simple lit", es: "Más que una simple cama", en: "More than just a bed" },
      items: [
        {
          title: { fr: "Gastronomie", es: "Gastronomía", en: "Dining" },
          desc: { fr: "Petit-déjeuner et dîner inclus (Truite, Quinoa).", es: "Desayuno y cena incluidos (Trucha, Quinua).", en: "Breakfast and dinner included (Trout, Quinoa)." },
          icon: "Utensils"
        },
        {
          title: { fr: "Sun Room", es: "Sala de Sol", en: "Sun Room" },
          desc: { fr: "Une verrière pour se réchauffer naturellement au soleil.", es: "Un salón de cristal para calentarse con el sol.", en: "A glass sunroom to warm up naturally in the sun." },
          icon: "Sun"
        },
        {
          title: { fr: "Transport", es: "Transporte", en: "Transport" },
          desc: { fr: "Navette aéroport Quito et location de vélos.", es: "Traslado aeropuerto Quito y renta de bicis.", en: "Quito airport shuttle and bike rentals." },
          icon: "Car"
        }
      ]
    },
    "testimonials": {
    "title": {
      "fr": "Ce que disent nos visiteurs",
      "es": "Lo que dicen nuestros visitantes",
      "en": "What Our Guests Say"
    },
    "quotes": [
      {
        "user": "Jean-Pierre L.",
        "rating": 5,
        "text": {
          "fr": "La propreté est irréprochable, ce qui est rare dans la région. Les lits sont très confortables et les couvertures bien chaudes pour affronter la nuit andine.",
          "es": "La limpieza es impecable, algo raro en la región. Las camas son muy cómodas y las cobijas muy abrigadas para la noche andina.",
          "en": "Impeccable cleanliness, which is rare in the region. The beds are very comfortable and the blankets are warm enough for the Andean night."
        }
      },
      {
        "user": "Maria G.",
        "rating": 5,
        "text": {
          "fr": "Accueil très familial et chaleureux. On se sent comme à la maison. Martita et sa famille font tout pour nous aider dans l'organisation de nos randonnées.",
          "es": "Atención muy familiar y cálida. Te sientes como en casa. Martita y su familia hacen todo lo posible para ayudarnos con las caminatas.",
          "en": "Very family-oriented and warm welcome. You feel right at home. Martita and her family go above and beyond to help with trekking plans."
        }
      },
      {
        "user": "Oliver Schmidt",
        "rating": 4,
        "text": {
          "fr": "Superbe emplacement à quelques minutes du cratère. Le dîner (truite fraîche) était excellent et copieux après une journée de marche. Pensez à apporter du cash !",
          "es": "Excelente ubicación a pocos minutos del cráter. La cena (trucha fresca) estuvo excelente y abundante. ¡Recuerden traer efectivo!",
          "en": "Superb location just minutes from the crater. Dinner (fresh trout) was excellent and filling after a day of hiking. Remember to bring cash!"
        }
      },
      {
        "user": "Elena S.",
        "rating": 5,
        "text": {
          "fr": "La meilleure connexion Wi-Fi que j'ai eue sur toute la boucle de Quilotoa. La salle commune vitrée est parfaite pour se détendre au soleil l'après-midi.",
          "es": "El mejor Wi-Fi que tuve en toda la zona del Quilotoa. La sala común de vidrio es perfecta para relajarse al sol por la tarde.",
          "en": "Best Wi-Fi connection I had on the entire Quilotoa loop. The glass sunroom is perfect for relaxing in the sun during the afternoon."
        }
      },
      {
        "user": "Carlos M.",
        "rating": 5,
        "text": {
          "fr": "Chambre spacieuse avec une vue magnifique sur le village et les montagnes. Le petit-déjeuner avec jus frais et pancakes est le meilleur départ possible.",
          "es": "Habitación espaciosa con una vista magnífica del pueblo y las montañas. El desayuno con jugo fresco y pancakes es el mejor comienzo posible.",
          "en": "Spacious room with a magnificent view of the village and mountains. Breakfast with fresh juice and pancakes is the best possible start."
        }
      },
      {
        "user": "Sarah J.",
        "rating": 4,
        "text": {
          "fr": "Une hospitalité authentique. Ils nous ont même aidés à transporter nos sacs et nous ont donné des conseils précieux pour descendre à la lagune.",
          "es": "Hospitalidad auténtica. Incluso nos ayudaron con nuestras mochilas y nos dieron consejos valiosos para bajar a la laguna.",
          "en": "Authentic hospitality. They even helped us with our bags and gave us precious tips for hiking down to the lagoon."
        }
      }
    ]
    },
    location: {
      title: { fr: "Nous trouver", es: "Ubicación", en: "Location" },
      address: "Quilotoa Centro, Ecuador",
      cash_warning: {
        fr: "⚠️ CASH ONLY : Pas de distributeur à Quilotoa. Prévoyez vos espèces.",
        es: "⚠️ SOLO EFECTIVO: No hay cajeros en Quilotoa. Traiga efectivo.",
        en: "⚠️ CASH ONLY: No ATM in Quilotoa. Please bring cash."
      },
      image: {
        url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800",
        alt_seo: { fr: "Carte de Quilotoa Équateur", es: "Mapa de Quilotoa Ecuador", en: "Map of Quilotoa Ecuador" }
      }
    }
  }
};
