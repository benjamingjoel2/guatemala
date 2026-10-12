import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import { img } from "@/data/images";
import type { Region } from "@/data/types";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitHeading, Stagger, StaggerItem } from "@/components/ui/motion";

const groups: { title: string; regions: Region[]; image: { src: string; alt: string } }[] = [
  { title: "Highlands & lakes", regions: ["atitlan", "highlands"], image: img.atitlanFlowers },
  { title: "Volcanoes & Antigua", regions: ["antigua"], image: img.fuegoNight },
  { title: "Jungle, rivers & coasts", regions: ["peten", "verapaces", "caribbean", "pacific"], image: img.tikalTemple },
];

export function RegionsShowcase() {
  return (
    <section className="gutter section-pad" aria-labelledby="regions-title">
      <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div className="flex max-w-3xl flex-col gap-4">
          <Eyebrow>Guatemala, region by region</Eyebrow>
          <SplitHeading id="regions-title" text="Seven regions, one specialist who knows every road." className="t-h2" />
        </div>
        <Link href="/destinations" className="group/plus t-h4 inline-flex items-baseline gap-1 text-mute transition-colors hover:text-bone">
          <span aria-hidden className="inline-block text-terra transition-transform duration-300 group-hover/plus:rotate-90">+</span>
          See for yourself
        </Link>
      </div>
      <div className="overflow-hidden border-y border-line -mx-5 md:-mx-10">
        <Stagger className="-mr-px flex snap-x snap-mandatory overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible">
          {groups.map((g) => {
            const count = destinations.filter((d) => g.regions.includes(d.region)).length;
            return (
              <StaggerItem key={g.title} className="group relative w-[85%] shrink-0 snap-start border-r border-line p-5 md:w-auto md:p-10">
                <div className="mb-4 flex items-baseline justify-between overflow-hidden">
                  <h3 className="t-lg font-semibold">
                    <Link href="/destinations" className="after:absolute after:inset-0 after:content-['']">{g.title}</Link>
                  </h3>
                  <span className="t-md text-mute">/ {count} destinations</span>
                </div>
                <div className="relative aspect-[400/437] overflow-hidden">
                  <Image src={g.image.src} alt={g.image.alt} fill sizes="(min-width: 768px) 33vw, 85vw" className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]" />
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
