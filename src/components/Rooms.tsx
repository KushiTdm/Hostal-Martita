import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Users, DollarSign, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteData } from '../data/content';

export function Rooms() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { rooms } = siteData.sections;
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % rooms.items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + rooms.items.length) % rooms.items.length);
  };

  const getVisibleRooms = () => {
    const rooms3 = [];
    for (let i = 0; i < 3; i++) {
      rooms3.push(rooms.items[(currentIndex + i) % rooms.items.length]);
    }
    return rooms3;
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

        {/* Desktop Carousel - 3 cards */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-3 gap-8">
              {getVisibleRooms().map((room, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedRoom(rooms.items.indexOf(room))}
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
                      {room.amenities[language].slice(0, 3).map((amenity, i) => (
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
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookRoom(room.name[language]);
                      }}
                      className="w-full mt-4 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 rounded-lg font-semibold transition-colors"
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

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={24} className="text-lagoon" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={24} className="text-lagoon" />
          </button>
        </div>

        {/* Mobile Carousel - 1 card */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedRoom(currentIndex)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={rooms.items[currentIndex].image}
                  alt={rooms.items[currentIndex].name[language]}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-earth">
                  {rooms.items[currentIndex].name[language]}
                </h3>
                <p className="text-gray-600 mb-4 flex items-center gap-2">
                  <Users size={18} />
                  {rooms.items[currentIndex].details}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {rooms.items[currentIndex].amenities[language].slice(0, 3).map((amenity, i) => (
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
                    <span className="text-3xl font-bold text-lagoon">{rooms.items[currentIndex].price}</span>
                    <span className="text-gray-600">
                      {language === 'fr' ? '/nuit' : language === 'es' ? '/noche' : '/night'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookRoom(rooms.items[currentIndex].name[language]);
                  }}
                  className="w-full mt-4 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  {language === 'fr'
                    ? 'Réserver'
                    : language === 'es'
                    ? 'Reservar'
                    : 'Book Now'}
                </button>
              </div>
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronLeft size={20} className="text-lagoon" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronRight size={20} className="text-lagoon" />
          </button>
        </div>

        {/* Room Modal */}
        <AnimatePresence>
          {selectedRoom !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedRoom(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={rooms.items[selectedRoom].image}
                    alt={rooms.items[selectedRoom].name[language]}
                    className="w-full h-80 object-cover"
                  />
                  <button
                    onClick={() => setSelectedRoom(null)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                  >
                    <X size={24} className="text-earth" />
                  </button>
                </div>

                <div className="p-8">
                  <h2 className="text-4xl font-bold mb-4 text-earth">
                    {rooms.items[selectedRoom].name[language]}
                  </h2>

                  <div className="flex items-center gap-6 mb-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users size={20} />
                      <span>{rooms.items[selectedRoom].details}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="text-lagoon" size={28} />
                      <span className="text-3xl font-bold text-lagoon">
                        {rooms.items[selectedRoom].price}
                      </span>
                      <span className="text-gray-600">
                        {language === 'fr' ? '/nuit' : language === 'es' ? '/noche' : '/night'}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3 text-earth">
                      {language === 'fr' ? 'Configuration des lits' : language === 'es' ? 'Configuración de camas' : 'Bed Configuration'}
                    </h3>
                    <p className="text-gray-700">{rooms.items[selectedRoom].beds[language]}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-3 text-earth">
                      {language === 'fr' ? 'Équipements' : language === 'es' ? 'Comodidades' : 'Amenities'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {rooms.items[selectedRoom].amenities[language].map((amenity, i) => (
                        <span
                          key={i}
                          className="bg-stone text-earth px-4 py-2 rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookRoom(rooms.items[selectedRoom].name[language])}
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-4 rounded-lg font-semibold text-lg transition-colors"
                  >
                    {language === 'fr'
                      ? 'Réserver sur WhatsApp'
                      : language === 'es'
                      ? 'Reservar por WhatsApp'
                      : 'Book on WhatsApp'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}