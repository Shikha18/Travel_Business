/**
 * Tour catalog.
 * Add or edit tours here — the listing page and tour detail pages
 * are generated automatically from this array.
 */

export type JourneyDay = {
  day: number;
  title: string;
  description: string;
  overnight?: string;
  highlight?: string;
  image?: string;
};

export type JourneyPricing = {
  label: string;       // e.g., "Twin sharing"
  priceEUR: number;    // per person in EUR (primary display currency)
  priceINR: number;    // per person in INR (secondary, for Indian guests)
};

export type Journey = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;       // use Unsplash URLs until you add your own images
  galleryImages: string[]; // 2-4 images
  region: string;
  durationNights: number;
  durationDays: number;
  route: string;           // e.g., "Delhi → Shimla → Kaza → Delhi"
  months: ("January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December")[];
  groupSize: string;       // e.g., "Max 10 travelers"
  difficulty: "Easy" | "Moderate" | "Challenging";
  summary: string;         // short card blurb
  overview: string;        // long paragraph for detail page
  highlights: string[];
  itinerary: JourneyDay[];
  inclusions: string[];
  exclusions: string[];
  travelTips: string[];    // practical notes for European travelers — visa, plugs, dietary, climate
  pricing: JourneyPricing[];
  featured: boolean;
  departures: string[];    // e.g., ["June 14, 2026", "July 5, 2026"]
};

export const journeys: Journey[] = [
  // ─── GOLDEN TRIANGLE ─────────────────────────────────────────────────
  {
    slug: "golden-triangle-classic",
    title: "Golden Triangle & Ranthambore",
    subtitle: "Delhi · Agra · Jaipur · Ranthambore — India's iconic circuit, now with tigers",
    heroImage: "/images/tours/golden-triangle/taj-mahal-1.jpg",
    galleryImages: [
      "/images/tours/golden-triangle/taj-mahal-1.jpg",
      "/images/tours/golden-triangle/red-fort-delhi.jpg",
      "/images/tours/golden-triangle/hawa-mahal-jaipur.jpg",
      "/images/tours/golden-triangle/ranthambore-tiger-safari.jpg",
    ],
    region: "Delhi, Agra, Jaipur & Ranthambore, North India",
    durationNights: 8,
    durationDays: 9,
    route: "Delhi → Agra → Fatehpur Sikri → Jaipur → Ranthambore → Delhi",
    months: ["October", "November", "December", "January", "February", "March"],
    groupSize: "Max 10 travelers",
    difficulty: "Easy",
    summary:
      "The Taj Mahal at sunrise, an Old Delhi food walk that rewires your senses, a Rajasthani palace still inhabited by royals, a market in Jaipur's Pink City where the colors don't stop — and two jeep safaris into the tiger heartland of Ranthambore. Nine days of India's greatest hits plus its wildest chapter, unhurried, safe, and seriously good.",
    overview:
      "The Golden Triangle is called that for good reason: Delhi, Agra, and Jaipur form a rough triangle across northwestern India, and between them they hold more UNESCO World Heritage Sites, more Mughal architecture, more royal forts and bazaars than almost any equivalent distance in the world. This 9-day GoTrustelle circuit extends the classic route with two days at Ranthambore National Park — one of India's premier tiger reserves, where Bengal tigers move openly through dry deciduous forest and the ruins of a 10th-century fort rise from the hilltop above the lakes. We move by train between Delhi, Agra and Jaipur (fast, comfortable, and the most authentically Indian way to travel), then drive south to Ranthambore for two open-jeep safaris with a naturalist guide. We eat street food in Old Delhi's lanes with a guide who knows which stall has cooked for the same family for four generations. We reach the Taj Mahal at 6 AM, before the tour groups, when the light is rose-gold and the marble seems to glow from within. We stay in carefully chosen boutique hotels and a safari lodge — places with courtyard gardens, filtered water and beds that are actually good. And throughout, Shikha or a GoTrustelle host is available — not standing in front of you with a flag, but there, in the background, making sure everything works.",
    highlights: [
      "Taj Mahal at sunrise — the most beautiful building on Earth, at the moment it belongs only to you",
      "Two open-jeep safaris in Ranthambore National Park — one of India's best chances to see a wild Bengal tiger",
      "Ranthambore Fort — a 10th-century hilltop fortress overlooking the reserve's lakes and forest",
      "Old Delhi food walk — six hours of jalebi, chaat, kebabs, and the lanes that haven't changed in 300 years",
      "Amber Fort, Jaipur — a Rajput fortress that rises from a ridge above a lake, still breathtaking at hour three",
      "Humayun's Tomb, Delhi — the prototype for the Taj Mahal, and somehow less crowded and more moving",
      "Fatehpur Sikri — a Mughal ghost city abandoned 400 years ago, perfectly preserved in red sandstone",
      "Hawa Mahal & City Palace — the Pink City's two great architectural icons, within walking distance of each other",
      "Train travel between cities — the most real, most Indian part of the journey",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi — Check-in & Old Delhi evening food walk",
        description:
          "Arrive in Delhi and transfer to your boutique hotel in a central neighbourhood — clean, calm, a welcome contrast to the city outside. After settling in and a rest, the evening begins in Old Delhi: a curated food walk through Chandni Chowk, the 17th-century bazaar that remains one of the most electrically alive places in Asia. Jalebi fried fresh in ghee, chaat assembled in seconds, kebabs that have been marinated for twenty-four hours, chai served in small clay cups. Your guide knows which stalls to trust, what to try in which order, and the stories behind the oldest family-run shops. You return to the hotel full in every sense.",
        overnight: "Boutique hotel, Central Delhi",
        highlight: "Old Delhi food walk — your senses don't know what's happening until they do",
      },
      {
        day: 2,
        title: "Delhi full day — Monuments, markets & Lodhi Garden",
        description:
          "A full day in Delhi at a pace that lets the city breathe. Morning: Red Fort (the great Mughal citadel built by Shah Jahan) and Jama Masjid, India's largest mosque, with its courtyard that holds 25,000 worshippers. After lunch, Humayun's Tomb — a 16th-century garden mausoleum that served as the direct prototype for the Taj Mahal, more intimate, less photographed, and in some ways more moving. Late afternoon: Qutub Minar, a 12th-century minaret rising 73 metres from a complex of ruins, surrounded by ancient inscriptions in Arabic and Sanskrit. End the day in Lodhi Garden — 90 acres of ancient tombs, flamingoes, and Delhiites of every kind doing exactly what they please in the fading light.",
        overnight: "Boutique hotel, Central Delhi",
        highlight: "Humayun's Tomb at dusk — the building that taught Shah Jahan everything",
      },
      {
        day: 3,
        title: "Delhi → Agra by train — Agra Fort & Mehtab Bagh",
        description:
          "Morning train from Delhi to Agra (approximately 2 hours on the Gatimaan Express — the fastest train in India, and one of the most pleasant ways to travel in the country). Arrive in Agra by late morning. After check-in and lunch, visit Agra Fort — the massive Mughal citadel from which Shah Jahan was imprisoned by his own son and spent his final years gazing at the Taj Mahal across the Yamuna. In the late afternoon, drive to Mehtab Bagh — the garden on the opposite bank of the river, from which the Taj Mahal appears framed perfectly at golden hour. This is the photograph. Return for dinner at a rooftop restaurant with the dome glowing white across the water.",
        overnight: "Boutique hotel, Agra",
        highlight: "Taj Mahal from Mehtab Bagh at sunset — the view Shah Jahan never tired of",
      },
      {
        day: 4,
        title: "Agra — Taj Mahal sunrise & Fatehpur Sikri",
        description:
          "Wake at 5:30 AM. The Taj Mahal opens at sunrise, and the first thirty minutes — when the light is still rose-gold and the crowds haven't arrived — are unlike any other thirty minutes in India. Stand at the main gate. Walk to the reflecting pool. Watch the colour change. The Taj was built by Shah Jahan over 22 years as a mausoleum for his wife Mumtaz Mahal, and at this hour, in this light, that context lands differently than it does in a guidebook. After a late breakfast, drive to Fatehpur Sikri — a Mughal city built by Emperor Akbar in 1571, abandoned 14 years later when the water supply failed, and preserved ever since in extraordinary red sandstone. The Buland Darwaza (Victory Gate), the ghost courtyards, the Palace of the Wind — a place that time genuinely stopped.",
        overnight: "Boutique hotel, Agra",
        highlight: "The Taj Mahal at sunrise — the most beautiful building in the world, in its best light",
      },
      {
        day: 5,
        title: "Agra → Jaipur via Abhaneri — Arrival in the Pink City",
        description:
          "Drive from Agra to Jaipur (approximately 4.5 hours), stopping en route at Abhaneri — one of India's most extraordinary and least-visited sites. The Chand Baori stepwell here is 13 storeys deep and over 1,200 years old, its 3,500 steps descending in perfect geometric symmetry to water at the bottom. It is, in the best possible sense, impossible. Arrive in Jaipur by late afternoon, check into your heritage haveli hotel, and spend the evening in Johari Bazaar — the Pink City's jewellery and textile district, where block-printed cotton, blue pottery, and semi-precious stones spill across every counter.",
        overnight: "Heritage haveli hotel, Jaipur",
        highlight: "Abhaneri stepwell — 1,200 years old, geometrically perfect, almost completely unknown",
      },
      {
        day: 6,
        title: "Jaipur full day — Amber Fort, Hawa Mahal & the Pink City",
        description:
          "Jaipur's greatest day. Morning at Amber Fort — a Rajput palace-fortress built into a ridge above Maota Lake, its interiors an extraordinary layering of mirror mosaic, painted plaster, and carved marble. Walk the ramparts, stand in the Sheesh Mahal (Hall of Mirrors), and understand why the Rajput kings were considered the finest fortress-builders in Asia. After lunch, the Hawa Mahal — the Palace of Winds, five stories of pink sandstone latticework built so that royal women could watch the street below without being seen. Jantar Mantar: Maharaja Jai Singh II's 18th-century astronomical observatory, a complex of giant geometric instruments that calculated celestial positions with remarkable accuracy. End with the City Palace — still partially inhabited by the royal family of Jaipur — and a final walk through the market as evening falls and the spice stalls close.",
        overnight: "Heritage haveli hotel, Jaipur",
        highlight: "Amber Fort at morning — the Rajput world at its most magnificent",
      },
      {
        day: 7,
        title: "Jaipur → Ranthambore — Into tiger country",
        description:
          "Morning drive from Jaipur to Sawai Madhopur, gateway to Ranthambore National Park (approximately 3.5–4 hours, or by train on request). Check into your safari lodge on the edge of the park. In the late afternoon, your first open-jeep safari into the reserve — dry deciduous forest, ancient banyan trees, crocodile-filled lakes, and the chance of a Bengal tiger moving through the undergrowth in the day's last light.",
        overnight: "Safari lodge, Ranthambore",
        highlight: "First safari at dusk — the forest at its most alive",
      },
      {
        day: 8,
        title: "Ranthambore — Full day, two safaris & the hilltop fort",
        description:
          "An early-morning safari when the park is coolest and wildlife most active: sloth bears, marsh crocodiles, spotted deer, langurs, and — with patience and a good naturalist guide — Ranthambore's famous tigers. Between safaris, visit Ranthambore Fort, a 10th-century hilltop fortress rising above the reserve's lakes, with sweeping views across the forest canopy. A second jeep safari in the late afternoon closes out a full day with the park.",
        overnight: "Safari lodge, Ranthambore",
        highlight: "Two safaris in one day — Ranthambore's best chance at a wild tiger sighting",
      },
      {
        day: 9,
        title: "Ranthambore → Delhi — Departure",
        description:
          "A slow final morning at the lodge before the drive or train back to Delhi (approximately 6 hours by road, or via Sawai Madhopur–Delhi train). Our team arranges your onward connection — flight, hotel in Delhi, or onward train — and ensures you leave with exactly what you need to get where you're going. You arrive home carrying the Taj at 6 AM, the taste of jalebi, and — if the forest was generous — the memory of a tiger in the wild.",
        overnight: "—",
        highlight: "Last morning at the lodge — one more look toward the forest before India lets you go",
      },
    ],
    inclusions: [
      "8 nights accommodation: 2× boutique hotel Delhi + 2× boutique hotel Agra + 2× heritage haveli hotel Jaipur + 2× safari lodge Ranthambore (twin-sharing)",
      "Gatimaan Express train Delhi–Agra (2nd AC, or 1st AC on Premium tier)",
      "Private AC vehicle for all sightseeing, city transfers and the Jaipur–Ranthambore–Delhi legs",
      "Professional licensed guide in each city (Old Delhi food walk, monuments, Jaipur)",
      "Taj Mahal guided visit (sunrise entry included)",
      "Old Delhi evening food walk with tasting stops",
      "Abhaneri stepwell stop on Agra–Jaipur drive",
      "2 open-jeep safaris in Ranthambore National Park with naturalist guide",
      "Ranthambore Fort visit",
      "8 breakfasts + 7 dinners",
      "All monument, fort and park entry fees listed in the itinerary",
      "All tolls, parking and driver allowances",
      "24/7 on-trip support — GoTrustelle host available throughout",
    ],
    exclusions: [
      "International or domestic flights to/from Delhi",
      "Taj Mahal Photography Permit (optional, ₹200)",
      "Lunches during the tour (budget ₹500–800 per meal)",
      "Personal expenses: shopping, tips, beverages",
      "Camel/elephant rides or optional activities at forts",
      "Additional Ranthambore safaris beyond the 2 included",
      "Travel & medical insurance (strongly recommended)",
      "5% GST on total package value",
    ],
    travelTips: [
      "Most EU/EEA, UK, Swiss and Norwegian passport holders are eligible for the Indian e-Visa — apply online at least 4–7 days before travel",
      "Plug types C, D & M, 230V — bring a universal travel adapter (most hotels can also lend one)",
      "Vegetarian, vegan and Jain meal options are available everywhere on this route — just tell us your preferences in advance",
      "Winter mornings (Dec–Feb) can be foggy and cool (5–10°C) for the sunrise Taj visit and the early Ranthambore safari — pack a warm layer plus neutral-coloured clothing for the jeep",
      "Ranthambore National Park is closed during the monsoon (Jul–Sep), so this route only runs Oct–Mar",
    ],
    pricing: [
      { label: "Twin sharing — Standard (from Delhi)", priceEUR: 1599, priceINR: 143900 },
      { label: "Twin sharing — Premium (from Delhi)", priceEUR: 1999, priceINR: 179900 },
    ],
    featured: true,
    departures: ["November 14 – 22, 2026 (fixed group departure)", "Customisable — contact us"],
  },

  // ─── RAJASTHAN ROYAL DESERT CIRCUIT ──────────────────────────────────
  {
    slug: "rajasthan-royal-desert-circuit",
    title: "Rajasthan — Royal Desert Circuit",
    subtitle: "Jaipur · Pushkar · Jodhpur · Jaisalmer · Udaipur — palaces, dunes & the lake that floats on the desert",
    heroImage: "/images/tours/rajasthan/Jaisalmer.jpg",
    galleryImages: [
      "/images/tours/rajasthan/Jaisalmer.jpg",
      "/images/tours/rajasthan/jaipur.jpg",
      "/images/tours/rajasthan/Pushkar.jpg",
      "/images/tours/rajasthan/udaipur.jpg",
    ],
    region: "Jaipur, Pushkar, Jodhpur, Jaisalmer & Udaipur, Rajasthan, North India",
    durationNights: 9,
    durationDays: 10,
    route: "Delhi → Jaipur → Pushkar → Jodhpur → Jaisalmer → Udaipur → Delhi",
    months: ["October", "November", "December", "January", "February", "March"],
    groupSize: "Max 10 travelers",
    difficulty: "Easy",
    summary:
      "A camel ride into the dunes at sunset, a desert fort carved entirely from honey-gold sandstone, a holy lake town where the air smells of marigold and incense, and a white-marble city floating on its own lake. Ten days through the most romantic state in India.",
    overview:
      "If the Golden Triangle is India's greatest-hits introduction, Rajasthan is where you go deeper. This 10-day circuit moves from Jaipur's Pink City through the holy lakeside town of Pushkar, into the blue-washed lanes of Jodhpur beneath the Mehrangarh Fort, out to Jaisalmer — a living sandstone fort city on the edge of the Thar Desert — and finally to Udaipur, the white-marble 'City of Lakes' that inspired a James Bond film and looks, at sunset, like nowhere else on Earth. Along the way: a camel safari into the dunes at Sam, a night under canvas in a proper desert camp with folk music around the fire, havelis carved by merchant families three centuries ago, and a boat ride on Lake Pichola as the City Palace turns gold. We travel by private air-conditioned vehicle throughout, stay in carefully chosen heritage hotels and havelis, and keep the group small. This is Rajasthan for travelers who want the romance of the postcards without the chaos that can come with seeing it alone.",
    highlights: [
      "Camel safari & desert camp at the Sam sand dunes, Jaisalmer — sunset, bonfire, and Rajasthani folk music under the stars",
      "Jaisalmer Fort — one of the few 'living forts' in the world, still inhabited, carved entirely from golden sandstone",
      "Mehrangarh Fort, Jodhpur — one of India's largest and best-preserved forts, towering over the Blue City",
      "Lake Pichola at sunset, Udaipur — the City Palace and Lake Palace Hotel glowing gold on the water",
      "Pushkar — a holy lake town built around 52 ghats, home to the only major Brahma temple in India",
      "Patwon Ki Haveli & the merchant havelis of Jaisalmer — three centuries of carved sandstone artistry",
      "Amber Fort & City Palace, Jaipur — the Pink City's Rajput grandeur",
      "Saheliyon Ki Bari & the old city lanes of Udaipur — fountains, lake views, and rooftop cafés",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → Jaipur — Arrival in the Pink City",
        description:
          "Drive or take the morning train from Delhi to Jaipur (approx. 4.5–5 hours). Check into your heritage hotel and spend the evening exploring Johari Bazaar — Jaipur's jewellery and textile district, where block-printed cotton, blue pottery, and semi-precious stones spill across every counter.",
        overnight: "Heritage haveli hotel, Jaipur",
        highlight: "First evening in the Pink City — bangles, block print and the smell of fresh jalebi",
      },
      {
        day: 2,
        title: "Jaipur full day — Amber Fort, City Palace & Hawa Mahal",
        description:
          "Morning at Amber Fort — a Rajput palace-fortress rising from a ridge above Maota Lake, its interiors a layering of mirror mosaic and carved marble. After lunch, the Hawa Mahal (Palace of Winds) and the City Palace, still partially home to Jaipur's royal family. End the day at Jantar Mantar, Maharaja Jai Singh II's 18th-century astronomical observatory.",
        overnight: "Heritage haveli hotel, Jaipur",
        highlight: "Amber Fort at morning light — the Rajput world at its most magnificent",
      },
      {
        day: 3,
        title: "Jaipur → Pushkar — Brahma Temple & camel ride at sunset",
        description:
          "Drive to Pushkar (approx. 3 hours), a holy town built around a sacred lake with 52 bathing ghats. Visit the Brahma Temple — one of the very few temples to Brahma in all of India — and walk the ghats at dusk as pilgrims light lamps on the water. In the late afternoon, a short camel ride into the dunes outside town for sunset over the Aravalli hills.",
        overnight: "Heritage guesthouse, Pushkar",
        highlight: "Sunset camel ride over the Pushkar dunes",
      },
      {
        day: 4,
        title: "Pushkar → Jodhpur — The Blue City & Mehrangarh Fort",
        description:
          "Drive to Jodhpur (approx. 3.5 hours). Check in and spend the afternoon at Mehrangarh Fort, one of India's largest and best-preserved forts, with sweeping views over the indigo-blue rooftops of the old city below — the reason Jodhpur is known as the Blue City. Visit Jaswant Thada, a marble cenotaph often called the 'Taj Mahal of Marwar', before an evening walk through the Sardar Market beneath the Clock Tower.",
        overnight: "Heritage haveli hotel, Jodhpur",
        highlight: "Mehrangarh Fort ramparts — the entire Blue City spread out in indigo below",
      },
      {
        day: 5,
        title: "Jodhpur → Jaisalmer — Into the Thar Desert",
        description:
          "A scenic drive deep into the Thar Desert (approx. 5–5.5 hours) as the landscape turns increasingly golden and sparse. Arrive in Jaisalmer by mid-afternoon and check into your haveli hotel inside or near the fort. Evening walk through Jaisalmer Fort's narrow lanes — one of the few 'living forts' in the world, still inhabited by around 3,000 people, its sandstone walls glowing amber as the sun drops.",
        overnight: "Heritage haveli hotel, Jaisalmer",
        highlight: "Jaisalmer Fort at golden hour — a living sandstone city",
      },
      {
        day: 6,
        title: "Jaisalmer — Havelis, Gadisar Lake & desert camp under the stars",
        description:
          "Morning visit to Patwon Ki Haveli and Nathmal Ki Haveli — 19th-century merchant mansions with carved sandstone facades so intricate they look like lacework. Stroll around Gadisar Lake, an artificial reservoir ringed with small shrines and chhatris. In the afternoon, drive out to the Sam sand dunes for a proper camel safari into the desert, arriving at a private desert camp for sunset. The evening brings a bonfire, Rajasthani folk music and dance under a sky with no competing light for miles.",
        overnight: "Private desert camp, Sam Dunes",
        highlight: "Camel safari and bonfire night under the Thar Desert stars",
      },
      {
        day: 7,
        title: "Jaisalmer → Jodhpur → Udaipur — Travel day",
        description:
          "Early start back from the dunes. Drive or fly via Jodhpur to Udaipur (the most comfortable option is the Jodhpur–Udaipur flight, approx. 45 minutes; overland is roughly 6–7 hours and can be split into a scenic two-day drive on request). Arrive in Udaipur by evening and check into your lakeside hotel.",
        overnight: "Lakeside heritage hotel, Udaipur",
        highlight: "First glimpse of Lake Pichola and the City Palace from your hotel terrace",
      },
      {
        day: 8,
        title: "Udaipur full day — City Palace, Lake Pichola & Jagdish Temple",
        description:
          "Morning at the City Palace complex, a sprawling assembly of courtyards, balconies and towers built over four centuries on the eastern bank of Lake Pichola. Visit Jagdish Temple, a beautifully carved 17th-century Indo-Aryan temple in the heart of the old city. In the afternoon, a boat ride on Lake Pichola past the Lake Palace Hotel (the former royal summer palace, now a floating five-star hotel) and Jag Mandir island.",
        overnight: "Lakeside heritage hotel, Udaipur",
        highlight: "Boat ride on Lake Pichola as the City Palace turns gold at sunset",
      },
      {
        day: 9,
        title: "Udaipur — Saheliyon Ki Bari, old city lanes & a final rooftop evening",
        description:
          "A slower day: Saheliyon Ki Bari ('Garden of the Maidens'), an 18th-century ornamental garden of fountains and lotus pools built for the royal ladies of the court. Wander the old city's narrow lanes — small art studios, miniature painting workshops, and shops selling Rajasthani textiles. End with a final rooftop dinner overlooking Lake Pichola as the City Palace is lit for the night.",
        overnight: "Lakeside heritage hotel, Udaipur",
        highlight: "Last rooftop dinner over Lake Pichola, City Palace lit against the dark water",
      },
      {
        day: 10,
        title: "Udaipur → Delhi — Departure",
        description:
          "Morning flight from Udaipur back to Delhi (approx. 1.5 hours). Our team confirms your onward connection — flight, hotel, or onward train — and ensures you leave with exactly what you need. You arrive home carrying the colours of Rajasthan: pink sandstone, indigo rooftops, golden dunes, and the white marble of a city built on a lake.",
        overnight: "—",
        highlight: "Last view of Lake Pichola from the air as you fly out",
      },
    ],
    inclusions: [
      "9 nights heritage accommodation: 1× Jaipur + 1× Pushkar + 1× Jodhpur + 1× Jaisalmer haveli + 1× desert camp (Sam Dunes) + 3× lakeside hotel Udaipur + 1× Jaipur (twin-sharing)",
      "Private AC vehicle for all sightseeing and inter-city transfers throughout",
      "Jodhpur–Udaipur flight (or equivalent overland transfer if preferred)",
      "Professional licensed guide in each city",
      "Camel safari and one night at a private desert camp, Sam Dunes (Jaisalmer)",
      "Folk music & dance evening at the desert camp",
      "Lake Pichola boat ride, Udaipur",
      "9 breakfasts + 8 dinners",
      "All monument and fort entry fees listed in the itinerary",
      "All tolls, parking and driver allowances",
      "24/7 on-trip support — GoTrustelle host available throughout",
    ],
    exclusions: [
      "International or domestic flights to/from Delhi",
      "Lunches during the tour (budget ₹500–800 per meal)",
      "Personal expenses: shopping, tips, beverages",
      "Optional activities: hot-air ballooning in Jaisalmer, additional camel/jeep safaris",
      "Travel & medical insurance (strongly recommended)",
      "5% GST on total package value",
    ],
    travelTips: [
      "Most EU/EEA, UK, Swiss and Norwegian passport holders are eligible for the Indian e-Visa — apply online at least 4–7 days before travel",
      "Plug types C, D & M, 230V — bring a universal travel adapter",
      "Pushkar is a strictly vegetarian, alcohol-free holy town — meals there respect this fully; elsewhere on the route vegetarian, vegan and Jain meals are easily arranged",
      "Desert evenings in Jaisalmer and Pushkar can drop sharply after sunset, even in the warmer months — pack a warm layer for the camp night",
    ],
    pricing: [
      { label: "Twin sharing — Standard (from Jaipur)", priceEUR: 1599, priceINR: 143900 },
      { label: "Twin sharing — Premium (from Jaipur)", priceEUR: 1999, priceINR: 179900 },
    ],
    featured: true,
    departures: ["October 10 – 18, 2026 (fixed group departure)", "Customisable — contact us"],
  },

  // ─── VARANASI ────────────────────────────────────────────────────────
  {
    slug: "varanasi-ganges-soul",
    title: "Varanasi — Soul of the Ganges",
    subtitle: "The oldest living city on Earth · Ghats, fire, silence & the river that never stops",
    heroImage: "/images/tours/varanasi/srivatsan-balaji-YpX8_xuV1zE-unsplash.jpg",
    galleryImages: [
      "/images/tours/varanasi/srivatsan-balaji-YpX8_xuV1zE-unsplash.jpg",
      "/images/tours/varanasi/snowscat-JIjCxenDxPY-unsplash.jpg",
      "/images/tours/varanasi/martijn-vonk-tX8Vr5cBv2Y-unsplash.jpg",
      "/images/tours/varanasi/samyak-jain-2q4dRv1Z5Cw-unsplash.jpg",
    ],
    region: "Varanasi, Uttar Pradesh, North India",
    durationNights: 4,
    durationDays: 5,
    route: "Delhi → Varanasi → Sarnath → Varanasi → Delhi",
    months: ["October", "November", "December", "January", "February", "March"],
    groupSize: "Max 8 travelers",
    difficulty: "Easy",
    summary:
      "Varanasi is the oldest continuously inhabited city on Earth, and it is unlike anywhere else: a city built on the edge of death and rebirth, where the Ganges runs between the living and the divine. Five days on its ghats, in its lanes, and at the fire that has burned for 3,500 years.",
    overview:
      "Mark Twain called Varanasi 'older than history, older than tradition, older even than legend.' The Hindu scriptures say it was founded by Shiva himself. Pilgrims have come here to die since before Rome existed — because dying in Varanasi, on the banks of the Ganges, is believed to bring immediate moksha, liberation from the cycle of rebirth. It is one of the most extraordinary places on Earth, and also one of the most difficult to navigate alone: the lanes are a labyrinth, the rituals layered and complex, and the energy — part devotion, part commerce, part something older than both — can overwhelm a first-time visitor quickly. This 5-day GoTrustelle journey is built to give you the real Varanasi: the pre-dawn boat ride when the ghats are half-wrapped in mist and the city is still waking, the Ganga Aarti at Dashashwamedh with a close, calm position away from the crowd, the Kashi Vishwanath Temple corridor that pilgrims have walked for centuries, the silk weavers of the Muslim weavers' quarter who have been producing Banarasi silk since the Mughal era. And Sarnath — the deer park 13 km from Varanasi where the Buddha gave his first teaching after enlightenment, a place of profound stillness that stands in perfect counterpoint to Varanasi's intensity. Throughout, you are accompanied by a guide who was born in Varanasi and understands its rhythms better than any guidebook. Varanasi is not relaxing. It is not meant to be. But in the right hands, it is the most alive place in India.",
    highlights: [
      "Pre-dawn boat ride on the Ganges — the ghats emerging from mist, the city beginning to stir",
      "Ganga Aarti at Dashashwamedh Ghat — fire, chanting, and the river in the dark",
      "Kashi Vishwanath Temple — one of Hinduism's twelve Jyotirlinga shrines, rebuilt by Ahilyabai Holkar in 1780",
      "Sarnath — where the Buddha first taught after enlightenment, 2,500 years ago, the Dhamek Stupa still standing",
      "Manikarnika Ghat — the eternal cremation ghat where the fire has burned continuously for 3,500 years",
      "Banarasi silk weaving — Muslim master weavers producing the most refined silk in India on handlooms",
      "The inner lanes of Varanasi — a world of temples, chai wallahs, and cows that hasn't changed in centuries",
      "Assi Ghat sunrise — the quieter southern end of the ghat circuit, where sadhus gather at first light",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → Varanasi — Arrival & Ganga Aarti",
        description:
          "Fly or take the Vande Bharat Express from Delhi to Varanasi (flight: 1.5 hours; train: 8 hours overnight, arriving fresh in the morning). Transfer to your heritage hotel in the old city — chosen for its rooftop Ganges views and its proximity to the main ghats on foot. In the late afternoon, your guide walks you through the lanes to Dashashwamedh Ghat — the most important ghat in Varanasi — arriving before the crowd fills in. As darkness falls, seven priests perform the Ganga Aarti: a precisely choreographed fire ceremony with conch shells, incense, and brass lamps that has been performed at the same hour every evening for centuries. From your position — calm, close, not pushed — the ceremony is not a spectacle. It is a ritual of a city talking to its river.",
        overnight: "Heritage hotel, Varanasi old city",
        highlight: "Ganga Aarti at Dashashwamedh — the city's nightly conversation with the Ganges",
      },
      {
        day: 2,
        title: "Pre-dawn boat ride, Kashi Vishwanath & the silk weavers",
        description:
          "5:30 AM. You are on the Ganges before the sun. The boat moves slowly along the ghat line — 84 ghats in total, each with its own story — while the city wakes around you. Pilgrims descend stone steps in the half-dark, sadhus begin their morning rituals, smoke rises from Manikarnika. As dawn comes, the light turns the water silver, then copper, then gold. By 8 AM you are back at the ghats for chai and breakfast. Late morning: your guide takes you through the narrow lanes to the Kashi Vishwanath Temple — one of the twelve most sacred Shiva shrines in India, its gold spires visible above the rooftops. After lunch, visit the Muslim weavers' quarter: families who have produced Banarasi silk for four to six generations on handlooms, weaving zari (gold thread) patterns into fabric with a precision that makes automated looms look crude. Watch the process, understand the patterns, buy directly if you wish — no middleman, no pressure.",
        overnight: "Heritage hotel, Varanasi old city",
        highlight: "The pre-dawn boat ride — Varanasi at its most quietly extraordinary",
      },
      {
        day: 3,
        title: "Sarnath — Where the Buddha first spoke",
        description:
          "Drive 13 km north to Sarnath — the deer park where Siddhartha Gautama gave his first teaching after his enlightenment at Bodh Gaya, setting in motion a tradition that now holds over 500 million followers. The contrast with Varanasi is immediate and powerful: where Varanasi is noise and fire and the full insistence of Hindu life, Sarnath is cool, green, and extraordinarily still. The Dhamek Stupa — a 5th-century cylinder of brick and stone rising 43 metres — marks the exact spot of the first sermon. The Sarnath Museum holds some of the most important Buddhist sculpture in Asia, including the Lion Capital of Ashoka, which became the national emblem of India. Return to Varanasi in the afternoon. Evening walk to Assi Ghat — the southern end of the ghat circuit, quieter, where local yogis, students, and older Varanasi families sit at the water's edge.",
        overnight: "Heritage hotel, Varanasi old city",
        highlight: "Dhamek Stupa, Sarnath — standing where the Buddha stood 2,500 years ago",
      },
      {
        day: 4,
        title: "Varanasi at leisure — Lanes, temples & Manikarnika",
        description:
          "A day without a fixed schedule — which is exactly right for Varanasi. Morning is yours: a return to the ghats, a walk deep into the lanes where the temples number in the thousands and the streets are too narrow for anything wider than a bicycle. Your guide is available if you want company; solitude is equally possible. After lunch, a walk to Manikarnika Ghat — the great cremation ghat, where pyres have burned without interruption for 3,500 years. This is not a morbid visit. In Varanasi, death is not hidden — it is woven into life, treated not as an ending but as a transition, and approached with ritual attention and family presence. Your guide explains the tradition slowly and with care. The afternoon ends at a rooftop overlooking the river — one last long look at the ghat line before the sun drops.",
        overnight: "Heritage hotel, Varanasi old city",
        highlight: "Manikarnika Ghat — the eternal fire, understood rather than observed",
      },
      {
        day: 5,
        title: "Varanasi → Delhi — Final morning, departure",
        description:
          "A last early walk to the ghats before breakfast — the city at its most devotional, its most itself. Depending on your departure, your guide accompanies you to the airport or to Varanasi Junction station. The flight back to Delhi takes 1.5 hours. On the train it is 8–10 hours, with the plains of Uttar Pradesh rolling past. You leave Varanasi carrying something that is difficult to name — not peace exactly, not excitement, but a heightened awareness of what a city can hold when it has been inhabited without interruption for three millennia. Our team confirms your onward connections.",
        overnight: "—",
        highlight: "Last morning on the ghats — Varanasi at first light, one final time",
      },
    ],
    inclusions: [
      "4 nights heritage hotel in Varanasi old city (twin-sharing, rooftop Ganges view property)",
      "Private AC vehicle for all transfers and Sarnath excursion",
      "Expert local guide — born in Varanasi, 8+ years' experience — for all city walks and visits",
      "Pre-dawn boat ride on the Ganges (Day 2 — private boat, 90 minutes)",
      "VIP Ganga Aarti positioning at Dashashwamedh Ghat (Day 1)",
      "Kashi Vishwanath Temple guided visit",
      "Sarnath guided visit including Dhamek Stupa and Museum entry",
      "Banarasi silk weaving workshop visit",
      "4 breakfasts + 4 dinners (at heritage hotel or trusted local restaurants)",
      "All monument and museum entry fees in the itinerary",
      "All tolls, parking and driver allowances",
      "24/7 on-trip support",
    ],
    exclusions: [
      "Flights or trains Delhi ↔ Varanasi (we assist with booking on request — Vande Bharat Express recommended)",
      "Lunches during the tour (budget ₹400–700 per meal)",
      "Silk or handicraft purchases (we accompany, never pressure)",
      "Personal expenses: tips, beverages, shopping",
      "Photography permits at certain sites",
      "Travel & medical insurance (recommended)",
      "5% GST on total package value",
    ],
    travelTips: [
      "Most EU/EEA, UK, Swiss and Norwegian passport holders are eligible for the Indian e-Visa — apply online at least 4–7 days before travel",
      "Plug types C, D & M, 230V — bring a universal travel adapter",
      "Varanasi's old city is pure vegetarian — vegan and Jain meal requests are easily accommodated everywhere",
      "Modest dress is appreciated at the ghats and temples (shoulders and knees covered) — light cotton layers work well",
    ],
    pricing: [
      { label: "Twin sharing — Heritage (from Varanasi)", priceEUR: 1499, priceINR: 134900 },
      { label: "Twin sharing — Premium (from Varanasi)", priceEUR: 1699, priceINR: 152900 },
    ],
    featured: true,
    departures: ["Customisable — contact us"],
  },
  {
    slug: "paradise-of-kashmir",
    title: "Paradise of Kashmir",
    subtitle: "Shikara rides, Mughal gardens, and the Meadow of Gold",
    heroImage: "/images/tours/kashmir/jannes-jacobs-KRIGA7iUN08-unsplash.jpg",
    galleryImages: [
      "/images/tours/kashmir/jannes-jacobs-KRIGA7iUN08-unsplash.jpg",
      "/images/tours/kashmir/sourav-bhadra-ixfFZUj0BZA-unsplash.jpg",
      "/images/tours/kashmir/isa-72GwiojCwoI-unsplash.jpg",
      "/images/tours/kashmir/shubhojit-chatterjee-fYv_2DY_LFc-unsplash.jpg",
      "/images/tours/kashmir/tamal-kumar-maur-Vshi5GAoWNQ-unsplash.jpg",
    ],
    region: "Jammu & Kashmir, North India",
    durationNights: 4,
    durationDays: 5,
    route: "Srinagar → Gulmarg → Pahalgam → Sonmarg → Srinagar",
    months: ["June", "July"],
    groupSize: "Max 10 travelers",
    difficulty: "Easy",
    summary:
      "Glide across Dal Lake on a hand-carved shikara, wander the Meadow of Flowers in Gulmarg, and picnic beside glacier-fed rivers. The gentlest introduction to the Himalayas.",
    overview:
      "Kashmir earned its nickname 'Heaven on Earth' for good reason. This 5-day group tour is built around three of the most breathtaking valleys in the Indian Himalayas — Gulmarg, Pahalgam and Sonmarg — with plenty of time to slow down in Srinagar itself. You'll sleep on a traditional houseboat, cruise the lotus-covered lanes of Dal Lake at sunrise, and stop by the Mughal gardens that inspired emperors. Ideal for first-time visitors to India and travelers who want mountain beauty without a demanding itinerary.",
    highlights: [
      "Stay on a hand-carved wooden houseboat on Dal Lake",
      "Gondola cable car above Gulmarg's alpine meadows",
      "Nature walks along the Lidder River in Pahalgam",
      "Sonmarg — the Meadow of Gold — with views of Thajiwas Glacier",
      "Mughal gardens: Nishat Bagh, Shalimar Bagh & Shankaracharya Temple",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar + Mughal Gardens",
        description:
          "Arrive at Srinagar airport and transfer to your houseboat on Dal Lake. Afternoon visit to Nishat Bagh and Shalimar Bagh (the Garden of Pleasure and Abode of All), followed by Shankaracharya Temple with its sunset view over the valley.",
        overnight: "Deluxe houseboat on Dal Lake",
        highlight: "Sunset shikara ride",
      },
      {
        day: 2,
        title: "Day trip to Gulmarg",
        description:
          "Drive 53 km to Gulmarg (8,700 ft), also known as the Meadow of Flowers. Ride the world's second-highest gondola up to Kongdori for panoramic Himalayan views, explore the golf course (world's highest 18-hole course), and return to Srinagar by evening.",
        overnight: "Deluxe hotel / houseboat in Srinagar",
        highlight: "Gulmarg Gondola cable car",
      },
      {
        day: 3,
        title: "Day trip to Pahalgam",
        description:
          "Full-day excursion to Pahalgam, the 'Valley of Shepherds.' Nature walks along the Lidder River, optional pony rides to Baisaran Meadow, and a picnic lunch amidst pine forests.",
        overnight: "Deluxe hotel / houseboat in Srinagar",
        highlight: "Lidder River walks",
      },
      {
        day: 4,
        title: "Day trip to Sonmarg",
        description:
          "Drive to Sonmarg (9,000 ft) — the 'Meadow of Gold.' Snow-capped peaks, the Sindh River full of trout, and an optional pony ride to Thajiwas Glacier.",
        overnight: "Deluxe hotel / houseboat in Srinagar",
        highlight: "Thajiwas Glacier",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Leisurely breakfast, optional last shikara ride, and transfer to Srinagar airport for your onward flight.",
        overnight: "—",
        highlight: "Last sunrise over Dal Lake",
      },
    ],
    inclusions: [
      "4 nights accommodation on twin-sharing (MAP basis)",
      "All airport transfers + private vehicle for sightseeing",
      "Daily breakfast and dinner",
      "1-hour shikara ride on Dal Lake",
      "Meeting & assistance by our local representative on arrival",
    ],
    exclusions: [
      "Airfare to/from Srinagar",
      "Lunches during tour days",
      "Entry fees, cable-car tickets (Gulmarg Gondola), pony rides",
      "Personal expenses (tips, laundry, beverages)",
      "5% GST on total package",
    ],
    travelTips: [
      "Most EU/EEA, UK, Swiss and Norwegian passport holders are eligible for the Indian e-Visa — apply online at least 4–7 days before travel",
      "Plug types C, D & M, 230V",
      "Vegetarian, non-vegetarian and halal Kashmiri Wazwan options are all available — vegan and Jain requests easily accommodated",
      "Pack layers — even in summer, evenings on Dal Lake and in Gulmarg/Sonmarg turn noticeably cool",
    ],
    pricing: [
      { label: "Deluxe (6 pax)", priceEUR: 1699, priceINR: 152900 },
      { label: "Premium (6 pax)", priceEUR: 1799, priceINR: 161900 },
      { label: "Royal (6 pax)", priceEUR: 1899, priceINR: 170900 },
    ],
    featured: true,
    departures: ["September 12 – 19, 2026 (fixed group departure)", "Customisable — contact us"],
  },

  {
    slug: "ladakh-grand-circuit",
    title: "Ladakh Grand Circuit",
    subtitle: "Moonscapes, the world's highest roads & a lake that shifts color with every passing cloud",
    heroImage: "/images/tours/ladakh/abhilash-hegde-vZpJFvlZCtk-unsplash.jpg",
    galleryImages: [
      "/images/tours/ladakh/abhilash-hegde-vZpJFvlZCtk-unsplash.jpg",
      "/images/tours/ladakh/speedy-sandy-IJfpVYlRv5I-unsplash.jpg",
      "/images/tours/ladakh/khush-patel-yjQQO8hIH6A-unsplash.jpg",
      "/images/tours/ladakh/aditya-rao-n1666P1ReCA-unsplash.jpg",
      "/images/tours/ladakh/ashish-kumar-senapati-FTUSP0ZH49I-unsplash.jpg",
    ],
    region: "Ladakh, North India",
    durationNights: 9,
    durationDays: 10,
    route: "Delhi ✈ Leh → Nubra Valley → Turtuk → Pangong Tso → Leh → Delhi ✈",
    months: ["June", "July", "August", "September"],
    groupSize: "Max 10 travelers",
    difficulty: "Moderate",
    summary:
      "Cross Khardung La at 5,359 m, ride a Bactrian camel across Himalayan sand dunes, and watch Pangong Tso turn from deep blue to turquoise as the sun moves. Ten days in one of Earth's most spectacular — and most remote — landscapes.",
    overview:
      "Ladakh defies easy description. It is a high-altitude desert at the edge of Tibet, a moonscape punctuated by ancient monasteries, a place where Himalayan peaks meet sand dunes and glacial rivers run the color of sapphires. It is also, for many travelers, the journey that changes everything — the one they point to years later as the moment their relationship with India, with silence, and with the staggering scale of the natural world shifted permanently. Our 10-day Grand Circuit is designed to give you the full Ladakh: three days in Leh for critical altitude acclimatization and some of the finest monastery visits in Asia, two days exploring the green-and-golden Nubra Valley including the remote Balti village of Turtuk near the Pakistan border, two days at Pangong Tso — the 134 km lake that straddles India and China and shifts through a dozen impossible shades of blue — and a final free day to let Ladakh's pace settle in your bones before you return to the world. We travel in a private vehicle with the same Ladakhi driver throughout, carry an emergency oxygen cylinder, keep the group small, and manage altitude gain carefully. GoTrustelle's host is with you from landing to departure. This is not an adventure for adrenaline seekers — it is a journey for people who want to stand somewhere genuinely extraordinary and feel the full weight of it.",
    highlights: [
      "Pangong Tso (4,350 m) — the 134 km lake that shifts from deep blue to turquoise to green as light changes",
      "Khardung La (5,359 m) — crossing one of the world's highest motorable roads with snowfields on both sides",
      "Nubra Valley: Bactrian camel ride across desert dunes beneath 7,000 m peaks",
      "Turtuk — India's northernmost accessible village, a Balti world of mulberry orchards and ancient wooden mosques",
      "Diskit's 32-metre Maitreya Buddha gazing across the entire Nubra Valley",
      "Hemis Festival (June/July departures) — ancient Cham masked dances at Ladakh's largest monastery",
      "Lamayuru Moonland — an eroded lunar landscape that looks like nothing else on Earth",
      "Confluence of Zanskar & Indus rivers — two completely different colors of water meeting in silence",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi ✈ Leh — Arrival & the golden rule of altitude",
        description:
          "One hour by flight from Delhi and you step out into a different planet: thin air at 3,500 m, a sky so blue it almost hurts, and mountains in every direction. The golden rule of Ladakh applies immediately — today, you do nothing. No monastery, no market, no walk up any hill. Check into your deluxe hotel, eat light, drink plenty of water, and let your body begin adjusting to one-third less oxygen than it had this morning. A mild headache is normal. Sleep is medicine. Your room has an emergency oxygen cylinder nearby. Your body is wiser than your itinerary right now — trust it.",
        overnight: "Deluxe hotel, Leh",
        highlight: "The first sight of Leh from the air — an ancient city cradled by 6,000 m peaks",
      },
      {
        day: 2,
        title: "Leh — Gentle acclimatization & the old city",
        description:
          "A slow morning in Leh, moving at altitude's pace. After breakfast, a gentle walk through the 500-year-old Leh Bazaar — fresh apricots, prayer wheels, hand-woven pashmina, the smell of butter lamps. Visit the old Leh Palace, a nine-storey ruin that once rivalled Lhasa's Potala Palace, with sweeping views of the Indus Valley. Afternoon at your own pace: a bookshop, a rooftop café, a conversation with a monk. At sunset, walk to Shanti Stupa — a gleaming white dome on a hilltop above the city — for the most panoramic first-evening view in Ladakh: the Stok Kangri range turning pink, the Indus winding gold below, and the Leh Palace catching the last light. Most travelers feel significantly better than yesterday.",
        overnight: "Deluxe hotel, Leh",
        highlight: "Shanti Stupa at sunset — your first full Ladakhi panorama",
      },
      {
        day: 3,
        title: "Lower Ladakh — Monasteries, Moonland & the Sangam confluence",
        description:
          "A full day exploring the most dramatic stretch of Lower Ladakh. Begin at Alchi Monastery — one of the oldest in Ladakh, built in the 11th century, with remarkably intact frescoes in styles that blend Kashmiri, Central Asian, and Tibetan influences, found now in no other surviving structure in the region. Continue to Lamayuru: a 14th-century monastery set above a landscape so completely unlike everything around it that geologists call it 'moonland' — pale, eerily eroded formations of sediment left when a prehistoric lake drained, looking at first glance like the surface of another planet. Drive back via Magnetic Hill (where the car rolls uphill — a beautiful optical illusion), Pathar Sahib Gurudwara, and the Sangam point where the grey-green Zanskar meets the copper-brown Indus in a sharp, visible line. Two rivers, two worlds, running side by side without mixing.",
        overnight: "Deluxe hotel, Leh",
        highlight: "Lamayuru Moonland + the Zanskar-Indus Sangam — two unmissable landscapes in one day",
      },
      {
        day: 4,
        title: "Leh → Nubra Valley via Khardung La (5,359 m)",
        description:
          "Today you cross the mountains. The drive to Khardung La — one of the highest motorable roads on Earth — takes you through snowfields even in July, past army convoys, and into a silence that grows as the air thins. The pass itself sits at 5,359 m: a small shrine, a tea stall, a signboard, and a 360-degree view of the Greater Himalaya and Karakoram ranges that is unlike anything at lower altitude. Descend into the Nubra Valley on the far side — a complete transformation. After the arid browns of Leh, Nubra is green: poplar trees, apple and apricot orchards, the Shyok River braiding through the flat valley floor. In the late afternoon, drive to the Hunder sand dunes. Here, in the shadow of 7,000-metre peaks, the Himalayan wind has deposited actual desert dunes — and roaming them are the double-humped Bactrian camels of Central Asia. Your camel ride at sunset, with the dunes curling orange and the Karakoram behind you, is the photograph you'll spend the rest of the trip trying to top.",
        overnight: "Boutique guesthouse / eco-camp, Hunder (Nubra Valley)",
        highlight: "Bactrian camel ride on the Himalayan sand dunes at sunset",
      },
      {
        day: 5,
        title: "Nubra Valley — Diskit, Turtuk & a world near the border",
        description:
          "Morning visit to Diskit Monastery, the largest in Nubra, perched on a rocky outcrop above the valley with a 32-metre Maitreya Buddha whose face gazes serenely north towards the Karakoram — and, symbolically, towards Pakistan. Then drive further north to Turtuk, the last Indian village accessible to tourists before the Line of Control, transferred from Pakistani control in 1971. The Balti people of Turtuk have a culture, architecture, script, and language entirely unlike the Buddhist Ladakhi villages: stone houses with carved wooden balconies, ancient mosques, mulberry orchards, and children who wave at strangers with a warmth that makes the border feel very far away. Your guide introduces you to a local family — tea, dried apricots, stories. A place most travelers to Ladakh never reach.",
        overnight: "Boutique guesthouse / eco-camp, Hunder (Nubra Valley)",
        highlight: "Turtuk — India's northernmost accessible village, unlike anywhere else in Ladakh",
      },
      {
        day: 6,
        title: "Nubra Valley → Pangong Tso (4,350 m) — the lake that stops you cold",
        description:
          "The drive from Nubra to Pangong Tso via the Shyok Valley is one of the great mountain drives in the world: the road follows the Shyok River through gorges of vertical rock, past ancient fortified villages and crumbling stupas, before climbing to the Pangong plateau at 4,350 m. Then the lake appears. You can hear people go quiet in the vehicle every single time. Pangong Tso is 134 km long, sits at over 4,350 m, and straddles the India-China border. The color — a blue of such intensity it seems artificially rendered — is the result of altitude, lack of suspended particles, and a sky that is always bigger up here. Watch the color change through the afternoon and evening: sapphire, cobalt, slate, then silver at dusk. Dinner at the lakeshore with the stars beginning above.",
        overnight: "Lakeside camp / guesthouse, Pangong Tso",
        highlight: "First sight of Pangong — a color of blue you didn't know water could be",
      },
      {
        day: 7,
        title: "Pangong Tso — A full day with the lake",
        description:
          "Wake before dawn. The light at 4,350 m before sunrise has a quality that photographers travel specifically to find — cool, clear, pure. Stand at the waterline and watch the Pangong shift: deep navy to pale gold to the impossible mid-morning blue. Spend the morning walking the south shore towards the village of Spangmik, where Changpa nomadic families sometimes camp with their pashmina goats in the shallower bays. The afternoon is unhurried — a book by the lake, a long walk, a conversation with your guide about what it means to live in a place where winter brings temperatures of −30°C. One more sunset, one more night sky with no artificial light for two hundred kilometres in any direction. The Milky Way here is not a metaphor.",
        overnight: "Lakeside camp / guesthouse, Pangong Tso",
        highlight: "Dawn on the lakeshore — the Pangong at its most extraordinarily quiet",
      },
      {
        day: 8,
        title: "Pangong → Leh via Chang La (5,360 m) & Hemis Monastery",
        description:
          "The return to Leh crosses Chang La at 5,360 m — your second high pass, and the one most travelers find more dramatic than Khardung La because the road on the Pangong side is steeper, more exposed, and utterly empty. Stop at the top for the ritual photograph. Descend into the Indus Valley and drive to Hemis Monastery, the largest and wealthiest in Ladakh, built in a hidden valley below red-rock cliffs. The interiors are extraordinary: thangka paintings the size of houses, antique bronze statues, the smell of butter lamps in chapels that have been lit for five centuries. If your departure falls during the Hemis Festival (late June–early July), this becomes the most vivid day of the entire trip: masked Cham dancers in ancient brocade, ceremonial horns, a 300-year-old tradition performed for an audience of monks, villagers, and — now — a small group from GoTrustelle who somehow found their way here.",
        overnight: "Deluxe hotel, Leh",
        highlight: "Chang La in the morning + Hemis Monastery (festival dates: see departures)",
      },
      {
        day: 9,
        title: "Leh — Free day, local life & the flavours of Ladakh",
        description:
          "Leh earns its own full day. Sleep until your body asks you to wake. Wander the old bazaar with no agenda — pashmina shawls, singing bowls carved in Leh, paintings on hand-made paper, dried apricots that taste like condensed summer. Visit the Hall of Fame, the Indian Army's tribute to the soldiers who have kept these borders for decades in temperatures that stop your watch. Optional afternoon: a cooking class with a Ladakhi family — making thukpa (noodle broth), momos (steamed dumplings), and a cup of butter tea that you will either love or remember for its audacity. This is also the day the trip becomes a memory you can hold: the passes, the dunes, the lake, the monastery courtyard full of dancers.",
        overnight: "Deluxe hotel, Leh",
        highlight: "Leh at your own pace — the day you let it all settle",
      },
      {
        day: 10,
        title: "Leh ✈ Delhi — Departure",
        description:
          "Last breakfast in thin air. Your driver takes you to Kushok Bakula Rinpoche Airport — a small, beautiful terminal with the Stok Kangri range visible from the departure gate. One hour by flight and you are back in Delhi: thick air, heat, the full intensity of the plains. You arrive carrying something Ladakh gives almost everyone who stays long enough: a recalibration of scale, a quieter sense of what is and is not worth worrying about. Our team in Delhi confirms you are safely on your way.",
        overnight: "—",
        highlight: "The flight back — watching the Ladakhi peaks disappear into cloud",
      },
    ],
    inclusions: [
      "9 nights accommodation: 3 nights deluxe hotel Leh + 2 nights boutique guesthouse/eco-camp Nubra Valley + 2 nights lakeside camp/guesthouse Pangong Tso + 2 nights deluxe hotel Leh (twin-sharing throughout)",
      "Private Innova Crysta / SUV for all sightseeing and transfers — same vehicle and driver throughout",
      "Professional English-speaking Ladakhi guide for monastery and heritage visits",
      "All Inner Line Permits: Nubra Valley, Pangong Tso, Turtuk restricted area",
      "Wildlife Sanctuary and Protected Area entry fees",
      "9 breakfasts + 8 dinners (all meals at properties included)",
      "Bactrian camel ride at Hunder sand dunes (Nubra Valley)",
      "Emergency oxygen cylinder in vehicle throughout the trip",
      "First-aid kit with basic altitude medication on board",
      "All tolls, parking and driver allowances",
      "GoTrustelle host present for airport arrival and departure + 24/7 on-trip support",
    ],
    exclusions: [
      "Return flights Delhi ↔ Leh (book early — typically €80–150 per sector; we assist with booking on request)",
      "Lunches throughout the tour (we recommend trusted local restaurants — budget ₹300–500 per meal)",
      "Monastery and monument entry fees (typically ₹50–100 per site)",
      "Helicopter evacuation insurance (strongly recommended for all high-altitude travel)",
      "Personal expenses: shopping, beverages, tips, laundry",
      "Travel & comprehensive medical insurance (required)",
      "Any costs from flight delays, cancellations or weather-related itinerary changes",
      "Personal altitude medication beyond first-aid kit (consult your doctor before travel)",
    ],
    travelTips: [
      "Most EU/EEA, UK, Swiss and Norwegian passport holders are eligible for the Indian e-Visa — apply online at least 4–7 days before travel",
      "Plug types C, D & M, 230V — bring a power bank for the Nubra/Pangong legs, where electricity is solar/generator-based",
      "Vegetarian and vegan meals are available throughout, though menus are simpler at altitude — let us know dietary needs in advance",
      "Pack for big swings in temperature: a warm down layer for nights even in summer, plus strong sun protection for high-altitude UV",
      "Comprehensive travel insurance with high-altitude medical evacuation cover is essential for this route",
    ],
    pricing: [
      { label: "Twin sharing — Deluxe (from Leh)", priceEUR: 2199, priceINR: 197900 },
      { label: "Twin sharing — Premium (from Leh)", priceEUR: 2499, priceINR: 224900 },
    ],
    featured: true,
    departures: ["Customisable — contact us"],
  },  // ─── LADAKH DARK SKY CIRCUIT ─────────────────────────────────────────
  {
    slug: "ladakh-dark-sky-circuit",
    title: "Ladakh Dark Sky Circuit",
    subtitle: "Hanle, Tso Moriri & the Changthang — the remotest corners of India's roof",
    heroImage: "/images/tours/ladakh/speedy-sandy-IJfpVYlRv5I-unsplash.jpg",
    galleryImages: [
      "/images/tours/ladakh/speedy-sandy-IJfpVYlRv5I-unsplash.jpg",
      "/images/tours/ladakh/abhilash-hegde-vZpJFvlZCtk-unsplash.jpg",
      "/images/tours/ladakh/khush-patel-yjQQO8hIH6A-unsplash.jpg",
      "/images/tours/ladakh/aditya-rao-n1666P1ReCA-unsplash.jpg",
      "/images/tours/ladakh/ashish-kumar-senapati-FTUSP0ZH49I-unsplash.jpg",
    ],
    region: "Ladakh & Changthang, North India",
    durationNights: 12,
    durationDays: 13,
    route: "Delhi ✈ Leh → Nubra → Turtuk → Pangong Tso → Hanle → Tso Moriri → Leh → Delhi ✈",
    months: ["July", "August", "September"],
    groupSize: "Max 10 travelers",
    difficulty: "Moderate",
    summary:
      "Beyond Pangong lies a Ladakh that most travelers never reach — the vast Changthang plateau, the Indian Astronomical Observatory at Hanle under the darkest sky in Asia, and the pristine wilderness of Tso Moriri. Thirteen days, a world away.",
    overview:
      "If the Ladakh Grand Circuit shows you the highlights, the Dark Sky Circuit shows you the soul. This 13-day journey extends east from Pangong into the Changthang — a wind-scoured plateau at over 4,500 m where nomadic Changpa families have herded pashmina goats for centuries, where the air is so dry and clear that the Indian Astronomical Observatory chose Hanle for one of the world's great high-altitude telescopes, and where Tso Moriri sits in absolute stillness, 28 km of wilderness lake that the vast majority of India's visitors will never see. The route from Pangong to Hanle passes the Rezang La memorial, site of one of the 1962 war's most heroic last stands. Hanle itself is a village of a few hundred people at 4,572 m — it holds the record for the darkest measurable sky in India, and on a clear night the Milky Way casts visible shadows. Tso Moriri is a Ramsar-protected wetland, home to black-necked cranes, Kiang wild horses, and a solitude so complete that you can hear individual birds from half a kilometre away. The return to Leh passes Chumathang's roadside hot springs. This is the itinerary for travelers who have already done Ladakh once — or who simply want to go further than the crowd.",
    highlights: [
      "Hanle Dark Sky Reserve — the darkest measurable night sky in India, Milky Way visible all night",
      "Indian Astronomical Observatory, Hanle (4,500 m) — one of the world's highest telescope sites",
      "Tso Moriri (4,522 m) — a pristine, crowd-free Ramsar wetland home to black-necked cranes & Kiang wild horses",
      "Rezang La Memorial — the 1962 battle site on the drive from Pangong to Hanle",
      "Changthang plateau — nomadic Changpa families, pashmina goats, wind and sky",
      "Chumathang hot springs — natural geothermal pools on the road back to Leh",
      "Karzok Monastery on the Tso Moriri shore — a tiny, ancient gompa at the edge of the world",
      "All the Grand Circuit highlights: Khardung La, Nubra Valley, Pangong Tso, Turtuk, Diskit",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi ✈ Leh — Arrival & the golden rule",
        description:
          "Fly into Leh (3,500 m). The golden rule applies the moment you land: do nothing today. Check in, eat light, drink water, rest. Your body needs 24 hours before any activity. An oxygen cylinder is on standby in your room.",
        overnight: "Deluxe hotel, Leh",
        highlight: "First view of Leh cradled by 6,000 m peaks",
      },
      {
        day: 2,
        title: "Leh — Gentle acclimatization & the old city",
        description:
          "Slow morning walk through the Leh Bazaar. Visit the Leh Palace (nine-storey ruin, sweeping Indus Valley views). Shanti Stupa at sunset — a panorama that turns the whole Stok Kangri range pink.",
        overnight: "Deluxe hotel, Leh",
        highlight: "Shanti Stupa sunset — the full Ladakhi panorama",
      },
      {
        day: 3,
        title: "Lower Ladakh — Monasteries, Moonland & Sangam",
        description:
          "Day trip to Alchi (11th-century frescoes), Lamayuru (moonland — a prehistoric lake bed that looks like another planet), Magnetic Hill, and the Sangam where the turquoise Zanskar meets the copper-brown Indus in a razor-sharp line.",
        overnight: "Deluxe hotel, Leh",
        highlight: "Lamayuru Moonland + Zanskar-Indus confluence",
      },
      {
        day: 4,
        title: "Leh → Nubra Valley via Khardung La (5,359 m)",
        description:
          "Cross Khardung La — one of the world's highest motorable roads — and descend into the green Nubra Valley. Arrive at Hunder in the late afternoon. Bactrian camel ride across desert dunes at sunset beneath 7,000 m Karakoram peaks.",
        overnight: "Boutique guesthouse / eco-camp, Hunder, Nubra Valley",
        highlight: "Bactrian camel ride on Himalayan sand dunes at sunset",
      },
      {
        day: 5,
        title: "Nubra Valley — Diskit & Turtuk",
        description:
          "Morning at Diskit Monastery with the 32-metre Maitreya Buddha overlooking the valley. Afternoon drive to Turtuk — India's northernmost accessible village, a Balti world of mulberry orchards, carved wooden mosques, and a culture unlike anywhere else in Ladakh.",
        overnight: "Boutique guesthouse / eco-camp, Hunder, Nubra Valley",
        highlight: "Turtuk — India's northernmost village near the Pakistan border",
      },
      {
        day: 6,
        title: "Nubra → Pangong Tso (4,350 m) via Shyok Valley",
        description:
          "The great Pangong drive: following the Shyok River through gorge scenery of vertical rock and ancient villages before climbing to the plateau. First sight of Pangong Tso — a blue so intense it stops conversation mid-sentence.",
        overnight: "Lakeside camp / guesthouse, Pangong Tso",
        highlight: "First sight of Pangong — the blue that defies description",
      },
      {
        day: 7,
        title: "Pangong Tso — A full day with the lake",
        description:
          "Wake before dawn for sunrise light on the water. Walk the south shore towards Spangmik, watch the lake shift through cobalt, turquoise, and steel-grey as clouds move. Evening sunset, night sky with the Milky Way beginning to appear. A day of almost nothing — which is everything.",
        overnight: "Lakeside camp / guesthouse, Pangong Tso",
        highlight: "Dawn on the Pangong shoreline — the world's most extraordinary morning",
      },
      {
        day: 8,
        title: "Pangong → Rezang La → Hanle (4,572 m)",
        description:
          "Leave the tourist circuit behind. Drive south through the Chushul plateau to Rezang La (5,360 m) — the memorial to the Charlie Company of the 13th Kumaon Regiment who held this pass against overwhelming odds in 1962. Descend to the Changthang and arrive in Hanle village at 4,572 m — a huddle of whitewashed houses, prayer flags, and the telescope dome of the IAO visible on the ridge above.",
        overnight: "Guesthouse, Hanle",
        highlight: "Rezang La — a moving stop at one of India's most significant memorials",
      },
      {
        day: 9,
        title: "Hanle — Dark Sky Reserve & the Indian Astronomical Observatory",
        description:
          "Morning at leisure in Hanle — take a slow walk to the 17th-century Hanle Monastery for views across the Changthang plateau. Afternoon: visit the Indian Astronomical Observatory (IAO) compound at 4,500 m, home to the 2-metre Himalayan Chandra Telescope — one of the world's highest optical telescopes (prior arrangement required; availability subject to confirmation). As the sun drops, return to your guesthouse rooftop. By 8 PM, Hanle has no competing lights for 200 km in every direction. The Milky Way here is not merely visible — it casts measurable shadows. This is the darkest measurable sky in India.",
        overnight: "Guesthouse, Hanle",
        highlight: "The darkest sky in India — the night you will remember longest",
      },
      {
        day: 10,
        title: "Hanle → Tso Moriri (4,522 m) across the Changthang",
        description:
          "Drive across the wide, wind-scraped Changthang plateau via Sumdo — the junction of India, Tibet, and the wild. The landscape here is prehistoric: vast, tawny, inhabited only by the occasional Changpa family in their black yak-hair tent with pashmina goats scattered around like stones. Descend to Tso Moriri as the light shifts gold. The lake appears with no fanfare: just an end to the plateau and 28 km of still, glass-clear water with no commercial boat, no souvenir stall, no road on three sides.",
        overnight: "Eco-camp / guesthouse, Karzok, Tso Moriri",
        highlight: "Arriving at Tso Moriri — the lake most of India has never seen",
      },
      {
        day: 11,
        title: "Tso Moriri — Wildlife, Karzok Monastery & vast silence",
        description:
          "A full day at one of Asia's great wilderness lakes. Morning walk along the northern shore for wildlife: Kiang (Tibetan wild ass) roam the flats in herds of twenty; black-necked cranes — one of the world's most endangered birds — nest in the shallows; Tibetan wolves and red fox are occasionally spotted on the hillsides. Visit Karzok Monastery, the small ancient gompa on the lake shore that serves the handful of Changpa families who have camped here for generations. Afternoon: sit at the water's edge. The Tso Moriri skyline — ring of snow-streaked ridges, unbroken silence, the occasional cry of a crane — is medicine.",
        overnight: "Eco-camp / guesthouse, Karzok, Tso Moriri",
        highlight: "Black-necked cranes, Kiang wild horses, and the full silence of the Changthang",
      },
      {
        day: 12,
        title: "Tso Moriri → Chumathang Hot Springs → Leh",
        description:
          "The return drive to Leh follows the Indus downstream through some of its most dramatic gorge scenery. Stop at Chumathang — roadside geothermal hot springs that bubble at 40–50°C beside a rushing glacial stream. Optional soak (basic changing facilities). Reach Leh by evening, hot shower, a proper dinner, and the particular quiet satisfaction of having been somewhere most people never go.",
        overnight: "Deluxe hotel, Leh",
        highlight: "Chumathang hot springs — a natural spa at the edge of the Changthang",
      },
      {
        day: 13,
        title: "Leh ✈ Delhi — Departure",
        description:
          "Last breakfast in Ladakh's thin, clean air. Transfer to the airport for the morning flight back to Delhi (1 hour). You arrive in the heat and noise of the plains with something no airport gift shop can replicate.",
        overnight: "—",
        highlight: "Last look at the Stok Kangri range from the departure gate",
      },
    ],
    inclusions: [
      "12 nights accommodation: 3× deluxe hotel Leh + 2× guesthouse/eco-camp Nubra + 2× lakeside camp/guesthouse Pangong + 2× guesthouse Hanle + 2× eco-camp Karzok (Tso Moriri) + 1× deluxe hotel Leh (twin-sharing)",
      "Private Innova Crysta / SUV for all transfers — same vehicle and driver throughout",
      "Professional English-speaking Ladakhi guide for monastery, heritage and wildlife visits",
      "All Inner Line Permits: Nubra Valley, Pangong Tso, Turtuk, Hanle Restricted Area, Tso Moriri",
      "Changthang Wildlife Sanctuary and Tsomoriri Wetland Conservation Reserve entry fees",
      "12 breakfasts + 11 dinners",
      "Bactrian camel ride at Hunder sand dunes",
      "Emergency oxygen cylinder in vehicle throughout",
      "First-aid kit with altitude medication on board",
      "All tolls, parking and driver allowances",
      "GoTrustelle host for airport arrival & departure + 24/7 on-trip support",
    ],
    exclusions: [
      "Return flights Delhi ↔ Leh (book early — approx. €80–150 per sector; we assist on request)",
      "IAO telescope visit (subject to availability & separate permit — we apply on your behalf)",
      "Lunches during the tour (budget ₹300–500 per meal at local dhabas)",
      "Monastery and monument entry fees (typically ₹50–100 per site)",
      "Helicopter evacuation insurance (essential for Changthang travel)",
      "Personal expenses: shopping, beverages, tips, laundry",
      "Travel & comprehensive medical insurance (required)",
      "Any costs from flight delays or weather-related itinerary changes",
    ],
    travelTips: [
      "Most EU/EEA, UK, Swiss and Norwegian passport holders are eligible for the Indian e-Visa — apply online at least 4–7 days before travel",
      "Plug types C, D & M, 230V — bring a power bank too, as remote Changthang guesthouses run on limited solar/generator power",
      "Vegetarian and vegan meals are available throughout, though menus are simpler at altitude — let us know dietary needs in advance",
      "Pack for big swings in temperature: a warm down layer for nights even in July/August, plus strong sun protection for intense high-altitude UV",
      "Comprehensive travel insurance with high-altitude medical evacuation cover is essential for this route",
    ],
    pricing: [
      { label: "Twin sharing — Deluxe (from Leh)", priceEUR: 2199, priceINR: 197900 },
      { label: "Twin sharing — Premium (from Leh)", priceEUR: 2499, priceINR: 224900 },
    ],
    featured: false,
    departures: ["Customisable — contact us"],
  },

  {
    slug: "spiti-summer-expedition",
    title: "Spiti Summer Expedition",
    subtitle: "High-altitude villages, ancient monasteries, Himalayan skies",
    heroImage: "/images/tours/spiti/soham-nandi-YakUHx_f7A4-unsplash.jpg",
    galleryImages: [
      "/images/tours/spiti/soham-nandi-YakUHx_f7A4-unsplash.jpg",
      "/images/tours/spiti/bisakha-datta-gdOwnNFZh4k-unsplash.jpg",
      "/images/tours/spiti/khoj-3yi-fEbgFls-unsplash.jpg",
      "/images/tours/spiti/varun-singh-RmWkrjjz2J4-unsplash.jpg",
      "/images/tours/spiti/vinay-manda-lZeJBwzjGHg-unsplash.jpg",
      "/images/tours/spiti/kashish-lamba-5LSy7TiVCgQ-unsplash.jpg",
    ],
    region: "Himachal Pradesh, North India",
    durationNights: 6,
    durationDays: 7,
    route: "Delhi → Shimla → Chitkul → Tabo → Kaza → Kalpa → Shimla → Delhi",
    months: ["June", "July"],
    groupSize: "Max 10 travelers",
    difficulty: "Moderate",
    summary:
      "Cross the mighty Kinnaur gorge, sip butter tea in cliffside monasteries, and stand in the world's highest village. A once-in-a-lifetime Himalayan circuit.",
    overview:
      "Spiti is the most dramatic landscape most travelers have never heard of — a high-altitude desert tucked between the Greater Himalayas and Tibet. Our June–July expedition is timed for the narrow summer window when the passes open and the valley comes alive with wildflowers. You'll visit 1,000-year-old monasteries, mail a postcard from the world's highest post office, and share meals with families in remote homestays. Expert Himalayan guides, careful altitude acclimatization, and comfortable overnight stays throughout.",
    highlights: [
      "Chitkul — the last Indian village before Tibet",
      "Key Monastery perched on a Himalayan ridge",
      "Hikkim (world's highest post office) & Komic (highest motorable village)",
      "Chicham — one of Asia's highest suspension bridges",
      "Tabo Monastery, often called the 'Ajanta of the Himalayas'",
    ],
    itinerary: [
      {
        day: 0,
        title: "Delhi → Himachal foothills (overnight journey)",
        description:
          "Meet your group in Delhi in the evening and board a comfortable overnight coach into the mountains. The ride sets the tone — a slow transition from city to silence.",
        overnight: "On board (semi-sleeper coach)",
      },
      {
        day: 1,
        title: "Shimla → Sangla via Narkanda",
        description:
          "Arrive in Shimla by morning, break for breakfast, then drive through Narkanda and Rampur into Kinnaur. Stop at the Kinnaur Gate and the mighty Karcham Dam on the way to Sangla.",
        overnight: "Homestay / guesthouse in Sangla",
        highlight: "First taste of high-mountain tranquility",
      },
      {
        day: 2,
        title: "Sangla → Chitkul → Nako → Tabo",
        description:
          "Morning drive to Chitkul, the last Indian village near the China border. Continue along the Sutlej, witness the Khab Sangam confluence, and pause at the turquoise Nako Lake before arriving in Tabo.",
        overnight: "Homestay / guesthouse in Tabo",
        highlight: "Chitkul's alpine meadows and Nako Lake",
      },
      {
        day: 3,
        title: "Tabo → Dhankar → Kaza",
        description:
          "Visit the 1,000-year-old Tabo Monastery, then continue to Dhankar Monastery, dramatically perched on a cliff. Arrive in Kaza, the heart of Spiti, and explore the local market.",
        overnight: "Guesthouse / hotel in Kaza",
        highlight: "Cliffside Dhankar and Kaza's laid-back evening vibe",
      },
      {
        day: 4,
        title: "Kaza → Langza → Hikkim → Komic → Kaza",
        description:
          "Explore three of the world's highest inhabited villages: Langza (giant Buddha + marine fossils), Hikkim (world's highest post office — send a postcard!), and Komic (highest motorable village).",
        overnight: "Guesthouse / hotel in Kaza",
        highlight: "Life above 14,500 ft",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80",
      },
      {
        day: 5,
        title: "Kaza → Key Monastery → Chicham Bridge → Kaza",
        description:
          "Visit the iconic Key Monastery at sunrise, then drive to Chicham Bridge — one of Asia's highest suspension bridges — for jaw-dropping gorge views.",
        overnight: "Guesthouse / hotel in Kaza",
        highlight: "The most photogenic day of the trip",
        image: "/images/ladakh/leh-day2.jpg",
      },
      {
        day: 6,
        title: "Kaza → Gui → Tabo → Kalpa",
        description:
          "Begin the return journey with a stop at Gui Monastery, home to a 500-year-old naturally preserved monk mummy. Descend into Kinnaur and reach Kalpa by evening.",
        overnight: "Guesthouse / hotel in Kalpa",
        highlight: "Mystical Gui Monastery",
      },
      {
        day: 7,
        title: "Kalpa → Shimla → Delhi",
        description:
          "Wake to views of the sacred Kinner Kailash. Stop at Suicide Point for panoramic valley vistas before descending to Shimla and boarding the overnight coach to Delhi.",
        overnight: "On board (overnight journey to Delhi)",
        highlight: "Sunrise over Kinner Kailash",
      },
    ],
    inclusions: [
      "6 nights of comfortable homestays, guesthouses and hotels (twin/triple sharing)",
      "Volvo/coach tickets Delhi ↔ Shimla",
      "Private SUV/Tempo Traveller for the entire Spiti circuit",
      "6 breakfasts and 6 dinners",
      "All tolls, parking, driver allowances and inner-line permits",
      "Experienced Himalayan driver & 24/7 on-ground support",
      "English-speaking group host",
    ],
    exclusions: [
      "International or domestic flights to/from Delhi",
      "Meals during transit (Delhi ↔ Shimla)",
      "Personal expenses (shopping, drinks, laundry, tips)",
      "Monastery entry fees & optional adventure activities",
      "Travel & medical insurance (strongly recommended)",
      "Any cost arising from roadblocks, weather or force majeure",
    ],
    travelTips: [
      "Most EU/EEA, UK, Swiss and Norwegian passport holders are eligible for the Indian e-Visa — apply online at least 4–7 days before travel",
      "Plug types C, D & M, 230V — bring a power bank, as some Spiti homestays have limited electricity",
      "Vegetarian and vegan meals are available throughout, though menus are simpler at altitude — let us know dietary needs in advance",
      "Pack for big temperature swings: warm layers for cold nights even in June/July, plus sun protection for strong high-altitude UV",
      "Comprehensive travel insurance with high-altitude medical evacuation cover is strongly recommended",
    ],
    pricing: [
      { label: "Twin / Triple sharing (from Shimla)", priceEUR: 1699, priceINR: 152900 },
      { label: "Twin / Triple sharing (from Delhi)", priceEUR: 1799, priceINR: 161900 },
      { label: "Double occupancy (from Delhi)", priceEUR: 1799, priceINR: 161900 },
    ],
    featured: true,
    departures: ["July 25 – August 2, 2026 (fixed group departure)", "Customisable — contact us"],
  },

  {
    slug: "rishikesh-himalayan-escape",
    title: "Rishikesh & Himalayan Escape",
    subtitle: "Premium · 7 days · A soft, safe introduction to India — where you feel welcomed, not lost",
    heroImage: "/images/tours/rishikesh/ashwini-chaudhary-monty-bsVt1_On_gk-unsplash.jpg",
    galleryImages: [
      "/images/tours/rishikesh/ashwini-chaudhary-monty-bsVt1_On_gk-unsplash.jpg",
      "/images/tours/rishikesh/aditya-siva-HlQi14Q_iO0-unsplash.jpg",
      "/images/tours/rishikesh/niloy-banerjee-w2uhp5VrF8M-unsplash.jpg",
      "/images/tours/rishikesh/palak-pitroda-05DurkzaUsg-unsplash.jpg",
      "/images/tours/rishikesh/saurabh-kumar-qDvc3Q2G7lo-unsplash.jpg",
    ],
    region: "Uttarakhand, North India",
    durationNights: 6,
    durationDays: 7,
    route: "Delhi → Rishikesh → Chopta → Himalayan Village → Rishikesh → Delhi",
    months: ["June", "July", "September"],
    groupSize: "Max 8 travelers",
    difficulty: "Easy",
    summary:
      "Private yoga on the Ganges, the world's highest Shiva temple, a real Himalayan family home, and a spa reset — all in seven curated days. The premium way to feel India for the very first time.",
    overview:
      "Most first-time travelers to India arrive with a mix of excitement and quiet apprehension — the colors, the crowds, the unknowns. This 7-day journey is designed specifically to dissolve that apprehension and replace it with something you won't expect: a feeling of home. We built this experience for Europeans who want to meet India on its own terms, without the overwhelm. You'll sleep in hand-chosen luxury properties with clean beds, reliable hot water, and filtered drinking water at every stop. You'll travel exclusively in private air-conditioned vehicles with professional drivers we know personally. You'll eat food we've vetted for hygiene and freshness. And through it all — from your first yoga session on the Ganges to the moment you summit Chandrashila and the entire Himalayan range opens before you — Shikha or a senior GoTrustelle host will be there, not as a tour guide but as a friend who happens to know India very well. The village visit on Day 5 is our proudest offering: a real Himalayan family welcome, cooking together, stories over chai, the kind of afternoon that makes you forget about Instagram completely. This is not a tour of India. This is your introduction to the India that exists beyond the itinerary.",
    highlights: [
      "VIP Ganga Aarti — intimate positioning away from the crowds, fire on the river at dusk",
      "Private sunrise yoga on the banks of the Ganges — beginner-friendly, deeply restorative",
      "Chandrashila summit (4,000 m) — 360° Himalayan panorama above the world's highest Shiva temple",
      "Day 5 village immersion — cooking, stories, and chai with a real Himalayan family (not staged tourism)",
      "Chopta stargazing bonfire — no light pollution, the Milky Way overhead",
      "Rishikesh spa & sound healing reset — the perfect closing chapter before heading home",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → Rishikesh — Private transfer & soft landing",
        description:
          "Your driver meets you at Delhi airport or your hotel in a clean, air-conditioned private SUV. The 5–6 hour drive through the Gangetic plains and into the Shivalik foothills is your first taste of India at the right pace — no buses, no strangers, just you and the changing landscape. Arrive in Rishikesh to a welcome drink and check-in at your luxury riverside property. The evening is yours: breathe the Himalayan air, listen to the Ganges, and ease in gently with a light curated dinner (continental and Indian options) on the riverside terrace.",
        overnight: "Luxury riverside hotel, Rishikesh (Taj Rishikesh or equivalent)",
        highlight: "First evening by the Ganges — the city that never feels quite like India and yet feels like nothing else",
      },
      {
        day: 2,
        title: "Rishikesh — Yoga, café culture & VIP Ganga Aarti",
        description:
          "Morning begins with a private guided yoga session on the banks of the Ganges — beginner-friendly, deeply grounding, and unlike any studio class you've attended. Slow breakfast with a river view, then the rest of the morning is yours to explore Rishikesh's hidden aesthetic café scene, the bookshops and spice stalls of Tapovan, and the suspension bridges of Laxman Jhula at your own pace. In the afternoon, Shikha takes you to her favourite spots — the ones that don't make it into the guidebooks. As the sun drops, we take private positions at Triveni Ghat for the Ganga Aarti: priests carrying fire, a thousand floating lamps, devotional music rising over the river. Not the version tourists see from a distance — the version you experience close, personally hosted, and fully present.",
        overnight: "Luxury riverside hotel, Rishikesh",
        highlight: "Private yoga at sunrise + VIP Ganga Aarti at dusk",
      },
      {
        day: 3,
        title: "Rishikesh → Chopta — Into the mountains",
        description:
          "After a relaxed breakfast, drive east into the Kedarnath Wildlife Sanctuary as the roads narrow and the Himalayan forest thickens around you. The 6–7 hour drive is part of the experience — waterfalls appear beside the road, villages cling to hillsides, and the air changes noticeably as you climb. Arrive in Chopta (2,680 m) — Uttarakhand's 'Mini Switzerland' — in the early evening. Your boutique mountain lodge is warm, intimate, and impeccably clean. Dinner tonight is organic and home-style, cooked by the lodge family. After dinner, if the sky is clear (it usually is), the bonfire is lit and the stargazing begins. The Milky Way here is something you carry home.",
        overnight: "Boutique mountain eco-lodge, Chopta (Himalayan Eco Lodge or equivalent)",
        highlight: "Bonfire, mountain air, and a sky you can't photograph well enough",
      },
      {
        day: 4,
        title: "Chandrashila Summit (4,000 m) & Tungnath Temple — Signature Day",
        description:
          "Early morning start to reach the summit before the clouds build. The trek ascends 3.5 km through rhododendron forest and wide alpine meadows to Tungnath Temple — the world's highest Shiva shrine at 3,680 m, built over 1,000 years ago. Pause here. Light a stick of incense. Let the silence land. Then a final 1.5 km to Chandrashila summit at 4,000 m, where the full Garhwal Himalayan panorama opens in every direction: Nanda Devi, Trishul, Chaukhamba, Kedarnath. This moment — standing above the clouds, surrounded by peaks that took millennia to form — is the one travelers describe months later. Our guide sets a slow, comfortable pace; this trek is fully manageable for first-timers. Return to the lodge for a hot lunch, rest, and a premium dinner.",
        overnight: "Boutique mountain eco-lodge, Chopta",
        highlight: "4,000 m summit above the clouds — the emotional peak of the trip",
      },
      {
        day: 5,
        title: "Himalayan Village Day — Cooking, stories & real connection",
        description:
          "This is GoTrustelle's signature day — the one that separates this journey from every other India package you'll find. We visit a nearby Himalayan village and spend half the day with a local family: helping cook a traditional Garhwali meal on a wood fire, sitting cross-legged in a courtyard learning about daily mountain life, listening to stories that don't end up in any guidebook. No actors, no staged performances — just real people who open their home because Shikha has built real relationships here over years. You will share a meal that tastes unlike anything else you'll have in India, and you'll probably stay far longer than the schedule says. This is the afternoon most travelers say changed how they see travel entirely.",
        overnight: "Boutique mountain eco-lodge, Chopta (or en-route guesthouse)",
        highlight: "The afternoon that makes you forget about Instagram",
      },
      {
        day: 6,
        title: "Chopta → Rishikesh — Spa reset & luxury evening",
        description:
          "Return to Rishikesh with the mountains still fresh in your body. Check back into your riverside property, and the afternoon belongs entirely to restoration: a curated spa session (Ayurvedic massage, aromatherapy, or deep tissue — your choice), followed by optional sound healing or guided meditation if your body is calling for it. Dinner tonight is an elevated, relaxed group affair — Shikha joins to celebrate the week over great food, laughter, and the particular warmth that only forms between people who've shared something real.",
        overnight: "Luxury riverside hotel, Rishikesh",
        highlight: "Himalayan spa reset — the mountains softened into your muscles",
      },
      {
        day: 7,
        title: "Rishikesh → Delhi — Departure with care",
        description:
          "A slow final morning: chai by the river, one last walk to the ghat. Your private vehicle departs after breakfast for Delhi airport or a hotel in the city (5–6 hours). Your driver handles your luggage, knows the routes, and gets you there on time. If you have an onward train rather than a flight, we pre-arrange everything. You leave with one thing most tourists don't: a clear, strong sense that you've understood something about this country — not just seen it.",
        overnight: "—",
        highlight: "Last chai by the Ganges — carrying India home with you",
      },
    ],
    inclusions: [
      "6 nights luxury & boutique accommodation: 2× premium riverside hotel Rishikesh + 2× boutique eco-lodge Chopta + 2× premium riverside hotel Rishikesh (twin-sharing)",
      "Private AC SUV or Innova Crysta for all transfers throughout (no shared buses, ever)",
      "Professional vetted driver — same driver the whole trip",
      "Private guided yoga session on the Ganges (Day 2)",
      "VIP Ganga Aarti positioning at Triveni Ghat — personally hosted",
      "Certified Himalayan trek guide for Chandrashila summit day",
      "Chandrashila summit & Tungnath temple trek permits",
      "Himalayan village experience — home-cooked family lunch included (Day 5)",
      "Chopta bonfire & stargazing evening",
      "Spa session in Rishikesh — Ayurvedic or deep-tissue massage (Day 6)",
      "6 breakfasts + 5 dinners (organic, hygienic, locally sourced where possible)",
      "Welcome drink on arrival in Rishikesh",
      "Filtered water throughout the trip",
      "All tolls, parking fees and driver allowances",
      "24/7 personal host support — Shikha or a senior GoTrustelle team member present throughout",
    ],
    exclusions: [
      "International or domestic flights to/from Delhi",
      "Lunches during the tour (we recommend trusted local restaurants — budget ~€8–12 per meal)",
      "Optional activities: white-water rafting, bungee jumping, kayaking (can be arranged at extra cost)",
      "Personal expenses: shopping, alcoholic beverages, tips",
      "Travel & medical insurance (strongly recommended — evacuation cover advised)",
      "Camera fees at certain temples",
      "Any cost from road closures, landslides or weather delays (Uttarakhand monsoon season)",
    ],
    travelTips: [
      "Most EU/EEA, UK, Swiss and Norwegian passport holders are eligible for the Indian e-Visa — apply online at least 4–7 days before travel",
      "Plug types C, D & M, 230V",
      "Rishikesh is a strictly vegetarian, alcohol-free town — vegan and Jain meal requests are easily accommodated everywhere",
      "Modest dress is appreciated at ashrams and ghats; pack proper trekking shoes and layers for the Chandrashila summit day",
    ],
    pricing: [
      { label: "Twin sharing — Premium (from Delhi)", priceEUR: 1299, priceINR: 116900 },
      { label: "Twin sharing — Standard (from Delhi)", priceEUR: 1499, priceINR: 134900 },
    ],
    featured: true,
    departures: ["Customisable — contact us"],
  },

  // ─── NORTHEAST INDIA ─────────────────────────────────────────────────
  {
    slug: "northeast-india-meghalaya",
    title: "Northeast India — Meghalaya & Living Bridges",
    subtitle: "Root bridges grown over centuries, Asia's cleanest village & a river you can see through to the bottom",
    heroImage: "/images/tours/northeast/amit-jain-FYGEA9aezAw-unsplash.jpg",
    galleryImages: [
      "/images/tours/northeast/amit-jain-FYGEA9aezAw-unsplash.jpg",
      "/images/tours/northeast/aenic-visuals-mldoyM-TppU-unsplash.jpg",
      "/images/tours/northeast/nvr-endng-anupam-EUwzrxkJAAY-unsplash.jpg",
      "/images/tours/northeast/simanta-saha-7D-7eHJ9Y70-unsplash.jpg",
      "/images/tours/northeast/unma-desai-uwMlZPLgRk8-unsplash.jpg",
      "/images/tours/northeast/hari-shrestha-E1acVnP4aC8-unsplash.jpg",
    ],
    region: "Meghalaya & Assam, Northeast India",
    durationNights: 9,
    durationDays: 10,
    route: "Delhi → Guwahati → Shillong → Cherrapunji → Nongriat → Mawlynnong → Dawki → Guwahati → Delhi",
    months: ["July", "August", "September"],
    groupSize: "Max 10 travelers",
    difficulty: "Easy",
    summary:
      "A living double-decker bridge woven by Khasi hands over 500 years. The world's cleanest village, where brooms hang at every door. A river so clear you can read the riverbed from a boat. Northeast India is India's best-kept secret — and this is the journey into it.",
    overview:
      "Most travelers to India never make it to the northeast. That's not a criticism — it's an invitation. The Seven Sisters states hold a version of India that is completely unlike anything in the north, south, east, or west: ancient tribal cultures still very much alive, forests that drip green twelve months of the year, a linguistic and culinary world the rest of India rarely encounters. This 10-day circuit moves through two of the northeast's most rewarding states — Meghalaya ('Abode of the Clouds') and a corner of Assam — and builds to what most travelers name as the single most extraordinary thing they've seen in India: the double-decker living root bridges of Nongriat, where the Khasi people have trained the roots of rubber fig trees across river gorges for over 500 years until the roots have fused and grown into natural living bridges strong enough to carry fifty people at once. Add the crystal-clear Umngot River at Dawki (where boats appear to float on glass), the waterfalls of Cherrapunji (the wettest landscape on Earth, whose falls run most powerfully in July–September), and Mawlynnong — the spotlessly maintained 'cleanest village in Asia' — and you have a journey that bears almost no resemblance to the India most Europeans picture. Deliberately small group, private vehicle, and personally hosted throughout.",
    highlights: [
      "Double-Decker Living Root Bridge, Nongriat — 500 years of Khasi bioengineering, a UNESCO tentative site",
      "Umngot River, Dawki — a river so transparent boats appear to float on air",
      "Nohkalikai Falls — the 4th highest waterfall in the world, running at full power July–September",
      "Mawlynnong — Asia's cleanest village, with sky walks and the India-Bangladesh plains below",
      "Seven Sisters Falls — seven parallel streams dropping off the Meghalayan plateau",
      "Mawsmai Limestone Caves — ancient cave formations deep inside the Cherrapunji plateau",
      "Shillong — the 'Scotland of the East', a hill station city unlike anywhere else in India",
      "Kamakhya Temple, Guwahati — one of India's most powerful and atmospheric pilgrimage sites",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → Guwahati ✈ — Gateway to the Northeast",
        description:
          "Fly to Guwahati (2 hours from Delhi) — the largest city in the northeast and your entry point into a part of India that feels completely different from the moment you land. The air is heavier, greener, wetter. Transfer to your hotel and, after a rest, evening visit to Kamakhya Temple perched on Nilachal Hill: one of the most important and atmospheric Shakti temples in India, where pilgrims from across South Asia come to pray. Return for dinner on the banks of the Brahmaputra — India's most powerful river, so wide you cannot see the far shore.",
        overnight: "Boutique hotel, Guwahati",
        highlight: "Kamakhya Temple at dusk — ancient, arresting, unlike any temple in North India",
      },
      {
        day: 2,
        title: "Guwahati → Umiam Lake → Shillong",
        description:
          "The drive from Guwahati up to Shillong (3 hours, 1,500 m gain) is among the most scenic in the northeast: the road winds through subtropical forest, past the vast blue Umiam Lake (perfect for a photo stop and a tea), and up into the Khasi Hills. Shillong — the capital of Meghalaya — is India's 'Scotland of the East': pine forests, a colonial-era centre, and a live music scene that has produced more rock musicians per capita than perhaps any other Indian city. Check in, explore the local market, and let the cooler air settle in.",
        overnight: "Boutique hotel, Shillong",
        highlight: "Umiam Lake viewpoint — the blue reservoir framed by forest hills",
      },
      {
        day: 3,
        title: "Shillong — City, falls & the Don Bosco Museum",
        description:
          "Full day in Shillong at a comfortable pace. Morning: Ward's Lake (a colonial-era ornamental lake in the centre of the city), Elephant Falls (a three-tiered waterfall 12 km from the city, surprisingly dramatic), and the Cathedral of Mary Help of Christians (striking gothic architecture in a pine forest). Afternoon: the Don Bosco Centre for Indigenous Cultures — seven floors of the most comprehensive museum of northeast India's tribal cultures, a world few outsiders understand. Evening: Shillong's Police Bazar market — local street food, handwoven Meghalayan textiles, and the particular energy of a city that does things its own way.",
        overnight: "Boutique hotel, Shillong",
        highlight: "Don Bosco Museum — the most important cultural museum in the Indian northeast",
      },
      {
        day: 4,
        title: "Shillong → Cherrapunji (Sohra) — The wettest place on Earth",
        description:
          "Drive one hour south to Cherrapunji — the plateau that holds the world record for the highest recorded annual rainfall. In July–September the landscape is beyond lush: waterfalls pour off every cliff, the air is permanently cool and misty, and the views south to the Bangladesh plains (when the clouds lift) are endless. Arrive and settle in. Afternoon walk to Thangkharang Park for the first views of the plateau edge — and the beginning of the falls that make Cherrapunji unlike anywhere else in India.",
        overnight: "Boutique resort, Cherrapunji",
        highlight: "First sight of the Meghalayan plateau edge — the world beneath the clouds",
      },
      {
        day: 5,
        title: "Cherrapunji — Waterfalls, caves & the edge of the world",
        description:
          "Full day in and around Cherrapunji's extraordinary landscape. Seven Sisters Falls — seven parallel streams of water dropping from the plateau in a single sweeping face (most powerful July–September). Nohkalikai Falls — the fourth highest waterfall in the world, a single 340-metre drop into a turquoise plunge pool that seems impossibly blue against the green of the valley. Mawsmai Caves — a narrow, cathedral-like limestone cave system that goes deep into the plateau, lit by formations of calcite that took millennia to grow. Return to the resort for dinner with the mist rolling in from the Bangladesh plains.",
        overnight: "Boutique resort, Cherrapunji",
        highlight: "Nohkalikai Falls — 340 metres into a pool the colour of glacier water",
      },
      {
        day: 6,
        title: "Trek to Nongriat — The Double-Decker Living Root Bridge",
        description:
          "The day most travelers name as the most extraordinary of their entire India trip. A 4.5 km descent (3,000+ steps) through dense subtropical forest to Nongriat village — a community accessible only on foot, where the Khasi people have spent over 500 years training the aerial roots of Indian rubber fig trees across river gorges until they fuse, interlace, and grow into natural bridges strong enough to carry dozens of people at once. The Double-Decker Root Bridge is a UNESCO-tentative World Heritage site — two bridges stacked vertically over the same river, still alive and still growing. Take a swim in the natural rock pool nearby, eat a simple lunch in the village, and climb back up in the late afternoon. Your legs will know about it tomorrow. It will be completely worth it.",
        overnight: "Boutique resort, Cherrapunji",
        highlight: "The Double-Decker Living Root Bridge — 500 years of living bioengineering",
      },
      {
        day: 7,
        title: "Cherrapunji → Mawlynnong → Dawki",
        description:
          "Drive to Mawlynnong — designated Asia's Cleanest Village and now something of a legend in the northeast: every home has a broom at the door, every path is swept, the air smells of flowers, and the community maintains the village out of shared pride rather than government mandate. Climb the bamboo sky walk above the forest for views down to the Bangladesh border plain. Then drive to Dawki on the India-Bangladesh border, where the Umngot River flows across a white sand bed so cleanly that the boats on the surface appear to float on air, with every pebble on the bottom visible from fifteen feet above. An evening boat ride as the light drops over the river.",
        overnight: "Guesthouse, Dawki / Shillong",
        highlight: "Dawki's Umngot River — the glass river where boats float on nothing",
      },
      {
        day: 8,
        title: "Dawki → Jaintia Hills → Nartiang Monoliths → Shillong",
        description:
          "Return towards Shillong via the Jaintia Hills — a different Meghalayan culture from the Khasi, with its own language and traditions. Stop at Nartiang, where the largest collection of pre-historic monoliths in the northeast stand in a village field: enormous stones hauled and erected by Jaintia kings as memorials, their true origins and meaning still debated. Arrive back in Shillong for an evening meal and a final walk through the market — last chance for Meghalayan textiles, local honey, and the particular flavour of a hill station city at night.",
        overnight: "Boutique hotel, Shillong",
        highlight: "Nartiang monoliths — the northeast's ancient standing stones",
      },
      {
        day: 9,
        title: "Shillong → Tea Estate → Guwahati",
        description:
          "Morning drive down from the Meghalayan plateau back towards the Assam plains, stopping at a working tea estate in the Assam foothills for a guided walk through the gardens, a tasting session with the estate manager, and a proper cup of Assam tea brewed the way it's meant to be — strong, reddish-gold, and nothing like what comes out of a supermarket box in Europe. Continue to Guwahati for a final evening by the Brahmaputra.",
        overnight: "Boutique hotel, Guwahati",
        highlight: "Assam tea estate — the original source of the world's most consumed beverage",
      },
      {
        day: 10,
        title: "Guwahati → Delhi ✈ — Departure",
        description:
          "Morning flight back to Delhi (2 hours). You leave the northeast with images that don't fit the India you thought you knew: a bridge made of roots, a glass river, a village where everyone sweeps their own path. Our team sees you off at Guwahati airport.",
        overnight: "—",
        highlight: "Last look at the Brahmaputra — India's other great river",
      },
    ],
    inclusions: [
      "9 nights accommodation: 1× boutique hotel Guwahati + 2× boutique hotel Shillong + 2× boutique resort Cherrapunji + 1× guesthouse Dawki + 1× boutique hotel Shillong + 1× boutique hotel Guwahati (twin-sharing)",
      "Private vehicle for all sightseeing and transfers throughout",
      "Professional English-speaking guide with expertise in Meghalayan culture and ecology",
      "Nongriat Living Root Bridge trek with local Khasi guide",
      "Dawki river boat ride on the Umngot",
      "Assam tea estate entry and guided tasting session",
      "9 breakfasts + 8 dinners",
      "All entry fees for parks, caves, and sky walk (Mawlynnong)",
      "All tolls, parking and driver allowances",
      "24/7 on-trip support and GoTrustelle host throughout",
    ],
    exclusions: [
      "Return flights Delhi ↔ Guwahati (approx. €60–100 per sector; we assist with booking on request)",
      "Lunches (we recommend local Meghalayan restaurants — budget ₹300–500 per meal)",
      "Personal expenses: shopping, beverages, tips",
      "Travel & medical insurance (recommended)",
      "Any optional activities beyond those listed (Kaziranga safari available as an add-on for Oct–Mar travelers)",
      "Any costs from weather delays or road closures (monsoon travel may involve minor reroutes)",
    ],
    travelTips: [
      "Most EU/EEA, UK, Swiss and Norwegian passport holders are eligible for the Indian e-Visa — apply online at least 4–7 days before travel; no separate permit is needed for EU travelers, we handle all Inner Line/Protected Area formalities",
      "Plug types C, D & M, 230V",
      "Vegetarian and vegan options are available at every stop, though local menus lean fish/meat-forward — we flag vegetarian-friendly cafés and resorts in advance",
      "Pack proper rain gear: Meghalaya is among the wettest places on Earth during the July–September season, and the root bridge trek involves wet, slippery steps",
    ],
    pricing: [
      { label: "Twin sharing (from Guwahati)", priceEUR: 1899, priceINR: 170900 },
      { label: "Twin sharing (from Delhi)", priceEUR: 2099, priceINR: 188900 },
    ],
    featured: false,
    departures: ["Customisable — contact us"],
  },

  // ─── BIR ITINERARY ───────────────────────────────────────────────────
  {
    slug: "bir-mountains-mindfulness",
    title: "Bir · Triund · Dharamkot",
    subtitle: "Mindfulness & Memories in the Hills of Himachal",
    heroImage: "/images/tours/bir-triund/tejashvi-verma-cyWRGbQx3pE-unsplash.jpg",
    galleryImages: [
      "/images/tours/bir-triund/tejashvi-verma-cyWRGbQx3pE-unsplash.jpg",
      "/images/tours/bir-triund/aana-singh-sQInw81bdYQ-unsplash.jpg",
      "/images/tours/bir-triund/arun-kashyap-E7C077ex-Zk-unsplash.jpg",
      "/images/tours/bir-triund/mountain-mysteries-0MQTJh7wecs-unsplash.jpg",
      "/images/tours/bir-triund/rishabh-pandoh-m1PFxGQ-5x0-unsplash.jpg",
    ],
    region: "Himachal Pradesh, North India",
    durationNights: 9,
    durationDays: 10,
    route: "Delhi → Bir → Waterfall → Monasteries → Barot → Hanumangarh → Sherabling → Palampur → Andretta → Machhiyal → Dharamkot → Triund → Delhi",
    months: ["June"],
    groupSize: "Small Groups",
    difficulty: "Moderate",
    summary:
      "Let the mountains slow you down. Ten days of waterfalls, ancient monasteries, paragliding over the Kangra Valley, Palampur's tea gardens, Andretta pottery, and an overnight on the Triund ridge — all from the sleepy, beautiful base of Bir.",
    overview:
      "Bir is Himachal Pradesh's best-kept secret — a paragliding capital, a Tibetan monastery town, and a gateway to landscapes that most travelers never find. This 10-day circuit is built around slowness, variety, and real experience: you'll watch glaciers from the Barot valley, try your hand at pottery in the craft village of Andretta, walk through rolling Palampur tea estates, and spend a night at a trek camp on the Triund ridge with the Dhauladhars all around you. The group is small, the pace is flexible, and the food is honest. Paragliding in Bir with A-rated pilots is included — and if the weather gods agree, the flight over the green Kangra Valley will be the picture you keep on your phone for years.",
    highlights: [
      "Paragliding with A-rated pilots over the Kangra Valley from Bir-Billing",
      "Overnight trek camp on the Triund ridge",
      "Pottery experience at Andretta — Himachal's famous craft village",
      "Palampur tea estates — a landscape of quiet, rolling green",
      "Chauntra Monastery via Machhiyal",
      "Monasteries of Sherabling and Bir's Tibetan colony",
      "Waterfall day and Bir-Billing-Rajgundha circuit",
      "Barot valley and Hanumangarh exploration",
    ],
    itinerary: [
      {
        day: 0,
        title: "Delhi → Bir (overnight journey)",
        description:
          "Meet your group in Delhi in the evening and board a comfortable overnight coach to Bir. Wake up in the mountains.",
        overnight: "On board (travel included)",
      },
      {
        day: 1,
        title: "Arrival in Bir — Check-in & Café Lunch + Paragliding",
        description:
          "Arrive in Bir, check into your accommodation and ease into the pace of this quiet mountain town. Lunch at one of Bir's beloved cafés. In the evening, tandem paragliding with A-rated pilots — soaring over the Kangra Valley with the Dhauladhars as your backdrop.",
        overnight: "Bir",
        highlight: "Paragliding with A-rated pilots — one of Asia's best flying sites",
      },
      {
        day: 2,
        title: "Waterfall Morning + Lunch & Rest + Monasteries",
        description:
          "Morning trek to a local waterfall hidden in the forest above Bir. Return for a relaxed lunch and afternoon rest. As the day cools, visit the ancient monasteries of Bir — the Tibetan colony's gompa complex and Sherabling Monastery are two of the most serene in Himachal.",
        overnight: "Bir",
        highlight: "The monasteries of Bir's Tibetan colony at golden hour",
      },
      {
        day: 3,
        title: "Bir → Billing → Rajgundha → Barot",
        description:
          "An adventure day: drive up to Billing (the paragliding launch site), then continue on foot or by jeep through the Rajgundha meadows — a high pastoral valley known for its alpine beauty and shepherd communities. Descend to the Barot valley by evening.",
        overnight: "Barot (stay included)",
        highlight: "Rajgundha meadows — a high Himalayan pastoral that few visitors ever see",
      },
      {
        day: 4,
        title: "Barot → Hanumangarh → Bir",
        description:
          "Morning at the Uhl River dam and forest trails around Barot. Drive to Hanumangarh — a peaceful Himachali village with mountain views. Return to Bir in the afternoon.",
        overnight: "Bir (stay included)",
        highlight: "Barot's river valley and forest trails",
      },
      {
        day: 5,
        title: "Mata Maheshwari Trek Camp Stay",
        description:
          "A full trek day: hike up to the Mata Maheshwari trek camp through oak and rhododendron forest. Set up at camp and spend the evening with the mountains.",
        overnight: "Sherabling / Trek Camp (stay included)",
        highlight: "Trek camp in the forest above Bir",
      },
      {
        day: 6,
        title: "Palampur Tea Estates + Andretta Pottery & Baijnath + Return to Bir",
        description:
          "Leave for Palampur and walk through its rolling tea gardens — one of the prettiest landscapes in Himachal. Continue to Andretta, Himachal's renowned craft village, for a hands-on pottery experience. Stop at the 9th-century Baijnath Shiva temple before returning to Bir for dinner at a café.",
        overnight: "Bir (stay included)",
        highlight: "Hands-on pottery at Andretta + Palampur's tea-green valleys",
      },
      {
        day: 7,
        title: "Machhiyal + Chauntra Monastery + Kangri Dham",
        description:
          "Day trip to Machhiyal — a local spot of beauty and quiet significance — followed by the serene Chauntra Monastery. End the day at Kangri Dham for a peaceful Himachali evening.",
        overnight: "Kangri Dham (stay included)",
        highlight: "Chauntra Monastery — hidden and hushed",
      },
      {
        day: 8,
        title: "Dharamkot Market & Food",
        description:
          "Drive to Dharamkot — the hillside village above McLeod Ganj beloved for its cafés, bookshops, and unhurried pace. Explore the market, try local and international food, and prepare for tomorrow's trek.",
        overnight: "Dharamkot (stay included)",
        highlight: "Dharamkot's café culture and mountain views",
      },
      {
        day: 9,
        title: "Triund Trek + Trek Camp Stay",
        description:
          "The classic Triund Trek: a 9 km trail through forest and open meadow to the grassy Triund ridge at 2,875 m. The Dhauladhar range rises directly above; the Kangra Valley spreads below. Spend the night at a proper mountain camp with bonfire and stars.",
        overnight: "Trek Camp at Triund",
        highlight: "Triund ridge at sunset — the Dhauladhars turning gold overhead",
      },
      {
        day: 10,
        title: "Triund → Descent → Delhi (overnight return)",
        description:
          "Wake early for sunrise on the ridge. Descend back to Dharamkot by midday. Board an overnight coach to Delhi — arriving home with mountains still in your mind.",
        overnight: "On board (travel included)",
        highlight: "Triund sunrise before the journey home",
      },
    ],
    inclusions: [
      "Delhi to Bir and return travel by AC Volvo / Tempo Traveller",
      "9 nights stay on double/triple sharing basis, including trek camp stays",
      "Breakfast and dinner included as per the itinerary plan",
      "Paragliding in Bir with A-rated pilots",
      "All local transfers and sightseeing as per itinerary by private vehicle",
      "Pottery experience at Andretta",
      "Trek experiences with camp stays: Mata Maheshwari Trek and Triund Trek",
      "All permits and entry fees included where required",
      "Toll, parking, driver allowance and fuel",
    ],
    exclusions: [
      "Lunch on all days",
      "Personal expenses such as shopping, tips, laundry, snacks, etc.",
      "Adventure activities other than paragliding",
      "Any entry tickets / camera fees not listed above",
      "Travel / medical insurance",
      "Anything not mentioned in inclusions",
    ],
    travelTips: [
      "Most EU/EEA, UK, Swiss and Norwegian passport holders are eligible for the Indian e-Visa — apply online at least 4–7 days before travel",
      "Plug types C, D & M, 230V",
      "Vegetarian and vegan options are widely available across Bir's café culture — let us know your dietary needs in advance",
      "Pack layers and sturdy trekking shoes — mountain evenings stay cool even in June, and the Triund trek needs proper footwear",
    ],
    pricing: [
      { label: "Per person (small group)", priceEUR: 1299, priceINR: 116900 },
    ],
    featured: true,
    departures: ["Customisable — contact us"],
  },

  // ─── VALLEY OF FLOWERS ───────────────────────────────────────────────
  {
    slug: "valley-of-flowers-trek",
    title: "Valley of Flowers Trek",
    subtitle: "A UNESCO meadow in full bloom & the glacial lake of Hemkund Sahib",
    heroImage: "/images/tours/valley-of-flowers/flowersValley1.jpg",
    galleryImages: [
      "/images/tours/valley-of-flowers/flowersValley1.jpg",
      "/images/tours/valley-of-flowers/flowersValley2.jpg",
      "/images/tours/valley-of-flowers/flowersValley3.jpg",
      "/images/tours/valley-of-flowers/flowersValley4.jpg",
    ],
    region: "Chamoli, Uttarakhand, North India",
    durationNights: 6,
    durationDays: 7,
    route: "Delhi → Haridwar → Govindghat → Ghangaria → Valley of Flowers → Hemkund Sahib → Ghangaria → Govindghat → Delhi",
    months: ["July", "August", "September"],
    groupSize: "Max 10 travelers",
    difficulty: "Moderate",
    summary:
      "A high-Himalayan meadow that explodes into hundreds of wildflower species every monsoon, reached on foot through pine and birch forest, with a glacial Sikh shrine at 4,329 m as the trek's spiritual high point. Seven days for a UNESCO World Heritage Site almost no one outside India has heard of.",
    overview:
      "The Valley of Flowers is a 87.5 km² alpine valley in the Western Himalaya that the Forest Research Institute only properly documented in the 1930s, and UNESCO inscribed as a World Heritage Site in 2005 — yet it remains one of India's least-visited natural wonders, open to trekkers for barely four months a year. From late July through August, the valley floor turns into a continuous carpet of wildflowers: blue poppies, cobra lilies, brahma kamal, and over 300 other species, set against glaciers and 6,000 m peaks. This 7-day journey takes you from Delhi up through Haridwar and Joshimath to Govindghat, then on foot — there is no other way in — through Ghangaria to the valley itself, with a side trek to Hemkund Sahib, a glacial lake at 4,329 m ringed by seven mountain peaks and one of Sikhism's most important high-altitude shrines. We move at a comfortable pace, acclimatize properly, and stay in clean, simple guesthouses throughout. This is a trek for travelers who want real wilderness without needing technical climbing experience.",
    highlights: [
      "The Valley of Flowers in full monsoon bloom — hundreds of wildflower species across a glacial valley floor",
      "Hemkund Sahib (4,329 m) — a glacial lake and Sikh shrine ringed by seven Himalayan peaks",
      "The trek to Ghangaria — pine and birch forest, waterfalls, and the Pushpawati River alongside the trail",
      "Govindghat & the Alaknanda-Bhyundar confluence — the gateway to the valley",
      "A UNESCO World Heritage Site most travelers to India never even hear about",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → Haridwar → Joshimath (overnight drive)",
        description:
          "Early morning departure from Delhi by private vehicle to Haridwar, then onward through Rudraprayag along the Alaknanda River to Joshimath (approximately 10–11 hours total, with stops). The drive itself is part of the experience — the plains give way to foothills, then to proper Himalayan gorge scenery as the road climbs.",
        overnight: "Guesthouse, Joshimath",
        highlight: "The Alaknanda gorge road — your first real sight of the high Himalaya",
      },
      {
        day: 2,
        title: "Joshimath → Govindghat → Ghangaria (trek begins)",
        description:
          "Short drive to Govindghat (1,828 m), where the trek begins. A 9 km trail climbs steadily alongside the Pushpawati River through forest and past waterfalls to Ghangaria (3,049 m), the last settlement before both the Valley of Flowers and Hemkund Sahib. Mules and porters are available for those who want them; our guide sets a comfortable, steady pace.",
        overnight: "Guesthouse, Ghangaria",
        highlight: "The forest trail to Ghangaria — waterfalls and the first thin mountain air",
      },
      {
        day: 3,
        title: "Ghangaria → Valley of Flowers → Ghangaria",
        description:
          "A full day inside the valley itself: a 4 km trail from Ghangaria leads into the Valley of Flowers, where the path opens onto a wide glacial valley floor carpeted in wildflowers, framed by the Rataban and Nilgiri Parbat peaks. There is no settlement inside the valley — only the trail, the flowers, and the glaciers above. Walk as far as your legs and the weather allow, then return to Ghangaria by evening.",
        overnight: "Guesthouse, Ghangaria",
        highlight: "The valley floor in full bloom — the reason this trek exists",
      },
      {
        day: 4,
        title: "Ghangaria → Hemkund Sahib → Ghangaria",
        description:
          "The trek's hardest and most rewarding day: a steep 6 km climb from Ghangaria to Hemkund Sahib (4,329 m), a glacial lake held sacred in both Sikh and Hindu tradition, ringed by seven snow-streaked peaks. The gurdwara on its shore sits at one of the highest inhabited points reachable on foot in the Indian Himalaya. Pause at the lake, take in the silence, then descend back to Ghangaria.",
        overnight: "Guesthouse, Ghangaria",
        highlight: "Hemkund Sahib — a glacial lake at 4,329 m, ringed by seven peaks",
      },
      {
        day: 5,
        title: "Ghangaria → Govindghat → Joshimath",
        description:
          "Descend from Ghangaria back to Govindghat (9 km, mostly downhill) and drive to Joshimath. An easier day physically, with time to process the previous two days inside the valley and at the lake. Optional visit to Joshimath's ropeway or the old town if energy allows.",
        overnight: "Guesthouse, Joshimath",
        highlight: "The descent — looking back at the valley from below",
      },
      {
        day: 6,
        title: "Joshimath → Rishikesh (overnight drive)",
        description:
          "Long drive back down through the Alaknanda valley to Rishikesh (approximately 9–10 hours). Stop along the way at scenic points on the river. Arrive in Rishikesh in the evening for a proper hot shower and a relaxed dinner by the Ganges — a soft landing after five days at altitude.",
        overnight: "Riverside hotel, Rishikesh",
        highlight: "Back to the Ganges — the trip's gentle final note",
      },
      {
        day: 7,
        title: "Rishikesh → Delhi — Departure",
        description:
          "Final drive back to Delhi (approximately 6 hours) or an early train from Haridwar on request. Our team confirms your onward connection. You leave with a trek most travelers to India never attempt — and a valley that's hard to describe accurately to anyone who wasn't there.",
        overnight: "—",
        highlight: "Last look at the foothills before the plains take over again",
      },
    ],
    inclusions: [
      "6 nights accommodation: 2× guesthouse Joshimath + 2× guesthouse Ghangaria + 1× guesthouse Joshimath + 1× riverside hotel Rishikesh (twin-sharing)",
      "Private AC vehicle for all road transfers throughout",
      "Experienced trekking guide for the Ghangaria–Valley of Flowers–Hemkund Sahib sector",
      "Valley of Flowers National Park entry permits and fees",
      "Porter/mule arrangement available on request (extra cost)",
      "6 breakfasts + 6 dinners",
      "First-aid kit and basic altitude-sickness medication on the trek",
      "All tolls, parking and driver allowances",
      "24/7 on-trip support — GoTrustelle host available throughout",
    ],
    exclusions: [
      "International or domestic flights to/from Delhi",
      "Lunches during the trek (budget ₹300–500 per meal)",
      "Personal porter or mule hire (available locally, approx. ₹1,500–2,500/day)",
      "Personal trekking gear: trekking poles, rain gear, proper boots (we provide a packing list)",
      "Personal expenses: shopping, tips, beverages",
      "Travel & medical insurance with trekking cover (strongly recommended)",
      "5% GST on total package value",
    ],
    travelTips: [
      "Most EU/EEA, UK, Swiss and Norwegian passport holders are eligible for the Indian e-Visa — apply online at least 4–7 days before travel",
      "Plug types C, D & M, 230V — charging is limited in Ghangaria, bring a power bank",
      "Vegetarian meals are the norm in Ghangaria and Joshimath's guesthouses — vegan and Jain requests are easily accommodated",
      "Pack proper waterproof trekking shoes and rain gear — this trek runs during the monsoon, and trails are often wet and muddy",
      "Travel insurance with trekking and high-altitude evacuation cover is strongly recommended for the Hemkund Sahib day",
    ],
    pricing: [
      { label: "Twin sharing (from Delhi)", priceEUR: 1199, priceINR: 107900 },
      { label: "Twin sharing — Premium (from Delhi)", priceEUR: 1499, priceINR: 134900 },
    ],
    featured: true,
    departures: ["August 15 – 21, 2026 (fixed group departure)", "Customisable — contact us"],
  },

  // ─── KERALA ESCAPE ───────────────────────────────────────────────────
  {
    slug: "kerala-backwaters-escape",
    title: "Kerala Escape",
    subtitle: "Tea hills, spice gardens, a private houseboat & the backwaters of God's Own Country",
    heroImage: "/images/tours/kerala/alleppey-houseboat.jpg",
    galleryImages: [
      "/images/tours/kerala/alleppey-houseboat.jpg",
      "/images/tours/kerala/munnar-tea-gardens.jpg",
      "/images/tours/kerala/kochi-fishing-nets.jpg",
      "/images/tours/kerala/kumarakom-backwaters.jpg",
    ],
    region: "Kochi, Munnar, Thekkady & Alleppey, Kerala, South India",
    durationNights: 8,
    durationDays: 9,
    route: "Kochi → Munnar → Thekkady → Alleppey (houseboat) → Kumarakom → Kochi",
    months: ["November", "December", "January", "February"],
    groupSize: "Max 10 travelers",
    difficulty: "Easy",
    summary:
      "Rolling tea estates in the clouds, a spice-scented walk through a working plantation, a night drifting through palm-lined backwaters on a private houseboat, and a colonial port city where Chinese fishing nets still work the harbour at dusk. Nine days through Kerala at its most complete.",
    overview:
      "Kerala calls itself 'God's Own Country', and after a week here most travelers stop arguing. This 9-day circuit moves from Kochi's Fort Kochi quarter — Portuguese churches, Chinese fishing nets, Jewish synagogues, all within a few square kilometres — up into the cool tea hills of Munnar, across to the spice gardens and forested hills of Thekkady on the edge of Periyar Tiger Reserve, and down onto the water itself: a private houseboat through the Alleppey backwaters, followed by a quieter lakeside stay at Kumarakom. Kerala's pace is slower than the north, the food is extraordinary (coconut, curry leaf, fresh-caught seafood, properly made filter coffee), and the landscape changes completely every two days. We travel by private air-conditioned vehicle throughout, choose boutique and heritage properties, and keep the group small.",
    highlights: [
      "A private houseboat overnight on the Alleppey backwaters — palm groves, paddy fields and village life from the water",
      "Munnar's tea estates — rolling green hills, a working tea factory, and views across the Western Ghats",
      "Periyar Tiger Reserve, Thekkady — a spice plantation walk and a boat ride on Periyar Lake",
      "Fort Kochi — Chinese fishing nets, Jewish Town, Portuguese and Dutch colonial architecture in one walkable quarter",
      "Kumarakom — a quieter lakeside stay among mangroves and backwater channels",
      "A traditional Kathakali dance performance, Kochi",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kochi — Fort Kochi heritage walk",
        description:
          "Arrive in Kochi and transfer to your heritage hotel in Fort Kochi. In the late afternoon, a walking tour of the old quarter: the iconic Chinese fishing nets along the waterfront, St. Francis Church (one of the oldest European churches in India), the Dutch Palace, and Jew Town's spice warehouses and antique shops. Evening Kathakali performance — Kerala's centuries-old classical dance-drama, with elaborate makeup and costume.",
        overnight: "Heritage hotel, Fort Kochi",
        highlight: "Chinese fishing nets at sunset — Kochi's most iconic image, in person",
      },
      {
        day: 2,
        title: "Kochi full day — Markets, spices & the harbour",
        description:
          "A relaxed full day in Kochi: the spice markets of Mattancherry, a visit to a working antique and textile warehouse, and time to wander Fort Kochi's quiet colonial lanes at your own pace. Optional afternoon boat ride around the harbour to watch the working fishing boats and container ships pass.",
        overnight: "Heritage hotel, Fort Kochi",
        highlight: "Mattancherry spice markets — the smell of cardamom and pepper sacks stacked to the ceiling",
      },
      {
        day: 3,
        title: "Kochi → Munnar — Into the tea hills",
        description:
          "Drive up into the Western Ghats to Munnar (approximately 4 hours), the landscape changing from coastal plain to tea-covered hillside as you climb. Stop en route at the Cheeyappara and Valara waterfalls. Arrive in Munnar by afternoon and settle into your hillside resort, with views across rolling tea estates.",
        overnight: "Hillside resort, Munnar",
        highlight: "First sight of Munnar's tea hills — green in every direction",
      },
      {
        day: 4,
        title: "Munnar full day — Tea factory, Eravikulam & viewpoints",
        description:
          "Visit a working tea factory and museum to see how the leaf becomes the cup, then drive to Eravikulam National Park, home to the endangered Nilgiri tahr and some of the best high-altitude views in the Western Ghats. Afternoon at Top Station and Mattupetty Dam for sweeping panoramas across the tea country.",
        overnight: "Hillside resort, Munnar",
        highlight: "Eravikulam National Park — tahr, grasslands and views for miles",
      },
      {
        day: 5,
        title: "Munnar → Thekkady — Spice gardens & Periyar",
        description:
          "Drive to Thekkady (approximately 3.5 hours) on the edge of Periyar Tiger Reserve. En route, walk through a working spice plantation — cardamom, pepper, cinnamon and cloves growing together under a forest canopy, with a guide who explains how each is grown and harvested. In the late afternoon, a boat ride on Periyar Lake for a chance to spot wild elephants, bison and birdlife along the shore.",
        overnight: "Boutique resort, Thekkady",
        highlight: "Periyar Lake boat ride — wild elephants on the shoreline, if you're lucky",
      },
      {
        day: 6,
        title: "Thekkady → Alleppey — Board your private houseboat",
        description:
          "Drive to Alleppey (approximately 4 hours) and board your private traditional kettuvallam (rice barge) houseboat in the early afternoon. Cruise slowly through the backwaters — palm-lined canals, paddy fields below sea level, village life unfolding along the banks — with all meals cooked fresh on board by your private crew. Moor for the night on a quiet stretch of water.",
        overnight: "Private houseboat, Alleppey backwaters",
        highlight: "Sunset on the backwaters from your houseboat deck",
      },
      {
        day: 7,
        title: "Alleppey backwaters → Kumarakom",
        description:
          "Wake to the sound of water and birdlife. A final slow morning cruise before disembarking at Kumarakom, a quieter backwater town on the shore of Vembanad Lake — Kerala's largest lake — known for its bird sanctuary and mangrove-lined channels. Check into a lakeside resort for a more restful pace after the houseboat.",
        overnight: "Lakeside resort, Kumarakom",
        highlight: "Disembarking into Kumarakom's stillness after a night on the water",
      },
      {
        day: 8,
        title: "Kumarakom — Bird sanctuary & leisure day",
        description:
          "A slow day: an optional visit to the Kumarakom Bird Sanctuary, a paddle through the smaller mangrove channels by canoe, or simply time at the resort by the lake. In the afternoon, drive back to Kochi (approximately 1.5 hours) for your final night.",
        overnight: "Heritage hotel, Fort Kochi",
        highlight: "Kumarakom's mangrove channels by canoe — the backwaters at their quietest",
      },
      {
        day: 9,
        title: "Kochi — Departure",
        description:
          "A final relaxed morning — one more walk along the Fort Kochi waterfront, a last filter coffee, before transfer to Kochi airport for your departure. Our team confirms your onward connection and sees you off.",
        overnight: "—",
        highlight: "Last morning by the Chinese fishing nets before you go",
      },
    ],
    inclusions: [
      "8 nights accommodation: 2× heritage hotel Fort Kochi + 2× hillside resort Munnar + 1× boutique resort Thekkady + 1× private houseboat Alleppey + 1× lakeside resort Kumarakom + 1× heritage hotel Fort Kochi (twin-sharing)",
      "Private AC vehicle for all sightseeing and inter-city transfers throughout",
      "Private houseboat for one full day and overnight on the Alleppey backwaters, all meals on board included",
      "Professional licensed guide in Kochi, Munnar and Thekkady",
      "Spice plantation walk, Thekkady",
      "Periyar Lake boat ride",
      "Kathakali dance performance, Kochi",
      "8 breakfasts + 7 dinners (including all meals aboard the houseboat)",
      "All monument, park and sanctuary entry fees listed in the itinerary",
      "All tolls, parking and driver allowances",
      "24/7 on-trip support — GoTrustelle host available throughout",
    ],
    exclusions: [
      "International or domestic flights to/from Kochi",
      "Lunches outside the houseboat day (budget ₹400–700 per meal)",
      "Personal expenses: shopping, tips, beverages",
      "Optional activities: Ayurvedic spa treatments, additional canoe trips",
      "Travel & medical insurance (strongly recommended)",
      "5% GST on total package value",
    ],
    travelTips: [
      "Most EU/EEA, UK, Swiss and Norwegian passport holders are eligible for the Indian e-Visa — apply online at least 4–7 days before travel",
      "Plug types C, D & M, 230V",
      "Kerala cuisine is naturally rich in vegetarian, vegan and seafood options — let us know dietary needs in advance, especially for the houseboat menu",
      "Pack light cotton clothing — Kerala is warm and humid year-round, even in the Dec–Feb 'cool' season",
      "Mosquito repellent is worth packing for the backwaters and Periyar evenings",
    ],
    pricing: [
      { label: "Twin sharing — Standard (from Kochi)", priceEUR: 1699, priceINR: 152900 },
      { label: "Twin sharing — Premium (from Kochi)", priceEUR: 2099, priceINR: 188900 },
    ],
    featured: true,
    departures: ["December 5 – 13, 2026 (fixed group departure)", "Customisable — contact us"],
  },

  // ─── CHRISTMAS & NEW YEAR RAJASTHAN SPECIAL ──────────────────────────
  {
    slug: "christmas-new-year-rajasthan-special",
    title: "Christmas & New Year Rajasthan Special",
    subtitle: "Jaipur · Pushkar · Udaipur — ring in the New Year on Lake Pichola",
    heroImage: "/images/tours/rajasthan/udaipur.jpg",
    galleryImages: [
      "/images/tours/rajasthan/udaipur.jpg",
      "/images/tours/rajasthan/jaipur.jpg",
      "/images/tours/rajasthan/Pushkar.jpg",
    ],
    region: "Jaipur, Pushkar & Udaipur, Rajasthan, North India",
    durationNights: 8,
    durationDays: 9,
    route: "Delhi → Jaipur → Pushkar → Udaipur → Delhi",
    months: ["December", "January"],
    groupSize: "Max 10 travelers",
    difficulty: "Easy",
    summary:
      "A festive, unhurried edition of our Rajasthan circuit, timed to close out the year on a rooftop over Lake Pichola as fireworks reflect off the water. Nine days of palaces, a holy lake town, and a New Year's Eve most travelers talk about for years.",
    overview:
      "This is our once-a-year special departure: a Rajasthan circuit built specifically around spending New Year's Eve in Udaipur, the most romantic of all Rajasthan's cities. We move at a gentler pace than our standard Rajasthan circuit, with extra time built in at each stop — Jaipur's Pink City, the holy lake town of Pushkar, and three full nights in Udaipur, where the City Palace and Lake Palace Hotel glow against the water and the whole city seems to lean toward the lake at dusk. The trip is timed so that December 31st is spent entirely in Udaipur: a relaxed day by the lake, then a festive rooftop dinner with live Rajasthani music as midnight approaches and fireworks reflect off Lake Pichola. It's a small-group, personally hosted way to spend the turn of the year somewhere genuinely beautiful, without the crowds of Goa or the cold of home.",
    highlights: [
      "New Year's Eve rooftop dinner over Lake Pichola, with fireworks reflected on the water",
      "Three full nights in Udaipur — enough time to actually settle into the City of Lakes",
      "Camel ride into the Pushkar dunes at sunset",
      "Amber Fort & the City Palace, Jaipur — Rajput grandeur to open the trip",
      "Lake Pichola boat ride past the Lake Palace Hotel and Jag Mandir island",
      "Festive seasonal touches throughout — heritage hotels decorated for the season, special dinners",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → Jaipur — Arrival & festive welcome dinner",
        description:
          "Drive or train to Jaipur (approx. 4.5–5 hours) and check into your heritage haveli hotel, decorated for the season. A festive welcome dinner in the courtyard sets the tone for the trip ahead — warm, unhurried, and a long way from a typical New Year's package tour.",
        overnight: "Heritage haveli hotel, Jaipur",
        highlight: "Festive welcome dinner in a candle-lit haveli courtyard",
      },
      {
        day: 2,
        title: "Jaipur full day — Amber Fort, City Palace & Hawa Mahal",
        description:
          "Morning at Amber Fort, the Rajput palace-fortress above Maota Lake. After lunch, the City Palace — still partly home to Jaipur's royal family — and the Hawa Mahal. End the day at Jantar Mantar before an evening stroll through Johari Bazaar.",
        overnight: "Heritage haveli hotel, Jaipur",
        highlight: "Amber Fort at morning light",
      },
      {
        day: 3,
        title: "Jaipur → Pushkar — Camel ride at sunset",
        description:
          "Drive to Pushkar (approx. 3 hours), a holy lake town built around 52 bathing ghats. Visit the Brahma Temple, walk the ghats at dusk, and take a short camel ride into the dunes outside town as the sun drops over the Aravalli hills.",
        overnight: "Heritage guesthouse, Pushkar",
        highlight: "Sunset camel ride over the Pushkar dunes",
      },
      {
        day: 4,
        title: "Pushkar → Udaipur — Arrival in the City of Lakes",
        description:
          "Drive to Udaipur (approximately 6–6.5 hours), arriving by evening. Check into your lakeside heritage hotel for the next three nights and watch the City Palace catch its first evening light from your terrace.",
        overnight: "Lakeside heritage hotel, Udaipur",
        highlight: "First view of Lake Pichola lit up at night",
      },
      {
        day: 5,
        title: "Udaipur full day — City Palace, Jagdish Temple & Lake Pichola",
        description:
          "Morning at the City Palace complex, built over four centuries on the eastern shore of Lake Pichola. Visit Jagdish Temple, then an afternoon boat ride past the Lake Palace Hotel and Jag Mandir island as the light turns gold.",
        overnight: "Lakeside heritage hotel, Udaipur",
        highlight: "Boat ride on Lake Pichola at golden hour",
      },
      {
        day: 6,
        title: "Udaipur — New Year's Eve",
        description:
          "A deliberately slow day: sleep in, wander Saheliyon Ki Bari's fountains and lotus pools, browse the old city's miniature painting studios. In the evening, a festive New Year's Eve dinner on a rooftop overlooking Lake Pichola — live Rajasthani folk music, a multi-course celebration menu, and a clear view of the fireworks over the water as midnight arrives.",
        overnight: "Lakeside heritage hotel, Udaipur",
        highlight: "Midnight fireworks over Lake Pichola from your rooftop table",
      },
      {
        day: 7,
        title: "Udaipur — New Year's Day, at leisure",
        description:
          "A slow, deliberately unstructured New Year's Day. Late breakfast, a walk through the quiet old-city lanes, optional boat ride or simply time by the lake. Evening at leisure — many travelers choose a quiet dinner reflecting on the year ahead.",
        overnight: "Lakeside heritage hotel, Udaipur",
        highlight: "A proper, unhurried New Year's Day by the lake",
      },
      {
        day: 8,
        title: "Udaipur → Delhi",
        description:
          "Morning flight from Udaipur to Delhi (approximately 1.5 hours). Check into your Delhi hotel for the final night, with a final group dinner to close out the trip together.",
        overnight: "Hotel, Delhi",
        highlight: "Final group dinner in Delhi",
      },
      {
        day: 9,
        title: "Delhi — Departure",
        description:
          "Transfer to Delhi airport for your departure flight. Our team confirms your onward connection and sees you off — carrying the start of a new year, and the memory of fireworks over a lake in Rajasthan.",
        overnight: "—",
        highlight: "One last look at Delhi before you fly home",
      },
    ],
    inclusions: [
      "8 nights accommodation: 1× heritage haveli hotel Jaipur + 1× heritage guesthouse Pushkar + 3× lakeside heritage hotel Udaipur + 1× hotel Delhi (twin-sharing)",
      "Udaipur–Delhi flight",
      "Private AC vehicle for all sightseeing and inter-city transfers throughout",
      "Professional licensed guide in each city",
      "Camel ride at sunset, Pushkar",
      "Lake Pichola boat ride, Udaipur",
      "New Year's Eve festive rooftop dinner with live music, Udaipur",
      "Final group dinner, Delhi",
      "8 breakfasts + 8 dinners",
      "All monument and fort entry fees listed in the itinerary",
      "All tolls, parking and driver allowances",
      "24/7 on-trip support — GoTrustelle host available throughout",
    ],
    exclusions: [
      "International or domestic flights to/from Delhi",
      "Lunches during the tour (budget ₹500–800 per meal)",
      "Personal expenses: shopping, tips, beverages",
      "Optional activities: hot-air ballooning, additional spa treatments",
      "Travel & medical insurance (strongly recommended)",
      "5% GST on total package value",
    ],
    travelTips: [
      "Most EU/EEA, UK, Swiss and Norwegian passport holders are eligible for the Indian e-Visa — apply online at least 4–7 days before travel",
      "Plug types C, D & M, 230V — bring a universal travel adapter",
      "Pushkar is a strictly vegetarian, alcohol-free holy town — meals there respect this fully; elsewhere on the route vegetarian, vegan and Jain meals are easily arranged",
      "Rajasthan nights in late December can drop close to freezing — pack a proper warm layer for evenings, including New Year's Eve",
      "This is a fixed-date group departure with limited seats — book well ahead of the December holiday season",
    ],
    pricing: [
      { label: "Twin sharing — Standard (from Delhi)", priceEUR: 1899, priceINR: 170900 },
      { label: "Twin sharing — Premium (from Delhi)", priceEUR: 2299, priceINR: 206900 },
    ],
    featured: true,
    departures: ["December 26, 2026 – January 3, 2027 (fixed group departure)"],
  },


];

export function getJourneyBySlug(slug: string): Journey | undefined {
  return journeys.find((t) => t.slug === slug);
}

export function getFeaturedJourneys(): Journey[] {
  return journeys.filter((t) => t.featured);
}

// ─────────────────────────────────────────────────────────────────────
// LOCALIZATION
//
// Each tour has a German translation below. We keep the English array as
// the source of truth for structural fields (slug, images, pricing numbers,
// durations, months, featured flag) and overlay locale-specific text fields
// at render time via `getLocalizedJourneys()` / `getLocalizedJourneyBySlug()`.
//
// Translatable fields per tour:
//   title · subtitle · region · route · groupSize · difficulty (raw string)
//   summary · overview · highlights[] · itinerary[] (title/description/
//   overnight/highlight) · inclusions[] · exclusions[] · pricing[].label ·
//   departures[] (dates as display strings)
//
// Non-translatable fields (shared across locales):
//   slug · heroImage · galleryImages · durationNights · durationDays · months
//   · priceEUR/priceINR · featured
// ─────────────────────────────────────────────────────────────────────

import type { Locale } from "./translations";

export type JourneyI18nFields = Pick<
  Journey,
  | "title"
  | "subtitle"
  | "region"
  | "route"
  | "groupSize"
  | "difficulty"
  | "summary"
  | "overview"
  | "highlights"
  | "itinerary"
  | "inclusions"
  | "exclusions"
  | "pricing"
  | "departures"
>;

const journeysDeOverrides: Record<string, JourneyI18nFields> = {
  "spiti-summer-expedition": {
    title: "Spiti Sommer-Expedition",
    subtitle:
      "Hochgelegene Dörfer, uralte Klöster, Himalaya-Himmel",
    region: "Himachal Pradesh, Nordindien",
    route: "Delhi → Shimla → Chitkul → Tabo → Kaza → Kalpa → Shimla → Delhi",
    groupSize: "Max. 10 Reisende",
    difficulty: "Moderate",
    summary:
      "Durchquere die gewaltige Kinnaur-Schlucht, trinke Buttertee in Klippen-Klöstern und stehe im höchsten Dorf der Welt. Eine Himalaya-Runde, die einmal im Leben stattfindet.",
    overview:
      "Spiti ist die dramatischste Landschaft, von der die meisten Reisenden noch nie gehört haben — eine Hochwüste zwischen Großen Himalaya und Tibet. Unsere Juni–Juli-Expedition ist auf das schmale Sommerfenster abgestimmt, wenn die Pässe offen sind und das Tal mit Wildblumen zum Leben erwacht. Sie besuchen 1.000 Jahre alte Klöster, schicken eine Postkarte vom höchsten Postamt der Welt und teilen Mahlzeiten mit Familien in abgelegenen Homestays. Erfahrene Himalaya-Guides, sorgfältige Höhenakklimatisierung und komfortable Übernachtungen inklusive.",
    highlights: [
      "Chitkul — das letzte indische Dorf vor Tibet",
      "Key-Kloster, auf einem Himalaya-Grat thronend",
      "Hikkim (höchstes Postamt der Welt) & Komic (höchstes befahrbares Dorf)",
      "Chicham — eine der höchsten Hängebrücken Asiens",
      "Kloster Tabo, oft das 'Ajanta des Himalaya' genannt",
    ],
    itinerary: [
      {
        day: 0,
        title: "Delhi → Himachal-Vorgebirge (Nachtfahrt)",
        description:
          "Treffen Sie Ihre Gruppe am Abend in Delhi und besteigen Sie einen komfortablen Nacht-Reisebus in die Berge. Die Fahrt gibt den Ton an — ein langsamer Übergang von der Stadt zur Stille.",
        overnight: "An Bord (Semi-Sleeper-Bus)",
      },
      {
        day: 1,
        title: "Shimla → Sangla über Narkanda",
        description:
          "Ankunft in Shimla am Morgen, Frühstückspause, dann Fahrt über Narkanda und Rampur nach Kinnaur. Halt am Kinnaur Gate und am mächtigen Karcham-Damm auf dem Weg nach Sangla.",
        overnight: "Homestay / Gästehaus in Sangla",
        highlight: "Erster Vorgeschmack auf Bergruhe",
      },
      {
        day: 2,
        title: "Sangla → Chitkul → Nako → Tabo",
        description:
          "Morgendliche Fahrt nach Chitkul, das letzte indische Dorf nahe der chinesischen Grenze. Weiter entlang des Sutlej, Blick auf den Zusammenfluss Khab Sangam und Halt am türkisfarbenen Nako-See, bevor Sie Tabo erreichen.",
        overnight: "Homestay / Gästehaus in Tabo",
        highlight: "Alpine Wiesen von Chitkul und Nako-See",
      },
      {
        day: 3,
        title: "Tabo → Dhankar → Kaza",
        description:
          "Besuch des 1.000 Jahre alten Tabo-Klosters, danach Weiterfahrt zum Dhankar-Kloster, das dramatisch auf einer Klippe thront. Ankunft in Kaza, dem Herzen von Spiti, und Erkundung des lokalen Marktes.",
        overnight: "Gästehaus / Hotel in Kaza",
        highlight: "Klippen-Kloster Dhankar und Kazas entspannte Abendstimmung",
      },
      {
        day: 4,
        title: "Kaza → Langza → Hikkim → Komic → Kaza",
        description:
          "Erkunden Sie drei der höchstgelegenen bewohnten Dörfer der Welt: Langza (riesige Buddha-Statue + marine Fossilien), Hikkim (höchstes Postamt der Welt — senden Sie eine Postkarte!) und Komic (höchstes befahrbares Dorf).",
        overnight: "Gästehaus / Hotel in Kaza",
        highlight: "Leben über 4.400 m",
      },
      {
        day: 5,
        title: "Kaza → Key-Kloster → Chicham-Brücke → Kaza",
        description:
          "Besuch des ikonischen Key-Klosters bei Sonnenaufgang, danach Fahrt zur Chicham-Brücke — eine der höchsten Hängebrücken Asiens — mit atemberaubendem Schluchtblick.",
        overnight: "Gästehaus / Hotel in Kaza",
        highlight: "Der fotogenste Tag der Reise",
      },
      {
        day: 6,
        title: "Kaza → Gui → Tabo → Kalpa",
        description:
          "Beginn der Rückreise mit einem Stopp am Gui-Kloster, wo eine 500 Jahre alte, natürlich erhaltene Mönchsmumie liegt. Abstieg nach Kinnaur und Ankunft in Kalpa am Abend.",
        overnight: "Gästehaus / Hotel in Kalpa",
        highlight: "Das mystische Gui-Kloster",
      },
      {
        day: 7,
        title: "Kalpa → Shimla → Delhi",
        description:
          "Wachen Sie mit Blick auf den heiligen Kinner Kailash auf. Halt am Suicide Point für Panoramablicke, danach Abstieg nach Shimla und Nacht-Reisebus zurück nach Delhi.",
        overnight: "An Bord (Nachtfahrt nach Delhi)",
        highlight: "Sonnenaufgang über dem Kinner Kailash",
      },
    ],
    inclusions: [
      "6 Nächte in komfortablen Homestays, Gästehäusern und Hotels (Twin/Triple-Sharing)",
      "Volvo-/Reisebus-Tickets Delhi ↔ Shimla",
      "Privater SUV/Tempo Traveller für die gesamte Spiti-Runde",
      "6× Frühstück und 6× Abendessen",
      "Alle Mautgebühren, Parkplätze, Fahrerspesen und Inner-Line-Genehmigungen",
      "Erfahrener Himalaya-Fahrer & 24/7-Unterstützung vor Ort",
      "Englischsprachige Gruppenleitung",
    ],
    exclusions: [
      "Internationale oder inländische Flüge nach/von Delhi",
      "Mahlzeiten während der Transfers (Delhi ↔ Shimla)",
      "Persönliche Ausgaben (Einkäufe, Getränke, Wäsche, Trinkgelder)",
      "Eintrittsgelder für Klöster & optionale Abenteueraktivitäten",
      "Reise- und Krankenversicherung (dringend empfohlen)",
      "Kosten durch Straßensperren, Wetter oder höhere Gewalt",
    ],
    pricing: [
      { label: "Twin / Triple-Sharing (ab Shimla)", priceEUR: 2199, priceINR: 197900 },
      { label: "Twin / Triple-Sharing (ab Delhi)", priceEUR: 2499, priceINR: 224900 },
      { label: "Doppelzimmer (ab Delhi)", priceEUR: 2699, priceINR: 242900 },
    ],
    departures: ["Individuell — Anfrage stellen"],
  },

  "paradise-of-kashmir": {
    title: "Paradies Kaschmir",
    subtitle:
      "Shikara-Fahrten, Mughal-Gärten und die Wiese aus Gold",
    region: "Jammu & Kaschmir, Nordindien",
    route: "Srinagar → Gulmarg → Pahalgam → Sonmarg → Srinagar",
    groupSize: "Max. 10 Reisende",
    difficulty: "Easy",
    summary:
      "Gleiten Sie auf einer handgeschnitzten Shikara über den Dal-See, schlendern Sie über die Blumenwiese in Gulmarg und picknicken Sie an gletschergespeisten Flüssen. Die sanfteste Einführung in den Himalaya.",
    overview:
      "Kaschmir trägt den Beinamen 'Himmel auf Erden' nicht ohne Grund. Diese 5-tägige Gruppenreise dreht sich um drei der atemberaubendsten Täler des indischen Himalayas — Gulmarg, Pahalgam und Sonmarg — mit viel Zeit, auch in Srinagar selbst zur Ruhe zu kommen. Sie übernachten auf einem traditionellen Hausboot, fahren bei Sonnenaufgang durch die mit Lotus bedeckten Kanäle des Dal-Sees und besuchen die Mughal-Gärten, die einst Kaiser inspirierten. Ideal für Indien-Erstreisende und alle, die Bergschönheit ohne anspruchsvolles Programm wollen.",
    highlights: [
      "Übernachtung auf einem handgeschnitzten Hausboot am Dal-See",
      "Gondel-Seilbahn über die alpinen Wiesen von Gulmarg",
      "Naturspaziergänge am Lidder-Fluss in Pahalgam",
      "Sonmarg — die Wiese aus Gold — mit Blick auf den Thajiwas-Gletscher",
      "Mughal-Gärten: Nishat Bagh, Shalimar Bagh & Shankaracharya-Tempel",
    ],
    itinerary: [
      {
        day: 1,
        title: "Ankunft in Srinagar + Mughal-Gärten",
        description:
          "Ankunft am Flughafen Srinagar und Transfer zu Ihrem Hausboot am Dal-See. Am Nachmittag Besuch von Nishat Bagh und Shalimar Bagh (Garten des Vergnügens und Wohnstätte aller), danach Shankaracharya-Tempel mit Sonnenuntergangsblick über das Tal.",
        overnight: "Deluxe-Hausboot am Dal-See",
        highlight: "Shikara-Fahrt bei Sonnenuntergang",
      },
      {
        day: 2,
        title: "Tagesausflug nach Gulmarg",
        description:
          "53 km Fahrt nach Gulmarg (2.650 m), auch bekannt als Blumenwiese. Fahrt mit der zweithöchsten Gondel der Welt hinauf nach Kongdori für Himalaya-Panoramablicke, Besuch des Golfplatzes (höchster 18-Loch-Platz der Welt) und Rückkehr nach Srinagar am Abend.",
        overnight: "Deluxe-Hotel / Hausboot in Srinagar",
        highlight: "Gondel-Seilbahn Gulmarg",
      },
      {
        day: 3,
        title: "Tagesausflug nach Pahalgam",
        description:
          "Ganztagesausflug nach Pahalgam, dem 'Tal der Hirten'. Naturspaziergänge am Lidder-Fluss, optionale Ponyritte zur Baisaran-Wiese und Picknick-Mittagessen zwischen Kiefernwäldern.",
        overnight: "Deluxe-Hotel / Hausboot in Srinagar",
        highlight: "Spaziergänge am Lidder-Fluss",
      },
      {
        day: 4,
        title: "Tagesausflug nach Sonmarg",
        description:
          "Fahrt nach Sonmarg (2.740 m) — die 'Wiese aus Gold'. Schneebedeckte Gipfel, der Sindh-Fluss voller Forellen und ein optionaler Ponyritt zum Thajiwas-Gletscher.",
        overnight: "Deluxe-Hotel / Hausboot in Srinagar",
        highlight: "Thajiwas-Gletscher",
      },
      {
        day: 5,
        title: "Abreise",
        description:
          "Gemütliches Frühstück, optional eine letzte Shikara-Fahrt und Transfer zum Flughafen Srinagar für Ihren Weiterflug.",
        overnight: "—",
        highlight: "Letzter Sonnenaufgang über dem Dal-See",
      },
    ],
    inclusions: [
      "4 Nächte Unterkunft im Twin-Sharing (Halbpension)",
      "Alle Flughafentransfers + privates Fahrzeug für Sightseeing",
      "Tägliches Frühstück und Abendessen",
      "1-stündige Shikara-Fahrt auf dem Dal-See",
      "Begrüßung & Unterstützung durch unsere lokale Ansprechperson bei Ankunft",
    ],
    exclusions: [
      "Flüge nach/von Srinagar",
      "Mittagessen während der Reisetage",
      "Eintrittsgelder, Gondelfahrten (Gulmarg), Ponyritte",
      "Persönliche Ausgaben (Trinkgelder, Wäsche, Getränke)",
      "5 % GST auf den Gesamtpreis",
    ],
    pricing: [
      { label: "Deluxe (6 Personen)", priceEUR: 2099, priceINR: 188900 },
      { label: "Premium (6 Personen)", priceEUR: 2499, priceINR: 224900 },
      { label: "Royal (6 Personen)", priceEUR: 2899, priceINR: 260900 },
    ],
    departures: ["Individuell — Anfrage stellen"],
  },


  "rishikesh-himalayan-escape": {
    title: "Rishikesh & Himalaya-Flucht",
    subtitle: "Premium · 7 Tage · Eine sanfte, sichere Einführung in Indien — wo Sie sich willkommen fühlen, nicht verloren",
    region: "Uttarakhand, Nordindien",
    route: "Delhi → Rishikesh → Chopta → Himalaya-Dorf → Rishikesh → Delhi",
    groupSize: "Max. 8 Reisende",
    difficulty: "Easy",
    summary:
      "Privates Yoga am Ganges, der höchste Shiva-Tempel der Welt, ein echtes Himalaya-Familienhaus und eine Spa-Auszeit — alles in sieben kuratierten Tagen. Die Premium-Art, Indien zum ersten Mal zu spüren.",
    overview:
      "Die meisten Indien-Erstbesucher kommen mit einer Mischung aus Aufregung und stiller Skepsis an — die Farben, die Menschenmassen, das Unbekannte. Diese 7-Tage-Reise ist genau darauf ausgelegt, diese Skepsis aufzulösen und durch etwas zu ersetzen, das Sie nicht erwarten: ein Gefühl von Zuhause. Wir haben diese Erfahrung für Europäer entwickelt, die Indien zu seinen eigenen Bedingungen kennenlernen wollen — ohne die Überwältigung. Sie schlafen in handverlesenen Luxusunterkünften mit sauberen Betten, zuverlässigem Warmwasser und gefiltertem Trinkwasser an jedem Halt. Sie reisen ausschließlich in privaten klimatisierten Fahrzeugen mit professionellen Fahrern, die wir persönlich kennen. Sie essen Lebensmittel, die wir auf Hygiene und Frische geprüft haben. Und durch alles hindurch — von Ihrer ersten Yoga-Stunde am Ganges bis zu dem Moment, in dem Sie den Chandrashila erklimmen und der gesamte Himalaya sich vor Ihnen öffnet — ist Shikha oder ein leitender GoTrustelle-Gastgeber dabei, nicht als Reiseführer, sondern als Freundin, die Indien zufällig sehr gut kennt. Der Dorftag an Tag 5 ist unser stolzestes Angebot: ein echtes Himalaya-Familienwillkommen, gemeinsames Kochen, Geschichten beim Chai — der Nachmittag, bei dem Sie Instagram völlig vergessen. Das ist keine Tour durch Indien. Das ist Ihre Einführung in das Indien jenseits des Reiseplans.",
    highlights: [
      "VIP Ganga Aarti — intime Positionierung abseits der Massen, Feuer am Fluss in der Dämmerung",
      "Privates Sonnenaufgangs-Yoga am Ufer des Ganges — anfängerfreundlich, tief erholsam",
      "Chandrashila-Gipfel (4.000 m) — 360°-Himalaya-Panorama über dem höchsten Shiva-Tempel der Welt",
      "Dorfimmersion an Tag 5 — Kochen, Geschichten und Chai mit einer echten Himalaya-Familie",
      "Lagerfeuer-Sternenbeobachtung in Chopta — kein Lichtsmog, die Milchstraße deutlich sichtbar",
      "Rishikesh Spa & Klangheiling-Reset — das perfekte Schlusskapitel vor der Heimreise",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → Rishikesh — Privattransfer & sanfte Ankunft",
        description:
          "Ihr Fahrer empfängt Sie am Flughafen Delhi oder an Ihrem Hotel in einem sauberen, klimatisierten privaten SUV. Die 5–6 Stunden Fahrt durch die Gangeten-Ebene und in die Shivalik-Vorberge ist Ihr erster Vorgeschmack auf Indien im richtigen Tempo — kein Bus, keine Fremden, nur Sie und die sich wandelnde Landschaft. Ankunft in Rishikesh mit Willkommensgetränk und Check-in im Luxus-Flusshotel. Der Abend gehört Ihnen: Himalaya-Luft schnuppern, den Ganges hören und sanft ankommen bei einem leichten kuratierten Abendessen (kontinentale und indische Optionen) auf der Flussterrasse.",
        overnight: "Luxus-Flusshotel, Rishikesh (Taj Rishikesh oder gleichwertig)",
        highlight: "Erster Abend am Ganges — die Stadt, die sich nicht ganz wie Indien anfühlt und dennoch wie nichts anderes",
      },
      {
        day: 2,
        title: "Rishikesh — Yoga, Café-Kultur & VIP Ganga Aarti",
        description:
          "Der Morgen beginnt mit einer privaten Yoga-Stunde am Ufer des Ganges — anfängerfreundlich, tief erdend und ungleich jedem Studiokurs. Langsames Frühstück mit Flussblick, dann gehört der Rest des Morgens Ihnen: Rishikeshs versteckte Café-Szene, die Buchläden und Gewürzstände in Tapovan, die Hängebrücken von Laxman Jhula. Am Nachmittag zeigt Shikha Ihnen ihre Lieblingsplätze — die, die in keinem Reiseführer stehen. Wenn die Sonne sinkt, beziehen wir private Plätze am Triveni Ghat für die Ganga Aarti: Priester tragen Feuer, tausend schwimmende Lampen, Andachtsmusik steigt über den Fluss. Nicht die Version, die Touristen aus der Distanz sehen — die Version, die Sie hautnah, persönlich begleitet und vollständig präsent erleben.",
        overnight: "Luxus-Flusshotel, Rishikesh",
        highlight: "Privates Yoga bei Sonnenaufgang + VIP Ganga Aarti bei Einbruch der Dämmerung",
      },
      {
        day: 3,
        title: "Rishikesh → Chopta — In die Berge",
        description:
          "Nach einem entspannten Frühstück fahren Sie ostwärts in das Kedarnath-Wildschutzgebiet, während die Straßen schmaler und der Himalaya-Wald dichter um Sie wird. Die 6–7-stündige Fahrt ist Teil des Erlebnisses — Wasserfälle erscheinen neben der Straße, Dörfer klammern sich an Berghänge und die Luft verändert sich spürbar im Steigen. Ankunft in Chopta (2.680 m) — dem 'Mini-Schweiz Uttarakhands' — am frühen Abend. Ihre Boutique-Berghütte ist warm, intim und tadellos sauber. Das Abendessen ist heute biologisch und hausgemacht, zubereitet von der Hüttenfamilie. Nach dem Essen, wenn der Himmel klar ist, wird das Lagerfeuer entzündet und die Sternbeobachtung beginnt. Die Milchstraße hier ist etwas, das Sie mit nach Hause tragen.",
        overnight: "Boutique Bergöko-Lodge, Chopta (Himalayan Eco Lodge oder gleichwertig)",
        highlight: "Lagerfeuer, Bergluft und ein Himmel, den man kaum fotografieren kann",
      },
      {
        day: 4,
        title: "Chandrashila-Gipfel (4.000 m) & Tungnath-Tempel — Signaturtag",
        description:
          "Früher Aufbruch, um den Gipfel vor der Wolkenbildung zu erreichen. Der Trek steigt 3,5 km durch Rhododendronwald und weite alpine Wiesen zum Tungnath-Tempel hinauf — dem höchsten Shiva-Heiligtum der Welt auf 3.680 m, vor über 1.000 Jahren erbaut. Hier innehalten. Eine Räucherstäbchenstange anzünden. Die Stille wirken lassen. Dann noch 1,5 km bis zum Chandrashila-Gipfel auf 4.000 m, wo das vollständige Garhwal-Himalaya-Panorama in alle Richtungen aufgeht: Nanda Devi, Trishul, Chaukhamba, Kedarnath. Dieser Moment — über den Wolken stehend, von Gipfeln umgeben, die Jahrmillionen zur Entstehung brauchten — ist der, den Reisende noch Monate später beschreiben. Unser Guide geht ein langsames, angenehmes Tempo; dieser Trek ist für Erstbesucher vollständig machbar. Rückkehr zur Lodge für ein warmes Mittagessen, Ruhe und ein Premium-Abendessen.",
        overnight: "Boutique Bergöko-Lodge, Chopta",
        highlight: "4.000-m-Gipfel über den Wolken — der emotionale Höhepunkt der Reise",
      },
      {
        day: 5,
        title: "Himalaya-Dorftag — Kochen, Geschichten & echte Begegnung",
        description:
          "Dies ist GoTrustelles Signaturtag — der, der diese Reise von jedem anderen Indien-Paket unterscheidet. Wir besuchen ein nahegelegenes Himalaya-Dorf und verbringen einen halben Tag mit einer einheimischen Familie: gemeinsames Kochen eines traditionellen Garhwali-Mahls auf einem Holzfeuer, Sitzen im Hof und Kennenlernen des Bergalltags, Lauschen von Geschichten, die in keinem Reiseführer stehen. Keine Schauspieler, keine gestellten Vorführungen — echte Menschen, die ihr Zuhause öffnen, weil Shikha über Jahre echte Beziehungen hier aufgebaut hat. Sie teilen eine Mahlzeit, die ungleich allem anderen schmeckt, was Sie in Indien essen werden, und Sie werden wahrscheinlich weit länger bleiben als der Zeitplan vorsieht. Dies ist der Nachmittag, von dem die meisten Reisenden sagen, er habe verändert, wie sie Reisen sehen.",
        overnight: "Boutique Bergöko-Lodge, Chopta (oder Guesthouse auf der Route)",
        highlight: "Der Nachmittag, bei dem Sie Instagram vergessen",
      },
      {
        day: 6,
        title: "Chopta → Rishikesh — Spa-Reset & Luxusabend",
        description:
          "Rückkehr nach Rishikesh mit den Bergen noch frisch im Körper. Check-in in Ihr Flusshotel, und der Nachmittag gehört vollständig der Wiederherstellung: eine kuratierte Spa-Sitzung (Ayurveda-Massage, Aromatherapie oder Tiefengewebsmassage — Ihre Wahl), gefolgt von optionalem Klang-Heilen oder geführter Meditation. Das Abendessen ist heute ein erhobener, entspannter Gruppenabend — Shikha ist dabei, um die Woche über gutes Essen, Lachen und die besondere Wärme zu feiern, die sich nur zwischen Menschen bildet, die etwas Echtes geteilt haben.",
        overnight: "Luxus-Flusshotel, Rishikesh",
        highlight: "Himalaya-Spa-Reset — die Berge in Ihren Muskeln aufgelöst",
      },
      {
        day: 7,
        title: "Rishikesh → Delhi — Abreise mit Fürsorge",
        description:
          "Ein langsamer letzter Morgen: Chai am Fluss, ein letzter Spaziergang zum Ghat. Ihr Privatfahrzeug bricht nach dem Frühstück zum Flughafen Delhi oder einem Hotel in der Stadt auf (5–6 Stunden). Ihr Fahrer kümmert sich um Ihr Gepäck, kennt die Routen und bringt Sie pünktlich an. Wenn Sie einen Zug statt einen Flug haben, arrangieren wir alles im Voraus. Sie fahren mit einer Sache, die die meisten Touristen nicht haben: einem klaren, starken Gefühl, dass Sie dieses Land verstanden haben — nicht nur gesehen.",
        overnight: "—",
        highlight: "Letzter Chai am Ganges — Indien im Gepäck nach Hause tragen",
      },
    ],
    inclusions: [
      "6 Nächte Luxus- & Boutiqueunterkunft: 2× Premium-Flusshotel Rishikesh + 2× Boutique-Öko-Lodge Chopta + 2× Premium-Flusshotel Rishikesh (Twin-Sharing)",
      "Privater AC-SUV oder Innova Crysta für alle Transfers (kein Linienbus, niemals)",
      "Professioneller geprüfter Fahrer — derselbe Fahrer während der gesamten Reise",
      "Private Yoga-Stunde am Ganges (Tag 2)",
      "VIP Ganga-Aarti-Positionierung am Triveni Ghat — persönlich begleitet",
      "Zertifizierter Himalaya-Trek-Guide für den Chandrashila-Gipfeltag",
      "Chandrashila-Gipfel & Tungnath-Tempel-Trek-Erlaubnis",
      "Himalaya-Dorferlebnis — Familien-Mittagessen inklusive (Tag 5)",
      "Lagerfeuer & Sternenbeobachtungsabend in Chopta",
      "Spa-Sitzung in Rishikesh — Ayurveda- oder Tiefengewebsmassage (Tag 6)",
      "6× Frühstück + 5× Abendessen (biologisch, hygienisch, wo möglich lokal bezogen)",
      "Willkommensgetränk bei Ankunft in Rishikesh",
      "Gefiltertes Wasser während der gesamten Reise",
      "Alle Mautgebühren, Parkplätze und Fahrerspesen",
      "24/7 persönlicher Gastgeber — Shikha oder leitendes GoTrustelle-Teammitglied durchgehend anwesend",
    ],
    exclusions: [
      "Internationale oder inländische Flüge nach/von Delhi",
      "Mittagessen während der Reise (wir empfehlen vertrauenswürdige Lokalrestaurants — ca. €8–12 pro Mahlzeit)",
      "Optionale Aktivitäten: Wildwasser-Rafting, Bungee Jumping, Kajak (gegen Aufpreis arrangierbar)",
      "Persönliche Ausgaben: Einkäufe, Alkohol, Trinkgelder",
      "Reise- und Krankenversicherung (dringend empfohlen — Evakuierungsschutz ratsam)",
      "Kameragebühren in bestimmten Tempeln",
      "Kosten durch Straßensperrungen, Erdrutsche oder Wetterverzögerungen",
    ],
    pricing: [
      { label: "Twin-Sharing — Premium (ab Delhi)", priceEUR: 1399, priceINR: 125900 },
      { label: "Twin-Sharing — Standard (ab Delhi)", priceEUR: 1199, priceINR: 107900 },
    ],
    departures: ["Individuell — Anfrage stellen"],
  },

  "ladakh-grand-circuit": {
    title: "Ladakh Grand Circuit",
    subtitle: "Mondlandschaften, die höchsten Straßen der Welt & ein See, der mit jedem Licht die Farbe wechselt",
    region: "Ladakh, Nordindien",
    route: "Delhi ✈ Leh → Nubra-Tal → Turtuk → Pangong Tso → Leh → Delhi ✈",
    groupSize: "Max. 10 Reisende",
    difficulty: "Moderate",
    summary:
      "Überqueren Sie den Khardung La auf 5.359 m, reiten Sie auf einem baktrischen Kamel über Himalaya-Sanddünen und beobachten Sie, wie der Pangong Tso von tiefem Blau zu Türkis wechselt. Zehn Tage in einer der spektakulärsten — und entlegensten — Landschaften der Erde.",
    overview:
      "Ladakh lässt sich kaum beschreiben. Es ist eine Hochgebirgswüste am Rand Tibets, eine Mondlandschaft mit uralten Klöstern, ein Ort, wo Himalaya-Gipfel auf Sanddünen treffen und Gletscherflüsse in der Farbe von Saphiren strömen. Es ist auch für viele Reisende die Reise, die alles verändert — die, auf die sie Jahre später zeigen, als den Moment, in dem sich ihr Verhältnis zu Indien, zur Stille und zur überwältigenden Größe der Naturwelt dauerhaft verschoben hat. Unser 10-tägiger Grand Circuit gibt Ihnen das vollständige Ladakh: drei Tage in Leh für die kritische Höhenakklimatisierung und einige der schönsten Klosterbesuche Asiens, zwei Tage im grünen Nubra-Tal inklusive des abgelegenen Balti-Dorfs Turtuk nahe der pakistanischen Grenze, zwei Tage am Pangong Tso — dem 134 km langen See, der die indisch-chinesische Grenze überspannt und durch ein Dutzend unmöglicher Blautöne schimmert — und einen letzten freien Tag, um Ladakhs Rhythmus in Ihren Knochen sacken zu lassen, bevor Sie in die Welt zurückkehren. Wir reisen im Privatfahrzeug mit demselben Ladakhi-Fahrer, haben einen Notfall-Sauerstoffzylinder an Bord, halten die Gruppe klein und steuern den Höhengewinn sorgfältig. GoTrustelleS Gastgeberin ist von der Landung bis zur Abreise dabei.",
    highlights: [
      "Pangong Tso (4.350 m) — der 134 km lange See, der bei wechselndem Licht von Tiefblau zu Türkis zu Grün wechselt",
      "Khardung La (5.359 m) — Überquerung einer der höchsten befahrbaren Straßen der Welt, umgeben von Schneefeldern",
      "Nubra-Tal: Baktrian-Kamelritt über Wüstendünen unter 7.000-m-Gipfeln",
      "Turtuk — Indiens nördlichstes zugängliches Dorf, eine Balti-Welt aus Maulbeerwäldchen und alten Holzmoscheen",
      "Diskits 32-Meter-Maitreya-Buddha mit Blick über das gesamte Nubra-Tal",
      "Hemis-Festival (Juni/Juli-Abreisen) — uralte maskierte Cham-Tänze im größten Kloster Ladakhs",
      "Lamayuru Mondlandschaft — eine erodierte Landschaft, die wie nichts anderes auf der Erde aussieht",
      "Zusammenfluss von Zanskar und Indus — zwei völlig verschiedenfarbige Flüsse, die sich in der Stille treffen",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi ✈ Leh — Ankunft & die goldene Regel der Höhe",
        description:
          "Eine Stunde Flug von Delhi, und Sie treten in eine andere Welt: dünne Luft auf 3.500 m, ein Himmel so blau, dass er fast wehtut, und Berge in jede Richtung. Die goldene Regel Ladakhs gilt sofort — heute unternehmen Sie nichts. Kein Kloster, kein Markt, kein Spaziergang hügelaufwärts. Check-in im Deluxe-Hotel, leicht essen, viel Wasser trinken und den Körper beginnen lassen, sich auf ein Drittel weniger Sauerstoff einzustellen. Ein leichter Kopfschmerz ist normal. Schlaf ist Medizin. In Ihrem Zimmer ist ein Notfall-Sauerstoffzylinder griffbereit. Ihr Körper ist gerade klüger als Ihr Reiseplan — vertrauen Sie ihm.",
        overnight: "Deluxe-Hotel, Leh",
        highlight: "Der erste Anblick von Leh aus der Luft — eine uralte Stadt in 6.000-m-Gipfeln",
      },
      {
        day: 2,
        title: "Leh — Sanfte Akklimatisierung & die Altstadt",
        description:
          "Ein langsamer Morgen in Leh im Tempo der Höhe. Nach dem Frühstück ein ruhiger Spaziergang durch den 500 Jahre alten Leh Bazar — frische Aprikosen, Gebetsmühlen, handgewebter Kaschmir, der Geruch von Butterlampen. Besuch des alten Leh-Palastes, einer neunstöckigen Ruine, die einst mit Lhasas Potala-Palast rivalisierte, mit weitem Blick über das Indus-Tal. Nachmittag nach eigenem Tempo. Bei Sonnenuntergang Spaziergang zur Shanti Stupa — einem strahlend weißen Kuppelbau auf einem Hügel über der Stadt — für den panoramischsten ersten Abendblick in Ladakh: die Stok-Kangri-Kette errötet, der Indus windet sich goldfarben unten, und der Leh-Palast fängt das letzte Licht. Die meisten Reisenden fühlen sich deutlich besser als gestern.",
        overnight: "Deluxe-Hotel, Leh",
        highlight: "Shanti Stupa bei Sonnenuntergang — Ihr erstes vollständiges Ladakhi-Panorama",
      },
      {
        day: 3,
        title: "Unteres Ladakh — Klöster, Mondlandschaft & der Sangam-Zusammenfluss",
        description:
          "Ein ganzer Tag für den dramatischsten Abschnitt des unteren Ladakhs. Zuerst Kloster Alchi — eines der ältesten in Ladakh, im 11. Jahrhundert erbaut, mit bemerkenswert erhaltenen Fresken in einem Stil, der kashmirische, zentralasiatische und tibetische Einflüsse vereint. Weiter nach Lamayuru: ein Kloster aus dem 14. Jahrhundert über einer Landschaft, die so vollständig anders ist als alles drumherum, dass Geologen sie \'Mondlandschaft\' nennen — blasse, seltsam erodierte Sedimentformationen, zurückgelassen als ein prähistorischer See abtrocknete. Rückfahrt über den Magnetischen Hügel (wo das Auto bergauf zu rollen scheint — eine schöne optische Täuschung), das Pathar Sahib Gurudwara und den Sangam-Punkt, wo das graugrüne Wasser des Zanskar auf das kupferbraune des Indus trifft — zwei Flüsse, zwei Welten, die nebeneinander fließen, ohne sich zu mischen.",
        overnight: "Deluxe-Hotel, Leh",
        highlight: "Lamayuru-Mondlandschaft + Zanskar-Indus-Sangam — zwei unvergleichliche Landschaften an einem Tag",
      },
      {
        day: 4,
        title: "Leh → Nubra-Tal über Khardung La (5.359 m)",
        description:
          "Heute überqueren Sie die Berge. Die Fahrt zum Khardung La — einer der höchsten befahrbaren Straßen der Erde — führt durch Schneefelder, auch im Juli, an Armeekonvois vorbei, und in eine Stille, die wächst, während die Luft dünner wird. Der Pass selbst liegt auf 5.359 m: ein kleines Heiligtum, ein Teestand, ein Schild und ein 360°-Blick auf die Hauptkette des Himalaya und den Karakorum, der in dieser Höhe ohnegleichen ist. Abstieg auf der anderen Seite ins Nubra-Tal — eine völlige Verwandlung. Nach dem kargen Braun von Leh ist Nubra grün: Pappeln, Apfel- und Aprikosengärten, der Shyok-Fluss, der sich durch den flachen Talboden schlängelt. Am späten Nachmittag Fahrt zu den Hunder-Sanddünen. Hier, im Schatten von 7.000-m-Gipfeln, hat der Himalaya-Wind echte Wüstendünen aufgetürmt — und auf ihnen streifen baktrische Zweihucker-Kamele aus Zentralasien. Ihr Kamelritt bei Sonnenuntergang, mit den sich orange färbenden Dünen und dem Karakorum dahinter, ist das Foto, das Sie den Rest der Reise zu überbieten versuchen.",
        overnight: "Boutique-Guesthouse / Ökocamp, Hunder (Nubra-Tal)",
        highlight: "Baktrischer Kamelritt auf den Himalaya-Sanddünen bei Sonnenuntergang",
      },
      {
        day: 5,
        title: "Nubra-Tal — Diskit, Turtuk & eine Welt nahe der Grenze",
        description:
          "Morgenbesuch im Diskit-Kloster, dem größten in Nubra, auf einem Felsvorsprung über dem Tal thronend, mit einem 32-Meter-Maitreya-Buddha, dessen Gesicht gelassen nordwärts zum Karakorum blickt — und symbolisch nach Pakistan. Dann Fahrt weiter nach Norden nach Turtuk, dem letzten für Touristen zugänglichen indischen Dorf vor der Kontrolllinie, 1971 von Pakistan übernommen. Die Balti-Menschen hier haben eine Kultur, Architektur, Schrift und Sprache, die völlig anders ist als die buddhistischen Ladakhi-Dörfer: Steinhäuser mit geschnitzten Holzveranden, alte Moscheen, Maulbeerwälder und Kinder, die Fremden mit einer Herzlichkeit zuwinken, die die Grenze sehr weit weg erscheinen lässt. Ihr Guide stellt Sie einer Einheimischenfamilie vor — Tee, getrocknete Aprikosen, Geschichten. Ein Ort, den die meisten Ladakh-Reisenden nie erreichen.",
        overnight: "Boutique-Guesthouse / Ökocamp, Hunder (Nubra-Tal)",
        highlight: "Turtuk — Indiens nördlichstes zugängliches Dorf, ungleich allem anderen in Ladakh",
      },
      {
        day: 6,
        title: "Nubra-Tal → Pangong Tso (4.350 m) — der See, der einen sprachlos macht",
        description:
          "Die Fahrt vom Nubra-Tal zum Pangong Tso durch das Shyok-Tal ist eine der großen Bergstraßen der Welt: Die Route folgt dem Shyok durch Schluchten aus vertikalem Fels, an alten befestigten Dörfern und zerfallenden Stupas vorbei, bevor sie auf das Pangong-Plateau auf 4.350 m ansteigt. Dann erscheint der See. Man hört die Menschen im Fahrzeug jedes Mal verstummen. Der Pangong Tso ist 134 km lang, liegt auf über 4.350 m und überspannt die indisch-chinesische Grenze. Die Farbe — ein Blau von solcher Intensität, dass es digital bearbeitet wirkt — ist das Ergebnis von Höhe, fehlendem Schwebstaub und einem Himmel, der hier oben immer größer ist. Beobachten Sie den Farbwechsel im Laufe des Nachmittags und Abends: Saphir, Kobalt, Schiefer, dann Silber in der Dämmerung. Abendessen am Seeufer mit den aufgehenden Sternen darüber.",
        overnight: "Seeufer-Camp / Guesthouse, Pangong Tso",
        highlight: "Erster Anblick des Pangong — ein Blau, das Sie nicht für möglich hielten",
      },
      {
        day: 7,
        title: "Pangong Tso — Ein ganzer Tag mit dem See",
        description:
          "Aufwachen vor der Morgendämmerung. Das Licht auf 4.350 m vor Sonnenaufgang hat eine Qualität, die Fotografen eigens hierherzieht — kühl, klar, rein. Am Ufer stehen und zusehen, wie der Pangong wechselt: tiefes Marineblau zu blassem Gold zum unmöglichen Mittags-Blau. Morgens entlang des Südufers spazieren in Richtung Spangmik, wo Changpa-Nomadenfamilien ihre Pashmina-Ziegen in den flacheren Buchten weiden lassen. Der Nachmittag ist ungehetzt — ein Buch am Seeufer, ein langer Spaziergang, ein Gespräch mit dem Guide darüber, was es bedeutet, an einem Ort zu leben, wo der Winter −30°C bringt. Noch ein Sonnenuntergang, noch ein Sternenhimmel ohne künstliches Licht in zweihundert Kilometern Umkreis. Die Milchstraße hier ist keine Metapher.",
        overnight: "Seeufer-Camp / Guesthouse, Pangong Tso",
        highlight: "Morgendämmerung am Seeufer — der Pangong in seiner außerordentlichsten Stille",
      },
      {
        day: 8,
        title: "Pangong → Leh über Chang La (5.360 m) & Hemis-Kloster",
        description:
          "Die Rückfahrt nach Leh überquert den Chang La auf 5.360 m — Ihren zweiten Hochpass, den die meisten Reisenden dramatischer finden als den Khardung La, weil die Straße auf der Pangong-Seite steiler, exponierter und vollständig menschenleer ist. Halt oben für das rituelle Foto. Abstieg ins Indus-Tal und Fahrt zum Hemis-Kloster, dem größten und wohlhabendsten in Ladakh, erbaut in einem verborgenen Tal unter roten Felswänden. Die Innenräume sind außergewöhnlich: Thangka-Gemälde von Hausgröße, antike Bronzestatuen, der Geruch von Butterlampen in Kapellen, die seit fünf Jahrhunderten brennen. Wenn Ihre Abreise in die Zeit des Hemis-Festivals fällt (Ende Juni–Anfang Juli), wird dies der lebendigste Tag der gesamten Reise: maskierte Cham-Tänzer in antikem Brokat, Zeremonialtrompeten, eine 300 Jahre alte Tradition vor Mönchen, Dorfbewohnern — und einer kleinen GoTrustelle-Gruppe, die ihren Weg hierher gefunden hat.",
        overnight: "Deluxe-Hotel, Leh",
        highlight: "Chang La am Morgen + Hemis-Kloster (Festival-Daten: siehe Abreisetermine)",
      },
      {
        day: 9,
        title: "Leh — Freier Tag, Alltagsleben & die Aromen Ladakhs",
        description:
          "Leh verdient einen eigenen vollen Tag. Schlafen bis der Körper aufwacht. Ohne Agenda durch den alten Bazar schlendern — Kaschmirschals, in Leh gefertigte Klangschalen, Gemälde auf handgemachtem Papier, getrocknete Aprikosen, die wie konzentrierter Sommer schmecken. Besuch der Hall of Fame, dem Tribut der indischen Armee für die Soldaten, die diese Grenzen seit Jahrzehnten bei Temperaturen bewachen, die Uhren stoppen. Optional am Nachmittag: ein Kochkurs mit einer Ladakhi-Familie — Thukpa (Nudelbrühe), Momo (gedämpfte Teigtaschen) und ein Tassen Buttertee, den Sie entweder lieben oder für seine Kühnheit in Erinnerung behalten werden. Dies ist auch der Tag, an dem die Reise zur Erinnerung wird, die Sie festhalten können: die Pässe, die Dünen, der See, der Klosterhof voller Tänzer.",
        overnight: "Deluxe-Hotel, Leh",
        highlight: "Leh in Ihrem eigenen Tempo — der Tag, an dem alles in sich setzt",
      },
      {
        day: 10,
        title: "Leh ✈ Delhi — Abreise",
        description:
          "Letztes Frühstück in dünner Luft. Ihr Fahrer bringt Sie zum Kushok Bakula Rinpoche Airport — ein kleines, schönes Terminal, von dessen Abfluggate aus die Stok-Kangri-Kette sichtbar ist. Eine Stunde Flug und Sie sind zurück in Delhi: dicke Luft, Hitze, die volle Intensität der Ebenen. Sie kommen mit etwas zurück, das Ladakh fast allen gibt, die lang genug bleiben: eine Neukalibrierung des Maßstabs, ein ruhigeres Gespür dafür, was es wert ist, sich Sorgen zu machen — und was nicht. Unser Team in Delhi bestätigt, dass Sie sicher auf dem Weg sind.",
        overnight: "—",
        highlight: "Der Rückflug — zusehen, wie die Ladakhi-Gipfel in Wolken verschwinden",
      },
    ],
    inclusions: [
      "9 Nächte Unterkunft: 3× Deluxe-Hotel Leh + 2× Boutique-Guesthouse/Ökocamp Nubra-Tal + 2× Seeufer-Camp/Guesthouse Pangong Tso + 2× Deluxe-Hotel Leh (Twin-Sharing durchgehend)",
      "Privater Innova Crysta / SUV für alle Sightseeing-Fahrten und Transfers — selbes Fahrzeug und selber Fahrer während der gesamten Reise",
      "Professioneller englischsprachiger Ladakhi-Guide für Kloster- und Kulturbesuche",
      "Alle Inner-Line-Genehmigungen: Nubra-Tal, Pangong Tso, Turtuk Sperrgebiet",
      "Wildschutzgebiet- und Schutzgebiets-Eintrittsgebühren",
      "9× Frühstück + 8× Abendessen (alle Mahlzeiten in den Unterkünften inklusive)",
      "Baktrian-Kamelritt auf den Hunder-Sanddünen (Nubra-Tal)",
      "Notfall-Sauerstoffzylinder im Fahrzeug während der gesamten Reise",
      "Erste-Hilfe-Set mit grundlegenden Höhenmedikamenten an Bord",
      "Alle Mautgebühren, Parkplätze und Fahrerspesen",
      "GoTrustelle-Gastgeberin bei Flughafenankunft und -abreise + 24/7-Unterstützung unterwegs",
    ],
    exclusions: [
      "Hin- und Rückflüge Delhi ↔ Leh (frühzeitig buchen — typischerweise €80–150 pro Strecke; auf Anfrage helfen wir beim Buchen)",
      "Mittagessen während der Reise (wir empfehlen vertrauenswürdige Lokalrestaurants — ca. ₹300–500 pro Mahlzeit)",
      "Kloster- und Denkmaleintritt (typischerweise ₹50–100 pro Standort)",
      "Hubschrauber-Evakuierungsversicherung (dringend empfohlen für alle Hochgebirgsreisen)",
      "Persönliche Ausgaben: Einkäufe, Getränke, Trinkgelder, Wäsche",
      "Reise- und umfassende Krankenversicherung (erforderlich)",
      "Kosten durch Flugverspätungen, -ausfälle oder wetterbedingte Programmänderungen",
      "Persönliche Höhenmedikation über das Erste-Hilfe-Set hinaus (vor Reiseantritt Arzt konsultieren)",
    ],
    pricing: [
      { label: "Twin-Sharing — Deluxe (ab Leh)", priceEUR: 2199, priceINR: 197900 },
      { label: "Twin-Sharing — Premium (ab Leh)", priceEUR: 2599, priceINR: 233900 },
    ],
    departures: ["Individuell — Anfrage stellen"],
  },

  "ladakh-dark-sky-circuit": {
    title: "Ladakh Dark Sky Circuit",
    subtitle: "Hanle, Tso Moriri & das Changthang — die entlegensten Winkel von Indiens Dach",
    region: "Ladakh & Changthang, Nordindien",
    route: "Delhi ✈ Leh → Nubra → Turtuk → Pangong Tso → Hanle → Tso Moriri → Leh → Delhi ✈",
    groupSize: "Max. 10 Reisende",
    difficulty: "Moderate",
    summary:
      "Jenseits des Pangong liegt ein Ladakh, das die meisten Reisenden nie erreichen — das weite Changthang-Plateau, das Indische Astronomische Observatorium in Hanle unter dem dunkelsten Himmel Asiens und die unberührte Wildnis des Tso Moriri. Dreizehn Tage, eine Welt für sich.",
    overview:
      "Wenn der Grand Circuit Ihnen die Highlights zeigt, zeigt der Dark Sky Circuit Ihnen die Seele. Diese 13-tägige Reise führt ostwärts vom Pangong ins Changthang — ein windgepeitschtes Plateau auf über 4.500 m, wo nomadische Changpa-Familien seit Jahrhunderten Pashmina-Ziegen hüten, wo die Luft so trocken und klar ist, dass das Indische Astronomische Observatorium Hanle für eines der großen Hochgebirgs-Teleskope der Welt gewählt hat, und wo der Tso Moriri in absoluter Stille liegt — 28 km Wildnissee, den die überwiegende Mehrheit der Indien-Besucher nie sehen wird. Die Route vom Pangong nach Hanle passiert das Rezang-La-Memorial, Schauplatz eines der heroischsten letzten Gefechte des Kriegs von 1962. Hanle selbst ist ein Dorf mit wenigen Hundert Menschen auf 4.572 m — es hält den Rekord für den dunkelsten messbaren Himmel Indiens, und an einer klaren Nacht wirft die Milchstraße sichtbare Schatten. Der Tso Moriri ist ein Ramsar-geschütztes Feuchtgebiet, Heimat der Schwarzhalskraniche, der Kiang-Wildpferde und einer Stille, die so vollständig ist, dass man einzelne Vögel einen halben Kilometer weit hört.",
    highlights: [
      "Hanle Dark Sky Reserve — der dunkelste messbare Nachthimmel Indiens, Milchstraße die ganze Nacht sichtbar",
      "Indisches Astronomisches Observatorium, Hanle (4.500 m) — einer der höchstgelegenen Teleskopstandorte der Welt",
      "Tso Moriri (4.522 m) — ein unberührtes Ramsar-Feuchtgebiet, Heimat von Schwarzhalskranich & Kiang-Wildpferd",
      "Rezang-La-Memorial — der Schlachtort von 1962 auf dem Weg von Pangong nach Hanle",
      "Changthang-Plateau — nomadische Changpa-Familien, Pashmina-Ziegen, Wind und Himmel",
      "Chumathang-Thermalquellen — natürliche Geothermalbecken auf der Rückfahrt nach Leh",
      "Karzok-Kloster am Tso-Moriri-Ufer — ein kleines, uraltes Gompa am Rand der Welt",
      "Alle Grand-Circuit-Highlights: Khardung La, Nubra-Tal, Pangong Tso, Turtuk, Diskit",
    ],
    itinerary: [
      { day: 1, title: "Delhi ✈ Leh — Ankunft & die goldene Regel", description: "Flug nach Leh (3.500 m). Die goldene Regel gilt sofort: Heute nichts unternehmen. Check-in, leicht essen, viel Wasser trinken, ruhen. Ihr Körper braucht 24 Stunden. Notfall-Sauerstoffzylinder im Zimmer.", overnight: "Deluxe-Hotel, Leh", highlight: "Erster Blick auf Leh in 6.000-m-Gipfeln" },
      { day: 2, title: "Leh — Sanfte Akklimatisierung & Altstadt", description: "Ruhiger Spaziergang durch den Leh-Bazar. Leh-Palast (neunstöckige Ruine mit weitem Indus-Tal-Blick). Shanti Stupa bei Sonnenuntergang — ein Panorama, das die gesamte Stok-Kangri-Kette rosa färbt.", overnight: "Deluxe-Hotel, Leh", highlight: "Shanti-Stupa-Sonnenuntergang — das vollständige Ladakhi-Panorama" },
      { day: 3, title: "Unteres Ladakh — Klöster, Mondlandschaft & Sangam", description: "Tagesausflug nach Alchi (Fresken aus dem 11. Jh.), Lamayuru (Mondlandschaft), Magnetischer Hügel und der Sangam, wo der türkisfarbene Zanskar auf den kupferbraunen Indus trifft.", overnight: "Deluxe-Hotel, Leh", highlight: "Lamayuru-Mondlandschaft + Zanskar-Indus-Zusammenfluss" },
      { day: 4, title: "Leh → Nubra-Tal über Khardung La (5.359 m)", description: "Überquerung des Khardung La — einer der höchsten befahrbaren Straßen der Welt. Abstieg ins grüne Nubra-Tal. Ankunft in Hunder. Baktrian-Kamelritt auf Wüstendünen bei Sonnenuntergang.", overnight: "Boutique-Guesthouse / Ökocamp, Hunder, Nubra-Tal", highlight: "Baktrian-Kamelritt auf Himalaya-Sanddünen bei Sonnenuntergang" },
      { day: 5, title: "Nubra-Tal — Diskit & Turtuk", description: "Morgenbesuch im Diskit-Kloster mit dem 32-Meter-Maitreya-Buddha. Nachmittags Fahrt nach Turtuk — Indiens nördlichstes zugängliches Dorf, eine Balti-Welt aus Maulbeerwäldchen und alten Holzmoscheen.", overnight: "Boutique-Guesthouse / Ökocamp, Hunder, Nubra-Tal", highlight: "Turtuk — Indiens nördlichstes Dorf nahe der pakistanischen Grenze" },
      { day: 6, title: "Nubra → Pangong Tso (4.350 m) über das Shyok-Tal", description: "Die große Pangong-Fahrt entlang des Shyok durch Schluchtenlandschaft. Erster Anblick des Pangong Tso — ein Blau, das die Unterhaltung mid-sentence stoppt.", overnight: "Seeufer-Camp / Guesthouse, Pangong Tso", highlight: "Erster Anblick des Pangong — das unbeschreibliche Blau" },
      { day: 7, title: "Pangong Tso — Ein ganzer Tag mit dem See", description: "Vor der Morgendämmerung aufwachen für das Sonnenaufgangslicht auf dem Wasser. Ufer entlang spazieren, See beim Farbwechsel beobachten. Abend-Sonnenuntergang, Nacht-Sternenhimmel mit beginnender Milchstraße.", overnight: "Seeufer-Camp / Guesthouse, Pangong Tso", highlight: "Morgendämmerung am Pangong-Ufer — der außergewöhnlichste Morgen der Welt" },
      { day: 8, title: "Pangong → Rezang La → Hanle (4.572 m)", description: "Weg vom Touristenpfad. Fahrt durch das Chushul-Plateau zum Rezang-La-Memorial (5.360 m) — zu Ehren der Charlie-Kompanie, die 1962 überwältigenden Kräften standhielt. Abstieg ins Changthang und Ankunft im Dorf Hanle.", overnight: "Guesthouse, Hanle", highlight: "Rezang La — ein bewegender Halt an einem der bedeutendsten Memorials Indiens" },
      { day: 9, title: "Hanle — Dark Sky Reserve & Indisches Astronomisches Observatorium", description: "Morgens Spaziergang zum Hanle-Kloster (17. Jh.) mit Blick über das Changthang. Nachmittags Besuch des IAO-Geländes auf 4.500 m mit dem 2-m-Himalayan-Chandra-Teleskop (nach Voranmeldung). Ab 20 Uhr: kein konkurrierendes Licht 200 km weit. Die Milchstraße hier wirft messbare Schatten — der dunkelste messbare Himmel Indiens.", overnight: "Guesthouse, Hanle", highlight: "Der dunkelste Himmel Indiens — die Nacht, an die Sie sich am längsten erinnern" },
      { day: 10, title: "Hanle → Tso Moriri (4.522 m) über das Changthang", description: "Fahrt über das weite, windgepeitschte Changthang-Plateau via Sumdo. Die Landschaft ist prähistorisch: weit, braungelb, bewohnt nur von gelegentlichen Changpa-Familien. Abstieg zum Tso Moriri, wo 28 km glasklares Wasser ohne Souvenirstand und ohne Straße auf drei Seiten warten.", overnight: "Ökocamp / Guesthouse, Karzok, Tso Moriri", highlight: "Ankunft am Tso Moriri — der See, den der Großteil Indiens nie gesehen hat" },
      { day: 11, title: "Tso Moriri — Wildtiere, Karzok-Kloster & weite Stille", description: "Ganzer Tag an einem der großen Wildnis-Seen Asiens. Morgenwanderung am Nordufer für Wildlife: Kiang (Tibetisches Wildpferd) in Herden, Schwarzhalskraniche in den Seichtstellen, gelegentlich Tibetischer Wolf. Besuch von Karzok-Kloster auf dem Seeufer. Nachmittag: am Wasser sitzen.", overnight: "Ökocamp / Guesthouse, Karzok, Tso Moriri", highlight: "Schwarzhalskraniche, Kiang-Wildpferde und die vollständige Stille des Changthang" },
      { day: 12, title: "Tso Moriri → Chumathang-Thermalquellen → Leh", description: "Rückfahrt nach Leh entlang des Indus durch dramatische Schluchtenlandschaft. Stopp in Chumathang — Geothermale Heißquellen, die bei 40–50°C neben einem Gletscherbach blubbern. Optionales Bad. Ankunft in Leh am Abend.", overnight: "Deluxe-Hotel, Leh", highlight: "Chumathang-Thermalquellen — ein Natur-Spa am Rand des Changthang" },
      { day: 13, title: "Leh ✈ Delhi — Abreise", description: "Letztes Frühstück in Ladakhs dünner, klarer Luft. Transfer zum Flughafen für den Morgenflug nach Delhi (1 Stunde). Sie kommen in der Hitze und im Lärm der Ebenen an — mit etwas, das kein Flughafenladen replizieren kann.", overnight: "—", highlight: "Letzter Blick auf die Stok-Kangri-Kette vom Abfluggate" },
    ],
    inclusions: [
      "12 Nächte Unterkunft: 3× Deluxe-Hotel Leh + 2× Guesthouse/Ökocamp Nubra + 2× Seeufer-Camp/Guesthouse Pangong + 2× Guesthouse Hanle + 2× Ökocamp Karzok (Tso Moriri) + 1× Deluxe-Hotel Leh (Twin-Sharing)",
      "Privater Innova Crysta / SUV für alle Transfers — selbes Fahrzeug & Fahrer durchgehend",
      "Professioneller englischsprachiger Ladakhi-Guide für Kloster-, Kultur- und Wildtierbesuche",
      "Alle Inner-Line-Genehmigungen: Nubra-Tal, Pangong, Turtuk, Hanle Sperrgebiet, Tso Moriri",
      "Changthang-Wildschutzgebiet- und Tsomoriri-Feuchtgebiet-Eintrittsgebühren",
      "12× Frühstück + 11× Abendessen",
      "Baktrian-Kamelritt auf den Hunder-Sanddünen",
      "Notfall-Sauerstoffzylinder im Fahrzeug durchgehend",
      "Erste-Hilfe-Set mit Höhenmedikamenten an Bord",
      "Alle Mautgebühren, Parkplätze und Fahrerspesen",
      "GoTrustelle-Gastgeberin bei Flughafenankunft & -abreise + 24/7-Unterstützung",
    ],
    exclusions: [
      "Hin- und Rückflüge Delhi ↔ Leh (ca. €80–150 pro Strecke; auf Anfrage helfen wir beim Buchen)",
      "IAO-Teleskopbesuch (abhängig von Verfügbarkeit & separater Genehmigung — wir beantragen für Sie)",
      "Mittagessen (ca. ₹300–500 pro Mahlzeit in lokalen Dhabas)",
      "Kloster- und Denkmaleintrittsgebühren (ca. ₹50–100 pro Standort)",
      "Hubschrauber-Evakuierungsversicherung (essenziell für Changthang-Reisen)",
      "Persönliche Ausgaben: Einkäufe, Getränke, Trinkgelder, Wäsche",
      "Reise- und umfassende Krankenversicherung (erforderlich)",
      "Kosten durch Flugverspätungen oder wetterbedingte Programmänderungen",
    ],
    pricing: [
      { label: "Twin-Sharing — Deluxe (ab Leh)", priceEUR: 2199, priceINR: 197900 },
      { label: "Twin-Sharing — Premium (ab Leh)", priceEUR: 2499, priceINR: 224900 },
    ],
    departures: ["Individuell — Anfrage stellen"],
  },

  "northeast-india-meghalaya": {
    title: "Nordostindien — Meghalaya & lebende Brücken",
    subtitle: "Über Jahrhunderte gewachsene Wurzelbrücken, Asiens sauberstes Dorf & ein Fluss, den man bis zum Grund sieht",
    region: "Meghalaya & Assam, Nordostindien",
    route: "Delhi → Guwahati → Shillong → Cherrapunji → Nongriat → Mawlynnong → Dawki → Guwahati → Delhi",
    groupSize: "Max. 10 Reisende",
    difficulty: "Easy",
    summary:
      "Eine lebende Doppelstockbrücke, von Khasi-Händen über 500 Jahre gewoben. Das sauberste Dorf Asiens, wo an jeder Tür ein Besen hängt. Ein Fluss, so klar, dass man das Flussbett vom Boot aus lesen kann. Nordostindien ist Indiens bestgehütetes Geheimnis — und dies ist die Reise dorthin.",
    overview:
      "Die meisten Indien-Reisenden kommen nie in den Nordosten. Das ist keine Kritik — es ist eine Einladung. Die Seven Sisters States beherbergen eine Version Indiens, die völlig anders ist als alles im Norden, Süden, Osten oder Westen: uralte Stammeskulturen, die noch sehr lebendig sind, Wälder, die zwölf Monate im Jahr tropfen, und eine Sprach- und Kulinarikwelt, die das übrige Indien kaum kennt. Diese 10-tägige Runde durch Meghalaya ('Wohnstätte der Wolken') und einen Teil Assams gipfelt in dem, was die meisten Reisenden als das Außergewöhnlichste benennen, das sie je in Indien gesehen haben: die Doppelstock-Lebende-Wurzelbrücken von Nongriat, wo das Khasi-Volk die Wurzeln von Kautschukfeigenbäumen über Jahrhunderte über Flussschluchten trainiert hat, bis die Wurzeln verwachsen und zu natürlichen lebenden Brücken geworden sind, die fünfzig Menschen tragen können. Dazu der kristallklare Umngot-Fluss in Dawki, die Wasserfälle von Cherrapunji und Mawlynnong — das tadellos gepflegte 'sauberste Dorf Asiens'. Klein, privat und persönlich begleitet.",
    highlights: [
      "Doppelstock-Lebende-Wurzelbrücke, Nongriat — 500 Jahre Khasi-Bioingenieurkunst, UNESCO-Tentativliste",
      "Umngot-Fluss, Dawki — ein Fluss, so transparent, dass Boote auf Luft zu schwimmen scheinen",
      "Nohkalikai-Fälle — der 4.-höchste Wasserfall der Welt, in Juli–September auf vollem Strom",
      "Mawlynnong — Asiens sauberstes Dorf, mit Himmelsbrücken über den Bangladeschischen Ebenen",
      "Sieben-Schwestern-Fälle — sieben parallele Wasserstränge, die von der Meghalaya-Hochebene stürzen",
      "Mawsmai-Kalksteinhöhlen — uralte Höhlenformationen tief in der Cherrapunji-Hochebene",
      "Shillong — das 'Schottland des Ostens', eine Hügelstation völlig eigener Art",
      "Kamakhya-Tempel, Guwahati — einer der mächtigsten und atmosphärischsten Pilgerorte Indiens",
    ],
    itinerary: [
      { day: 1, title: "Delhi → Guwahati ✈ — Tor zum Nordosten", description: "Flug nach Guwahati (2 Stunden). Die Luft ist schwerer, grüner, feuchter. Transfer ins Hotel und am Abend Besuch des Kamakhya-Tempels auf dem Nilachal-Hügel: einer der bedeutendsten Shakti-Tempel Indiens. Rückkehr zum Abendessen am Brahmaputra — Indiens mächtigstem Fluss, so breit, dass das andere Ufer unsichtbar bleibt.", overnight: "Boutique-Hotel, Guwahati", highlight: "Kamakhya-Tempel in der Dämmerung — alt, eindringlich, ungleich allem in Nordindien" },
      { day: 2, title: "Guwahati → Umiam-See → Shillong", description: "Fahrt von Guwahati nach Shillong (3 Stunden, 1.500 m Anstieg) durch subtropischen Wald, am weitläufigen blauen Umiam-See vorbei und hinauf in die Khasi-Berge. Shillong — Hauptstadt Meghalaya — ist Indiens 'Schottland des Ostens': Kiefernwälder, koloniales Zentrum und eine Rockmusikszene, die pro Kopf mehr Musiker hervorgebracht hat als fast jede andere indische Stadt.", overnight: "Boutique-Hotel, Shillong", highlight: "Umiam-See-Aussichtspunkt — das blaue Reservoir umrahmt von Waldhügeln" },
      { day: 3, title: "Shillong — Stadt, Wasserfälle & Don-Bosco-Museum", description: "Ganzer Tag in Shillong. Ward's Lake, Elefantenwasserfälle, Kathedrale Maria Hilfe der Christen. Nachmittags: Don-Bosco-Centre for Indigenous Cultures — sieben Etagen des umfassendsten Museums der Stammeskulturen Nordostindiens. Abends: Police Bazar mit lokalem Straßenessen und meghalayischen Textilien.", overnight: "Boutique-Hotel, Shillong", highlight: "Don-Bosco-Museum — das wichtigste Kulturmuseum des indischen Nordostens" },
      { day: 4, title: "Shillong → Cherrapunji (Sohra) — Der regenreichste Ort der Welt", description: "Einstündige Fahrt südwärts nach Cherrapunji — das Plateau mit dem Weltrekord für den höchsten gemessenen Jahresniederschlag. In Juli–September ist die Landschaft überschwänglich grün: Wasserfälle stürzen von jeder Klippe, die Luft ist dauerhaft kühl und neblig. Ankunft, Einleben. Nachmittagsspaziergang zum Thangkharang Park für die ersten Ausblicke auf den Plateaurand — und die Anfänge der Fälle.", overnight: "Boutique-Resort, Cherrapunji", highlight: "Erster Anblick des Meghalaya-Plateaurands — die Welt unter den Wolken" },
      { day: 5, title: "Cherrapunji — Wasserfälle, Höhlen & der Rand der Welt", description: "Voller Tag in Cherrapunji: Sieben-Schwestern-Fälle, Nohkalikai-Fälle (340 m Fallhöhe, vierthöchster Wasserfall der Welt) und Mawsmai-Kalkhöhlen — ein schmales, kathedralenartiges Höhlensystem tief im Plateau.", overnight: "Boutique-Resort, Cherrapunji", highlight: "Nohkalikai-Fälle — 340 Meter in einen Tümpel glazialer Wasserfarbe" },
      { day: 6, title: "Trek nach Nongriat — Die Doppelstock-Lebende-Wurzelbrücke", description: "Der Tag, den die meisten Reisenden als außergewöhnlichsten ihrer gesamten Indien-Reise benennen. 4,5 km Abstieg (3.000+ Stufen) durch dichten subtropischen Wald nach Nongriat — eine Gemeinschaft, die nur zu Fuß zugänglich ist, wo das Khasi-Volk über 500 Jahre die Luftwurzeln indischer Kautschukfeigen über Flussschluchten trainiert hat, bis sie verwachsen und zu natürlichen Brücken wurden, die Dutzende Menschen tragen können. UNESCO-Tentativliste. Schwimmen im natürlichen Felsbecken, einfaches Mittagessen im Dorf, nachmittäglicher Aufstieg.", overnight: "Boutique-Resort, Cherrapunji", highlight: "Die Doppelstock-Lebende-Wurzelbrücke — 500 Jahre lebendige Bioingenieurkunst" },
      { day: 7, title: "Cherrapunji → Mawlynnong → Dawki", description: "Fahrt nach Mawlynnong — Asiens sauberstes Dorf: An jeder Tür hängt ein Besen, jeder Weg ist gefegt, die Gemeinschaft pflegt das Dorf aus gemeinsamem Stolz. Bambushimmelspaziergang über dem Wald mit Blick auf die bangladeschische Grenzebene. Dann Fahrt nach Dawki, wo der Umngot-Fluss über weißem Sandboden so klar fließt, dass Boote auf Luft zu schwimmen scheinen. Abendliche Bootsfahrt im nachlassenden Licht.", overnight: "Guesthouse, Dawki / Shillong", highlight: "Dawkis Umngot-Fluss — der Glasfluss, wo Boote auf nichts schwimmen" },
      { day: 8, title: "Dawki → Jaintia-Berge → Nartiang-Monolithen → Shillong", description: "Rückfahrt nach Shillong durch die Jaintia-Berge — eine andere meghalayische Kultur mit eigener Sprache. Stopp in Nartiang, wo die größte Sammlung prähistorischer Monolithen des Nordostens auf einem Dorffeld steht: riesige Steine, von Jaintia-Königen als Denkmäler errichtet. Abends letzter Shillong-Marktbummel.", overnight: "Boutique-Hotel, Shillong", highlight: "Nartiang-Monolithen — die stehenden Steine des Nordostens" },
      { day: 9, title: "Shillong → Teegarten → Guwahati", description: "Morgendliche Fahrt vom Meghalaya-Plateau zurück in die Assam-Ebenen. Stopp in einem Assam-Teegarten in den Assam-Vorbergen: geführter Gartenrundgang, Verkostung mit dem Gutsverwalter und eine echte Tasse Assam-Tee — stark, rotgolden und ungleich allem aus dem Supermarkt.", overnight: "Boutique-Hotel, Guwahati", highlight: "Assam-Teegarten — die Originalquelle des meistkonsumierten Getränks der Welt" },
      { day: 10, title: "Guwahati → Delhi ✈ — Abreise", description: "Morgenflug zurück nach Delhi (2 Stunden). Sie verlassen den Nordosten mit Bildern, die nicht in das Indien passen, das Sie zu kennen glaubten: eine Brücke aus Wurzeln, ein Glasfluss, ein Dorf, in dem jeder seinen eigenen Weg kehrt.", overnight: "—", highlight: "Letzter Blick auf den Brahmaputra — Indiens anderer großer Strom" },
    ],
    inclusions: [
      "9 Nächte Unterkunft: 1× Boutique-Hotel Guwahati + 2× Boutique-Hotel Shillong + 2× Boutique-Resort Cherrapunji + 1× Guesthouse Dawki + 1× Boutique-Hotel Shillong + 1× Boutique-Hotel Guwahati (Twin-Sharing)",
      "Privatfahrzeug für alle Sightseeing- und Transferfahrten durchgehend",
      "Professioneller englischsprachiger Guide mit Expertise in meghalayischer Kultur und Ökologie",
      "Nongriat-Lebende-Wurzelbrücken-Trek mit lokalem Khasi-Guide",
      "Dawki-Flussbootfahrt auf dem Umngot",
      "Assam-Teegarteneintritt und geführte Verkostung",
      "9× Frühstück + 8× Abendessen",
      "Alle Eintrittsgebühren für Parks, Höhlen und Himmelsbrücke (Mawlynnong)",
      "Alle Mautgebühren, Parkplätze und Fahrerspesen",
      "24/7-Unterstützung und GoTrustelle-Gastgeberin während der gesamten Reise",
    ],
    exclusions: [
      "Hin- und Rückflüge Delhi ↔ Guwahati (ca. €60–100 pro Strecke; auf Anfrage helfen wir beim Buchen)",
      "Mittagessen (empfehlenswerte lokale Meghalaya-Restaurants — ca. ₹300–500 pro Mahlzeit)",
      "Persönliche Ausgaben: Einkäufe, Getränke, Trinkgelder",
      "Reise- und Krankenversicherung (empfohlen)",
      "Optionale Aktivitäten (Kaziranga-Safari als Ergänzung für Okt–März-Reisende verfügbar)",
      "Kosten durch Wetterverzögerungen oder Straßensperrungen (Monsunreisen können kleinere Umleitungen erfordern)",
    ],
    pricing: [
      { label: "Twin-Sharing (ab Guwahati)", priceEUR: 1899, priceINR: 170900 },
      { label: "Twin-Sharing (ab Delhi)", priceEUR: 2099, priceINR: 188900 },
    ],
    departures: ["Individuell — Anfrage stellen"],
  },
};

/**
 * Returns the tour list localized for the given locale.
 * English is the source of truth; other locales overlay translated fields.
 */
export function getLocalizedJourneys(locale: Locale): Journey[] {
  if (locale === "en") return journeys;
  const overrides = locale === "de" ? journeysDeOverrides : null;
  if (!overrides) return journeys;
  return journeys.map((journey) => {
    const override = overrides[journey.slug];
    if (!override) return journey;
    return { ...journey, ...override };
  });
}

/**
 * Returns a single localized tour by slug.
 */
export function getLocalizedJourneyBySlug(
  slug: string,
  locale: Locale
): Journey | undefined {
  const localized = getLocalizedJourneys(locale);
  return localized.find((t) => t.slug === slug);
}

/**
 * Returns only the featured tours, localized.
 */
export function getLocalizedFeaturedJourneys(locale: Locale): Journey[] {
  return getLocalizedJourneys(locale).filter((t) => t.featured);
}
