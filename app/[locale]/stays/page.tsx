import { setLocale, t } from "@/i18n/server";
import { stays } from "@/lib/content";
import { img } from "@/data/images";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/detail/PageHeader";
import { StayCard } from "@/components/cards/StayCard";
import { LinedGrid } from "@/components/ui/LinedGrid";
import { FinalCta } from "@/components/home/FinalCta";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return pageMeta({
    title: t("Where to stay in Guatemala"),
    description: t("Boutique colonial hotels in Antigua, lakeside lodges on Lake Atitlán, jungle lodges near Tikal and coffee finca stays, all personally inspected."),
    path: "/stays",
    image: img.courtyardPool.src,
  });
}

export default async function StaysPage({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return (
    <>
      <PageHeader
        crumbs={[{ label: t("Stays") }]}
        eyebrow={t("Personally inspected")}
        title={t("Places to stay")}
        intro={t("Small, characterful hotels run by people who care. We have slept in every one of them, and we match each to your style and budget.")}
      />
      <section className="gutter pb-20" aria-labelledby="all-stays">
        <h2 id="all-stays" className="sr-only">{t("All stays")}</h2>
        <LinedGrid className="sm:grid-cols-2 lg:grid-cols-4">
          {stays.map((s) => <StayCard key={s.slug} stay={s} />)}
        </LinedGrid>
      </section>
      <FinalCta />
    </>
  );
}
