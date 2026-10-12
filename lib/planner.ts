/** Trip planner model + validation, shared by the client form and /api/plan. */

export type PlannerData = {
  // 1. When
  arrivalDate: string;
  nights: number;
  dateFlexibility: "exact" | "approximate" | "";
  travellerType: "first-timer" | "experienced" | "";
  // 2. Where
  routes: string[];
  routeNotes: string;
  // 3. Budget
  budget: string;
  // 4. Who
  adults: number;
  children: number;
  childAges: (number | null)[];
  addOns: string[];
  // 5. Contact
  name: string;
  email: string;
  phoneCode: string;
  phone: string;
  contactMethods: string[];
  notes: string;
};

export const emptyPlanner: PlannerData = {
  arrivalDate: "",
  nights: 10,
  dateFlexibility: "",
  travellerType: "",
  routes: [],
  routeNotes: "",
  budget: "",
  adults: 2,
  children: 0,
  childAges: [],
  addOns: [],
  name: "",
  email: "",
  phoneCode: "+1",
  phone: "",
  contactMethods: ["Email"],
  notes: "",
};

export const plannerSteps = [
  { id: "when", label: "When" },
  { id: "where", label: "Where" },
  { id: "budget", label: "Budget" },
  { id: "who", label: "Who" },
  { id: "contact", label: "Contact" },
] as const;

export type PlannerErrors = Partial<Record<keyof PlannerData | `childAges.${number}`, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function todayIso() {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

export function validateStep(step: number, d: PlannerData): PlannerErrors {
  const e: PlannerErrors = {};
  if (step === 0) {
    if (!d.arrivalDate) e.arrivalDate = "Please choose an arrival date (an approximate one is fine).";
    else if (d.arrivalDate < todayIso()) e.arrivalDate = "Your arrival date needs to be in the future.";
    if (!Number.isInteger(d.nights) || d.nights < 1 || d.nights > 30) e.nights = "Choose between 1 and 30 nights.";
    if (!d.dateFlexibility) e.dateFlexibility = "Are these dates exact or approximate?";
    if (!d.travellerType) e.travellerType = "Let us know if this is your first visit.";
  }
  if (step === 1) {
    if (d.routes.length === 0) e.routes = "Pick at least one route, or choose “Not sure yet”.";
    if (d.routeNotes.length > 1000) e.routeNotes = "Please keep this under 1,000 characters.";
  }
  if (step === 2) {
    if (!d.budget) e.budget = "Choose a budget level, or “Not sure yet”.";
  }
  if (step === 3) {
    if (d.adults < 1 || d.adults > 20) e.adults = "At least one adult is required (max 20).";
    if (d.children < 0 || d.children > 10) e.children = "Up to 10 children.";
    for (let i = 0; i < d.children; i++) {
      const age = d.childAges[i];
      if (age === null || age === undefined || age < 0 || age > 17) e[`childAges.${i}`] = "Select an age";
    }
  }
  if (step === 4) {
    if (d.name.trim().length < 2) e.name = "Please tell us your name.";
    if (!emailRe.test(d.email.trim())) e.email = "Please enter a valid email address.";
    const needsPhone = d.contactMethods.includes("WhatsApp") || d.contactMethods.includes("Telephone");
    const digits = d.phone.replace(/\D/g, "");
    if (needsPhone && digits.length < 6) e.phone = "Add a phone number so we can reach you on WhatsApp or by phone.";
    else if (d.phone && (digits.length < 6 || digits.length > 15)) e.phone = "Please enter a valid phone number.";
    if (d.contactMethods.length === 0) e.contactMethods = "Choose at least one way to contact you.";
    if (d.notes.length > 3000) e.notes = "Please keep this under 3,000 characters.";
  }
  return e;
}

export function validateAll(d: PlannerData): PlannerErrors {
  return plannerSteps.reduce<PlannerErrors>((acc, _, i) => ({ ...acc, ...validateStep(i, d) }), {});
}
