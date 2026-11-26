import Link from 'next/link';
import { Clock3, Heart, Leaf, Mail, MapPin, Phone } from 'lucide-react';
import { ActionLink } from './action-link';
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from './social-icons';

const asset = 'https://www.riteshyogaa.com';

const exploreLinks = [
  ['About Ritesh Yoga', '/about'],
  ['Programs', '/#programs'],
  ['Live Classes', '/classes'],
  ['Teacher Training', '/courses'],
  ['Yoga Guides', '/resources'],
  ['Contact Us', '/contact'],
] as const;

const programLinks = [
  ['Beginner Yoga Journey', '/#programs'],
  ['Morning Energy & Flexibility', '/#programs'],
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
      <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white sm:mb-4 sm:text-xs">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="group inline-flex items-start gap-2 text-[13px] leading-5 text-white/85 transition hover:text-white"
            >
              <img
                src={`${asset}/marketing/icons/flower1.svg`}
                alt=""
                className="mt-1 h-3 w-3 shrink-0 opacity-75 transition-opacity group-hover:opacity-100"
              />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Shared site footer with optional full-width Samsaara Retreats CTA banner. */
export function SiteFooter({ showBanner = true }: { showBanner?: boolean }) {
  return (
    <footer className="w-full bg-[#486248] text-white">
      {showBanner && (
        <section className="footer-retreat-banner relative flex w-full items-center justify-center overflow-hidden px-4 py-14 text-center sm:h-[400px] sm:px-5 sm:py-20 lg:h-[600px]">
          <img
            src={`${asset}/marketing/footer-cta.webp`}
            alt="Meditation overlooking the valley at Samsaara Retreats"
            className="absolute inset-0 h-full w-full object-cover object-[center_65%] lg:object-center"
          />
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-white drop-shadow-[0_2px_10px_rgba(15,28,20,0.45)] sm:text-xs">
              One step away. Come home to yourself
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-[-0.02em] text-white drop-shadow-[0_2px_14px_rgba(15,28,20,0.45)] sm:text-4xl lg:text-[42px]">
              Join me at Samsaara Retreats
            </h2>
            <div className="mt-7">
              <ActionLink href="/retreats">Explore retreats</ActionLink>
            </div>
          </div>
        </section>
      )}

      <div className="mx-auto w-full max-w-[1920px] px-4 pb-8 pt-10 sm:px-8 sm:pt-12 lg:w-[94%] lg:px-0 lg:pt-14 2xl:w-[90%]">
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-12 lg:items-start lg:gap-6 xl:gap-8">
          <div className="col-span-2 flex flex-col items-center border-b border-white/15 pb-8 text-center sm:col-span-3 sm:border-b-0 sm:pb-0 lg:col-span-3 lg:items-start lg:text-left">
            <Link href="/" className="inline-flex items-center">
              <img
                src={`${asset}/logo.webp`}
                alt="Ritesh Yoga"
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <div className="my-4 flex w-full max-w-[200px] items-center gap-3">
              <span className="h-px flex-1 bg-white/35" />
              <img src={`${asset}/marketing/icons/flower1.svg`} alt="" className="h-5 w-5 shrink-0 opacity-90" />
              <span className="h-px flex-1 bg-white/35" />
            </div>
            <p className="max-w-[270px] text-[13px] leading-6 text-white/85 sm:text-sm">
              Helping people reconnect with their breath, body and inner peace through mindful yoga, meditation and holistic living.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#486248]"
                >
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <FooterLinkList title="Explore" items={exploreLinks} />
          </div>

          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <FooterLinkList title="Programs" items={programLinks} />
          </div>

          <div className="col-span-2 border-t border-white/15 pt-7 sm:col-span-1 sm:border-t-0 sm:pt-0 lg:col-span-2">
            <h3 className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white sm:mb-4 sm:text-xs">
              Connect
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-[13px] leading-5 text-white/85 sm:grid-cols-1 sm:gap-y-3.5 sm:leading-6">
              <a
                href="https://maps.app.goo.gl/hSck9zSntPuzpUS69"
                target="_blank"
                rel="noreferrer"
                className="col-span-2 flex items-start gap-2.5 transition hover:text-white sm:col-span-1"
              >
                <MapPin size={15} className="mt-0.5 shrink-0 text-white/90 sm:mt-1" />
                <span>Samsaara Retreats Nature Valley, Rishikesh, Uttarakhand India – 249201</span>
              </a>
              <a
                href="tel:+918888888888"
                className="col-span-1 flex items-start gap-2 transition hover:text-white sm:items-center sm:gap-2.5"
              >
                <Phone size={15} className="mt-0.5 shrink-0 text-white/90 sm:mt-0" />
                <span>+91 8888888888</span>
              </a>
              <div className="col-span-1 flex items-start gap-2 sm:gap-2.5">
                <Clock3 size={15} className="mt-0.5 shrink-0 text-white/90 sm:mt-1" />
                <span>
                  Mon – Sat
                  <br />6 AM – 8 PM
                </span>
              </div>
              <a
                href="mailto:hello@riteshyogaa.com"
                className="col-span-2 flex items-center gap-2.5 break-words transition hover:text-white sm:col-span-1"
              >
                <Mail size={15} className="shrink-0 text-white/90" />
                <span>hello@riteshyogaa.com</span>
              </a>
            </div>
          </div>

          <div className="col-span-2 flex justify-center sm:col-span-3 lg:col-span-3 lg:justify-end">
            <Link
              href="/retreats"
              className="group flex w-full items-center overflow-hidden rounded-xl bg-[#FAF8F5] text-ink shadow-[0_16px_40px_rgba(18,32,20,0.22)] transition duration-300 hover:-translate-y-1 sm:block sm:max-w-[300px] sm:rounded-2xl lg:max-w-[250px]"
            >
              <div className="h-24 w-28 shrink-0 overflow-hidden sm:aspect-[16/10] sm:h-auto sm:w-full">
                <img
                  src={`${asset}/marketing/footer.webp`}
                  alt="Samsaara Retreats cottages at sunrise"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="min-w-0 flex-1 px-4 py-3 text-left sm:px-5 sm:py-4 sm:text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/55">Join us at</p>
                <p className="mt-0.5 font-display text-base font-extrabold text-ink transition-colors group-hover:text-sage sm:mt-1 sm:text-lg">
                  Samsaara Retreats
                </p>
                <div className="mt-2 flex w-24 items-center gap-2 sm:mx-auto sm:mt-3 sm:w-28 sm:gap-2.5">
                  <span className="h-px flex-1 bg-sage/40" />
                  <Leaf size={13} className="shrink-0 text-sage" />
                  <span className="h-px flex-1 bg-sage/40" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="my-6 flex items-center gap-4 sm:my-8">
          <span className="h-px flex-1 bg-white/30" />
          <img src={`${asset}/marketing/icons/flower1.svg`} alt="" className="h-5 w-5 shrink-0 opacity-90" />
          <span className="h-px flex-1 bg-white/30" />
        </div>

        <div className="flex flex-col items-center justify-between gap-2.5 text-center text-xs text-white/80 sm:flex-row sm:gap-3 sm:text-left">
          <p className="sm:flex-1">© 2026 Ritesh Yoga. All rights reserved.</p>
          <div className="flex items-center gap-3 sm:flex-1 sm:justify-center">
            <Link href="/contact" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <span className="text-white/40">|</span>
            <Link href="/contact" className="transition hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
          <p className="flex items-center gap-1.5 sm:flex-1 sm:justify-end">
            <span>Made with Love</span>
            <Heart size={12} className="fill-[#e85a5a] text-[#e85a5a]" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}
