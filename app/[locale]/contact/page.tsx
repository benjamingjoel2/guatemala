import { setLocale, t } from "@/i18n/server";
import Image from "next/image";
import { img } from "@/data/images";
import { contact, mailtoHref } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SplitHeading } from "@/components/ui/motion";
import { ContactForm } from "@/components/detail/ContactForm";
import { PlanButton } from "@/components/ui/PlanButton";
import { ButtonLink } from "@/components/ui/Button";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return pageMeta({
    title: t("Contact us"),
    description: t("Talk to a Guatemala travel specialist in Antigua by email. We reply within one working day."),
    path: "/contact",
    image: img.antiguaStreetAgua.src,
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return (
    <div className="pt-[4.5rem]">
      <div className="gutter pb-8 pt-10 md:pt-14">
        <Breadcrumbs items={[{ label: t("Contact") }]} />
      </div>
      {/* Reference contact layout: two bordered columns, image and form */}
      <section className="border-y border-line">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col gap-10 border-b border-line p-5 md:p-10 lg:border-b-0 lg:border-r">
            <SplitHeading as="h1" text={t("Let's talk Guatemala")} className="t-h1" immediate />
            <p className="t-xl max-w-lg text-bone/80">{t("Questions, ideas or a half-formed dream? Write to us. A specialist in Antigua will reply within one working day.")}</p>
            <div className="relative aspect-[640/618] w-full overflow-hidden lg:aspect-[16/11]">
              <Image src={img.antiguaFacade.src} alt={t(img.antiguaFacade.alt)} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-12 p-5 md:p-10">
            <ContactForm />
            <div className="grid gap-8 border-t border-line pt-10 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <p className="t-eyebrow text-faint">{t("Email")}</p>
                <a href={`mailto:${contact.email}`} className="t-lg hover:text-adobe">{contact.email}</a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="t-eyebrow text-faint">{t("Office")}</p>
                <address className="t-md not-italic text-mute">{contact.address}</address>
              </div>
              <p className="t-xs text-faint sm:col-span-2">{t(contact.hours)}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="gutter section-pad flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="t-h3 max-w-2xl">{t("Already know roughly what you want?")}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <PlanButton>{t("Use the trip planner")}</PlanButton>
          <ButtonLink href={mailtoHref("Planning a trip to Guatemala")} variant="outline">{t("Email us")}</ButtonLink>
        </div>
      </section>
    </div>
  );
}
