import { t } from "@/i18n/server";
import Image from "next/image";
import { img } from "@/data/images";
import { ButtonLink } from "@/components/ui/Button";
import { PlanButton } from "@/components/ui/PlanButton";
import { HuipilStripe } from "@/components/ui/HuipilStripe";

/** H3 mosaic: headline and intro on the left, three photos of different regions beside it. */
const tiles = [
  { image: img.antiguaStreetAgua, place: "Antigua", className: "row-span-2" },
  { image: img.atitlanDock, place: "Lake Atitlán", className: "" },
  { image: img.tikalTemple, place: "Tikal", className: "" },
] as const;

export function Hero() {
  return (
    <section className="theme-dark relative bg-ink" aria-labelledby="hero-title">
      <div className="gutter grid gap-10 pb-12 pt-28 md:pb-16 md:pt-36 lg:grid-cols-12 lg:items-end lg:gap-12">
        <div className="flex flex-col gap-6 lg:col-span-5 lg:pb-4 motion-safe:animate-[rise_1s_cubic-bezier(.22,1,.36,1)_both]">
          <p className="font-serif text-[clamp(1.25rem,2vw,1.75rem)] font-medium italic leading-tight text-bone/85">
            {t("Start in Antigua.")}
          </p>
          <h1 id="hero-title" className="font-serif text-[clamp(2.75rem,5.5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.02em] text-bone">
            <span className="sr-only">{t("Antigua & Beyond: tailor-made trips to Guatemala.")} </span>
            <span aria-hidden>Go beyond</span>
          </h1>
          <p className="t-lg max-w-md text-mute">
            {t("Tailor-made Guatemala trips with one dedicated local specialist, from your first message to the day you fly home.")}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <PlanButton>{t("Start planning")}</PlanButton>
            <ButtonLink href="/tours" variant="ghost">
              {t("Explore tours")}
            </ButtonLink>
          </div>
        </div>

        <div className="grid h-[min(70svh,640px)] min-h-[380px] grid-cols-2 grid-rows-2 gap-2 lg:col-span-7 md:gap-3">
          {tiles.map(({ image, place, className }, i) => (
            <figure key={place} className={`relative overflow-hidden ${className}`}>
              <Image
                src={image.src}
                alt={t(image.alt)}
                fill
                priority={i === 0}
                sizes="(min-width:1024px) 30vw, 50vw"
                className="object-cover"
              />
              <figcaption className="t-xs absolute bottom-3 left-3 bg-ink/60 px-2 py-1 text-bone">{place}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <HuipilStripe className="relative z-10" />
    </section>
  );
}
