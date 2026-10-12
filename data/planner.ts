import type { BudgetOption, RouteCombo } from "./types";
import { img } from "./images";

export const routeCombos: RouteCombo[] = [
  {
    id: "antigua-atitlan",
    title: "Antigua & Lake Atitlán",
    description: "Cobbled colonial streets and volcano-ringed lake villages: the perfect introduction to Guatemala.",
    image: img.atitlanDock,
  },
  {
    id: "classic",
    title: "Classic Guatemala",
    description: "Antigua, Lake Atitlán and the jungle temples of Tikal, the country's essential trio in one journey.",
    image: img.tikalTemple,
  },
  {
    id: "highlands-markets",
    title: "Highlands & markets",
    description: "Maya market towns, weaving villages and mountain roads, from Chichicastenango to Quetzaltenango.",
    image: img.chichiMarket,
  },
  {
    id: "peten-ruins",
    title: "Petén & Maya ruins",
    description: "Tikal, Yaxhá and the island town of Flores, deep in the rainforest of northern Guatemala.",
    image: img.tikalPyramid,
  },
  {
    id: "semuc-verapaces",
    title: "Semuc Champey & Verapaces",
    description: "Turquoise limestone pools, caves and misty cloud forest in the green heart of Alta Verapaz.",
    image: img.semucPools,
  },
  {
    id: "caribbean",
    title: "Caribbean coast",
    description: "Cruise the jungle gorge of the Río Dulce to Livingston, Guatemala's Garifuna town on the sea.",
    image: img.rioDulceBoat,
  },
  {
    id: "volcano",
    title: "Volcano adventure",
    description: "Hike Acatenango to watch Volcán de Fuego erupt, plus Pacaya and highland trails at your own pace.",
    image: img.fuegoNight,
  },
  {
    id: "not-sure",
    title: "Not sure yet",
    description: "Tell us what you love and your specialist will suggest a route that fits you perfectly.",
    image: img.antiguaArchAgua,
  },
];

export const budgetOptions: BudgetOption[] = [
  {
    id: "comfort",
    title: "Comfort",
    description: "Characterful boutique hotels, private transfers and expert local guides for key excursions.",
    perDay: [150, 250],
  },
  {
    id: "premium",
    title: "Premium",
    description: "Guatemala's finest boutique hotels and lodges, with private guides and drivers throughout.",
    perDay: [250, 450],
  },
  {
    id: "ultra",
    title: "Ultra",
    description: "The best suites and exclusive-use villas, top specialist guides and private flights or helicopters where they add magic.",
    perDay: [450, 900],
  },
  {
    id: "unsure",
    title: "Not sure yet",
    description: "We'll show you a few options at different levels so you can see what suits you best.",
    perDay: null,
  },
];

export const addOns: { id: string; label: string; description: string }[] = [
  {
    id: "travel-insurance",
    label: "Travel insurance",
    description: "We don't sell insurance, but we strongly recommend it and can point you to trusted providers.",
  },
  {
    id: "international-flights",
    label: "International flights",
    description: "Help finding the best routings and times into Guatemala City.",
  },
  {
    id: "domestic-flight-flores",
    label: "Domestic flight to Flores",
    description: "A one-hour flight from Guatemala City to Flores for Tikal, instead of a long day on the road.",
  },
  {
    id: "private-drivers",
    label: "Private drivers",
    description: "Your own vetted, bilingual-friendly driver for every road transfer.",
  },
  {
    id: "acatenango-hike",
    label: "Acatenango hike",
    description: "An overnight private hike to watch Volcán de Fuego erupt, with guides and porters.",
  },
];

export const contactMethods = ["Email", "WhatsApp", "Telephone"] as const;

export const countryCodes: { code: string; label: string }[] = [
  { code: "+1", label: "United States / Canada (+1)" },
  { code: "+44", label: "United Kingdom (+44)" },
  { code: "+502", label: "Guatemala (+502)" },
  { code: "+49", label: "Germany (+49)" },
  { code: "+33", label: "France (+33)" },
  { code: "+34", label: "Spain (+34)" },
  { code: "+31", label: "Netherlands (+31)" },
  { code: "+61", label: "Australia (+61)" },
  { code: "+64", label: "New Zealand (+64)" },
  { code: "+353", label: "Ireland (+353)" },
  { code: "+41", label: "Switzerland (+41)" },
  { code: "+46", label: "Sweden (+46)" },
  { code: "+47", label: "Norway (+47)" },
  { code: "+45", label: "Denmark (+45)" },
  { code: "+39", label: "Italy (+39)" },
  { code: "+52", label: "Mexico (+52)" },
  { code: "+55", label: "Brazil (+55)" },
  { code: "+81", label: "Japan (+81)" },
  { code: "+65", label: "Singapore (+65)" },
  { code: "+27", label: "South Africa (+27)" },
];
