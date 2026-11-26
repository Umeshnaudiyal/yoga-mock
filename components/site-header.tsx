'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  BookOpen,
  ChevronRight,
  Clock3,
  Flower2,
  GraduationCap,
  HeartHandshake,
  Menu,
  MessageCircle,
  Mountain,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import { ActionLink } from './action-link';

const logoUrl = 'https://www.riteshyogaa.com/logo.webp';

const links = [
  { label: 'About', href: '/about', icon: Sparkles },
  { label: 'Classes', href: '/classes', icon: Users },
  { label: 'Courses', href: '/courses', icon: GraduationCap },
  { label: 'Stories', href: '/stories', icon: HeartHandshake },
  { label: 'Retreats', href: '/retreats', icon: Mountain },
  { label: 'Resources', href: '/resources', icon: BookOpen },
  { label: 'Contact', href: '/contact', icon: MessageCircle },
] as const;

/** Site-wide fixed header with scroll-expanding bar and translucent glass mobile sidebar drawer. */
export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full border-b transition-all duration-500 ease-out ${isScrolled
            ? 'border-sage/15 bg-white/95 text-ink shadow-[0_8px_28px_rgba(24,43,34,0.08)] backdrop-blur-md'
            : 'border-transparent bg-transparent text-white'
          }`}
      >
        <div
          className={`mx-auto flex max-w-[1920px] items-center justify-between transition-all duration-500 ease-out ${isScrolled
              ? 'w-full px-4 py-2.5 sm:px-6 sm:py-3 lg:w-[96%] lg:px-0 2xl:w-[92%]'
              : 'w-full px-5 py-4 sm:px-8 sm:py-5 lg:w-[92%] lg:px-0 2xl:w-[86%]'
            }`}
        >
          <Link href="/" className="flex shrink-0 items-center" onClick={() => setMenuOpen(false)}>
            <img
              src={logoUrl}
              alt="Ritesh Yoga"
              className={`w-auto object-contain transition-all duration-500 ease-out ${isScrolled ? 'h-8 sm:h-9 lg:h-10' : 'h-10 sm:h-11 lg:h-12 brightness-0 invert'
                }`}
            />
          </Link>

          <nav className="hidden items-center lg:flex">
            <ul
              className={`flex items-center font-medium transition-all duration-500 ease-out ${isScrolled
                  ? 'gap-5 text-[13px] xl:gap-6 xl:text-sm'
                  : 'gap-6 text-[13px] xl:gap-8 xl:text-[15px]'
                }`}
            >
              {links.map(({ label, href }) => {
                const active = isActive(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`relative py-1.5 transition-colors duration-200 ${isScrolled
                          ? active
                            ? 'font-semibold text-forest'
                            : 'text-ink/75 hover:text-sage'
                          : active
                            ? 'font-semibold text-white'
                            : 'text-white/90 hover:text-white'
                        }`}
                    >
                      {label}
                      {active && (
                        <span
                          className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full ${isScrolled ? 'bg-sage' : 'bg-white'
                            }`}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div
            className={`hidden origin-right items-center transition-all duration-500 ease-out lg:flex ${isScrolled ? 'scale-95' : 'scale-100'
              }`}
          >
            <ActionLink modal href="/contact" size="sm">
              Book your free session
            </ActionLink>
          </div>

          <button
            type="button"
            className={`flex h-10 w-10 origin-right items-center justify-center rounded-full border transition-all duration-500 ease-out lg:hidden ${isScrolled
                ? 'scale-100 border-sage/20 bg-sage/10 text-forest'
                : 'scale-105 border-white/25 bg-white/10 text-white'
              }`}
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[60] touch-none bg-forest/30 transition-opacity duration-[260ms] ease-out will-change-[opacity] lg:hidden ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
      />

      <aside
        id="mobile-nav-drawer"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed inset-y-0 right-0 z-[70] flex w-[82vw] max-w-[330px] flex-col overflow-hidden overscroll-contain border-l border-white/65 bg-white/84 bg-gradient-to-b from-white/35 via-transparent to-sage-pale/35 shadow-[-18px_0_48px_rgba(24,43,34,0.16)] backdrop-blur-[6px] transition-transform duration-[260ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform [backface-visibility:hidden] lg:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 bottom-16 text-sage/10 select-none"
        >
          <Flower2 size={180} strokeWidth={0.9} />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(128,155,134,0.14),transparent_55%)]"
        />

        <div className="relative z-10 flex items-center justify-between border-b border-sage/15 px-5 py-4">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            onClick={() => setMenuOpen(false)}
          >
            <img src={logoUrl} alt="Ritesh Yoga" className="h-10 w-auto object-contain" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-sage/20 bg-white/70 text-ink/70 shadow-2xs transition hover:border-sage hover:bg-sage hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="relative z-10 flex-1 overflow-y-auto px-4 py-5">
          <p className="mb-2.5 px-2 text-[10px] font-bold uppercase tracking-[0.22em] text-sage">
            Explore
          </p>
          <ul className="space-y-1.5">
            {links.map(({ label, href, icon: Icon }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] transition-colors duration-150 ${active
                        ? 'border border-sage/25 bg-sage-pale/80 font-bold text-forest shadow-2xs'
                        : 'text-ink/80 hover:bg-white/65 hover:text-forest'
                      }`}
                  >
                    <span
                      className={`h-5 w-[3px] shrink-0 rounded-full transition-opacity ${active ? 'bg-sage opacity-100' : 'bg-transparent opacity-0'
                        }`}
                    />
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${active
                          ? 'bg-white text-forest shadow-2xs'
                          : 'bg-sage/12 text-sage group-hover:bg-sage group-hover:text-white'
                        }`}
                    >
                      <Icon size={16} strokeWidth={1.9} />
                    </span>
                    <span className="flex-1 truncate">{label}</span>
                    <ChevronRight
                      size={15}
                      className={`shrink-0 transition-transform duration-200 ${active
                          ? 'text-sage'
                          : 'text-ink/30 group-hover:translate-x-0.5 group-hover:text-sage'
                        }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="relative z-10 border-t border-sage/15 bg-white/65 px-4 py-4">
          <p className="mb-3 flex items-center justify-center gap-2 text-[11px] font-medium text-ink/60">
            <Clock3 size={13} className="text-sage" />
            <span>Mon – Sat · Live worldwide</span>
          </p>
          <ActionLink
            modal
            href="/contact"
            size="sm"
            className="w-full justify-between py-2.5 pl-5 pr-2.5"
            onClick={() => setMenuOpen(false)}
          >
            Book your free session
          </ActionLink>
        </div>
      </aside>
    </>
  );
}
