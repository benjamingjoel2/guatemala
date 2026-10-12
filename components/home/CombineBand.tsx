import Image from "next/image";
import { img } from "@/data/images";
import { Parallax, Reveal, SplitHeading } from "@/components/ui/motion";
import { PlanButton } from "@/components/ui/PlanButton";

const steps = [
  { n: "01", label: "Pick a route", text: "Start from a signature tour or a blank page." },
  { n: "02", label: "Match your stays", text: "Colonial courtyards, lake lodges, jungle hideaways." },
  { n: "03", label: "Add drivers & experiences", text: "Private transfers, guides, hikes and workshops." },
  { n: "04", label: "One clear price", text: "A single quote, no hidden mark-ups." },
];

/** Full-bleed image band with stacked "+ add-on" headings and a glass step strip (reference "combine" section). */
export function CombineBand() {
  return (
    <section className="theme-dark relative bg-ink" aria-labelledby="combine-title">
      <Parallax className="absolute inset-0" distance={70}>
        <Image src={img.atitlanPier.src} alt="" fill sizes="100vw" className="object-cover" />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/70" />

      <div className="relative flex min-h-[46rem] flex-col justify-between md:min-h-[54rem]">
        <div className="gutter grid gap-8 pt-16 md:pt-24 lg:grid-cols-2">
          <div className="flex flex-col gap-2">
            <SplitHeading id="combine-title" text="Your trip, your way" className="t-h2" />
            {["+ Stays", "+ Private drivers", "+ Experiences"].map((t, i) => (
              <Reveal key={t} delay={0.15 + i * 0.1}>
                <p className="t-h3 text-bone/90">{t}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="flex flex-col items-start gap-8 lg:items-end lg:pt-3 lg:text-right" delay={0.2}>
            <p className="t-xl max-w-md">
              Hotels, drivers, guides and once-in-a-lifetime moments, woven into one seamless plan. Instant answers on WhatsApp, and a specialist who handles every booking for you.
            </p>
            <PlanButton variant="light">Build my trip</PlanButton>
          </Reveal>
        </div>

        <ol className="mt-16 grid grid-cols-2 border-y border-bone/15 bg-ink/30 backdrop-blur-md lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.n} className={`flex flex-col gap-6 p-5 md:gap-16 md:p-10 ${i > 0 ? "border-l border-bone/15" : ""} ${i === 2 ? "border-l-0 lg:border-l" : ""} ${i > 1 ? "border-t border-bone/15 lg:border-t-0" : ""}`}>
              <div className="flex items-start gap-2">
                <span className="t-h3">{s.n}</span>
                <span className="t-xs pt-1 text-bone/80">Step</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="t-lg">{s.label}</span>
                <span className="t-xs text-bone/80">{s.text}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
