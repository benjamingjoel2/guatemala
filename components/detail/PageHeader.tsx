import { t } from "@/i18n/server";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, SplitHeading } from "@/components/ui/motion";
import type { Image as Img } from "@/data/types";

/** Index-page header: breadcrumb, eyebrow, big heading, intro, optional wide image. */
export function PageHeader({
  title,
  eyebrow,
  intro,
  crumbs,
  image,
  children,
}: {
  title: string;
  eyebrow?: string;
  intro?: string;
  crumbs: { label: string; href?: string }[];
  image?: Img;
  children?: React.ReactNode;
}) {
  return (
    <header className="pt-[4.5rem]">
      <div className="gutter flex flex-col gap-6 pb-10 pt-10 md:pb-14 md:pt-16">
        <Breadcrumbs items={crumbs} />
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-20">
          <div className="flex max-w-4xl flex-col gap-5">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <SplitHeading as="h1" text={title} className="t-h1" immediate />
          </div>
          {intro && (
            <Reveal className="max-w-md md:text-right" delay={0.3}>
              <p className="t-lg font-normal text-mute">{intro}</p>
            </Reveal>
          )}
        </div>
        {children}
      </div>
      {image && (
        <div className="gutter">
          <div className="relative aspect-[16/9] overflow-hidden md:aspect-[21/8]">
            <Image src={image.src} alt={t(image.alt)} fill priority sizes="100vw" className="object-cover" />
          </div>
        </div>
      )}
    </header>
  );
}
