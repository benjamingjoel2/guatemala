import Image from "next/image";
import { img } from "@/data/images";
import { site } from "@/config/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlusLink } from "@/components/ui/Button";
import { Parallax, Reveal, SplitHeading } from "@/components/ui/motion";
import { CountUp } from "@/components/ui/CountUp";

export function AboutIntro() {
  const years = new Date().getFullYear() - site.foundedYear;
  return (
    <section className="gutter section-pad" aria-labelledby="about-title">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-10">
        <Parallax className="aspect-[335/366] lg:aspect-auto lg:min-h-[40rem]" distance={50}>
          <Image src={img.weaving.src} alt={img.weaving.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </Parallax>
        <div className="flex flex-col gap-10">
          <Eyebrow>About us</Eyebrow>
          <SplitHeading text="Not just an itinerary. A Guatemala we know by heart." className="t-h2" />
          <Reveal>
            <p className="t-xl text-bone/85">
              We live in Antigua, and we have spent {years} years walking its cobbles, crossing its lake at dawn and sleeping on the shoulder of Acatenango. {site.name} pairs every traveller with one dedicated local specialist, who shapes a private route around you, books the guides and hotels we trust, and stays in touch until you are home.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal className="flex flex-col justify-between gap-10 border-t border-line pt-6" delay={0.05}>
              <div className="flex flex-col gap-4">
                <CountUp value={`${years}+`} className="t-h3" />
                <span className="t-lg">Years planning Guatemala</span>
              </div>
              <span className="t-md font-normal text-mute">Born in Antigua, built on long friendships with local guides, drivers and families.</span>
            </Reveal>
            <Reveal className="flex flex-col justify-between gap-10 border-t border-line pt-6" delay={0.12}>
              <div className="flex flex-col gap-4">
                <CountUp value="2,400+" className="t-h3" />
                <span className="t-lg">Travellers looked after</span>
              </div>
              <span className="t-md font-normal text-mute">Couples, families, solo explorers and honeymooners, each with a trip of their own.</span>
            </Reveal>
          </div>
          <PlusLink href="/about" className="t-h4 hover:text-adobe">Read our story</PlusLink>
        </div>
      </div>
    </section>
  );
}
