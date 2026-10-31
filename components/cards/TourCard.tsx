"use client";

import { useT, useTf } from "@/i18n/client";
import Image from "next/image";
import Link from "@/i18n/Link";
import type { Tour } from "@/data/types";
import { regionLabels } from "@/config/site";
import { Price } from "@/components/ui/Price";
import { Arrow } from "@/components/ui/Button";
import { IconCheck, IconClock, IconPin } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { LinedGrid } from "@/components/ui/LinedGrid";

/**
 * Two-column bordered cell (text left, portrait image right) — the reference's
 * featured-listing card, re-built for tailor-made tours.
 */
export function TourCard({ tour, className, priority }: { tour: Tour; className?: string; priority?: boolean }) {
  const t = useT();
  const tf = useTf();
  const regions = tour.regions.map((r) => t(regionLabels[r])).join(" · ");
  return (
    <article className={cn("group relative grid gap-6 p-5 md:p-10 lg:grid-cols-[1fr_minmax(0,18.75rem)] lg:gap-10", className)}>
      <Link href={`/tours/${tour.slug}`} className="relative order-first block aspect-[335/322] overflow-hidden lg:order-last lg:aspect-auto lg:h-[20.125rem]" tabIndex={-1} aria-hidden>
        <Image
          src={tour.image.src}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 300px, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
        />
        <span className="t-eyebrow absolute left-3 top-3 bg-ink/70 px-2.5 py-1.5 text-bone backdrop-blur">{tf("{n} days", { n: tour.days })}</span>
      </Link>

      <div className="flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-3">
          <p className="t-xs flex flex-wrap items-center gap-x-4 gap-y-1 text-mute">
            <span className="inline-flex items-center gap-1.5"><IconClock /> {tf("{days} days, {nights} nights", { days: tour.days, nights: tour.nights })}</span>
            <span className="inline-flex items-center gap-1.5"><IconPin /> {regions}</span>
          </p>
          <h3 className="t-h4">
            <Link href={`/tours/${tour.slug}`} className="after:absolute after:inset-0 after:content-['']">
              {tour.title}
            </Link>
          </h3>
          <p className="t-xs text-jade-light">{tour.inclusionLine}</p>
          <ul className="mt-2 flex flex-col gap-2">
            {tour.highlights.slice(0, 4).map((h) => (
              <li key={h} className="t-md flex gap-2 font-normal text-mute">
                <IconCheck className="mt-1 size-3.5 shrink-0 text-adobe" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 border-t border-line pt-5">
          <div className="flex flex-col gap-1">
            <p className="flex items-baseline gap-1.5">
              <span className="t-md text-mute">{t("From")}</span>
              <Price usd={tour.priceFrom} className="t-h4" />
              <span className="t-md text-mute">{t("per person")}</span>
            </p>
            <p className="t-xs text-faint">
              ≈ <Price usd={tour.priceFrom * 2} /> {t("for two · international flights excluded")}
            </p>
          </div>
          <span className="group/btn t-btn relative z-10 inline-flex items-center gap-2 self-start text-bone transition-colors group-hover:text-adobe">
            {t("View tour")} <Arrow />
          </span>
        </div>
      </div>
    </article>
  );
}

/** Bordered 2-up grid (reference uses hairline dividers between cells). */
export function TourGrid({ tours, className }: { tours: Tour[]; className?: string }) {
  return (
    <LinedGrid className={cn("lg:grid-cols-2", className)}>
      {tours.map((t, i) => (
        <TourCard key={t.slug} tour={t} priority={i < 2} />
      ))}
    </LinedGrid>
  );
}
