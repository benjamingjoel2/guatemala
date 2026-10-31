import { t } from "@/i18n/server";
import { stays } from "@/lib/content";
import { SectionHead } from "@/components/ui/SectionHead";
import { StayCard } from "@/components/cards/StayCard";
import { LinedGrid } from "@/components/ui/LinedGrid";

export function StaysGrid() {
  // One of each type first, so the row shows the range
  const seen = new Set<string>();
  const picks = stays.filter((s) => (seen.has(s.type) ? false : (seen.add(s.type), true))).slice(0, 4);
  return (
    <section className="gutter section-pad" aria-label={t("Where you will stay")}>
      <SectionHead
        eyebrow={t("Stays")}
        title={t("Places to stay, chosen by people who have slept there")}
        text={t("Boutique colonial hotels in Antigua, lakeside lodges on Atitlán, jungle lodges in Petén and working coffee fincas. Small, characterful and personally inspected.")}
        className="mb-10 md:mb-14"
      />
      <LinedGrid className="sm:grid-cols-2 lg:grid-cols-4">
        {picks.map((s) => (
          <StayCard key={s.slug} stay={s} />
        ))}
      </LinedGrid>
    </section>
  );
}
