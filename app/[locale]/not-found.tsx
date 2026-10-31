"use client";

import { useT } from "@/i18n/client";
import Image from "next/image";
import { img } from "@/data/images";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  const t = useT();
  return (
    <section className="relative flex min-h-[90svh] items-center justify-center overflow-hidden">
      <Image src={img.aboveClouds.src} alt="" fill sizes="100vw" className="object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 to-ink" />
      <div className="gutter relative flex flex-col items-center gap-6 pt-20 text-center">
        <p className="t-display text-bone/90">404</p>
        <h1 className="t-h3">{t("This trail goes nowhere, even for us.")}</h1>
        <p className="t-lg max-w-md font-normal text-mute">{t("The page you were looking for has moved or never existed. Let's get you back on the map.")}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">{t("Back to home")}</ButtonLink>
          <ButtonLink href="/destinations" variant="outline">{t("Browse destinations")}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
