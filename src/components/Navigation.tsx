import { useEffect, useRef, useState } from 'react';
import Container from './Container';
import type {
  Locale,
  LocaleOption,
  NavigationContent,
} from '../i18n/translations';
import logo from '../assets/logo.png';

type NavigationProps = {
  content: NavigationContent;
  locale: Locale;
  localeOptions: LocaleOption[];
  onLocaleChange: (locale: Locale) => void;
};

const Navigation = ({ content, locale, localeOptions, onLocaleChange }: NavigationProps) => {
  const [isLocaleMenuOpen, setIsLocaleMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const localeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLocaleMenuOpen) {
      return undefined;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (localeMenuRef.current && !localeMenuRef.current.contains(event.target as Node)) {
        setIsLocaleMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLocaleMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLocaleMenuOpen]);

  useEffect(() => {
    if (!isMobileNavOpen) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileNavOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileNavOpen]);

  useEffect(() => {
    if (isMobileNavOpen) {
      setIsLocaleMenuOpen(false);
    }
  }, [isMobileNavOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeLocale = localeOptions.find((option) => option.value === locale);

  const closeMobileNav = () => setIsMobileNavOpen(false);

  const shouldShowScrollTop = showScrollTop && !isMobileNavOpen;

  const navLinks = (
    <ul className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
      {content.menu.map((item) => (
        <li key={item.href}>
          <a
            className="ui-focus group relative -mx-2 inline-flex items-center rounded-xl px-2 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-300 transition hover:text-white"
            href={item.href}
            onClick={closeMobileNav}
          >
            <span>{item.label}</span>
            <span className="pointer-events-none absolute left-1/2 top-[calc(100%+0.45rem)] h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="relative z-40 ui-safe-top">
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-slate-950 via-slate-950/70 to-transparent" />
      <Container className="relative">
        <nav className="relative grid grid-cols-[auto_auto] items-center gap-6 py-4 lg:grid-cols-[8rem_1fr_13rem] lg:py-6">
          <div className="flex items-center justify-start lg:justify-end">
            <a
              className="ui-focus inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center overflow-hidden rounded-3xl border border-brand-gold/40 bg-white/85 p-1.5 transition hover:border-brand-gold/60 hover:bg-white sm:h-[7.4rem] sm:w-[7.4rem] sm:p-2 lg:h-[7.6rem] lg:w-[7.6rem] lg:p-2.5"
              href="#hero"
              onClick={closeMobileNav}
              aria-label="Arena Barbershop"
            >
              <img src={logo} alt="Arena Barbershop" className="h-[120%] w-[120%] object-contain sm:h-[130%] sm:w-[130%]" />
            </a>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <div className="px-10 xl:px-16">{navLinks}</div>
          </div>

          <div className="flex items-center justify-end gap-3 lg:justify-start">
            <div className="relative" ref={localeMenuRef}>
              <button
                type="button"
                className="ui-focus inline-flex w-[5.5rem] items-center justify-between gap-2.5 rounded-full bg-transparent px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-slate-100 transition hover:text-white sm:w-[10.5rem] sm:px-5 lg:w-[11.5rem]"
                onClick={() => setIsLocaleMenuOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={isLocaleMenuOpen}
              >
                <span className="text-[0.82rem] font-semibold tracking-[0.12em] text-brand-gold">
                  {activeLocale?.label ?? locale.toUpperCase()}
                </span>
                <span className="hidden whitespace-nowrap text-[0.69rem] tracking-[0.3em] text-slate-200 sm:inline">
                  {content.languageLabel}
                </span>
                <svg
                  aria-hidden
                  className={`h-3 w-3 transition-transform ${isLocaleMenuOpen ? 'rotate-180 text-brand-gold' : 'text-slate-200/80'}`}
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.5 1.5 6 6 1.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {isLocaleMenuOpen ? (
                <ul className="absolute right-0 z-30 mt-3 w-56 overflow-hidden rounded-2xl border border-white/12 bg-slate-950/95 p-2 shadow-2xl backdrop-blur">
                  {localeOptions.map((option) => {
                    const isActive = option.value === locale;
                    return (
                      <li key={option.value}>
                        <button
                          type="button"
                          className={`ui-focus flex w-full items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                            isActive
                              ? 'bg-brand-gold/15 text-white'
                              : 'text-slate-300 hover:bg-white/6 hover:text-white'
                          }`}
                          onClick={() => {
                            onLocaleChange(option.value);
                            setIsLocaleMenuOpen(false);
                          }}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`text-[0.8rem] font-semibold tracking-[0.12em] ${
                                isActive ? 'text-brand-gold' : 'text-slate-200'
                              }`}
                            >
                              {option.label}
                            </span>
                            {option.name}
                          </span>
                          {isActive ? (
                            <svg
                              aria-hidden
                              className="h-4 w-4 text-brand-gold"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.833 6.66699 8.125 14.375l-3.958-3.958"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>

            <a
              className="ui-focus ui-btn ui-btn-soft ui-btn-md hidden items-center justify-center gap-2 transition-transform duration-150 hover:-translate-y-0.5 lg:inline-flex lg:min-w-[12.5rem]"
              href="#booking"
            >
              {content.ctaLabel}
            </a>

            <button
              type="button"
              className="ui-focus ui-icon-btn lg:hidden"
              onClick={() => setIsMobileNavOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileNavOpen}
            >
              <svg
                aria-hidden
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6h14M3 10h14M3 14h10"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

        </nav>
      </Container>

      <div
        className={`fixed inset-0 z-30 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-200 lg:hidden ${
          isMobileNavOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMobileNav}
      />

      <div
        className={`fixed inset-x-4 top-24 z-40 origin-top rounded-3xl border border-white/12 bg-slate-950/95 p-7 shadow-2xl transition-all duration-200 lg:hidden ${
          isMobileNavOpen ? 'scale-100 opacity-100' : 'pointer-events-none -translate-y-4 scale-95 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col text-sm text-white/80">
              <span className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-gold">
                {content.brandTop}
              </span>
              <span className="text-lg font-semibold text-white">{content.brandBottom}</span>
              <a className="text-sm font-medium text-brand-gold" href={content.phoneHref}>
                {content.phoneLabel}
              </a>
            </div>
            <button
              type="button"
              className="ui-focus ui-icon-btn h-10 w-10 border-white/12 bg-transparent shadow-none hover:border-brand-gold/50"
              onClick={closeMobileNav}
              aria-label="Close navigation menu"
            >
              <svg
                aria-hidden
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5 5 15m10 0L5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="border-t border-white/12 pt-6">{navLinks}</div>

          <a
            className="ui-focus ui-btn ui-btn-soft ui-btn-md inline-flex items-center justify-center gap-2"
            href="#booking"
            onClick={closeMobileNav}
          >
            {content.ctaLabel}
          </a>
        </div>
      </div>

	      <button
	        type="button"
	        aria-label={content.backToTopLabel}
	        title={content.backToTopLabel}
	        className={`ui-focus ui-safe-fab fixed z-40 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-black/40 text-slate-200 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.75)] backdrop-blur-sm transition-all duration-200 hover:border-brand-gold/50 hover:text-brand-gold sm:h-11 sm:w-11 ${
	          shouldShowScrollTop
	            ? 'translate-y-0 opacity-100'
	            : 'pointer-events-none translate-y-3 opacity-0'
	        }`}
	        onClick={() => {
	          window.scrollTo({ top: 0, behavior: 'smooth' });
	        }}
	      >
	        <svg
	          aria-hidden
	          className="h-4 w-4"
	          viewBox="0 0 20 20"
	          fill="none"
	          xmlns="http://www.w3.org/2000/svg"
	        >
	          <path
	            d="M10 4v12M4 9.5 10 4l6 5.5"
	            stroke="currentColor"
	            strokeWidth="1.6"
	            strokeLinecap="round"
	            strokeLinejoin="round"
	          />
	        </svg>
	      </button>
    </header>
  );
};

export default Navigation;
