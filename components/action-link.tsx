import { ArrowRight } from 'lucide-react';

/** Pill-shaped primary call-to-action link with an embedded circular arrow badge. */
export function ActionLink({
  children,
  href = '#contact',
  light = false,
  size = 'md',
  className = '',
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  light?: boolean;
  size?: 'sm' | 'md';
  className?: string;
  onClick?: () => void;
}) {
  const isCompact = size === 'sm';

  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center justify-center rounded-full uppercase transition duration-300 hover:-translate-y-0.5 active:scale-[0.98] ${
        isCompact
          ? 'gap-2.5 py-2 pl-4 pr-2 text-[11px] font-bold tracking-[0.08em]'
          : 'gap-3.5 py-2.5 pl-6 pr-2.5 text-[13px] font-extrabold tracking-[0.06em] sm:text-sm'
      } ${
        light
          ? 'bg-white text-forest shadow-[0_14px_34px_rgba(12,24,18,0.28)] ring-1 ring-white/80 hover:bg-sand hover:ring-sand hover:shadow-[0_18px_40px_rgba(12,24,18,0.34)]'
          : 'bg-sage text-white shadow-[0_14px_28px_rgba(86,118,94,0.28)] hover:bg-forest hover:shadow-[0_18px_36px_rgba(35,59,48,0.32)]'
      } ${className}`}
    >
      <span>{children}</span>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
          isCompact ? 'h-6 w-6' : 'h-8 w-8'
        } ${
          light
            ? 'bg-sage text-white group-hover:bg-forest'
            : 'bg-white/20 text-white group-hover:bg-white/25'
        }`}
      >
        <ArrowRight
          size={isCompact ? 12 : 15}
          strokeWidth={isCompact ? 2.5 : 2.75}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </span>
    </a>
  );
}
