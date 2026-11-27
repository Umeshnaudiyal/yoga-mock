'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FooterMandala } from './footer-enquiry-banner';

export const SITE_LOADER_REVEAL_EVENT = 'site-loader:reveal';

export function isSiteLoading(): boolean {
  return (
    typeof document !== 'undefined' &&
    document.documentElement.dataset.siteLoading === 'true'
  );
}

/** Soft pastel light-green sanctuary loading overlay visual shared by SiteLoader and app/loading. */
export function LoaderCanvas({ fading = false }: { fading?: boolean }) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Ritesh Yoga"
      className={`fixed inset-0 z-[120] flex flex-col items-center justify-center overflow-hidden bg-[linear-gradient(155deg,#ebf4ec_0%,#f4f9f4_50%,#e0eee2_100%)] px-5 transition-opacity duration-[420ms] ease-out will-change-[opacity] select-none ${
        fading ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(128,170,136,0.22),transparent_56%),radial-gradient(circle_at_18%_20%,rgba(226,200,159,0.2),transparent_48%),radial-gradient(circle_at_84%_82%,rgba(142,211,159,0.22),transparent_48%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#235c3d]/[0.05]"
      >
        <FooterMandala
          animate={false}
          className="h-[340px] w-[340px] sm:h-[460px] sm:w-[460px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-2 rounded-full bg-[radial-gradient(circle,rgba(128,170,136,0.26),transparent_68%)]"
          />

          <div className="relative h-24 w-24 sm:h-28 sm:w-28" aria-hidden="true">
            <svg viewBox="0 0 120 120" className="h-full w-full">
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="rgba(35, 92, 61, 0.12)"
                strokeWidth="2.4"
              />
            </svg>

            <div
              className="absolute inset-0 will-change-transform"
              style={{ animation: 'orbit-cw 1.5s linear infinite' }}
            >
              <svg viewBox="0 0 120 120" className="h-full w-full">
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  fill="none"
                  stroke="#235c3d"
                  strokeWidth="3"
                  strokeDasharray="96 240"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div
              className="absolute inset-0 will-change-transform"
              style={{ animation: 'orbit-ccw 2.2s linear infinite' }}
            >
              <svg viewBox="0 0 120 120" className="h-full w-full">
                <circle
                  cx="60"
                  cy="60"
                  r="45"
                  fill="none"
                  stroke="#6e9878"
                  strokeWidth="1.6"
                  strokeDasharray="62 220"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="absolute flex h-16 w-16 items-center justify-center rounded-full border border-sage/20 bg-white shadow-[0_12px_30px_rgba(25,56,42,0.12)] sm:h-[72px] sm:w-[72px]">
            <svg viewBox="0 0 40 40" className="h-9 w-9 sm:h-10 sm:w-10" aria-hidden="true">
              <circle cx="20" cy="11.5" r="2.7" fill="#235c3d" />
              <path
                d="M 20 15.5 C 22.8 18 24.5 21 23.8 24.2 C 21.8 25.2 18.2 25.2 16.2 24.2 C 15.5 21 17.2 18 20 15.5 Z"
                fill="#235c3d"
              />
              <path
                d="M 16.5 18 C 12.2 18.8 9.2 22 10.6 25.2 C 12.4 26.8 15.8 26.4 17.8 25.2"
                fill="none"
                stroke="#6e9878"
                strokeWidth="2.1"
                strokeLinecap="round"
              />
              <path
                d="M 23.5 18 C 27.8 18.8 30.8 22 29.4 25.2 C 27.6 26.8 24.2 26.4 22.2 25.2"
                fill="none"
                stroke="#6e9878"
                strokeWidth="2.1"
                strokeLinecap="round"
              />
              <path
                d="M 11.5 28.5 C 14.8 31 25.2 31 28.5 28.5"
                fill="none"
                stroke="#c9785d"
                strokeWidth="1.9"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          <p className="font-display text-sm font-bold tracking-[-0.015em] text-[#173827] sm:text-[15px]">
            Ritesh Yoga
          </p>
          <span className="inline-flex items-center gap-1" aria-hidden="true">
            <span className="animate-dot-wave will-change-transform h-1.5 w-1.5 rounded-full bg-[#235c3d]" />
            <span className="animate-dot-wave will-change-transform h-1.5 w-1.5 rounded-full bg-[#4c7d5c] [animation-delay:180ms]" />
            <span className="animate-dot-wave will-change-transform h-1.5 w-1.5 rounded-full bg-[#80a888] [animation-delay:360ms]" />
          </span>
        </div>

        <p className="mt-1 text-[11px] font-medium tracking-[0.04em] text-[#235c3d]/65 sm:text-xs">
          Breathe in calm · Preparing your space
        </p>

        <div
          aria-hidden="true"
          className="mt-4 h-[2.5px] w-28 overflow-hidden rounded-full bg-[#235c3d]/12 sm:w-32"
        >
          <div className="animate-shimmer-slide will-change-transform h-full w-14 rounded-full bg-gradient-to-r from-[#80a888] via-[#235c3d] to-[#80a888]" />
        </div>
      </div>
    </div>
  );
}

/** Global sanctuary loader shown on initial boot and seamlessly between internal route changes. */
export function SiteLoader() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const prevPathnameRef = useRef(pathname);
  const startedAtRef = useRef(0);
  const isTransitioningRef = useRef(true);
  const fadeTimerRef = useRef<number | null>(null);
  const fadeFrameRef = useRef<number | null>(null);
  const revealTimerRef = useRef<number | null>(null);
  const unmountTimerRef = useRef<number | null>(null);
  const failsafeTimerRef = useRef<number | null>(null);

  const clearAllTimers = useCallback(() => {
    if (fadeTimerRef.current !== null) {
      window.clearTimeout(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }
    if (fadeFrameRef.current !== null) {
      window.cancelAnimationFrame(fadeFrameRef.current);
      fadeFrameRef.current = null;
    }
    if (revealTimerRef.current !== null) {
      window.clearTimeout(revealTimerRef.current);
      revealTimerRef.current = null;
    }
    if (unmountTimerRef.current !== null) {
      window.clearTimeout(unmountTimerRef.current);
      unmountTimerRef.current = null;
    }
    if (failsafeTimerRef.current !== null) {
      window.clearTimeout(failsafeTimerRef.current);
      failsafeTimerRef.current = null;
    }
  }, []);

  const scheduleDismiss = useCallback(
    (minDwellMs: number) => {
      if (!isTransitioningRef.current) return;
      isTransitioningRef.current = false;

      if (failsafeTimerRef.current !== null) {
        window.clearTimeout(failsafeTimerRef.current);
        failsafeTimerRef.current = null;
      }

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const effectiveDwell = prefersReducedMotion ? 80 : minDwellMs;
      const fadeDurationMs = prefersReducedMotion ? 100 : 420;
      const revealOffsetMs = prefersReducedMotion ? 20 : 120;
      const elapsed = performance.now() - startedAtRef.current;
      const delayBeforeFade = Math.max(0, effectiveDwell - elapsed);

      fadeTimerRef.current = window.setTimeout(() => {
        fadeTimerRef.current = null;
        fadeFrameRef.current = window.requestAnimationFrame(() => {
          fadeFrameRef.current = null;
          setIsFading(true);
          revealTimerRef.current = window.setTimeout(() => {
            revealTimerRef.current = null;
            document.documentElement.dataset.siteLoading = 'false';
            window.dispatchEvent(new Event(SITE_LOADER_REVEAL_EVENT));
          }, revealOffsetMs);
          unmountTimerRef.current = window.setTimeout(() => {
            setIsMounted(false);
            document.documentElement.dataset.siteLoading = 'false';
            unmountTimerRef.current = null;
          }, fadeDurationMs);
        });
      }, delayBeforeFade);
    },
    []
  );

  const beginRouteLoader = useCallback(() => {
    clearAllTimers();
    isTransitioningRef.current = true;
    startedAtRef.current = performance.now();
    document.documentElement.dataset.siteLoading = 'true';
    setIsMounted(true);
    setIsFading(false);

    failsafeTimerRef.current = window.setTimeout(() => {
      scheduleDismiss(460);
    }, 1800);
  }, [clearAllTimers, scheduleDismiss]);

  useEffect(() => {
    document.documentElement.dataset.siteLoading = 'true';
    startedAtRef.current = performance.now();

    const handleInitialLoad = () => scheduleDismiss(700);
    failsafeTimerRef.current = window.setTimeout(handleInitialLoad, 1650);

    if (document.readyState === 'complete') {
      handleInitialLoad();
    } else {
      window.addEventListener('load', handleInitialLoad, { once: true });
    }

    const handleDocumentClick = (event: MouseEvent) => {
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
      if (anchor.hasAttribute('download')) return;
      if (anchor.target && anchor.target !== '_self') return;

      const rawHref = anchor.getAttribute('href');
      if (
        !rawHref ||
        rawHref.startsWith('#') ||
        rawHref.startsWith('mailto:') ||
        rawHref.startsWith('tel:')
      ) {
        return;
      }

      let resolvedUrl: URL;
      try {
        resolvedUrl = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      if (resolvedUrl.origin !== window.location.origin) return;
      if (
        resolvedUrl.pathname === window.location.pathname &&
        resolvedUrl.search === window.location.search
      ) {
        return;
      }

      beginRouteLoader();
    };

    const handlePopState = () => {
      beginRouteLoader();
    };

    document.addEventListener('click', handleDocumentClick, true);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('load', handleInitialLoad);
      document.removeEventListener('click', handleDocumentClick, true);
      window.removeEventListener('popstate', handlePopState);
      clearAllTimers();
      document.documentElement.dataset.siteLoading = 'false';
    };
  }, [beginRouteLoader, clearAllTimers, scheduleDismiss]);

  useEffect(() => {
    if (prevPathnameRef.current === pathname) return;
    prevPathnameRef.current = pathname;

    if (!isTransitioningRef.current) {
      isTransitioningRef.current = true;
      startedAtRef.current = performance.now();
      document.documentElement.dataset.siteLoading = 'true';
    }

    const routeTimer = window.setTimeout(() => {
      scheduleDismiss(460);
    }, 30);

    return () => window.clearTimeout(routeTimer);
  }, [pathname, scheduleDismiss]);

  if (!isMounted) return null;

  return <LoaderCanvas fading={isFading} />;
}
