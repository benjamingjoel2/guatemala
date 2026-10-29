import { faqs } from "@/data/faqs";
import { img } from "@/data/images";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/detail/PageHeader";
import { Accordion } from "@/components/ui/Accordion";
import { FinalCta } from "@/components/home/FinalCta";
import { ButtonLink } from "@/components/ui/Button";
import { mailtoHref } from "@/config/site";

export const metadata = pageMeta({
  title: "Guatemala travel FAQ",
  description:
    "Entry requirements and the CA-4 agreement, safety, altitude, rainy season, getting around, Acatenango fitness, tipping and money in Guatemala: answered by local specialists.",
  path: "/faq",
  image: img.antiguaStreetLife.src,
});

export default function FaqPage() {
  const categories = Array.from(new Set(faqs.map((f) => f.category)));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader
        crumbs={[{ label: "FAQ" }]}
        eyebrow="Good to know"
        title="Guatemala travel questions, answered"
        intro="The questions we hear most, answered honestly by people who live here. Can't find yours? Just ask."
      />
      <section className="gutter pb-20">
        <div className="grid gap-12 lg:grid-cols-[16rem_1fr]">
          <nav aria-label="FAQ categories" className="hidden lg:block">
            <ul className="sticky top-28 flex flex-col gap-3 border-t border-line pt-6">
              {categories.map((c) => (
                <li key={c}><a href={`#${c.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="t-lg text-mute transition-colors hover:text-bone">{c}</a></li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-14">
            {categories.map((c) => (
              <section key={c} id={c.toLowerCase().replace(/[^a-z]+/g, "-")} className="scroll-mt-28" aria-labelledby={`${c}-h`}>
                <h2 id={`${c}-h`} className="t-h4 mb-4 text-adobe">{c}</h2>
                <Accordion items={faqs.filter((f) => f.category === c)} defaultOpen={null} />
              </section>
            ))}
            <div className="flex flex-col items-start gap-4 border border-line-strong bg-ink-2 p-8">
              <p className="t-h4">Still wondering about something?</p>
              <p className="t-md font-normal text-mute">Email a specialist. We reply within one working day, usually much sooner.</p>
              <ButtonLink href={mailtoHref("A question about travelling in Guatemala")}>Email a specialist</ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
