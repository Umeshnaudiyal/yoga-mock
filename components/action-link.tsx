'use client';

import type { MouseEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { useBookingModal } from './booking-modal';

/** Pill-shaped primary call-to-action link with optional compact mobile sizing and booking popup trigger. */
export function ActionLink({
  children,
  href = '#contact',
  light = false,
  size = 'md',
  compactMobile = false,
  modal = false,
  className = '',
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  light?: boolean;
  size?: 'sm' | 'md';
  compactMobile?: boolean;
  modal?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const { openBooking } = useBookingModal();
  const isCompact = size === 'sm';

  const sizingClass = compactMobile
    ? 'gap-2 py-1.5 pl-3.5 pr-1.5 text-[10px] font-bold tracking-[0.08em] sm:gap-2.5 sm:py-2 sm:pl-4 sm:pr-2 sm:text-[11px]'
    : isCompact
      ? 'gap-2 py-1.5 pl-3.5 pr-1.5 text-[10px] font-bold tracking-[0.08em] sm:gap-2.5 sm:py-2 sm:pl-4 sm:pr-2 sm:text-[11px]'
      : 'gap-2.5 py-2 pl-4 pr-2 text-[11px] font-extrabold tracking-[0.06em] sm:gap-3.5 sm:py-2.5 sm:pl-6 sm:pr-2.5 sm:text-sm';

  const circleClass =
    compactMobile || isCompact
      ? 'h-5 w-5 sm:h-6 sm:w-6'
      : 'h-6 w-6 sm:h-8 sm:w-8';

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (modal) {
      event.preventDefault();
      openBooking();
    }
    onClick?.();
  };

  return (
    <a
      href={modal && href === '#contact' ? '/contact' : href}
      onClick={handleClick}
      className={`group inline-flex items-center justify-center rounded-full uppercase transition duration-300 hover:-translate-y-0.5 active:scale-[0.98] ${sizingClass} ${
        light
          ? 'bg-white text-forest shadow-[0_14px_34px_rgba(12,24,18,0.28)] ring-1 ring-white/80 hover:bg-sand hover:ring-sand hover:shadow-[0_18px_40px_rgba(12,24,18,0.34)]'
          : 'bg-sage text-white shadow-[0_14px_28px_rgba(86,118,94,0.28)] hover:bg-forest hover:shadow-[0_18px_36px_rgba(35,59,48,0.32)]'
      } ${className}`}
    >
      <span>{children}</span>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${circleClass} ${
          light
            ? 'bg-sage text-white group-hover:bg-forest'
            : 'bg-white/20 text-white group-hover:bg-white/25'
        }`}
      >
        <ArrowRight
          size={compactMobile || isCompact ? 11 : 14}
          strokeWidth={isCompact || compactMobile ? 2.5 : 2.75}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </span>
    </a>
  );
}
