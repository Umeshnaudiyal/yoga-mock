import type { Metadata } from 'next';
import {
  Clock3,
  ExternalLink,
  Flower2,
  HeartHandshake,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  PlaneLanding,
  ShieldCheck,
  Sparkles,
  Sun,
  Wind,
} from 'lucide-react';
import { ContactEnquiryForm } from '../../components/contact-enquiry-form';
import { PageHero } from '../../components/page-hero';
import { Reveal } from '../../components/reveal';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

const asset = 'https://www.riteshyogaa.com';

export const metadata: Metadata = {
  title: 'Contact Us | Ritesh Yoga',
  description:
    'Share your goals, experience level, and preferred time to get matched with the right Ritesh Yoga class, private session, teacher training, or retreat.',
};

const contactChannels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@riteshyogaa.com',
    note: 'Replies within 24 hours',
    href: 'mailto:hello@riteshyogaa.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Direct guidance & scheduling',
    note: 'Quick answers before your first class',
    href: '#enquiry-form',
  },
  {
    icon: MapPin,
    label: 'Studio & Origin',
    value: 'Rishikesh, India · Teaching worldwide',
    note: 'Tapovan Nature Valley · View on map',
    href: '#location-map',
  },
  {
    icon: Clock3,
    label: 'Teaching Hours',
    value: 'Mon – Sat · 6:00 AM – 8:00 PM IST',
    note: 'Flexible slots across global timezones',
  },
] as const;

const nextSteps = [
  ['01', 'Share your intentions', 'Tell us where you are starting from, your schedule, and how you prefer to practice.'],
  ['02', 'Personal recommendation', 'Ritesh or our team replies personally with the class, 1-on-1 track, or training that fits best.'],
  ['03', 'Begin with clarity', 'Step onto the mat supported — no pressure, no rigid commitments.'],
] as const;

/** Decorative floating yoga and botanical icons framing both mobile and desktop viewports subtly. */
function ContactBackdropIcons() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-sage/12 blur-3xl sm:h-80 sm:w-80" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-sand/25 blur-3xl sm:h-96 sm:w-96" />

      <svg
        viewBox="0 0 240 240"
        className="animate-float-slow absolute -right-14 -top-6 h-44 w-44 text-sage/18 sm:right-2 sm:top-6 sm:h-64 sm:w-64 lg:right-8 lg:h-72 lg:w-72"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      >
        <circle cx="120" cy="120" r="106" strokeDasharray="4 6" />
        <circle cx="120" cy="120" r="76" />
        <path d="M120 38c18 28 18 56 0 82-18-26-18-54 0-82Z" />
        <path d="M120 120c28-18 56-18 82 0-26 18-54 18-82 0Z" />
        <path d="M120 120c18 28 18 56 0 82-18-26-18-54 0-82Z" />
        <path d="M38 120c26-18 54-18 82 0-28 18-56 18-82 0Z" />
        <circle cx="120" cy="120" r="14" />
      </svg>

      <svg
        viewBox="0 0 200 200"
        className="animate-float-reverse absolute -left-14 bottom-10 h-44 w-44 text-sage/15 sm:bottom-16 sm:h-56 sm:w-56 lg:h-64 lg:w-64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <circle cx="100" cy="100" r="84" strokeDasharray="3 6" />
        <circle cx="100" cy="100" r="54" />
        <path d="M100 30c14 24 14 48 0 70-14-22-14-46 0-70Zm0 70c24-14 48-14 70 0-22 14-46 14-70 0Z" />
      </svg>

      <span className="animate-float-slow absolute right-4 top-6 flex h-9 w-9 items-center justify-center rounded-xl border border-sage/20 bg-white/70 text-sage/75 shadow-xs backdrop-blur-xs sm:left-[6%] sm:right-auto sm:top-14 sm:h-12 sm:w-12 sm:rounded-2xl">
        <Leaf size={16} strokeWidth={1.6} />
      </span>
      <span className="animate-float-reverse absolute bottom-6 left-4 flex h-9 w-9 items-center justify-center rounded-full border border-sage/20 bg-white/65 text-sage/70 shadow-xs backdrop-blur-xs sm:bottom-auto sm:left-[42%] sm:top-10 sm:h-11 sm:w-11">
        <Flower2 size={16} strokeWidth={1.6} />
      </span>
      <span className="animate-float-slow absolute bottom-8 right-5 flex h-9 w-9 items-center justify-center rounded-xl border border-sage/20 bg-white/70 text-coral/70 shadow-xs backdrop-blur-xs lg:bottom-20 lg:left-[38%] lg:right-auto lg:h-11 lg:w-11 lg:rounded-2xl">
        <Sun size={16} strokeWidth={1.6} />
      </span>
      <span className="animate-float-reverse absolute right-[4%] top-[46%] hidden h-12 w-12 items-center justify-center rounded-full border border-sage/20 bg-white/65 text-sage/70 shadow-xs backdrop-blur-xs 2xl:flex">
        <Wind size={20} strokeWidth={1.6} />
      </span>
      <span className="animate-float-slow absolute bottom-12 right-[10%] hidden h-10 w-10 items-center justify-center rounded-2xl border border-sage/20 bg-white/65 text-forest/55 shadow-xs backdrop-blur-xs lg:flex">
        <HeartHandshake size={18} strokeWidth={1.6} />
      </span>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="overflow-x-clip bg-cream text-ink">
      <SiteHeader />

      <PageHero
        compact
        eyebrow="Start a conversation"
        title="Your next step can be simple."
        description="Tell us what you are looking for and we will help you find the right class, course, or retreat to begin with."
        image={`${asset}/marketing/cta-bg.webp`}
        label="Get in touch"
      />

      <section className="relative overflow-hidden bg-cream px-2.5 py-7 sm:px-8 sm:py-16 lg:px-0 lg:py-24">
        <ContactBackdropIcons />

        <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-[1920px] items-start gap-4 sm:gap-6 lg:w-[92%] lg:grid-cols-[0.78fr_1.22fr] lg:gap-x-14 lg:gap-y-8 xl:gap-x-18 2xl:w-[88%]">
          <Reveal className="order-1 min-w-0 px-1 sm:px-0 lg:col-start-1 lg:row-start-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-sage/20 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-sage shadow-xs sm:px-3.5 sm:py-1.5 sm:text-[11px] sm:tracking-[0.2em]">
              <Sparkles size={13} />
              We are here for you
            </p>
            <h2 className="mt-2.5 font-display text-[26px] font-extrabold leading-[1.12] tracking-[-0.035em] text-ink sm:mt-4 sm:text-4xl lg:text-[46px]">
              Let&apos;s find a practice that <span className="text-sage">fits your life.</span>
            </h2>
            <p className="mt-2.5 max-w-md text-sm leading-6 text-ink/65 sm:mt-5 sm:text-base sm:leading-7">
              No pressure, no complicated decisions. Share your goals below and we will point you
              gently in the right direction.
            </p>
          </Reveal>

          <Reveal delay={90} className="order-2 relative min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 hidden rounded-[26px] border border-sage/18 bg-white/45 sm:block"
            />
            <div
              id="enquiry-form"
              className="relative w-full min-w-0 scroll-mt-24 rounded-xl border border-sage/20 bg-white p-3 shadow-[0_16px_45px_rgba(35,59,48,0.08)] sm:rounded-2xl sm:p-7 lg:p-9"
            >
              <ContactEnquiryForm />
            </div>
          </Reveal>

          <Reveal delay={140} className="order-3 min-w-0 space-y-6 lg:col-start-1 lg:row-start-2">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-sage lg:hidden">
                Prefer to connect directly?
              </p>
              <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:gap-3.5">
                {contactChannels.map(({ icon: Icon, label, value, note, ...rest }) => {
                  const href = 'href' in rest ? rest.href : undefined;
                  const inner = (
                    <>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage/12 text-sage transition-colors duration-300 group-hover:bg-forest group-hover:text-sand sm:h-11 sm:w-11 sm:rounded-2xl">
                        <Icon size={18} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sage">
                          {label}
                        </p>
                        <p className="mt-0.5 text-[13px] font-bold leading-snug text-ink sm:truncate sm:text-sm">
                          {value}
                        </p>
                        <p className="mt-0.5 text-xs text-ink/55">{note}</p>
                      </div>
                    </>
                  );

                  const cardClass =
                    'group flex items-center gap-3 rounded-xl border border-sage/15 bg-white/92 p-3 shadow-[0_10px_28px_rgba(35,59,48,0.05)] backdrop-blur-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-sage/35 hover:shadow-[0_16px_34px_rgba(35,59,48,0.09)] sm:gap-4 sm:rounded-2xl sm:p-4';

                  return href ? (
                    <a key={label} href={href} className={cardClass}>
                      {inner}
                    </a>
                  ) : (
                    <div key={label} className={cardClass}>
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-forest/10 bg-forest p-4 text-white shadow-[0_20px_48px_rgba(35,59,48,0.16)] sm:rounded-2xl sm:p-7">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 -top-6 text-white/10"
              >
                <Flower2 size={120} strokeWidth={1} />
              </span>

              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sand">
                  How we begin
                </p>
                <h3 className="mt-2 font-display text-lg font-bold tracking-[-0.02em] sm:text-xl">
                  What happens after you reach out
                </h3>

                <ol className="mt-4 space-y-3.5 sm:mt-5 sm:space-y-4">
                  {nextSteps.map(([step, heading, desc]) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/12 text-[11px] font-extrabold text-sand">
                        {step}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{heading}</p>
                        <p className="mt-0.5 text-xs leading-5 text-white/70">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-5 flex items-center gap-2.5 border-t border-white/12 pt-4 text-xs text-white/75 sm:mt-6">
                  <ShieldCheck size={15} className="shrink-0 text-sand" />
                  <span>Zero obligation · Guidance tailored to every age &amp; level</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="location-map"
        className="scroll-mt-20 border-t border-sage/12 bg-sage-pale/75 px-3 py-10 sm:px-8 sm:py-16 lg:px-0 lg:py-20"
      >
        <div className="mx-auto w-full max-w-[1920px] lg:w-[92%] 2xl:w-[88%]">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-sage">
              <MapPin size={13} />
              Find us
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-[42px]">
              Samsaara Retreats
            </h2>
            <p className="mt-2.5 text-sm leading-6 text-ink/65 sm:text-base">
              Tapovan Nature Valley, above Laxman Jhula in Rishikesh — peaceful Himalayan views steps
              from the Ganga.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-6 sm:mt-9">
            <div className="rounded-xl border border-sage/20 bg-white p-2.5 shadow-[0_18px_48px_rgba(35,59,48,0.08)] sm:rounded-2xl sm:p-4">
              <div className="relative overflow-hidden rounded-lg bg-sage-pale sm:rounded-xl">
                <a
                  href="https://maps.app.goo.gl/hSck9zSntPuzpUS69"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-2 text-xs font-bold text-forest shadow-md ring-1 ring-ink/8 backdrop-blur-xs transition hover:bg-forest hover:text-white sm:left-4 sm:top-4 sm:text-[13px]"
                >
                  <span>Open in Maps</span>
                  <ExternalLink size={13} />
                </a>

                <iframe
                  src="https://maps.google.com/maps?q=Samsaara+Retreats+Nature+Valley,+Tapovan,+Rishikesh,+Uttarakhand&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  title="Samsaara Retreats Location Map in Rishikesh"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[300px] w-full border-0 sm:h-[380px] lg:h-[430px]"
                />
              </div>

              <div className="grid gap-3 pt-3 sm:grid-cols-3 sm:gap-4 sm:px-1 sm:pb-1 sm:pt-4">
                <div className="flex items-start gap-2.5 rounded-lg bg-cream/65 p-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-sage" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-sage">
                      Location
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-ink">
                      Tapovan Nature Valley, Rishikesh 249201
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 rounded-lg bg-cream/65 p-3">
                  <PlaneLanding size={16} className="mt-0.5 shrink-0 text-sage" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-sage">
                      Nearest Airport
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-ink">
                      Dehradun (DED) · ~45 min valley drive
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 rounded-lg bg-cream/65 p-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-sage">
                      Directions
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-ink">
                      Airport transfer support available
                    </p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/hSck9zSntPuzpUS69"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-forest px-3 py-2 text-[11px] font-bold text-white transition hover:bg-sage"
                  >
                    <span>Directions</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
