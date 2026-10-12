import { experiences } from "@/data/experiences";
import { img } from "@/data/images";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/detail/PageHeader";
import { ExperiencesExplorer } from "@/components/detail/ExperiencesExplorer";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata = pageMeta({
  title: "Guatemala experiences",
  description:
    "Acatenango overnight hikes, Tikal at sunrise, Lake Atitlán village hopping, coffee farms, weaving workshops, Semana Santa and more. Private experiences you can add to any trip.",
  path: "/experiences",
  image: img.fuegoNight.src,
});

export default function ExperiencesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Experiences" }]}
        eyebrow={`${experiences.length} experiences`}
        title="Experiences worth crossing an ocean for"
        intro="Private, unhurried and led by the guides we trust most. Add any of these to your trip, or build your whole journey around one."
      />
      <section className="gutter pb-20" aria-labelledby="all-experiences">
        <h2 id="all-experiences" className="sr-only">All experiences</h2>
        <ExperiencesExplorer experiences={experiences} />
      </section>
      <FinalCta />
    </>
  );
}
