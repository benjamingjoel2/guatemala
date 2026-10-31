import type { Metadata } from "next";
import { contact, site } from "@/config/site";
import { img } from "@/data/images";
import { getLocale, t } from "@/i18n/server";
import { locales, localizeHref, ogLocales } from "@/i18n/locales";

/** Canonical + hreflang alternates (en, fr, de, es, x-default) for a path in the current locale. */
export function languageAlternates(path: string) {
  const locale = getLocale();
  return {
    canonical: localizeHref(locale, path),
    languages: { ...Object.fromEntries(locales.map((l) => [l, localizeHref(l, path)])), "x-default": path },
  };
}

const BRAND_SUFFIX = ` · ${site.name}`;
/** Google shows roughly 60 characters of a title and 155–160 of a description. */
const MAX_TITLE = 60;
const MAX_DESC = 158;

/** Trim to a word boundary so search snippets don't get cut mid-word. */
export function clampDescription(text: string, max = MAX_DESC) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s–-]+$/, "") + "…";
}

export const defaultOgImage = img.antiguaStreetAgua.src;

/** Build consistent per-page metadata (title template is set in app/layout.tsx). */
export function pageMeta({
  title,
  description,
  path,
  image = defaultOgImage,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  title = t(title);
  description = t(description);
  const localPath = localizeHref(getLocale(), path);
  const url = `${site.url}${localPath === "/" ? "" : localPath}`;
  const desc = clampDescription(description);
  const images = [{ url: `${image}&w=1200&h=630`, width: 1200, height: 630, alt: title }];
  // Keep the brand suffix only when the full title still fits in search results
  const fullTitle = title.length + BRAND_SUFFIX.length <= MAX_TITLE ? `${title}${BRAND_SUFFIX}` : title;
  return {
    title: { absolute: fullTitle },
    description: desc,
    alternates: languageAlternates(path),
    openGraph: { title: fullTitle, description: desc, url, siteName: site.name, type, images, locale: ogLocales[getLocale()] },
    twitter: { card: "summary_large_image", title: fullTitle, description: desc, images: images.map((i) => i.url) },
  };
}

/** Organisation schema shared by the layout. */
export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  image: defaultOgImage,
  description: t(site.description),
  foundingDate: String(site.foundedYear),
  email: contact.email,
  areaServed: { "@type": "Country", name: "Guatemala" },
  address: { "@type": "PostalAddress", addressLocality: "Antigua Guatemala", addressRegion: "Sacatepéquez", addressCountry: "GT" },
});

export const websiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  inLanguage: getLocale(),
  publisher: { "@id": `${site.url}/#organization` },
});

/** Render a JSON-LD block. */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
