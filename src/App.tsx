import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <SEO />
        <div className="min-h-screen overflow-x-hidden">
          <Header />
          <main className="overflow-x-hidden">
            <Hero />
            <About />
            <Rooms />
            <Services />
            <Testimonials />
            <Location />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;