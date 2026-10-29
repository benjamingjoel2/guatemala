import { NextResponse } from "next/server";
import { emptyPlanner, validateAll, type PlannerData } from "@/lib/planner";
import { addOns, budgetOptions, routeCombos } from "@/data/planner";
import { emailConfigured, renderEmail, sendEmail, type EmailRow } from "@/lib/email";

const label = <T extends { id: string }>(list: T[], id: string, key: keyof T) =>
  (list.find((x) => x.id === id)?.[key] as string | undefined) ?? id;

export async function POST(request: Request) {
  let body: Partial<PlannerData> & { website?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field
  if (body.website) return NextResponse.json({ ok: true, reference: "AB-000000" });

  // Only accept known fields
  const data = Object.fromEntries(
    Object.keys(emptyPlanner).map((k) => [k, body[k as keyof PlannerData] ?? emptyPlanner[k as keyof PlannerData]]),
  ) as PlannerData;

  const errors = validateAll(data);
  if (Object.values(errors).some(Boolean)) {
    return NextResponse.json({ ok: false, message: "Validation failed", errors }, { status: 422 });
  }

  const reference = `AB-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  console.log("[trip-planner] New trip request", reference, JSON.stringify(data));

  const travellers = `${data.adults} adult${data.adults === 1 ? "" : "s"}${
    data.children ? `, ${data.children} child${data.children === 1 ? "" : "ren"} (ages ${data.childAges.join(", ")})` : ""
  }`;
  const budget = budgetOptions.find((b) => b.id === data.budget);
  const rows: EmailRow[] = [
    ["Reference", reference],
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone ? `${data.phoneCode} ${data.phone}` : ""],
    ["Contact by", data.contactMethods.join(", ")],
    ["Arrival", `${data.arrivalDate} (${data.dateFlexibility})`],
    ["Length of stay", `${data.nights} nights`],
    ["Been before?", data.travellerType === "experienced" ? "Yes, been before" : "First visit"],
    ["Routes", data.routes.map((r) => label(routeCombos, r, "title")).join(", ")],
    ["Route notes", data.routeNotes],
    ["Budget", budget ? `${budget.title}${budget.perDay ? ` (≈ $${budget.perDay[0]}–${budget.perDay[1]} pp/day)` : ""}` : data.budget],
    ["Travellers", travellers],
    ["Help with", data.addOns.map((a) => label(addOns, a, "label")).join(", ")],
    ["Notes", data.notes],
  ];
  const { text, html } = renderEmail(
    `New trip request ${reference}`,
    `${data.name} sent a trip request through the website planner.`,
    rows,
  );

  if (!emailConfigured()) {
    console.warn("[trip-planner] RESEND_API_KEY is not set; request logged but not emailed");
    return NextResponse.json({ ok: true, reference });
  }

  const result = await sendEmail({
    subject: `Trip request ${reference}: ${data.name}, ${data.nights} nights from ${data.arrivalDate}`,
    text,
    html,
    replyTo: data.email,
  });
  if (!result.sent) {
    console.error("[trip-planner] Email failed", reference, result.error);
    return NextResponse.json({ ok: false, message: "Could not send your request" }, { status: 502 });
  }

  // TODO (optional): send an acknowledgement to data.email and create a CRM lead.
  return NextResponse.json({ ok: true, reference });
}
