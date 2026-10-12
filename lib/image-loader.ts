import type { ImageLoaderProps } from "next/image";

/** Used for the static export: ask Unsplash's CDN for a correctly sized image. */
export default function unsplashLoader({ src, width, quality }: ImageLoaderProps) {
  if (!src.includes("images.unsplash.com")) return src;
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 75));
  url.searchParams.set("auto", "format");
  return url.toString();
}
