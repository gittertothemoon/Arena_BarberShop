import Container from './Container';
import type { FooterContent } from '../i18n/translations';
import logo from '../assets/logo.png';

type FooterProps = {
  content: FooterContent;
};

const socialIcons: Record<string, JSX.Element> = {
  Instagram: (
    <svg
      aria-hidden
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 7h.01"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  TikTok: (
    <svg
      aria-hidden
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 5.5c.7.9 1.6 1.5 2.8 1.7V9c-1.1-.02-2.1-.36-3-1v6.8c0 2.86-2.32 4.7-4.72 4.7a4.28 4.28 0 0 1-4.28-4.27c0-2.33 1.61-4.13 3.96-4.26v2.38c-.65.08-1.16.63-1.16 1.33 0 .76.6 1.36 1.36 1.36 1.02 0 1.6-.77 1.6-1.87V5h3.44Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  YouTube: (
    <svg
      aria-hidden
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 12.1c0-1.3-.1-2.5-.3-3.6a3.1 3.1 0 0 0-2.2-2.3C15.9 5.7 14 5.6 12 5.6c-2 0-3.9.1-5.5.6a3.1 3.1 0 0 0-2.2 2.3c-.2 1.1-.3 2.3-.3 3.6 0 1.3.1 2.5.3 3.6a3.1 3.1 0 0 0 2.2 2.3c1.6.5 3.5.6 5.5.6 2 0 3.9-.1 5.5-.6a3.1 3.1 0 0 0 2.2-2.3c.2-1.1.3-2.3.3-3.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M10.4 9.6 15.2 12l-4.8 2.4V9.6Z"
        fill="currentColor"
      />
    </svg>
  ),
};

const Footer = ({ content }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,209,140,0.12),_transparent_70%)]" />
      <Container className="relative py-14 text-sm text-slate-300 sm:py-16 xl:max-w-[86rem] 2xl:max-w-[94rem]">
        <div className="ui-panel relative overflow-hidden p-8 sm:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-28 bottom-0 h-52 w-52 rounded-full bg-brand-rose/10 blur-3xl" />

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start lg:gap-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img
                  alt={content.kicker}
                  className="h-16 w-16 rounded-3xl border border-brand-gold/30 bg-white object-contain p-3 shadow-[0_25px_50px_-35px_rgba(15,23,42,0.8)]"
                  src={logo}
                />
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-gold/90">
                    {content.kicker}
                  </p>
                  <p className="text-base font-medium text-white">{content.address}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <a
                className="ui-focus ui-card ui-card-hover flex items-center justify-between gap-4 px-6 py-4 text-sm text-slate-200"
                href={content.phoneHref}
              >
                <span className="font-semibold text-white">{content.phoneLabel}</span>
              </a>
              <a
                className="ui-focus ui-card ui-card-hover flex items-center justify-between gap-4 px-6 py-4 text-sm text-slate-200"
                href={content.emailHref}
              >
                <span className="font-semibold text-white">{content.emailLabel}</span>
              </a>

              <div className="flex items-center gap-3 pt-2 text-white">
                {content.socials.map((social) => {
                  const icon = socialIcons[social.label];

                  return (
                    <a
                      key={social.label}
                      className="ui-focus ui-icon-btn hover:border-brand-gold/60 hover:text-brand-gold"
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {icon ? (
                        <>
                          <span className="sr-only">{social.label}</span>
                          {icon}
                        </>
                      ) : (
                        social.label
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {currentYear} {content.bottom.rights}
            </p>
            <p>{content.bottom.crafted}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
