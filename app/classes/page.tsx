import type { Metadata } from 'next';
import {
  ArrowDown,
  Clock3,
  Globe2,
  Home,
  Repeat,
  ShieldCheck,
  Video,
} from 'lucide-react';
import { ActionLink } from '../../components/action-link';
import { ClassCard } from '../../components/class-card';
import { PageHero } from '../../components/page-hero';
import { Reveal } from '../../components/reveal';
import { SectionHeading } from '../../components/section-heading';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { classItems } from '../../lib/site-data';

const groups = ['Pilates', 'Yoga', 'Private & duet'] as const;

export const metadata: Metadata = {
  title: 'Live Online Yoga & Pilates Classes | Ritesh Yoga',
  description:
    'Live interactive yoga, Hatha, Vinyasa, Ashtanga, Iyengar, and Pilates sessions taught in English across UK, EU, US, UAE & APAC timezones.',
};

const timezoneWindows = [
  ['London / Europe', 'UK & CET Friendly', 'Morning & evening live rooms · 06:30–19:30 GMT'],
  ['New York / Toronto', 'Americas EST', 'Early morning & after-work live slots'],
  ['Dubai / Gulf', 'UAE GST', 'Sunrise, lunchtime & sunset restorative flows'],
  ['Singapore / Sydney', 'APAC AEST', 'Evening wind-down & weekend immersions'],
] as const;

const globalPerks = [
  [
    'Real-Time Posture Feedback',
    'Small live groups ensure your teacher actually watches your alignment and offers safe modifications.',
    Video,
  ],
  [
    'Zero Studio Gear Needed',
    'Practice from any hotel room or living room using simple household cushions, a towel, or wall space.',
    Home,
  ],
  [
    '7-Day Replay Library',
    'Busy travel day or missed a session? Catch up on your schedule with full session recordings included.',
    Repeat,
  ],
] as const;

export default function ClassesPage() {
  return (
    <main className="overflow-x-clip bg-cream text-ink">
      <SiteHeader />

      <PageHero
        compact
        eyebrow="Find your practice"
        title="Space to move. Time to arrive."
        description="Live Pilates and traditional Indian yoga taught in clear English — built seamlessly around international timezones and real life."
        image="https://dhyanadubai.com/assets/video/hero-poster.jpg"
        label="Explore all classes"
      />

      <section className="sticky top-[58px] z-30 border-b border-sage/15 bg-cream/92 px-3 py-3 backdrop-blur-xl sm:top-[64px] sm:px-8 sm:py-4 lg:px-0">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:w-[92%] 2xl:w-[88%]">
          <span className="hidden shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-sage sm:block">
            Browse by discipline
          </span>
          <nav className="flex gap-2">
            {groups.map((group) => (
              <a
                key={group}
                href={`#${group.toLowerCase().replace(/ /g, '-')}`}
                className="shrink-0 rounded-lg border border-sage/25 bg-white/80 px-3.5 py-2 text-xs font-semibold text-ink/75 transition hover:border-sage hover:bg-sage hover:text-white sm:rounded-full sm:px-4"
              >
                {group}
              </a>
            ))}
          </nav>
          <span className="hidden shrink-0 items-center gap-1.5 text-[11px] font-bold text-forest md:inline-flex">
            <ShieldCheck size={14} className="text-sage" />
            All classes include 7-day replay
          </span>
        </div>
      </section>

      <section className="border-b border-sage/12 bg-sage-pale/70 px-3 py-8 sm:px-8 sm:py-12 lg:px-0">
        <div className="mx-auto w-full max-w-[1920px] space-y-5 lg:w-[92%] 2xl:w-[88%]">
          <Reveal>
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-sage sm:text-[11px]">
                  <Globe2 size={13} />
                  Practice from anywhere
                </p>
                <h2 className="mt-1.5 font-display text-2xl font-bold tracking-[-0.03em] text-ink sm:text-3xl">
                  Built for international schedules
                </h2>
              </div>
              <p className="max-w-md text-xs leading-5 text-ink/62 sm:text-sm">
                60+ live weekly classes run across multiple windows so you can join before work, during
                lunch, or before bed in your local timezone.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
            {timezoneWindows.map(([region, zone, detail], index) => (
              <Reveal key={region} delay={index * 60}>
                <div className="h-full rounded-xl border border-sage/15 bg-white p-3.5 shadow-[0_6px_18px_rgba(56,75,61,0.04)] sm:rounded-2xl sm:p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-sage">
                    {zone}
                  </p>
                  <p className="mt-1 text-xs font-extrabold text-ink sm:text-sm">{region}</p>
                  <p className="mt-1 text-[11px] leading-snug text-ink/58">{detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-3 md:gap-4">
            {globalPerks.map(([title, body, Icon], index) => (
              <Reveal key={title} delay={index * 70}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-sage/15 bg-white/85 p-3.5 sm:rounded-2xl sm:p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest text-sand">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-ink sm:text-sm">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-ink/60">{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 py-10 sm:px-8 sm:py-18 lg:px-0 lg:py-24">
        <div className="mx-auto w-full max-w-[1920px] lg:w-[92%] 2xl:w-[88%]">
          <Reveal>
            <div className="mb-10 grid gap-5 sm:mb-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <SectionHeading
                align="left"
                eyebrow="A considered menu"
                title="Choose what your body needs today."
              />
              <div className="flex items-start gap-3.5 rounded-xl border border-sage/15 bg-white p-4 text-sm leading-6 text-ink/65 shadow-xs sm:gap-4 sm:rounded-2xl sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sage/12 text-sage sm:h-10 sm:w-10 sm:rounded-xl">
                  <Clock3 size={17} />
                </span>
                <p>
                  Start with a free intro session or ask for a personalized recommendation. Every
                  group practice is kept small and taught live with gentle modifications for injuries,
                  beginners, or busy travel schedules.
                </p>
              </div>
            </div>
          </Reveal>

          {groups.map((group) => (
            <div
              key={group}
              id={group.toLowerCase().replace(/ /g, '-')}
              className="scroll-mt-32 border-t border-sage/15 py-8 first:border-t-0 first:pt-0 sm:py-12"
            >
              <Reveal>
                <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
                  <div>
                    <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-sage">
                      {group === 'Private & duet' ? 'Personal attention' : group}
                    </p>
                    <h2 className="font-display text-2xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
                      {group}
                    </h2>
                  </div>
                  <ArrowDown size={18} className="hidden text-sage sm:block" />
                </div>
              </Reveal>

              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {classItems
                  .filter((item) => item.category === group)
                  .map((item, index) => (
                    <Reveal key={item.slug} delay={index * 60}>
                      <ClassCard item={item} />
                    </Reveal>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sage-pale px-3 py-10 sm:px-8 sm:py-18 lg:px-0 lg:py-24">
        <Reveal>
          <div className="mx-auto grid w-full max-w-[1920px] items-center gap-6 sm:gap-10 lg:w-[92%] lg:grid-cols-[1fr_0.85fr] 2xl:w-[88%]">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Not sure where to start?"
                title="We will help you find the right class."
                description="Tell us what you want more of — strength, back-pain relief, flexibility, better sleep, or calmer mornings."
              />
            </div>
            <div className="rounded-xl border border-sage/15 bg-white p-5 shadow-[0_12px_32px_rgba(56,75,61,0.06)] sm:rounded-2xl sm:p-7">
              <p className="text-sm leading-6 text-ink/65">
                First session ever, recovering from stiffness, or balancing frequent international
                travel? Share your timezone and goals and we&apos;ll match your exact starting point.
              </p>
              <div className="mt-5">
                <ActionLink href="/contact">Find your class</ActionLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
