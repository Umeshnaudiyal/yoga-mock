'use client';

import {
  CSSProperties,
  FormEvent,
  PointerEvent as ReactPointerEvent,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ArrowRight,
  Check,
  Flower2,
  LoaderCircle,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sun,
  Users,
  X,
} from 'lucide-react';
import { COUNTRY_OPTIONS, CountryOption, DialPhoneInput } from './country-dial';
import { CustomSelect, CustomSelectOption } from './custom-select';

type BookingContextValue = {
  openBooking: (defaultInterest?: string) => void;
  closeBooking: () => void;
};

const BookingModalContext = createContext<BookingContextValue>({
  openBooking: () => {},
  closeBooking: () => {},
});

export function useBookingModal() {
  return useContext(BookingModalContext);
}

const INTEREST_OPTIONS: readonly CustomSelectOption[] = [
  { value: '1-on-1 Free Trial', label: '1-on-1 Trial', hint: 'Personal intro session' },
  { value: 'Live Group Classes', label: 'Live Group', hint: 'Small weekly cohorts' },
  { value: 'Ashtanga Vinyasa YTTC', label: 'Ashtanga YTTC', hint: 'Teacher certification' },
  { value: '200 Hour Teacher Training', label: '200-Hr YTTC', hint: 'RYT-200 foundation' },
  { value: 'Beginner Yoga Journey', label: 'Beginner Yoga', hint: 'Guided first steps' },
  { value: 'Samsaara Retreats', label: 'Retreats', hint: 'Himalayan immersions' },
];

const LOCATION_OPTIONS: readonly CustomSelectOption[] = [
  { value: 'Live Online', label: 'Live Online', hint: 'Worldwide via Zoom' },
  { value: 'Rishikesh, India', label: 'Rishikesh, India', hint: 'Tapovan campus' },
  { value: 'Hybrid Program', label: 'Hybrid Program', hint: 'Online + Rishikesh' },
];

const DATE_OPTIONS: readonly CustomSelectOption[] = [
  { value: 'Flexible · Next available', label: 'Flexible · Next available', hint: 'Fastest batch match' },
  { value: 'Morning Window', label: 'Morning Window', hint: 'Sunrise & early slots' },
  { value: 'Midday / Afternoon', label: 'Midday / Afternoon', hint: 'Daytime schedule' },
  { value: 'Evening Window', label: 'Evening Window', hint: 'After-work relaxation' },
  { value: 'Weekend Batch', label: 'Weekend Batch', hint: 'Saturday & Sunday' },
  { value: 'Upcoming Monthly Intake', label: 'Upcoming Monthly Intake', hint: 'YTTC & retreats' },
];

type ModalFields = {
  fullName: string;
  email: string;
  phone: string;
  interest: string;
  location: string;
  preferredDates: string;
  goalNote: string;
  consent: boolean;
};

type RequiredModalKey = 'fullName' | 'email' | 'phone';

const INITIAL_MODAL_FIELDS: ModalFields = {
  fullName: '',
  email: '',
  phone: '',
  interest: '1-on-1 Free Trial',
  location: 'Live Online',
  preferredDates: '',
  goalNote: '',
  consent: true,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EXIT_DURATION_MS = 680;

function fieldBoxClass(hasError?: boolean) {
  return `rounded-lg border px-3 py-2 transition-all duration-300 focus-within:bg-white focus-within:ring-2 sm:rounded-xl sm:px-3.5 sm:py-2 ${
    hasError
      ? 'border-coral/70 bg-coral/[0.04] ring-2 ring-coral/15 focus-within:border-coral'
      : 'border-sage/18 bg-sage-pale/45 hover:border-sage/35 focus-within:border-forest/45 focus-within:ring-sage/15'
  }`;
}

function revealMotion(entered: boolean, delayMs: number): {
  className: string;
  style: CSSProperties;
} {
  return {
    className: `transition-[opacity,transform] duration-[680ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
      entered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
    }`,
    style: { transitionDelay: entered ? `${delayMs}ms` : '0ms' },
  };
}

/** Global enquiry popup modal with serene slow animations and scroll-behavior management. */
export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isEntered, setIsEntered] = useState(false);
  const [sheetHeightPx, setSheetHeightPx] = useState<number | null>(null);
  const [isDraggingSheet, setIsDraggingSheet] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<
    'phone' | 'interest' | 'location' | 'dates' | null
  >(null);
  const [fields, setFields] = useState<ModalFields>(INITIAL_MODAL_FIELDS);
  const [dialCountry, setDialCountry] = useState<CountryOption>(COUNTRY_OPTIONS[0]);
  const [errors, setErrors] = useState<Partial<Record<RequiredModalKey, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const closeTimerRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const sheetCardRef = useRef<HTMLDivElement>(null);
  const dragMetaRef = useRef<{
    pointerId: number;
    startY: number;
    startHeight: number;
    lastHeight: number;
    moved: boolean;
  } | null>(null);

  const clearScheduledMotion = useCallback(() => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => clearScheduledMotion();
  }, [clearScheduledMotion]);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname]);

  useEffect(() => {
    const handleSamePageAnchorClick = (event: globalThis.MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest('a[href]');
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.hasAttribute('data-booking-modal')) return;
      if (anchor.target && anchor.target !== '_self') return;

      const rawHref = anchor.getAttribute('href');
      if (!rawHref || !rawHref.includes('#') || rawHref === '#') return;

      let resolvedUrl: URL;
      try {
        resolvedUrl = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      if (
        resolvedUrl.origin !== window.location.origin ||
        resolvedUrl.pathname !== window.location.pathname ||
        !resolvedUrl.hash ||
        resolvedUrl.hash === '#'
      ) {
        return;
      }

      const targetId = decodeURIComponent(resolvedUrl.hash.slice(1));
      const destination = document.getElementById(targetId);
      if (!destination) return;

      event.preventDefault();
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      destination.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });

      if (window.location.hash !== resolvedUrl.hash) {
        window.history.replaceState(null, '', resolvedUrl.hash);
      }
    };

    document.addEventListener('click', handleSamePageAnchorClick, true);
    return () => document.removeEventListener('click', handleSamePageAnchorClick, true);
  }, []);

  const openBooking = useCallback(
    (defaultInterest?: string) => {
      clearScheduledMotion();
      dragMetaRef.current = null;
      setIsDraggingSheet(false);
      setSheetHeightPx(null);
      setStatus('idle');
      setErrors({});
      if (defaultInterest) {
        setFields((prev) => ({ ...prev, interest: defaultInterest }));
      }
      setIsMounted(true);
      setIsOpen(true);

      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        setIsEntered(true);
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = window.requestAnimationFrame(() => {
          setIsEntered(true);
          frameRef.current = null;
        });
      });
    },
    [clearScheduledMotion]
  );

  const closeBooking = useCallback(() => {
    clearScheduledMotion();
    dragMetaRef.current = null;
    setIsDraggingSheet(false);
    setActiveDropdown(null);
    setIsOpen(false);
    setIsEntered(false);

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsMounted(false);
      setSheetHeightPx(null);
      return;
    }

    closeTimerRef.current = window.setTimeout(() => {
      setIsMounted(false);
      setSheetHeightPx(null);
      closeTimerRef.current = null;
    }, EXIT_DURATION_MS);
  }, [clearScheduledMotion]);

  const toggleSheetDetent = useCallback(() => {
    const vh = window.innerHeight;
    const currentHeight = sheetCardRef.current?.getBoundingClientRect().height ?? vh * 0.85;
    const isNearFull = currentHeight >= vh * 0.8;
    setSheetHeightPx(Math.round(vh * (isNearFull ? 0.56 : 0.94)));
  }, []);

  const handleSheetPointerDown = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 && event.pointerType === 'mouse') return;
    const target = event.target as Element | null;
    if (target?.closest('a, button:not([data-drag-handle])')) return;

    const cardRect = sheetCardRef.current?.getBoundingClientRect();
    if (!cardRect) return;

    dragMetaRef.current = {
      pointerId: event.pointerId,
      startY: event.clientY,
      startHeight: cardRect.height,
      lastHeight: cardRect.height,
      moved: false,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDraggingSheet(true);
  }, []);

  const handleSheetPointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const meta = dragMetaRef.current;
    if (!meta || meta.pointerId !== event.pointerId) return;

    const deltaY = meta.startY - event.clientY;
    if (!meta.moved && Math.abs(deltaY) > 5) {
      meta.moved = true;
    }

    const vh = window.innerHeight;
    const nextHeight = Math.round(Math.min(vh * 0.96, Math.max(190, meta.startHeight + deltaY)));
    meta.lastHeight = nextHeight;
    setSheetHeightPx(nextHeight);
  }, []);

  const handleSheetPointerEnd = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const meta = dragMetaRef.current;
      if (!meta || meta.pointerId !== event.pointerId) return;

      dragMetaRef.current = null;
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
      setIsDraggingSheet(false);

      const vh = window.innerHeight;
      const target = event.target as Element | null;

      if (!meta.moved) {
        if (target?.closest('[data-drag-handle]')) {
          toggleSheetDetent();
        }
        return;
      }

      const finalRatio = meta.lastHeight / vh;
      if (finalRatio < 0.3) {
        closeBooking();
        return;
      }

      if (finalRatio >= 0.87) {
        setSheetHeightPx(Math.round(vh * 0.94));
      } else if (finalRatio <= 0.44) {
        setSheetHeightPx(Math.round(vh * 0.52));
      } else {
        setSheetHeightPx(meta.lastHeight);
      }
    },
    [closeBooking, toggleSheetDetent]
  );

  useEffect(() => {
    if (!isMounted) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeBooking();
    };

    const scrollbarGap = window.innerWidth - document.documentElement.clientWidth;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyPadding = document.body.style.paddingRight;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    if (scrollbarGap > 0) {
      document.body.style.paddingRight = `${scrollbarGap}px`;
    }

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.paddingRight = prevBodyPadding;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMounted, closeBooking]);

  const updateField = <K extends keyof ModalFields>(key: K, value: ModalFields[K]) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (key in errors) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<RequiredModalKey, string>> = {};
    if (!fields.fullName.trim()) nextErrors.fullName = 'Please enter your name.';
    if (fields.phone.replace(/\D/g, '').length < 6) {
      nextErrors.phone = 'Please enter your phone number.';
    }
    if (!EMAIL_RE.test(fields.email.trim())) nextErrors.email = 'Please enter your email address.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    window.setTimeout(() => setStatus('submitted'), 340);
  };

  const handleResetAndClose = () => {
    closeBooking();
    window.setTimeout(() => {
      setFields(INITIAL_MODAL_FIELDS);
      setDialCountry(COUNTRY_OPTIONS[0]);
      setErrors({});
      setStatus('idle');
    }, EXIT_DURATION_MS);
  };

  const asideHeaderReveal = revealMotion(isEntered, 120);
  const asideFooterReveal = revealMotion(isEntered, 460);
  const formHeaderReveal = revealMotion(isEntered, 140);
  const fieldNameReveal = revealMotion(isEntered, 200);
  const fieldPhoneReveal = revealMotion(isEntered, 260);
  const fieldEmailReveal = revealMotion(isEntered, 320);
  const fieldProgramReveal = revealMotion(isEntered, 380);
  const fieldDatesReveal = revealMotion(isEntered, 440);
  const fieldQueryReveal = revealMotion(isEntered, 500);
  const fieldActionReveal = revealMotion(isEntered, 560);

  return (
    <BookingModalContext.Provider value={{ openBooking, closeBooking }}>
      {children}

      {isMounted && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Begin your yogic journey"
          aria-hidden={!isOpen}
          onClick={closeBooking}
          className={`fixed inset-0 z-[90] flex items-end justify-center p-0 transition-[opacity,backdrop-filter,background-color] duration-[720ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:items-center md:p-5 ${
            isEntered
              ? 'pointer-events-auto bg-forest/55 opacity-100 backdrop-blur-[5px]'
              : 'pointer-events-none bg-forest/0 opacity-0 backdrop-blur-none'
          }`}
        >
          <div
            ref={sheetCardRef}
            onClick={(event) => event.stopPropagation()}
            style={
              sheetHeightPx !== null
                ? ({ ['--sheet-h' as string]: `${sheetHeightPx}px` } as CSSProperties)
                : undefined
            }
            className={`grid w-full max-w-[850px] overflow-hidden rounded-t-2xl border border-b-0 border-sage/20 bg-white shadow-[0_32px_85px_rgba(14,28,20,0.36)] will-change-[transform,opacity,height] max-md:h-[var(--sheet-h,auto)] max-md:max-h-[96dvh] max-md:grid-rows-[minmax(0,1fr)] md:max-h-[93dvh] md:grid-cols-[0.86fr_1.14fr] md:rounded-2xl md:border-b ${
              isDraggingSheet
                ? 'transition-none'
                : 'transition-[height,opacity,transform] duration-[780ms] ease-[cubic-bezier(0.16,1,0.3,1)]'
            } ${
              isEntered
                ? 'translate-y-0 scale-100 opacity-100'
                : 'translate-y-full opacity-0 md:translate-y-9 md:scale-[0.96]'
            }`}
          >
            <aside className="relative hidden flex-col justify-between overflow-hidden bg-[linear-gradient(155deg,#19382a_0%,#214c38_55%,#163023_100%)] p-7 text-white md:flex">
              <Flower2
                size={210}
                strokeWidth={0.7}
                aria-hidden="true"
                className="animate-float-slow pointer-events-none absolute -bottom-12 -right-12 text-white/[0.06]"
              />

              <div className="relative z-10">
                <div className={asideHeaderReveal.className} style={asideHeaderReveal.style}>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-sand backdrop-blur-xs">
                    <Flower2 size={20} strokeWidth={1.6} />
                  </span>

                  <p className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9be0ad]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9be0ad]" />
                    <span>Admissions &amp; Sessions Open 2026–27</span>
                  </p>

                  <h3 className="mt-2.5 font-display text-[28px] font-semibold leading-[1.12] tracking-[-0.03em] text-white">
                    Begin your <span className="text-[#8ed39f]">yogic journey</span>
                  </h3>

                  <p className="mt-3 text-[13px] leading-5 text-white/78">
                    Tell us the class, training batch, or intro session that suits you. Our team
                    replies personally with schedule, fees, and stay details.
                  </p>
                </div>

                <div className="mt-6 divide-y divide-white/10 border-t border-white/10">
                  {[
                    {
                      icon: ShieldCheck,
                      title: 'Yoga Alliance Certified',
                      detail: 'RYT-100, 200, 300 & 500 programs',
                    },
                    {
                      icon: Users,
                      title: 'Small Personal Batches',
                      detail: 'Real-time posture & breath guidance',
                    },
                    {
                      icon: Sun,
                      title: 'Satvik Living & Online',
                      detail: 'Practice live globally or in Rishikesh',
                    },
                  ].map(({ icon: Icon, title, detail }, index) => {
                    const rowReveal = revealMotion(isEntered, 220 + index * 85);
                    return (
                      <div
                        key={title}
                        className={`flex items-center gap-3 py-3 ${rowReveal.className}`}
                        style={rowReveal.style}
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/8 text-[#9be0ad]">
                          <Icon size={15} />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-white">{title}</p>
                          <p className="text-[11px] text-white/65">{detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                className={`relative z-10 mt-5 border-t border-white/10 pt-4 ${asideFooterReveal.className}`}
                style={asideFooterReveal.style}
              >
                <p className="mb-2.5 text-[11px] font-medium text-white/65">Rather talk first?</p>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="https://wa.me/918888888888"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-bold text-forest shadow-sm transition hover:bg-sand"
                  >
                    <MessageCircle size={13} className="text-[#235c3d]" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+918888888888"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/8 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-white/16"
                  >
                    <Phone size={12} />
                    <span>+91 88888 88888</span>
                  </a>
                </div>
              </div>
            </aside>

            <div className="flex h-full min-h-0 flex-col overflow-hidden bg-white md:max-h-[93dvh]">
              <div
                onPointerDown={handleSheetPointerDown}
                onPointerMove={handleSheetPointerMove}
                onPointerUp={handleSheetPointerEnd}
                onPointerCancel={handleSheetPointerEnd}
                className="relative shrink-0 touch-none select-none overflow-hidden bg-[linear-gradient(150deg,#183629_0%,#214c38_58%,#152f22_100%)] px-4 pb-4 pt-1 text-white md:hidden cursor-grab active:cursor-grabbing"
              >
                <Flower2
                  size={136}
                  strokeWidth={0.75}
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-7 right-6 text-white/[0.08]"
                />
                <button
                  type="button"
                  data-drag-handle="true"
                  onClick={(event) => {
                    if (event.detail === 0) toggleSheetDetent();
                  }}
                  aria-label="Drag up or down to resize, or activate to toggle enquiry sheet height"
                  className="relative z-10 mx-auto flex w-full cursor-grab items-center justify-center pb-2.5 pt-2 touch-none focus:outline-none active:cursor-grabbing"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-200 ${
                      isDraggingSheet ? 'w-12 bg-white/80' : 'w-10 bg-white/40 hover:bg-white/65'
                    }`}
                  />
                </button>
                <div className="relative z-10 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-display text-[19px] font-extrabold leading-[1.12] tracking-[-0.03em] text-white">
                      Begin your
                      <span className="block text-[#8ed39f]">yogic journey</span>
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <a
                      href="https://wa.me/918888888888"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Chat on WhatsApp"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#235c3d] shadow-md transition active:scale-95"
                    >
                      <MessageCircle size={17} strokeWidth={2} />
                    </a>
                    <a
                      href="tel:+918888888888"
                      aria-label="Call +91 88888 88888"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-xs transition hover:bg-white/20 active:scale-95"
                    >
                      <Phone size={15} strokeWidth={2} />
                    </a>
                    <button
                      type="button"
                      onClick={closeBooking}
                      aria-label="Close booking popup"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-xs transition hover:bg-white/20 active:scale-95"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-3.5 pb-5 pt-3.5 sm:px-6 sm:py-5 md:px-7 md:py-6">
                <div
                  className={`hidden items-start justify-between gap-3 md:flex ${formHeaderReveal.className}`}
                  style={formHeaderReveal.style}
                >
                  <div>
                    <h2
                      id="booking-modal-title"
                      className="font-display text-[22px] font-extrabold tracking-[-0.025em] text-ink"
                    >
                      Reserve your spot
                    </h2>
                    <p className="mt-0.5 text-[13px] text-ink/58">
                      Limited seats in upcoming live classes and training batches.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closeBooking}
                    aria-label="Close booking popup"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sage/20 bg-sage-pale/60 text-ink/70 transition hover:bg-forest hover:text-white"
                  >
                    <X size={15} />
                  </button>
                </div>

                {status === 'submitted' ? (
                  <div className="animate-fade-up py-7 text-center sm:py-10">
                    <span className="animate-soft-pulse mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-sand">
                      <Check size={24} strokeWidth={2.5} />
                    </span>
                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-sage">
                      Enquiry confirmed
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-extrabold text-ink">
                      Namaste, {fields.fullName.trim().split(/\s+/)[0] || 'friend'}.
                    </h3>
                    <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-ink/65 sm:text-sm">
                      Thank you for reaching out. Our team will connect on WhatsApp (
                      {dialCountry.dial} {fields.phone.trim()}) and{' '}
                      <span className="font-semibold text-forest">{fields.email}</span> within 24
                      hours.
                    </p>

                    <dl className="mx-auto mt-5 grid max-w-sm grid-cols-2 gap-2.5 rounded-xl border border-sage/15 bg-sage-pale/45 p-3.5 text-left text-xs">
                      <div>
                        <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink/45">
                          Program
                        </dt>
                        <dd className="mt-0.5 truncate font-semibold text-ink">{fields.interest}</dd>
                      </div>
                      <div>
                        <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink/45">
                          Location
                        </dt>
                        <dd className="mt-0.5 truncate font-semibold text-ink">{fields.location}</dd>
                      </div>
                    </dl>

                    <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
                      <button
                        type="button"
                        onClick={handleResetAndClose}
                        className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-sage sm:w-auto"
                      >
                        <span>Done</span>
                        <Check size={14} />
                      </button>
                      <Link
                        href="/classes"
                        onClick={closeBooking}
                        className="inline-flex min-h-[42px] w-full items-center justify-center gap-1.5 rounded-full border border-sage/25 px-5 py-2 text-xs font-bold uppercase tracking-[0.1em] text-forest transition hover:bg-sage-pale sm:w-auto"
                      >
                        <span>Browse classes</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="mt-0 space-y-2.5 sm:space-y-3 md:mt-4">
                    <div className={fieldNameReveal.className} style={fieldNameReveal.style}>
                      <div className={fieldBoxClass(Boolean(errors.fullName))}>
                        <label
                          htmlFor="modal-name"
                          className="block text-[10px] font-semibold tracking-[0.02em] text-ink/60"
                        >
                          Full Name <span className="text-coral">*</span>
                        </label>
                        <input
                          id="modal-name"
                          type="text"
                          size={1}
                          autoComplete="name"
                          placeholder="Your Name"
                          value={fields.fullName}
                          onChange={(event) => updateField('fullName', event.target.value)}
                          className="mt-0.5 w-full bg-transparent text-[13px] font-medium text-ink placeholder:text-ink/40 focus:outline-none sm:text-sm"
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-[11px] font-medium text-coral">{errors.fullName}</p>
                      )}
                    </div>

                    <div
                      className={`relative ${activeDropdown === 'phone' ? 'z-50' : 'z-20'} ${fieldPhoneReveal.className}`}
                      style={fieldPhoneReveal.style}
                    >
                      <div className={fieldBoxClass(Boolean(errors.phone))}>
                        <label
                          htmlFor="modal-phone"
                          className="block text-[10px] font-semibold tracking-[0.02em] text-ink/60"
                        >
                          Mobile No <span className="text-coral">*</span>
                        </label>
                        <div className="mt-0.5">
                          <DialPhoneInput
                            id="modal-phone"
                            value={fields.phone}
                            dialCountry={dialCountry}
                            placeholder="Phone number"
                            hasError={Boolean(errors.phone)}
                            compact
                            onPhoneChange={(val) => updateField('phone', val)}
                            onDialSelect={setDialCountry}
                            onOpenChange={(isMenuOpen) =>
                              setActiveDropdown(isMenuOpen ? 'phone' : null)
                            }
                          />
                        </div>
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-[11px] font-medium text-coral">{errors.phone}</p>
                      )}
                    </div>

                    <div className={fieldEmailReveal.className} style={fieldEmailReveal.style}>
                      <div className={fieldBoxClass(Boolean(errors.email))}>
                        <label
                          htmlFor="modal-email"
                          className="block text-[10px] font-semibold tracking-[0.02em] text-ink/60"
                        >
                          Email ID <span className="text-coral">*</span>
                        </label>
                        <input
                          id="modal-email"
                          type="email"
                          size={1}
                          autoComplete="email"
                          placeholder="Your email address"
                          value={fields.email}
                          onChange={(event) => updateField('email', event.target.value)}
                          className="mt-0.5 w-full bg-transparent text-[13px] font-medium text-ink placeholder:text-ink/40 focus:outline-none sm:text-sm"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-[11px] font-medium text-coral">{errors.email}</p>
                      )}
                    </div>

                    <div
                      className={`grid grid-cols-2 gap-2.5 ${
                        activeDropdown === 'interest' || activeDropdown === 'location'
                          ? 'relative z-50'
                          : 'relative z-10'
                      } ${fieldProgramReveal.className}`}
                      style={fieldProgramReveal.style}
                    >
                      <div className={fieldBoxClass(false)}>
                        <label
                          htmlFor="modal-interest"
                          className="block text-[10px] font-semibold tracking-[0.02em] text-ink/60"
                        >
                          Program Interest
                        </label>
                        <div className="mt-0.5">
                          <CustomSelect
                            id="modal-interest"
                            ariaLabel="Program Interest"
                            value={fields.interest}
                            options={INTEREST_OPTIONS}
                            compact
                            onChange={(val) => updateField('interest', val)}
                            onOpenChange={(isMenuOpen) =>
                              setActiveDropdown(isMenuOpen ? 'interest' : null)
                            }
                          />
                        </div>
                      </div>

                      <div className={fieldBoxClass(false)}>
                        <label
                          htmlFor="modal-location"
                          className="block text-[10px] font-semibold tracking-[0.02em] text-ink/60"
                        >
                          Preferred Location
                        </label>
                        <div className="mt-0.5">
                          <CustomSelect
                            id="modal-location"
                            ariaLabel="Preferred Location"
                            value={fields.location}
                            options={LOCATION_OPTIONS}
                            align="right"
                            compact
                            onChange={(val) => updateField('location', val)}
                            onOpenChange={(isMenuOpen) =>
                              setActiveDropdown(isMenuOpen ? 'location' : null)
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${fieldBoxClass(false)} ${
                        activeDropdown === 'dates' ? 'relative z-50' : 'relative z-10'
                      } ${fieldDatesReveal.className}`}
                      style={fieldDatesReveal.style}
                    >
                      <label
                        htmlFor="modal-dates"
                        className="block text-[10px] font-semibold tracking-[0.02em] text-ink/60"
                      >
                        Preferred Dates &amp; Timing
                      </label>
                      <div className="mt-0.5">
                        <CustomSelect
                          id="modal-dates"
                          ariaLabel="Preferred Dates and Timing"
                          value={fields.preferredDates}
                          options={DATE_OPTIONS}
                          placeholder="Choose your timing"
                          compact
                          onChange={(val) => updateField('preferredDates', val)}
                          onOpenChange={(isMenuOpen) =>
                            setActiveDropdown(isMenuOpen ? 'dates' : null)
                          }
                        />
                      </div>
                    </div>

                    <div
                      className={`${fieldBoxClass(false)} ${fieldQueryReveal.className}`}
                      style={fieldQueryReveal.style}
                    >
                      <label
                        htmlFor="modal-goal"
                        className="block text-[10px] font-semibold tracking-[0.02em] text-ink/60"
                      >
                        Your Query
                      </label>
                      <textarea
                        id="modal-goal"
                        rows={2}
                        value={fields.goalNote}
                        onChange={(event) => updateField('goalNote', event.target.value)}
                        placeholder="Dates, schedule, goals, or anything you'd like to know"
                        className="mt-0.5 min-h-[48px] w-full resize-none bg-transparent text-[13px] text-ink placeholder:text-ink/40 focus:outline-none sm:min-h-[56px] sm:text-sm"
                      />
                    </div>

                    <div className={`space-y-2.5 ${fieldActionReveal.className}`} style={fieldActionReveal.style}>
                      <label className="flex cursor-pointer items-start gap-2.5 pt-0.5 text-[11px] leading-4 text-ink/55">
                        <input
                          type="checkbox"
                          checked={fields.consent}
                          onChange={(event) => updateField('consent', event.target.checked)}
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-sage/35 accent-[#233b30]"
                        />
                        <span>
                          By sending this enquiry, you consent to receiving session updates and batch
                          details via WhatsApp and email.
                        </span>
                      </label>

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="group inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#235c3d] px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(35,92,61,0.28)] transition hover:bg-forest disabled:cursor-wait disabled:opacity-80"
                      >
                        <span>{status === 'submitting' ? 'Sending enquiry...' : 'Send Enquiry'}</span>
                        {status === 'submitting' ? (
                          <LoaderCircle size={15} className="animate-spin" />
                        ) : (
                          <ArrowRight
                            size={15}
                            className="transition-transform group-hover:translate-x-0.5"
                          />
                        )}
                      </button>

                      <p className="pt-0.5 text-center text-[11px] text-ink/55">
                        Prefer a full page?{' '}
                        <Link
                          href="/contact"
                          onClick={closeBooking}
                          className="font-bold text-[#235c3d] transition hover:text-forest"
                        >
                          Open the enquiry page →
                        </Link>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </BookingModalContext.Provider>
  );
}
