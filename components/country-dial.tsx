'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Globe } from 'lucide-react';

export type CountryOption = {
  code: string;
  name: string;
  dial: string;
};

export const COUNTRY_OPTIONS: CountryOption[] = [
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

/** Crisp inline SVG flag badge so country indicators render identically across OS fonts. */
export function CountryFlag({ code }: { code: string }) {
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

/** Shared country flag + dial selector with phone input used in both modal and contact page forms. */
export function DialPhoneInput({
  id,
  name = 'phone',
  value,
  dialCountry,
  placeholder = 'Phone number',
  hasError = false,
  compact = false,
  onPhoneChange,
  onDialSelect,
  onOpenChange,
}: {
  id: string;
  name?: string;
  value: string;
  dialCountry: CountryOption;
  placeholder?: string;
  hasError?: boolean;
  compact?: boolean;
  onPhoneChange: (phone: string) => void;
  onDialSelect: (country: CountryOption) => void;
  onOpenChange?: (open: boolean) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const setMenuState = (next: boolean) => {
    setMenuOpen(next);
    onOpenChange?.(next);
  };

  useEffect(() => {
    if (!menuOpen) return;

    const handleOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
        onOpenChange?.(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        setMenuOpen(false);
        onOpenChange?.(false);
      }
    };

    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEscape, true);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEscape, true);
    };
  }, [menuOpen, onOpenChange]);

  return (
    <div ref={containerRef} className={`relative min-w-0 w-full ${menuOpen ? 'z-50' : ''}`}>
      <div className="flex w-full min-w-0 items-center">
        <button
          type="button"
          onClick={() => setMenuState(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={`Select country dial code (${dialCountry.name} ${dialCountry.dial})`}
          className={`flex shrink-0 items-center gap-1.5 rounded-md font-semibold text-ink transition hover:bg-sage/12 ${
            compact ? 'py-1 pr-1.5 text-xs' : 'py-1 pr-2 text-[13px]'
          }`}
        >
          <CountryFlag code={dialCountry.code} />
          <ChevronDown
            size={12}
            className={`text-ink/50 transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}
          />
          <span className="tabular-nums text-ink/85">{dialCountry.dial}</span>
        </button>

        <span className="mx-2 h-4 w-px shrink-0 bg-sage/25" aria-hidden="true" />

        <input
          id={id}
          name={name}
          type="tel"
          size={1}
          inputMode="tel"
          autoComplete="tel-national"
          placeholder={placeholder}
          value={value}
          onChange={(event) => onPhoneChange(event.target.value)}
          aria-invalid={hasError}
          className={`min-w-0 flex-1 bg-transparent text-ink placeholder:text-ink/42 focus:outline-none ${
            compact ? 'py-0.5 text-[13px] font-medium' : 'py-0.5 text-[14px] font-medium'
          }`}
        />
      </div>

      {menuOpen && (
        <div
          role="listbox"
          aria-label="Country dial codes"
          className="animate-fade-up absolute left-0 top-full z-40 mt-2.5 max-h-52 w-64 overflow-y-auto rounded-xl border border-sage/20 bg-white p-1.5 shadow-[0_18px_40px_rgba(35,59,48,0.18)]"
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
                  onDialSelect(option);
                  setMenuOpen(false);
                  onOpenChange?.(false);
                }}
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-xs transition ${
                  selected ? 'bg-sage-pale font-bold text-forest' : 'text-ink/80 hover:bg-cream'
                }`}
              >
                <span className="flex items-center gap-2 truncate">
                  <CountryFlag code={option.code} />
                  <span className="truncate">{option.name}</span>
                </span>
                <span className="flex shrink-0 items-center gap-1.5 font-semibold tabular-nums text-ink/55">
                  {option.dial}
                  {selected && <Check size={12} className="text-forest" />}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

