import Container from './Container';
import type { BookingContent } from '../i18n/translations';

type BookingSectionProps = {
  content: BookingContent;
};

const indicatorColors: Record<BookingContent['features'][number]['indicatorColor'], string> = {
  emerald: 'bg-emerald-400',
  amber: 'bg-amber-400',
};

const BookingSection = ({ content }: BookingSectionProps) => {
  return (
    <section className="relative py-20 sm:py-24" id="booking">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_bottom,_rgba(245,209,140,0.15),_transparent_65%)]" />

      <Container>
        <div className="overflow-hidden rounded-[44px] border border-brand-gold/40 bg-gradient-to-br from-brand-gold/12 via-black/60 to-brand-gold/10 p-8 shadow-[0_40px_140px_-70px_rgba(245,209,140,0.6)] backdrop-blur-lg lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-brand-gold/50 bg-brand-gold/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-brand-gold">
                <span className="h-2 w-2 rounded-full bg-brand-gold" />
                {content.kicker}
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-[2.8rem]">
                  {content.heading}
                </h2>
                <p className="text-base text-slate-200 sm:text-lg">{content.description}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {content.features.map((feature) => (
                  <div
                    key={feature.label}
                    className="relative flex items-center gap-3 rounded-3xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-slate-200"
                  >
                    <span className={`relative flex h-3 w-3 items-center justify-center rounded-full ${indicatorColors[feature.indicatorColor]}`}>
                      <span className="absolute inset-0 rounded-full bg-current/20 blur-sm" />
                    </span>
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <img
                  alt={content.ambienceImage.alt}
                  className="h-full w-full max-h-72 object-cover"
                  loading="lazy"
                  src={`${content.ambienceImage.src}?auto=format&fit=crop&w=1400&q=85`}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-sm text-slate-300">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
                  {content.kicker}
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div>
                    {content.hours.map((slot, hourIndex) => (
                      <p key={slot} className={`text-xs uppercase tracking-[0.3em] text-slate-500 ${hourIndex === 0 ? '' : 'mt-2'}`}>
                        {slot}
                      </p>
                    ))}
                  </div>
                  <p className="text-base text-white">{content.address}</p>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 rounded-[32px] border border-white/20 bg-slate-950/90 p-8 text-sm text-slate-200 shadow-[0_20px_60px_-40px_rgba(15,23,42,1)]">
              <a
                className="ui-focus ui-btn ui-btn-primary ui-btn-lg w-full"
                href={content.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                {content.whatsappLabel}
              </a>
              <a
                className="ui-focus ui-btn ui-btn-secondary ui-btn-lg w-full"
                href={content.emailHref}
              >
                {content.emailLabel}
              </a>
              <div className="rounded-2xl border border-white/15 bg-black/40 p-5 text-xs uppercase tracking-[0.3em] text-slate-400">
                {content.hours.map((slot) => (
                  <p key={slot} className={slot === content.hours[0] ? undefined : 'mt-2'}>
                    {slot}
                  </p>
                ))}
                <p className="mt-2 text-sm font-medium normal-case text-slate-100">{content.address}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookingSection;
