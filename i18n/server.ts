// Server-side translation. Pages call setLocale() with their [locale] param; every
// server component below can then call t() for UI text and tr() for content objects.
// Dictionaries are keyed by the English text (src/i18n/{fr,de,es}.json; "=" keeps the
// English). A missing translation fails the build, so no page ships half in English.
import { appendFileSync } from "node:fs";
import { cache } from "react";
import de from "./de.json";
import es from "./es.json";
import fr from "./fr.json";
import clientKeys from "./client-keys.json";
import { defaultLocale, isLocale, type Locale } from "./locales";

const dicts: Record<Exclude<Locale, "en">, Record<string, string>> = { fr, de, es };
// Already-translated values pass through unchanged, so t() can safely run twice.
const values = Object.fromEntries(Object.entries(dicts).map(([l, d]) => [l, new Set(Object.values(d))])) as Record<Exclude<Locale, "en">, Set<string>>;

const store = cache(() => ({ locale: defaultLocale as Locale }));

export function setLocale(locale: string) {
  store().locale = isLocale(locale) ? locale : defaultLocale;
}
export function getLocale(): Locale {
  return forced ?? store().locale;
}

// For synchronous work outside React rendering (route handlers), where cache() has no request scope.
let forced: Locale | null = null;
export function withLocale<T>(locale: string, fn: () => T): T {
  const prev = forced;
  forced = isLocale(locale) ? locale : defaultLocale;
  try {
    return fn();
  } finally {
    forced = prev;
  }
}

const HAS_WORD = /\p{L}{2,}/u;

export function translate(locale: Locale, s: string): string {
  if (locale === "en" || !HAS_WORD.test(s)) return s;
  const v = dicts[locale][s];
  if (v === "=") return s;
  if (v) return v;
  if (values[locale].has(s)) return s;
  if (process.env.I18N_COLLECT) {
    appendFileSync(process.env.I18N_COLLECT, JSON.stringify(s) + "\n");
    // I18N_PSEUDO=1 brackets every translated string, so untranslated copy stands out in the built pages.
    return process.env.I18N_PSEUDO ? `‹${s}›` : s;
  }
  throw new Error(`Missing ${locale} translation for: ${JSON.stringify(s)} (add it to src/i18n/${locale}.json)`);
}

/** Mark text that is already in the page's language (e.g. per-locale legal copy) so t() passes it through. */
export function trusted<T extends string>(...strings: T[]): void {
  const locale = getLocale();
  if (locale !== "en") strings.forEach((x) => values[locale].add(x));
}

/** Translate a UI string into the current page's language. */
export function t(s: string): string {
  return translate(getLocale(), s);
}

/** Like t(), with {name} placeholders filled after translating the template. */
export function tf(s: string, vars: Record<string, string | number>): string {
  const out = Object.entries(vars).reduce((acc, [k, v]) => acc.replaceAll(`{${k}}`, String(v)), t(s));
  // Remember the result, so a component that translates its props again lets it through.
  const locale = getLocale();
  if (locale !== "en") values[locale].add(out);
  return out;
}

// Fields that hold slugs, keys or URLs rather than reader-facing text.
const SKIP = new Set(["slug", "href", "src", "id", "month", "rating", "date", "currency", "code", "region", "regions", "destinations", "destination", "experiences", "tours", "stays", "budget", "staySlug", "stay", "key", "icon", "coords", "lat", "lng", "destinationSlugs", "destinationSlug", "perDay"]);

/** Deep-translate a content object (journeys, destinations, articles…). */
export function tr<T>(value: T): T {
  const locale = getLocale();
  if (locale === "en") return value;
  const walk = (v: unknown, key?: string): unknown => {
    if (key && SKIP.has(key)) return v;
    if (typeof v === "string") return translate(locale, v);
    if (Array.isArray(v)) return v.map((x) => walk(x));
    if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x, k)]));
    return v;
  };
  return walk(value) as T;
}

/** The subset of the dictionary that client components need (i18n/client-keys.json). */
export function clientMessages(keys: readonly string[] = clientKeys): Record<string, string> {
  const locale = getLocale();
  if (locale === "en") return {};
  return Object.fromEntries(keys.map((k) => [k, translate(locale, k)]));
}
