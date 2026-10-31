import { t, tf } from "@/i18n/server";
import Image from "next/image";
import Link from "@/i18n/Link";
import type { Destination } from "@/data/types";
import { regionLabels } from "@/config/site";
import { cn } from "@/lib/utils";
import { LinedGrid } from "@/components/ui/LinedGrid";

/** Image cell with "Name / meta" head row — the reference's category-stat card. */
export function DestinationCard({ destination: d, className, index }: { destination: Destination; className?: string; index?: number }) {
  return (
    <article className={cn("group relative flex flex-col gap-4 p-5 md:p-8", className)}>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="t-lg font-semibold">
          <Link href={`/destinations/${d.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {d.name}
          </Link>
        </h3>
        <span className="t-md shrink-0 text-mute">/ {index !== undefined ? String(index + 1).padStart(2, "0") : t(regionLabels[d.region])}</span>
      </div>
      <div className="relative aspect-[400/437] overflow-hidden">
        <Image
          src={d.image.src}
          alt={d.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="t-btn absolute bottom-4 left-4 translate-y-2 text-bone opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {tf("Explore {name}", { name: d.name })} →
        </span>
      </div>
      <div className="flex items-start justify-between gap-4">
        <p className="t-md font-normal text-mute">{d.tagline}</p>
        <span className="t-xs shrink-0 text-faint">{t(regionLabels[d.region])}</span>
      </div>
    </article>
  );
}

export function DestinationGrid({ destinations, className, numbered }: { destinations: Destination[]; className?: string; numbered?: boolean }) {
  return (
    <LinedGrid className={cn("sm:grid-cols-2 lg:grid-cols-3", className)}>
      {destinations.map((d, i) => (
        <DestinationCard key={d.slug} destination={d} index={numbered ? i : undefined} />
      ))}
    </LinedGrid>
  );
}
