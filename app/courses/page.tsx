import type { Metadata } from 'next';
import {
  ArrowRight,
  Award,
  Check,
  Clock3,
  Globe2,
  Home,
  Mountain,
  PlaneLanding,
  ShieldCheck,
  Sparkles,
  Users,
  Utensils,
} from 'lucide-react';
import { ActionLink } from '../../components/action-link';
import { CourseCard } from '../../components/course-card';
import { PageHero } from '../../components/page-hero';
import { Reveal } from '../../components/reveal';
import { SectionHeading } from '../../components/section-heading';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { courseItems } from '../../lib/site-data';

const asset = 'https://www.vinyasayogaashram.com';

export const metadata: Metadata = {
  title: 'Yoga Teacher Training Courses in Rishikesh | Ritesh Yoga',
  description:
    'Yoga Alliance USA certified 100, 200, 300, and 500-hour residential courses in Rishikesh with private rooms, sattvic meals, and airport pickup support.',
};

const internationalHighlights = [
  ['Yoga Alliance RYS', 'Globally recognized USA certification', Award],
  ['Private Stay & Meals', 'Ensuite garden rooms & 3 sattvic meals', Utensils],
  ['Arrival & Visa Support', 'Dehradun pickup & invitation letter', PlaneLanding],
  ['Max 14 Students', 'Intimate personal mentorship', Users],
] as const;

const includedFeatures = [
  'Private or twin serene ensuite mountain-view room',
  '3 fresh sattvic vegetarian / vegan meals & herbal chai daily',
  'Yoga Alliance USA (RYT) registration-eligible certificate',
  'Printed study manual, yoga mat & traditional cleansing kit',
  'Weekend Himalayan excursion: Ganga Aarti & waterfall trek',
  'Dehradun (DED) airport transfer & tourist visa invitation letter',
] as const;

const dailyRhythm = [
  ['06:00 AM', 'Pranayama, Shatkarma & Sunrise Meditation'],
  ['07:30 AM', 'Traditional Hatha / Vinyasa Alignment Lab'],
  ['09:30 AM', 'Sattvic Breakfast & Himalayan Garden Break'],
  ['11:00 AM', 'Functional Anatomy & Teaching Methodology'],
  ['03:30 PM', 'Yoga Philosophy & Mindful Sequencing'],
  ['05:00 PM', 'Ashtanga / Yin Practice & Evening Ganga Stillness'],
] as const;

const reasons = [
  [
    'Authentic foundations',
    'Study the living roots of yoga through classical philosophy, functional anatomy, meditation, and daily practice.',
    Globe2,
  ],
  [
    'All-inclusive sanctuary',
    'Focus completely on your transformation with nourishing meals, tranquil rooms, and supportive local hosts.',
    Sparkles,
  ],
  [
    'Confidence to teach worldwide',
    'Graduate with practical sequencing skills, trauma-aware cueing, and a lifelong global teaching community.',
    ShieldCheck,
  ],
] as const;

export default function CoursesPage() {
  return (
    <main className="overflow-x-clip bg-cream text-ink">
      <SiteHeader />

      <PageHero
        compact
        eyebrow="Teacher training & immersions"
        title="Study deeply. Teach with presence."
        description="Yoga Alliance certified courses in Rishikesh designed seamlessly for international travelers and committed practitioners."
        image={`${asset}/dev/wp-content/themes/vinyasa-yoga-ashram/images/new/build/assets/images/vinyasa-yoga-ashram-teacher-training-school.jpg?v=CuGXmtKs`}
        label="Explore the course path"
      />

      <section className="border-b border-sage/12 bg-white px-3 py-6 sm:px-8 sm:py-8 lg:px-0">
        <div className="mx-auto grid w-full max-w-[1920px] grid-cols-2 gap-3 lg:w-[92%] lg:grid-cols-4 lg:gap-5 2xl:w-[88%]">
          {internationalHighlights.map(([title, sub, Icon], index) => (
            <Reveal key={title} delay={index * 60}>
              <div className="flex h-full items-start gap-2.5 rounded-xl border border-sage/15 bg-cream/60 p-3 sm:items-center sm:gap-3.5 sm:p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest text-sand sm:h-10 sm:w-10">
                  <Icon size={17} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-extrabold text-ink sm:text-sm">{title}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-ink/60 sm:text-xs">{sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-3 py-10 sm:px-8 sm:py-18 lg:px-0 lg:py-24">
        <div className="mx-auto w-full max-w-[1920px] lg:w-[92%] 2xl:w-[88%]">
          <Reveal>
            <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
              <SectionHeading
                align="left"
                eyebrow="The course library"
                title="Find the depth that feels right."
                description="Clear USD tuition including stay and meals. From foundational 100-hour study to full 500-hour certification."
              />
              <a
                href="#rishikesh-experience"
                className="hidden shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-sage transition hover:text-forest sm:inline-flex"
              >
                <span>See what&apos;s included</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courseItems.map((course, index) => (
              <Reveal key={course.slug} delay={(index % 3) * 80}>
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="rishikesh-experience"
        className="bg-sage-pale px-3 py-10 sm:px-8 sm:py-18 lg:px-0 lg:py-24"
      >
        <div className="mx-auto w-full max-w-[1920px] lg:w-[92%] 2xl:w-[88%]">
          <Reveal>
            <SectionHeading
              eyebrow="Seamless travel to India"
              title="Everything arranged for your stay in Rishikesh"
              description="Arrive in India without stress. From airport pickup in Dehradun to warm herbal tea after sunset meditation, we handle the essentials."
            />
          </Reveal>

          <div className="mt-8 grid gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-8">
            <Reveal>
              <div className="h-full rounded-xl border border-sage/18 bg-white p-4 shadow-[0_12px_34px_rgba(56,75,61,0.06)] sm:rounded-2xl sm:p-7">
                <div className="flex items-center gap-2.5 border-b border-sage/12 pb-3.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sage-pale text-forest">
                    <Home size={18} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sage">
                      Zero hidden extras
                    </p>
                    <h3 className="font-display text-lg font-extrabold text-ink sm:text-xl">
                      Included in residential courses
                    </h3>
                  </div>
                </div>

                <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                  {includedFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-sage/15 text-forest">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span className="leading-snug sm:leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="h-full rounded-xl border border-sage/18 bg-white p-4 shadow-[0_12px_34px_rgba(56,75,61,0.06)] sm:rounded-2xl sm:p-7">
                <div className="flex items-center gap-2.5 border-b border-sage/12 pb-3.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest text-sand">
                    <Clock3 size={18} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sage">
                      Monday – Saturday
                    </p>
                    <h3 className="font-display text-lg font-extrabold text-ink sm:text-xl">
                      Sample daily ashram schedule
                    </h3>
                  </div>
                </div>

                <div className="mt-4 space-y-2 sm:mt-5">
                  {dailyRhythm.map(([time, activity]) => (
                    <div
                      key={time}
                      className="flex flex-col gap-0.5 rounded-lg bg-cream/65 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                    >
                      <span className="shrink-0 text-xs font-extrabold tabular-nums text-forest">
                        {time}
                      </span>
                      <span className="text-xs font-medium text-ink/75 sm:text-right sm:text-[13px]">
                        {activity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="why" className="bg-forest px-3 py-12 text-white sm:px-8 sm:py-20 lg:px-0 lg:py-24">
        <div className="mx-auto w-full max-w-[1920px] lg:w-[92%] 2xl:w-[88%]">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-sand">
                Why train in Rishikesh
              </p>
              <h2 className="font-display text-3xl font-bold leading-[1.12] tracking-[-0.035em] sm:text-4xl lg:text-[46px]">
                A training is more than a certificate.
              </h2>
              <p className="mt-3 text-[15px] leading-6 text-white/70 sm:mt-4 sm:text-base sm:leading-7">
                It is a grounded season of practice, honest questions, and returning home with clarity.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-3 md:gap-5">
            {reasons.map(([title, text, Icon], index) => (
              <Reveal key={title} delay={index * 90}>
                <article className="h-full rounded-xl border border-white/12 bg-white/8 p-5 sm:rounded-2xl sm:p-7">
                  <Icon className="text-sand" size={22} />
                  <h3 className="mt-4 font-display text-xl font-bold sm:mt-6 sm:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-white/68">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 py-10 sm:px-8 sm:py-18 lg:px-0 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1920px] items-center gap-8 lg:w-[92%] lg:grid-cols-[1fr_0.9fr] lg:gap-18 2xl:w-[88%]">
          <Reveal>
            <img
              src={`${asset}/dev/wp-content/themes/vinyasa-yoga-ashram/images/image/vya-certification.jpg`}
              alt="Yoga teacher training graduation with certificates"
              className="aspect-[1.2] w-full rounded-xl object-cover shadow-[0_18px_48px_rgba(54,74,60,0.14)] sm:rounded-2xl"
            />
          </Reveal>

          <Reveal delay={120}>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Leave with more than notes"
                title="Build a practice you can share anywhere."
                description="Our courses blend timeless yogic study with hands-on English practice teaching so you graduate confident to teach studios worldwide."
              />
              <ul className="mt-6 space-y-2.5 sm:mt-8 sm:space-y-3">
                {[
                  'Yoga Alliance USA-aligned certification',
                  'Dedicated 1-on-1 feedback from senior teachers',
                  'Safe arrival & Himalayan integration days',
                  'International alumni community in 50+ countries',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink/72">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-sage/12 text-sage">
                      <Check size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
                <ActionLink href="/contact">Reserve your training spot</ActionLink>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage">
                  <Mountain size={14} />
                  Upcoming monthly cohorts
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
