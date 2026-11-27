'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';
import { useBookingModal } from './booking-modal';

const LOTUS_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330] as const;

/** Slowly rotating geometric lotus mandala SVG watermark behind the footer header. */
export function FooterMandala({
  className = '',
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 440 440"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={
        animate
          ? {
              transformBox: 'view-box',
              transformOrigin: '220px 220px',
              animation: 'orbit-cw 68s linear infinite',
            }
          : undefined
      }
    >
      <circle
        cx="220"
        cy="220"
        r="204"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="4 6"
      />
      <circle cx="220" cy="220" r="172" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="220" cy="220" r="96" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="220" cy="220" r="42" fill="none" stroke="currentColor" strokeWidth="1" />

      {LOTUS_ANGLES.map((angle) => (
        <g key={angle} transform={`rotate(${angle} 220 220)`}>
          <path
            d="M 220 20 C 242 62, 242 118, 220 156 C 198 118, 198 62, 220 20 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.15"
          />
          <path
            d="M 220 96 C 231 118, 231 154, 220 178 C 209 154, 209 118, 220 96 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </g>
      ))}
    </svg>
  );
}

/** Top footer glass CTA card opening the global enquiry popup or WhatsApp directly. */
export function FooterEnquiryBanner() {
  const { openBooking } = useBookingModal();

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/12 bg-white/[0.04] p-4 shadow-[0_18px_50px_rgba(6,16,10,0.28)] backdrop-blur-xs sm:rounded-2xl sm:p-6 lg:px-8 lg:py-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(226,200,159,0.14),transparent_68%)]"
      />

      <div className="relative z-10 flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <div className="flex items-center gap-3 sm:block">
            <span className="animate-sun-breathe relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#e2c89f]/30 bg-[radial-gradient(circle,rgba(226,200,159,0.22),rgba(226,200,159,0.06))] text-xl font-normal text-[#e7c488] shadow-[0_0_24px_rgba(226,200,159,0.2)] sm:h-13 sm:w-13 sm:text-2xl">
              ॐ
            </span>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8ed39f] sm:hidden">
              Awakening minds, transforming lives
            </p>
          </div>

          <div className="min-w-0">
            <p className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-[#8ed39f] sm:block sm:text-[11px]">
              Awakening minds, transforming lives
            </p>
            <h2 className="font-display text-xl font-bold leading-snug tracking-[-0.025em] text-white sm:mt-1 sm:text-2xl lg:text-[26px]">
              Take the first step toward inner peace
            </h2>
            <p className="mt-1.5 max-w-2xl text-[13px] leading-5 text-white/70 sm:text-sm">
              Where wisdom, discipline and compassion guide every breath of your journey.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:flex sm:shrink-0 sm:flex-wrap sm:items-center sm:gap-3">
          <button
            type="button"
            onClick={() => openBooking()}
            className="group inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-full bg-white px-3 py-2 text-[11px] font-bold text-[#153925] shadow-[0_12px_28px_rgba(8,18,12,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-sand active:scale-[0.98] sm:min-h-[44px] sm:gap-2 sm:px-5 sm:py-2.5 sm:text-[13px]"
          >
            <span>Enquire Now</span>
            <ArrowRight
              size={13}
              strokeWidth={2.5}
              className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>

          <a
            href="https://wa.me/918888888888"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-full border border-white/18 bg-white/[0.06] px-2.5 py-2 text-[11px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.12] sm:min-h-[44px] sm:gap-2 sm:px-5 sm:py-2.5 sm:text-[13px]"
          >
            <MessageCircle size={13} className="shrink-0 text-[#8ed39f]" />
            <span className="truncate">Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
