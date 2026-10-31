"use client";

import { useT, useTf } from "@/i18n/client";
import Link from "@/i18n/Link";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/** Stepped "volcano / pyramid" mark in orange shades. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={cn("size-5", className)}>
      <path d="M12 3 21 20H3L12 3Z" fill="var(--color-ember-1)" />
      <path d="M12 7.5 17.5 18h-11L12 7.5Z" fill="var(--color-ember-3)" />
      <path d="M12 12 14.6 17H9.4L12 12Z" fill="var(--color-ember-5)" />
    </svg>
  );
}

/** Wordmark: italic Cormorant Garamond with a swash ampersand, in brand orange. */
export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  const t = useT();
  const tf = useTf();
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={tf("{name} — home", { name: site.name })}
      className={cn("group inline-flex items-center gap-2.5 text-logo", className)}
    >
      <LogoMark className="size-[1.375rem] transition-transform duration-500 group-hover:-translate-y-0.5" />
      <span className="whitespace-nowrap font-serif text-[1.75rem] font-bold italic leading-none tracking-[-0.01em] md:text-[2rem]">
        {t("Antigua")}<span className="mx-[0.06em] inline-block text-[1.12em] font-semibold">{t("&")}</span>{t("Beyond")}
      </span>
    </Link>
  );
}
