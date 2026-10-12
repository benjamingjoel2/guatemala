"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Field, inputClass } from "@/components/ui/form";
import { Arrow, buttonClass } from "@/components/ui/Button";
import { IconCheck } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { postJson } from "@/lib/api";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (form.name.trim().length < 2) errs.name = "Please tell us your name.";
    if (!emailRe.test(form.email.trim())) errs.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10) errs.message = "A few more words, please (10+ characters).";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    try {
      const res = await postJson("/api/contact", form);
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "done" ? (
        <motion.div key="done" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6" role="status">
          <span className="flex size-12 items-center justify-center rounded-full bg-jade"><IconCheck className="size-5" /></span>
          <h2 className="t-h3">Thank you, {form.name.split(" ")[0]}.</h2>
          <p className="t-lg font-normal text-mute">Your message is with our team in Antigua. We will reply to {form.email} within one working day.</p>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={onSubmit} noValidate className="flex flex-col gap-10" exit={{ opacity: 0 }}>
          <div className="grid gap-10 md:grid-cols-2">
            <Field label="Name" htmlFor="c-name" error={errors.name} required>
              <input id="c-name" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} aria-invalid={!!errors.name} aria-describedby={errors.name ? "c-name-error" : undefined} placeholder="Your name" className={inputClass} />
            </Field>
            <Field label="Email" htmlFor="c-email" error={errors.email} required>
              <input id="c-email" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} aria-invalid={!!errors.email} aria-describedby={errors.email ? "c-email-error" : undefined} placeholder="Enter your email" className={inputClass} />
            </Field>
          </div>
          <Field label="Message" htmlFor="c-message" error={errors.message} required>
            <textarea id="c-message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} aria-invalid={!!errors.message} aria-describedby={errors.message ? "c-message-error" : undefined} placeholder="Tell us about your trip, or ask us anything" className={cn(inputClass, "resize-none")} />
          </Field>
          {status === "error" && <p role="alert" className="t-md text-adobe">Something went wrong. Please try again or email us directly.</p>}
          <button type="submit" disabled={status === "sending"} className={buttonClass("accent", "self-start disabled:opacity-60")}>
            <span>{status === "sending" ? "Sending…" : "Send message"}</span>
            <Arrow />
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
