import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

/** Generates the rounded iOS/Android touch icon matching the Ritesh Yoga favicon crest. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 40,
          background: 'linear-gradient(135deg, #19382a 0%, #235c3d 100%)',
        }}
      >
        <svg viewBox="0 0 64 64" width="128" height="128">
          <circle cx="32" cy="18.5" r="4.6" fill="#e2c89f" />
          <path
            d="M 32 25 C 36.6 29 39.2 34 38 39.5 C 34.8 41.2 29.2 41.2 26 39.5 C 24.8 34 27.4 29 32 25 Z"
            fill="#ffffff"
          />
          <path
            d="M 26.2 29.5 C 19.2 30.8 14.5 36.2 16.8 41.2 C 19.6 43.8 25.2 43 28.4 41.2"
            fill="none"
            stroke="#8ed39f"
            strokeWidth="3.8"
            strokeLinecap="round"
          />
          <path
            d="M 37.8 29.5 C 44.8 30.8 49.5 36.2 47.2 41.2 C 44.4 43.8 38.8 43 35.6 41.2"
            fill="none"
            stroke="#8ed39f"
            strokeWidth="3.8"
            strokeLinecap="round"
          />
          <path
            d="M 18.2 46.8 C 23.6 51 40.4 51 45.8 46.8"
            fill="none"
            stroke="#e2c89f"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}

