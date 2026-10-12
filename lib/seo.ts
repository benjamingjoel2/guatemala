import type { Metadata } from "next";
import { site } from "@/config/site";

/** Build consistent per-page metadata (title template is set in app/layout.tsx). */
export function pageMeta({
  title,
  description,
  path,
  image,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${site.url}${path}`;
  const images = image ? [{ url: `${image}&w=1200&h=630`, width: 1200, height: 630 }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url, siteName: site.name, type, images, locale: site.locale },
    twitter: { card: "summary_large_image", title, description, images: images?.map((i) => i.url) },
  };
}
