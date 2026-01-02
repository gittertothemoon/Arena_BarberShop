import Container from './Container';
import heroImage from '../assets/hero-banner.png';
import type { HeroContent } from '../i18n/translations';

type HeroSectionProps = {
  content: HeroContent;
};

const HeroSection = ({ content }: HeroSectionProps) => {
  return (
    <section
      className="relative isolate min-h-[600px] overflow-hidden bg-slate-950 pb-20 pt-20 sm:pt-28 sm:pb-20 lg:min-h-[680px] lg:pt-32 lg:pb-20"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(10, 12, 32, 0.68), rgba(10, 18, 47, 0.52) 55%, rgba(33, 26, 12, 0.4)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/55 via-slate-950/15 to-brand-gold/12 mix-blend-soft-light" />

      <Container className="relative space-y-10">
        <div className="grid min-h-[460px] items-stretch gap-8 lg:min-h-[520px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-brand-gold/90 backdrop-blur">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-gold" />
              {content.locationTag}
            </div>

            <div className="space-y-5 text-balance">
              <h1 className="text-[2.3rem] font-semibold leading-[1.04] text-white sm:text-[2.7rem] xl:text-[3.2rem]">
                {content.heading}
              </h1>
              <p className="max-w-2xl text-[0.93rem] text-slate-200 sm:text-[0.98rem]">
                {content.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {content.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-[0.82rem] text-slate-100 shadow-[0_24px_60px_-50px_rgba(10,10,10,0.6)] backdrop-blur"
                >
                  <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-brand-gold" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                className="ui-focus ui-btn ui-btn-primary ui-btn-md"
                href="#booking"
              >
                {content.ctaPrimary}
              </a>
              <a
                className="ui-focus ui-btn ui-btn-secondary ui-btn-md"
                href="#gallery"
              >
                {content.ctaSecondary}
              </a>
            </div>
          </div>

          <aside className="flex flex-col gap-6 rounded-[28px] border border-white/10 bg-slate-950/65 p-5 text-slate-200 shadow-[0_24px_60px_-45px_rgba(2,6,23,1)] backdrop-blur">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.36em] text-white/90">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-gold" />
              {content.heroBadge}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {content.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="space-y-1.5 rounded-2xl border border-white/10 bg-white/10 p-3 text-left text-white/90"
                >
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.36em] text-slate-300">
                    {stat.label}
                  </p>
                  <p className="text-[1.75rem] font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-slate-300">
                {content.partnersLabel}
              </p>
              <div className="flex flex-wrap gap-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-slate-200">
                {content.partners.map((partner) => (
                  <span key={partner} className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-300">
          <span className="inline-flex h-1.5 w-1.5 flex-none rounded-full bg-brand-gold" />
          <span className="text-white/70">{content.locationTag}</span>
          <span className="hidden h-px flex-1 bg-white/20 sm:block" />
          <span className="text-white/60">{content.heroBadge}</span>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
