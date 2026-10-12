import { testimonials } from "@/data/testimonials";
import { img } from "@/data/images";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/detail/PageHeader";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { LinedGrid } from "@/components/ui/LinedGrid";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata = pageMeta({
  title: "Traveller reviews",
  description: "What travellers say about their tailor-made Guatemala trips with Antigua & Beyond.",
  path: "/testimonials",
  image: img.atitlanFriends.src,
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Testimonials" }]}
        eyebrow="Traveller reviews"
        title="In their own words"
        intro="Every trip is different, so every story is too. (Placeholder reviews shown below: replace with verified reviews before launch.)"
      />
      <section className="gutter pb-20" aria-label="Reviews">
        <LinedGrid className="md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => <TestimonialCard key={t.id} t={t} />)}
        </LinedGrid>
      </section>
      <FinalCta title="Ready to write your own story?" />
    </>
  );
}
