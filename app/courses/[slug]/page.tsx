import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  Award,
  Check,
  Clock3,
  Home,
  PlaneLanding,
  Users,
  Utensils,
} from 'lucide-react';
import { ActionLink } from '../../../components/action-link';
import { PageHero } from '../../../components/page-hero';
import { Reveal } from '../../../components/reveal';
import { SectionHeading } from '../../../components/section-heading';
import { SiteFooter } from '../../../components/site-footer';
import { SiteHeader } from '../../../components/site-header';
import { courseItems } from '../../../lib/site-data';

export function generateStaticParams() {
  return courseItems.map((course) => ({ slug: course.slug }));
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courseItems.find((item) => item.slug === slug);
  if (!course) notFound();

  return (
    <main className="overflow-x-clip bg-cream text-ink">
      <SiteHeader />

      <PageHero
        compact
        eyebrow="Ritesh Yoga residential training"
        title={course.name}
        description={course.summary}
        image={course.image}
        label="Course details"
      />

      <section className="px-3 py-10 sm:px-8 sm:py-16 lg:px-0 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1920px] gap-6 sm:gap-8 lg:w-[92%] lg:grid-cols-[1fr_0.44fr] lg:gap-14 2xl:w-[88%]">
          <Reveal>
            <div className="rounded-xl border border-sage/15 bg-white p-4 shadow-[0_14px_38px_rgba(56,75,61,0.06)] sm:rounded-2xl sm:p-8 lg:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sage">
                The experience
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.035em] text-ink sm:mt-4 sm:text-4xl lg:text-5xl">
                A clear path into deeper practice.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-ink/65 sm:mt-6 sm:text-[15px] sm:leading-7">
                Designed for international practitioners who want authentic depth without confusion.
                You will learn in English through daily practice, anatomy labs, mindful teaching
                clinics, and supportive dialogue with senior teachers in Rishikesh.
              </p>

              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                {[
                  'Daily asana, pranayama & meditation',
                  'Yoga philosophy & mindful lifestyle',
                  'Functional anatomy & safe adjustments',
                  'English teaching methodology clinics',
                  'Private stay & 3 sattvic meals daily',
                  'Dehradun airport transfer & visa letter',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg bg-sage-pale p-3 text-sm font-medium sm:rounded-xl sm:p-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-sage text-white">
                      <Check size={13} />
                    </span>
                    <span className="text-ink/85">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="h-fit rounded-xl bg-forest p-5 text-white shadow-[0_18px_45px_rgba(35,59,48,0.18)] sm:rounded-2xl sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sand">
                Course details
              </p>

              <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
                {[
                  [Clock3, 'Duration', course.duration],
                  [Award, 'Credential', 'Yoga Alliance USA eligible'],
                  [Users, 'Cohort size', 'Small group (max 14 students)'],
                  [Utensils, 'Stay & meals', 'Private room & 3 sattvic meals'],
                  [PlaneLanding, 'Travel support', 'Dehradun pickup & visa help'],
                  [Home, 'Location', 'Rishikesh, India'],
                ].map(([Icon, term, value]) => {
                  const DetailIcon = Icon as typeof Clock3;
                  return (
                    <div key={term as string} className="flex items-center gap-3">
                      <DetailIcon className="shrink-0 text-sand" size={18} />
                      <div>
                        <p className="text-[11px] text-white/55">{term as string}</p>
                        <p className="mt-0.5 text-sm font-semibold text-white">
                          {value as string}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-white/15 pt-5 sm:mt-8 sm:pt-6">
                <p className="text-xs text-white/60">All-inclusive tuition</p>
                <p className="mt-1 font-display text-3xl font-extrabold text-sand">
                  {course.price}
                </p>
                <div className="mt-5">
                  <ActionLink href="/contact" light className="w-full justify-between">
                    Ask about upcoming dates
                  </ActionLink>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="bg-sage-pale px-3 py-10 sm:px-8 sm:py-18 lg:px-0 lg:py-24">
        <div className="mx-auto w-full max-w-[1920px] lg:w-[92%] 2xl:w-[88%]">
          <Reveal>
            <SectionHeading
              eyebrow="What you will explore"
              title="Practice, study, integrate."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-3 md:gap-5">
            {[
              [
                'Practice',
                'Build a steady daily rhythm of asana, breathwork, meditation, and Himalayan awareness.',
              ],
              [
                'Study',
                'Understand the roots, biomechanics, and nervous-system science behind each technique.',
              ],
              [
                'Share',
                'Learn to sequence intelligently and cue clearly in English for diverse bodies worldwide.',
              ],
            ].map(([title, text], index) => (
              <Reveal key={title} delay={index * 90}>
                <article className="h-full rounded-xl border border-sage/15 bg-white p-5 sm:rounded-2xl sm:p-7">
                  <span className="font-display text-3xl font-extrabold text-sage sm:text-4xl">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink sm:mt-8 sm:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-ink/62">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 py-12 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sage">
              Ready when you are
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.035em] sm:mt-4 sm:text-5xl">
              Your next chapter can begin with one conversation.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-ink/62 sm:mt-5 sm:text-[15px] sm:leading-7">
              Tell us your travel dates and goals and we will send full syllabus and cohort openings.
            </p>
            <div className="mt-6 sm:mt-8">
              <ActionLink href="/contact">Start the conversation</ActionLink>
            </div>
            <Link
              href="/courses"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-sage transition hover:text-forest"
            >
              <span>Back to all courses</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
