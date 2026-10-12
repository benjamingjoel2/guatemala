import { getAllPosts } from "@/lib/posts";
import { img } from "@/data/images";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/detail/PageHeader";
import { PostCard } from "@/components/cards/PostCard";
import { LinedGrid } from "@/components/ui/LinedGrid";
import { GuideSignup } from "@/components/home/GuideSignup";

export const metadata = pageMeta({
  title: "The Journal: Guatemala travel guides",
  description: "Guatemala travel advice from our Antigua-based specialists: where to go, when to visit, how to hike Acatenango and where to stay.",
  path: "/blog",
  image: img.antiguaArchAgua.src,
});

export default function BlogPage() {
  const [lead, ...rest] = getAllPosts();
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Journal" }]}
        eyebrow="The Journal"
        title="Guatemala, from the inside"
        intro="Honest, detailed advice from the people who plan Guatemala trips every day. No listicles, no fluff."
      />
      <section className="gutter pb-10" aria-label="Articles">
        {lead && (
          <LinedGrid>
            <PostCard post={lead} large />
          </LinedGrid>
        )}
        <LinedGrid className="sm:grid-cols-2 lg:grid-cols-3" bleed>
          {rest.map((p) => <PostCard key={p.slug} post={p} />)}
        </LinedGrid>
      </section>
      <GuideSignup />
    </>
  );
}
