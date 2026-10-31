export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { tours } from "@/data/tours";
import { stays } from "@/data/stays";
import { getAllPosts } from "@/lib/posts";
import { locales, localizeHref } from "@/i18n/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const statics = ["", "/destinations", "/tours", "/experiences", "/stays", "/about", "/faq", "/contact", "/blog", "/plan-your-trip", "/terms", "/privacy", "/cookies"];
  const abs = (l: (typeof locales)[number], p: string) => `${site.url}${localizeHref(l, p || "/")}`.replace(/\/$/, "");
  // One entry per page per language (en, fr, de, es), each listing its alternates.
  const entry = (p: string, priority: number, lastModified: Date = now): MetadataRoute.Sitemap =>
    locales.map((l) => ({ url: abs(l, p), lastModified, priority, alternates: { languages: Object.fromEntries(locales.map((x) => [x, abs(x, p)])) } }));
  return [
    ...statics.flatMap((p) => entry(p, p === "" ? 1 : 0.7)),
    ...destinations.flatMap((d) => entry(`/destinations/${d.slug}`, 0.8)),
    ...tours.flatMap((t) => entry(`/tours/${t.slug}`, 0.8)),
    ...experiences.flatMap((e) => entry(`/experiences/${e.slug}`, 0.7)),
    ...stays.flatMap((s) => entry(`/stays/${s.slug}`, 0.6)),
    ...getAllPosts().flatMap((p) => entry(`/blog/${p.slug}`, 0.6, new Date(p.date))),
  ];
}
