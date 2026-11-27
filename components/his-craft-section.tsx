'use client';

import { useEffect, useState } from 'react';
import { Reveal } from './reveal';

const METHODOLOGY_STEPS = ['See', 'Cue', 'Adjust', 'Hold'] as const;

const SPINE_SEGMENTS = [
  { y: 31, dx: 2, w: 13 },
  { y: 39, dx: 5, w: 14 },
  { y: 47, dx: 7, w: 15 },
  { y: 55, dx: 6, w: 16 },
  { y: 63, dx: 3, w: 16 },
  { y: 71, dx: -1, w: 17 },
  { y: 79, dx: -5, w: 17 },
  { y: 87, dx: -7, w: 18 },
  { y: 95, dx: -6, w: 17 },
  { y: 103, dx: -3, w: 15 },
  { y: 111, dx: 0, w: 13 },
] as const;

const SUN_RAY_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330] as const;

function VinyasaIllustration() {
  return (
    <div className="relative flex h-[140px] w-full items-center justify-center overflow-hidden rounded-lg bg-[radial-gradient(circle_at_50%_55%,rgba(128,155,134,0.16),transparent_68%)] sm:h-[168px]">
      <svg viewBox="0 0 320 132" className="h-full w-full max-w-[320px]" aria-hidden="true">
        <defs>
          <path
            id="vinyasa-breath-curve"
            d="M 26 70 C 40 70, 48 38, 64 38 C 84 38, 104 102, 124 102 C 144 102, 164 38, 184 38 C 204 38, 224 102, 244 102 C 264 102, 276 68, 294 62"
          />
        </defs>

        <use
          href="#vinyasa-breath-curve"
          fill="none"
          stroke="rgba(128, 155, 134, 0.34)"
          strokeWidth="6"
          strokeLinecap="round"
        />

        <path
          d="M 164 58 C 171 44, 177 38, 184 38 C 196 38, 208 58, 220 82"
          fill="none"
          stroke="#233b30"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />

        <text x="64" y="22" textAnchor="middle" fontSize="9.5" fontStyle="italic" fill="#355244">
          inhale
        </text>
        <text x="124" y="121" textAnchor="middle" fontSize="9.5" fontStyle="italic" fill="#355244">
          exhale
        </text>
        <text x="184" y="22" textAnchor="middle" fontSize="9.5" fontStyle="italic" fill="#355244">
          inhale
        </text>
        <text x="244" y="121" textAnchor="middle" fontSize="9.5" fontStyle="italic" fill="#355244">
          exhale
        </text>

        <g>
          <circle r="11" fill="rgba(35, 59, 48, 0.12)" />
          <circle r="5.5" fill="#ffffff" stroke="#233b30" strokeWidth="3" />
          <animateMotion
            dur="7.5s"
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="spline"
            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
          >
            <mpath href="#vinyasa-breath-curve" />
          </animateMotion>
        </g>
      </svg>
    </div>
  );
}

function HathaIllustration() {
  return (
    <div className="relative flex h-[220px] w-full items-center justify-center sm:h-[290px] lg:h-[340px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-48 w-48 rounded-full border border-dashed border-sage/20 bg-[radial-gradient(circle,rgba(128,155,134,0.16),rgba(238,243,238,0.65)_60%,transparent_72%)] sm:h-64 sm:w-64"
      />

      <svg viewBox="0 0 320 260" className="relative h-full w-full max-w-[330px]" aria-hidden="true">
        <line
          x1="82"
          y1="205"
          x2="238"
          y2="205"
          stroke="rgba(128, 155, 134, 0.45)"
          strokeWidth="1.5"
        />
        <polygon points="160,148 142,204 178,204" fill="#233b30" />

        <g
          className="animate-hatha-balance"
          style={{ transformBox: 'view-box', transformOrigin: '160px 148px' }}
        >
          <rect x="64" y="145" width="192" height="5" rx="2.5" fill="#233b30" />

          <g transform="translate(80, 108)">
            <circle r="15" fill="#e6a84c" opacity="0.88" />
            {SUN_RAY_ANGLES.map((angle) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = Math.cos(rad) * 19;
              const y1 = Math.sin(rad) * 19;
              const x2 = Math.cos(rad) * 24;
              const y2 = Math.sin(rad) * 24;
              return (
                <line
                  key={angle}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#e6a84c"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              );
            })}
          </g>
          <text x="80" y="170" textAnchor="middle" fontSize="13" fontStyle="italic" fill="#355244">
            ha
          </text>

          <g transform="translate(242, 105)">
            <path
              d="M -2 -14 A 15 15 0 1 0 13 6 A 12.5 12.5 0 1 1 -2 -14 Z"
              fill="none"
              stroke="#233b30"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </g>
          <text x="240" y="170" textAnchor="middle" fontSize="13" fontStyle="italic" fill="#355244">
            tha
          </text>
        </g>
      </svg>
    </div>
  );
}

function SpineIllustration() {
  return (
    <div className="relative flex h-[138px] w-full items-center justify-center rounded-lg bg-[radial-gradient(circle_at_50%_50%,rgba(128,155,134,0.16),transparent_68%)] sm:h-[154px]">
      <svg viewBox="0 0 220 144" className="h-full w-full max-w-[220px]" aria-hidden="true">
        <circle
          cx="110"
          cy="17"
          r="7"
          fill="none"
          stroke="#233b30"
          strokeWidth="2.3"
        />

        {SPINE_SEGMENTS.map(({ y, dx, w }, index) => (
          <rect
            key={y}
            x={110 + dx - w / 2}
            y={y}
            width={w}
            height="4.4"
            rx="2.2"
            fill="#809b86"
            style={{
              transformBox: 'view-box',
              transformOrigin: `${110 + dx}px ${y + 2}px`,
              animation: 'spine-pulse 2.4s ease-in-out infinite',
              animationDelay: `${index * 110}ms`,
            }}
          />
        ))}

        <polygon points="109,131 104,122 114,122" fill="#233b30" />
      </svg>
    </div>
  );
}

function MethodologyIllustration({
  activeStep,
  onSelect,
}: {
  activeStep: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="relative flex h-[142px] w-full items-center justify-center rounded-lg bg-[radial-gradient(circle_at_50%_50%,rgba(128,155,134,0.16),transparent_68%)] sm:h-[158px]">
      <div className="relative flex h-[126px] w-[184px] items-center justify-center">
        <svg viewBox="0 0 184 126" className="h-full w-full" aria-hidden="true">
          <circle
            cx="92"
            cy="63"
            r="44"
            fill="none"
            stroke="rgba(128, 155, 134, 0.45)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />

          <g transform="translate(80, 52)">
            <path
              d="M12 4.2C9.5 2.7 5.5 2.3 2 3v14.8c3.5-.6 7.5-.3 10 1.2m0-14.8c2.5-1.5 6.5-1.9 10-1.2v14.8c-3.5-.6-7.5-.3-10 1.2m0-14.8v14.8"
              fill="none"
              stroke="#5c7e65"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>

        {METHODOLOGY_STEPS.map((label, index) => {
          const isActive = index === activeStep;
          const posClass =
            index === 0
              ? 'left-1/2 top-0 -translate-x-1/2'
              : index === 1
                ? 'right-1 top-1/2 -translate-y-1/2'
                : index === 2
                  ? 'bottom-0 left-1/2 -translate-x-1/2'
                  : 'left-1 top-1/2 -translate-y-1/2';

          return (
            <button
              key={label}
              type="button"
              onClick={() => onSelect(index)}
              className={`absolute ${posClass} rounded-full border px-2.5 py-1 text-[10px] font-bold tracking-[0.04em] transition-all duration-300 ${
                isActive
                  ? 'scale-105 border-forest bg-forest text-white shadow-[0_6px_16px_rgba(35,59,48,0.22)]'
                  : 'border-sage/25 bg-white text-ink/70 shadow-2xs hover:border-sage hover:text-forest'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Asymmetric bento showcase highlighting the four core disciplines of Ritesh's craft. */
export function HisCraftSection() {
  const [methodStep, setMethodStep] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setMethodStep((prev) => (prev + 1) % METHODOLOGY_STEPS.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  const cardBase =
    'flex h-full flex-col justify-between rounded-xl border border-sage/18 bg-white p-4 shadow-[0_14px_40px_rgba(35,59,48,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(35,59,48,0.1)] sm:rounded-2xl sm:p-6';

  return (
    <section
      id="his-craft"
      className="relative overflow-hidden bg-cream px-3 py-10 sm:px-8 sm:py-18 lg:px-0 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(128,155,134,0.12),transparent_44%),radial-gradient(circle_at_84%_76%,rgba(226,200,159,0.14),transparent_46%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1920px] gap-4 sm:gap-5 lg:w-[92%] lg:grid-cols-12 lg:items-stretch lg:gap-6 2xl:w-[88%]">
        <div className="flex flex-col justify-between gap-4 sm:gap-5 lg:col-span-4">
          <Reveal>
            <div className="lg:pt-2">
              <p className="mb-2.5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-forest/75 sm:text-[11px]">
                <span className="text-sm leading-none text-coral" aria-hidden="true">
                  ॐ
                </span>
                <span>What he teaches</span>
              </p>
              <h2 className="font-display text-[30px] font-semibold leading-[1.08] tracking-[-0.04em] text-ink sm:text-4xl lg:text-[44px]">
                His <span className="text-sage">craft</span>
              </h2>
              <p className="mt-2.5 max-w-sm text-[13px] leading-5 text-ink/62 sm:mt-3 sm:text-[15px] sm:leading-6">
                Four subjects he has made his own, and passes on to every teacher who trains with
                him.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90} className="flex-1">
            <article className={cardBase}>
              <VinyasaIllustration />
              <div className="mt-3 pt-1">
                <p className="text-[11px] font-medium tracking-[0.12em] text-ink/45 uppercase">
                  <span className="mr-1.5 text-sm normal-case text-ink/55">विन्यास</span> Vinyasa
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold tracking-[-0.025em] text-ink sm:text-xl">
                  Vinyasa Flow
                </h3>
                <p className="mt-1.5 text-[13px] leading-5 text-ink/62 sm:text-sm sm:leading-6">
                  Postures placed in sequence, one breath to one movement, building heat, strength
                  and a moving meditation.
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={140} className="lg:col-span-4">
          <article className={cardBase}>
            <HathaIllustration />
            <div className="mt-4 pt-2">
              <p className="text-[11px] font-medium tracking-[0.12em] text-ink/45 uppercase">
                <span className="mr-1.5 text-sm normal-case text-ink/55">हठ</span> Hatha
              </p>
              <h3 className="mt-1 font-display text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl">
                Hatha Yoga
              </h3>
              <p className="mt-2 text-[13px] leading-5 text-ink/62 sm:text-sm sm:leading-6">
                Ha, the sun, and tha, the moon: traditional asana and pranayama that balance the
                body&apos;s two currents and prepare it for meditation.
              </p>
            </div>
          </article>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-4 lg:grid-cols-1 lg:gap-6">
          <Reveal delay={180} className="flex">
            <article className={`${cardBase} w-full`}>
              <SpineIllustration />
              <div className="mt-3 pt-1">
                <p className="text-[11px] font-medium tracking-[0.12em] text-ink/45 uppercase">
                  <span className="mr-1.5 text-sm normal-case text-ink/55">शरीर</span> Sharira
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold tracking-[-0.025em] text-ink sm:text-xl">
                  Alignment and anatomy
                </h3>
                <p className="mt-1.5 text-[13px] leading-5 text-ink/62 sm:text-sm sm:leading-6">
                  A scientific approach to the postures: safety first, structural imbalances
                  corrected, the musculoskeletal system understood.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={230} className="flex">
            <article className={`${cardBase} w-full`}>
              <MethodologyIllustration activeStep={methodStep} onSelect={setMethodStep} />
              <div className="mt-3 pt-1">
                <p className="text-[11px] font-medium tracking-[0.12em] text-ink/45 uppercase">
                  <span className="mr-1.5 text-sm normal-case text-ink/55">अध्यापन</span> Adhyapana
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold tracking-[-0.025em] text-ink sm:text-xl">
                  Teaching methodology
                </h3>
                <p className="mt-1.5 text-[13px] leading-5 text-ink/62 sm:text-sm sm:leading-6">
                  How to see, cue, adjust and hold a class: the craft he passes on to every teacher
                  who trains at the school.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
