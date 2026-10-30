import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/detail/LegalPage";
import { legal, legalUpdated } from "@/data/legal";

const doc = legal.en.terms;

export const metadata = pageMeta({ title: doc.title, description: doc.description, path: "/terms" });

export default function Page() {
  return <LegalPage title={doc.title} updated={legalUpdated.en} sections={doc.sections} />;
}
