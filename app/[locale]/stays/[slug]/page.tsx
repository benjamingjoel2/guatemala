import { getDestination, getStay, stays, tours } from "@/lib/content";
import { setLocale, t as tx, tf } from "@/i18n/server";
import { notFound } from "next/navigation";
import Link from "@/i18n/Link";
import { mailtoHref } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitHeading, Reveal } from "@/components/ui/motion";
import { Gallery } from "@/components/detail/Gallery";
import { DetailSection, CheckList } from "@/components/detail/DetailSection";
import { SideCard, MetaRow } from "@/components/detail/SideCard";
import { RelatedStays, RelatedTours } from "@/components/detail/Related";
import { PlanButton } from "@/components/ui/PlanButton";
import { ButtonLink } from "@/components/ui/Button";
import { Price } from "@/components/ui/Price";
import { FinalCta } from "@/components/home/FinalCta";
import { IconBed, IconPin } from "@/components/ui/icons";

export function generateStaticParams() {
  return stays.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  setLocale((await params).locale);
  const { slug } = await params;
  const s = getStay(slug);
  if (!s) return {};
  return pageMeta({ title: tf("{name}, {type}", { name: s.name, type: s.type }), description: s.excerpt, path: `/stays/${s.slug}`, image: s.image.src });
}

export default async function StayPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  setLocale((await params).locale);
  const { slug } = await params;
  const s = getStay(slug);
  if (!s) notFound();
  const dest = getDestination(s.destinationSlug);
  const others = stays.filter((x) => x.slug !== s.slug).sort((a, b) => Number(b.destinationSlug === s.destinationSlug) - Number(a.destinationSlug === s.destinationSlug)).slice(0, 2);
  const relatedTours = tours.filter((t) => t.destinationSlugs.includes(s.destinationSlug));

  return (
    <>
      <div className="gutter pt-[4.5rem]">
        <div className="flex flex-col gap-6 pb-10 pt-10 md:pt-14">
          <Breadcrumbs items={[{ label: tx("Stays"), href: "/stays" }, { label: s.name }]} />
          <Eyebrow>{s.type} · {s.location}</Eyebrow>
          <SplitHeading as="h1" text={s.name} className="t-h1 max-w-5xl" immediate />
          <Reveal delay={0.3}><p className="t-xl max-w-3xl text-bone/80">{s.excerpt}</p></Reveal>
        </div>
        <Gallery images={[s.image, ...s.gallery.filter((g) => g.src !== s.image.src)]} />

        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-16">
          <div>
            <DetailSection id="about" title={tx("About the stay")}>
              <div className="flex flex-col gap-5">
                {s.description.map((p, i) => (
                  <p key={i} className={i === 0 ? "t-xl text-bone/90" : "t-md font-normal leading-relaxed text-bone/75"}>{p}</p>
                ))}
              </div>
            </DetailSection>
            <DetailSection id="why" title={tx("Why we love it")}>
              <ol className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
                {s.whyWeLoveIt.map((w, i) => (
                  <li key={w} className="flex flex-col gap-3 bg-ink p-6">
                    <span className="t-xs text-adobe">{String(i + 1).padStart(2, "0")}</span>
                    <p className="t-md font-normal">{w}</p>
                  </li>
                ))}
              </ol>
            </DetailSection>
            <DetailSection id="amenities" title={tx("Amenities")} className="border-b-0">
              <CheckList items={s.amenities} />
              {dest && (
                <p className="t-md mt-8 text-mute">
                  {tx("Exploring the area? Read our")} <Link href={`/destinations/${dest.slug}`} className="text-bone underline underline-offset-4 hover:text-adobe">{dest.name} guide</Link>.
                </p>
              )}
            </DetailSection>
          </div>
          <div className="pb-10 lg:pt-14">
            <SideCard>
              <div className="flex flex-col gap-1">
                <span className="t-xl text-mute">{tx("from")}</span>
                <Price usd={s.priceFrom} className="t-h3" />
                <span className="t-xs text-faint">{tx("per person · night, two sharing")}</span>
              </div>
              <div className="flex flex-col gap-3">
                <MetaRow icon={<IconPin />} label={tx("Location")} value={<span className="t-xs">{s.location}</span>} />
                <MetaRow icon={<IconBed />} label={tx("Rooms")} value={s.rooms} />
                <MetaRow label={tx("Type")} value={<span className="t-xs">{s.type}</span>} />
              </div>
              <div className="flex flex-col gap-2">
                <PlanButton className="w-full">{tx("Include in my trip")}</PlanButton>
                <ButtonLink href={mailtoHref(`Staying at ${s.name}`)} variant="outline" className="w-full">{tx("Email us")}</ButtonLink>
              </div>
              <p className="t-xs text-faint">{tx("We book stays as part of tailor-made trips only.")}</p>
            </SideCard>
          </div>
        </div>
      </div>
      <section className="gutter section-pad" aria-labelledby="other-stays">
        <h2 id="other-stays" className="t-h2 mb-10">{tx("Other stays we love")}</h2>
        <RelatedStays stays={others} />
      </section>
      <RelatedTours tours={relatedTours} />
      <FinalCta />
    </>
  );
}
