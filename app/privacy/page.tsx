import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/detail/LegalPage";
import { site, contact } from "@/config/site";

export const metadata = pageMeta({ title: "Privacy policy", description: `How ${site.name} collects and uses your personal data.`, path: "/privacy" });

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="October 2026"
      sections={[
        { h: "What we collect", p: ["When you use our trip planner, contact form or newsletter signup we collect the details you give us: name, email, phone number and trip preferences."] },
        { h: "How we use it", p: ["Only to plan and operate your trip, reply to your enquiries and, if you opt in, send The Guatemala Guide and occasional updates. We never sell your data."] },
        { h: "Who we share it with", p: ["Only the hotels, guides and drivers needed to deliver your trip, and service providers that host our email and CRM systems."] },
        { h: "Cookies and local storage", p: ["We store your currency preference and trip-planner progress in your browser so you can pick up where you left off. You can clear these at any time."] },
        { h: "Your rights", p: [`You can ask to access, correct or delete your data at any time by emailing ${contact.email}.`] },
      ]}
    />
  );
}
