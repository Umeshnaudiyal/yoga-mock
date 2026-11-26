'use client';

import { FormEvent, createContext, useCallback, useContext, useEffect, useState } from 'react';
import {
  Activity,
  ArrowRight,
  CalendarCheck,
  Check,
  Clock3,
  Globe2,
  LoaderCircle,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  Sparkles,
  User,
  X,
} from 'lucide-react';

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

const DIAL_OPTIONS = ['+91', '+1', '+44', '+971', '+65', '+61', '+49', '+33', '+81'] as const;

const TIMEZONE_OPTIONS = [
  'India (IST)',
  'UK / Europe (GMT / CET)',
  'USA / Canada (EST / PST)',
  'UAE / Gulf (GST)',
  'Singapore / Australia (SGT / AEST)',
  'Other timezone',
] as const;

const INTEREST_OPTIONS = [
  '1-on-1 Free Trial',
  'Live Group Classes',
  'Beginner Yoga Journey',
  'Back Pain & Posture Relief',
  'Teacher Training (YTTC)',
  'Samsaara Retreats',
] as const;

const EXPERIENCE_OPTIONS = [
  'Complete beginner',
  'Beginner (0–6 months)',
  'Intermediate (6m–2y)',
  'Regular practitioner (2y+)',
] as const;

const TIME_CHIPS = ['Morning', 'Midday', 'Evening', 'Weekend'] as const;

type ModalFields = {
  fullName: string;
  email: string;
  dialCode: string;
  phone: string;
  timezone: string;
  interest: string;
  experience: string;
  preferredSlot: string;
  goalNote: string;
};

type RequiredModalKey = 'fullName' | 'email' | 'phone';

const INITIAL_MODAL_FIELDS: ModalFields = {
  fullName: '',
  email: '',
  dialCode: '+91',
  phone: '',
  timezone: 'India (IST)',
  interest: '1-on-1 Free Trial',
  experience: 'Complete beginner',
  preferredSlot: 'Morning',
  goalNote: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const COMPACT_FIELD =
  'min-h-[38px] w-full min-w-0 rounded-lg border bg-white px-2.5 py-1.5 text-xs text-ink transition focus:outline-none focus:ring-2 sm:min-h-[40px] sm:px-3 sm:py-2 sm:text-[13px]';

function fieldBorder(hasError?: boolean) {
  return hasError
    ? 'border-coral/70 ring-2 ring-coral/15 focus:border-coral'
    : 'border-sage/20 hover:border-sage/40 focus:border-sage focus:ring-sage/15';
}

/** Provides the global Book Your Free Session modal across every route. */
export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [fields, setFields] = useState<ModalFields>(INITIAL_MODAL_FIELDS);
  const [errors, setErrors] = useState<Partial<Record<RequiredModalKey, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const openBooking = useCallback((defaultInterest?: string) => {
    setStatus('idle');
    setErrors({});
    if (defaultInterest) {
      setFields((prev) => ({ ...prev, interest: defaultInterest }));
    }
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

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
    if (!EMAIL_RE.test(fields.email.trim())) nextErrors.email = 'Enter a valid email.';
    if (fields.phone.replace(/\D/g, '').length < 6) {
      nextErrors.phone = 'Enter your WhatsApp or mobile number.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    window.setTimeout(() => setStatus('submitted'), 340);
  };

  const handleResetAndClose = () => {
    setFields(INITIAL_MODAL_FIELDS);
    setErrors({});
    setStatus('idle');
    setIsOpen(false);
  };

  return (
    <BookingModalContext.Provider value={{ openBooking, closeBooking }}>
      {children}

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          className="fixed inset-0 z-[90] flex items-end justify-center bg-forest/45 p-2 backdrop-blur-xs sm:items-center sm:p-5"
          onClick={closeBooking}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="animate-fade-up flex max-h-[92dvh] w-full max-w-[500px] flex-col overflow-hidden rounded-xl border border-sage/20 bg-white shadow-[0_26px_70px_rgba(18,34,24,0.3)] sm:rounded-2xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-sage/12 bg-sage-pale/65 px-3.5 py-2.5 sm:px-5 sm:py-3.5">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-forest text-sand sm:h-8 sm:w-8">
                  <CalendarCheck size={14} />
                </span>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-sage sm:text-[10px]">
                    Free 15-min live intro
                  </p>
                  <h2
                    id="booking-modal-title"
                    className="truncate font-display text-sm font-extrabold tracking-[-0.02em] text-ink sm:text-base"
                  >
                    Book your free yoga session
                  </h2>
                </div>
              </div>

              <button
                type="button"
                onClick={closeBooking}
                aria-label="Close booking popup"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-sage/20 bg-white text-ink/70 transition hover:bg-forest hover:text-white sm:h-8 sm:w-8"
              >
                <X size={15} />
              </button>
            </div>

            {status === 'submitted' ? (
              <div className="animate-fade-up overflow-y-auto px-4 py-6 text-center sm:px-6 sm:py-8">
                <span className="animate-soft-pulse mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sage text-white">
                  <Check size={22} strokeWidth={2.5} />
                </span>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-sage">
                  Request confirmed
                </p>
                <h3 className="mt-1 font-display text-xl font-extrabold text-ink sm:text-2xl">
                  Namaste, {fields.fullName.trim().split(/\s+/)[0] || 'friend'}.
                </h3>
                <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-ink/65 sm:text-[13px]">
                  We&apos;ll send your free session link on WhatsApp ({fields.dialCode}{' '}
                  {fields.phone.trim()}) and <span className="font-semibold text-forest">{fields.email}</span>{' '}
                  within 24 hours.
                </p>

                <dl className="mt-4 grid grid-cols-2 gap-2 rounded-lg border border-sage/15 bg-cream/70 p-3 text-left text-[11px]">
                  <div>
                    <dt className="text-[9px] font-bold uppercase tracking-[0.14em] text-ink/45">
                      Focus
                    </dt>
                    <dd className="mt-0.5 truncate font-semibold text-ink">{fields.interest}</dd>
                  </div>
                  <div>
                    <dt className="text-[9px] font-bold uppercase tracking-[0.14em] text-ink/45">
                      Slot &amp; zone
                    </dt>
                    <dd className="mt-0.5 truncate font-semibold text-ink">
                      {fields.preferredSlot} · {fields.timezone.split(' ')[0]}
                    </dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="mt-5 inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-lg bg-forest px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-sage sm:w-auto"
                >
                  <span>Done</span>
                  <Check size={14} />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="overflow-y-auto px-3.5 py-3 sm:px-5 sm:py-4"
              >
                <p className="mb-3 text-[11px] leading-4 text-ink/60 sm:text-xs sm:leading-5">
                  Share a few quick details so we can match the right session time and posture pacing for you.
                </p>

                <div className="space-y-2.5 sm:space-y-3">
                  <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                    <div>
                      <label
                        htmlFor="modal-name"
                        className="mb-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] text-ink/75"
                      >
                        <User size={11} className="text-sage" />
                        Full name <span className="text-coral">*</span>
                      </label>
                      <input
                        id="modal-name"
                        type="text"
                        size={1}
                        autoComplete="name"
                        placeholder="Your full name"
                        value={fields.fullName}
                        onChange={(event) => updateField('fullName', event.target.value)}
                        className={`${COMPACT_FIELD} ${fieldBorder(Boolean(errors.fullName))}`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-[10px] font-medium text-coral">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="modal-email"
                        className="mb-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] text-ink/75"
                      >
                        <Mail size={11} className="text-sage" />
                        Email <span className="text-coral">*</span>
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        size={1}
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={fields.email}
                        onChange={(event) => updateField('email', event.target.value)}
                        className={`${COMPACT_FIELD} ${fieldBorder(Boolean(errors.email))}`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[10px] font-medium text-coral">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                    <div>
                      <label
                        htmlFor="modal-phone"
                        className="mb-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] text-ink/75"
                      >
                        <Phone size={11} className="text-sage" />
                        WhatsApp / Phone <span className="text-coral">*</span>
                      </label>
                      <div
                        className={`flex min-h-[38px] items-center rounded-lg border bg-white transition focus-within:ring-2 sm:min-h-[40px] ${fieldBorder(
                          Boolean(errors.phone)
                        )}`}
                      >
                        <select
                          aria-label="Country dial code"
                          value={fields.dialCode}
                          onChange={(event) => updateField('dialCode', event.target.value)}
                          className="shrink-0 rounded-l-lg bg-sage-pale/45 px-2 py-1.5 text-[11px] font-bold text-forest focus:outline-none sm:text-xs"
                        >
                          {DIAL_OPTIONS.map((code) => (
                            <option key={code} value={code}>
                              {code}
                            </option>
                          ))}
                        </select>
                        <span className="h-4 w-px shrink-0 bg-sage/20" aria-hidden="true" />
                        <input
                          id="modal-phone"
                          type="tel"
                          size={1}
                          inputMode="tel"
                          autoComplete="tel-national"
                          placeholder="Phone number"
                          value={fields.phone}
                          onChange={(event) => updateField('phone', event.target.value)}
                          className="min-w-0 flex-1 rounded-r-lg bg-transparent px-2.5 py-1.5 text-xs text-ink placeholder:text-ink/40 focus:outline-none sm:text-[13px]"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-[10px] font-medium text-coral">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="modal-timezone"
                        className="mb-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] text-ink/75"
                      >
                        <Globe2 size={11} className="text-sage" />
                        Region / Timezone
                      </label>
                      <select
                        id="modal-timezone"
                        value={fields.timezone}
                        onChange={(event) => updateField('timezone', event.target.value)}
                        className={`${COMPACT_FIELD} ${fieldBorder(false)}`}
                      >
                        {TIMEZONE_OPTIONS.map((tz) => (
                          <option key={tz} value={tz}>
                            {tz}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div>
                      <label
                        htmlFor="modal-interest"
                        className="mb-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] text-ink/75"
                      >
                        <Sparkles size={11} className="text-sage" />
                        Looking for
                      </label>
                      <select
                        id="modal-interest"
                        value={fields.interest}
                        onChange={(event) => updateField('interest', event.target.value)}
                        className={`${COMPACT_FIELD} ${fieldBorder(false)} truncate`}
                      >
                        {INTEREST_OPTIONS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="modal-experience"
                        className="mb-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] text-ink/75"
                      >
                        <Activity size={11} className="text-sage" />
                        Experience
                      </label>
                      <select
                        id="modal-experience"
                        value={fields.experience}
                        onChange={(event) => updateField('experience', event.target.value)}
                        className={`${COMPACT_FIELD} ${fieldBorder(false)} truncate`}
                      >
                        {EXPERIENCE_OPTIONS.map((exp) => (
                          <option key={exp} value={exp}>
                            {exp}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <span className="mb-1.5 flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] text-ink/75">
                      <Clock3 size={11} className="text-sage" />
                      Preferred time slot
                    </span>
                    <div className="grid grid-cols-4 gap-1.5">
                      {TIME_CHIPS.map((slot) => {
                        const active = fields.preferredSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => updateField('preferredSlot', slot)}
                            aria-pressed={active}
                            className={`rounded-lg border py-1.5 text-[11px] font-bold transition ${
                              active
                                ? 'border-forest bg-forest text-white shadow-2xs'
                                : 'border-sage/20 bg-cream/65 text-ink/70 hover:border-sage'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="modal-goal"
                      className="mb-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] text-ink/75"
                    >
                      <MessageSquare size={11} className="text-sage" />
                      Goals or stiffness notes
                    </label>
                    <textarea
                      id="modal-goal"
                      rows={2}
                      value={fields.goalNote}
                      onChange={(event) => updateField('goalNote', event.target.value)}
                      placeholder="E.g. lower back stiffness, flexibility, or morning energy..."
                      className={`${COMPACT_FIELD} ${fieldBorder(false)} min-h-[58px] resize-none`}
                    />
                  </div>
                </div>

                <div className="mt-3.5 border-t border-sage/12 pt-3">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group inline-flex min-h-[42px] w-full items-center justify-center gap-2.5 rounded-lg bg-sage px-4 py-2 text-xs font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_10px_22px_rgba(86,118,94,0.26)] transition hover:bg-forest disabled:cursor-wait disabled:opacity-80 sm:min-h-[44px]"
                  >
                    <span>
                      {status === 'submitting' ? 'Confirming request...' : 'Book free session'}
                    </span>
                    {status === 'submitting' ? (
                      <LoaderCircle size={14} className="animate-spin" />
                    ) : (
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    )}
                  </button>
                  <p className="mt-2 flex items-center justify-center gap-1.5 text-[10px] text-ink/50">
                    <Lock size={10} className="text-sage" />
                    <span>Zero pressure · Personal match sent within 24 hours</span>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </BookingModalContext.Provider>
  );
}

