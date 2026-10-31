import { setLocale, t, tf } from "@/i18n/server";
import Image from "next/image";
import { img } from "@/data/images";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/detail/PageHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Parallax, Reveal, SplitHeading, Stagger, StaggerItem } from "@/components/ui/motion";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TrustRow } from "@/components/home/TrustRow";
import { FinalCta } from "@/components/home/FinalCta";
import { PlusLink } from "@/components/ui/Button";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return pageMeta({
    title: t("About us"),
    description: `${site.name} is an Antigua-based travel company creating tailor-made Guatemala trips, with one dedicated local specialist from first message to the day you fly home.`,
    path: "/about",
    image: img.antiguaArchAgua.src,
  });
}

const values = () => [
  { title: t("One person, start to finish"), text: t("Your specialist plans every detail, knows every hotel and answers your messages from the road. No call centres, no hand-offs.") },
  { title: t("Local, not outsourced"), text: t("We live in Antigua. Our guides, drivers and hosts are long-standing friends and partners, not names on a supplier list.") },
  { title: t("Fair to everyone"), text: t("Transparent quotes for you, fair and prompt payment for our partners, and community projects chosen with them, not for them.") },
  { title: t("Premium, never precious"), text: t("Beautiful hotels and private guides, yes. But also market breakfasts, chicken-bus stories and the Guatemala most visitors miss.") },
];

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  const years = new Date().getFullYear() - site.foundedYear;
  return (
    <>
      <PageHeader
        crumbs={[{ label: t("About") }]}
        eyebrow={t("Our story")}
        title={t("We start where you start. Then we take you further.")}
        intro={tf("An Antigua-based team of travel specialists who have spent {years} years showing people the Guatemala we love.", { years })}
        image={img.antiguaArchAgua}
      />

      <section className="gutter section-pad">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Eyebrow>{t("How it began")}</Eyebrow>
            <SplitHeading text={t("It started with a friend's honeymoon and a borrowed pickup truck.")} className="t-h2" />
          </div>
          <Reveal className="flex flex-col gap-5 text-bone/80">
            <p className="t-xl text-bone">
              {tf("In {year}, a friend asked us to plan their honeymoon. We knew which Antigua courtyard caught the morning light, which boatman on Atitl\u00e1n still crossed at dawn, and which guide could talk Maya astronomy at the top of Temple IV.", { year: site.foundedYear })}
            </p>
            <p className="t-md font-normal leading-relaxed">
              {tf("They came home and told their friends. Those friends told theirs. Today {name} is a small, Antigua-based team of specialists, each with a region they know by heart and a little black book of guides, drivers, hoteliers and families across the country.", { name: site.name })}
            </p>
            <p className="t-md font-normal leading-relaxed">
              {t("Our promise has not changed: one dedicated local specialist designs your trip around you, books everything with partners we have known for years, and stays in touch from your first message to the day you fly home. Premium, personal and properly local.")}
            </p>
          </Reveal>
        </div>
      </section>

      <TrustRow />

      <section className="gutter section-pad" aria-labelledby="values-title">
        <div className="mb-10 flex flex-col gap-4 md:mb-14">
          <Eyebrow>{t("What we believe")}</Eyebrow>
          <SplitHeading id="values-title" text={t("Four things we will never compromise on")} className="t-h2 max-w-3xl" />
        </div>
        <Stagger className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {values().map((v, i) => (
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
            <Image src={img.weaving.src} alt={t(img.weaving.alt)} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </Parallax>
          <div className="flex flex-col justify-center gap-6">
            <Eyebrow>{t("Travelling responsibly")}</Eyebrow>
            <SplitHeading text={t("Good for you, good for Guatemala")} className="t-h2" />
            <Reveal className="flex flex-col gap-4">
              <p className="t-md font-normal leading-relaxed text-bone/80">
                {t("We work with Indigenous-owned cooperatives, family-run hotels and certified local guides, and we pay them fairly and on time. Weaving workshops are booked directly with the women who lead them. Volcano porters are paid properly, and our Acatenango partners carry out what they carry in.")}
              </p>
              <p className="t-md font-normal leading-relaxed text-bone/80">
                {t("A share of every trip supports community projects around Lake Atitlán and in the Verapaces, chosen together with the people who run them.")}
              </p>
              <PlusLink href="/experiences/weaving-and-textile-workshops" className="t-lg mt-2 hover:text-adobe">{t("Meet the weavers")}</PlusLink>
            </Reveal>
          </div>
        </div>
      </section>

      <HowItWorks />

      <FinalCta />
    </>
  );
}
