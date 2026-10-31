# Antigua & Beyond

Marketing site for **Antigua & Beyond**, a tailor-made Guatemala travel company. Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

The layout, grid system and interaction patterns follow the structure of the reference template (hairline-framed grids, oversized tight headings, "+ link" navigation, image-led cards, split-text reveals). All code, copy and branding are original, and imagery is placeholder stock photography until the owner supplies photos.

## Languages

The site is in English, French, German and Spanish. English lives at the plain URLs (`/tours`), the others under `/fr`, `/de` and `/es` (`middleware.ts` rewrites plain URLs to the `en` tree and redirects `/en/...` back). A language selector (EN · FR · DE · ES) sits in the header and the mobile menu, and every page sets canonical and `hreflang` alternates for all four.

- UI text and content from `/data` are translated through dictionaries keyed by the English text (`i18n/fr.json`, `de.json`, `es.json`). Server components call `t()` / `tf()` (with `{placeholders}`) and pages run content through the `localized` getters in `lib/content.ts`; client components use `useT()`. A value of `"="` keeps the English (proper names).
- A string with no translation fails the build, so no page ships half in English. When you add or change copy, run `I18N_COLLECT=/tmp/missing.txt npm run build` to list the new strings, add them to the three dictionaries, then build normally. `I18N_PSEUDO=1` brackets untranslated strings in the output for a visual check.
- Strings used by `"use client"` components are collected into `i18n/client-keys.json` by `npm run i18n:keys` (runs automatically before `dev` and `build`); wrap module-level labels in `msg()` so the script finds them.
- Legal pages are written per language in `data/legal.ts`; blog posts per language in `content/blog/{fr,de,es}/`.

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

## Cloudflare Workers (OpenNext)

The site can also run on Cloudflare Workers through the [OpenNext adapter](https://opennext.js.org/cloudflare) (`@opennextjs/cloudflare`). This is additive: Vercel still runs `npm run build` and ignores the Cloudflare files.

```bash
npm run cf-build   # npm run build (i18n script + next build), OpenNext bundle, prerendered pages copied into the assets
npx wrangler dev   # serve the Worker locally on http://localhost:8787
npm run preview    # cf-build, then OpenNext's local preview
npm run deploy     # cf-build, then deploy the Worker (needs a Cloudflare login; not done yet)
```

- `wrangler.jsonc`: Worker `guatemala`, `nodejs_compat`, static assets from `.open-next/assets` and the `IMAGES` binding (Cloudflare Images) for `next/image` optimisation.
- `open-next.config.ts`: prerendered pages are served read-only from Workers static assets (`static-assets-incremental-cache`). The site has no ISR, and pages that read `content/` with `node:fs` must come from the build because the filesystem is not available at request time on Workers. That is why `cf-build` also runs `opennextjs-cloudflare populateCache local`.
- `cloudflare/_headers` is copied into the assets on `cf-build`: it gives `/_next/static/*` the same year-long immutable cache as on Vercel. Redirects come from `next.config.ts`, which OpenNext applies.
- Secrets: `npx wrangler secret put <NAME>` (`RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, `EMAIL_FROM`), or a local `.dev.vars` file for `wrangler dev`. `NEXT_PUBLIC_*` values are inlined at build time, so set them in the build environment.

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
| `content/blog/*.mdx` | Blog posts (frontmatter + Markdown); translations in `content/blog/{fr,de,es}/` with the same file names |
| `app/[locale]/` | Routes, one tree per language. Index and `[slug]` pages are generated from `/data` |
| `i18n/` | Languages: `locales.ts`, server `t()`/`tr()`, client `useT()`, dictionaries `fr.json`, `de.json`, `es.json` |
| `app/api/plan` | Trip planner endpoint: validates, logs the payload, `TODO` for email/CRM |
| `app/api/newsletter`, `app/api/contact` | Guide signup and contact form endpoints (log + `TODO`) |
| `components/` | `layout/` (header, footer, logo, currency switcher), `home/` sections, `cards/`, `detail/` page templates, `planner/`, `ui/` primitives |

### Before launch

- Confirm the business address in `config/site.ts` (owner's fix list asks for a premium coworking address in Guatemala City; not yet verified). By the owner's decision (October 2026) there is no phone, WhatsApp, social links or testimonials; `/testimonials` redirects to `/about`.
- Set `NEXT_PUBLIC_SITE_URL` for canonical URLs, the sitemap and OG tags
- Wire the `TODO`s in `app/api/*` to your email provider and CRM
- Update currency rates in `config/site.ts`, or swap `lib/currency.ts` for a live rates API
- Have a lawyer review the privacy policy, booking terms and cookie policy (`data/legal.ts`) in all four languages
- Have a native speaker proofread the French, German and Spanish copy (`i18n/*.json`, `content/blog/{fr,de,es}/`)
- The eight stays in `data/stays.ts` are illustrative properties; replace them with the real partner hotels before launch

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
