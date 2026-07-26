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

export type RouteStop = {
  name: string;
  lat: number;
  lng: number;
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
  routeStops?: RouteStop[]; // ordered waypoints (lat/lng are locale-independent, set once on the English entry)
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
  // ─── GOLDEN TRIANGLE, PUSHKAR & VARANASI ──────────────────────────────
  {
    slug: "golden-triangle-pushkar-varanasi",
    title: "Golden Triangle, Pushkar & Varanasi",
    subtitle: "Delhi · Agra · Jaipur · Pushkar · Varanasi — the classic circuit plus a desert lake and the oldest city on Earth",
    heroImage: "/images/tours/golden-triangle/taj-mahal-1.jpg",
    galleryImages: [
      "/images/tours/golden-triangle/taj-mahal-1.jpg",
      "/images/tours/golden-triangle/red-fort-delhi.jpg",
      "/images/tours/rajasthan/Pushkar.jpg",
      "/images/tours/varanasi/srivatsan-balaji-YpX8_xuV1zE-unsplash.jpg",
    ],
    region: "Delhi, Agra, Jaipur, Pushkar & Varanasi, North India",
    durationNights: 9,
    durationDays: 10,
    route: "Delhi → Agra → Jaipur → Pushkar → Delhi → Varanasi (optional) → Delhi",
    routeStops: [{ name: "Delhi", lat: 28.6139, lng: 77.209 }, { name: "Agra", lat: 27.1767, lng: 78.0081 }, { name: "Jaipur", lat: 26.9124, lng: 75.7873 }, { name: "Pushkar", lat: 26.4899, lng: 74.5511 }, { name: "Delhi", lat: 28.6139, lng: 77.209 }, { name: "Varanasi", lat: 25.3176, lng: 82.9739 }, { name: "Delhi", lat: 28.6139, lng: 77.209 }],
    months: ["September", "October", "November", "December"],
    groupSize: "Max 10 travelers",
    difficulty: "Easy",
    summary:
      "The Taj Mahal at sunrise, a Rajput fortress rising from a lake, a 1,200-year-old stepwell carved into the earth, camels crossing dunes at a holy desert lake, and — for those who add it on — the oldest continuously inhabited city on Earth. Ten days built specifically for first-time visitors to India, with every travel leg, monument fee and opening time checked in advance.",
    overview:
      "This is the itinerary we build most often for first-time travelers from Europe and North America, because it answers the question 'what should I actually see in ten days?' without cramming or rushing. It starts with the Golden Triangle — Delhi, Agra, Jaipur — India's essential introduction, then turns southwest to Pushkar, a small holy town on a sacred lake that most first-timers never reach and almost always call the highlight of the trip. From Pushkar we loop back to Delhi and, for guests who want it, fly onward to Varanasi — the oldest living city on Earth, where the Ganges runs between the world of the living and the world beyond it. We move entirely by private air-conditioned vehicle between Delhi, Agra, Jaipur and Pushkar (with realistic drive times built into each day, not the 'optimistic' numbers some operators quote), and by short domestic flight between Delhi and Varanasi rather than an 8+ hour train, because on a 10-day trip your time is the scarcest resource. Every monument visit in this itinerary is timed against its actual opening hours and current entry fee for foreign nationals — sunrise at the Taj before the ticket queues form, Amber Fort before the midday heat, the Ganga Aarti at the hour it's actually performed. Shikha or a GoTrustelle host is reachable throughout, and the whole trip is designed around the questions European and American travelers ask most: is it safe, what do I eat, what do I wear, and how do I get from A to B without losing a day to traffic.",
    highlights: [
      "Taj Mahal at sunrise — 30 minutes with the marble to yourself before the crowds arrive",
      "Amber Fort, Jaipur — a Rajput hill fortress of mirrored halls above a lake",
      "Chand Baori, Abhaneri — the 1,200-year-old stepwell locals still call the 'baori ki haveli', 3,500 perfectly symmetrical steps sunk 13 storeys into the ground",
      "Pushkar — a holy lake town of 52 ghats, the only major Brahma temple in India, and camels at sunset over the dunes",
      "Pushkar Camel Fair (14–23 November departure only) — Rajasthan's biggest folk festival, thousands of camels, traders and performers on the lake's edge",
      "Ganga Aarti at Dashashwamedh Ghat, Varanasi (optional extension) — fire, chanting and conch shells on the river every single evening for centuries",
      "Pre-dawn boat ride on the Ganges, Varanasi (optional extension) — the ghats emerging from mist as the city wakes",
      "Red Fort, Qutub Minar & Humayun's Tomb, Delhi — three UNESCO sites in one unhurried day",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi — Welcome dinner",
        description:
          "Land in Delhi and transfer to your boutique hotel in a central, walkable neighbourhood. Take the afternoon to rest and adjust — after a long-haul flight, we deliberately leave this open rather than schedule sightseeing. In the evening, a welcome dinner with your GoTrustelle host: a gentle, guided introduction to Indian food (butter chicken, dal makhani, fresh naan, a mild regional curry or two) with vegetarian, vegan and no-spice options clearly explained. This is also when we run through the ten days ahead, answer first questions, and make sure everyone has a working local SIM or eSIM sorted.",
        overnight: "Boutique hotel, Central Delhi",
        highlight: "Welcome dinner — your first, gentle introduction to Indian food, no surprises",
      },
      {
        day: 2,
        title: "Delhi full day — Old & New Delhi",
        description:
          "A full day covering both faces of the capital, paced for jet lag. Morning in Old Delhi: the Red Fort, the 17th-century Mughal citadel of Shah Jahan (foreign entry ₹600; open 9:30 AM–4:30 PM, closed Mondays — we build the week around this), followed by Jama Masjid, India's largest mosque, and a cycle-rickshaw ride through the lanes of Chandni Chowk. After lunch, New Delhi: Humayun's Tomb, the 16th-century garden mausoleum that inspired the Taj Mahal (foreign entry ₹550; open daily 6 AM–6 PM), and Qutub Minar, a 73-metre 12th-century minaret surrounded by ancient ruins (foreign entry ₹550; open daily 7 AM–5 PM). A slow drive past India Gate and Rashtrapati Bhavan closes out the day before dinner.",
        overnight: "Boutique hotel, Central Delhi",
        highlight: "Humayun's Tomb — the building that taught Shah Jahan how to build the Taj",
      },
      {
        day: 3,
        title: "Delhi → Agra by road — Agra Fort & Mehtab Bagh at sunset",
        description:
          "Depart Delhi by mid-morning for the drive to Agra (approx. 230 km via the Yamuna Expressway, 3.5–4 hours in real traffic conditions — we build in a rest stop). After lunch and check-in, visit Agra Fort, the red-sandstone Mughal citadel where Shah Jahan spent his final years imprisoned by his own son, gazing at the Taj across the river (foreign entry ₹650, ₹600 on Fridays; open daily 6 AM–6 PM, last entry 5:30 PM). As the light turns gold, we cross to Mehtab Bagh — the garden directly opposite the Taj Mahal — for the classic sunset view with none of the crowds of the monument itself.",
        overnight: "Boutique hotel, Agra",
        highlight: "The Taj Mahal from Mehtab Bagh at sunset — the postcard shot, almost to yourselves",
      },
      {
        day: 4,
        title: "Taj Mahal at sunrise — Agra → Jaipur via the Abhaneri stepwell",
        description:
          "Early start: the Taj Mahal opens 30 minutes before sunrise (ticket counters open an hour before), and this first half-hour — soft light, thin crowds — is the reason we build the whole trip around it (foreign entry ₹1,100, plus ₹200 for the inner mausoleum; children under 15 free; closed every Friday, in which case this visit shifts to Day 3 afternoon instead). After breakfast, depart for Jaipur (approx. 240 km, 4.5–5 hours), breaking the drive at Abhaneri to see Chand Baori — the 1,200-year-old stepwell locals call the 'baori ki haveli', its 3,500 steps descending 13 storeys in perfect geometric symmetry (foreign entry approx. ₹300; open daily 8 AM–6 PM). Arrive in Jaipur by early evening and check into your heritage haveli hotel, with the evening free to explore Johari Bazaar's jewellery and textile stalls.",
        overnight: "Heritage haveli hotel, Jaipur",
        highlight: "Chand Baori — a 1,200-year-old stepwell that looks like nothing else you've seen",
      },
      {
        day: 5,
        title: "Jaipur full day — Amber Fort, City Palace, Jantar Mantar & Hawa Mahal",
        description:
          "Morning at Amber Fort, arriving before the midday heat and tour-bus crowds: a Rajput hill fortress of mirrored halls and carved marble above Maota Lake (foreign entry ₹500; open daily 8 AM–5:30 PM). After lunch, the City Palace, still partly home to Jaipur's royal family (foreign entry ₹300, Chandra Mahal apartments extra; open daily 9:30 AM–5 PM), then Jantar Mantar, Maharaja Jai Singh II's 18th-century astronomical observatory of giant stone instruments (foreign entry ₹200; open daily 9:30 AM–4:30 PM). We finish at Hawa Mahal, the Palace of Winds, for the classic photo from the street and, if you'd like to go inside, a short visit (foreign entry ₹200; open daily 9 AM–5 PM).",
        overnight: "Heritage haveli hotel, Jaipur",
        highlight: "Amber Fort in the morning light — the Rajput world at its most magnificent",
      },
      {
        day: 6,
        title: "Jaipur → Pushkar — Brahma Temple, the ghats & sunset camels",
        description:
          "A comfortable late-morning drive to Pushkar (approx. 145 km, 2.5–3 hours). Check in and spend the afternoon on foot: the Brahma Temple, one of the very few temples to Brahma anywhere in India (free entry; shoes off, respectful dress — modest, shoulders and knees covered), and a walk around the 52 ghats of Pushkar Lake as pilgrims light lamps on the water. As the sun drops, a short camel ride into the dunes just outside town for sunset over the Aravalli hills. If you're travelling on our 14–23 November departure, this evening coincides with the Pushkar Camel Fair — thousands of camels, traders, acrobats and musicians on the lake's edge, one of the great spectacles of rural Rajasthan.",
        overnight: "Heritage guesthouse, Pushkar",
        highlight: "Sunset camel ride over the Pushkar dunes",
      },
      {
        day: 7,
        title: "Pushkar → Delhi by road, then flight to Varanasi",
        description:
          "An early departure from Pushkar (approx. 400 km back to Delhi, 7.5–8 hours by road — we start by 7 AM to keep this comfortable and build in a proper lunch stop). In Delhi, transfer directly to the airport for your onward flight to Varanasi (approx. 1.5 hours; several evening departures run daily). Arrive in Varanasi and transfer to your heritage hotel in the old city, chosen for its rooftop river views and walking-distance access to the ghats. If time and energy allow, an optional short walk to Dashashwamedh Ghat for the evening's Ganga Aarti; otherwise, a quiet dinner and an early night after a long travel day. (This Varanasi extension is optional — travelers who prefer a shorter trip can end at Delhi on Day 7 instead; see Travel Tips.)",
        overnight: "Heritage hotel, Varanasi old city",
        highlight: "Landing in Varanasi at night — the ghats lit by fire even after dark",
      },
      {
        day: 8,
        title: "Varanasi — Pre-dawn boat ride, Kashi Vishwanath & the silk weavers",
        description:
          "5:30 AM: a private boat glides along the ghat line as the city wakes — pilgrims descending the steps in the half-dark, smoke rising from the cremation ghats, the light turning the water silver, then gold. Back for breakfast, then a guided walk to the Kashi Vishwanath Temple, one of Hinduism's twelve Jyotirlinga shrines (general darshan is free; an optional Sugam/VIP darshan costs approx. ₹250 and avoids the queue; temple open 2:30 AM–11 PM, with darshan paused 11 AM–12:30 PM). After lunch, visit the Muslim weavers' quarter, where families have hand-woven Banarasi silk for generations — no pressure to buy, just to watch and understand the craft. In the evening, VIP-positioned seating for the Ganga Aarti at Dashashwamedh Ghat — the nightly fire ceremony performed at the same hour for centuries.",
        overnight: "Heritage hotel, Varanasi old city",
        highlight: "Ganga Aarti at Dashashwamedh Ghat — fire, conch shells and the river in the dark",
      },
      {
        day: 9,
        title: "Sarnath, then evening flight back to Delhi",
        description:
          "A morning drive 13 km north to Sarnath, the deer park where the Buddha gave his first sermon after enlightenment (archaeological park foreign entry approx. ₹300, museum foreign entry approx. ₹100, museum closed Fridays; site open daily 6 AM–6 PM). The 5th-century Dhamek Stupa still marks the spot, and the calm here is a deliberate contrast to Varanasi's intensity. Return for a free afternoon — a last walk on the ghats, a rooftop coffee, or simply rest — before an evening flight back to Delhi (approx. 1.5 hours). Transfer to a hotel near the Delhi airport to make an early or overnight international departure straightforward.",
        overnight: "Hotel near Delhi airport",
        highlight: "Dhamek Stupa at Sarnath — standing where the Buddha stood 2,500 years ago",
      },
      {
        day: 10,
        title: "Departure",
        description:
          "A relaxed final morning before your transfer to Delhi's international airport. Our team confirms your onward flight details in advance and stays reachable until you're checked in. You leave carrying the Taj at sunrise, a stepwell unlike anything at home, camels on a desert lake, and — if you added the extension — the oldest city on Earth still burning its eternal fire on the riverbank.",
        overnight: "—",
        highlight: "One last coffee before the airport — ten days, condensed into everything you needed to see",
      },
    ],
    inclusions: [
      "9 nights accommodation: 2× boutique hotel Delhi + 1× boutique hotel Agra + 2× heritage haveli hotel Jaipur + 1× heritage guesthouse Pushkar + 2× heritage hotel Varanasi + 1× hotel near Delhi airport (twin-sharing)",
      "Private AC vehicle for all sightseeing and road transfers (Delhi–Agra–Jaipur–Pushkar–Delhi)",
      "Domestic return flights Delhi ↔ Varanasi",
      "Professional licensed guide in each city",
      "Taj Mahal sunrise guided visit",
      "Chand Baori (Abhaneri stepwell) stop on the Agra–Jaipur drive",
      "Camel ride at sunset in Pushkar",
      "Pre-dawn private boat ride on the Ganges, Varanasi",
      "VIP Ganga Aarti positioning at Dashashwamedh Ghat",
      "Sarnath guided visit including Dhamek Stupa and museum entry",
      "Banarasi silk weaving workshop visit",
      "9 breakfasts + 8 dinners",
      "All monument, fort and temple entry fees listed in the itinerary",
      "All tolls, parking and driver allowances",
      "24/7 on-trip support — GoTrustelle host available throughout",
    ],
    exclusions: [
      "International flights to/from Delhi",
      "Taj Mahal Photography Permit (optional, ₹200) and inner mausoleum entry (₹200)",
      "Kashi Vishwanath Sugam/VIP darshan (optional, approx. ₹250)",
      "Lunches during the tour (budget ₹500–800 per meal)",
      "Personal expenses: shopping, tips, beverages",
      "Elephant/jeep-up option at Amber Fort or camel/jeep safaris beyond what's listed",
      "Travel & medical insurance (strongly recommended)",
      "5% GST on total package value",
    ],
    travelTips: [
      "Most EU/EEA, UK, Swiss, Norwegian and US passport holders are eligible for the Indian e-Visa — apply online at least 4–7 days before travel",
      "Plug types C, D & M, 230V — bring a universal travel adapter (most hotels can also lend one)",
      "Vegetarian, vegan and Jain meal options are available everywhere on this route — Pushkar and Varanasi's old city are strictly vegetarian and alcohol-free, and we brief you on this before arrival",
      "The Taj Mahal is closed every Friday — if your departure lands the Agra day on a Friday, we simply swap the sunrise visit to the afternoon before instead",
      "The Pushkar–Delhi road leg (Day 7) is a long one (7.5–8 hours) — we start early and build in a proper lunch stop; travelers who'd rather skip it can end the trip in Delhi on Day 6 evening and fly home from there",
      "The Varanasi extension (Days 7–9) is optional — let us know at booking if you'd prefer a 7-day Delhi–Agra–Jaipur–Pushkar–Delhi trip instead, and we'll adjust pricing and flights accordingly",
      "Modest dress (shoulders and knees covered) is appreciated at temples and ghats in Pushkar and Varanasi — light cotton layers work well in all seasons on this route",
      "November evenings in Pushkar and December mornings in Delhi/Agra can be cool (5–12°C) — pack a warm layer",
    ],
    pricing: [
      { label: "Twin sharing — Standard, with Varanasi (from Delhi)", priceEUR: 1899, priceINR: 206700 },
      { label: "Twin sharing — Premium, with Varanasi (from Delhi)", priceEUR: 2299, priceINR: 250400 },
      { label: "Twin sharing — Standard, without Varanasi, 7 days (from Delhi)", priceEUR: 1399, priceINR: 152400 },
    ],
    featured: true,
    departures: [
      "September 19 – 28, 2026 (fixed group departure)",
      "October 17 – 26, 2026 (fixed group departure)",
      "November 14 – 23, 2026 (fixed group departure — Pushkar Camel Fair Special)",
      "November 28 – December 7, 2026 (fixed group departure)",
      "December 19 – 28, 2026 (fixed group departure)",
      "Customisable — contact us",
    ],
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
    routeStops: [{ name: "Srinagar", lat: 34.0837, lng: 74.7973 }, { name: "Gulmarg", lat: 34.0484, lng: 74.3805 }, { name: "Pahalgam", lat: 34.0161, lng: 75.3145 }, { name: "Sonmarg", lat: 34.3033, lng: 75.2926 }, { name: "Srinagar", lat: 34.0837, lng: 74.7973 }],
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
      { label: "Deluxe (6 pax)", priceEUR: 1699, priceINR: 185000 },
      { label: "Premium (6 pax)", priceEUR: 1799, priceINR: 195900 },
      { label: "Royal (6 pax)", priceEUR: 1899, priceINR: 206700 },
    ],
    featured: true,
    departures: ["Customisable — contact us"],
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
    routeStops: [{ name: "Delhi", lat: 28.6139, lng: 77.209 }, { name: "Leh", lat: 34.1526, lng: 77.5771 }, { name: "Nubra Valley", lat: 34.556, lng: 77.463 }, { name: "Turtuk", lat: 34.7967, lng: 76.993 }, { name: "Pangong Tso", lat: 33.77, lng: 78.66 }, { name: "Leh", lat: 34.1526, lng: 77.5771 }, { name: "Delhi", lat: 28.6139, lng: 77.209 }],
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
      { label: "Twin sharing — Deluxe (from Leh)", priceEUR: 2199, priceINR: 239400 },
      { label: "Twin sharing — Premium (from Leh)", priceEUR: 2499, priceINR: 272100 },
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
    routeStops: [{ name: "Delhi", lat: 28.6139, lng: 77.209 }, { name: "Leh", lat: 34.1526, lng: 77.5771 }, { name: "Nubra", lat: 34.556, lng: 77.463 }, { name: "Turtuk", lat: 34.7967, lng: 76.993 }, { name: "Pangong Tso", lat: 33.77, lng: 78.66 }, { name: "Hanle", lat: 32.7794, lng: 78.9711 }, { name: "Tso Moriri", lat: 32.902, lng: 78.322 }, { name: "Leh", lat: 34.1526, lng: 77.5771 }, { name: "Delhi", lat: 28.6139, lng: 77.209 }],
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
      { label: "Twin sharing — Deluxe (from Leh)", priceEUR: 2199, priceINR: 239400 },
      { label: "Twin sharing — Premium (from Leh)", priceEUR: 2499, priceINR: 272100 },
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
    routeStops: [{ name: "Delhi", lat: 28.6139, lng: 77.209 }, { name: "Shimla", lat: 31.1048, lng: 77.1734 }, { name: "Chitkul", lat: 31.3221, lng: 78.4341 }, { name: "Tabo", lat: 32.0958, lng: 78.3819 }, { name: "Kaza", lat: 32.2246, lng: 78.072 }, { name: "Kalpa", lat: 31.5405, lng: 78.2587 }, { name: "Shimla", lat: 31.1048, lng: 77.1734 }, { name: "Delhi", lat: 28.6139, lng: 77.209 }],
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
      { label: "Twin / Triple sharing (from Shimla)", priceEUR: 1699, priceINR: 185000 },
      { label: "Twin / Triple sharing (from Delhi)", priceEUR: 1799, priceINR: 195900 },
      { label: "Double occupancy (from Delhi)", priceEUR: 1799, priceINR: 195900 },
    ],
    featured: true,
    departures: ["Customisable — contact us"],
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
    routeStops: [{ name: "Delhi", lat: 28.6139, lng: 77.209 }, { name: "Rishikesh", lat: 30.0869, lng: 78.2676 }, { name: "Chopta", lat: 30.4167, lng: 79.1167 }, { name: "Himalayan Village", lat: 30.4, lng: 79.1 }, { name: "Rishikesh", lat: 30.0869, lng: 78.2676 }, { name: "Delhi", lat: 28.6139, lng: 77.209 }],
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
      { label: "Twin sharing — Premium (from Delhi)", priceEUR: 1299, priceINR: 141400 },
      { label: "Twin sharing — Standard (from Delhi)", priceEUR: 1499, priceINR: 163200 },
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
    routeStops: [{ name: "Delhi", lat: 28.6139, lng: 77.209 }, { name: "Guwahati", lat: 26.1445, lng: 91.7362 }, { name: "Shillong", lat: 25.5788, lng: 91.8933 }, { name: "Cherrapunji", lat: 25.3, lng: 91.5822 }, { name: "Nongriat", lat: 25.2415, lng: 91.628 }, { name: "Mawlynnong", lat: 25.2019, lng: 91.9219 }, { name: "Dawki", lat: 25.1931, lng: 92.0198 }, { name: "Guwahati", lat: 26.1445, lng: 91.7362 }, { name: "Delhi", lat: 28.6139, lng: 77.209 }],
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
      { label: "Twin sharing (from Guwahati)", priceEUR: 1899, priceINR: 206700 },
      { label: "Twin sharing (from Delhi)", priceEUR: 2099, priceINR: 228500 },
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
    routeStops: [{ name: "Delhi", lat: 28.6139, lng: 77.209 }, { name: "Bir", lat: 32.0463, lng: 76.7159 }, { name: "Barot", lat: 32.0667, lng: 76.8167 }, { name: "Palampur", lat: 32.1109, lng: 76.5363 }, { name: "Andretta", lat: 32.0965, lng: 76.5951 }, { name: "Dharamkot", lat: 32.2432, lng: 76.3237 }, { name: "Triund", lat: 32.2523, lng: 76.3922 }, { name: "Delhi", lat: 28.6139, lng: 77.209 }],
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
      { label: "Per person (small group)", priceEUR: 1299, priceINR: 141400 },
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
    routeStops: [{ name: "Delhi", lat: 28.6139, lng: 77.209 }, { name: "Haridwar", lat: 29.9457, lng: 78.1642 }, { name: "Govindghat", lat: 30.6412, lng: 79.561 }, { name: "Ghangaria", lat: 30.6803, lng: 79.6027 }, { name: "Valley of Flowers", lat: 30.7286, lng: 79.6047 }, { name: "Hemkund Sahib", lat: 30.6961, lng: 79.6083 }, { name: "Ghangaria", lat: 30.6803, lng: 79.6027 }, { name: "Govindghat", lat: 30.6412, lng: 79.561 }, { name: "Delhi", lat: 28.6139, lng: 77.209 }],
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
      { label: "Twin sharing (from Delhi)", priceEUR: 1199, priceINR: 130500 },
      { label: "Twin sharing — Premium (from Delhi)", priceEUR: 1499, priceINR: 163200 },
    ],
    featured: true,
    departures: ["Customisable — contact us"],
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
      "/images/tours/kerala/munnar-tea-gardens-valley.jpg",
      "/images/tours/kerala/kerala-theyyam-performer.jpg",
    ],
    region: "Kochi, Munnar, Thekkady & Alleppey, Kerala, South India",
    durationNights: 8,
    durationDays: 9,
    route: "Kochi → Munnar → Thekkady → Alleppey (houseboat) → Kumarakom → Kochi",
    routeStops: [{ name: "Kochi", lat: 9.9312, lng: 76.2673 }, { name: "Munnar", lat: 10.0889, lng: 77.0595 }, { name: "Thekkady", lat: 9.6041, lng: 77.1653 }, { name: "Alleppey", lat: 9.4981, lng: 76.3388 }, { name: "Kumarakom", lat: 9.6186, lng: 76.4302 }, { name: "Kochi", lat: 9.9312, lng: 76.2673 }],
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
      { label: "Twin sharing — Standard (from Kochi)", priceEUR: 1699, priceINR: 185000 },
      { label: "Twin sharing — Premium (from Kochi)", priceEUR: 2099, priceINR: 228500 },
    ],
    featured: true,
    departures: ["Customisable — contact us"],
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
// Every tour has a translation below for each supported non-English
// locale. We keep the English array as the source of truth for
// structural fields (slug, images, pricing numbers, durations, months,
// featured flag) and overlay locale-specific text fields at render
// time via `getLocalizedJourneys()` / `getLocalizedJourneyBySlug()`.
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

type JourneyOverrideMap = Record<string, JourneyI18nFields>;

const journeysDeOverrides: JourneyOverrideMap = {
  "kerala-backwaters-escape": {
    title: "Kerala Escape",
    subtitle: "Teehügel, Gewürzgärten, ein privates Hausboot und die Backwaters des 'God's Own Country'",
    region: "Kochi, Munnar, Thekkady & Alleppey, Kerala, Südindien",
    route: "Kochi → Munnar → Thekkady → Alleppey (Hausboot) → Kumarakom → Kochi",
    groupSize: "Max. 10 Reisende",
    difficulty: "Easy",
    summary:
      "Sanft geschwungene Teeplantagen in den Wolken, ein duftender Spaziergang durch eine aktive Gewürzplantage, eine Nacht auf einem privaten Hausboot inmitten palmengesäumter Backwaters und eine Kolonialhafenstadt, in der chinesische Fischernetze bei Sonnenuntergang noch immer arbeiten. Neun Tage durch Kerala in seiner ganzen Vielfalt.",
    overview:
      "Kerala nennt sich selbst 'God's Own Country', und nach einer Woche hier widerspricht kaum noch jemand. Diese 9-tägige Rundreise führt von Kochis Fort-Kochi-Viertel — portugiesische Kirchen, chinesische Fischernetze, jüdische Synagogen, alles auf wenigen Quadratkilometern — hinauf in die kühlen Teehügel von Munnar, weiter zu den Gewürzgärten und bewaldeten Hügeln von Thekkady am Rand des Periyar-Tigerreservats, und schließlich aufs Wasser selbst: eine private Hausbootfahrt durch die Backwaters von Alleppey, gefolgt von einem ruhigeren Aufenthalt am See in Kumarakom. Keralas Tempo ist langsamer als im Norden, das Essen ist außergewöhnlich (Kokosnuss, Curryblätter, frisch gefangene Meeresfrüchte, richtig zubereiteter Filterkaffee), und die Landschaft wechselt alle zwei Tage komplett. Wir reisen durchgehend im privaten klimatisierten Fahrzeug, wählen Boutique- und Heritage-Unterkünfte und halten die Gruppe klein.",
    highlights: [
      "Eine private Hausbootübernachtung auf den Backwaters von Alleppey — Palmenhaine, Reisfelder und Dorfleben vom Wasser aus",
      "Munnars Teeplantagen — sanfte grüne Hügel, eine aktive Teefabrik und Ausblicke über die Western Ghats",
      "Periyar-Tigerreservat, Thekkady — ein Spaziergang durch eine Gewürzplantage und eine Bootsfahrt auf dem Periyar-See",
      "Fort Kochi — chinesische Fischernetze, Jewish Town, portugiesische und niederländische Kolonialarchitektur in einem begehbaren Viertel",
      "Kumarakom — ein ruhigerer Aufenthalt am See zwischen Mangroven und Backwater-Kanälen",
      "Eine traditionelle Kathakali-Tanzaufführung, Kochi",
    ],
    itinerary: [
      {
        day: 1,
        title: "Ankunft in Kochi — Fort-Kochi-Rundgang",
        description:
          "Ankunft in Kochi und Transfer zu Ihrem Heritage-Hotel in Fort Kochi. Am späten Nachmittag ein Spaziergang durch das Altstadtviertel: die ikonischen chinesischen Fischernetze entlang der Uferpromenade, die St. Francis Church (eine der ältesten europäischen Kirchen Indiens), der Dutch Palace und die Gewürzlager und Antiquitätenläden von Jew Town. Am Abend eine Kathakali-Aufführung — Keralas jahrhundertealtes klassisches Tanzdrama mit aufwendigem Make-up und Kostümen.",
        overnight: "Heritage-Hotel, Fort Kochi",
        highlight: "Chinesische Fischernetze bei Sonnenuntergang — Kochis bekanntestes Bild, live erlebt",
      },
      {
        day: 2,
        title: "Kochi ganztägig — Märkte, Gewürze & der Hafen",
        description:
          "Ein entspannter Tag in Kochi: die Gewürzmärkte von Mattancherry, ein Besuch bei einem aktiven Antiquitäten- und Textillager sowie Zeit, um Fort Kochis stille Kolonialgassen im eigenen Tempo zu erkunden. Optional eine nachmittägliche Bootsfahrt durch den Hafen, um Arbeitsboote und Containerschiffe vorbeiziehen zu sehen.",
        overnight: "Heritage-Hotel, Fort Kochi",
        highlight: "Die Gewürzmärkte von Mattancherry — der Duft von Kardamom und deckenhoch gestapelten Pfeffersäcken",
      },
      {
        day: 3,
        title: "Kochi → Munnar — Hinauf in die Teehügel",
        description:
          "Fahrt hinauf in die Western Ghats nach Munnar (etwa 4 Stunden), wobei sich die Landschaft von Küstenebene zu teebewachsenen Hügeln wandelt. Unterwegs Halt an den Wasserfällen von Cheeyappara und Valara. Ankunft in Munnar am Nachmittag und Bezug Ihres Hillside-Resorts mit Blick über sanfte Teeplantagen.",
        overnight: "Hillside-Resort, Munnar",
        highlight: "Der erste Anblick von Munnars Teehügeln — grün, so weit das Auge reicht",
      },
      {
        day: 4,
        title: "Munnar ganztägig — Teefabrik, Eravikulam & Aussichtspunkte",
        description:
          "Besuch einer aktiven Teefabrik und eines Museums, um zu sehen, wie aus dem Blatt die Tasse wird, dann Fahrt zum Eravikulam-Nationalpark, Heimat des bedrohten Nilgiri-Tahrs und einiger der besten Höhenaussichten der Western Ghats. Am Nachmittag Top Station und Mattupetty-Damm für weite Panoramen über das Teeland.",
        overnight: "Hillside-Resort, Munnar",
        highlight: "Der Eravikulam-Nationalpark — Tahr, Graslandschaften und Ausblicke, die kein Ende nehmen",
      },
      {
        day: 5,
        title: "Munnar → Thekkady — Gewürzgärten & Periyar",
        description:
          "Fahrt nach Thekkady (etwa 3,5 Stunden) am Rand des Periyar-Tigerreservats. Unterwegs ein Spaziergang durch eine aktive Gewürzplantage — Kardamom, Pfeffer, Zimt und Nelken wachsen gemeinsam unter dem Waldschirm, begleitet von einem Guide, der Anbau und Ernte erklärt. Am späten Nachmittag eine Bootsfahrt auf dem Periyar-See mit der Chance, wilde Elefanten, Bisons und Vögel am Ufer zu entdecken.",
        overnight: "Boutique-Resort, Thekkady",
        highlight: "Die Bootsfahrt auf dem Periyar-See — mit etwas Glück wilde Elefanten am Ufer",
      },
      {
        day: 6,
        title: "Thekkady → Alleppey — An Bord Ihres privaten Hausboots",
        description:
          "Fahrt nach Alleppey (etwa 4 Stunden) und Einschiffung auf Ihr privates traditionelles Kettuvallam-Hausboot (Reisboot) am frühen Nachmittag. Langsame Fahrt durch die Backwaters — palmengesäumte Kanäle, Reisfelder unter dem Meeresspiegel, Dorfleben entlang der Ufer — mit allen Mahlzeiten, frisch an Bord von Ihrer privaten Crew zubereitet. Nächtlicher Ankerplatz auf einem ruhigen Wasserabschnitt.",
        overnight: "Privates Hausboot, Alleppey-Backwaters",
        highlight: "Sonnenuntergang auf den Backwaters vom Deck Ihres Hausboots",
      },
      {
        day: 7,
        title: "Alleppey-Backwaters → Kumarakom",
        description:
          "Aufwachen zum Klang von Wasser und Vogelstimmen. Eine letzte, ruhige Morgenfahrt, bevor Sie in Kumarakom von Bord gehen, einem ruhigeren Backwater-Ort am Ufer des Vembanad-Sees — Keralas größtem See —, bekannt für sein Vogelschutzgebiet und mangrovengesäumte Kanäle. Check-in in einem Lakeside-Resort für ein entspannteres Tempo nach dem Hausboot.",
        overnight: "Lakeside-Resort, Kumarakom",
        highlight: "Das Ankommen in Kumarakoms Stille nach einer Nacht auf dem Wasser",
      },
      {
        day: 8,
        title: "Kumarakom — Vogelschutzgebiet & Erholungstag",
        description:
          "Ein ruhiger Tag: ein optionaler Besuch des Kumarakom-Vogelschutzgebiets, eine Kanufahrt durch die kleineren Mangrovenkanäle oder einfach Zeit im Resort am See. Am Nachmittag Rückfahrt nach Kochi (etwa 1,5 Stunden) für Ihre letzte Nacht.",
        overnight: "Heritage-Hotel, Fort Kochi",
        highlight: "Kumarakoms Mangrovenkanäle per Kanu — die Backwaters in ihrer stillsten Form",
      },
      {
        day: 9,
        title: "Kochi — Abreise",
        description:
          "Ein letzter entspannter Morgen — ein weiterer Spaziergang an der Uferpromenade von Fort Kochi, ein letzter Filterkaffee, bevor der Transfer zum Flughafen Kochi für Ihre Abreise. Unser Team bestätigt Ihren Anschlussflug und verabschiedet Sie.",
        overnight: "—",
        highlight: "Der letzte Morgen an den chinesischen Fischernetzen, bevor es losgeht",
      },
    ],
    inclusions: [
      "8 Nächte Unterkunft: 2× Heritage-Hotel Fort Kochi + 2× Hillside-Resort Munnar + 1× Boutique-Resort Thekkady + 1× privates Hausboot Alleppey + 1× Lakeside-Resort Kumarakom + 1× Heritage-Hotel Fort Kochi (Doppelzimmer)",
      "Privates klimatisiertes Fahrzeug für alle Besichtigungen und Transfers zwischen den Städten während der gesamten Reise",
      "Privates Hausboot für einen vollen Tag und eine Übernachtung auf den Backwaters von Alleppey, alle Mahlzeiten an Bord inklusive",
      "Professioneller lizenzierter Guide in Kochi, Munnar und Thekkady",
      "Gewürzplantagen-Spaziergang, Thekkady",
      "Bootsfahrt auf dem Periyar-See",
      "Kathakali-Tanzaufführung, Kochi",
      "8 Frühstücke + 7 Abendessen (inklusive aller Mahlzeiten an Bord des Hausboots)",
      "Alle im Reiseverlauf aufgeführten Eintrittsgebühren für Denkmäler, Parks und Schutzgebiete",
      "Alle Mautgebühren, Parkkosten und Fahrerzulagen",
      "24/7 Support während der Reise — GoTrustelle-Gastgeber jederzeit erreichbar",
    ],
    exclusions: [
      "Internationale oder nationale Flüge nach/von Kochi",
      "Mittagessen außerhalb des Hausboot-Tages (Budget ₹400–700 pro Mahlzeit)",
      "Persönliche Ausgaben: Einkäufe, Trinkgelder, Getränke",
      "Optionale Aktivitäten: Ayurveda-Spa-Behandlungen, zusätzliche Kanufahrten",
      "Reise- und Krankenversicherung (dringend empfohlen)",
      "5% GST auf den gesamten Reisepreis",
    ],
    pricing: [
      { label: "Doppelzimmer — Standard (ab Kochi)", priceEUR: 1699, priceINR: 185000 },
      { label: "Doppelzimmer — Premium (ab Kochi)", priceEUR: 2099, priceINR: 228500 },
    ],
    departures: ["Individuell — Anfrage stellen"],
  },
  "golden-triangle-pushkar-varanasi": {
    title: "Goldenes Dreieck, Pushkar & Varanasi",
    subtitle: "Delhi · Agra · Jaipur · Pushkar · Varanasi — die klassische Route plus ein Wüstensee und die älteste Stadt der Welt",
    region: "Delhi, Agra, Jaipur, Pushkar & Varanasi, Nordindien",
    route: "Delhi → Agra → Jaipur → Pushkar → Delhi → Varanasi (optional) → Delhi",
    groupSize: "Max. 10 Reisende",
    difficulty: "Easy",
    summary:
      "Der Taj Mahal bei Sonnenaufgang, eine Rajput-Festung über einem See, eine 1.200 Jahre alte Stufenbrunnenanlage, tief in die Erde geschnitten, Kamele, die Dünen an einem heiligen Wüstensee durchqueren, und — für alle, die sie dazunehmen — die älteste durchgehend bewohnte Stadt der Welt. Zehn Tage, konzipiert speziell für Indien-Erstbesucher, bei denen jede Fahrtstrecke, jede Eintrittsgebühr und jede Öffnungszeit vorab geprüft wurde.",
    overview:
      "Das ist die Reiseroute, die wir am häufigsten für Erstbesucher aus Europa und Nordamerika zusammenstellen, denn sie beantwortet die Frage 'Was sollte ich in zehn Tagen wirklich sehen?', ohne zu hetzen oder zu überladen. Sie beginnt mit dem Goldenen Dreieck — Delhi, Agra, Jaipur — Indiens wichtigster Einführung, und wendet sich dann nach Südwesten nach Pushkar, einer kleinen heiligen Stadt an einem heiligen See, die die meisten Erstbesucher nie erreichen und die fast immer als Highlight der Reise bezeichnet wird. Von Pushkar aus schließt sich die Schleife zurück nach Delhi, und für Gäste, die es möchten, fliegen wir weiter nach Varanasi — der ältesten noch bewohnten Stadt der Welt, wo der Ganges zwischen der Welt der Lebenden und der Welt danach fließt. Wir bewegen uns zwischen Delhi, Agra, Jaipur und Pushkar ausschließlich in einem privaten klimatisierten Fahrzeug (mit realistischen Fahrzeiten für jeden Tag, nicht den 'optimistischen' Zahlen mancher Anbieter) und zwischen Delhi und Varanasi mit einem kurzen Inlandsflug statt einer über achtstündigen Zugfahrt — denn bei einer 10-tägigen Reise ist Ihre Zeit die knappste Ressource. Jeder Besuch eines Denkmals in dieser Reiseroute ist an seine tatsächlichen Öffnungszeiten und die aktuelle Eintrittsgebühr für ausländische Staatsangehörige angepasst — Sonnenaufgang am Taj, bevor sich die Ticketschlangen bilden, das Amber Fort vor der Mittagshitze, die Ganga Aarti zur Stunde, zu der sie wirklich zelebriert wird. Shikha oder ein GoTrustelle-Gastgeber sind durchgehend erreichbar, und die gesamte Reise ist um die Fragen herum gestaltet, die europäische und amerikanische Reisende am häufigsten stellen: Ist es sicher, was esse ich, was ziehe ich an, und wie komme ich von A nach B, ohne einen Tag im Verkehr zu verlieren.",
    highlights: [
      "Taj Mahal bei Sonnenaufgang — 30 Minuten mit dem Marmor ganz für sich allein, bevor die Menschenmengen eintreffen",
      "Amber Fort, Jaipur — eine Rajput-Hügelfestung mit verspiegelten Sälen über einem See",
      "Chand Baori, Abhaneri — die 1.200 Jahre alte Stufenbrunnenanlage, die Einheimische noch immer 'Baori ki Haveli' nennen, 3.500 perfekt symmetrische Stufen, 13 Stockwerke tief in die Erde versenkt",
      "Pushkar — eine heilige Seestadt mit 52 Ghats, dem einzigen bedeutenden Brahma-Tempel Indiens und Kamelen bei Sonnenuntergang über den Dünen",
      "Pushkar-Kamelmesse (nur Abreise 14.–23. November) — Rajasthans größtes Volksfest, Tausende Kamele, Händler und Künstler am Ufer des Sees",
      "Ganga Aarti am Dashashwamedh Ghat, Varanasi (optionale Verlängerung) — Feuer, Gesänge und Muschelhörner am Fluss, jeden einzelnen Abend seit Jahrhunderten",
      "Bootsfahrt auf dem Ganges vor Sonnenaufgang, Varanasi (optionale Verlängerung) — die Ghats tauchen aus dem Nebel auf, während die Stadt erwacht",
      "Red Fort, Qutub Minar & Humayun's Tomb, Delhi — drei UNESCO-Stätten an einem entspannten Tag",
    ],
    itinerary: [
      {
        day: 1,
        title: "Ankunft in Delhi — Willkommensessen",
        description:
          "Landung in Delhi und Transfer zu Ihrem Boutique-Hotel in einem zentralen, fußläufig erschließbaren Viertel. Nutzen Sie den Nachmittag zum Ausruhen und Ankommen — nach einem Langstreckenflug lassen wir diesen Programmpunkt bewusst offen, statt Besichtigungen einzuplanen. Am Abend ein Willkommensessen mit Ihrem GoTrustelle-Gastgeber: eine behutsame, geführte Einführung in die indische Küche (Butter Chicken, Dal Makhani, frisches Naan, ein bis zwei milde regionale Currys) mit klar erklärten vegetarischen, veganen und scharfsfreien Optionen. Dabei gehen wir auch die kommenden zehn Tage durch, beantworten erste Fragen und stellen sicher, dass jeder eine funktionierende lokale SIM- oder eSIM-Karte hat.",
        overnight: "Boutique-Hotel, Zentral-Delhi",
        highlight: "Willkommensessen — Ihre erste, sanfte Einführung in die indische Küche, ohne Überraschungen",
      },
      {
        day: 2,
        title: "Delhi Ganztagestour — Alt- und Neu-Delhi",
        description:
          "Ein ganzer Tag, der beide Gesichter der Hauptstadt zeigt, im Tempo an den Jetlag angepasst. Morgens in Alt-Delhi: das Red Fort, die Mogul-Zitadelle Shah Jahans aus dem 17. Jahrhundert (Eintritt für Ausländer ₹600; geöffnet 9:30–16:30 Uhr, montags geschlossen — wir planen die Woche entsprechend), anschließend die Jama Masjid, Indiens größte Moschee, und eine Fahrradrikscha-Fahrt durch die Gassen von Chandni Chowk. Nach dem Mittagessen Neu-Delhi: Humayun's Tomb, das Gartenmausoleum aus dem 16. Jahrhundert, das den Taj Mahal inspirierte (Eintritt für Ausländer ₹550; täglich geöffnet 6–18 Uhr), und Qutub Minar, ein 73 Meter hohes Minarett aus dem 12. Jahrhundert, umgeben von antiken Ruinen (Eintritt für Ausländer ₹550; täglich geöffnet 7–17 Uhr). Eine ruhige Vorbeifahrt am India Gate und Rashtrapati Bhavan schließt den Tag vor dem Abendessen ab.",
        overnight: "Boutique-Hotel, Zentral-Delhi",
        highlight: "Humayun's Tomb — das Bauwerk, das Shah Jahan zeigte, wie man den Taj baut",
      },
      {
        day: 3,
        title: "Delhi → Agra auf der Straße — Agra Fort & Mehtab Bagh bei Sonnenuntergang",
        description:
          "Abfahrt aus Delhi am späten Vormittag zur Fahrt nach Agra (ca. 230 km über den Yamuna Expressway, 3,5–4 Stunden im realen Verkehr — mit eingeplantem Rastplatz). Nach dem Mittagessen und dem Check-in Besuch des Agra Forts, der Mogul-Zitadelle aus rotem Sandstein, in der Shah Jahan seine letzten Jahre gefangen von seinem eigenen Sohn verbrachte und über den Fluss auf den Taj blickte (Eintritt für Ausländer ₹650, freitags ₹600; täglich geöffnet 6–18 Uhr, letzter Einlass 17:30 Uhr). Wenn sich das Licht golden färbt, geht es weiter nach Mehtab Bagh — dem Garten direkt gegenüber dem Taj Mahal — für den klassischen Sonnenuntergangsblick, ganz ohne die Menschenmassen am Monument selbst.",
        overnight: "Boutique-Hotel, Agra",
        highlight: "Der Taj Mahal vom Mehtab Bagh aus bei Sonnenuntergang — das Postkartenmotiv, fast nur für Sie",
      },
      {
        day: 4,
        title: "Taj Mahal bei Sonnenaufgang — Agra → Jaipur über die Stufenbrunnenanlage von Abhaneri",
        description:
          "Früher Start: Der Taj Mahal öffnet 30 Minuten vor Sonnenaufgang (die Ticketschalter eine Stunde davor), und diese erste halbe Stunde — weiches Licht, wenige Besucher — ist der Grund, warum wir die ganze Reise darum herum aufbauen (Eintritt für Ausländer ₹1.100, plus ₹200 für das innere Mausoleum; Kinder unter 15 Jahren frei; freitags geschlossen, in diesem Fall verschieben wir den Besuch auf den Nachmittag von Tag 3). Nach dem Frühstück Abfahrt nach Jaipur (ca. 240 km, 4,5–5 Stunden), mit einem Stopp in Abhaneri, um Chand Baori zu sehen — die 1.200 Jahre alte Stufenbrunnenanlage, die Einheimische 'Baori ki Haveli' nennen, deren 3.500 Stufen sich in perfekter geometrischer Symmetrie 13 Stockwerke tief hinabziehen (Eintritt für Ausländer ca. ₹300; täglich geöffnet 8–18 Uhr). Ankunft in Jaipur am frühen Abend und Check-in in Ihrem historischen Haveli-Hotel, der Abend steht frei für einen Bummel durch die Schmuck- und Textilstände des Johari Bazaar.",
        overnight: "Historisches Haveli-Hotel, Jaipur",
        highlight: "Chand Baori — eine 1.200 Jahre alte Stufenbrunnenanlage, die aussieht wie nichts, was Sie je gesehen haben",
      },
      {
        day: 5,
        title: "Jaipur Ganztagestour — Amber Fort, City Palace, Jantar Mantar & Hawa Mahal",
        description:
          "Morgens am Amber Fort, noch vor der Mittagshitze und den Reisebussen: eine Rajput-Hügelfestung mit verspiegelten Sälen und geschnitztem Marmor über dem Maota-See (Eintritt für Ausländer ₹500; täglich geöffnet 8–17:30 Uhr). Nach dem Mittagessen der City Palace, teilweise noch immer Wohnsitz der königlichen Familie von Jaipur (Eintritt für Ausländer ₹300, die Chandra-Mahal-Gemächer kosten extra; täglich geöffnet 9:30–17 Uhr), dann Jantar Mantar, das astronomische Observatorium Maharaja Jai Singhs II. aus dem 18. Jahrhundert mit riesigen steinernen Instrumenten (Eintritt für Ausländer ₹200; täglich geöffnet 9:30–16:30 Uhr). Zum Abschluss der Hawa Mahal, der Palast der Winde, für das klassische Foto von der Straße aus und, wer möchte, einen kurzen Besuch im Inneren (Eintritt für Ausländer ₹200; täglich geöffnet 9–17 Uhr).",
        overnight: "Historisches Haveli-Hotel, Jaipur",
        highlight: "Amber Fort im Morgenlicht — die Rajput-Welt in ihrer prächtigsten Form",
      },
      {
        day: 6,
        title: "Jaipur → Pushkar — Brahma-Tempel, die Ghats & Kamele bei Sonnenuntergang",
        description:
          "Eine angenehme Fahrt am späten Vormittag nach Pushkar (ca. 145 km, 2,5–3 Stunden). Check-in und ein Nachmittag zu Fuß: der Brahma-Tempel, einer der ganz wenigen Brahma-Tempel in ganz Indien (freier Eintritt; Schuhe aus, respektvolle Kleidung — Schultern und Knie bedeckt), und ein Spaziergang um die 52 Ghats des Pushkar-Sees, während Pilger Lichter auf dem Wasser entzünden. Wenn die Sonne sinkt, ein kurzer Kamelritt in die Dünen direkt vor der Stadt für den Sonnenuntergang über den Aravalli-Hügeln. Wer auf unserer Abreise vom 14.–23. November reist: Dieser Abend fällt mit der Pushkar-Kamelmesse zusammen — Tausende Kamele, Händler, Akrobaten und Musiker am Ufer des Sees, eines der großen Schauspiele des ländlichen Rajasthan.",
        overnight: "Historisches Gästehaus, Pushkar",
        highlight: "Kamelritt bei Sonnenuntergang über die Dünen von Pushkar",
      },
      {
        day: 7,
        title: "Pushkar → Delhi auf der Straße, dann Flug nach Varanasi",
        description:
          "Eine frühe Abfahrt aus Pushkar (ca. 400 km zurück nach Delhi, 7,5–8 Stunden auf der Straße — wir starten um 7 Uhr, um dies angenehm zu gestalten, mit einem richtigen Mittagsstopp). In Delhi Transfer direkt zum Flughafen für Ihren Anschlussflug nach Varanasi (ca. 1,5 Stunden; mehrere Abendflüge täglich). Ankunft in Varanasi und Transfer zu Ihrem historischen Hotel in der Altstadt, ausgewählt wegen seines Dachterrassen-Blicks auf den Fluss und der fußläufigen Nähe zu den Ghats. Wenn Zeit und Energie es zulassen, ein optionaler kurzer Spaziergang zum Dashashwamedh Ghat für die abendliche Ganga Aarti; andernfalls ein ruhiges Abendessen und ein früher Schlaf nach einem langen Reisetag. (Diese Varanasi-Verlängerung ist optional — Reisende, die eine kürzere Reise bevorzugen, können die Reise stattdessen an Tag 7 in Delhi beenden; siehe Reisehinweise.)",
        overnight: "Historisches Hotel, Varanasi Altstadt",
        highlight: "Landung in Varanasi bei Nacht — die Ghats, selbst nach Einbruch der Dunkelheit vom Feuer erleuchtet",
      },
      {
        day: 8,
        title: "Varanasi — Bootsfahrt vor Sonnenaufgang, Kashi Vishwanath & die Seidenweber",
        description:
          "5:30 Uhr: Ein privates Boot gleitet die Ghat-Linie entlang, während die Stadt erwacht — Pilger steigen im Halbdunkel die Stufen hinab, Rauch steigt von den Verbrennungsghats auf, das Licht färbt das Wasser erst silbern, dann golden. Zurück zum Frühstück, dann ein geführter Spaziergang zum Kashi-Vishwanath-Tempel, einem der zwölf Jyotirlinga-Schreine des Hinduismus (allgemeines Darshan ist kostenlos; ein optionales Sugam/VIP-Darshan kostet ca. ₹250 und vermeidet die Warteschlange; Tempel geöffnet 2:30–23 Uhr, Darshan-Pause von 11–12:30 Uhr). Nach dem Mittagessen Besuch im Viertel der muslimischen Weber, wo Familien seit Generationen Banarasi-Seide von Hand weben — kein Kaufdruck, nur Beobachten und Verstehen des Handwerks. Am Abend ein VIP-Platz für die Ganga Aarti am Dashashwamedh Ghat — die nächtliche Feuerzeremonie, seit Jahrhunderten zur gleichen Stunde zelebriert.",
        overnight: "Historisches Hotel, Varanasi Altstadt",
        highlight: "Ganga Aarti am Dashashwamedh Ghat — Feuer, Muschelhörner und der Fluss in der Dunkelheit",
      },
      {
        day: 9,
        title: "Sarnath, dann Abendflug zurück nach Delhi",
        description:
          "Eine morgendliche Fahrt 13 km nach Norden nach Sarnath, dem Wildpark, in dem Buddha nach seiner Erleuchtung seine erste Predigt hielt (Eintritt archäologischer Park für Ausländer ca. ₹300, Museum für Ausländer ca. ₹100, Museum freitags geschlossen; Gelände täglich geöffnet 6–18 Uhr). Die Dhamek-Stupa aus dem 5. Jahrhundert markiert noch immer die Stelle, und die Ruhe hier ist ein bewusster Kontrast zur Intensität von Varanasi. Rückkehr für einen freien Nachmittag — ein letzter Spaziergang an den Ghats, ein Kaffee auf der Dachterrasse oder einfach Ausruhen — vor einem Abendflug zurück nach Delhi (ca. 1,5 Stunden). Transfer zu einem Hotel in Flughafennähe in Delhi, um einen frühen oder nächtlichen internationalen Abflug unkompliziert zu gestalten.",
        overnight: "Hotel in der Nähe des Flughafens Delhi",
        highlight: "Dhamek-Stupa in Sarnath — an der Stelle stehen, an der Buddha vor 2.500 Jahren stand",
      },
      {
        day: 10,
        title: "Abreise",
        description:
          "Ein entspannter letzter Morgen vor dem Transfer zum internationalen Flughafen von Delhi. Unser Team bestätigt Ihre Weiterflugdetails im Voraus und bleibt erreichbar, bis Sie eingecheckt haben. Sie reisen mit dem Taj bei Sonnenaufgang, einer Stufenbrunnenanlage wie keiner zu Hause, Kamelen an einem Wüstensee und — falls Sie die Verlängerung dazugenommen haben — der ältesten Stadt der Welt, die ihr ewiges Feuer noch immer am Flussufer brennt.",
        overnight: "—",
        highlight: "Ein letzter Kaffee vor dem Flughafen — zehn Tage, verdichtet auf alles, was Sie sehen wollten",
      },
    ],
    inclusions: [
      "9 Übernachtungen: 2× Boutique-Hotel Delhi + 1× Boutique-Hotel Agra + 2× historisches Haveli-Hotel Jaipur + 1× historisches Gästehaus Pushkar + 2× historisches Hotel Varanasi + 1× Hotel in Flughafennähe Delhi (Doppelzimmer)",
      "Privates klimatisiertes Fahrzeug für alle Besichtigungen und Straßentransfers (Delhi–Agra–Jaipur–Pushkar–Delhi)",
      "Inländische Hin- und Rückflüge Delhi ↔ Varanasi",
      "Professioneller lizenzierter Guide in jeder Stadt",
      "Geführter Sonnenaufgangsbesuch am Taj Mahal",
      "Stopp an Chand Baori (Stufenbrunnenanlage Abhaneri) auf der Fahrt Agra–Jaipur",
      "Kamelritt bei Sonnenuntergang in Pushkar",
      "Private Bootsfahrt auf dem Ganges vor Sonnenaufgang, Varanasi",
      "VIP-Platzierung bei der Ganga Aarti am Dashashwamedh Ghat",
      "Geführter Besuch in Sarnath inklusive Dhamek-Stupa und Museumseintritt",
      "Besuch einer Banarasi-Seidenweberei",
      "9 Frühstücke + 8 Abendessen",
      "Alle in der Reiseroute aufgeführten Eintrittsgebühren für Denkmäler, Forts und Tempel",
      "Alle Mautgebühren, Parkgebühren und Fahrerzulagen",
      "24/7 Unterstützung während der Reise — GoTrustelle-Gastgeber durchgehend erreichbar",
    ],
    exclusions: [
      "Internationale Flüge nach/von Delhi",
      "Fotografiegenehmigung für den Taj Mahal (optional, ₹200) und Eintritt ins innere Mausoleum (₹200)",
      "Kashi Vishwanath Sugam/VIP-Darshan (optional, ca. ₹250)",
      "Mittagessen während der Reise (Budget ₹500–800 pro Mahlzeit)",
      "Persönliche Ausgaben: Einkäufe, Trinkgelder, Getränke",
      "Elefanten-/Jeep-Option am Amber Fort oder Kamel-/Jeep-Safaris über das Aufgeführte hinaus",
      "Reise- und Krankenversicherung (dringend empfohlen)",
      "5% GST auf den gesamten Paketpreis",
    ],
    pricing: [
      { label: "Doppelzimmer — Standard, mit Varanasi (ab Delhi)", priceEUR: 1899, priceINR: 206700 },
      { label: "Doppelzimmer — Premium, mit Varanasi (ab Delhi)", priceEUR: 2299, priceINR: 250400 },
      { label: "Doppelzimmer — Standard, ohne Varanasi, 7 Tage (ab Delhi)", priceEUR: 1399, priceINR: 152400 },
    ],
    departures: [
      "19. – 28. September 2026 (feste Gruppenabreise)",
      "17. – 26. Oktober 2026 (feste Gruppenabreise)",
      "14. – 23. November 2026 (feste Gruppenabreise — Pushkar-Kamelmesse-Spezial)",
      "28. November – 7. Dezember 2026 (feste Gruppenabreise)",
      "19. – 28. Dezember 2026 (feste Gruppenabreise)",
      "Individuell — Anfrage stellen",
    ],
  },
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
      { label: "Twin / Triple-Sharing (ab Shimla)", priceEUR: 2199, priceINR: 239400 },
      { label: "Twin / Triple-Sharing (ab Delhi)", priceEUR: 2499, priceINR: 272100 },
      { label: "Doppelzimmer (ab Delhi)", priceEUR: 2699, priceINR: 293800 },
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
      { label: "Deluxe (6 Personen)", priceEUR: 2099, priceINR: 228500 },
      { label: "Premium (6 Personen)", priceEUR: 2499, priceINR: 272100 },
      { label: "Royal (6 Personen)", priceEUR: 2899, priceINR: 315600 },
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
      { label: "Twin-Sharing — Premium (ab Delhi)", priceEUR: 1399, priceINR: 152300 },
      { label: "Twin-Sharing — Standard (ab Delhi)", priceEUR: 1199, priceINR: 130500 },
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
      { label: "Twin-Sharing — Deluxe (ab Leh)", priceEUR: 2199, priceINR: 239400 },
      { label: "Twin-Sharing — Premium (ab Leh)", priceEUR: 2599, priceINR: 283000 },
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
      { label: "Twin-Sharing — Deluxe (ab Leh)", priceEUR: 2199, priceINR: 239400 },
      { label: "Twin-Sharing — Premium (ab Leh)", priceEUR: 2499, priceINR: 272100 },
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
      { label: "Twin-Sharing (ab Guwahati)", priceEUR: 1899, priceINR: 206700 },
      { label: "Twin-Sharing (ab Delhi)", priceEUR: 2099, priceINR: 228500 },
    ],
    departures: ["Individuell — Anfrage stellen"],
  },
};

const journeysFrOverrides: JourneyOverrideMap = {
  "northeast-india-meghalaya": {
    title: "Inde du Nord-Est — Meghalaya & ponts vivants",
    subtitle:
      "Des ponts de racines tissés au fil des siècles, le village le plus propre d'Asie & une rivière dont on voit le fond",
    region: "Meghalaya & Assam, Inde du Nord-Est",
    route: "Delhi → Guwahati → Shillong → Cherrapunji → Nongriat → Mawlynnong → Dawki → Guwahati → Delhi",
    groupSize: "Max 10 voyageurs",
    difficulty: "Easy",
    summary:
      "Un pont vivant à deux étages, tissé par les mains des Khasis pendant plus de 500 ans. Le village le plus propre du monde, où un balai est accroché à chaque porte. Une rivière si limpide qu'on peut lire le lit depuis un bateau. L'Inde du Nord-Est est le secret le mieux gardé de l'Inde — et voici le voyage qui vous y mène.",
    overview:
      "La plupart des voyageurs en Inde ne mettent jamais les pieds dans le Nord-Est. Ce n'est pas une critique — c'est une invitation. Les États des Sept Sœurs abritent une version de l'Inde totalement différente de tout ce que l'on trouve au nord, au sud, à l'est ou à l'ouest : des cultures tribales ancestrales toujours bien vivantes, des forêts qui ruissellent de vert douze mois par an, un univers linguistique et culinaire que le reste de l'Inde connaît à peine. Ce circuit de 10 jours traverse deux des États les plus gratifiants du Nord-Est — le Meghalaya ('demeure des nuages') et un coin de l'Assam — et culmine avec ce que la plupart des voyageurs décrivent comme la chose la plus extraordinaire qu'ils aient vue en Inde : les ponts de racines vivantes à deux étages de Nongriat, où le peuple Khasi entraîne depuis plus de 500 ans les racines de figuiers-caoutchouc à travers les gorges des rivières, jusqu'à ce qu'elles fusionnent et deviennent des ponts vivants naturels capables de porter cinquante personnes à la fois. Ajoutez-y la rivière Umngot, cristalline, à Dawki (où les bateaux semblent flotter sur du verre), les cascades de Cherrapunji (le paysage le plus arrosé de la planète, dont les chutes sont les plus puissantes entre juillet et septembre), et Mawlynnong — le 'village le plus propre d'Asie', impeccablement entretenu — et vous obtenez un voyage qui ne ressemble presque en rien à l'Inde que la plupart des Européens imaginent. Petit groupe volontairement restreint, véhicule privé, et accompagnement personnalisé de bout en bout.",
    highlights: [
      "Pont de racines vivantes à deux étages, Nongriat — 500 ans de bio-ingénierie khasi, site inscrit sur la liste indicative de l'UNESCO",
      "Rivière Umngot, Dawki — une rivière si transparente que les bateaux semblent flotter dans les airs",
      "Chutes de Nohkalikai — la 4e plus haute cascade du monde, à son plein débit de juillet à septembre",
      "Mawlynnong — le village le plus propre d'Asie, avec ses passerelles suspendues et la plaine indo-bangladaise en contrebas",
      "Chutes des Sept Sœurs — sept cours d'eau parallèles se déversant du plateau du Meghalaya",
      "Grottes calcaires de Mawsmai — formations rupestres ancestrales au cœur du plateau de Cherrapunji",
      "Shillong — l''Écosse de l'Orient', une ville de collines sans équivalent en Inde",
      "Temple de Kamakhya, Guwahati — l'un des lieux de pèlerinage les plus puissants et les plus saisissants d'Inde",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → Guwahati ✈ — Porte d'entrée du Nord-Est",
        description:
          "Vol vers Guwahati (2 heures depuis Delhi) — la plus grande ville du Nord-Est et votre point d'entrée dans une Inde qui paraît totalement différente dès l'atterrissage. L'air est plus lourd, plus vert, plus humide. Transfert à l'hôtel puis, après un temps de repos, visite en soirée du temple de Kamakhya, perché sur la colline de Nilachal : l'un des temples shakta les plus importants et les plus intenses d'Inde, où affluent des pèlerins de toute l'Asie du Sud. Retour pour un dîner sur les rives du Brahmapoutre — le fleuve le plus puissant d'Inde, si large que l'on n'en voit pas l'autre rive.",
        overnight: "Hôtel-boutique, Guwahati",
        highlight: "Le temple de Kamakhya au crépuscule — ancien, saisissant, sans équivalent dans le nord de l'Inde",
      },
      {
        day: 2,
        title: "Guwahati → Lac Umiam → Shillong",
        description:
          "La route de Guwahati à Shillong (3 heures, 1 500 m de dénivelé) est l'une des plus belles du Nord-Est : elle traverse la forêt subtropicale, longe le vaste lac bleu Umiam (parfait pour un arrêt photo et un thé), puis grimpe dans les collines Khasi. Shillong — capitale du Meghalaya — est l''Écosse de l'Orient' de l'Inde : forêts de pins, centre-ville colonial et une scène musicale rock qui a produit, proportionnellement, plus de musiciens que presque toute autre ville indienne. Installation, exploration du marché local, et l'air plus frais qui s'installe.",
        overnight: "Hôtel-boutique, Shillong",
        highlight: "Point de vue du lac Umiam — le réservoir bleu encadré de collines boisées",
      },
      {
        day: 3,
        title: "Shillong — Ville, cascades & musée Don Bosco",
        description:
          "Journée complète à Shillong, à un rythme confortable. Matin : Ward's Lake (un lac d'ornement de l'époque coloniale au cœur de la ville), les chutes d'Elephant (une cascade à trois niveaux à 12 km de la ville, étonnamment spectaculaire), et la cathédrale Notre-Dame-Auxiliatrice (architecture gothique saisissante dans une forêt de pins). Après-midi : le Don Bosco Centre for Indigenous Cultures — sept étages consacrés au musée le plus complet des cultures tribales du Nord-Est indien, un monde que peu d'étrangers comprennent. Soir : le marché de Police Bazar à Shillong — street food locale, textiles tissés à la main du Meghalaya, et l'énergie particulière d'une ville qui fait les choses à sa manière.",
        overnight: "Hôtel-boutique, Shillong",
        highlight: "Musée Don Bosco — le musée culturel le plus important du Nord-Est indien",
      },
      {
        day: 4,
        title: "Shillong → Cherrapunji (Sohra) — L'endroit le plus arrosé de la planète",
        description:
          "Une heure de route vers le sud jusqu'à Cherrapunji — le plateau qui détient le record mondial des précipitations annuelles les plus élevées jamais enregistrées. En juillet-septembre, le paysage est d'une luxuriance extrême : des cascades tombent de chaque falaise, l'air est constamment frais et brumeux, et les vues vers les plaines du Bangladesh (quand les nuages se lèvent) sont infinies. Arrivée et installation. Promenade de l'après-midi jusqu'au parc de Thangkharang pour les premières vues sur le bord du plateau — et les premières chutes qui font de Cherrapunji un lieu sans équivalent en Inde.",
        overnight: "Resort-boutique, Cherrapunji",
        highlight: "Première vue sur le bord du plateau du Meghalaya — le monde sous les nuages",
      },
      {
        day: 5,
        title: "Cherrapunji — Cascades, grottes & le bord du monde",
        description:
          "Journée complète dans le paysage extraordinaire de Cherrapunji et ses environs. Chutes des Sept Sœurs — sept cours d'eau parallèles tombant du plateau sur une seule paroi (au maximum de leur puissance de juillet à septembre). Chutes de Nohkalikai — la quatrième plus haute cascade du monde, une chute unique de 340 mètres dans un bassin turquoise dont la couleur semble impossible face au vert de la vallée. Grottes de Mawsmai — un système de grottes calcaires étroit, à l'allure de cathédrale, s'enfonçant profondément dans le plateau, éclairé par des formations de calcite qui ont mis des millénaires à se former. Retour au resort pour le dîner, tandis que la brume monte depuis les plaines du Bangladesh.",
        overnight: "Resort-boutique, Cherrapunji",
        highlight: "Chutes de Nohkalikai — 340 mètres dans un bassin couleur d'eau glaciaire",
      },
      {
        day: 6,
        title: "Trek vers Nongriat — Le pont de racines vivantes à deux étages",
        description:
          "La journée que la plupart des voyageurs qualifient de plus extraordinaire de tout leur séjour en Inde. Une descente de 4,5 km (plus de 3 000 marches) à travers une forêt subtropicale dense jusqu'au village de Nongriat — une communauté accessible uniquement à pied, où le peuple Khasi entraîne depuis plus de 500 ans les racines aériennes de figuiers-caoutchouc indiens à travers les gorges des rivières, jusqu'à ce qu'elles fusionnent, s'entrelacent et deviennent des ponts naturels capables de porter des dizaines de personnes à la fois. Le pont de racines à deux étages figure sur la liste indicative du patrimoine mondial de l'UNESCO — deux ponts superposés au-dessus de la même rivière, toujours vivants et en croissance. Baignade dans le bassin rocheux naturel à proximité, déjeuner simple au village, puis remontée en fin d'après-midi. Vos jambes s'en souviendront demain. Cela en vaudra entièrement la peine.",
        overnight: "Resort-boutique, Cherrapunji",
        highlight: "Le pont de racines vivantes à deux étages — 500 ans de bio-ingénierie vivante",
      },
      {
        day: 7,
        title: "Cherrapunji → Mawlynnong → Dawki",
        description:
          "Route vers Mawlynnong — désigné village le plus propre d'Asie et devenu presque une légende dans le Nord-Est : chaque maison a un balai à sa porte, chaque sentier est balayé, l'air sent les fleurs, et la communauté entretient le village par fierté partagée plutôt que par obligation gouvernementale. Montée sur la passerelle suspendue en bambou au-dessus de la forêt, avec vue sur la plaine frontalière du Bangladesh. Puis route jusqu'à Dawki, à la frontière indo-bangladaise, où la rivière Umngot coule sur un lit de sable blanc si limpide que les bateaux à sa surface semblent flotter dans les airs, chaque galet du fond visible depuis quinze mètres de hauteur. Promenade en bateau en soirée, tandis que la lumière décline sur la rivière.",
        overnight: "Maison d'hôtes, Dawki / Shillong",
        highlight: "La rivière Umngot de Dawki — la rivière de verre où les bateaux flottent sur rien",
      },
      {
        day: 8,
        title: "Dawki → Collines Jaintia → Monolithes de Nartiang → Shillong",
        description:
          "Retour vers Shillong via les collines Jaintia — une culture meghalayaise différente de celle des Khasis, avec sa propre langue et ses propres traditions. Arrêt à Nartiang, où la plus grande collection de monolithes préhistoriques du Nord-Est se dresse dans un champ de village : d'immenses pierres charriées et érigées par les rois Jaintia en guise de mémoriaux, dont l'origine et la signification exactes restent débattues. Retour à Shillong pour un dîner et une dernière promenade au marché — dernière occasion d'acheter textiles meghalayais, miel local, et de goûter l'ambiance particulière d'une ville de montagne le soir.",
        overnight: "Hôtel-boutique, Shillong",
        highlight: "Les monolithes de Nartiang — les pierres dressées ancestrales du Nord-Est",
      },
      {
        day: 9,
        title: "Shillong → Plantation de thé → Guwahati",
        description:
          "Descente matinale depuis le plateau du Meghalaya vers les plaines de l'Assam, avec un arrêt dans une plantation de thé en activité dans les contreforts de l'Assam : promenade guidée dans les jardins, séance de dégustation avec le gérant du domaine, et une véritable tasse de thé d'Assam infusée comme il se doit — fort, rouge-doré, et sans rapport aucun avec ce qui sort d'une boîte de supermarché en Europe. Poursuite vers Guwahati pour une dernière soirée sur les rives du Brahmapoutre.",
        overnight: "Hôtel-boutique, Guwahati",
        highlight: "Plantation de thé d'Assam — la source originelle de la boisson la plus consommée au monde",
      },
      {
        day: 10,
        title: "Guwahati → Delhi ✈ — Départ",
        description:
          "Vol du matin de retour vers Delhi (2 heures). Vous quittez le Nord-Est avec des images qui ne correspondent pas à l'Inde que vous pensiez connaître : un pont fait de racines, une rivière de verre, un village où chacun balaie son propre chemin. Notre équipe vous accompagne jusqu'à l'aéroport de Guwahati.",
        overnight: "—",
        highlight: "Dernier regard sur le Brahmapoutre — l'autre grand fleuve de l'Inde",
      },
    ],
    inclusions: [
      "9 nuits d'hébergement : 1× hôtel-boutique Guwahati + 2× hôtel-boutique Shillong + 2× resort-boutique Cherrapunji + 1× maison d'hôtes Dawki + 1× hôtel-boutique Shillong + 1× hôtel-boutique Guwahati (chambre double)",
      "Véhicule privé pour toutes les visites et tous les transferts, du début à la fin",
      "Guide professionnel francophone/anglophone spécialiste de la culture et de l'écologie du Meghalaya",
      "Trek vers le pont de racines vivantes de Nongriat avec guide khasi local",
      "Promenade en bateau sur l'Umngot à Dawki",
      "Entrée et dégustation guidée dans une plantation de thé d'Assam",
      "9 petits-déjeuners + 8 dîners",
      "Tous les droits d'entrée pour les parcs, grottes et la passerelle suspendue (Mawlynnong)",
      "Tous les péages, frais de stationnement et indemnités du chauffeur",
      "Assistance 24h/24 et 7j/7 et hôte GoTrustelle pendant tout le voyage",
    ],
    exclusions: [
      "Vols aller-retour Delhi ↔ Guwahati (environ 60 à 100 € par trajet ; nous vous aidons à réserver sur demande)",
      "Déjeuners (nous recommandons des restaurants locaux du Meghalaya — budget de 300 à 500 ₹ par repas)",
      "Dépenses personnelles : achats, boissons, pourboires",
      "Assurance voyage et santé (recommandée)",
      "Toute activité optionnelle en dehors de celles listées (safari à Kaziranga disponible en option pour les voyageurs d'octobre à mars)",
      "Tout coût lié à des retards météorologiques ou à des fermetures de routes (les voyages en mousson peuvent impliquer de légers détours)",
    ],
    pricing: [
      { label: "Chambre double (depuis Guwahati)", priceEUR: 1899, priceINR: 206700 },
      { label: "Chambre double (depuis Delhi)", priceEUR: 2099, priceINR: 228500 },
    ],
    departures: ["Sur mesure — contactez-nous"],
  },
  "kerala-backwaters-escape": {
    title: "Kerala Escape",
    subtitle: "Collines de thé, jardins d'épices, une péniche privée et les backwaters du 'God's Own Country'",
    region: "Kochi, Munnar, Thekkady & Alleppey, Kerala, Sud de l'Inde",
    route: "Kochi → Munnar → Thekkady → Alleppey (péniche) → Kumarakom → Kochi",
    groupSize: "Max 10 voyageurs",
    difficulty: "Easy",
    summary:
      "Des plantations de thé vallonnées dans les nuages, une promenade parfumée à travers une plantation d'épices en activité, une nuit à glisser sur les backwaters bordés de palmiers à bord d'une péniche privée, et une ville portuaire coloniale où les carrelets chinois travaillent encore au crépuscule. Neuf jours à travers le Kerala dans toute sa richesse.",
    overview:
      "Le Kerala se surnomme lui-même 'God's Own Country', et après une semaine ici, la plupart des voyageurs ne le contredisent plus. Ce circuit de 9 jours part du quartier de Fort Kochi — églises portugaises, carrelets chinois, synagogues juives, tout cela sur quelques kilomètres carrés — pour rejoindre les collines de thé fraîches de Munnar, puis les jardins d'épices et les collines boisées de Thekkady, en bordure de la réserve de tigres de Periyar, et enfin l'eau elle-même : une nuit sur une péniche privée à travers les backwaters d'Alleppey, suivie d'un séjour plus paisible au bord du lac à Kumarakom. Le rythme du Kerala est plus lent que celui du nord, la cuisine y est exceptionnelle (noix de coco, feuilles de curry, fruits de mer frais, un vrai café filtre), et le paysage change complètement tous les deux jours. Nous voyageons en véhicule privé climatisé tout au long du circuit, choisissons des hébergements boutique et patrimoniaux, et gardons le groupe restreint.",
    highlights: [
      "Une nuit privée sur une péniche dans les backwaters d'Alleppey — palmeraies, rizières et vie villageoise vues depuis l'eau",
      "Les plantations de thé de Munnar — collines vertes vallonnées, une fabrique de thé en activité et des vues sur les Ghâts occidentaux",
      "La réserve de tigres de Periyar, Thekkady — une marche dans une plantation d'épices et une balade en bateau sur le lac Periyar",
      "Fort Kochi — carrelets chinois, Jewish Town, architecture coloniale portugaise et néerlandaise réunies dans un quartier piétonnier",
      "Kumarakom — un séjour plus tranquille au bord du lac, entre mangroves et canaux des backwaters",
      "Une représentation traditionnelle de danse Kathakali, Kochi",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrivée à Kochi — Balade patrimoniale à Fort Kochi",
        description:
          "Arrivée à Kochi et transfert vers votre hôtel patrimonial à Fort Kochi. En fin d'après-midi, visite à pied du vieux quartier : les emblématiques carrelets chinois le long du front de mer, l'église Saint-François (l'une des plus anciennes églises européennes d'Inde), le Dutch Palace, et les entrepôts d'épices et antiquaires de Jew Town. En soirée, représentation de Kathakali — le drame dansé classique du Kerala, vieux de plusieurs siècles, avec maquillage et costumes élaborés.",
        overnight: "Hôtel patrimonial, Fort Kochi",
        highlight: "Les carrelets chinois au coucher du soleil — l'image la plus emblématique de Kochi, vue en vrai",
      },
      {
        day: 2,
        title: "Kochi journée complète — Marchés, épices et le port",
        description:
          "Une journée détendue à Kochi : les marchés d'épices de Mattancherry, la visite d'un entrepôt d'antiquités et de textiles en activité, et du temps pour flâner dans les ruelles coloniales tranquilles de Fort Kochi à votre rythme. Balade en bateau optionnelle l'après-midi autour du port pour observer les bateaux de pêche et les porte-conteneurs.",
        overnight: "Hôtel patrimonial, Fort Kochi",
        highlight: "Les marchés d'épices de Mattancherry — l'odeur de la cardamome et des sacs de poivre empilés jusqu'au plafond",
      },
      {
        day: 3,
        title: "Kochi → Munnar — Vers les collines de thé",
        description:
          "Montée dans les Ghâts occidentaux jusqu'à Munnar (environ 4 heures), le paysage passant de la plaine côtière aux collines couvertes de théiers à mesure que l'on grimpe. Arrêt en route aux cascades de Cheeyappara et Valara. Arrivée à Munnar dans l'après-midi et installation dans votre resort de montagne, avec vue sur les plantations de thé vallonnées.",
        overnight: "Resort de montagne, Munnar",
        highlight: "Premier aperçu des collines de thé de Munnar — verdoyantes à perte de vue",
      },
      {
        day: 4,
        title: "Munnar journée complète — Fabrique de thé, Eravikulam et points de vue",
        description:
          "Visite d'une fabrique de thé en activité et de son musée pour voir comment la feuille devient tasse, puis route vers le parc national d'Eravikulam, refuge du tahr des Nilgiri, une espèce menacée, et l'un des plus beaux panoramas d'altitude des Ghâts occidentaux. Après-midi à Top Station et au barrage de Mattupetty pour des vues panoramiques sur le pays du thé.",
        overnight: "Resort de montagne, Munnar",
        highlight: "Le parc national d'Eravikulam — tahrs, prairies et vues à perte de vue",
      },
      {
        day: 5,
        title: "Munnar → Thekkady — Jardins d'épices et Periyar",
        description:
          "Route vers Thekkady (environ 3h30), en bordure de la réserve de tigres de Periyar. En chemin, marche dans une plantation d'épices en activité — cardamome, poivre, cannelle et clous de girofle poussant ensemble sous la canopée forestière, avec un guide qui explique la culture et la récolte de chacune. En fin d'après-midi, balade en bateau sur le lac Periyar avec une chance d'apercevoir des éléphants sauvages, des bisons et des oiseaux sur les rives.",
        overnight: "Resort boutique, Thekkady",
        highlight: "La balade en bateau sur le lac Periyar — des éléphants sauvages sur la rive, avec un peu de chance",
      },
      {
        day: 6,
        title: "Thekkady → Alleppey — Embarquement sur votre péniche privée",
        description:
          "Route vers Alleppey (environ 4 heures) et embarquement en début d'après-midi sur votre péniche traditionnelle privée kettuvallam (barge à riz). Navigation lente à travers les backwaters — canaux bordés de palmiers, rizières sous le niveau de la mer, vie villageoise le long des rives — avec tous les repas préparés frais à bord par votre équipage privé. Mouillage pour la nuit sur un tronçon d'eau tranquille.",
        overnight: "Péniche privée, backwaters d'Alleppey",
        highlight: "Le coucher de soleil sur les backwaters depuis le pont de votre péniche",
      },
      {
        day: 7,
        title: "Backwaters d'Alleppey → Kumarakom",
        description:
          "Réveil au son de l'eau et des oiseaux. Une dernière croisière matinale tranquille avant de débarquer à Kumarakom, une bourgade des backwaters plus paisible sur les rives du lac Vembanad — le plus grand lac du Kerala —, connue pour son sanctuaire ornithologique et ses canaux bordés de mangroves. Installation dans un resort au bord du lac pour un rythme plus reposant après la péniche.",
        overnight: "Resort au bord du lac, Kumarakom",
        highlight: "Le débarquement dans le calme de Kumarakom après une nuit sur l'eau",
      },
      {
        day: 8,
        title: "Kumarakom — Sanctuaire ornithologique et journée libre",
        description:
          "Une journée tranquille : visite optionnelle du sanctuaire ornithologique de Kumarakom, balade en canoë dans les petits canaux de mangrove, ou simplement du temps au resort au bord du lac. Dans l'après-midi, retour en voiture à Kochi (environ 1h30) pour votre dernière nuit.",
        overnight: "Hôtel patrimonial, Fort Kochi",
        highlight: "Les canaux de mangrove de Kumarakom en canoë — les backwaters dans leur plus grand calme",
      },
      {
        day: 9,
        title: "Kochi — Départ",
        description:
          "Une dernière matinée tranquille — une promenade de plus le long du front de mer de Fort Kochi, un dernier café filtre, avant le transfert vers l'aéroport de Kochi pour votre départ. Notre équipe confirme votre correspondance et vous accompagne jusqu'au bout.",
        overnight: "—",
        highlight: "Le dernier matin devant les carrelets chinois avant de partir",
      },
    ],
    inclusions: [
      "8 nuits d'hébergement : 2× hôtel patrimonial Fort Kochi + 2× resort de montagne Munnar + 1× resort boutique Thekkady + 1× péniche privée Alleppey + 1× resort au bord du lac Kumarakom + 1× hôtel patrimonial Fort Kochi (chambre double)",
      "Véhicule privé climatisé pour toutes les visites et les transferts inter-villes pendant tout le circuit",
      "Péniche privée pour une journée complète et une nuit sur les backwaters d'Alleppey, tous les repas à bord inclus",
      "Guide professionnel agréé à Kochi, Munnar et Thekkady",
      "Marche dans une plantation d'épices, Thekkady",
      "Balade en bateau sur le lac Periyar",
      "Représentation de danse Kathakali, Kochi",
      "8 petits-déjeuners + 7 dîners (y compris tous les repas à bord de la péniche)",
      "Tous les droits d'entrée aux monuments, parcs et sanctuaires mentionnés dans l'itinéraire",
      "Tous les péages, frais de stationnement et indemnités du chauffeur",
      "Assistance 24h/24 et 7j/7 pendant le voyage — un hôte GoTrustelle disponible en permanence",
    ],
    exclusions: [
      "Vols internationaux ou domestiques vers/depuis Kochi",
      "Déjeuners hors de la journée en péniche (budget ₹400–700 par repas)",
      "Dépenses personnelles : shopping, pourboires, boissons",
      "Activités optionnelles : soins ayurvédiques, sorties en canoë supplémentaires",
      "Assurance voyage et médicale (fortement recommandée)",
      "5% de TPS sur la valeur totale du forfait",
    ],
    pricing: [
      { label: "Chambre double — Standard (depuis Kochi)", priceEUR: 1699, priceINR: 185000 },
      { label: "Chambre double — Premium (depuis Kochi)", priceEUR: 2099, priceINR: 228500 },
    ],
    departures: ["Sur mesure — contactez-nous"],
  },
  "rishikesh-himalayan-escape": {
    title: "Rishikesh & Évasion Himalayenne",
    subtitle: "Premium · 7 jours · Une introduction douce et rassurante à l'Inde — où vous vous sentez accueilli, pas perdu",
    region: "Uttarakhand, Nord de l'Inde",
    route: "Delhi → Rishikesh → Chopta → Village himalayen → Rishikesh → Delhi",
    groupSize: "Max. 8 voyageurs",
    difficulty: "Easy",
    summary:
      "Yoga privé sur les rives du Gange, le plus haut temple de Shiva au monde, une véritable maison familiale himalayenne et une remise en forme au spa — tout cela en sept jours soigneusement conçus. La manière premium de ressentir l'Inde pour la toute première fois.",
    overview:
      "La plupart des voyageurs qui découvrent l'Inde pour la première fois arrivent avec un mélange d'excitation et d'appréhension silencieuse — les couleurs, la foule, l'inconnu. Ce voyage de 7 jours est spécialement conçu pour dissiper cette appréhension et la remplacer par quelque chose d'inattendu : un sentiment d'être chez soi. Nous avons conçu cette expérience pour les Européens qui souhaitent découvrir l'Inde à sa juste mesure, sans être submergés. Vous dormirez dans des établissements de luxe soigneusement sélectionnés, avec des lits propres, une eau chaude fiable et de l'eau potable filtrée à chaque étape. Vous voyagerez exclusivement en véhicules privés climatisés, avec des chauffeurs professionnels que nous connaissons personnellement. Vous mangerez des plats que nous avons vérifiés pour leur hygiène et leur fraîcheur. Et à chaque instant — de votre première séance de yoga sur le Gange jusqu'au moment où vous atteindrez le sommet du Chandrashila et où toute la chaîne himalayenne s'ouvrira devant vous — Shikha ou un hôte senior de GoTrustelle sera présent, non pas comme un guide touristique, mais comme une amie qui connaît très bien l'Inde. La visite du village au jour 5 est notre offre la plus chère à nos yeux : un véritable accueil d'une famille himalayenne, la cuisine partagée, les histoires autour d'un chai — l'après-midi qui vous fera complètement oublier Instagram. Ceci n'est pas un tour de l'Inde. C'est votre introduction à l'Inde qui existe au-delà de l'itinéraire.",
    highlights: [
      "VIP Ganga Aarti — positionnement intime à l'écart de la foule, le feu sur le fleuve au crépuscule",
      "Yoga privé au lever du soleil sur les rives du Gange — accessible aux débutants, profondément régénérant",
      "Sommet du Chandrashila (4 000 m) — panorama himalayen à 360° au-dessus du plus haut temple de Shiva au monde",
      "Immersion au village du jour 5 — cuisine, histoires et chai avec une véritable famille himalayenne (pas un tourisme mis en scène)",
      "Feu de camp et observation des étoiles à Chopta — sans pollution lumineuse, la Voie lactée au-dessus de vous",
      "Remise en forme au spa et guérison sonore à Rishikesh — le chapitre final parfait avant le retour",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → Rishikesh — Transfert privé & arrivée en douceur",
        description:
          "Votre chauffeur vous accueille à l'aéroport de Delhi ou à votre hôtel dans un SUV privé propre et climatisé. Le trajet de 5 à 6 heures à travers les plaines du Gange puis les contreforts des Shivaliks est votre premier aperçu de l'Inde au bon rythme — pas de bus, pas d'inconnus, juste vous et le paysage qui change. Arrivée à Rishikesh avec un cocktail de bienvenue et enregistrement dans votre établissement de luxe au bord du fleuve. La soirée est à vous : respirez l'air himalayen, écoutez le Gange, et installez-vous en douceur avec un dîner léger et raffiné (options continentales et indiennes) sur la terrasse au bord du fleuve.",
        overnight: "Hôtel de luxe au bord du fleuve, Rishikesh (Taj Rishikesh ou équivalent)",
        highlight: "Première soirée au bord du Gange — la ville qui ne ressemble jamais tout à fait à l'Inde et pourtant à rien d'autre",
      },
      {
        day: 2,
        title: "Rishikesh — Yoga, culture des cafés & VIP Ganga Aarti",
        description:
          "La matinée commence par une séance de yoga privée et guidée sur les rives du Gange — accessible aux débutants, profondément ancrante, et différente de tout cours en studio que vous avez pu suivre. Petit-déjeuner tranquille avec vue sur le fleuve, puis le reste de la matinée est à vous pour explorer la scène de cafés cachés et esthétiques de Rishikesh, les librairies et échoppes d'épices de Tapovan, et les ponts suspendus de Laxman Jhula, à votre propre rythme. L'après-midi, Shikha vous emmène dans ses endroits préférés — ceux qui ne figurent dans aucun guide touristique. Au coucher du soleil, nous prenons des places privées à Triveni Ghat pour la Ganga Aarti : des prêtres portant le feu, un millier de lampes flottantes, une musique dévotionnelle qui s'élève au-dessus du fleuve. Pas la version que les touristes observent de loin — la version que vous vivez de près, accompagnée personnellement, et pleinement présente.",
        overnight: "Hôtel de luxe au bord du fleuve, Rishikesh",
        highlight: "Yoga privé au lever du soleil + VIP Ganga Aarti au crépuscule",
      },
      {
        day: 3,
        title: "Rishikesh → Chopta — Vers les montagnes",
        description:
          "Après un petit-déjeuner tranquille, roulez vers l'est en direction du sanctuaire faunique de Kedarnath, tandis que les routes se rétrécissent et que la forêt himalayenne s'épaissit autour de vous. Le trajet de 6 à 7 heures fait partie de l'expérience — des cascades apparaissent au bord de la route, des villages s'accrochent aux collines, et l'air change sensiblement à mesure que vous montez. Arrivée à Chopta (2 680 m) — la « mini Suisse » de l'Uttarakhand — en fin d'après-midi. Votre lodge de montagne boutique est chaleureux, intime et impeccablement propre. Le dîner de ce soir est biologique et fait maison, préparé par la famille du lodge. Après le dîner, si le ciel est dégagé (ce qui est généralement le cas), le feu de camp est allumé et l'observation des étoiles commence. La Voie lactée, ici, est quelque chose que vous emportez avec vous.",
        overnight: "Éco-lodge de montagne boutique, Chopta (Himalayan Eco Lodge ou équivalent)",
        highlight: "Feu de camp, air de montagne et un ciel impossible à photographier suffisamment bien",
      },
      {
        day: 4,
        title: "Sommet du Chandrashila (4 000 m) & Temple de Tungnath — Journée signature",
        description:
          "Départ matinal pour atteindre le sommet avant la formation des nuages. La randonnée grimpe sur 3,5 km à travers une forêt de rhododendrons et de vastes prairies alpines jusqu'au temple de Tungnath — le plus haut sanctuaire de Shiva au monde, à 3 680 m, construit il y a plus de 1 000 ans. Faites une pause ici. Allumez un bâton d'encens. Laissez le silence s'installer. Puis un dernier tronçon de 1,5 km jusqu'au sommet du Chandrashila à 4 000 m, où s'ouvre dans toutes les directions le panorama complet de l'Himalaya du Garhwal : Nanda Devi, Trishul, Chaukhamba, Kedarnath. Ce moment — debout au-dessus des nuages, entouré de sommets qui ont mis des millénaires à se former — est celui que les voyageurs décrivent encore des mois plus tard. Notre guide adopte un rythme lent et confortable ; cette randonnée est tout à fait accessible aux débutants. Retour au lodge pour un déjeuner chaud, du repos, et un dîner haut de gamme.",
        overnight: "Éco-lodge de montagne boutique, Chopta",
        highlight: "Sommet à 4 000 m au-dessus des nuages — le point culminant émotionnel du voyage",
      },
      {
        day: 5,
        title: "Journée au village himalayen — Cuisine, histoires & connexion authentique",
        description:
          "C'est la journée signature de GoTrustelle — celle qui distingue ce voyage de tous les autres forfaits Inde que vous trouverez. Nous visitons un village himalayen des environs et passons une demi-journée avec une famille locale : aider à préparer un repas garhwali traditionnel sur un feu de bois, s'asseoir en tailleur dans une cour pour découvrir la vie quotidienne en montagne, écouter des histoires qui ne figurent dans aucun guide touristique. Pas d'acteurs, pas de mise en scène — juste des personnes authentiques qui ouvrent leur foyer parce que Shikha a construit ici des relations sincères au fil des années. Vous partagerez un repas qui n'aura rien de comparable à tout ce que vous goûterez ailleurs en Inde, et vous resterez probablement bien plus longtemps que ne le prévoit le programme. C'est l'après-midi dont la plupart des voyageurs disent qu'il a changé leur façon de voir le voyage.",
        overnight: "Éco-lodge de montagne boutique, Chopta (ou maison d'hôtes en cours de route)",
        highlight: "L'après-midi qui vous fait oublier Instagram",
      },
      {
        day: 6,
        title: "Chopta → Rishikesh — Remise en forme au spa & soirée de luxe",
        description:
          "Retour à Rishikesh, les montagnes encore fraîches dans le corps. Réenregistrement dans votre établissement au bord du fleuve, et l'après-midi appartient entièrement à la récupération : une séance de spa sur mesure (massage ayurvédique, aromathérapie ou massage en profondeur — à votre choix), suivie d'une guérison sonore ou d'une méditation guidée facultative si votre corps en ressent le besoin. Le dîner de ce soir est un moment de groupe élégant et détendu — Shikha se joint à vous pour célébrer la semaine autour d'un excellent repas, de rires, et de cette chaleur particulière qui ne naît qu'entre des personnes ayant partagé quelque chose de vrai.",
        overnight: "Hôtel de luxe au bord du fleuve, Rishikesh",
        highlight: "Remise en forme au spa himalayen — les montagnes qui s'apaisent dans vos muscles",
      },
      {
        day: 7,
        title: "Rishikesh → Delhi — Un départ tout en douceur",
        description:
          "Une dernière matinée tranquille : chai au bord du fleuve, une dernière promenade jusqu'au ghat. Votre véhicule privé part après le petit-déjeuner pour l'aéroport de Delhi ou un hôtel en ville (5 à 6 heures). Votre chauffeur s'occupe de vos bagages, connaît les routes et vous amène à l'heure. Si vous avez un train plutôt qu'un vol, nous organisons tout à l'avance. Vous partez avec une chose que la plupart des touristes n'ont pas : le sentiment clair et fort d'avoir compris quelque chose de ce pays — pas seulement de l'avoir vu.",
        overnight: "—",
        highlight: "Dernier chai au bord du Gange — emporter l'Inde avec vous",
      },
    ],
    inclusions: [
      "6 nuits d'hébergement de luxe et boutique : 2× hôtel premium au bord du fleuve à Rishikesh + 2× éco-lodge boutique à Chopta + 2× hôtel premium au bord du fleuve à Rishikesh (chambre double)",
      "SUV privé climatisé ou Innova Crysta pour tous les transferts (jamais de bus partagé)",
      "Chauffeur professionnel et sélectionné — le même chauffeur tout au long du voyage",
      "Séance de yoga privée et guidée sur le Gange (jour 2)",
      "Positionnement VIP pour la Ganga Aarti à Triveni Ghat — accompagné personnellement",
      "Guide de trek himalayen certifié pour la journée du sommet du Chandrashila",
      "Permis de trek pour le sommet du Chandrashila et le temple de Tungnath",
      "Expérience du village himalayen — déjeuner familial fait maison inclus (jour 5)",
      "Soirée feu de camp et observation des étoiles à Chopta",
      "Séance de spa à Rishikesh — massage ayurvédique ou en profondeur (jour 6)",
      "6 petits-déjeuners + 5 dîners (biologiques, hygiéniques, d'origine locale dans la mesure du possible)",
      "Cocktail de bienvenue à l'arrivée à Rishikesh",
      "Eau filtrée pendant tout le voyage",
      "Tous les péages, frais de stationnement et indemnités de chauffeur",
      "Assistance personnelle 24 h/24 et 7 j/7 — Shikha ou un membre senior de l'équipe GoTrustelle présent tout au long du voyage",
    ],
    exclusions: [
      "Vols internationaux ou domestiques vers/depuis Delhi",
      "Déjeuners pendant le circuit (nous recommandons des restaurants locaux de confiance — prévoir environ 8 à 12 € par repas)",
      "Activités optionnelles : rafting en eaux vives, saut à l'élastique, kayak (organisables avec supplément)",
      "Dépenses personnelles : shopping, boissons alcoolisées, pourboires",
      "Assurance voyage et médicale (fortement recommandée — une couverture d'évacuation est conseillée)",
      "Frais de photographie dans certains temples",
      "Tout coût lié à des fermetures de route, des glissements de terrain ou des retards liés à la météo (saison de la mousson en Uttarakhand)",
    ],
    pricing: [
      { label: "Chambre double — Premium (départ de Delhi)", priceEUR: 1299, priceINR: 141400 },
      { label: "Chambre double — Standard (départ de Delhi)", priceEUR: 1499, priceINR: 163200 },
    ],
    departures: ["Sur mesure — contactez-nous"],
  },
  "paradise-of-kashmir": {
    title: "Paradis du Cachemire",
    subtitle: "Balades en shikara, jardins moghols et la Prairie d'Or",
    region: "Jammu-et-Cachemire, Inde du Nord",
    route: "Srinagar → Gulmarg → Pahalgam → Sonmarg → Srinagar",
    groupSize: "Max 10 voyageurs",
    difficulty: "Easy",
    summary:
      "Glissez sur le lac Dal à bord d'un shikara sculpté à la main, flânez dans la Prairie aux Fleurs de Gulmarg et pique-niquez au bord de rivières nourries par les glaciers. La plus douce des introductions à l'Himalaya.",
    overview:
      "Le Cachemire mérite bien son surnom de 'Paradis sur Terre'. Ce circuit en groupe de 5 jours s'articule autour de trois des vallées les plus époustouflantes de l'Himalaya indien — Gulmarg, Pahalgam et Sonmarg — avec suffisamment de temps pour savourer Srinagar elle-même. Vous dormirez sur une maison flottante traditionnelle, croiserez au lever du soleil les allées couvertes de lotus du lac Dal, et vous arrêterez dans les jardins moghols qui ont inspiré des empereurs. Idéal pour les voyageurs qui découvrent l'Inde pour la première fois et pour ceux qui veulent la beauté des montagnes sans itinéraire exigeant.",
    highlights: [
      "Séjour sur une maison flottante en bois sculpté sur le lac Dal",
      "Téléphérique au-dessus des prairies alpines de Gulmarg",
      "Promenades nature le long de la rivière Lidder à Pahalgam",
      "Sonmarg — la Prairie d'Or — avec vue sur le glacier de Thajiwas",
      "Jardins moghols : Nishat Bagh, Shalimar Bagh et le temple de Shankaracharya",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrivée à Srinagar + Jardins moghols",
        description:
          "Arrivée à l'aéroport de Srinagar et transfert vers votre maison flottante sur le lac Dal. Visite l'après-midi de Nishat Bagh et Shalimar Bagh (le Jardin du Plaisir et la Demeure de Tous les Plaisirs), suivie du temple de Shankaracharya avec sa vue au coucher du soleil sur la vallée.",
        overnight: "Maison flottante de luxe sur le lac Dal",
        highlight: "Balade en shikara au coucher du soleil",
      },
      {
        day: 2,
        title: "Excursion d'une journée à Gulmarg",
        description:
          "Trajet de 53 km jusqu'à Gulmarg (2 650 m), également appelée la Prairie aux Fleurs. Montez à bord du deuxième téléphérique le plus haut du monde jusqu'à Kongdori pour des vues panoramiques sur l'Himalaya, explorez le parcours de golf (le plus haut terrain 18 trous du monde), puis retour à Srinagar en fin de journée.",
        overnight: "Hôtel de luxe / maison flottante à Srinagar",
        highlight: "Téléphérique de Gulmarg",
      },
      {
        day: 3,
        title: "Excursion d'une journée à Pahalgam",
        description:
          "Excursion d'une journée complète à Pahalgam, la 'Vallée des Bergers.' Promenades nature le long de la rivière Lidder, balades à dos de poney facultatives jusqu'à la prairie de Baisaran, et pique-nique au milieu des forêts de pins.",
        overnight: "Hôtel de luxe / maison flottante à Srinagar",
        highlight: "Promenades le long de la rivière Lidder",
      },
      {
        day: 4,
        title: "Excursion d'une journée à Sonmarg",
        description:
          "Trajet jusqu'à Sonmarg (2 750 m) — la 'Prairie d'Or.' Sommets enneigés, la rivière Sindh pleine de truites, et une balade à dos de poney facultative jusqu'au glacier de Thajiwas.",
        overnight: "Hôtel de luxe / maison flottante à Srinagar",
        highlight: "Glacier de Thajiwas",
      },
      {
        day: 5,
        title: "Départ",
        description:
          "Petit-déjeuner tranquille, dernière balade en shikara facultative, puis transfert vers l'aéroport de Srinagar pour votre vol de retour.",
        overnight: "—",
        highlight: "Dernier lever de soleil sur le lac Dal",
      },
    ],
    inclusions: [
      "4 nuits d'hébergement en chambre double (formule MAP)",
      "Tous les transferts aéroport + véhicule privé pour les visites",
      "Petit-déjeuner et dîner quotidiens",
      "Balade en shikara d'1 heure sur le lac Dal",
      "Accueil et assistance par notre représentant local à l'arrivée",
    ],
    exclusions: [
      "Vol aller-retour vers/depuis Srinagar",
      "Déjeuners pendant les journées d'excursion",
      "Frais d'entrée, billets de téléphérique (Gulmarg Gondola), balades à poney",
      "Dépenses personnelles (pourboires, blanchisserie, boissons)",
      "TPS de 5 % sur le forfait total",
    ],
    pricing: [
      { label: "Deluxe (6 pers.)", priceEUR: 1699, priceINR: 185000 },
      { label: "Premium (6 pers.)", priceEUR: 1799, priceINR: 195900 },
      { label: "Royal (6 pers.)", priceEUR: 1899, priceINR: 206700 },
    ],
    departures: ["Sur mesure — contactez-nous"],
  },
  "golden-triangle-pushkar-varanasi": {
    title: "Triangle d'Or, Pushkar & Varanasi",
    subtitle: "Delhi · Agra · Jaipur · Pushkar · Varanasi — le circuit classique, complété par un lac du désert et la plus vieille ville du monde",
    region: "Delhi, Agra, Jaipur, Pushkar & Varanasi, Inde du Nord",
    route: "Delhi → Agra → Jaipur → Pushkar → Delhi → Varanasi (optionnel) → Delhi",
    groupSize: "Max 10 voyageurs",
    difficulty: "Easy",
    summary:
      "Le Taj Mahal au lever du soleil, une forteresse rajpoute dominant un lac, un puits à degrés vieux de 1 200 ans creusé dans la terre, des chameaux traversant les dunes d'un lac sacré du désert et, pour ceux qui l'ajoutent, la plus ancienne ville habitée sans interruption au monde. Dix jours conçus spécifiquement pour les voyageurs qui découvrent l'Inde pour la première fois, avec chaque trajet, chaque tarif de monument et chaque horaire d'ouverture vérifiés à l'avance.",
    overview:
      "C'est l'itinéraire que nous construisons le plus souvent pour les voyageurs européens et nord-américains qui découvrent l'Inde, car il répond à la question 'que dois-je vraiment voir en dix jours ?' sans se presser ni tout entasser. Il commence par le Triangle d'Or — Delhi, Agra, Jaipur — l'introduction essentielle à l'Inde, puis se dirige vers le sud-ouest jusqu'à Pushkar, une petite ville sainte au bord d'un lac sacré que la plupart des premiers visiteurs n'atteignent jamais et qu'ils qualifient presque toujours de point fort du voyage. Depuis Pushkar, nous rejoignons Delhi et, pour les voyageurs qui le souhaitent, nous prenons un vol vers Varanasi — la plus ancienne ville vivante du monde, où le Gange coule entre le monde des vivants et celui de l'au-delà. Nous nous déplaçons entièrement en véhicule privé climatisé entre Delhi, Agra, Jaipur et Pushkar (avec des temps de route réalistes intégrés à chaque journée, et non les chiffres 'optimistes' de certains opérateurs), et par un court vol intérieur entre Delhi et Varanasi plutôt qu'un train de plus de 8 heures, car sur un voyage de 10 jours, votre temps est la ressource la plus précieuse. Chaque visite de monument dans cet itinéraire est programmée en fonction de ses horaires d'ouverture réels et du tarif d'entrée actuel pour les ressortissants étrangers — lever du soleil au Taj avant la formation des files d'attente, le Fort d'Amber avant la chaleur de midi, la Ganga Aarti à l'heure où elle est réellement célébrée. Shikha ou un hôte GoTrustelle reste joignable tout au long du voyage, et l'ensemble du séjour est conçu autour des questions que se posent le plus souvent les voyageurs européens et américains : est-ce sûr, que vais-je manger, comment m'habiller, et comment aller d'un point à un autre sans perdre une journée dans les embouteillages.",
    highlights: [
      "Le Taj Mahal au lever du soleil — 30 minutes avec le marbre pour vous seuls, avant l'arrivée des foules",
      "Le Fort d'Amber, Jaipur — une forteresse rajpoute perchée sur une colline, aux salles couvertes de miroirs, dominant un lac",
      "Chand Baori, Abhaneri — le puits à degrés vieux de 1 200 ans que les habitants appellent encore le 'baori ki haveli', 3 500 marches parfaitement symétriques descendant sur 13 niveaux dans le sol",
      "Pushkar — une ville sainte au bord d'un lac, 52 ghats, le seul temple important dédié à Brahma en Inde, et des chameaux au coucher du soleil sur les dunes",
      "La Foire aux chameaux de Pushkar (départ du 14 au 23 novembre uniquement) — le plus grand festival populaire du Rajasthan, des milliers de chameaux, marchands et artistes au bord du lac",
      "La Ganga Aarti à Dashashwamedh Ghat, Varanasi (extension optionnelle) — feu, chants et conques sur le fleuve, chaque soir depuis des siècles",
      "Balade en bateau sur le Gange avant l'aube, Varanasi (extension optionnelle) — les ghats émergeant de la brume tandis que la ville s'éveille",
      "Le Fort Rouge, Qutub Minar & le Tombeau d'Humayun, Delhi — trois sites classés à l'UNESCO en une journée sans précipitation",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrivée à Delhi — Dîner de bienvenue",
        description:
          "Atterrissage à Delhi et transfert vers votre hôtel-boutique dans un quartier central et accessible à pied. Profitez de l'après-midi pour vous reposer et vous acclimater — après un vol long-courrier, nous laissons volontairement ce moment libre plutôt que de programmer des visites. Le soir, un dîner de bienvenue avec votre hôte GoTrustelle : une introduction douce et guidée à la cuisine indienne (butter chicken, dal makhani, naan frais, un ou deux currys régionaux doux), avec des options végétariennes, végétaliennes et sans épices clairement expliquées. C'est aussi l'occasion de revoir ensemble les dix jours à venir, de répondre à vos premières questions et de vérifier que chacun dispose d'une carte SIM ou eSIM locale fonctionnelle.",
        overnight: "Hôtel-boutique, centre de Delhi",
        highlight: "Dîner de bienvenue — votre première, douce introduction à la cuisine indienne, sans surprise",
      },
      {
        day: 2,
        title: "Journée complète à Delhi — Delhi ancien & Delhi moderne",
        description:
          "Une journée complète couvrant les deux visages de la capitale, au rythme adapté au décalage horaire. Le matin dans le Vieux Delhi : le Fort Rouge, la citadelle moghole du XVIIe siècle de Shah Jahan (entrée étrangers ₹600 ; ouvert de 9h30 à 16h30, fermé le lundi — nous organisons la semaine en conséquence), puis la Jama Masjid, la plus grande mosquée d'Inde, et une balade en cyclo-pousse dans les ruelles de Chandni Chowk. Après le déjeuner, le New Delhi : le Tombeau d'Humayun, mausolée-jardin du XVIe siècle qui a inspiré le Taj Mahal (entrée étrangers ₹550 ; ouvert tous les jours de 6h à 18h), et Qutub Minar, un minaret de 73 mètres datant du XIIe siècle entouré de ruines anciennes (entrée étrangers ₹550 ; ouvert tous les jours de 7h à 17h). Un passage tranquille devant India Gate et le Rashtrapati Bhavan clôture la journée avant le dîner.",
        overnight: "Hôtel-boutique, centre de Delhi",
        highlight: "Le Tombeau d'Humayun — le bâtiment qui a appris à Shah Jahan comment construire le Taj",
      },
      {
        day: 3,
        title: "Delhi → Agra par la route — Le Fort d'Agra & Mehtab Bagh au coucher du soleil",
        description:
          "Départ de Delhi en fin de matinée pour la route vers Agra (environ 230 km via l'autoroute Yamuna Expressway, 3h30 à 4h dans des conditions de circulation réelles — avec un arrêt de repos prévu). Après le déjeuner et l'installation à l'hôtel, visite du Fort d'Agra, la citadelle moghole de grès rouge où Shah Jahan passa ses dernières années emprisonné par son propre fils, contemplant le Taj de l'autre côté du fleuve (entrée étrangers ₹650, ₹600 le vendredi ; ouvert tous les jours de 6h à 18h, dernière entrée à 17h30). Lorsque la lumière devient dorée, nous traversons vers Mehtab Bagh — le jardin situé juste en face du Taj Mahal — pour la vue classique du coucher de soleil, sans les foules du monument lui-même.",
        overnight: "Hôtel-boutique, Agra",
        highlight: "Le Taj Mahal vu depuis Mehtab Bagh au coucher du soleil — la photo de carte postale, presque pour vous seuls",
      },
      {
        day: 4,
        title: "Le Taj Mahal au lever du soleil — Agra → Jaipur via le puits à degrés d'Abhaneri",
        description:
          "Départ matinal : le Taj Mahal ouvre 30 minutes avant le lever du soleil (les guichets ouvrent une heure avant), et cette première demi-heure — lumière douce, foule clairsemée — est la raison pour laquelle nous construisons tout le voyage autour d'elle (entrée étrangers ₹1 100, plus ₹200 pour l'intérieur du mausolée ; gratuit pour les moins de 15 ans ; fermé tous les vendredis, auquel cas cette visite est déplacée à l'après-midi du jour 3). Après le petit-déjeuner, départ vers Jaipur (environ 240 km, 4h30 à 5h), avec une halte à Abhaneri pour voir Chand Baori — le puits à degrés vieux de 1 200 ans que les habitants appellent le 'baori ki haveli', dont les 3 500 marches descendent sur 13 niveaux en parfaite symétrie géométrique (entrée étrangers environ ₹300 ; ouvert tous les jours de 8h à 18h). Arrivée à Jaipur en début de soirée et installation dans votre hôtel-haveli historique, la soirée étant libre pour explorer les étals de bijoux et de textiles du Johari Bazaar.",
        overnight: "Hôtel-haveli historique, Jaipur",
        highlight: "Chand Baori — un puits à degrés vieux de 1 200 ans qui ne ressemble à rien de ce que vous avez déjà vu",
      },
      {
        day: 5,
        title: "Journée complète à Jaipur — Fort d'Amber, City Palace, Jantar Mantar & Hawa Mahal",
        description:
          "Le matin au Fort d'Amber, en arrivant avant la chaleur de midi et les cars de touristes : une forteresse rajpoute de collines aux salles couvertes de miroirs et de marbre sculpté, dominant le lac Maota (entrée étrangers ₹500 ; ouvert tous les jours de 8h à 17h30). Après le déjeuner, le City Palace, toujours partiellement habité par la famille royale de Jaipur (entrée étrangers ₹300, les appartements du Chandra Mahal en supplément ; ouvert tous les jours de 9h30 à 17h), puis Jantar Mantar, l'observatoire astronomique du XVIIIe siècle du maharaja Jai Singh II, avec ses immenses instruments de pierre (entrée étrangers ₹200 ; ouvert tous les jours de 9h30 à 16h30). Nous terminons par le Hawa Mahal, le Palais des Vents, pour la photo classique depuis la rue et, si vous le souhaitez, une courte visite intérieure (entrée étrangers ₹200 ; ouvert tous les jours de 9h à 17h).",
        overnight: "Hôtel-haveli historique, Jaipur",
        highlight: "Le Fort d'Amber à la lumière du matin — le monde rajpoute dans toute sa splendeur",
      },
      {
        day: 6,
        title: "Jaipur → Pushkar — Temple de Brahma, les ghats & chameaux au coucher du soleil",
        description:
          "Une route confortable en fin de matinée jusqu'à Pushkar (environ 145 km, 2h30 à 3h). Installation à l'hôtel puis après-midi à pied : le Temple de Brahma, l'un des très rares temples dédiés à Brahma dans toute l'Inde (entrée gratuite ; chaussures retirées, tenue respectueuse — épaules et genoux couverts), et une promenade autour des 52 ghats du lac de Pushkar tandis que les pèlerins allument des lampes sur l'eau. Au coucher du soleil, une courte balade à dos de chameau dans les dunes juste à l'extérieur de la ville, pour admirer le coucher de soleil sur les collines des Aravalli. Si vous voyagez sur notre départ du 14 au 23 novembre, cette soirée coïncide avec la Foire aux chameaux de Pushkar — des milliers de chameaux, marchands, acrobates et musiciens au bord du lac, l'un des grands spectacles du Rajasthan rural.",
        overnight: "Maison d'hôtes historique, Pushkar",
        highlight: "Balade à dos de chameau au coucher du soleil sur les dunes de Pushkar",
      },
      {
        day: 7,
        title: "Pushkar → Delhi par la route, puis vol vers Varanasi",
        description:
          "Départ matinal de Pushkar (environ 400 km jusqu'à Delhi, 7h30 à 8h par la route — nous partons dès 7h pour rendre ce trajet confortable, avec un véritable arrêt déjeuner). À Delhi, transfert direct à l'aéroport pour votre vol vers Varanasi (environ 1h30 ; plusieurs vols en soirée chaque jour). Arrivée à Varanasi et transfert vers votre hôtel historique dans la vieille ville, choisi pour sa vue sur le fleuve depuis le toit-terrasse et sa proximité à pied avec les ghats. Si le temps et l'énergie le permettent, une courte promenade optionnelle jusqu'à Dashashwamedh Ghat pour la Ganga Aarti du soir ; sinon, un dîner tranquille et une soirée reposante après une longue journée de voyage. (Cette extension à Varanasi est optionnelle — les voyageurs préférant un séjour plus court peuvent terminer le voyage à Delhi dès le jour 7 ; voir les conseils de voyage.)",
        overnight: "Hôtel historique, vieille ville de Varanasi",
        highlight: "Arriver à Varanasi de nuit — les ghats illuminés par le feu, même après la tombée du jour",
      },
      {
        day: 8,
        title: "Varanasi — Balade en bateau avant l'aube, Kashi Vishwanath & les tisserands de soie",
        description:
          "5h30 : un bateau privé glisse le long des ghats tandis que la ville s'éveille — les pèlerins descendent les marches dans la pénombre, la fumée s'élève des ghats de crémation, la lumière transforme l'eau, d'abord argentée puis dorée. Retour pour le petit-déjeuner, puis une visite guidée à pied du Temple de Kashi Vishwanath, l'un des douze sanctuaires Jyotirlinga de l'hindouisme (le darshan général est gratuit ; un darshan Sugam/VIP optionnel coûte environ ₹250 et permet d'éviter la file d'attente ; temple ouvert de 2h30 à 23h, avec une pause du darshan de 11h à 12h30). Après le déjeuner, visite du quartier des tisserands musulmans, où des familles tissent à la main la soie Banarasi depuis des générations — sans pression d'achat, juste pour observer et comprendre ce savoir-faire. Le soir, une place VIP pour la Ganga Aarti à Dashashwamedh Ghat — la cérémonie du feu nocturne, célébrée à la même heure depuis des siècles.",
        overnight: "Hôtel historique, vieille ville de Varanasi",
        highlight: "La Ganga Aarti à Dashashwamedh Ghat — feu, conques et le fleuve dans l'obscurité",
      },
      {
        day: 9,
        title: "Sarnath, puis vol du soir retour vers Delhi",
        description:
          "Une route matinale de 13 km au nord vers Sarnath, le parc aux daims où le Bouddha prononça son premier sermon après son éveil (entrée du site archéologique pour étrangers environ ₹300, musée pour étrangers environ ₹100, musée fermé le vendredi ; site ouvert tous les jours de 6h à 18h). Le Stupa Dhamek, datant du Ve siècle, marque toujours cet emplacement, et le calme qui y règne offre un contraste volontaire avec l'intensité de Varanasi. Retour pour un après-midi libre — une dernière promenade sur les ghats, un café sur un toit-terrasse, ou simplement du repos — avant un vol du soir retour vers Delhi (environ 1h30). Transfert vers un hôtel proche de l'aéroport de Delhi pour faciliter un départ international matinal ou de nuit.",
        overnight: "Hôtel proche de l'aéroport de Delhi",
        highlight: "Le Stupa Dhamek à Sarnath — se tenir à l'endroit où le Bouddha se trouvait il y a 2 500 ans",
      },
      {
        day: 10,
        title: "Départ",
        description:
          "Une dernière matinée tranquille avant votre transfert vers l'aéroport international de Delhi. Notre équipe confirme au préalable les détails de votre vol de retour et reste joignable jusqu'à votre enregistrement. Vous partez en gardant en mémoire le Taj au lever du soleil, un puits à degrés comme aucun autre chez vous, des chameaux sur un lac du désert et, si vous avez ajouté l'extension, la plus ancienne ville du monde, dont le feu éternel brûle toujours sur les rives du fleuve.",
        overnight: "—",
        highlight: "Un dernier café avant l'aéroport — dix jours condensés en tout ce que vous vouliez voir",
      },
    ],
    inclusions: [
      "9 nuits d'hébergement : 2× hôtel-boutique à Delhi + 1× hôtel-boutique à Agra + 2× hôtel-haveli historique à Jaipur + 1× maison d'hôtes historique à Pushkar + 2× hôtel historique à Varanasi + 1× hôtel proche de l'aéroport de Delhi (chambre double)",
      "Véhicule privé climatisé pour toutes les visites et tous les transferts routiers (Delhi–Agra–Jaipur–Pushkar–Delhi)",
      "Vols intérieurs aller-retour Delhi ↔ Varanasi",
      "Guide professionnel agréé dans chaque ville",
      "Visite guidée du Taj Mahal au lever du soleil",
      "Halte à Chand Baori (puits à degrés d'Abhaneri) sur la route Agra–Jaipur",
      "Balade à dos de chameau au coucher du soleil à Pushkar",
      "Balade en bateau privée sur le Gange avant l'aube, à Varanasi",
      "Place VIP pour la Ganga Aarti à Dashashwamedh Ghat",
      "Visite guidée de Sarnath, incluant le Stupa Dhamek et l'entrée au musée",
      "Visite d'un atelier de tissage de soie Banarasi",
      "9 petits-déjeuners + 8 dîners",
      "Tous les frais d'entrée aux monuments, forts et temples mentionnés dans l'itinéraire",
      "Tous les péages, frais de stationnement et indemnités de chauffeur",
      "Assistance 24h/24 et 7j/7 pendant le voyage — hôte GoTrustelle joignable en permanence",
    ],
    exclusions: [
      "Vols internationaux vers/depuis Delhi",
      "Permis photo pour le Taj Mahal (optionnel, ₹200) et entrée à l'intérieur du mausolée (₹200)",
      "Darshan Sugam/VIP à Kashi Vishwanath (optionnel, environ ₹250)",
      "Déjeuners pendant le circuit (budget ₹500–800 par repas)",
      "Dépenses personnelles : achats, pourboires, boissons",
      "Option éléphant/jeep au Fort d'Amber ou safaris chameau/jeep au-delà de ceux mentionnés",
      "Assurance voyage et santé (fortement recommandée)",
      "TPS de 5 % sur le montant total du forfait",
    ],
    pricing: [
      { label: "Chambre double — Standard, avec Varanasi (depuis Delhi)", priceEUR: 1899, priceINR: 206700 },
      { label: "Chambre double — Premium, avec Varanasi (depuis Delhi)", priceEUR: 2299, priceINR: 250400 },
      { label: "Chambre double — Standard, sans Varanasi, 7 jours (depuis Delhi)", priceEUR: 1399, priceINR: 152400 },
    ],
    departures: [
      "19 – 28 septembre 2026 (départ de groupe fixe)",
      "17 – 26 octobre 2026 (départ de groupe fixe)",
      "14 – 23 novembre 2026 (départ de groupe fixe — Spécial Foire aux chameaux de Pushkar)",
      "28 novembre – 7 décembre 2026 (départ de groupe fixe)",
      "19 – 28 décembre 2026 (départ de groupe fixe)",
      "Sur mesure — contactez-nous",
    ],
  },
};
const journeysEsOverrides: JourneyOverrideMap = {
  "northeast-india-meghalaya": {
    title: "Nordeste de la India — Meghalaya & puentes vivos",
    subtitle:
      "Puentes de raíces tejidos durante siglos, el pueblo más limpio de Asia & un río en el que se ve el fondo",
    region: "Meghalaya y Assam, nordeste de la India",
    route: "Delhi → Guwahati → Shillong → Cherrapunji → Nongriat → Mawlynnong → Dawki → Guwahati → Delhi",
    groupSize: "Máx. 10 viajeros",
    difficulty: "Easy",
    summary:
      "Un puente vivo de dos pisos, tejido a mano por los khasi durante más de 500 años. El pueblo más limpio del mundo, donde en cada puerta cuelga una escoba. Un río tan transparente que se puede leer el lecho desde un bote. El nordeste de la India es el secreto mejor guardado del país — y este es el viaje hacia él.",
    overview:
      "La mayoría de los viajeros que visitan la India nunca llegan al nordeste. No es una crítica — es una invitación. Los estados de las Siete Hermanas albergan una versión de la India completamente distinta a todo lo que existe en el norte, el sur, el este o el oeste: culturas tribales ancestrales todavía muy vivas, bosques que rebosan de verde los doce meses del año, un universo lingüístico y culinario que el resto de la India apenas conoce. Este circuito de 10 días recorre dos de los estados más gratificantes del nordeste — Meghalaya ('morada de las nubes') y un rincón de Assam — y culmina en lo que la mayoría de los viajeros describe como lo más extraordinario que han visto en la India: los puentes de raíces vivas de dos pisos de Nongriat, donde el pueblo khasi ha entrenado durante más de 500 años las raíces de higueras de caucho a través de los desfiladeros de los ríos, hasta que las raíces se fusionan y crecen convirtiéndose en puentes vivos naturales capaces de soportar a cincuenta personas a la vez. Sumen a esto el cristalino río Umngot en Dawki (donde los botes parecen flotar sobre cristal), las cascadas de Cherrapunji (el paisaje más lluvioso de la Tierra, cuyas caídas de agua alcanzan su máxima potencia entre julio y septiembre) y Mawlynnong — el 'pueblo más limpio de Asia', impecablemente cuidado — y obtendrán un viaje que no se parece casi en nada a la India que la mayoría de los europeos imagina. Grupo deliberadamente reducido, vehículo privado y acompañamiento personal durante todo el recorrido.",
    highlights: [
      "Puente de raíces vivas de dos pisos, Nongriat — 500 años de bioingeniería khasi, sitio en la lista indicativa de la UNESCO",
      "Río Umngot, Dawki — un río tan transparente que los botes parecen flotar en el aire",
      "Cascadas de Nohkalikai — la 4ª cascada más alta del mundo, con su máximo caudal entre julio y septiembre",
      "Mawlynnong — el pueblo más limpio de Asia, con pasarelas elevadas y las llanuras de India-Bangladés a sus pies",
      "Cascadas de las Siete Hermanas — siete corrientes paralelas que caen desde el altiplano de Meghalaya",
      "Cuevas calcáreas de Mawsmai — antiguas formaciones cavernarias en las profundidades del altiplano de Cherrapunji",
      "Shillong — la 'Escocia de Oriente', una ciudad de montaña sin parangón en la India",
      "Templo de Kamakhya, Guwahati — uno de los lugares de peregrinación más poderosos y evocadores de la India",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → Guwahati ✈ — Puerta de entrada al nordeste",
        description:
          "Vuelo a Guwahati (2 horas desde Delhi) — la ciudad más grande del nordeste y su punto de entrada a una parte de la India que se siente completamente distinta desde el momento en que se aterriza. El aire es más pesado, más verde, más húmedo. Traslado al hotel y, tras un descanso, visita vespertina al templo de Kamakhya, sobre la colina de Nilachal: uno de los templos shakti más importantes y evocadores de la India, al que llegan peregrinos de todo el sur de Asia. Regreso para cenar a orillas del Brahmaputra — el río más poderoso de la India, tan ancho que no se distingue la otra orilla.",
        overnight: "Hotel boutique, Guwahati",
        highlight: "El templo de Kamakhya al atardecer — antiguo, sobrecogedor, sin igual en el norte de la India",
      },
      {
        day: 2,
        title: "Guwahati → Lago Umiam → Shillong",
        description:
          "El trayecto de Guwahati a Shillong (3 horas, 1.500 m de ascenso) es uno de los más pintorescos del nordeste: la carretera atraviesa bosque subtropical, pasa junto al extenso y azul lago Umiam (perfecto para una parada fotográfica y un té) y sube hacia las colinas Khasi. Shillong — la capital de Meghalaya — es la 'Escocia de Oriente' de la India: bosques de pinos, un centro de época colonial y una escena musical que ha producido, per cápita, más músicos de rock que casi cualquier otra ciudad india. Instalación, paseo por el mercado local, y el fresco de la tarde que se va asentando.",
        overnight: "Hotel boutique, Shillong",
        highlight: "Mirador del lago Umiam — el embalse azul enmarcado por colinas boscosas",
      },
      {
        day: 3,
        title: "Shillong — Ciudad, cascadas y el museo Don Bosco",
        description:
          "Día completo en Shillong a un ritmo tranquilo. Mañana: Ward's Lake (un lago ornamental de época colonial en el centro de la ciudad), las cascadas de Elephant Falls (una caída de tres niveles a 12 km de la ciudad, sorprendentemente espectacular), y la catedral de María Auxiliadora (arquitectura gótica impactante en medio de un bosque de pinos). Tarde: el Don Bosco Centre for Indigenous Cultures — siete plantas dedicadas al museo más completo sobre las culturas tribales del nordeste de la India, un mundo que pocos foráneos comprenden. Noche: el mercado de Police Bazar en Shillong — comida callejera local, textiles tejidos a mano de Meghalaya, y la energía particular de una ciudad que hace las cosas a su manera.",
        overnight: "Hotel boutique, Shillong",
        highlight: "Museo Don Bosco — el museo cultural más importante del nordeste de la India",
      },
      {
        day: 4,
        title: "Shillong → Cherrapunji (Sohra) — El lugar más lluvioso de la Tierra",
        description:
          "Una hora de carretera hacia el sur hasta Cherrapunji — el altiplano que ostenta el récord mundial de mayor precipitación anual registrada. Entre julio y septiembre el paisaje alcanza una exuberancia extrema: las cascadas caen de cada acantilado, el aire es fresco y neblinoso de forma permanente, y las vistas hacia las llanuras de Bangladés (cuando las nubes se despejan) son interminables. Llegada e instalación. Paseo por la tarde hasta el parque Thangkharang para las primeras vistas del borde del altiplano — y el inicio de las cascadas que hacen de Cherrapunji un lugar sin igual en la India.",
        overnight: "Resort boutique, Cherrapunji",
        highlight: "Primera vista del borde del altiplano de Meghalaya — el mundo bajo las nubes",
      },
      {
        day: 5,
        title: "Cherrapunji — Cascadas, cuevas y el borde del mundo",
        description:
          "Día completo en el extraordinario paisaje de Cherrapunji y sus alrededores. Cascadas de las Siete Hermanas — siete corrientes paralelas que caen del altiplano en una única pared de agua (en su máxima potencia entre julio y septiembre). Cascadas de Nohkalikai — la cuarta cascada más alta del mundo, una caída única de 340 metros hasta una poza turquesa cuyo color parece imposible frente al verde del valle. Cuevas de Mawsmai — un estrecho sistema de cuevas calcáreas, de aire catedralicio, que se adentra profundamente en el altiplano, iluminado por formaciones de calcita que tardaron milenios en formarse. Regreso al resort para cenar mientras la niebla avanza desde las llanuras de Bangladés.",
        overnight: "Resort boutique, Cherrapunji",
        highlight: "Cascadas de Nohkalikai — 340 metros hasta una poza del color del agua glaciar",
      },
      {
        day: 6,
        title: "Caminata a Nongriat — El puente de raíces vivas de dos pisos",
        description:
          "El día que la mayoría de los viajeros describe como el más extraordinario de todo su viaje por la India. Un descenso de 4,5 km (más de 3.000 escalones) a través de un denso bosque subtropical hasta el pueblo de Nongriat — una comunidad accesible solo a pie, donde el pueblo khasi ha entrenado durante más de 500 años las raíces aéreas de higueras de caucho indias a través de los desfiladeros de los ríos, hasta que se fusionan, se entrelazan y crecen convirtiéndose en puentes naturales capaces de soportar a decenas de personas a la vez. El puente de raíces de dos pisos figura en la lista indicativa de Patrimonio Mundial de la UNESCO — dos puentes superpuestos sobre el mismo río, todavía vivos y en crecimiento. Un baño en la poza natural cercana, un almuerzo sencillo en el pueblo y la subida de regreso a última hora de la tarde. Sus piernas lo notarán al día siguiente. Habrá merecido la pena por completo.",
        overnight: "Resort boutique, Cherrapunji",
        highlight: "El puente de raíces vivas de dos pisos — 500 años de bioingeniería viva",
      },
      {
        day: 7,
        title: "Cherrapunji → Mawlynnong → Dawki",
        description:
          "Carretera hasta Mawlynnong — designado el pueblo más limpio de Asia y convertido en toda una leyenda en el nordeste: cada casa tiene una escoba en la puerta, cada sendero está barrido, el aire huele a flores, y la comunidad mantiene el pueblo por orgullo compartido, no por mandato gubernamental. Subida a la pasarela elevada de bambú sobre el bosque, con vistas a la llanura fronteriza de Bangladés. Después, carretera hasta Dawki, en la frontera entre India y Bangladés, donde el río Umngot fluye sobre un lecho de arena blanca tan limpio que los botes en la superficie parecen flotar en el aire, con cada piedra del fondo visible desde quince metros de altura. Un paseo en bote al atardecer, mientras la luz se apaga sobre el río.",
        overnight: "Casa de huéspedes, Dawki / Shillong",
        highlight: "El río Umngot de Dawki — el río de cristal donde los botes flotan sobre la nada",
      },
      {
        day: 8,
        title: "Dawki → Colinas Jaintia → Monolitos de Nartiang → Shillong",
        description:
          "Regreso hacia Shillong pasando por las colinas Jaintia — una cultura de Meghalaya distinta a la khasi, con su propia lengua y tradiciones. Parada en Nartiang, donde se encuentra la mayor colección de monolitos prehistóricos del nordeste, erguidos en el campo de un pueblo: enormes piedras trasladadas y levantadas por los reyes jaintia como memoriales, cuyo verdadero origen y significado todavía se debate. Llegada a Shillong para una cena vespertina y un último paseo por el mercado — última oportunidad para textiles de Meghalaya, miel local y el sabor particular de una ciudad de montaña por la noche.",
        overnight: "Hotel boutique, Shillong",
        highlight: "Los monolitos de Nartiang — las piedras erguidas ancestrales del nordeste",
      },
      {
        day: 9,
        title: "Shillong → Plantación de té → Guwahati",
        description:
          "Descenso matutino desde el altiplano de Meghalaya de vuelta a las llanuras de Assam, con una parada en una plantación de té en funcionamiento en las estribaciones de Assam, con un paseo guiado por los jardines, una sesión de cata con el gerente de la finca, y una auténtica taza de té de Assam preparada como debe ser — fuerte, de color rojo dorado, y sin nada que ver con lo que sale de una caja de supermercado en Europa. Continuación hasta Guwahati para una última tarde junto al Brahmaputra.",
        overnight: "Hotel boutique, Guwahati",
        highlight: "Plantación de té de Assam — el origen de la bebida más consumida del mundo",
      },
      {
        day: 10,
        title: "Guwahati → Delhi ✈ — Salida",
        description:
          "Vuelo matutino de regreso a Delhi (2 horas). Dejará el nordeste con imágenes que no encajan con la India que creía conocer: un puente hecho de raíces, un río de cristal, un pueblo donde cada uno barre su propio camino. Nuestro equipo lo despide en el aeropuerto de Guwahati.",
        overnight: "—",
        highlight: "Última mirada al Brahmaputra — el otro gran río de la India",
      },
    ],
    inclusions: [
      "9 noches de alojamiento: 1× hotel boutique en Guwahati + 2× hotel boutique en Shillong + 2× resort boutique en Cherrapunji + 1× casa de huéspedes en Dawki + 1× hotel boutique en Shillong + 1× hotel boutique en Guwahati (habitación doble)",
      "Vehículo privado para todas las visitas y traslados durante todo el recorrido",
      "Guía profesional de habla inglesa con experiencia en la cultura y la ecología de Meghalaya",
      "Caminata al puente de raíces vivas de Nongriat con guía khasi local",
      "Paseo en bote por el río Umngot en Dawki",
      "Entrada y sesión de cata guiada en una plantación de té de Assam",
      "9 desayunos + 8 cenas",
      "Todas las tarifas de entrada a parques, cuevas y la pasarela elevada (Mawlynnong)",
      "Todos los peajes, aparcamientos y dietas del conductor",
      "Asistencia 24/7 y anfitrión de GoTrustelle durante todo el viaje",
    ],
    exclusions: [
      "Vuelos de ida y vuelta Delhi ↔ Guwahati (aprox. 60–100 € por tramo; le ayudamos con la reserva si lo solicita)",
      "Almuerzos (recomendamos restaurantes locales de Meghalaya — presupuesto de ₹300–500 por comida)",
      "Gastos personales: compras, bebidas, propinas",
      "Seguro de viaje y médico (recomendado)",
      "Cualquier actividad opcional adicional a las indicadas (safari en Kaziranga disponible como extra para viajeros de octubre a marzo)",
      "Cualquier coste derivado de retrasos meteorológicos o cierres de carreteras (los viajes en temporada de monzón pueden implicar pequeños desvíos)",
    ],
    pricing: [
      { label: "Habitación doble (desde Guwahati)", priceEUR: 1899, priceINR: 206700 },
      { label: "Habitación doble (desde Delhi)", priceEUR: 2099, priceINR: 228500 },
    ],
    departures: ["Personalizable — contáctanos"],
  },
  "kerala-backwaters-escape": {
    title: "Kerala Escape",
    subtitle: "Colinas de té, jardines de especias, una casa flotante privada y los backwaters del 'God's Own Country'",
    region: "Kochi, Munnar, Thekkady y Alleppey, Kerala, sur de la India",
    route: "Kochi → Munnar → Thekkady → Alleppey (casa flotante) → Kumarakom → Kochi",
    groupSize: "Máximo 10 viajeros",
    difficulty: "Easy",
    summary:
      "Plantaciones de té onduladas entre las nubes, un paseo perfumado por una plantación de especias en pleno funcionamiento, una noche navegando por los backwaters bordeados de palmeras en una casa flotante privada, y una ciudad portuaria colonial donde las redes de pesca chinas todavía trabajan al atardecer. Nueve días recorriendo Kerala en toda su plenitud.",
    overview:
      "Kerala se autodenomina 'God's Own Country', y tras una semana aquí la mayoría de los viajeros dejan de discutirlo. Este circuito de 9 días parte del barrio de Fort Kochi — iglesias portuguesas, redes de pesca chinas, sinagogas judías, todo en pocos kilómetros cuadrados — para subir a las frescas colinas de té de Munnar, cruzar a los jardines de especias y colinas boscosas de Thekkady, en el borde de la reserva de tigres de Periyar, y finalmente llegar al agua misma: una noche en una casa flotante privada por los backwaters de Alleppey, seguida de una estancia más tranquila junto al lago en Kumarakom. El ritmo de Kerala es más pausado que el del norte, la comida es extraordinaria (coco, hojas de curry, marisco recién pescado, un café de filtro como debe ser), y el paisaje cambia por completo cada dos días. Viajamos en vehículo privado con aire acondicionado durante todo el recorrido, elegimos alojamientos boutique y patrimoniales, y mantenemos el grupo reducido.",
    highlights: [
      "Una noche privada en casa flotante por los backwaters de Alleppey — palmerales, arrozales y vida de pueblo vistos desde el agua",
      "Las plantaciones de té de Munnar — colinas verdes onduladas, una fábrica de té en funcionamiento y vistas sobre los Ghats Occidentales",
      "La reserva de tigres de Periyar, Thekkady — una caminata por una plantación de especias y un paseo en barco por el lago Periyar",
      "Fort Kochi — redes de pesca chinas, Jewish Town, arquitectura colonial portuguesa y holandesa reunidas en un barrio para recorrer a pie",
      "Kumarakom — una estancia más tranquila junto al lago, entre manglares y canales de los backwaters",
      "Una representación tradicional de danza Kathakali, Kochi",
    ],
    itinerary: [
      {
        day: 1,
        title: "Llegada a Kochi — Paseo patrimonial por Fort Kochi",
        description:
          "Llegada a Kochi y traslado a su hotel patrimonial en Fort Kochi. A última hora de la tarde, un recorrido a pie por el casco antiguo: las icónicas redes de pesca chinas junto al malecón, la iglesia de San Francisco (una de las más antiguas iglesias europeas de la India), el Dutch Palace y los almacenes de especias y anticuarios de Jew Town. Por la noche, una representación de Kathakali — el drama dancístico clásico de Kerala, con siglos de historia, maquillaje elaborado y vestuario espectacular.",
        overnight: "Hotel patrimonial, Fort Kochi",
        highlight: "Las redes de pesca chinas al atardecer — la imagen más icónica de Kochi, en persona",
      },
      {
        day: 2,
        title: "Kochi día completo — Mercados, especias y el puerto",
        description:
          "Un día relajado en Kochi: los mercados de especias de Mattancherry, la visita a un almacén de antigüedades y textiles en funcionamiento, y tiempo para pasear por los tranquilos callejones coloniales de Fort Kochi a su propio ritmo. Paseo en barco opcional por la tarde alrededor del puerto para ver pasar los barcos pesqueros y los buques portacontenedores.",
        overnight: "Hotel patrimonial, Fort Kochi",
        highlight: "Los mercados de especias de Mattancherry — el aroma del cardamomo y los sacos de pimienta apilados hasta el techo",
      },
      {
        day: 3,
        title: "Kochi → Munnar — Hacia las colinas de té",
        description:
          "Ascenso por los Ghats Occidentales hasta Munnar (aproximadamente 4 horas), con el paisaje cambiando de la llanura costera a laderas cubiertas de té a medida que se sube. Parada en el camino en las cascadas de Cheeyappara y Valara. Llegada a Munnar por la tarde e instalación en su resort de montaña, con vistas sobre las onduladas plantaciones de té.",
        overnight: "Resort de montaña, Munnar",
        highlight: "La primera vista de las colinas de té de Munnar — verde en todas direcciones",
      },
      {
        day: 4,
        title: "Munnar día completo — Fábrica de té, Eravikulam y miradores",
        description:
          "Visita a una fábrica de té en funcionamiento y su museo para ver cómo la hoja se convierte en taza, seguida de una ruta al parque nacional de Eravikulam, hogar del tahr de Nilgiri, en peligro de extinción, y de algunas de las mejores vistas de altitud de los Ghats Occidentales. Por la tarde, Top Station y la presa de Mattupetty para panorámicas amplias sobre el país del té.",
        overnight: "Resort de montaña, Munnar",
        highlight: "El parque nacional de Eravikulam — tahrs, praderas y vistas hasta donde alcanza el ojo",
      },
      {
        day: 5,
        title: "Munnar → Thekkady — Jardines de especias y Periyar",
        description:
          "Ruta hacia Thekkady (aproximadamente 3,5 horas), en el borde de la reserva de tigres de Periyar. En el camino, caminata por una plantación de especias en funcionamiento — cardamomo, pimienta, canela y clavo crecen juntos bajo el dosel del bosque, con un guía que explica cómo se cultiva y cosecha cada una. A última hora de la tarde, un paseo en barco por el lago Periyar con posibilidad de avistar elefantes salvajes, bisontes y aves en la orilla.",
        overnight: "Resort boutique, Thekkady",
        highlight: "El paseo en barco por el lago Periyar — elefantes salvajes en la orilla, si hay suerte",
      },
      {
        day: 6,
        title: "Thekkady → Alleppey — Embarque en su casa flotante privada",
        description:
          "Ruta hacia Alleppey (aproximadamente 4 horas) y embarque a primera hora de la tarde en su casa flotante tradicional privada kettuvallam (barcaza de arroz). Navegación lenta por los backwaters — canales bordeados de palmeras, arrozales bajo el nivel del mar, vida de pueblo desplegándose en las orillas — con todas las comidas preparadas frescas a bordo por su tripulación privada. Amarre nocturno en un tramo tranquilo de agua.",
        overnight: "Casa flotante privada, backwaters de Alleppey",
        highlight: "La puesta de sol sobre los backwaters desde la cubierta de su casa flotante",
      },
      {
        day: 7,
        title: "Backwaters de Alleppey → Kumarakom",
        description:
          "Despertar al sonido del agua y las aves. Un último crucero matutino tranquilo antes de desembarcar en Kumarakom, un pueblo de los backwaters más tranquilo a orillas del lago Vembanad — el lago más grande de Kerala —, conocido por su santuario de aves y sus canales bordeados de manglares. Registro en un resort a orillas del lago para un ritmo más descansado tras la casa flotante.",
        overnight: "Resort junto al lago, Kumarakom",
        highlight: "El desembarco en la quietud de Kumarakom tras una noche en el agua",
      },
      {
        day: 8,
        title: "Kumarakom — Santuario de aves y día de descanso",
        description:
          "Un día tranquilo: una visita opcional al santuario de aves de Kumarakom, un paseo en canoa por los canales de manglar más pequeños, o simplemente tiempo en el resort junto al lago. Por la tarde, regreso en coche a Kochi (aproximadamente 1,5 horas) para su última noche.",
        overnight: "Hotel patrimonial, Fort Kochi",
        highlight: "Los canales de manglar de Kumarakom en canoa — los backwaters en su momento más tranquilo",
      },
      {
        day: 9,
        title: "Kochi — Salida",
        description:
          "Una última mañana relajada — un paseo más por el malecón de Fort Kochi, un último café de filtro, antes del traslado al aeropuerto de Kochi para su salida. Nuestro equipo confirma su conexión y le acompaña hasta el final.",
        overnight: "—",
        highlight: "La última mañana junto a las redes de pesca chinas antes de partir",
      },
    ],
    inclusions: [
      "8 noches de alojamiento: 2× hotel patrimonial Fort Kochi + 2× resort de montaña Munnar + 1× resort boutique Thekkady + 1× casa flotante privada Alleppey + 1× resort junto al lago Kumarakom + 1× hotel patrimonial Fort Kochi (habitación doble)",
      "Vehículo privado con aire acondicionado para todas las visitas y traslados entre ciudades durante todo el recorrido",
      "Casa flotante privada para un día completo y una noche en los backwaters de Alleppey, todas las comidas a bordo incluidas",
      "Guía profesional autorizado en Kochi, Munnar y Thekkady",
      "Caminata por una plantación de especias, Thekkady",
      "Paseo en barco por el lago Periyar",
      "Representación de danza Kathakali, Kochi",
      "8 desayunos + 7 cenas (incluidas todas las comidas a bordo de la casa flotante)",
      "Todas las entradas a monumentos, parques y santuarios indicadas en el itinerario",
      "Todos los peajes, aparcamientos y dietas del conductor",
      "Asistencia 24/7 durante el viaje — anfitrión de GoTrustelle disponible en todo momento",
    ],
    exclusions: [
      "Vuelos internacionales o domésticos hacia/desde Kochi",
      "Almuerzos fuera del día de la casa flotante (presupuesto ₹400–700 por comida)",
      "Gastos personales: compras, propinas, bebidas",
      "Actividades opcionales: tratamientos de spa ayurvédico, paseos en canoa adicionales",
      "Seguro de viaje y médico (muy recomendable)",
      "5% de GST sobre el valor total del paquete",
    ],
    pricing: [
      { label: "Habitación doble — Estándar (desde Kochi)", priceEUR: 1699, priceINR: 185000 },
      { label: "Habitación doble — Premium (desde Kochi)", priceEUR: 2099, priceINR: 228500 },
    ],
    departures: ["Personalizable — contáctanos"],
  },
  "rishikesh-himalayan-escape": {
    title: "Rishikesh y Escapada Himalaya",
    subtitle: "Premium · 7 días · Una introducción suave y segura a la India — donde te sientes bienvenido, no perdido",
    region: "Uttarakhand, Norte de la India",
    route: "Delhi → Rishikesh → Chopta → Aldea del Himalaya → Rishikesh → Delhi",
    groupSize: "Máximo 8 viajeros",
    difficulty: "Easy",
    summary:
      "Yoga privado a orillas del Ganges, el templo de Shiva más alto del mundo, un auténtico hogar familiar del Himalaya y una puesta a punto en el spa — todo en siete días cuidadosamente diseñados. La forma premium de sentir la India por primera vez.",
    overview:
      "La mayoría de los viajeros que llegan a la India por primera vez lo hacen con una mezcla de entusiasmo y una silenciosa aprensión — los colores, las multitudes, lo desconocido. Este viaje de 7 días está diseñado específicamente para disolver esa aprensión y sustituirla por algo que no esperarás: una sensación de estar en casa. Hemos creado esta experiencia para europeos que quieren conocer la India en sus propios términos, sin abrumarse. Dormirás en alojamientos de lujo seleccionados a mano, con camas limpias, agua caliente fiable y agua potable filtrada en cada parada. Viajarás exclusivamente en vehículos privados con aire acondicionado y conductores profesionales que conocemos personalmente. Comerás alimentos que hemos verificado en cuanto a higiene y frescura. Y a lo largo de todo el viaje — desde tu primera sesión de yoga en el Ganges hasta el momento en que alcances la cumbre del Chandrashila y toda la cordillera del Himalaya se abra ante ti — Shikha o un anfitrión senior de GoTrustelle estará presente, no como guía turístico, sino como una amiga que resulta conocer muy bien la India. La visita a la aldea del día 5 es nuestra propuesta más preciada: una auténtica bienvenida de una familia del Himalaya, cocinar juntos, historias junto al chai — la tarde que te hace olvidar Instagram por completo. Esto no es un recorrido por la India. Es tu introducción a la India que existe más allá del itinerario.",
    highlights: [
      "VIP Ganga Aarti — posición íntima alejada de las multitudes, fuego sobre el río al atardecer",
      "Yoga privado al amanecer en las orillas del Ganges — apto para principiantes, profundamente reconfortante",
      "Cumbre del Chandrashila (4.000 m) — panorama himalayo de 360° sobre el templo de Shiva más alto del mundo",
      "Inmersión en la aldea del día 5 — cocina, historias y chai con una auténtica familia del Himalaya (no turismo escenificado)",
      "Hoguera y observación de estrellas en Chopta — sin contaminación luminosa, la Vía Láctea sobre tu cabeza",
      "Puesta a punto con spa y sanación con sonidos en Rishikesh — el cierre perfecto antes de volver a casa",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → Rishikesh — Traslado privado y llegada suave",
        description:
          "Tu conductor te recibe en el aeropuerto de Delhi o en tu hotel en un SUV privado limpio y con aire acondicionado. El viaje de 5 a 6 horas a través de las llanuras del Ganges y hacia las estribaciones de Shivalik es tu primer contacto con la India al ritmo adecuado — sin autobuses, sin desconocidos, solo tú y el paisaje cambiante. Llegada a Rishikesh con una bebida de bienvenida y check-in en tu alojamiento de lujo a orillas del río. La tarde es tuya: respira el aire del Himalaya, escucha el Ganges, y relájate poco a poco con una cena ligera y cuidada (opciones continentales e indias) en la terraza junto al río.",
        overnight: "Hotel de lujo a orillas del río, Rishikesh (Taj Rishikesh o equivalente)",
        highlight: "Primera tarde junto al Ganges — la ciudad que nunca se siente del todo como la India y, sin embargo, no se parece a nada más",
      },
      {
        day: 2,
        title: "Rishikesh — Yoga, cultura de cafés y VIP Ganga Aarti",
        description:
          "La mañana comienza con una sesión de yoga privada y guiada a orillas del Ganges — apta para principiantes, profundamente enraizante y distinta de cualquier clase de estudio a la que hayas asistido. Desayuno tranquilo con vistas al río, y el resto de la mañana es tuyo para explorar la escena de cafés escondidos de Rishikesh, las librerías y puestos de especias de Tapovan, y los puentes colgantes de Laxman Jhula a tu propio ritmo. Por la tarde, Shikha te lleva a sus lugares favoritos — los que no aparecen en las guías. Cuando el sol se pone, ocupamos posiciones privadas en Triveni Ghat para la Ganga Aarti: sacerdotes portando fuego, mil lámparas flotantes, música devocional que se eleva sobre el río. No la versión que los turistas ven desde lejos, sino la que vives de cerca, acompañado personalmente y plenamente presente.",
        overnight: "Hotel de lujo a orillas del río, Rishikesh",
        highlight: "Yoga privado al amanecer + VIP Ganga Aarti al atardecer",
      },
      {
        day: 3,
        title: "Rishikesh → Chopta — Hacia las montañas",
        description:
          "Tras un desayuno relajado, conduce hacia el este, hasta el Santuario de Vida Salvaje de Kedarnath, mientras las carreteras se estrechan y el bosque himalayo se espesa a tu alrededor. El trayecto de 6 a 7 horas forma parte de la experiencia — aparecen cascadas junto a la carretera, aldeas aferradas a las colinas, y el aire cambia visiblemente a medida que asciendes. Llegada a Chopta (2.680 m) — la 'mini Suiza' de Uttarakhand — al atardecer. Tu boutique lodge de montaña es cálido, íntimo e impecablemente limpio. La cena de esta noche es orgánica y casera, preparada por la familia del lodge. Después de la cena, si el cielo está despejado (lo cual suele ser habitual), se encenderá la hoguera y comenzará la observación de estrellas. La Vía Láctea aquí es algo que te llevarás a casa.",
        overnight: "Ecolodge boutique de montaña, Chopta (Himalayan Eco Lodge o equivalente)",
        highlight: "Hoguera, aire de montaña y un cielo imposible de fotografiar lo suficientemente bien",
      },
      {
        day: 4,
        title: "Cumbre del Chandrashila (4.000 m) y Templo de Tungnath — Día estrella",
        description:
          "Salida temprana para alcanzar la cumbre antes de que se formen las nubes. La caminata asciende 3,5 km a través de un bosque de rododendros y amplios prados alpinos hasta el Templo de Tungnath — el santuario de Shiva más alto del mundo, a 3.680 m, construido hace más de 1.000 años. Detente aquí. Enciende una vara de incienso. Deja que el silencio se asiente. Luego, un último tramo de 1,5 km hasta la cumbre del Chandrashila, a 4.000 m, donde se abre en todas direcciones el panorama completo del Himalaya de Garhwal: Nanda Devi, Trishul, Chaukhamba, Kedarnath. Este momento — de pie sobre las nubes, rodeado de picos que tardaron milenios en formarse — es el que los viajeros describen meses después. Nuestro guía marca un ritmo lento y cómodo; esta caminata es totalmente manejable para principiantes. Regreso al lodge para un almuerzo caliente, descanso y una cena de categoría superior.",
        overnight: "Ecolodge boutique de montaña, Chopta",
        highlight: "Cumbre a 4.000 m sobre las nubes — el punto culminante emocional del viaje",
      },
      {
        day: 5,
        title: "Día en la aldea del Himalaya — Cocina, historias y conexión real",
        description:
          "Este es el día estrella de GoTrustelle — el que distingue este viaje de cualquier otro paquete de la India que encuentres. Visitamos una aldea del Himalaya cercana y pasamos media jornada con una familia local: ayudando a cocinar una comida garhwali tradicional al fuego de leña, sentados con las piernas cruzadas en un patio aprendiendo sobre la vida diaria en la montaña, escuchando historias que no aparecen en ninguna guía. Sin actores, sin representaciones escenificadas — solo personas reales que abren su hogar porque Shikha ha construido relaciones genuinas aquí durante años. Compartirás una comida que no se parece a nada más que probarás en la India, y probablemente te quedarás mucho más tiempo del que marca el programa. Esta es la tarde de la que la mayoría de los viajeros dicen que cambió por completo su forma de ver los viajes.",
        overnight: "Ecolodge boutique de montaña, Chopta (o casa de huéspedes en el camino)",
        highlight: "La tarde que te hace olvidar Instagram",
      },
      {
        day: 6,
        title: "Chopta → Rishikesh — Puesta a punto en el spa y noche de lujo",
        description:
          "Regreso a Rishikesh con las montañas todavía frescas en el cuerpo. Nuevo check-in en tu alojamiento a orillas del río, y la tarde pertenece por completo a la recuperación: una sesión de spa personalizada (masaje ayurvédico, aromaterapia o de tejido profundo — tú eliges), seguida de sanación con sonidos o meditación guiada opcional, si tu cuerpo lo pide. La cena de esta noche es un evento de grupo elegante y relajado — Shikha se une para celebrar la semana con buena comida, risas y esa calidez particular que solo se forma entre personas que han compartido algo real.",
        overnight: "Hotel de lujo a orillas del río, Rishikesh",
        highlight: "Puesta a punto en el spa del Himalaya — las montañas disueltas en tus músculos",
      },
      {
        day: 7,
        title: "Rishikesh → Delhi — Una despedida con cuidado",
        description:
          "Una última mañana tranquila: chai junto al río, un último paseo hasta el ghat. Tu vehículo privado sale después del desayuno hacia el aeropuerto de Delhi o un hotel en la ciudad (5 a 6 horas). Tu conductor se encarga de tu equipaje, conoce las rutas y te lleva a tiempo. Si tienes un tren en lugar de un vuelo, lo organizamos todo con antelación. Te marchas con algo que la mayoría de los turistas no tienen: la sensación clara y firme de haber comprendido algo de este país — no solo de haberlo visto.",
        overnight: "—",
        highlight: "El último chai junto al Ganges — llevándote la India a casa",
      },
    ],
    inclusions: [
      "6 noches de alojamiento de lujo y boutique: 2× hotel premium a orillas del río en Rishikesh + 2× ecolodge boutique en Chopta + 2× hotel premium a orillas del río en Rishikesh (habitación doble)",
      "SUV privado con aire acondicionado o Innova Crysta para todos los traslados (nunca autobuses compartidos)",
      "Conductor profesional verificado — el mismo conductor durante todo el viaje",
      "Sesión de yoga privada y guiada en el Ganges (día 2)",
      "Posicionamiento VIP para la Ganga Aarti en Triveni Ghat — con acompañamiento personal",
      "Guía de trekking del Himalaya certificado para el día de la cumbre del Chandrashila",
      "Permisos de trekking para la cumbre del Chandrashila y el templo de Tungnath",
      "Experiencia en la aldea del Himalaya — almuerzo familiar casero incluido (día 5)",
      "Noche de hoguera y observación de estrellas en Chopta",
      "Sesión de spa en Rishikesh — masaje ayurvédico o de tejido profundo (día 6)",
      "6 desayunos + 5 cenas (orgánicas, higiénicas, de origen local cuando sea posible)",
      "Bebida de bienvenida a la llegada a Rishikesh",
      "Agua filtrada durante todo el viaje",
      "Todos los peajes, tasas de aparcamiento y dietas del conductor",
      "Asistencia personal 24/7 — Shikha o un miembro senior del equipo de GoTrustelle presente durante todo el viaje",
    ],
    exclusions: [
      "Vuelos internacionales o nacionales hacia/desde Delhi",
      "Almuerzos durante el viaje (recomendamos restaurantes locales de confianza — presupuesta unos 8–12 € por comida)",
      "Actividades opcionales: rafting en aguas bravas, puenting, kayak (se pueden organizar con coste adicional)",
      "Gastos personales: compras, bebidas alcohólicas, propinas",
      "Seguro de viaje y médico (muy recomendado — se aconseja cobertura de evacuación)",
      "Tarifas de cámara en ciertos templos",
      "Cualquier coste derivado de cierres de carretera, deslizamientos de tierra o retrasos meteorológicos (temporada de monzón en Uttarakhand)",
    ],
    pricing: [
      { label: "Habitación doble — Premium (desde Delhi)", priceEUR: 1299, priceINR: 141400 },
      { label: "Habitación doble — Estándar (desde Delhi)", priceEUR: 1499, priceINR: 163200 },
    ],
    departures: ["Personalizable — contáctanos"],
  },
  "paradise-of-kashmir": {
    title: "Paraíso de Cachemira",
    subtitle: "Paseos en shikara, jardines mogoles y el Prado Dorado",
    region: "Jammu y Cachemira, norte de India",
    route: "Srinagar → Gulmarg → Pahalgam → Sonmarg → Srinagar",
    groupSize: "Máx. 10 viajeros",
    difficulty: "Easy",
    summary:
      "Navega por el lago Dal en un shikara tallado a mano, recorre el Prado de las Flores en Gulmarg y disfruta de un pícnic junto a ríos alimentados por glaciares. La introducción más suave al Himalaya.",
    overview:
      "Cachemira se ganó a pulso su apodo de 'Paraíso en la Tierra'. Este tour grupal de 5 días se construye alrededor de tres de los valles más impresionantes del Himalaya indio — Gulmarg, Pahalgam y Sonmarg — con tiempo de sobra para disfrutar de Srinagar. Dormirás en una casa flotante tradicional, navegarás al amanecer por los canales cubiertos de lotos del lago Dal, y visitarás los jardines mogoles que inspiraron a emperadores. Ideal para quienes visitan India por primera vez y para viajeros que buscan la belleza de las montañas sin un itinerario exigente.",
    highlights: [
      "Alójate en una casa flotante de madera tallada a mano en el lago Dal",
      "Teleférico sobre los prados alpinos de Gulmarg",
      "Caminatas por la naturaleza junto al río Lidder en Pahalgam",
      "Sonmarg — el Prado Dorado — con vistas al glaciar de Thajiwas",
      "Jardines mogoles: Nishat Bagh, Shalimar Bagh y el templo de Shankaracharya",
    ],
    itinerary: [
      {
        day: 1,
        title: "Llegada a Srinagar + Jardines mogoles",
        description:
          "Llegada al aeropuerto de Srinagar y traslado a tu casa flotante en el lago Dal. Por la tarde, visita a Nishat Bagh y Shalimar Bagh (el Jardín del Placer y la Morada de Todos los Placeres), seguida del templo de Shankaracharya con su vista al atardecer sobre el valle.",
        overnight: "Casa flotante de lujo en el lago Dal",
        highlight: "Paseo en shikara al atardecer",
      },
      {
        day: 2,
        title: "Excursión de un día a Gulmarg",
        description:
          "Trayecto de 53 km hasta Gulmarg (2.650 m), también conocido como el Prado de las Flores. Sube en el segundo teleférico más alto del mundo hasta Kongdori para vistas panorámicas del Himalaya, explora el campo de golf (el campo de 18 hoyos más alto del mundo) y regresa a Srinagar por la tarde.",
        overnight: "Hotel de lujo / casa flotante en Srinagar",
        highlight: "Teleférico de Gulmarg",
      },
      {
        day: 3,
        title: "Excursión de un día a Pahalgam",
        description:
          "Excursión de día completo a Pahalgam, el 'Valle de los Pastores.' Caminatas por la naturaleza junto al río Lidder, paseos opcionales en poni hasta el prado de Baisaran, y almuerzo tipo pícnic entre bosques de pinos.",
        overnight: "Hotel de lujo / casa flotante en Srinagar",
        highlight: "Caminatas por el río Lidder",
      },
      {
        day: 4,
        title: "Excursión de un día a Sonmarg",
        description:
          "Trayecto hasta Sonmarg (2.750 m) — el 'Prado Dorado.' Picos nevados, el río Sindh lleno de truchas, y un paseo opcional en poni hasta el glaciar de Thajiwas.",
        overnight: "Hotel de lujo / casa flotante en Srinagar",
        highlight: "Glaciar de Thajiwas",
      },
      {
        day: 5,
        title: "Salida",
        description:
          "Desayuno tranquilo, último paseo en shikara opcional, y traslado al aeropuerto de Srinagar para tu vuelo de regreso.",
        overnight: "—",
        highlight: "Último amanecer sobre el lago Dal",
      },
    ],
    inclusions: [
      "4 noches de alojamiento en habitación doble (régimen MAP)",
      "Todos los traslados de aeropuerto + vehículo privado para las visitas",
      "Desayuno y cena diarios",
      "Paseo en shikara de 1 hora por el lago Dal",
      "Recepción y asistencia de nuestro representante local a la llegada",
    ],
    exclusions: [
      "Vuelos hacia/desde Srinagar",
      "Almuerzos durante los días de excursión",
      "Entradas, billetes de teleférico (Gulmarg Gondola), paseos en poni",
      "Gastos personales (propinas, lavandería, bebidas)",
      "5% de GST sobre el paquete total",
    ],
    pricing: [
      { label: "Deluxe (6 pax)", priceEUR: 1699, priceINR: 185000 },
      { label: "Premium (6 pax)", priceEUR: 1799, priceINR: 195900 },
      { label: "Royal (6 pax)", priceEUR: 1899, priceINR: 206700 },
    ],
    departures: ["Personalizable — contáctanos"],
  },
  "golden-triangle-pushkar-varanasi": {
    title: "Triángulo Dorado, Pushkar y Varanasi",
    subtitle: "Delhi · Agra · Jaipur · Pushkar · Varanasi — el circuito clásico más un lago del desierto y la ciudad más antigua del mundo",
    region: "Delhi, Agra, Jaipur, Pushkar y Varanasi, Norte de la India",
    route: "Delhi → Agra → Jaipur → Pushkar → Delhi → Varanasi (opcional) → Delhi",
    groupSize: "Máx. 10 viajeros",
    difficulty: "Easy",
    summary:
      "El Taj Mahal al amanecer, una fortaleza rajput que se alza sobre un lago, un pozo escalonado de 1.200 años excavado en la tierra, camellos cruzando dunas junto a un lago sagrado del desierto y, para quienes la añaden, la ciudad habitada sin interrupción más antigua del mundo. Diez días diseñados específicamente para quienes visitan la India por primera vez, con cada trayecto, cada tarifa de monumento y cada horario de apertura verificados de antemano.",
    overview:
      "Este es el itinerario que diseñamos con más frecuencia para viajeros de Europa y Norteamérica que visitan la India por primera vez, porque responde a la pregunta '¿qué debería ver realmente en diez días?' sin apresurar ni saturar el viaje. Comienza con el Triángulo Dorado — Delhi, Agra, Jaipur — la introducción esencial a la India, y luego gira hacia el suroeste hasta Pushkar, una pequeña ciudad sagrada junto a un lago sagrado a la que la mayoría de los viajeros primerizos nunca llega y que casi siempre califican como lo mejor del viaje. Desde Pushkar volvemos a Delhi y, para quienes lo deseen, volamos hasta Varanasi — la ciudad viva más antigua del mundo, donde el Ganges corre entre el mundo de los vivos y el más allá. Nos movemos íntegramente en vehículo privado con aire acondicionado entre Delhi, Agra, Jaipur y Pushkar (con tiempos de viaje realistas incorporados en cada jornada, no las cifras 'optimistas' que ofrecen algunos operadores), y en un vuelo doméstico corto entre Delhi y Varanasi en lugar de un tren de más de 8 horas, porque en un viaje de 10 días su tiempo es el recurso más escaso. Cada visita a un monumento en este itinerario está programada según sus horarios reales de apertura y la tarifa de entrada actual para extranjeros — el amanecer en el Taj antes de que se formen las colas, el Fuerte Amber antes del calor del mediodía, la Ganga Aarti a la hora en que realmente se celebra. Shikha o un anfitrión de GoTrustelle está disponible durante todo el viaje, y todo el recorrido está pensado en torno a las preguntas que más hacen los viajeros europeos y estadounidenses: ¿es seguro?, ¿qué voy a comer?, ¿qué debo ponerme? y ¿cómo llego de un punto a otro sin perder un día en el tráfico.",
    highlights: [
      "El Taj Mahal al amanecer — 30 minutos con el mármol solo para ustedes, antes de que lleguen las multitudes",
      "El Fuerte Amber, Jaipur — una fortaleza rajput en la colina con salones de espejos sobre un lago",
      "Chand Baori, Abhaneri — el pozo escalonado de 1.200 años que los lugareños todavía llaman 'baori ki haveli', 3.500 escalones perfectamente simétricos hundidos 13 pisos en la tierra",
      "Pushkar — una ciudad sagrada junto a un lago con 52 ghats, el único templo importante dedicado a Brahma en la India, y camellos al atardecer sobre las dunas",
      "La Feria del Camello de Pushkar (solo en la salida del 14 al 23 de noviembre) — el mayor festival popular de Rajasthan, miles de camellos, comerciantes y artistas a la orilla del lago",
      "La Ganga Aarti en Dashashwamedh Ghat, Varanasi (extensión opcional) — fuego, cantos y caracolas en el río, cada noche desde hace siglos",
      "Paseo en barca por el Ganges antes del amanecer, Varanasi (extensión opcional) — los ghats emergiendo de la niebla mientras la ciudad despierta",
      "El Fuerte Rojo, Qutub Minar y la Tumba de Humayun, Delhi — tres sitios declarados Patrimonio de la Humanidad por la UNESCO en un solo día sin prisas",
    ],
    itinerary: [
      {
        day: 1,
        title: "Llegada a Delhi — Cena de bienvenida",
        description:
          "Aterrizaje en Delhi y traslado a su hotel boutique en un barrio céntrico y transitable a pie. Aproveche la tarde para descansar y adaptarse — tras un vuelo de larga distancia, dejamos este momento libre deliberadamente en lugar de programar visitas. Por la noche, una cena de bienvenida con su anfitrión de GoTrustelle: una introducción suave y guiada a la comida india (butter chicken, dal makhani, naan recién hecho, uno o dos currys regionales suaves), con opciones vegetarianas, veganas y sin picante claramente explicadas. Este es también el momento en que repasamos juntos los diez días que tiene por delante, respondemos las primeras preguntas y nos asegurarnos de que todos cuenten con una SIM o eSIM local funcionando.",
        overnight: "Hotel boutique, centro de Delhi",
        highlight: "Cena de bienvenida — su primera y suave introducción a la comida india, sin sorpresas",
      },
      {
        day: 2,
        title: "Día completo en Delhi — el viejo y el nuevo Delhi",
        description:
          "Un día completo que abarca las dos caras de la capital, a un ritmo pensado para el jet lag. Por la mañana en el Viejo Delhi: el Fuerte Rojo, la ciudadela mogol del siglo XVII de Shah Jahan (entrada extranjeros ₹600; abierto de 9:30 a 16:30, cerrado los lunes — organizamos la semana teniendo esto en cuenta), seguido de la Jama Masjid, la mezquita más grande de la India, y un paseo en ciclorickshaw por los callejones de Chandni Chowk. Después del almuerzo, Nueva Delhi: la Tumba de Humayun, el mausoleo-jardín del siglo XVI que inspiró el Taj Mahal (entrada extranjeros ₹550; abierto todos los días de 6 a 18 h), y el Qutub Minar, un minarete de 73 metros del siglo XII rodeado de ruinas antiguas (entrada extranjeros ₹550; abierto todos los días de 7 a 17 h). Un recorrido tranquilo frente a India Gate y el Rashtrapati Bhavan cierra la jornada antes de la cena.",
        overnight: "Hotel boutique, centro de Delhi",
        highlight: "La Tumba de Humayun — el edificio que le enseñó a Shah Jahan cómo construir el Taj",
      },
      {
        day: 3,
        title: "Delhi → Agra por carretera — Fuerte de Agra y Mehtab Bagh al atardecer",
        description:
          "Salida de Delhi a media mañana hacia Agra (aprox. 230 km por la autopista Yamuna Expressway, 3,5–4 horas en condiciones reales de tráfico — con una parada de descanso incluida). Tras el almuerzo y el registro en el hotel, visita al Fuerte de Agra, la ciudadela mogol de arenisca roja donde Shah Jahan pasó sus últimos años prisionero de su propio hijo, contemplando el Taj al otro lado del río (entrada extranjeros ₹650, ₹600 los viernes; abierto todos los días de 6 a 18 h, última entrada 17:30 h). Cuando la luz se torna dorada, cruzamos hasta Mehtab Bagh — el jardín justo frente al Taj Mahal — para la clásica vista del atardecer, sin las multitudes del propio monumento.",
        overnight: "Hotel boutique, Agra",
        highlight: "El Taj Mahal desde Mehtab Bagh al atardecer — la foto de postal, casi solo para ustedes",
      },
      {
        day: 4,
        title: "El Taj Mahal al amanecer — Agra → Jaipur vía el pozo escalonado de Abhaneri",
        description:
          "Salida temprana: el Taj Mahal abre 30 minutos antes del amanecer (las taquillas abren una hora antes), y esta primera media hora — luz suave, pocas multitudes — es la razón por la que organizamos todo el viaje alrededor de ella (entrada extranjeros ₹1.100, más ₹200 por el interior del mausoleo; menores de 15 años gratis; cerrado todos los viernes, en cuyo caso esta visita se traslada a la tarde del día 3). Tras el desayuno, salida hacia Jaipur (aprox. 240 km, 4,5–5 horas), con una parada en Abhaneri para ver Chand Baori — el pozo escalonado de 1.200 años que los lugareños llaman 'baori ki haveli', cuyos 3.500 escalones descienden 13 pisos en perfecta simetría geométrica (entrada extranjeros aprox. ₹300; abierto todos los días de 8 a 18 h). Llegada a Jaipur a primera hora de la tarde y registro en su hotel-haveli patrimonial, con la tarde libre para explorar los puestos de joyería y textiles del Johari Bazaar.",
        overnight: "Hotel-haveli patrimonial, Jaipur",
        highlight: "Chand Baori — un pozo escalonado de 1.200 años que no se parece a nada que hayan visto antes",
      },
      {
        day: 5,
        title: "Día completo en Jaipur — Fuerte Amber, City Palace, Jantar Mantar y Hawa Mahal",
        description:
          "Por la mañana en el Fuerte Amber, llegando antes del calor del mediodía y de los autobuses turísticos: una fortaleza rajput en la colina con salones de espejos y mármol tallado sobre el lago Maota (entrada extranjeros ₹500; abierto todos los días de 8 a 17:30 h). Después del almuerzo, el City Palace, todavía parcialmente residencia de la familia real de Jaipur (entrada extranjeros ₹300, los apartamentos de Chandra Mahal tienen coste adicional; abierto todos los días de 9:30 a 17 h), y luego el Jantar Mantar, el observatorio astronómico del siglo XVIII del maharajá Jai Singh II, con sus enormes instrumentos de piedra (entrada extranjeros ₹200; abierto todos los días de 9:30 a 16:30 h). Terminamos en el Hawa Mahal, el Palacio de los Vientos, para la clásica foto desde la calle y, si lo desean, una breve visita al interior (entrada extranjeros ₹200; abierto todos los días de 9 a 17 h).",
        overnight: "Hotel-haveli patrimonial, Jaipur",
        highlight: "El Fuerte Amber a la luz de la mañana — el mundo rajput en su máximo esplendor",
      },
      {
        day: 6,
        title: "Jaipur → Pushkar — Templo de Brahma, los ghats y camellos al atardecer",
        description:
          "Un cómodo trayecto a última hora de la mañana hasta Pushkar (aprox. 145 km, 2,5–3 horas). Registro en el hotel y una tarde a pie: el Templo de Brahma, uno de los muy pocos templos dedicados a Brahma en toda la India (entrada gratuita; sin zapatos, vestimenta respetuosa — hombros y rodillas cubiertos), y un paseo por los 52 ghats del lago de Pushkar mientras los peregrinos encienden lámparas sobre el agua. Al caer el sol, un breve paseo en camello hacia las dunas justo a las afueras de la ciudad para ver la puesta de sol sobre las colinas Aravalli. Si viajan en nuestra salida del 14 al 23 de noviembre, esta noche coincide con la Feria del Camello de Pushkar — miles de camellos, comerciantes, acróbatas y músicos a orillas del lago, uno de los grandes espectáculos del Rajasthan rural.",
        overnight: "Casa de huéspedes patrimonial, Pushkar",
        highlight: "Paseo en camello al atardecer sobre las dunas de Pushkar",
      },
      {
        day: 7,
        title: "Pushkar → Delhi por carretera, luego vuelo a Varanasi",
        description:
          "Salida temprana desde Pushkar (aprox. 400 km de regreso a Delhi, 7,5–8 horas por carretera — salimos a las 7 h para que sea cómodo, con una parada de almuerzo apropiada). En Delhi, traslado directo al aeropuerto para su vuelo de conexión a Varanasi (aprox. 1,5 horas; varios vuelos nocturnos diarios). Llegada a Varanasi y traslado a su hotel patrimonial en el casco antiguo, elegido por sus vistas al río desde la terraza y su cercanía a pie a los ghats. Si el tiempo y la energía lo permiten, un paseo corto opcional hasta Dashashwamedh Ghat para la Ganga Aarti de la tarde; de lo contrario, una cena tranquila y una noche temprana tras una larga jornada de viaje. (Esta extensión a Varanasi es opcional — los viajeros que prefieran un viaje más corto pueden terminar en Delhi el día 7; vea los consejos de viaje.)",
        overnight: "Hotel patrimonial, casco antiguo de Varanasi",
        highlight: "Llegar a Varanasi de noche — los ghats iluminados por el fuego incluso después del anochecer",
      },
      {
        day: 8,
        title: "Varanasi — Paseo en barca antes del amanecer, Kashi Vishwanath y los tejedores de seda",
        description:
          "5:30 h: una barca privada se desliza a lo largo de la línea de ghats mientras la ciudad despierta — los peregrinos bajan los escalones en la penumbra, el humo se eleva desde los ghats de cremación, la luz tiñe el agua primero de plata y luego de oro. De vuelta para el desayuno, y luego una caminata guiada hasta el Templo de Kashi Vishwanath, uno de los doce santuarios Jyotirlinga del hinduismo (el darshan general es gratuito; un darshan Sugam/VIP opcional cuesta aprox. ₹250 y evita la cola; templo abierto de 2:30 a 23 h, con pausa del darshan de 11 a 12:30 h). Después del almuerzo, visita al barrio de los tejedores musulmanes, donde familias han tejido a mano la seda Banarasi durante generaciones — sin presión de compra, solo para observar y comprender el oficio. Por la noche, asientos VIP para la Ganga Aarti en Dashashwamedh Ghat — la ceremonia nocturna del fuego, celebrada a la misma hora desde hace siglos.",
        overnight: "Hotel patrimonial, casco antiguo de Varanasi",
        highlight: "La Ganga Aarti en Dashashwamedh Ghat — fuego, caracolas y el río en la oscuridad",
      },
      {
        day: 9,
        title: "Sarnath, y luego vuelo nocturno de regreso a Delhi",
        description:
          "Un trayecto matutino de 13 km hacia el norte hasta Sarnath, el parque de ciervos donde Buda pronunció su primer sermón tras la iluminación (entrada al parque arqueológico para extranjeros aprox. ₹300, museo para extranjeros aprox. ₹100, museo cerrado los viernes; recinto abierto todos los días de 6 a 18 h). La Estupa Dhamek, del siglo V, sigue marcando el lugar, y la calma de este sitio es un contraste deliberado con la intensidad de Varanasi. Regreso para una tarde libre — un último paseo por los ghats, un café en una terraza o simplemente descansar — antes de un vuelo nocturno de regreso a Delhi (aprox. 1,5 horas). Traslado a un hotel cercano al aeropuerto de Delhi para facilitar una salida internacional temprana o nocturna.",
        overnight: "Hotel cercano al aeropuerto de Delhi",
        highlight: "La Estupa Dhamek en Sarnath — de pie en el lugar donde estuvo Buda hace 2.500 años",
      },
      {
        day: 10,
        title: "Salida",
        description:
          "Una última mañana tranquila antes de su traslado al aeropuerto internacional de Delhi. Nuestro equipo confirma de antemano los detalles de su vuelo de regreso y permanece disponible hasta que haya hecho el check-in. Se marchan con el Taj al amanecer, un pozo escalonado como ningún otro en casa, camellos en un lago del desierto y, si añadieron la extensión, la ciudad más antigua del mundo, cuyo fuego eterno todavía arde en la orilla del río.",
        overnight: "—",
        highlight: "Un último café antes del aeropuerto — diez días condensados en todo lo que querían ver",
      },
    ],
    inclusions: [
      "9 noches de alojamiento: 2× hotel boutique en Delhi + 1× hotel boutique en Agra + 2× hotel-haveli patrimonial en Jaipur + 1× casa de huéspedes patrimonial en Pushkar + 2× hotel patrimonial en Varanasi + 1× hotel cercano al aeropuerto de Delhi (habitación doble)",
      "Vehículo privado con aire acondicionado para todas las visitas y traslados por carretera (Delhi–Agra–Jaipur–Pushkar–Delhi)",
      "Vuelos domésticos de ida y vuelta Delhi ↔ Varanasi",
      "Guía profesional autorizado en cada ciudad",
      "Visita guiada al Taj Mahal al amanecer",
      "Parada en Chand Baori (pozo escalonado de Abhaneri) en el trayecto Agra–Jaipur",
      "Paseo en camello al atardecer en Pushkar",
      "Paseo privado en barca por el Ganges antes del amanecer, en Varanasi",
      "Ubicación VIP para la Ganga Aarti en Dashashwamedh Ghat",
      "Visita guiada a Sarnath, incluida la Estupa Dhamek y la entrada al museo",
      "Visita a un taller de tejido de seda Banarasi",
      "9 desayunos + 8 cenas",
      "Todas las tarifas de entrada a monumentos, fuertes y templos indicadas en el itinerario",
      "Todos los peajes, aparcamientos y gastos de conductor",
      "Asistencia 24/7 durante el viaje — anfitrión de GoTrustelle disponible en todo momento",
    ],
    exclusions: [
      "Vuelos internacionales hacia/desde Delhi",
      "Permiso de fotografía en el Taj Mahal (opcional, ₹200) y entrada al interior del mausoleo (₹200)",
      "Darshan Sugam/VIP en Kashi Vishwanath (opcional, aprox. ₹250)",
      "Almuerzos durante el recorrido (presupuesto ₹500–800 por comida)",
      "Gastos personales: compras, propinas, bebidas",
      "Opción de elefante/jeep en el Fuerte Amber o safaris en camello/jeep adicionales a los incluidos",
      "Seguro de viaje y médico (muy recomendado)",
      "5% de GST sobre el valor total del paquete",
    ],
    pricing: [
      { label: "Habitación doble — Estándar, con Varanasi (desde Delhi)", priceEUR: 1899, priceINR: 206700 },
      { label: "Habitación doble — Premium, con Varanasi (desde Delhi)", priceEUR: 2299, priceINR: 250400 },
      { label: "Habitación doble — Estándar, sin Varanasi, 7 días (desde Delhi)", priceEUR: 1399, priceINR: 152400 },
    ],
    departures: [
      "19 – 28 de septiembre de 2026 (salida de grupo fija)",
      "17 – 26 de octubre de 2026 (salida de grupo fija)",
      "14 – 23 de noviembre de 2026 (salida de grupo fija — Especial Feria del Camello de Pushkar)",
      "28 de noviembre – 7 de diciembre de 2026 (salida de grupo fija)",
      "19 – 28 de diciembre de 2026 (salida de grupo fija)",
      "Personalizable — contáctanos",
    ],
  },
};
const journeysItOverrides: JourneyOverrideMap = {
  "northeast-india-meghalaya": {
    title: "India nord-orientale — Meghalaya & ponti viventi",
    subtitle:
      "Ponti di radici intrecciati nel corso dei secoli, il villaggio più pulito dell'Asia & un fiume di cui si vede il fondo",
    region: "Meghalaya e Assam, India nord-orientale",
    route: "Delhi → Guwahati → Shillong → Cherrapunji → Nongriat → Mawlynnong → Dawki → Guwahati → Delhi",
    groupSize: "Max 10 viaggiatori",
    difficulty: "Easy",
    summary:
      "Un ponte vivente a due livelli, intrecciato a mano dai Khasi in oltre 500 anni. Il villaggio più pulito del mondo, dove a ogni porta è appesa una scopa. Un fiume così limpido da poterne leggere il fondale da una barca. L'India nord-orientale è il segreto meglio custodito del paese — ed ecco il viaggio che vi conduce.",
    overview:
      "La maggior parte dei viaggiatori in India non raggiunge mai il nord-est. Non è una critica — è un invito. Gli Stati delle Sette Sorelle custodiscono una versione dell'India completamente diversa da tutto ciò che si trova a nord, sud, est o ovest: culture tribali antichissime ancora vivissime, foreste che stillano verde dodici mesi l'anno, un mondo linguistico e gastronomico che il resto dell'India conosce a malapena. Questo itinerario di 10 giorni attraversa due degli Stati più gratificanti del nord-est — il Meghalaya ('dimora delle nuvole') e un angolo dell'Assam — e culmina in ciò che la maggior parte dei viaggiatori definisce la cosa più straordinaria mai vista in India: i ponti di radici viventi a due livelli di Nongriat, dove il popolo Khasi ha addestrato per oltre 500 anni le radici dei fichi della gomma attraverso le gole dei fiumi, finché le radici non si sono fuse crescendo in ponti viventi naturali in grado di sostenere cinquanta persone alla volta. A questo si aggiungono il cristallino fiume Umngot a Dawki (dove le barche sembrano fluttuare sul vetro), le cascate di Cherrapunji (il paesaggio più piovoso della Terra, le cui cascate raggiungono la massima potenza tra luglio e settembre) e Mawlynnong — il 'villaggio più pulito dell'Asia', mantenuto in modo impeccabile — per un viaggio che non assomiglia quasi per nulla all'India che la maggior parte degli europei ha in mente. Gruppo volutamente ristretto, veicolo privato e accompagnamento personale per tutta la durata del viaggio.",
    highlights: [
      "Ponte di radici viventi a due livelli, Nongriat — 500 anni di bioingegneria Khasi, sito nella lista indicativa UNESCO",
      "Fiume Umngot, Dawki — un fiume così trasparente che le barche sembrano fluttuare nell'aria",
      "Cascate di Nohkalikai — la 4ª cascata più alta del mondo, al massimo della portata da luglio a settembre",
      "Mawlynnong — il villaggio più pulito dell'Asia, con passerelle sospese e le pianure India-Bangladesh in basso",
      "Cascate delle Sette Sorelle — sette corsi d'acqua paralleli che precipitano dall'altopiano del Meghalaya",
      "Grotte calcaree di Mawsmai — antiche formazioni carsiche nel profondo dell'altopiano di Cherrapunji",
      "Shillong — la 'Scozia d'Oriente', una città collinare senza eguali in India",
      "Tempio di Kamakhya, Guwahati — uno dei luoghi di pellegrinaggio più potenti e suggestivi dell'India",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → Guwahati ✈ — La porta d'ingresso al nord-est",
        description:
          "Volo per Guwahati (2 ore da Delhi) — la città più grande del nord-est e il vostro punto d'ingresso in una parte dell'India che sembra completamente diversa già dall'atterraggio. L'aria è più pesante, più verde, più umida. Trasferimento in hotel e, dopo un momento di riposo, visita serale al tempio di Kamakhya, sulla collina di Nilachal: uno dei templi shakti più importanti e suggestivi dell'India, meta di pellegrini da tutto il Sud Asia. Ritorno per la cena sulle rive del Brahmaputra — il fiume più potente dell'India, così largo da non poterne vedere l'altra sponda.",
        overnight: "Hotel boutique, Guwahati",
        highlight: "Il tempio di Kamakhya al tramonto — antico, coinvolgente, senza eguali nel nord dell'India",
      },
      {
        day: 2,
        title: "Guwahati → Lago Umiam → Shillong",
        description:
          "Il tragitto da Guwahati a Shillong (3 ore, 1.500 m di dislivello) è tra i più panoramici del nord-est: la strada attraversa la foresta subtropicale, passa accanto al vasto e azzurro lago Umiam (perfetto per una sosta fotografica e un tè) e sale fino alle colline Khasi. Shillong — la capitale del Meghalaya — è la 'Scozia d'Oriente' dell'India: pinete, un centro di epoca coloniale e una scena musicale rock che ha prodotto, in proporzione, più musicisti di quasi ogni altra città indiana. Check-in, visita al mercato locale e l'arrivo della frescura serale.",
        overnight: "Hotel boutique, Shillong",
        highlight: "Punto panoramico sul lago Umiam — il bacino azzurro incorniciato da colline boscose",
      },
      {
        day: 3,
        title: "Shillong — Città, cascate e il museo Don Bosco",
        description:
          "Giornata intera a Shillong con un ritmo tranquillo. Mattina: Ward's Lake (un lago ornamentale di epoca coloniale nel cuore della città), le Elephant Falls (una cascata a tre livelli a 12 km dalla città, sorprendentemente spettacolare), e la Cattedrale di Maria Ausiliatrice (architettura gotica notevole in una pineta). Pomeriggio: il Don Bosco Centre for Indigenous Cultures — sette piani dedicati al museo più completo sulle culture tribali del nord-est indiano, un mondo che pochi stranieri conoscono. Sera: il mercato di Police Bazar a Shillong — street food locale, tessuti meghalayesi fatti a mano, e l'energia particolare di una città che fa le cose a modo suo.",
        overnight: "Hotel boutique, Shillong",
        highlight: "Museo Don Bosco — il museo culturale più importante del nord-est indiano",
      },
      {
        day: 4,
        title: "Shillong → Cherrapunji (Sohra) — Il luogo più piovoso della Terra",
        description:
          "Un'ora di strada verso sud fino a Cherrapunji — l'altopiano che detiene il record mondiale per la maggiore piovosità annua mai registrata. Tra luglio e settembre il paesaggio raggiunge un'esuberanza estrema: le cascate precipitano da ogni parete rocciosa, l'aria è costantemente fresca e nebbiosa, e le vedute verso le pianure del Bangladesh (quando le nuvole si aprono) sono infinite. Arrivo e sistemazione. Passeggiata pomeridiana fino al Thangkharang Park per le prime vedute sul ciglio dell'altopiano — e le prime cascate che rendono Cherrapunji un luogo senza pari in India.",
        overnight: "Resort boutique, Cherrapunji",
        highlight: "Prima vista sul ciglio dell'altopiano del Meghalaya — il mondo sotto le nuvole",
      },
      {
        day: 5,
        title: "Cherrapunji — Cascate, grotte e il ciglio del mondo",
        description:
          "Giornata intera nello straordinario paesaggio di Cherrapunji e dei suoi dintorni. Cascate delle Sette Sorelle — sette corsi d'acqua paralleli che precipitano dall'altopiano in un'unica parete (al massimo della potenza da luglio a settembre). Cascate di Nohkalikai — la quarta cascata più alta del mondo, un unico salto di 340 metri in una pozza turchese il cui colore appare impossibile contro il verde della valle. Grotte di Mawsmai — uno stretto sistema di grotte calcaree, dall'aspetto quasi di cattedrale, che si inoltra in profondità nell'altopiano, illuminato da formazioni di calcite che hanno impiegato millenni a crescere. Ritorno al resort per la cena, mentre la nebbia sale dalle pianure del Bangladesh.",
        overnight: "Resort boutique, Cherrapunji",
        highlight: "Cascate di Nohkalikai — 340 metri in una pozza color acqua glaciale",
      },
      {
        day: 6,
        title: "Trekking a Nongriat — Il ponte di radici viventi a due livelli",
        description:
          "Il giorno che la maggior parte dei viaggiatori definisce il più straordinario di tutto il viaggio in India. Una discesa di 4,5 km (oltre 3.000 gradini) attraverso una densa foresta subtropicale fino al villaggio di Nongriat — una comunità raggiungibile solo a piedi, dove il popolo Khasi ha addestrato per oltre 500 anni le radici aeree dei fichi della gomma indiani attraverso le gole dei fiumi, finché non si sono fuse, intrecciate e trasformate in ponti naturali in grado di sostenere decine di persone alla volta. Il ponte di radici a due livelli è nella lista indicativa del Patrimonio Mondiale UNESCO — due ponti sovrapposti sopra lo stesso fiume, ancora vivi e in crescita. Un bagno nella piscina naturale nelle vicinanze, un pranzo semplice nel villaggio, e la risalita nel tardo pomeriggio. Le vostre gambe se ne accorgeranno il giorno dopo. Ne sarà valsa completamente la pena.",
        overnight: "Resort boutique, Cherrapunji",
        highlight: "Il ponte di radici viventi a due livelli — 500 anni di bioingegneria vivente",
      },
      {
        day: 7,
        title: "Cherrapunji → Mawlynnong → Dawki",
        description:
          "Trasferimento a Mawlynnong — designato villaggio più pulito dell'Asia e diventato quasi una leggenda nel nord-est: ogni casa ha una scopa alla porta, ogni sentiero è spazzato, l'aria profuma di fiori, e la comunità mantiene il villaggio per orgoglio condiviso piuttosto che per obbligo governativo. Salita sulla passerella sospesa in bambù sopra la foresta, con vista sulla pianura di confine con il Bangladesh. Poi trasferimento a Dawki, al confine India-Bangladesh, dove il fiume Umngot scorre su un letto di sabbia bianca così limpido che le barche in superficie sembrano fluttuare nell'aria, con ogni ciottolo del fondale visibile da quindici metri di altezza. Una gita in barca serale mentre la luce cala sul fiume.",
        overnight: "Guesthouse, Dawki / Shillong",
        highlight: "Il fiume Umngot di Dawki — il fiume di vetro dove le barche fluttuano sul nulla",
      },
      {
        day: 8,
        title: "Dawki → Colline Jaintia → Monoliti di Nartiang → Shillong",
        description:
          "Ritorno verso Shillong passando per le colline Jaintia — una cultura meghalayese diversa da quella Khasi, con una lingua e tradizioni proprie. Sosta a Nartiang, dove la più grande collezione di monoliti preistorici del nord-est si erge in un campo del villaggio: enormi pietre trasportate ed erette dai re Jaintia come memoriali, la cui vera origine e il cui vero significato restano ancora dibattuti. Arrivo a Shillong per una cena serale e un'ultima passeggiata al mercato — ultima occasione per tessuti meghalayesi, miele locale e l'atmosfera particolare di una città di montagna di notte.",
        overnight: "Hotel boutique, Shillong",
        highlight: "I monoliti di Nartiang — le antiche pietre erette del nord-est",
      },
      {
        day: 9,
        title: "Shillong → Piantagione di tè → Guwahati",
        description:
          "Discesa mattutina dall'altopiano del Meghalaya verso le pianure dell'Assam, con una sosta in una piantagione di tè in attività ai piedi dell'Assam per una passeggiata guidata tra i giardini, una degustazione con il gestore della piantagione, e una vera tazza di tè d'Assam preparato come si deve — forte, dal colore rosso-dorato, e senza nulla a che vedere con quello che esce da una scatola di supermercato in Europa. Prosecuzione verso Guwahati per un'ultima serata sulle rive del Brahmaputra.",
        overnight: "Hotel boutique, Guwahati",
        highlight: "Piantagione di tè d'Assam — la fonte originaria della bevanda più consumata al mondo",
      },
      {
        day: 10,
        title: "Guwahati → Delhi ✈ — Partenza",
        description:
          "Volo del mattino di ritorno a Delhi (2 ore). Lascerete il nord-est con immagini che non corrispondono all'India che pensavate di conoscere: un ponte fatto di radici, un fiume di vetro, un villaggio dove ognuno spazza il proprio sentiero. Il nostro team vi accompagna all'aeroporto di Guwahati.",
        overnight: "—",
        highlight: "Ultimo sguardo al Brahmaputra — l'altro grande fiume dell'India",
      },
    ],
    inclusions: [
      "9 notti di soggiorno: 1× hotel boutique a Guwahati + 2× hotel boutique a Shillong + 2× resort boutique a Cherrapunji + 1× guesthouse a Dawki + 1× hotel boutique a Shillong + 1× hotel boutique a Guwahati (camera doppia)",
      "Veicolo privato per tutte le visite e i trasferimenti durante l'intero viaggio",
      "Guida professionale di lingua inglese specializzata nella cultura e nell'ecologia del Meghalaya",
      "Trekking al ponte di radici viventi di Nongriat con guida locale Khasi",
      "Gita in barca sul fiume Umngot a Dawki",
      "Ingresso e degustazione guidata in una piantagione di tè d'Assam",
      "9 colazioni + 8 cene",
      "Tutti i biglietti d'ingresso per parchi, grotte e passerella sospesa (Mawlynnong)",
      "Tutti i pedaggi, i parcheggi e le indennità del conducente",
      "Assistenza 24/7 e host GoTrustelle per tutta la durata del viaggio",
    ],
    exclusions: [
      "Volo di andata e ritorno Delhi ↔ Guwahati (circa 60–100 € a tratta; su richiesta vi assistiamo nella prenotazione)",
      "Pranzi (consigliamo ristoranti locali del Meghalaya — budget di ₹300–500 a pasto)",
      "Spese personali: shopping, bevande, mance",
      "Assicurazione di viaggio e medica (consigliata)",
      "Qualsiasi attività opzionale non elencata (safari a Kaziranga disponibile come supplemento per i viaggiatori da ottobre a marzo)",
      "Eventuali costi dovuti a ritardi meteorologici o chiusure stradali (i viaggi durante il monsone possono comportare piccole deviazioni)",
    ],
    pricing: [
      { label: "Camera doppia (da Guwahati)", priceEUR: 1899, priceINR: 206700 },
      { label: "Camera doppia (da Delhi)", priceEUR: 2099, priceINR: 228500 },
    ],
    departures: ["Personalizzabile — contattaci"],
  },
  "kerala-backwaters-escape": {
    title: "Kerala Escape",
    subtitle: "Colline di tè, giardini di spezie, una houseboat privata e i backwaters del 'God's Own Country'",
    region: "Kochi, Munnar, Thekkady e Alleppey, Kerala, India del Sud",
    route: "Kochi → Munnar → Thekkady → Alleppey (houseboat) → Kumarakom → Kochi",
    groupSize: "Massimo 10 viaggiatori",
    difficulty: "Easy",
    summary:
      "Distese ondulate di piantagioni di tè tra le nuvole, una passeggiata profumata attraverso una piantagione di spezie ancora attiva, una notte alla deriva tra i backwaters bordati di palme su una houseboat privata, e una città portuale coloniale dove le reti da pesca cinesi lavorano ancora al tramonto. Nove giorni attraverso il Kerala nella sua forma più completa.",
    overview:
      "Il Kerala si definisce 'God's Own Country' e, dopo una settimana qui, la maggior parte dei viaggiatori smette di discuterne. Questo circuito di 9 giorni si sposta dal quartiere di Fort Kochi — chiese portoghesi, reti da pesca cinesi, sinagoghe ebraiche, tutto racchiuso in pochi chilometri quadrati — su, verso le fresche colline di tè di Munnar, poi verso i giardini di spezie e le colline boscose di Thekkady, al confine della riserva delle tigri di Periyar, e infine sull'acqua stessa: una houseboat privata attraverso i backwaters di Alleppey, seguita da un soggiorno più tranquillo sul lago a Kumarakom. Il ritmo del Kerala è più lento rispetto al nord, il cibo è straordinario (cocco, foglie di curry, pesce appena pescato, un caffè filtro fatto come si deve), e il paesaggio cambia completamente ogni due giorni. Viaggiamo su un veicolo privato con aria condizionata per tutto il percorso, scegliamo strutture boutique e storiche, e manteniamo il gruppo ristretto.",
    highlights: [
      "Una notte privata in houseboat sui backwaters di Alleppey — palmeti, campi di riso e vita di villaggio visti dall'acqua",
      "Le piantagioni di tè di Munnar — dolci colline verdi, una fabbrica di tè attiva e panorami sui Ghati Occidentali",
      "La riserva delle tigri di Periyar, Thekkady — una passeggiata in una piantagione di spezie e un giro in barca sul lago Periyar",
      "Fort Kochi — reti da pesca cinesi, Jewish Town, architettura coloniale portoghese e olandese in un unico quartiere percorribile a piedi",
      "Kumarakom — un soggiorno più tranquillo sul lago tra mangrovie e canali dei backwaters",
      "Una rappresentazione tradizionale di danza Kathakali, Kochi",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrivo a Kochi — Passeggiata storica a Fort Kochi",
        description:
          "Arrivo a Kochi e trasferimento al vostro hotel storico a Fort Kochi. Nel tardo pomeriggio, un tour a piedi del quartiere antico: le iconiche reti da pesca cinesi lungo il lungomare, la St. Francis Church (una delle chiese europee più antiche in India), il Dutch Palace e i magazzini di spezie e negozi di antiquariato di Jew Town. Alla sera, rappresentazione di Kathakali — la danza-teatro classica del Kerala, con secoli di storia, trucco e costumi elaborati.",
        overnight: "Hotel storico, Fort Kochi",
        highlight: "Le reti da pesca cinesi al tramonto — l'immagine più iconica di Kochi, vista di persona",
      },
      {
        day: 2,
        title: "Kochi giornata intera — Mercati, spezie e il porto",
        description:
          "Una giornata rilassata a Kochi: i mercati delle spezie di Mattancherry, la visita a un magazzino di antiquariato e tessuti ancora attivo, e tempo per passeggiare tra le vie coloniali silenziose di Fort Kochi al proprio ritmo. Giro in barca opzionale nel pomeriggio intorno al porto per osservare i pescherecci e le portacontainer.",
        overnight: "Hotel storico, Fort Kochi",
        highlight: "I mercati delle spezie di Mattancherry — il profumo di cardamomo e sacchi di pepe accatastati fino al soffitto",
      },
      {
        day: 3,
        title: "Kochi → Munnar — Verso le colline del tè",
        description:
          "Salita sui Ghati Occidentali fino a Munnar (circa 4 ore), con il paesaggio che passa dalla pianura costiera alle colline coperte di piantagioni di tè man mano che si sale. Sosta lungo il percorso alle cascate di Cheeyappara e Valara. Arrivo a Munnar nel pomeriggio e sistemazione nel resort collinare, con vista sulle ondulate piantagioni di tè.",
        overnight: "Resort collinare, Munnar",
        highlight: "Il primo sguardo sulle colline di tè di Munnar — verde in ogni direzione",
      },
      {
        day: 4,
        title: "Munnar giornata intera — Fabbrica di tè, Eravikulam e punti panoramici",
        description:
          "Visita a una fabbrica di tè attiva e al suo museo per scoprire come la foglia diventa tazza, poi si prosegue verso il parco nazionale di Eravikulam, casa del tahr di Nilgiri in via di estinzione e di alcuni dei migliori panorami d'alta quota dei Ghati Occidentali. Nel pomeriggio Top Station e la diga di Mattupetty per ampi panorami sulla terra del tè.",
        overnight: "Resort collinare, Munnar",
        highlight: "Il parco nazionale di Eravikulam — tahr, prati d'altura e panorami a perdita d'occhio",
      },
      {
        day: 5,
        title: "Munnar → Thekkady — Giardini di spezie e Periyar",
        description:
          "Trasferimento a Thekkady (circa 3,5 ore), al confine della riserva delle tigri di Periyar. Lungo il percorso, passeggiata in una piantagione di spezie attiva — cardamomo, pepe, cannella e chiodi di garofano crescono insieme sotto la volta della foresta, accompagnati da una guida che spiega coltivazione e raccolta di ciascuna. Nel tardo pomeriggio, giro in barca sul lago Periyar con la possibilità di avvistare elefanti selvatici, bisonti e uccelli lungo la riva.",
        overnight: "Resort boutique, Thekkady",
        highlight: "Il giro in barca sul lago Periyar — elefanti selvatici sulla riva, se siete fortunati",
      },
      {
        day: 6,
        title: "Thekkady → Alleppey — Imbarco sulla vostra houseboat privata",
        description:
          "Trasferimento ad Alleppey (circa 4 ore) e imbarco nel primo pomeriggio sulla vostra houseboat privata tradizionale kettuvallam (chiatta da riso). Navigazione lenta attraverso i backwaters — canali bordati di palme, campi di riso sotto il livello del mare, vita di villaggio che si svela lungo le rive — con tutti i pasti preparati freschi a bordo dal vostro equipaggio privato. Ancoraggio notturno in un tratto d'acqua tranquillo.",
        overnight: "Houseboat privata, backwaters di Alleppey",
        highlight: "Il tramonto sui backwaters dal ponte della vostra houseboat",
      },
      {
        day: 7,
        title: "Backwaters di Alleppey → Kumarakom",
        description:
          "Ci si sveglia al suono dell'acqua e degli uccelli. Un'ultima tranquilla crociera al mattino prima di sbarcare a Kumarakom, una cittadina dei backwaters più tranquilla sulle rive del lago Vembanad — il lago più grande del Kerala —, nota per il suo santuario ornitologico e i canali bordati di mangrovie. Check-in in un resort sul lago per un ritmo più riposante dopo la houseboat.",
        overnight: "Resort sul lago, Kumarakom",
        highlight: "Lo sbarco nella quiete di Kumarakom dopo una notte sull'acqua",
      },
      {
        day: 8,
        title: "Kumarakom — Santuario ornitologico e giornata di relax",
        description:
          "Una giornata tranquilla: una visita opzionale al santuario ornitologico di Kumarakom, un giro in canoa tra i canali di mangrovie più piccoli, oppure semplicemente tempo al resort sul lago. Nel pomeriggio, ritorno in auto a Kochi (circa 1,5 ore) per l'ultima notte.",
        overnight: "Hotel storico, Fort Kochi",
        highlight: "I canali di mangrovie di Kumarakom in canoa — i backwaters nel loro momento più silenzioso",
      },
      {
        day: 9,
        title: "Kochi — Partenza",
        description:
          "Un'ultima mattinata rilassata — un'altra passeggiata lungo il lungomare di Fort Kochi, un ultimo caffè filtro, prima del trasferimento all'aeroporto di Kochi per la partenza. Il nostro team confermerà la vostra coincidenza e vi accompagnerà fino alla fine.",
        overnight: "—",
        highlight: "L'ultima mattina davanti alle reti da pesca cinesi prima di partire",
      },
    ],
    inclusions: [
      "8 notti di soggiorno: 2× hotel storico Fort Kochi + 2× resort collinare Munnar + 1× resort boutique Thekkady + 1× houseboat privata Alleppey + 1× resort sul lago Kumarakom + 1× hotel storico Fort Kochi (camera doppia)",
      "Veicolo privato con aria condizionata per tutte le visite e i trasferimenti tra le città durante l'intero percorso",
      "Houseboat privata per una giornata intera e un pernottamento sui backwaters di Alleppey, tutti i pasti a bordo inclusi",
      "Guida professionale autorizzata a Kochi, Munnar e Thekkady",
      "Passeggiata nella piantagione di spezie, Thekkady",
      "Giro in barca sul lago Periyar",
      "Rappresentazione di danza Kathakali, Kochi",
      "8 colazioni + 7 cene (incluso tutti i pasti a bordo della houseboat)",
      "Tutti i biglietti d'ingresso a monumenti, parchi e santuari indicati nell'itinerario",
      "Tutti i pedaggi, parcheggi e indennità del conducente",
      "Assistenza 24 ore su 24, 7 giorni su 7 durante il viaggio — un host GoTrustelle sempre disponibile",
    ],
    exclusions: [
      "Volo internazionale o nazionale per/da Kochi",
      "Pranzi fuori dalla giornata sulla houseboat (budget ₹400–700 a pasto)",
      "Spese personali: shopping, mance, bevande",
      "Attività opzionali: trattamenti spa ayurvedici, giri in canoa aggiuntivi",
      "Assicurazione viaggio e medica (fortemente consigliata)",
      "5% di GST sul valore totale del pacchetto",
    ],
    pricing: [
      { label: "Camera doppia — Standard (da Kochi)", priceEUR: 1699, priceINR: 185000 },
      { label: "Camera doppia — Premium (da Kochi)", priceEUR: 2099, priceINR: 228500 },
    ],
    departures: ["Personalizzabile — contattaci"],
  },
  "rishikesh-himalayan-escape": {
    title: "Rishikesh e Fuga sull'Himalaya",
    subtitle: "Premium · 7 giorni · Un'introduzione dolce e sicura all'India — dove ti senti accolto, non perso",
    region: "Uttarakhand, India del Nord",
    route: "Delhi → Rishikesh → Chopta → Villaggio himalayano → Rishikesh → Delhi",
    groupSize: "Massimo 8 viaggiatori",
    difficulty: "Easy",
    summary:
      "Yoga privato sulle rive del Ganges, il tempio di Shiva più alto del mondo, una vera casa familiare himalayana e un reset in spa — tutto in sette giorni curati con attenzione. Il modo premium per sentire l'India per la prima volta.",
    overview:
      "La maggior parte dei viaggiatori che arrivano in India per la prima volta lo fa con un misto di entusiasmo e silenziosa apprensione — i colori, la folla, l'ignoto. Questo viaggio di 7 giorni è pensato appositamente per dissolvere quell'apprensione e sostituirla con qualcosa di inaspettato: una sensazione di casa. Abbiamo creato questa esperienza per gli europei che vogliono conoscere l'India alle sue condizioni, senza sentirsi sopraffatti. Dormirete in strutture di lusso selezionate a mano, con letti puliti, acqua calda affidabile e acqua potabile filtrata a ogni tappa. Viaggerete esclusivamente in veicoli privati climatizzati, con conducenti professionisti che conosciamo personalmente. Mangerete cibo che abbiamo verificato per igiene e freschezza. E in ogni momento — dalla vostra prima sessione di yoga sul Ganges fino all'istante in cui raggiungerete la cima del Chandrashila e l'intera catena himalayana si apre davanti a voi — Shikha o un host senior di GoTrustelle sarà presente, non come guida turistica ma come un'amica che conosce molto bene l'India. La visita al villaggio del giorno 5 è la nostra offerta di cui siamo più orgogliosi: un vero benvenuto da parte di una famiglia himalayana, cucinare insieme, storie davanti a una tazza di chai — il pomeriggio che vi farà dimenticare completamente Instagram. Questo non è un tour dell'India. È la vostra introduzione all'India che esiste oltre l'itinerario.",
    highlights: [
      "VIP Ganga Aarti — posizione intima lontana dalla folla, il fuoco sul fiume al tramonto",
      "Yoga privato all'alba sulle rive del Ganges — adatto ai principianti, profondamente rigenerante",
      "Vetta del Chandrashila (4.000 m) — panorama himalayano a 360° sopra il tempio di Shiva più alto del mondo",
      "Immersione nel villaggio del giorno 5 — cucina, storie e chai con una vera famiglia himalayana (non turismo inscenato)",
      "Falò e osservazione delle stelle a Chopta — senza inquinamento luminoso, la Via Lattea sopra di voi",
      "Reset in spa e guarigione sonora a Rishikesh — il capitolo finale perfetto prima di tornare a casa",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → Rishikesh — Trasferimento privato e arrivo dolce",
        description:
          "Il vostro conducente vi accoglie all'aeroporto di Delhi o al vostro hotel con un SUV privato pulito e climatizzato. Il viaggio di 5-6 ore attraverso le pianure del Gange e verso le pendici delle Shivalik è il vostro primo assaggio dell'India al ritmo giusto — niente bus, niente estranei, solo voi e il paesaggio che cambia. Arrivo a Rishikesh con un drink di benvenuto e check-in nella vostra struttura di lusso sul fiume. La serata è vostra: respirate l'aria himalayana, ascoltate il Ganges, e rilassatevi con una cena leggera e curata (opzioni continentali e indiane) sulla terrazza sul fiume.",
        overnight: "Hotel di lusso sul fiume, Rishikesh (Taj Rishikesh o equivalente)",
        highlight: "Prima serata sul Ganges — la città che non sembra mai del tutto India e che pure non è simile a nulla altro",
      },
      {
        day: 2,
        title: "Rishikesh — Yoga, cultura dei caffè e VIP Ganga Aarti",
        description:
          "La mattinata inizia con una sessione di yoga privata e guidata sulle rive del Ganges — adatta ai principianti, profondamente radicante e diversa da qualsiasi lezione in studio abbiate frequentato. Colazione tranquilla con vista sul fiume, poi il resto della mattina è vostro per esplorare la scena nascosta dei caffè di Rishikesh, le librerie e le bancarelle di spezie di Tapovan, e i ponti sospesi di Laxman Jhula, al vostro ritmo. Nel pomeriggio, Shikha vi porta nei suoi posti preferiti — quelli che non finiscono nelle guide turistiche. Al calare del sole, prendiamo posizioni private a Triveni Ghat per la Ganga Aarti: sacerdoti che portano il fuoco, mille lampade fluttuanti, musica devozionale che si eleva sul fiume. Non la versione che i turisti vedono da lontano — la versione che vivrete da vicino, accompagnati personalmente e pienamente presenti.",
        overnight: "Hotel di lusso sul fiume, Rishikesh",
        highlight: "Yoga privato all'alba + VIP Ganga Aarti al tramonto",
      },
      {
        day: 3,
        title: "Rishikesh → Chopta — Verso le montagne",
        description:
          "Dopo una colazione rilassata, si guida verso est nel Santuario della fauna selvatica di Kedarnath, mentre le strade si restringono e la foresta himalayana si infoltisce attorno a voi. Il viaggio di 6-7 ore fa parte dell'esperienza — cascate appaiono lungo la strada, villaggi si aggrappano ai fianchi delle colline, e l'aria cambia sensibilmente man mano che si sale. Arrivo a Chopta (2.680 m) — la 'Mini Svizzera' dell'Uttarakhand — nel tardo pomeriggio. Il vostro lodge di montagna boutique è caldo, intimo e impeccabilmente pulito. La cena di stasera è biologica e casalinga, preparata dalla famiglia del lodge. Dopo cena, se il cielo è terso (di solito lo è), si accende il falò e inizia l'osservazione delle stelle. La Via Lattea qui è qualcosa che porterete a casa con voi.",
        overnight: "Eco-lodge di montagna boutique, Chopta (Himalayan Eco Lodge o equivalente)",
        highlight: "Falò, aria di montagna e un cielo impossibile da fotografare abbastanza bene",
      },
      {
        day: 4,
        title: "Vetta del Chandrashila (4.000 m) e Tempio di Tungnath — Giornata simbolo",
        description:
          "Partenza al primo mattino per raggiungere la vetta prima che si formino le nuvole. L'escursione sale per 3,5 km attraverso una foresta di rododendri e ampi prati alpini fino al Tempio di Tungnath — il santuario di Shiva più alto del mondo, a 3.680 m, costruito oltre 1.000 anni fa. Fermatevi qui. Accendete un bastoncino di incenso. Lasciate che il silenzio si posi. Poi un ultimo tratto di 1,5 km fino alla vetta del Chandrashila a 4.000 m, dove si apre in ogni direzione il panorama completo dell'Himalaya del Garhwal: Nanda Devi, Trishul, Chaukhamba, Kedarnath. Questo momento — in piedi sopra le nuvole, circondati da vette che hanno impiegato millenni a formarsi — è quello che i viaggiatori descrivono mesi dopo. La nostra guida mantiene un ritmo lento e confortevole; questa escursione è del tutto gestibile per chi è alle prime armi. Ritorno al lodge per un pranzo caldo, riposo e una cena premium.",
        overnight: "Eco-lodge di montagna boutique, Chopta",
        highlight: "Vetta a 4.000 m sopra le nuvole — il culmine emotivo del viaggio",
      },
      {
        day: 5,
        title: "Giornata al villaggio himalayano — Cucina, storie e connessione autentica",
        description:
          "Questa è la giornata simbolo di GoTrustelle — quella che distingue questo viaggio da ogni altro pacchetto India che troverete. Visitiamo un villaggio himalayano nelle vicinanze e passiamo metà giornata con una famiglia del posto: aiutando a cucinare un pasto garhwali tradizionale su un fuoco di legna, seduti a gambe incrociate in un cortile mentre si scopre la vita quotidiana in montagna, ascoltando storie che non finiscono in nessuna guida turistica. Nessun attore, nessuna performance inscenata — solo persone reali che aprono la propria casa perché Shikha ha costruito relazioni autentiche qui negli anni. Condividerete un pasto che non ha eguali con nulla altro che assaggerete in India, e probabilmente resterete molto più a lungo di quanto previsto dal programma. Questo è il pomeriggio che la maggior parte dei viaggiatori dice abbia cambiato del tutto il loro modo di vedere i viaggi.",
        overnight: "Eco-lodge di montagna boutique, Chopta (o guesthouse lungo il percorso)",
        highlight: "Il pomeriggio che vi fa dimenticare Instagram",
      },
      {
        day: 6,
        title: "Chopta → Rishikesh — Reset in spa e serata di lusso",
        description:
          "Ritorno a Rishikesh con le montagne ancora fresche nel corpo. Nuovo check-in nella vostra struttura sul fiume, e il pomeriggio appartiene interamente al recupero: una sessione spa curata (massaggio ayurvedico, aromaterapia o tessuto profondo — a vostra scelta), seguita da guarigione sonora facoltativa o meditazione guidata, se il vostro corpo lo richiede. La cena di stasera è un momento di gruppo elegante e rilassato — Shikha si unisce a voi per celebrare la settimana con ottimo cibo, risate e quel calore particolare che si crea solo tra persone che hanno condiviso qualcosa di autentico.",
        overnight: "Hotel di lusso sul fiume, Rishikesh",
        highlight: "Reset in spa himalayano — le montagne che si sciolgono nei vostri muscoli",
      },
      {
        day: 7,
        title: "Rishikesh → Delhi — Una partenza con cura",
        description:
          "Un'ultima mattinata tranquilla: chai lungo il fiume, un'ultima passeggiata fino al ghat. Il vostro veicolo privato parte dopo la colazione per l'aeroporto di Delhi o un hotel in città (5-6 ore). Il vostro conducente gestisce i bagagli, conosce i percorsi e vi porta a destinazione puntualmente. Se avete un treno invece di un volo, organizziamo tutto in anticipo. Partite con una cosa che la maggior parte dei turisti non ha: la sensazione chiara e forte di aver capito qualcosa di questo paese — non solo di averlo visto.",
        overnight: "—",
        highlight: "L'ultimo chai sul Ganges — portando l'India a casa con voi",
      },
    ],
    inclusions: [
      "6 notti di alloggio di lusso e boutique: 2× hotel premium sul fiume a Rishikesh + 2× eco-lodge boutique a Chopta + 2× hotel premium sul fiume a Rishikesh (camera doppia)",
      "SUV privato climatizzato o Innova Crysta per tutti i trasferimenti (mai bus condivisi)",
      "Conducente professionista selezionato — lo stesso conducente per tutto il viaggio",
      "Sessione di yoga privata e guidata sul Ganges (giorno 2)",
      "Posizionamento VIP per la Ganga Aarti a Triveni Ghat — con accompagnamento personale",
      "Guida trekking himalayana certificata per la giornata della vetta del Chandrashila",
      "Permessi per il trekking alla vetta del Chandrashila e al tempio di Tungnath",
      "Esperienza al villaggio himalayano — pranzo familiare fatto in casa incluso (giorno 5)",
      "Serata falò e osservazione delle stelle a Chopta",
      "Sessione spa a Rishikesh — massaggio ayurvedico o tessuto profondo (giorno 6)",
      "6 colazioni + 5 cene (biologiche, igieniche, di provenienza locale dove possibile)",
      "Drink di benvenuto all'arrivo a Rishikesh",
      "Acqua filtrata per tutto il viaggio",
      "Tutti i pedaggi, le tariffe di parcheggio e le indennità del conducente",
      "Assistenza personale 24/7 — Shikha o un membro senior del team GoTrustelle presente durante tutto il viaggio",
    ],
    exclusions: [
      "Voli internazionali o nazionali da/per Delhi",
      "Pranzi durante il tour (consigliamo ristoranti locali di fiducia — budget di circa €8–12 a pasto)",
      "Attività opzionali: rafting in acque bianche, bungee jumping, kayak (organizzabili a costo extra)",
      "Spese personali: shopping, bevande alcoliche, mance",
      "Assicurazione di viaggio e medica (fortemente consigliata — copertura per evacuazione consigliata)",
      "Costi fotografici in alcuni templi",
      "Qualsiasi costo derivante da chiusure stradali, frane o ritardi meteorologici (stagione del monsone in Uttarakhand)",
    ],
    pricing: [
      { label: "Camera doppia — Premium (da Delhi)", priceEUR: 1299, priceINR: 141400 },
      { label: "Camera doppia — Standard (da Delhi)", priceEUR: 1499, priceINR: 163200 },
    ],
    departures: ["Personalizzabile — contattaci"],
  },
  "paradise-of-kashmir": {
    title: "Paradiso del Kashmir",
    subtitle: "Gite in shikara, giardini Mughal e il Prato d'Oro",
    region: "Jammu e Kashmir, India del Nord",
    route: "Srinagar → Gulmarg → Pahalgam → Sonmarg → Srinagar",
    groupSize: "Max 10 viaggiatori",
    difficulty: "Easy",
    summary:
      "Scivola sul lago Dal a bordo di uno shikara scolpito a mano, passeggia nel Prato dei Fiori di Gulmarg e fai un picnic lungo fiumi alimentati dai ghiacciai. L'introduzione più dolce all'Himalaya.",
    overview:
      "Il Kashmir si è guadagnato il soprannome di 'Paradiso in Terra' a pieno titolo. Questo tour di gruppo di 5 giorni è costruito attorno a tre delle valli più straordinarie dell'Himalaya indiano — Gulmarg, Pahalgam e Sonmarg — con tutto il tempo necessario per rallentare a Srinagar stessa. Dormirai su una tradizionale casa galleggiante, navigherai all'alba tra i canali coperti di loti del lago Dal e visiterai i giardini Mughal che hanno ispirato gli imperatori. Ideale per chi visita l'India per la prima volta e per i viaggiatori che desiderano la bellezza della montagna senza un itinerario impegnativo.",
    highlights: [
      "Soggiorno su una casa galleggiante in legno scolpito a mano sul lago Dal",
      "Cabinovia sopra i prati alpini di Gulmarg",
      "Passeggiate naturalistiche lungo il fiume Lidder a Pahalgam",
      "Sonmarg — il Prato d'Oro — con vista sul ghiacciaio Thajiwas",
      "Giardini Mughal: Nishat Bagh, Shalimar Bagh e il Tempio di Shankaracharya",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrivo a Srinagar + Giardini Mughal",
        description:
          "Arrivo all'aeroporto di Srinagar e trasferimento alla vostra casa galleggiante sul lago Dal. Visita pomeridiana a Nishat Bagh e Shalimar Bagh (il Giardino del Piacere e la Dimora di Tutti i Piaceri), seguita dal Tempio di Shankaracharya con la sua vista al tramonto sulla valle.",
        overnight: "Casa galleggiante deluxe sul lago Dal",
        highlight: "Gita in shikara al tramonto",
      },
      {
        day: 2,
        title: "Escursione di un giorno a Gulmarg",
        description:
          "Trasferimento di 53 km a Gulmarg (2.650 m), conosciuta anche come il Prato dei Fiori. Sali sulla seconda cabinovia più alta del mondo fino a Kongdori per vedute panoramiche sull'Himalaya, esplora il campo da golf (il campo a 18 buche più alto del mondo) e rientro a Srinagar in serata.",
        overnight: "Hotel deluxe / casa galleggiante a Srinagar",
        highlight: "Cabinovia di Gulmarg",
      },
      {
        day: 3,
        title: "Escursione di un giorno a Pahalgam",
        description:
          "Escursione di un'intera giornata a Pahalgam, la 'Valle dei Pastori.' Passeggiate naturalistiche lungo il fiume Lidder, giri opzionali a dorso di pony fino al prato di Baisaran, e pranzo al sacco tra le pinete.",
        overnight: "Hotel deluxe / casa galleggiante a Srinagar",
        highlight: "Passeggiate lungo il fiume Lidder",
      },
      {
        day: 4,
        title: "Escursione di un giorno a Sonmarg",
        description:
          "Trasferimento a Sonmarg (2.750 m) — il 'Prato d'Oro.' Vette innevate, il fiume Sindh ricco di trote, e un giro opzionale a dorso di pony fino al ghiacciaio Thajiwas.",
        overnight: "Hotel deluxe / casa galleggiante a Srinagar",
        highlight: "Ghiacciaio Thajiwas",
      },
      {
        day: 5,
        title: "Partenza",
        description:
          "Colazione con calma, ultima gita in shikara opzionale, e trasferimento all'aeroporto di Srinagar per il volo di ritorno.",
        overnight: "—",
        highlight: "Ultima alba sul lago Dal",
      },
    ],
    inclusions: [
      "4 notti di alloggio in camera doppia (trattamento MAP)",
      "Tutti i trasferimenti aeroportuali + veicolo privato per le visite",
      "Colazione e cena giornaliere",
      "Gita in shikara di 1 ora sul lago Dal",
      "Accoglienza e assistenza del nostro rappresentante locale all'arrivo",
    ],
    exclusions: [
      "Volo andata/ritorno per Srinagar",
      "Pranzi durante i giorni di escursione",
      "Biglietti d'ingresso, biglietti della cabinovia (Gulmarg Gondola), giri a pony",
      "Spese personali (mance, lavanderia, bevande)",
      "5% di GST sul pacchetto totale",
    ],
    pricing: [
      { label: "Deluxe (6 persone)", priceEUR: 1699, priceINR: 185000 },
      { label: "Premium (6 persone)", priceEUR: 1799, priceINR: 195900 },
      { label: "Royal (6 persone)", priceEUR: 1899, priceINR: 206700 },
    ],
    departures: ["Personalizzabile — contattaci"],
  },
  "golden-triangle-pushkar-varanasi": {
    title: "Triangolo d'Oro, Pushkar e Varanasi",
    subtitle: "Delhi · Agra · Jaipur · Pushkar · Varanasi — il circuito classico con l'aggiunta di un lago nel deserto e la città più antica del mondo",
    region: "Delhi, Agra, Jaipur, Pushkar e Varanasi, India del Nord",
    route: "Delhi → Agra → Jaipur → Pushkar → Delhi → Varanasi (opzionale) → Delhi",
    groupSize: "Max 10 viaggiatori",
    difficulty: "Easy",
    summary:
      "Il Taj Mahal all'alba, una fortezza rajput che si affaccia su un lago, un pozzo a gradoni di 1.200 anni scavato nella terra, cammelli che attraversano le dune di un lago sacro nel deserto e, per chi la aggiunge, la città abitata ininterrottamente più antica del mondo. Dieci giorni pensati appositamente per chi visita l'India per la prima volta, con ogni tratta di viaggio, ogni tariffa dei monumenti e ogni orario di apertura verificati in anticipo.",
    overview:
      "Questo è l'itinerario che costruiamo più spesso per i viaggiatori europei e nordamericani alla prima visita in India, perché risponde alla domanda 'cosa dovrei davvero vedere in dieci giorni?' senza affollare né correre. Inizia con il Triangolo d'Oro — Delhi, Agra, Jaipur — l'introduzione essenziale all'India, per poi virare a sud-ovest verso Pushkar, una piccola città sacra su un lago sacro che la maggior parte dei viaggiatori alla prima esperienza non raggiunge mai e che quasi sempre definiscono il punto più alto del viaggio. Da Pushkar torniamo a Delhi e, per chi lo desidera, si vola verso Varanasi — la città vivente più antica del mondo, dove il Ganges scorre tra il mondo dei vivi e quello dell'aldilà. Ci spostiamo interamente con un veicolo privato con aria condizionata tra Delhi, Agra, Jaipur e Pushkar (con tempi di viaggio realistici inseriti in ogni giornata, non le cifre 'ottimistiche' di alcuni operatori), e con un breve volo interno tra Delhi e Varanasi invece di un treno di oltre 8 ore, perché in un viaggio di 10 giorni il tempo è la risorsa più scarsa. Ogni visita ai monumenti in questo itinerario è programmata in base agli orari di apertura reali e alla tariffa d'ingresso attuale per i cittadini stranieri — l'alba al Taj prima che si formino le code, il Forte di Amber prima del caldo del mezzogiorno, la Ganga Aarti all'ora in cui viene realmente celebrata. Shikha o un ospite GoTrustelle è raggiungibile durante tutto il viaggio, e l'intero percorso è pensato attorno alle domande che i viaggiatori europei e americani si pongono più spesso: è sicuro, cosa mangio, cosa indosso e come si va da un punto all'altro senza perdere una giornata nel traffico.",
    highlights: [
      "Il Taj Mahal all'alba — 30 minuti con il marmo tutto per voi, prima dell'arrivo della folla",
      "Il Forte di Amber, Jaipur — una fortezza rajput sulla collina con sale a specchio sopra un lago",
      "Chand Baori, Abhaneri — il pozzo a gradoni di 1.200 anni che gli abitanti chiamano ancora 'baori ki haveli', 3.500 gradini perfettamente simmetrici che scendono per 13 piani nella terra",
      "Pushkar — una città sacra sul lago con 52 ghat, l'unico importante tempio dedicato a Brahma in India, e cammelli al tramonto sulle dune",
      "La Fiera dei Cammelli di Pushkar (solo partenza 14–23 novembre) — il più grande festival popolare del Rajasthan, migliaia di cammelli, mercanti e artisti sulle rive del lago",
      "La Ganga Aarti a Dashashwamedh Ghat, Varanasi (estensione opzionale) — fuoco, canti e conchiglie sul fiume, ogni singola sera da secoli",
      "Gita in barca sul Ganges prima dell'alba, Varanasi (estensione opzionale) — i ghat che emergono dalla nebbia mentre la città si sveglia",
      "Forte Rosso, Qutub Minar e la Tomba di Humayun, Delhi — tre siti UNESCO in una giornata senza fretta",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrivo a Delhi — Cena di benvenuto",
        description:
          "Atterraggio a Delhi e trasferimento nel vostro hotel boutique in un quartiere centrale e percorribile a piedi. Dedicate il pomeriggio a riposare e ambientarvi — dopo un volo intercontinentale lasciamo deliberatamente questo momento libero invece di programmare visite. La sera, una cena di benvenuto con il vostro ospite GoTrustelle: un'introduzione delicata e guidata alla cucina indiana (butter chicken, dal makhani, naan fresco, uno o due curry regionali leggeri), con opzioni vegetariane, vegane e senza piccante spiegate chiaramente. È anche il momento in cui ripercorriamo insieme i dieci giorni a venire, rispondiamo alle prime domande e ci assicuriamo che tutti abbiano una SIM o eSIM locale funzionante.",
        overnight: "Hotel boutique, Delhi centro",
        highlight: "Cena di benvenuto — la vostra prima, delicata introduzione alla cucina indiana, senza sorprese",
      },
      {
        day: 2,
        title: "Giornata intera a Delhi — la vecchia e la nuova Delhi",
        description:
          "Una giornata intera che copre entrambi i volti della capitale, al ritmo adatto al jet lag. Al mattino nella Vecchia Delhi: il Forte Rosso, la cittadella moghul del XVII secolo di Shah Jahan (ingresso stranieri ₹600; aperto dalle 9:30 alle 16:30, chiuso il lunedì — organizziamo la settimana tenendone conto), seguito dalla Jama Masjid, la moschea più grande dell'India, e un giro in ciclorisciò tra i vicoli di Chandni Chowk. Dopo pranzo, la Nuova Delhi: la Tomba di Humayun, il mausoleo-giardino del XVI secolo che ispirò il Taj Mahal (ingresso stranieri ₹550; aperto tutti i giorni dalle 6 alle 18), e il Qutub Minar, un minareto di 73 metri del XII secolo circondato da antiche rovine (ingresso stranieri ₹550; aperto tutti i giorni dalle 7 alle 17). Un tranquillo passaggio davanti a India Gate e al Rashtrapati Bhavan chiude la giornata prima di cena.",
        overnight: "Hotel boutique, Delhi centro",
        highlight: "La Tomba di Humayun — l'edificio che insegnò a Shah Jahan come costruire il Taj",
      },
      {
        day: 3,
        title: "Delhi → Agra su strada — Forte di Agra e Mehtab Bagh al tramonto",
        description:
          "Partenza da Delhi a metà mattinata per il viaggio verso Agra (circa 230 km lungo la Yamuna Expressway, 3,5–4 ore in condizioni di traffico reali — con una sosta di riposo prevista). Dopo pranzo e il check-in, visita al Forte di Agra, la cittadella moghul in arenaria rossa dove Shah Jahan passò i suoi ultimi anni imprigionato dal proprio figlio, con lo sguardo sul Taj oltre il fiume (ingresso stranieri ₹650, ₹600 il venerdì; aperto tutti i giorni dalle 6 alle 18, ultimo ingresso alle 17:30). Quando la luce si fa dorata, attraversiamo verso Mehtab Bagh — il giardino proprio di fronte al Taj Mahal — per la classica vista al tramonto, senza le folle del monumento stesso.",
        overnight: "Hotel boutique, Agra",
        highlight: "Il Taj Mahal visto da Mehtab Bagh al tramonto — la foto da cartolina, quasi tutta per voi",
      },
      {
        day: 4,
        title: "Il Taj Mahal all'alba — Agra → Jaipur via il pozzo a gradoni di Abhaneri",
        description:
          "Partenza anticipata: il Taj Mahal apre 30 minuti prima dell'alba (le biglietterie aprono un'ora prima), e questa prima mezz'ora — luce soffusa, poche persone — è il motivo per cui costruiamo l'intero viaggio attorno ad essa (ingresso stranieri ₹1.100, più ₹200 per l'interno del mausoleo; gratis per i minori di 15 anni; chiuso ogni venerdì, nel qual caso questa visita si sposta al pomeriggio del giorno 3). Dopo la colazione, partenza per Jaipur (circa 240 km, 4,5–5 ore), con una sosta ad Abhaneri per vedere Chand Baori — il pozzo a gradoni di 1.200 anni che gli abitanti chiamano 'baori ki haveli', i cui 3.500 gradini scendono per 13 piani in perfetta simmetria geometrica (ingresso stranieri circa ₹300; aperto tutti i giorni dalle 8 alle 18). Arrivo a Jaipur in prima serata e check-in nel vostro hotel-haveli storico, con la serata libera per esplorare le bancarelle di gioielli e tessuti del Johari Bazaar.",
        overnight: "Hotel-haveli storico, Jaipur",
        highlight: "Chand Baori — un pozzo a gradoni di 1.200 anni che non ha eguali con nulla già visto",
      },
      {
        day: 5,
        title: "Giornata intera a Jaipur — Forte di Amber, City Palace, Jantar Mantar e Hawa Mahal",
        description:
          "Al mattino al Forte di Amber, arrivando prima del caldo del mezzogiorno e dei pullman turistici: una fortezza rajput sulla collina con sale a specchio e marmo intagliato sopra il lago Maota (ingresso stranieri ₹500; aperto tutti i giorni dalle 8 alle 17:30). Dopo pranzo, il City Palace, ancora parzialmente abitato dalla famiglia reale di Jaipur (ingresso stranieri ₹300, gli appartamenti del Chandra Mahal a parte; aperto tutti i giorni dalle 9:30 alle 17), poi il Jantar Mantar, l'osservatorio astronomico del XVIII secolo del maharaja Jai Singh II con i suoi enormi strumenti in pietra (ingresso stranieri ₹200; aperto tutti i giorni dalle 9:30 alle 16:30). Concludiamo al Hawa Mahal, il Palazzo dei Venti, per la classica foto dalla strada e, se lo desiderate, una breve visita all'interno (ingresso stranieri ₹200; aperto tutti i giorni dalle 9 alle 17).",
        overnight: "Hotel-haveli storico, Jaipur",
        highlight: "Il Forte di Amber nella luce del mattino — il mondo rajput nel suo massimo splendore",
      },
      {
        day: 6,
        title: "Jaipur → Pushkar — Tempio di Brahma, i ghat e cammelli al tramonto",
        description:
          "Un comodo viaggio a fine mattinata verso Pushkar (circa 145 km, 2,5–3 ore). Check-in e un pomeriggio a piedi: il Tempio di Brahma, uno dei pochissimi templi dedicati a Brahma in tutta l'India (ingresso gratuito; scarpe tolte, abbigliamento rispettoso — spalle e ginocchia coperte), e una passeggiata intorno ai 52 ghat del lago di Pushkar mentre i pellegrini accendono lumi sull'acqua. Al calare del sole, un breve giro in cammello nelle dune appena fuori città per il tramonto sulle colline Aravalli. Se viaggiate nella nostra partenza del 14–23 novembre, questa serata coincide con la Fiera dei Cammelli di Pushkar — migliaia di cammelli, mercanti, acrobati e musicisti sulle rive del lago, uno dei grandi spettacoli del Rajasthan rurale.",
        overnight: "Guesthouse storica, Pushkar",
        highlight: "Giro in cammello al tramonto sulle dune di Pushkar",
      },
      {
        day: 7,
        title: "Pushkar → Delhi su strada, poi volo per Varanasi",
        description:
          "Partenza anticipata da Pushkar (circa 400 km di ritorno a Delhi, 7,5–8 ore su strada — partiamo alle 7 per rendere il viaggio confortevole, con una vera sosta pranzo). A Delhi, trasferimento diretto in aeroporto per il volo verso Varanasi (circa 1,5 ore; diversi voli serali ogni giorno). Arrivo a Varanasi e trasferimento nel vostro hotel storico nella città vecchia, scelto per la vista sul fiume dalla terrazza sul tetto e per la vicinanza a piedi ai ghat. Se tempo ed energie lo consentono, una breve passeggiata opzionale fino a Dashashwamedh Ghat per la Ganga Aarti serale; altrimenti, una cena tranquilla e una serata di riposo dopo una lunga giornata di viaggio. (Questa estensione a Varanasi è opzionale — i viaggiatori che preferiscono un viaggio più breve possono concludere a Delhi già al giorno 7; vedere i consigli di viaggio.)",
        overnight: "Hotel storico, città vecchia di Varanasi",
        highlight: "Arrivare a Varanasi di notte — i ghat illuminati dal fuoco anche dopo il tramonto",
      },
      {
        day: 8,
        title: "Varanasi — Gita in barca prima dell'alba, Kashi Vishwanath e i tessitori di seta",
        description:
          "5:30: una barca privata scivola lungo la fila dei ghat mentre la città si sveglia — i pellegrini scendono i gradini nella semioscurità, il fumo si alza dai ghat di cremazione, la luce trasforma l'acqua prima in argento, poi in oro. Ritorno per la colazione, poi una passeggiata guidata al Tempio di Kashi Vishwanath, uno dei dodici santuari Jyotirlinga dell'induismo (il darshan generale è gratuito; un darshan Sugam/VIP opzionale costa circa ₹250 ed evita la fila; tempio aperto dalle 2:30 alle 23, con pausa del darshan dalle 11 alle 12:30). Dopo pranzo, visita al quartiere dei tessitori musulmani, dove le famiglie tessono a mano la seta Banarasi da generazioni — senza pressione per l'acquisto, solo per osservare e comprendere l'artigianato. La sera, posti VIP per la Ganga Aarti a Dashashwamedh Ghat — la cerimonia del fuoco notturna, celebrata alla stessa ora da secoli.",
        overnight: "Hotel storico, città vecchia di Varanasi",
        highlight: "La Ganga Aarti a Dashashwamedh Ghat — fuoco, conchiglie e il fiume nell'oscurità",
      },
      {
        day: 9,
        title: "Sarnath, poi volo serale di ritorno a Delhi",
        description:
          "Un viaggio matutino di 13 km verso nord fino a Sarnath, il parco dei cervi dove il Buddha tenne il suo primo sermone dopo l'illuminazione (ingresso al parco archeologico per stranieri circa ₹300, museo per stranieri circa ₹100, museo chiuso il venerdì; sito aperto tutti i giorni dalle 6 alle 18). Lo Stupa Dhamek, del V secolo, segna ancora quel luogo, e la calma di qui è un contrasto deliberato con l'intensità di Varanasi. Ritorno per un pomeriggio libero — un'ultima passeggiata sui ghat, un caffè su una terrazza o semplicemente riposo — prima di un volo serale di ritorno a Delhi (circa 1,5 ore). Trasferimento in un hotel vicino all'aeroporto di Delhi per facilitare una partenza internazionale al mattino presto o notturna.",
        overnight: "Hotel vicino all'aeroporto di Delhi",
        highlight: "Lo Stupa Dhamek a Sarnath — in piedi nel luogo dove si trovava il Buddha 2.500 anni fa",
      },
      {
        day: 10,
        title: "Partenza",
        description:
          "Un'ultima mattinata rilassata prima del trasferimento all'aeroporto internazionale di Delhi. Il nostro team confermerà in anticipo i dettagli del vostro volo di ritorno e resterà raggiungibile finché non avrete effettuato il check-in. Partite portando con voi il Taj all'alba, un pozzo a gradoni diverso da tutto ciò che conoscete a casa, cammelli su un lago nel deserto e, se avete aggiunto l'estensione, la città più antica del mondo, dove il fuoco eterno arde ancora sulle rive del fiume.",
        overnight: "—",
        highlight: "Un ultimo caffè prima dell'aeroporto — dieci giorni condensati in tutto ciò che volevate vedere",
      },
    ],
    inclusions: [
      "9 notti di alloggio: 2× hotel boutique a Delhi + 1× hotel boutique ad Agra + 2× hotel-haveli storico a Jaipur + 1× guesthouse storica a Pushkar + 2× hotel storico a Varanasi + 1× hotel vicino all'aeroporto di Delhi (camera doppia)",
      "Veicolo privato con aria condizionata per tutte le visite e i trasferimenti su strada (Delhi–Agra–Jaipur–Pushkar–Delhi)",
      "Volo interno di andata e ritorno Delhi ↔ Varanasi",
      "Guida professionale autorizzata in ogni città",
      "Visita guidata al Taj Mahal all'alba",
      "Sosta a Chand Baori (pozzo a gradoni di Abhaneri) nel tragitto Agra–Jaipur",
      "Giro in cammello al tramonto a Pushkar",
      "Gita privata in barca sul Ganges prima dell'alba, a Varanasi",
      "Posizionamento VIP per la Ganga Aarti a Dashashwamedh Ghat",
      "Visita guidata a Sarnath, incluso lo Stupa Dhamek e l'ingresso al museo",
      "Visita a un laboratorio di tessitura della seta Banarasi",
      "9 colazioni + 8 cene",
      "Tutte le tariffe d'ingresso a monumenti, forti e templi indicate nell'itinerario",
      "Tutti i pedaggi, i parcheggi e le indennità del conducente",
      "Assistenza 24/7 durante il viaggio — ospite GoTrustelle sempre raggiungibile",
    ],
    exclusions: [
      "Voli internazionali per/da Delhi",
      "Permesso fotografico al Taj Mahal (opzionale, ₹200) e ingresso all'interno del mausoleo (₹200)",
      "Darshan Sugam/VIP a Kashi Vishwanath (opzionale, circa ₹250)",
      "Pranzi durante il tour (budget ₹500–800 a pasto)",
      "Spese personali: acquisti, mance, bevande",
      "Opzione elefante/jeep al Forte di Amber o safari in cammello/jeep aggiuntivi rispetto a quelli elencati",
      "Assicurazione viaggio e sanitaria (fortemente consigliata)",
      "GST del 5% sul valore totale del pacchetto",
    ],
    pricing: [
      { label: "Camera doppia — Standard, con Varanasi (da Delhi)", priceEUR: 1899, priceINR: 206700 },
      { label: "Camera doppia — Premium, con Varanasi (da Delhi)", priceEUR: 2299, priceINR: 250400 },
      { label: "Camera doppia — Standard, senza Varanasi, 7 giorni (da Delhi)", priceEUR: 1399, priceINR: 152400 },
    ],
    departures: [
      "19 – 28 settembre 2026 (partenza di gruppo fissa)",
      "17 – 26 ottobre 2026 (partenza di gruppo fissa)",
      "14 – 23 novembre 2026 (partenza di gruppo fissa — Speciale Fiera dei Cammelli di Pushkar)",
      "28 novembre – 7 dicembre 2026 (partenza di gruppo fissa)",
      "19 – 28 dicembre 2026 (partenza di gruppo fissa)",
      "Personalizzabile — contattaci",
    ],
  },
};
const journeysPtOverrides: JourneyOverrideMap = {
  "kerala-backwaters-escape": {
    title: "Kerala Escape",
    subtitle: "Colinas de chá, jardins de especiarias, uma casa flutuante privada e os backwaters do 'God's Own Country'",
    region: "Kochi, Munnar, Thekkady e Alleppey, Kerala, Sul da Índia",
    route: "Kochi → Munnar → Thekkady → Alleppey (casa flutuante) → Kumarakom → Kochi",
    groupSize: "Máximo de 10 viajantes",
    difficulty: "Easy",
    summary:
      "Plantações de chá ondulantes entre as nuvens, uma caminhada perfumada por uma plantação de especiarias em plena atividade, uma noite deslizando pelos backwaters ladeados de palmeiras numa casa flutuante privada, e uma cidade portuária colonial onde as redes de pesca chinesas ainda trabalham ao anoitecer. Nove dias percorrendo Kerala em toda a sua plenitude.",
    overview:
      "Kerala se autodenomina 'God's Own Country', e depois de uma semana aqui a maioria dos viajantes deixa de discordar. Este roteiro de 9 dias parte do bairro de Fort Kochi — igrejas portuguesas, redes de pesca chinesas, sinagogas judaicas, tudo em poucos quilômetros quadrados — sobe para as frescas colinas de chá de Munnar, atravessa para os jardins de especiarias e colinas florestadas de Thekkady, na borda da reserva de tigres de Periyar, e desce finalmente para a própria água: uma casa flutuante privada pelos backwaters de Alleppey, seguida de uma estadia mais tranquila à beira do lago em Kumarakom. O ritmo de Kerala é mais lento do que no norte, a comida é extraordinária (coco, folhas de curry, frutos do mar frescos, um café de filtro como deve ser), e a paisagem muda completamente a cada dois dias. Viajamos em veículo privado com ar-condicionado durante todo o percurso, escolhemos hospedagens boutique e históricas, e mantemos o grupo pequeno.",
    highlights: [
      "Uma noite privada em casa flutuante pelos backwaters de Alleppey — palmeirais, arrozais e vida de vilarejo vistos da água",
      "As plantações de chá de Munnar — colinas verdes ondulantes, uma fábrica de chá em funcionamento e vistas sobre os Ghats Ocidentais",
      "A reserva de tigres de Periyar, Thekkady — uma caminhada por uma plantação de especiarias e um passeio de barco no lago Periyar",
      "Fort Kochi — redes de pesca chinesas, Jewish Town, arquitetura colonial portuguesa e holandesa reunidas num bairro percorrível a pé",
      "Kumarakom — uma estadia mais tranquila à beira do lago, entre manguezais e canais dos backwaters",
      "Uma apresentação tradicional de dança Kathakali, Kochi",
    ],
    itinerary: [
      {
        day: 1,
        title: "Chegada a Kochi — Passeio histórico por Fort Kochi",
        description:
          "Chegada a Kochi e transfer para o seu hotel histórico em Fort Kochi. No final da tarde, um passeio a pé pelo bairro antigo: as icônicas redes de pesca chinesas ao longo da orla, a Igreja de São Francisco (uma das mais antigas igrejas europeias da Índia), o Dutch Palace, e os armazéns de especiarias e antiquários de Jew Town. À noite, apresentação de Kathakali — a dança-drama clássica centenária de Kerala, com maquiagem e figurinos elaborados.",
        overnight: "Hotel histórico, Fort Kochi",
        highlight: "As redes de pesca chinesas ao pôr do sol — a imagem mais icônica de Kochi, vista de perto",
      },
      {
        day: 2,
        title: "Kochi dia inteiro — Mercados, especiarias e o porto",
        description:
          "Um dia relaxado em Kochi: os mercados de especiarias de Mattancherry, a visita a um armazém de antiguidades e tecidos ainda em atividade, e tempo para passear pelas ruas coloniais tranquilas de Fort Kochi no seu próprio ritmo. Passeio de barco opcional à tarde pelo porto para observar os barcos de pesca e navios porta-contêineres passarem.",
        overnight: "Hotel histórico, Fort Kochi",
        highlight: "Os mercados de especiarias de Mattancherry — o aroma de cardamomo e sacos de pimenta empilhados até o teto",
      },
      {
        day: 3,
        title: "Kochi → Munnar — Rumo às colinas de chá",
        description:
          "Subida pelos Ghats Ocidentais até Munnar (aproximadamente 4 horas), com a paisagem mudando da planície costeira para encostas cobertas de chá à medida que se sobe. Parada no caminho nas cachoeiras de Cheeyappara e Valara. Chegada a Munnar à tarde e acomodação no seu resort de montanha, com vistas sobre as ondulantes plantações de chá.",
        overnight: "Resort de montanha, Munnar",
        highlight: "A primeira visão das colinas de chá de Munnar — verde em todas as direções",
      },
      {
        day: 4,
        title: "Munnar dia inteiro — Fábrica de chá, Eravikulam e mirantes",
        description:
          "Visita a uma fábrica de chá em atividade e seu museu para ver como a folha se transforma em xícara, seguida de um trajeto até o Parque Nacional de Eravikulam, lar do ameaçado tahr de Nilgiri e de algumas das melhores vistas de altitude dos Ghats Ocidentais. À tarde, Top Station e a barragem de Mattupetty para panoramas amplos sobre a terra do chá.",
        overnight: "Resort de montanha, Munnar",
        highlight: "O Parque Nacional de Eravikulam — tahrs, pastagens e vistas a perder de vista",
      },
      {
        day: 5,
        title: "Munnar → Thekkady — Jardins de especiarias e Periyar",
        description:
          "Trajeto até Thekkady (aproximadamente 3,5 horas), na borda da reserva de tigres de Periyar. No caminho, caminhada por uma plantação de especiarias em atividade — cardamomo, pimenta, canela e cravo crescendo juntos sob o dossel da floresta, com um guia que explica como cada um é cultivado e colhido. No final da tarde, um passeio de barco no lago Periyar com chance de avistar elefantes selvagens, bisões e aves à beira da água.",
        overnight: "Resort boutique, Thekkady",
        highlight: "O passeio de barco no lago Periyar — elefantes selvagens na margem, se tiver sorte",
      },
      {
        day: 6,
        title: "Thekkady → Alleppey — Embarque na sua casa flutuante privada",
        description:
          "Trajeto até Alleppey (aproximadamente 4 horas) e embarque no início da tarde na sua casa flutuante tradicional privada kettuvallam (balsa de arroz). Navegação lenta pelos backwaters — canais ladeados de palmeiras, arrozais abaixo do nível do mar, vida de vilarejo se revelando nas margens — com todas as refeições preparadas frescas a bordo pela sua tripulação privada. Ancoragem noturna num trecho tranquilo de água.",
        overnight: "Casa flutuante privada, backwaters de Alleppey",
        highlight: "O pôr do sol sobre os backwaters vindo do deque da sua casa flutuante",
      },
      {
        day: 7,
        title: "Backwaters de Alleppey → Kumarakom",
        description:
          "Despertar ao som da água e das aves. Um último cruzeiro matinal tranquilo antes de desembarcar em Kumarakom, uma cidade dos backwaters mais tranquila às margens do lago Vembanad — o maior lago de Kerala —, conhecida por seu santuário de aves e canais ladeados de manguezais. Check-in num resort à beira do lago para um ritmo mais tranquilo após a casa flutuante.",
        overnight: "Resort à beira do lago, Kumarakom",
        highlight: "O desembarque na quietude de Kumarakom após uma noite na água",
      },
      {
        day: 8,
        title: "Kumarakom — Santuário de aves e dia de lazer",
        description:
          "Um dia tranquilo: uma visita opcional ao Santuário de Aves de Kumarakom, um passeio de canoa pelos canais de manguezal menores, ou simplesmente tempo no resort à beira do lago. Na tarde, retorno de carro a Kochi (aproximadamente 1,5 hora) para a sua última noite.",
        overnight: "Hotel histórico, Fort Kochi",
        highlight: "Os canais de manguezal de Kumarakom de canoa — os backwaters no seu momento mais silencioso",
      },
      {
        day: 9,
        title: "Kochi — Partida",
        description:
          "Uma última manhã relaxada — mais um passeio pela orla de Fort Kochi, um último café de filtro, antes do transfer para o aeroporto de Kochi para a sua partida. Nossa equipe confirma sua conexão e o acompanha até o fim.",
        overnight: "—",
        highlight: "A última manhã junto às redes de pesca chinesas antes de partir",
      },
    ],
    inclusions: [
      "8 noites de hospedagem: 2× hotel histórico Fort Kochi + 2× resort de montanha Munnar + 1× resort boutique Thekkady + 1× casa flutuante privada Alleppey + 1× resort à beira do lago Kumarakom + 1× hotel histórico Fort Kochi (quarto duplo)",
      "Veículo privado com ar-condicionado para todos os passeios e transfers entre cidades durante todo o percurso",
      "Casa flutuante privada por um dia inteiro e uma noite nos backwaters de Alleppey, todas as refeições a bordo incluídas",
      "Guia profissional licenciado em Kochi, Munnar e Thekkady",
      "Caminhada pela plantação de especiarias, Thekkady",
      "Passeio de barco no lago Periyar",
      "Apresentação de dança Kathakali, Kochi",
      "8 cafés da manhã + 7 jantares (incluindo todas as refeições a bordo da casa flutuante)",
      "Todas as taxas de entrada em monumentos, parques e santuários listadas no roteiro",
      "Todos os pedágios, estacionamentos e diárias do motorista",
      "Suporte 24/7 durante a viagem — anfitrião GoTrustelle disponível o tempo todo",
    ],
    exclusions: [
      "Voos internacionais ou domésticos para/de Kochi",
      "Almoços fora do dia da casa flutuante (orçamento ₹400–700 por refeição)",
      "Despesas pessoais: compras, gorjetas, bebidas",
      "Atividades opcionais: tratamentos de spa ayurvédico, passeios de canoa adicionais",
      "Seguro de viagem e saúde (fortemente recomendado)",
      "5% de GST sobre o valor total do pacote",
    ],
    pricing: [
      { label: "Quarto duplo — Standard (a partir de Kochi)", priceEUR: 1699, priceINR: 185000 },
      { label: "Quarto duplo — Premium (a partir de Kochi)", priceEUR: 2099, priceINR: 228500 },
    ],
    departures: ["Personalizável — contate-nos"],
  },
  "rishikesh-himalayan-escape": {
    title: "Rishikesh e Fuga no Himalaia",
    subtitle: "Premium · 7 dias · Uma introdução suave e segura à Índia — onde você se sente bem-vindo, não perdido",
    region: "Uttarakhand, Norte da Índia",
    route: "Delhi → Rishikesh → Chopta → Vila do Himalaia → Rishikesh → Delhi",
    groupSize: "Máximo 8 viajantes",
    difficulty: "Easy",
    summary:
      "Yoga privado às margens do Ganges, o templo de Shiva mais alto do mundo, uma verdadeira casa familiar do Himalaia e um reset no spa — tudo em sete dias cuidadosamente planejados. A forma premium de sentir a Índia pela primeira vez.",
    overview:
      "A maioria dos viajantes que chega à Índia pela primeira vez traz consigo uma mistura de entusiasmo e apreensão silenciosa — as cores, as multidões, o desconhecido. Esta jornada de 7 dias foi criada especificamente para dissolver essa apreensão e substituí-la por algo inesperado: uma sensação de estar em casa. Criamos esta experiência para europeus que querem conhecer a Índia em seus próprios termos, sem se sentirem esgotados. Você dormirá em acomodações de luxo escolhidas a dedo, com camas limpas, água quente confiável e água potável filtrada em cada parada. Você viajará exclusivamente em veículos privados com ar-condicionado e motoristas profissionais que conhecemos pessoalmente. Você comerá alimentos que verificamos quanto à higiene e ao frescor. E em cada momento — desde a sua primeira sessão de yoga no Ganges até o instante em que atingir o cume do Chandrashila e toda a cordilheira do Himalaia se abrir diante de você — Shikha ou um anfitrião sênior da GoTrustelle estará presente, não como guia turístico, mas como uma amiga que por acaso conhece muito bem a Índia. A visita à vila no dia 5 é a nossa oferta mais especial: um verdadeiro acolhimento por uma família do Himalaia, cozinhar juntos, histórias ao lado do chai — a tarde que faz você esquecer completamente o Instagram. Isto não é um tour pela Índia. É a sua introdução à Índia que existe além do roteiro.",
    highlights: [
      "VIP Ganga Aarti — posicionamento íntimo, longe das multidões, fogo sobre o rio ao anoitecer",
      "Yoga privado ao amanhecer nas margens do Ganges — adequado para principiantes, profundamente restaurador",
      "Cume do Chandrashila (4.000 m) — panorama do Himalaia em 360° sobre o templo de Shiva mais alto do mundo",
      "Imersão na vila no dia 5 — cozinhar, histórias e chai com uma verdadeira família do Himalaia (não é turismo encenado)",
      "Fogueira e observação de estrelas em Chopta — sem poluição luminosa, a Via Láctea acima de você",
      "Reset com spa e cura sonora em Rishikesh — o capítulo final perfeito antes de voltar para casa",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → Rishikesh — Transfer privado e chegada tranquila",
        description:
          "Seu motorista o recebe no aeroporto de Delhi ou no seu hotel em um SUV privado limpo e climatizado. A viagem de 5 a 6 horas pelas planícies do Ganges e em direção às colinas de Shivalik é o seu primeiro contato com a Índia no ritmo certo — sem ônibus, sem estranhos, apenas você e a paisagem em mudança. Chegada a Rishikesh com uma bebida de boas-vindas e check-in na sua propriedade de luxo à beira do rio. A noite é sua: respire o ar do Himalaia, ouça o Ganges e relaxe suavemente com um jantar leve e cuidadosamente elaborado (opções continentais e indianas) no terraço à beira do rio.",
        overnight: "Hotel de luxo à beira do rio, Rishikesh (Taj Rishikesh ou equivalente)",
        highlight: "Primeira noite junto ao Ganges — a cidade que nunca parece totalmente a Índia, mas ainda assim não se parece com mais nada",
      },
      {
        day: 2,
        title: "Rishikesh — Yoga, cultura de cafés e VIP Ganga Aarti",
        description:
          "A manhã começa com uma sessão de yoga privada e guiada às margens do Ganges — adequada para principiantes, profundamente enraizante e diferente de qualquer aula de estúdio que você já tenha feito. Café da manhã tranquilo com vista para o rio, e o resto da manhã é seu para explorar a cena escondida de cafés de Rishikesh, as livrarias e barracas de especiarias de Tapovan, e as pontes suspensas de Laxman Jhula, no seu próprio ritmo. À tarde, Shikha o leva aos seus lugares favoritos — aqueles que não aparecem nos guias de viagem. Ao pôr do sol, ocupamos posições privadas em Triveni Ghat para a Ganga Aarti: sacerdotes carregando fogo, mil lamparinas flutuantes, música devocional que se eleva sobre o rio. Não a versão que os turistas veem de longe — a versão que você vive de perto, acompanhado pessoalmente e totalmente presente.",
        overnight: "Hotel de luxo à beira do rio, Rishikesh",
        highlight: "Yoga privado ao amanhecer + VIP Ganga Aarti ao anoitecer",
      },
      {
        day: 3,
        title: "Rishikesh → Chopta — Rumo às montanhas",
        description:
          "Após um café da manhã tranquilo, siga para leste, em direção ao Santuário de Vida Selvagem de Kedarnath, enquanto as estradas se tornam mais estreitas e a floresta do Himalaia se torna mais densa ao redor de você. A viagem de 6 a 7 horas faz parte da experiência — cachoeiras surgem ao lado da estrada, vilarejos se agarram às encostas, e o ar muda perceptivelmente à medida que você sobe. Chegada a Chopta (2.680 m) — a 'Mini Suíça' de Uttarakhand — no início da noite. Sua pousada boutique de montanha é acolhedora, íntima e impecavelmente limpa. O jantar desta noite é orgânico e caseiro, preparado pela família da pousada. Depois do jantar, se o céu estiver limpo (o que geralmente acontece), a fogueira é acesa e a observação de estrelas começa. A Via Láctea aqui é algo que você levará para casa.",
        overnight: "Eco-lodge boutique de montanha, Chopta (Himalayan Eco Lodge ou equivalente)",
        highlight: "Fogueira, ar da montanha e um céu impossível de fotografar bem o suficiente",
      },
      {
        day: 4,
        title: "Cume do Chandrashila (4.000 m) e Templo de Tungnath — Dia de destaque",
        description:
          "Início bem cedo para alcançar o cume antes que as nuvens se formem. A trilha sobe 3,5 km através de uma floresta de rododendros e amplos prados alpinos até o Templo de Tungnath — o santuário de Shiva mais alto do mundo, a 3.680 m, construído há mais de 1.000 anos. Pare aqui. Acenda um incenso. Deixe o silêncio se instalar. Depois, um trecho final de 1,5 km até o cume do Chandrashila, a 4.000 m, onde se abre em todas as direções o panorama completo do Himalaia de Garhwal: Nanda Devi, Trishul, Chaukhamba, Kedarnath. Este momento — de pé acima das nuvens, rodeado por picos que levaram milênios para se formar — é aquele que os viajantes descrevem meses depois. Nosso guia mantém um ritmo lento e confortável; esta trilha é totalmente administrável para principiantes. Retorno à pousada para um almoço quente, descanso e um jantar premium.",
        overnight: "Eco-lodge boutique de montanha, Chopta",
        highlight: "Cume a 4.000 m acima das nuvens — o ponto emocional mais alto da viagem",
      },
      {
        day: 5,
        title: "Dia na vila do Himalaia — Cozinha, histórias e conexão real",
        description:
          "Este é o dia de destaque da GoTrustelle — aquele que diferencia esta jornada de qualquer outro pacote de Índia que você encontrar. Visitamos uma vila próxima do Himalaia e passamos meio dia com uma família local: ajudando a cozinhar uma refeição tradicional garhwali em fogo de lenha, sentados de pernas cruzadas em um pátio, aprendendo sobre a vida diária na montanha, ouvindo histórias que não aparecem em nenhum guia de viagem. Sem atores, sem apresentações encenadas — apenas pessoas reais que abrem sua casa porque Shikha construiu relações genuínas aqui ao longo dos anos. Você compartilhará uma refeição que não se compara a nada mais que você provará na Índia, e provavelmente ficará muito mais tempo do que o programa prevê. Esta é a tarde que a maioria dos viajantes diz ter mudado completamente sua forma de ver as viagens.",
        overnight: "Eco-lodge boutique de montanha, Chopta (ou pousada no caminho)",
        highlight: "A tarde que faz você esquecer o Instagram",
      },
      {
        day: 6,
        title: "Chopta → Rishikesh — Reset no spa e noite de luxo",
        description:
          "Retorno a Rishikesh com as montanhas ainda frescas no corpo. Novo check-in na sua propriedade à beira do rio, e a tarde pertence inteiramente à recuperação: uma sessão de spa personalizada (massagem ayurvédica, aromaterapia ou tecido profundo — sua escolha), seguida de cura sonora opcional ou meditação guiada, se o seu corpo estiver pedindo. O jantar desta noite é um momento de grupo elegante e relaxado — Shikha se junta a você para celebrar a semana com uma ótima refeição, risadas e aquele calor particular que só se forma entre pessoas que compartilharam algo real.",
        overnight: "Hotel de luxo à beira do rio, Rishikesh",
        highlight: "Reset no spa do Himalaia — as montanhas dissolvidas em seus músculos",
      },
      {
        day: 7,
        title: "Rishikesh → Delhi — Partida com cuidado",
        description:
          "Uma última manhã tranquila: chai junto ao rio, uma última caminhada até o ghat. Seu veículo privado parte após o café da manhã para o aeroporto de Delhi ou um hotel na cidade (5 a 6 horas). Seu motorista cuida da sua bagagem, conhece as rotas e o leva a tempo. Se você tiver um trem em vez de um voo, organizamos tudo com antecedência. Você parte com algo que a maioria dos turistas não tem: uma sensação clara e forte de ter compreendido algo sobre este país — não apenas de tê-lo visto.",
        overnight: "—",
        highlight: "Último chai junto ao Ganges — levando a Índia com você para casa",
      },
    ],
    inclusions: [
      "6 noites de acomodação de luxo e boutique: 2× hotel premium à beira do rio em Rishikesh + 2× eco-lodge boutique em Chopta + 2× hotel premium à beira do rio em Rishikesh (quarto duplo)",
      "SUV privado com ar-condicionado ou Innova Crysta para todos os transfers (nunca ônibus compartilhado)",
      "Motorista profissional e verificado — o mesmo motorista durante toda a viagem",
      "Sessão de yoga privada e guiada no Ganges (dia 2)",
      "Posicionamento VIP para a Ganga Aarti em Triveni Ghat — com acompanhamento pessoal",
      "Guia de trekking do Himalaia certificado para o dia do cume do Chandrashila",
      "Autorizações de trekking para o cume do Chandrashila e o templo de Tungnath",
      "Experiência na vila do Himalaia — almoço familiar caseiro incluído (dia 5)",
      "Noite de fogueira e observação de estrelas em Chopta",
      "Sessão de spa em Rishikesh — massagem ayurvédica ou de tecido profundo (dia 6)",
      "6 cafés da manhã + 5 jantares (orgânicos, higiênicos, de origem local quando possível)",
      "Bebida de boas-vindas na chegada a Rishikesh",
      "Água filtrada durante toda a viagem",
      "Todos os pedágios, taxas de estacionamento e diárias do motorista",
      "Suporte pessoal 24/7 — Shikha ou um membro sênior da equipe GoTrustelle presente durante toda a viagem",
    ],
    exclusions: [
      "Voos internacionais ou domésticos de/para Delhi",
      "Almoços durante o tour (recomendamos restaurantes locais de confiança — orçar cerca de €8–12 por refeição)",
      "Atividades opcionais: rafting em águas bravas, bungee jump, caiaque (podem ser organizadas com custo extra)",
      "Despesas pessoais: compras, bebidas alcoólicas, gorjetas",
      "Seguro de viagem e médico (fortemente recomendado — cobertura de evacuação recomendada)",
      "Taxas de câmera em determinados templos",
      "Qualquer custo decorrente de fechamento de estradas, deslizamentos de terra ou atrasos climáticos (temporada de monções em Uttarakhand)",
    ],
    pricing: [
      { label: "Quarto duplo — Premium (a partir de Delhi)", priceEUR: 1299, priceINR: 141400 },
      { label: "Quarto duplo — Padrão (a partir de Delhi)", priceEUR: 1499, priceINR: 163200 },
    ],
    departures: ["Personalizável — contate-nos"],
  },
  "paradise-of-kashmir": {
    title: "Paraíso da Caxemira",
    subtitle: "Passeios de shikara, jardins mogóis e o Prado Dourado",
    region: "Jammu e Caxemira, norte da Índia",
    route: "Srinagar → Gulmarg → Pahalgam → Sonmarg → Srinagar",
    groupSize: "Máx. 10 viajantes",
    difficulty: "Easy",
    summary:
      "Deslize pelo lago Dal a bordo de um shikara talhado à mão, passeie pelo Prado das Flores em Gulmarg e faça um piquenique junto a rios alimentados por glaciares. A introdução mais suave ao Himalaia.",
    overview:
      "A Caxemira ganhou com toda a justiça o apelido de 'Paraíso na Terra'. Este tour em grupo de 5 dias é construído em torno de três dos vales mais deslumbrantes do Himalaia indiano — Gulmarg, Pahalgam e Sonmarg — com bastante tempo para desacelerar na própria Srinagar. Você dormirá em uma tradicional casa flutuante, navegará ao amanhecer pelos canais cobertos de lótus do lago Dal, e visitará os jardins mogóis que inspiraram imperadores. Ideal para quem visita a Índia pela primeira vez e para viajantes que desejam a beleza das montanhas sem um roteiro exigente.",
    highlights: [
      "Fique em uma casa flutuante de madeira talhada à mão no lago Dal",
      "Teleférico sobre os prados alpinos de Gulmarg",
      "Caminhadas na natureza ao longo do rio Lidder em Pahalgam",
      "Sonmarg — o Prado Dourado — com vista para a geleira Thajiwas",
      "Jardins mogóis: Nishat Bagh, Shalimar Bagh e o Templo de Shankaracharya",
    ],
    itinerary: [
      {
        day: 1,
        title: "Chegada a Srinagar + Jardins mogóis",
        description:
          "Chegada ao aeroporto de Srinagar e transporte até sua casa flutuante no lago Dal. Visita à tarde a Nishat Bagh e Shalimar Bagh (o Jardim do Prazer e a Morada de Todos os Prazeres), seguida do Templo de Shankaracharya com sua vista do pôr do sol sobre o vale.",
        overnight: "Casa flutuante de luxo no lago Dal",
        highlight: "Passeio de shikara ao pôr do sol",
      },
      {
        day: 2,
        title: "Excursão de um dia a Gulmarg",
        description:
          "Trajeto de 53 km até Gulmarg (2.650 m), também conhecida como o Prado das Flores. Suba no segundo teleférico mais alto do mundo até Kongdori para vistas panorâmicas do Himalaia, explore o campo de golfe (o campo de 18 buracos mais alto do mundo) e retorno a Srinagar ao final do dia.",
        overnight: "Hotel de luxo / casa flutuante em Srinagar",
        highlight: "Teleférico de Gulmarg",
      },
      {
        day: 3,
        title: "Excursão de um dia a Pahalgam",
        description:
          "Excursão de dia inteiro a Pahalgam, o 'Vale dos Pastores.' Caminhadas na natureza ao longo do rio Lidder, passeios opcionais a pônei até o Prado de Baisaran, e piquenique em meio a florestas de pinheiros.",
        overnight: "Hotel de luxo / casa flutuante em Srinagar",
        highlight: "Caminhadas pelo rio Lidder",
      },
      {
        day: 4,
        title: "Excursão de um dia a Sonmarg",
        description:
          "Trajeto até Sonmarg (2.750 m) — o 'Prado Dourado.' Picos nevados, o rio Sindh repleto de trutas, e um passeio opcional a pônei até a geleira Thajiwas.",
        overnight: "Hotel de luxo / casa flutuante em Srinagar",
        highlight: "Geleira Thajiwas",
      },
      {
        day: 5,
        title: "Partida",
        description:
          "Café da manhã tranquilo, último passeio de shikara opcional, e transporte até o aeroporto de Srinagar para seu voo de retorno.",
        overnight: "—",
        highlight: "Último amanhecer sobre o lago Dal",
      },
    ],
    inclusions: [
      "4 noites de acomodação em quarto duplo (regime MAP)",
      "Todos os transportes de aeroporto + veículo privado para passeios",
      "Café da manhã e jantar diários",
      "Passeio de shikara de 1 hora no lago Dal",
      "Recepção e assistência do nosso representante local na chegada",
    ],
    exclusions: [
      "Passagens aéreas de/para Srinagar",
      "Almoços durante os dias de excursão",
      "Taxas de entrada, bilhetes de teleférico (Gulmarg Gondola), passeios a pônei",
      "Despesas pessoais (gorjetas, lavanderia, bebidas)",
      "5% de GST sobre o pacote total",
    ],
    pricing: [
      { label: "Deluxe (6 pessoas)", priceEUR: 1699, priceINR: 185000 },
      { label: "Premium (6 pessoas)", priceEUR: 1799, priceINR: 195900 },
      { label: "Royal (6 pessoas)", priceEUR: 1899, priceINR: 206700 },
    ],
    departures: ["Personalizável — contate-nos"],
  },
  "golden-triangle-pushkar-varanasi": {
    title: "Triângulo Dourado, Pushkar e Varanasi",
    subtitle: "Delhi · Agra · Jaipur · Pushkar · Varanasi — o circuito clássico com um lago no deserto e a cidade mais antiga do mundo",
    region: "Delhi, Agra, Jaipur, Pushkar e Varanasi, Norte da Índia",
    route: "Delhi → Agra → Jaipur → Pushkar → Delhi → Varanasi (opcional) → Delhi",
    groupSize: "Máx. 10 viajantes",
    difficulty: "Easy",
    summary:
      "O Taj Mahal ao nascer do sol, uma fortaleza rajput erguida sobre um lago, um poço em degraus de 1.200 anos escavado na terra, camelos atravessando dunas junto a um lago sagrado no deserto e, para quem a adicionar, a cidade continuamente habitada mais antiga do mundo. Dez dias criados especificamente para quem visita a Índia por primeira vez, com cada trajeto, cada tarifa de monumento e cada horário de funcionamento verificados com antecedência.",
    overview:
      "Este é o roteiro que mais construímos para viajantes da Europa e América do Norte em sua primeira visita à Índia, porque responde à pergunta 'o que devo realmente ver em dez dias?' sem apressar nem sobrecarregar. Começa com o Triângulo Dourado — Delhi, Agra, Jaipur — a introdução essencial à Índia, e depois segue rumo a sudoeste até Pushkar, uma pequena cidade sagrada junto a um lago sagrado que a maioria dos viajantes de primeira viagem nunca alcança e que quase sempre classificam como o ponto alto da viagem. De Pushkar retornamos a Delhi e, para quem desejar, voamos até Varanasi — a mais antiga cidade viva do mundo, onde o Ganges corre entre o mundo dos vivos e o além. Deslocamo-nos inteiramente em veículo privado com ar-condicionado entre Delhi, Agra, Jaipur e Pushkar (com tempos de viagem realistas incorporados a cada dia, não os números 'otimistas' de alguns operadores), e por um curto voo doméstico entre Delhi e Varanasi em vez de um trem de mais de 8 horas, porque em uma viagem de 10 dias o seu tempo é o recurso mais escasso. Cada visita a monumentos neste roteiro é programada de acordo com os horários reais de funcionamento e a tarifa de entrada atual para estrangeiros — o nascer do sol no Taj antes de as filas se formarem, o Forte Amber antes do calor do meio-dia, a Ganga Aarti na hora em que é realmente celebrada. Shikha ou um anfitrião da GoTrustelle está disponível durante toda a viagem, e todo o roteiro é pensado em torno das perguntas que viajantes europeus e americanos mais fazem: é seguro, o que vou comer, o que devo vestir e como ir de um ponto a outro sem perder um dia no trânsito.",
    highlights: [
      "O Taj Mahal ao nascer do sol — 30 minutos com o mármore só para vocês, antes da chegada das multidões",
      "O Forte Amber, Jaipur — uma fortaleza rajput na colina com salões espelhados sobre um lago",
      "Chand Baori, Abhaneri — o poço em degraus de 1.200 anos que os moradores locais ainda chamam de 'baori ki haveli', 3.500 degraus perfeitamente simétricos que descem 13 andares na terra",
      "Pushkar — uma cidade sagrada junto a um lago com 52 ghats, o único templo importante dedicado a Brahma na Índia, e camelos ao pôr do sol sobre as dunas",
      "A Feira do Camelo de Pushkar (apenas na partida de 14 a 23 de novembro) — o maior festival popular do Rajasthan, milhares de camelos, comerciantes e artistas às margens do lago",
      "A Ganga Aarti em Dashashwamedh Ghat, Varanasi (extensão opcional) — fogo, cânticos e conchas no rio, todas as noites há séculos",
      "Passeio de barco no Ganges antes do amanhecer, Varanasi (extensão opcional) — os ghats emergindo da névoa enquanto a cidade desperta",
      "Forte Vermelho, Qutub Minar e o Túmulo de Humayun, Delhi — três sítios da UNESCO em um dia sem pressa",
    ],
    itinerary: [
      {
        day: 1,
        title: "Chegada a Delhi — Jantar de boas-vindas",
        description:
          "Chegada a Delhi e transferência para o seu hotel boutique em um bairro central e acessível a pé. Aproveite a tarde para descansar e se adaptar — depois de um voo de longa distância, deixamos este momento deliberadamente livre em vez de programar visitas. À noite, um jantar de boas-vindas com o seu anfitrião GoTrustelle: uma introdução suave e guiada à comida indiana (butter chicken, dal makhani, naan fresco, um ou dois curries regionais suaves), com opções vegetarianas, veganas e sem picante claramente explicadas. Este é também o momento em que revisamos juntos os dez dias seguintes, respondemos às primeiras perguntas e garantimos que todos tenham um SIM ou eSIM local funcionando.",
        overnight: "Hotel boutique, centro de Delhi",
        highlight: "Jantar de boas-vindas — a sua primeira e suave introdução à comida indiana, sem surpresas",
      },
      {
        day: 2,
        title: "Dia completo em Delhi — a antiga e a nova Delhi",
        description:
          "Um dia completo cobrindo as duas faces da capital, no ritmo adaptado ao jet lag. De manhã na Old Delhi: o Forte Vermelho, a cidadela mogol do século XVII de Shah Jahan (entrada estrangeiros ₹600; aberto das 9h30 às 16h30, fechado às segundas-feiras — organizamos a semana levando isso em conta), seguido pela Jama Masjid, a maior mesquita da Índia, e um passeio de riquixá até as vielas de Chandni Chowk. Após o almoço, New Delhi: o Túmulo de Humayun, o mausoléu-jardim do século XVI que inspirou o Taj Mahal (entrada estrangeiros ₹550; aberto todos os dias das 6h às 18h), e o Qutub Minar, um minarete de 73 metros do século XII rodeado de ruínas antigas (entrada estrangeiros ₹550; aberto todos os dias das 7h às 17h). Uma passagem tranquila por India Gate e o Rashtrapati Bhavan encerra o dia antes do jantar.",
        overnight: "Hotel boutique, centro de Delhi",
        highlight: "O Túmulo de Humayun — o edifício que ensinou Shah Jahan a construir o Taj",
      },
      {
        day: 3,
        title: "Delhi → Agra por estrada — Forte de Agra e Mehtab Bagh ao pôr do sol",
        description:
          "Partida de Delhi no meio da manhã para a viagem até Agra (aprox. 230 km pela Yamuna Expressway, 3,5–4 horas em condições reais de trânsito — com uma parada de descanso incluída). Após o almoço e o check-in, visita ao Forte de Agra, a cidadela mogol em arenito vermelho onde Shah Jahan passou seus últimos anos aprisionado pelo próprio filho, contemplando o Taj do outro lado do rio (entrada estrangeiros ₹650, ₹600 às sextas-feiras; aberto todos os dias das 6h às 18h, última entrada às 17h30). Quando a luz fica dourada, atravessamos até Mehtab Bagh — o jardim bem em frente ao Taj Mahal — para a clássica vista do pôr do sol, sem as multidões do próprio monumento.",
        overnight: "Hotel boutique, Agra",
        highlight: "O Taj Mahal visto de Mehtab Bagh ao pôr do sol — a foto de cartão postal, quase só para vocês",
      },
      {
        day: 4,
        title: "O Taj Mahal ao nascer do sol — Agra → Jaipur via o poço em degraus de Abhaneri",
        description:
          "Início antecipado: o Taj Mahal abre 30 minutos antes do nascer do sol (as bilheterias abrem uma hora antes), e essa primeira meia hora — luz suave, poucas multidões — é o motivo pelo qual construímos toda a viagem em torno dela (entrada estrangeiros ₹1.100, mais ₹200 pelo interior do mausoléu; menores de 15 anos entram gratuitamente; fechado todas as sextas-feiras, caso em que esta visita passa para a tarde do dia 3). Após o café da manhã, partida para Jaipur (aprox. 240 km, 4h30–5h), com uma parada em Abhaneri para ver Chand Baori — o poço em degraus de 1.200 anos que os moradores chamam de 'baori ki haveli', cujos 3.500 degraus descem 13 andares em perfeita simetria geométrica (entrada estrangeiros aprox. ₹300; aberto todos os dias das 8h às 18h). Chegada a Jaipur no início da noite e check-in no seu hotel-haveli histórico, com a noite livre para explorar as bancas de joias e tecidos do Johari Bazaar.",
        overnight: "Hotel-haveli histórico, Jaipur",
        highlight: "Chand Baori — um poço em degraus de 1.200 anos que não se parece com nada que vocês já viram",
      },
      {
        day: 5,
        title: "Dia completo em Jaipur — Forte Amber, City Palace, Jantar Mantar e Hawa Mahal",
        description:
          "De manhã no Forte Amber, chegando antes do calor do meio-dia e dos ônibus de turismo: uma fortaleza rajput na colina com salões espelhados e mármore esculpido sobre o Lago Maota (entrada estrangeiros ₹500; aberto todos os dias das 8h às 17h30). Após o almoço, o City Palace, ainda parcialmente residência da família real de Jaipur (entrada estrangeiros ₹300, os aposentos do Chandra Mahal com custo adicional; aberto todos os dias das 9h30 às 17h), depois o Jantar Mantar, o observatório astronômico do século XVIII do marajá Jai Singh II com seus enormes instrumentos de pedra (entrada estrangeiros ₹200; aberto todos os dias das 9h30 às 16h30). Terminamos no Hawa Mahal, o Palácio dos Ventos, para a clássica foto da rua e, se desejarem, uma breve visita ao interior (entrada estrangeiros ₹200; aberto todos os dias das 9h às 17h).",
        overnight: "Hotel-haveli histórico, Jaipur",
        highlight: "O Forte Amber na luz da manhã — o mundo rajput em seu esplendor máximo",
      },
      {
        day: 6,
        title: "Jaipur → Pushkar — Templo de Brahma, os ghats e camelos ao pôr do sol",
        description:
          "Um trajeto confortável no final da manhã até Pushkar (aprox. 145 km, 2h30–3h). Check-in e uma tarde a pé: o Templo de Brahma, um dos raros templos dedicados a Brahma em toda a Índia (entrada gratuita; sem sapatos, vestimenta respeitosa — ombros e joelhos cobertos), e uma caminhada pelos 52 ghats do Lago Pushkar enquanto peregrinos acendem lamparinas sobre a água. Ao pôr do sol, um breve passeio de camelo até as dunas logo às afora da cidade para ver o sol se pôr sobre as colinas Aravalli. Se estiverem viajando na nossa partida de 14 a 23 de novembro, esta noite coincide com a Feira do Camelo de Pushkar — milhares de camelos, comerciantes, acrobatas e músicos às margens do lago, um dos grandes espetáculos do Rajasthan rural.",
        overnight: "Pousada histórica, Pushkar",
        highlight: "Passeio de camelo ao pôr do sol sobre as dunas de Pushkar",
      },
      {
        day: 7,
        title: "Pushkar → Delhi por estrada, depois voo para Varanasi",
        description:
          "Partida antecipada de Pushkar (aprox. 400 km de volta a Delhi, 7h30–8h por estrada — partimos às 7h para tornar isso confortável, com uma parada apropriada para o almoço). Em Delhi, transferência direta ao aeroporto para o seu voo de conexão a Varanasi (aprox. 1h30; vários voos noturnos diários). Chegada a Varanasi e transferência para o seu hotel histórico na cidade antiga, escolhido por sua vista do rio no terraço e proximidade a pé dos ghats. Se o tempo e a energia permitirem, uma caminhada curta opcional até Dashashwamedh Ghat para a Ganga Aarti da noite; caso contrário, um jantar tranquilo e uma noite tranquila após um longo dia de viagem. (Esta extensão a Varanasi é opcional — viajantes que preferirem uma viagem mais curta podem terminar em Delhi já no dia 7; veja as dicas de viagem.)",
        overnight: "Hotel histórico, cidade antiga de Varanasi",
        highlight: "Chegar a Varanasi à noite — os ghats iluminados pelo fogo mesmo após o anoitecer",
      },
      {
        day: 8,
        title: "Varanasi — Passeio de barco antes do amanhecer, Kashi Vishwanath e os tecelões de seda",
        description:
          "5h30: um barco privado deslizando ao longo da linha de ghats enquanto a cidade desperta — peregrinos descendo os degraus na penumbra, fumaça subindo dos ghats de cremação, a luz transformando a água primeiro em prata, depois em ouro. De volta para o café da manhã, e então uma caminhada guiada até o Templo de Kashi Vishwanath, um dos doze santuários Jyotirlinga do hinduísmo (o darshan geral é gratuito; um darshan Sugam/VIP opcional custa aprox. ₹250 e evita a fila; templo aberto das 2h30 às 23h, com pausa do darshan das 11h às 12h30). Após o almoço, visita ao bairro dos tecelões muçulmanos, onde famílias tecem à mão a seda Banarasi há gerações — sem pressão de compra, apenas para observar e entender o ofício. À noite, assentos VIP para a Ganga Aarti em Dashashwamedh Ghat — a cerimônia noturna do fogo, celebrada na mesma hora há séculos.",
        overnight: "Hotel histórico, cidade antiga de Varanasi",
        highlight: "A Ganga Aarti em Dashashwamedh Ghat — fogo, conchas e o rio na escuridão",
      },
      {
        day: 9,
        title: "Sarnath, e depois voo noturno de volta a Delhi",
        description:
          "Um trajeto matinal de 13 km ao norte até Sarnath, o parque de veados onde Buda proferiu seu primeiro sermão após a iluminação (entrada do parque arqueológico para estrangeiros aprox. ₹300, museu para estrangeiros aprox. ₹100, museu fechado às sextas-feiras; local aberto todos os dias das 6h às 18h). O Stupa Dhamek, do século V, ainda marca esse local, e a calma daqui é um contraste deliberado com a intensidade de Varanasi. Retorno para uma tarde livre — uma última caminhada pelos ghats, um café em um terraço ou simplesmente descanso — antes de um voo noturno de volta a Delhi (aprox. 1h30). Transferência para um hotel próximo ao aeroporto de Delhi para facilitar uma partida internacional de manhã cedo ou noturna.",
        overnight: "Hotel próximo ao aeroporto de Delhi",
        highlight: "O Stupa Dhamek em Sarnath — de pé no local onde Buda esteve há 2.500 anos",
      },
      {
        day: 10,
        title: "Partida",
        description:
          "Uma última manhã tranquila antes da sua transferência para o aeroporto internacional de Delhi. A nossa equipe confirma com antecedência os detalhes do seu voo de retorno e permanece disponível até você fazer o check-in. Vocês partem levando o Taj ao amanhecer, um poço em degraus diferente de tudo que já viram em casa, camelos em um lago no deserto e, se adicionaram a extensão, a cidade mais antiga do mundo, cujo fogo eterno ainda arde às margens do rio.",
        overnight: "—",
        highlight: "Um último café antes do aeroporto — dez dias condensados em tudo o que vocês queriam ver",
      },
    ],
    inclusions: [
      "9 noites de acomodação: 2× hotel boutique em Delhi + 1× hotel boutique em Agra + 2× hotel-haveli histórico em Jaipur + 1× pousada histórica em Pushkar + 2× hotel histórico em Varanasi + 1× hotel próximo ao aeroporto de Delhi (quarto duplo)",
      "Veículo privado com ar-condicionado para todos os passeios e transferências por estrada (Delhi–Agra–Jaipur–Pushkar–Delhi)",
      "Voos domésticos de ida e volta Delhi ↔ Varanasi",
      "Guia profissional licenciado em cada cidade",
      "Visita guiada ao Taj Mahal ao nascer do sol",
      "Parada em Chand Baori (poço em degraus de Abhaneri) no trajeto Agra–Jaipur",
      "Passeio de camelo ao pôr do sol em Pushkar",
      "Passeio privado de barco no Ganges antes do amanhecer, em Varanasi",
      "Posicionamento VIP para a Ganga Aarti em Dashashwamedh Ghat",
      "Visita guiada a Sarnath, incluindo o Stupa Dhamek e a entrada no museu",
      "Visita a uma tecelagem de seda Banarasi",
      "9 cafés da manhã + 8 jantares",
      "Todas as tarifas de entrada em monumentos, fortes e templos listadas no roteiro",
      "Todos os pedágios, estacionamentos e diárias do motorista",
      "Suporte 24/7 durante a viagem — anfitrião GoTrustelle disponível a qualquer momento",
    ],
    exclusions: [
      "Voos internacionais de/para Delhi",
      "Permissão de fotografia no Taj Mahal (opcional, ₹200) e entrada no interior do mausoléu (₹200)",
      "Darshan Sugam/VIP em Kashi Vishwanath (opcional, aprox. ₹250)",
      "Almoços durante o passeio (orçamento ₹500–800 por refeição)",
      "Despesas pessoais: compras, gorjetas, bebidas",
      "Opção de elefante/jipe no Forte Amber ou safáris de camelo/jipe além dos listados",
      "Seguro de viagem e saúde (altamente recomendado)",
      "5% de GST sobre o valor total do pacote",
    ],
    pricing: [
      { label: "Quarto duplo — Standard, com Varanasi (a partir de Delhi)", priceEUR: 1899, priceINR: 206700 },
      { label: "Quarto duplo — Premium, com Varanasi (a partir de Delhi)", priceEUR: 2299, priceINR: 250400 },
      { label: "Quarto duplo — Standard, sem Varanasi, 7 dias (a partir de Delhi)", priceEUR: 1399, priceINR: 152400 },
    ],
    departures: [
      "19 – 28 de setembro de 2026 (partida de grupo fixa)",
      "17 – 26 de outubro de 2026 (partida de grupo fixa)",
      "14 – 23 de novembro de 2026 (partida de grupo fixa — Especial Feira do Camelo de Pushkar)",
      "28 de novembro – 7 de dezembro de 2026 (partida de grupo fixa)",
      "19 – 28 de dezembro de 2026 (partida de grupo fixa)",
      "Personalizável — contate-nos",
    ],
  },
};
const journeysNlOverrides: JourneyOverrideMap = {
  "kerala-backwaters-escape": {
    title: "Kerala Escape",
    subtitle: "Theeheuvels, kruidentuinen, een privé-woonboot en de backwaters van 'God's Own Country'",
    region: "Kochi, Munnar, Thekkady & Alleppey, Kerala, Zuid-India",
    route: "Kochi → Munnar → Thekkady → Alleppey (woonboot) → Kumarakom → Kochi",
    groupSize: "Max. 10 reizigers",
    difficulty: "Easy",
    summary:
      "Glooiende theeplantages in de wolken, een geurige wandeling door een actieve kruidenplantage, een nacht drijvend door palmomzoomde backwaters op een privé-woonboot, en een koloniale havenstad waar Chinese visnetten bij zonsondergang nog steeds in bedrijf zijn. Negen dagen door Kerala in al zijn veelzijdigheid.",
    overview:
      "Kerala noemt zichzelf 'God's Own Country', en na een week hier houdt bijna niemand het meer tegen. Deze 9-daagse rondreis gaat van Kochi's Fort Kochi-wijk — Portugese kerken, Chinese visnetten, joodse synagogen, allemaal binnen een paar vierkante kilometer — omhoog naar de koele theeheuvels van Munnar, verder naar de kruidentuinen en bosrijke heuvels van Thekkady aan de rand van het Periyar Tijgerreservaat, en uiteindelijk het water zelf op: een privé-woonboot door de backwaters van Alleppey, gevolgd door een rustiger verblijf aan het meer in Kumarakom. Het tempo van Kerala ligt lager dan in het noorden, het eten is buitengewoon (kokosnoot, currybladeren, vers gevangen zeevruchten, echt goed gezette filterkoffie), en het landschap verandert elke twee dagen compleet. We reizen doorlopend met een privé-voertuig met airconditioning, kiezen boutique- en heritage-accommodaties en houden de groep klein.",
    highlights: [
      "Een privé-overnachting op een woonboot in de backwaters van Alleppey — palmbossen, rijstvelden en dorpsleven, gezien vanaf het water",
      "Munnars theeplantages — glooiende groene heuvels, een actieve theefabriek en uitzichten over de Western Ghats",
      "Het Periyar Tijgerreservaat, Thekkady — een wandeling door een kruidenplantage en een boottocht op het Periyar-meer",
      "Fort Kochi — Chinese visnetten, Jewish Town, Portugese en Nederlandse koloniale architectuur in één wandelbare wijk",
      "Kumarakom — een rustiger verblijf aan het meer tussen mangroves en backwater-kanalen",
      "Een traditionele Kathakali-dansvoorstelling, Kochi",
    ],
    itinerary: [
      {
        day: 1,
        title: "Aankomst in Kochi — Wandeling door historisch Fort Kochi",
        description:
          "Aankomst in Kochi en transfer naar uw heritage-hotel in Fort Kochi. Aan het einde van de middag een wandeling door de oude wijk: de iconische Chinese visnetten langs de waterkant, de St. Francis Church (een van de oudste Europese kerken van India), het Dutch Palace, en de kruidenpakhuizen en antiekwinkels van Jew Town. Avondvoorstelling Kathakali — Kerala's eeuwenoude klassieke dansdrama, met uitgebreide make-up en kostuums.",
        overnight: "Heritage-hotel, Fort Kochi",
        highlight: "De Chinese visnetten bij zonsondergang — Kochi's meest iconische beeld, in het echt",
      },
      {
        day: 2,
        title: "Kochi hele dag — Markten, kruiden & de haven",
        description:
          "Een ontspannen volledige dag in Kochi: de kruidenmarkten van Mattancherry, een bezoek aan een actief antiek- en textielpakhuis, en tijd om op eigen tempo door de rustige koloniale straatjes van Fort Kochi te dwalen. Optionele boottocht in de middag rond de haven om de werkende visserboten en containerschepen langs te zien komen.",
        overnight: "Heritage-hotel, Fort Kochi",
        highlight: "De kruidenmarkten van Mattancherry — de geur van kardemom en tot het plafond gestapelde peperzakken",
      },
      {
        day: 3,
        title: "Kochi → Munnar — De theeheuvels op",
        description:
          "Rit omhoog door de Western Ghats naar Munnar (ongeveer 4 uur), waarbij het landschap verandert van kustvlakte naar met thee bedekte hellingen naarmate u klimt. Onderweg een stop bij de watervallen van Cheeyappara en Valara. Aankomst in Munnar in de middag en inchecken in uw resort op de heuvel, met uitzicht over glooiende theeplantages.",
        overnight: "Resort op de heuvel, Munnar",
        highlight: "De eerste blik op Munnars theeheuvels — groen in elke richting",
      },
      {
        day: 4,
        title: "Munnar hele dag — Theefabriek, Eravikulam & uitkijkpunten",
        description:
          "Bezoek aan een actieve theefabriek en museum om te zien hoe het blad de kop wordt, gevolgd door een rit naar het Eravikulam National Park, thuis van de bedreigde Nilgiri-tahr en enkele van de mooiste hooggelegen uitzichten van de Western Ghats. Middag bij Top Station en de Mattupetty-dam voor weidse panorama's over het theeland.",
        overnight: "Resort op de heuvel, Munnar",
        highlight: "Het Eravikulam National Park — tahr, graslanden en uitzicht zo ver het oog reikt",
      },
      {
        day: 5,
        title: "Munnar → Thekkady — Kruidentuinen & Periyar",
        description:
          "Rit naar Thekkady (ongeveer 3,5 uur) aan de rand van het Periyar Tijgerreservaat. Onderweg een wandeling door een actieve kruidenplantage — kardemom, peper, kaneel en kruidnagel groeien er samen onder het bosbladerdek, met een gids die uitlegt hoe elk gewas wordt verbouwd en geoogst. Aan het einde van de middag een boottocht op het Periyar-meer, met kans op wilde olifanten, bizons en vogels langs de oever.",
        overnight: "Boutique-resort, Thekkady",
        highlight: "De boottocht op het Periyar-meer — wilde olifanten aan de oever, als u geluk heeft",
      },
      {
        day: 6,
        title: "Thekkady → Alleppey — Aan boord van uw privé-woonboot",
        description:
          "Rit naar Alleppey (ongeveer 4 uur) en instappen op uw privé traditionele kettuvallam-woonboot (rijstschuit) in de vroege middag. Langzame vaart door de backwaters — palmomzoomde kanalen, rijstvelden onder zeeniveau, dorpsleven dat zich langs de oevers ontvouwt — met alle maaltijden vers aan boord bereid door uw eigen bemanning. Overnachten op een rustig stuk water.",
        overnight: "Privé-woonboot, backwaters van Alleppey",
        highlight: "Zonsondergang op de backwaters vanaf het dek van uw woonboot",
      },
      {
        day: 7,
        title: "Backwaters van Alleppey → Kumarakom",
        description:
          "Wakker worden bij het geluid van water en vogels. Een laatste rustige ochtendvaart voordat u aan land gaat in Kumarakom, een rustiger backwater-plaats aan de oever van het Vembanad-meer — Kerala's grootste meer — bekend om zijn vogelreservaat en mangrove-omzoomde kanalen. Inchecken bij een resort aan het meer voor een rustiger tempo na de woonboot.",
        overnight: "Resort aan het meer, Kumarakom",
        highlight: "Het van boord gaan in de stilte van Kumarakom na een nacht op het water",
      },
      {
        day: 8,
        title: "Kumarakom — Vogelreservaat & rustdag",
        description:
          "Een rustige dag: een optioneel bezoek aan het Kumarakom Bird Sanctuary, een kanotocht door de kleinere mangrove-kanalen, of gewoon tijd bij het resort aan het meer. In de middag rijdt u terug naar Kochi (ongeveer 1,5 uur) voor uw laatste nacht.",
        overnight: "Heritage-hotel, Fort Kochi",
        highlight: "Kumarakoms mangrove-kanalen per kano — de backwaters op hun stilste",
      },
      {
        day: 9,
        title: "Kochi — Vertrek",
        description:
          "Een laatste ontspannen ochtend — nog een wandeling langs de waterkant van Fort Kochi, een laatste filterkoffie, voor de transfer naar de luchthaven van Kochi voor uw vertrek. Ons team bevestigt uw aansluitende vlucht en zwaait u uit.",
        overnight: "—",
        highlight: "De laatste ochtend bij de Chinese visnetten voordat u vertrekt",
      },
    ],
    inclusions: [
      "8 nachten accommodatie: 2× heritage-hotel Fort Kochi + 2× resort op de heuvel Munnar + 1× boutique-resort Thekkady + 1× privé-woonboot Alleppey + 1× resort aan het meer Kumarakom + 1× heritage-hotel Fort Kochi (tweepersoonskamer)",
      "Privé-voertuig met airconditioning voor alle bezichtigingen en transfers tussen steden gedurende de gehele reis",
      "Privé-woonboot voor een volledige dag en overnachting op de backwaters van Alleppey, alle maaltijden aan boord inbegrepen",
      "Professionele erkende gids in Kochi, Munnar en Thekkady",
      "Wandeling door de kruidenplantage, Thekkady",
      "Boottocht op het Periyar-meer",
      "Kathakali-dansvoorstelling, Kochi",
      "8 ontbijten + 7 diners (inclusief alle maaltijden aan boord van de woonboot)",
      "Alle in het reisschema genoemde toegangsgelden voor monumenten, parken en reservaten",
      "Alle tol, parkeerkosten en chauffeurstoeslagen",
      "24/7 ondersteuning tijdens de reis — GoTrustelle-gastheer altijd beschikbaar",
    ],
    exclusions: [
      "Internationale of binnenlandse vluchten naar/van Kochi",
      "Lunches buiten de woonbootdag (budget ₹400–700 per maaltijd)",
      "Persoonlijke uitgaven: winkelen, fooien, drankjes",
      "Optionele activiteiten: ayurvedische spabehandelingen, extra kanotochten",
      "Reis- en medische verzekering (sterk aanbevolen)",
      "5% GST op de totale pakketprijs",
    ],
    pricing: [
      { label: "Tweepersoonskamer — Standaard (vanaf Kochi)", priceEUR: 1699, priceINR: 185000 },
      { label: "Tweepersoonskamer — Premium (vanaf Kochi)", priceEUR: 2099, priceINR: 228500 },
    ],
    departures: ["Op maat — neem contact op"],
  },
  "rishikesh-himalayan-escape": {
    title: "Rishikesh & Himalaya-ontsnapping",
    subtitle: "Premium · 7 dagen · Een zachte, veilige introductie tot India — waar je je welkom voelt, niet verdwaald",
    region: "Uttarakhand, Noord-India",
    route: "Delhi → Rishikesh → Chopta → Himalaya-dorp → Rishikesh → Delhi",
    groupSize: "Max. 8 reizigers",
    difficulty: "Easy",
    summary:
      "Privéyoga aan de oevers van de Ganges, de hoogste Shiva-tempel ter wereld, een echt Himalaya-familiehuis en een spa-reset — allemaal in zeven zorgvuldig samengestelde dagen. De premium manier om India voor de allereerste keer te ervaren.",
    overview:
      "De meeste reizigers die voor het eerst naar India komen, arriveren met een mengeling van opwinding en stille onzekerheid — de kleuren, de drukte, het onbekende. Deze reis van 7 dagen is speciaal ontworpen om die onzekerheid te laten verdwijnen en te vervangen door iets wat je niet zou verwachten: een gevoel van thuiskomen. We hebben deze ervaring gemaakt voor Europeanen die India op zijn eigen voorwaarden willen ontmoeten, zonder overweldigd te worden. Je slaapt in met de hand geselecteerde luxeaccommodaties met schone bedden, betrouwbaar warm water en gefilterd drinkwater bij elke stop. Je reist uitsluitend in privé, geklimatiseerde voertuigen met professionele chauffeurs die we persoonlijk kennen. Je eet voedsel dat we hebben gecontroleerd op hygiëne en versheid. En bij dit alles — van je eerste yogales aan de Ganges tot het moment waarop je de top van de Chandrashila bereikt en de hele Himalayaketen zich voor je ontvouwt — is Shikha of een senior GoTrustelle-gastheer aanwezig, niet als reisgids maar als een vriendin die toevallig heel goed thuis is in India. Het dorpsbezoek op dag 5 is ons trotste aanbod: een echte Himalaya-familiewelkom, samen koken, verhalen bij de chai — de middag waardoor je Instagram helemaal vergeet. Dit is geen rondreis door India. Dit is jouw introductie tot het India dat bestaat voorbij de reisroute.",
    highlights: [
      "VIP Ganga Aarti — intieme plek weg van de drukte, vuur op de rivier bij schemering",
      "Privé zonsopgangyoga aan de oevers van de Ganges — geschikt voor beginners, diep herstellend",
      "Chandrashila-top (4.000 m) — 360°-Himalayapanorama boven de hoogste Shiva-tempel ter wereld",
      "Dorpsimmersie op dag 5 — koken, verhalen en chai met een echte Himalaya-familie (geen geënsceneerd toerisme)",
      "Kampvuur en sterrenkijken in Chopta — geen lichtvervuiling, de Melkweg boven je hoofd",
      "Spa- en klankhealing-reset in Rishikesh — het perfecte slothoofdstuk voor je naar huis gaat",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → Rishikesh — Privétransfer & zachte landing",
        description:
          "Je chauffeur ontvangt je op de luchthaven van Delhi of bij je hotel in een schone, geklimatiseerde privé-SUV. De rit van 5 tot 6 uur door de vlakten van de Ganges en de Shivalik-heuvels is je eerste kennismaking met India op het juiste tempo — geen bussen, geen vreemden, alleen jij en het veranderende landschap. Aankomst in Rishikesh met een welkomstdrankje en check-in in je luxe accommodatie aan de rivier. De avond is voor jou: adem de Himalaya-lucht in, luister naar de Ganges, en kom zachtjes tot rust met een lichte, verzorgde maaltijd (continentale en Indiase opties) op het terras aan de rivier.",
        overnight: "Luxehotel aan de rivier, Rishikesh (Taj Rishikesh of gelijkwaardig)",
        highlight: "Eerste avond aan de Ganges — de stad die nooit helemaal India aanvoelt en toch nergens anders op lijkt",
      },
      {
        day: 2,
        title: "Rishikesh — Yoga, cafécultuur & VIP Ganga Aarti",
        description:
          "De ochtend begint met een privé begeleide yogales aan de oevers van de Ganges — geschikt voor beginners, diep verankerend en anders dan elke studioles die je hebt gevolgd. Rustig ontbijt met uitzicht op de rivier, daarna is de rest van de ochtend voor jou om Rishikesh' verborgen café-scene te verkennen, de boekwinkels en kruidenstalletjes van Tapovan, en de hangbruggen van Laxman Jhula, in je eigen tempo. In de middag neemt Shikha je mee naar haar favoriete plekken — die je niet in de reisgidsen vindt. Als de zon ondergaat, nemen we privéplekken in bij Triveni Ghat voor de Ganga Aarti: priesters die vuur dragen, duizend drijvende lampjes, devotionele muziek die opstijgt boven de rivier. Niet de versie die toeristen van een afstand zien — de versie die je van dichtbij ervaart, persoonlijk begeleid en volledig aanwezig.",
        overnight: "Luxehotel aan de rivier, Rishikesh",
        highlight: "Privéyoga bij zonsopgang + VIP Ganga Aarti bij schemering",
      },
      {
        day: 3,
        title: "Rishikesh → Chopta — De bergen in",
        description:
          "Na een ontspannen ontbijt rijd je oostwaarts het Kedarnath Wildlife Sanctuary in, terwijl de wegen smaller worden en het Himalayawoud dichter om je heen groeit. De rit van 6 tot 7 uur maakt deel uit van de ervaring — watervallen doemen op langs de weg, dorpen klampen zich vast aan heuvelhellingen, en de lucht verandert merkbaar terwijl je klimt. Aankomst in Chopta (2.680 m) — Uttarakhands 'Mini-Zwitserland' — in de vroege avond. Je boutique bergonderkomen is warm, intiem en onberispelijk schoon. Het avondmaal vanavond is biologisch en huisgemaakt, klaargemaakt door de familie van de lodge. Na het eten wordt, als de lucht helder is (wat meestal het geval is), het kampvuur aangestoken en begint het sterrenkijken. De Melkweg hier is iets wat je meeneemt naar huis.",
        overnight: "Boutique bergeco-lodge, Chopta (Himalayan Eco Lodge of gelijkwaardig)",
        highlight: "Kampvuur, berglucht en een lucht die je niet goed genoeg kunt fotograferen",
      },
      {
        day: 4,
        title: "Chandrashila-top (4.000 m) & Tungnath-tempel — Signature-dag",
        description:
          "Vroege start om de top te bereiken voordat de wolken zich vormen. De trekking klimt 3,5 km door rododendronbos en brede alpenweiden naar de Tungnath-tempel — het hoogste Shiva-heiligdom ter wereld op 3.680 m, meer dan 1.000 jaar geleden gebouwd. Houd hier even halt. Steek een wierookstokje aan. Laat de stilte binnenkomen. Daarna nog een laatste 1,5 km naar de Chandrashila-top op 4.000 m, waar het volledige Garhwal-Himalayapanorama zich in alle richtingen ontvouwt: Nanda Devi, Trishul, Chaukhamba, Kedarnath. Dit moment — boven de wolken staan, omringd door bergtoppen die millennia nodig hadden om te vormen — is degene die reizigers maanden later nog beschrijven. Onze gids houdt een langzaam, comfortabel tempo aan; deze trekking is volledig haalbaar voor beginners. Terug naar de lodge voor een warme lunch, rust en een premium avondmaal.",
        overnight: "Boutique bergeco-lodge, Chopta",
        highlight: "Top op 4.000 m boven de wolken — het emotionele hoogtepunt van de reis",
      },
      {
        day: 5,
        title: "Himalaya-dorpsdag — Koken, verhalen & echte verbinding",
        description:
          "Dit is GoTrustelles signature-dag — de dag die deze reis onderscheidt van elk ander India-pakket dat je zult vinden. We bezoeken een nabijgelegen Himalaya-dorp en brengen een halve dag door bij een lokale familie: helpen bij het koken van een traditionele Garhwali-maaltijd op een houtvuur, met gekruiste benen in een binnenplaats zitten en leren over het dagelijkse bergleven, luisteren naar verhalen die in geen enkele reisgids voorkomen. Geen acteurs, geen geënsceneerde optredens — alleen echte mensen die hun huis openstellen omdat Shikha hier jarenlang echte relaties heeft opgebouwd. Je deelt een maaltijd die anders smaakt dan alles wat je verder in India zult proeven, en je blijft waarschijnlijk veel langer dan het schema voorschrijft. Dit is de middag waarvan de meeste reizigers zeggen dat het hun kijk op reizen volledig heeft veranderd.",
        overnight: "Boutique bergeco-lodge, Chopta (of guesthouse onderweg)",
        highlight: "De middag waardoor je Instagram vergeet",
      },
      {
        day: 6,
        title: "Chopta → Rishikesh — Spa-reset & luxe avond",
        description:
          "Terugkeer naar Rishikesh met de bergen nog vers in je lichaam. Check opnieuw in bij je accommodatie aan de rivier, en de middag is volledig gewijd aan herstel: een verzorgde spa-sessie (Ayurvedische massage, aromatherapie of diepe weefselmassage — jouw keuze), gevolgd door optionele klankhealing of begeleide meditatie als je lichaam daar behoefte aan heeft. Het avondmaal vanavond is een verheven, ontspannen groepsaangelegenheid — Shikha sluit zich aan om de week te vieren met heerlijk eten, gelach en die bijzondere warmte die alleen ontstaat tussen mensen die iets echts hebben gedeeld.",
        overnight: "Luxehotel aan de rivier, Rishikesh",
        highlight: "Himalaya spa-reset — de bergen die zich in je spieren oplossen",
      },
      {
        day: 7,
        title: "Rishikesh → Delhi — Vertrek met zorg",
        description:
          "Een rustige laatste ochtend: chai aan de rivier, een laatste wandeling naar de ghat. Je privévoertuig vertrekt na het ontbijt naar de luchthaven van Delhi of een hotel in de stad (5 tot 6 uur). Je chauffeur regelt je bagage, kent de routes en brengt je op tijd. Als je een trein hebt in plaats van een vlucht, regelen we alles vooraf. Je vertrekt met iets wat de meeste toeristen niet hebben: een duidelijk, sterk gevoel dat je iets over dit land hebt begrepen — niet alleen gezien.",
        overnight: "—",
        highlight: "Laatste chai aan de Ganges — India met je meenemen naar huis",
      },
    ],
    inclusions: [
      "6 nachten luxe- en boutique-accommodatie: 2× premium hotel aan de rivier in Rishikesh + 2× boutique eco-lodge in Chopta + 2× premium hotel aan de rivier in Rishikesh (tweepersoonskamer)",
      "Privé, geklimatiseerde SUV of Innova Crysta voor alle transfers (nooit gedeelde bussen)",
      "Professionele, gecontroleerde chauffeur — dezelfde chauffeur voor de hele reis",
      "Privé begeleide yogales aan de Ganges (dag 2)",
      "VIP Ganga Aarti-plek bij Triveni Ghat — persoonlijk begeleid",
      "Gecertificeerde Himalaya-trekgids voor de dag van de Chandrashila-top",
      "Trekvergunningen voor de Chandrashila-top en de Tungnath-tempel",
      "Himalaya-dorpservaring — huisgemaakte familielunch inbegrepen (dag 5)",
      "Kampvuur- en sterrenkijkavond in Chopta",
      "Spa-sessie in Rishikesh — Ayurvedische of diepe weefselmassage (dag 6)",
      "6 ontbijten + 5 avondmaaltijden (biologisch, hygiënisch, waar mogelijk lokaal geproduceerd)",
      "Welkomstdrankje bij aankomst in Rishikesh",
      "Gefilterd water tijdens de hele reis",
      "Alle tolgelden, parkeerkosten en chauffeursvergoedingen",
      "24/7 persoonlijke gastheerondersteuning — Shikha of een senior GoTrustelle-teamlid gedurende de hele reis aanwezig",
    ],
    exclusions: [
      "Internationale of binnenlandse vluchten naar/van Delhi",
      "Lunches tijdens de reis (we adviseren vertrouwde lokale restaurants — reken op ongeveer €8–12 per maaltijd)",
      "Optionele activiteiten: wildwaterraften, bungeejumpen, kajakken (tegen extra kosten te regelen)",
      "Persoonlijke uitgaven: winkelen, alcoholische dranken, fooien",
      "Reis- en zorgverzekering (sterk aanbevolen — evacuatiedekking geadviseerd)",
      "Camerakosten bij bepaalde tempels",
      "Eventuele kosten door wegafsluitingen, aardverschuivingen of weersvertragingen (moessonseizoen in Uttarakhand)",
    ],
    pricing: [
      { label: "Tweepersoonskamer — Premium (vanaf Delhi)", priceEUR: 1299, priceINR: 141400 },
      { label: "Tweepersoonskamer — Standaard (vanaf Delhi)", priceEUR: 1499, priceINR: 163200 },
    ],
    departures: ["Op maat — neem contact op"],
  },
  "paradise-of-kashmir": {
    title: "Paradijs van Kasjmir",
    subtitle: "Shikara-tochtjes, Mughal-tuinen en de Gouden Weide",
    region: "Jammu en Kasjmir, Noord-India",
    route: "Srinagar → Gulmarg → Pahalgam → Sonmarg → Srinagar",
    groupSize: "Max. 10 reizigers",
    difficulty: "Easy",
    summary:
      "Glijd over het Dal-meer in een handgesneden shikara, dwaal door de Bloemenweide van Gulmarg en picknick langs door gletsjers gevoede rivieren. De zachtste introductie tot de Himalaya.",
    overview:
      "Kasjmir heeft de bijnaam 'Hemel op Aarde' niet voor niets. Deze groepsreis van 5 dagen draait om drie van de meest adembenemende valleien in de Indiase Himalaya — Gulmarg, Pahalgam en Sonmarg — met genoeg tijd om ook in Srinagar zelf tot rust te komen. U slaapt op een traditionele woonboot, vaart bij zonsopgang over de met lotussen bedekte kanalen van het Dal-meer en bezoekt de Mughal-tuinen die keizers inspireerden. Ideaal voor mensen die voor het eerst naar India reizen en voor reizigers die bergschoonheid willen zonder een zwaar reisschema.",
    highlights: [
      "Verblijf op een handgesneden houten woonboot op het Dal-meer",
      "Kabelbaan boven de alpenweiden van Gulmarg",
      "Natuurwandelingen langs de Lidder-rivier in Pahalgam",
      "Sonmarg — de Gouden Weide — met uitzicht op de Thajiwas-gletsjer",
      "Mughal-tuinen: Nishat Bagh, Shalimar Bagh en de Shankaracharya-tempel",
    ],
    itinerary: [
      {
        day: 1,
        title: "Aankomst in Srinagar + Mughal-tuinen",
        description:
          "Aankomst op de luchthaven van Srinagar en transfer naar uw woonboot op het Dal-meer. Middagbezoek aan Nishat Bagh en Shalimar Bagh (de Tuin van Genot en het Verblijf van Alle Genoegens), gevolgd door de Shankaracharya-tempel met zijn uitzicht op de vallei bij zonsondergang.",
        overnight: "Deluxe woonboot op het Dal-meer",
        highlight: "Shikara-tochtje bij zonsondergang",
      },
      {
        day: 2,
        title: "Dagtrip naar Gulmarg",
        description:
          "Rit van 53 km naar Gulmarg (2.650 m), ook bekend als de Bloemenweide. Ga met de op één na hoogste kabelbaan van de wereld naar Kongdori voor panoramisch uitzicht op de Himalaya, verken de golfbaan (de hoogste 18-holesbaan ter wereld) en keer 's avonds terug naar Srinagar.",
        overnight: "Deluxe hotel / woonboot in Srinagar",
        highlight: "Kabelbaan van Gulmarg",
      },
      {
        day: 3,
        title: "Dagtrip naar Pahalgam",
        description:
          "Dagexcursie naar Pahalgam, de 'Vallei van de Herders.' Natuurwandelingen langs de Lidder-rivier, optionele ponyritten naar de Baisaran-weide, en een picknicklunch tussen de dennenbossen.",
        overnight: "Deluxe hotel / woonboot in Srinagar",
        highlight: "Wandelingen langs de Lidder-rivier",
      },
      {
        day: 4,
        title: "Dagtrip naar Sonmarg",
        description:
          "Rit naar Sonmarg (2.750 m) — de 'Gouden Weide.' Besneeuwde toppen, de Sindh-rivier vol forel, en een optionele ponyrit naar de Thajiwas-gletsjer.",
        overnight: "Deluxe hotel / woonboot in Srinagar",
        highlight: "Thajiwas-gletsjer",
      },
      {
        day: 5,
        title: "Vertrek",
        description:
          "Rustig ontbijt, optioneel laatste shikara-tochtje, en transfer naar de luchthaven van Srinagar voor uw terugvlucht.",
        overnight: "—",
        highlight: "Laatste zonsopgang boven het Dal-meer",
      },
    ],
    inclusions: [
      "4 nachten verblijf met twee personen per kamer (MAP-basis)",
      "Alle luchthaventransfers + privévoertuig voor sightseeing",
      "Dagelijks ontbijt en diner",
      "Shikara-tochtje van 1 uur op het Dal-meer",
      "Ontvangst en assistentie door onze lokale vertegenwoordiger bij aankomst",
    ],
    exclusions: [
      "Vliegtickets naar/van Srinagar",
      "Lunches tijdens de excursiedagen",
      "Entreegelden, kabelbaankaartjes (Gulmarg Gondola), ponyritten",
      "Persoonlijke uitgaven (fooien, wasserij, dranken)",
      "5% GST over het totale pakket",
    ],
    pricing: [
      { label: "Deluxe (6 pers.)", priceEUR: 1699, priceINR: 185000 },
      { label: "Premium (6 pers.)", priceEUR: 1799, priceINR: 195900 },
      { label: "Royal (6 pers.)", priceEUR: 1899, priceINR: 206700 },
    ],
    departures: ["Op maat — neem contact op"],
  },
  "golden-triangle-pushkar-varanasi": {
    title: "Golden Triangle, Pushkar & Varanasi",
    subtitle: "Delhi · Agra · Jaipur · Pushkar · Varanasi — de klassieke route aangevuld met een woestijnmeer en de oudste stad op aarde",
    region: "Delhi, Agra, Jaipur, Pushkar & Varanasi, Noord-India",
    route: "Delhi → Agra → Jaipur → Pushkar → Delhi → Varanasi (optioneel) → Delhi",
    groupSize: "Max. 10 reizigers",
    difficulty: "Easy",
    summary:
      "De Taj Mahal bij zonsopgang, een Rajput-fort dat boven een meer uittorent, een 1.200 jaar oude trapput die diep in de aarde is uitgehouwen, kamelen die duinen oversteken bij een heilig woestijnmeer en — voor wie dat toevoegt — de oudste ononderbroken bewoonde stad op aarde. Tien dagen speciaal opgezet voor mensen die India voor het eerst bezoeken, waarbij elke reisafstand, elk toegangsbewijs en elke openingstijd vooraf gecontroleerd is.",
    overview:
      "Dit is het reisschema dat we het vaakst samenstellen voor reizigers uit Europa en Noord-Amerika die voor het eerst naar India gaan, omdat het antwoord geeft op de vraag 'wat moet ik in tien dagen nu echt zien?' zonder te haasten of te overladen. Het begint met de Golden Triangle — Delhi, Agra, Jaipur — de essentiële introductie tot India, en buigt daarna naar het zuidwesten richting Pushkar, een klein heilig stadje aan een heilig meer dat de meeste eerste-keer-reizigers nooit bereiken en dat ze bijna altijd het hoogtepunt van de reis noemen. Vanuit Pushkar keren we terug naar Delhi en, voor gasten die dat willen, vliegen we door naar Varanasi — de oudste nog levende stad op aarde, waar de Ganges stroomt tussen de wereld van de levenden en die daarna. We reizen volledig per privé airconditioned voertuig tussen Delhi, Agra, Jaipur en Pushkar (met realistische reistijden ingepland voor elke dag, niet de 'optimistische' cijfers die sommige reisorganisaties gebruiken), en met een korte binnenlandse vlucht tussen Delhi en Varanasi in plaats van een trein van meer dan 8 uur, omdat op een reis van 10 dagen uw tijd de schaarste hulpbron is. Elk monumentbezoek in dit reisschema is afgestemd op de werkelijke openingstijden en de huidige toegangsprijs voor buitenlandse bezoekers — zonsopgang bij de Taj voordat de rijen ontstaan, Amber Fort voor de middaghitte, de Ganga Aarti op het uur waarop deze werkelijk wordt uitgevoerd. Shikha of een GoTrustelle-gastheer is de hele reis bereikbaar, en de gehele reis is opgezet rond de vragen die Europese en Amerikaanse reizigers het vaakst stellen: is het veilig, wat eet ik, wat draag ik, en hoe kom ik van A naar B zonder een dag in het verkeer te verliezen.",
    highlights: [
      "De Taj Mahal bij zonsopgang — 30 minuten met het marmer helemaal voor jezelf, voordat de drukte arriveert",
      "Amber Fort, Jaipur — een Rajput-heuvelfort met spiegelzalen boven een meer",
      "Chand Baori, Abhaneri — de 1.200 jaar oude trapput die lokale bewoners nog steeds 'baori ki haveli' noemen, 3.500 perfect symmetrische treden die 13 verdiepingen diep in de aarde zakken",
      "Pushkar — een heilig meerstadje met 52 ghats, de enige belangrijke Brahma-tempel in India, en kamelen bij zonsondergang over de duinen",
      "De Pushkar Kamelenmarkt (alleen vertrek van 14–23 november) — het grootste volksfeest van Rajasthan, duizenden kamelen, handelaren en artiesten aan de rand van het meer",
      "Ganga Aarti bij Dashashwamedh Ghat, Varanasi (optionele verlenging) — vuur, gezang en schelphoorns aan de rivier, elke avond al eeuwenlang",
      "Bootrit op de Ganges vóór zonsopgang, Varanasi (optionele verlenging) — de ghats die uit de mist opdoemen terwijl de stad ontwaakt",
      "Red Fort, Qutub Minar & Humayun's Tomb, Delhi — drie UNESCO-locaties op één ontspannen dag",
    ],
    itinerary: [
      {
        day: 1,
        title: "Aankomst in Delhi — Welkomstdiner",
        description:
          "Landing in Delhi en transfer naar uw boutique hotel in een centrale, goed te voet bereikbare wijk. Gebruik de middag om te rusten en te wennen — na een langeafstandsvlucht laten we dit bewust open in plaats van bezichtigingen te plannen. 's Avonds een welkomstdiner met uw GoTrustelle-gastheer: een rustige, begeleide introductie tot de Indiase keuken (butter chicken, dal makhani, vers naanbrood, een of twee milde regionale curry's), met duidelijk uitgelegde vegetarische, veganistische en niet-scherpe opties. Dit is ook het moment waarop we de komende tien dagen doornemen, eerste vragen beantwoorden en ervoor zorgen dat iedereen een werkende lokale simkaart of eSIM heeft.",
        overnight: "Boutique hotel, Centraal Delhi",
        highlight: "Welkomstdiner — uw eerste, rustige introductie tot de Indiase keuken, zonder verrassingen",
      },
      {
        day: 2,
        title: "Volledige dag Delhi — Oud en Nieuw Delhi",
        description:
          "Een volledige dag die beide gezichten van de hoofdstad laat zien, in een tempo dat rekening houdt met de jetlag. 's Ochtends in Oud-Delhi: het Red Fort, de 17e-eeuwse Mogol-citadel van Shah Jahan (toegang buitenlanders ₹600; open van 9.30 tot 16.30 uur, gesloten op maandag — we plannen de week hierop af), gevolgd door de Jama Masjid, de grootste moskee van India, en een fietsriksja-tocht door de steegjes van Chandni Chowk. Na de lunch, Nieuw-Delhi: Humayun's Tomb, het 16e-eeuwse tuinmausoleum dat de Taj Mahal inspireerde (toegang buitenlanders ₹550; dagelijks open van 6 tot 18 uur), en Qutub Minar, een 73 meter hoge minaret uit de 12e eeuw omringd door oude ruïnes (toegang buitenlanders ₹550; dagelijks open van 7 tot 17 uur). Een rustige rit langs India Gate en Rashtrapati Bhavan sluit de dag af voor het avondeten.",
        overnight: "Boutique hotel, Centraal Delhi",
        highlight: "Humayun's Tomb — het gebouw dat Shah Jahan leerde hoe de Taj te bouwen",
      },
      {
        day: 3,
        title: "Delhi → Agra over de weg — Agra Fort & Mehtab Bagh bij zonsondergang",
        description:
          "Vertrek uit Delhi halverwege de ochtend voor de rit naar Agra (ca. 230 km via de Yamuna Expressway, 3,5–4 uur bij realistische verkeersomstandigheden — met een ingeplande rustpauze). Na de lunch en het inchecken, bezoek aan Agra Fort, de rood-zandstenen Mogol-citadel waar Shah Jahan zijn laatste jaren gevangen door zijn eigen zoon doorbracht, uitkijkend op de Taj aan de overkant van de rivier (toegang buitenlanders ₹650, ₹600 op vrijdag; dagelijks open van 6 tot 18 uur, laatste toegang 17.30 uur). Als het licht goudkleurig wordt, steken we over naar Mehtab Bagh — de tuin recht tegenover de Taj Mahal — voor het klassieke zonsondergangsuitzicht, zonder de drukte van het monument zelf.",
        overnight: "Boutique hotel, Agra",
        highlight: "De Taj Mahal vanaf Mehtab Bagh bij zonsondergang — de ansichtkaartfoto, bijna helemaal voor uzelf",
      },
      {
        day: 4,
        title: "De Taj Mahal bij zonsopgang — Agra → Jaipur via de trapput van Abhaneri",
        description:
          "Vroege start: de Taj Mahal gaat 30 minuten voor zonsopgang open (de kassa's een uur eerder), en dit eerste halfuur — zacht licht, weinig mensen — is de reden waarom we de hele reis hieromheen bouwen (toegang buitenlanders ₹1.100, plus ₹200 voor het binnenste mausoleum; kinderen onder de 15 gratis; elke vrijdag gesloten, in dat geval verschuift dit bezoek naar de middag van dag 3). Na het ontbijt, vertrek naar Jaipur (ca. 240 km, 4,5–5 uur), met een stop in Abhaneri om Chand Baori te zien — de 1.200 jaar oude trapput die lokale bewoners 'baori ki haveli' noemen, waarvan de 3.500 treden in perfecte geometrische symmetrie 13 verdiepingen diep afdalen (toegang buitenlanders ca. ₹300; dagelijks open van 8 tot 18 uur). Aankomst in Jaipur aan het begin van de avond en inchecken in uw historische haveli-hotel, met de avond vrij om de sieraden- en textielstalletjes van de Johari Bazaar te verkennen.",
        overnight: "Historisch haveli-hotel, Jaipur",
        highlight: "Chand Baori — een 1.200 jaar oude trapput die op niets lijkt wat u ooit heeft gezien",
      },
      {
        day: 5,
        title: "Volledige dag Jaipur — Amber Fort, City Palace, Jantar Mantar & Hawa Mahal",
        description:
          "'s Ochtends naar Amber Fort, aankomend vóór de middaghitte en de touringcars: een Rajput-heuvelfort met spiegelzalen en gebeeldhouwd marmer boven het Maota-meer (toegang buitenlanders ₹500; dagelijks open van 8 tot 17.30 uur). Na de lunch, het City Palace, nog altijd deels bewoond door de koninklijke familie van Jaipur (toegang buitenlanders ₹300, de Chandra Mahal-vertrekken tegen extra betaling; dagelijks open van 9.30 tot 17 uur), daarna Jantar Mantar, het 18e-eeuwse astronomische observatorium van maharadja Jai Singh II met zijn enorme stenen instrumenten (toegang buitenlanders ₹200; dagelijks open van 9.30 tot 16.30 uur). We sluiten af bij Hawa Mahal, het Paleis van de Winden, voor de klassieke foto vanaf de straat en, als u wilt, een kort bezoek binnen (toegang buitenlanders ₹200; dagelijks open van 9 tot 17 uur).",
        overnight: "Historisch haveli-hotel, Jaipur",
        highlight: "Amber Fort in het ochtendlicht — de Rajput-wereld op zijn prachtigst",
      },
      {
        day: 6,
        title: "Jaipur → Pushkar — Brahma-tempel, de ghats & kamelen bij zonsondergang",
        description:
          "Een comfortabele rit laat in de ochtend naar Pushkar (ca. 145 km, 2,5–3 uur). Inchecken en een middag te voet: de Brahma-tempel, een van de zeer weinige tempels gewijd aan Brahma in heel India (gratis toegang; schoenen uit, respectvolle kleding — schouders en knieën bedekt), en een wandeling rond de 52 ghats van het Pushkar-meer terwijl pelgrims lampjes op het water aansteken. Als de zon zakt, een korte kamelenrit de duinen net buiten de stad in voor de zonsondergang over de Aravalli-heuvels. Als u reist tijdens ons vertrek van 14–23 november, valt deze avond samen met de Pushkar Kamelenmarkt — duizenden kamelen, handelaren, acrobaten en muzikanten aan de rand van het meer, een van de grote schouwspelen van het landelijke Rajasthan.",
        overnight: "Historisch gasthuis, Pushkar",
        highlight: "Kamelenrit bij zonsondergang over de duinen van Pushkar",
      },
      {
        day: 7,
        title: "Pushkar → Delhi over de weg, dan vlucht naar Varanasi",
        description:
          "Een vroeg vertrek uit Pushkar (ca. 400 km terug naar Delhi, 7,5–8 uur over de weg — we starten om 7 uur om dit comfortabel te houden, met een echte lunchpauze). In Delhi, directe transfer naar de luchthaven voor uw aansluitende vlucht naar Varanasi (ca. 1,5 uur; meerdere avondvluchten per dag). Aankomst in Varanasi en transfer naar uw historische hotel in de oude stad, gekozen voor het rivieruitzicht vanaf het dakterras en de loopafstand tot de ghats. Als tijd en energie het toelaten, een optionele korte wandeling naar Dashashwamedh Ghat voor de avondlijke Ganga Aarti; anders een rustig avondeten en een vroege avond na een lange reisdag. (Deze Varanasi-verlenging is optioneel — reizigers die een kortere reis verkiezen, kunnen de reis al op dag 7 in Delhi beëindigen; zie de reistips.)",
        overnight: "Historisch hotel, oude stad van Varanasi",
        highlight: "Aankomen in Varanasi in de nacht — de ghats verlicht door vuur, zelfs na het invallen van de duisternis",
      },
      {
        day: 8,
        title: "Varanasi — Bootrit vóór zonsopgang, Kashi Vishwanath & de zijdewevers",
        description:
          "5.30 uur: een privéboot glijdt langs de ghats terwijl de stad ontwaakt — pelgrims dalen de trappen af in het halfdonker, rook stijgt op van de crematieghats, het licht verandert het water eerst in zilver, dan in goud. Terug voor het ontbijt, dan een begeleide wandeling naar de Kashi Vishwanath-tempel, een van de twaalf Jyotirlinga-heiligdommen van het hindoeïsme (algemene darshan is gratis; een optionele Sugam/VIP-darshan kost ca. ₹250 en vermijdt de wachtrij; tempel open van 2.30 tot 23 uur, met een darshanpauze van 11 tot 12.30 uur). Na de lunch, bezoek aan de wijk van de moslimwevers, waar families al generaties lang met de hand Banarasi-zijde weven — geen aankoopdruk, alleen om te kijken en het ambacht te begrijpen. 's Avonds VIP-plaatsen voor de Ganga Aarti bij Dashashwamedh Ghat — de nachtelijke vuurceremonie, al eeuwenlang op hetzelfde uur uitgevoerd.",
        overnight: "Historisch hotel, oude stad van Varanasi",
        highlight: "Ganga Aarti bij Dashashwamedh Ghat — vuur, schelphoorns en de rivier in het donker",
      },
      {
        day: 9,
        title: "Sarnath, dan avondvlucht terug naar Delhi",
        description:
          "Een ochtendrit van 13 km noordwaarts naar Sarnath, het hertenpark waar Boeddha zijn eerste preek gaf na zijn verlichting (toegang archeologisch park voor buitenlanders ca. ₹300, museum voor buitenlanders ca. ₹100, museum gesloten op vrijdag; terrein dagelijks open van 6 tot 18 uur). De Dhamek Stupa uit de 5e eeuw markeert nog altijd deze plek, en de rust hier is een bewust contrast met de intensiteit van Varanasi. Terugkeer voor een vrije middag — een laatste wandeling langs de ghats, een koffie op een dakterras, of gewoon rusten — voor een avondvlucht terug naar Delhi (ca. 1,5 uur). Transfer naar een hotel bij de luchthaven van Delhi om een vroeg of nachtelijk internationaal vertrek eenvoudig te maken.",
        overnight: "Hotel bij de luchthaven van Delhi",
        highlight: "De Dhamek Stupa in Sarnath — staan op de plek waar Boeddha 2.500 jaar geleden stond",
      },
      {
        day: 10,
        title: "Vertrek",
        description:
          "Een ontspannen laatste ochtend voor uw transfer naar de internationale luchthaven van Delhi. Ons team bevestigt vooraf de gegevens van uw retourvlucht en blijft bereikbaar tot u heeft ingecheckt. U vertrekt met de Taj bij zonsopgang, een trapput zoals nergens thuis, kamelen op een woestijnmeer en — als u de verlenging heeft toegevoegd — de oudste stad op aarde, waar het eeuwige vuur nog altijd brandt aan de oever van de rivier.",
        overnight: "—",
        highlight: "Een laatste koffie voor de luchthaven — tien dagen samengebald in alles wat u wilde zien",
      },
    ],
    inclusions: [
      "9 overnachtingen: 2× boutique hotel Delhi + 1× boutique hotel Agra + 2× historisch haveli-hotel Jaipur + 1× historisch gasthuis Pushkar + 2× historisch hotel Varanasi + 1× hotel bij de luchthaven van Delhi (tweepersoonskamer)",
      "Privé airconditioned voertuig voor alle bezichtigingen en wegtransfers (Delhi–Agra–Jaipur–Pushkar–Delhi)",
      "Binnenlandse retourvluchten Delhi ↔ Varanasi",
      "Professionele erkende gids in elke stad",
      "Begeleid bezoek aan de Taj Mahal bij zonsopgang",
      "Stop bij Chand Baori (trapput van Abhaneri) op de rit Agra–Jaipur",
      "Kamelenrit bij zonsondergang in Pushkar",
      "Privé bootrit op de Ganges vóór zonsopgang, in Varanasi",
      "VIP-plaatsing bij de Ganga Aarti bij Dashashwamedh Ghat",
      "Begeleid bezoek aan Sarnath inclusief Dhamek Stupa en museumtoegang",
      "Bezoek aan een Banarasi-zijdeweverij",
      "9 ontbijten + 8 avondmaaltijden",
      "Alle in het reisschema vermelde toegangsprijzen voor monumenten, forten en tempels",
      "Alle tolgelden, parkeerkosten en chauffeursvergoedingen",
      "24/7 ondersteuning tijdens de reis — GoTrustelle-gastheer voortdurend bereikbaar",
    ],
    exclusions: [
      "Internationale vluchten naar/van Delhi",
      "Fotografievergunning Taj Mahal (optioneel, ₹200) en toegang tot het binnenste mausoleum (₹200)",
      "Kashi Vishwanath Sugam/VIP-darshan (optioneel, ca. ₹250)",
      "Lunches tijdens de reis (budget ₹500–800 per maaltijd)",
      "Persoonlijke uitgaven: winkelen, fooien, drankjes",
      "Optie olifant/jeep bij Amber Fort of kamelen-/jeepsafari's boven op de vermelde onderdelen",
      "Reis- en medische verzekering (sterk aanbevolen)",
      "5% GST over de totale pakketprijs",
    ],
    pricing: [
      { label: "Tweepersoonskamer — Standaard, met Varanasi (vanaf Delhi)", priceEUR: 1899, priceINR: 206700 },
      { label: "Tweepersoonskamer — Premium, met Varanasi (vanaf Delhi)", priceEUR: 2299, priceINR: 250400 },
      { label: "Tweepersoonskamer — Standaard, zonder Varanasi, 7 dagen (vanaf Delhi)", priceEUR: 1399, priceINR: 152400 },
    ],
    departures: [
      "19 – 28 september 2026 (vaste groepsvertrek)",
      "17 – 26 oktober 2026 (vaste groepsvertrek)",
      "14 – 23 november 2026 (vaste groepsvertrek — Pushkar Kamelenmarkt Special)",
      "28 november – 7 december 2026 (vaste groepsvertrek)",
      "19 – 28 december 2026 (vaste groepsvertrek)",
      "Op maat — neem contact op",
    ],
  },
};

const journeysOverridesByLocale: Partial<Record<Locale, JourneyOverrideMap>> = {
  de: journeysDeOverrides,
  fr: journeysFrOverrides,
  es: journeysEsOverrides,
  it: journeysItOverrides,
  pt: journeysPtOverrides,
  nl: journeysNlOverrides,
};

/**
 * Returns the tour list localized for the given locale.
 * English is the source of truth; other locales overlay translated fields.
 */
export function getLocalizedJourneys(locale: Locale): Journey[] {
  if (locale === "en") return journeys;
  const overrides = journeysOverridesByLocale[locale];
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
