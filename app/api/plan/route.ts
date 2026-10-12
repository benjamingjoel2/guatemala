import { NextResponse } from "next/server";
import { emptyPlanner, validateAll, type PlannerData } from "@/lib/planner";

export async function POST(request: Request) {
  let body: Partial<PlannerData>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON" }, { status: 400 });
  }

  // Only accept known fields
  const data = Object.fromEntries(
    Object.keys(emptyPlanner).map((k) => [k, body[k as keyof PlannerData] ?? emptyPlanner[k as keyof PlannerData]]),
  ) as PlannerData;

  const errors = validateAll(data);
  if (Object.values(errors).some(Boolean)) {
    return NextResponse.json({ ok: false, message: "Validation failed", errors }, { status: 422 });
  }

  const reference = `AB-${Date.now().toString(36).toUpperCase().slice(-6)}`;

  console.log("[trip-planner] New trip request", reference, JSON.stringify(data, null, 2));

  // TODO: Integrate email + CRM:
  //  - send the enquiry to the specialist team (e.g. Resend / Postmark / SendGrid)
  //  - send an acknowledgement email to data.email
  //  - create a lead/deal in the CRM (e.g. HubSpot, Pipedrive, Airtable)

  return NextResponse.json({ ok: true, reference });
}
