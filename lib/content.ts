import { destinations as rawDestinations } from "@/data/destinations";
import { experiences as rawExperiences } from "@/data/experiences";
import { tours as rawTours } from "@/data/tours";
import { stays as rawStays } from "@/data/stays";
import { faqs as rawFaqs } from "@/data/faqs";
import { getLocale, tr } from "@/i18n/server";
import type { Locale } from "@/i18n/locales";

/**
 * Content in the current page's language. Each export reads like the plain data, but a property
 * access returns the copy translated into the locale set by the page (setLocale), via the
 * dictionaries in i18n/*.json. Slugs and other identifiers are left untouched.
 */
export function localized<T extends object>(raw: T): T {
  const cache = new Map<Locale, T>();
  return new Proxy(raw, {
    get(target, key) {
      const l = getLocale();
      let v = target;
      if (l !== "en") {
        v = cache.get(l) as T;
        if (!v) cache.set(l, (v = tr(target)));
      }
      const r = Reflect.get(v, key);
      return typeof r === "function" ? r.bind(v) : r;
    },
  });
}

export const destinations = localized(rawDestinations);
export const experiences = localized(rawExperiences);
export const tours = localized(rawTours);
export const stays = localized(rawStays);
export const faqs = localized(rawFaqs);

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
export const getExperience = (slug: string) => experiences.find((e) => e.slug === slug);
export const getTour = (slug: string) => tours.find((t) => t.slug === slug);
export const getStay = (slug: string) => stays.find((s) => s.slug === slug);
