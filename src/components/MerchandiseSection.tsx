import Container from './Container';
import SectionHeading from './SectionHeading';
import type { MerchandiseContent } from '../i18n/translations';

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

const MerchandiseSection = ({ content }: { content: MerchandiseContent }) => {
  return (
    <section className="relative py-20 sm:py-24" id="merchandise">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.12),_transparent_70%)]" />

      <Container className="space-y-12 xl:max-w-[86rem] 2xl:max-w-[94rem]">
        <SectionHeading
          kicker={content.kicker}
          title={content.heading}
          description={content.description}
        />

	        <div className="grid gap-8 xl:grid-cols-[minmax(22rem,0.8fr)_minmax(0,1.2fr)] 2xl:grid-cols-[minmax(24rem,0.75fr)_minmax(0,1.25fr)]">
          <aside className="ui-card flex h-full flex-col justify-between gap-8 bg-white/[0.03] p-8">
            <div className="space-y-6">
              <span className="inline-flex w-fit items-center gap-3 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
                {content.highlight.badge}
              </span>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-white sm:text-[1.75rem]">
                  {content.highlight.title}
                </h3>
                <p className="text-sm text-slate-300 sm:text-base">
                  {content.highlight.description}
                </p>
              </div>
            </div>
            <ul className="grid gap-3 text-sm text-slate-200 sm:text-base">
              {content.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold">
                    <CheckIcon />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="ui-focus ui-btn ui-btn-primary flex-1 px-6 py-3 text-center text-sm"
                href={content.ctaPrimaryHref}
                target={content.ctaPrimaryHref.startsWith('http') ? '_blank' : undefined}
                rel={content.ctaPrimaryHref.startsWith('http') ? 'noreferrer' : undefined}
              >
                {content.ctaPrimaryLabel}
              </a>
              <a
                className="ui-focus ui-btn ui-btn-secondary flex-1 px-6 py-3 text-center text-sm"
                href={content.ctaSecondaryHref}
                target={content.ctaSecondaryHref.startsWith('http') ? '_blank' : undefined}
                rel={content.ctaSecondaryHref.startsWith('http') ? 'noreferrer' : undefined}
              >
                {content.ctaSecondaryLabel}
              </a>
            </div>
          </aside>

	          <div className="grid gap-6 sm:grid-cols-2 lg:gap-7">
	            {content.collections.map((collection) => (
	              <article
                key={collection.title}
                className="ui-card ui-card-hover group relative overflow-hidden p-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                    <span>{collection.priceRange}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      {collection.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{collection.title}</h3>
                  <p className="text-sm text-slate-300">{collection.description}</p>
                  <ul className="space-y-2 text-sm text-slate-200">
                    {collection.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 text-[0.6rem] text-brand-gold">
                          <CheckIcon />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent opacity-0 transition group-hover:opacity-100" />
	                {collection.imageUrl ? (
	                  <div className="pointer-events-none absolute -right-8 bottom-[-10%] h-36 w-36 overflow-hidden rounded-3xl border border-white/10 bg-white/5 opacity-60">
	                    <img
	                      alt={collection.title}
	                      className="h-full w-full object-cover"
	                      src={
	                        collection.imageUrl.startsWith('http')
	                          ? `${collection.imageUrl}?auto=format&fit=crop&w=640&q=80`
	                          : collection.imageUrl
	                      }
	                    />
	                  </div>
	                ) : null}
	              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MerchandiseSection;
