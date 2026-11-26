import type { Metadata } from 'next';
import {
  Award,
  Clock3,
  Globe2,
  HeartHandshake,
  Languages,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { ActionLink } from '../../components/action-link';
import { PageHero } from '../../components/page-hero';
import { Reveal } from '../../components/reveal';
import { SectionHeading } from '../../components/section-heading';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

const asset = 'https://www.riteshyogaa.com';

export const metadata: Metadata = {
  title: 'About Ritesh Yoga | Traditional Lineage & Global Online Practice',
  description:
    'Rooted in Rishikesh and teaching students across 50+ countries. Discover Ritesh Yoga’s lineage, Yoga Alliance credentials, and beginner-friendly philosophy.',
};

const impactMetrics = [
  ['10,000+', 'Global Students Guided', 'Europe, UK, Americas, UAE & APAC'],
  ['50+', 'Countries Connected', 'Live online & Rishikesh cohorts'],
  ['15+', 'Years Teaching', 'Hatha, Vinyasa, Ashtanga & Pranayama'],
  ['4.9 / 5', 'Verified Google Rating', 'Consistent student transformation'],
] as const;

const values = [
  [
    'Practice without pressure',
    'Every body deserves a place to begin without comparison, performance, or rigid expectations.',
    Leaf,
  ],
  [
    'Guidance you can feel',
    'Clear English instruction, real-time visual posture feedback, and practical cues you immediately understand.',
    ShieldCheck,
  ],
  [
    'A practice for real life',
    'Build lasting strength, mobility, and nervous-system calm in a way that adapts to your work and travel rhythm.',
    HeartHandshake,
  ],
] as const;

const globalTrustPillars = [
  [
    'Authentic Rishikesh Lineage',
    'Trained and rooted in the world capital of yoga along the Himalayas — never diluted trends.',
    MapPin,
  ],
  [
    'Yoga Alliance USA Certified',
    'Structured philosophy, pranayama, and functional anatomy taught to internationally recognized standards.',
    Award,
  ],
  [
    'Multi-Timezone Live Rooms',
    'Morning and evening sessions scheduled seamlessly across London, Berlin, New York, Dubai & Sydney.',
    Clock3,
  ],
  [
    'Fluent English & Trauma-Informed',
    'Warm, conversational cueing with traditional Sanskrit explained simply and respectfully.',
    Languages,
  ],
] as const;

const globalRegions = [
  ['North America & UK', 'New York, Toronto & London morning/evening slots'],
  ['Continental Europe', 'Berlin, Amsterdam, Paris & Madrid small-group rooms'],
  ['Middle East & Asia-Pacific', 'Dubai, Singapore, Tokyo & Sydney live sessions'],
  ['Rishikesh, India Sanctuary', 'Samsaara Retreats & residential teacher training'],
] as const;

export default function AboutPage() {
  return (
    <main className="overflow-x-clip bg-cream text-ink">
      <SiteHeader />

      <PageHero
        compact
        eyebrow="About Ritesh Yoga"
        title="Learn with guidance, not pressure."
        description="Authentic Himalayan yoga rooted in Rishikesh, thoughtfully adapted in clear English for international students worldwide."
        image={`${asset}/marketing/student1.webp`}
      />

      <section className="px-3 py-10 sm:px-8 sm:py-18 lg:px-0 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1920px] items-center gap-8 sm:gap-12 lg:w-[92%] lg:grid-cols-[0.9fr_1.1fr] lg:gap-18 2xl:w-[88%]">
          <Reveal className="relative">
            <div className="absolute -inset-2.5 hidden rounded-2xl border border-sage/15 sm:-inset-4 sm:block sm:rounded-[26px]" />
            <img
              src={`${asset}/marketing/experience.webp`}
              alt="Students practicing yoga together in class"
              className="relative aspect-[1.12] w-full rounded-xl object-cover shadow-[0_18px_48px_rgba(54,74,60,0.14)] sm:rounded-2xl"
            />
            <div className="relative mt-3 flex items-center justify-between gap-3 rounded-xl border border-sage/20 bg-white px-4 py-3 shadow-sm sm:absolute sm:-bottom-5 sm:left-5 sm:mt-0 sm:gap-5 sm:px-5 sm:py-3.5 sm:shadow-[0_14px_34px_rgba(35,59,48,0.14)]">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sage-pale text-forest">
                  <Globe2 size={18} />
                </span>
                <div>
                  <p className="text-xs font-extrabold text-ink">Teaching in 50+ Countries</p>
                  <p className="text-[11px] text-ink/55">Rishikesh roots · Live global community</p>
                </div>
              </div>
              <span className="hidden rounded-lg bg-forest px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-sand sm:inline-block">
                RYT-500
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="The why behind the work"
              title="Yoga should meet you where you are."
              description="Ritesh Yoga began in Rishikesh with a simple conviction: a great class is never about forcing yourself into extreme shapes. It is about learning to listen to your breath, move intelligently, and step off the mat steadier than you arrived."
            />
            <p className="mt-4 max-w-xl text-sm leading-6 text-ink/65 sm:mt-5 sm:text-[15px] sm:leading-7">
              Today we guide complete beginners, busy professionals, travelers, and future teachers
              across Europe, North America, the Middle East, and Asia-Pacific through live Zoom
              coaching, Yoga Alliance teacher trainings, and Himalayan retreats.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                'Yoga Alliance USA',
                '100% English Instruction',
                'Live Posture Adjustments',
                'Samsaara Retreats Rishikesh',
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-sage/20 bg-white px-3 py-1.5 text-xs font-semibold text-forest"
                >
                  <Sparkles size={12} className="text-sage" />
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
              <ActionLink href="/classes">Explore the classes</ActionLink>
              <ActionLink href="/courses" light>
                View teacher training
              </ActionLink>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-[1920px] grid-cols-2 gap-3 sm:mt-16 sm:gap-5 md:grid-cols-4 lg:w-[92%] 2xl:w-[88%]">
          {impactMetrics.map(([value, title, sub], index) => (
            <Reveal key={title} delay={index * 70}>
              <div className="h-full rounded-xl border border-sage/15 bg-white p-4 shadow-[0_10px_28px_rgba(56,75,61,0.05)] sm:rounded-2xl sm:p-6">
                <p className="font-display text-2xl font-extrabold tracking-[-0.03em] text-forest sm:text-3xl">
                  {value}
                </p>
                <p className="mt-1 text-xs font-bold text-ink sm:text-sm">{title}</p>
                <p className="mt-1 text-[11px] leading-snug text-ink/55 sm:text-xs">{sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sage-pale px-3 py-10 sm:px-8 sm:py-18 lg:px-0 lg:py-24">
        <div className="mx-auto w-full max-w-[1920px] lg:w-[92%] 2xl:w-[88%]">
          <SectionHeading
            eyebrow="What guides us"
            title="Authentic Indian yoga, made accessible globally"
            description="Students travel across continents to study with us in Rishikesh — or connect from home around the world."
          />

          <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-3 md:gap-5">
            {values.map(([title, text, Icon], index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="h-full rounded-xl border border-sage/15 bg-white p-5 shadow-[0_10px_30px_rgba(56,75,61,0.05)] sm:rounded-2xl sm:p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage/10 text-sage sm:h-12 sm:w-12">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold tracking-[-0.03em] text-ink sm:mt-6 sm:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-ink/62">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {globalTrustPillars.map(([title, text, Icon], index) => (
              <Reveal key={title} delay={index * 70}>
                <div className="flex h-full flex-col rounded-xl border border-sage/20 bg-white/85 p-4 backdrop-blur-xs sm:rounded-2xl sm:p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forest text-sand">
                      <Icon size={15} />
                    </span>
                    <h4 className="text-sm font-bold text-ink">{title}</h4>
                  </div>
                  <p className="mt-2.5 text-xs leading-5 text-ink/62 sm:text-[13px]">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest px-3 py-12 text-white sm:px-8 sm:py-20 lg:px-0 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1920px] items-center gap-8 lg:w-[92%] lg:grid-cols-[1fr_0.9fr] lg:gap-14 2xl:w-[88%]">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sand">
              Meet your guide
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.08] tracking-[-0.04em] sm:mt-4 sm:text-5xl">
              Traditional roots. A modern, human way to teach.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:mt-6 sm:text-[15px] sm:leading-7">
              Whether you join a 6 AM live stream from London, book private therapeutic sessions
              from New York, or fly into Dehradun for a 200-Hour training beside the Ganga, our goal
              stays simple: build a mindful relationship with breath and movement that lasts beyond
              the mat.
            </p>
            <div className="mt-6 sm:mt-8">
              <ActionLink href="/contact" light>
                Meet for a free conversation
              </ActionLink>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-xl border border-white/15 bg-white/8 p-4 backdrop-blur-sm sm:rounded-2xl sm:p-7">
              <div className="flex items-center justify-between gap-3 border-b border-white/12 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <Users size={18} className="text-sand" />
                  <p className="font-display text-lg font-bold sm:text-xl">
                    Where our community practices
                  </p>
                </div>
                <span className="rounded-md bg-white/12 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-sand">
                  Global
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {globalRegions.map(([region, detail]) => (
                  <div
                    key={region}
                    className="rounded-lg border border-white/10 bg-white/6 p-3.5"
                  >
                    <p className="text-xs font-bold text-sand">{region}</p>
                    <p className="mt-1 text-xs leading-5 text-white/72">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
