import merchApparelImageUrl from '../assets/1.png';
import merchAccessoriesImageUrl from '../assets/7.png';
import merchCoffeeImageUrl from '../assets/17.png';
import merchBeardHairImageUrl from '../assets/18.png';
import service1ImageUrl from '../assets/1_service.png';
import service2ImageUrl from '../assets/2_service.png';
import service3ImageUrl from '../assets/3_service.png';
import service4ImageUrl from '../assets/4_service.png';
import philosophy1ImageUrl from '../assets/1_PHILOSOPHY.png';
import philosophy2ImageUrl from '../assets/2_PHILOSOPHY.png';
import philosophy3ImageUrl from '../assets/3_PHILOSOPHY.png';
import philosophy4ImageUrl from '../assets/4_PHILOSOPHY.png';

export const LOCALES = ['it', 'en', 'de', 'fr'] as const;

export type Locale = (typeof LOCALES)[number];

export type LocaleOption = {
  value: Locale;
  label: string;
  name: string;
};

export type NavigationContent = {
  badge: string;
  brandTop: string;
  brandBottom: string;
  initials: string;
  menu: { label: string; href: string }[];
  phoneLabel: string;
  phoneHref: string;
  ctaLabel: string;
  languageLabel: string;
  backToTopLabel: string;
};

export type HeroContent = {
  locationTag: string;
  heading: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: { label: string; value: string }[];
  heroBadge: string;
  imageAlt: string;
  partnersLabel: string;
  partners: string[];
  highlightLabel: string;
  highlights: string[];
};

export type ServiceContent = {
  title: string;
  description: string;
  duration: string;
  price: string;
  highlights: string[];
  imageUrl: string;
};

export type ServicesContent = {
  kicker: string;
  heading: string;
  description: string;
  items: ServiceContent[];
};

export type ExperienceValue = {
  title: string;
  description: string;
  imageUrl: string;
};

export type ExperienceContent = {
  kicker: string;
  heading: string;
  description: string;
  chips: string[];
  values: ExperienceValue[];
};

export type GalleryItemContent = {
  title: string;
  description: string;
  imageUrl: string;
};

export type GalleryContent = {
  kicker: string;
  heading: string;
  description: string;
  items: GalleryItemContent[];
};

export type MerchandiseCollectionContent = {
  title: string;
  description: string;
  priceRange: string;
  badge: string;
  highlights: string[];
  imageUrl?: string;
};

export type MerchandiseContent = {
  kicker: string;
  heading: string;
  description: string;
  highlight: {
    badge: string;
    title: string;
    description: string;
  };
  features: string[];
  collections: MerchandiseCollectionContent[];
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
};

export type TestimonialContent = {
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
};

export type TestimonialsContent = {
  kicker: string;
  heading: string;
  description: string;
  items: TestimonialContent[];
};

export type BookingFeature = {
  label: string;
  indicatorColor: 'emerald' | 'amber';
};

export type BookingContent = {
  kicker: string;
  heading: string;
  description: string;
  features: BookingFeature[];
  whatsappLabel: string;
  whatsappHref: string;
  emailLabel: string;
  emailHref: string;
  hours: string[];
  address: string;
  ambienceImage: {
    src: string;
    alt: string;
  };
};

export type FooterContent = {
  kicker: string;
  address: string;
  phoneLabel: string;
  phoneHref: string;
  emailLabel: string;
  emailHref: string;
  socials: { label: string; href: string }[];
  bottom: {
    rights: string;
    crafted: string;
  };
};

export type SiteContent = {
  navigation: NavigationContent;
  hero: HeroContent;
  services: ServicesContent;
  experience: ExperienceContent;
  gallery: GalleryContent;
  merchandise: MerchandiseContent;
  testimonials: TestimonialsContent;
  booking: BookingContent;
  footer: FooterContent;
};

export const localeOptions: LocaleOption[] = [
  { value: 'it', label: 'IT', name: 'Italiano' },
  { value: 'en', label: 'EN', name: 'English' },
  { value: 'de', label: 'DE', name: 'Deutsch' },
  { value: 'fr', label: 'FR', name: 'Français' },
];

export const defaultLocale: Locale = 'it';

export const translations: Record<Locale, SiteContent> = {
  it: {
    navigation: {
      badge: 'Arena',
      brandTop: 'Arena',
      brandBottom: 'Barbershop',
      initials: 'AB',
      menu: [
        { label: 'Servizi', href: '#services' },
        { label: 'Esperienza', href: '#experience' },
        { label: 'Boutique', href: '#merchandise' },
        { label: 'Galleria', href: '#gallery' },
        { label: 'Testimonianze', href: '#testimonials' },
      ],
      phoneLabel: '+41 21 555 12 34',
      phoneHref: 'tel:+41215551234',
      ctaLabel: 'Prenota ora',
      languageLabel: 'Lingua',
      backToTopLabel: 'Torna su',
    },
    hero: {
      locationTag: 'Svizzera · Olten',
      heading: 'Eleganza maschile senza compromessi nel cuore di Olten.',
      description:
        "Arena Barbershop a Olten offre servizi sartoriali di grooming per l'uomo contemporaneo. Tagli su misura, rasature con rituale caldo e trattamenti curativi studiati per lasciare un'impronta impeccabile.",
      ctaPrimary: 'Prenota la tua poltrona',
      ctaSecondary: 'Guarda lo spazio',
      stats: [
        { label: 'Esperienza', value: '12+ anni' },
        { label: 'Clienti fedeli', value: '2.5K+' },
        { label: 'Selezione prodotti', value: 'Premium' },
      ],
      heroBadge: 'Barber premium',
      imageAlt: 'Barbiere professionale mentre cura un taglio da uomo',
      partnersLabel: 'In salone selezioniamo marchi come',
      partners: ['Olaplex', 'Davines', 'Proraso', 'Uppercut Deluxe'],
      highlightLabel: 'Perché scegliere Arena',
      highlights: [
        'Rituali di grooming sartoriali con cura artigianale',
        'Team plurilingue certificato con formazione internazionale',
        'Lounge privata con cocktail selezionati e design iconico',
      ],
    },
    services: {
      kicker: 'Servizi signature',
      heading: 'Tagli sartoriali e rituali barber su misura',
      description:
        'Tecnica, consulenza e prodotti d’eccellenza si fondono per mantenere il tuo stile impeccabile tra un appuntamento e l’altro.',
	      items: [
	        {
	          title: 'Arena Signature Cut',
          description:
            'Diagnosi personalizzata, shampoo energizzante, taglio sartoriale e styling finale calibrato sulla tua routine quotidiana.',
          duration: '45 minuti',
          price: 'CHF 68',
	          highlights: [
	            'Analisi di viso, forma e volume capelli',
	            'Massaggio cute con shampoo professionale',
	            'Finish con prodotti selezionati Arena',
	          ],
	          imageUrl: service1ImageUrl,
	        },
	        {
	          title: 'Imperial Shave',
          description:
            'Rituale hot towel con oli pre-shave, rasatura a lama singola su tre passaggi e impacco lenitivo con tonici artigianali svizzeri.',
          duration: '40 minuti',
          price: 'CHF 55',
	          highlights: [
	            'Preparazione con panno caldo aromatizzato',
	            'Rasatura di precisione in tre step',
	            'Trattamento calmante post-rasatura',
	          ],
	          imageUrl: service2ImageUrl,
	        },
	        {
	          title: 'Beard Sculpting & Care',
          description:
            'Rimodellatura completa della barba con definizione delle linee, vapore botanico e coaching personalizzato per la cura quotidiana.',
          duration: '35 minuti',
          price: 'CHF 48',
	          highlights: [
	            'Tracciatura linee tailor-made',
	            'Steam botanico con oli essenziali',
	            'Olio e balsamo firmati Arena',
	          ],
	          imageUrl: service3ImageUrl,
	        },
	        {
	          title: 'Total Refresh Experience',
          description:
            'Percorso full look: taglio sartoriale, rifinitura barba, trattamento viso ossigenante e drink di benvenuto dalla lounge Arena.',
          duration: '75 minuti',
          price: 'CHF 120',
	          highlights: [
	            'Combo capelli + barba coordinata',
	            'Maschera viso rigenerante',
	            'Signature drink a scelta',
	          ],
	          imageUrl: service4ImageUrl,
	        },
	      ],
	    },
    experience: {
      kicker: 'La nostra filosofia',
      heading: 'Un rituale completo tra precisione, accoglienza e design contemporaneo.',
      description:
        'Arena Barbershop nasce come salotto contemporaneo dove il tempo rallenta. Dalla prenotazione digitale ai cocktail della lounge, ogni passaggio è progettato in tre lingue per offrirti un servizio curato e senza frizioni.',
      chips: ['Team multilingue', 'Ospitalità svizzera', 'Materiali responsabili', 'Prenotazione digitale'],
	      values: [
	        {
	          title: 'Professionisti certificati',
	          description:
	            'Barber con esperienza internazionale che si formano costantemente nelle migliori accademie per proporre tecniche e trend aggiornati.',
	          imageUrl: philosophy1ImageUrl,
	        },
	        {
	          title: 'Prodotti consapevoli',
	          description:
	            'Collaborazioni con brand svizzeri e nordici che privilegiano ingredienti naturali, packaging ricaricabili e filiere trasparenti.',
	          imageUrl: philosophy2ImageUrl,
	        },
	        {
	          title: 'Esperienza lounge',
	          description:
	            'Postazioni luminose, sedute vintage restaurate e playlist curata trasformano il servizio in un momento di relax mirato.',
	          imageUrl: philosophy3ImageUrl,
	        },
	        {
	          title: 'Hospitality su misura',
	          description:
	            'Espresso artigianale, single malt o acqua aromatizzata: scegli il tuo rituale di benvenuto mentre il team prepara il servizio.',
	          imageUrl: philosophy4ImageUrl,
	        },
	      ],
	    },
    gallery: {
      kicker: 'Lo spazio',
      heading: 'Un salone che unisce estetica, artigianato e comfort calibrato.',
      description:
        'Legni fumé, acciaio nero e dettagli in ottone satinato definiscono una lounge contemporanea con poltrone italiane anni ’60 restaurate, illuminazione scenografica e una libreria di riviste indipendenti.',
      items: [
        {
          title: 'Poltrone italiane restaurate',
          description: 'Sedute storiche rivestite in pelle pieno fiore per un comfort sartoriale.',
          imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86',
        },
        {
          title: 'Dettagli artigianali',
          description: 'Ferramenta su misura, strumenti affilati a mano e display dedicati ad accessori di barbering.',
          imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81',
        },
        {
          title: 'Boutique & lounge',
          description: 'Corner curato con capsule apparel, accessori e cocktail signature per prolungare l’esperienza oltre il servizio.',
          imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
        },
      ],
    },
    merchandise: {
      kicker: 'Arena Boutique',
      heading: 'Merchandise curato per accompagnare ogni rituale quotidiano',
      description:
        'Prodotti professionali, capsule apparel e accessori selezionati dai nostri barber per portare il carattere Arena ovunque.',
      highlight: {
        badge: 'Consulenza dedicata',
        title: 'Personal shopper grooming & lifestyle',
        description:
          'Prenota 15 minuti con il team per scoprire abbinamenti su misura, capsule stagionali e idee regalo con confezione dedicata.',
      },
      features: [
        'Ricerca trimestrale curata da barber e style team',
        'Linea esclusiva Arena con materiali responsabili',
        'Ritiro immediato o consegna personalizzata a Olten',
      ],
	      collections: [
	        {
	          title: 'Abbigliamento',
	          description:
	            'Felpe, t-shirt e cappelli in tessuti organici con ricami Arena: capsule stagionali pensate per la lounge e la città.',
	          priceRange: 'CHF 45 – 120',
	          badge: 'Abbigliamento',
	          highlights: [
	            'Cotone organico certificato GOTS',
	            'Vestibilità unisex in tre palette stagionali',
	            'Edizioni limitate numerate',
	          ],
	          imageUrl: merchApparelImageUrl,
	        },
	        {
	          title: 'Coffee cup',
	          description:
	            'Mug in porcellana e tumbler termici in acciaio per replicare il rituale caffè della lounge ovunque tu sia.',
	          priceRange: 'CHF 22 – 48',
	          badge: 'Caffè',
	          highlights: [
	            'Porcellana italiana doppio smalto',
	            'Versione termica con tappo ermetico',
	            'Confezione regalo con tovaglietta in lino',
	          ],
	          imageUrl: merchCoffeeImageUrl,
	        },
	        {
	          title: 'Accessori',
	          description:
	            'Shopper, tote e dettagli lifestyle curati: accessori progettati per accompagnarti tra lavoro, palestra e weekend.',
	          priceRange: 'CHF 25 – 38',
	          badge: 'Accessori',
	          highlights: [
	            'Canvas 100% riciclato con fibre svizzere',
	            'Manici rinforzati e tasca interna',
	            'Lavabile e ripiegabile in pochi secondi',
	          ],
	          imageUrl: merchAccessoriesImageUrl,
	        },
	        {
	          title: 'Prodotti barba e capelli',
	          description:
	            'Oli, balsami e brush per la barba, insieme a paste e spray professionali per dare texture e tenuta senza appesantire.',
	          priceRange: 'CHF 28 – 68',
	          badge: 'Barba & capelli',
	          highlights: [
	            'Formule botaniche con vitamine A, C ed E',
	            'Tenuta calibrata e finish naturale',
	            'Guide rituali e formati travel disponibili',
	          ],
	          imageUrl: merchBeardHairImageUrl,
	        },
	      ],
      ctaPrimaryLabel: 'Prenota una consulenza',
      ctaPrimaryHref: '#booking',
      ctaSecondaryLabel: 'Scrivici su WhatsApp',
      ctaSecondaryHref: 'https://wa.me/41215551234',
    },
	    testimonials: {
	      kicker: 'Voci della community',
	      heading: 'Perché gli ospiti scelgono Arena Barbershop',
	      description:
	        'Professionisti, creativi e imprenditori raccontano il valore di un rituale disegnato su misura.',
	      items: [
	        {
	          name: 'Lorenzo M.',
	          role: 'Consulente finanziario · Ginevra',
	          quote:
	            'Ogni appuntamento è calibrato sulle mie esigenze: consulenza puntuale, attenzione ai dettagli e un finale impeccabile senza tempi morti.',
	          avatarUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
	        },
	        {
	          name: 'James P.',
	          role: 'Creative Director · Zürich',
	          quote:
	            'La loro ospitalità ricorda un boutique hotel: parlano inglese perfettamente e suggeriscono sempre il prodotto giusto da portare a casa.',
	          avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
	        },
	        {
	          name: 'Nicolas M.',
	          role: 'Chef · Olten',
	          quote:
	            'Il rituale barba è diventato un classico: panno caldo aromatico, oli naturali svizzeri e consigli pratici per mantenerla perfetta anche in cucina.',
	          avatarUrl: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4',
	        },
	        {
	          name: 'Matteo R.',
	          role: 'Founder · Basel',
	          quote:
	            'Taglio pulito e duraturo, ambiente super curato. In 5 minuti capiscono lo stile e ti danno consigli prodotti davvero utili.',
	          avatarUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
	        },
	      ],
	    },
    booking: {
      kicker: 'Prenotazione',
      heading: 'Blocca la tua poltrona riservata in pochi minuti.',
      description:
        'Prenota online o contattaci direttamente: confermiamo con SMS, inviamo un promemoria 24 ore prima e suggeriamo il servizio più adatto alle tue esigenze.',
      features: [
        { label: 'Disponibilità in tempo reale', indicatorColor: 'emerald' },
        { label: 'Eventi privati su richiesta', indicatorColor: 'amber' },
        { label: 'Promemoria 24h via SMS o WhatsApp', indicatorColor: 'emerald' },
      ],
      whatsappLabel: 'Prenota via WhatsApp',
      whatsappHref: 'https://wa.me/41215551234',
      emailLabel: 'Scrivici una mail',
      emailHref: 'mailto:welcome@arena-barbershop.ch',
      hours: ['Martedì - Venerdì · 09:00 - 20:00', 'Sabato · 09:00 - 18:00'],
      address: 'Aarauerstrasse 97, Olten',
      ambienceImage: {
        src: 'https://images.unsplash.com/photo-1492447166138-50c3889fccb1',
        alt: 'Interno del barbershop Arena a Olten con poltrone vintage e atmosfera maschile',
      },
    },
	    footer: {
	      kicker: 'Arena Barbershop',
	      address: 'Aarauerstrasse 97 · 4600 Olten · Switzerland',
      phoneLabel: '+41 21 555 12 34',
      phoneHref: 'tel:+41215551234',
      emailLabel: 'welcome@arena-barbershop.ch',
      emailHref: 'mailto:welcome@arena-barbershop.ch',
      socials: [
        { label: 'Instagram', href: 'https://www.instagram.com/arenabarbershop.ch/' },
        { label: 'TikTok', href: 'https://www.tiktok.com/@arenabarbershopolten?lang=en' },
      ],
      bottom: {
        rights: 'Arena Barbershop. Tutti i diritti riservati.',
        crafted: 'Curato quotidianamente dal team Arena a Olten.',
      },
    },
  },
  en: {
    navigation: {
      badge: 'Arena',
      brandTop: 'Arena',
      brandBottom: 'Barbershop',
      initials: 'AB',
      menu: [
        { label: 'Services', href: '#services' },
        { label: 'Experience', href: '#experience' },
        { label: 'Boutique', href: '#merchandise' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Testimonials', href: '#testimonials' },
      ],
      phoneLabel: '+41 21 555 12 34',
      phoneHref: 'tel:+41215551234',
      ctaLabel: 'Book now',
      languageLabel: 'Language',
      backToTopLabel: 'Back to top',
    },
    hero: {
      locationTag: 'Switzerland · Olten',
      heading: 'Tailored grooming without compromise in the heart of Olten.',
      description:
        'Arena Barbershop in Olten delivers bespoke grooming rituals for the modern gentleman. Precision cuts, traditional hot shaves, and restorative treatments designed to leave a lasting impression.',
      ctaPrimary: 'Reserve your chair',
      ctaSecondary: 'Explore the space',
      stats: [
        { label: 'Experience', value: '12+ years' },
        { label: 'Loyal clients', value: '2.5K+' },
        { label: 'Product curation', value: 'Premium' },
      ],
      heroBadge: 'Premium barbering',
      imageAlt: 'Professional barber refining a gentleman’s haircut',
      partnersLabel: 'Trusted by grooming houses such as',
      partners: ['Olaplex', 'Davines', 'Proraso', 'Uppercut Deluxe'],
      highlightLabel: 'Why guests choose Arena',
      highlights: [
        'Tailored grooming rituals with artisanal precision',
        'Certified multilingual barbers with global training',
        'Private lounge with signature cocktails and iconic design',
      ],
    },
    services: {
      kicker: 'Signature services',
      heading: 'Tailor-made cuts and rituals for modern grooming',
      description:
        'Precision technique, bespoke consultation, and high-performance products keep your look refined between appointments.',
      items: [
        {
          title: 'Arena Signature Cut',
          description:
            'Personalised diagnosis, energising shampoo, tailored cut, and finished styling mapped to your daily routine.',
          duration: '45 minutes',
          price: 'CHF 68',
	          highlights: [
	            'Face and hair structure analysis',
	            'Scalp massage with professional shampoo',
	            'Hand-selected finishing products',
	          ],
	          imageUrl: service1ImageUrl,
	        },
	        {
	          title: 'Imperial Shave',
          description:
            'Hot towel ritual with botanical pre-shave oils, single-blade shave across three passes, and a soothing tonic finish crafted in Switzerland.',
          duration: '40 minutes',
          price: 'CHF 55',
	          highlights: [
	            'Aromatherapeutic hot towel prep',
	            'Three-pass straight razor shave',
	            'Cooling post-shave treatment',
	          ],
	          imageUrl: service2ImageUrl,
	        },
	        {
	          title: 'Beard Sculpting & Care',
          description:
            'Complete beard refinement with contour mapping, botanical steam therapy, and personalised maintenance coaching.',
          duration: '35 minutes',
          price: 'CHF 48',
	          highlights: [
	            'Tailored contour mapping',
	            'Botanical steam infusion',
	            'Arena beard oil & balm',
	          ],
	          imageUrl: service3ImageUrl,
	        },
	        {
	          title: 'Total Refresh Experience',
          description:
            'Full look journey: signature cut, beard detailing, oxygenating facial, and a welcome drink from the Arena lounge.',
          duration: '75 minutes',
          price: 'CHF 120',
	          highlights: [
	            'Coordinated hair + beard service',
	            'Revitalising facial mask',
	            'Signature beverage selection',
	          ],
	          imageUrl: service4ImageUrl,
	        },
	      ],
	    },
    experience: {
      kicker: 'Our philosophy',
      heading: 'A ritual that blends precision, hospitality, and contemporary design.',
      description:
        'Arena Barbershop was conceived as a contemporary lounge where time slows down. From digital booking to the crafted cocktail, every touchpoint is designed in multiple languages for a seamless, premium visit.',
      chips: ['Multilingual team', 'Swiss hospitality', 'Responsible materials', 'Digital booking'],
	      values: [
	        {
	          title: 'Certified professionals',
	          description:
	            'Barbers with international résumés continuously training at leading academies to deliver fresh techniques and style insight.',
	          imageUrl: philosophy1ImageUrl,
	        },
	        {
	          title: 'Considered products',
	          description:
	            'Partnerships with Swiss and Nordic brands prioritising natural ingredients, refill systems, and transparent supply chains.',
	          imageUrl: philosophy2ImageUrl,
	        },
	        {
	          title: 'Lounge experience',
	          description:
	            'Restored vintage seating, sculpted lighting, and a curated soundtrack turn every appointment into a measured pause.',
	          imageUrl: philosophy3ImageUrl,
	        },
	        {
	          title: 'Tailored hospitality',
	          description:
	            'Choose between artisanal espresso, single malt, or infused water while the team prepares your service in the language you prefer.',
	          imageUrl: philosophy4ImageUrl,
	        },
	      ],
	    },
    gallery: {
      kicker: 'The space',
      heading: 'A lounge curated around craftsmanship, design, and comfort.',
      description:
        'Smoked woods, matte black steel, and brushed brass define a contemporary lounge with restored Italian chairs, sculpted lighting, and a library of independent magazines.',
      items: [
        {
          title: 'Restored Italian chairs',
          description: 'Full-grain leather seating offering timeless comfort with a sartorial finish.',
          imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86',
        },
        {
          title: 'Crafted details',
          description: 'Custom hardware, hand-sharpened tools, and displays dedicated to grooming accessories.',
          imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81',
        },
        {
          title: 'Boutique & lounge',
          description: 'A curated corner showcasing apparel capsules, accessories, and signature cocktails to extend the Arena experience.',
          imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
        },
      ],
    },
    merchandise: {
      kicker: 'Arena Boutique',
      heading: 'Curated merchandise to extend your daily ritual',
      description:
        'Professional essentials, apparel capsules, and lifestyle accessories selected by our barbers to bring the Arena signature home.',
      highlight: {
        badge: 'Concierge service',
        title: 'Grooming & lifestyle personal shopper',
        description:
          'Reserve a 15-minute micro-consult to tailor product pairings, seasonal capsules, and personalised gifting with dedicated wrapping.',
      },
      features: [
        'Quarterly curation led by the barber and style team',
        'Arena-exclusive line crafted with responsible materials',
        'Collect in lounge or request bespoke delivery across Olten',
      ],
	      collections: [
	        {
	          title: 'Apparel',
	          description:
	            'Sweatshirts, tees, and caps in organic fabrics with signature embroidery crafted for lounge and city.',
	          priceRange: 'CHF 45 – 120',
	          badge: 'Apparel',
	          highlights: [
	            'GOTS-certified organic cotton',
	            'Unisex fits in seasonal palettes',
	            'Numbered limited editions',
	          ],
	          imageUrl: merchApparelImageUrl,
	        },
	        {
	          title: 'Coffee cups',
	          description:
	            'Porcelain mugs and insulated travel cups crafted to recreate the Arena coffee ritual wherever you go.',
	          priceRange: 'CHF 22 – 48',
	          badge: 'Coffee',
	          highlights: [
	            'Double-glazed Italian porcelain',
	            'Thermal steel version with leak-proof lid',
	            'Gift set finished with Arena linen cloth',
	          ],
	          imageUrl: merchCoffeeImageUrl,
	        },
	        {
	          title: 'Accessories',
	          description:
	            'Reusable canvas shoppers and lounge essentials designed to move from office to weekend with minimal signature branding.',
	          priceRange: 'CHF 25 – 38',
	          badge: 'Accessories',
	          highlights: [
	            '100% recycled canvas with Swiss fibres',
	            'Reinforced handles and internal pocket',
	            'Machine washable and foldable in seconds',
	          ],
	          imageUrl: merchAccessoriesImageUrl,
	        },
	        {
	          title: 'Beard & hair products',
	          description:
	            'Botanical oils, soothing balms, matte clays, and volumising sprays curated for an effortless, long-lasting finish.',
	          priceRange: 'CHF 28 – 68',
	          badge: 'Grooming',
	          highlights: [
	            'Botanical formulas loaded with vitamins A, C & E',
	            'Balanced hold with natural finish',
	            'Travel and refill formats available',
	          ],
	          imageUrl: merchBeardHairImageUrl,
	        },
	      ],
      ctaPrimaryLabel: 'Book a consultation',
      ctaPrimaryHref: '#booking',
      ctaSecondaryLabel: 'Chat on WhatsApp',
      ctaSecondaryHref: 'https://wa.me/41215551234',
    },
	    testimonials: {
	      kicker: 'Community voices',
	      heading: 'Why guests choose Arena Barbershop',
	      description:
	        'Professionals across Switzerland share how a tailored ritual elevates their routine.',
	      items: [
        {
          name: 'Lorenzo M.',
          role: 'Financial consultant · Geneva',
          quote:
            'Each visit is precisely timed and deeply relaxing—sharp cuts, thoughtful coaching, and no wasted minutes.',
          avatarUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
        },
        {
          name: 'James P.',
          role: 'Creative Director · Zürich',
          quote:
            'Hospitality feels like a boutique hotel: perfectly bilingual, detail-obsessed, and always suggesting the right product to take home.',
          avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
        },
	        {
	          name: 'Nicolas M.',
	          role: 'Chef · Olten',
	          quote:
	            'The beard ritual is a staple now: aromatic towels, Swiss natural oils, and techniques I can replicate back in the kitchen.',
	          avatarUrl: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4',
	        },
	        {
	          name: 'Matteo R.',
	          role: 'Founder · Basel',
	          quote:
	            'A sharp cut that lasts, a perfectly curated space, and product advice that actually fits my routine. Fast, calm, and precise.',
	          avatarUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
	        },
	      ],
	    },
    booking: {
      kicker: 'Booking',
      heading: 'Secure your reserved chair in minutes.',
      description:
        'Book online or contact us directly—we confirm with SMS, send a 24-hour reminder, and guide you toward the ideal service for your agenda.',
      features: [
        { label: 'Real-time availability', indicatorColor: 'emerald' },
        { label: 'Private events on request', indicatorColor: 'amber' },
        { label: '24h reminder via SMS or WhatsApp', indicatorColor: 'emerald' },
      ],
      whatsappLabel: 'Book via WhatsApp',
      whatsappHref: 'https://wa.me/41215551234',
      emailLabel: 'Write us an email',
      emailHref: 'mailto:welcome@arena-barbershop.ch',
      hours: ['Tuesday – Friday · 09:00 – 20:00', 'Saturday · 09:00 – 18:00'],
      address: 'Aarauerstrasse 97, Olten',
      ambienceImage: {
        src: 'https://images.unsplash.com/photo-1492447166138-50c3889fccb1',
        alt: 'Interior of Arena Barbershop Olten featuring vintage chairs and a masculine lounge atmosphere',
      },
    },
    footer: {
      kicker: 'Arena Barbershop',
      address: 'Aarauerstrasse 97 · 4600 Olten · Switzerland',
      phoneLabel: '+41 21 555 12 34',
      phoneHref: 'tel:+41215551234',
      emailLabel: 'welcome@arena-barbershop.ch',
      emailHref: 'mailto:welcome@arena-barbershop.ch',
      socials: [
        { label: 'Instagram', href: 'https://www.instagram.com/arenabarbershop.ch/' },
        { label: 'TikTok', href: 'https://www.tiktok.com/@arenabarbershopolten?lang=en' },
      ],
	      bottom: {
	        rights: 'Arena Barbershop. All rights reserved.',
	        crafted: 'Curated daily by PIONIO.',
	      },
	    },
  },
  de: {
    navigation: {
      badge: 'Arena',
      brandTop: 'Arena',
      brandBottom: 'Barbershop',
      initials: 'AB',
      menu: [
        { label: 'Leistungen', href: '#services' },
        { label: 'Erlebnis', href: '#experience' },
        { label: 'Boutique', href: '#merchandise' },
        { label: 'Galerie', href: '#gallery' },
        { label: 'Stimmen', href: '#testimonials' },
      ],
      phoneLabel: '+41 21 555 12 34',
      phoneHref: 'tel:+41215551234',
      ctaLabel: 'Jetzt buchen',
      languageLabel: 'Sprache',
      backToTopLabel: 'Nach oben',
    },
    hero: {
      locationTag: 'Schweiz · Olten',
      heading: 'Maskuline Eleganz ohne Kompromisse im Herzen von Olten.',
      description:
        'Arena Barbershop in Olten bietet maßgeschneiderte Grooming-Rituale für den modernen Mann. Präzisionshaarschnitte, traditionelle Nassrasuren und pflegende Behandlungen hinterlassen einen bleibenden Eindruck.',
      ctaPrimary: 'Deinen Platz reservieren',
      ctaSecondary: 'Salon entdecken',
      stats: [
        { label: 'Erfahrung', value: '12+ Jahre' },
        { label: 'Stammgäste', value: '2.5K+' },
        { label: 'Produktsortiment', value: 'Premium' },
      ],
      heroBadge: 'Premium-Barbier',
      imageAlt: 'Professioneller Barbier, der einen Herrenhaarschnitt perfektioniert',
      partnersLabel: 'Im Salon verwenden wir Marken wie',
      partners: ['Olaplex', 'Davines', 'Proraso', 'Uppercut Deluxe'],
      highlightLabel: 'Darum Arena Barbershop',
      highlights: [
        'Maßgeschneiderte Grooming-Rituale mit Handwerkskunst',
        'Zertifiziertes, mehrsprachiges Team mit internationaler Ausbildung',
        'Private Lounge mit Signature-Drinks und ikonischem Design',
      ],
    },
    services: {
      kicker: 'Signature-Services',
      heading: 'Maßgeschneiderte Schnitte und Rituale für modernes Grooming',
      description:
        'Präzision, individuelle Beratung und hochwertige Produkte sorgen dafür, dass dein Look zwischen den Terminen sitzt.',
      items: [
        {
          title: 'Arena Signature Cut',
          description:
            'Persönliche Analyse, belebendes Shampoo, maßgeschneiderter Schnitt und finales Styling abgestimmt auf deinen Alltag.',
          duration: '45 Minuten',
          price: 'CHF 68',
	          highlights: [
	            'Analyse von Gesicht und Haarstruktur',
	            'Kopfhautmassage mit Profi-Shampoo',
	            'Finish mit kuratierten Produkten',
	          ],
	          imageUrl: service1ImageUrl,
	        },
	        {
	          title: 'Imperial Shave',
          description:
            'Hot-Towel-Ritual mit botanischen Pre-Shave-Ölen, Ein-Klingen-Rasur in drei Durchgängen und beruhigendem Tonic aus Schweizer Produktion.',
          duration: '40 Minuten',
          price: 'CHF 55',
	          highlights: [
	            'Aromatisches Hot-Towel-Setup',
	            'Dreipass-Rasur mit Ein-Klingen-Messer',
	            'Beruhigendes Aftershave-Tonic',
	          ],
	          imageUrl: service2ImageUrl,
	        },
	        {
	          title: 'Beard Sculpting & Care',
          description:
            'Vollständiges Bart-Finish mit Konturzeichnung, botanischem Dampf und individuellem Pflegecoaching.',
          duration: '35 Minuten',
          price: 'CHF 48',
	          highlights: [
	            'Konturen nach Maß',
	            'Botanischer Steam mit ätherischen Ölen',
	            'Arena Bartöl & Balsam',
	          ],
	          imageUrl: service3ImageUrl,
	        },
	        {
	          title: 'Total Refresh Experience',
          description:
            'Kompletter Look: Signature-Haarschnitt, Bart-Detailing, oxygenierende Gesichtsbehandlung und Signature-Drink aus der Lounge.',
          duration: '75 Minuten',
          price: 'CHF 120',
	          highlights: [
	            'Koordiniertes Haar- & Bartservice',
	            'Revitalisierende Gesichtsmaske',
	            'Signature-Drink nach Wahl',
	          ],
	          imageUrl: service4ImageUrl,
	        },
      ],
    },
    experience: {
      kicker: 'Unsere Philosophie',
      heading: 'Ein Ritual aus Präzision, Gastfreundschaft und modernem Design.',
      description:
        'Arena Barbershop wurde als moderner Salon konzipiert, in dem die Zeit langsamer läuft. Von der digitalen Buchung bis zum kuratierten Cocktail ist jeder Touchpoint mehrsprachig und reibungslos gestaltet.',
      chips: ['Mehrsprachiges Team', 'Schweizer Gastfreundschaft', 'Verantwortungsvolle Materialien', 'Digitale Buchung'],
	      values: [
	        {
	          title: 'Zertifizierte Profis',
	          description:
	            'Barbiere mit internationalen Lebensläufen, die sich laufend an führenden Akademien weiterbilden, um neue Techniken und Trends mitzubringen.',
	          imageUrl: philosophy1ImageUrl,
	        },
	        {
	          title: 'Bewusst ausgewählte Produkte',
	          description:
	            'Partnerschaften mit Schweizer und nordischen Marken, die auf natürliche Inhaltsstoffe, Refill-Systeme und transparente Lieferketten setzen.',
	          imageUrl: philosophy2ImageUrl,
	        },
	        {
	          title: 'Lounge-Erlebnis',
	          description:
	            'Restaurierte Vintage-Sessel, Lichtinszenierung und kuratierte Soundtracks machen jeden Termin zur gezielten Auszeit.',
	          imageUrl: philosophy3ImageUrl,
	        },
	        {
	          title: 'Gastfreundschaft nach Maß',
	          description:
	            'Espresso, Single Malt oder Infused Water – du wählst dein Willkommensritual, während das Team den Service vorbereitet.',
	          imageUrl: philosophy4ImageUrl,
	        },
	      ],
	    },
    gallery: {
      kicker: 'Der Salon',
      heading: 'Ein Raum, der Handwerk, Design und Komfort vereint.',
      description:
        'Geräucherte Hölzer, mattes Schwarzstahl und gebürstetes Messing bilden die Bühne für restaurierte italienische Sessel, Lichtinszenierung und eine Bibliothek unabhängiger Magazine.',
      items: [
        {
          title: 'Restaurierte italienische Sessel',
          description: 'Sitzmöbel aus Vollnarbenleder für zeitlosen Komfort mit sartorialem Finish.',
          imageUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899d',
        },
        {
          title: 'Handwerkliche Details',
          description: 'Maßgefertigte Beschläge, handgeschärfte Tools und Präsentationen für hochwertige Grooming-Accessoires.',
          imageUrl: 'https://images.unsplash.com/photo-1621609776216-d76232c41799',
        },
        {
          title: 'Boutique & Lounge',
          description: 'Kuratiertes Eck mit Apparel-Capsules, Accessoires und Signature-Drinks, um das Arena-Erlebnis zu verlängern.',
          imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
        },
      ],
    },
    merchandise: {
      kicker: 'Arena Boutique',
      heading: 'Kuratiertes Merchandise für deinen Alltag',
      description:
        'Professionelle Essentials, Bekleidungs-Capsules und Lifestyle-Accessoires, ausgewählt vom Barber-Team, damit du die Arena-Handschrift überall dabei hast.',
      highlight: {
        badge: 'Concierge-Service',
        title: 'Personal Shopper für Grooming & Lifestyle',
        description:
          'Buche 15 Minuten Beratung für abgestimmte Produktsets, saisonale Capsules und Geschenkideen inklusive Verpackung.',
      },
      features: [
        'Vierteljährliche Kuratierung durch Barber- und Style-Team',
        'Arena-Exklusivlinie mit verantwortungsvollen Materialien',
        'Abholung im Salon oder individuelle Lieferung in Olten',
      ],
	      collections: [
	        {
	          title: 'Bekleidung',
	          description:
	            'Sweatshirts, T-Shirts und Caps aus Bio-Stoffen mit Arena-Stickereien – gemacht für Lounge und City.',
	          priceRange: 'CHF 45 – 120',
	          badge: 'Bekleidung',
	          highlights: [
	            'GOTS-zertifizierte Bio-Baumwolle',
	            'Unisex-Fits in saisonalen Farbwelten',
	            'Limitierte, nummerierte Editionen',
	          ],
	          imageUrl: merchApparelImageUrl,
	        },
	        {
	          title: 'Coffee Cups',
	          description:
	            'Porzellantassen und isolierte Travel Cups bringen das Arena-Kaffee-Ritual in deinen Alltag.',
	          priceRange: 'CHF 22 – 48',
	          badge: 'Kaffee',
	          highlights: [
	            'Italienisches Porzellan mit Doppelglasur',
	            'Isolierte Edelstahlversion mit dichtem Deckel',
	            'Geschenkset mit Arena-Leinentuch veredelt',
	          ],
	          imageUrl: merchCoffeeImageUrl,
	        },
	        {
	          title: 'Accessoires',
	          description:
	            'Recycelte Canvas-Shopper und Lounge-Essentials mit minimalistischem Branding für Alltag und Wochenende.',
	          priceRange: 'CHF 25 – 38',
	          badge: 'Accessoires',
	          highlights: [
	            '100 % recycelter Canvas mit Schweizer Fasern',
	            'Verstärkte Henkel und Innentasche',
	            'Waschbar und in Sekunden faltbar',
	          ],
	          imageUrl: merchAccessoriesImageUrl,
	        },
	        {
	          title: 'Produkte für Bart & Haare',
	          description:
	            'Botanische Öle, beruhigende Balsame sowie matte Clays und Volumensprays für ein natürliches, langanhaltendes Finish.',
	          priceRange: 'CHF 28 – 68',
	          badge: 'Grooming',
	          highlights: [
	            'Botanische Formeln mit Vitaminen A, C & E',
	            'Ausbalancierte Haltbarkeit mit natürlichem Finish',
	            'Travel- und Refill-Formate verfügbar',
	          ],
	          imageUrl: merchBeardHairImageUrl,
	        },
	      ],
      ctaPrimaryLabel: 'Beratung buchen',
      ctaPrimaryHref: '#booking',
      ctaSecondaryLabel: 'WhatsApp-Chat starten',
      ctaSecondaryHref: 'https://wa.me/41215551234',
    },
	    testimonials: {
	      kicker: 'Stimmen der Community',
	      heading: 'Darum entscheidet man sich für Arena Barbershop',
	      description:
	        'Führungskräfte, Kreative und Gastgeber erzählen, wie ein maßgeschneidertes Ritual ihren Alltag aufwertet.',
	      items: [
        {
          name: 'Lorenzo M.',
          role: 'Finanzberater · Genf',
          quote:
            'Jeder Termin ist präzise getaktet: Beratung, saubere Linien und Pflegeempfehlungen – ohne Wartezeit und mit maximaler Ruhe.',
          avatarUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
        },
        {
          name: 'James P.',
          role: 'Creative Director · Zürich',
          quote:
            'Gastfreundschaft wie im Boutique-Hotel: perfekt bilingual, detailverliebt und mit treffsicheren Produktempfehlungen für zu Hause.',
          avatarUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
        },
	        {
	          name: 'Nicolas M.',
	          role: 'Chef · Olten',
	          quote:
	            'Das Bart-Ritual ist Pflicht: aromatische Tücher, Schweizer Naturöle und Tipps, die auch im Küchenalltag funktionieren.',
	          avatarUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39',
	        },
	        {
	          name: 'Matteo R.',
	          role: 'Founder · Basel',
	          quote:
	            'Präziser Schnitt, der lange hält, und ein Raum mit viel Stil. Die Produktempfehlungen passen wirklich zu meiner Routine.',
	          avatarUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
	        },
	      ],
	    },
    booking: {
      kicker: 'Terminvereinbarung',
      heading: 'Sichere dir deinen reservierten Platz in wenigen Minuten.',
      description:
        'Buche online oder kontaktiere uns direkt – wir bestätigen per SMS, senden 24 Stunden vorher eine Erinnerung und empfehlen den passenden Service.',
      features: [
        { label: 'Verfügbarkeit in Echtzeit', indicatorColor: 'emerald' },
        { label: 'Private Events auf Anfrage', indicatorColor: 'amber' },
        { label: '24h-Erinnerung per SMS oder WhatsApp', indicatorColor: 'emerald' },
      ],
      whatsappLabel: 'Per WhatsApp buchen',
      whatsappHref: 'https://wa.me/41215551234',
      emailLabel: 'Schreibe uns eine E-Mail',
      emailHref: 'mailto:welcome@arena-barbershop.ch',
      hours: ['Dienstag – Freitag · 09:00 – 20:00', 'Samstag · 09:00 – 18:00'],
      address: 'Aarauerstrasse 97, Olten',
      ambienceImage: {
        src: 'https://images.unsplash.com/photo-1549289524-06cf8837aceb',
        alt: 'Detail der Arena Barbershop Lounge mit Signature-Drinks und Designmöbeln',
      },
    },
    footer: {
      kicker: 'Arena Barbershop',
      address: 'Aarauerstrasse 97 · 4600 Olten · Schweiz',
      phoneLabel: '+41 21 555 12 34',
      phoneHref: 'tel:+41215551234',
      emailLabel: 'welcome@arena-barbershop.ch',
      emailHref: 'mailto:welcome@arena-barbershop.ch',
      socials: [
        { label: 'Instagram', href: 'https://www.instagram.com/arenabarbershop.ch/' },
        { label: 'TikTok', href: 'https://www.tiktok.com/@arenabarbershopolten?lang=en' },
      ],
      bottom: {
        rights: 'Arena Barbershop. Alle Rechte vorbehalten.',
        crafted: 'Täglich vom Arena Team in Olten kuratiert.',
      },
    },
  },
  fr: {
    navigation: {
      badge: 'Arena',
      brandTop: 'Arena',
      brandBottom: 'Barbershop',
      initials: 'AB',
      menu: [
        { label: 'Services', href: '#services' },
        { label: 'Expérience', href: '#experience' },
        { label: 'Boutique', href: '#merchandise' },
        { label: 'Galerie', href: '#gallery' },
        { label: 'Témoignages', href: '#testimonials' },
      ],
      phoneLabel: '+41 21 555 12 34',
      phoneHref: 'tel:+41215551234',
      ctaLabel: 'Réserver',
      languageLabel: 'Langue',
      backToTopLabel: 'Retour en haut',
    },
    hero: {
      locationTag: 'Suisse · Olten',
      heading: 'Une élégance masculine sans compromis, au cœur d’Olten.',
      description:
        'Arena Barbershop à Olten propose des rituels de grooming sur mesure pour l’homme contemporain. Coupes précises, rasages traditionnels à la serviette chaude et soins réparateurs laissent une signature impeccable.',
      ctaPrimary: 'Réserver votre fauteuil',
      ctaSecondary: 'Découvrir le lieu',
      stats: [
        { label: 'Expérience', value: '12+ ans' },
        { label: 'Clients fidèles', value: '2.5K+' },
        { label: 'Sélection de produits', value: 'Premium' },
      ],
      heroBadge: 'Barbier premium',
      imageAlt: 'Barbier professionnel perfectionnant la coupe d’un client',
      partnersLabel: 'Nous travaillons avec des maisons comme',
      partners: ['Olaplex', 'Davines', 'Proraso', 'Uppercut Deluxe'],
      highlightLabel: 'Pourquoi choisir Arena',
      highlights: [
        'Rituels de grooming sur mesure au savoir-faire artisanal',
        'Équipe certifiée et multilingue formée à l’international',
        'Lounge privé avec cocktails signature et design iconique',
      ],
    },
    services: {
      kicker: 'Services signature',
      heading: 'Coupes tailleur et rituels de grooming sur mesure',
      description:
        'Technicité, diagnostic personnalisé et produits haute performance maintiennent votre look entre deux rendez-vous.',
      items: [
        {
          title: 'Arena Signature Cut',
          description:
            'Diagnostic personnalisé, shampooing dynamisant, coupe tailleur et coiffage final adapté à votre quotidien.',
          duration: '45 minutes',
          price: 'CHF 68',
	          highlights: [
	            'Analyse visage et matière capillaire',
	            'Massage du cuir chevelu avec shampooing pro',
	            'Finition avec produits sélectionnés Arena',
	          ],
	          imageUrl: service1ImageUrl,
	        },
	        {
	          title: 'Rasage Impérial',
          description:
            'Rituel serviette chaude aux huiles botaniques, rasage à lame unique en trois passages et finition apaisante élaborée en Suisse.',
          duration: '40 minutes',
          price: 'CHF 55',
	          highlights: [
	            'Préparation hot towel aromatique',
	            'Rasage trois passes à lame unique',
	            'Soin apaisant post-rasage',
	          ],
	          imageUrl: service2ImageUrl,
	        },
	        {
	          title: 'Beard Sculpting & Care',
          description:
            'Restructuration complète de la barbe, cartographie des lignes, vapeur botanique et coaching d’entretien sur mesure.',
          duration: '35 minutes',
          price: 'CHF 48',
	          highlights: [
	            'Cartographie des lignes personnalisée',
	            'Vapeur botanique aux huiles essentielles',
	            'Huile et baume signature Arena',
	          ],
	          imageUrl: service3ImageUrl,
	        },
	        {
	          title: 'Total Refresh Experience',
          description:
            'Parcours complet : coupe signature, définition de la barbe, soin visage oxygénant et boisson de bienvenue servie au lounge.',
          duration: '75 minutes',
          price: 'CHF 120',
	          highlights: [
	            'Service coordonné cheveux + barbe',
	            'Masque visage revitalisant',
	            'Boisson signature au choix',
	          ],
	          imageUrl: service4ImageUrl,
	        },
      ],
    },
    experience: {
      kicker: 'Notre philosophie',
      heading: 'Un rituel qui marie précision, hospitalité et design contemporain.',
      description:
        'Arena Barbershop a été pensé comme un lounge contemporain où le temps ralentit. De la réservation digitale au cocktail signé, chaque étape est orchestrée en plusieurs langues pour une expérience fluide et premium.',
      chips: ['Équipe multilingue', 'Hospitalité suisse', 'Matériaux responsables', 'Réservation digitale'],
	      values: [
	        {
	          title: 'Professionnels certifiés',
	          description:
	            'Barbiers aux parcours internationaux qui se forment en continu dans les meilleures académies afin de proposer techniques et tendances actuelles.',
	          imageUrl: philosophy1ImageUrl,
	        },
	        {
	          title: 'Produits réfléchis',
	          description:
	            'Partenariats avec des maisons suisses et nordiques privilégiant ingrédients naturels, recharges et chaînes transparentes.',
	          imageUrl: philosophy2ImageUrl,
	        },
	        {
	          title: 'Expérience lounge',
	          description:
	            'Fauteuils vintage restaurés, lumière scénographiée et playlist ciselée transforment chaque passage en parenthèse maîtrisée.',
	          imageUrl: philosophy3ImageUrl,
	        },
	        {
	          title: 'Hospitalité sur mesure',
	          description:
	            'Espresso artisanal, single malt ou eau infusée : choisissez votre rituel d’accueil pendant que l’équipe prépare votre service.',
	          imageUrl: philosophy4ImageUrl,
	        },
	      ],
	    },
    gallery: {
      kicker: 'Le lieu',
      heading: 'Un salon qui conjugue artisanat, design et confort.',
      description:
        'Bois fumés, acier noir mat et laiton brossé dessinent un lounge contemporain avec fauteuils italiens restaurés, éclairages sculptés et bibliothèque de magazines indépendants.',
      items: [
        {
          title: 'Fauteuils italiens restaurés',
          description: 'Assises en cuir pleine fleur pour un confort intemporel et sophistiqué.',
          imageUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899d',
        },
        {
          title: 'Détails artisanaux',
          description: 'Quincaillerie sur mesure, outils affûtés à la main et présentations d’accessoires haut de gamme.',
          imageUrl: 'https://images.unsplash.com/photo-1621609776216-d76232c41799',
        },
        {
          title: 'Boutique & lounge',
          description: 'Espace dédié aux capsules apparel, accessoires et cocktails signature pour prolonger l’expérience Arena.',
          imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
        },
      ],
    },
    merchandise: {
      kicker: 'Boutique Arena',
      heading: 'Une sélection pointue pour prolonger le rituel au quotidien',
      description:
        'Essentiels professionnels, capsules apparel et accessoires lifestyle sélectionnés par nos barbiers pour emporter la signature Arena partout.',
      highlight: {
        badge: 'Service concierge',
        title: 'Personal shopper grooming & lifestyle',
        description:
          'Réservez 15 minutes de conseil pour composer des routines sur mesure, capsules saisonnières et coffrets cadeaux avec packaging dédié.',
      },
      features: [
        'Curation trimestrielle par l’équipe barber & style',
        'Ligne exclusive Arena confectionnée avec des matières responsables',
        'Retrait immédiat ou livraison personnalisée sur Olten',
      ],
	      collections: [
	        {
	          title: 'Vêtements',
	          description:
	            'Sweats, t-shirts et casquettes en matières organiques avec broderies Arena, pensés pour le lounge et la ville.',
	          priceRange: 'CHF 45 – 120',
	          badge: 'Vêtements',
	          highlights: [
	            'Coton biologique certifié GOTS',
	            'Coupes unisexes en palettes saisonnières',
	            'Éditions limitées numérotées',
	          ],
	          imageUrl: merchApparelImageUrl,
	        },
	        {
	          title: 'Coffee cups',
	          description:
	            'Mugs en porcelaine et gobelets isothermes en acier pour recréer le rituel café Arena où que vous soyez.',
	          priceRange: 'CHF 22 – 48',
	          badge: 'Café',
	          highlights: [
	            'Porcelaine italienne double émaillage',
	            'Version isotherme avec couvercle hermétique',
	            'Coffret cadeau avec linge en lin Arena',
	          ],
	          imageUrl: merchCoffeeImageUrl,
	        },
	        {
	          title: 'Accessoires',
	          description:
	            'Cabas en toile recyclée et essentiels lounge au marquage minimal pour accompagner bureau, sport et week-end.',
	          priceRange: 'CHF 25 – 38',
	          badge: 'Accessoires',
	          highlights: [
	            'Canvas 100 % recyclé avec fibres suisses',
	            'Anses renforcées et poche intérieure',
	            'Lavable et pliable en quelques secondes',
	          ],
	          imageUrl: merchAccessoriesImageUrl,
	        },
	        {
	          title: 'Produits barbe & cheveux',
	          description:
	            'Huiles botaniques, baumes apaisants, argiles mates et sprays volume pour une finition naturelle et durable.',
	          priceRange: 'CHF 28 – 68',
	          badge: 'Grooming',
	          highlights: [
	            'Formules botaniques enrichies en vitamines A, C et E',
	            'Tenue équilibrée au fini naturel',
	            'Formats voyage et recharges disponibles',
	          ],
	          imageUrl: merchBeardHairImageUrl,
	        },
	      ],
      ctaPrimaryLabel: 'Réserver une consultation',
      ctaPrimaryHref: '#booking',
      ctaSecondaryLabel: 'Écrire sur WhatsApp',
      ctaSecondaryHref: 'https://wa.me/41215551234',
    },
	    testimonials: {
	      kicker: 'Voix de la communauté',
	      heading: 'Pourquoi choisir Arena Barbershop',
	      description:
	        'Entrepreneurs, créatifs et chefs partagent comment un rituel sur mesure redéfinit leur routine.',
	      items: [
        {
          name: 'Lorenzo M.',
          role: 'Conseiller financier · Genève',
          quote:
            'Chaque rendez-vous est cadencé et apaisant : diagnostic précis, finitions nettes et recommandations utiles sans perte de temps.',
          avatarUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
        },
        {
          name: 'James P.',
          role: 'Directeur créatif · Zurich',
          quote:
            'Une hospitalité digne d’un boutique-hôtel : parfaitement bilingue, obsession du détail et conseils produits pour prolonger l’expérience à la maison.',
          avatarUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
        },
	        {
	          name: 'Nicolas M.',
	          role: 'Chef · Olten',
	          quote:
	            'Le rituel barbe est devenu incontournable : serviette chaude aromatique, huiles suisses naturelles et techniques faciles à reproduire en cuisine.',
	          avatarUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39',
	        },
	        {
	          name: 'Matteo R.',
	          role: 'Founder · Bâle',
	          quote:
	            'Coupe nette et durable, ambiance ultra soignée. Les conseils produits sont précis et vraiment adaptés à mon quotidien.',
	          avatarUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
	        },
	      ],
	    },
    booking: {
      kicker: 'Réservation',
      heading: 'Bloquez votre fauteuil réservé en quelques minutes.',
      description:
        'Réservez en ligne ou contactez-nous directement : confirmation par SMS, rappel 24 h avant et recommandation du service le plus adapté.',
      features: [
        { label: 'Disponibilités en temps réel', indicatorColor: 'emerald' },
        { label: 'Événements privés sur demande', indicatorColor: 'amber' },
        { label: 'Rappel 24h par SMS ou WhatsApp', indicatorColor: 'emerald' },
      ],
      whatsappLabel: 'Réserver via WhatsApp',
      whatsappHref: 'https://wa.me/41215551234',
      emailLabel: 'Nous écrire un e-mail',
      emailHref: 'mailto:welcome@arena-barbershop.ch',
      hours: ['Mardi – Vendredi · 09:00 – 20:00', 'Samedi · 09:00 – 18:00'],
      address: 'Aarauerstrasse 97, Olten',
      ambienceImage: {
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
        alt: 'Ambiance lounge d’Arena Barbershop avec fauteuils et cocktail signature',
      },
    },
    footer: {
      kicker: 'Arena Barbershop',
      address: 'Aarauerstrasse 97 · 4600 Olten · Suisse',
      phoneLabel: '+41 21 555 12 34',
      phoneHref: 'tel:+41215551234',
      emailLabel: 'welcome@arena-barbershop.ch',
      emailHref: 'mailto:welcome@arena-barbershop.ch',
      socials: [
        { label: 'Instagram', href: 'https://www.instagram.com/arenabarbershop.ch/' },
        { label: 'TikTok', href: 'https://www.tiktok.com/@arenabarbershopolten?lang=en' },
      ],
      bottom: {
        rights: 'Arena Barbershop. Tous droits réservés.',
        crafted: 'Réalisé au quotidien par l’équipe Arena à Olten.',
      },
    },
  },
};
