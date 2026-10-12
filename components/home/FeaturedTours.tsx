import { tours } from "@/data/tours";
import { SectionHead } from "@/components/ui/SectionHead";
import { ButtonLink } from "@/components/ui/Button";
import { TourGrid } from "@/components/cards/TourCard";

export function FeaturedTours() {
  const featured = tours.filter((t) => t.featured).slice(0, 4);
  return (
    <section className="gutter section-pad" aria-label="Featured tours">
      <SectionHead
        eyebrow="Signature journeys"
        title="Featured tours"
        text="Starting points, not set menus. Every route below is private and fully adjustable: change the pace, the hotels or the order, and your specialist rebuilds it around you."
        action={<ButtonLink href="/tours" variant="outline">See all tours</ButtonLink>}
        className="mb-10 md:mb-14"
      />
      <TourGrid tours={featured} />
    </section>
  );
}
