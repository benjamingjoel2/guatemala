import { NextResponse } from "next/server";
import { emailConfigured, renderEmail, sendEmail } from "@/lib/email";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string; website?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  // Honeypot: real visitors never see or fill this field
  if (body.website) return NextResponse.json({ ok: true });

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  if (name.length < 2 || !emailRe.test(email) || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ ok: false, message: "Validation failed" }, { status: 422 });
  }
  console.log("[contact] New message", { name, email });

  if (!emailConfigured()) {
    console.warn("[contact] RESEND_API_KEY is not set; message logged but not emailed");
    return NextResponse.json({ ok: true });
  }

  const { text, html } = renderEmail("New message from the website", `${name} wrote via the contact form.`, [
    ["Name", name],
    ["Email", email],
    ["Message", message],
  ]);
  const result = await sendEmail({ subject: `Website message from ${name}`, text, html, replyTo: email });
  if (!result.sent) {
    console.error("[contact] Email failed", result.error);
    return NextResponse.json({ ok: false, message: "Could not send your message" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
