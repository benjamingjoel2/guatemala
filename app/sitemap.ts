import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { tours } from "@/data/tours";
import { stays } from "@/data/stays";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const statics = ["", "/destinations", "/tours", "/experiences", "/stays", "/about", "/testimonials", "/faq", "/contact", "/blog", "/plan-your-trip", "/terms", "/privacy"];
  return [
    ...statics.map((p) => ({ url: `${site.url}${p}`, lastModified: now, priority: p === "" ? 1 : 0.7 })),
    ...destinations.map((d) => ({ url: `${site.url}/destinations/${d.slug}`, lastModified: now, priority: 0.8 })),
    ...tours.map((t) => ({ url: `${site.url}/tours/${t.slug}`, lastModified: now, priority: 0.8 })),
    ...experiences.map((e) => ({ url: `${site.url}/experiences/${e.slug}`, lastModified: now, priority: 0.7 })),
    ...stays.map((s) => ({ url: `${site.url}/stays/${s.slug}`, lastModified: now, priority: 0.6 })),
    ...getAllPosts().map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.date), priority: 0.6 })),
  ];
}
