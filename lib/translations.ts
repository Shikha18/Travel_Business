/**
 * UI translations (English + German).
 *
 * Tour content (titles, itinerary days, inclusions, etc.) stays in English
 * per product decision. Only UI chrome is translated below.
 *
 * To add a new language:
 *   1. Add a new top-level key (e.g., `fr: { ... }`) with the same shape.
 *   2. Add the language to `SUPPORTED_LOCALES` in lib/i18n.ts.
 */

export type Locale = "en" | "de";

export const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.tours": "Tours",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.planTrip": "Plan my trip",
    "nav.toggleMenu": "Toggle menu",

    // Buttons / CTA
    "cta.viewDepartures": "View 2026 departures",
    "cta.chatWhatsApp": "Chat on WhatsApp",
    "cta.browseTours": "Browse tours",
    "cta.talkToUs": "Talk to us",
    "cta.viewAll": "View all tours →",
    "cta.viewTrip": "View trip →",
    "cta.reserveWA": "Reserve on WhatsApp",
    "cta.requestEmail": "Request details by email",
    "cta.sayHello": "Say hello",
    "cta.sendInquiry": "Send inquiry",
    "cta.openWhatsApp": "Open WhatsApp chat",
    "cta.emailUs": "Email us",
    "cta.messageFounderWA": "Message Shikha on WhatsApp",
    "cta.ourTours": "View our tours",

    // Home hero
    "home.hero.season": "Small-group departures · 2026",
    "home.hero.titleLine1": "I don't want to show India.",
    "home.hero.titleLine2": "I want to explain India.",
    "home.hero.title":
      "I don't want to show India. I want to explain India.",
    "home.hero.subtitle":
      "Small-group journeys across the Himalayas, Kashmir and the Golden Triangle — led by people who live here, for travelers who want depth rather than a checklist.",
    "home.hero.rating": "4.9/5 average traveler rating",
    "home.hero.countries": "Travelers from 20+ countries",
    "home.hero.support": "24/7 on-trip support",

    // Home sections
    "home.featured.chip": "Featured 2026 departures",
    "home.featured.title": "Hand-crafted group journeys",
    "home.featured.subtitle":
      "Three signature trips for summer 2026. Secure your seat with a 30% deposit — balance due on arrival.",

    "home.trust.chip": "Why travelers choose us",
    "home.trust.title": "India is vast. We make it feel personal.",
    "home.trust.subtitle":
      "We're a young company founded in 2026 with one clear belief: traveling in India should feel safe, warm and unhurried — whether it's your first trip abroad or your fiftieth.",

    "home.trust.smallGroups.title": "Max 7–10 people per group",
    "home.trust.smallGroups.body":
      "Small enough to feel personal, flexible enough to adapt to you. Every departure is capped at 7–10 travelers so you always get real attention — not a crowd.",
    "home.trust.localGuides.title": "Hand-picked local guides",
    "home.trust.localGuides.body":
      "Our guides are storytellers first — historians, photographers and chefs who live in the regions we visit. No scripted spiels, no hidden commissions.",
    "home.trust.female.title": "Female & solo-friendly",
    "home.trust.female.body":
      "Founded by a woman, built with solo and female travelers in mind. Verified stays, 24/7 on-trip support, and zero pressure on pace.",
    "home.trust.transparent.title": "Fully customisable",
    "home.trust.transparent.body":
      "No fixed itineraries. Every trip is shaped around your pace, interests and budget — tell us what matters to you and we'll build it from scratch.",

    "home.testimonials.chip": "What travelers say",
    "home.testimonials.title": "Stories from the road.",
    "home.testimonials.sampleNote":
      "* Testimonials are illustrative samples for a new business. As soon as you host your first group, replace these with real traveler reviews.",

    "home.faq.chip": "Good to know",
    "home.faq.title": "Frequently asked questions",

    "home.finalCTA.title": "Your Indian summer is waiting.",
    "home.finalCTA.subtitle":
      "Reserve a seat on a June or July 2026 departure, or tell us your dates and we'll design a private trip around you.",

    // Tours listing
    "tours.chip": "Our tours",
    "tours.title": "Small-group journeys across India.",
    "tours.subtitle":
      "Every trip below is all-inclusive: transfers, stays, guides, permits and the meals we've listed. Join an upcoming group or ask us to run it privately on your dates.",
    "tours.filter.all": "All",
    "tours.filter.himalayan": "Himalayan",
    "tours.filter.cultural": "Cultural",
    "tours.customCTA.title": "Want a trip built just for you?",
    "tours.customCTA.subtitle":
      "Every journey we run can also be built from scratch — your dates, your group size, your pace. Families, couples, solo travelers, corporate retreats. You choose the regions; we handle every detail from first enquiry to airport drop-off.",
    "tours.customCTA.wa": "Plan my custom trip →",

    // Tour card
    "tourCard.from": "From",
    "tourCard.perPerson": "/ person",

    // Tour detail
    "tourDetail.duration": "Duration",
    "tourDetail.groupSize": "Group size",
    "tourDetail.region": "Region",
    "tourDetail.startsFrom": "Starts from",
    "tourDetail.overview": "Trip overview",
    "tourDetail.route": "Route",
    "tourDetail.highlights": "Trip highlights",
    "tourDetail.itinerary": "Day-by-day itinerary",
    "tourDetail.included": "What's included",
    "tourDetail.notIncluded": "Not included",
    "tourDetail.startingFrom": "Starting from",
    "tourDetail.perPerson": "per person",
    "tourDetail.deposit": "Secure your seat with a 30% deposit",
    "tourDetail.departures": "Upcoming departures",
    "tourDetail.pricingOptions": "Pricing options",
    "tourDetail.otherJourneys": "Other journeys you might love",
    "tourDetail.difficultyLabel": "Difficulty",
    "tourDetail.waMessage":
      "Hi! I'm interested in the {tour} tour. Can you share more details?",

    // Tour difficulty labels
    "difficulty.Easy": "Easy",
    "difficulty.Moderate": "Moderate",
    "difficulty.Challenging": "Challenging",

    // About
    "about.chip": "Our story",
    "about.title": "A small team obsessed with getting every detail right.",
    "about.p1":
      "GoTrustelle is a young Indian travel company, founded in 2026 by a team that grew up traveling and hosting guests across India. We started with one observation: most group tours to India feel like factories. You're rushed through monuments, pushed into emporiums, and fed the same buffet. We thought travelers deserved better.",
    "about.p2":
      "So we built the kind of tours we'd want our friends from abroad to take — small groups, long evenings, real meals with real people, and the freedom to slow down. Every departure is personally overseen by a founder or senior team member.",
    "about.principles.chip": "What we believe",
    "about.principles.title": "Our travel principles.",
    "about.team.chip": "Who you'll travel with",
    "about.team.title": "The team behind your journey.",
    "about.team.subtitle":
      "Founded in India, supported by a partner in Germany — so you have a trusted person on both sides of your journey.",
    "about.team.hoverHint": "Hover over the cards to learn more",
    "about.heroAlt": "Himalayan landscape, North India",
    "about.bios.chip": "The longer story",
    "about.bios.title": "Meet the people behind the trip.",
    "about.bios.subtitle":
      "Every message, every itinerary, every late-night WhatsApp reply comes from one of us two. Here's the longer version of how we got here.",
    "about.bios.readShikha": "More about Shikha",
    "about.bios.readMelissa": "More about Melissa",

    // Individual story page (/about/team/[slug])
    "about.story.backToAbout": "← Back to About",
    "about.story.readFullStory": "Read full story →",
    "about.story.meetOther": "Meet our Germany partner",
    "about.story.ctaTitle": "Ready to travel with us?",
    "about.story.ctaSubtitle":
      "Browse the 2026 group departures or message us directly.",
    "about.story.sectionStory": "My story",
    "about.story.sectionConnect": "Say hello",

    "about.founder.tag": "Founder",
    "about.founder.country": "Based in India",
    "about.founder.role": "Founder · Your host on the ground",
    "about.founder.quote":
      "\"I want you to feel India — not just see it.\"",
    "about.founder.chip1": "🎒 Solo backpacker",
    "about.founder.chip2": "🏔️ Works from the mountains",
    "about.founder.chip3": "🧭 Led trips across North India",
    "about.founder.story1":
      "Hi — I'm Shikha. GoTrustelle is my baby, and honestly, the project I've wanted to build for years. I grew up in a small town in central India (Madhya Pradesh), in a family that never travelled much but always made space for guests. That's where I first learned that looking after someone on the road is really just an extension of looking after someone at home.",
    "about.founder.story2":
      "By profession I'm a software developer — I spent years building products at fast-moving Indian tech companies. By passion, I'm a backpacker. Over the last several years I've travelled solo across every major region of North India — from the cafés of Dharamkot and the blue lanes of Jodhpur, to the frozen rivers of Ladakh, the silent monasteries of Spiti, the houseboats of Srinagar, and the old havelis of Rajasthan. I speak Hindi and English fluently, work from the mountains for months at a stretch, and genuinely believe the best way to see this country is slowly.",
    "about.founder.story3":
      "A few years ago I started hosting small group trips for friends-of-friends visiting India. Guests kept telling me the same thing — \"it felt more like staying with a good host than booking a tour.\" That single line is the whole reason GoTrustelle exists. I wanted to make that feeling available to people who don't happen to know me personally.",
    "about.founder.story4":
      "I'm the person you'll actually meet on the ground. I plan every itinerary personally, I travel with each group from arrival to departure, and I'm the one you'll call at 10pm if your luggage got lost or you want to try the best paratha in the neighbourhood. I pick the homestays, I vet the drivers, I cook with the cooks. No sub-contracting, no handing you off.",
    "about.founder.story5":
      "What I want from your trip is simple: that you leave having actually felt India — the food, the colours, the chai stops, the late-night conversations, the quiet mornings on a rooftop — not just photographed it. If you're the kind of traveller who wants depth over checkboxes, we're going to get along.",
    "about.founder.signature": "— Shikha",
    "about.founder.followIG": "Follow on Instagram",
    "about.founder.viewLinkedIn": "Connect on LinkedIn",
    "about.founder.emailDirect": "Email me directly",
    "about.founder.photoCaption": "Shikha · Founder",

    "about.partner.tag": "Partner · Germany",
    "about.partner.country": "Based in Germany",
    "about.partner.role": "Partner · European travel liaison",
    "about.partner.quote":
      "\"India isn't better or worse — it's just different.\"",
    "about.partner.story1":
      "I'm Melissa, based in Germany, and I've been quietly obsessed with India for almost a decade. My first trip was in 2019, when I flew to Rishikesh for a 200-hour yoga teacher training. I thought I'd stay four weeks. Six months later I was still there, slowly working my way south, living in little guesthouses, learning to cook dal from the aunties who ran them.",
    "about.partner.story2":
      "I've been going back every year since — sometimes for a month, sometimes for half a year. I've done the long bus rides, the overnight trains, the ashrams, the beach towns, the mountain villages. I know the feeling of being a European traveller in India — what's overwhelming on day two, what clicks on day ten, and what you end up missing the most when you get home.",
    "about.partner.story3":
      "Professionally, I've worked in the travel industry in Germany for years, so I know exactly how European travellers think about booking — what questions you'll ask, what guarantees you need in writing, how you want your itinerary structured before you commit. Personally, India is part of my family — my daughter has Indian roots, and her grandmother's house is where I learned most of what I know about everyday Indian life.",
    "about.partner.story4":
      "My job at GoTrustelle is to take care of everything on the European side. I answer questions in German and English, help you prepare properly (visa, packing, food sensitivities, what to expect in the first 48 hours), and make sure there's nothing left to guess about before you board your flight. Shikha handles you on the ground. I handle you before you get there.",
    "about.partner.story5":
      "If you've been curious about India but didn't know where to start, or you've tried bigger packaged tours and felt pushed through — that's exactly the gap I wanted us to fill.",
    "about.partner.signature": "— Melissa",
    "about.stats.inhouseLabel": "In-house planned",
    "about.stats.inhouseBody":
      "No third-party resellers. We handle every booking ourselves.",
    "about.stats.supportLabel": "On-trip support",
    "about.stats.supportBody":
      "A real human on WhatsApp any hour, any day of your trip.",
    "about.stats.groupLabel": "Small groups (max 12)",
    "about.stats.groupBody": "Intimate, personal, and fully customisable to your pace and interests.",
    "about.stats.customLabel": "Customisable",
    "about.stats.customBody": "Every itinerary is built around you — dates, pace, interests. No fixed templates.",

    // About principles list
    "about.v.smallGroups.title": "Small groups. Always 7–10 max.",
    "about.v.smallGroups.body":
      "We cap every departure at 7–10 travelers. Less scalable, yes — but it's the only way to travel at your pace, not the group's.",
    "about.v.local.title": "Hire local, pay fair.",
    "about.v.local.body":
      "Our guides, drivers and homestay hosts live in the regions we visit and are paid above local market rates.",
    "about.v.leaveBetter.title": "Leave it better.",
    "about.v.leaveBetter.body":
      "We offset carbon on every tour, avoid single-use plastics on the road, and partner with women-led artisan collectives.",
    "about.v.transparent.title": "Transparency, always.",
    "about.v.transparent.body":
      "No hidden emporium stops, no commissions. What we publish is what we deliver.",
    "about.v.safety.title": "Safety first.",
    "about.v.safety.body":
      "Verified hotels, 24/7 on-trip support, and a safety protocol tailored for solo and female travelers.",
    "about.v.slow.title": "Slow is a feature.",
    "about.v.slow.body":
      "We build buffer days into every itinerary. You don't need to see everything — you need to see it well.",

    // Contact
    "contact.chip": "Get in touch",
    "contact.title": "Let's plan your India trip.",
    "contact.subtitle":
      "Message us on WhatsApp for the fastest reply, or fill in the form below and we'll get back within a few hours (Indian Standard Time).",
    "contact.form.name": "Your name",
    "contact.form.email": "Email",
    "contact.form.country": "Country",
    "contact.form.countryPlaceholder": "e.g., United Kingdom",
    "contact.form.whatsapp": "WhatsApp (optional)",
    "contact.form.tour": "Which tour(s) are you interested in?",
    "contact.form.tourSelect": "Select a tour",
    "contact.form.tourCustom": "Custom private trip",
    "contact.form.tourUnsure": "Not sure yet",
    "contact.form.dates": "Approximate travel dates",
    "contact.form.datesPlaceholder": "e.g., June 10–20, 2026",
    "contact.form.startDate": "Start date",
    "contact.form.endDate": "End date",
    "contact.form.travelers": "Number of travelers",
    "contact.form.travelersPlaceholder": "e.g., 2 adults",
    "contact.form.message": "Anything else we should know?",
    "contact.form.messagePlaceholder":
      "Dietary needs, accessibility, things you'd love to experience…",
    "contact.form.privacy":
      "By sending you agree we can contact you about your inquiry. We never share your details.",
    "contact.sidebar.fastest.title": "Fastest reply",
    "contact.sidebar.fastest.body":
      "WhatsApp is our primary inbox — we usually reply within an hour during business hours (IST).",
    "contact.sidebar.email.title": "Or email us",
    "contact.sidebar.hours.title": "Office hours",
    "contact.sidebar.hours.body":
      "Monday – Saturday · 9:00 AM – 9:00 PM IST\nSunday · Emergency on-trip support only",
    "contact.sidebar.phone": "Phone",
    "contact.sidebar.basedIn": "Based in",

    // Footer
    "footer.explore": "Explore",
    "footer.exploreAll": "All tours",
    "footer.contact": "Contact",
    "footer.waChat": "WhatsApp chat",
    "footer.copyright": "Crafted with care in India.",
    "footer.subline": "Independent small-group tours · Based in New Delhi",

    // Months (used for tour badges)
    "month.June": "June",
    "month.July": "July",
    "month.August": "August",
    "month.September": "September",

    // Brand name breakdown (About page + Home teaser)
    "about.brand.chip": "The name",
    "about.brand.titlePrefix": "Why",
    "about.brand.titleSuffix": "?",
    "about.brand.desc": "GoTrustelle is built on three simple ideas — the freedom to explore, the comfort of trust, and the warmth of a woman-led journey.",
    "brand.go.title": "Freedom to explore",
    "brand.go.body": "Movement, adventure, and the courage to discover India beyond the guidebook.",
    "brand.trust.title": "The comfort of trust",
    "brand.trust.body": "Every detail planned, every partner vetted. You travel — we take care of the rest.",
    "brand.elle.title": "A woman-led journey",
    "brand.elle.body": "Elle — French for \"she\". Built by a woman, designed with you in mind.",
    "home.teaser.eyebrow": "The name behind every journey",

    // Founding story (About page)
    "about.origin.chip": "Our story",
    "about.origin.titleBefore": "How GoTrustelle began —",
    "about.origin.titleHighlight": "a café, a baby, and a real conversation",
    "about.origin.p1": "It started with a baby's smile at Freedom Café in Rishikesh. It was May 2022 when I noticed Melissa sitting there with her little one — and because I have never been able to walk past a baby without stopping, I sat down beside her. What began as a brief, warm moment turned into hours of conversation: about travel, about India, about what it truly means to arrive somewhere and feel completely held by it.",
    "about.origin.p2": "We stayed in touch across continents for years, making plans that life kept kindly postponing. Then in early 2026, Melissa returned to India — and this time, I didn't take her to a resort or a tourist trail. I brought her home. To my family in Madhya Pradesh, near the Rajasthan border, where culture lives in every corner and festivals fill the air with colour and music. A big local celebration was underway. She stayed for three days, wrapped in a traditional Indian outfit, eating my mother's home cooking, joining the pooja, wandering through the fair, and sitting in our courtyard long after midnight as the festival lights flickered around us.",
    "about.origin.p3a": "On the last evening, she said something I have thought about every single day since:",
    "about.origin.quote": "This is what we miss when we travel to India. We don't just want to see India — we want to feel India.",
    "about.origin.p3b": "That one sentence became everything. GoTrustelle was born not from a pitch deck or a spreadsheet, but from the belief that travel, at its most beautiful, is really just connection — to a place, to its people, and to something deeper in yourself that you didn't know was waiting to be found.",
    "about.origin.signature": "— Shikha, Founder",
    "about.origin.gallery.label": "Real moments · not stock photos",
    "about.origin.photo1": "Rishikesh — the very first time we met",
    "about.origin.photo2": "Playing with Melissa's daughter — the moment we first spoke",
    "about.origin.photo3": "Melissa in a traditional Indian saree with Shikha's mother",
    "about.origin.photo4": "Shikha & Melissa on the road together, 2026",
    "about.origin.photo5": "Melissa joins the pooja at the local festival",
    "about.origin.photo6": "Road-trip snacks and real conversations",
    "about.origin.video.caption": "A real moment from our time together in India",
    "about.origin.closing.title": "Come, don't just explore India — feel India.",
    "about.origin.closing.body": "Every journey we create is an invitation to step past the surface — into family homes, festival grounds, local kitchens, and conversations that linger long after you've come home.",
    "about.origin.closing.cta1": "See our journeys",
    "about.origin.closing.cta2": "Write to Shikha",

    // Footer tagline
    "footer.tagline": "Travel Experiences in India · by a woman, for you",

    // Misc
    "common.season": "2026",
    "common.loading": "Loading…",
    "lang.label": "Language",
  },

  de: {
    // Navigation
    "nav.home": "Start",
    "nav.tours": "Reisen",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",
    "nav.planTrip": "Reise planen",
    "nav.toggleMenu": "Menü umschalten",

    // Buttons / CTA
    "cta.viewDepartures": "Termine 2026 ansehen",
    "cta.chatWhatsApp": "Per WhatsApp chatten",
    "cta.browseTours": "Reisen entdecken",
    "cta.talkToUs": "Sprechen Sie uns an",
    "cta.viewAll": "Alle Reisen ansehen →",
    "cta.viewTrip": "Reise ansehen →",
    "cta.reserveWA": "Per WhatsApp reservieren",
    "cta.requestEmail": "Details per E-Mail anfragen",
    "cta.sayHello": "Sag Hallo",
    "cta.sendInquiry": "Anfrage senden",
    "cta.openWhatsApp": "WhatsApp-Chat öffnen",
    "cta.emailUs": "Schreiben Sie uns",
    "cta.messageFounderWA": "Shikha per WhatsApp schreiben",
    "cta.ourTours": "Unsere Reisen",

    // Home hero
    "home.hero.season": "Kleine Gruppenreisen · 2026",
    "home.hero.titleLine1": "Ich will Indien nicht zeigen.",
    "home.hero.titleLine2": "Ich will Indien erklären.",
    "home.hero.title":
      "Ich will Indien nicht zeigen. Ich will Indien erklären.",
    "home.hero.subtitle":
      "Kleine Gruppenreisen durch den Himalaya, Kaschmir und das Goldene Dreieck — geführt von Menschen, die hier leben, für Reisende, die Tiefe statt Checklisten suchen.",
    "home.hero.rating": "4,9/5 durchschnittliche Bewertung",
    "home.hero.countries": "Reisende aus über 20 Ländern",
    "home.hero.support": "24/7 Unterstützung vor Ort",

    // Home sections
    "home.featured.chip": "Top-Termine 2026",
    "home.featured.title": "Handverlesene Gruppenreisen",
    "home.featured.subtitle":
      "Drei signature Reisen für Sommer 2026. Sichern Sie sich Ihren Platz mit 30 % Anzahlung — Restbetrag bei Ankunft.",

    "home.trust.chip": "Warum Reisende uns wählen",
    "home.trust.title": "Indien ist riesig. Wir machen es persönlich.",
    "home.trust.subtitle":
      "Wir sind ein junges Unternehmen, gegründet 2026, mit einer klaren Überzeugung: Eine Reise nach Indien soll sich sicher, herzlich und entspannt anfühlen — egal ob es Ihre erste Auslandsreise ist oder Ihre fünfzigste.",

    "home.trust.smallGroups.title": "Max. 7–10 Personen pro Gruppe",
    "home.trust.smallGroups.body":
      "Klein genug für echte Nähe, flexibel genug für Ihre Bedürfnisse. Jede Abfahrt ist auf 7–10 Reisende begrenzt — damit Sie immer echte Aufmerksamkeit bekommen.",
    "home.trust.localGuides.title": "Handverlesene lokale Guides",
    "home.trust.localGuides.body":
      "Unsere Guides sind zuerst Geschichtenerzähler — Historiker, Fotografen und Köche, die in den Regionen leben, die wir besuchen. Keine auswendig gelernten Texte, keine versteckten Provisionen.",
    "home.trust.female.title": "Frauen- & Solo-freundlich",
    "home.trust.female.body":
      "Von einer Frau gegründet, gemacht für solo- und weibliche Reisende. Geprüfte Unterkünfte, 24/7-Unterstützung unterwegs und kein Druck bei der Reisegeschwindigkeit.",
    "home.trust.transparent.title": "Vollständig individualisierbar",
    "home.trust.transparent.body":
      "Keine festen Reisepläne. Jede Reise wird nach Ihrem Tempo, Ihren Interessen und Ihrem Budget gestaltet — sagen Sie uns, was wichtig ist, und wir bauen sie von Grund auf.",

    "home.testimonials.chip": "Was Reisende sagen",
    "home.testimonials.title": "Geschichten von unterwegs.",
    "home.testimonials.sampleNote":
      "* Die Testimonials sind illustrative Beispiele für ein neues Unternehmen. Sobald Sie Ihre erste Gruppe hosten, ersetzen Sie diese durch echte Bewertungen.",

    "home.faq.chip": "Gut zu wissen",
    "home.faq.title": "Häufig gestellte Fragen",

    "home.finalCTA.title": "Ihr indischer Sommer wartet.",
    "home.finalCTA.subtitle":
      "Reservieren Sie einen Platz für eine Juni- oder Juli-Abreise 2026, oder nennen Sie uns Ihre Daten und wir gestalten eine private Reise um Sie herum.",

    // Tours listing
    "tours.chip": "Unsere Reisen",
    "tours.title": "Kleine Gruppenreisen durch Indien.",
    "tours.subtitle":
      "Jede Reise ist all-inclusive: Transfers, Unterkünfte, Guides, Genehmigungen und die genannten Mahlzeiten. Schließen Sie sich einer bestehenden Gruppe an oder buchen Sie privat.",
    "tours.filter.all": "Alle",
    "tours.filter.himalayan": "Himalaya",
    "tours.filter.cultural": "Kulturell",
    "tours.customCTA.title": "Möchten Sie eine Reise ganz nach Maß?",
    "tours.customCTA.subtitle":
      "Jede unserer Reisen kann auch von Grund auf neu geplant werden — Ihre Daten, Ihre Gruppengröße, Ihr Tempo. Familien, Paare, Alleinreisende, Firmenreisen. Sie wählen die Regionen; wir kümmern uns um jedes Detail — von der ersten Anfrage bis zum Abflug.",
    "tours.customCTA.wa": "Meine Wunschreise planen →",

    // Tour card
    "tourCard.from": "Ab",
    "tourCard.perPerson": "/ Person",

    // Tour detail
    "tourDetail.duration": "Dauer",
    "tourDetail.groupSize": "Gruppengröße",
    "tourDetail.region": "Region",
    "tourDetail.startsFrom": "Ab",
    "tourDetail.overview": "Reiseübersicht",
    "tourDetail.route": "Route",
    "tourDetail.highlights": "Reise-Highlights",
    "tourDetail.itinerary": "Tag-für-Tag-Programm",
    "tourDetail.included": "Inklusive",
    "tourDetail.notIncluded": "Nicht inklusive",
    "tourDetail.startingFrom": "Ab",
    "tourDetail.perPerson": "pro Person",
    "tourDetail.deposit": "Platz sichern mit 30 % Anzahlung",
    "tourDetail.departures": "Kommende Termine",
    "tourDetail.pricingOptions": "Preisoptionen",
    "tourDetail.otherJourneys": "Weitere Reisen, die Sie lieben könnten",
    "tourDetail.difficultyLabel": "Schwierigkeit",
    "tourDetail.waMessage":
      "Hallo! Ich interessiere mich für die Reise {tour}. Können Sie mir mehr Details zusenden?",

    // Tour difficulty labels
    "difficulty.Easy": "Einfach",
    "difficulty.Moderate": "Mittel",
    "difficulty.Challenging": "Anspruchsvoll",

    // About
    "about.chip": "Unsere Geschichte",
    "about.title": "Ein kleines Team, das jedes Detail ernst nimmt.",
    "about.p1":
      "GoTrustelle ist ein junges indisches Reiseunternehmen, gegründet 2026 von einem Team, das selbst in Indien aufgewachsen ist und dort Gäste empfangen hat. Wir haben eine klare Beobachtung gemacht: Die meisten Gruppenreisen nach Indien fühlen sich wie Fabriken an. Man wird durch Monumente gehetzt, in Souvenirläden gedrängt und mit dem immer gleichen Buffet gefüttert. Wir finden, Reisende verdienen mehr.",
    "about.p2":
      "Also haben wir die Reisen gebaut, die wir unseren Freunden aus dem Ausland wünschen würden — kleine Gruppen, lange Abende, echte Mahlzeiten mit echten Menschen und die Freiheit, langsamer zu machen. Jede Abfahrt wird persönlich von einer Gründerin oder einem erfahrenen Teammitglied begleitet.",
    "about.principles.chip": "Woran wir glauben",
    "about.principles.title": "Unsere Reise-Prinzipien.",
    "about.team.chip": "Mit wem Sie reisen",
    "about.team.title": "Das Team hinter Ihrer Reise.",
    "about.team.subtitle":
      "In Indien gegründet, mit einer Partnerin in Deutschland — damit Sie auf beiden Seiten Ihrer Reise eine vertraute Ansprechperson haben.",
    "about.team.hoverHint": "Mit dem Mauszeiger über die Karten fahren",
    "about.heroAlt": "Himalaya-Landschaft, Nordindien",
    "about.bios.chip": "Die längere Geschichte",
    "about.bios.title": "Lernen Sie die Menschen hinter der Reise kennen.",
    "about.bios.subtitle":
      "Jede Nachricht, jedes Programm, jede späte WhatsApp-Antwort kommt von einer von uns beiden. Hier ist die längere Version davon, wie wir hierhergekommen sind.",
    "about.bios.readShikha": "Mehr über Shikha",
    "about.bios.readMelissa": "Mehr über Melissa",

    // Einzel-Story-Seite (/about/team/[slug])
    "about.story.backToAbout": "← Zurück zu „Über uns“",
    "about.story.readFullStory": "Ganze Geschichte lesen →",
    "about.story.meetOther": "Unsere Partnerin in Deutschland kennenlernen",
    "about.story.ctaTitle": "Bereit, mit uns zu reisen?",
    "about.story.ctaSubtitle":
      "Sehen Sie sich die Gruppenreisen für 2026 an oder schreiben Sie uns direkt.",
    "about.story.sectionStory": "Meine Geschichte",
    "about.story.sectionConnect": "Kontakt aufnehmen",

    "about.founder.tag": "Gründerin",
    "about.founder.country": "Vor Ort in Indien",
    "about.founder.role": "Gründerin · Ihre Gastgeberin vor Ort",
    "about.founder.quote":
      "\"Sie sollen Indien fühlen — nicht nur sehen.\"",
    "about.founder.chip1": "🎒 Solo-Backpackerin",
    "about.founder.chip2": "🏔️ Arbeitet aus den Bergen",
    "about.founder.chip3": "🧭 Reisen in Nordindien geleitet",
    "about.founder.story1":
      "Hallo — ich bin Shikha. GoTrustelle ist mein Herzensprojekt und ehrlich gesagt das Projekt, das ich seit Jahren bauen wollte. Ich bin in einer kleinen Stadt in Zentralindien (Madhya Pradesh) aufgewachsen, in einer Familie, die selbst nicht viel gereist ist, aber immer Platz für Gäste hatte. Dort habe ich zum ersten Mal gelernt, dass jemanden unterwegs zu umsorgen im Grunde eine Erweiterung davon ist, jemanden zu Hause zu umsorgen.",
    "about.founder.story2":
      "Von Beruf bin ich Softwareentwicklerin — ich habe Jahre lang bei dynamischen indischen Tech-Unternehmen an Produkten gebaut. Von Leidenschaft bin ich Backpackerin. In den letzten Jahren bin ich solo durch jede große Region Nordindiens gereist — von den Cafés in Dharamkot und den blauen Gassen Jodhpurs über die zugefrorenen Flüsse Ladakhs, die stillen Klöster des Spiti-Tals, die Hausboote in Srinagar bis hin zu den alten Havelis Rajasthans. Ich spreche fließend Hindi und Englisch, arbeite monatelang aus den Bergen und bin fest davon überzeugt: Der beste Weg, dieses Land zu sehen, ist langsam.",
    "about.founder.story3":
      "Vor einigen Jahren habe ich angefangen, kleine Gruppenreisen für Freunde von Freunden zu begleiten, die nach Indien kamen. Gäste sagten mir immer wieder dasselbe: „Es fühlte sich mehr wie ein Aufenthalt bei einer guten Gastgeberin an als wie eine Tour.\" Dieser eine Satz ist der Grund, warum es GoTrustelle überhaupt gibt. Ich wollte genau dieses Gefühl für Menschen zugänglich machen, die mich nicht zufällig persönlich kennen.",
    "about.founder.story4":
      "Ich bin die Person, die Sie tatsächlich vor Ort treffen. Ich plane jede Reise persönlich, begleite jede Gruppe von Ankunft bis Abreise, und wenn um 22 Uhr Ihr Gepäck verloren geht oder Sie das beste Paratha im Viertel probieren wollen, rufen Sie mich an. Ich suche die Homestays aus, ich prüfe die Fahrer, ich koche mit den Köchinnen. Nichts wird weitergegeben, niemand reicht Sie weiter.",
    "about.founder.story5":
      "Was ich mir für Ihre Reise wünsche, ist einfach: Dass Sie am Ende Indien wirklich gefühlt haben — das Essen, die Farben, die Chai-Pausen, die späten Gespräche, die ruhigen Morgen auf einer Dachterrasse — und nicht nur fotografiert. Wenn Sie die Art Reisende sind, die Tiefe statt Häkchen will, werden wir uns bestens verstehen.",
    "about.founder.signature": "— Shikha",
    "about.founder.followIG": "Auf Instagram folgen",
    "about.founder.viewLinkedIn": "Auf LinkedIn vernetzen",
    "about.founder.emailDirect": "Direkt per E-Mail schreiben",
    "about.founder.photoCaption": "Shikha · Gründerin",

    "about.partner.tag": "Partnerin · Deutschland",
    "about.partner.country": "In Deutschland",
    "about.partner.role": "Partnerin · Europäische Ansprechpartnerin",
    "about.partner.quote":
      "\"Indien ist nicht besser oder schlechter — es ist einfach anders.\"",
    "about.partner.story1":
      "Ich bin Melissa, lebe in Deutschland und bin seit fast einem Jahrzehnt still in Indien verliebt. Meine erste Reise war 2019, als ich für eine 200-Stunden-Yoga-Lehrerausbildung nach Rishikesh flog. Ich dachte, ich bleibe vier Wochen. Sechs Monate später war ich immer noch dort, reiste langsam Richtung Süden und lebte in kleinen Gästehäusern, wo ich von den Tantchen lernte, Dal zu kochen.",
    "about.partner.story2":
      "Seitdem bin ich jedes Jahr wieder dort — mal einen Monat, mal ein halbes Jahr. Ich kenne die langen Busfahrten, die Nachtzüge, die Ashrams, die Strandorte, die Bergdörfer. Ich weiß genau, wie es sich anfühlt, als europäische Reisende in Indien zu sein — was an Tag zwei überfordert, was an Tag zehn Klick macht und was man zu Hause am meisten vermisst.",
    "about.partner.story3":
      "Beruflich arbeite ich seit Jahren in der deutschen Reisebranche und weiß genau, wie europäische Reisende ans Buchen herangehen — welche Fragen Sie stellen werden, welche Zusagen Sie schriftlich brauchen und wie Ihr Programm strukturiert sein muss, bevor Sie sich entscheiden. Privat ist Indien Teil meiner Familie: Meine Tochter hat indische Wurzeln, und im Haus ihrer Großmutter habe ich das meiste über den indischen Alltag gelernt.",
    "about.partner.story4":
      "Meine Aufgabe bei GoTrustelle ist es, alles auf der europäischen Seite abzudecken. Ich beantworte Fragen auf Deutsch und Englisch, helfe bei der Vorbereitung (Visum, Packliste, Ernährung, was Sie in den ersten 48 Stunden erwartet) und sorge dafür, dass vor dem Abflug nichts offen bleibt. Shikha kümmert sich um Sie vor Ort. Ich kümmere mich um Sie davor.",
    "about.partner.story5":
      "Wenn Sie schon länger neugierig auf Indien waren, aber nicht wussten, wo Sie anfangen sollen — oder wenn Sie größere Pauschalreisen versucht haben und sich durchgeschleust gefühlt haben — genau diese Lücke wollten wir schließen.",
    "about.partner.signature": "— Melissa",
    "about.stats.inhouseLabel": "Selbst geplant",
    "about.stats.inhouseBody":
      "Keine Drittanbieter. Jede Buchung wickeln wir selbst ab.",
    "about.stats.supportLabel": "Unterstützung unterwegs",
    "about.stats.supportBody":
      "Ein echter Mensch auf WhatsApp, jederzeit während Ihrer Reise.",
    "about.stats.groupLabel": "Kleine Gruppen (max. 12)",
    "about.stats.groupBody": "Intim, persönlich und vollständig an Ihr Tempo und Ihre Interessen angepasst.",
    "about.stats.customLabel": "Individualisierbar",
    "about.stats.customBody": "Jedes Programm wird nach Ihren Wünschen gestaltet — Daten, Tempo, Interessen. Keine festen Vorlagen.",

    // About principles list
    "about.v.smallGroups.title": "Kleine Gruppen. Immer max. 7–10.",
    "about.v.smallGroups.body":
      "Wir begrenzen jede Abfahrt auf 7–10 Reisende. Weniger skalierbar — aber nur so reisen Sie in Ihrem Tempo, nicht dem der Gruppe.",
    "about.v.local.title": "Lokal einstellen, fair bezahlen.",
    "about.v.local.body":
      "Unsere Guides, Fahrer und Gastgeber leben in den Regionen, die wir besuchen, und werden über den lokalen Marktpreisen bezahlt.",
    "about.v.leaveBetter.title": "Hinterlasse es besser.",
    "about.v.leaveBetter.body":
      "Wir kompensieren CO₂ auf jeder Reise, vermeiden Einwegplastik unterwegs und arbeiten mit frauengeführten Kunsthandwerk-Kollektiven zusammen.",
    "about.v.transparent.title": "Immer transparent.",
    "about.v.transparent.body":
      "Keine versteckten Laden-Stopps, keine Provisionen. Was wir veröffentlichen, liefern wir auch.",
    "about.v.safety.title": "Sicherheit zuerst.",
    "about.v.safety.body":
      "Geprüfte Hotels, 24/7-Unterstützung und ein Sicherheitsprotokoll für Solo- und weibliche Reisende.",
    "about.v.slow.title": "Langsam ist ein Feature.",
    "about.v.slow.body":
      "Wir bauen Puffertage in jedes Programm ein. Sie müssen nicht alles sehen — Sie müssen es gut sehen.",

    // Contact
    "contact.chip": "Kontakt",
    "contact.title": "Planen wir Ihre Indien-Reise.",
    "contact.subtitle":
      "Schreiben Sie uns per WhatsApp für die schnellste Antwort, oder füllen Sie das Formular aus — wir melden uns innerhalb weniger Stunden (indische Zeit, IST).",
    "contact.form.name": "Ihr Name",
    "contact.form.email": "E-Mail",
    "contact.form.country": "Land",
    "contact.form.countryPlaceholder": "z. B. Deutschland",
    "contact.form.whatsapp": "WhatsApp (optional)",
    "contact.form.tour": "Für welche Reise(n) interessieren Sie sich?",
    "contact.form.tourSelect": "Reise auswählen",
    "contact.form.tourCustom": "Individuelle private Reise",
    "contact.form.tourUnsure": "Noch unsicher",
    "contact.form.dates": "Ungefähre Reisedaten",
    "contact.form.datesPlaceholder": "z. B. 10.–20. Juni 2026",
    "contact.form.startDate": "Anreisedatum",
    "contact.form.endDate": "Abreisedatum",
    "contact.form.travelers": "Anzahl der Reisenden",
    "contact.form.travelersPlaceholder": "z. B. 2 Erwachsene",
    "contact.form.message": "Etwas, das wir wissen sollten?",
    "contact.form.messagePlaceholder":
      "Ernährungsweise, Barrierefreiheit, Erlebnisse, die Sie sich wünschen…",
    "contact.form.privacy":
      "Mit dem Absenden stimmen Sie zu, dass wir Sie zu Ihrer Anfrage kontaktieren dürfen. Wir geben Ihre Daten nicht weiter.",
    "contact.sidebar.fastest.title": "Schnellste Antwort",
    "contact.sidebar.fastest.body":
      "WhatsApp ist unser Haupt-Posteingang — wir antworten meist innerhalb einer Stunde zu Geschäftszeiten (IST).",
    "contact.sidebar.email.title": "Oder per E-Mail",
    "contact.sidebar.hours.title": "Öffnungszeiten",
    "contact.sidebar.hours.body":
      "Montag – Samstag · 09:00 – 21:00 IST\nSonntag · Nur Notfall-Unterstützung",
    "contact.sidebar.phone": "Telefon",
    "contact.sidebar.basedIn": "Sitz in",

    // Footer
    "footer.explore": "Entdecken",
    "footer.exploreAll": "Alle Reisen",
    "footer.contact": "Kontakt",
    "footer.waChat": "WhatsApp-Chat",
    "footer.copyright": "Mit Sorgfalt in Indien gemacht.",
    "footer.subline": "Unabhängige Kleingruppenreisen · Mit Sitz in Neu-Delhi",

    // Months
    "month.June": "Juni",
    "month.July": "Juli",
    "month.August": "August",
    "month.September": "September",

    // Markenname-Erklärung (About-Seite + Startseiten-Teaser)
    "about.brand.chip": "Der Name",
    "about.brand.titlePrefix": "Warum",
    "about.brand.titleSuffix": "?",
    "about.brand.desc": "GoTrustelle basiert auf drei einfachen Ideen — der Freiheit zu entdecken, der Sicherheit des Vertrauens und der Wärme einer frauengeführten Reise.",
    "brand.go.title": "Freiheit zu entdecken",
    "brand.go.body": "Bewegung, Abenteuer und der Mut, Indien jenseits des Reiseführers zu entdecken.",
    "brand.trust.title": "Die Sicherheit des Vertrauens",
    "brand.trust.body": "Jedes Detail geplant, jeder Partner geprüft. Sie reisen — wir kümmern uns um den Rest.",
    "brand.elle.title": "Eine frauengeführte Reise",
    "brand.elle.body": "Elle — Französisch für \"sie\". Von einer Frau erbaut, mit Ihnen im Sinn gestaltet.",
    "home.teaser.eyebrow": "Der Name hinter jeder Reise",

    // Gründungsgeschichte (About-Seite)
    "about.origin.chip": "Unsere Geschichte",
    "about.origin.titleBefore": "Wie GoTrustelle begann —",
    "about.origin.titleHighlight": "ein Café, ein Baby und ein echtes Gespräch",
    "about.origin.p1": "Es begann mit dem Lächeln eines Babys im Freedom Café in Rishikesh. Es war im Mai 2022, als ich Melissa dort mit ihrem Kleinen sitzen sah — und weil ich an einem Baby noch nie vorbeigehen konnte, ohne innezuhalten, setzte ich mich zu ihr. Was als kurzer, herzlicher Moment begann, wurde zu stundenlangen Gesprächen: über das Reisen, über Indien, darüber, was es wirklich bedeutet, irgendwo anzukommen und sich vollkommen geborgen zu fühlen.",
    "about.origin.p2": "Über viele Jahre blieben wir trotz Kontinenten dazwischen in Kontakt und machten Pläne, die das Leben immer wieder sanft verschob. Dann kehrte Melissa Anfang 2026 nach Indien zurück — und dieses Mal brachte ich sie nicht in ein Resort oder auf eine Touristenroute. Ich brachte sie nach Hause. Zu meiner Familie in Madhya Pradesh, nahe der Rajasthan-Grenze, wo Kultur in jedem Winkel lebt und Feste die Luft mit Farbe und Musik erfüllen. Ein großes lokales Fest war im Gange. Sie blieb drei Tage: in ein traditionelles indisches Outfit gekleidet, aß das Essen meiner Mutter, nahm an der Pooja teil, streifte durch den Jahrmarkt und saß noch lange nach Mitternacht in unserem Hof, während die Festlichter um uns herum flackerten.",
    "about.origin.p3a": "Am letzten Abend sagte sie etwas, das ich seitdem jeden einzelnen Tag denke:",
    "about.origin.quote": "Das ist es, was uns beim Reisen nach Indien fehlt. Wir wollen Indien nicht nur sehen — wir wollen Indien fühlen.",
    "about.origin.p3b": "Dieser eine Satz wurde zu allem. GoTrustelle entstand nicht aus einem Businessplan oder einer Tabelle, sondern aus der Überzeugung, dass Reisen in seiner schönsten Form wirklich nur Verbindung ist — zu einem Ort, zu seinen Menschen und zu etwas Tieferem in einem selbst, von dem man nicht wusste, dass es darauf wartete, entdeckt zu werden.",
    "about.origin.signature": "— Shikha, Gründerin",
    "about.origin.gallery.label": "Echte Momente · keine Stockfotos",
    "about.origin.photo1": "Rishikesh — das allererste Mal, als wir uns trafen",
    "about.origin.photo2": "Mit Melissas Tochter — der Moment, als wir uns zum ersten Mal sprachen",
    "about.origin.photo3": "Melissa in einem traditionellen indischen Sari mit Shikhas Mutter",
    "about.origin.photo4": "Shikha & Melissa gemeinsam unterwegs, 2026",
    "about.origin.photo5": "Melissa nimmt an der Pooja mit der Familie teil",
    "about.origin.photo6": "Straßenessen und echte Gespräche auf dem Roadtrip",
    "about.origin.video.caption": "Ein echter Moment aus unserer gemeinsamen Zeit in Indien",
    "about.origin.closing.title": "Komm — erkunde Indien nicht nur. Spüre es.",
    "about.origin.closing.body": "Jede Reise, die wir gestalten, ist eine Einladung, über die Oberfläche hinauszugehen — in Familienhäuser, Festplätze, lokale Küchen und Gespräche, die noch lange nach der Heimkehr nachhallen.",
    "about.origin.closing.cta1": "Unsere Reisen entdecken",
    "about.origin.closing.cta2": "Schreib an Shikha",

    // Footer-Tagline
    "footer.tagline": "Reiseerlebnisse in Indien · von einer Frau, für Sie",

    // Misc
    "common.season": "2026",
    "common.loading": "Wird geladen…",
    "lang.label": "Sprache",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
