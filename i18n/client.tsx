"use client";
// Client components read their (few) strings from this provider, filled by the
// server layout with only the keys in CLIENT_STRINGS, so no dictionary ships to the browser.
import { createContext, useContext } from "react";
import { useParams } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "./locales";

const Messages = createContext<Record<string, string>>({});

export function I18nProvider({ messages, children }: { messages: Record<string, string>; children: React.ReactNode }) {
  return <Messages.Provider value={messages}>{children}</Messages.Provider>;
}

export function useT() {
  const m = useContext(Messages);
  return (s: string) => m[s] ?? s;
}

export function useLocale(): Locale {
  const p = useParams<{ locale?: string }>();
  return isLocale(p?.locale) ? p.locale : defaultLocale;
}

/** Like useT(), with {name} placeholders filled after translating. */
export function useTf() {
  const t = useT();
  return (s: string, vars: Record<string, string | number>) =>
    Object.entries(vars).reduce((acc, [k, v]) => acc.replaceAll(`{${k}}`, String(v)), t(s));
}
