import Image from "next/image";
import { img } from "@/data/images";
import { contact } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { TripPlanner } from "@/components/planner/TripPlanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitHeading } from "@/components/ui/motion";

export const metadata = pageMeta({
  title: "Plan your trip",
  description: "Tell us about your dream Guatemala trip in five quick steps. A dedicated local specialist will reply within one working day.",
  path: "/plan-your-trip",
  image: img.atitlanDock.src,
});

export default function PlanYourTripPage() {
  return (
    <div className="pt-[4.5rem]">
      <div className="grid lg:grid-cols-[minmax(0,26rem)_1fr] xl:grid-cols-[minmax(0,32rem)_1fr]">
        <aside className="theme-dark relative hidden lg:block">
          <div className="sticky top-[4.5rem] h-[calc(100svh-4.5rem)]">
            <Image src={img.atitlanFlowers.src} alt={img.atitlanFlowers.alt} fill priority sizes="32rem" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-10">
              <p className="t-xl">&ldquo;Tell us how you like to travel. We&apos;ll take care of the rest.&rdquo;</p>
              <p className="t-xs text-mute">Prefer to talk? Email <a className="underline hover:text-bone" href={`mailto:${contact.email}`}>{contact.email}</a> or call <a className="underline hover:text-bone" href={contact.phoneHref}>{contact.phone}</a></p>
            </div>
          </div>
        </aside>
        <div className="gutter border-line py-10 md:py-16 lg:border-l">
          <div className="mb-12 flex flex-col gap-5">
            <Breadcrumbs items={[{ label: "Plan your trip" }]} />
            <Eyebrow>Trip planner · 5 steps · about 3 minutes</Eyebrow>
            <SplitHeading as="h1" text="Plan your Guatemala" className="t-h1" immediate />
          </div>
          <TripPlanner />
        </div>
      </div>
    </div>
  );
}
