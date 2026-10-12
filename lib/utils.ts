import clsx, { type ClassValue } from "clsx";

export const cn = (...inputs: ClassValue[]) => clsx(inputs);

export const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

/** Guatemala's rainy season runs May to October */
export const isRainyMonth = (month: number) => month >= 5 && month <= 10;

export const pad2 = (n: number) => String(n).padStart(2, "0");
