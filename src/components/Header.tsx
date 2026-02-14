import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteData } from '../data/content';

export function Header() {
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: { fr: 'Accueil', es: 'Inicio', en: 'Home' }, href: '#hero' },
    { label: { fr: 'À propos', es: 'Nosotros', en: 'About' }, href: '#about' },
    { label: { fr: 'Chambres', es: 'Habitaciones', en: 'Rooms' }, href: '#rooms' },
    { label: { fr: 'Services', es: 'Servicios', en: 'Services' }, href: '#services' },
    { label: { fr: 'Contact', es: 'Contacto', en: 'Contact' }, href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-serif font-bold text-lagoon">
          Martita's House
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-lagoon ${
                isScrolled ? 'text-earth' : 'text-white'
              }`}
            >
              {item.label[language]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            {(['fr', 'es', 'en'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  language === lang
                    ? 'bg-lagoon text-white'
                    : isScrolled
                    ? 'bg-gray-100 text-earth hover:bg-gray-200'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            href={`https://wa.me/${siteData.config.whatsapp_main}`}
            className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#20BA5A] transition-colors"
          >
            <Phone size={18} />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-earth' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t mt-3">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-earth hover:text-lagoon transition-colors py-2"
              >
                {item.label[language]}
              </a>
            ))}
            <a
              href={`https://wa.me/${siteData.config.whatsapp_main}`}
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#20BA5A] transition-colors justify-center"
            >
              <Phone size={18} />
              <span>WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}