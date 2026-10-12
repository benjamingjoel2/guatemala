import { NextResponse } from "next/server";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: { email?: string; source?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON" }, { status: 400 });
  }
  const email = (body.email ?? "").trim();
  if (!emailRe.test(email)) {
    return NextResponse.json({ ok: false, message: "Invalid email" }, { status: 422 });
  }

  console.log("[newsletter] Signup", { email, source: body.source ?? "unknown" });

  // TODO: add the contact to the email platform (e.g. Mailchimp, ConvertKit, Klaviyo)
  // and trigger delivery of "The Guatemala Guide" PDF.

  return NextResponse.json({ ok: true });
}
