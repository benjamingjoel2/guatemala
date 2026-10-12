import { currencies, type CurrencyCode } from "@/config/site";

/** Convert a base-USD amount and format it in the given currency. */
export function formatPrice(usd: number, code: CurrencyCode = "USD") {
  const c = currencies[code];
  const value = usd * c.rate;
  // Round to friendly numbers: GTQ to nearest 10, others to nearest 5
  const step = code === "GTQ" ? 10 : 5;
  const rounded = Math.round(value / step) * step;
  const n = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(rounded);
  return `${c.symbol}${n}`;
}
