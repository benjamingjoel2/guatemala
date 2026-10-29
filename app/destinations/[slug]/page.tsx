import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { destinations, getDestination } from "@/data/destinations";
import { tours } from "@/data/tours";
import { stays } from "@/data/stays";
import { experiences } from "@/data/experiences";
import { regionLabels } from "@/config/site";
import { JsonLd, pageMeta } from "@/lib/seo";
import { monthNames } from "@/lib/utils";
import { routeForRegions } from "@/lib/routes";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitHeading, Reveal } from "@/components/ui/motion";
import { InPageNav } from "@/components/detail/InPageNav";
import { DetailSection } from "@/components/detail/DetailSection";
import { SideCard, MetaRow } from "@/components/detail/SideCard";
import { MonthGrid } from "@/components/ui/MonthGrid";
import { Accordion } from "@/components/ui/Accordion";
import { RelatedStays, RelatedTours } from "@/components/detail/Related";
import { PlanButton } from "@/components/ui/PlanButton";
import { ButtonLink } from "@/components/ui/Button";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { FinalCta } from "@/components/home/FinalCta";
import { IconClock, IconMountain, IconPin } from "@/components/ui/icons";
import { mailtoHref, site } from "@/config/site";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return {};
  return pageMeta({
    title: `${d.name}, Guatemala: travel guide`,
    description: d.excerpt,
    path: `/destinations/${d.slug}`,
    image: d.image.src,
  });
}

function monthRange(months: number[]) {
  if (!months.length) return "Year-round";
  return months.map((m) => monthNames[m - 1]).join(", ");
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  const relatedTours = tours.filter((t) => t.destinationSlugs.includes(d.slug));
  const relatedStays = stays.filter((s) => s.destinationSlug === d.slug);
  const relatedExperiences = experiences.filter((e) => e.destinationSlugs.includes(d.slug)).slice(0, 3);

  const nav = [
    { id: "overview", label: "Overview" },
    { id: "best-time", label: "Best time" },
    { id: "highlights", label: "Highlights" },
    { id: "things-to-do", label: "Things to do" },
    { id: "tips", label: "Practical tips" },
    ...(relatedStays.length ? [{ id: "stays", label: "Stays" }] : []),
    { id: "faq", label: "FAQ" },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: `${d.name}, Guatemala`,
          description: d.excerpt,
          url: `${site.url}/destinations/${d.slug}`,
          image: [d.image.src, ...d.gallery.map((g) => g.src)].slice(0, 4),
          touristType: d.highlights.map((h) => h.title),
          containedInPlace: { "@type": "Country", name: "Guatemala" },
          includesAttraction: d.thingsToDo.slice(0, 6).map((t) => ({ "@type": "TouristAttraction", name: t })),
        }}
      />
      {/* Hero */}
      <section className="theme-dark relative flex min-h-[80svh] flex-col justify-end overflow-hidden bg-ink">
        <Image src={d.image.src} alt={d.image.alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/10 to-ink" />
        <div className="gutter relative flex flex-col gap-6 pb-10 pt-32 md:pb-14">
          <Breadcrumbs items={[{ label: "Destinations", href: "/destinations" }, { label: d.name }]} />
          <Eyebrow className="text-bone/80">{regionLabels[d.region]} · {d.tagline}</Eyebrow>
          <SplitHeading as="h1" text={d.name} className="t-display max-w-[14ch] !text-[clamp(3rem,10vw,8.5rem)]" immediate />
          <Reveal delay={0.4}>
            <p className="t-xl max-w-2xl text-bone/85">{d.excerpt}</p>
          </Reveal>
        </div>
      </section>

      <div className="gutter">
        <InPageNav items={nav} />
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-16">
          <div>
            <DetailSection id="overview" title="Overview">
              <div className="flex flex-col gap-5">
                {d.overview.map((p, i) => (
                  <p key={i} className={i === 0 ? "t-xl text-bone/90" : "t-md font-normal leading-relaxed text-bone/75"}>{p}</p>
                ))}
              </div>
            </DetailSection>

            <DetailSection id="best-time" title="Best time to visit">
              <MonthGrid bestMonths={d.bestMonths} />
              <p className="t-md mt-6 font-normal leading-relaxed text-bone/75">{d.bestTimeNote}</p>
            </DetailSection>

            <DetailSection id="highlights" title="Highlights">
              <ol className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
                {d.highlights.map((h, i) => (
                  <li key={h.title} className="flex flex-col gap-3 bg-ink p-6">
                    <span className="t-xs text-adobe">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="t-lg">{h.title}</h3>
                    <p className="t-md font-normal text-mute">{h.text}</p>
                  </li>
                ))}
              </ol>
            </DetailSection>

            <DetailSection id="things-to-do" title="Things to do">
              <ul className="flex flex-col border-t border-line">
                {d.thingsToDo.map((t, i) => (
                  <li key={t} className="t-lg flex items-baseline gap-5 border-b border-line py-4">
                    <span className="t-xs w-6 shrink-0 text-faint">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-normal">{t}</span>
                  </li>
                ))}
              </ul>
              {relatedExperiences.length > 0 && (
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {relatedExperiences.map((e) => (
                    <ExperienceCard key={e.slug} experience={e} />
                  ))}
                </div>
              )}
            </DetailSection>

            <DetailSection id="tips" title="Practical tips">
              <dl className="grid gap-6 sm:grid-cols-2">
                {d.tips.map((t) => (
                  <div key={t.title} className="flex flex-col gap-2 border-l-2 border-jade pl-5">
                    <dt className="t-lg">{t.title}</dt>
                    <dd className="t-md font-normal text-mute">{t.text}</dd>
                  </div>
                ))}
              </dl>
            </DetailSection>

            {relatedStays.length > 0 && (
              <DetailSection id="stays" title={`Where we like to stay in ${d.name}`}>
                <RelatedStays stays={relatedStays} />
              </DetailSection>
            )}

            <DetailSection id="faq" title={`${d.name} FAQ`} className="border-b-0">
              <Accordion items={d.faqs} />
              <p className="t-md mt-6 text-mute">
                More questions? See our <Link href="/faq" className="text-jade-light underline underline-offset-4">Guatemala FAQ</Link>.
              </p>
            </DetailSection>
          </div>

          <div className="pb-10 lg:pt-14">
            <SideCard>
              <p className="t-eyebrow text-adobe">At a glance</p>
              <div className="flex flex-col gap-3">
                <MetaRow icon={<IconPin />} label="Region" value={regionLabels[d.region]} />
                <MetaRow icon={<IconClock />} label="Ideal stay" value={d.idealStay} />
                {d.altitude && <MetaRow icon={<IconMountain />} label="Altitude" value={d.altitude} />}
                <MetaRow label="Best months" value={<span className="t-xs">{monthRange(d.bestMonths)}</span>} />
              </div>
              <p className="t-md font-normal text-mute">Want {d.name} in your trip? Your specialist will fit it into a route that flows.</p>
              <div className="flex flex-col gap-2">
                <PlanButton route={routeForRegions([d.region])} className="w-full">Plan a trip here</PlanButton>
                <ButtonLink href={mailtoHref(`Trip to Guatemala including ${d.name}`)} variant="outline" className="w-full">Email us</ButtonLink>
              </div>
            </SideCard>
          </div>
        </div>
      </div>

      <RelatedTours tours={relatedTours.length ? relatedTours : tours.filter((t) => t.featured)} title={relatedTours.length ? `Tours that include ${d.name}` : "Popular tours"} />
      <FinalCta title={`Plan your trip to ${d.name}`} />
    </>
  );
}
