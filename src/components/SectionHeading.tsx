import { cn } from '../lib/cn';

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  showAccentLine?: boolean;
  className?: string;
  eyebrowClassName?: string;
};

const SectionHeading = ({
  kicker,
  title,
  description,
  align = 'left',
  showAccentLine = true,
  className,
  eyebrowClassName,
}: SectionHeadingProps) => {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'relative flex flex-col gap-5 text-white',
        isCenter ? 'mx-auto max-w-3xl items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      <div
        className={cn(
          'flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.45em] text-brand-gold',
          isCenter ? 'justify-center' : 'justify-start',
          eyebrowClassName,
        )}
      >
        <span
          aria-hidden
          className={cn(
            'hidden h-px w-10 bg-brand-gold/60 sm:block',
            isCenter && 'opacity-80',
          )}
        />
        <span>{kicker}</span>
        {isCenter ? (
          <span aria-hidden className="hidden h-px w-10 bg-brand-gold/60 sm:block" />
        ) : null}
      </div>

      <div className="relative flex w-full flex-col gap-5">
        {showAccentLine ? (
          <span
            aria-hidden
            className={cn(
              'pointer-events-none absolute top-1/3 hidden h-16 w-px -translate-x-8 bg-gradient-to-b from-brand-gold/0 via-brand-gold/70 to-brand-gold/0 lg:block',
              isCenter ? 'left-1/2 -translate-x-[calc(50%+2rem)]' : 'left-0',
            )}
          />
        ) : null}

        <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl xl:text-[3rem]">
          <span className="bg-gradient-to-r from-white via-white to-brand-gold/70 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>

        {description ? (
          <p
            className={cn(
              'max-w-2xl text-sm text-slate-300 sm:text-base lg:text-lg/relaxed',
              isCenter ? 'mx-auto text-center' : 'text-left',
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default SectionHeading;
