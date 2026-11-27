'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  HeartHandshake,
  Leaf,
  MessageCircle,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
} from 'lucide-react';
import { ActionLink } from '../components/action-link';
import { ExperienceSection } from '../components/experience-section';
import { HisCraftSection } from '../components/his-craft-section';
import { Reveal } from '../components/reveal';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';
import { StatsBar } from '../components/stats-bar';
import { StoriesSection } from '../components/stories-section';
import { TeachingStepsSection } from '../components/teaching-steps-section';

const asset = 'https://www.riteshyogaa.com';
const cdn = 'https://cdn.riteshyogaa.com';

const programs = [
  {
    title: 'Beginner Yoga Journey',
    description: 'A gentle, step-by-step foundation course designed for complete beginners to build flexibility, strength, and calm.',
    image: `${cdn}/programs/beginner-yoga-journey/cover.webp`,
    icon: Leaf,
    tone: 'sage',
  },
  {
    title: 'Morning Energy & Flexibility',
    description: 'Invigorating morning flows that clear mental fog, release spinal stiffness, and build vibrant physical endurance.',
    image: `${cdn}/programs/morning-energy-flexibility/cover.webp`,
    icon: Sparkles,
    tone: 'peach',
  },
];

const faqs = [
  {
    tag: 'Beginners',
    icon: Sparkles,
    question: 'Can beginners join?',
    answer: 'Absolutely. Every session is adapted to your experience, body, and goals. You do not need to be flexible to begin.',
  },
  {
    tag: 'Flexibility',
    icon: HeartHandshake,
    question: 'Do I need to be flexible?',
    answer: 'Not at all. Flexibility is something you gently build over time through consistent, comfortable practice.',
  },
  {
    tag: 'Online setup',
    icon: Video,
    question: 'What do I need for online sessions?',
    answer: 'A yoga mat, a little open space, comfortable clothing, and a reliable internet connection are all you need.',
  },
  {
    tag: 'Duration',
    icon: Clock3,
    question: 'How long is each session?',
    answer: 'Most live sessions run for 45 to 60 minutes, with enough time for movement, breathwork, and a calm finish.',
  },
  {
    tag: 'Personalization',
    icon: Users,
    question: 'Are sessions personalized?',
    answer: 'Yes. One-on-one sessions are built around your goals, while small groups still receive real-time guidance and corrections.',
  },
  {
    tag: 'Free trial',
    icon: CalendarDays,
    question: 'Can I book a trial session?',
    answer: 'Yes. Start with a free introductory conversation so we can find the right way for you to practice.',
  },
];

function SectionHeading({ eyebrow, title, description, align = 'center' }: { eyebrow?: string; title: string; description?: string; align?: 'center' | 'left' }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : 'text-left'} max-w-2xl`}>
      {/* {eyebrow && <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-sage">{eyebrow}</p>} */}
      <h2 className="font-display text-3xl font-semibold leading-[1.12] tracking-[-0.035em] text-ink sm:text-4xl lg:text-[46px]">{title}</h2>
      <p className="mt-3 text-[15px] leading-6 text-ink/65 sm:mt-5 sm:text-base sm:leading-7">{description}</p>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="overflow-hidden bg-cream text-ink">
      <SiteHeader />
      <section className="relative min-h-[700px] overflow-hidden bg-forest text-white lg:min-h-[820px]">
        <img src={`${asset}/marketing/hero.webp`} alt="Yoga instructor practicing beside the sea" className="hero-bg-zoom absolute inset-0 h-full w-full object-cover object-center opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,43,35,0.78),rgba(25,43,35,0.38)_55%,rgba(25,43,35,0.32))]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(25,43,35,0.74),transparent_40%)]" />

        <div id="top" className="relative z-10 mx-auto flex w-full max-w-[1920px] px-3.5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-40 lg:w-[92%] lg:px-0 lg:pb-36 lg:pt-44 2xl:w-[88%]">
          <div className="max-w-2xl">
            <div className="hero-enter mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-sand backdrop-blur-sm"><span className="h-1.5 w-1.5 rounded-full bg-sand" /> Live online yoga for real life</div>
            <h1 style={{ '--hero-delay': '110ms' } as React.CSSProperties} className="hero-enter font-display text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-[78px]">Come home to <span className="text-sand">yourself.</span></h1>
            <p style={{ '--hero-delay': '210ms' } as React.CSSProperties} className="hero-enter mt-6 max-w-lg text-[16px] leading-7 text-white/78 sm:text-lg">Live yoga sessions with expert guidance, real-time support, and a practice that meets you exactly where you are.</p>
            <div style={{ '--hero-delay': '310ms' } as React.CSSProperties} className="hero-enter mt-8 flex flex-col gap-3 sm:flex-row"><ActionLink modal light>Book your free session</ActionLink><a href="#experience" className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-[13px] font-bold uppercase tracking-[0.06em] text-white transition hover:border-white/60 hover:bg-white/10"><Play size={13} fill="currentColor" /> See how it works</a></div>
            <div style={{ '--hero-delay': '400ms' } as React.CSSProperties} className="hero-enter mt-10 flex flex-wrap items-center gap-3 text-xs text-white/70"><span className="flex -space-x-2">{['dev.webp', 'anjali.webp', '1.webp', '2.webp'].map((image) => <img key={image} src={`${cdn}/testimonials/${image}`} alt="Student" className="h-8 w-8 rounded-full border-2 border-forest object-cover" />)}</span><span><span className="font-bold text-white">1,000+ students</span> have found their flow</span><span className="text-sand">★★★★★</span></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 h-16 rounded-t-[50%] bg-cream" />
      </section>

      <StatsBar />

      <ExperienceSection />

      <section id="programs" className="bg-sage-pale px-3 py-10 sm:px-8 sm:py-18 lg:px-0 lg:py-24">
        <div className="mx-auto w-full max-w-[1920px] lg:w-[92%] 2xl:w-[88%] sm:h-[90vh]">
          <Reveal>
            <SectionHeading title="Find the right path for you" description="Start with what you need today. Build a practice that supports your body, your energy, and your life." />
          </Reveal>
          <div className="mx-auto mt-7 grid max-w-[1440px] gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2">
            {programs.map(({ title, description, image, icon: Icon, tone }, index) => (
              <Reveal key={title} delay={index * 90}>
                <article className="group h-full overflow-hidden rounded-xl border border-ink/8 bg-white shadow-[0_14px_40px_rgba(56,75,61,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(56,75,61,0.12)] sm:rounded-2xl"><div className="relative overflow-hidden"><img src={image} alt={title} className="aspect-[1.65] w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-sage shadow-sm sm:left-4 sm:top-4"><Icon size={17} /></span></div><div className="p-4 sm:p-6"><div className="mb-2.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-sage sm:mb-3"><span className={`h-2 w-2 rounded-full ${tone === 'peach' ? 'bg-coral' : 'bg-sage'}`} /> Guided online program</div><h3 className="font-display text-xl font-semibold tracking-[-0.035em] sm:text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-ink/60 sm:mt-3">{description}</p><Link href="/classes" className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-forest transition hover:text-coral sm:mt-5">Explore program <ArrowUpRight size={14} /></Link></div></article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mx-auto mt-5 flex max-w-[1440px] flex-col items-start justify-between gap-3.5 rounded-xl bg-white px-4 py-4 shadow-[0_8px_24px_rgba(56,75,61,0.06)] sm:mt-8 sm:flex-row sm:items-center sm:gap-4 sm:rounded-2xl sm:px-7 sm:py-5"><div className="flex items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/12 text-sage"><Sparkles size={15} /></span><div><p className="text-xs font-bold text-ink">Not sure which path is right for you?</p><p className="mt-0.5 text-xs text-ink/55">Let&apos;s find your perfect yoga journey together.</p></div></div><ActionLink href="/contact">Find your fit</ActionLink></div>
          </Reveal>
        </div>
      </section>

      <section id="my-approach" className="bg-cream px-3 py-10 sm:px-8 sm:py-20 lg:px-0 lg:py-28">
        <div className="mx-auto w-full max-w-[1920px] space-y-12 sm:space-y-20 lg:w-[92%] lg:space-y-28 2xl:w-[88%]">
          <FeatureRow title="One-on-one yoga" description="Private support for your body, your pace, and your goals. Each class is a conversation between movement and attention." image={`${cdn}/classes/content/coaching.webp`} checks={['100% trusted guidance', 'Learn with confidence, every step of the way', 'Dedicated support & real-time feedback', 'Practice live from anywhere, anytime']} />
          <FeatureRow reverse title="Deep restoration for body & mind" description="Release the noise of a busy week through slow movement, supported stretches, and guided meditation." image={`${cdn}/classes/personalized-wellness-coaching/coaching.webp`} checks={['Calm the nervous system gently', 'Passive stretches with pillow & mat props', 'Guided Yoga Nidra closing meditation', 'Recharge for the week ahead']} />
        </div>
      </section>

      <section className="bg-sage-pale px-3 py-10 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1920px] items-center gap-7 sm:gap-10 lg:w-[92%] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 2xl:w-[88%]">
          <Reveal>
            <div className="overflow-hidden rounded-xl shadow-[0_20px_55px_rgba(48,68,54,0.15)] sm:rounded-2xl"><img src={`${asset}/marketing/yoga-2.webp`} alt="Live yoga class on a video call" className="aspect-[1.45] w-full object-cover" /></div>
          </Reveal>
          <Reveal delay={90}>
            <div><p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-sage">Together is stronger</p><h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-5xl">Live yoga together, <span className="text-sage">grow stronger.</span></h2><p className="mt-4 max-w-md text-[15px] leading-6 text-ink/65 sm:mt-5 sm:leading-7">Small, welcoming groups where you receive the energy of community and the attention of a personal practice.</p><div className="mt-6 grid max-w-lg grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3">{[['Live & interactive', 'Real-time guidance'], ['Small group size', 'Personal attention'], ['60+ live classes', 'Every week'], ['Track progress', 'Stay consistent']].map(([title, text]) => <div key={title} className="rounded-xl border border-sage/20 bg-white/75 p-3 sm:rounded-2xl sm:p-4"><p className="flex items-center gap-2 text-xs font-bold text-ink"><CircleCheck size={14} className="text-sage" />{title}</p><p className="mt-1.5 text-[11px] leading-5 text-ink/50 sm:mt-2">{text}</p></div>)}</div><div className="mt-5 flex justify-center sm:mt-8 lg:justify-start"><ActionLink href="/classes" size="sm" compactMobile>Join a live class</ActionLink></div></div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream px-3 py-10 sm:px-8 sm:py-20 lg:px-0 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1920px] items-center gap-8 sm:gap-12 lg:w-[92%] lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 2xl:w-[88%]">
          <Reveal>
            <div><SectionHeading align="left" eyebrow="Choose your rhythm" title="Choose the way you want to practice" description="There is no one right way to begin. Choose a rhythm that feels supportive, sustainable, and genuinely yours." /><div className="mt-6 space-y-2.5 sm:mt-8 sm:space-y-3">{[['Build consistency', 'Make yoga a regular habit with guidance that keeps you motivated and accountable.', '2–4', 'sessions per month'], ['Work on your goals', 'Focus on your specific health goals with personalized 1-on-1 guidance.', '2–3', 'sessions per week'], ['Transform your lifestyle', 'Experience lasting results with a balanced approach to body, mind, and breath.', '3+', 'sessions per week']].map(([title, text, number, label]) => <div key={title} className="flex items-center gap-3.5 rounded-xl border border-sage/15 bg-white p-3.5 sm:gap-4 sm:rounded-2xl sm:p-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage"><Check size={17} /></span><div className="min-w-0 flex-1"><h3 className="text-sm font-bold">{title}</h3><p className="mt-1 text-xs leading-5 text-ink/55">{text}</p></div><div className="hidden border-l border-sage/15 pl-4 text-right sm:block"><p className="font-display text-xl font-semibold text-sage">{number}</p><p className="text-[10px] uppercase tracking-[0.1em] text-ink/45">{label}</p></div></div>)}</div></div>
          </Reveal>
          <Reveal delay={110}>
            <div className="relative"><div className="absolute -inset-2.5 hidden rounded-2xl border border-sage/15 sm:-inset-4 sm:block sm:rounded-[30px]" /><img src={`${asset}/marketing/student1.webp`} alt="Yoga practitioner practicing outdoors" className="relative aspect-[0.86] w-full rounded-xl object-cover shadow-[0_22px_55px_rgba(54,74,60,0.14)] sm:rounded-2xl" /><div className="absolute -bottom-4 left-2 flex items-center gap-3 rounded-xl bg-white p-3 shadow-[0_14px_34px_rgba(42,61,48,0.14)] sm:-bottom-5 sm:-left-7 sm:rounded-2xl sm:p-4"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-white"><ShieldCheck size={19} /></span><div><p className="text-xs font-bold">Start anytime, anywhere</p><p className="mt-1 text-[11px] text-ink/50">No credit card required</p></div></div></div>
          </Reveal>
        </div>
      </section>

      <TeachingStepsSection />

      <HisCraftSection />

      <section className="relative isolate flex min-h-[420px] items-center bg-forest px-3 py-12 text-white [clip-path:inset(0)] sm:min-h-[520px] sm:px-8 sm:py-20 lg:min-h-[600px] lg:px-0 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
          <img src={`${asset}/marketing/cta-bg.webp`} alt="" className="h-full w-full object-cover object-center" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(95deg,rgba(19,35,28,0.84)_0%,rgba(19,35,28,0.52)_48%,rgba(19,35,28,0.12)_100%)]" />
        <div className="relative z-20 mx-auto w-full max-w-[1920px] lg:w-[92%] 2xl:w-[88%]">
          <Reveal>
            <div className="max-w-2xl">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-sand">A softer way forward</p>
              <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-[56px]">Helping you build strength, balance &amp; inner calm.</h2>
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/80">Every journey begins with a single breath. Ritesh Yoga combines traditional yogic practices with a modern, supportive teaching style to help you improve flexibility, reduce stress, build strength, and cultivate lasting wellness.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-xs text-white/85 backdrop-blur-sm">Mindful movement</span>
                <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-xs text-white/85 backdrop-blur-sm">Breath-led practice</span>
                <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-xs text-white/85 backdrop-blur-sm">Real support</span>
              </div>
              <div className="mt-8">
                <ActionLink modal light>Book your free session</ActionLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <StoriesSection />

      <section id="faqs" className="relative overflow-hidden bg-sage-pale px-3 py-10 sm:px-8 sm:py-18 lg:px-0 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(128,155,134,0.12),transparent_42%),radial-gradient(circle_at_88%_82%,rgba(226,200,159,0.18),transparent_40%)]"
        />
        <div className="relative mx-auto grid w-full max-w-[1920px] gap-8 lg:w-[92%] lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-x-16 lg:gap-y-8 2xl:w-[88%]">
          <Reveal className="lg:col-start-1 lg:row-start-1">
            <SectionHeading
              align="left"
              eyebrow="Need to know"
              title="Got questions?"
              description="A few simple answers to help you feel comfortable taking your first step."
            />
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { icon: Video, label: 'Live & interactive', detail: 'Real-time posture guidance' },
                { icon: ShieldCheck, label: 'All levels welcome', detail: 'Zero prior experience needed' },
                { icon: Clock3, label: '45–60 min sessions', detail: 'Movement, breath & calm finish' },
              ].map(({ icon: ItemIcon, label, detail }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-sage/15 bg-white/80 px-3 py-2.5 shadow-[0_6px_18px_rgba(56,75,61,0.04)] backdrop-blur-sm sm:rounded-2xl sm:px-3.5 sm:py-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sage/12 text-sage">
                    <ItemIcon size={17} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-ink">{label}</p>
                    <p className="mt-0.5 text-[11px] leading-snug text-ink/58">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="space-y-3 lg:col-start-2 lg:row-span-2">
            {faqs.map(({ tag, icon: FaqIcon, question, answer }, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal key={question} delay={index * 45}>
                  <div
                    className={`group rounded-xl border transition-all duration-300 sm:rounded-2xl ${isOpen
                      ? 'border-sage/35 bg-white shadow-[0_18px_45px_rgba(35,59,48,0.09)] ring-1 ring-sage/15'
                      : 'border-sage/15 bg-white/85 shadow-[0_6px_20px_rgba(56,75,61,0.03)] hover:border-sage/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(56,75,61,0.06)]'
                      }`}
                  >
                    <button
                      type="button"
                      id={`faq-trigger-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="flex min-h-[68px] w-full items-center gap-3.5 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 sm:h-11 sm:w-11 ${isOpen
                          ? 'bg-forest text-sand'
                          : 'bg-sage/10 text-sage group-hover:bg-sage/18'
                          }`}
                      >
                        <FaqIcon size={18} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-sage">
                          0{index + 1} · {tag}
                        </span>
                        <span className="mt-0.5 block text-[15px] font-bold leading-snug text-ink sm:text-base">
                          {question}
                        </span>
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                          ? 'rotate-180 border-forest/15 bg-forest text-white'
                          : 'border-sage/20 bg-sage-pale/70 text-sage group-hover:border-sage/40'
                          }`}
                      >
                        <ChevronDown size={16} />
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-sage/12 px-4 pb-5 pt-3.5 sm:px-6 sm:pb-6 sm:pl-[84px]">
                          <p className="text-sm leading-6 text-ink/68 sm:text-[15px] sm:leading-7">
                            {answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={100} className="lg:col-start-1 lg:row-start-2">
            <div className="rounded-xl border border-forest/10 bg-forest p-5 text-white shadow-[0_18px_45px_rgba(35,59,48,0.16)] sm:rounded-2xl sm:p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sand text-forest">
                  <MessageCircle size={19} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sand">
                    Still unsure?
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold leading-snug">
                    Ask us anything before you start.
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/70">
                    Have an injury, tight schedule, or specific goal? We&apos;ll recommend the right starting point.
                  </p>
                  <div className="mt-5">
                    <ActionLink href="/contact" light size="sm">
                      Ask a question
                    </ActionLink>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-cream px-3 py-12 sm:px-8 sm:py-20 lg:px-10 lg:py-24"><img src={`${asset}/marketing/cta-bg.webp`} alt="Calm yoga practice by the water" className="absolute inset-0 h-full w-full object-cover opacity-25" /><div className="absolute inset-0 bg-cream/60" /><Reveal><div className="relative mx-auto max-w-3xl text-center"><span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-sage shadow-md"><Leaf size={23} /></span><p className="mt-6 text-[11px] font-bold uppercase tracking-[0.22em] text-sage">Your yoga journey, made effortless</p><h2 className="mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[58px]">One breath can change the direction of your day.</h2><p className="mx-auto mt-4 max-w-xl text-[15px] leading-6 text-ink/62 sm:mt-5 sm:leading-7">No confusion. No pressure. Just a clear path to a healthier, happier, and more balanced you — guided with care.</p><div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row"><ActionLink modal>Book your free session</ActionLink><Link href="/contact" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[11px] font-bold uppercase tracking-[0.13em] text-forest transition hover:bg-white">Ask a question <ArrowUpRight size={14} /></Link></div></div></Reveal></section>

      <SiteFooter />
    </main>
  );
}

function FeatureRow({ title, description, image, checks, reverse = false }: { title: string; description: string; image: string; checks: string[]; reverse?: boolean }) {
  return (
    <div className={`grid items-center gap-7 sm:gap-10 lg:grid-cols-2 lg:gap-20 ${reverse ? 'lg:[&>div:first-child]:order-2' : ''}`}>
      <Reveal>
        <div className="relative"><div className="absolute -inset-2 hidden rounded-2xl border border-sage/15 sm:-inset-3 sm:block sm:rounded-[28px]" /><img src={image} alt={title} className="relative aspect-[1.5] w-full rounded-xl object-cover shadow-[0_20px_45px_rgba(56,75,61,0.13)] sm:rounded-2xl" /></div>
      </Reveal>
      <Reveal delay={90}>
        <div><p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-sage">Personalized practice</p><h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-5xl">{title}</h2><p className="mt-4 max-w-md text-[15px] leading-6 text-ink/62 sm:mt-5 sm:leading-7">{description}</p><ul className="mt-5 space-y-2.5 sm:mt-7 sm:space-y-3">{checks.map((check) => <li key={check} className="flex items-center gap-3 text-sm text-ink/72"><CircleCheck size={16} className="shrink-0 text-sage" />{check}</li>)}</ul><div className="mt-6 sm:mt-8"><ActionLink href="/classes">View details</ActionLink></div></div>
      </Reveal>
    </div>
  );
}
