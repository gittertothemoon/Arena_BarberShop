import { useState } from 'react';
import BookingSection from './components/BookingSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import HeroSection from './components/HeroSection';
import MerchandiseSection from './components/MerchandiseSection';
import Navigation from './components/Navigation';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import {
  defaultLocale,
  localeOptions,
  translations,
  type Locale,
} from './i18n/translations';

function App() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const content = translations[locale];

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute -left-1/3 top-0 h-[520px] w-[520px] rounded-full bg-brand-gold/20 blur-3xl" />
        <div className="absolute right-[-20%] top-40 h-[420px] w-[420px] rounded-full bg-brand-rose/20 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[480px] bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <Navigation
        content={content.navigation}
        locale={locale}
        localeOptions={localeOptions}
        onLocaleChange={setLocale}
      />
      <HeroSection content={content.hero} />
      <main className="space-y-20 pb-24 sm:space-y-24 sm:pb-28 lg:space-y-28 lg:pb-32">
        <ServicesSection content={content.services} />
        <ExperienceSection content={content.experience} />
        <GallerySection content={content.gallery} />
        <MerchandiseSection content={content.merchandise} />
        <TestimonialsSection content={content.testimonials} />
        <BookingSection content={content.booking} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
}

export default App;
