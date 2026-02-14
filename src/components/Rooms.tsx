import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Users, DollarSign, X, ChevronLeft, ChevronRight, Calendar, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteData } from '../data/content';

export function Rooms() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { rooms } = siteData.sections;
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Date and guest selection states
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const handleBookRoom = (roomName: string) => {
    const checkIn = checkInDate || (language === 'fr' ? 'À définir' : language === 'es' ? 'Por definir' : 'To be defined');
    const checkOut = checkOutDate || (language === 'fr' ? 'À définir' : language === 'es' ? 'Por definir' : 'To be defined');
    const guests = numberOfGuests;
    
    const message = language === 'fr'
      ? `Bonjour Martita, je souhaite réserver la ${roomName}.

📅 Date d'arrivée: ${checkIn}
📅 Date de départ: ${checkOut}
👥 Nombre de personnes: ${guests}

Merci de confirmer la disponibilité.`
      : language === 'es'
      ? `Hola Martita, quisiera reservar la ${roomName}.

📅 Fecha de llegada: ${checkIn}
📅 Fecha de salida: ${checkOut}
👥 Número de personas: ${guests}

Por favor confirme la disponibilidad.`
      : `Hello Martita, I would like to book the ${roomName}.

📅 Check-in date: ${checkIn}
📅 Check-out date: ${checkOut}
👥 Number of guests: ${guests}

Please confirm availability.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${siteData.config.whatsapp_main}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
    
    // Reset selections
    setCheckInDate('');
    setCheckOutDate('');
    setNumberOfGuests(1);
    setSelectedRoom(null);
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
                        setSelectedRoom(rooms.items.indexOf(room));
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
        <div className="md:hidden relative px-8">
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
                    setSelectedRoom(currentIndex);
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
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
          >
            <ChevronLeft size={20} className="text-lagoon" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
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
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedRoom(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full my-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={rooms.items[selectedRoom].image}
                    alt={rooms.items[selectedRoom].name[language]}
                    className="w-full h-80 object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={() => setSelectedRoom(null)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                  >
                    <X size={24} className="text-earth" />
                  </button>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-lagoon">{rooms.items[selectedRoom].rating}</span>
                      <div className="text-sm">
                        <div className="text-yellow-500">★★★★★</div>
                        <div className="text-gray-600">
                          {rooms.items[selectedRoom].reviews} {language === 'fr' ? 'avis' : language === 'es' ? 'reseñas' : 'reviews'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 max-h-[60vh] overflow-y-auto">
                  <h2 className="text-4xl font-bold mb-4 text-earth">
                    {rooms.items[selectedRoom].name[language]}
                  </h2>

                  <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-600">
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

                  {/* Booking Selection Section */}
                  <div className="mb-6 p-6 bg-lagoon/5 rounded-xl border-2 border-lagoon/20">
                    <h3 className="text-lg font-bold mb-4 text-earth flex items-center gap-2">
                      <Calendar size={20} className="text-lagoon" />
                      {language === 'fr' ? 'Planifiez votre séjour' : language === 'es' ? 'Planifica tu estadía' : 'Plan your stay'}
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      {/* Check-in Date */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {language === 'fr' ? "Date d'arrivée" : language === 'es' ? 'Fecha de llegada' : 'Check-in'}
                        </label>
                        <input
                          type="date"
                          value={checkInDate}
                          onChange={(e) => setCheckInDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lagoon focus:border-transparent"
                        />
                      </div>

                      {/* Check-out Date */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {language === 'fr' ? 'Date de départ' : language === 'es' ? 'Fecha de salida' : 'Check-out'}
                        </label>
                        <input
                          type="date"
                          value={checkOutDate}
                          onChange={(e) => setCheckOutDate(e.target.value)}
                          min={checkInDate || new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lagoon focus:border-transparent"
                        />
                      </div>

                      {/* Number of Guests */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {language === 'fr' ? 'Nombre de personnes' : language === 'es' ? 'Número de personas' : 'Number of guests'}
                          <span className="text-xs text-gray-500 ml-2">
                            ({language === 'fr' ? 'Max' : language === 'es' ? 'Máx' : 'Max'}: {rooms.items[selectedRoom].capacity})
                          </span>
                        </label>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setNumberOfGuests(Math.max(1, numberOfGuests - 1))}
                            className="w-10 h-10 flex items-center justify-center bg-lagoon text-white rounded-lg hover:bg-lagoon/80 transition-colors"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={numberOfGuests}
                            onChange={(e) => setNumberOfGuests(Math.max(1, Math.min(rooms.items[selectedRoom].capacity, parseInt(e.target.value) || 1)))}
                            min="1"
                            max={rooms.items[selectedRoom].capacity}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-lagoon focus:border-transparent"
                          />
                          <button
                            onClick={() => setNumberOfGuests(Math.min(rooms.items[selectedRoom].capacity, numberOfGuests + 1))}
                            className="w-10 h-10 flex items-center justify-center bg-lagoon text-white rounded-lg hover:bg-lagoon/80 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Nights calculation */}
                    {checkInDate && checkOutDate && (
                      <div className="mt-4 p-3 bg-white rounded-lg border border-lagoon/20">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">
                            {language === 'fr' ? 'Durée du séjour' : language === 'es' ? 'Duración de la estadía' : 'Length of stay'}:
                          </span>
                          <span className="font-bold text-lagoon">
                            {Math.max(0, Math.floor((new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) / (1000 * 60 * 60 * 24)))} {language === 'fr' ? 'nuits' : language === 'es' ? 'noches' : 'nights'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-2 pt-2 border-t border-gray-200">
                          <span className="text-gray-600">
                            {language === 'fr' ? 'Prix estimé' : language === 'es' ? 'Precio estimado' : 'Estimated price'}:
                          </span>
                          <span className="font-bold text-lagoon text-lg">
                            ${parseInt(rooms.items[selectedRoom].price) * Math.max(1, Math.floor((new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) / (1000 * 60 * 60 * 24)))}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {rooms.items[selectedRoom].description[language]}
                    </p>
                  </div>

                  {/* Bed Configuration */}
                  <div className="mb-6 bg-stone p-4 rounded-lg">
                    <h3 className="text-xl font-bold mb-2 text-earth flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {language === 'fr' ? 'Configuration des lits' : language === 'es' ? 'Configuración de camas' : 'Bed Configuration'}
                    </h3>
                    <p className="text-gray-700">{rooms.items[selectedRoom].beds[language]}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {language === 'fr' ? 'Lits confortables, notés 8,5' : language === 'es' ? 'Camas cómodas, calificadas 8.5' : 'Comfortable beds, rated 8.5'}
                    </p>
                  </div>

                  {/* Views */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3 text-earth flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {language === 'fr' ? 'Vues' : language === 'es' ? 'Vistas' : 'Views'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {rooms.items[selectedRoom].views[language].map((view, i) => (
                        <span
                          key={i}
                          className="bg-lagoon/10 text-lagoon px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {view}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bathroom */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3 text-earth flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                      </svg>
                      {language === 'fr' ? 'Salle de bains privative' : language === 'es' ? 'Baño privado' : 'Private Bathroom'}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {rooms.items[selectedRoom].bathroom[language].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-700">
                          <svg className="w-4 h-4 text-lagoon" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-3 text-earth flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {language === 'fr' ? 'Équipements' : language === 'es' ? 'Comodidades' : 'Amenities'}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {rooms.items[selectedRoom].amenities[language].map((amenity, i) => (
                        <div key={i} className="flex items-center gap-2 bg-stone p-2 rounded-lg">
                          <svg className="w-4 h-4 text-lagoon flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-earth">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Smoking Policy */}
                  <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <p className="text-red-700 font-medium flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                      {rooms.items[selectedRoom].smoking[language]}
                    </p>
                  </div>

                  <button
                    onClick={() => handleBookRoom(rooms.items[selectedRoom].name[language])}
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
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