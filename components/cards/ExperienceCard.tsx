"use client";

import { useT } from "@/i18n/client";
import Image from "next/image";
import Link from "@/i18n/Link";
import type { Experience } from "@/data/types";
import { Price } from "@/components/ui/Price";
import { cn } from "@/lib/utils";

/** Tall image-led card with overlaid title; image zooms and copy lifts on hover. */
export function ExperienceCard({ experience: e, className, size = "md" }: { experience: Experience; className?: string; size?: "md" | "lg" }) {
  const t = useT();
  return (
    <article className={cn("theme-dark group relative overflow-hidden bg-ink-2", size === "lg" ? "aspect-[4/5] md:aspect-auto md:min-h-[34rem]" : "aspect-[4/5]", className)}>
      <Image
        src={e.image.src}
        alt={e.image.alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
        <span className="t-eyebrow bg-bone/10 px-2.5 py-1.5 text-bone backdrop-blur-md">{e.category}</span>
        <span className="t-xs text-bone/80">{e.duration}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 md:p-6">
        <h3 className="t-h4">
          <Link href={`/experiences/${e.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {e.title}
          </Link>
        </h3>
        <p className="t-md max-h-0 overflow-hidden font-normal text-bone/75 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 group-focus-within:max-h-24 group-focus-within:opacity-100">
          {e.tagline}
        </p>
        <p className="t-xs flex items-center justify-between border-t border-bone/20 pt-3 text-bone/80">
          <span>
            {t("From")} <Price usd={e.priceFrom} className="font-semibold text-bone" /> {t("per person")}
          </span>
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </p>
      </div>
    </article>
  );
}
