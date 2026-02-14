import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, DollarSign } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteData } from '../data/content';

export function Rooms() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { rooms } = siteData.sections;

  const handleBookRoom = (roomName: string) => {
    const message = encodeURIComponent(
      language === 'fr'
        ? `Bonjour Martita, je souhaite réserver la ${roomName}.`
        : language === 'es'
        ? `Hola Martita, quisiera reservar la ${roomName}.`
        : `Hello Martita, I would like to book the ${roomName}.`
    );
    window.open(`https://wa.me/${siteData.config.whatsapp_main}?text=${message}`, '_blank');
  };

  return (
    <section id="rooms" ref={ref} className="py-20 bg-stone">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-lagoon mb-4">
            {rooms.title[language]}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.items.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name[language]}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-earth">
                  {room.name[language]}
                </h3>
                <p className="text-gray-600 mb-4 flex items-center gap-2">
                  <Users size={18} />
                  {room.details}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities[language].map((amenity, i) => (
                    <span
                      key={i}
                      className="bg-stone text-earth px-3 py-1 rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="text-lagoon" size={24} />
                    <span className="text-3xl font-bold text-lagoon">{room.price}</span>
                    <span className="text-gray-600">
                      {language === 'fr' ? '/nuit' : language === 'es' ? '/noche' : '/night'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleBookRoom(room.name[language])}
                  className="w-full mt-4 bg-warmth hover:bg-warmth/90 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  {language === 'fr'
                    ? 'Réserver'
                    : language === 'es'
                    ? 'Reservar'
                    : 'Book Now'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
