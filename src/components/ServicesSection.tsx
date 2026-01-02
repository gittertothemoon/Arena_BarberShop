import Container from './Container';
import SectionHeading from './SectionHeading';
import type { ServicesContent } from '../i18n/translations';

const CheckIcon = () => (
  <svg
    aria-hidden
    className="h-3 w-3"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 8.25 2.75 6.5l-.7.7L4.5 9.65l5-5-.7-.7-4.3 4.3Z"
      className="fill-current"
    />
  </svg>
);

const ServicesSection = ({ content }: { content: ServicesContent }) => {
  return (
    <section className="relative mt-20 py-20 sm:mt-28 sm:py-24 lg:mt-32" id="services">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[120%] -translate-y-1/2 bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.08),_transparent_70%)]" />

      <Container className="space-y-12">
        <SectionHeading kicker={content.kicker} title={content.heading} description={content.description} />
        <div className="grid gap-6 lg:grid-cols-2">
          {content.items.map((service, index) => (
            <article
              key={service.title}
              className="ui-card ui-card-hover group relative flex h-full flex-col overflow-hidden bg-white/[0.03] shadow-[0_30px_80px_-50px_rgba(15,23,42,0.9)]"
            >
	              <div className="relative h-56 overflow-hidden sm:h-64">
	                <img
	                  alt={service.title}
	                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
	                  loading="lazy"
	                  src={
	                    service.imageUrl.startsWith('http')
	                      ? `${service.imageUrl}?auto=format&fit=crop&w=1400&q=85`
	                      : service.imageUrl
	                  }
	                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white backdrop-blur-sm">
                  <span className="text-brand-gold">{(index + 1).toString().padStart(2, '0')}</span>
                  {service.duration}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-8 px-8 pb-8 pt-10 lg:px-10">
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white sm:text-[1.7rem]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 sm:text-base">{service.description}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end text-right">
                  <p className="text-2xl font-semibold text-brand-gold sm:text-3xl">
                    {service.price}
                  </p>
                  <span className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-slate-500">
                    {content.kicker}
                  </span>
                </div>
                <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2 sm:text-base">
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 transition group-hover:border-brand-gold/35"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold">
                        <CheckIcon />
                      </span>
                      <span className="text-left">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-gold/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
