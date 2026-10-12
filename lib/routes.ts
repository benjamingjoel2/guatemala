import type { Region } from "@/data/types";

/** Best-guess planner route preset from a set of regions (pre-selects step 2). */
export function routeForRegions(regions: Region[]): string | undefined {
  const has = (r: Region) => regions.includes(r);
  if (has("caribbean")) return "caribbean";
  if (has("peten") && has("atitlan")) return "classic";
  if (has("verapaces")) return "semuc-verapaces";
  if (has("peten")) return "peten-ruins";
  if (has("highlands")) return "highlands-markets";
  if (has("atitlan") || has("antigua")) return "antigua-atitlan";
  return undefined;
}
