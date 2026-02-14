import { Heart, Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteData } from '../data/content';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-earth text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Martita's House</h3>
            <p className="text-gray-300 leading-relaxed">
              {language === 'fr'
                ? "Votre refuge authentique au cœur de Quilotoa. Géré avec amour par une famille locale."
                : language === 'es'
                ? 'Tu refugio auténtico en el corazón de Quilotoa. Gestionado con amor por una familia local.'
                : 'Your authentic retreat in the heart of Quilotoa. Managed with love by a local family.'}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              {language === 'fr' ? 'Liens Rapides' : language === 'es' ? 'Enlaces' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-lagoon transition-colors">
                  {language === 'fr' ? 'À propos' : language === 'es' ? 'Nosotros' : 'About'}
                </a>
              </li>
              <li>
                <a href="#rooms" className="text-gray-300 hover:text-lagoon transition-colors">
                  {language === 'fr' ? 'Chambres' : language === 'es' ? 'Habitaciones' : 'Rooms'}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-lagoon transition-colors">
                  {language === 'fr' ? 'Services' : language === 'es' ? 'Servicios' : 'Services'}
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-300 hover:text-lagoon transition-colors">
                  {language === 'fr' ? 'Contact' : language === 'es' ? 'Contacto' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={18} />
                <a
                  href={`https://wa.me/${siteData.config.whatsapp_main}`}
                  className="hover:text-lagoon transition-colors"
                >
                  {siteData.config.whatsapp_main}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={18} />
                <a
                  href="mailto:latacunga1988@gmail.com"
                  className="hover:text-lagoon transition-colors"
                >
                  latacunga1988@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} />
                <span>Quilotoa Centro, Ecuador</span>
              </li>
              <li className="flex items-center gap-2 mt-4">
                <a
                  href="https://www.facebook.com/hostalmartitashouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#1877F2] transition-colors"
                >
                  <Facebook size={24} />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
            <p className="text-gray-300 flex items-center justify-center gap-2">
              {language === 'fr'
                ? 'Fait avec'
                : language === 'es'
                ? 'Hecho con'
                : 'Made with'}
              <Heart className="text-warmth" size={18} fill="currentColor" />
              {language === 'fr'
                ? 'par Martita, José et Dane'
                : language === 'es'
                ? 'por Martita, José y Dane'
                : 'by Martita, José, and Dane'}
            </p>

            <div className="flex items-center space-x-2 text-gray-400">
              <span className="hidden sm:inline">
                {language === 'fr' ? 'Développé par' : language === 'es' ? 'Desarrollado por' : 'Developed by'}
              </span>
              <a
                href="https://neuraweb.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[#C28E5E]/80 hover:text-[#C28E5E] transition-all duration-300 group font-medium"
              >
                <img
                  src="/images/neurawebW.webp"
                  alt="NeuraWeb"
                  className="h-6 sm:h-7 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="text-sm group-hover:underline">NeuraWeb</span>
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <p className="text-xs text-gray-400 leading-relaxed max-w-4xl mx-auto">
              {language === 'fr'
                ? "Vous cherchez à créer un site web professionnel pour votre entreprise ? "
                : language === 'es'
                ? '¿Buscas crear un sitio web profesional para tu negocio? '
                : 'Looking to create a professional website for your business? '}
              <a
                href="https://neuraweb.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C28E5E] hover:text-[#C28E5E]/80 transition-colors duration-200 font-medium underline"
              >
                {language === 'fr' ? 'Contactez NeuraWeb' : language === 'es' ? 'Contacta con NeuraWeb' : 'Contact NeuraWeb'}
              </a>
              {language === 'fr'
                ? " pour des solutions web innovantes et sur mesure."
                : language === 'es'
                ? ' para soluciones web innovadoras y personalizadas.'
                : ' for innovative and custom web solutions.'}
            </p>
          </div>

          <p className="text-center text-gray-300 mt-6">
            © {new Date().getFullYear()} Martita's House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}