import { destinations, getTour, stays, tours } from "@/lib/content";
import { setLocale, t as tx, tf } from "@/i18n/server";
import { notFound } from "next/navigation";
import Link from "@/i18n/Link";
import { mailtoHref, regionLabels, site } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { routeForRegions } from "@/lib/routes";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SplitHeading, Reveal } from "@/components/ui/motion";
import { Gallery } from "@/components/detail/Gallery";
import { InPageNav } from "@/components/detail/InPageNav";
import { DetailSection, CheckList } from "@/components/detail/DetailSection";
import { SideCard, MetaRow } from "@/components/detail/SideCard";
import { MapPlaceholder } from "@/components/ui/MapPlaceholder";
import { RelatedStays, RelatedTours } from "@/components/detail/Related";
import { PlanButton } from "@/components/ui/PlanButton";
import { ButtonLink } from "@/components/ui/Button";
import { Price } from "@/components/ui/Price";
import { FinalCta } from "@/components/home/FinalCta";
import { IconClock, IconPin, IconUsers } from "@/components/ui/icons";

const budgetLabel = { comfort: "Comfort", premium: "Premium", ultra: "Ultra luxury" } as const;

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  setLocale((await params).locale);
  const { slug } = await params;
  const t = getTour(slug);
  if (!t) return {};
  return pageMeta({ title: tf("{title}: {days}-day Guatemala tour", { title: t.title, days: t.days }), description: t.summary, path: `/tours/${t.slug}`, image: t.image.src });
}

export default async function TourPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  setLocale((await params).locale);
  const { slug } = await params;
  const t = getTour(slug);
  if (!t) notFound();

  const stops = t.destinationSlugs.map((s) => destinations.find((d) => d.slug === s)?.name.replace(/ \(.*\)/, "")).filter((n): n is string => !!n);
  const tourStays = stays.filter((s) => t.destinationSlugs.includes(s.destinationSlug)).slice(0, 4);
  const others = tours.filter((x) => x.slug !== t.slug && x.regions.some((r) => t.regions.includes(r)));
  const route = routeForRegions(t.regions);

  const nav = [
    { id: "overview", label: tx("Overview") },
    { id: "itinerary", label: tx("Itinerary") },
    { id: "included", label: tx("What's included") },
    { id: "map", label: tx("Route map") },
    ...(tourStays.length ? [{ id: "stays", label: tx("Stays") }] : []),
    { id: "pricing", label: tx("Pricing") },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: t.title,
    description: t.summary,
    url: `${site.url}/tours/${t.slug}`,
    image: [t.image.src, ...t.gallery.map((g) => g.src)].slice(0, 4),
    touristType: t.bestFor,
    provider: { "@id": `${site.url}/#organization` },
    itinerary: { "@type": "ItemList", itemListElement: stops.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s })) },
    offers: { "@type": "Offer", price: t.priceFrom, priceCurrency: "USD", availability: "https://schema.org/InStock", url: `${site.url}/tours/${t.slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="gutter pt-[4.5rem]">
        <div className="flex flex-col gap-6 pb-10 pt-10 md:pt-14">
          <Breadcrumbs items={[{ label: tx("Tours"), href: "/tours" }, { label: t.title }]} />
          <p className="t-xs flex flex-wrap gap-x-5 gap-y-1 text-mute">
            <span className="inline-flex items-center gap-1.5"><IconClock /> {tf("{days} days, {nights} nights", { days: t.days, nights: t.nights })}</span>
            <span className="inline-flex items-center gap-1.5"><IconPin /> {t.regions.map((r) => tx(regionLabels[r])).join(" · ")}</span>
            <span className="inline-flex items-center gap-1.5"><IconUsers /> {tx("Private, from 2 travellers")}</span>
          </p>
          <SplitHeading as="h1" text={t.title} className="t-h1 max-w-5xl" immediate />
          <Reveal delay={0.3}><p className="t-xl max-w-3xl text-bone/80">{t.summary}</p></Reveal>
        </div>
        <Gallery images={[t.image, ...t.gallery.filter((g) => g.src !== t.image.src)]} />

        <div className="mt-10">
          <InPageNav items={nav} />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-16">
          <div>
            <DetailSection id="overview" title={tx("About this tour")}>
              <div className="flex flex-col gap-5">
                {t.overview.map((p, i) => (
                  <p key={i} className={i === 0 ? "t-xl text-bone/90" : "t-md font-normal leading-relaxed text-bone/75"}>{p}</p>
                ))}
              </div>
              <h3 className="t-lg mb-4 mt-10">{tx("Highlights")}</h3>
              <CheckList items={t.highlights} />
              <div className="mt-8 flex flex-wrap gap-2">
                {t.bestFor.map((b) => (
                  <span key={b} className="t-xs border border-line-strong px-3 py-1.5 text-mute">{tx("Best for:")} {b}</span>
                ))}
              </div>
            </DetailSection>

            <DetailSection id="itinerary" title={tx("Day by day")}>
              <p className="t-md mb-8 font-normal text-mute">{tx("Sample schedule. Every day can be moved, lengthened or swapped.")}</p>
              <ol className="relative flex flex-col">
                {t.itinerary.map((d, i) => (
                  <li key={d.day} className="relative grid grid-cols-[2.5rem_1fr] gap-4 pb-10 last:pb-0 md:grid-cols-[7rem_1fr] md:gap-8">
                    {i < t.itinerary.length - 1 && <span aria-hidden className="absolute bottom-0 left-[0.6875rem] top-7 w-px bg-line-strong md:hidden" />}
                    <div className="flex flex-col items-start gap-2">
                      <span aria-hidden className="mt-1 flex size-6 items-center justify-center rounded-full border border-terra bg-ink md:hidden">
                        <span className="size-2 rounded-full bg-terra" />
                      </span>
                      <span className="t-lg hidden text-adobe md:block">{d.day}</span>
                    </div>
                    <div className="flex flex-col gap-3 md:border-l md:border-line md:pl-8">
                      <span className="t-xs text-adobe md:hidden">{d.day}</span>
                      <h3 className="t-lg">{d.title}</h3>
                      <p className="t-md font-normal leading-relaxed text-bone/75">{d.text}</p>
                      {(d.overnight || d.meals) && (
                        <p className="t-xs flex flex-wrap gap-x-5 gap-y-1 text-mute">
                          {d.overnight && <span>{tx("Overnight:")} <span className="text-bone/85">{d.overnight}</span></span>}
                          {d.meals && <span>{tx("Meals:")} <span className="text-bone/85">{d.meals}</span></span>}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
              <p className="t-xs mt-8 text-faint">{tx("Meals key: B = breakfast, L = lunch, D = dinner.")}</p>
            </DetailSection>

            <DetailSection id="included" title={tx("What's included")}>
              <CheckList items={t.included} />
              <h3 className="t-lg mb-4 mt-10">{tx("Not included")}</h3>
              <CheckList items={t.excluded} variant="x" />
            </DetailSection>

            <DetailSection id="map" title={tx("Route map")}>
              <MapPlaceholder stops={stops} />
              <p className="t-md mt-4 font-normal text-mute">
                {stops.map((s, i) => {
                  const slug = t.destinationSlugs[i];
                  return (
                    <span key={s}>
                      <Link href={`/destinations/${slug}`} className="text-bone underline-offset-4 hover:underline">{s}</Link>
                      {i < stops.length - 1 ? " → " : ""}
                    </span>
                  );
                })}
              </p>
            </DetailSection>

            {tourStays.length > 0 && (
              <DetailSection id="stays" title={tx("Where you could stay")}>
                <RelatedStays stays={tourStays} />
              </DetailSection>
            )}

            <DetailSection id="pricing" title={tx("Pricing")} className="border-b-0">
              <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
                <div className="flex flex-col gap-2 bg-ink p-6">
                  <span className="t-xs text-mute">{tx("Per person, from")}</span>
                  <Price usd={t.priceFrom} className="t-h3" />
                  <span className="t-xs text-faint">{tx("Based on two sharing")}</span>
                </div>
                <div className="flex flex-col gap-2 bg-ink p-6">
                  <span className="t-xs text-mute">{tx("For two, approx.")}</span>
                  <Price usd={t.priceFrom * 2} className="t-h3" />
                  <span className="t-xs text-faint">{tx("International flights excluded")}</span>
                </div>
                <div className="flex flex-col gap-2 bg-ink p-6">
                  <span className="t-xs text-mute">{tx("Budget level")}</span>
                  <span className="t-h3">{tx(budgetLabel[t.budget])}</span>
                  <span className="t-xs text-faint">{tx("Upgrade or adjust any hotel")}</span>
                </div>
              </div>
              <p className="t-md mt-6 font-normal text-mute">
                {tx("Prices vary with season, hotel choice and group size. Holy Week (Semana Santa) and Christmas carry supplements. Your specialist will send a clear, itemised quote in your currency.")}
              </p>
            </DetailSection>
          </div>

          <div className="pb-10 lg:pt-14">
            <SideCard>
              <div className="flex flex-col gap-1">
                <span className="t-xl text-mute">{tx("from")}</span>
                <Price usd={t.priceFrom} className="t-h3" />
                <span className="t-xs text-faint">{tx("per person · ≈")} <Price usd={t.priceFrom * 2} /> {tx("for two · international flights excluded")}</span>
              </div>
              <div className="flex flex-col gap-3">
                <MetaRow icon={<IconClock />} label={tx("Duration")} value={tf("{days} days, {nights} nights", { days: t.days, nights: t.nights })} />
                <MetaRow icon={<IconPin />} label={tx("Regions")} value={<span className="t-xs">{t.regions.map((r) => tx(regionLabels[r])).join(", ")}</span>} />
                <MetaRow label={tx("Style")} value={<span className="t-xs">{t.style}</span>} />
                <MetaRow label={tx("Includes")} value={<span className="t-xs">{t.inclusionLine}</span>} />
              </div>
              <div className="flex flex-col gap-2">
                <PlanButton route={route} className="w-full">{tx("Enquire about this tour")}</PlanButton>
                <ButtonLink href={mailtoHref(`Enquiry: ${t.title}`)} variant="outline" className="w-full">{tx("Email us")}</ButtonLink>
              </div>
              <p className="t-xs text-faint">{tx("No deposit to enquire. Reply within one working day.")}</p>
            </SideCard>
          </div>
        </div>
      </div>

      <RelatedTours tours={others.length ? others : tours.filter((x) => x.slug !== t.slug)} />
      <FinalCta title={tx("Make this trip your own")} />
    </>
  );
}
