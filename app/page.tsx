import type { Metadata } from "next";
import { destinations } from "@/data/destinations";
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

const homeMeta = pageMeta({
  title: "Tailor-made Guatemala trips",
  description:
    "Private, tailor-made Guatemala trips planned by one local specialist in Antigua: Lake Atitlán, Tikal, volcano hikes and the highlands, with 24/7 support while you travel.",
  path: "/",
});

export const metadata: Metadata = {
  ...homeMeta,
  title: { absolute: `${site.name} · Tailor-made Guatemala trips` },
  openGraph: { ...homeMeta.openGraph, title: `${site.name} · Tailor-made Guatemala trips` },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustRow />
      <RegionsShowcase />
      <AboutIntro />
      <FeaturedTours />
      <CombineBand />
      <DestinationsExplorer destinations={destinations} />
      <ExperiencesGrid />
      <StaysGrid />
      <HowItWorks />
      <GuideSignup />
      <FinalCta />
    </>
  );
}
