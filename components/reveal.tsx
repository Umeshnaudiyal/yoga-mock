'use client';

import { useEffect, useRef } from 'react';
import { isSiteLoading, SITE_LOADER_REVEAL_EVENT } from './site-loader';

type RevealHandler = (element: HTMLElement) => void;

const elementHandlers = new WeakMap<Element, RevealHandler>();
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver(): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null;
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      if (isSiteLoading()) return;

      for (const entry of entries) {
        if (!entry.isIntersecting && entry.boundingClientRect.top > window.innerHeight * 0.96) continue;
        const handler = elementHandlers.get(entry.target);
        if (handler) {
          handler(entry.target as HTMLElement);
          elementHandlers.delete(entry.target);
        }
        sharedObserver?.unobserve(entry.target);
      }
    },
    { threshold: 0.06, rootMargin: '0px 0px -36px 0px' }
  );

  return sharedObserver;
}

/** Lightweight GPU-composited bottom-up scroll reveal synced with site loader readiness. */
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

    let frameId = 0;
    let observer: IntersectionObserver | null = null;

    const armReveal = () => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.94 && rect.bottom >= 0) {
        frameId = window.requestAnimationFrame(show);
        return;
      }

      observer = getSharedObserver();
      if (!observer) {
        show();
        return;
      }

      elementHandlers.set(element, show);
      observer.observe(element);
    };

    if (!isSiteLoading()) {
      armReveal();
    } else {
      window.addEventListener(SITE_LOADER_REVEAL_EVENT, armReveal, { once: true });
    }

    return () => {
      window.removeEventListener(SITE_LOADER_REVEAL_EVENT, armReveal);
      if (frameId) window.cancelAnimationFrame(frameId);
      elementHandlers.delete(element);
      observer?.unobserve(element);
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
