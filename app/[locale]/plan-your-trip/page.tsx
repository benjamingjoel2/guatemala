import { setLocale, t } from "@/i18n/server";
import Image from "next/image";
import { img } from "@/data/images";
import { contact } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { TripPlanner } from "@/components/planner/TripPlanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitHeading } from "@/components/ui/motion";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return pageMeta({
    title: t("Plan your trip"),
    description: t("Tell us about your dream Guatemala trip in five quick steps. A dedicated local specialist will reply within one working day."),
    path: "/plan-your-trip",
    image: img.atitlanDock.src,
  });
}

export default async function PlanYourTripPage({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return (
    <div className="pt-[4.5rem]">
      <div className="grid lg:grid-cols-[minmax(0,26rem)_1fr] xl:grid-cols-[minmax(0,32rem)_1fr]">
        <aside className="theme-dark relative hidden lg:block">
          <div className="sticky top-[4.5rem] h-[calc(100svh-4.5rem)]">
            <Image src={img.atitlanFlowers.src} alt={t(img.atitlanFlowers.alt)} fill priority sizes="32rem" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-10">
              <p className="t-xl">{t("“Tell us how you like to travel. We'll take care of the rest.”")}</p>
              <p className="t-xs text-mute">{t("Prefer to write? Email")} <a className="underline hover:text-bone" href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
            </div>
          </div>
        </aside>
        <div className="gutter border-line py-10 md:py-16 lg:border-l">
          <div className="mb-12 flex flex-col gap-5">
            <Breadcrumbs items={[{ label: t("Plan your trip") }]} />
            <Eyebrow>{t("Trip planner · 5 steps · about 3 minutes")}</Eyebrow>
            <SplitHeading as="h1" text={t("Plan your Guatemala")} className="t-h1" immediate />
          </div>
          <TripPlanner />
        </div>
      </div>
    </div>
  );
}
