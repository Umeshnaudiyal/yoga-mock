'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { Reveal } from './reveal';

const YOUTUBE_VIDEO_ID = 'LqXZ628YNj4';
const YOUTUBE_EMBED_SRC = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&enablejsapi=1`;

/** Auto-playing YouTube practice preview framed in a studio showcase card with mute controls. */
export function ExperienceSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const frameWindow = iframeRef.current?.contentWindow;
    if (!frameWindow) return;

    const nextMuted = !isMuted;
    frameWindow.postMessage(
      JSON.stringify({
        event: 'command',
        func: nextMuted ? 'mute' : 'unMute',
        args: [],
      }),
      '*'
    );
    setIsMuted(nextMuted);
  };

  return (
    <section id="experience" className="scroll-mt-24 bg-cream px-3 pb-10 pt-2 sm:scroll-mt-28 sm:px-8 sm:pb-16 lg:px-0 lg:pb-20">
      <div className="mx-auto w-full max-w-[1920px] lg:w-[92%] 2xl:w-[88%]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sage/20 bg-white/80 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-sage shadow-xs">
            <Sparkles size={13} />
            The experience
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.035em] text-ink sm:text-4xl lg:text-[46px]">
            Feel the transformation. <span className="text-sage">Live the experience.</span>
          </h2>
          <p className="mt-3 text-[15px] leading-6 text-ink/65 sm:mt-4 sm:text-base sm:leading-7">
            A calm, supportive space to build strength, ease tension, and reconnect with your breath — wherever you are.
          </p>
        </Reveal>

        <Reveal delay={100} className="relative mx-auto mt-7 max-w-[1180px] sm:mt-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-2 hidden rounded-2xl border border-sage/15 bg-white/40 sm:-inset-4 sm:block sm:rounded-[28px]"
          />
          <div className="relative overflow-hidden rounded-xl border border-sage/20 bg-white shadow-[0_24px_70px_rgba(35,59,48,0.14)] sm:rounded-2xl">
            <div className="relative aspect-video w-full bg-forest">
              <iframe
                ref={iframeRef}
                src={YOUTUBE_EMBED_SRC}
                title="Guided yoga practice preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-sage/15 bg-white px-4 py-3.5 sm:px-6 sm:py-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-coral" />
                </span>
                <div>
                  <p className="text-xs font-bold text-ink sm:text-sm">
                    Guided Morning Yoga Flow
                  </p>
                  <p className="text-[11px] text-ink/55">
                    Breath-led movement &amp; mindful alignment preview
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="inline-flex items-center gap-2 rounded-full border border-sage/25 bg-sage-pale px-3.5 py-2 text-xs font-bold text-forest transition hover:border-sage hover:bg-sage hover:text-white"
                >
                  {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  <span>{isMuted ? 'Unmute sound' : 'Mute sound'}</span>
                </button>
                <Link
                  href="/classes"
                  className="hidden items-center gap-1.5 rounded-full bg-forest px-4 py-2 text-xs font-bold text-white transition hover:bg-sage sm:inline-flex"
                >
                  <span>Join live</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

