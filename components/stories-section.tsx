'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck, Star } from 'lucide-react';
import { Reveal } from './reveal';

const asset = 'https://www.riteshyogaa.com';
const cdn = 'https://cdn.riteshyogaa.com';

const testimonials = [
  {
    name: 'Brandi Jones',
    date: 'April 1, 2023',
    image: `${cdn}/testimonials/dev.webp`,
    quote: 'Ritesh is an exceptional yoga teacher whose calm guidance makes every class enjoyable.',
    body: 'It was my first time doing yoga and he eased me into each pose with clear and vibrant directions. He is a wonderful instructor.',
  },
  {
    name: 'Ratiba',
    date: 'March 22, 2023',
    image: `${cdn}/testimonials/anjali.webp`,
    quote: 'Great session today, Ritesh. Even the simplest movements can be a challenge.',
    body: 'Ritesh has a unique way of making every yoga session feel personal, encouraging, and deeply rewarding.',
  },
  {
    name: 'Emma JK',
    date: 'May 14, 2023',
    image: `${cdn}/testimonials/1.webp`,
    quote: 'Ritesh creates an environment where you feel supported, motivated, and excited to return.',
    body: 'Every session feels welcoming and clear, with the right amount of challenge for where I am that day.',
  },
  {
    name: 'Michael Chang',
    date: 'June 10, 2023',
    image: `${cdn}/testimonials/2.webp`,
    quote: 'A truly life-changing experience for my chronic back pain and posture.',
    body: 'After just 3 weeks of guided practice, my lower back pain diminished significantly. His attentive posture adjustments made all the difference.',
  },
  {
    name: 'Sophie Laurent',
    date: 'July 2, 2023',
    image: `${cdn}/testimonials/5.webp`,
    quote: 'The online sessions feel just like having an instructor right next to you.',
    body: 'The personal feedback on Zoom is incredible. I never felt lost or pressured—just supported and calm throughout the whole session.',
  },
];

function getTrackMetrics(track: HTMLDivElement) {
  const firstCard = track.children[0] as HTMLElement | undefined;
  const secondCard = track.children[1] as HTMLElement | undefined;
  const step = secondCard && firstCard ? secondCard.offsetLeft - firstCard.offsetLeft : track.clientWidth;
  const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
  const stops = step > 0 ? Math.max(1, Math.round(maxScroll / step) + 1) : testimonials.length;
  return { step, maxScroll, stops };
}

/** Testimonials section with Google rating pill, mandala backdrop, and smooth auto-scrolling cards. */
export function StoriesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [stopCount, setStopCount] = useState(testimonials.length);
  const [paused, setPaused] = useState(false);

  const scrollToStop = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const { step, maxScroll } = getTrackMetrics(track);
    const targetLeft = Math.min(index * step, maxScroll);
    track.scrollTo({ left: targetLeft, behavior: 'smooth' });
    setActiveIndex(index);
  };

  const stepSlide = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const { step, maxScroll, stops } = getTrackMetrics(track);

    if (direction === 1) {
      const next = track.scrollLeft >= maxScroll - 8 ? 0 : Math.min(track.scrollLeft + step, maxScroll);
      track.scrollTo({ left: next, behavior: 'smooth' });
      return;
    }

    const prev = track.scrollLeft <= 8 ? maxScroll : Math.max(track.scrollLeft - step, 0);
    track.scrollTo({ left: prev, behavior: 'smooth' });
    setStopCount(stops);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateStops = () => setStopCount(getTrackMetrics(track).stops);
    updateStops();

    const observer = new ResizeObserver(updateStops);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const { step, maxScroll } = getTrackMetrics(track);
      const next = track.scrollLeft >= maxScroll - 8 ? 0 : Math.min(track.scrollLeft + step, maxScroll);
      track.scrollTo({ left: next, behavior: 'smooth' });
    }, 4200);

    return () => window.clearInterval(timer);
  }, [paused]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const { step, maxScroll, stops } = getTrackMetrics(track);
    if (maxScroll <= 0) return;

    const index = Math.min(stops - 1, Math.max(0, Math.round(track.scrollLeft / step)));
    setActiveIndex(index);
  };

  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-cream px-3 py-9 sm:px-8 sm:py-14 lg:px-0 lg:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-10 hidden aspect-square w-44 select-none opacity-65 sm:block md:right-4 md:top-3 md:w-44 lg:right-8 lg:top-4 lg:w-52 2xl:right-14 2xl:w-60"
      >
        <img
          src={`${asset}/marketing/icons/flower.webp`}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1920px] lg:w-[92%] 2xl:w-[88%]">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-[-0.035em] text-ink sm:text-4xl lg:text-[46px]">
            Real Stories. Deep Transformation.
          </h2>

          <div className="mt-5 inline-flex flex-col items-center gap-2 rounded-2xl border border-sage/20 bg-white px-4 py-2.5 shadow-[0_10px_28px_rgba(56,75,61,0.06)] sm:flex-row sm:gap-3.5 sm:rounded-full sm:px-5">
            <div className="flex items-center gap-3">
              <img
                src={`${asset}/marketing/icons/google.svg`}
                alt="Google"
                className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"
              />
              <span className="font-display text-lg font-extrabold leading-none text-ink sm:text-2xl">
                4.9/5
              </span>
              <span className="h-6 w-px bg-sage/25 sm:h-8" />
              <div className="flex items-center gap-0.5" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    size={15}
                    className="fill-[#FFA500] text-[#FFA500]"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-1.5 leading-tight sm:flex-col sm:items-start sm:gap-0 sm:text-left">
              <p className="text-xs font-bold text-forest sm:text-[13px]">Google Rating</p>
              <span className="text-xs text-ink/40 sm:hidden">•</span>
              <p className="text-[11px] text-ink/55 sm:text-xs">Based on 100+ reviews</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative mt-8">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className="relative"
          >
            <div
              ref={trackRef}
              onScroll={handleScroll}
              role="region"
              aria-roledescription="carousel"
              aria-label="Student reviews"
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  role="group"
                  aria-roledescription="slide"
                  className="w-full shrink-0 snap-start md:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.34px)]"
                >
                  <article className="flex h-full flex-col rounded-xl border border-sage/15 bg-white p-5 shadow-[0_12px_35px_rgba(56,75,61,0.05)] sm:rounded-2xl sm:p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-11 w-11 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-bold">{testimonial.name}</p>
                          <p className="mt-1 text-[11px] text-ink/45">{testimonial.date}</p>
                        </div>
                      </div>
                      <span className="text-[11px] tracking-[0.15em] text-coral">★★★★★</span>
                    </div>
                    <p className="mt-7 font-display text-xl font-semibold leading-7 tracking-[-0.03em]">
                      “{testimonial.quote}”
                    </p>
                    <p className="mt-4 text-sm leading-6 text-ink/58">{testimonial.body}</p>
                    <div className="mt-auto flex items-center gap-2 pt-7 text-[10px] font-bold uppercase tracking-[0.14em] text-sage">
                      <ShieldCheck size={14} /> Verified student
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => stepSlide(-1)}
                aria-label="Previous review"
                className="hidden h-8 w-8 items-center justify-center rounded-full border border-sage/20 bg-white text-forest transition hover:border-sage hover:bg-sage hover:text-white sm:inline-flex"
              >
                <ChevronLeft size={15} />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: stopCount }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => scrollToStop(index)}
                    aria-label={`View slide ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? 'w-7 bg-sage' : 'w-1.5 bg-sage/30 hover:bg-sage/55'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => stepSlide(1)}
                aria-label="Next review"
                className="hidden h-8 w-8 items-center justify-center rounded-full border border-sage/20 bg-white text-forest transition hover:border-sage hover:bg-sage hover:text-white sm:inline-flex"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
