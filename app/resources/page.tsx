import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, CheckCircle2, Globe2, MessageCircle, Video } from 'lucide-react';
import { ActionLink } from '../../components/action-link';
import { PageHero } from '../../components/page-hero';
import { Reveal } from '../../components/reveal';
import { SectionHeading } from '../../components/section-heading';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

export const metadata: Metadata = {
  title: 'Yoga Practice Guides & Student Resources | Ritesh Yoga',
  description:
    'Beginner checklists, live class preparation notes, timezone guidance, and helpful starting points for Ritesh Yoga students.',
};

const resources = [
  [
    'Practice library & schedules',
    'Simple posture guides, Hatha/Vinyasa comparisons, and multi-timezone schedules for every level.',
    BookOpen,
    '/classes',
    'Browse classes',
  ],
  [
    'Teacher training guides',
    'Compare 100, 200, and 300-hour Rishikesh residential tracks, daily routines, and Visa arrival tips.',
    Video,
    '/courses',
    'Explore training',
  ],
  [
    'Direct guidance',
    'Unsure which practice suits an injury, stiff spine, or travel schedule? Ask our team directly.',
    MessageCircle,
    '/contact',
    'Ask a question',
  ],
] as const;

const prepChecklist = [
  ['Any flat quiet corner', 'Enough floor length for one yoga mat or folded blanket'],
  ['Everyday home props', 'Keep a firm sofa cushion, bath towel, or scarf nearby instead of blocks'],
  ['Eye-level camera setup', 'Place your phone or laptop 6 feet away so teachers can spot alignment safely'],
  ['Zero strict flexibility', 'Arrive stiff, tired, or brand new — sessions adapt smoothly in real time'],
] as const;

export default function ResourcesPage() {
  return (
    <main className="overflow-x-clip bg-cream text-ink">
      <SiteHeader />

      <PageHero
        compact
        eyebrow="Resources & prep"
        title="Keep the practice close."
        description="Thoughtful starting points, home setup checklists, and curriculum guides for students practicing worldwide."
        image="https://www.riteshyogaa.com/marketing/yoga.webp"
        label="Browse resources"
      />

      <section className="px-2.5 py-8 sm:px-8 sm:py-16 lg:px-0 lg:py-24">
        <div className="mx-auto w-full max-w-[1920px] lg:w-[92%] 2xl:w-[88%]">
          <Reveal>
            <SectionHeading
              eyebrow="A place to begin"
              title="Small reminders carry a long way."
              description="Choose the resource path that matches where you are today."
            />
          </Reveal>

          <div className="mt-7 grid gap-3 sm:mt-11 sm:gap-5 md:grid-cols-3">
            {resources.map(([title, text, Icon, href, cta], index) => (
              <Reveal key={title} delay={index * 80}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-lg border border-sage/15 bg-white p-4 shadow-[0_10px_28px_rgba(56,75,61,0.05)] transition duration-300 hover:-translate-y-1 hover:border-sage/35 hover:shadow-[0_18px_40px_rgba(56,75,61,0.1)] sm:rounded-xl sm:p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage/12 text-sage transition-colors group-hover:bg-forest group-hover:text-sand sm:h-11 sm:w-11">
                    <Icon size={19} />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink sm:mt-6 sm:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-6 text-ink/62">{text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-forest transition group-hover:text-coral">
                    <span>{cta}</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage-pale px-2.5 py-8 sm:px-8 sm:py-16 lg:px-0 lg:py-22">
        <div className="mx-auto w-full max-w-[1920px] lg:w-[92%] 2xl:w-[88%]">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <SectionHeading
                align="left"
                eyebrow="Before your first live class"
                title="Simple preparation guide"
                description="Everything you need for calm, comfortable live online sessions from home or a hotel room."
              />
              <span className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-sage/20 bg-white px-3 py-1.5 text-xs font-bold text-forest">
                <Globe2 size={13} className="text-sage" />
                7-day replay included
              </span>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-3 sm:mt-9 sm:grid-cols-2 sm:gap-5">
            {prepChecklist.map(([heading, detail], index) => (
              <Reveal key={heading} delay={index * 70}>
                <div className="flex h-full items-start gap-3 rounded-lg border border-sage/15 bg-white p-4 sm:rounded-xl sm:p-5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sage-pale text-forest">
                    <CheckCircle2 size={15} />
                  </span>
                  <div>
                    <h4 className="text-sm font-extrabold text-ink sm:text-base">{heading}</h4>
                    <p className="mt-1 text-xs leading-5 text-ink/62 sm:text-sm">{detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-lg border border-sage/18 bg-white p-4 sm:mt-8 sm:flex-row sm:items-center sm:rounded-xl sm:p-6">
              <div>
                <p className="text-sm font-bold text-ink">Want a personalized starting plan?</p>
                <p className="mt-0.5 text-xs text-ink/60 sm:text-sm">
                  Share your schedule and goals and we&apos;ll match your exact class or retreat.
                </p>
              </div>
              <ActionLink href="/contact" size="sm">
                Book free session
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
