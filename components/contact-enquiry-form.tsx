'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  Check,
  Clock3,
  Flower2,
  Globe,
  LoaderCircle,
  Lock,
  type LucideIcon,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  Sparkles,
  User,
} from 'lucide-react';
import { COUNTRY_OPTIONS, CountryOption, DialPhoneInput } from './country-dial';
import { CustomSelect } from './custom-select';

const INTEREST_OPTIONS = [
  'Live group yoga classes',
  'One-on-one private practice',
  'Ashtanga Vinyasa YTTC',
  '100 / 200 / 300 Hour Teacher Training',
  'Beginner Yoga Journey',
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

const LOCATION_OPTIONS = [
  'Live online worldwide (Zoom)',
  'Rishikesh, India campus',
  'Samsaara retreat immersion',
  'Hybrid (online + residential)',
] as const;

const TIME_OPTIONS = [
  'Early morning (5:30 AM – 8:00 AM IST)',
  'Mid-morning (8:00 AM – 11:30 AM IST)',
  'Afternoon (12:00 PM – 4:00 PM IST)',
  'Evening (5:00 PM – 8:30 PM IST)',
  'Weekend batches only',
  'Flexible · Match my timezone',
] as const;

type FormFields = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  interest: string;
  experience: string;
  location: string;
  preferredTime: string;
  notes: string;
  consent: boolean;
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
  location: '',
  preferredTime: '',
  notes: '',
  consent: true,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function boxTone(hasError?: boolean) {
  return `rounded-lg border px-3 py-2.5 transition-all duration-200 focus-within:bg-white focus-within:ring-4 sm:rounded-xl sm:px-3.5 sm:py-2.5 ${
    hasError
      ? 'border-coral/70 bg-coral/[0.04] ring-4 ring-coral/10 focus-within:border-coral focus-within:ring-coral/15'
      : 'border-sage/18 bg-sage-pale/45 hover:border-sage/35 focus-within:border-forest/45 focus-within:ring-sage/12'
  }`;
}

function BoxLabel({
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
      className="mb-1 flex items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-[0.11em] text-ink/68 sm:text-[11px]"
    >
      <span className="flex items-center gap-1.5">
        <Icon size={12} className="shrink-0 text-sage" />
        <span>
          {label}
          {required && <span className="ml-0.5 text-coral">*</span>}
        </span>
      </span>
      {complete && (
        <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sage/20 text-forest">
          <Check size={10} strokeWidth={3} />
        </span>
      )}
    </label>
  );
}

function SelectBox({
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`relative min-w-0 ${menuOpen ? 'z-40' : 'z-10'}`}>
      <div className={boxTone(Boolean(error))}>
        <BoxLabel
          htmlFor={id}
          icon={icon}
          label={label}
          required={required}
          complete={Boolean(value)}
        />
        <CustomSelect
          id={id}
          name={name}
          ariaLabel={label}
          value={value}
          options={options}
          placeholder={placeholder}
          onChange={onChange}
          onOpenChange={setMenuOpen}
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
    <div className="relative w-full min-w-0 rounded-xl border border-sage/12 bg-cream/40 p-3 sm:rounded-2xl sm:p-5">
      <BackdropIcon
        size={40}
        strokeWidth={1.1}
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-3 text-sage/10 sm:right-4 sm:top-3.5"
      />
      <div className="relative mb-3.5 flex min-w-0 items-start gap-2.5 border-b border-sage/12 pb-2.5 sm:mb-4 sm:items-center sm:gap-3 sm:pb-3.5">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white text-[10px] font-extrabold text-forest shadow-2xs ring-1 ring-sage/20 sm:h-7 sm:w-7 sm:rounded-full sm:text-[11px]">
          {step}
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-base font-extrabold leading-tight tracking-[-0.025em] text-ink sm:text-lg">
            {title}
          </h3>
          <p className="mt-0.5 text-[11px] text-ink/55 sm:text-xs">{subtitle}</p>
        </div>
      </div>
      <div className="relative min-w-0">{children}</div>
    </div>
  );
}

/** Multi-section enquiry form aligned with split popup design and clean generic placeholders. */
export function ContactEnquiryForm() {
  const [fields, setFields] = useState<FormFields>(INITIAL_FIELDS);
  const [dialCountry, setDialCountry] = useState<CountryOption>(COUNTRY_OPTIONS[0]);
  const [dialTouched, setDialTouched] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<RequiredKey, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

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
      nextErrors.email = 'Please enter your email address.';
    }
    if (fields.phone.replace(/\D/g, '').length < 6) {
      nextErrors.phone = 'Please enter your phone number.';
    }
    if (!fields.interest) nextErrors.interest = 'Please choose a program interest.';

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
      ['Program Interest', fields.interest],
      ['Phone / WhatsApp', `${dialCountry.dial} ${fields.phone.trim()}`],
      ...(fields.location ? [['Preferred Location', fields.location]] : []),
      ...(fields.preferredTime ? [['Preferred Time', fields.preferredTime]] : []),
    ];

    return (
      <div className="animate-fade-up flex min-h-[420px] flex-col items-center justify-center py-6 text-center sm:min-h-[500px]">
        <span className="animate-soft-pulse flex h-16 w-16 items-center justify-center rounded-2xl bg-[#235c3d] text-white">
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

        <dl className="mt-6 grid w-full min-w-0 max-w-lg gap-3 rounded-xl border border-sage/15 bg-sage-pale/45 p-3.5 text-left sm:mt-7 sm:grid-cols-2 sm:rounded-2xl sm:p-5">
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
    <form onSubmit={handleSubmit} noValidate className="w-full min-w-0 space-y-4 sm:space-y-5">
      <div className="space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-sage-pale px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-forest sm:rounded-full sm:px-3 sm:text-[11px] sm:tracking-[0.14em]">
            <Sparkles size={12} className="text-[#235c3d]" />
            Reserve your spot
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
            className="h-full rounded-full bg-[#235c3d] transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <SectionPanel
        step="01"
        title="Personal details"
        subtitle="How can our teaching team reach you with schedule and batch details?"
        backdropIcon={User}
      >
        <div className="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4">
          <div className="min-w-0">
            <div className={boxTone(Boolean(errors.fullName))}>
              <BoxLabel
                htmlFor="full-name"
                icon={User}
                label="Full Name"
                required
                complete={fields.fullName.trim().length > 0}
              />
              <input
                id="full-name"
                name="fullName"
                type="text"
                size={1}
                autoComplete="name"
                placeholder="Your Name"
                value={fields.fullName}
                onChange={(event) => updateField('fullName', event.target.value)}
                aria-invalid={Boolean(errors.fullName)}
                className="w-full bg-transparent py-0.5 text-[14px] font-medium text-ink placeholder:text-ink/42 focus:outline-none"
              />
            </div>
            {errors.fullName && (
              <p className="animate-fade-up mt-1.5 text-xs font-medium text-coral">
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="min-w-0">
            <div className={boxTone(Boolean(errors.email))}>
              <BoxLabel
                htmlFor="email-address"
                icon={Mail}
                label="Email ID"
                required
                complete={EMAIL_PATTERN.test(fields.email.trim())}
              />
              <input
                id="email-address"
                name="email"
                type="email"
                size={1}
                autoComplete="email"
                placeholder="Your email address"
                value={fields.email}
                onChange={(event) => updateField('email', event.target.value)}
                aria-invalid={Boolean(errors.email)}
                className="w-full bg-transparent py-0.5 text-[14px] font-medium text-ink placeholder:text-ink/42 focus:outline-none"
              />
            </div>
            {errors.email && (
              <p className="animate-fade-up mt-1.5 text-xs font-medium text-coral">
                {errors.email}
              </p>
            )}
          </div>

          <div className="min-w-0">
            <div className={boxTone(Boolean(errors.phone))}>
              <BoxLabel
                htmlFor="phone-number"
                icon={Phone}
                label="Mobile / WhatsApp No"
                required
                complete={fields.phone.replace(/\D/g, '').length >= 6}
              />
              <DialPhoneInput
                id="phone-number"
                value={fields.phone}
                dialCountry={dialCountry}
                placeholder="Phone number"
                hasError={Boolean(errors.phone)}
                onPhoneChange={(val) => updateField('phone', val)}
                onDialSelect={(country) => {
                  setDialCountry(country);
                  setDialTouched(true);
                }}
              />
            </div>
            {errors.phone && (
              <p className="animate-fade-up mt-1.5 text-xs font-medium text-coral">
                {errors.phone}
              </p>
            )}
          </div>

          <SelectBox
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
        title="Program & schedule"
        subtitle="Share your goals, preferred dates, and experience so we guide you right."
        backdropIcon={Flower2}
      >
        <div className="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4">
          <SelectBox
            id="interest"
            name="interest"
            label="Program Interest"
            icon={Sparkles}
            placeholder="Select a program"
            value={fields.interest}
            options={INTEREST_OPTIONS}
            required
            error={errors.interest}
            onChange={(next) => updateField('interest', next)}
          />

          <SelectBox
            id="preferred-location"
            name="location"
            label="Preferred Location"
            icon={MapPin}
            placeholder="Select preferred mode"
            value={fields.location}
            options={LOCATION_OPTIONS}
            onChange={(next) => updateField('location', next)}
          />

          <SelectBox
            id="experience"
            name="experience"
            label="Experience Level"
            icon={Activity}
            placeholder="Select your experience"
            value={fields.experience}
            options={EXPERIENCE_OPTIONS}
            onChange={(next) => updateField('experience', next)}
          />

          <SelectBox
            id="preferred-time"
            name="preferredTime"
            label="Preferred Dates & Timing"
            icon={Clock3}
            placeholder="Choose your timing"
            value={fields.preferredTime}
            options={TIME_OPTIONS}
            onChange={(next) => updateField('preferredTime', next)}
          />

          <div className="min-w-0 sm:col-span-2">
            <div className={boxTone(false)}>
              <BoxLabel
                htmlFor="enquiry-notes"
                icon={MessageSquare}
                label="Your Query"
                complete={fields.notes.trim().length > 0}
              />
              <textarea
                id="enquiry-notes"
                name="notes"
                rows={3}
                value={fields.notes}
                onChange={(event) => updateField('notes', event.target.value)}
                placeholder="Dates, fees, goals, or anything you'd like to know"
                className="min-h-[84px] w-full resize-y bg-transparent py-0.5 text-[14px] font-medium text-ink placeholder:text-ink/42 focus:outline-none sm:min-h-[96px]"
              />
            </div>
          </div>
        </div>
      </SectionPanel>

      <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-5 text-ink/60">
        <input
          type="checkbox"
          checked={fields.consent}
          onChange={(event) => updateField('consent', event.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded border-sage/35 accent-[#233b30]"
        />
        <span>
          By submitting, you consent to receiving session updates, batch schedules, and emails from
          Ritesh Yoga in accordance with our privacy practices.
        </span>
      </label>

      <div className="flex flex-col items-stretch gap-3.5 pt-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group inline-flex min-h-[50px] w-full items-center justify-center gap-3 rounded-full bg-[#235c3d] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(35,92,61,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-forest active:scale-[0.98] disabled:cursor-wait disabled:opacity-80 sm:w-auto sm:min-w-[210px]"
        >
          <span>{status === 'submitting' ? 'Sending enquiry...' : 'Send Enquiry'}</span>
          {status === 'submitting' ? (
            <LoaderCircle size={15} className="animate-spin" />
          ) : (
            <ArrowRight
              size={15}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          )}
        </button>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-ink/60 sm:justify-end">
          <span className="inline-flex items-center gap-1.5">
            <Lock size={12} className="text-sage" />
            <span>Replied within 24 hrs</span>
          </span>
          <span className="text-sage/40">·</span>
          <a
            href="https://wa.me/918888888888"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-bold text-[#235c3d] transition hover:text-forest"
          >
            <MessageCircle size={13} />
            <span>WhatsApp directly</span>
          </a>
        </div>
      </div>
    </form>
  );
}
