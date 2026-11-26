'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Flower2,
  Globe,
  LoaderCircle,
  Lock,
  type LucideIcon,
  Mail,
  MessageSquare,
  Phone,
  Sparkles,
  User,
  Users,
} from 'lucide-react';

type CountryOption = {
  code: string;
  name: string;
  dial: string;
};

const COUNTRY_OPTIONS: CountryOption[] = [
  { code: 'IN', name: 'India', dial: '+91' },
  { code: 'US', name: 'United States', dial: '+1' },
  { code: 'GB', name: 'United Kingdom', dial: '+44' },
  { code: 'AE', name: 'United Arab Emirates', dial: '+971' },
  { code: 'CA', name: 'Canada', dial: '+1' },
  { code: 'AU', name: 'Australia', dial: '+61' },
  { code: 'SG', name: 'Singapore', dial: '+65' },
  { code: 'DE', name: 'Germany', dial: '+49' },
  { code: 'FR', name: 'France', dial: '+33' },
  { code: 'NL', name: 'Netherlands', dial: '+31' },
  { code: 'ES', name: 'Spain', dial: '+34' },
  { code: 'CH', name: 'Switzerland', dial: '+41' },
  { code: 'JP', name: 'Japan', dial: '+81' },
  { code: 'OTHER', name: 'Other country', dial: '+' },
];

const INTEREST_OPTIONS = [
  'Live group yoga classes',
  'One-on-one private practice',
  'Beginner Yoga Journey',
  'Morning Energy & Flexibility',
  '100 / 200 / 300 Hour Teacher Training',
  'Samsaara Retreats',
  'Free intro / trial session',
] as const;

const EXPERIENCE_OPTIONS = [
  'Complete beginner (never practiced)',
  'Beginner (0–6 months)',
  'Intermediate (6 months – 2 years)',
  'Regular practitioner (2+ years)',
  'Certified teacher / advanced',
] as const;

const FORMAT_OPTIONS = [
  'Live 1-on-1 online (Zoom)',
  'Small group live online classes',
  'In-person in Rishikesh',
  'Residential teacher training cohort',
  'Retreat immersion (Samsaara)',
  'Not sure yet — open to guidance',
] as const;

const TIME_OPTIONS = [
  'Early morning (5:30 AM – 8:00 AM IST)',
  'Mid-morning (8:00 AM – 11:30 AM IST)',
  'Afternoon (12:00 PM – 4:00 PM IST)',
  'Evening (5:00 PM – 8:30 PM IST)',
  'Weekend sessions only',
  'Flexible / match my timezone',
] as const;

type FormFields = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  interest: string;
  experience: string;
  format: string;
  preferredTime: string;
  notes: string;
};

type RequiredKey = 'fullName' | 'email' | 'phone' | 'interest';

const FIELD_ELEMENT_IDS: Record<RequiredKey, string> = {
  fullName: 'full-name',
  email: 'email-address',
  phone: 'phone-number',
  interest: 'interest',
};

const INITIAL_FIELDS: FormFields = {
  fullName: '',
  email: '',
  phone: '',
  country: '',
  interest: '',
  experience: '',
  format: '',
  preferredTime: '',
  notes: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CONTROL_BASE =
  'min-h-[44px] w-full min-w-0 max-w-full rounded-lg border bg-white px-3 py-2.5 text-base text-ink shadow-2xs transition-all duration-200 placeholder:text-ink/40 focus:outline-none focus:ring-4 sm:min-h-[46px] sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm';

function controlTone(hasError?: boolean) {
  return hasError
    ? 'border-coral/70 ring-4 ring-coral/10 focus:border-coral focus:ring-coral/15'
    : 'border-sage/20 hover:border-sage/40 focus:border-sage focus:ring-sage/12';
}

/** Crisp inline SVG flag badge so dial codes render reliably across mobile and desktop OS fonts. */
function CountryFlag({ code }: { code: string }) {
  const cls = 'h-3.5 w-5 shrink-0 overflow-hidden rounded-[3px] shadow-xs ring-1 ring-ink/10';

  switch (code) {
    case 'IN':
      return (
        <svg viewBox="0 0 20 14" className={cls} aria-hidden="true">
          <rect width="20" height="4.67" fill="#FF9933" />
          <rect y="4.67" width="20" height="4.67" fill="#FFFFFF" />
          <rect y="9.33" width="20" height="4.67" fill="#138808" />
          <circle cx="10" cy="7" r="1.5" fill="none" stroke="#000080" strokeWidth="0.7" />
        </svg>
      );
    case 'US':
      return (
        <svg viewBox="0 0 20 14" className={cls} aria-hidden="true">
          <rect width="20" height="14" fill="#FFFFFF" />
          <path d="M0 1h20M0 3.5h20M0 6h20M0 8.5h20M0 11h20M0 13.5h20" stroke="#B22234" strokeWidth="1.2" />
          <rect width="9" height="7.5" fill="#3C3B6E" />
        </svg>
      );
    case 'GB':
      return (
        <svg viewBox="0 0 20 14" className={cls} aria-hidden="true">
          <rect width="20" height="14" fill="#012169" />
          <path d="M0 0L20 14M20 0L0 14" stroke="#FFFFFF" strokeWidth="2.4" />
          <path d="M0 0L20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1" />
          <path d="M10 0v14M0 7h20" stroke="#FFFFFF" strokeWidth="3.6" />
          <path d="M10 0v14M0 7h20" stroke="#C8102E" strokeWidth="2" />
        </svg>
      );
    case 'AE':
      return (
        <svg viewBox="0 0 20 14" className={cls} aria-hidden="true">
          <rect width="20" height="4.67" fill="#00732F" />
          <rect y="4.67" width="20" height="4.67" fill="#FFFFFF" />
          <rect y="9.33" width="20" height="4.67" fill="#000000" />
          <rect width="5" height="14" fill="#FF0000" />
        </svg>
      );
    case 'CA':
      return (
        <svg viewBox="0 0 20 14" className={cls} aria-hidden="true">
          <rect width="20" height="14" fill="#FFFFFF" />
          <rect width="5" height="14" fill="#FF0000" />
          <rect x="15" width="5" height="14" fill="#FF0000" />
          <circle cx="10" cy="7" r="2.2" fill="#FF0000" />
        </svg>
      );
    case 'AU':
      return (
        <svg viewBox="0 0 20 14" className={cls} aria-hidden="true">
          <rect width="20" height="14" fill="#00008B" />
          <path d="M4.5 0v7M0 3.5h9" stroke="#FFFFFF" strokeWidth="1.6" />
          <path d="M4.5 0v7M0 3.5h9" stroke="#FF0000" strokeWidth="0.9" />
          <circle cx="15" cy="9.5" r="1.1" fill="#FFFFFF" />
          <circle cx="14.5" cy="4" r="0.9" fill="#FFFFFF" />
        </svg>
      );
    case 'SG':
      return (
        <svg viewBox="0 0 20 14" className={cls} aria-hidden="true">
          <rect width="20" height="7" fill="#EF3340" />
          <rect y="7" width="20" height="7" fill="#FFFFFF" />
          <circle cx="5.2" cy="3.5" r="2" fill="#FFFFFF" />
          <circle cx="6.2" cy="3.5" r="1.7" fill="#EF3340" />
        </svg>
      );
    case 'DE':
      return (
        <svg viewBox="0 0 20 14" className={cls} aria-hidden="true">
          <rect width="20" height="4.67" fill="#111111" />
          <rect y="4.67" width="20" height="4.67" fill="#DD0000" />
          <rect y="9.33" width="20" height="4.67" fill="#FFCE00" />
        </svg>
      );
    case 'FR':
      return (
        <svg viewBox="0 0 20 14" className={cls} aria-hidden="true">
          <rect width="6.67" height="14" fill="#0055A4" />
          <rect x="6.67" width="6.67" height="14" fill="#FFFFFF" />
          <rect x="13.33" width="6.67" height="14" fill="#EF4135" />
        </svg>
      );
    case 'NL':
      return (
        <svg viewBox="0 0 20 14" className={cls} aria-hidden="true">
          <rect width="20" height="4.67" fill="#AE1C28" />
          <rect y="4.67" width="20" height="4.67" fill="#FFFFFF" />
          <rect y="9.33" width="20" height="4.67" fill="#21468B" />
        </svg>
      );
    case 'ES':
      return (
        <svg viewBox="0 0 20 14" className={cls} aria-hidden="true">
          <rect width="20" height="3.5" fill="#AA151B" />
          <rect y="3.5" width="20" height="7" fill="#F1BF00" />
          <rect y="10.5" width="20" height="3.5" fill="#AA151B" />
        </svg>
      );
    case 'CH':
      return (
        <svg viewBox="0 0 20 14" className={cls} aria-hidden="true">
          <rect width="20" height="14" fill="#D52B1E" />
          <path d="M10 3.5v7M6.5 7h7" stroke="#FFFFFF" strokeWidth="2.2" />
        </svg>
      );
    case 'JP':
      return (
        <svg viewBox="0 0 20 14" className={cls} aria-hidden="true">
          <rect width="20" height="14" fill="#FFFFFF" />
          <circle cx="10" cy="7" r="3.4" fill="#BC002D" />
        </svg>
      );
    default:
      return (
        <span className="flex h-3.5 w-5 shrink-0 items-center justify-center rounded-[3px] bg-sage-pale text-forest ring-1 ring-sage/25">
          <Globe size={10} />
        </span>
      );
  }
}

function FieldLabel({
  htmlFor,
  icon: Icon,
  label,
  required = false,
  complete = false,
}: {
  htmlFor: string;
  icon: LucideIcon;
  label: string;
  required?: boolean;
  complete?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 flex items-center justify-between gap-2 text-[11px] font-bold uppercase tracking-[0.11em] text-ink/75 transition-colors group-focus-within:text-forest sm:mb-2"
    >
      <span className="flex items-center gap-1.5">
        <Icon size={13} className="shrink-0 text-sage transition-colors group-focus-within:text-forest" />
        <span>
          {label}
          {required && <span className="ml-0.5 text-coral">*</span>}
        </span>
      </span>
      {complete && (
        <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sage/15 text-forest">
          <Check size={10} strokeWidth={3} />
        </span>
      )}
    </label>
  );
}

function SelectField({
  id,
  name,
  label,
  icon,
  placeholder,
  value,
  options,
  required = false,
  error,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  icon: LucideIcon;
  placeholder: string;
  value: string;
  options: readonly string[];
  required?: boolean;
  error?: string;
  onChange: (next: string) => void;
}) {
  return (
    <div className="group min-w-0">
      <FieldLabel
        htmlFor={id}
        icon={icon}
        label={label}
        required={required}
        complete={Boolean(value)}
      />
      <div className="relative min-w-0">
        <select
          id={id}
          name={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          className={`${CONTROL_BASE} ${controlTone(Boolean(error))} appearance-none truncate pr-10 ${
            value ? 'text-ink' : 'text-ink/45'
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option} className="text-ink">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink/45 transition-transform duration-200 group-focus-within:rotate-180 group-focus-within:text-forest"
        />
      </div>
      {error && <p className="animate-fade-up mt-1.5 text-xs font-medium text-coral">{error}</p>}
    </div>
  );
}

function SectionPanel({
  step,
  title,
  subtitle,
  backdropIcon: BackdropIcon,
  children,
}: {
  step: string;
  title: string;
  subtitle: string;
  backdropIcon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-w-0 w-full rounded-xl border border-sage/12 bg-cream/45 p-2.5 sm:rounded-2xl sm:p-5">
      <BackdropIcon
        size={44}
        strokeWidth={1.1}
        aria-hidden="true"
        className="pointer-events-none absolute right-2.5 top-2.5 text-sage/10 sm:right-4 sm:top-3"
      />
      <div className="relative mb-3 flex min-w-0 items-start gap-2.5 border-b border-sage/12 pb-2.5 sm:mb-5 sm:items-center sm:gap-3 sm:pb-3.5">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white text-[10px] font-extrabold text-forest shadow-2xs ring-1 ring-sage/20 sm:h-7 sm:w-7 sm:rounded-full sm:text-[11px]">
          {step}
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-base font-extrabold leading-tight tracking-[-0.025em] text-ink sm:text-xl">
            {title}
          </h3>
          <p className="mt-0.5 text-[11px] text-ink/55 sm:text-xs">{subtitle}</p>
        </div>
      </div>
      <div className="relative min-w-0">{children}</div>
    </div>
  );
}

/** Mobile-first, animated multi-section enquiry form with country dial selector and progress feedback. */
export function ContactEnquiryForm() {
  const [fields, setFields] = useState<FormFields>(INITIAL_FIELDS);
  const [dialCountry, setDialCountry] = useState<CountryOption>(COUNTRY_OPTIONS[0]);
  const [dialTouched, setDialTouched] = useState(false);
  const [dialMenuOpen, setDialMenuOpen] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<RequiredKey, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const dialDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dialMenuOpen) return;

    const handleOutside = (event: MouseEvent) => {
      if (!dialDropdownRef.current?.contains(event.target as Node)) {
        setDialMenuOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDialMenuOpen(false);
    };

    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [dialMenuOpen]);

  const completedRequired = [
    fields.fullName.trim().length > 0,
    EMAIL_PATTERN.test(fields.email.trim()),
    fields.phone.replace(/\D/g, '').length >= 6,
    Boolean(fields.interest),
  ].filter(Boolean).length;

  const progressPercent = Math.max(8, (completedRequired / 4) * 100);

  const updateField = <K extends keyof FormFields>(key: K, value: FormFields[K]) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (key in errors) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const handleCountryChange = (countryName: string) => {
    updateField('country', countryName);
    if (!dialTouched) {
      const matched = COUNTRY_OPTIONS.find((item) => item.name === countryName);
      if (matched) setDialCountry(matched);
    }
  };

  const validateAndFocus = (): boolean => {
    const nextErrors: Partial<Record<RequiredKey, string>> = {};
    if (!fields.fullName.trim()) nextErrors.fullName = 'Please enter your name.';
    if (!EMAIL_PATTERN.test(fields.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (fields.phone.replace(/\D/g, '').length < 6) {
      nextErrors.phone = 'Please enter a valid phone or WhatsApp number.';
    }
    if (!fields.interest) nextErrors.interest = 'Please choose what you are interested in.';

    setErrors(nextErrors);

    const firstInvalidKey = (Object.keys(FIELD_ELEMENT_IDS) as RequiredKey[]).find(
      (key) => nextErrors[key]
    );
    if (firstInvalidKey) {
      const element = document.getElementById(FIELD_ELEMENT_IDS[firstInvalidKey]);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element?.focus({ preventScroll: true });
      return false;
    }

    return true;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateAndFocus()) return;

    setStatus('submitting');
    window.setTimeout(() => setStatus('submitted'), 380);
  };

  const handleReset = () => {
    setFields(INITIAL_FIELDS);
    setDialCountry(COUNTRY_OPTIONS[0]);
    setDialTouched(false);
    setErrors({});
    setStatus('idle');
  };

  if (status === 'submitted') {
    const firstName = fields.fullName.trim().split(/\s+/)[0] || 'friend';
    const summaryItems = [
      ['Interest', fields.interest],
      ['Phone / WhatsApp', `${dialCountry.dial} ${fields.phone.trim()}`],
      ...(fields.format ? [['Practice format', fields.format]] : []),
      ...(fields.preferredTime ? [['Preferred time', fields.preferredTime]] : []),
    ];

    return (
      <div className="animate-fade-up flex min-h-[420px] flex-col items-center justify-center py-6 text-center sm:min-h-[520px]">
        <span className="animate-soft-pulse flex h-16 w-16 items-center justify-center rounded-full bg-sage text-white">
          <Check size={28} strokeWidth={2.5} />
        </span>
        <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.22em] text-sage">
          Enquiry received
        </p>
        <h3 className="mt-2 font-display text-2xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl">
          Namaste, {firstName}.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-ink/65 sm:text-[15px]">
          Thank you for sharing your goals with us. We will respond personally on WhatsApp or at{' '}
          <span className="font-semibold text-forest">{fields.email}</span> within 24 hours.
        </p>

        <dl className="mt-6 grid w-full min-w-0 max-w-lg gap-3 rounded-xl border border-sage/15 bg-cream/75 p-3.5 text-left sm:mt-7 sm:grid-cols-2 sm:rounded-2xl sm:p-5">
          {summaryItems.map(([term, val]) => (
            <div key={term} className="min-w-0">
              <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/45">
                {term}
              </dt>
              <dd className="mt-0.5 truncate text-xs font-semibold text-ink sm:text-[13px]">
                {val}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={handleReset}
            className="min-h-[46px] rounded-full border border-sage/25 bg-sage-pale px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-forest transition hover:border-sage hover:bg-sage hover:text-white"
          >
            Send another enquiry
          </button>
          <Link
            href="/classes"
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-forest px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-sage"
          >
            <span>Explore classes</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="min-w-0 w-full space-y-4 sm:space-y-6">
      <div className="space-y-2.5 sm:space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-sage-pale px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-forest sm:rounded-full sm:px-3 sm:text-[11px] sm:tracking-[0.14em]">
            <Sparkles size={12} className="text-sage" />
            Free session matching
          </span>
          <span className="shrink-0 text-[11px] font-semibold tabular-nums text-ink/55 sm:text-xs">
            <strong className="text-forest">{completedRequired}</strong> / 4 required
          </span>
        </div>
        <div
          aria-hidden="true"
          className="h-1.5 w-full overflow-hidden rounded-full bg-sage-pale"
        >
          <div
            className="h-full rounded-full bg-sage transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <SectionPanel
        step="01"
        title="Personal details"
        subtitle="How can we reach you with your tailored plan?"
        backdropIcon={User}
      >
        <div className="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-5">
          <div className="group min-w-0">
            <FieldLabel
              htmlFor="full-name"
              icon={User}
              label="Full name"
              required
              complete={fields.fullName.trim().length > 0}
            />
            <input
              id="full-name"
              name="fullName"
              type="text"
              size={1}
              autoComplete="name"
              placeholder="Enter your name"
              value={fields.fullName}
              onChange={(event) => updateField('fullName', event.target.value)}
              aria-invalid={Boolean(errors.fullName)}
              className={`${CONTROL_BASE} ${controlTone(Boolean(errors.fullName))}`}
            />
            {errors.fullName && (
              <p className="animate-fade-up mt-1.5 text-xs font-medium text-coral">
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="group min-w-0">
            <FieldLabel
              htmlFor="email-address"
              icon={Mail}
              label="Email address"
              required
              complete={EMAIL_PATTERN.test(fields.email.trim())}
            />
            <input
              id="email-address"
              name="email"
              type="email"
              size={1}
              autoComplete="email"
              placeholder="Enter your email"
              value={fields.email}
              onChange={(event) => updateField('email', event.target.value)}
              aria-invalid={Boolean(errors.email)}
              className={`${CONTROL_BASE} ${controlTone(Boolean(errors.email))}`}
            />
            {errors.email && (
              <p className="animate-fade-up mt-1.5 text-xs font-medium text-coral">
                {errors.email}
              </p>
            )}
          </div>

          <div className="group min-w-0" ref={dialDropdownRef}>
            <FieldLabel
              htmlFor="phone-number"
              icon={Phone}
              label="Phone / WhatsApp number"
              required
              complete={fields.phone.replace(/\D/g, '').length >= 6}
            />
            <div className="relative min-w-0">
              <div
                className={`flex min-h-[44px] w-full min-w-0 items-center rounded-lg border bg-white shadow-2xs transition-all duration-200 focus-within:ring-4 sm:min-h-[46px] sm:rounded-xl ${controlTone(
                  Boolean(errors.phone)
                )}`}
              >
                <button
                  type="button"
                  onClick={() => setDialMenuOpen((open) => !open)}
                  aria-expanded={dialMenuOpen}
                  aria-label={`Select country code (${dialCountry.name} ${dialCountry.dial})`}
                  className="flex shrink-0 items-center gap-1.5 rounded-l-lg py-2.5 pl-2.5 pr-2 text-sm font-semibold text-ink transition-colors hover:bg-sage-pale/60 sm:gap-2 sm:rounded-l-xl sm:py-3 sm:pl-3.5 sm:pr-3"
                >
                  <CountryFlag code={dialCountry.code} />
                  <ChevronDown
                    size={13}
                    className={`text-ink/50 transition-transform duration-200 ${
                      dialMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                  <span className="tabular-nums text-ink/85">{dialCountry.dial}</span>
                </button>
                <span className="h-5 w-px shrink-0 bg-sage/20" aria-hidden="true" />
                <input
                  id="phone-number"
                  name="phone"
                  type="tel"
                  size={1}
                  inputMode="tel"
                  autoComplete="tel-national"
                  placeholder="Enter phone number"
                  value={fields.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  className="min-w-0 flex-1 rounded-r-lg bg-transparent px-2.5 py-2.5 text-base text-ink placeholder:text-ink/40 focus:outline-none sm:rounded-r-xl sm:px-3.5 sm:py-3 sm:text-sm"
                />
              </div>

              {dialMenuOpen && (
                <div
                  role="listbox"
                  aria-label="Country dial codes"
                  className="animate-fade-up absolute left-0 right-0 top-full z-30 mt-2 max-h-60 overflow-y-auto rounded-xl border border-sage/20 bg-white p-1.5 shadow-[0_18px_40px_rgba(35,59,48,0.16)] sm:right-auto sm:w-72"
                >
                  {COUNTRY_OPTIONS.map((option) => {
                    const selected = option.code === dialCountry.code;
                    return (
                      <button
                        key={option.code}
                        type="button"
                        role="option"
                        aria-selected={selected}
                        onClick={() => {
                          setDialCountry(option);
                          setDialTouched(true);
                          setDialMenuOpen(false);
                        }}
                        className={`flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-xs transition sm:py-2 ${
                          selected
                            ? 'bg-sage-pale font-bold text-forest'
                            : 'text-ink/80 hover:bg-cream'
                        }`}
                      >
                        <span className="flex items-center gap-2.5 truncate">
                          <CountryFlag code={option.code} />
                          <span className="truncate">{option.name}</span>
                        </span>
                        <span className="flex shrink-0 items-center gap-2 font-semibold tabular-nums text-ink/55">
                          {option.dial}
                          {selected && <Check size={12} className="text-forest" />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            {errors.phone && (
              <p className="animate-fade-up mt-1.5 text-xs font-medium text-coral">
                {errors.phone}
              </p>
            )}
          </div>

          <SelectField
            id="country"
            name="country"
            label="Country"
            icon={Globe}
            placeholder="Select your country"
            value={fields.country}
            options={COUNTRY_OPTIONS.map((item) => item.name)}
            onChange={handleCountryChange}
          />
        </div>
      </SectionPanel>

      <SectionPanel
        step="02"
        title="What can we help you with?"
        subtitle="Share your experience and preferred timing so we match you accurately."
        backdropIcon={Flower2}
      >
        <div className="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-5">
          <SelectField
            id="interest"
            name="interest"
            label="I'm interested in"
            icon={Sparkles}
            placeholder="Select an option"
            value={fields.interest}
            options={INTEREST_OPTIONS}
            required
            error={errors.interest}
            onChange={(next) => updateField('interest', next)}
          />

          <SelectField
            id="experience"
            name="experience"
            label="Your experience level"
            icon={Activity}
            placeholder="Select your experience"
            value={fields.experience}
            options={EXPERIENCE_OPTIONS}
            onChange={(next) => updateField('experience', next)}
          />

          <SelectField
            id="practice-format"
            name="format"
            label="Preferred practice format"
            icon={Users}
            placeholder="Select an option"
            value={fields.format}
            options={FORMAT_OPTIONS}
            onChange={(next) => updateField('format', next)}
          />

          <SelectField
            id="preferred-time"
            name="preferredTime"
            label="Preferred time"
            icon={Clock3}
            placeholder="Select your preferred time"
            value={fields.preferredTime}
            options={TIME_OPTIONS}
            onChange={(next) => updateField('preferredTime', next)}
          />

          <div className="group min-w-0 sm:col-span-2">
            <FieldLabel
              htmlFor="enquiry-notes"
              icon={MessageSquare}
              label="Tell us a little more"
              complete={fields.notes.trim().length > 0}
            />
            <textarea
              id="enquiry-notes"
              name="notes"
              rows={4}
              value={fields.notes}
              onChange={(event) => updateField('notes', event.target.value)}
              placeholder="What would you like support with?"
              className={`${CONTROL_BASE} ${controlTone(false)} min-h-[100px] resize-y sm:min-h-[116px]`}
            />
          </div>
        </div>
      </SectionPanel>

      <div className="flex flex-col items-stretch gap-3.5 pt-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group inline-flex min-h-[54px] w-full items-center justify-between gap-3.5 rounded-full bg-sage py-2.5 pl-6 pr-3 text-[13px] font-extrabold uppercase tracking-[0.06em] text-white shadow-[0_14px_28px_rgba(86,118,94,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-forest hover:shadow-[0_18px_36px_rgba(35,59,48,0.32)] active:scale-[0.98] disabled:cursor-wait disabled:opacity-80 sm:min-h-[48px] sm:w-auto sm:justify-center sm:pr-2.5 sm:text-sm"
        >
          <span>{status === 'submitting' ? 'Sending enquiry...' : 'Submit my enquiry'}</span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-forest transition-transform duration-300 group-hover:translate-x-0.5">
            {status === 'submitting' ? (
              <LoaderCircle size={15} className="animate-spin" />
            ) : (
              <ArrowRight size={15} strokeWidth={2.5} />
            )}
          </span>
        </button>

        <p className="flex items-center justify-center gap-2 text-center text-xs leading-5 text-ink/55 sm:justify-start sm:text-left">
          <Lock size={13} className="shrink-0 text-sage" />
          <span>Your information is kept private and used only to respond to your enquiry.</span>
        </p>
      </div>
    </form>
  );
}
