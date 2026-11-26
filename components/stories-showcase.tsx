'use client';

import { useState } from 'react';
import { CheckCircle2, Globe2, Quote, ShieldCheck, Star } from 'lucide-react';

type StoryCategory = 'All' | '1-on-1 Coaching' | 'Live Group Yoga' | 'Retreats & Training';

export type ReviewCardItem = {
  name: string;
  location: string;
  role: string;
  category: Exclude<StoryCategory, 'All'>;
  program: string;
  image: string;
  quote: string;
  timeframe: string;
};

const CATEGORIES: StoryCategory[] = [
  'All',
  '1-on-1 Coaching',
  'Live Group Yoga',
  'Retreats & Training',
];

const REVIEWS: ReviewCardItem[] = [
  {
    name: 'Michael Chang',
    location: 'Toronto, Canada',
    role: 'Product Architect',
    category: '1-on-1 Coaching',
    program: 'Back Pain & Posture Recovery',
    image: 'https://cdn.riteshyogaa.com/testimonials/2.webp',
    quote:
      'After three weeks of live alignment feedback, long-standing lower back tension from desk hours began fading safely without painful forcing.',
    timeframe: '3 weeks in',
  },
  {
    name: 'Sophie Laurent',
    location: 'Paris, France',
    role: 'Creative Director',
    category: '1-on-1 Coaching',
    program: 'Private Zoom Practice',
    image: 'https://cdn.riteshyogaa.com/testimonials/5.webp',
    quote:
      'Studying over Zoom feels like having a deeply observant teacher right across the mat — gentle verbal cues arrive at the exact second I need them.',
    timeframe: '6 months member',
  },
  {
    name: 'Brandi Jones',
    location: 'Austin, USA',
    role: 'Healthcare Consultant',
    category: 'Live Group Yoga',
    program: 'Beginner Yoga Journey',
    image: 'https://cdn.riteshyogaa.com/testimonials/dev.webp',
    quote:
      'It was my first time trying yoga and I worried about flexibility. Ritesh eased me into every posture with calm, clear directions.',
    timeframe: '4 months member',
  },
  {
    name: 'Emma JK',
    location: 'London, UK',
    role: 'Financial Analyst',
    category: 'Live Group Yoga',
    program: 'Morning Energy & Flexibility',
    image: 'https://cdn.riteshyogaa.com/testimonials/1.webp',
    quote:
      'Waking up for London morning sessions completely transformed my workday focus. I finish every class grounded rather than exhausted.',
    timeframe: '1+ year member',
  },
  {
    name: 'Ratiba',
    location: 'Dubai, UAE',
    role: 'Wellness Founder',
    category: 'Retreats & Training',
    program: 'Samsaara Immersion · Rishikesh',
    image: 'https://cdn.riteshyogaa.com/testimonials/anjali.webp',
    quote:
      'Even the simplest movements teach presence when guided this thoughtfully. Walking above the Ganga after pranayama was unforgettable.',
    timeframe: '7-day retreat',
  },
  {
    name: 'Lucas Weber',
    location: 'Berlin, Germany',
    role: 'Software Lead',
    category: 'Retreats & Training',
    program: '200-Hr Foundation Study',
    image: 'https://cdn.riteshyogaa.com/testimonials/2.webp',
    quote:
      'The balance between authentic Rishikesh philosophy, functional anatomy, and English clarity gave me lifelong confidence on the mat.',
    timeframe: 'Rishikesh cohort',
  },
  {
    name: 'Priya Nair',
    location: 'Singapore',
    role: 'Design Researcher',
    category: 'Live Group Yoga',
    program: 'Hatha & Breathwork',
    image: 'https://cdn.riteshyogaa.com/testimonials/anjali.webp',
    quote:
      'Seven-day replay recordings keep me consistent even during heavy travel weeks across Asia-Pacific timezones.',
    timeframe: '8 months member',
  },
  {
    name: 'Claire Bennett',
    location: 'Sydney, Australia',
    role: 'Clinical Psychologist',
    category: '1-on-1 Coaching',
    program: 'Nervous System Restoration',
    image: 'https://cdn.riteshyogaa.com/testimonials/1.webp',
    quote:
      'Gentle breath pacing paired with Yoga Nidra gave me reliable tools for deep sleep without rushing or athletic strain.',
    timeframe: '5 months member',
  },
  {
    name: 'Arjun Mehta',
    location: 'New York, USA',
    role: 'Founder',
    category: 'Retreats & Training',
    program: 'Tapovan Nature Reset',
    image: 'https://cdn.riteshyogaa.com/testimonials/5.webp',
    quote:
      'Airport pickup, serene hillside cottages, and nourishment that calmed my digestion — every practical detail was handled gracefully.',
    timeframe: 'Autumn retreat',
  },
];

/** Filterable global student reviews grid with less-curved mobile-optimized cards. */
export function StoriesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<StoryCategory>('All');

  const visibleReviews =
    selectedCategory === 'All'
      ? REVIEWS
      : REVIEWS.filter((review) => review.category === selectedCategory);

  return (
    <div>
      <div className="mb-6 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mb-8 sm:flex-wrap sm:justify-center">
        {CATEGORIES.map((category) => {
          const active = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              aria-pressed={active}
              className={`shrink-0 rounded-lg border px-3.5 py-2 text-xs font-bold transition duration-200 sm:px-4 sm:py-2.5 ${
                active
                  ? 'border-forest bg-forest text-white shadow-xs'
                  : 'border-sage/20 bg-white text-ink/75 hover:border-sage hover:text-forest'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleReviews.map((story) => (
          <article
            key={story.name}
            className="animate-fade-up flex h-full flex-col rounded-lg border border-sage/15 bg-white p-3.5 shadow-[0_10px_28px_rgba(56,75,61,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-sage/35 sm:rounded-xl sm:p-5"
          >
            <div className="flex items-start justify-between gap-2.5">
              <div className="flex min-w-0 items-center gap-3">
                <img
                  src={story.image}
                  alt={story.name}
                  className="h-10 w-10 shrink-0 rounded-lg object-cover sm:h-11 sm:w-11"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-ink">{story.name}</p>
                  <p className="mt-0.5 flex items-center gap-1 truncate text-[11px] text-ink/55">
                    <Globe2 size={11} className="shrink-0 text-sage" />
                    <span className="truncate">
                      {story.location} · {story.role}
                    </span>
                  </p>
                </div>
              </div>
              <Quote className="shrink-0 text-sage/40" size={18} />
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex rounded-md bg-sage-pale px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.11em] text-forest">
                {story.program}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-sage">
                <CheckCircle2 size={12} />
                {story.timeframe}
              </span>
            </div>

            <p className="mt-3.5 flex-1 text-sm leading-6 text-ink/80 sm:mt-4 sm:text-[15px]">
              “{story.quote}”
            </p>

            <div className="mt-4 flex items-center justify-between border-t border-sage/12 pt-3">
              <div
                className="flex items-center gap-0.5 text-[#FFA500]"
                role="img"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }, (_, star) => (
                  <Star key={star} size={12} fill="currentColor" />
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.14em] text-sage">
                <ShieldCheck size={13} />
                Verified Review
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

