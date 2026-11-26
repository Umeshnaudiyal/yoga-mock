'use client';

import { useEffect, useRef, useState } from 'react';
import { Globe2, HeartHandshake, Sparkles, Users } from 'lucide-react';
import { Reveal } from './reveal';

const stats = [
  { icon: Users, target: 10000, suffix: '+', label: 'Happy Students' },
  { icon: Sparkles, target: 15, suffix: '+', label: 'Years of Experience' },
  { icon: Globe2, target: 50, suffix: '+', label: 'Countries Reached' },
  { icon: HeartHandshake, target: 98, suffix: '%', label: 'Student Satisfaction' },
] as const;

function CountUpValue({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frameId = 0;
    const duration = reducedMotion ? 0 : 1400;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = duration === 0 ? 1 : Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [active, target]);

  return (
    <span className="tabular-nums">
      {value.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}

/** Animated metrics bar with bold display numerals triggered once on viewport entry. */
export function StatsBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-10 bg-cream px-3 pb-10 pt-2 sm:px-8 sm:pb-16 sm:pt-4 lg:px-0 lg:pb-20">
      <Reveal>
        <div
          ref={containerRef}
          className="mx-auto grid w-full max-w-[1920px] grid-cols-2 gap-y-5 rounded-xl border border-sage/15 bg-white/90 px-3 py-5 shadow-[0_18px_50px_rgba(80,98,83,0.08)] backdrop-blur-sm sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-sage/20 sm:rounded-2xl sm:px-6 sm:py-7 lg:w-[92%] lg:py-8 2xl:w-[88%]"
        >
          {stats.map(({ icon: Icon, target, suffix, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-3 px-3 text-center sm:flex-row sm:justify-center sm:gap-4 sm:text-left"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage/12 text-sage transition-all duration-300 group-hover:scale-105 group-hover:bg-forest group-hover:text-sand sm:h-14 sm:w-14">
                <Icon size={22} strokeWidth={1.85} />
              </span>
              <div>
                <p className="font-display text-3xl font-extrabold tracking-[-0.04em] text-forest sm:text-4xl xl:text-[42px]">
                  <CountUpValue target={target} suffix={suffix} active={active} />
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-ink/60 sm:text-xs">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
