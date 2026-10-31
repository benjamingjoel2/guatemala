import { t, tf } from "@/i18n/server";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/motion";
import { CountUp } from "@/components/ui/CountUp";

const year = new Date().getFullYear();

const items = () => [
  { value: "1", label: t("Local specialist"), text: t("One named person plans and looks after your whole trip.") },
  { value: `${year - site.foundedYear}+`, label: t("Years in Guatemala"), text: tf("Antigua-based since {year}.", { year: site.foundedYear }) },
  { value: "80+", label: t("Partner guides & hotels"), text: t("Hand-picked, visited and paid fairly.") },
  { value: "0%", label: t("Hidden mark-ups"), text: t("Transparent, fair pricing. One clear quote.") },
  { value: "24/7", label: t("On-trip support"), text: t("A real person, every day you travel.") },
  { value: "7", label: t("Regions covered"), text: t("Highlands, lakes, volcanoes, jungle and two coasts.") },
];

export function TrustRow() {
  return (
    <section aria-label={t("Why travel with us")} className="gutter">
      <div className="-mx-5 grid grid-cols-2 overflow-hidden border-b border-line md:-mx-10 md:grid-cols-3 xl:grid-cols-6">
        {items().map((it, i) => (
          <Reveal
            key={it.label}
            delay={i * 0.06}
            className="-mr-px flex flex-col gap-3 border-r border-t border-line p-5 md:p-8 [&:nth-child(-n+2)]:border-t-0 md:[&:nth-child(-n+3)]:border-t-0 xl:border-t-0"
          >
            <CountUp value={it.value} className="t-h3 text-adobe" />
            <span className="t-md">{it.label}</span>
            <span className="t-xs text-mute">{it.text}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
