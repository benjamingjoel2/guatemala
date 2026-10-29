import Image from "next/image";
import { img } from "@/data/images";
import { mailtoHref } from "@/config/site";
import { PlanButton } from "@/components/ui/PlanButton";
import { ButtonLink } from "@/components/ui/Button";
import { Parallax, Reveal, SplitHeading } from "@/components/ui/motion";

export function FinalCta({ title = "Ready when you are. Let's plan your Guatemala." }: { title?: string }) {
  return (
    <section className="theme-dark relative overflow-hidden bg-ink" aria-labelledby="final-cta-title">
      <Parallax className="absolute inset-0" distance={60}>
        <Image src={img.acatenangoSun.src} alt="" fill sizes="100vw" className="object-cover" />
      </Parallax>
      <div className="absolute inset-0 bg-ink/55" />
      <div className="gutter relative flex min-h-[34rem] flex-col items-center justify-center gap-8 py-24 text-center">
        <SplitHeading id="final-cta-title" text={title} className="t-h1 max-w-5xl" />
        <Reveal delay={0.2} className="flex flex-col items-center gap-6">
          <p className="t-xl max-w-xl text-bone/85">Tell us a little about your trip. Your specialist will reply within one working day with ideas, not a sales pitch.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PlanButton>Plan your trip</PlanButton>
            <ButtonLink href={mailtoHref("Planning a trip to Guatemala")} variant="outline" className="backdrop-blur-sm">Email us</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
