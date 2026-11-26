import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  BedDouble,
  CalendarDays,
  Check,
  Clock3,
  Compass,
  Leaf,
  MapPin,
  MoonStar,
  PlaneLanding,
  Sparkles,
  Sun,
  Sunrise,
  Users,
  Utensils,
} from 'lucide-react';
import { ActionLink } from '../../components/action-link';
import { PageHero } from '../../components/page-hero';
import { Reveal } from '../../components/reveal';
import { SectionHeading } from '../../components/section-heading';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

const asset = 'https://www.riteshyogaa.com';

export const metadata: Metadata = {
  title: 'Samsaara Retreats · Rishikesh, Himalayas & Coastal Immersions | Ritesh Yoga',
  description:
    'Join intimate Samsaara Retreats across Tapovan Rishikesh, Dharamsala & Goa — boutique nature stays, organic sattvic cuisine, Ayurveda, sound healing, and breathwork.',
};

const retreatHighlights = [
  ['5–7 Nights', 'Deep nervous-system reset', CalendarDays],
  ['Tapovan & Mountains', 'Curated Indian sanctuaries', MapPin],
  ['Max 12 Guests', 'Intimate personal guidance', Users],
  ['All-Inclusive', 'Stay, sattvic dining & tours', Utensils],
] as const;

const retreatEditions = [
  {
    badge: 'Flagship Sanctuary',
    location: 'Tapovan, Rishikesh',
    season: 'Spring & Autumn Batches',
    duration: '7 Nights · From $890 USD',
    title: 'Himalayan Silence & Ganga Awakening',
    summary:
      'Rooted in the hills above Laxman Jhula with morning pranayama terraces, sacred Ganga Aarti ceremonies, and restorative movement.',
    highlights: ['Mountain cottages', 'Ganga Aarti walk', 'Sound healing'],
    image: `${asset}/marketing/footer.webp`,
  },
  {
    badge: 'Summer Sanctuary',
    location: 'Dharamsala, Himalayas',
    season: 'June – August Batches',
    duration: '6 Nights · From $840 USD',
    title: 'Cedar Mist Meditation & Somatic Flow',
    summary:
      'Cool pine-scented elevation designed for burnout recovery, guided silent mornings, cedar ridge walks, and deep Yoga Nidra.',
    highlights: ['Cedar trails', 'Tibetan singing bowls', 'Herbal therapies'],
    image: `${asset}/marketing/cta-bg.webp`,
  },
  {
    badge: 'Winter Immersion',
    location: 'Coastal Sanctuary, Goa',
    season: 'December – February Batches',
    duration: '5 Nights · From $950 USD',
    title: 'Coastal Ayurveda & Nervous System Rest',
    summary:
      'Warm sea breeze mornings paired with detoxifying Ayurvedic dining, ocean-horizon breathwork, and spacious afternoon stillness.',
    highlights: ['Ayurvedic consults', 'Organic seasonal menu', 'Sunset yin'],
    image: 'https://www.vinyasayogaashram.com/dev/wp-content/uploads/2026/09/sound-healing-home.jpeg',
  },
] as const;

const samsaaraSchedule = [
  ['06:00 AM', 'Morning Yoga & Alignment', 'Wake gently with breath-led Hatha and spinal opening'],
  ['07:15 AM', 'Pranayama & Meditation', 'Clear mental fatigue on open terrace or nature ridge'],
  ['08:30 AM', 'Organic Sattvic Breakfast', 'Fresh tropical fruit, herbal teas & warm nourishment'],
  ['10:30 AM', 'Nature Walks & Chanting', 'Guided forest/river walks, mindfulness & philosophy'],
  ['01:00 PM', 'Mindful Lunch & Free Hours', 'Sattvic meals followed by quiet journaling or Ayurveda spa'],
  ['05:00 PM', 'Restorative Flow & Sound Healing', 'Evening slow yin release, singing bowls & deep rest'],
] as const;

const stayFeatures = [
  'Private or twin stone-and-timber nature rooms with serene valley light',
  '3 warm sattvic vegetarian / vegan meals cooked fresh daily (gluten/dairy flexible)',
  'Ayurvedic herbal infusions, fire rituals & Ganga waterfall outings included',
  'Seamless Dehradun (DED) airport coordination & English-speaking hosts',
] as const;

const audienceFit = [
  'Founders, leaders & creatives stepping away from chronic screen urgency',
  'Solo international travelers seeking a safe, authentic Indian sanctuary',
  'Beginners & intermediates looking for personal alignment instead of crowded halls',
  'Anyone longing for unhurried mornings, honest conversation & deep sleep',
] as const;

const retreatRhythm = [
  [
    '01',
    'Move',
    'Morning asana and pranayama calibrated to your body’s mobility rather than rigid intensity.',
    Sunrise,
  ],
  [
    '02',
    'Restore',
    'Organic Ayurvedic meals, forest walks, and optional body therapies that reset digestion and sleep.',
    Sun,
  ],
  [
    '03',
    'Return',
    'Evening stillness, fire ceremonies, and lasting tools you actually bring back into city life.',
    MoonStar,
  ],
] as const;

export default function RetreatsPage() {
  return (
    <main className="overflow-x-clip bg-cream text-ink">
      <SiteHeader />

      <PageHero
        compact
        eyebrow="Samsaara retreats"
        title="Come home to yourself."
        description="Immersive yoga, Ayurvedic nourishment, and mountain stillness crafted with Samsaara Retreats across Rishikesh, Dharamsala & Goa."
        image={`${asset}/marketing/footer-cta.webp`}
        label="Explore upcoming retreats"
      />

      <section className="border-b border-sage/12 bg-white px-2.5 py-5 sm:px-8 sm:py-8 lg:px-0">
        <div className="mx-auto grid w-full max-w-[1920px] grid-cols-2 gap-2.5 sm:gap-4 lg:w-[92%] lg:grid-cols-4 lg:gap-5 2xl:w-[88%]">
          {retreatHighlights.map(([title, sub, Icon], index) => (
            <Reveal key={title} delay={index * 60}>
              <div className="flex h-full items-start gap-2.5 rounded-lg border border-sage/15 bg-cream/65 p-3 sm:items-center sm:gap-3.5 sm:rounded-xl sm:p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forest text-sand sm:h-10 sm:w-10">
                  <Icon size={16} />
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

      <section className="px-2.5 py-8 sm:px-8 sm:py-16 lg:px-0 lg:py-22">
        <div className="mx-auto w-full max-w-[1920px] lg:w-[92%] 2xl:w-[88%]">
          <Reveal>
            <div className="mb-6 flex flex-col justify-between gap-3 sm:mb-10 sm:flex-row sm:items-end">
              <SectionHeading
                align="left"
                eyebrow="Curated retreat editions"
                title="Three tranquil sanctuaries across India."
                description="Each Samsaara edition hosts up to 12 guests so every practice, meal, and silence feels personal."
              />
              <a
                href="/contact#location-map"
                className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold uppercase tracking-[0.13em] text-forest transition hover:text-coral"
              >
                <span>Tapovan flagship map</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
            {retreatEditions.map((edition, index) => (
              <Reveal key={edition.title} delay={index * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-sage/18 bg-white shadow-[0_12px_34px_rgba(56,75,61,0.06)] transition duration-300 hover:-translate-y-1 sm:rounded-xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={edition.image}
                      alt={edition.title}
                      className="aspect-[1.5] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-md bg-sand px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-forest shadow-xs">
                      {edition.badge}
                    </span>
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md bg-forest/88 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-xs">
                      <MapPin size={11} className="text-sand" />
                      {edition.location}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-3.5 sm:p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sage">
                      {edition.season}
                    </p>
                    <h3 className="mt-1.5 font-display text-xl font-bold leading-snug tracking-[-0.025em] text-ink sm:text-2xl">
                      {edition.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-6 text-ink/62">{edition.summary}</p>

                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {edition.highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-md bg-sage-pale px-2 py-1 text-[11px] font-semibold text-forest"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 sm:pt-5">
                      <div className="flex items-center justify-between border-t border-sage/12 pt-3 text-xs">
                        <span className="font-bold text-ink/70">{edition.duration}</span>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1 font-bold uppercase tracking-[0.12em] text-forest transition hover:text-coral"
                        >
                          <span>Check dates</span>
                          <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage-pale px-2.5 py-8 sm:px-8 sm:py-16 lg:px-0 lg:py-22">
        <div className="mx-auto grid w-full max-w-[1920px] gap-5 sm:gap-8 lg:w-[92%] lg:grid-cols-[1.08fr_0.92fr] lg:items-start 2xl:w-[88%]">
          <Reveal>
            <div className="rounded-lg border border-sage/18 bg-white p-3.5 shadow-[0_12px_34px_rgba(56,75,61,0.06)] sm:rounded-xl sm:p-7">
              <div className="flex items-center gap-2.5 border-b border-sage/12 pb-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest text-sand">
                  <Clock3 size={17} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sage">
                    Samsaara daily flow
                  </p>
                  <h2 className="font-display text-lg font-extrabold text-ink sm:text-2xl">
                    A typical day at Samsaara
                  </h2>
                </div>
              </div>

              <div className="mt-4 space-y-2.5 sm:mt-5">
                {samsaaraSchedule.map(([time, title, detail]) => (
                  <div
                    key={time}
                    className="flex flex-col gap-1 rounded-lg bg-cream/65 p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="rounded-md bg-sage-pale px-2 py-1 text-[11px] font-extrabold tabular-nums text-forest">
                        {time}
                      </span>
                      <p className="text-xs font-bold text-ink sm:text-sm">{title}</p>
                    </div>
                    <p className="text-xs leading-5 text-ink/60 sm:text-right">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="space-y-4 sm:space-y-5">
            <Reveal delay={90}>
              <div className="rounded-lg border border-sage/18 bg-white p-3.5 shadow-[0_12px_34px_rgba(56,75,61,0.06)] sm:rounded-xl sm:p-6">
                <div className="flex items-center gap-2.5 border-b border-sage/12 pb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sage-pale text-forest">
                    <BedDouble size={16} />
                  </span>
                  <h3 className="font-display text-base font-extrabold text-ink sm:text-xl">
                    Stays, dining &amp; airport arrival
                  </h3>
                </div>
                <ul className="mt-3.5 space-y-2.5">
                  {stayFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs leading-5 text-ink/75 sm:text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-sage/15 text-forest">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-lg border border-sage/18 bg-white p-3.5 shadow-[0_12px_34px_rgba(56,75,61,0.06)] sm:rounded-xl sm:p-6">
                <div className="flex items-center gap-2.5 border-b border-sage/12 pb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest text-sand">
                    <Compass size={16} />
                  </span>
                  <h3 className="font-display text-base font-extrabold text-ink sm:text-xl">
                    Designed for global rest seekers
                  </h3>
                </div>
                <ul className="mt-3.5 space-y-2.5">
                  {audienceFit.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs leading-5 text-ink/75 sm:text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-sage-pale text-forest">
                        <Sparkles size={11} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-2.5 py-8 sm:px-8 sm:py-16 lg:px-0 lg:py-22">
        <div className="mx-auto w-full max-w-[1920px] lg:w-[92%] 2xl:w-[88%]">
          <Reveal>
            <SectionHeading
              eyebrow="The sanctuary philosophy"
              title="A retreat is a return, not an escape."
            />
          </Reveal>

          <div className="mt-6 grid gap-3 sm:mt-10 sm:gap-5 md:grid-cols-3">
            {retreatRhythm.map(([step, title, text, Icon], index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="h-full rounded-lg border border-sage/15 bg-white p-4 shadow-[0_10px_28px_rgba(56,75,61,0.05)] sm:rounded-xl sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sage">
                      {step}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sage-pale text-forest">
                      <Icon size={16} />
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink sm:mt-6 sm:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/62">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest px-2.5 py-10 text-white sm:px-8 sm:py-18 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(211,181,129,0.18),transparent_34%)]" />
        <Reveal>
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-sand">
              <Leaf size={13} />
              Priority seasonal invitations
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight tracking-[-0.035em] sm:mt-4 sm:text-5xl">
              Bring less. Feel more.
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/75 sm:mt-4 sm:text-[15px] sm:leading-7">
              Share which sanctuary fits your travel calendar and receive upcoming dates, room options,
              and Dehradun arrival support.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
              <ActionLink href="/contact" light>
                Request retreat dates
              </ActionLink>
              <a
                href="/contact#location-map"
                className="group inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-sand transition hover:text-white"
              >
                <PlaneLanding size={14} />
                <span>View Rishikesh sanctuary map</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter showBanner={false} />
    </main>
  );
}
