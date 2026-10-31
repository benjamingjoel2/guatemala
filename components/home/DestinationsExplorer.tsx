"use client";

import { useT } from "@/i18n/client";
import Image from "next/image";
import Link from "@/i18n/Link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Destination } from "@/data/types";
import { regionLabels } from "@/config/site";
import { cn } from "@/lib/utils";
import { SectionHead } from "@/components/ui/SectionHead";
import { ButtonLink } from "@/components/ui/Button";

/** Region list with hover-reveal image (desktop) and image rows (mobile) — reference "explore by destination". */
export function DestinationsExplorer({ destinations }: { destinations: Destination[] }) {
  const t = useT();
  const [active, setActive] = useState(0);
  const current = destinations[active];

  return (
    <section className="gutter section-pad" aria-label={t("Explore by destination")}>
      <SectionHead
        eyebrow={t("Destinations")}
        title={t("Explore by destination")}
        text={t("From Antigua's cobbles to the temples of Petén: twelve places our specialists know first-hand, and how long to give each one.")}
        action={<ButtonLink href="/destinations" variant="outline">{t("All destinations")}</ButtonLink>}
        className="mb-10 md:mb-14"
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,32rem)]">
        <ul className="-mx-5 border-t border-line md:-mx-10 lg:mx-0">
          {destinations.map((d, i) => (
            <li key={d.slug} className="border-b border-line">
              <Link
                href={`/destinations/${d.slug}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group flex flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-10 lg:px-0"
              >
                <span className="flex items-baseline gap-4">
                  <span className="t-xs w-6 text-faint">{String(i + 1).padStart(2, "0")}</span>
                  <span className={cn("t-h4 transition-all duration-300 group-hover:translate-x-2", active === i ? "lg:text-bone" : "lg:text-bone/50")}>
                    {d.name}
                  </span>
                </span>
                <span className="t-md flex items-center gap-4 pl-10 text-mute md:pl-0">
                  <span>/ {t(regionLabels[d.region])}</span>
                  <span className="hidden w-24 text-right text-faint md:inline">{d.idealStay}</span>
                  <span aria-hidden className="text-terra opacity-0 transition-opacity group-hover:opacity-100">→</span>
                </span>
                <span className="relative block aspect-[335/240] overflow-hidden lg:hidden">
                  <Image src={d.image.src} alt={d.image.alt} fill sizes="100vw" className="object-cover" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative hidden lg:block">
          <div className="theme-dark sticky top-28 aspect-[4/5] overflow-hidden bg-ink">
            <AnimatePresence initial={false}>
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image src={current.image.src} alt={current.image.alt} fill sizes="32rem" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="t-xs mb-2 text-adobe">{current.tagline}</p>
                  <p className="t-md font-normal text-bone/85">{current.excerpt}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
