"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { img } from "@/data/images";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconCheck } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { postJson } from "@/lib/api";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** "The Guatemala Guide" lead magnet with inline validation and success state. */
export function GuideSignup({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!emailRe.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setStatus("loading");
    try {
      const res = await postJson("/api/newsletter", { email: email.trim(), source: "guatemala-guide" });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <section className={cn("gutter", compact ? "py-10" : "section-pad")} aria-labelledby="guide-title">
      <div className="grid overflow-hidden border border-line bg-ink-2 lg:grid-cols-[minmax(0,26rem)_1fr]">
        <div className="theme-dark relative min-h-64 lg:min-h-full">
          <Image src={img.textile.src} alt={img.textile.alt} fill sizes="(min-width: 1024px) 26rem, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          <div className="absolute bottom-5 left-5 border border-bone/30 bg-ink/60 px-4 py-3 backdrop-blur">
            <p className="t-eyebrow text-adobe">Free PDF · 32 pages</p>
            <p className="t-lg">The Guatemala Guide</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-6 p-6 md:p-12">
          <Eyebrow>Free guide</Eyebrow>
          <h2 id="guide-title" className="t-h2">Get The Guatemala Guide</h2>
          <p className="t-lg max-w-xl font-normal text-mute">
            Our specialists&apos; best routes, when to go month by month, what to pack for Acatenango and the hotels we book for our own families. Delivered to your inbox, plus the occasional letter from Antigua.
          </p>
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-4 border border-jade/50 bg-jade/15 p-5"
                role="status"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-jade text-cream"><IconCheck /></span>
                <div>
                  <p className="t-lg">It&apos;s on its way.</p>
                  <p className="t-md font-normal text-mute">Check {email} for The Guatemala Guide. ¡Buen viaje!</p>
                </div>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={onSubmit} noValidate className="flex flex-col gap-2" exit={{ opacity: 0 }}>
                <label htmlFor="guide-email" className="sr-only">Email address</label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="guide-email"
                    type="email"
                    autoComplete="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={!!error}
                    aria-describedby={error ? "guide-error" : "guide-note"}
                    className="h-12 flex-1 border border-line-strong bg-transparent px-4 text-bone placeholder:text-faint focus:border-jade-light focus:outline-none"
                  />
                  <button type="submit" disabled={status === "loading"} className="t-btn h-12 bg-terra px-6 text-cream transition-colors hover:bg-terra-dark disabled:opacity-60">
                    {status === "loading" ? "Sending…" : "Send me the guide"}
                  </button>
                </div>
                {error ? (
                  <p id="guide-error" className="t-xs text-adobe" role="alert">{error}</p>
                ) : (
                  <p id="guide-note" className="t-xs text-faint">No spam. Unsubscribe in one click.</p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
