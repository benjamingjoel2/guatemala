import { NextResponse } from "next/server";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  if (name.length < 2 || !emailRe.test(email) || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ ok: false, message: "Validation failed" }, { status: 422 });
  }
  console.log("[contact] New message", { name, email, message });
  // TODO: forward to the team inbox / CRM (same integration as /api/plan).
  return NextResponse.json({ ok: true });
}
