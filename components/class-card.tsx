import Link from 'next/link';
import { ArrowUpRight, Leaf, Video } from 'lucide-react';
import type { ClassItem } from '../lib/site-data';

/** Less-curved responsive class card tuned for international live and online discovery. */
export function ClassCard({ item }: { item: ClassItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-sage/15 bg-white shadow-[0_12px_34px_rgba(56,75,61,0.07)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_46px_rgba(56,75,61,0.13)] sm:rounded-2xl">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="aspect-[1.45] w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/92 text-sage shadow-xs backdrop-blur-xs sm:left-4 sm:top-4 sm:h-10 sm:w-10 sm:rounded-xl">
          <Leaf size={17} />
        </span>
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-forest/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-xs sm:right-4 sm:top-4">
          <Video size={11} className="text-sand" />
          Live · English
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-sage sm:mb-2.5">
          {item.category}
        </p>
        <h3 className="font-display text-xl font-bold tracking-[-0.03em] text-ink sm:text-2xl">
          {item.name}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-ink/55">{item.summary}</p>
        <p className="mt-3 text-sm leading-6 text-ink/62">{item.description}</p>
        <div className="mt-auto pt-4 sm:pt-5">
          <Link
            href={`/contact?class=${item.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-forest transition hover:text-coral"
          >
            <span>Find your class</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
