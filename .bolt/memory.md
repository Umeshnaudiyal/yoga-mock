# Project memory

## Product intent & audience

- Exact responsive replica of https://www.riteshyogaa.com/ — a yoga teacher/practitioner marketing site.
- Goal: production-quality, professional, beautiful, not cookie-cutter.
- Pages: home page built first; other pages to follow same design system and component patterns.
- Audience: prospective yoga students, coaching clients, retreat participants.

## Brand personality & voice

- Calm, grounding, spiritual-but-approachable wellness tone.
- Visual language evokes nature, stillness, balance.

## Visual design & UX direction

- Palette: calm greens and warm sand/earth neutrals; soft, natural.
- Typography: global font CSS variables for reuse across pages.
- Layout: full-width hero, stacked content sections, responsive grid for programs/stats/testimonials.
- Components reused: navbar with mobile menu, hero, stats, programs, coaching sections, testimonials, FAQ (expandable accordion), CTA, footer.
- Interactions: smooth navigation, hover states, mobile slide/toggle menu, expandable FAQ accordions.
- Accessibility: responsive breakpoints, mobile-first navigation, semantic structure.
- Patterns: avoid server/client hydration attribute warnings; use `"use client"` directive on components using hooks.

## Decisions, constraints & rationale

- Next.js + JavaScript (not TS) + Tailwind CSS as specified.
- Reuse shadcn/ui and lucide-react per template defaults; avoid extra UI/icon packages unless explicitly requested.
- Use lucide-react for logo and icons.
- Component-driven architecture to keep pages consistent and maintainable.
- Global font variables to standardize typography across the replica.

## Open questions & assumptions

- Assumption: reference site images/assets can be referenced or substituted with similar royalty-free assets.
- Assumption: “exact replica” means matching structure, layout, and visual tone, not copying proprietary copy/assets verbatim if problematic.
- Open: which additional pages (About, Programs, Retreats, Contact, Blog) to build next and in what priority.
- Open: whether booking links should point to real external endpoints or placeholders.