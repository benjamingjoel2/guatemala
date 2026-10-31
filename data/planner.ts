import { msg } from "@/i18n/locales";
import type { BudgetOption, RouteCombo } from "./types";
import { img } from "./images";

export const routeCombos: RouteCombo[] = [
  {
    id: "antigua-atitlan",
    title: msg("Antigua & Lake Atitlán"),
    description: msg("Cobbled colonial streets and volcano-ringed lake villages: the perfect introduction to Guatemala."),
    image: img.atitlanDock,
  },
  {
    id: "classic",
    title: msg("Classic Guatemala"),
    description: msg("Antigua, Lake Atitlán and the jungle temples of Tikal, the country's essential trio in one journey."),
    image: img.tikalTemple,
  },
  {
    id: "highlands-markets",
    title: msg("Highlands & markets"),
    description: msg("Maya market towns, weaving villages and mountain roads, from Chichicastenango to Quetzaltenango."),
    image: img.chichiMarket,
  },
  {
    id: "peten-ruins",
    title: msg("Petén & Maya ruins"),
    description: msg("Tikal, Yaxhá and the island town of Flores, deep in the rainforest of northern Guatemala."),
    image: img.tikalPyramid,
  },
  {
    id: "semuc-verapaces",
    title: msg("Semuc Champey & Verapaces"),
    description: msg("Turquoise limestone pools, caves and misty cloud forest in the green heart of Alta Verapaz."),
    image: img.semucPools,
  },
  {
    id: "caribbean",
    title: msg("Caribbean coast"),
    description: msg("Cruise the jungle gorge of the Río Dulce to Livingston, Guatemala's Garifuna town on the sea."),
    image: img.rioDulceBoat,
  },
  {
    id: "volcano",
    title: msg("Volcano adventure"),
    description: msg("Hike Acatenango to watch Volcán de Fuego erupt, plus Pacaya and highland trails at your own pace."),
    image: img.fuegoNight,
  },
  {
    id: "not-sure",
    title: msg("Not sure yet"),
    description: msg("Tell us what you love and your specialist will suggest a route that fits you perfectly."),
    image: img.antiguaArchAgua,
  },
];

export const budgetOptions: BudgetOption[] = [
  {
    id: "comfort",
    title: msg("Comfort"),
    description: msg("Characterful boutique hotels, private transfers and expert local guides for key excursions."),
    perDay: [150, 250],
  },
  {
    id: "premium",
    title: msg("Premium"),
    description: msg("Guatemala's finest boutique hotels and lodges, with private guides and drivers throughout."),
    perDay: [250, 450],
  },
  {
    id: "ultra",
    title: msg("Ultra"),
    description: msg("The best suites and exclusive-use villas, top specialist guides and private flights or helicopters where they add magic."),
    perDay: [450, 900],
  },
  {
    id: "unsure",
    title: msg("Not sure yet"),
    description: msg("We'll show you a few options at different levels so you can see what suits you best."),
    perDay: null,
  },
];

export const addOns: { id: string; label: string; description: string }[] = [
  {
    id: "travel-insurance",
    label: msg("Travel insurance"),
    description: msg("We don't sell insurance, but we strongly recommend it and can point you to trusted providers."),
  },
  {
    id: "international-flights",
    label: msg("International flights"),
    description: msg("Help finding the best routings and times into Guatemala City."),
  },
  {
    id: "domestic-flight-flores",
    label: msg("Domestic flight to Flores"),
    description: msg("A one-hour flight from Guatemala City to Flores for Tikal, instead of a long day on the road."),
  },
  {
    id: "private-drivers",
    label: msg("Private drivers"),
    description: msg("Your own vetted, bilingual-friendly driver for every road transfer."),
  },
  {
    id: "acatenango-hike",
    label: msg("Acatenango hike"),
    description: msg("An overnight private hike to watch Volcán de Fuego erupt, with guides and porters."),
  },
];

export const contactMethods = [msg("Email"), msg("Telephone")] as const;

export const countryCodes: { code: string; label: string }[] = [
  { code: "+1", label: msg("United States / Canada (+1)") },
  { code: "+44", label: msg("United Kingdom (+44)") },
  { code: "+502", label: msg("Guatemala (+502)") },
  { code: "+49", label: msg("Germany (+49)") },
  { code: "+33", label: msg("France (+33)") },
  { code: "+34", label: msg("Spain (+34)") },
  { code: "+31", label: msg("Netherlands (+31)") },
  { code: "+61", label: msg("Australia (+61)") },
  { code: "+64", label: msg("New Zealand (+64)") },
  { code: "+353", label: msg("Ireland (+353)") },
  { code: "+41", label: msg("Switzerland (+41)") },
  { code: "+46", label: msg("Sweden (+46)") },
  { code: "+47", label: msg("Norway (+47)") },
  { code: "+45", label: msg("Denmark (+45)") },
  { code: "+39", label: msg("Italy (+39)") },
  { code: "+52", label: msg("Mexico (+52)") },
  { code: "+55", label: msg("Brazil (+55)") },
  { code: "+81", label: msg("Japan (+81)") },
  { code: "+65", label: msg("Singapore (+65)") },
  { code: "+27", label: msg("South Africa (+27)") },
];
