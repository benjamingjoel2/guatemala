import Image from "next/image";
import { img } from "@/data/images";
import { site } from "@/config/site";
import { testimonials } from "@/data/testimonials";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/detail/PageHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Parallax, Reveal, SplitHeading, Stagger, StaggerItem } from "@/components/ui/motion";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TrustRow } from "@/components/home/TrustRow";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { FinalCta } from "@/components/home/FinalCta";
import { PlusLink } from "@/components/ui/Button";

export const metadata = pageMeta({
  title: "About us",
  description: `${site.name} is an Antigua-based travel company creating tailor-made Guatemala trips, with one dedicated local specialist from first message to the day you fly home.`,
  path: "/about",
  image: img.antiguaArchAgua.src,
});

const values = [
  { title: "One person, start to finish", text: "Your specialist plans every detail, knows every hotel and answers your WhatsApp from the road. No call centres, no hand-offs." },
  { title: "Local, not outsourced", text: "We live in Antigua. Our guides, drivers and hosts are long-standing friends and partners, not names on a supplier list." },
  { title: "Fair to everyone", text: "Transparent quotes for you, fair and prompt payment for our partners, and community projects chosen with them, not for them." },
  { title: "Premium, never precious", text: "Beautiful hotels and private guides, yes. But also market breakfasts, chicken-bus stories and the Guatemala most visitors miss." },
];

export default function AboutPage() {
  const years = new Date().getFullYear() - site.foundedYear;
  return (
    <>
      <PageHeader
        crumbs={[{ label: "About" }]}
        eyebrow="Our story"
        title="We start where you start. Then we take you further."
        intro={`An Antigua-based team of travel specialists who have spent ${years} years showing people the Guatemala we love.`}
        image={img.antiguaArchAgua}
      />

      <section className="gutter section-pad">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Eyebrow>How it began</Eyebrow>
            <SplitHeading text="It started with a friend's honeymoon and a borrowed pickup truck." className="t-h2" />
          </div>
          <Reveal className="flex flex-col gap-5 text-bone/80">
            <p className="t-xl text-bone">
              In {site.foundedYear}, a friend asked us to plan their honeymoon. We knew which Antigua courtyard caught the morning light, which boatman on Atitlán still crossed at dawn, and which guide could talk Maya astronomy at the top of Temple IV.
            </p>
            <p className="t-md font-normal leading-relaxed">
              They came home and told their friends. Those friends told theirs. Today {site.name} is a small, Antigua-based team of specialists, each with a region they know by heart and a little black book of guides, drivers, hoteliers and families across the country.
            </p>
            <p className="t-md font-normal leading-relaxed">
              Our promise has not changed: one dedicated local specialist designs your trip around you, books everything with partners we have known for years, and stays on WhatsApp from your first message to the day you fly home. Premium, personal and properly local.
            </p>
          </Reveal>
        </div>
      </section>

      <TrustRow />

      <section className="gutter section-pad" aria-labelledby="values-title">
        <div className="mb-10 flex flex-col gap-4 md:mb-14">
          <Eyebrow>What we believe</Eyebrow>
          <SplitHeading id="values-title" text="Four things we will never compromise on" className="t-h2 max-w-3xl" />
        </div>
        <Stagger className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <StaggerItem key={v.title} className="flex min-h-72 flex-col justify-between gap-10 bg-ink p-6 md:p-8">
              <span className="t-h3 text-adobe">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex flex-col gap-3">
                <h3 className="t-lg">{v.title}</h3>
                <p className="t-md font-normal text-mute">{v.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="gutter section-pad">
        <div className="grid gap-10 lg:grid-cols-2">
          <Parallax className="aspect-[4/5] lg:aspect-auto lg:min-h-[36rem]" distance={50}>
            <Image src={img.weaving.src} alt={img.weaving.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </Parallax>
          <div className="flex flex-col justify-center gap-6">
            <Eyebrow>Travelling responsibly</Eyebrow>
            <SplitHeading text="Good for you, good for Guatemala" className="t-h2" />
            <Reveal className="flex flex-col gap-4">
              <p className="t-md font-normal leading-relaxed text-bone/80">
                We work with Indigenous-owned cooperatives, family-run hotels and certified local guides, and we pay them fairly and on time. Weaving workshops are booked directly with the women who lead them. Volcano porters are paid properly, and our Acatenango partners carry out what they carry in.
              </p>
              <p className="t-md font-normal leading-relaxed text-bone/80">
                A share of every trip supports community projects around Lake Atitlán and in the Verapaces, chosen together with the people who run them.
              </p>
              <PlusLink href="/experiences/weaving-and-textile-workshops" className="t-lg mt-2 hover:text-adobe">Meet the weavers</PlusLink>
            </Reveal>
          </div>
        </div>
      </section>

      <HowItWorks />

      <section className="gutter section-pad" aria-labelledby="about-reviews">
        <div className="mb-10 flex items-end justify-between gap-6">
          <SplitHeading id="about-reviews" text="What travellers say" className="t-h2" />
          <PlusLink href="/testimonials" className="t-lg text-mute hover:text-bone">All reviews</PlusLink>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <div key={t.id} className="border border-line bg-ink-2/50"><TestimonialCard t={t} /></div>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
