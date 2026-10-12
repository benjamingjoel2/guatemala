/**
 * POST JSON to one of our API routes.
 * In the static preview build (GitHub Pages, no server) submissions are
 * simulated so the forms and success states can still be reviewed.
 */
export const isStaticPreview = process.env.NEXT_PUBLIC_STATIC_PREVIEW === "1";

export async function postJson<T = { ok: boolean; [k: string]: unknown }>(url: string, body: unknown): Promise<{ status: number; ok: boolean; json: T }> {
  if (isStaticPreview) {
    console.info("[static preview] would POST", url, body);
    await new Promise((r) => setTimeout(r, 600));
    const json = { ok: true, reference: `AB-${Date.now().toString(36).toUpperCase().slice(-6)}`, preview: true } as T;
    return { status: 200, ok: true, json };
  }
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const json = (await res.json().catch(() => ({}))) as T;
  return { status: res.status, ok: res.ok, json };
}
