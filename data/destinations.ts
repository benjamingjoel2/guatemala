import type { Destination } from "./types";
import { img } from "./images";

export const destinations: Destination[] = [
  {
    slug: "antigua",
    name: "Antigua",
    region: "antigua",
    tagline: "Colonial heart beneath three volcanoes",
    excerpt:
      "Cobbled streets, baroque ruins and some of Central America's best dining, all framed by Agua, Fuego and Acatenango. Antigua is where most journeys begin, and where many travellers wish they had stayed longer.",
    image: img.antiguaArchAgua,
    gallery: [img.antiguaStreetAgua, img.antiguaRuins, img.antiguaFacade, img.courtyardPool],
    idealStay: "3–4 nights",
    altitude: "1,530 m",
    overview: [
      "Founded in 1543 as the capital of the Spanish Kingdom of Guatemala, Antigua governed a territory stretching from Chiapas to Costa Rica for more than two centuries. The Santa Marta earthquakes of 1773 changed everything: the capital moved to what is now Guatemala City, and Antigua was left with its grand churches and convents half-standing. That arrested decay is a large part of its magic, and the reason UNESCO listed the city as a World Heritage Site in 1979.",
      "Today the low, pastel houses hide courtyards full of bougainvillea, boutique hotels set inside former monasteries, and restaurants, chocolate makers and coffee roasters that would hold their own anywhere. Volcán de Agua watches over the south end of town, while Fuego, one of the most active volcanoes in the Americas, puffs ash on the western skyline.",
      "Your specialist will help you see beyond the postcard: a private walk through the ruins of Las Capuchinas, a morning on a family coffee finca on the slopes of Agua, a cooking class with a local cook, or a quiet corner of Cerro de la Cruz before the day-trippers arrive. Antigua is also the natural base for the Acatenango hike and an easy two-and-a-half-hour drive to Lake Atitlán.",
    ],
    bestMonths: [11, 12, 1, 2, 3, 4],
    bestTimeNote:
      "November to April brings dry, sunny days, cool evenings and the clearest volcano views; Lent and Semana Santa (March or April) fill the streets with processions and sawdust carpets, so book well ahead. The May to October rainy season usually means bright mornings and a heavy afternoon shower, with greener hills and noticeably quieter streets.",
    highlights: [
      {
        title: "Semana Santa processions",
        text: "During Holy Week, families spend the night laying alfombras of dyed sawdust, flowers and pine needles, only for massive processional floats to walk over them at dawn. It is the most spectacular celebration of its kind in the Americas.",
      },
      {
        title: "Ruins open to the sky",
        text: "Earthquake-toppled churches and convents such as Las Capuchinas, San Francisco and the old Cathedral are atmospheric, photogenic and surprisingly peaceful in the early morning.",
      },
      {
        title: "Coffee on the volcano slopes",
        text: "Antigua coffee holds its own denomination of origin. Walk the rows with a farmer, pick ripe cherries in harvest season and cup the results with the people who grew them.",
      },
      {
        title: "A serious food scene",
        text: "From refined Guatemalan tasting menus to pepián simmered the traditional way, Antigua is the country's dining capital and the perfect place to start understanding its flavours.",
      },
    ],
    thingsToDo: [
      "Walk under the Santa Catalina Arch at golden hour",
      "Explore the ruins of Las Capuchinas and San Francisco",
      "Watch sunrise over the city from Cerro de la Cruz",
      "Tour a working coffee finca on Volcán de Agua",
      "Take a private Guatemalan cooking class",
      "Make your own bar at a bean-to-bar chocolate workshop",
      "Visit the jade workshops and textile museum at Casa del Tejido",
      "Day-trip to the weaving villages of San Antonio Aguas Calientes",
    ],
    tips: [
      {
        title: "Mind the cobbles",
        text: "Antigua's original stone streets are beautiful but uneven. Bring flat, comfortable shoes and leave the heels for courtyard dinners.",
      },
      {
        title: "Book Semana Santa early",
        text: "The best hotels fill up to a year in advance for Holy Week. If you want to be there, tell your specialist as early as you can.",
      },
      {
        title: "Layers for the evening",
        text: "At 1,500 metres, temperatures drop quickly after sunset, especially from December to February. A light sweater makes rooftop dinners far more comfortable.",
      },
      {
        title: "Mornings are golden",
        text: "Visit popular spots like the arch and Cerro de la Cruz early, when the light is soft, the volcanoes are clearest and the streets are quiet.",
      },
    ],
    faqs: [
      {
        question: "How many days do I need in Antigua?",
        answer:
          "Three to four nights is ideal: enough for the ruins, a coffee finca and a cooking class at an unhurried pace. Add two nights if you plan to hike Acatenango.",
      },
      {
        question: "How far is Antigua from the airport?",
        answer:
          "La Aurora International Airport in Guatemala City is around 45 km away, usually 60 to 90 minutes by private transfer depending on traffic. We arrange a driver to meet you at arrivals.",
      },
      {
        question: "Is Antigua a good base for day trips?",
        answer:
          "Very much so. Coffee farms, weaving villages, Pacaya volcano and even a long day at Lake Atitlán or Chichicastenango market are all possible, though we usually recommend overnighting at the lake.",
      },
    ],
  },
  {
    slug: "lake-atitlan",
    name: "Lake Atitlán",
    region: "atitlan",
    tagline: "Volcano-ringed lake of Maya villages",
    excerpt:
      "A vast caldera lake guarded by three volcanoes, with Maya towns scattered along its shores. Atitlán is slow mornings on the dock, boat rides between villages and some of the most beautiful views in the world.",
    image: img.atitlanDock,
    gallery: [img.atitlanPier, img.atitlanFlowers, img.atitlanBoats, img.weaving],
    idealStay: "3–4 nights",
    altitude: "1,560 m",
    overview: [
      "Lake Atitlán fills a volcanic caldera created by a colossal eruption around 84,000 years ago. Over 300 metres deep and framed by the cones of San Pedro, Tolimán and Atitlán, it is the kind of place that makes even seasoned travellers stop mid-sentence. Aldous Huxley famously thought it surpassed Lake Como, and few who see it at dawn would disagree.",
      "Each village around the shore has its own character. Santiago Atitlán is a proud Tz'utujil town known for its huipiles and the folk saint Maximón; San Juan La Laguna is home to weaving cooperatives using natural dyes; Santa Cruz La Laguna clings to the hillside with spectacular views; and Panajachel is the busy gateway. Kaqchikel and Tz'utujil Maya languages are heard everywhere.",
      "We pair you with a lakeside lodge that suits the way you like to travel, whether that is a secluded hideaway reachable only by boat or a garden hotel with a private dock. From there, your specialist can arrange a private lancha, sunrise hikes, kayaking, weaving workshops and long, lazy lunches by the water.",
    ],
    bestMonths: [11, 12, 1, 2, 3, 4],
    bestTimeNote:
      "The dry season from November to April offers calm, glassy mornings and clear views of the volcanoes. During the May to October rains, mornings are usually still bright but cloud builds by afternoon and showers follow, so we schedule boat crossings early. Year-round, the Xocomil wind tends to whip up the water after midday.",
    highlights: [
      {
        title: "Sunrise from Rostro Maya",
        text: "A pre-dawn hike to the Indian Nose ridge above San Juan rewards you with first light spilling over the lake and three volcanoes.",
      },
      {
        title: "Weaving in San Juan La Laguna",
        text: "Meet women's cooperatives who spin, dye with plants and weave on backstrap looms, and learn how each colour and pattern carries meaning.",
      },
      {
        title: "Santiago Atitlán",
        text: "Visit the market, the colonial church and the home where Maximón, the cigar-smoking folk saint, is housed by a different family each year.",
      },
      {
        title: "Your own lancha",
        text: "A private boat lets you hop between villages at your own pace, stopping for coffee, a swim or lunch wherever the mood takes you.",
      },
    ],
    thingsToDo: [
      "Hike to Rostro Maya for sunrise",
      "Join a natural-dye weaving workshop in San Juan",
      "Kayak or paddleboard on a calm morning",
      "Visit Maximón in Santiago Atitlán",
      "Tour a lakeside coffee cooperative",
      "Climb Volcán San Pedro with a local guide",
      "Explore the Atitlán Nature Reserve near Panajachel",
      "Take a cooking class with a Maya family",
    ],
    tips: [
      {
        title: "Cross the lake before noon",
        text: "The afternoon Xocomil wind can make boat rides choppy. Plan transfers and village visits for the morning.",
      },
      {
        title: "Pack light for boat transfers",
        text: "Many lakeside lodges are only reachable by water. Soft bags are easier to load onto lanchas than large hard-shell suitcases.",
      },
      {
        title: "Ask before photographing",
        text: "Atitlán's villages are living communities. Always ask before taking someone's photo, and expect that some will politely decline.",
      },
      {
        title: "Bring cash for villages",
        text: "Cooperatives and small shops often prefer quetzales. Your specialist can advise how much to carry for the day.",
      },
    ],
    faqs: [
      {
        question: "Which village should I stay in?",
        answer:
          "It depends on your style. Santa Cruz and the quieter shores suit couples looking for peace and views, while a hotel near Panajachel offers easier road access. Your specialist will match the lodge to you.",
      },
      {
        question: "Can I swim in Lake Atitlán?",
        answer:
          "Yes, many travellers swim from hotel docks on the quieter shores. The water is refreshingly cool, and it is best enjoyed on calm mornings.",
      },
      {
        question: "How do I get to Lake Atitlán?",
        answer:
          "It is about two and a half to three hours by private road transfer from Antigua, winding down to Panajachel, followed by a short boat ride if your lodge is across the water.",
      },
    ],
  },
  {
    slug: "tikal",
    name: "Tikal",
    region: "peten",
    tagline: "Maya temples rising from the rainforest",
    excerpt:
      "One of the greatest cities of the ancient Maya world, hidden in a protected jungle full of howler monkeys and toucans. Seeing its temples pierce the canopy is unforgettable.",
    image: img.tikalTemple,
    gallery: [img.tikalPyramid, img.tikalCanopy, img.mayaJungle, img.jungleAerial],
    idealStay: "1–2 nights",
    altitude: "Approx. 250 m",
    overview: [
      "At its height between roughly AD 200 and 900, Tikal was a superpower of the Classic Maya world, home to tens of thousands of people and locked in a long rivalry with Calakmul to the north. Thousands of structures survive across the site, from the twin temples facing each other across the Great Plaza to Temple IV, which rises some 65 metres and remains one of the tallest pre-Columbian buildings in the Americas.",
      "The ruins sit inside Tikal National Park, a UNESCO World Heritage Site since 1979 and part of the vast Maya Biosphere Reserve. Spider and howler monkeys move through the canopy, ocellated turkeys strut across the plazas, and toucans, parrots and coatis are frequent companions on the forest paths.",
      "We recommend staying at least one night inside or close to the park, so you can explore in the soft early light and late afternoon, when the day visitors have gone and the jungle comes alive. A private archaeologist-guide makes the city's history, dynasties and astronomy come alive.",
    ],
    bestMonths: [11, 12, 1, 2, 3, 4],
    bestTimeNote:
      "November to April is drier and more comfortable, with February to April the hottest stretch. The May to October rainy season brings short, heavy downpours, muddier trails and more mosquitoes, but also lush forest, active wildlife and far fewer visitors.",
    highlights: [
      {
        title: "The Great Plaza",
        text: "Stand between Temple I (the Temple of the Great Jaguar) and Temple II, surrounded by acropolises and carved stelae at the ceremonial heart of the city.",
      },
      {
        title: "Temple IV views",
        text: "Climb the wooden stairs to the top of Temple IV and look out over an endless green canopy, with the roof combs of other temples breaking through.",
      },
      {
        title: "Mundo Perdido",
        text: "The Lost World complex holds some of Tikal's oldest structures, including a great pyramid used as an astronomical observatory.",
      },
      {
        title: "Wildlife at dawn",
        text: "Early mornings bring the roar of howler monkeys, flocks of parrots and the best chance to spot toucans and spider monkeys.",
      },
    ],
    thingsToDo: [
      "Watch sunrise or sunset over the canopy from Temple IV",
      "Explore the Great Plaza and North Acropolis with an archaeologist",
      "Walk the Mundo Perdido complex",
      "Go birdwatching on the forest trails",
      "Visit the site museums near the entrance",
      "Stay overnight at a lodge inside the park",
    ],
    tips: [
      {
        title: "Start early",
        text: "Arrive at opening time to beat the heat and the crowds. The light, the wildlife and the atmosphere are all at their best before 10am.",
      },
      {
        title: "Dress for the jungle",
        text: "Light long sleeves, insect repellent, a hat and sturdy shoes are essential. Carry plenty of water, as the site is large and the humidity high.",
      },
      {
        title: "Hire a specialist guide",
        text: "Tikal is huge and sparsely signed. A private guide will tailor the route to your interests and pace, and spot wildlife you might otherwise miss.",
      },
    ],
    faqs: [
      {
        question: "How do I get to Tikal?",
        answer:
          "Most travellers fly from Guatemala City to Flores in about an hour, then drive roughly an hour and a quarter to the park. We arrange flights and private transfers.",
      },
      {
        question: "Is one day enough for Tikal?",
        answer:
          "A full day covers the main highlights, but staying overnight nearby lets you explore at dawn or dusk, which we strongly recommend.",
      },
      {
        question: "Can I climb the temples?",
        answer:
          "Several temples, including Temple IV and the great pyramid of Mundo Perdido, have wooden staircases to the top. Others, such as Temple I, are closed to climbing to protect them.",
      },
    ],
  },
  {
    slug: "flores-and-peten",
    name: "Flores & Petén",
    region: "peten",
    tagline: "Island town in the Maya heartland",
    excerpt:
      "A colourful island town on Lake Petén Itzá and the gateway to Guatemala's northern jungles. Flores is where sunsets, lake swims and lesser-known Maya cities meet.",
    image: img.floresIsland,
    gallery: [img.floresTown, img.floresStreet, img.jungleAerial, img.mayaJungle],
    idealStay: "2–3 nights",
    altitude: "Approx. 130 m",
    overview: [
      "Flores sits on a small island in Lake Petén Itzá, linked to the mainland by a short causeway. It was once Nojpetén, capital of the Itza Maya and the last independent Maya kingdom, which held out against the Spanish until 1697. Today its steep lanes are lined with pastel houses, small restaurants and terraces facing some of the best sunsets in Guatemala.",
      "Petén covers roughly a third of Guatemala's territory and much of it is rainforest within the Maya Biosphere Reserve. Beyond Tikal, the region holds dozens of ancient cities, including Yaxhá, set between two lagoons, and Uaxactún, with one of the oldest astronomical complexes in the Maya world.",
      "We use Flores and the lakeshore as a relaxed base, with boutique lodges along the water. From here your specialist can arrange sunset at Yaxhá, kayaking on the lake, visits to wildlife rescue centres and, for the adventurous, the expedition to El Mirador.",
    ],
    bestMonths: [11, 12, 1, 2, 3, 4],
    bestTimeNote:
      "The drier months from November to April are ideal for exploring Petén's ruins and forests, though March and April can be very hot. During the May to October rainy season, afternoon storms are common and unpaved roads to remote sites can be muddy, but the lake is at its fullest and the forest at its most vivid.",
    highlights: [
      {
        title: "Sunset at Yaxhá",
        text: "Climb Temple 216 at Yaxhá as the sun sets over the lagoons, often with the site almost to yourself. It is one of Petén's most magical experiences.",
      },
      {
        title: "Island evenings",
        text: "Stroll Flores' cobbled lanes, then find a lakeside terrace for dinner as the sky turns orange over the water.",
      },
      {
        title: "Lake Petén Itzá by boat",
        text: "Take a private boat to swim off quiet jetties, visit the small Mirador del Rey Canek viewpoint, and see the lakeside villages from the water.",
      },
      {
        title: "Gateway to the north",
        text: "Flores is the starting point for Tikal, Uaxactún, Yaxhá and the multi-day trek or helicopter flight to El Mirador.",
      },
    ],
    thingsToDo: [
      "Watch sunset from the top of Yaxhá's Temple 216",
      "Explore Flores' cobbled streets and lakeside promenade",
      "Swim and kayak in Lake Petén Itzá",
      "Visit Uaxactún and its astronomical complex",
      "Walk the hanging bridges at Ixpanpajul Nature Park",
      "Take a boat to the Mirador del Rey Canek viewpoint",
      "Learn about wildlife rehabilitation at a local rescue centre",
    ],
    tips: [
      {
        title: "Fly, don't drive",
        text: "The road from Guatemala City takes eight hours or more. A one-hour domestic flight to Mundo Maya International Airport saves a full day.",
      },
      {
        title: "Beat the heat",
        text: "Petén is hot and humid year-round. Plan ruins visits for early morning or late afternoon, and keep the middle of the day for the lake.",
      },
      {
        title: "Insect repellent is essential",
        text: "Mosquitoes are most active at dawn and dusk, particularly in the rainy season. Bring a good repellent and light long layers.",
      },
    ],
    faqs: [
      {
        question: "Should I stay in Flores or near Tikal?",
        answer:
          "Ideally both. A night near Tikal for an early start, plus two nights on the lake for Yaxhá, sunsets and downtime, gives the perfect balance.",
      },
      {
        question: "Is Yaxhá worth visiting if I'm seeing Tikal?",
        answer:
          "Absolutely. Yaxhá is the third-largest Maya site in Guatemala, far quieter than Tikal, and its lagoon setting makes it particularly beautiful at sunset.",
      },
      {
        question: "Can I swim in Lake Petén Itzá?",
        answer:
          "Yes. Many lodges have jetties for swimming, and the warm water is very welcome after a hot day exploring ruins.",
      },
    ],
  },
  {
    slug: "semuc-champey",
    name: "Semuc Champey",
    region: "verapaces",
    tagline: "Turquoise pools in a jungle gorge",
    excerpt:
      "A natural limestone bridge stacked with tiered turquoise pools, hidden deep in the mountains of Alta Verapaz. Remote, wild and utterly worth the journey.",
    image: img.semucPools,
    gallery: [img.semucTurquoise, img.semucRiver, img.riverLong, img.cloudForest],
    idealStay: "2–3 nights",
    altitude: "Approx. 350 m",
    overview: [
      "At Semuc Champey, the Cahabón River vanishes underground beneath a natural limestone bridge around 300 metres long. On top of that bridge, spring and stream water collects in a staircase of pools that glow turquoise and emerald against the jungle. The name is often translated from Q'eqchi' Maya as 'where the river hides under the earth'.",
      "Getting here is part of the adventure: the final stretch from Lanquín is a rugged road best tackled in a 4x4. That remoteness keeps Semuc wild. Around it lie candlelit river caves, a fast-flowing river perfect for tubing, and a valley of cardamom and cacao farms worked by Q'eqchi' families.",
      "We pair Semuc with comfortable riverside lodges, private transfers and an experienced local guide, so you can enjoy the adventure without the logistics. It combines naturally with Cobán, the cloud forests of the Verapaces and onward travel to Petén.",
    ],
    bestMonths: [11, 2, 3, 4],
    bestTimeNote:
      "The Verapaces are among the wettest parts of Guatemala, and late February to April is usually the driest window, with November also often good. December and January can bring persistent drizzle. During the May to October rains, heavy downpours can swell the Cahabón, cloud the pools and occasionally close the caves, so we keep plans flexible.",
    highlights: [
      {
        title: "The tiered pools",
        text: "Swim from pool to pool along the limestone bridge, with the roar of the river pouring underground just upstream.",
      },
      {
        title: "El Mirador viewpoint",
        text: "A steep, roughly 45-minute climb through the forest leads to a platform with the classic bird's-eye view of the pools.",
      },
      {
        title: "K'anba caves by candlelight",
        text: "Wade and swim through an underground river holding a candle, climbing ladders and waterfalls inside the cave.",
      },
      {
        title: "Lanquín bats at dusk",
        text: "At sunset, thousands of bats stream out of the mouth of the Lanquín caves in a spectacular natural display.",
      },
    ],
    thingsToDo: [
      "Swim in the turquoise pools of Semuc Champey",
      "Hike to El Mirador for the view over the pools",
      "Explore the K'anba caves by candlelight",
      "Float down the Cahabón River on a tube",
      "Watch the bats emerge from the Lanquín caves",
      "Visit a Q'eqchi' family's cacao farm and make chocolate",
      "Jump from the rope swing into the river",
    ],
    tips: [
      {
        title: "Arrive early",
        text: "Reach the pools when the park opens to enjoy them before day visitors arrive from Lanquín.",
      },
      {
        title: "Bring water shoes",
        text: "The limestone is slippery and the caves involve wading and climbing. Water shoes or sturdy sandals with straps are ideal.",
      },
      {
        title: "Keep valuables dry",
        text: "A small dry bag is invaluable for the caves and river. Leave anything you don't need at your lodge.",
      },
      {
        title: "Embrace the journey",
        text: "The road from Cobán to Lanquín and on to Semuc is slow and bumpy. Allow plenty of time and enjoy the mountain scenery.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to get to Semuc Champey?",
        answer:
          "From Antigua, plan on eight to nine hours by private road transfer, usually broken with a night in Cobán. From Cobán it is around three hours, including the 4x4 stretch.",
      },
      {
        question: "Is the cave tour safe?",
        answer:
          "The K'anba cave tour is guided and well established, but it involves swimming in deep water and climbing ladders in the dark. You should be comfortable swimming, and we only use reputable operators.",
      },
      {
        question: "Are there comfortable places to stay?",
        answer:
          "Yes. While the area is rustic, there are charming riverside lodges with private rooms and good food. We select the best options for your style and budget.",
      },
    ],
  },
  {
    slug: "chichicastenango",
    name: "Chichicastenango",
    region: "highlands",
    tagline: "Highland market of colour and ritual",
    excerpt:
      "A K'iche' Maya town whose twice-weekly market is one of the most colourful in the Americas. Here, Catholic and Maya traditions blend on the steps of a 16th-century church.",
    image: img.chichiMarket,
    gallery: [img.textileMarket, img.traditionalDress, img.vegStand, img.textile],
    idealStay: "Day trip or 1 night",
    altitude: "Approx. 2,000 m",
    overview: [
      "On Thursdays and Sundays, Chichicastenango transforms. Traders from across the highlands arrive before dawn to fill the plaza and surrounding streets with textiles, masks, pottery, flowers, produce and livestock. It is a working market as much as a spectacle, where K'iche' families buy and sell exactly as they have for generations.",
      "Overlooking it all is the Church of Santo Tomás, built around 1545 on top of a Maya temple platform. Its 18 steps are said to represent the months of the Maya calendar, and you will often see spiritual guides burning copal incense and offering prayers on them. It was here, in the early 1700s, that the friar Francisco Ximénez transcribed the Popol Vuh, the sacred K'iche' book of creation.",
      "We usually visit on market day from Antigua or Lake Atitlán with a private guide who can explain the rituals, introduce you to traders and steer you to the best textiles. An overnight stay lets you see the market being set up at dawn, before the tour buses arrive.",
    ],
    bestMonths: [11, 12, 1, 2, 3, 4],
    bestTimeNote:
      "The market runs year-round on Thursdays and Sundays, and the dry season from November to April offers the most pleasant weather. In December, the fiesta of Santo Tomás (13–21 December) brings processions, masked dances and the palo volador. During the May to October rains, mornings are usually dry enough for the market, with showers arriving later in the day.",
    highlights: [
      {
        title: "Market day",
        text: "Wander through a maze of stalls overflowing with huipiles, carved masks and fresh produce, and watch highland life unfold around you.",
      },
      {
        title: "Church of Santo Tomás",
        text: "Watch spiritual guides burn copal on the church steps, where Maya and Catholic rituals have coexisted for centuries.",
      },
      {
        title: "Pascual Abaj shrine",
        text: "Climb a forested hill to a sacred Maya site where ceremonies are still held, with permission and an experienced guide.",
      },
      {
        title: "The colourful cemetery",
        text: "Brightly painted tombs, each colour carrying its own meaning, make the town cemetery a moving and photogenic place to visit.",
      },
    ],
    thingsToDo: [
      "Browse the Thursday or Sunday market with a private guide",
      "Watch copal ceremonies on the steps of Santo Tomás",
      "Visit the Pascual Abaj shrine",
      "Walk through the painted cemetery",
      "Shop for textiles and carved ceremonial masks",
      "See the Rossbach regional museum of jade and ceramics",
      "Time your visit for the December fiesta of Santo Tomás",
    ],
    tips: [
      {
        title: "Arrive early",
        text: "The market is at its most authentic in the early morning, before the tour groups arrive around 10am.",
      },
      {
        title: "Bargain kindly",
        text: "Haggling is expected but should be good-natured. Your guide can give you a sense of fair prices for quality pieces.",
      },
      {
        title: "Respect the church",
        text: "Do not use the main front door or steps, which are reserved for religious use, and do not take photos inside the church.",
      },
    ],
    faqs: [
      {
        question: "Which days is the Chichicastenango market?",
        answer:
          "The main market is held on Thursdays and Sundays. Sunday tends to be the busiest and most colourful, with more local worshippers.",
      },
      {
        question: "Can I visit from Antigua or Lake Atitlán?",
        answer:
          "Yes. It is around two and a half hours from Antigua and about 90 minutes from Panajachel, making it an easy day trip or a stop on the way between the two.",
      },
      {
        question: "Is it OK to take photos?",
        answer:
          "Photography in the market is generally fine, but always ask before photographing individuals, and never photograph ceremonies or inside the church without permission.",
      },
    ],
  },
  {
    slug: "acatenango",
    name: "Acatenango Volcano",
    region: "antigua",
    tagline: "Camp beside an erupting volcano",
    excerpt:
      "An overnight climb to a high camp facing Volcán de Fuego, which often erupts through the night. It is challenging, cold and one of the most spectacular adventures in Central America.",
    image: img.fuegoNight,
    gallery: [img.acatenangoSun, img.acatenangoTent, img.aboveClouds, img.fuegoSmoke],
    idealStay: "2 days, 1 night",
    altitude: "3,976 m",
    overview: [
      "Acatenango is a dormant twin-peaked volcano rising almost 4,000 metres above the Antigua valley. Its neighbour, Volcán de Fuego, is one of the most active volcanoes in the world, often erupting several times an hour. From a camp on Acatenango's upper slopes, you can watch lava and glowing ash burst into the night sky just across the ridge.",
      "The hike begins near La Soledad at around 2,400 metres and climbs steeply through farmland, cloud forest and pine forest to a camp at roughly 3,600 metres. Most travellers take five to six hours to reach camp. Early the next morning, there is an optional pre-dawn push to the summit for sunrise above a sea of clouds, with Agua, Fuego and distant Atitlán on the horizon.",
      "We work with experienced local guides and a private, well-equipped camp, including warm sleeping bags, proper meals and porters to carry the heavy gear. Your specialist will help you prepare, check that the hike suits your fitness, and plan a comfortable recovery night in Antigua afterwards.",
    ],
    bestMonths: [11, 12, 1, 2, 3, 4],
    bestTimeNote:
      "November to April offers the clearest skies and the best chance of seeing Fuego erupting at night, though December to February nights can fall below freezing at camp. In the May to October rainy season, afternoon storms and cloud are frequent, trails are muddy and views of Fuego are far less reliable, so we recommend the hike mainly in the dry season.",
    highlights: [
      {
        title: "Fuego after dark",
        text: "From camp, watch Fuego throw glowing lava and rumbling explosions into the night, an experience few places on Earth can match.",
      },
      {
        title: "Summit sunrise",
        text: "A pre-dawn climb to the summit rewards you with sunrise above the clouds and views across Guatemala's volcanic chain.",
      },
      {
        title: "Changing landscapes",
        text: "Climb from farmland through cloud forest and pine to bare volcanic slopes, with the vegetation changing at every turn.",
      },
      {
        title: "A private camp",
        text: "Sleep in a well-equipped camp with hot food, warm sleeping gear and a front-row view of the eruptions.",
      },
    ],
    thingsToDo: [
      "Hike to a high camp facing Volcán de Fuego",
      "Watch Fuego erupt through the night",
      "Summit Acatenango for sunrise above the clouds",
      "Add the optional ridge hike towards Fuego with expert guides",
      "Recover with a massage and long lunch in Antigua",
      "Warm up with a training hike on Pacaya volcano beforehand",
    ],
    tips: [
      {
        title: "Acclimatise first",
        text: "Spend at least two nights in Antigua before the climb to adjust to the altitude. Stay well hydrated throughout.",
      },
      {
        title: "Dress in layers",
        text: "Temperatures range from warm at the trailhead to near freezing at camp. Bring thermal base layers, a fleece, a down jacket, hat and gloves.",
      },
      {
        title: "Hire a porter",
        text: "The climb is steep and relentless. A porter for your pack makes a huge difference and supports local families.",
      },
      {
        title: "Wear broken-in boots",
        text: "The trail is loose volcanic scree in places. Good hiking boots and trekking poles help, especially on the descent.",
      },
    ],
    faqs: [
      {
        question: "How difficult is the Acatenango hike?",
        answer:
          "It is challenging. Expect around 1,200 to 1,500 metres of ascent over steep, loose terrain at altitude. You don't need to be an athlete, but good fitness and some hiking experience are important.",
      },
      {
        question: "Will I definitely see Fuego erupt?",
        answer:
          "Fuego is very active, but activity varies and cloud can obscure the view. The dry season gives the best odds, and most clear nights offer a show.",
      },
      {
        question: "Can I do it without camping?",
        answer:
          "A same-day hike is possible but very demanding, and you would miss the nighttime eruptions. We recommend the overnight camp for the full experience.",
      },
    ],
  },
  {
    slug: "rio-dulce-and-livingston",
    name: "Río Dulce & Livingston",
    region: "caribbean",
    tagline: "Jungle river to the Caribbean",
    excerpt:
      "A river journey through a towering jungle gorge to Livingston, a Garifuna town on the Caribbean coast reachable only by boat. This is a completely different side of Guatemala.",
    image: img.rioDulceBoat,
    gallery: [img.rioDulceIsland, img.riverBoat, img.jungleHut, img.thatchedHouse],
    idealStay: "2–3 nights",
    overview: [
      "The Río Dulce flows from Lake Izabal, Guatemala's largest lake, to the Caribbean Sea. At its upper end stands the Castillo de San Felipe de Lara, a 17th-century Spanish fort built to guard the lake from pirates. Downstream, the river widens into El Golfete, then narrows into a dramatic gorge lined with cliffs draped in jungle, where herons, kingfishers and pelicans glide past.",
      "At the river's mouth lies Livingston, a lively town that can only be reached by water. It is the heart of Guatemala's Garifuna community, descendants of West African and Indigenous Caribbean peoples, with its own language, punta music and cuisine. Try tapado, a rich coconut seafood soup, and spend an evening listening to drums.",
      "We use boutique riverside lodges and private boats so you can explore at your own pace, from hot springs and hidden lagoons to the Siete Altares waterfalls near Livingston. The region pairs beautifully with Petén, a few hours north by road.",
    ],
    bestMonths: [11, 12, 1, 2, 3, 4],
    bestTimeNote:
      "The Caribbean side is humid and can see rain at any time of year, but November to April is generally the drier, more comfortable period. During the May to October rainy season, heavy afternoon showers are common, and the later months overlap with the Atlantic hurricane season, so we keep a close eye on forecasts.",
    highlights: [
      {
        title: "The river gorge",
        text: "Glide by boat between sheer cliffs covered in jungle, one of the most spectacular river journeys in Central America.",
      },
      {
        title: "Garifuna culture in Livingston",
        text: "Experience the food, music and warm hospitality of Guatemala's Garifuna community in a town with no road access.",
      },
      {
        title: "Castillo de San Felipe",
        text: "Explore a Spanish colonial fort built to protect Lake Izabal from pirates, with views over the water.",
      },
      {
        title: "Hot springs and waterfalls",
        text: "Bathe where hot springs meet the cool river, and swim in the cascading pools of Siete Altares.",
      },
    ],
    thingsToDo: [
      "Take a private boat through the Río Dulce gorge",
      "Visit the Castillo de San Felipe de Lara",
      "Taste tapado and listen to Garifuna drumming in Livingston",
      "Swim at the Siete Altares waterfalls",
      "Soak in riverside hot springs",
      "Kayak through the mangroves of El Golfete",
      "Look for manatees in the Chocón Machacas reserve",
      "Spend a day at Playa Blanca on the Caribbean coast",
    ],
    tips: [
      {
        title: "Travel by private boat",
        text: "A private boat lets you stop at hot springs, lagoons and villages along the way, rather than racing straight through.",
      },
      {
        title: "Pack for humidity",
        text: "Lightweight, quick-drying clothing, sun protection and insect repellent are essential on the Caribbean coast.",
      },
      {
        title: "Embrace the slower pace",
        text: "Life here moves on Caribbean time. Build in downtime and enjoy the river views from your lodge.",
      },
    ],
    faqs: [
      {
        question: "How do I get to Livingston?",
        answer:
          "Livingston has no road connection. Most travellers take a boat from the town of Río Dulce, a scenic journey of about two hours, or from Puerto Barrios across the bay.",
      },
      {
        question: "Can I combine Río Dulce with Tikal?",
        answer:
          "Yes. Río Dulce is about three and a half to four hours by road from Flores, making it a natural add-on to a Petén itinerary.",
      },
      {
        question: "Are there beaches near Livingston?",
        answer:
          "Yes. Playa Blanca and other quieter beaches are a short boat ride away and offer a relaxed day by the Caribbean.",
      },
    ],
  },
  {
    slug: "quetzaltenango",
    name: "Quetzaltenango (Xela)",
    region: "highlands",
    tagline: "Highland city of volcanoes and hot springs",
    excerpt:
      "Guatemala's second city, known to everyone as Xela, sits high in the western highlands among volcanoes, hot springs and Maya villages. It is authentic, cultured and wonderfully untouristy.",
    image: img.xelaTower,
    gallery: [img.xelaFields, img.xelaMountain, img.highlandsMountains, img.highlandTrail],
    idealStay: "2–3 nights",
    altitude: "2,330 m",
    overview: [
      "Quetzaltenango, better known by its K'iche' name Xelajú or simply Xela, is Guatemala's second-largest city and the cultural capital of the western highlands. Its grand neoclassical central park, theatres and churches reflect the coffee wealth of the late 19th century, while the surrounding valleys remain strongly Maya.",
      "Xela is famous for its Spanish schools, its laid-back café culture and its access to some of Guatemala's finest landscapes. Nearby are the steaming Fuentes Georginas hot springs, the sacred crater lake of Laguna Chicabal and Volcán Tajumulco, at 4,220 metres the highest peak in Central America.",
      "We recommend Xela for travellers who want to go deeper: hike volcanoes, explore lively market towns like Almolonga and San Andrés Xecul, and experience a Guatemalan city where daily life carries on without the tourist gloss. Your specialist will connect you with local guides who know the region intimately.",
    ],
    bestMonths: [11, 12, 1, 2, 3, 4],
    bestTimeNote:
      "The dry season from November to April brings sunny days and clear volcano views, though nights can be frosty in December and January. During the May to October rainy season, afternoons are often wet and summits are frequently in cloud, so we plan hikes for the early morning.",
    highlights: [
      {
        title: "Fuentes Georginas",
        text: "Soak in natural hot spring pools set in a lush cloud forest valley near Zunil, especially magical on a cool morning.",
      },
      {
        title: "Laguna Chicabal",
        text: "Hike to a mist-shrouded crater lake considered sacred by the Mam Maya, where ceremonies are still held on its shores.",
      },
      {
        title: "San Andrés Xecul",
        text: "Visit a dazzling yellow church covered in folk-art angels, animals and vines, one of the most photographed in Guatemala.",
      },
      {
        title: "Volcano summits",
        text: "Climb Santa María for views over the active Santiaguito dome, or tackle Tajumulco, the roof of Central America.",
      },
    ],
    thingsToDo: [
      "Soak at the Fuentes Georginas hot springs",
      "Hike to the crater lake of Laguna Chicabal",
      "Visit the folk-baroque church of San Andrés Xecul",
      "Climb Volcán Santa María for sunrise",
      "Summit Volcán Tajumulco, Central America's highest peak",
      "Explore the vegetable market of Almolonga",
      "Take private Spanish lessons with a local teacher",
      "Try caldo de frutas, the traditional fruit liqueur of nearby Salcajá",
    ],
    tips: [
      {
        title: "Pack warm layers",
        text: "At over 2,300 metres, Xela is cold at night and in the early morning. A warm jacket is essential year-round.",
      },
      {
        title: "Start hikes before dawn",
        text: "Clouds gather on the volcanoes by mid-morning. Early starts give you the best views and the safest conditions.",
      },
      {
        title: "Give it time",
        text: "Xela rewards those who linger. Even a few days of Spanish lessons or village visits will open the region up to you.",
      },
    ],
    faqs: [
      {
        question: "Why is Quetzaltenango called Xela?",
        answer:
          "Xela (pronounced 'SHAY-la') is short for Xelajú, the city's original K'iche' Maya name. Locals almost always use it.",
      },
      {
        question: "How far is Xela from Lake Atitlán?",
        answer:
          "About two hours by road. Adventurous hikers can also trek between the two over three days through highland villages.",
      },
      {
        question: "Is Xela good for learning Spanish?",
        answer:
          "Yes, it is one of the best places in Latin America to study. Fewer English speakers means more immersion, and schools offer homestays and one-to-one tuition.",
      },
    ],
  },
  {
    slug: "monterrico",
    name: "Monterrico",
    region: "pacific",
    tagline: "Black sand, mangroves and sea turtles",
    excerpt:
      "A laid-back Pacific village of black volcanic sand, wild surf and mangrove channels. Come for the sunsets, the turtle releases and a few days of warm, slow living.",
    image: img.blackSand,
    gallery: [img.pacificSunset, img.riverBoat, img.thatchedResort, img.thatchedHouse],
    idealStay: "2–3 nights",
    overview: [
      "Monterrico sits on Guatemala's Pacific coast, about two and a half hours from Antigua. Its long beach of glittering black volcanic sand is pounded by powerful surf, and the sunsets are some of the most dramatic in the country. Behind the beach, a maze of mangrove canals forms part of the Monterrico-Hawaii Multiple Use Nature Reserve.",
      "The area is one of Guatemala's most important nesting grounds for sea turtles. Olive ridleys come ashore in the second half of the year, and the rarer leatherback occasionally nests here too. Local conservation hatcheries collect eggs to protect them, and visitors can help release hatchlings into the waves at sunset.",
      "We choose relaxed beach hotels with pools and gardens, and arrange early-morning boat trips through the mangroves with local guides. Monterrico is the perfect place to unwind at the end of an active itinerary, before an easy transfer back to the airport.",
    ],
    bestMonths: [9, 10, 11, 12, 1, 2],
    bestTimeNote:
      "For sea turtles, the nesting season runs roughly from July to December, with hatchling releases most common from September to December. The coast is hot year-round; the May to October rainy season brings heavy afternoon storms and higher humidity, while November to April is drier, sunnier and best for pure beach time.",
    highlights: [
      {
        title: "Turtle releases at sunset",
        text: "Help release olive ridley hatchlings into the Pacific with a local conservation project, a moving experience for all ages.",
      },
      {
        title: "Mangrove canals at dawn",
        text: "Glide through quiet channels by boat as herons, kingfishers and egrets feed among the roots in the early light.",
      },
      {
        title: "Black-sand sunsets",
        text: "Watch the sun sink into the Pacific, its glow reflected on the dark, shimmering sand.",
      },
      {
        title: "Pacific whale watching",
        text: "In season, head out from the coast to spot humpback whales, dolphins and sometimes sea turtles at sea.",
      },
    ],
    thingsToDo: [
      "Release baby turtles at a conservation hatchery",
      "Take a sunrise boat trip through the mangroves",
      "Watch the sunset from the black-sand beach",
      "Visit the CECON turtle conservation centre",
      "Go whale and dolphin watching off the Pacific coast",
      "Relax by the pool with fresh seafood and coconut water",
    ],
    tips: [
      {
        title: "Respect the surf",
        text: "Rip currents are strong and there are few lifeguards. Swim only when conditions are calm, and never alone.",
      },
      {
        title: "Protect your feet",
        text: "Black sand gets extremely hot in the midday sun. Wear sandals when walking on the beach.",
      },
      {
        title: "Bring strong sun protection",
        text: "The Pacific sun is intense. High-factor sunscreen, a hat and shade in the middle of the day are essential.",
      },
    ],
    faqs: [
      {
        question: "When can I see sea turtles in Monterrico?",
        answer:
          "Nesting season runs roughly from July to December, and hatchling releases are most common from September to December. Your specialist can confirm timing before you travel.",
      },
      {
        question: "Is Monterrico good for swimming?",
        answer:
          "The surf is powerful and currents can be dangerous. Most travellers swim in their hotel pool and enjoy the sea from the shore.",
      },
      {
        question: "How do I get to Monterrico?",
        answer:
          "It is about two and a half hours by private transfer from Antigua, sometimes including a short crossing of the canal by ferry, depending on the route.",
      },
    ],
  },
  {
    slug: "el-mirador",
    name: "El Mirador",
    region: "peten",
    tagline: "Lost Maya city deep in jungle",
    excerpt:
      "A vast Preclassic Maya city hidden deep in the Petén rainforest, reached by multi-day jungle trek or helicopter. Its La Danta pyramid is one of the largest structures of the ancient world.",
    image: img.mayaJungle,
    gallery: [img.tikalPyramid, img.jungleAerial, img.forestAerial, img.jungleHut],
    idealStay: "2–5 days",
    overview: [
      "Long before Tikal reached its peak, El Mirador was the great power of the Maya world. Flourishing from around 300 BC to AD 150, it was a sprawling city linked to neighbouring centres by raised causeways, or sacbeob, that still run arrow-straight through the forest. Then, for reasons still debated, it was largely abandoned.",
      "Today El Mirador lies deep within the Maya Biosphere Reserve, close to the Mexican border, and remains one of the most remote archaeological sites in the Americas. Its La Danta complex rises about 70 metres from the forest floor and, by volume, ranks among the largest pyramids on Earth. From its summit, the canopy stretches unbroken to the horizon.",
      "There are two ways in: a five-day round-trip trek of around 120 km from the village of Carmelita, camping in the jungle with mules carrying the gear, or a helicopter flight from Flores in around 40 minutes. We arrange both, with experienced guides and comfortable camps, for travellers who want a true expedition.",
    ],
    bestMonths: [1, 2, 3, 4, 5],
    bestTimeNote:
      "The trek is best from January to May, when the trails are driest, though March to May are very hot. During the May to October rainy season, and often into December, the trails can become deep mud and some routes are effectively impassable on foot. Helicopter access is possible for much of the year, weather permitting.",
    highlights: [
      {
        title: "La Danta",
        text: "Climb one of the largest pyramids in the world by volume and watch sunset over a sea of jungle stretching to Mexico.",
      },
      {
        title: "A true jungle expedition",
        text: "Trek through primary rainforest, camping beneath the canopy, with only howler monkeys and birdsong for company.",
      },
      {
        title: "El Tigre and the Great Central Acropolis",
        text: "Explore massive Preclassic temples and carved stucco friezes depicting Maya creation myths.",
      },
      {
        title: "Ancient causeways",
        text: "Walk sections of the raised sacbeob that once connected El Mirador with Nakbé and other cities across the basin.",
      },
    ],
    thingsToDo: [
      "Trek through the rainforest from Carmelita",
      "Fly over the Maya Biosphere Reserve by helicopter",
      "Climb La Danta for sunset",
      "Explore the El Tigre pyramid complex",
      "See the stucco friezes of the Great Central Acropolis",
      "Visit the Preclassic sites of Nakbé and La Florida on the trail",
      "Camp under the jungle canopy",
    ],
    tips: [
      {
        title: "Be fit and prepared",
        text: "The trek involves long days of walking in heat and humidity. Good fitness and broken-in footwear are essential.",
      },
      {
        title: "Pack light and smart",
        text: "Mules carry the camping gear, but you carry your day pack. Bring quick-drying clothes, a head torch and strong insect repellent.",
      },
      {
        title: "Consider the helicopter",
        text: "If time or fitness is limited, a helicopter visit lets you experience El Mirador in a day or with one night on site.",
      },
    ],
    faqs: [
      {
        question: "How long does the El Mirador trek take?",
        answer:
          "The classic trek takes five days and four nights from Carmelita, covering around 120 km round trip. Longer routes include additional sites such as Nakbé.",
      },
      {
        question: "Is there a way to visit without trekking?",
        answer:
          "Yes. Helicopter flights from Flores take around 40 minutes each way and can be arranged as a day trip or with an overnight stay at the site.",
      },
      {
        question: "Why is El Mirador so important?",
        answer:
          "It reveals that complex Maya civilisation flourished centuries earlier than once believed. Its scale and early date have reshaped our understanding of Maya history.",
      },
    ],
  },
  {
    slug: "coban-and-las-verapaces",
    name: "Cobán & Las Verapaces",
    region: "verapaces",
    tagline: "Cloud forests, orchids and quetzals",
    excerpt:
      "Misty mountains, coffee and cardamom farms, and cloud forests where the resplendent quetzal still flies. The Verapaces are Guatemala's green, lush and wonderfully quiet heartland.",
    image: img.cloudForest,
    gallery: [img.quetzal, img.quetzal2, img.coffeeFarm, img.riverLong],
    idealStay: "2–3 nights",
    altitude: "1,320 m",
    overview: [
      "Cobán, the capital of Alta Verapaz, sits in a landscape of mist-wrapped hills, cloud forests and plantations. In the late 19th century, German settlers established coffee fincas here, and the region later became one of the world's leading producers of cardamom. The Q'eqchi' Maya make up much of the population, and their language is heard throughout the region.",
      "The Verapaces are best known for nature. The Biotopo del Quetzal near Purulhá protects cloud forest where the resplendent quetzal, Guatemala's national bird, can be seen. Orchid lovers will find hundreds of species at Orquigonia and the Vivero Verapaz nursery, and caves, waterfalls and rivers are everywhere.",
      "We use Cobán and the surrounding fincas as a gentle stop between the highlands and Semuc Champey or Petén. Expect birdwatching, coffee tours, orchid gardens and the soft, refreshing drizzle locals call chipi-chipi.",
    ],
    bestMonths: [2, 3, 4, 5],
    bestTimeNote:
      "The Verapaces are lush because they are wet much of the year. February to May is the driest period and coincides with the quetzal nesting season, the best time to spot them. During the May to October rainy season, heavy showers are frequent and roads can be slow, though July brings the colourful Rabin Ajau folklore festival to Cobán.",
    highlights: [
      {
        title: "Searching for the quetzal",
        text: "Walk the cloud forest trails of the Biotopo del Quetzal at dawn with a local guide for the best chance of seeing Guatemala's national bird.",
      },
      {
        title: "Orchid gardens",
        text: "Discover hundreds of native orchid species, including the rare white nun orchid, Guatemala's national flower.",
      },
      {
        title: "Coffee and cardamom fincas",
        text: "Tour historic plantations and taste the coffee and cardamom that have shaped the region's history.",
      },
      {
        title: "Caves and rivers",
        text: "Explore the Candelaria cave system and the region's rivers, waterfalls and karst landscapes.",
      },
    ],
    thingsToDo: [
      "Look for quetzals in the Biotopo del Quetzal",
      "Visit the orchids at Orquigonia and Vivero Verapaz",
      "Tour a historic coffee finca in Cobán",
      "Explore the Candelaria caves",
      "Visit the remote Laguna Lachuá National Park",
      "Join the Rabin Ajau festival in July",
      "Stop in Cobán en route to Semuc Champey",
    ],
    tips: [
      {
        title: "Bring a rain jacket",
        text: "Even in the drier months, light rain and mist are common. A waterproof layer is essential.",
      },
      {
        title: "Go early for quetzals",
        text: "Quetzals are most active in the early morning. A local guide who knows their feeding trees improves your chances.",
      },
      {
        title: "Use Cobán as a stepping stone",
        text: "Cobán breaks up the long drive from Antigua to Semuc Champey or Petén. One or two nights here makes the journey far more enjoyable.",
      },
    ],
    faqs: [
      {
        question: "When is the best time to see quetzals?",
        answer:
          "Quetzals are most visible from around March to June, during their nesting season, when they feed on wild avocados in the cloud forest.",
      },
      {
        question: "How far is Cobán from Antigua?",
        answer:
          "Around five to six hours by road. Many travellers stop at the Biotopo del Quetzal along the way.",
      },
      {
        question: "Is the region suitable for families?",
        answer:
          "Yes. Gentle forest walks, orchid gardens, coffee tours and caves make it a great stop for families who love nature.",
      },
    ],
  },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
