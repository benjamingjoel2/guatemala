import { setLocale, t, tf } from "@/i18n/server";
import { destinations } from "@/lib/content";
import { img } from "@/data/images";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/detail/PageHeader";
import { DestinationGrid } from "@/components/cards/DestinationCard";
import { FinalCta } from "@/components/home/FinalCta";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return pageMeta({
    title: t("Guatemala destinations"),
    description:
      "Antigua, Lake Atitlán, Tikal, Semuc Champey, Acatenango and more: twelve Guatemala destinations, how long to stay and when to go, from local specialists.",
    path: "/destinations",
    image: img.atitlanPier.src,
  });
}

export default async function DestinationsPage({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return (
    <>
      <PageHeader
        crumbs={[{ label: t("Destinations") }]}
        eyebrow={tf("{n} destinations · {r} regions", { n: destinations.length, r: 7 })}
        title={t("Where in Guatemala?")}
        intro={t("Colonial Antigua is where most journeys begin. From there, volcano-ringed lakes, Maya market towns, turquoise jungle pools and the great cities of Petén are all within reach.")}
      />
      <section className="gutter pb-20" aria-labelledby="all-destinations">
        <h2 id="all-destinations" className="sr-only">{t("All destinations")}</h2>
        <DestinationGrid destinations={destinations} numbered />
      </section>
      <FinalCta title={t("Not sure where to start? Ask a local.")} />
    </>
  );
}
