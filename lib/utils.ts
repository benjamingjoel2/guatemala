import { msg } from "@/i18n/locales";
import clsx, { type ClassValue } from "clsx";

export const cn = (...inputs: ClassValue[]) => clsx(inputs);

export const monthNames = [
  msg("Jan"), msg("Feb"), msg("Mar"), msg("Apr"), msg("May"), msg("Jun"),
  msg("Jul"), msg("Aug"), msg("Sep"), msg("Oct"), msg("Nov"), msg("Dec"),
] as const;

/** Guatemala's rainy season runs May to October */
export const isRainyMonth = (month: number) => month >= 5 && month <= 10;

export const pad2 = (n: number) => String(n).padStart(2, "0");
