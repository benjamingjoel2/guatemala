import { contact, site } from "@/config/site";

/**
 * Transactional email via Resend (https://resend.com), using its REST API.
 *
 * Environment (set in Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY    required to send; without it, submissions are only logged
 *   ENQUIRY_TO_EMAIL  inbox that receives enquiries (default: contact email in config/site.ts)
 *   EMAIL_FROM        sender, e.g. "Antigua & Beyond <planner@tourground.com>" once the domain
 *                     is verified in Resend (default: Resend's shared test sender)
 */

export type EmailRow = [label: string, value: string];

export const emailConfigured = () => Boolean(process.env.RESEND_API_KEY);

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Plain, readable table layout that renders well in every mail client. */
export function renderEmail(title: string, intro: string, rows: EmailRow[]) {
  const text = [title, "", intro, "", ...rows.map(([k, v]) => `${k}: ${v || "-"}`)].join("\n");
  const html = `<!doctype html><html><body style="margin:0;background:#f7f3ec;font-family:Arial,Helvetica,sans-serif;color:#161a18">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f3ec;padding:24px 12px"><tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #e5dccd">
<tr><td style="padding:24px 28px;border-bottom:4px solid #a94e2f">
<div style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-weight:bold;font-size:22px;color:#a94e2f">${escapeHtml(site.name)}</div>
<div style="font-size:20px;font-weight:bold;margin-top:12px">${escapeHtml(title)}</div>
<div style="font-size:14px;color:#55595a;margin-top:6px">${escapeHtml(intro)}</div>
</td></tr>
<tr><td style="padding:8px 28px 24px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.5">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="padding:10px 12px 10px 0;border-bottom:1px solid #efe8dd;color:#6b6e6a;vertical-align:top;width:34%">${escapeHtml(k)}</td><td style="padding:10px 0;border-bottom:1px solid #efe8dd;vertical-align:top;white-space:pre-wrap">${escapeHtml(v || "-")}</td></tr>`,
  )
  .join("\n")}
</table>
<p style="font-size:12px;color:#6b6e6a;margin-top:18px">Reply to this email to answer the traveller directly.</p>
</td></tr></table></td></tr></table></body></html>`;
  return { text, html };
}

export async function sendEmail({
  subject,
  text,
  html,
  replyTo,
}: {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}): Promise<{ sent: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { sent: false, error: "RESEND_API_KEY not set" };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM || `${site.name} <onboarding@resend.dev>`,
      to: [process.env.ENQUIRY_TO_EMAIL || contact.email],
      subject,
      text,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    return { sent: false, error: `Resend ${res.status}: ${detail.slice(0, 300)}` };
  }
  return { sent: true };
}
