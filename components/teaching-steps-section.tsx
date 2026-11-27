'use client';

import { useEffect, useState } from 'react';
import { Reveal } from './reveal';

type StepItem = {
  id: string;
  devanagariNum: string;
  sanskrit: string;
  title: string;
  category: string;
  description: string;
  ringLabel: string;
  segmentOffsets: readonly string[];
  dividerAngles: readonly number[];
  ringRadius: number;
  ringWidth: number;
  ringFontSize: number;
  spinDuration: number;
};

const STEPS: readonly StepItem[] = [
  {
    id: 'tapas',
    devanagariNum: '१',
    sanskrit: 'तपस्',
    title: 'Tapas',
    category: 'DISCIPLINE',
    description:
      'Consistent daily devotion builds quiet inner warmth. Returning to the mat with steadiness anchors your energy off the mat too.',
    ringLabel: 'तपस्  ·  TAPAS  ·  DISCIPLINE',
    segmentOffsets: ['12.5%', '37.5%', '62.5%', '87.5%'],
    dividerAngles: [90, 180, 270],
    ringRadius: 200,
    ringWidth: 38,
    ringFontSize: 10.2,
    spinDuration: 28,
  },
  {
    id: 'asana',
    devanagariNum: '२',
    sanskrit: 'आसन',
    title: 'Asana',
    category: 'ALIGNMENT',
    description:
      'Correct alignment lets prana flow freely. Skeletal and muscular precision bring stability and ease to every posture.',
    ringLabel: 'आसन  ·  ASANA  ·  ALIGNMENT',
    segmentOffsets: ['16.67%', '50%', '83.33%'],
    dividerAngles: [120, 240],
    ringRadius: 160,
    ringWidth: 36,
    ringFontSize: 10,
    spinDuration: 42,
  },
  {
    id: 'pranayama',
    devanagariNum: '३',
    sanskrit: 'प्राणायाम',
    title: 'Pranayama',
    category: 'BREATH',
    description:
      'Guided regulation of the breath settles the nervous system, clears mental noise, and turns movement into calm awareness.',
    ringLabel: 'प्राणायाम  ·  PRANAYAMA  ·  BREATH',
    segmentOffsets: ['25%', '75%'],
    dividerAngles: [180],
    ringRadius: 121,
    ringWidth: 35,
    ringFontSize: 9.4,
    spinDuration: 60,
  },
  {
    id: 'dhyana',
    devanagariNum: '४',
    sanskrit: 'ध्यान',
    title: 'Dhyana',
    category: 'MEDITATION',
    description:
      'When discipline, posture, and breath draw awareness inward, sustained focus softens into effortless stillness at the center.',
    ringLabel: 'ध्यान  ·  DHYANA  ·  MEDITATION',
    segmentOffsets: ['25%', '75%'],
    dividerAngles: [180],
    ringRadius: 84,
    ringWidth: 32,
    ringFontSize: 8.4,
    spinDuration: 84,
  },
] as const;

const CYCLE_MS = 5600;

function StepGlyph({ id, className = 'h-4 w-4' }: { id: string; className?: string }) {
  switch (id) {
    case 'tapas':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M12.5 3.5c.8 2.8-.6 4.7-2 6.3-1.4 1.6-2 3.3-1.3 5.2.6 1.7 2.2 3 4 3.2 2.4.2 4.3-1.6 4.3-4.1 0-2.1-1.2-3.7-2.4-4.9-.2 1.4-1 2.4-2.1 2.7.5-2.1 1-4.8-.5-8.4Z"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 14.5c0 3.3 2.5 5.8 5.8 5.8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="1.5 2.5"
          />
        </svg>
      );
    case 'asana':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="13" cy="5" r="2.1" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M13 8.8c1.8 1.2 1.8 3.2 0 4.5-1.8 1.3-1.8 3.3 0 4.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeDasharray="1.6 2.8"
          />
          <circle cx="11.5" cy="11" r="1.1" fill="currentColor" />
          <circle cx="13.5" cy="15" r="1.1" fill="currentColor" />
          <circle cx="11.5" cy="19" r="1.1" fill="currentColor" />
        </svg>
      );
    case 'pranayama':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M12 4.5v6m0 0c-1.8 0-4.2 1-5.5 3.1-1.4 2.2-1 5 1 6 1.4.7 3.5.1 4.5-1.4V10.5Zm0 0c1.8 0 4.2 1 5.5 3.1 1.4 2.2 1 5-1 6-1.4.7-3.5.1-4.5-1.4V10.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="6.2" r="2.1" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M7.5 14.5c1-2.5 2.7-4 4.5-4s3.5 1.5 4.5 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M5.5 18.2c2.2-1.4 4.4-1.8 6.5-1.8s4.3.4 6.5 1.8c-2.2 1.1-4.3 1.5-6.5 1.5s-4.3-.4-6.5-1.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

/** Interactive 4-stage yogic progression paired with concentric orbital mandala rings. */
export function TeachingStepsSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [cycleKey, setCycleKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STEPS.length);
      setCycleKey((prev) => prev + 1);
    }, CYCLE_MS);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const handleSelectStep = (index: number) => {
    setActiveIndex(index);
    setCycleKey((prev) => prev + 1);
  };

  const activeStep = STEPS[activeIndex];

  return (
    <section
      id="how-he-teaches"
      className="relative overflow-hidden bg-sage-pale px-3 py-10 sm:px-8 sm:py-18 lg:px-0 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,rgba(128,155,134,0.16),transparent_52%),radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.65),transparent_48%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1920px] items-center gap-7 sm:gap-10 lg:w-[92%] lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 2xl:w-[88%]">
        <Reveal>
          <div>
            <p className="mb-2.5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-forest/75 sm:text-[11px]">
              <span className="text-sm leading-none text-coral" aria-hidden="true">
                ॐ
              </span>
              <span>How he teaches</span>
            </p>
            <h2 className="font-display text-[28px] font-semibold leading-[1.1] tracking-[-0.04em] text-ink sm:text-4xl lg:text-[44px]">
              Four steps, <span className="text-sage">from the body to stillness</span>
            </h2>
            <p className="mt-3 max-w-lg text-[13px] leading-5 text-ink/62 sm:mt-4 sm:text-[15px] sm:leading-6">
              Each practice draws the attention one ring further in. Watch the rings: each turns a
              little slower than the one outside it, and the centre is still.
            </p>

            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="mt-5 overflow-hidden rounded-xl border border-sage/20 bg-white/95 shadow-[0_18px_50px_rgba(35,59,48,0.08)] sm:mt-8 sm:rounded-2xl"
            >
              <div className="divide-y divide-sage/12">
                {STEPS.map((step, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div key={step.id} className="relative">
                      <button
                        type="button"
                        aria-expanded={isActive}
                        aria-controls={`step-panel-${step.id}`}
                        onClick={() => handleSelectStep(index)}
                        className={`group flex w-full items-center gap-3 px-3.5 py-3 text-left transition-colors duration-200 sm:gap-4 sm:px-5 sm:py-4 ${
                          isActive ? 'bg-sage-pale/45' : 'hover:bg-sage-pale/25'
                        }`}
                      >
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all duration-300 sm:h-9 sm:w-9 sm:text-sm ${
                            isActive
                              ? 'bg-forest text-white shadow-xs'
                              : 'border border-sage/15 bg-sage-pale/75 text-ink/55 group-hover:border-sage/30 group-hover:text-forest'
                          }`}
                        >
                          {step.devanagariNum}
                        </span>

                        <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2 gap-y-0.5">
                          <span
                            className={`text-sm sm:text-[15px] ${
                              isActive ? 'text-ink/55' : 'text-ink/40'
                            }`}
                          >
                            {step.sanskrit}
                          </span>
                          <span
                            className={`font-display text-[15px] font-semibold tracking-[-0.02em] transition-colors sm:text-[17px] ${
                              isActive ? 'text-forest' : 'text-ink/82 group-hover:text-forest'
                            }`}
                          >
                            {step.title}
                          </span>
                          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-sage sm:text-[10px]">
                            {step.category}
                          </span>
                        </div>

                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 sm:h-9 sm:w-9 ${
                            isActive
                              ? 'bg-white text-forest shadow-2xs ring-1 ring-sage/20'
                              : 'bg-sage-pale/60 text-sage group-hover:bg-sage/15 group-hover:text-forest'
                          }`}
                        >
                          <StepGlyph id={step.id} className="h-4 w-4" />
                        </span>
                      </button>

                      <div
                        id={`step-panel-${step.id}`}
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                          isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-3.5 pb-4 pl-[56px] text-[13px] leading-5 text-ink/65 sm:px-5 sm:pb-4.5 sm:pl-[72px] sm:text-sm sm:leading-6">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {isActive && (
                        <div className="h-[2px] w-full overflow-hidden bg-sage/12">
                          <div
                            key={`${activeIndex}-${cycleKey}`}
                            style={{
                              animationPlayState: isPaused ? 'paused' : 'running',
                            }}
                            className="animate-progress-fill h-full w-full origin-left bg-forest"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative mx-auto flex aspect-square w-full max-w-[295px] items-center justify-center sm:max-w-[390px] lg:max-w-[460px]"
          >
            <svg
              viewBox="0 0 460 460"
              className="h-full w-full select-none overflow-visible drop-shadow-[0_20px_50px_rgba(35,59,48,0.08)]"
              role="img"
              aria-label={`Concentric yoga practice wheel centered on ${activeStep.title}`}
            >
              <defs>
                {STEPS.map((step) => (
                  <path
                    key={step.id}
                    id={`ring-path-${step.id}`}
                    d={`M 230, ${230 - step.ringRadius} A ${step.ringRadius},${step.ringRadius} 0 1,1 229.99,${230 - step.ringRadius} Z`}
                  />
                ))}
              </defs>

              {STEPS.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <g
                    key={step.id}
                    onClick={() => handleSelectStep(index)}
                    className="cursor-pointer"
                  >
                    <circle
                      cx={230}
                      cy={230}
                      r={step.ringRadius}
                      fill="none"
                      stroke={isActive ? 'rgba(134, 189, 134, 0.38)' : 'rgba(255, 255, 255, 0.78)'}
                      strokeWidth={step.ringWidth}
                      className="transition-colors duration-500"
                    />
                    <circle
                      cx={230}
                      cy={230}
                      r={step.ringRadius + step.ringWidth / 2}
                      fill="none"
                      stroke={isActive ? 'rgba(35, 59, 48, 0.16)' : 'rgba(128, 155, 134, 0.16)'}
                      strokeWidth="1"
                      className="transition-colors duration-500"
                    />

                    <g
                      style={{
                        transformBox: 'view-box',
                        transformOrigin: '230px 230px',
                        animation: `orbit-cw ${step.spinDuration}s linear infinite`,
                      }}
                    >
                      {step.segmentOffsets.map((offset) => (
                        <text
                          key={offset}
                          fontSize={step.ringFontSize}
                          fontWeight={isActive ? '700' : '600'}
                          letterSpacing="0.1em"
                          textAnchor="middle"
                          fill={isActive ? '#1d2822' : 'rgba(29, 40, 34, 0.44)'}
                          dominantBaseline="central"
                          className="transition-colors duration-500"
                        >
                          <textPath href={`#ring-path-${step.id}`} startOffset={offset}>
                            {step.ringLabel}
                          </textPath>
                        </text>
                      ))}

                      {step.dividerAngles.map((angle) => {
                        const rad = (angle * Math.PI) / 180;
                        return (
                          <circle
                            key={angle}
                            cx={230 + step.ringRadius * Math.sin(rad)}
                            cy={230 - step.ringRadius * Math.cos(rad)}
                            r={1.7}
                            fill={isActive ? 'rgba(35, 59, 48, 0.45)' : 'rgba(128, 155, 134, 0.45)'}
                          />
                        );
                      })}

                      <circle
                        cx={230}
                        cy={230 - step.ringRadius}
                        r={isActive ? 5.5 : 1.7}
                        fill={isActive ? '#233b30' : 'rgba(128, 155, 134, 0.45)'}
                        stroke={isActive ? '#ffffff' : 'none'}
                        strokeWidth={isActive ? 2 : 0}
                      />
                    </g>
                  </g>
                );
              })}

              <g>
                <circle cx={230} cy={230} r={56} fill="rgba(255, 255, 255, 0.55)" />
                <circle
                  cx={230}
                  cy={230}
                  r={42}
                  fill="#ffffff"
                  stroke="rgba(128, 155, 134, 0.28)"
                  strokeWidth="1.5"
                />
              </g>
            </svg>

            <div className="pointer-events-none absolute flex h-16 w-16 items-center justify-center rounded-full text-forest transition-transform duration-300 sm:h-20 sm:w-20">
              <StepGlyph id={activeStep.id} className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

