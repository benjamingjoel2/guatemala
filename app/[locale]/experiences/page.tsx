import { setLocale, t } from "@/i18n/server";
import { experiences } from "@/lib/content";
import { img } from "@/data/images";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/detail/PageHeader";
import { ExperiencesExplorer } from "@/components/detail/ExperiencesExplorer";
import { FinalCta } from "@/components/home/FinalCta";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return pageMeta({
    title: t("Guatemala experiences"),
    description:
      "Acatenango overnight hikes, Tikal at sunrise, Lake Atitlán village hopping, coffee farms, weaving workshops, Semana Santa and more. Private experiences you can add to any trip.",
    path: "/experiences",
    image: img.fuegoNight.src,
  });
}

export default async function ExperiencesPage({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return (
    <>
      <PageHeader
        crumbs={[{ label: t("Experiences") }]}
        eyebrow={`${experiences.length} experiences`}
        title={t("Experiences worth crossing an ocean for")}
        intro={t("Private, unhurried and led by the guides we trust most. Add any of these to your trip, or build your whole journey around one.")}
      />
      <section className="gutter pb-20" aria-labelledby="all-experiences">
        <h2 id="all-experiences" className="sr-only">{t("All experiences")}</h2>
        <ExperiencesExplorer experiences={[...experiences]} />
      </section>
      <FinalCta />
    </>
  );
}
