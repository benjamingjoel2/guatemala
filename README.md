# Antigua & Beyond

Marketing site for **Antigua & Beyond**, a tailor-made Guatemala travel company. Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

The layout, grid system and interaction patterns follow the structure of the reference template (hairline-framed grids, oversized tight headings, "+ link" navigation, image-led cards, split-text reveals). All code, copy and branding are original, and imagery is placeholder Unsplash photography.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
npm run lint
```

## Where things live

| Path | What it holds |
| --- | --- |
| `config/site.ts` | Brand name, palette, **currencies and conversion rates**, contact details (`[EMAIL]`, `[NUMBER]` placeholders), socials, navigation |
| `data/types.ts` | Content model (Destination, Experience, Tour, Stay, Testimonial, FAQ, planner options) |
| `data/*.ts` | Seed content: 12 destinations, 13 experiences, 8 tours, 8 stays, 6 placeholder testimonials, 11 FAQs, planner options |
| `data/images.ts` | Image catalog. Swap any `src` to replace photography site-wide |
| `content/blog/*.mdx` | Blog posts (frontmatter + Markdown) |
| `app/` | Routes. Index and `[slug]` pages are generated from `/data` |
| `app/api/plan` | Trip planner endpoint: validates, logs the payload, `TODO` for email/CRM |
| `app/api/newsletter`, `app/api/contact` | Guide signup and contact form endpoints (log + `TODO`) |
| `components/` | `layout/` (header, footer, WhatsApp), `home/` sections, `cards/`, `detail/` page templates, `planner/`, `ui/` primitives |

### Before launch

- Replace `[EMAIL]`, `[NUMBER]`, the phone number and address in `config/site.ts`
- Set `NEXT_PUBLIC_SITE_URL` for canonical URLs, the sitemap and OG tags
- Replace placeholder testimonials (`data/testimonials.ts`, flagged `placeholder: true`)
- Wire the `TODO`s in `app/api/*` to your email provider and CRM
- Update currency rates in `config/site.ts`, or swap `lib/currency.ts` for a live rates API
- Have the Terms and Privacy placeholder pages reviewed

### Moving to a CMS

Pages only consume the typed arrays and getters exported from `/data` (`destinations`, `getDestination`, and so on). Point those functions at your CMS and keep returning the same shapes from `data/types.ts`.

## Features

- Currency switcher (USD, EUR, GBP, CAD, GTQ) that converts every displayed price, saved per visitor
- 5-step trip planner at `/plan-your-trip`, also available as a slide-over modal from any "Start planning" button. Each step is validated, progress is saved in `localStorage`, and a confirmation screen follows submission
- Tour filters (region, duration, budget) and experience category filters
- Destination pages with a month-by-month calendar (May–October rainy season flagged), highlights, tips, stays, related tours and an FAQ
- Tour pages with a day-by-day itinerary, inclusions and exclusions, a route-map placeholder, pricing and a sticky enquiry card
- SEO: per-page metadata and OG tags, JSON-LD (TravelAgency, TouristTrip, FAQPage, BlogPosting, BreadcrumbList), `sitemap.xml`, `robots.txt`
- Accessibility: skip link, focus-visible styles, labelled form controls, dialog focus trap, `prefers-reduced-motion` respected
