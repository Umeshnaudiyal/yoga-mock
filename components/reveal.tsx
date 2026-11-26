'use client';

import { useEffect, useRef } from 'react';

type RevealHandler = (element: HTMLElement) => void;

const elementHandlers = new WeakMap<Element, RevealHandler>();
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver(): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null;
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting && entry.boundingClientRect.top > window.innerHeight) continue;
        const handler = elementHandlers.get(entry.target);
        if (handler) {
          handler(entry.target as HTMLElement);
          elementHandlers.delete(entry.target);
        }
        sharedObserver?.unobserve(entry.target);
      }
    },
    { threshold: 0.01, rootMargin: '0px 0px -24px 0px' }
  );

  return sharedObserver;
}

/** Lightweight GPU-composited bottom-up scroll reveal sharing a single viewport observer. */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const show = () => element.classList.add('is-visible');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      show();
      return;
    }

    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.98) {
      const frame = window.requestAnimationFrame(show);
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = getSharedObserver();
    if (!observer) {
      show();
      return;
    }

    elementHandlers.set(element, show);
    observer.observe(element);

    return () => {
      elementHandlers.delete(element);
      observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal min-w-0 ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
