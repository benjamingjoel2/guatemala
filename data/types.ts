/**
 * Content model. Every page is generated from these types, so moving to a CMS
 * later means mapping CMS entries onto the same shapes.
 */

export type Image = { src: string; alt: string };

export type Region =
  | "antigua"
  | "highlands"
  | "atitlan"
  | "peten"
  | "verapaces"
  | "caribbean"
  | "pacific";

export type BudgetTier = "comfort" | "premium" | "ultra";

export type Difficulty = "Easy" | "Moderate" | "Challenging";

export type Faq = {
  question: string;
  answer: string;
};

export type Destination = {
  slug: string;
  name: string;
  region: Region;
  /** Short line used on cards, e.g. "Colonial heart of the highlands" */
  tagline: string;
  excerpt: string;
  image: Image;
  gallery: Image[];
  /** Recommended time on the ground, e.g. "3–4 nights" */
  idealStay: string;
  /** e.g. "1,530 m" */
  altitude?: string;
  /** Intro paragraphs for the overview section */
  overview: string[];
  /** Months (1–12) that are best for visiting */
  bestMonths: number[];
  bestTimeNote: string;
  highlights: { title: string; text: string }[];
  thingsToDo: string[];
  tips: { title: string; text: string }[];
  faqs: Faq[];
};

export type ExperienceCategory =
  | "Adventure"
  | "Culture"
  | "Nature"
  | "Food & coffee"
  | "Celebrations"
  | "Learning"
  | "Special occasions";

export type Experience = {
  slug: string;
  title: string;
  category: ExperienceCategory;
  tagline: string;
  excerpt: string;
  image: Image;
  gallery: Image[];
  /** e.g. "2 days, 1 night" or "Half day" */
  duration: string;
  difficulty: Difficulty;
  /** Base USD, per person */
  priceFrom: number;
  destinationSlugs: string[];
  overview: string[];
  includes: string[];
  goodToKnow: string[];
  bestFor: string[];
  /** Best months, if seasonal (1–12) */
  season?: string;
};

export type ItineraryDay = {
  /** e.g. "Day 1" or "Days 4–5" */
  day: string;
  title: string;
  text: string;
  overnight?: string;
  meals?: string;
};

export type Tour = {
  slug: string;
  title: string;
  days: number;
  nights: number;
  regions: Region[];
  destinationSlugs: string[];
  image: Image;
  gallery: Image[];
  summary: string;
  /** Inclusion line shown on cards, e.g. "Breakfasts · 6 guided activities · All private transfers" */
  inclusionLine: string;
  highlights: string[];
  /** Base USD, per person, based on two travelling together */
  priceFrom: number;
  budget: BudgetTier;
  style: string;
  overview: string[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  bestFor: string[];
  featured?: boolean;
};

export type StayType =
  | "Boutique colonial hotel"
  | "Lakeside lodge"
  | "Jungle lodge"
  | "Coffee finca"
  | "Eco lodge"
  | "Beach hotel";

export type Stay = {
  slug: string;
  name: string;
  type: StayType;
  destinationSlug: string;
  location: string;
  image: Image;
  gallery: Image[];
  excerpt: string;
  description: string[];
  /** Base USD, per person per night, two sharing */
  priceFrom: number;
  rooms: number;
  amenities: string[];
  whyWeLoveIt: string[];
};

export type FaqCategory =
  | "Planning"
  | "Entry & borders"
  | "Safety & health"
  | "Getting around"
  | "Money"
  | "Activities";

export type SiteFaq = Faq & { id: string; category: FaqCategory };

export type RouteCombo = {
  id: string;
  title: string;
  description: string;
  image: Image;
};

export type BudgetOption = {
  id: BudgetTier | "unsure";
  title: string;
  description: string;
  /** Approx USD per person per day, null for "not sure yet" */
  perDay: [number, number] | null;
};

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  image: Image;
  author: string;
};
