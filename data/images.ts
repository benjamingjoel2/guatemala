import { msg } from "@/i18n/locales";
/**
 * Placeholder stock photography. Swap any `src` for your own images later;
 * every page references images through this catalog or the data files.
 */
const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75`;

export const img = {
  // Antigua
  antiguaStreetAgua: { src: u("1563442744-3e17a3bf4932"), alt: msg("Cobbled street in Antigua at dusk with Volcán de Agua behind") },
  antiguaArchAgua: { src: u("1697382803552-2304ac2e4a8a"), alt: msg("Santa Catalina Arch framing Volcán de Agua in Antigua") },
  antiguaArchStreet: { src: u("1637966201771-b0b251baa2ef"), alt: msg("Pastel colonial street leading to the yellow Santa Catalina Arch") },
  antiguaRuins: { src: u("1638069790489-b5b7dbeef2b0"), alt: msg("Open-sky colonial ruins with stone arches in Antigua") },
  antiguaFacade: { src: u("1589783500222-4529ddfd87d1"), alt: msg("Weathered baroque church facade under a blue sky") },
  antiguaStreetLife: { src: u("1602120012884-6aa678fa79c7"), alt: msg("People walking along a colonial street in Antigua") },
  antiguaStreet2: { src: u("1589783500610-590247b6b5a6"), alt: msg("Street scene with colonial buildings in Antigua") },
  antiguaYellow: { src: u("1638041778229-afbcdf49fa28"), alt: msg("Woman in traditional dress in front of a yellow wall") },
  semanaSanta: { src: u("1711821495027-e1043141f59a"), alt: msg("Semana Santa procession statue dressed in black and gold") },
  semanaSantaCarpet: { src: u("1711821495001-6949b42a295c"), alt: msg("Flower carpet laid for a Semana Santa procession") },
  // Atitlán
  atitlanDock: { src: u("1528543010705-e7e75169b717"), alt: msg("Wooden dock on Lake Atitlán at dawn with a volcano on the horizon") },
  atitlanPier: { src: u("1650734837211-fc9cc07bb44b"), alt: msg("Pier on Lake Atitlán with boats and volcanoes") },
  atitlanFlowers: { src: u("1532274402911-5a369e4c4bb5"), alt: msg("Stone path through purple flowers to a pier on Lake Atitlán") },
  atitlanBoats: { src: u("1669176877597-da92c8a5bbfa"), alt: msg("Lanchas moored on Lake Atitlán") },
  atitlanWoman: { src: u("1694822717233-5e3d36effdaa"), alt: msg("Traveller sitting on a dock looking at the volcanoes of Atitlán") },
  atitlanPerson: { src: u("1561498713-df04afef20ce"), alt: msg("Person standing on a wooden dock on the lake") },
  atitlanFriends: { src: u("1707871935699-d6c1e23a90d1"), alt: msg("Two women looking out over Lake Atitlán") },
  // Petén
  tikalTemple: { src: u("1551377047-17defc48e143"), alt: msg("Tikal temple rising from the rainforest") },
  tikalPyramid: { src: u("1642436443594-fff5e4dd0d0c"), alt: msg("Maya pyramid in the middle of the Petén forest") },
  tikalCanopy: { src: u("1669025467363-ace9bad030dc"), alt: msg("Stone temple surrounded by trees at Tikal") },
  mayaJungle: { src: u("1683295657082-100f60030303"), alt: msg("Maya structure rising above lush jungle") },
  floresIsland: { src: u("1544527232-c8738c8cb2cc"), alt: msg("Island town of Flores on Lake Petén Itzá") },
  floresTown: { src: u("1715851486674-fb4cdf28d02b"), alt: msg("Colourful lakeside houses of Flores") },
  floresStreet: { src: u("1698869970579-624761921e36"), alt: msg("Cobblestone street lined with colourful houses") },
  floresCobble: { src: u("1698786030860-cf57bc898d2f"), alt: msg("Quiet cobbled lane in a small Guatemalan town") },
  jungleAerial: { src: u("1605265788056-dfea788fb36e"), alt: msg("Aerial view of rainforest and lake") },
  // Semuc / Verapaces
  semucPools: { src: u("1675185457371-aae4e3ea0270"), alt: msg("Turquoise river running through green jungle at Semuc Champey") },
  semucRiver: { src: u("1678997823503-b004cddec120"), alt: msg("River winding through lush forest in Alta Verapaz") },
  semucTurquoise: { src: u("1775479788924-aa0687de25e6"), alt: msg("Turquoise pools flowing through jungle") },
  riverLong: { src: u("1544646280-7ddec974a44e"), alt: msg("Long-exposure river through the forest") },
  cloudForest: { src: u("1606503809729-40646b716a36"), alt: msg("Green mountains under drifting cloud") },
  quetzal: { src: u("1741131779338-61dd0bffe375"), alt: msg("Resplendent quetzal perched on a branch") },
  quetzal2: { src: u("1551647318-f0b1dfea688a"), alt: msg("Green and red quetzal in the cloud forest") },
  // Volcanoes
  acatenangoSun: { src: u("1669025466409-450f22c7561a"), alt: msg("Volcán de Fuego above the clouds at sunrise") },
  fuegoNight: { src: u("1580250642511-1660fe42ad58"), alt: msg("Volcán de Fuego erupting at night seen from Acatenango") },
  acatenangoTent: { src: u("1600131631619-cd42bdaf798f"), alt: msg("Tent pitched on the volcano at night") },
  aboveClouds: { src: u("1657051683896-fa33c045f19d"), alt: msg("Volcano summit rising above a sea of clouds") },
  fuegoSmoke: { src: u("1709501803681-5e77ebe27960"), alt: msg("Plume of ash rising from Volcán de Fuego") },
  highlandTrail: { src: u("1715365705205-7682eb8811c6"), alt: msg("Trail through highland grassland towards volcanoes") },
  highlandsMountains: { src: u("1548131968-0517d86ff8fb"), alt: msg("Highland mountains under a cloudy sky") },
  // Markets & culture
  chichiMarket: { src: u("1669578718614-0dec2071ce83"), alt: msg("Crowded market day with traditional dress") },
  traditionalDress: { src: u("1669572203575-0ec541360e2a"), alt: msg("Group of people wearing traditional Maya dress") },
  textileMarket: { src: u("1783513113196-626ac50b7560"), alt: msg("Market stalls hung with colourful textiles") },
  vegStand: { src: u("1559991677-18777f628daf"), alt: msg("Woman selling vegetables at a highland market") },
  streetDress: { src: u("1605157083888-e9ae77b0d336"), alt: msg("People in red and blue traje walking down a street") },
  colorfulDress: { src: u("1669737179119-3e5176557b84"), alt: msg("Woman in a colourful huipil carrying a bag") },
  weaving: { src: u("1745510697761-6b0a091b78a6"), alt: msg("Woman weaving on a backstrap loom in sunlight") },
  textile: { src: u("1592421497326-79e20eea7224"), alt: msg("Detail of a hand-woven floral textile") },
  cobbleWalk: { src: u("1759366033145-572be989e3a1"), alt: msg("Woman in traditional dress walking on a cobbled street") },
  // Xela
  xelaTower: { src: u("1696511149073-f615710573f9"), alt: msg("Clock tower in Quetzaltenango") },
  xelaFields: { src: u("1604251086259-8f3bf6000a18"), alt: msg("Green fields below highland mountains near Xela") },
  xelaMountain: { src: u("1630608342215-41b414a81425"), alt: msg("Green mountain under white cloud") },
  // Coffee
  coffeePicking: { src: u("1642613630414-1d9938f4fe02"), alt: msg("Hand picking ripe coffee cherries") },
  coffeeBeans: { src: u("1561986810-4f3ba2f46ceb"), alt: msg("Freshly roasted coffee beans") },
  coffeeFarm: { src: u("1597816760638-406d7271105c"), alt: msg("Woman walking through a coffee plantation") },
  coffeeValley: { src: u("1633437805600-2c58bf56663c"), alt: msg("Lush valley surrounded by mountains") },
  forestAerial: { src: u("1559556064-4161b6be179b"), alt: msg("Aerial view of a forest canopy") },
  // Caribbean & Pacific
  rioDulceBoat: { src: u("1692460037903-25679e820099"), alt: msg("Blue boat on the Río Dulce beside the old fort wall") },
  rioDulceIsland: { src: u("1593453758793-bd3f9b6c0bc4"), alt: msg("Small green island on the Río Dulce") },
  riverBoat: { src: u("1698869970071-5a3c4d2f8f6c"), alt: msg("Boat travelling down a jungle river") },
  blackSand: { src: u("1537100861360-bf6be4ddeac4"), alt: msg("Black-sand beach with rolling Pacific waves") },
  pacificSunset: { src: u("1626534070140-b19e610dd757"), alt: msg("Waves breaking on the shore at sunset") },
  // Stays
  courtyardPool: { src: u("1761828122922-5a839ada5b76"), alt: msg("Hotel courtyard with a pool and ornate wooden door") },
  balconyFlowers: { src: u("1761542547343-9da4fcd857cc"), alt: msg("Colonial building with bougainvillea on the balcony") },
  tiledRoofs: { src: u("1776763255486-d6847adecf87"), alt: msg("Red-tiled rooftops and courtyards from above") },
  courtyardDusk: { src: u("1786011243992-808eb40e0144"), alt: msg("Whitewashed courtyard at dusk with soft lighting") },
  thatchedResort: { src: u("1704502889897-83d6ebcca97e"), alt: msg("Thatched-roof entrance to a jungle lodge") },
  jungleLodgeNight: { src: u("1767324672978-f26a05319e63"), alt: msg("Lodge lit up at night in the jungle") },
  jungleHut: { src: u("1704502790544-e59a8b1ed49c"), alt: msg("Hut in the middle of the jungle") },
  thatchedHouse: { src: u("1472981935331-8e297dd011d8"), alt: msg("House with a thatched roof surrounded by greenery") },
} as const;

export type ImageKey = keyof typeof img;
