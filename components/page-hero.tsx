import type { CSSProperties } from 'react';
import { ArrowDown } from 'lucide-react';

export function PageHero({ eyebrow, title, description, image, label = 'Scroll to explore', compact = false }: { eyebrow: string; title: string; description: string; image: string; label?: string; compact?: boolean }) {
  return (
    <section className="relative isolate overflow-hidden bg-forest text-white">
      <img src={image} alt="" className="hero-bg-zoom absolute inset-0 h-full w-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,43,34,0.9),rgba(24,43,34,0.56)_58%,rgba(24,43,34,0.24))]" />
      <div
        className={`relative mx-auto flex w-full max-w-[1920px] items-end px-5 lg:w-[92%] lg:px-0 2xl:w-[88%] ${
          compact
            ? 'min-h-[300px] pb-10 pt-28 sm:min-h-[420px] sm:px-8 sm:pb-16 sm:pt-36 lg:min-h-[460px] lg:pb-20 lg:pt-40'
            : 'min-h-[520px] pb-16 pt-40 sm:px-8 sm:pb-20 lg:pb-24'
        }`}
      >
        <div className="max-w-3xl">
          <p className="hero-enter mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-sand sm:mb-4">{eyebrow}</p>
          <h1
            style={{ '--hero-delay': '110ms' } as CSSProperties}
            className={`hero-enter font-display font-semibold leading-[1.04] tracking-[-0.055em] ${
              compact ? 'text-4xl sm:text-6xl lg:text-[70px]' : 'text-5xl sm:text-6xl lg:text-[76px]'
            }`}
          >
            {title}
          </h1>
          <p
            style={{ '--hero-delay': '210ms' } as CSSProperties}
            className={`hero-enter max-w-xl leading-7 text-white/75 ${
              compact ? 'mt-4 text-[15px] sm:mt-6 sm:text-lg' : 'mt-6 text-base sm:text-lg'
            }`}
          >
            {description}
          </p>
          <div
            style={{ '--hero-delay': '310ms' } as CSSProperties}
            className={`hero-enter flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/55 ${
              compact ? 'mt-6 sm:mt-10' : 'mt-10'
            }`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
              <ArrowDown size={15} />
            </span>
            {label}
          </div>
        </div>
      </div>
    </section>
  );
}
