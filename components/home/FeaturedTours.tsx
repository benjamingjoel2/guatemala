import { t as tx } from "@/i18n/server";
import { tours } from "@/lib/content";
import { SectionHead } from "@/components/ui/SectionHead";
import { ButtonLink } from "@/components/ui/Button";
import { TourGrid } from "@/components/cards/TourCard";

export function FeaturedTours() {
  const featured = tours.filter((t) => t.featured).slice(0, 4);
  return (
    <section className="gutter section-pad" aria-label={tx("Featured tours")}>
      <SectionHead
        eyebrow={tx("Signature journeys")}
        title={tx("Featured tours")}
        text={tx("Starting points, not set menus. Every route below is private and fully adjustable: change the pace, the hotels or the order, and your specialist rebuilds it around you.")}
        action={<ButtonLink href="/tours" variant="outline">{tx("See all tours")}</ButtonLink>}
        className="mb-10 md:mb-14"
      />
      <TourGrid tours={featured} />
    </section>
  );
}
