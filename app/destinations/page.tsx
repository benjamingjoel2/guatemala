import { destinations } from "@/data/destinations";
import { img } from "@/data/images";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/detail/PageHeader";
import { DestinationGrid } from "@/components/cards/DestinationCard";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata = pageMeta({
  title: "Guatemala destinations",
  description:
    "Antigua, Lake Atitlán, Tikal, Semuc Champey, Acatenango and more: twelve Guatemala destinations, how long to stay and when to go, from local specialists.",
  path: "/destinations",
  image: img.atitlanPier.src,
});

export default function DestinationsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Destinations" }]}
        eyebrow={`${destinations.length} destinations · 7 regions`}
        title="Where in Guatemala?"
        intro="Colonial Antigua is where most journeys begin. From there, volcano-ringed lakes, Maya market towns, turquoise jungle pools and the great cities of Petén are all within reach."
      />
      <section className="gutter pb-20" aria-labelledby="all-destinations">
        <h2 id="all-destinations" className="sr-only">All destinations</h2>
        <DestinationGrid destinations={destinations} numbered />
      </section>
      <FinalCta title="Not sure where to start? Ask a local." />
    </>
  );
}
