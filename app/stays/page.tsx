import { stays } from "@/data/stays";
import { img } from "@/data/images";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/detail/PageHeader";
import { StayCard } from "@/components/cards/StayCard";
import { LinedGrid } from "@/components/ui/LinedGrid";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata = pageMeta({
  title: "Where to stay in Guatemala",
  description: "Boutique colonial hotels in Antigua, lakeside lodges on Lake Atitlán, jungle lodges near Tikal and coffee finca stays, all personally inspected.",
  path: "/stays",
  image: img.courtyardPool.src,
});

export default function StaysPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Stays" }]}
        eyebrow="Personally inspected"
        title="Places to stay"
        intro="Small, characterful hotels run by people who care. We have slept in every one of them, and we match each to your style and budget."
      />
      <section className="gutter pb-20" aria-labelledby="all-stays">
        <h2 id="all-stays" className="sr-only">All stays</h2>
        <LinedGrid className="sm:grid-cols-2 lg:grid-cols-4">
          {stays.map((s) => <StayCard key={s.slug} stay={s} />)}
        </LinedGrid>
      </section>
      <FinalCta />
    </>
  );
}
