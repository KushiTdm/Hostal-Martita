import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, AlertTriangle, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteData } from '../data/content';

export function Location() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { location } = siteData.sections;

  return (
    <section id="location" ref={ref} className="py-20 bg-stone">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-lagoon mb-4">
            {location.title[language]}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-warmth border-l-4 border-warmth/80 text-white p-6 rounded-lg mb-12 flex items-start gap-4 shadow-lg"
        >
          <AlertTriangle size={32} className="flex-shrink-0" />
          <div>
            <h3 className="font-bold text-xl mb-2">
              {language === 'fr'
                ? 'Important'
                : language === 'es'
                ? 'Importante'
                : 'Important'}
            </h3>
            <p className="text-lg">{location.cash_warning[language]}</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-lagoon flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-bold text-xl mb-2 text-earth">
                    {language === 'fr'
                      ? 'Adresse'
                      : language === 'es'
                      ? 'Dirección'
                      : 'Address'}
                  </h3>
                  <p className="text-gray-700">{location.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <Phone className="text-lagoon flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-bold text-xl mb-2 text-earth">WhatsApp</h3>
                  <a
                    href={`https://wa.me/${siteData.config.whatsapp_main}`}
                    className="text-lagoon hover:underline block"
                  >
                    {siteData.config.whatsapp_main}
                  </a>
                  <a
                    href={`https://wa.me/${siteData.config.whatsapp_secondary}`}
                    className="text-lagoon hover:underline block"
                  >
                    {siteData.config.whatsapp_secondary}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-lagoon flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-bold text-xl mb-2 text-earth">
                    {language === 'fr'
                      ? 'Directions'
                      : language === 'es'
                      ? 'Direcciones'
                      : 'Directions'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'fr'
                      ? "À 8 minutes à pied du cratère de Quilotoa. Accessible depuis Latacunga en bus (2h) ou depuis Quito (3h30)."
                      : language === 'es'
                      ? 'A 8 minutos a pie del cráter de Quilotoa. Accesible desde Latacunga en bus (2h) o desde Quito (3h30).'
                      : '8 minutes walk from Quilotoa crater. Accessible from Latacunga by bus (2h) or from Quito (3h30).'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6886839047816!2d-78.90357882395967!3d-0.8590833352788768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d452a5e5f5e5e5%3A0x5e5e5e5e5e5e5e5e!2sQuilotoa!5e0!3m2!1sen!2sec!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Quilotoa Map"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
