import Container from './Container';
import SectionHeading from './SectionHeading';
import type { GalleryContent } from '../i18n/translations';

const GallerySection = ({ content }: { content: GalleryContent }) => {
  return (
    <section className="relative py-20 sm:py-24" id="gallery">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.12),_transparent_75%)]" />

      <Container className="space-y-12">
	        <SectionHeading
	          kicker={content.kicker}
	          title={content.heading}
	          description={content.description}
	          align="center"
	          showAccentLine={false}
	          eyebrowClassName="px-6"
	        />
        <div className="grid gap-6 md:grid-cols-3">
          {content.items.map((item, index) => (
            <figure
              key={item.title}
              className={`ui-card ui-card-hover group relative overflow-hidden ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-200 backdrop-blur">
                <span className="text-brand-gold">{(index + 1).toString().padStart(2, '0')}</span>
                <span>{content.kicker}</span>
              </div>
              <img
                alt={item.title}
                className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${
                  index === 0 ? 'md:h-[540px]' : 'md:h-[260px]'
                }`}
                src={`${item.imageUrl}?auto=format&fit=crop&w=1200&q=80`}
              />
              <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent p-8 text-left">
                <p className="text-lg font-semibold text-white sm:text-xl">{item.title}</p>
                <p className="mt-2 text-sm text-slate-300 sm:text-base">{item.description}</p>
              </figcaption>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-gold/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GallerySection;
