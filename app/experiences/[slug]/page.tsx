import { notFound } from "next/navigation";
import Link from "next/link";
import { experiences, getExperience } from "@/data/experiences";
import { destinations } from "@/data/destinations";
import { tours } from "@/data/tours";
import { whatsappHref } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitHeading, Reveal } from "@/components/ui/motion";
import { Gallery } from "@/components/detail/Gallery";
import { InPageNav } from "@/components/detail/InPageNav";
import { DetailSection, CheckList } from "@/components/detail/DetailSection";
import { SideCard, MetaRow } from "@/components/detail/SideCard";
import { RelatedTours } from "@/components/detail/Related";
import { PlanButton } from "@/components/ui/PlanButton";
import { ButtonLink } from "@/components/ui/Button";
import { Price } from "@/components/ui/Price";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { FinalCta } from "@/components/home/FinalCta";
import { IconClock, IconMountain, IconPin } from "@/components/ui/icons";

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getExperience(slug);
  if (!e) return {};
  return pageMeta({ title: `${e.title} in Guatemala`, description: e.excerpt, path: `/experiences/${e.slug}`, image: e.image.src });
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getExperience(slug);
  if (!e) notFound();

  const places = e.destinationSlugs.map((s) => destinations.find((d) => d.slug === s)).filter((d) => d !== undefined);
  const relatedTours = tours.filter((t) => t.destinationSlugs.some((s) => e.destinationSlugs.includes(s)));
  const more = experiences.filter((x) => x.slug !== e.slug && x.category === e.category).concat(experiences.filter((x) => x.slug !== e.slug && x.category !== e.category)).slice(0, 3);

  return (
    <>
      <div className="gutter pt-[4.5rem]">
        <div className="flex flex-col gap-6 pb-10 pt-10 md:pt-14">
          <Breadcrumbs items={[{ label: "Experiences", href: "/experiences" }, { label: e.title }]} />
          <Eyebrow>{e.category} · {e.tagline}</Eyebrow>
          <SplitHeading as="h1" text={e.title} className="t-h1 max-w-5xl" immediate />
          <Reveal delay={0.3}><p className="t-xl max-w-3xl text-bone/80">{e.excerpt}</p></Reveal>
        </div>
        <Gallery images={[e.image, ...e.gallery.filter((g) => g.src !== e.image.src)]} />
        <div className="mt-10">
          <InPageNav items={[{ id: "overview", label: "Overview" }, { id: "included", label: "What's included" }, { id: "good-to-know", label: "Good to know" }]} />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-16">
          <div>
            <DetailSection id="overview" title="The experience">
              <div className="flex flex-col gap-5">
                {e.overview.map((p, i) => (
                  <p key={i} className={i === 0 ? "t-xl text-bone/90" : "t-md font-normal leading-relaxed text-bone/75"}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {e.bestFor.map((b) => (
                  <span key={b} className="t-xs border border-line-strong px-3 py-1.5 text-mute">Best for: {b}</span>
                ))}
              </div>
            </DetailSection>
            <DetailSection id="included" title="What's included">
              <CheckList items={e.includes} />
            </DetailSection>
            <DetailSection id="good-to-know" title="Good to know" className="border-b-0">
              <ul className="flex flex-col gap-4">
                {e.goodToKnow.map((g) => (
                  <li key={g} className="t-md border-l-2 border-jade pl-5 font-normal text-bone/80">{g}</li>
                ))}
              </ul>
              {places.length > 0 && (
                <p className="t-md mt-8 text-mute">
                  Where: {places.map((p, i) => (
                    <span key={p.slug}>
                      <Link href={`/destinations/${p.slug}`} className="text-bone underline underline-offset-4 hover:text-adobe">{p.name}</Link>
                      {i < places.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              )}
            </DetailSection>
          </div>
          <div className="pb-10 lg:pt-14">
            <SideCard>
              <div className="flex flex-col gap-1">
                <span className="t-xl text-mute">from</span>
                <Price usd={e.priceFrom} className="t-h3" />
                <span className="t-xs text-faint">per person · private, with your own guide</span>
              </div>
              <div className="flex flex-col gap-3">
                <MetaRow icon={<IconClock />} label="Duration" value={e.duration} />
                <MetaRow icon={<IconMountain />} label="Difficulty" value={e.difficulty} />
                {places[0] && <MetaRow icon={<IconPin />} label="Where" value={<span className="t-xs">{places.map((p) => p.name).join(", ")}</span>} />}
                {e.season && <MetaRow label="Season" value={<span className="t-xs">{e.season}</span>} />}
              </div>
              <div className="flex flex-col gap-2">
                <PlanButton className="w-full">Add to my trip</PlanButton>
                <ButtonLink href={whatsappHref(`Hi! I'd love to add "${e.title}" to my Guatemala trip.`)} external variant="outline" className="w-full">Ask on WhatsApp</ButtonLink>
              </div>
            </SideCard>
          </div>
        </div>
      </div>

      <section className="gutter section-pad" aria-labelledby="more-exp">
        <h2 id="more-exp" className="t-h2 mb-10">More experiences</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((x) => <ExperienceCard key={x.slug} experience={x} />)}
        </div>
      </section>
      <RelatedTours tours={relatedTours} title="Tours that include this" />
      <FinalCta />
    </>
  );
}
