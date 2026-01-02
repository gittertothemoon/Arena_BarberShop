import Container from './Container';
import SectionHeading from './SectionHeading';
import type { TestimonialsContent } from '../i18n/translations';

const StarIcon = () => (
  <svg aria-hidden className="h-4 w-4 text-brand-gold" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 1.5 12.6 7l5.4.4-4.1 3.6 1.3 5.3L10 13.9 4.8 16.3l1.3-5.3L2 7.4 7.4 7z" />
  </svg>
);

const TestimonialsSection = ({ content }: { content: TestimonialsContent }) => {
  return (
    <section className="relative py-20 sm:py-24" id="testimonials">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-transparent via-slate-950/60 to-transparent" />

      <Container className="space-y-12">
	        <SectionHeading
	          kicker={content.kicker}
	          title={content.heading}
	          description={content.description}
	          align="center"
	          showAccentLine={false}
	        />
	        <div className="grid gap-6 md:grid-cols-2">
	          {content.items.map((testimonial, index) => (
	            <blockquote
	              key={testimonial.name}
	              className="ui-card ui-card-hover group relative flex h-full flex-col justify-between gap-8 p-8"
	            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-brand-gold">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <StarIcon key={starIndex} />
                    ))}
                  </div>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-brand-gold/80">
                    5.0
                  </span>
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-slate-300">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>
              <p className="text-lg text-slate-200 sm:text-xl">“{testimonial.quote}”</p>
              <footer className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                <img
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full border border-white/15 object-cover"
                  loading="lazy"
                  src={`${testimonial.avatarUrl}?auto=format&fit=crop&w=200&q=80`}
                />
                <div className="flex flex-col text-left text-sm text-slate-400">
                  <span className="text-base font-semibold text-white">{testimonial.name}</span>
                  <span>{testimonial.role}</span>
                </div>
              </footer>
              <div className="pointer-events-none absolute inset-0 rounded-[var(--ui-radius-card)] border border-transparent transition group-hover:border-brand-gold/30" />
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-gold/15 blur-2xl opacity-0 transition group-hover:opacity-100" />
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
