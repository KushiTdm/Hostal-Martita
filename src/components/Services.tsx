import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Utensils, Sun, Car } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteData } from '../data/content';

const iconMap = {
  Utensils,
  Sun,
  Car,
};

export function Services() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { services } = siteData.sections;

  return (
    <section id="services" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-lagoon mb-4">
            {services.title[language]}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-stone p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-lagoon w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-center text-earth">
                  {service.title[language]}
                </h3>

                <p className="text-gray-700 text-center leading-relaxed">
                  {service.desc[language]}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
