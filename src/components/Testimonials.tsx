import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteData } from '../data/content';

export function Testimonials() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { testimonials } = siteData.sections;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.quotes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.quotes.length) % testimonials.quotes.length);
  };

  const getVisibleTestimonials = () => {
    const testimonials3 = [];
    for (let i = 0; i < 3; i++) {
      testimonials3.push(testimonials.quotes[(currentIndex + i) % testimonials.quotes.length]);
    }
    return testimonials3;
  };

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

        {/* Desktop Carousel - 3 cards */}
        <div className="hidden md:block relative">
          <div className="overflow-visible pt-6">
            <div className="grid grid-cols-3 gap-8">
              {getVisibleTestimonials().map((quote, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 pt-10 rounded-2xl shadow-xl relative"
                >
                  <div className="absolute -top-6 left-8 bg-warmth w-12 h-12 rounded-full flex items-center justify-center">
                    <Quote className="text-white" size={24} />
                  </div>

                  <p className="text-gray-700 italic mb-6 leading-relaxed">
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
          <div className="overflow-visible pt-6">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 pt-10 rounded-2xl shadow-xl relative"
            >
              <div className="absolute -top-6 left-8 bg-warmth w-12 h-12 rounded-full flex items-center justify-center">
                <Quote className="text-white" size={24} />
              </div>

              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonials.quotes[currentIndex].text[language]}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-lagoon rounded-full flex items-center justify-center text-white font-bold">
                  {testimonials.quotes[currentIndex].user.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-earth">{testimonials.quotes[currentIndex].user}</p>
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

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}