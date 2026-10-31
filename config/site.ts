import { msg } from "@/i18n/locales";
/**
 * Single source of truth for brand, contact details, currencies and navigation.
 */

export const site = {
  name: "Antigua & Beyond",
  shortName: "A&B",
  tagline: "Tailor-made Guatemala, from Antigua to the jungle",
  description:
    "Tailor-made Guatemala trips with one dedicated local specialist, from the first message to the day you fly home. Antigua, Lake Atitlán, the volcanoes, the highlands and the Maya cities of Petén.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://antiguaandbeyond.tourground.com",
  locale: "en_US",
  foundedYear: 2012,
};

export const contact = {
  email: "antiguaandbeyond@tourground.com",
  address: "5a Avenida Norte, Antigua Guatemala, Sacatepéquez, Guatemala",
  hours: "Mon–Sat · 8:00–18:00 (GMT-6) · 24/7 support while you travel",
};

/** mailto: link to the team inbox with an optional pre-filled subject. */
export const mailtoHref = (subject?: string) =>
  `mailto:${contact.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

/** Brand palette — mirrored as CSS variables in app/globals.css (light theme, dark photo bands + footer) */
export const colors = {
  background: "#f7f3ec",
  surface: "#efe8dd",
  text: "#161a18",
  charcoal: "#111413",
  charcoalSoft: "#1a1e1c",
  jade: "#2f7d6a",
  jadeLight: "#86c9b2",
  terracotta: "#a94e2f",
  terracottaDark: "#8c3f24",
  terracottaLight: "#c8623e",
  adobe: "#d9a47c",
  offWhite: "#f3eee6",
  ember: ["#f2b38c", "#e48a5a", "#c8623e", "#a94e2f", "#8c3f24", "#6b2e18"],
  huipil: ["#b8336a", "#2d3f8f", "#e3a72f", "#2f7d6a"],
};

export type CurrencyCode = "USD" | "EUR" | "GBP" | "CAD" | "GTQ";

/**
 * Static conversion rates from base USD. Update periodically, or replace with
 * a live rates API in lib/currency.ts.
 */
export const currencies: Record<
  CurrencyCode,
  { code: CurrencyCode; symbol: string; label: string; rate: number; locale: string }
> = {
  USD: { code: "USD", symbol: "$", label: msg("US Dollar"), rate: 1, locale: "en-US" },
  EUR: { code: "EUR", symbol: "€", label: msg("Euro"), rate: 0.92, locale: "de-DE" },
  GBP: { code: "GBP", symbol: "£", label: msg("British Pound"), rate: 0.79, locale: "en-GB" },
  CAD: { code: "CAD", symbol: "CA$", label: msg("Canadian Dollar"), rate: 1.37, locale: "en-CA" },
  GTQ: { code: "GTQ", symbol: "Q", label: msg("Guatemalan Quetzal"), rate: 7.75, locale: "es-GT" },
};

export const defaultCurrency: CurrencyCode = "USD";

export const mainNav = [
  { label: msg("Destinations"), href: "/destinations" },
  { label: msg("Tours"), href: "/tours" },
  { label: msg("Experiences"), href: "/experiences" },
  { label: msg("About"), href: "/about" },
  { label: msg("Blog"), href: "/blog" },
  { label: msg("Contact"), href: "/contact" },
];

export const footerNav = {
  explore: [
    { label: msg("Destinations"), href: "/destinations" },
    { label: msg("Tours"), href: "/tours" },
    { label: msg("Experiences"), href: "/experiences" },
    { label: msg("Plan your trip"), href: "/plan-your-trip" },
  ],
  company: [
    { label: msg("About us"), href: "/about" },
    { label: msg("Journal"), href: "/blog" },
    { label: msg("FAQ"), href: "/faq" },
    { label: msg("Contact"), href: "/contact" },
  ],
  legal: [
    { label: msg("Privacy policy"), href: "/privacy" },
    { label: msg("Booking terms"), href: "/terms" },
    { label: msg("Cookie policy"), href: "/cookies" },
  ],
};

export const regionLabels: Record<string, string> = {
  antigua: msg("Antigua"),
  highlands: msg("Western Highlands"),
  atitlan: msg("Lake Atitlán"),
  peten: msg("Petén"),
  verapaces: msg("Las Verapaces"),
  caribbean: msg("Caribbean coast"),
  pacific: msg("Pacific coast"),
};
