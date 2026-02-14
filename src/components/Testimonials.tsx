import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteData } from '../data/content';

export function Testimonials() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { testimonials } = siteData.sections;

  return (
    <section ref={ref} className="py-20 bg-lagoon">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {testimonials.title[language]}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl relative"
            >
              <div className="absolute -top-4 left-8 bg-warmth w-12 h-12 rounded-full flex items-center justify-center">
                <Quote className="text-white" size={24} />
              </div>

              <p className="text-gray-700 italic mb-6 mt-4 leading-relaxed">
                "{quote.text[language]}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-lagoon rounded-full flex items-center justify-center text-white font-bold">
                  {quote.user.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-earth">{quote.user}</p>
                  <p className="text-sm text-gray-500">
                    {language === 'fr'
                      ? 'Client vérifié'
                      : language === 'es'
                      ? 'Cliente verificado'
                      : 'Verified Guest'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
