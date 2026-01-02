import Container from './Container';
import SectionHeading from './SectionHeading';
import type { ExperienceContent } from '../i18n/translations';

const ExperienceSection = ({ content }: { content: ExperienceContent }) => {
  const chipsSummary = content.chips.join(' · ');

  return (
    <section className="relative py-20 sm:py-24" id="experience">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-slate-950/40 via-transparent to-transparent" />

	      <Container className="relative isolate ui-panel grid gap-12 p-8 sm:p-10 lg:grid-cols-[0.8fr_1fr] lg:gap-16 xl:max-w-[86rem] xl:grid-cols-[minmax(22rem,0.8fr)_minmax(0,1.2fr)] xl:gap-20 2xl:max-w-[94rem] 2xl:grid-cols-[minmax(24rem,0.75fr)_minmax(0,1.25fr)]">
        <div className="space-y-10">
	          <SectionHeading
	            kicker={content.kicker}
	            title={content.heading}
	            description={content.description}
	            className="space-y-8"
	            showAccentLine={false}
	          />
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">
            {content.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-300 backdrop-blur-lg">
            <p className="text-base font-medium leading-relaxed text-white/85 sm:text-lg">
              “{content.description}”
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.4em] text-brand-gold">
              {chipsSummary}
            </p>
          </div>
	        </div>
		        <div className="relative grid gap-8 sm:grid-cols-2 lg:gap-10">
		          {content.values.map((value) => (
		            <div
		              key={value.title}
		              className="ui-card ui-card-hover group relative flex h-full flex-col gap-6 p-7 sm:p-8"
		            >
	              <div className="relative h-40 overflow-hidden rounded-2xl sm:h-44">
	                <img
	                  alt={value.title}
	                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
	                  loading="lazy"
	                  src={
	                    value.imageUrl.startsWith('http')
	                      ? `${value.imageUrl}?auto=format&fit=crop&w=900&q=85`
	                      : value.imageUrl
	                  }
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
	              </div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">{value.title}</h3>
              <p className="text-sm text-slate-300 sm:text-base">{value.description}</p>
              <div className="pointer-events-none absolute inset-0 rounded-[var(--ui-radius-card)] border border-transparent transition group-hover:border-brand-gold/30" />
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-gold/15 blur-2xl" />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[var(--ui-radius-panel)] border border-white/5" />
        <div className="pointer-events-none absolute -right-32 top-1/2 -z-20 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 -z-20 h-52 w-52 rounded-full bg-brand-rose/10 blur-3xl" />
      </Container>
    </section>
  );
};

export default ExperienceSection;
