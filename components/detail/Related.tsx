import { t } from "@/i18n/server";
import type { Tour, Stay } from "@/data/types";
import { TourGrid } from "@/components/cards/TourCard";
import { StayCard } from "@/components/cards/StayCard";
import { LinedGrid } from "@/components/ui/LinedGrid";
import { SectionHead } from "@/components/ui/SectionHead";
import { ButtonLink } from "@/components/ui/Button";

export function RelatedTours({ tours, title = "You may also like" }: { tours: Tour[]; title?: string }) {
  title = t(title);
  if (!tours.length) return null;
  return (
    <section className="gutter section-pad" aria-label={title}>
      <SectionHead
        title={title}
        text={t("Every tour is private and fully adjustable around your dates and pace.")}
        action={<ButtonLink href="/tours" variant="outline">{t("See all tours")}</ButtonLink>}
        className="mb-10 md:mb-14"
      />
      <TourGrid tours={tours.slice(0, 2)} />
    </section>
  );
}

export function RelatedStays({ stays }: { stays: Stay[] }) {
  if (!stays.length) return null;
  return (
    <LinedGrid bleed={false} className="sm:grid-cols-2">
      {stays.map((s) => (
        <StayCard key={s.slug} stay={s} />
      ))}
    </LinedGrid>
  );
}
