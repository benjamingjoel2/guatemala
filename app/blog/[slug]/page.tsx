import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/posts";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SplitHeading } from "@/components/ui/motion";
import { PostCard, formatDate } from "@/components/cards/PostCard";
import { LinedGrid } from "@/components/ui/LinedGrid";
import { PlanButton } from "@/components/ui/PlanButton";
import { HuipilStripe } from "@/components/ui/HuipilStripe";
import { FinalCta } from "@/components/home/FinalCta";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({ title: post.meta.title, description: post.meta.excerpt, path: `/blog/${slug}`, image: post.meta.image.src, type: "article" });
}

const components = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) =>
    props.href?.startsWith("/") ? <Link href={props.href}>{props.children}</Link> : <a {...props} target="_blank" rel="noopener noreferrer" />,
};

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { meta, content } = post;
  const more = getAllPosts().filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.excerpt,
    datePublished: meta.date,
    dateModified: meta.date,
    image: [`${meta.image.src}&w=1200&h=630`],
    url: `${site.url}/blog/${slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/blog/${slug}` },
    articleSection: meta.category,
    inLanguage: "en",
    author: { "@type": "Organization", name: meta.author, url: site.url },
    publisher: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <header className="gutter pt-[4.5rem]">
          <div className="mx-auto flex max-w-4xl flex-col gap-6 pb-10 pt-10 md:pt-16">
            <Breadcrumbs items={[{ label: "Journal", href: "/blog" }, { label: meta.title }]} />
            <p className="t-xs flex gap-4 text-mute">
              <span className="text-jade-light">{meta.category}</span>
              <time dateTime={meta.date}>{formatDate(meta.date)}</time>
              <span>{meta.readingTime}</span>
            </p>
            <SplitHeading as="h1" text={meta.title} className="t-h1" immediate />
            <p className="t-xl text-bone/80">{meta.excerpt}</p>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden md:aspect-[21/9]">
            <Image src={meta.image.src} alt={meta.image.alt} fill priority sizes="100vw" className="object-cover" />
          </div>
        </header>
        <div className="gutter">
          <div className="mx-auto grid max-w-6xl gap-12 py-14 lg:grid-cols-[1fr_16rem]">
            <div className="prose-ab mx-auto w-full max-w-3xl">
              <MDXRemote source={content} components={components} />
            </div>
            <aside className="hidden lg:block">
              <div className="sticky top-28 flex flex-col gap-5 border border-line-strong bg-ink-2 p-6">
                <HuipilStripe />
                <p className="t-lg">Want this, without the planning?</p>
                <p className="t-xs text-mute">A local specialist will turn these ideas into a private trip around your dates.</p>
                <PlanButton className="w-full">Plan my trip</PlanButton>
              </div>
            </aside>
          </div>
        </div>
      </article>
      <section className="gutter section-pad" aria-labelledby="more-posts">
        <h2 id="more-posts" className="t-h2 mb-10">Keep reading</h2>
        <LinedGrid className="sm:grid-cols-2 lg:grid-cols-3">
          {more.map((p) => <PostCard key={p.slug} post={p} />)}
        </LinedGrid>
      </section>
      <FinalCta />
    </>
  );
}
