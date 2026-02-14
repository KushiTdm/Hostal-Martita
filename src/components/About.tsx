import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteData } from '../data/content';

export function About() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { about } = siteData.sections;

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-lagoon">
              {about.title[language]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-700">
              {about.content[language]}
            </p>

            <div className="grid grid-cols-1 gap-4">
              {about.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 bg-stone p-4 rounded-lg"
                >
                  <div className="bg-lagoon rounded-full p-2">
                    <Check className="text-white" size={20} />
                  </div>
                  <span className="font-semibold text-earth">{feature[language]}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={about.image.url}
              alt={about.image.alt_seo[language]}
              loading="lazy"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-warmth text-white p-6 rounded-xl shadow-xl">
              <p className="text-3xl font-bold">2018</p>
              <p className="text-sm">
                {language === 'fr'
                  ? 'Année de fondation'
                  : language === 'es'
                  ? 'Año de fundación'
                  : 'Year founded'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}