import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/detail/LegalPage";
import { legal, legalUpdated } from "@/data/legal";

const doc = legal.en.cookies;

export const metadata = pageMeta({ title: doc.title, description: doc.description, path: "/cookies" });

export default function Page() {
  return <LegalPage title={doc.title} updated={legalUpdated.en} sections={doc.sections} />;
}
