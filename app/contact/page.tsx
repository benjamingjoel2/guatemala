import Image from "next/image";
import { img } from "@/data/images";
import { contact, mailtoHref, socials } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SplitHeading } from "@/components/ui/motion";
import { ContactForm } from "@/components/detail/ContactForm";
import { PlanButton } from "@/components/ui/PlanButton";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = pageMeta({
  title: "Contact us",
  description: "Talk to a Guatemala travel specialist in Antigua by email or phone. We reply within one working day.",
  path: "/contact",
  image: img.antiguaStreetAgua.src,
});

export default function ContactPage() {
  return (
    <div className="pt-[4.5rem]">
      <div className="gutter pb-8 pt-10 md:pt-14">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </div>
      {/* Reference contact layout: two bordered columns, image and form */}
      <section className="border-y border-line">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col gap-10 border-b border-line p-5 md:p-10 lg:border-b-0 lg:border-r">
            <SplitHeading as="h1" text="Let's talk Guatemala" className="t-h1" immediate />
            <p className="t-xl max-w-lg text-bone/80">Questions, ideas or a half-formed dream? Write to us. A specialist in Antigua will reply within one working day.</p>
            <div className="relative aspect-[640/618] w-full overflow-hidden lg:aspect-[16/11]">
              <Image src={img.antiguaFacade.src} alt={img.antiguaFacade.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-12 p-5 md:p-10">
            <ContactForm />
            <div className="grid gap-8 border-t border-line pt-10 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <p className="t-eyebrow text-faint">Email</p>
                <a href={`mailto:${contact.email}`} className="t-lg hover:text-adobe">{contact.email}</a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="t-eyebrow text-faint">Phone</p>
                <a href={contact.phoneHref} className="t-lg hover:text-adobe">{contact.phone}</a>
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <p className="t-eyebrow text-faint">Office</p>
                <address className="t-md not-italic text-mute">{contact.address}</address>
              </div>
              <p className="t-xs text-faint sm:col-span-2">{contact.hours}</p>
              {socials.length > 0 && (
                <ul className="flex flex-wrap gap-5 sm:col-span-2">
                  {socials.map((s) => (
                    <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="t-btn text-mute hover:text-bone">{s.label}</a></li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="gutter section-pad flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="t-h3 max-w-2xl">Already know roughly what you want?</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <PlanButton>Use the trip planner</PlanButton>
          <ButtonLink href={mailtoHref("Planning a trip to Guatemala")} variant="outline">Email us</ButtonLink>
        </div>
      </section>
    </div>
  );
}
