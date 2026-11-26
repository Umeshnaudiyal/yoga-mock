import type { Metadata } from 'next';
import { Award, CheckCircle2, Globe2, HeartHandshake, Sparkles, Star, Users } from 'lucide-react';
import { ActionLink } from '../../components/action-link';
import { PageHero } from '../../components/page-hero';
import { Reveal } from '../../components/reveal';
import { SectionHeading } from '../../components/section-heading';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { StoriesShowcase } from '../../components/stories-showcase';

const asset = 'https://www.riteshyogaa.com';

export const metadata: Metadata = {
  title: 'Student Stories & Verified Outcomes | Ritesh Yoga',
  description:
    'Read verified 4.9/5 reviews, pain-relief case studies, and global retreat stories from Ritesh Yoga students across 50+ countries.',
};

const trustMetrics = [
  ['4.9 / 5', 'Google Review Score', Star],
  ['100+', 'Verified Global Reviews', Award],
  ['50+', 'Countries Represented', Globe2],
  ['98%', 'Stay Consistent Past 60 Days', Users],
] as const;

const caseStudies = [
  {
    name: 'Michael Chang',
    location: 'Toronto, Canada',
    track: '1-on-1 Alignment Track',
    before: 'Chronic lumbar stiffness after 9-hour engineering desk days',
    shift: 'Targeted hip-flexor decompression, breath pacing & 3 weekly check-ins',
    outcome: 'Noticeably less lower-back pain in 3 weeks and pain-free mornings',
    image: 'https://cdn.riteshyogaa.com/testimonials/2.webp',
  },
  {
    name: 'Sophie Laurent',
    location: 'Paris, France',
    track: 'Private Zoom Coaching',
    before: 'Burnout, shallow breathing & intimidating studio class pace',
    shift: 'Calm 45-minute French evening sessions with real-time visual cues',
    outcome: 'Deeper evening recovery and sustained 6-month consistency',
    image: 'https://cdn.riteshyogaa.com/testimonials/5.webp',
  },
  {
    name: 'Brandi Jones',
    location: 'Austin, USA',
    track: 'Beginner Foundation',
    before: 'Complete beginner hesitant to join fast athletic classes',
    shift: 'Gentle progressive postures with household pillows and zero pressure',
    outcome: 'Built flexible morning routine and confident posture awareness',
    image: 'https://cdn.riteshyogaa.com/testimonials/dev.webp',
  },
] as const;

export default function StoriesPage() {
  return (
    <main className="overflow-x-clip bg-cream text-ink">
      <SiteHeader />

      <PageHero
        compact
        eyebrow="Student stories & outcomes"
        title="Small shifts. Deep transformation."
        description="Real practitioners across North America, Europe, UAE & Asia-Pacific sharing how breath-led movement changed how they feel each day."
        image={`${asset}/marketing/review.webp`}
        label="Explore student outcomes"
      />

      <section className="border-b border-sage/12 bg-white px-2.5 py-5 sm:px-8 sm:py-8 lg:px-0">
        <div className="mx-auto grid w-full max-w-[1920px] grid-cols-2 gap-2.5 sm:gap-4 lg:w-[92%] lg:grid-cols-4 lg:gap-5 2xl:w-[88%]">
          {trustMetrics.map(([value, label, Icon]) => (
            <div
              key={label}
              className="flex items-center gap-2.5 rounded-lg border border-sage/15 bg-cream/65 p-3 sm:gap-3.5 sm:rounded-xl sm:p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forest text-sand sm:h-10 sm:w-10">
                <Icon size={16} />
              </span>
              <div className="min-w-0">
                <p className="font-display text-base font-extrabold text-ink sm:text-xl">
                  {value}
                </p>
                <p className="truncate text-[11px] font-medium text-ink/60 sm:text-xs">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-2.5 py-8 sm:px-8 sm:py-16 lg:px-0 lg:py-22">
        <div className="mx-auto w-full max-w-[1920px] lg:w-[92%] 2xl:w-[88%]">
          <Reveal>
            <div className="mb-8 flex flex-col justify-between gap-4 rounded-lg border border-sage/20 bg-white p-4 shadow-[0_12px_34px_rgba(56,75,61,0.06)] sm:mb-12 sm:rounded-xl sm:p-6 lg:flex-row lg:items-center lg:p-8">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <img
                  src={`${asset}/marketing/icons/google.svg`}
                  alt="Google"
                  className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11"
                />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sage">
                    Verified Google Rating
                  </p>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                      4.9 / 5
                    </span>
                    <div
                      className="flex items-center gap-0.5 text-[#FFA500]"
                      role="img"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star key={index} size={15} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <p className="max-w-sm text-xs leading-5 text-ink/62 sm:text-sm">
                  Consistent 5-star reviews from online beginners, 1-on-1 clients, and Rishikesh
                  retreat guests.
                </p>
                <ActionLink href="/contact" size="sm">
                  Book free intro
                </ActionLink>
              </div>
            </div>
          </Reveal>

          <div className="mb-10 sm:mb-14">
            <SectionHeading
              align="left"
              eyebrow="Transformation breakdowns"
              title="Real challenges, measurable relief."
              description="See how individual pacing adapts to back stiffness, burnout, and beginner hesitation."
            />

            <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-5 lg:grid-cols-3">
              {caseStudies.map((study, index) => (
                <Reveal key={study.name} delay={index * 80}>
                  <article className="flex h-full flex-col rounded-lg border border-sage/18 bg-sage-pale/65 p-3.5 sm:rounded-xl sm:p-5">
                    <div className="flex items-center gap-3 border-b border-sage/15 pb-3.5">
                      <img
                        src={study.image}
                        alt={study.name}
                        className="h-11 w-11 shrink-0 rounded-lg object-cover"
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-extrabold text-ink">{study.name}</p>
                        <p className="text-[11px] font-semibold text-sage">
                          {study.location} · {study.track}
                        </p>
                      </div>
                    </div>

                    <dl className="mt-3.5 space-y-2.5 text-xs">
                      <div className="rounded-lg bg-white/80 p-2.5 sm:p-3">
                        <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink/45">
                          Starting point
                        </dt>
                        <dd className="mt-0.5 leading-5 text-ink/75">{study.before}</dd>
                      </div>
                      <div className="rounded-lg bg-white/80 p-2.5 sm:p-3">
                        <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-sage">
                          What changed
                        </dt>
                        <dd className="mt-0.5 leading-5 text-ink/80">{study.shift}</dd>
                      </div>
                      <div className="rounded-lg border border-sage/20 bg-white p-2.5 sm:p-3">
                        <dt className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.14em] text-forest">
                          <CheckCircle2 size={12} className="text-sage" />
                          Outcome
                        </dt>
                        <dd className="mt-0.5 font-semibold leading-5 text-ink">
                          {study.outcome}
                        </dd>
                      </div>
                    </dl>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="border-t border-sage/15 pt-8 sm:pt-12">
            <div className="mb-6 text-center sm:mb-8">
              <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-sage">
                <HeartHandshake size={13} />
                Filter by program
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
                Community reviews around the world
              </h2>
            </div>

            <StoriesShowcase />
          </div>
        </div>
      </section>

      <section className="bg-forest px-2.5 py-10 text-white sm:px-8 sm:py-18 lg:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-sand">
            <Sparkles size={13} />
            Start your own story
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight tracking-[-0.035em] sm:mt-4 sm:text-4xl lg:text-5xl">
            Feel the difference in your very first session.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:mt-4 sm:text-[15px] sm:leading-7">
            Tell us about your stiffness, schedule, or experience level and get matched with the
            right class or 1-on-1 teacher.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <ActionLink href="/contact" light>
              Book your free session
            </ActionLink>
            <ActionLink href="/#experience">Watch practice preview</ActionLink>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
