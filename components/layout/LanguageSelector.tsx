"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useT } from "@/i18n/client";
import { localeNames, locales, localizeHref, stripLocale } from "@/i18n/locales";

/** EN · FR · DE · ES — links to the same page in each language. */
export function LanguageSelector({ className = "" }: { className?: string }) {
  const t = useT();
  const current = useLocale();
  const path = stripLocale(usePathname() ?? "/");
  return (
    <nav aria-label={t("Language")} className={className}>
      <ul className="flex items-center gap-0.5 text-[0.78rem] font-semibold tracking-[0.08em]">
        {locales.map((l, i) => (
          <li key={l} className="flex items-center">
            {i > 0 && <span aria-hidden className="px-0.5 text-faint">·</span>}
            <NextLink
              href={localizeHref(l, path)}
              hrefLang={l}
              lang={l}
              aria-current={l === current ? "true" : undefined}
              title={localeNames[l]}
              className={`px-1 py-1 uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade-light ${
                l === current ? "text-bone underline decoration-terra decoration-2 underline-offset-4" : "text-mute hover:text-bone"
              }`}
            >
              {l}
              <span className="sr-only"> ({localeNames[l]})</span>
            </NextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
