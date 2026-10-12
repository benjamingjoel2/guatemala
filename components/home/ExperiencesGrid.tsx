import { experiences } from "@/data/experiences";
import { SectionHead } from "@/components/ui/SectionHead";
import { ButtonLink } from "@/components/ui/Button";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Stagger, StaggerItem } from "@/components/ui/motion";

const homeSlugs = [
  "acatenango-overnight-hike",
  "tikal-sunrise",
  "lake-atitlan-village-hopping",
  "semuc-champey-pools-and-caves",
  "chichicastenango-market",
  "coffee-farm-tours",
];

export function ExperiencesGrid() {
  const list = homeSlugs.map((s) => experiences.find((e) => e.slug === s)).filter((e) => e !== undefined);
  return (
    <section className="gutter section-pad" aria-label="Experiences">
      <SectionHead
        eyebrow="Experiences"
        title="Moments you will talk about for years"
        text="Sleep beside an erupting volcano, watch Tikal wake up, learn to weave with a Maya cooperative. Add any of them to your trip."
        action={<ButtonLink href="/experiences" variant="outline">All experiences</ButtonLink>}
        className="mb-10 md:mb-14"
      />
      <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((e) => (
          <StaggerItem key={e.slug}>
            <ExperienceCard experience={e} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
