import { setLocale, t, getLocale } from "@/i18n/server";
import { getAllPosts } from "@/lib/posts";
import { img } from "@/data/images";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/detail/PageHeader";
import { PostCard } from "@/components/cards/PostCard";
import { LinedGrid } from "@/components/ui/LinedGrid";
import { GuideSignup } from "@/components/home/GuideSignup";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return pageMeta({
    title: t("The Journal: Guatemala travel guides"),
    description: t("Guatemala travel advice from our Antigua-based specialists: where to go, when to visit, how to hike Acatenango and where to stay."),
    path: "/blog",
    image: img.antiguaArchAgua.src,
  });
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  const [lead, ...rest] = getAllPosts(getLocale());
  return (
    <>
      <PageHeader
        crumbs={[{ label: t("Journal") }]}
        eyebrow={t("The Journal")}
        title={t("Guatemala, from the inside")}
        intro={t("Honest, detailed advice from the people who plan Guatemala trips every day. No listicles, no fluff.")}
      />
      <section className="gutter pb-10" aria-label={t("Articles")}>
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
