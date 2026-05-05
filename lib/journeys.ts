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
  months: ("June" | "July" | "August" | "September")[];
  groupSize: string;       // e.g., "Max 10 travelers"
  difficulty: "Easy" | "Moderate" | "Challenging";
  summary: string;         // short card blurb
  overview: string;        // long paragraph for detail page
  highlights: string[];
  itinerary: JourneyDay[];
  inclusions: string[];
  exclusions: string[];
  pricing: JourneyPricing[];
  featured: boolean;
  departures: string[];    // e.g., ["June 14, 2026", "July 5, 2026"]
};

export const journeys: Journey[] = [
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
    pricing: [
      { label: "Twin / Triple sharing (from Shimla)", priceEUR: 2199, priceINR: 197900 },
      { label: "Twin / Triple sharing (from Delhi)", priceEUR: 2499, priceINR: 224900 },
      { label: "Double occupancy (from Delhi)", priceEUR: 2699, priceINR: 242900 },
    ],
    featured: true,
    departures: ["May 31 – June 7, 2026"],
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
    pricing: [
      { label: "Deluxe (6 pax)", priceEUR: 2099, priceINR: 188900 },
      { label: "Premium (6 pax)", priceEUR: 2499, priceINR: 224900 },
      { label: "Royal (6 pax)", priceEUR: 2899, priceINR: 260900 },
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
    pricing: [
      { label: "Twin sharing — Premium (from Delhi)", priceEUR: 1399, priceINR: 125900 },
      { label: "Twin sharing — Standard (from Delhi)", priceEUR: 1199, priceINR: 107900 },
      { label: "Single supplement", priceEUR: 349, priceINR: 31400 },
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
    pricing: [
      { label: "Twin sharing — Deluxe (from Leh)", priceEUR: 2499, priceINR: 224900 },
      { label: "Twin sharing — Premium (from Leh)", priceEUR: 2899, priceINR: 260900 },
      { label: "Single supplement", priceEUR: 599, priceINR: 53900 },
    ],
    featured: true,
    departures: ["June 8 – 15, 2026"],
  },

  {
    slug: "dharamshala-triund-trek",
    title: "Dharamshala, Bir & the Triund Trek",
    subtitle:
      "Tibetan monasteries, paragliding skies, and a starlit night on the Triund ridge",
    heroImage: "/images/tours/bir-triund/tejashvi-verma-cyWRGbQx3pE-unsplash.jpg",
    galleryImages: [
      "/images/tours/bir-triund/tejashvi-verma-cyWRGbQx3pE-unsplash.jpg",
      "/images/tours/bir-triund/aana-singh-sQInw81bdYQ-unsplash.jpg",
      "/images/tours/bir-triund/arun-kashyap-E7C077ex-Zk-unsplash.jpg",
      "/images/tours/bir-triund/mountain-mysteries-0MQTJh7wecs-unsplash.jpg",
      "/images/tours/bir-triund/rishabh-pandoh-m1PFxGQ-5x0-unsplash.jpg",
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
    departures: ["May 22 – 30, 2026"],
  },

  // ─── LADAKH DARK SKY CIRCUIT ─────────────────────────────────────────
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
    pricing: [
      { label: "Twin sharing — Deluxe (from Leh)", priceEUR: 2899, priceINR: 260900 },
      { label: "Twin sharing — Premium (from Leh)", priceEUR: 3299, priceINR: 296900 },
      { label: "Single supplement", priceEUR: 699, priceINR: 62900 },
    ],
    featured: false,
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
    pricing: [
      { label: "Twin sharing (from Guwahati)", priceEUR: 1899, priceINR: 170900 },
      { label: "Twin sharing (from Delhi)", priceEUR: 2099, priceINR: 188900 },
      { label: "Single supplement", priceEUR: 449, priceINR: 40400 },
    ],
    featured: false,
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
    departures: ["31. Mai – 7. Juni 2026"],
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
      { label: "Einzelzimmer-Zuschlag", priceEUR: 349, priceINR: 31400 },
    ],
    departures: ["Individuell — Anfrage stellen"],
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
    departures: ["22.–30. Mai 2026"],
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
      { label: "Twin-Sharing — Deluxe (ab Leh)", priceEUR: 2499, priceINR: 224900 },
      { label: "Twin-Sharing — Premium (ab Leh)", priceEUR: 2899, priceINR: 260900 },
      { label: "Einzelzimmer-Zuschlag", priceEUR: 599, priceINR: 53900 },
    ],
    departures: ["8.–15. Juni 2026"],
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
      { label: "Twin-Sharing — Deluxe (ab Leh)", priceEUR: 2899, priceINR: 260900 },
      { label: "Twin-Sharing — Premium (ab Leh)", priceEUR: 3299, priceINR: 296900 },
      { label: "Einzelzimmer-Zuschlag", priceEUR: 699, priceINR: 62900 },
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
      { label: "Einzelzimmer-Zuschlag", priceEUR: 449, priceINR: 40400 },
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
