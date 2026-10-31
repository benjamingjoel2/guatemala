import { setLocale } from "@/i18n/server";
import { notFound } from "next/navigation";

// Any URL that matches no page renders the localized not-found page inside the site layout.
export default async function CatchAll({ params }: { params: Promise<{ locale: string }> }) {
  setLocale((await params).locale);
  notFound();
}
