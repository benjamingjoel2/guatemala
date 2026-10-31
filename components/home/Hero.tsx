"use client";

import { useT } from "@/i18n/client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { img } from "@/data/images";
import { ButtonLink } from "@/components/ui/Button";
import { PlanButton } from "@/components/ui/PlanButton";
import { HuipilStripe } from "@/components/ui/HuipilStripe";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="theme-dark relative flex min-h-[100svh] flex-col overflow-hidden bg-ink" aria-labelledby="hero-title">
      <motion.div style={{ scale: imgScale, y: imgY }} className="absolute inset-0">
        <Image
          src={img.antiguaStreetAgua.src}
          alt={t(img.antiguaStreetAgua.alt)}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_40%]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/10 to-ink" />
      <div className="absolute inset-0 bg-ink/15" />

      <motion.div style={{ y: textY, opacity: fade }} className="gutter relative z-10 flex flex-1 flex-col justify-end pb-10 pt-32 md:pb-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* CSS-only entrance so the intro (LCP element) paints before hydration */}
          <p className="t-xxl max-w-xl text-bone motion-safe:animate-[rise_1s_cubic-bezier(.22,1,.36,1)_both]">
            {t("Tailor-made Guatemala trips with one dedicated local specialist, from your first message to the day you fly home.")}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.7 }}
            className="flex flex-col gap-3 xs:flex-row"
          >
            <PlanButton>{t("Start planning")}</PlanButton>
            <ButtonLink href="/tours" variant="outline" className="backdrop-blur-sm">
              {t("Explore tours")}
            </ButtonLink>
          </motion.div>
        </div>

        <h1 id="hero-title" className="mt-10 md:mt-14">
          <span className="sr-only">{t("Antigua & Beyond: tailor-made trips to Guatemala.")} </span>
          <span aria-hidden className="mb-1 block overflow-hidden font-serif text-[clamp(1.5rem,2.6vw,2.5rem)] font-medium italic leading-tight text-bone/85 md:mb-0">
            <motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease, delay: 0.2 }}>
              {t("Start in Antigua.")}
            </motion.span>
          </span>
          <span aria-hidden className="t-display -mb-[0.14em] block overflow-hidden whitespace-nowrap pb-[0.2em]">
            {"Go beyond".split("").map((ch, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, ease, delay: 0.25 + i * 0.04 }}
              >
                {ch === " " ? " " : ch}
              </motion.span>
            ))}
          </span>
        </h1>
      </motion.div>
      <HuipilStripe className="relative z-10" />
    </section>
  );
}
