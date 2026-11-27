'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

export type CustomSelectOption = {
  value: string;
  label: string;
  hint?: string;
};

function normalizeOption(option: string | CustomSelectOption): CustomSelectOption {
  return typeof option === 'string' ? { value: option, label: option } : option;
}

/** Branded accessible listbox dropdown replacing native OS `<select>` menus. */
export function CustomSelect({
  id,
  name,
  ariaLabel,
  value,
  options,
  placeholder = 'Select an option',
  align = 'left',
  compact = false,
  onChange,
  onOpenChange,
}: {
  id: string;
  name?: string;
  ariaLabel?: string;
  value: string;
  options: readonly (string | CustomSelectOption)[];
  placeholder?: string;
  align?: 'left' | 'right';
  compact?: boolean;
  onChange: (nextValue: string) => void;
  onOpenChange?: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const normalized = options.map(normalizeOption);
  const selected = normalized.find((item) => item.value === value);

  useEffect(() => {
    if (!open) return;

    const handleOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
        onOpenChange?.(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        setOpen(false);
        onOpenChange?.(false);
      }
    };

    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEscape, true);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEscape, true);
    };
  }, [open, onOpenChange]);

  const handleToggle = () => {
    const nextOpen = !open;
    if (nextOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      setOpenUpward(spaceBelow < 210);
    }
    setOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };

  return (
    <div ref={containerRef} className="relative min-w-0 w-full">
      {name && <input type="hidden" name={name} value={value} />}

      <button
        id={id}
        type="button"
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        className={`flex w-full min-w-0 items-center justify-between gap-2 bg-transparent text-left focus:outline-none ${
          compact ? 'py-0.5 text-[12px] sm:text-[13px]' : 'py-0.5 text-[13px] sm:text-sm'
        } ${selected ? 'font-semibold text-ink' : 'font-medium text-ink/45'}`}
      >
        <span className="min-w-0 flex-1 truncate">{selected ? selected.label : placeholder}</span>
        <ChevronDown
          size={14}
          className={`shrink-0 transition-transform duration-300 ease-out ${
            open ? 'rotate-180 text-forest' : 'text-ink/45'
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-labelledby={id}
          className={`animate-fade-up absolute z-50 max-h-56 overflow-y-auto rounded-xl border border-sage/20 bg-white p-1.5 shadow-[0_20px_48px_rgba(24,43,34,0.18)] ring-1 ring-ink/[0.04] ${
            openUpward ? 'bottom-full mb-2.5' : 'top-full mt-2.5'
          } ${
            align === 'right'
              ? 'right-0 min-w-[215px] w-full'
              : 'left-0 min-w-[220px] w-full'
          }`}
        >
          {normalized.map((option) => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                  onOpenChange?.(false);
                }}
                className={`flex w-full items-center justify-between gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors ${
                  isSelected
                    ? 'bg-sage-pale font-bold text-forest'
                    : 'text-ink/82 hover:bg-sage-pale/55 hover:text-forest'
                }`}
              >
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-xs sm:text-[13px]">{option.label}</span>
                  {option.hint && (
                    <span className="block truncate text-[10px] font-normal text-ink/52">
                      {option.hint}
                    </span>
                  )}
                </span>
                {isSelected && <Check size={14} strokeWidth={2.5} className="shrink-0 text-[#235c3d]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
