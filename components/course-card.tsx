import Link from 'next/link';
import { ArrowUpRight, Award, CalendarDays, Globe2 } from 'lucide-react';
import type { CourseItem } from '../lib/site-data';

/** Less-curved responsive course card highlighting international YTTC credentials and USD tuition. */
export function CourseCard({ course }: { course: CourseItem }) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-[0_12px_34px_rgba(56,75,61,0.07)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(56,75,61,0.13)] sm:rounded-2xl ${
        course.featured ? 'border-sand/70 ring-1 ring-sand/35' : 'border-sage/15'
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.name}
          className="aspect-[1.35] w-full object-cover transition duration-700 group-hover:scale-105"
        />
        {course.featured && (
          <span className="absolute left-3 top-3 rounded-lg bg-sand px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-forest shadow-xs sm:left-4 sm:top-4">
            Most loved
          </span>
        )}
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-white/92 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-forest shadow-xs backdrop-blur-xs sm:right-4 sm:top-4">
          <Award size={12} className="text-sage" />
          Yoga Alliance
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sage">
          {course.shortName} certification
        </p>
        <h3 className="mt-2 font-display text-xl font-bold leading-snug tracking-[-0.03em] text-ink sm:mt-2.5 sm:text-2xl">
          {course.name}
        </h3>
        <p className="mt-2.5 text-sm leading-6 text-ink/62">{course.summary}</p>

        <div className="mt-auto pt-4 sm:pt-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-sage/12 pt-3.5 text-xs text-ink/60">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={14} className="text-sage" />
              {course.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-ink/50">
              <Globe2 size={13} className="text-sage" />
              All-inclusive stay
            </span>
            <span className="font-bold text-forest">{course.price}</span>
          </div>

          <Link
            href={`/courses/${course.slug}`}
            className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-forest transition hover:text-coral sm:mt-5"
          >
            <span>Explore course</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
