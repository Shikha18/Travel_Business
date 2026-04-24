/**
 * Tour catalog.
 * Add or edit tours here — the listing page and tour detail pages
 * are generated automatically from this array.
 */

export type TourDay = {
  day: number;
  title: string;
  description: string;
  overnight?: string;
  highlight?: string;
};

export type TourPricing = {
  label: string;       // e.g., "Twin sharing"
  priceEUR: number;    // per person in EUR (primary display currency)
  priceINR: number;    // per person in INR (secondary, for Indian guests)
};

export type Tour = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;       // use Unsplash URLs until you add your own images
  galleryImages: string[]; // 2-4 images
  region: string;
  durationNights: number;
  durationDays: number;
  route: string;           // e.g., "Delhi → Shimla → Kaza → Delhi"
  months: ("June" | "July" | "August" | "September")[];
  groupSize: string;       // e.g., "Max 12 travelers"
  difficulty: "Easy" | "Moderate" | "Challenging";
  summary: string;         // short card blurb
  overview: string;        // long paragraph for detail page
  highlights: string[];
  itinerary: TourDay[];
  inclusions: string[];
  exclusions: string[];
  pricing: TourPricing[];
  featured: boolean;
  departures: string[];    // e.g., ["June 14, 2026", "July 5, 2026"]
};

export const tours: Tour[] = [
  {
    slug: "spiti-summer-expedition",
    title: "Spiti Summer Expedition",
    subtitle: "High-altitude villages, ancient monasteries, Himalayan skies",
    heroImage:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1626016571747-c4c3afa33c26?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    ],
    region: "Himachal Pradesh, North India",
    durationNights: 6,
    durationDays: 7,
    route: "Delhi → Shimla → Chitkul → Tabo → Kaza → Kalpa → Shimla → Delhi",
    months: ["June", "July"],
    groupSize: "Max 12 travelers",
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
      },
      {
        day: 5,
        title: "Kaza → Key Monastery → Chicham Bridge → Kaza",
        description:
          "Visit the iconic Key Monastery at sunrise, then drive to Chicham Bridge — one of Asia's highest suspension bridges — for jaw-dropping gorge views.",
        overnight: "Guesthouse / hotel in Kaza",
        highlight: "The most photogenic day of the trip",
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
    pricing: [
      { label: "Twin / Triple sharing (from Shimla)", priceEUR: 2199, priceINR: 197900 },
      { label: "Twin / Triple sharing (from Delhi)", priceEUR: 2499, priceINR: 224900 },
      { label: "Double occupancy (from Delhi)", priceEUR: 2699, priceINR: 242900 },
    ],
    featured: true,
    departures: ["June 14, 2026", "July 5, 2026", "July 26, 2026"],
  },

  {
    slug: "paradise-of-kashmir",
    title: "Paradise of Kashmir",
    subtitle: "Shikara rides, Mughal gardens, and the Meadow of Gold",
    heroImage:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1609766856051-c84f45c0b3d0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613836256737-5c6d0a12fa3b?auto=format&fit=crop&w=1200&q=80",
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
    pricing: [
      { label: "Deluxe (6 pax)", priceEUR: 2099, priceINR: 188900 },
      { label: "Premium (6 pax)", priceEUR: 2499, priceINR: 224900 },
      { label: "Royal (6 pax)", priceEUR: 2899, priceINR: 260900 },
    ],
    featured: true,
    departures: ["June 7, 2026", "June 28, 2026", "July 19, 2026"],
  },

  {
    slug: "golden-triangle-classic",
    title: "Golden Triangle Classic",
    subtitle: "Delhi · Agra · Jaipur — India's most iconic circuit",
    heroImage:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    ],
    region: "Delhi, Uttar Pradesh & Rajasthan",
    durationNights: 5,
    durationDays: 6,
    route: "Delhi → Agra → Jaipur → Delhi",
    months: ["June", "July"],
    groupSize: "Max 12 travelers",
    difficulty: "Easy",
    summary:
      "The perfect first trip to India. Stand before the Taj Mahal at sunrise, ride an elephant up to Amber Fort, and feast on Old Delhi street food with a local food writer.",
    overview:
      "The Golden Triangle is the classic first trip to India — a loop through three extraordinary cities that together tell the story of Mughal emperors, Rajput kings, and modern India. Our version is small-group, curated, and designed for international travelers: air-conditioned vehicles, hand-picked heritage hotels, sunrise visits to beat the crowds, and local guides who bring history alive. Every meal, every transfer, every ticket is pre-arranged so you can be fully present.",
    highlights: [
      "Sunrise at the Taj Mahal with a private photographer's viewpoint",
      "Old Delhi food walk with a third-generation local",
      "Amber Fort elephant ascent & Jaipur's painted havelis",
      "Agra Fort and the abandoned city of Fatehpur Sikri",
      "Hands-on block-printing workshop in Jaipur",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi + evening food walk",
        description:
          "Airport pickup and check-in at a heritage hotel. After a rest, meet your group for an evening food walk through Old Delhi — paranthas, chaat, kebabs and kulfi — led by a third-generation food historian.",
        overnight: "Heritage hotel, Delhi",
      },
      {
        day: 2,
        title: "Delhi sightseeing",
        description:
          "Visit Jama Masjid, Humayun's Tomb, Qutub Minar and India Gate. Afternoon stroll through Lodi Gardens. Optional tuk-tuk ride through Chandni Chowk.",
        overnight: "Heritage hotel, Delhi",
        highlight: "Humayun's Tomb at golden hour",
      },
      {
        day: 3,
        title: "Delhi → Agra (Taj Mahal at sunset)",
        description:
          "Drive to Agra on the expressway. Arrive in time for a sunset viewing of the Taj Mahal from Mehtab Bagh across the Yamuna River.",
        overnight: "Boutique hotel, Agra",
        highlight: "Taj Mahal from Mehtab Bagh",
      },
      {
        day: 4,
        title: "Taj sunrise → Fatehpur Sikri → Jaipur",
        description:
          "Sunrise visit to the Taj Mahal when it's quiet. After breakfast, tour Agra Fort, then drive to Jaipur via the abandoned red-sandstone city of Fatehpur Sikri.",
        overnight: "Boutique hotel, Jaipur",
        highlight: "Sunrise Taj + Fatehpur Sikri",
      },
      {
        day: 5,
        title: "Jaipur — Amber Fort & block-printing workshop",
        description:
          "Morning ascent to Amber Fort, visit the Jal Mahal (water palace), Hawa Mahal (palace of winds), and Jantar Mantar observatory. Afternoon block-printing workshop with a family of master artisans.",
        overnight: "Boutique hotel, Jaipur",
        highlight: "Amber Fort + artisan workshop",
      },
      {
        day: 6,
        title: "Jaipur → Delhi departure",
        description:
          "Final morning at leisure or optional city walk. Drive back to Delhi airport for your onward flight.",
        overnight: "—",
      },
    ],
    inclusions: [
      "5 nights in handpicked heritage & boutique hotels (twin-sharing)",
      "Private air-conditioned vehicle for the entire circuit",
      "English-speaking local guides in each city",
      "Daily breakfast + 2 curated group dinners",
      "All monument entry tickets (Taj Mahal, Agra Fort, Amber Fort, etc.)",
      "Old Delhi food walk & Jaipur block-printing workshop",
      "24/7 on-tour support",
    ],
    exclusions: [
      "International flights",
      "Lunches & most dinners (your choice, we recommend places)",
      "Camera/video fees at monuments",
      "Personal expenses (shopping, beverages, tips)",
      "Travel insurance (strongly recommended)",
    ],
    pricing: [
      { label: "Twin sharing (standard)", priceEUR: 2399, priceINR: 215900 },
      { label: "Twin sharing (premium)", priceEUR: 2899, priceINR: 260900 },
      { label: "Single supplement", priceEUR: 699, priceINR: 62900 },
    ],
    featured: true,
    departures: ["June 10, 2026", "June 24, 2026", "July 8, 2026", "July 22, 2026"],
  },

  {
    slug: "dharamshala-triund-trek",
    title: "Dharamshala, Bir & the Triund Trek",
    subtitle:
      "Tibetan monasteries, paragliding skies, and a starlit night on the Triund ridge",
    // Paragliding hero — Bir-Billing is Asia's paragliding capital, so the
    // opening shot on the card / detail page now shows a paraglider in flight
    // rather than a generic Himachal mountain landscape. If this Unsplash ID
    // ever breaks, drop a local photo at /public/images/bir-paragliding.jpg
    // and change the URL to "/images/bir-paragliding.jpg".
    heroImage:
      "https://images.unsplash.com/photo-1523473827533-2a64d0d36748?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1523473827533-2a64d0d36748?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585506942812-e72b29cef752?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1609766856051-c84f45c0b3d0?auto=format&fit=crop&w=1200&q=80",
    ],
    region: "Himachal Pradesh, North India",
    durationNights: 6,
    durationDays: 7,
    route:
      "Delhi → McLeod Ganj → Dharamkot → Triund → Dharamkot → Bir-Billing → Dharamshala → Delhi",
    months: ["June", "July", "September"],
    groupSize: "Max 10 travelers",
    difficulty: "Moderate",
    summary:
      "Wake in a Tibetan hillside town, sleep under a million stars on the Triund ridge, and float over pine forests from Asia's paragliding capital. A slow week in the soul of Himachal.",
    overview:
      "This week-long circuit weaves together the three most loved corners of Himachal's Kangra Valley — McLeod Ganj (the Dalai Lama's home-in-exile), Dharamkot (a hillside village of cafés, yoga, and long afternoons), and Bir-Billing (the paragliding capital of Asia). At its heart sits the classic Triund Trek: a gentle but stunning overnight hike up to a grassy ridge at 9,400 ft, where the Dhauladhar range feels close enough to touch. We trek in a small group with two experienced local guides, stay in a proper high-altitude campsite, and wake up to one of the most photographed sunrises in India. Designed for travelers who want real Himalayan trekking without a hardcore expedition, and who love slow cafés as much as mountain trails.",
    highlights: [
      "Overnight Triund Trek (9,400 ft) with sunrise over the Dhauladhars",
      "Tea with Tibetan monks at Namgyal & Tsuglagkhang monasteries, McLeod Ganj",
      "Slow café mornings in Dharamkot — banana pancakes, yoga, pine views",
      "Tandem paragliding over the Kangra Valley from Billing (weather permitting)",
      "Kangra Fort, Norbulingka Tibetan arts institute & the 9th-century Baijnath temple",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → McLeod Ganj (overnight journey)",
        description:
          "Meet your group in Delhi in the evening and board an overnight Volvo coach up to McLeod Ganj. The drive gradually climbs out of the plains and into the Dhauladhar foothills — arrive at breakfast.",
        overnight: "On board (semi-sleeper Volvo)",
      },
      {
        day: 2,
        title: "Arrival in McLeod Ganj — Tibetan quarter & monasteries",
        description:
          "Check into a hillside guesthouse in McLeod Ganj. After breakfast and a rest, visit the Dalai Lama's Tsuglagkhang temple complex, Namgyal Monastery, and the Tibet Museum. Evening walk through the Bhagsu Nag temple and waterfall area.",
        overnight: "Boutique guesthouse, McLeod Ganj",
        highlight: "Tibetan prayer flags, thangka paintings, momos for dinner",
      },
      {
        day: 3,
        title: "McLeod Ganj → Dharamkot (slow café day + trek briefing)",
        description:
          "Short walk over to Dharamkot — the quieter, greener sibling village. Morning at a hillside yoga class (optional), afternoon in the pine-shaded cafés overlooking the valley. Evening trek briefing with your mountain guide: gear check, altitude notes, what to pack for the ridge.",
        overnight: "Guesthouse in Dharamkot",
        highlight: "Banana pancakes with a Dhauladhar view",
      },
      {
        day: 4,
        title: "Dharamkot → Triund Trek (9,400 ft) — overnight on the ridge",
        description:
          "A classic 9 km trek up through rhododendron and oak forest to the Triund ridge at 2,875 m. The climb is gradual but steady — expect 4–5 hours with tea stops. Reach the meadow by mid-afternoon, set up camp, watch the Dhauladhar wall turn gold at sunset, then stargaze around a bonfire with dinner cooked by our mountain crew.",
        overnight: "Permanent tented camp, Triund",
        highlight: "Sunset behind Mun Peak, a night sky with no light pollution",
      },
      {
        day: 5,
        title: "Triund sunrise → descent → Bir-Billing",
        description:
          "Wake for sunrise on the ridge — the Dhauladhars light up first, then the Kangra Valley. Breakfast at camp, pack up, and descend back to Dharamkot by lunchtime. Afternoon drive (≈3 hrs) to Bir, a sleepy monk town and the landing site for paragliders flying down from Billing.",
        overnight: "Cottage stay in Bir",
        highlight: "Sunrise on the ridge, then an easy, scenic descent",
      },
      {
        day: 6,
        title: "Bir-Billing — tandem paragliding & Tibetan colony",
        description:
          "Morning drive up to the Billing take-off site (2,400 m). Tandem paragliding flight (20–30 mins) over pine forests and paddies with a certified pilot (weather permitting — we have buffer days built in). Afternoon at the Sherabling and Chokling Tibetan monasteries, followed by coffee at one of Bir's famous cafés.",
        overnight: "Cottage stay in Bir",
        highlight: "Flying with the Dhauladhars at your back",
      },
      {
        day: 7,
        title: "Bir → Dharamshala → Delhi (overnight return)",
        description:
          "Morning visit to the Norbulingka Institute (Tibetan arts & crafts) and, if time allows, the 9th-century Baijnath Shiva temple en route. Reach Dharamshala by evening and board the overnight Volvo back to Delhi — arrive early morning Day 8.",
        overnight: "On board (semi-sleeper Volvo)",
        highlight: "Watching Tibetan masters hand-paint thangkas",
      },
    ],
    inclusions: [
      "6 nights total — 2 in McLeod Ganj, 1 in Dharamkot, 1 on Triund ridge (tented camp), 2 in Bir",
      "Overnight Volvo coach tickets Delhi ↔ Dharamshala (both ways)",
      "Private vehicle for all sightseeing and transfers within the circuit",
      "All breakfasts + dinners on Triund trek days + 2 group dinners",
      "Two certified mountain guides on the Triund trek, plus porter support for camp gear",
      "Trek permits, camping gear (tents, sleeping bags, mats), and bonfire dinner on the ridge",
      "One tandem paragliding flight in Bir with a certified pilot (weather permitting)",
      "24/7 on-trip support and an English-speaking group host throughout",
    ],
    exclusions: [
      "International or domestic flights to/from Delhi",
      "Lunches across the trip and any meals during Volvo transits",
      "Monastery camera fees & personal shopping (Tibetan crafts, cafés)",
      "Additional adventure activities beyond the one included paragliding flight",
      "Travel & medical insurance (strongly recommended for the trek day)",
      "Any cost from weather delays, flight cancellations, or trek reroutes",
    ],
    pricing: [
      { label: "Twin / Triple sharing (from Delhi)", priceEUR: 2099, priceINR: 188900 },
      { label: "Twin / Triple sharing (from Dharamshala)", priceEUR: 1899, priceINR: 170900 },
      { label: "Single supplement", priceEUR: 499, priceINR: 44900 },
    ],
    featured: true,
    departures: ["June 21, 2026", "July 12, 2026", "September 13, 2026"],
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export function getFeaturedTours(): Tour[] {
  return tours.filter((t) => t.featured);
}

// ─────────────────────────────────────────────────────────────────────
// LOCALIZATION
//
// Each tour has a German translation below. We keep the English array as
// the source of truth for structural fields (slug, images, pricing numbers,
// durations, months, featured flag) and overlay locale-specific text fields
// at render time via `getLocalizedTours()` / `getLocalizedTourBySlug()`.
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

export type TourI18nFields = Pick<
  Tour,
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

const toursDeOverrides: Record<string, TourI18nFields> = {
  "spiti-summer-expedition": {
    title: "Spiti Sommer-Expedition",
    subtitle:
      "Hochgelegene Dörfer, uralte Klöster, Himalaya-Himmel",
    region: "Himachal Pradesh, Nordindien",
    route: "Delhi → Shimla → Chitkul → Tabo → Kaza → Kalpa → Shimla → Delhi",
    groupSize: "Max. 12 Reisende",
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
    departures: ["14. Juni 2026", "5. Juli 2026", "26. Juli 2026"],
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
    departures: ["7. Juni 2026", "28. Juni 2026", "19. Juli 2026"],
  },

  "golden-triangle-classic": {
    title: "Goldenes Dreieck Klassisch",
    subtitle: "Delhi · Agra · Jaipur — Indiens bekannteste Route",
    region: "Delhi, Uttar Pradesh & Rajasthan",
    route: "Delhi → Agra → Jaipur → Delhi",
    groupSize: "Max. 12 Reisende",
    difficulty: "Easy",
    summary:
      "Die perfekte erste Indien-Reise. Stehen Sie bei Sonnenaufgang vor dem Taj Mahal, reiten Sie auf einem Elefanten zum Amber Fort hinauf und schlemmen Sie Street Food in Alt-Delhi mit einem lokalen Foodexperten.",
    overview:
      "Das Goldene Dreieck ist die klassische erste Indien-Reise — eine Runde durch drei außergewöhnliche Städte, die zusammen die Geschichte der Mughal-Kaiser, Rajput-Könige und des modernen Indiens erzählen. Unsere Version ist eine kleine Gruppenreise, kuratiert und speziell für internationale Reisende gestaltet: klimatisierte Fahrzeuge, handverlesene Heritage-Hotels, Sonnenaufgangsbesuche ohne Menschenmassen und lokale Guides, die Geschichte lebendig erzählen. Jede Mahlzeit, jeder Transfer, jedes Ticket ist im Voraus organisiert, damit Sie vollständig da sein können.",
    highlights: [
      "Sonnenaufgang am Taj Mahal mit privatem Fotografen-Aussichtspunkt",
      "Alt-Delhi-Food-Walk mit einem Einheimischen in dritter Generation",
      "Aufstieg zum Amber Fort mit Elefant & bemalte Havelis in Jaipur",
      "Agra Fort und die verlassene Stadt Fatehpur Sikri",
      "Praxis-Workshop in Block-Print-Technik in Jaipur",
    ],
    itinerary: [
      {
        day: 1,
        title: "Ankunft in Delhi + abendlicher Food-Walk",
        description:
          "Flughafenabholung und Check-in in einem Heritage-Hotel. Nach einer Erholungspause treffen Sie Ihre Gruppe für einen abendlichen Food-Walk durch Alt-Delhi — Paranthas, Chaat, Kebabs und Kulfi — geführt von einem Food-Historiker in dritter Generation.",
        overnight: "Heritage-Hotel, Delhi",
      },
      {
        day: 2,
        title: "Delhi-Sightseeing",
        description:
          "Besuch der Jama Masjid, Humayuns Grab, Qutub Minar und India Gate. Nachmittäglicher Spaziergang durch die Lodi-Gärten. Optionale Tuk-Tuk-Fahrt durch Chandni Chowk.",
        overnight: "Heritage-Hotel, Delhi",
        highlight: "Humayuns Grab in der goldenen Stunde",
      },
      {
        day: 3,
        title: "Delhi → Agra (Taj Mahal bei Sonnenuntergang)",
        description:
          "Fahrt nach Agra auf der Schnellstraße. Ankunft rechtzeitig für einen Sonnenuntergangs-Blick auf den Taj Mahal von Mehtab Bagh aus — auf der anderen Seite des Yamuna-Flusses.",
        overnight: "Boutique-Hotel, Agra",
        highlight: "Taj Mahal von Mehtab Bagh",
      },
      {
        day: 4,
        title: "Taj bei Sonnenaufgang → Fatehpur Sikri → Jaipur",
        description:
          "Sonnenaufgangsbesuch des Taj Mahal, wenn es noch ruhig ist. Nach dem Frühstück Besichtigung des Agra Fort, danach Fahrt nach Jaipur über die verlassene Sandsteinstadt Fatehpur Sikri.",
        overnight: "Boutique-Hotel, Jaipur",
        highlight: "Sonnenaufgang-Taj + Fatehpur Sikri",
      },
      {
        day: 5,
        title: "Jaipur — Amber Fort & Block-Print-Workshop",
        description:
          "Morgendlicher Aufstieg zum Amber Fort, Besuch des Jal Mahal (Wasserpalast), Hawa Mahal (Palast der Winde) und der Sternwarte Jantar Mantar. Am Nachmittag Block-Print-Workshop mit einer Familie von Meister-Handwerkern.",
        overnight: "Boutique-Hotel, Jaipur",
        highlight: "Amber Fort + Handwerker-Workshop",
      },
      {
        day: 6,
        title: "Jaipur → Abreise Delhi",
        description:
          "Letzter Vormittag zur freien Verfügung oder optionaler Stadtspaziergang. Rückfahrt zum Flughafen Delhi für Ihren Weiterflug.",
        overnight: "—",
      },
    ],
    inclusions: [
      "5 Nächte in handverlesenen Heritage- & Boutique-Hotels (Twin-Sharing)",
      "Privates klimatisiertes Fahrzeug für die gesamte Runde",
      "Englischsprachige lokale Guides in jeder Stadt",
      "Tägliches Frühstück + 2 kuratierte Gruppen-Abendessen",
      "Alle Monument-Eintritte (Taj Mahal, Agra Fort, Amber Fort usw.)",
      "Alt-Delhi-Food-Walk & Jaipur Block-Print-Workshop",
      "24/7-Unterstützung während der Reise",
    ],
    exclusions: [
      "Internationale Flüge",
      "Mittagessen & die meisten Abendessen (Ihre Wahl, wir empfehlen Orte)",
      "Kamera-/Videogebühren an Monumenten",
      "Persönliche Ausgaben (Einkäufe, Getränke, Trinkgelder)",
      "Reiseversicherung (dringend empfohlen)",
    ],
    pricing: [
      { label: "Twin-Sharing (Standard)", priceEUR: 2399, priceINR: 215900 },
      { label: "Twin-Sharing (Premium)", priceEUR: 2899, priceINR: 260900 },
      { label: "Einzelzimmer-Zuschlag", priceEUR: 699, priceINR: 62900 },
    ],
    departures: [
      "10. Juni 2026",
      "24. Juni 2026",
      "8. Juli 2026",
      "22. Juli 2026",
    ],
  },

  "dharamshala-triund-trek": {
    title: "Dharamshala, Bir & der Triund-Trek",
    subtitle:
      "Tibetische Klöster, Paragliding-Himmel und eine Sternennacht auf dem Triund-Grat",
    region: "Himachal Pradesh, Nordindien",
    route:
      "Delhi → McLeod Ganj → Dharamkot → Triund → Dharamkot → Bir-Billing → Dharamshala → Delhi",
    groupSize: "Max. 10 Reisende",
    difficulty: "Moderate",
    summary:
      "Wachen Sie in einer tibetischen Bergstadt auf, schlafen Sie unter Millionen Sternen auf dem Triund-Grat und schweben Sie über Kiefernwälder von Asiens Paragliding-Hauptstadt. Eine langsame Woche im Herzen Himachals.",
    overview:
      "Diese einwöchige Runde verbindet die drei beliebtesten Orte im Kangra-Tal in Himachal — McLeod Ganj (Exil-Heimat des Dalai Lama), Dharamkot (ein Bergdorf voller Cafés, Yoga und langer Nachmittage) und Bir-Billing (die Paragliding-Hauptstadt Asiens). Im Zentrum steht der klassische Triund-Trek: eine sanfte, aber atemberaubende Übernachtungswanderung auf einen Graswiesen-Grat auf 2.875 m, von dem aus die Dhauladhar-Kette zum Greifen nah wirkt. Wir wandern in einer kleinen Gruppe mit zwei erfahrenen lokalen Guides, übernachten in einem ordentlichen Hochgebirgs-Camp und erleben einen der schönsten Sonnenaufgänge Indiens. Gemacht für Reisende, die echtes Himalaya-Trekking ohne harte Expedition wollen — und die langsame Cafés genauso lieben wie Bergpfade.",
    highlights: [
      "Übernachtung auf dem Triund-Trek (2.875 m) mit Sonnenaufgang über den Dhauladhars",
      "Tee mit tibetischen Mönchen in den Klöstern Namgyal & Tsuglagkhang in McLeod Ganj",
      "Langsame Café-Vormittage in Dharamkot — Pancakes, Yoga, Kiefernblicke",
      "Tandem-Paragliding über das Kangra-Tal von Billing (wetterabhängig)",
      "Kangra-Fort, Norbulingka-Institut für tibetische Kunst & der Baijnath-Tempel aus dem 9. Jahrhundert",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → McLeod Ganj (Nachtfahrt)",
        description:
          "Treffen Sie Ihre Gruppe am Abend in Delhi und besteigen Sie einen Nacht-Volvo-Bus hinauf nach McLeod Ganj. Die Fahrt steigt langsam aus der Ebene in die Dhauladhar-Vorberge an — Ankunft zum Frühstück.",
        overnight: "An Bord (Semi-Sleeper-Volvo)",
      },
      {
        day: 2,
        title: "Ankunft in McLeod Ganj — tibetisches Viertel & Klöster",
        description:
          "Check-in in einem Bergguesthouse in McLeod Ganj. Nach Frühstück und Pause Besuch des Tsuglagkhang-Komplexes des Dalai Lama, des Namgyal-Klosters und des Tibet-Museums. Am Abend Spaziergang zum Bhagsu-Nag-Tempel und Wasserfall.",
        overnight: "Boutique-Guesthouse, McLeod Ganj",
        highlight: "Tibetische Gebetsfahnen, Thangka-Malerei, Momos zum Abendessen",
      },
      {
        day: 3,
        title: "McLeod Ganj → Dharamkot (Café-Tag + Trek-Briefing)",
        description:
          "Kurzer Spaziergang hinüber nach Dharamkot — der ruhigere, grünere Zwilling. Vormittags optional eine Yoga-Klasse, nachmittags in den kiefernbeschatteten Cafés mit Talblick. Am Abend Trek-Briefing mit dem Bergführer: Ausrüstungs-Check, Höhen-Hinweise, Packliste für den Grat.",
        overnight: "Guesthouse in Dharamkot",
        highlight: "Pancakes mit Dhauladhar-Blick",
      },
      {
        day: 4,
        title: "Dharamkot → Triund-Trek (2.875 m) — Übernachtung auf dem Grat",
        description:
          "Ein klassischer 9-km-Trek durch Rhododendron- und Eichenwald hinauf zum Triund-Grat. Der Anstieg ist gleichmäßig — rechnen Sie mit 4–5 Stunden inkl. Teepausen. Gegen Nachmittag oben, Camp aufbauen, zusehen, wie die Dhauladhar-Wand bei Sonnenuntergang golden leuchtet, danach Sternehimmel am Lagerfeuer mit Abendessen aus der Bergküche.",
        overnight: "Festes Zeltcamp, Triund",
        highlight: "Sonnenuntergang hinter dem Mun Peak, Nachthimmel ohne Lichtsmog",
      },
      {
        day: 5,
        title: "Sonnenaufgang auf Triund → Abstieg → Bir-Billing",
        description:
          "Aufstehen zum Sonnenaufgang auf dem Grat — die Dhauladhars leuchten zuerst, dann das Kangra-Tal. Frühstück im Camp, Zusammenpacken, Rückweg nach Dharamkot bis Mittag. Nachmittags Fahrt (~3 Std.) nach Bir, einer ruhigen Mönchsstadt und Landeplatz der Paragliding-Piloten von Billing.",
        overnight: "Cottage-Stay in Bir",
        highlight: "Sonnenaufgang auf dem Grat, danach entspannter Abstieg",
      },
      {
        day: 6,
        title: "Bir-Billing — Tandem-Paragliding & tibetische Kolonie",
        description:
          "Morgens Fahrt hinauf zum Startplatz in Billing (2.400 m). Tandem-Paragliding-Flug (20–30 Min.) über Kiefernwälder und Reisfelder mit zertifiziertem Piloten (wetterabhängig — wir haben Puffertage eingeplant). Nachmittags Besuch der tibetischen Klöster Sherabling und Chokling, danach Kaffee in einem der berühmten Cafés von Bir.",
        overnight: "Cottage-Stay in Bir",
        highlight: "Fliegen mit den Dhauladhars im Rücken",
      },
      {
        day: 7,
        title: "Bir → Dharamshala → Delhi (Nacht-Rückfahrt)",
        description:
          "Morgens Besuch des Norbulingka-Instituts (tibetische Kunst & Handwerk) und, wenn Zeit bleibt, des Baijnath-Shiva-Tempels aus dem 9. Jahrhundert auf dem Weg. Am Abend in Dharamshala und Nacht-Volvo zurück nach Delhi — Ankunft am frühen Morgen von Tag 8.",
        overnight: "An Bord (Semi-Sleeper-Volvo)",
        highlight: "Zusehen, wie tibetische Meister Thangkas von Hand malen",
      },
    ],
    inclusions: [
      "6 Nächte insgesamt — 2× McLeod Ganj, 1× Dharamkot, 1× Triund-Grat (Zeltcamp), 2× Bir",
      "Nacht-Volvo-Tickets Delhi ↔ Dharamshala (Hin- und Rückfahrt)",
      "Privates Fahrzeug für alle Sightseeing- und Transferfahrten im Rundreiseverlauf",
      "Alle Frühstücke + Abendessen an den Triund-Trek-Tagen + 2 Gruppen-Abendessen",
      "Zwei zertifizierte Bergführer auf dem Triund-Trek plus Träger für die Campausrüstung",
      "Trek-Genehmigungen, Campingausrüstung (Zelte, Schlafsäcke, Matten) und Lagerfeuer-Dinner auf dem Grat",
      "Ein Tandem-Paragliding-Flug in Bir mit zertifiziertem Piloten (wetterabhängig)",
      "24/7-Unterstützung und englischsprachige Gruppenleitung während der gesamten Reise",
    ],
    exclusions: [
      "Internationale oder inländische Flüge nach/von Delhi",
      "Mittagessen während der gesamten Reise und Mahlzeiten in den Volvo-Transits",
      "Kameragebühren in Klöstern & persönliche Einkäufe (tibetisches Handwerk, Cafés)",
      "Zusätzliche Aktivitäten über den einen enthaltenen Paragliding-Flug hinaus",
      "Reise- und Krankenversicherung (dringend empfohlen, besonders für den Trek-Tag)",
      "Kosten durch Wetterverzögerungen, Flugausfälle oder Trek-Umleitungen",
    ],
    pricing: [
      { label: "Twin / Triple-Sharing (ab Delhi)", priceEUR: 2099, priceINR: 188900 },
      { label: "Twin / Triple-Sharing (ab Dharamshala)", priceEUR: 1899, priceINR: 170900 },
      { label: "Einzelzimmer-Zuschlag", priceEUR: 499, priceINR: 44900 },
    ],
    departures: ["21. Juni 2026", "12. Juli 2026", "13. September 2026"],
  },
};

/**
 * Returns the tour list localized for the given locale.
 * English is the source of truth; other locales overlay translated fields.
 */
export function getLocalizedTours(locale: Locale): Tour[] {
  if (locale === "en") return tours;
  const overrides = locale === "de" ? toursDeOverrides : null;
  if (!overrides) return tours;
  return tours.map((tour) => {
    const override = overrides[tour.slug];
    if (!override) return tour;
    return { ...tour, ...override };
  });
}

/**
 * Returns a single localized tour by slug.
 */
export function getLocalizedTourBySlug(
  slug: string,
  locale: Locale
): Tour | undefined {
  const localized = getLocalizedTours(locale);
  return localized.find((t) => t.slug === slug);
}

/**
 * Returns only the featured tours, localized.
 */
export function getLocalizedFeaturedTours(locale: Locale): Tour[] {
  return getLocalizedTours(locale).filter((t) => t.featured);
}
