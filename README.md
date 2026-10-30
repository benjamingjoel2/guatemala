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

## Deployment

Production runs on Vercel at https://antiguaandbeyond.tourground.com (custom domain; also https://antigua-and-beyond.vercel.app) — project `antigua-and-beyond`, team `benjamin-sevo`. DNS: `antiguaandbeyond` CNAME record on tourground.com pointing at the value Vercel shows under Settings → Domains. The project is connected to this GitHub repo:

- Every push to the production branch (`claude/modest-bohr-9wxjav` for now; change it under Vercel → Settings → Git) deploys to production.
- Pushes to any other branch get a preview deployment. Previews are protected by Vercel Authentication.
- `NEXT_PUBLIC_SITE_URL` is set in the Vercel project's environment variables.
- The `gh-pages` branch is skipped through the project's Ignored Build Step setting.

## Enquiry emails

The trip planner (`/api/plan`) and contact form (`/api/contact`) email each submission to the team via [Resend](https://resend.com), with reply-to set to the traveller. Set in Vercel → Settings → Environment Variables:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Required to send. Without it, submissions are only written to the server log |
| `ENQUIRY_TO_EMAIL` | Inbox that receives enquiries (defaults to the contact email in `config/site.ts`) |
| `EMAIL_FROM` | Sender, e.g. `Antigua & Beyond <planner@tourground.com>` once tourground.com is verified in Resend |

Both forms include a hidden honeypot field; submissions that fill it are dropped silently.

## SEO

- Per-page titles (brand suffix dropped when it would exceed ~60 characters), descriptions trimmed to ~158 characters, canonicals, Open Graph and Twitter tags (`lib/seo.tsx`)
- JSON-LD: TravelAgency + WebSite (all pages), TouristDestination + FAQPage (destinations), TouristTrip (tours and experiences), BlogPosting, FAQPage (`/faq`), BreadcrumbList
- `sitemap.xml` and `robots.txt` generated from `/data`; brand favicon (`app/icon.svg`, `app/apple-icon.png`)
- Search Console: set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (and optionally `NEXT_PUBLIC_BING_SITE_VERIFICATION`) in Vercel, redeploy, then submit `/sitemap.xml`
- The `gh-pages` branch now only redirects to the Vercel site (noindex), so there is no duplicate copy

## Static preview (GitHub Pages)

```bash
BASE_PATH=/guatemala NEXT_PUBLIC_SITE_URL=https://benjamingjoel2.github.io/guatemala scripts/build-static.sh
```

This writes a fully static build to `./out`, which is published on the `gh-pages` branch. The static build has no server, so the planner, contact and newsletter forms simulate a successful submission (see `lib/api.ts`). Deploy the normal `npm run build` to a Node host such as Vercel to get the real API routes.

## Where things live

| Path | What it holds |
| --- | --- |
| `config/site.ts` | Brand name, palette, **currencies and conversion rates**, contact details (email, phone, address), socials, navigation |
| `data/types.ts` | Content model (Destination, Experience, Tour, Stay, FAQ, planner options) |
| `data/*.ts` | Seed content: 12 destinations, 13 experiences, 8 tours, 8 stays, 11 FAQs, planner options; `data/legal.ts` holds the privacy policy, booking terms and cookie policy (en/fr/de/es) |
| `data/images.ts` | Image catalog. Swap any `src` to replace photography site-wide |
| `content/blog/*.mdx` | Blog posts (frontmatter + Markdown) |
| `app/` | Routes. Index and `[slug]` pages are generated from `/data` |
| `app/api/plan` | Trip planner endpoint: validates, logs the payload, `TODO` for email/CRM |
| `app/api/newsletter`, `app/api/contact` | Guide signup and contact form endpoints (log + `TODO`) |
| `components/` | `layout/` (header, footer, logo, currency switcher), `home/` sections, `cards/`, `detail/` page templates, `planner/`, `ui/` primitives |

### Before launch

- Confirm the business address in `config/site.ts` (owner's fix list asks for a premium coworking address in Guatemala City; not yet verified). By the owner's decision (October 2026) there is no phone, WhatsApp, social links or testimonials; `/testimonials` redirects to `/about`.
- Set `NEXT_PUBLIC_SITE_URL` for canonical URLs, the sitemap and OG tags
- Wire the `TODO`s in `app/api/*` to your email provider and CRM
- Update currency rates in `config/site.ts`, or swap `lib/currency.ts` for a live rates API
- Have a lawyer review the privacy policy, booking terms and cookie policy (`data/legal.ts`)

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
