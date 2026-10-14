import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/detail/LegalPage";
import { site } from "@/config/site";

export const metadata = pageMeta({ title: "Terms & conditions", description: `Booking terms for ${site.name} tailor-made Guatemala trips: quotes, deposits, payments, changes and cancellations, travel insurance and liability.`, path: "/terms" });

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & conditions"
      updated="October 2026"
      sections={[
        { h: "1. Who we are", p: [`${site.name} is a tour operator based in Antigua Guatemala. These terms apply to all tailor-made trips we arrange.`] },
        { h: "2. Quotes and bookings", p: ["Quotes are free and without obligation. A booking is confirmed once you accept your itinerary in writing and we receive the deposit stated on your quote."] },
        { h: "3. Payments", p: ["The balance is due before travel as set out in your booking confirmation. Prices are quoted in US dollars; any other currency shown on this website is an estimate for convenience only."] },
        { h: "4. Changes and cancellations", p: ["We will always try to accommodate changes. Cancellation charges depend on how close to departure you cancel and on our partners' terms, which we share with your quote."] },
        { h: "5. Travel insurance", p: ["Comprehensive travel insurance, including medical cover and activities such as volcano hiking, is a condition of booking."] },
        { h: "6. Liability", p: ["We select partners carefully but are not liable for events outside our reasonable control, including weather, volcanic activity and government restrictions."] },
      ]}
    />
  );
}
