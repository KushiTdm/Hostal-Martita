import { Heart, Phone, Mail } from 'lucide-react';
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
                <span>Quilotoa Centro, Ecuador</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
          <p className="flex items-center justify-center gap-2">
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
          <p className="mt-2">© 2024 Martita's House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
