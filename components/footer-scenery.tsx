'use client';

type BirdSpec = {
  id: string;
  startX: number;
  startY: number;
  scale: number;
  durationSec: number;
  delaySec: number;
  flapDurationSec: number;
};

const MOBILE_BIRDS: readonly BirdSpec[] = [
  { id: 'm1', startX: 40, startY: 54, scale: 0.92, durationSec: 22, delaySec: -4, flapDurationSec: 1.3 },
  { id: 'm2', startX: 85, startY: 42, scale: 0.72, durationSec: 25, delaySec: -10, flapDurationSec: 1.55 },
  { id: 'm3', startX: 10, startY: 68, scale: 0.65, durationSec: 28, delaySec: -17, flapDurationSec: 1.2 },
  { id: 'm4', startX: 130, startY: 34, scale: 0.56, durationSec: 30, delaySec: -22, flapDurationSec: 1.7 },
];

const DESKTOP_BIRDS: readonly BirdSpec[] = [
  { id: 'd1', startX: 280, startY: 64, scale: 1.05, durationSec: 26, delaySec: -5, flapDurationSec: 1.35 },
  { id: 'd2', startX: 380, startY: 48, scale: 0.84, durationSec: 29, delaySec: -11, flapDurationSec: 1.55 },
  { id: 'd3', startX: 520, startY: 74, scale: 0.74, durationSec: 32, delaySec: -18, flapDurationSec: 1.25 },
  { id: 'd4', startX: 680, startY: 44, scale: 0.64, durationSec: 34, delaySec: -24, flapDurationSec: 1.65 },
  { id: 'd5', startX: 160, startY: 58, scale: 0.88, durationSec: 28, delaySec: -2, flapDurationSec: 1.45 },
];

function FlyingBird({ startX, startY, scale, durationSec, delaySec, flapDurationSec }: BirdSpec) {
  return (
    <g
      style={{
        animation: `bird-soar ${durationSec}s linear infinite`,
        animationDelay: `${delaySec}s`,
      }}
    >
      <g transform={`translate(${startX}, ${startY}) scale(${scale})`}>
        <path
          d="M -11 3 C -6 -5 -1.5 -3.5 0 0 C 1.5 -3.5 6 -5 11 3"
          fill="none"
          stroke="#0b1f14"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transformBox: 'fill-box',
            transformOrigin: 'center bottom',
            animation: `wing-flap ${flapDurationSec}s ease-in-out infinite`,
            animationDelay: `${delaySec * 0.3}s`,
          }}
        />
      </g>
    </g>
  );
}

function MeditatorSilhouette({ transform }: { transform: string }) {
  return (
    <g transform={transform} fill="#06120c">
      <path d="M -38 56 C -34 38 -25 22 -12 18 C -4 16 8 15 17 20 C 28 26 35 42 40 56 Z" />
      <circle cx="0" cy="-21" r="4.6" />
      <circle cx="0" cy="-27" r="2.2" />
      <path d="M -2.2 -17 Q 0 -14 2.2 -17 L 7 -9 C 9.5 -7.5 11 -3 11 2 L 6 10 L -6 10 L -11 2 C -11 -3 -9.5 -7.5 -7 -9 Z" />
      <path d="M -8 -7 C -14 -2 -17 4 -15 9 C -13 13 -8 13 -5 11" fill="none" stroke="#06120c" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M 8 -7 C 14 -2 17 4 15 9 C 13 13 8 13 5 11" fill="none" stroke="#06120c" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M -17 17 C -14 9 -6 8 0 11 C 6 8 14 9 17 17 C 12 20 -12 20 -17 17 Z" />
    </g>
  );
}

/** Layered Himalayan sunrise silhouette artwork with river shimmer and soaring animated birds. */
export function FooterScenery() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#133321] via-[#123120] to-[#0d2317]"
    >
      <svg
        viewBox="0 0 460 190"
        preserveAspectRatio="xMidYMax slice"
        className="block h-[165px] w-full sm:hidden"
      >
        <defs>
          <linearGradient id="sky-grad-sm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#133321" />
            <stop offset="65%" stopColor="#19442b" />
            <stop offset="100%" stopColor="#143522" />
          </linearGradient>
          <radialGradient id="sun-halo-sm" cx="0.78" cy="0.58" r="0.34">
            <stop offset="0%" stopColor="#ffe1a6" stopOpacity="0.52" />
            <stop offset="55%" stopColor="#f3be7a" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#19442b" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="river-grad-sm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#113120" />
            <stop offset="100%" stopColor="#0d2317" />
          </linearGradient>
        </defs>

        <rect width="460" height="190" fill="url(#sky-grad-sm)" />
        <rect
          width="460"
          height="190"
          fill="url(#sun-halo-sm)"
          className="animate-sun-breathe origin-[360px_110px]"
        />

        <circle cx="364" cy="112" r="22" fill="#ffd796" opacity="0.92" />

        <path
          d="M 0 116 L 44 82 L 96 105 L 154 70 L 218 98 L 284 62 L 352 94 L 414 68 L 460 88 L 460 150 L 0 150 Z"
          fill="#1b4d31"
          opacity="0.72"
        />

        <path
          d="M 0 132 L 58 102 L 122 122 L 196 86 L 266 116 L 334 90 L 402 114 L 460 98 L 460 152 L 0 152 Z"
          fill="#153c26"
        />

        <path
          d="M 0 138 Q 92 118 186 132 T 370 128 Q 416 126 460 134 L 460 154 L 0 154 Z"
          fill="#103220"
        />

        {MOBILE_BIRDS.map((bird) => (
          <FlyingBird key={bird.id} {...bird} />
        ))}

        <rect y="148" width="460" height="44" fill="url(#river-grad-sm)" />

        <g opacity="0.55">
          <rect x="342" y="156" width="44" height="2" rx="1" fill="#e5bf82" className="animate-sun-breathe" />
          <rect x="349" y="164" width="30" height="1.8" rx="1" fill="#e5bf82" opacity="0.8" />
          <rect x="355" y="172" width="18" height="1.5" rx="1" fill="#e5bf82" opacity="0.65" />
          <rect x="360" y="180" width="8" height="1.4" rx="0.7" fill="#e5bf82" opacity="0.5" />
        </g>

        <g className="animate-river-drift" stroke="rgba(164, 206, 174, 0.16)" strokeWidth="1.2" fill="none">
          <path d="M -20 158 Q 60 152 140 158 T 300 158 T 480 158" />
          <path d="M -30 176 Q 75 170 180 176 T 360 176 T 490 176" />
        </g>
        <g className="animate-river-drift-reverse" stroke="rgba(164, 206, 174, 0.12)" strokeWidth="1" fill="none">
          <path d="M -25 167 Q 80 162 185 167 T 385 167 T 500 167" />
        </g>

        <MeditatorSilhouette transform="translate(94, 108) scale(0.78)" />
      </svg>

      <svg
        viewBox="0 0 1440 230"
        preserveAspectRatio="xMidYMax slice"
        className="hidden h-[200px] w-full sm:block lg:h-[235px]"
      >
        <defs>
          <linearGradient id="sky-grad-lg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#133321" />
            <stop offset="68%" stopColor="#19442b" />
            <stop offset="100%" stopColor="#143522" />
          </linearGradient>
          <radialGradient id="sun-halo-lg" cx="0.78" cy="0.58" r="0.28">
            <stop offset="0%" stopColor="#ffe1a6" stopOpacity="0.5" />
            <stop offset="55%" stopColor="#f3be7a" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#19442b" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="river-grad-lg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#113120" />
            <stop offset="100%" stopColor="#0d2317" />
          </linearGradient>
        </defs>

        <rect width="1440" height="230" fill="url(#sky-grad-lg)" />
        <rect
          width="1440"
          height="230"
          fill="url(#sun-halo-lg)"
          className="animate-sun-breathe origin-[1125px_134px]"
        />

        <circle cx="1125" cy="136" r="31" fill="#ffd796" opacity="0.92" />

        <path
          d="M 0 140 L 110 86 L 235 128 L 365 68 L 510 118 L 650 56 L 800 110 L 945 72 L 1090 116 L 1245 64 L 1370 108 L 1440 86 L 1440 182 L 0 182 Z"
          fill="#1b4d31"
          opacity="0.72"
        />

        <path
          d="M 0 156 L 145 108 L 300 144 L 460 92 L 620 138 L 785 88 L 950 134 L 1110 96 L 1280 136 L 1440 104 L 1440 182 L 0 182 Z"
          fill="#153c26"
        />

        <path
          d="M 0 164 Q 240 138 480 158 T 960 152 Q 1200 144 1440 158 L 1440 184 L 0 184 Z"
          fill="#103220"
        />

        {DESKTOP_BIRDS.map((bird) => (
          <FlyingBird key={bird.id} {...bird} />
        ))}

        <rect y="176" width="1440" height="54" fill="url(#river-grad-lg)" />

        <g opacity="0.58">
          <rect x="1096" y="186" width="58" height="2.4" rx="1.2" fill="#e5bf82" className="animate-sun-breathe" />
          <rect x="1105" y="195" width="40" height="2" rx="1" fill="#e5bf82" opacity="0.82" />
          <rect x="1113" y="204" width="24" height="1.7" rx="0.85" fill="#e5bf82" opacity="0.65" />
          <rect x="1119" y="213" width="12" height="1.5" rx="0.75" fill="#e5bf82" opacity="0.48" />
        </g>

        <g className="animate-river-drift" stroke="rgba(164, 206, 174, 0.16)" strokeWidth="1.25" fill="none">
          <path d="M -40 189 Q 120 182 280 189 T 600 189 T 920 189 T 1240 189 T 1520 189" />
          <path d="M -40 212 Q 140 205 320 212 T 680 212 T 1040 212 T 1400 212 T 1560 212" />
        </g>
        <g className="animate-river-drift-reverse" stroke="rgba(164, 206, 174, 0.12)" strokeWidth="1.1" fill="none">
          <path d="M -40 201 Q 150 194 340 201 T 720 201 T 1100 201 T 1520 201" />
        </g>

        <MeditatorSilhouette transform="translate(290, 123) scale(1)" />
      </svg>
    </div>
  );
}
