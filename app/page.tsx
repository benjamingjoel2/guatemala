import type { Metadata } from "next";
import { destinations } from "@/data/destinations";
import { site } from "@/config/site";
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
import { Testimonials } from "@/components/home/Testimonials";
import { GuideSignup } from "@/components/home/GuideSignup";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: { absolute: `${site.name} · Tailor-made Guatemala trips` },
  description: site.description,
  alternates: { canonical: "/" },
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
      <Testimonials />
      <GuideSignup />
      <FinalCta />
    </>
  );
}
