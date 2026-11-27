import Link from 'next/link';
import { Clock3, Heart, Mail, MapPin, Phone } from 'lucide-react';
import { ActionLink } from './action-link';
import { FooterEnquiryBanner, FooterMandala } from './footer-enquiry-banner';
import { FooterScenery } from './footer-scenery';
import { Reveal } from './reveal';
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from './social-icons';

const asset = 'https://www.riteshyogaa.com';

const exploreLinks = [
  ['About Ritesh Yoga', '/about'],
  ['Programs', '/courses'],
  ['Live Classes', '/classes'],
  ['Teacher Training', '/courses'],
  ['Yoga Guides', '/resources'],
  ['Contact Us', '/contact'],
] as const;

const programLinks = [
  ['Beginner Yoga Journey', '/classes'],
  ['Morning Energy & Flexibility', '/classes'],
  ['200 Hour Training', '/courses/200-hour-teacher-training'],
  ['Samsaara Retreats', '/retreats'],
] as const;

const socialLinks = [
  { label: 'Instagram', href: '/contact', icon: InstagramIcon },
  { label: 'YouTube', href: '/contact', icon: YoutubeIcon },
  { label: 'Facebook', href: '/contact', icon: FacebookIcon },
  { label: 'X', href: '/contact', icon: XIcon },
] as const;

function FooterLinkList({
  title,
  items,
}: {
  title: string;
  items: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/95 sm:mb-4 sm:text-xs">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="group inline-flex items-start gap-2 text-[13px] leading-5 text-white/75 transition hover:text-white"
            >
              <img
                src={`${asset}/marketing/icons/flower1.svg`}
                alt=""
                className="mt-1 h-3 w-3 shrink-0 opacity-70 transition-opacity group-hover:opacity-100"
              />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Site footer featuring top enquiry popup banner, animated mandala & horizon art, and legal pill bar. */
export function SiteFooter({ showBanner = true }: { showBanner?: boolean }) {
  return (
    <footer className="w-full bg-[linear-gradient(180deg,#103220_0%,#123623_52%,#133321_100%)] text-white">
      {showBanner && (
        <section className="footer-retreat-banner relative flex w-full items-center justify-center overflow-hidden px-4 py-14 text-center sm:h-[400px] sm:px-5 sm:py-20 lg:h-[600px]">
          <img
            src={`${asset}/marketing/footer-cta.webp`}
            alt="Meditation overlooking the valley at Samsaara Retreats"
            className="absolute inset-0 h-full w-full object-cover object-[center_65%] lg:object-center"
          />
          <Reveal className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-white drop-shadow-[0_2px_10px_rgba(15,28,20,0.45)] sm:text-xs">
              One step away. Come home to yourself
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-[-0.02em] text-white drop-shadow-[0_2px_14px_rgba(15,28,20,0.45)] sm:text-4xl lg:text-[42px]">
              Join me at Samsaara Retreats
            </h2>
            <div className="mt-7">
              <ActionLink href="/retreats">Explore retreats</ActionLink>
            </div>
          </Reveal>
        </section>
      )}

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 text-white/[0.055] sm:left-auto sm:translate-x-0 sm:-right-16 sm:-top-16 lg:right-4 lg:-top-12"
        >
          <FooterMandala className="h-[340px] w-[340px] sm:h-[420px] sm:w-[420px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1920px] px-3.5 pb-6 pt-7 sm:px-8 sm:pb-8 sm:pt-10 lg:w-[94%] lg:px-0 lg:pt-12 2xl:w-[90%]">
          <Reveal>
            <FooterEnquiryBanner />
          </Reveal>

          <Reveal delay={70}>
            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 sm:mt-10 sm:grid-cols-3 lg:mt-12 lg:grid-cols-12 lg:items-start lg:gap-8">
              <div className="col-span-2 flex flex-col border-b border-white/12 pb-7 sm:col-span-3 lg:col-span-4 lg:border-b-0 lg:pb-0">
                <div className="flex items-center justify-between gap-3 lg:block">
                  <Link href="/" className="inline-flex shrink-0 items-center">
                    <img
                      src={`${asset}/logo.webp`}
                      alt="Ritesh Yoga"
                      className="h-11 w-auto object-contain brightness-0 invert sm:h-12 lg:h-14"
                    />
                  </Link>

                  <div className="flex items-center gap-2 lg:hidden">
                    {socialLinks.map(({ label, href, icon: Icon }) => (
                      <Link
                        key={label}
                        href={href}
                        aria-label={label}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/14 bg-white/[0.07] text-white transition hover:border-white/30 hover:bg-white hover:text-[#153925]"
                      >
                        <Icon size={15} />
                      </Link>
                    ))}
                  </div>
                </div>

                <p className="mt-4 max-w-md text-[13px] leading-6 text-white/75 sm:text-sm lg:max-w-[320px]">
                  Helping people reconnect with their breath, body and inner peace through mindful
                  yoga, meditation and holistic living.
                </p>

                <div className="mt-5 hidden items-center gap-2.5 lg:flex">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/14 bg-white/[0.07] text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white hover:text-[#153925]"
                    >
                      <Icon size={15} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="col-span-1 sm:col-span-1 lg:col-span-2">
                <FooterLinkList title="Explore" items={exploreLinks} />
              </div>

              <div className="col-span-1 sm:col-span-1 lg:col-span-3">
                <FooterLinkList title="Programs" items={programLinks} />
              </div>

              <div className="col-span-2 border-t border-white/12 pt-7 sm:col-span-1 sm:border-t-0 sm:pt-0 lg:col-span-3">
                <h3 className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/95 sm:mb-4 sm:text-xs">
                  Connect
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-[13px] leading-5 text-white/75 sm:grid-cols-1 sm:gap-y-3.5 sm:leading-6">
                  <a
                    href="https://maps.app.goo.gl/hSck9zSntPuzpUS69"
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-2 flex items-start gap-2.5 transition hover:text-white sm:col-span-1"
                  >
                    <MapPin size={15} className="mt-0.5 shrink-0 text-[#8ed39f] sm:mt-1" />
                    <span>Samsaara Retreats Nature Valley, Rishikesh, Uttarakhand India – 249201</span>
                  </a>
                  <a
                    href="tel:+918888888888"
                    className="col-span-1 flex items-start gap-2 transition hover:text-white sm:items-center sm:gap-2.5"
                  >
                    <Phone size={15} className="mt-0.5 shrink-0 text-[#8ed39f] sm:mt-0" />
                    <span>+91 8888888888</span>
                  </a>
                  <div className="col-span-1 flex items-start gap-2 sm:gap-2.5">
                    <Clock3 size={15} className="mt-0.5 shrink-0 text-[#8ed39f] sm:mt-1" />
                    <span>
                      Mon – Sat
                      <br />6 AM – 8 PM
                    </span>
                  </div>
                  <a
                    href="mailto:hello@riteshyogaa.com"
                    className="col-span-2 flex items-center gap-2.5 break-words transition hover:text-white sm:col-span-1"
                  >
                    <Mail size={15} className="shrink-0 text-[#8ed39f]" />
                    <span>hello@riteshyogaa.com</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <FooterScenery />

      <div className="border-t border-white/10 bg-[#0d2317] px-4 py-5 sm:px-8 sm:py-6">
        <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center justify-between gap-3 text-center text-xs text-white/75 sm:flex-row sm:text-left lg:w-[94%] 2xl:w-[90%]">
          <p className="sm:flex-1">© 2026 Ritesh Yoga. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:flex-1">
            <Link
              href="/contact"
              className="rounded-full border border-white/10 bg-white/[0.08] px-4 py-1.5 text-xs font-medium text-white/85 transition hover:border-white/25 hover:bg-white/16 hover:text-white"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/10 bg-white/[0.08] px-4 py-1.5 text-xs font-medium text-white/85 transition hover:border-white/25 hover:bg-white/16 hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>

          <p className="flex items-center gap-1.5 text-white/75 sm:flex-1 sm:justify-end">
            <span>Made with Love</span>
            <Heart size={12} className="fill-[#e85a5a] text-[#e85a5a]" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}
