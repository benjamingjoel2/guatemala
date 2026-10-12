"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { addOns, budgetOptions, contactMethods, countryCodes, routeCombos } from "@/data/planner";
import { whatsappHref } from "@/config/site";
import { emptyPlanner, plannerSteps, validateStep, type PlannerData, type PlannerErrors } from "@/lib/planner";
import { Chip, Field, Fieldset, Stepper, inputClass } from "@/components/ui/form";
import { Arrow, buttonClass } from "@/components/ui/Button";
import { Price } from "@/components/ui/Price";
import { IconCheck } from "@/components/ui/icons";
import { cn, pad2 } from "@/lib/utils";
import { postJson } from "@/lib/api";

const STORAGE_KEY = "ab-trip-planner-v1";

const stepCopy = [
  { title: "When are you travelling?", text: "Rough dates are perfect. We will fine-tune together." },
  { title: "Where would you like to go?", text: "Pick one or more routes. Every one of them can be mixed and matched." },
  { title: "What budget feels right?", text: "Approximate per person, per day, including hotels, private transport, guides and most activities." },
  { title: "Who is coming along?", text: "Tell us about your group and anything you would like us to arrange." },
  { title: "How can we reach you?", text: "Your specialist will reply within one working day." },
];

export function TripPlanner({ presetRoute, onDone, compact = false }: { presetRoute?: string; onDone?: () => void; compact?: boolean }) {
  const [data, setData] = useState<PlannerData>(emptyPlanner);
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [errors, setErrors] = useState<PlannerErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [reference, setReference] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  // Restore saved progress
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as { data: PlannerData; step: number };
        setData({ ...emptyPlanner, ...saved.data });
        setStep(Math.min(Math.max(saved.step ?? 0, 0), plannerSteps.length - 1));
      }
    } catch {}
    const preset = presetRoute ?? new URLSearchParams(window.location.search).get("route") ?? undefined;
    if (preset && routeCombos.some((r) => r.id === preset)) {
      setData((d) => (d.routes.includes(preset) ? d : { ...d, routes: [...d.routes.filter((r) => r !== "not-sure"), preset] }));
    }
    setHydrated(true);
  }, [presetRoute]);

  // Persist progress
  useEffect(() => {
    if (!hydrated || status === "done") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, step }));
    } catch {}
  }, [data, step, hydrated, status]);

  // Move focus to the step heading for screen-reader and keyboard users
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step, status]);

  const set = <K extends keyof PlannerData>(key: K, value: PlannerData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const toggle = (key: "routes" | "addOns" | "contactMethods", value: string) => {
    setData((d) => {
      let list = d[key].includes(value) ? d[key].filter((v) => v !== value) : [...d[key], value];
      if (key === "routes") {
        if (value === "not-sure" && list.includes("not-sure")) list = ["not-sure"];
        else if (value !== "not-sure") list = list.filter((v) => v !== "not-sure");
      }
      return { ...d, [key]: list };
    });
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const setChildren = (n: number) => {
    setData((d) => ({ ...d, children: n, childAges: Array.from({ length: n }, (_, i) => d.childAges[i] ?? null) }));
  };

  const next = () => {
    const e = validateStep(step, data);
    setErrors(e);
    if (Object.values(e).some(Boolean)) {
      // focus first invalid control
      requestAnimationFrame(() => {
        const el = document.querySelector<HTMLElement>("[data-planner] [aria-invalid='true'], [data-planner] [role='alert']");
        el?.scrollIntoView({ block: "center", behavior: "smooth" });
        if (el && "focus" in el) el.focus({ preventScroll: true });
      });
      return;
    }
    if (step < plannerSteps.length - 1) {
      setDir(1);
      setStep((s) => s + 1);
    } else {
      submit();
    }
  };

  const back = () => {
    setErrors({});
    setDir(-1);
    setStep((s) => Math.max(0, s - 1));
  };

  const goTo = (i: number) => {
    if (i >= step) return;
    setErrors({});
    setDir(-1);
    setStep(i);
  };

  async function submit() {
    setStatus("submitting");
    try {
      const { ok, json } = await postJson<{ ok: boolean; reference?: string; errors?: PlannerErrors; message?: string }>("/api/plan", data);
      if (!ok || !json.ok) {
        if (json.errors) setErrors(json.errors);
        throw new Error(json.message ?? "Request failed");
      }
      setReference(json.reference ?? null);
      setStatus("done");
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
    } catch {
      setStatus("error");
    }
  }

  const restart = () => {
    setData(emptyPlanner);
    setStep(0);
    setStatus("idle");
    setReference(null);
  };

  if (status === "done") {
    return <Confirmation data={data} reference={reference} onRestart={restart} onDone={onDone} headingRef={headingRef} />;
  }

  const minDate = new Date().toISOString().slice(0, 10);

  return (
    <div data-planner className="flex flex-col">
      {/* Progress indicator */}
      <nav aria-label="Trip planner progress" className="mb-10">
        <ol className="grid grid-cols-5 gap-1.5">
          {plannerSteps.map((s, i) => {
            const state = i < step ? "done" : i === step ? "current" : "todo";
            return (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  disabled={i >= step}
                  aria-label={`Step ${i + 1}: ${s.label}${state === "done" ? " (completed, go back)" : state === "current" ? " (current step)" : ""}`}
                  aria-current={state === "current" ? "step" : undefined}
                  className="group flex w-full flex-col gap-2 text-left disabled:cursor-default"
                >
                  <span className="relative h-0.5 w-full overflow-hidden bg-line-strong">
                    <motion.span
                      className="absolute inset-y-0 left-0 bg-terra"
                      initial={false}
                      animate={{ width: state === "todo" ? "0%" : "100%" }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </span>
                  <span className={cn("t-xs flex items-center gap-1.5", state === "todo" ? "text-faint" : "text-bone", state === "done" && "group-hover:text-adobe")}>
                    <span className="hidden sm:inline">{pad2(i + 1)}</span>
                    {state === "done" ? <IconCheck className="size-3 text-jade-light sm:hidden" /> : null}
                    <span className={cn(state === "current" ? "inline" : "hidden sm:inline")}>{s.label}</span>
                    <span className="sr-only">{state === "done" ? " (completed)" : state === "current" ? " (current step)" : ""}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="mb-8 flex flex-col gap-3">
        <p className="t-xs text-mute">
          Step {step + 1} of {plannerSteps.length}
        </p>
        <h2 ref={headingRef} tabIndex={-1} className={cn(compact ? "t-h3" : "t-h2", "focus:outline-none")}>
          {stepCopy[step].title}
        </h2>
        <p className="t-md max-w-2xl font-normal text-mute">{stepCopy[step].text}</p>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div
            key={step}
            custom={dir}
            initial={{ opacity: 0, x: dir * 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -30 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 0 && (
              <div className="grid gap-10 md:grid-cols-2">
                <Field label="Arrival date" htmlFor="arrivalDate" error={errors.arrivalDate} required>
                  <input
                    id="arrivalDate"
                    type="date"
                    min={minDate}
                    value={data.arrivalDate}
                    onChange={(e) => set("arrivalDate", e.target.value)}
                    aria-invalid={!!errors.arrivalDate}
                    aria-describedby={errors.arrivalDate ? "arrivalDate-error" : undefined}
                    className={inputClass}
                  />
                </Field>
                <Field label={`Length of stay: ${data.nights} night${data.nights === 1 ? "" : "s"}`} htmlFor="nights" error={errors.nights} required>
                  <div className="flex items-center gap-5 pt-2">
                    <input
                      id="nights"
                      type="range"
                      min={1}
                      max={30}
                      value={data.nights}
                      onChange={(e) => set("nights", parseInt(e.target.value, 10))}
                      aria-valuetext={`${data.nights} nights`}
                      className="h-1 flex-1 cursor-pointer appearance-none bg-line-strong accent-terra"
                    />
                    <Stepper id="nights-number" label="nights" value={data.nights} min={1} max={30} onChange={(v) => set("nights", v)} />
                  </div>
                </Field>
                <Fieldset legend="Are your dates…" error={errors.dateFlexibility} required>
                  <div role="radiogroup" aria-label="Date flexibility" className="flex flex-wrap gap-2">
                    <Chip selected={data.dateFlexibility === "exact"} onClick={() => set("dateFlexibility", "exact")}>Exact</Chip>
                    <Chip selected={data.dateFlexibility === "approximate"} onClick={() => set("dateFlexibility", "approximate")}>Approximate / flexible</Chip>
                  </div>
                </Fieldset>
                <Fieldset legend="Have you been to Guatemala before?" error={errors.travellerType} required>
                  <div role="radiogroup" aria-label="Traveller experience" className="flex flex-wrap gap-2">
                    <Chip selected={data.travellerType === "first-timer"} onClick={() => set("travellerType", "first-timer")}>First time</Chip>
                    <Chip selected={data.travellerType === "experienced"} onClick={() => set("travellerType", "experienced")}>I&apos;ve been before</Chip>
                  </div>
                </Fieldset>
              </div>
            )}

            {step === 1 && (
              <Fieldset legend="Choose your route combinations (select as many as you like)" error={errors.routes} required>
                <div role="group" className="grid grid-cols-2 gap-2 md:grid-cols-4">
                  {routeCombos.map((r) => {
                    const selected = data.routes.includes(r.id);
                    return (
                      <button
                        key={r.id}
                        type="button"
                        role="checkbox"
                        aria-checked={selected}
                        onClick={() => toggle("routes", r.id)}
                        className={cn(
                          "theme-dark group relative flex aspect-[4/5] flex-col justify-end overflow-hidden border text-left transition-colors md:aspect-[3/4]",
                          selected ? "border-jade-light" : "border-line",
                        )}
                      >
                        <Image src={r.image.src} alt="" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <span className={cn("absolute inset-0 transition-colors", selected ? "bg-jade/45" : "bg-gradient-to-t from-ink via-ink/40 to-ink/0")} />
                        <span
                          aria-hidden
                          className={cn(
                            "absolute right-3 top-3 flex size-6 items-center justify-center border transition-colors",
                            selected ? "border-bone bg-bone text-ink" : "border-bone/60 bg-ink/30",
                          )}
                        >
                          {selected && <IconCheck />}
                        </span>
                        <span className="relative flex flex-col gap-1 p-3 md:p-4">
                          <span className="t-lg font-semibold leading-tight">{r.title}</span>
                          <span className="t-xs hidden text-bone/75 md:block">{r.description}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
                <Field label="Anything specific in mind? (optional)" htmlFor="routeNotes" error={errors.routeNotes} className="mt-8">
                  <textarea
                    id="routeNotes"
                    rows={2}
                    value={data.routeNotes}
                    onChange={(e) => set("routeNotes", e.target.value)}
                    placeholder="e.g. We'd love a night on a coffee farm and to see a quetzal"
                    className={cn(inputClass, "resize-none")}
                  />
                </Field>
              </Fieldset>
            )}

            {step === 2 && (
              <Fieldset legend="Budget per person, per day" error={errors.budget} required>
                <div role="radiogroup" aria-label="Budget" className="grid gap-2 md:grid-cols-2">
                  {budgetOptions.map((b) => {
                    const selected = data.budget === b.id;
                    return (
                      <button
                        key={b.id}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => set("budget", b.id)}
                        className={cn(
                          "flex flex-col gap-4 border p-5 text-left transition-colors md:p-6",
                          selected ? "border-jade-light bg-jade/20" : "border-line-strong hover:border-bone/50",
                        )}
                      >
                        <span className="flex items-center justify-between gap-4">
                          <span className="t-h4">{b.title}</span>
                          <span aria-hidden className={cn("flex size-5 items-center justify-center rounded-full border", selected ? "border-jade-light bg-jade-light" : "border-bone/40")}>
                            {selected && <span className="size-2 rounded-full bg-ink" />}
                          </span>
                        </span>
                        <span className="t-md font-normal text-mute">{b.description}</span>
                        <span className="t-lg text-adobe">
                          {b.perDay ? (
                            <>
                              ≈ <Price usd={b.perDay[0]} />–<Price usd={b.perDay[1]} />
                              <span className="t-xs text-mute"> per person / day</span>
                            </>
                          ) : (
                            <span className="t-md">We&apos;ll suggest options at different levels</span>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {data.budget && data.budget !== "unsure" && (
                  <p className="t-xs mt-2 text-faint">
                    For {data.nights} nights that is roughly{" "}
                    <Price usd={(budgetOptions.find((b) => b.id === data.budget)?.perDay?.[0] ?? 0) * (data.nights + 1)} />–
                    <Price usd={(budgetOptions.find((b) => b.id === data.budget)?.perDay?.[1] ?? 0) * (data.nights + 1)} /> per person, excluding international flights.
                  </p>
                )}
              </Fieldset>
            )}

            {step === 3 && (
              <div className="grid gap-10 md:grid-cols-2">
                <Field label="Adults (18+)" htmlFor="adults" error={errors.adults} required>
                  <Stepper id="adults" label="adults" value={data.adults} min={1} max={20} onChange={(v) => set("adults", v)} />
                </Field>
                <Field label="Children (0–17)" htmlFor="children" error={errors.children}>
                  <Stepper id="children" label="children" value={data.children} min={0} max={10} onChange={setChildren} />
                </Field>
                {data.children > 0 && (
                  <Fieldset legend="Children's ages on arrival" className="md:col-span-2" required>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                      {Array.from({ length: data.children }).map((_, i) => {
                        const err = errors[`childAges.${i}`];
                        return (
                          <Field key={i} label={`Child ${i + 1}`} htmlFor={`child-${i}`} error={err}>
                            <select
                              id={`child-${i}`}
                              value={data.childAges[i] ?? ""}
                              aria-invalid={!!err}
                              onChange={(e) => {
                                const ages = [...data.childAges];
                                ages[i] = e.target.value === "" ? null : parseInt(e.target.value, 10);
                                setData((d) => ({ ...d, childAges: ages }));
                                setErrors((x) => ({ ...x, [`childAges.${i}`]: undefined }));
                              }}
                              className={cn(inputClass, "cursor-pointer [&>option]:bg-ink")}
                            >
                              <option value="">Age</option>
                              {Array.from({ length: 18 }).map((_, a) => (
                                <option key={a} value={a}>
                                  {a === 0 ? "Under 1" : `${a} year${a === 1 ? "" : "s"}`}
                                </option>
                              ))}
                            </select>
                          </Field>
                        );
                      })}
                    </div>
                  </Fieldset>
                )}
                <Fieldset legend="Would you like help with…" className="md:col-span-2">
                  <div role="group" className="grid gap-2 sm:grid-cols-2">
                    {addOns.map((a) => {
                      const selected = data.addOns.includes(a.id);
                      return (
                        <button
                          key={a.id}
                          type="button"
                          role="checkbox"
                          aria-checked={selected}
                          onClick={() => toggle("addOns", a.id)}
                          className={cn(
                            "flex items-start gap-3 border p-4 text-left transition-colors",
                            selected ? "border-jade-light bg-jade/20" : "border-line-strong hover:border-bone/50",
                          )}
                        >
                          <span aria-hidden className={cn("mt-0.5 flex size-4 shrink-0 items-center justify-center border", selected ? "border-jade-light bg-jade-light text-ink" : "border-bone/40")}>
                            {selected && <IconCheck className="size-3" />}
                          </span>
                          <span className="flex flex-col gap-1">
                            <span className="t-md">{a.label}</span>
                            <span className="t-xs text-mute">{a.description}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </Fieldset>
              </div>
            )}

            {step === 4 && (
              <div className="grid gap-10 md:grid-cols-2">
                <Field label="Full name" htmlFor="name" error={errors.name} required>
                  <input
                    id="name"
                    autoComplete="name"
                    value={data.name}
                    onChange={(e) => set("name", e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" htmlFor="email" error={errors.email} required>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={(e) => set("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone (with country code)" htmlFor="phone" error={errors.phone} hint="Needed if you'd like WhatsApp or a call">
                  <div className="flex gap-3">
                    <label htmlFor="phoneCode" className="sr-only">Country code</label>
                    <select
                      id="phoneCode"
                      value={data.phoneCode}
                      onChange={(e) => set("phoneCode", e.target.value)}
                      autoComplete="tel-country-code"
                      className={cn(inputClass, "!w-32 shrink-0 cursor-pointer [&>option]:bg-ink")}
                    >
                      {countryCodes.map((c) => (
                        <option key={c.label} value={c.code}>
                          {c.code} {c.label.replace(/ \(.*\)$/, "")}
                        </option>
                      ))}
                    </select>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel-national"
                      value={data.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      placeholder="Phone number"
                      className={cn(inputClass, "min-w-0 flex-1")}
                    />
                  </div>
                </Field>
                <Fieldset legend="Preferred contact methods" error={errors.contactMethods} required>
                  <div role="group" className="flex flex-wrap gap-2">
                    {contactMethods.map((m) => (
                      <Chip key={m} role="checkbox" selected={data.contactMethods.includes(m)} onClick={() => toggle("contactMethods", m)}>
                        {m}
                      </Chip>
                    ))}
                  </div>
                </Fieldset>
                <Field label="Anything else we should know? (optional)" htmlFor="notes" error={errors.notes} className="md:col-span-2">
                  <textarea
                    id="notes"
                    rows={3}
                    value={data.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    placeholder="Special occasions, mobility needs, dietary requirements, must-sees…"
                    className={cn(inputClass, "resize-none")}
                  />
                </Field>
                <p className="t-xs text-faint md:col-span-2">
                  By sending this you agree to our <Link href="/privacy" className="underline hover:text-bone">privacy policy</Link>. We only use your details to plan your trip.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {status === "error" && (
        <p role="alert" className="t-md mt-8 border border-adobe/50 bg-terra/10 p-4 text-adobe">
          We couldn&apos;t send your request just now. Please try again, or message us on{" "}
          <a href={whatsappHref()} className="underline" target="_blank" rel="noopener noreferrer">WhatsApp</a>.
        </p>
      )}

      <div className="mt-12 flex items-center justify-between gap-4 border-t border-line pt-6">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="t-btn h-12 px-1 text-mute transition-colors hover:text-bone disabled:invisible"
        >
          ← Back
        </button>
        <div className="flex items-center gap-4">
          <span className="t-xs hidden text-faint sm:inline">Progress saves automatically</span>
          <button type="button" onClick={next} disabled={status === "submitting"} className={buttonClass("accent", "disabled:opacity-60")}>
            <span>{step === plannerSteps.length - 1 ? (status === "submitting" ? "Sending…" : "Send my trip request") : "Continue"}</span>
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
}

function Confirmation({
  data,
  reference,
  onRestart,
  onDone,
  headingRef,
}: {
  data: PlannerData;
  reference: string | null;
  onRestart: () => void;
  onDone?: () => void;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
}) {
  const routes = data.routes.map((id) => routeCombos.find((r) => r.id === id)?.title).filter(Boolean).join(", ");
  const budget = budgetOptions.find((b) => b.id === data.budget)?.title;
  const rows = [
    ["Arrival", `${data.arrivalDate} (${data.dateFlexibility}) · ${data.nights} nights`],
    ["Routes", routes || "Not sure yet"],
    ["Budget", budget ?? "-"],
    ["Travellers", `${data.adults} adult${data.adults === 1 ? "" : "s"}${data.children ? `, ${data.children} child${data.children === 1 ? "" : "ren"}` : ""}`],
    ["Contact via", data.contactMethods.join(", ")],
  ];
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col gap-8" role="status">
      <span className="flex size-14 items-center justify-center rounded-full bg-jade text-cream">
        <IconCheck className="size-6" />
      </span>
      <div className="flex flex-col gap-4">
        <h2 ref={headingRef} tabIndex={-1} className="t-h2 focus:outline-none">
          Gracias, {data.name.split(" ")[0]}. Your trip is in good hands.
        </h2>
        <p className="t-lg max-w-2xl font-normal text-mute">
          Your request is with our team in Antigua. A dedicated specialist will reply to {data.email} within one working day with first ideas and a few questions.
        </p>
        {reference && <p className="t-md">Reference: <span className="font-semibold text-adobe">{reference}</span></p>}
      </div>
      <dl className="grid border-t border-line">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[8rem_1fr] gap-4 border-b border-line py-3">
            <dt className="t-xs text-mute">{k}</dt>
            <dd className="t-md">{v}</dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a href={whatsappHref(`Hi! I just sent a trip request${reference ? ` (${reference})` : ""}.`)} target="_blank" rel="noopener noreferrer" className={buttonClass("accent")}>
          Say hello on WhatsApp <Arrow />
        </a>
        {onDone ? (
          <button type="button" onClick={onDone} className={buttonClass("outline")}>
            Keep browsing
          </button>
        ) : (
          <Link href="/tours" className={buttonClass("outline")}>
            Browse tours while you wait
          </Link>
        )}
      </div>
      <button type="button" onClick={onRestart} className="t-xs self-start text-faint underline hover:text-bone">
        Start a new request
      </button>
    </motion.div>
  );
}
