import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

export function SEO() {
  const { language } = useLanguage();

  const titles = {
    fr: "Martita's House - Hostal Authentique au Quilotoa | Hébergement Familial Ecuador",
    es: "Martita's House - Hostal Auténtico en Quilotoa | Alojamiento Familiar Ecuador",
    en: "Martita's House - Authentic Hostal at Quilotoa | Family Accommodation Ecuador",
  };

  const descriptions = {
    fr: "Séjournez à 8 minutes du cratère de Quilotoa dans notre hostal familial. Architecture Art Déco, confort thermique, cuisine locale. Géré par Martita, José et Dane.",
    es: 'Hospédese a 8 minutos del cráter de Quilotoa en nuestro hostal familiar. Arquitectura Art Déco, confort térmico, cocina local. Gestionado por Martita, José y Dane.',
    en: 'Stay 8 minutes from Quilotoa crater in our family hostal. Art Deco architecture, thermal comfort, local cuisine. Managed by Martita, José, and Dane.',
  };

  const keywords = {
    fr: 'Quilotoa, hostal, hébergement, Ecuador, lagune, cratère, Andes, famille indigène, Art Déco, randonnée, Quilotoa Loop',
    es: 'Quilotoa, hostal, alojamiento, Ecuador, laguna, cráter, Andes, familia indígena, Art Déco, senderismo, Quilotoa Loop',
    en: 'Quilotoa, hostal, accommodation, Ecuador, lagoon, crater, Andes, indigenous family, Art Deco, hiking, Quilotoa Loop',
  };

  return (
    <Helmet>
      <html lang={language} />
      <title>{titles[language]}</title>
      <meta name="description" content={descriptions[language]} />
      <meta name="keywords" content={keywords[language]} />
      <meta name="author" content="Martita's House Quilotoa" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={titles[language]} />
      <meta property="og:description" content={descriptions[language]} />
      <meta property="og:image" content="https://images.unsplash.com/photo-1583062820300-88031e793910?q=80&w=1200" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titles[language]} />
      <meta name="twitter:description" content={descriptions[language]} />
      <meta name="twitter:image" content="https://images.unsplash.com/photo-1583062820300-88031e793910?q=80&w=1200" />

      <link rel="canonical" href={`https://martitashouse.com/${language}`} />

      <meta name="geo.region" content="EC" />
      <meta name="geo.placename" content="Quilotoa" />
      <meta name="geo.position" content="-0.859083;-78.903579" />
    </Helmet>
  );
}
