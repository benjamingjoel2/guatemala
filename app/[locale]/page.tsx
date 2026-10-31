import { setLocale, t } from "@/i18n/server";
import type { Metadata } from "next";
import { destinations } from "@/lib/content";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { TrustRow } from "@/components/home/TrustRow";
import { RegionsShowcase } from "@/components/home/RegionsShowcase";
import { AboutIntro } from "@/components/home/AboutIntro";
import { FeaturedTours } from "@/components/home/FeaturedTours";
import { CombineBand } from "@/components/home/CombineBand";
import { DestinationsExplorer } from "@/components/home/DestinationsExplorer";
import { ExperiencesGrid } from "@/components/home/ExperiencesGrid";
import { StaysGrid } from "@/components/home/StaysGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { GuideSignup } from "@/components/home/GuideSignup";
import { FinalCta } from "@/components/home/FinalCta";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  setLocale((await params).locale);
  const homeMeta = pageMeta({
    title: t("Tailor-made Guatemala trips"),
    description:
      "Private, tailor-made Guatemala trips planned by one local specialist in Antigua: Lake Atitlán, Tikal, volcano hikes and the highlands, with 24/7 support while you travel.",
    path: "/",
  });
  const title = `${site.name} · ${t("Tailor-made Guatemala trips")}`;
  return { ...homeMeta, title: { absolute: title }, openGraph: { ...homeMeta.openGraph, title } };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return (
    <>
      <Hero />
      <TrustRow />
      <RegionsShowcase />
      <AboutIntro />
      <FeaturedTours />
      <CombineBand />
      <DestinationsExplorer destinations={[...destinations]} />
      <ExperiencesGrid />
      <StaysGrid />
      <HowItWorks />
      <GuideSignup />
      <FinalCta />
    </>
  );
}
