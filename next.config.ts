import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=1 builds a fully static preview (e.g. for GitHub Pages):
 * no API routes, images served straight from the Unsplash CDN, optional base path.
 */
const isStatic = process.env.STATIC_EXPORT === "1";
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = isStatic
  ? {
      output: "export",
      basePath,
      trailingSlash: true,
      images: { loader: "custom", loaderFile: "./lib/image-loader.ts" },
    }
  : {
      images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
      },
    };

export default nextConfig;
