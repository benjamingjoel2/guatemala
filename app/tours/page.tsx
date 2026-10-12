import { tours } from "@/data/tours";
import { img } from "@/data/images";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/detail/PageHeader";
import { ToursExplorer } from "@/components/detail/ToursExplorer";
import { FinalCta } from "@/components/home/FinalCta";
import { GuideSignup } from "@/components/home/GuideSignup";

export const metadata = pageMeta({
  title: "Guatemala tours",
  description:
    "Private, tailor-made Guatemala tours from 6 to 14 days: Antigua, Lake Atitlán, Tikal, Acatenango, Semuc Champey and the Caribbean coast. Every route fully adjustable.",
  path: "/tours",
  image: img.tikalTemple.src,
});

export default function ToursPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Tours" }]}
        eyebrow="Private · tailor-made · fully adjustable"
        title="Guatemala tours"
        intro="Use these as starting points. Your specialist will adapt the pace, hotels and order around your dates, interests and budget."
      />
      <section className="gutter pb-16" aria-labelledby="all-tours">
        <h2 id="all-tours" className="sr-only">All tours</h2>
        <ToursExplorer tours={tours} />
      </section>
      <GuideSignup compact />
      <FinalCta />
    </>
  );
}
