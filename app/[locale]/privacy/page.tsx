import { setLocale, getLocale, trusted } from "@/i18n/server";
import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/detail/LegalPage";
import { legal, legalUpdated } from "@/data/legal";

// Legal text is written per language in data/legal.ts, so it is marked as already translated.
function doc() {
  const d = (legal[getLocale()] ?? legal.en).privacy;
  trusted(d.title, d.description);
  return d;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  return pageMeta({ title: doc().title, description: doc().description, path: "/privacy" });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  const d = doc();
  return <LegalPage title={d.title} updated={legalUpdated[getLocale()] ?? legalUpdated.en} sections={d.sections} />;
}
