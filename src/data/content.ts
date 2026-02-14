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
          capacity: 6,
          price: "72",
          image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600",
          beds: {
            fr: "2 lits simples et 2 grands lits doubles (4 lits au total)",
            es: "2 camas individuales y 2 camas dobles grandes (4 camas en total)",
            en: "2 single beds and 2 large double beds (4 beds total)"
          },
          description: {
            fr: "La spacieuse chambre familiale dispose d'une armoire et d'un sèche-linge, ainsi que d'une salle de bains privative avec baignoire. Elle offre du parquet, le chauffage et une vue sur la montagne.",
            es: "La espaciosa habitación familiar ofrece armario y secadora, así como baño privado con bañera. Proporciona suelos de parqué, calefacción y vistas a la montaña.",
            en: "The spacious family room offers a wardrobe and tumble dryer, as well as a private bathroom boasting a bath. The family room provides parquet floors, heating and mountain views."
          },
          bathroom: {
            fr: ["Articles de toilette gratuits", "Toilettes", "Baignoire ou douche", "Serviettes", "Papier toilette"],
            es: ["Artículos de aseo gratuitos", "Inodoro", "Bañera o ducha", "Toallas", "Papel higiénico"],
            en: ["Free toiletries", "Toilet", "Bath or shower", "Towels", "Toilet paper"]
          },
          views: {
            fr: ["Vue sur la montagne", "Vue sur la ville"],
            es: ["Vista a la montaña", "Vista a la ciudad"],
            en: ["Mountain view", "City view"]
          },
          amenities: { 
            fr: ["Parquet", "Prise près du lit", "Chauffage", "Sèche-linge", "Armoire ou penderie", "Étendoir", "Baignoire", "Vue Montagne/Ville"], 
            es: ["Parqué", "Enchufe cerca de la cama", "Calefacción", "Secadora", "Armario", "Tendedero", "Bañera", "Vista Montaña/Ciudad"], 
            en: ["Parquet flooring", "Socket near the bed", "Heating", "Tumble dryer", "Wardrobe", "Clothes rack", "Bathtub", "Mountain/City View"] 
          },
          rating: "8.5",
          reviews: "32",
          smoking: {
            fr: "Non-fumeurs",
            es: "No fumadores",
            en: "Non-smoking"
          }
        },
        {
          name: { 
            fr: "Chambre Familiale avec Balcon", 
            es: "Habitación Familiar con Balcón", 
            en: "Family Room with Balcony" 
          },
          details: "30m² | 5 Pax",
          capacity: 5,
          price: "65",
          image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600",
          beds: {
            fr: "1 lit double, 1 lit superposé et 1 grand lit double (3 lits au total)",
            es: "1 cama doble, 1 litera y 1 cama doble grande (3 camas en total)",
            en: "1 double bed, 1 bunk bed, and 1 large double bed (3 beds total)"
          },
          description: {
            fr: "La chambre familiale dispose d'une armoire, d'un sèche-linge, d'un balcon avec vue sur les montagnes ainsi que d'une salle de bains privative avec baignoire.",
            es: "La habitación familiar cuenta con armario, secadora, balcón con vistas a la montaña y baño privado con bañera.",
            en: "The family room features a wardrobe, tumble dryer, a balcony with mountain views as well as a private bathroom boasting a bath."
          },
          bathroom: {
            fr: ["Articles de toilette gratuits", "Toilettes", "Baignoire ou douche", "Serviettes", "Papier toilette"],
            es: ["Artículos de aseo gratuitos", "Inodoro", "Bañera o ducha", "Toallas", "Papel higiénico"],
            en: ["Free toiletries", "Toilet", "Bath or shower", "Towels", "Toilet paper"]
          },
          views: {
            fr: ["Vue sur la montagne", "Vue sur la ville"],
            es: ["Vista a la montaña", "Vista a la ciudad"],
            en: ["Mountain view", "City view"]
          },
          amenities: { 
            fr: ["Balcon", "Parquet", "Prise près du lit", "Chauffage", "Sèche-linge", "Armoire ou penderie", "Étendoir"],
            es: ["Balcón", "Parqué", "Enchufe cerca de la cama", "Calefacción", "Secadora", "Armario", "Tendedero"],
            en: ["Balcony", "Parquet flooring", "Socket near the bed", "Heating", "Tumble dryer", "Wardrobe", "Clothes rack"] 
          },
          rating: "8.5",
          reviews: "32",
          smoking: {
            fr: "Non-fumeurs",
            es: "No fumadores",
            en: "Non-smoking"
          }
        },
        {
          name: { 
            fr: "Chambre Triple avec Baignoire & Cheminée", 
            es: "Habitación Triple con Bañera y Chimenea", 
            en: "Triple Room with Bath & Fireplace" 
          },
          details: "25m² | 3 Pax",
          capacity: 3,
          price: "55",
          image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600",
          beds: {
            fr: "1 lit simple et 1 grand lit double (2 lits au total)",
            es: "1 cama individual y 1 cama doble grande (2 camas en total)",
            en: "1 single bed and 1 large double bed (2 beds total)"
          },
          description: {
            fr: "Cette chambre triple dispose d'une cheminée. Elle offre une armoire, un sèche-linge, une terrasse avec vue sur les montagnes ainsi qu'une salle de bains privative avec baignoire.",
            es: "Esta habitación triple cuenta con chimenea. Ofrece armario, secadora, terraza con vistas a la montaña y baño privado con bañera.",
            en: "This triple room features a fireplace. The triple room provides a wardrobe, tumble dryer, a terrace with mountain views as well as a private bathroom featuring a bath."
          },
          bathroom: {
            fr: ["Articles de toilette gratuits", "Toilettes", "Baignoire ou douche", "Serviettes", "Papier toilette"],
            es: ["Artículos de aseo gratuitos", "Inodoro", "Bañera o ducha", "Toallas", "Papel higiénico"],
            en: ["Free toiletries", "Toilet", "Bath or shower", "Towels", "Toilet paper"]
          },
          views: {
            fr: ["Vue sur la montagne", "Vue sur la ville"],
            es: ["Vista a la montaña", "Vista a la ciudad"],
            en: ["Mountain view", "City view"]
          },
          amenities: { 
            fr: ["Cheminée", "Balcon", "Terrasse", "Patio", "Parquet", "Prise près du lit", "Chauffage", "Sèche-linge", "Armoire ou penderie", "Étendoir"],
            es: ["Chimenea", "Balcón", "Terraza", "Patio", "Parqué", "Enchufe cerca de la cama", "Calefacción", "Secadora", "Armario", "Tendedero"],
            en: ["Fireplace", "Balcony", "Terrace", "Patio", "Parquet flooring", "Socket near the bed", "Heating", "Tumble dryer", "Wardrobe", "Clothes rack"] 
          },
          rating: "8.5",
          reviews: "32",
          smoking: {
            fr: "Non-fumeurs",
            es: "No fumadores",
            en: "Non-smoking"
          }
        },
        {
          name: { 
            fr: "Chambre Quadruple Économique (PMR)", 
            es: "Habitación Cuádruple Económica (PMR)", 
            en: "Economic Quadruple Room (Accessible)" 
          },
          details: "25m² | 4 Pax",
          capacity: 4,
          price: "60",
          image: "/images/rooms/Quadruple-bedroom.jpg",
          beds: {
            fr: "2 lits simples et 1 grand lit double (3 lits au total)",
            es: "2 camas individuales y 1 cama doble grande (3 camas en total)",
            en: "2 single beds and 1 large double bed (3 beds total)"
          },
          description: {
            fr: "La cheminée est l'élément remarquable de cette chambre quadruple. Avec articles de toilette gratuits, cette chambre quadruple comprend une salle de bains privative avec baignoire. Parmi les équipements : armoire, sèche-linge, parquet, patio et vue sur la montagne. Entièrement accessible en fauteuil roulant.",
            es: "La chimenea es la característica destacada de esta habitación cuádruple. Con artículos de aseo gratuitos, esta habitación incluye baño privado con bañera. Entre los equipamientos: armario, secadora, parqué, patio y vistas a la montaña. Totalmente accesible en silla de ruedas.",
            en: "The fireplace is the standout feature of this quadruple room. Featuring free toiletries, this quadruple room includes a private bathroom with a bath. Among the room amenities are a wardrobe, tumble dryer, parquet floors as well as a patio and mountain views. Fully wheelchair accessible."
          },
          bathroom: {
            fr: ["Articles de toilette gratuits", "Toilettes", "Baignoire ou douche", "Serviettes", "Papier toilette"],
            es: ["Artículos de aseo gratuitos", "Inodoro", "Bañera o ducha", "Toallas", "Papel higiénico"],
            en: ["Free toiletries", "Toilet", "Bath or shower", "Towels", "Toilet paper"]
          },
          views: {
            fr: ["Vue sur la montagne", "Vue sur la ville"],
            es: ["Vista a la montaña", "Vista a la ciudad"],
            en: ["Mountain view", "City view"]
          },
          amenities: { 
            fr: ["Accès Fauteuil Roulant", "Cheminée", "Patio", "Parquet", "Prise près du lit", "Chauffage", "Sèche-linge", "Armoire ou penderie", "Étendoir"],
            es: ["Acceso Silla de Ruedas", "Chimenea", "Patio", "Parqué", "Enchufe cerca de la cama", "Calefacción", "Secadora", "Armario", "Tendedero"],
            en: ["Wheelchair Accessible", "Fireplace", "Patio", "Parquet flooring", "Socket near the bed", "Heating", "Tumble dryer", "Wardrobe", "Clothes rack"] 
          },
          rating: "8.5",
          reviews: "32",
          smoking: {
            fr: "Non-fumeurs",
            es: "No fumadores",
            en: "Non-smoking"
          }
        },
        {
          name: { 
            fr: "Chambre Double Économique", 
            es: "Habitación Doble Económica", 
            en: "Budget Double Room" 
          },
          details: "15m² | 2 Pax",
          capacity: 2,
          price: "45",
          image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=600",
          beds: {
            fr: "1 grand lit double (1 lit au total)",
            es: "1 cama doble grande (1 cama en total)",
            en: "1 large double bed (1 bed total)"
          },
          description: {
            fr: "La chambre double offre une armoire, un sèche-linge, une terrasse avec vue sur la cour intérieure ainsi qu'une salle de bains privative avec baignoire.",
            es: "La habitación doble ofrece armario, secadora, terraza con vista al patio interior y baño privado con bañera.",
            en: "The double room offers a wardrobe, tumble dryer, a terrace with an inner courtyard view as well as a private bathroom featuring a bath."
          },
          bathroom: {
            fr: ["Articles de toilette gratuits", "Toilettes", "Baignoire ou douche", "Serviettes", "Papier toilette"],
            es: ["Artículos de aseo gratuitos", "Inodoro", "Bañera o ducha", "Toallas", "Papel higiénico"],
            en: ["Free toiletries", "Toilet", "Bath or shower", "Towels", "Toilet paper"]
          },
          views: {
            fr: ["Vue sur une cour intérieure"],
            es: ["Vista al patio interior"],
            en: ["Inner courtyard view"]
          },
          amenities: { 
            fr: ["Terrasse", "Parquet", "Prise près du lit", "Chauffage", "Sèche-linge", "Armoire ou penderie", "Étendoir", "Vue Cour Intérieure", "Calme"],
            es: ["Terraza", "Parqué", "Enchufe cerca de la cama", "Calefacción", "Secadora", "Armario", "Tendedero", "Vista Patio Interior", "Tranquila"],
            en: ["Terrace", "Parquet flooring", "Socket near the bed", "Heating", "Tumble dryer", "Wardrobe", "Clothes rack", "Inner Courtyard View", "Quiet"] 
          },
          rating: "8.5",
          reviews: "32",
          smoking: {
            fr: "Non-fumeurs",
            es: "No fumadores",
            en: "Non-smoking"
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
    testimonials: {
      title: {
        fr: "Ce que disent nos visiteurs",
        es: "Lo que dicen nuestros visitantes",
        en: "What Our Guests Say"
      },
      quotes: [
        {
          user: "Jean-Pierre L.",
          rating: 5,
          text: {
            fr: "La propreté est irréprochable, ce qui est rare dans la région. Les lits sont très confortables et les couvertures bien chaudes pour affronter la nuit andine.",
            es: "La limpieza es impecable, algo raro en la región. Las camas son muy cómodas y las cobijas muy abrigadas para la noche andina.",
            en: "Impeccable cleanliness, which is rare in the region. The beds are very comfortable and the blankets are warm enough for the Andean night."
          }
        },
        {
          user: "Maria G.",
          rating: 5,
          text: {
            fr: "Accueil très familial et chaleureux. On se sent comme à la maison. Martita et sa famille font tout pour nous aider dans l'organisation de nos randonnées.",
            es: "Atención muy familiar y cálida. Te sientes como en casa. Martita y su familia hacen todo lo posible para ayudarnos con las caminatas.",
            en: "Very family-oriented and warm welcome. You feel right at home. Martita and her family go above and beyond to help with trekking plans."
          }
        },
        {
          user: "Oliver Schmidt",
          rating: 4,
          text: {
            fr: "Superbe emplacement à quelques minutes du cratère. Le dîner (truite fraîche) était excellent et copieux après une journée de marche. Pensez à apporter du cash !",
            es: "Excelente ubicación a pocos minutos del cráter. La cena (trucha fresca) estuvo excelente y abundante. ¡Recuerden traer efectivo!",
            en: "Superb location just minutes from the crater. Dinner (fresh trout) was excellent and filling after a day of hiking. Remember to bring cash!"
          }
        },
        {
          user: "Elena S.",
          rating: 5,
          text: {
            fr: "La meilleure connexion Wi-Fi que j'ai eue sur toute la boucle de Quilotoa. La salle commune vitrée est parfaite pour se détendre au soleil l'après-midi.",
            es: "El mejor Wi-Fi que tuve en toda la zona del Quilotoa. La sala común de vidrio es perfecta para relajarse al sol por la tarde.",
            en: "Best Wi-Fi connection I had on the entire Quilotoa loop. The glass sunroom is perfect for relaxing in the sun during the afternoon."
          }
        },
        {
          user: "Carlos M.",
          rating: 5,
          text: {
            fr: "Chambre spacieuse avec une vue magnifique sur le village et les montagnes. Le petit-déjeuner avec jus frais et pancakes est le meilleur départ possible.",
            es: "Habitación espaciosa con una vista magnífica del pueblo y las montañas. El desayuno con jugo fresco y pancakes es el mejor comienzo posible.",
            en: "Spacious room with a magnificent view of the village and mountains. Breakfast with fresh juice and pancakes is the best possible start."
          }
        },
        {
          user: "Sarah J.",
          rating: 4,
          text: {
            fr: "Une hospitalité authentique. Ils nous ont même aidés à transporter nos sacs et nous ont donné des conseils précieux pour descendre à la lagune.",
            es: "Hospitalidad auténtica. Incluso nos ayudaron con nuestras mochilas y nos dieron consejos valiosos para bajar a la laguna.",
            en: "Authentic hospitality. They even helped us with our bags and gave us precious tips for hiking down to the lagoon."
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