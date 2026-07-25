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

export type Locale = "en" | "de" | "fr" | "es" | "it" | "pt" | "nl";

export const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.tours": "Journeys",
    "nav.about": "About",
    "nav.why": "Why GoTrustelle",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.planTrip": "Plan my trip",
    "nav.toggleMenu": "Toggle menu",

    // Buttons / CTA
    "cta.viewDepartures": "View 2026 departures",
    "cta.chatWhatsApp": "Chat on WhatsApp",
    "cta.browseTours": "Browse Journeys",
    "cta.talkToUs": "Talk to us",
    "cta.viewAll": "View all journeys →",
    "cta.viewTrip": "View trip →",
    "cta.reserveWA": "Reserve on WhatsApp",
    "cta.requestEmail": "Request details by email",
    "cta.sayHello": "Say hello",
    "cta.sendInquiry": "Send inquiry",
    "cta.openWhatsApp": "Open WhatsApp chat",
    "cta.emailUs": "Email us",
    "cta.messageFounderWA": "Message Shikha on WhatsApp",
    "cta.ourTours": "View our journeys",

    "validation.email": "Please enter a valid email address",
    "validation.phone": "Please enter a valid phone number, e.g. +91 98765 43210",
    "validation.futureDate": "Please choose a date today or later",

    "popup.chip": "Free 1:1 call",
    "popup.title": "Before you go — let's talk India.",
    "popup.subtitle":
      "Free 30-min advice on routes, safety and budget. No obligation to book.",
    "popup.name": "Your name",
    "popup.email": "Email address",
    "popup.consent": "Send me trip ideas & updates too",
    "popup.cta": "Get my free call →",
    "popup.later": "Not now",
    "popup.privacy":
      "By sending you agree we can contact you to schedule the call. We never share your details.",
    "popup.success": "Thanks! We'll be in touch shortly to find a time.",

    // Home hero
    "home.hero.season": "Small-group departures · 2026",
    "home.hero.titleLine1": "Travel India with someone who understands it —",
    "home.hero.titleLine2": "and understands you.",
    "home.hero.title":
      "Travel India with someone who understands it — and understands you.",
    "home.hero.subtitle":
      "Thoughtfully guided journeys for women and curious travelers who want to experience India deeply, safely, and without the overwhelm.",
    "home.hero.rating": "4.9/5 average traveler rating",
    "home.hero.countries": "Travelers from 20+ countries",
    "home.hero.support": "24/7 on-trip support",

    // Home sections
    "home.featured.chip": "JOURNEYS YOU'LL LOVE",
    "home.featured.title": "Hand-crafted journeys, filled with real moments.",
    "home.featured.subtitle":
      "Three signature trips for summer 2026. Secure your seat with a 30% deposit — balance due on arrival.",

    "home.weSeeYou.chip": "We see you ♡",
    "home.weSeeYou.titleLine1": "India can be",
    "home.weSeeYou.titleEm": "incredible.",
    "home.weSeeYou.titleLine2": "But it can also be a lot.",
    "home.weSeeYou.point1": "The noise. The pace. The attention.",
    "home.weSeeYou.point2":
      "The moments where you're not quite sure what's happening — or who to trust.",
    "home.weSeeYou.point3": "We've seen it.",
    "home.weSeeYou.point4": "That's exactly why we created this.",
    "home.weSeeYou.footerLine1":
      "We stand beside you — not just showing you places,",
    "home.weSeeYou.footerLine2": "but helping you feel at home in them.",

    "home.promise.chip": "Our promise ♡",
    "home.promise.titleLine1": "You're not just another booking.",
    "home.promise.titleLine2": "You're",
    "home.promise.titleGuest": "our guest.",
    "home.promise.body":
      "We take care of the details, the logistics and the fine print — so you can be fully present for the beauty, the people and the stories that matter.",
    "home.promise.point1": "No hidden costs",
    "home.promise.point2": "Hand-picked local guides",
    "home.promise.point3": "Responsible & thoughtful travel",
    "home.promise.cta": "Plan your trip with us →",

    "home.consult.chip": "Free 1:1 call",
    "home.consult.title": "Talk to us before you book anything.",
    "home.consult.subtitle":
      "Consultation is at the heart of GoTrustelle. Get a free 30-minute call with our founder — honest advice on routes, safety and budget, with zero pressure to book.",
    "home.consult.point1": "30 minutes, completely free",
    "home.consult.point2": "No obligation to book with us",
    "home.consult.point3": "Real answers from someone who's actually been there",
    "home.consult.cta": "Book your free call →",
    "home.consult.statLabel": "Free, no-pressure call",
    "home.consult.statNote": "Usually confirmed within 24 hours",

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

    // Journeys listing
    "tours.chip": "Our journeys",
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

    // Journey card
    "tourCard.from": "From",
    "tourCard.perPerson": "/ person",

    // Journey detail
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
    "tourDetail.travelTips": "Good to know — for European travelers",
    "tourDetail.waMessage":
      "Hi! I'm interested in the {tour} journey. Can you share more details?",

    // Journey difficulty labels
    "difficulty.Easy": "Easy",
    "difficulty.Moderate": "Moderate",
    "difficulty.Challenging": "Challenging",

    // About
    "about.chip": "Our story",
    "about.title": "A small team obsessed with getting every detail right.",
    "about.p1":
      "GoTrustelle is a young Indian travel company, founded in 2026 by a team that grew up traveling and hosting guests across India. We started with one observation: most group journeys to India feel like factories. You're rushed through monuments, pushed into emporiums, and fed the same buffet. We thought travelers deserved better.",
    "about.p2":
      "So we built the kind of journeys we'd want our friends from abroad to take — small groups, long evenings, real meals with real people, and the freedom to slow down. Every departure is personally overseen by a founder or senior team member.",
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
      "If you've been curious about India but didn't know where to start, or you've tried bigger packaged journeys and felt pushed through — that's exactly the gap I wanted us to fill.",
    "about.partner.signature": "— Melissa",
    "about.stats.inhouseLabel": "In-house planned",
    "about.stats.inhouseBody":
      "No third-party resellers. We handle every booking ourselves.",
    "about.stats.supportLabel": "On-trip support",
    "about.stats.supportBody":
      "A real human on WhatsApp any hour, any day of your trip.",
    "about.stats.groupLabel": "Small groups (max 10)",
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
      "We offset carbon on every journey, avoid single-use plastics on the road, and partner with women-led artisan collectives.",
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
    "contact.form.tour": "Which journey(s) are you interested in?",
    "contact.form.tourSelect": "Select a journey",
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

    // Consult
    "nav.consult": "Free Consult",
    "consult.chip": "Ask us anything",
    "consult.title": "Thinking about India? Let's talk it through.",
    "consult.subtitle":
      "Whether you end up traveling with us or not, we're happy to answer your questions about visiting India. The first 30 minutes are free — no strings attached.",
    "consult.pricing.free.title": "First 30 minutes",
    "consult.pricing.free.price": "Free",
    "consult.pricing.free.body":
      "A relaxed call to answer whatever's on your mind — safety, routes, budgets, best time to go, or anything else about traveling in India.",
    "consult.pricing.extra.body":
      "If 30 minutes isn't enough, book an extended session below. Same call, just more time to go deep.",
    "consult.pricing.perMinutes": "min session",
    "consult.pricing.book": "Book & pay",
    "consult.pricing.comingSoon": "Payment link coming soon — WhatsApp us to book",
    "consult.form.title": "Book your free 30-minute call",
    "consult.form.subtitle":
      "Tell us a bit about your trip and preferred times, and we'll confirm a slot on WhatsApp or email.",
    "consult.form.name": "Your name",
    "consult.form.email": "Email",
    "consult.form.whatsapp": "WhatsApp number",
    "consult.form.topic": "What would you like to talk about?",
    "consult.form.topicPlaceholder":
      "e.g., Is Northeast India safe for solo female travelers in December?",
    "consult.form.availabilityDate": "Preferred date for the call",
    "consult.form.availabilityTime": "Preferred time & timezone",
    "consult.form.availabilityTimePlaceholder": "e.g., Weekday evenings, CET",
    "consult.form.submit": "Request my free call",
    "consult.form.privacy":
      "By sending you agree we can contact you to schedule the call. We never share your details.",

    // Footer
    "footer.explore": "Explore",
    "footer.exploreAll": "All journeys",
    "footer.contact": "Contact",
    "footer.waChat": "WhatsApp chat",
    "footer.copyright": "Crafted with care in India.",
    "footer.subline": "Independent small-group journeys · Based in New Delhi",

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
    "nav.why": "Warum GoTrustelle",
    "nav.faq": "FAQ",
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

    "validation.email": "Bitte geben Sie eine gültige E-Mail-Adresse ein",
    "validation.phone": "Bitte geben Sie eine gültige Telefonnummer ein, z. B. +49 151 23456789",
    "validation.futureDate": "Bitte wählen Sie ein Datum in der Zukunft",

    "popup.chip": "Kostenloses Gespräch",
    "popup.title": "Bevor Sie gehen — sprechen wir über Indien.",
    "popup.subtitle":
      "Kostenlose 30-minütige Beratung zu Routen, Sicherheit und Budget. Ganz ohne Verpflichtung.",
    "popup.name": "Ihr Name",
    "popup.email": "E-Mail-Adresse",
    "popup.consent": "Schicken Sie mir auch Reiseideen & Neuigkeiten",
    "popup.cta": "Kostenloses Gespräch buchen →",
    "popup.later": "Nicht jetzt",
    "popup.privacy":
      "Mit dem Absenden stimmen Sie zu, dass wir Sie zur Terminvereinbarung kontaktieren dürfen. Wir geben Ihre Daten nie weiter.",
    "popup.success": "Danke! Wir melden uns in Kürze, um einen Termin zu finden.",

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

    "home.weSeeYou.chip": "Wir sehen Sie ♡",
    "home.weSeeYou.titleLine1": "Indien kann",
    "home.weSeeYou.titleEm": "unglaublich sein.",
    "home.weSeeYou.titleLine2": "Aber es kann auch viel sein.",
    "home.weSeeYou.point1": "Der Lärm. Das Tempo. Die Aufmerksamkeit.",
    "home.weSeeYou.point2":
      "Die Momente, in denen Sie nicht ganz sicher sind, was passiert — oder wem Sie vertrauen können.",
    "home.weSeeYou.point3": "Wir haben es erlebt.",
    "home.weSeeYou.point4": "Genau deshalb haben wir das geschaffen.",
    "home.weSeeYou.footerLine1":
      "Wir stehen Ihnen zur Seite — wir zeigen Ihnen nicht nur Orte,",
    "home.weSeeYou.footerLine2": "sondern helfen Ihnen, sich dort wie zuhause zu fühlen.",

    "home.promise.chip": "Unser Versprechen ♡",
    "home.promise.titleLine1": "Sie sind nicht einfach nur eine Buchung.",
    "home.promise.titleLine2": "Sie sind",
    "home.promise.titleGuest": "unser Gast.",
    "home.promise.body":
      "Wir kümmern uns um die Details, die Logistik und das Kleingedruckte — damit Sie ganz präsent sein können für die Schönheit, die Menschen und die Geschichten, die zählen.",
    "home.promise.point1": "Keine versteckten Kosten",
    "home.promise.point2": "Handverlesene lokale Guides",
    "home.promise.point3": "Verantwortungsbewusstes & achtsames Reisen",
    "home.promise.cta": "Planen Sie Ihre Reise mit uns →",

    "home.consult.chip": "Unser Markenzeichen · Kostenloses Gespräch",
    "home.consult.title": "Sprechen Sie mit uns, bevor Sie etwas buchen.",
    "home.consult.subtitle":
      "Die Beratung steht im Mittelpunkt von GoTrustelle. Führen Sie ein kostenloses 30-minütiges Gespräch mit unserer Gründerin — ehrlicher Rat zu Routen, Sicherheit und Budget, ganz ohne Druck.",
    "home.consult.point1": "30 Minuten, völlig kostenlos",
    "home.consult.point2": "Keine Verpflichtung, bei uns zu buchen",
    "home.consult.point3": "Echte Antworten von jemandem, der es selbst erlebt hat",
    "home.consult.cta": "Kostenloses Gespräch buchen →",
    "home.consult.statLabel": "Kostenloses, druckfreies Gespräch",
    "home.consult.statNote": "Meist innerhalb von 24 Stunden bestätigt",

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

    // Journeys listing
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

    // Journey card
    "tourCard.from": "Ab",
    "tourCard.perPerson": "/ Person",

    // Journey detail
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
    "tourDetail.travelTips": "Gut zu wissen — für europäische Reisende",
    "tourDetail.waMessage":
      "Hallo! Ich interessiere mich für die Reise {tour}. Können Sie mir mehr Details zusenden?",

    // Journey difficulty labels
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
    "about.stats.groupLabel": "Kleine Gruppen (max. 10)",
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

    // Consult
    "nav.consult": "Kostenlose Beratung",
    "consult.chip": "Fragen Sie uns alles",
    "consult.title": "Denken Sie über Indien nach? Lassen Sie uns reden.",
    "consult.subtitle":
      "Ob Sie am Ende mit uns reisen oder nicht, wir beantworten Ihnen gerne Ihre Fragen zu einer Reise nach Indien. Die ersten 30 Minuten sind kostenlos — ganz ohne Verpflichtung.",
    "consult.pricing.free.title": "Erste 30 Minuten",
    "consult.pricing.free.price": "Kostenlos",
    "consult.pricing.free.body":
      "Ein entspanntes Gespräch, um alles zu beantworten, was Sie beschäftigt — Sicherheit, Routen, Budgets, beste Reisezeit oder alles andere rund um das Reisen in Indien.",
    "consult.pricing.extra.body":
      "Falls 30 Minuten nicht reichen, buchen Sie unten eine verlängerte Sitzung. Derselbe Anruf, nur mit mehr Zeit für die Details.",
    "consult.pricing.perMinutes": "Min. Sitzung",
    "consult.pricing.book": "Buchen & bezahlen",
    "consult.pricing.comingSoon": "Zahlungslink folgt in Kürze — schreiben Sie uns auf WhatsApp zur Buchung",
    "consult.form.title": "Buchen Sie Ihr kostenloses 30-minütiges Gespräch",
    "consult.form.subtitle":
      "Erzählen Sie uns kurz von Ihrer Reise und Ihren gewünschten Zeiten, und wir bestätigen einen Termin per WhatsApp oder E-Mail.",
    "consult.form.name": "Ihr Name",
    "consult.form.email": "E-Mail",
    "consult.form.whatsapp": "WhatsApp-Nummer",
    "consult.form.topic": "Worüber möchten Sie sprechen?",
    "consult.form.topicPlaceholder":
      "z. B. Ist Nordostindien im Dezember sicher für alleinreisende Frauen?",
    "consult.form.availabilityDate": "Bevorzugtes Datum für das Gespräch",
    "consult.form.availabilityTime": "Bevorzugte Zeit & Zeitzone",
    "consult.form.availabilityTimePlaceholder": "z. B. Wochentags abends, MEZ",
    "consult.form.submit": "Kostenloses Gespräch anfragen",
    "consult.form.privacy":
      "Mit dem Absenden stimmen Sie zu, dass wir Sie zur Terminvereinbarung kontaktieren dürfen. Wir geben Ihre Daten niemals weiter.",

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
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.tours": "Voyages",
    "nav.about": "À propos",
    "nav.why": "Pourquoi GoTrustelle",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.planTrip": "Planifier mon voyage",
    "nav.toggleMenu": "Ouvrir/fermer le menu",

    // Buttons / CTA
    "cta.viewDepartures": "Voir les départs 2026",
    "cta.chatWhatsApp": "Chatter sur WhatsApp",
    "cta.browseTours": "Découvrir nos voyages",
    "cta.talkToUs": "Parlons-en",
    "cta.viewAll": "Voir tous les voyages →",
    "cta.viewTrip": "Voir le voyage →",
    "cta.reserveWA": "Réserver sur WhatsApp",
    "cta.requestEmail": "Demander des détails par e-mail",
    "cta.sayHello": "Dire bonjour",
    "cta.sendInquiry": "Envoyer une demande",
    "cta.openWhatsApp": "Ouvrir WhatsApp",
    "cta.emailUs": "Nous écrire",
    "cta.messageFounderWA": "Écrire à Shikha sur WhatsApp",
    "cta.ourTours": "Voir nos voyages",

    "validation.email": "Veuillez saisir une adresse e-mail valide",
    "validation.phone": "Veuillez saisir un numéro de téléphone valide, par ex. +33 6 12 34 56 78",
    "validation.futureDate": "Veuillez choisir une date future",

    "popup.chip": "Appel gratuit",
    "popup.title": "Avant de partir — parlons de l'Inde.",
    "popup.subtitle":
      "Conseils gratuits de 30 minutes sur les itinéraires, la sécurité et le budget. Sans aucune obligation.",
    "popup.name": "Votre nom",
    "popup.email": "Adresse e-mail",
    "popup.consent": "Envoyez-moi aussi des idées de voyage et des actualités",
    "popup.cta": "Réserver mon appel gratuit →",
    "popup.later": "Pas maintenant",
    "popup.privacy":
      "En envoyant, vous acceptez que nous vous contactions pour fixer l'appel. Nous ne partageons jamais vos données.",
    "popup.success": "Merci ! Nous vous recontacterons bientôt pour convenir d'un horaire.",

    // Home hero
    "home.hero.season": "Petits groupes · 2026",
    "home.hero.titleLine1": "Voyagez en Inde avec quelqu'un qui la comprend —",
    "home.hero.titleLine2": "et qui vous comprend.",
    "home.hero.title":
      "Voyagez en Inde avec quelqu'un qui la comprend — et qui vous comprend.",
    "home.hero.subtitle":
      "Des voyages guidés avec soin pour les femmes et les voyageurs curieux qui souhaitent vivre l'Inde en profondeur, en toute sécurité, sans se sentir dépassés.",
    "home.hero.rating": "Note moyenne 4,9/5",
    "home.hero.countries": "Voyageurs de plus de 20 pays",
    "home.hero.support": "Assistance 24h/24 pendant le voyage",

    // Home sections
    "home.featured.chip": "DES VOYAGES QUI VOUS RESSEMBLENT",
    "home.featured.title": "Des voyages faits à la main, remplis de vrais moments.",
    "home.featured.subtitle":
      "Trois voyages phares pour l'été 2026. Réservez votre place avec 30 % d'acompte — solde à l'arrivée.",

    "home.weSeeYou.chip": "Nous vous comprenons ♡",
    "home.weSeeYou.titleLine1": "L'Inde peut être",
    "home.weSeeYou.titleEm": "incroyable.",
    "home.weSeeYou.titleLine2": "Mais cela peut aussi être beaucoup.",
    "home.weSeeYou.point1": "Le bruit. Le rythme. L'attention.",
    "home.weSeeYou.point2":
      "Les moments où vous ne savez pas vraiment ce qui se passe — ni à qui faire confiance.",
    "home.weSeeYou.point3": "Nous l'avons vécu.",
    "home.weSeeYou.point4": "C'est exactement pour cela que nous avons créé ceci.",
    "home.weSeeYou.footerLine1":
      "Nous sommes à vos côtés — nous ne vous montrons pas seulement des lieux,",
    "home.weSeeYou.footerLine2": "nous vous aidons à vous y sentir chez vous.",

    "home.promise.chip": "Notre promesse ♡",
    "home.promise.titleLine1": "Vous n'êtes pas juste une réservation de plus.",
    "home.promise.titleLine2": "Vous êtes",
    "home.promise.titleGuest": "notre invité.",
    "home.promise.body":
      "Nous nous occupons des détails, de la logistique et des petites lignes — pour que vous puissiez profiter pleinement de la beauté, des gens et des histoires qui comptent.",
    "home.promise.point1": "Aucun coût caché",
    "home.promise.point2": "Guides locaux soigneusement sélectionnés",
    "home.promise.point3": "Un voyage responsable et réfléchi",
    "home.promise.cta": "Planifiez votre voyage avec nous →",

    "home.consult.chip": "Notre atout · Appel gratuit",
    "home.consult.title": "Parlez-nous avant de réserver quoi que ce soit.",
    "home.consult.subtitle":
      "La consultation est au cœur de GoTrustelle. Bénéficiez d'un appel gratuit de 30 minutes avec notre fondatrice — des conseils honnêtes sur les itinéraires, la sécurité et le budget, sans aucune pression.",
    "home.consult.point1": "30 minutes, entièrement gratuit",
    "home.consult.point2": "Aucune obligation de réserver avec nous",
    "home.consult.point3": "De vraies réponses de quelqu'un qui l'a vécu",
    "home.consult.cta": "Réservez votre appel gratuit →",
    "home.consult.statLabel": "Appel gratuit, sans pression",
    "home.consult.statNote": "Généralement confirmé sous 24 heures",

    "home.trust.chip": "Pourquoi les voyageurs nous choisissent",
    "home.trust.title": "L'Inde est vaste. Nous la rendons personnelle.",
    "home.trust.subtitle":
      "Nous sommes une jeune entreprise fondée en 2026 avec une conviction claire : voyager en Inde doit se sentir sûr, chaleureux et sans précipitation — que ce soit votre premier voyage à l'étranger ou votre cinquantième.",

    "home.trust.smallGroups.title": "7 à 10 personnes maximum par groupe",
    "home.trust.smallGroups.body":
      "Assez petit pour être intime, assez souple pour s'adapter à vous. Chaque départ est limité à 7–10 voyageurs pour que vous bénéficiiez toujours d'une vraie attention — pas d'une foule.",
    "home.trust.localGuides.title": "Guides locaux triés sur le volet",
    "home.trust.localGuides.body":
      "Nos guides sont avant tout des conteurs — historiens, photographes et cuisiniers qui vivent dans les régions que nous visitons. Pas de discours appris par cœur, pas de commissions cachées.",
    "home.trust.female.title": "Adapté aux femmes et aux voyageurs solo",
    "home.trust.female.body":
      "Fondé par une femme, conçu pour les voyageuses et les voyageurs en solo. Hébergements vérifiés, assistance 24h/24 et aucune pression sur le rythme.",
    "home.trust.transparent.title": "Entièrement personnalisable",
    "home.trust.transparent.body":
      "Pas d'itinéraires figés. Chaque voyage est construit autour de votre rythme, de vos intérêts et de votre budget — dites-nous ce qui compte pour vous et nous le créons de zéro.",

    "home.testimonials.chip": "Ce que disent les voyageurs",
    "home.testimonials.title": "Histoires de voyage.",
    "home.testimonials.sampleNote":
      "* Ces témoignages sont des exemples illustratifs pour une nouvelle entreprise.",

    "home.faq.chip": "Bon à savoir",
    "home.faq.title": "Questions fréquentes",

    "home.finalCTA.title": "Votre été indien vous attend.",
    "home.finalCTA.subtitle":
      "Réservez une place pour un départ en juin ou juillet 2026, ou donnez-nous vos dates et nous concevrons un voyage privé rien que pour vous.",

    // Journeys listing
    "tours.chip": "Nos voyages",
    "tours.title": "Voyages en petits groupes à travers l'Inde.",
    "tours.subtitle":
      "Chaque voyage est tout compris : transferts, hébergements, guides, permis et les repas indiqués. Rejoignez un groupe existant ou demandez-nous de l'organiser en privé à vos dates.",
    "tours.filter.all": "Tous",
    "tours.filter.himalayan": "Himalaya",
    "tours.filter.cultural": "Culturel",
    "tours.customCTA.title": "Vous souhaitez un voyage rien que pour vous ?",
    "tours.customCTA.subtitle":
      "Chacun de nos voyages peut aussi être construit de A à Z — vos dates, votre taille de groupe, votre rythme. Familles, couples, voyageurs solo, retraites d'entreprise. Vous choisissez les régions ; nous nous occupons de chaque détail, de la première demande jusqu'au dépôt à l'aéroport.",
    "tours.customCTA.wa": "Planifier mon voyage sur mesure →",

    // Journey card
    "tourCard.from": "À partir de",
    "tourCard.perPerson": "/ personne",

    // Journey detail
    "tourDetail.duration": "Durée",
    "tourDetail.groupSize": "Taille du groupe",
    "tourDetail.region": "Région",
    "tourDetail.startsFrom": "À partir de",
    "tourDetail.overview": "Aperçu du voyage",
    "tourDetail.route": "Itinéraire",
    "tourDetail.highlights": "Points forts",
    "tourDetail.itinerary": "Programme jour par jour",
    "tourDetail.included": "Inclus",
    "tourDetail.notIncluded": "Non inclus",
    "tourDetail.startingFrom": "À partir de",
    "tourDetail.perPerson": "par personne",
    "tourDetail.deposit": "Réservez votre place avec 30 % d'acompte",
    "tourDetail.departures": "Prochains départs",
    "tourDetail.pricingOptions": "Options tarifaires",
    "tourDetail.otherJourneys": "D'autres voyages qui pourraient vous plaire",
    "tourDetail.difficultyLabel": "Difficulté",
    "tourDetail.travelTips": "Bon à savoir — pour les voyageurs européens",
    "tourDetail.waMessage":
      "Bonjour ! Je suis intéressé(e) par le voyage {tour}. Pouvez-vous me donner plus de détails ?",

    // Journey difficulty labels
    "difficulty.Easy": "Facile",
    "difficulty.Moderate": "Modéré",
    "difficulty.Challenging": "Exigeant",

    // About
    "about.chip": "Notre histoire",
    "about.title": "Une petite équipe obsédée par chaque détail.",
    "about.p1":
      "GoTrustelle est une jeune entreprise de voyage indienne, fondée en 2026 par une équipe qui a grandi en voyageant et en accueillant des hôtes à travers l'Inde.",
    "about.p2":
      "Nous avons donc créé les voyages que nous aurions voulu offrir à nos amis venus de l'étranger — petits groupes, longues soirées, vrais repas avec de vraies personnes, et la liberté de ralentir.",
    "about.principles.chip": "Ce en quoi nous croyons",
    "about.principles.title": "Nos principes de voyage.",
    "about.team.chip": "Avec qui vous voyagerez",
    "about.team.title": "L'équipe derrière votre voyage.",
    "about.team.subtitle":
      "Fondée en Inde, avec une partenaire en Allemagne — pour que vous ayez une personne de confiance des deux côtés de votre voyage.",
    "about.team.hoverHint": "Survolez les cartes pour en savoir plus",
    "about.heroAlt": "Paysage himalayen, nord de l'Inde",
    "about.bios.chip": "La longue histoire",
    "about.bios.title": "Rencontrez les personnes derrière le voyage.",
    "about.bios.subtitle":
      "Chaque message, chaque itinéraire, chaque réponse WhatsApp tardive vient de l'une de nous deux.",
    "about.bios.readShikha": "En savoir plus sur Shikha",
    "about.bios.readMelissa": "En savoir plus sur Melissa",

    "about.story.backToAbout": "← Retour à À propos",
    "about.story.readFullStory": "Lire toute l'histoire →",
    "about.story.meetOther": "Rencontrer notre partenaire en Allemagne",
    "about.story.ctaTitle": "Prêt(e) à voyager avec nous ?",
    "about.story.ctaSubtitle":
      "Parcourez les départs en groupe 2026 ou écrivez-nous directement.",
    "about.story.sectionStory": "Mon histoire",
    "about.story.sectionConnect": "Dire bonjour",

    "about.founder.tag": "Fondatrice",
    "about.founder.country": "Basée en Inde",
    "about.founder.role": "Fondatrice · Votre hôte sur place",
    "about.founder.quote":
      "\"Je veux que vous ressentiez l'Inde — pas seulement la voir.\"",
    "about.founder.chip1": "🎒 Voyageuse solo",
    "about.founder.chip2": "🏔️ Travaille depuis la montagne",
    "about.founder.chip3": "🧭 A guidé des voyages dans le nord de l'Inde",
    "about.founder.signature": "— Shikha",
    "about.founder.followIG": "Suivre sur Instagram",
    "about.founder.viewLinkedIn": "Se connecter sur LinkedIn",
    "about.founder.emailDirect": "M'écrire directement",
    "about.founder.photoCaption": "Shikha · Fondatrice",

    "about.partner.tag": "Partenaire · Allemagne",
    "about.partner.country": "Basée en Allemagne",
    "about.partner.role": "Partenaire · Correspondante voyage Europe",
    "about.partner.quote":
      "\"L'Inde n'est ni meilleure ni pire — elle est simplement différente.\"",
    "about.partner.signature": "— Melissa",

    "about.founder.story1":
      "Bonjour — je suis Shikha. GoTrustelle est mon bébé, et honnêtement, le projet que je voulais créer depuis des années.",
    "about.founder.story2":
      "De profession, je suis développeuse logicielle. Par passion, je suis backpackeuse.",
    "about.founder.story3":
      "Il y a quelques années, j'ai commencé à organiser de petits voyages en groupe pour des amis d'amis qui visitaient l'Inde.",
    "about.founder.story4":
      "Je suis la personne que vous rencontrerez réellement sur place.",
    "about.founder.story5":
      "Ce que je veux pour votre voyage est simple : que vous repartiez en ayant vraiment ressenti l'Inde.",

    "about.partner.story1":
      "Je suis Melissa, basée en Allemagne, et je suis discrètement fascinée par l'Inde depuis presque une décennie.",
    "about.partner.story2":
      "J'y retourne chaque année depuis.",
    "about.partner.story3":
      "Professionnellement, j'ai travaillé dans l'industrie du voyage en Allemagne pendant des années.",
    "about.partner.story4":
      "Mon rôle chez GoTrustelle est de m'occuper de tout côté européen.",
    "about.partner.story5":
      "Si vous étiez curieux(se) de l'Inde sans savoir par où commencer — c'est exactement le vide que nous voulions combler.",

    "about.stats.inhouseLabel": "Planifié en interne",
    "about.stats.inhouseBody":
      "Aucun revendeur tiers. Nous gérons chaque réservation nous-mêmes.",
    "about.stats.supportLabel": "Assistance pendant le voyage",
    "about.stats.supportBody":
      "Un vrai humain sur WhatsApp à toute heure, tous les jours de votre voyage.",
    "about.stats.groupLabel": "Petits groupes (max. 10)",
    "about.stats.groupBody": "Intime, personnel et entièrement adaptable à votre rythme et vos centres d'intérêt.",
    "about.stats.customLabel": "Personnalisable",
    "about.stats.customBody": "Chaque itinéraire est construit autour de vous — dates, rythme, intérêts. Aucun modèle fixe.",

    // About principles list
    "about.v.smallGroups.title": "Petits groupes. Toujours 7–10 max.",
    "about.v.smallGroups.body":
      "Nous limitons chaque départ à 7–10 voyageurs.",
    "about.v.local.title": "Embauche locale, salaire juste.",
    "about.v.local.body":
      "Nos guides, chauffeurs et hôtes d'hébergement vivent dans les régions que nous visitons et sont rémunérés au-dessus des tarifs locaux.",
    "about.v.leaveBetter.title": "Laisser mieux qu'à notre arrivée.",
    "about.v.leaveBetter.body":
      "Nous compensons le carbone à chaque voyage, évitons les plastiques à usage unique et travaillons avec des collectifs artisanaux dirigés par des femmes.",
    "about.v.transparent.title": "Transparence, toujours.",
    "about.v.transparent.body":
      "Aucun arrêt caché en boutique, aucune commission. Ce que nous publions, c'est ce que nous livrons.",
    "about.v.safety.title": "La sécurité avant tout.",
    "about.v.safety.body":
      "Hôtels vérifiés, assistance 24h/24 et un protocole de sécurité adapté aux voyageurs solo et aux femmes.",
    "about.v.slow.title": "La lenteur est une fonctionnalité.",
    "about.v.slow.body":
      "Nous intégrons des jours tampons dans chaque itinéraire. Vous n'avez pas besoin de tout voir — vous avez besoin de bien voir.",

    // Contact
    "contact.chip": "Nous contacter",
    "contact.title": "Planifions votre voyage en Inde.",
    "contact.subtitle":
      "Écrivez-nous sur WhatsApp pour une réponse rapide, ou remplissez le formulaire ci-dessous et nous vous répondrons dans les heures qui suivent (heure standard indienne).",
    "contact.form.name": "Votre nom",
    "contact.form.email": "E-mail",
    "contact.form.country": "Pays",
    "contact.form.countryPlaceholder": "ex. France",
    "contact.form.whatsapp": "WhatsApp (facultatif)",
    "contact.form.tour": "Quel(s) voyage(s) vous intéresse(nt) ?",
    "contact.form.tourSelect": "Sélectionner un voyage",
    "contact.form.tourCustom": "Voyage privé sur mesure",
    "contact.form.tourUnsure": "Pas encore décidé(e)",
    "contact.form.dates": "Dates de voyage approximatives",
    "contact.form.datesPlaceholder": "ex. 10–20 juin 2026",
    "contact.form.startDate": "Date de départ",
    "contact.form.endDate": "Date de retour",
    "contact.form.travelers": "Nombre de voyageurs",
    "contact.form.travelersPlaceholder": "ex. 2 adultes",
    "contact.form.message": "Autre chose à nous dire ?",
    "contact.form.messagePlaceholder":
      "Régime alimentaire, accessibilité, expériences que vous aimeriez vivre…",
    "contact.form.privacy":
      "En envoyant ce formulaire, vous acceptez que nous vous contactions au sujet de votre demande. Nous ne partageons jamais vos données.",
    "contact.sidebar.fastest.title": "Réponse la plus rapide",
    "contact.sidebar.fastest.body":
      "WhatsApp est notre boîte de réception principale — nous répondons généralement en une heure pendant les heures ouvrables (IST).",
    "contact.sidebar.email.title": "Ou écrivez-nous",
    "contact.sidebar.hours.title": "Heures d'ouverture",
    "contact.sidebar.hours.body":
      "Lundi – Samedi · 9h00 – 21h00 IST\nDimanche · Assistance d'urgence uniquement",
    "contact.sidebar.phone": "Téléphone",
    "contact.sidebar.basedIn": "Basé à",

    // Consult
    "nav.consult": "Consultation gratuite",
    "consult.chip": "Posez-nous vos questions",
    "consult.title": "Vous pensez à l'Inde ? Discutons-en.",
    "consult.subtitle":
      "Que vous voyagiez avec nous ou non, nous sommes ravis de répondre à vos questions sur un voyage en Inde. Les 30 premières minutes sont gratuites — sans aucun engagement.",
    "consult.pricing.free.title": "Les 30 premières minutes",
    "consult.pricing.free.price": "Gratuit",
    "consult.pricing.free.body":
      "Un appel décontracté pour répondre à toutes vos questions — sécurité, itinéraires, budgets, meilleure période pour partir, ou tout autre sujet lié à un voyage en Inde.",
    "consult.pricing.extra.body":
      "Si 30 minutes ne suffisent pas, réservez une session prolongée ci-dessous. Le même appel, avec plus de temps pour approfondir.",
    "consult.pricing.perMinutes": "min de session",
    "consult.pricing.book": "Réserver et payer",
    "consult.pricing.comingSoon": "Lien de paiement bientôt disponible — contactez-nous sur WhatsApp pour réserver",
    "consult.form.title": "Réservez votre appel gratuit de 30 minutes",
    "consult.form.subtitle":
      "Parlez-nous un peu de votre voyage et de vos disponibilités, et nous confirmerons un créneau par WhatsApp ou e-mail.",
    "consult.form.name": "Votre nom",
    "consult.form.email": "E-mail",
    "consult.form.whatsapp": "Numéro WhatsApp",
    "consult.form.topic": "De quoi souhaitez-vous parler ?",
    "consult.form.topicPlaceholder":
      "ex. : L'Inde du Nord-Est est-elle sûre pour les femmes voyageant seules en décembre ?",
    "consult.form.availabilityDate": "Date souhaitée pour l'appel",
    "consult.form.availabilityTime": "Heure et fuseau horaire souhaités",
    "consult.form.availabilityTimePlaceholder": "ex. : En semaine le soir, CET",
    "consult.form.submit": "Demander mon appel gratuit",
    "consult.form.privacy":
      "En envoyant ce formulaire, vous acceptez que nous vous contactions pour planifier l'appel. Nous ne partageons jamais vos coordonnées.",

    // Footer
    "footer.explore": "Explorer",
    "footer.exploreAll": "Tous les voyages",
    "footer.contact": "Contact",
    "footer.waChat": "Chat WhatsApp",
    "footer.copyright": "Créé avec soin en Inde.",
    "footer.subline": "Voyages en petits groupes indépendants · Basé à New Delhi",

    // Months
    "month.June": "Juin",
    "month.July": "Juillet",
    "month.August": "Août",
    "month.September": "Septembre",

    // Brand name breakdown
    "about.brand.chip": "Le nom",
    "about.brand.titlePrefix": "Pourquoi",
    "about.brand.titleSuffix": "?",
    "about.brand.desc": "GoTrustelle repose sur trois idées simples — la liberté d'explorer, le confort de la confiance et la chaleur d'un voyage mené par une femme.",
    "brand.go.title": "Liberté d'explorer",
    "brand.go.body": "Le mouvement, l'aventure et le courage de découvrir l'Inde au-delà des guides touristiques.",
    "brand.trust.title": "Le confort de la confiance",
    "brand.trust.body": "Chaque détail planifié, chaque partenaire vérifié. Vous voyagez — nous nous occupons du reste.",
    "brand.elle.title": "Un voyage mené par une femme",
    "brand.elle.body": "Elle — en français, c'est elle. Construit par une femme, conçu pour vous.",
    "home.teaser.eyebrow": "Le nom derrière chaque voyage",

    // Founding story
    "about.origin.chip": "Notre histoire",
    "about.origin.titleBefore": "Comment GoTrustelle a commencé —",
    "about.origin.titleHighlight": "un café, un bébé et une vraie conversation",
    "about.origin.p1": "Tout a commencé avec le sourire d'un bébé au Freedom Café de Rishikesh.",
    "about.origin.p2": "Nous sommes restées en contact à travers les continents pendant des années, faisant des projets que la vie repoussait gentiment.",
    "about.origin.p3a": "Le dernier soir, elle a dit quelque chose à quoi je pense chaque jour depuis :",
    "about.origin.quote": "C'est ce qui nous manque quand on voyage en Inde. On ne veut pas seulement voir l'Inde — on veut la ressentir.",
    "about.origin.p3b": "Cette phrase est devenue tout.",
    "about.origin.signature": "— Shikha, Fondatrice",
    "about.origin.gallery.label": "Vrais moments · pas de photos de stock",
    "about.origin.photo1": "Rishikesh — la toute première fois que nous nous sommes rencontrées",
    "about.origin.photo2": "Jouer avec la fille de Melissa — le moment où nous avons parlé pour la première fois",
    "about.origin.photo3": "Melissa dans un sari indien traditionnel avec la mère de Shikha",
    "about.origin.photo4": "Shikha & Melissa en route ensemble, 2026",
    "about.origin.photo5": "Melissa participe à la pooja lors de la fête locale",
    "about.origin.photo6": "En-cas de route et vraies conversations",
    "about.origin.video.caption": "Un vrai moment de notre temps ensemble en Inde",
    "about.origin.closing.title": "Venez — ne faites pas que découvrir l'Inde, ressentez-la.",
    "about.origin.closing.body": "Chaque voyage que nous créons est une invitation à dépasser la surface.",
    "about.origin.closing.cta1": "Voir nos voyages",
    "about.origin.closing.cta2": "Écrire à Shikha",

    // Footer tagline
    "footer.tagline": "Expériences de voyage en Inde · par une femme, pour vous",

    // Misc
    "common.season": "2026",
    "common.loading": "Chargement…",
    "lang.label": "Langue",
  },

  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.tours": "Viajes",
    "nav.about": "Nosotros",
    "nav.why": "Por qué GoTrustelle",
    "nav.faq": "FAQ",
    "nav.contact": "Contacto",
    "nav.planTrip": "Planificar mi viaje",
    "nav.toggleMenu": "Abrir/cerrar menú",

    // Buttons / CTA
    "cta.viewDepartures": "Ver salidas 2026",
    "cta.chatWhatsApp": "Chatear en WhatsApp",
    "cta.browseTours": "Explorar viajes",
    "cta.talkToUs": "Hablar con nosotros",
    "cta.viewAll": "Ver todos los viajes →",
    "cta.viewTrip": "Ver viaje →",
    "cta.reserveWA": "Reservar por WhatsApp",
    "cta.requestEmail": "Solicitar detalles por e-mail",
    "cta.sayHello": "Saluda",
    "cta.sendInquiry": "Enviar consulta",
    "cta.openWhatsApp": "Abrir chat de WhatsApp",
    "cta.emailUs": "Escríbenos",
    "cta.messageFounderWA": "Escribir a Shikha por WhatsApp",
    "cta.ourTours": "Ver nuestros viajes",

    "validation.email": "Introduce una dirección de correo electrónico válida",
    "validation.phone": "Introduce un número de teléfono válido, p. ej. +34 612 345 678",
    "validation.futureDate": "Elige una fecha futura",

    "popup.chip": "Llamada gratuita",
    "popup.title": "Antes de irte — hablemos de la India.",
    "popup.subtitle":
      "Asesoramiento gratuito de 30 minutos sobre rutas, seguridad y presupuesto. Sin ninguna obligación.",
    "popup.name": "Tu nombre",
    "popup.email": "Correo electrónico",
    "popup.consent": "Envíame también ideas de viaje y novedades",
    "popup.cta": "Reservar mi llamada gratuita →",
    "popup.later": "Ahora no",
    "popup.privacy":
      "Al enviar aceptas que te contactemos para concretar la llamada. Nunca compartimos tus datos.",
    "popup.success": "¡Gracias! Te contactaremos pronto para acordar un horario.",

    // Home hero
    "home.hero.season": "Grupos reducidos · 2026",
    "home.hero.titleLine1": "Viaja a la India con alguien que la entiende —",
    "home.hero.titleLine2": "y que te entiende a ti.",
    "home.hero.title":
      "Viaja a la India con alguien que la entiende — y que te entiende a ti.",
    "home.hero.subtitle":
      "Viajes guiados con cuidado para mujeres y viajeros curiosos que desean vivir la India en profundidad, con seguridad y sin agobios.",
    "home.hero.rating": "Valoración media de 4,9/5",
    "home.hero.countries": "Viajeros de más de 20 países",
    "home.hero.support": "Asistencia 24/7 durante el viaje",

    // Home sections
    "home.featured.chip": "VIAJES QUE TE ENCANTARÁN",
    "home.featured.title": "Viajes hechos a mano, llenos de momentos reales.",
    "home.featured.subtitle":
      "Tres viajes especiales para el verano de 2026. Asegura tu plaza con un 30 % de depósito — saldo al llegar.",

    "home.weSeeYou.chip": "Te entendemos ♡",
    "home.weSeeYou.titleLine1": "La India puede ser",
    "home.weSeeYou.titleEm": "increíble.",
    "home.weSeeYou.titleLine2": "Pero también puede ser mucho.",
    "home.weSeeYou.point1": "El ruido. El ritmo. La atención.",
    "home.weSeeYou.point2":
      "Los momentos en los que no estás del todo seguro de lo que pasa — o en quién confiar.",
    "home.weSeeYou.point3": "Lo hemos vivido.",
    "home.weSeeYou.point4": "Por eso creamos esto.",
    "home.weSeeYou.footerLine1":
      "Estamos a tu lado — no solo te mostramos lugares,",
    "home.weSeeYou.footerLine2": "te ayudamos a sentirte como en casa en ellos.",

    "home.promise.chip": "Nuestra promesa ♡",
    "home.promise.titleLine1": "No eres solo otra reserva más.",
    "home.promise.titleLine2": "Eres",
    "home.promise.titleGuest": "nuestro invitado.",
    "home.promise.body":
      "Nos encargamos de los detalles, la logística y la letra pequeña — para que puedas estar plenamente presente en la belleza, la gente y las historias que importan.",
    "home.promise.point1": "Sin costos ocultos",
    "home.promise.point2": "Guías locales cuidadosamente seleccionados",
    "home.promise.point3": "Viaje responsable y consciente",
    "home.promise.cta": "Planifica tu viaje con nosotros →",

    "home.consult.chip": "Nuestra ventaja · Llamada gratuita",
    "home.consult.title": "Habla con nosotros antes de reservar nada.",
    "home.consult.subtitle":
      "La consulta está en el corazón de GoTrustelle. Reserva una llamada gratuita de 30 minutos con nuestra fundadora — consejos honestos sobre rutas, seguridad y presupuesto, sin ninguna presión.",
    "home.consult.point1": "30 minutos, totalmente gratis",
    "home.consult.point2": "Sin obligación de reservar con nosotros",
    "home.consult.point3": "Respuestas reales de alguien que lo ha vivido",
    "home.consult.cta": "Reserva tu llamada gratuita →",
    "home.consult.statLabel": "Llamada gratuita, sin presión",
    "home.consult.statNote": "Normalmente confirmada en 24 horas",

    "home.trust.chip": "Por qué los viajeros nos eligen",
    "home.trust.title": "La India es inmensa. Nosotros la hacemos personal.",
    "home.trust.subtitle":
      "Somos una empresa joven fundada en 2026 con una convicción clara: viajar por la India debe sentirse seguro, cálido y sin prisas — ya sea tu primer viaje al extranjero o el quincuagésimo.",

    "home.trust.smallGroups.title": "Máximo 7–10 personas por grupo",
    "home.trust.smallGroups.body":
      "Suficientemente pequeño para sentirse íntimo, suficientemente flexible para adaptarse a ti. Cada salida tiene un límite de 7–10 viajeros para que siempre recibas atención real, no una masa.",
    "home.trust.localGuides.title": "Guías locales seleccionados a mano",
    "home.trust.localGuides.body":
      "Nuestros guías son ante todo narradores — historiadores, fotógrafos y cocineros que viven en las regiones que visitamos. Sin discursos de memoria, sin comisiones ocultas.",
    "home.trust.female.title": "Amigable para mujeres y viajeros solo",
    "home.trust.female.body":
      "Fundado por una mujer, diseñado con viajeras en solitario y femeninas en mente. Alojamientos verificados, asistencia 24/7 y cero presión sobre el ritmo.",
    "home.trust.transparent.title": "Totalmente personalizable",
    "home.trust.transparent.body":
      "Sin itinerarios fijos. Cada viaje se moldea en torno a tu ritmo, tus intereses y tu presupuesto — cuéntanos lo que importa y lo construimos desde cero.",

    "home.testimonials.chip": "Lo que dicen los viajeros",
    "home.testimonials.title": "Historias desde el camino.",
    "home.testimonials.sampleNote":
      "* Los testimonios son ejemplos ilustrativos para una empresa nueva.",

    "home.faq.chip": "Bueno saberlo",
    "home.faq.title": "Preguntas frecuentes",

    "home.finalCTA.title": "Tu verano indio te espera.",
    "home.finalCTA.subtitle":
      "Reserva una plaza en una salida de junio o julio de 2026, o dinos tus fechas y diseñaremos un viaje privado a tu medida.",

    // Journeys listing
    "tours.chip": "Nuestros viajes",
    "tours.title": "Viajes en grupos reducidos por toda la India.",
    "tours.subtitle":
      "Cada viaje incluye todo: traslados, alojamiento, guías, permisos y las comidas indicadas. Únete a un grupo próximo o pídenos que lo organicemos de forma privada en tus fechas.",
    "tours.filter.all": "Todos",
    "tours.filter.himalayan": "Himalaya",
    "tours.filter.cultural": "Cultural",
    "tours.customCTA.title": "¿Quieres un viaje hecho solo para ti?",
    "tours.customCTA.subtitle":
      "Cada viaje que realizamos también puede construirse desde cero — tus fechas, tu tamaño de grupo, tu ritmo. Familias, parejas, viajeros en solitario, retiros corporativos. Tú eliges las regiones; nosotros nos encargamos de cada detalle, desde la primera consulta hasta el traslado al aeropuerto.",
    "tours.customCTA.wa": "Planificar mi viaje a medida →",

    // Journey card
    "tourCard.from": "Desde",
    "tourCard.perPerson": "/ persona",

    // Journey detail
    "tourDetail.duration": "Duración",
    "tourDetail.groupSize": "Tamaño del grupo",
    "tourDetail.region": "Región",
    "tourDetail.startsFrom": "Desde",
    "tourDetail.overview": "Resumen del viaje",
    "tourDetail.route": "Ruta",
    "tourDetail.highlights": "Lo mejor del viaje",
    "tourDetail.itinerary": "Itinerario día a día",
    "tourDetail.included": "Incluido",
    "tourDetail.notIncluded": "No incluido",
    "tourDetail.startingFrom": "Desde",
    "tourDetail.perPerson": "por persona",
    "tourDetail.deposit": "Asegura tu plaza con un 30 % de depósito",
    "tourDetail.departures": "Próximas salidas",
    "tourDetail.pricingOptions": "Opciones de precio",
    "tourDetail.otherJourneys": "Otros viajes que podrían gustarte",
    "tourDetail.difficultyLabel": "Dificultad",
    "tourDetail.travelTips": "Lo que debes saber — para viajeros europeos",
    "tourDetail.waMessage":
      "¡Hola! Me interesa el viaje {tour}. ¿Puedes compartir más detalles?",

    // Journey difficulty labels
    "difficulty.Easy": "Fácil",
    "difficulty.Moderate": "Moderado",
    "difficulty.Challenging": "Exigente",

    // About
    "about.chip": "Nuestra historia",
    "about.title": "Un equipo pequeño obsesionado con cada detalle.",
    "about.p1":
      "GoTrustelle es una joven empresa de viajes india, fundada en 2026 por un equipo que creció viajando y acogiendo huéspedes por toda la India.",
    "about.p2":
      "Así que creamos los viajes que querríamos que hicieran nuestros amigos del extranjero — grupos pequeños, largas noches, comidas reales con gente real y la libertad de ir despacio.",
    "about.principles.chip": "En lo que creemos",
    "about.principles.title": "Nuestros principios de viaje.",
    "about.team.chip": "Con quién viajarás",
    "about.team.title": "El equipo detrás de tu viaje.",
    "about.team.subtitle":
      "Fundada en la India, con una socia en Alemania — para que tengas una persona de confianza en ambos lados de tu viaje.",
    "about.team.hoverHint": "Pasa el cursor sobre las tarjetas para saber más",
    "about.heroAlt": "Paisaje himalayo, norte de la India",
    "about.bios.chip": "La historia larga",
    "about.bios.title": "Conoce a las personas detrás del viaje.",
    "about.bios.subtitle":
      "Cada mensaje, cada itinerario, cada respuesta de WhatsApp a altas horas viene de una de nosotras dos.",
    "about.bios.readShikha": "Más sobre Shikha",
    "about.bios.readMelissa": "Más sobre Melissa",

    "about.story.backToAbout": "← Volver a Nosotros",
    "about.story.readFullStory": "Leer la historia completa →",
    "about.story.meetOther": "Conocer a nuestra socia en Alemania",
    "about.story.ctaTitle": "¿Lista/o para viajar con nosotros?",
    "about.story.ctaSubtitle":
      "Explora las salidas grupales 2026 o escríbenos directamente.",
    "about.story.sectionStory": "Mi historia",
    "about.story.sectionConnect": "Dí hola",

    "about.founder.tag": "Fundadora",
    "about.founder.country": "Con base en la India",
    "about.founder.role": "Fundadora · Tu anfitriona sobre el terreno",
    "about.founder.quote":
      "\"Quiero que sientas la India — no solo que la veas.\"",
    "about.founder.chip1": "🎒 Mochilera en solitario",
    "about.founder.chip2": "🏔️ Trabaja desde las montañas",
    "about.founder.chip3": "🧭 Ha guiado viajes por el norte de la India",
    "about.founder.signature": "— Shikha",
    "about.founder.followIG": "Seguir en Instagram",
    "about.founder.viewLinkedIn": "Conectar en LinkedIn",
    "about.founder.emailDirect": "Escribirme directamente",
    "about.founder.photoCaption": "Shikha · Fundadora",

    "about.partner.tag": "Socia · Alemania",
    "about.partner.country": "Con base en Alemania",
    "about.partner.role": "Socia · Enlace de viajes en Europa",
    "about.partner.quote":
      "\"La India no es mejor ni peor — es simplemente diferente.\"",
    "about.partner.signature": "— Melissa",

    "about.founder.story1":
      "Hola — soy Shikha. GoTrustelle es mi proyecto más querido, y honestamente, el que llevo años queriendo construir.",
    "about.founder.story2":
      "De profesión soy desarrolladora de software. Por pasión, soy mochilera.",
    "about.founder.story3":
      "Hace unos años empecé a organizar pequeños viajes en grupo para amigos de amigos que visitaban la India.",
    "about.founder.story4":
      "Soy la persona que realmente conocerás sobre el terreno.",
    "about.founder.story5":
      "Lo que quiero de tu viaje es sencillo: que te vayas habiendo realmente sentido la India.",

    "about.partner.story1":
      "Soy Melissa, vivo en Alemania y llevo casi una década discretamente fascinada con la India.",
    "about.partner.story2":
      "Llevo volviendo cada año desde entonces.",
    "about.partner.story3":
      "Profesionalmente, he trabajado en el sector de los viajes en Alemania durante años.",
    "about.partner.story4":
      "Mi trabajo en GoTrustelle es ocuparme de todo lo relacionado con el lado europeo.",
    "about.partner.story5":
      "Si sentías curiosidad por la India pero no sabías por dónde empezar — eso es exactamente el hueco que queríamos llenar.",

    "about.stats.inhouseLabel": "Planificado internamente",
    "about.stats.inhouseBody":
      "Sin revendedores externos. Gestionamos cada reserva nosotros mismos.",
    "about.stats.supportLabel": "Asistencia durante el viaje",
    "about.stats.supportBody":
      "Un ser humano real en WhatsApp a cualquier hora, cualquier día de tu viaje.",
    "about.stats.groupLabel": "Grupos pequeños (máx. 10)",
    "about.stats.groupBody": "Íntimo, personal y totalmente adaptable a tu ritmo e intereses.",
    "about.stats.customLabel": "Personalizable",
    "about.stats.customBody": "Cada itinerario se construye alrededor de ti — fechas, ritmo, intereses. Sin plantillas fijas.",

    // About principles list
    "about.v.smallGroups.title": "Grupos pequeños. Siempre 7–10 máx.",
    "about.v.smallGroups.body":
      "Limitamos cada salida a 7–10 viajeros.",
    "about.v.local.title": "Contratar local, pagar justo.",
    "about.v.local.body":
      "Nuestros guías, conductores y anfitriones viven en las regiones que visitamos y reciben una remuneración por encima de las tarifas locales.",
    "about.v.leaveBetter.title": "Dejar un lugar mejor.",
    "about.v.leaveBetter.body":
      "Compensamos el carbono en cada viaje, evitamos los plásticos de un solo uso y colaboramos con colectivos artesanales liderados por mujeres.",
    "about.v.transparent.title": "Transparencia, siempre.",
    "about.v.transparent.body":
      "Sin paradas ocultas en tiendas, sin comisiones. Lo que publicamos es lo que entregamos.",
    "about.v.safety.title": "La seguridad, primero.",
    "about.v.safety.body":
      "Hoteles verificados, asistencia 24/7 y un protocolo de seguridad adaptado para viajeros en solitario y mujeres.",
    "about.v.slow.title": "La lentitud es una ventaja.",
    "about.v.slow.body":
      "Incluimos días de margen en cada itinerario. No necesitas verlo todo — necesitas verlo bien.",

    // Contact
    "contact.chip": "Ponte en contacto",
    "contact.title": "Planifiquemos tu viaje a la India.",
    "contact.subtitle":
      "Escríbenos por WhatsApp para una respuesta rápida, o rellena el formulario de abajo y te contestaremos en unas horas (hora estándar de la India).",
    "contact.form.name": "Tu nombre",
    "contact.form.email": "Correo electrónico",
    "contact.form.country": "País",
    "contact.form.countryPlaceholder": "ej. España",
    "contact.form.whatsapp": "WhatsApp (opcional)",
    "contact.form.tour": "¿Qué viaje(s) te interesan?",
    "contact.form.tourSelect": "Selecciona un viaje",
    "contact.form.tourCustom": "Viaje privado a medida",
    "contact.form.tourUnsure": "Aún no lo sé",
    "contact.form.dates": "Fechas de viaje aproximadas",
    "contact.form.datesPlaceholder": "ej. 10–20 junio 2026",
    "contact.form.startDate": "Fecha de inicio",
    "contact.form.endDate": "Fecha de fin",
    "contact.form.travelers": "Número de viajeros",
    "contact.form.travelersPlaceholder": "ej. 2 adultos",
    "contact.form.message": "¿Algo más que debamos saber?",
    "contact.form.messagePlaceholder":
      "Necesidades dietéticas, accesibilidad, experiencias que te encantaría vivir…",
    "contact.form.privacy":
      "Al enviar aceptas que nos pongamos en contacto contigo sobre tu consulta. Nunca compartimos tus datos.",
    "contact.sidebar.fastest.title": "Respuesta más rápida",
    "contact.sidebar.fastest.body":
      "WhatsApp es nuestra bandeja de entrada principal — solemos responder en una hora en horario laboral (IST).",
    "contact.sidebar.email.title": "O escríbenos por correo",
    "contact.sidebar.hours.title": "Horario de atención",
    "contact.sidebar.hours.body":
      "Lunes – Sábado · 9:00 – 21:00 IST\nDomingo · Solo asistencia de emergencia durante el viaje",
    "contact.sidebar.phone": "Teléfono",
    "contact.sidebar.basedIn": "Con sede en",

    // Consult
    "nav.consult": "Consulta gratuita",
    "consult.chip": "Pregúntanos lo que quieras",
    "consult.title": "¿Estás pensando en la India? Hablemos.",
    "consult.subtitle":
      "Viajes con nosotros o no, nos encantará responder tus preguntas sobre visitar la India. Los primeros 30 minutos son gratis, sin ningún compromiso.",
    "consult.pricing.free.title": "Primeros 30 minutos",
    "consult.pricing.free.price": "Gratis",
    "consult.pricing.free.body":
      "Una llamada relajada para responder lo que tengas en mente: seguridad, rutas, presupuestos, mejor época para viajar o cualquier otra cosa sobre viajar por la India.",
    "consult.pricing.extra.body":
      "Si 30 minutos no son suficientes, reserva una sesión ampliada a continuación. La misma llamada, con más tiempo para profundizar.",
    "consult.pricing.perMinutes": "min de sesión",
    "consult.pricing.book": "Reservar y pagar",
    "consult.pricing.comingSoon": "Enlace de pago disponible próximamente — escríbenos por WhatsApp para reservar",
    "consult.form.title": "Reserva tu llamada gratuita de 30 minutos",
    "consult.form.subtitle":
      "Cuéntanos un poco sobre tu viaje y tus horarios preferidos, y confirmaremos un horario por WhatsApp o correo electrónico.",
    "consult.form.name": "Tu nombre",
    "consult.form.email": "Correo electrónico",
    "consult.form.whatsapp": "Número de WhatsApp",
    "consult.form.topic": "¿De qué te gustaría hablar?",
    "consult.form.topicPlaceholder":
      "ej.: ¿Es seguro el noreste de la India para mujeres que viajan solas en diciembre?",
    "consult.form.availabilityDate": "Fecha preferida para la llamada",
    "consult.form.availabilityTime": "Hora y zona horaria preferidas",
    "consult.form.availabilityTimePlaceholder": "ej.: Tardes de días de semana, CET",
    "consult.form.submit": "Solicitar mi llamada gratuita",
    "consult.form.privacy":
      "Al enviar aceptas que podamos contactarte para programar la llamada. Nunca compartimos tus datos.",

    // Footer
    "footer.explore": "Explorar",
    "footer.exploreAll": "Todos los viajes",
    "footer.contact": "Contacto",
    "footer.waChat": "Chat de WhatsApp",
    "footer.copyright": "Creado con cuidado en la India.",
    "footer.subline": "Viajes independientes en grupos reducidos · Con sede en Nueva Delhi",

    // Months
    "month.June": "Junio",
    "month.July": "Julio",
    "month.August": "Agosto",
    "month.September": "Septiembre",

    // Brand name breakdown
    "about.brand.chip": "El nombre",
    "about.brand.titlePrefix": "¿Por qué",
    "about.brand.titleSuffix": "?",
    "about.brand.desc": "GoTrustelle se basa en tres ideas sencillas — la libertad de explorar, el confort de la confianza y la calidez de un viaje liderado por una mujer.",
    "brand.go.title": "Libertad de explorar",
    "brand.go.body": "Movimiento, aventura y el valor de descubrir la India más allá de las guías.",
    "brand.trust.title": "El confort de la confianza",
    "brand.trust.body": "Cada detalle planificado, cada socio verificado. Tú viajas — nosotros nos encargamos del resto.",
    "brand.elle.title": "Un viaje liderado por una mujer",
    "brand.elle.body": "Elle — «ella» en francés. Construido por una mujer, diseñado pensando en ti.",
    "home.teaser.eyebrow": "El nombre detrás de cada viaje",

    // Founding story
    "about.origin.chip": "Nuestra historia",
    "about.origin.titleBefore": "Cómo empezó GoTrustelle —",
    "about.origin.titleHighlight": "un café, un bebé y una conversación real",
    "about.origin.p1": "Todo empezó con la sonrisa de un bebé en el Freedom Café de Rishikesh.",
    "about.origin.p2": "Mantuvimos el contacto a través de continentes durante años, haciendo planes que la vida seguía posponiendo amablemente.",
    "about.origin.p3a": "La última noche, dijo algo en lo que he pensado cada día desde entonces:",
    "about.origin.quote": "Esto es lo que nos perdemos cuando viajamos a la India. No solo queremos ver la India — queremos sentir la India.",
    "about.origin.p3b": "Esa frase lo fue todo.",
    "about.origin.signature": "— Shikha, Fundadora",
    "about.origin.gallery.label": "Momentos reales · no fotos de stock",
    "about.origin.photo1": "Rishikesh — la primera vez que nos conocimos",
    "about.origin.photo2": "Jugando con la hija de Melissa — el momento en que hablamos por primera vez",
    "about.origin.photo3": "Melissa con un sari indio tradicional junto a la madre de Shikha",
    "about.origin.photo4": "Shikha y Melissa juntas en el camino, 2026",
    "about.origin.photo5": "Melissa participa en la pooja de la fiesta local",
    "about.origin.photo6": "Aperitivos de carretera y conversaciones reales",
    "about.origin.video.caption": "Un momento real de nuestro tiempo juntas en la India",
    "about.origin.closing.title": "Ven — no solo explores la India, siéntela.",
    "about.origin.closing.body": "Cada viaje que creamos es una invitación a ir más allá de la superficie.",
    "about.origin.closing.cta1": "Ver nuestros viajes",
    "about.origin.closing.cta2": "Escribir a Shikha",

    // Footer tagline
    "footer.tagline": "Experiencias de viaje en la India · por una mujer, para ti",

    // Misc
    "common.season": "2026",
    "common.loading": "Cargando…",
    "lang.label": "Idioma",
  },

  it: {
    // Navigation
    "nav.home": "Home",
    "nav.tours": "Viaggi",
    "nav.about": "Chi siamo",
    "nav.why": "Perché GoTrustelle",
    "nav.faq": "FAQ",
    "nav.contact": "Contatti",
    "nav.planTrip": "Pianifica il mio viaggio",
    "nav.toggleMenu": "Apri/chiudi menu",

    // Buttons / CTA
    "cta.viewDepartures": "Vedi partenze 2026",
    "cta.chatWhatsApp": "Chatta su WhatsApp",
    "cta.browseTours": "Esplora i viaggi",
    "cta.talkToUs": "Parlaci",
    "cta.viewAll": "Vedi tutti i viaggi →",
    "cta.viewTrip": "Vedi il viaggio →",
    "cta.reserveWA": "Prenota su WhatsApp",
    "cta.requestEmail": "Richiedi dettagli via e-mail",
    "cta.sayHello": "Di' ciao",
    "cta.sendInquiry": "Invia richiesta",
    "cta.openWhatsApp": "Apri chat WhatsApp",
    "cta.emailUs": "Scrivici",
    "cta.messageFounderWA": "Scrivi a Shikha su WhatsApp",
    "cta.ourTours": "Vedi i nostri viaggi",

    "validation.email": "Inserisci un indirizzo email valido",
    "validation.phone": "Inserisci un numero di telefono valido, es. +39 320 123 4567",
    "validation.futureDate": "Scegli una data futura",

    "popup.chip": "Chiamata gratuita",
    "popup.title": "Prima di partire — parliamo dell'India.",
    "popup.subtitle":
      "Consulenza gratuita di 30 minuti su itinerari, sicurezza e budget. Senza alcun obbligo.",
    "popup.name": "Il tuo nome",
    "popup.email": "Indirizzo email",
    "popup.consent": "Inviami anche idee di viaggio e novità",
    "popup.cta": "Prenota la mia chiamata gratuita →",
    "popup.later": "Non ora",
    "popup.privacy":
      "Inviando accetti che ti contattiamo per fissare la chiamata. Non condividiamo mai i tuoi dati.",
    "popup.success": "Grazie! Ti contatteremo a breve per fissare un orario.",

    // Home hero
    "home.hero.season": "Piccoli gruppi · 2026",
    "home.hero.titleLine1": "Viaggia in India con chi la capisce davvero —",
    "home.hero.titleLine2": "e che capisce te.",
    "home.hero.title":
      "Viaggia in India con chi la capisce davvero — e che capisce te.",
    "home.hero.subtitle":
      "Viaggi guidati con cura per donne e viaggiatori curiosi che vogliono vivere l'India in profondità, in sicurezza e senza stress.",
    "home.hero.rating": "Valutazione media 4,9/5",
    "home.hero.countries": "Viaggiatori da oltre 20 paesi",
    "home.hero.support": "Supporto 24/7 durante il viaggio",

    // Home sections
    "home.featured.chip": "VIAGGI CHE AMERAi",
    "home.featured.title": "Viaggi artigianali, pieni di momenti autentici.",
    "home.featured.subtitle":
      "Tre viaggi speciali per l'estate 2026. Assicura il tuo posto con un deposito del 30% — saldo all'arrivo.",

    "home.weSeeYou.chip": "Ti capiamo ♡",
    "home.weSeeYou.titleLine1": "L'India può essere",
    "home.weSeeYou.titleEm": "incredibile.",
    "home.weSeeYou.titleLine2": "Ma può anche essere tanto.",
    "home.weSeeYou.point1": "Il rumore. Il ritmo. L'attenzione.",
    "home.weSeeYou.point2":
      "I momenti in cui non sei del tutto sicuro di cosa stia succedendo — o di chi fidarti.",
    "home.weSeeYou.point3": "Lo abbiamo vissuto.",
    "home.weSeeYou.point4": "Per questo abbiamo creato tutto ciò.",
    "home.weSeeYou.footerLine1":
      "Siamo al tuo fianco — non ti mostriamo solo i luoghi,",
    "home.weSeeYou.footerLine2": "ti aiutiamo a sentirti a casa in essi.",

    "home.promise.chip": "La nostra promessa ♡",
    "home.promise.titleLine1": "Non sei solo un'altra prenotazione.",
    "home.promise.titleLine2": "Sei",
    "home.promise.titleGuest": "nostro ospite.",
    "home.promise.body":
      "Ci occupiamo dei dettagli, della logistica e delle clausole — così puoi essere completamente presente per la bellezza, le persone e le storie che contano.",
    "home.promise.point1": "Nessun costo nascosto",
    "home.promise.point2": "Guide locali selezionate con cura",
    "home.promise.point3": "Viaggio responsabile e consapevole",
    "home.promise.cta": "Pianifica il tuo viaggio con noi →",

    "home.consult.chip": "Il nostro punto di forza · Chiamata gratuita",
    "home.consult.title": "Parla con noi prima di prenotare qualsiasi cosa.",
    "home.consult.subtitle":
      "La consulenza è il cuore di GoTrustelle. Prenota una chiamata gratuita di 30 minuti con la nostra fondatrice — consigli onesti su itinerari, sicurezza e budget, senza alcuna pressione.",
    "home.consult.point1": "30 minuti, completamente gratis",
    "home.consult.point2": "Nessun obbligo di prenotare con noi",
    "home.consult.point3": "Risposte vere da chi l'ha vissuto in prima persona",
    "home.consult.cta": "Prenota la tua chiamata gratuita →",
    "home.consult.statLabel": "Chiamata gratuita, senza pressioni",
    "home.consult.statNote": "Solitamente confermata entro 24 ore",

    "home.trust.chip": "Perché i viaggiatori scelgono noi",
    "home.trust.title": "L'India è vasta. Noi la rendiamo personale.",
    "home.trust.subtitle":
      "Siamo una giovane azienda fondata nel 2026 con una convinzione chiara: viaggiare in India deve sentirsi sicuro, caldo e senza fretta — che sia il tuo primo viaggio all'estero o il cinquantesimo.",

    "home.trust.smallGroups.title": "Massimo 7–10 persone per gruppo",
    "home.trust.smallGroups.body":
      "Abbastanza piccolo da sentirsi personale, abbastanza flessibile da adattarsi a te. Ogni partenza è limitata a 7–10 viaggiatori per garantirti sempre attenzione vera, non una folla.",
    "home.trust.localGuides.title": "Guide locali selezionate con cura",
    "home.trust.localGuides.body":
      "Le nostre guide sono prima di tutto narratori — storici, fotografi e cuochi che vivono nelle regioni che visitiamo. Niente discorsi a memoria, niente commissioni nascoste.",
    "home.trust.female.title": "Adatto a donne e viaggiatori solo",
    "home.trust.female.body":
      "Fondato da una donna, pensato per viaggiatrici e viaggiatori in solitaria. Alloggi verificati, supporto 24/7 e nessuna pressione sul ritmo.",
    "home.trust.transparent.title": "Completamente personalizzabile",
    "home.trust.transparent.body":
      "Nessun itinerario rigido. Ogni viaggio è modellato intorno al tuo ritmo, ai tuoi interessi e al tuo budget — dicci cosa conta per te e lo costruiamo da zero.",

    "home.testimonials.chip": "Cosa dicono i viaggiatori",
    "home.testimonials.title": "Storie dalla strada.",
    "home.testimonials.sampleNote":
      "* Le testimonianze sono esempi illustrativi per una nuova attività.",

    "home.faq.chip": "Utile sapere",
    "home.faq.title": "Domande frequenti",

    "home.finalCTA.title": "La tua estate indiana ti aspetta.",
    "home.finalCTA.subtitle":
      "Prenota un posto per una partenza di giugno o luglio 2026, oppure dicci le tue date e progetteremo un viaggio privato su misura per te.",

    // Journeys listing
    "tours.chip": "I nostri viaggi",
    "tours.title": "Viaggi in piccoli gruppi attraverso l'India.",
    "tours.subtitle":
      "Ogni viaggio è tutto compreso: trasferimenti, alloggi, guide, permessi e i pasti indicati. Unisciti a un gruppo esistente o chiedi un'organizzazione privata nelle tue date.",
    "tours.filter.all": "Tutti",
    "tours.filter.himalayan": "Himalaya",
    "tours.filter.cultural": "Culturale",
    "tours.customCTA.title": "Vuoi un viaggio pensato solo per te?",
    "tours.customCTA.subtitle":
      "Ogni viaggio che organizziamo può essere costruito da zero — le tue date, le tue dimensioni di gruppo, il tuo ritmo. Famiglie, coppie, viaggiatori solitari, ritiri aziendali. Tu scegli le regioni; noi curiamo ogni dettaglio dalla prima richiesta al trasferimento in aeroporto.",
    "tours.customCTA.wa": "Pianifica il mio viaggio su misura →",

    // Journey card
    "tourCard.from": "Da",
    "tourCard.perPerson": "/ persona",

    // Journey detail
    "tourDetail.duration": "Durata",
    "tourDetail.groupSize": "Dimensione del gruppo",
    "tourDetail.region": "Regione",
    "tourDetail.startsFrom": "Da",
    "tourDetail.overview": "Panoramica del viaggio",
    "tourDetail.route": "Itinerario",
    "tourDetail.highlights": "I punti salienti",
    "tourDetail.itinerary": "Programma giorno per giorno",
    "tourDetail.included": "Incluso",
    "tourDetail.notIncluded": "Non incluso",
    "tourDetail.startingFrom": "A partire da",
    "tourDetail.perPerson": "a persona",
    "tourDetail.deposit": "Assicura il tuo posto con un deposito del 30%",
    "tourDetail.departures": "Prossime partenze",
    "tourDetail.pricingOptions": "Opzioni di prezzo",
    "tourDetail.otherJourneys": "Altri viaggi che potrebbero piacerti",
    "tourDetail.difficultyLabel": "Difficoltà",
    "tourDetail.travelTips": "Da sapere — per i viaggiatori europei",
    "tourDetail.waMessage":
      "Ciao! Sono interessato/a al viaggio {tour}. Puoi condividere più dettagli?",

    // Journey difficulty labels
    "difficulty.Easy": "Facile",
    "difficulty.Moderate": "Moderato",
    "difficulty.Challenging": "Impegnativo",

    // About
    "about.chip": "La nostra storia",
    "about.title": "Un piccolo team ossessionato da ogni dettaglio.",
    "about.p1":
      "GoTrustelle è una giovane azienda di viaggi indiana, fondata nel 2026 da un team cresciuto viaggiando e ospitando persone in tutta l'India.",
    "about.p2":
      "Così abbiamo creato i viaggi che avremmo voluto far fare ai nostri amici dall'estero — gruppi piccoli, serate lunghe, pasti veri con persone vere e la libertà di andare piano.",
    "about.principles.chip": "In cosa crediamo",
    "about.principles.title": "I nostri principi di viaggio.",
    "about.team.chip": "Con chi viaggerai",
    "about.team.title": "Il team dietro il tuo viaggio.",
    "about.team.subtitle":
      "Fondata in India, con una partner in Germania — per avere una persona di fiducia su entrambi i lati del tuo viaggio.",
    "about.team.hoverHint": "Passa il cursore sulle schede per saperne di più",
    "about.heroAlt": "Paesaggio himalayano, nord dell'India",
    "about.bios.chip": "La storia lunga",
    "about.bios.title": "Conosci le persone dietro il viaggio.",
    "about.bios.subtitle":
      "Ogni messaggio, ogni itinerario, ogni risposta WhatsApp notturna viene da una di noi due.",
    "about.bios.readShikha": "Di più su Shikha",
    "about.bios.readMelissa": "Di più su Melissa",

    "about.story.backToAbout": "← Torna a Chi siamo",
    "about.story.readFullStory": "Leggi la storia completa →",
    "about.story.meetOther": "Conosci la nostra partner in Germania",
    "about.story.ctaTitle": "Pronto/a a viaggiare con noi?",
    "about.story.ctaSubtitle":
      "Sfoglia le partenze di gruppo 2026 o scrivici direttamente.",
    "about.story.sectionStory": "La mia storia",
    "about.story.sectionConnect": "Di' ciao",

    "about.founder.tag": "Fondatrice",
    "about.founder.country": "Con base in India",
    "about.founder.role": "Fondatrice · La tua host sul posto",
    "about.founder.quote":
      "\"Voglio che tu senta l'India — non solo che la veda.\"",
    "about.founder.chip1": "🎒 Viaggiatrice solitaria",
    "about.founder.chip2": "🏔️ Lavora dalla montagna",
    "about.founder.chip3": "🧭 Ha guidato viaggi nel nord dell'India",
    "about.founder.signature": "— Shikha",
    "about.founder.followIG": "Segui su Instagram",
    "about.founder.viewLinkedIn": "Collegati su LinkedIn",
    "about.founder.emailDirect": "Scrivimi direttamente",
    "about.founder.photoCaption": "Shikha · Fondatrice",

    "about.partner.tag": "Partner · Germania",
    "about.partner.country": "Con base in Germania",
    "about.partner.role": "Partner · Referente viaggi Europa",
    "about.partner.quote":
      "\"L'India non è migliore né peggiore — è semplicemente diversa.\"",
    "about.partner.signature": "— Melissa",

    "about.founder.story1":
      "Ciao — sono Shikha. GoTrustelle è il mio progetto del cuore, e onestamente, quello che volevo costruire da anni.",
    "about.founder.story2":
      "Di professione sono sviluppatrice software. Per passione, sono una backpacker.",
    "about.founder.story3":
      "Qualche anno fa ho iniziato a organizzare piccoli viaggi di gruppo per amici di amici che visitavano l'India.",
    "about.founder.story4":
      "Sono la persona che incontrerai davvero sul posto.",
    "about.founder.story5":
      "Quello che voglio dal tuo viaggio è semplice: che tu parta avendo davvero sentito l'India.",

    "about.partner.story1":
      "Sono Melissa, vivo in Germania e sono silenziosamente affascinata dall'India da quasi un decennio.",
    "about.partner.story2":
      "Ci torno ogni anno da allora.",
    "about.partner.story3":
      "Professionalmente, ho lavorato nel settore dei viaggi in Germania per anni.",
    "about.partner.story4":
      "Il mio ruolo in GoTrustelle è occuparmi di tutto sul lato europeo.",
    "about.partner.story5":
      "Se eri curioso/a dell'India ma non sapevi da dove cominciare — è esattamente questo il vuoto che volevamo riempire.",

    "about.stats.inhouseLabel": "Pianificato internamente",
    "about.stats.inhouseBody":
      "Nessun rivenditore esterno. Gestiamo ogni prenotazione da soli.",
    "about.stats.supportLabel": "Supporto durante il viaggio",
    "about.stats.supportBody":
      "Un essere umano vero su WhatsApp a qualsiasi ora, ogni giorno del tuo viaggio.",
    "about.stats.groupLabel": "Gruppi piccoli (max. 10)",
    "about.stats.groupBody": "Intimo, personale e completamente adattabile al tuo ritmo e ai tuoi interessi.",
    "about.stats.customLabel": "Personalizzabile",
    "about.stats.customBody": "Ogni itinerario è costruito intorno a te — date, ritmo, interessi. Nessun modello fisso.",

    // About principles list
    "about.v.smallGroups.title": "Gruppi piccoli. Sempre max. 7–10.",
    "about.v.smallGroups.body":
      "Limitiamo ogni partenza a 7–10 viaggiatori.",
    "about.v.local.title": "Assumiamo locale, paghiamo equo.",
    "about.v.local.body":
      "Le nostre guide, autisti e host vivono nelle regioni che visitiamo e sono pagati al di sopra delle tariffe locali.",
    "about.v.leaveBetter.title": "Lasciare meglio di come abbiamo trovato.",
    "about.v.leaveBetter.body":
      "Compensiamo le emissioni di carbonio in ogni viaggio, evitiamo le plastiche monouso e collaboriamo con collettivi artigianali guidati da donne.",
    "about.v.transparent.title": "Trasparenza, sempre.",
    "about.v.transparent.body":
      "Nessuna sosta nascosta in negozi, nessuna commissione. Quello che pubblichiamo è quello che consegniamo.",
    "about.v.safety.title": "La sicurezza prima di tutto.",
    "about.v.safety.body":
      "Hotel verificati, supporto 24/7 e un protocollo di sicurezza pensato per i viaggiatori solitari e le donne.",
    "about.v.slow.title": "La lentezza è una caratteristica.",
    "about.v.slow.body":
      "Inseriamo giorni cuscinetto in ogni itinerario. Non devi vedere tutto — devi vederlo bene.",

    // Contact
    "contact.chip": "Mettiti in contatto",
    "contact.title": "Pianifichiamo il tuo viaggio in India.",
    "contact.subtitle":
      "Scrivici su WhatsApp per una risposta rapida, o compila il modulo qui sotto e ti risponderemo entro poche ore (ora standard indiana).",
    "contact.form.name": "Il tuo nome",
    "contact.form.email": "E-mail",
    "contact.form.country": "Paese",
    "contact.form.countryPlaceholder": "es. Italia",
    "contact.form.whatsapp": "WhatsApp (facoltativo)",
    "contact.form.tour": "Quale/i viaggio/i ti interessa?",
    "contact.form.tourSelect": "Seleziona un viaggio",
    "contact.form.tourCustom": "Viaggio privato su misura",
    "contact.form.tourUnsure": "Non ancora deciso/a",
    "contact.form.dates": "Date di viaggio approssimative",
    "contact.form.datesPlaceholder": "es. 10–20 giugno 2026",
    "contact.form.startDate": "Data di inizio",
    "contact.form.endDate": "Data di fine",
    "contact.form.travelers": "Numero di viaggiatori",
    "contact.form.travelersPlaceholder": "es. 2 adulti",
    "contact.form.message": "Qualcos'altro che dovremmo sapere?",
    "contact.form.messagePlaceholder":
      "Esigenze alimentari, accessibilità, esperienze che vorresti vivere…",
    "contact.form.privacy":
      "Inviando accetti che ti contatteremo riguardo alla tua richiesta. Non condividiamo mai i tuoi dati.",
    "contact.sidebar.fastest.title": "Risposta più rapida",
    "contact.sidebar.fastest.body":
      "WhatsApp è la nostra casella principale — di solito rispondiamo entro un'ora durante l'orario lavorativo (IST).",
    "contact.sidebar.email.title": "O scrivici via e-mail",
    "contact.sidebar.hours.title": "Orari di ufficio",
    "contact.sidebar.hours.body":
      "Lunedì – Sabato · 9:00 – 21:00 IST\nDomenica · Solo assistenza di emergenza durante il viaggio",
    "contact.sidebar.phone": "Telefono",
    "contact.sidebar.basedIn": "Con sede a",

    // Consult
    "nav.consult": "Consulenza gratuita",
    "consult.chip": "Chiedici pure",
    "consult.title": "Stai pensando all'India? Parliamone.",
    "consult.subtitle":
      "Che tu finisca per viaggiare con noi o no, siamo felici di rispondere alle tue domande su una visita in India. I primi 30 minuti sono gratuiti, senza alcun impegno.",
    "consult.pricing.free.title": "Primi 30 minuti",
    "consult.pricing.free.price": "Gratuito",
    "consult.pricing.free.body":
      "Una chiamata rilassata per rispondere a tutto ciò che hai in mente — sicurezza, itinerari, budget, periodo migliore per partire o qualsiasi altra cosa su come viaggiare in India.",
    "consult.pricing.extra.body":
      "Se 30 minuti non bastano, prenota una sessione estesa qui sotto. Stessa chiamata, solo più tempo per approfondire.",
    "consult.pricing.perMinutes": "min di sessione",
    "consult.pricing.book": "Prenota e paga",
    "consult.pricing.comingSoon": "Link di pagamento in arrivo — scrivici su WhatsApp per prenotare",
    "consult.form.title": "Prenota la tua chiamata gratuita di 30 minuti",
    "consult.form.subtitle":
      "Raccontaci un po' del tuo viaggio e degli orari preferiti, e confermeremo un appuntamento su WhatsApp o via e-mail.",
    "consult.form.name": "Il tuo nome",
    "consult.form.email": "Email",
    "consult.form.whatsapp": "Numero WhatsApp",
    "consult.form.topic": "Di cosa vorresti parlare?",
    "consult.form.topicPlaceholder":
      "es.: L'India nord-orientale è sicura per le donne che viaggiano da sole a dicembre?",
    "consult.form.availabilityDate": "Data preferita per la chiamata",
    "consult.form.availabilityTime": "Orario e fuso orario preferiti",
    "consult.form.availabilityTimePlaceholder": "es.: Sere nei giorni feriali, CET",
    "consult.form.submit": "Richiedi la mia chiamata gratuita",
    "consult.form.privacy":
      "Inviando accetti che possiamo contattarti per fissare la chiamata. Non condividiamo mai i tuoi dati.",

    // Footer
    "footer.explore": "Esplora",
    "footer.exploreAll": "Tutti i viaggi",
    "footer.contact": "Contatti",
    "footer.waChat": "Chat WhatsApp",
    "footer.copyright": "Creato con cura in India.",
    "footer.subline": "Viaggi indipendenti in piccoli gruppi · Con sede a Nuova Delhi",

    // Months
    "month.June": "Giugno",
    "month.July": "Luglio",
    "month.August": "Agosto",
    "month.September": "Settembre",

    // Brand name breakdown
    "about.brand.chip": "Il nome",
    "about.brand.titlePrefix": "Perché",
    "about.brand.titleSuffix": "?",
    "about.brand.desc": "GoTrustelle si fonda su tre idee semplici — la libertà di esplorare, il conforto della fiducia e il calore di un viaggio guidato da una donna.",
    "brand.go.title": "Libertà di esplorare",
    "brand.go.body": "Movimento, avventura e il coraggio di scoprire l'India al di là delle guide turistiche.",
    "brand.trust.title": "Il conforto della fiducia",
    "brand.trust.body": "Ogni dettaglio pianificato, ogni partner verificato. Tu viaggi — noi pensiamo al resto.",
    "brand.elle.title": "Un viaggio guidato da una donna",
    "brand.elle.body": "Elle — «lei» in francese. Costruito da una donna, progettato con te in mente.",
    "home.teaser.eyebrow": "Il nome dietro ogni viaggio",

    // Founding story
    "about.origin.chip": "La nostra storia",
    "about.origin.titleBefore": "Come è nata GoTrustelle —",
    "about.origin.titleHighlight": "un caffè, un bambino e una vera conversazione",
    "about.origin.p1": "Tutto è iniziato con il sorriso di un bambino al Freedom Café di Rishikesh.",
    "about.origin.p2": "Siamo rimaste in contatto attraverso i continenti per anni, facendo piani che la vita continuava gentilmente a rimandare.",
    "about.origin.p3a": "L'ultima sera, disse qualcosa a cui ho pensato ogni giorno da allora:",
    "about.origin.quote": "Questo è ciò che ci manca quando viaggiamo in India. Non vogliamo solo vedere l'India — vogliamo sentire l'India.",
    "about.origin.p3b": "Quella frase è diventata tutto.",
    "about.origin.signature": "— Shikha, Fondatrice",
    "about.origin.gallery.label": "Momenti reali · non foto di stock",
    "about.origin.photo1": "Rishikesh — la prima volta che ci siamo incontrate",
    "about.origin.photo2": "Giocando con la figlia di Melissa — il momento in cui abbiamo parlato per la prima volta",
    "about.origin.photo3": "Melissa in un tradizionale sari indiano con la madre di Shikha",
    "about.origin.photo4": "Shikha e Melissa insieme in viaggio, 2026",
    "about.origin.photo5": "Melissa partecipa alla pooja della festa locale",
    "about.origin.photo6": "Spuntini da viaggio e conversazioni vere",
    "about.origin.video.caption": "Un momento vero del nostro tempo insieme in India",
    "about.origin.closing.title": "Vieni — non limitarti a esplorare l'India, sentila.",
    "about.origin.closing.body": "Ogni viaggio che creiamo è un invito ad andare oltre la superficie.",
    "about.origin.closing.cta1": "Vedi i nostri viaggi",
    "about.origin.closing.cta2": "Scrivi a Shikha",

    // Footer tagline
    "footer.tagline": "Esperienze di viaggio in India · da una donna, per te",

    // Misc
    "common.season": "2026",
    "common.loading": "Caricamento…",
    "lang.label": "Lingua",
  },

  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.tours": "Viagens",
    "nav.about": "Sobre nós",
    "nav.why": "Por que GoTrustelle",
    "nav.faq": "FAQ",
    "nav.contact": "Contato",
    "nav.planTrip": "Planear a minha viagem",
    "nav.toggleMenu": "Abrir/fechar menu",

    // Buttons / CTA
    "cta.viewDepartures": "Ver partidas 2026",
    "cta.chatWhatsApp": "Conversar no WhatsApp",
    "cta.browseTours": "Explorar viagens",
    "cta.talkToUs": "Falar connosco",
    "cta.viewAll": "Ver todas as viagens →",
    "cta.viewTrip": "Ver viagem →",
    "cta.reserveWA": "Reservar no WhatsApp",
    "cta.requestEmail": "Pedir detalhes por e-mail",
    "cta.sayHello": "Dizer olá",
    "cta.sendInquiry": "Enviar pedido",
    "cta.openWhatsApp": "Abrir chat WhatsApp",
    "cta.emailUs": "Escreva-nos",
    "cta.messageFounderWA": "Escrever à Shikha no WhatsApp",
    "cta.ourTours": "Ver as nossas viagens",

    "validation.email": "Introduza um endereço de email válido",
    "validation.phone": "Introduza um número de telefone válido, ex. +351 912 345 678",
    "validation.futureDate": "Escolha uma data futura",

    "popup.chip": "Chamada gratuita",
    "popup.title": "Antes de partir — vamos falar sobre a Índia.",
    "popup.subtitle":
      "Aconselhamento gratuito de 30 minutos sobre rotas, segurança e orçamento. Sem qualquer obrigação.",
    "popup.name": "O seu nome",
    "popup.email": "Endereço de email",
    "popup.consent": "Enviem-me também ideias de viagem e novidades",
    "popup.cta": "Marcar a minha chamada gratuita →",
    "popup.later": "Agora não",
    "popup.privacy":
      "Ao enviar, aceita que o contactemos para marcar a chamada. Nunca partilhamos os seus dados.",
    "popup.success": "Obrigado! Entraremos em contacto em breve para combinar um horário.",

    // Home hero
    "home.hero.season": "Grupos pequenos · 2026",
    "home.hero.titleLine1": "Viaje pela Índia com alguém que a entende —",
    "home.hero.titleLine2": "e que te entende a ti.",
    "home.hero.title":
      "Viaje pela Índia com alguém que a entende — e que te entende a ti.",
    "home.hero.subtitle":
      "Viagens guiadas com cuidado para mulheres e viajantes curiosos que querem viver a Índia de forma profunda, segura e sem stress.",
    "home.hero.rating": "Avaliação média de 4,9/5",
    "home.hero.countries": "Viajantes de mais de 20 países",
    "home.hero.support": "Apoio 24/7 durante a viagem",

    // Home sections
    "home.featured.chip": "VIAGENS QUE VAI ADORAR",
    "home.featured.title": "Viagens feitas à mão, cheias de momentos reais.",
    "home.featured.subtitle":
      "Três viagens especiais para o verão de 2026. Garanta o seu lugar com um depósito de 30% — saldo pago à chegada.",

    "home.weSeeYou.chip": "Nós entendemos você ♡",
    "home.weSeeYou.titleLine1": "A Índia pode ser",
    "home.weSeeYou.titleEm": "incrível.",
    "home.weSeeYou.titleLine2": "Mas também pode ser muito.",
    "home.weSeeYou.point1": "O ruído. O ritmo. A atenção.",
    "home.weSeeYou.point2":
      "Os momentos em que você não tem bem certeza do que está acontecendo — ou em quem confiar.",
    "home.weSeeYou.point3": "Já vivemos isso.",
    "home.weSeeYou.point4": "É exatamente por isso que criámos isto.",
    "home.weSeeYou.footerLine1":
      "Estamos ao seu lado — não apenas mostrando lugares,",
    "home.weSeeYou.footerLine2": "mas ajudando você a se sentir em casa neles.",

    "home.promise.chip": "Nossa promessa ♡",
    "home.promise.titleLine1": "Você não é apenas mais uma reserva.",
    "home.promise.titleLine2": "Você é",
    "home.promise.titleGuest": "nosso convidado.",
    "home.promise.body":
      "Cuidamos dos detalhes, da logística e da letra pequena — para que possa estar totalmente presente para a beleza, as pessoas e as histórias que importam.",
    "home.promise.point1": "Sem custos ocultos",
    "home.promise.point2": "Guias locais cuidadosamente escolhidos",
    "home.promise.point3": "Viagem responsável e consciente",
    "home.promise.cta": "Planeie a sua viagem com a gente →",

    "home.consult.chip": "Nosso diferencial · Chamada gratuita",
    "home.consult.title": "Fale connosco antes de reservar qualquer coisa.",
    "home.consult.subtitle":
      "A consulta está no coração da GoTrustelle. Marque uma chamada gratuita de 30 minutos com a nossa fundadora — conselhos honestos sobre rotas, segurança e orçamento, sem qualquer pressão.",
    "home.consult.point1": "30 minutos, totalmente gratuita",
    "home.consult.point2": "Sem obrigação de reservar connosco",
    "home.consult.point3": "Respostas reais de quem já viveu a experiência",
    "home.consult.cta": "Marque a sua chamada gratuita →",
    "home.consult.statLabel": "Chamada gratuita, sem pressão",
    "home.consult.statNote": "Normalmente confirmada em 24 horas",

    "home.trust.chip": "Por que os viajantes nos escolhem",
    "home.trust.title": "A Índia é vasta. Nós tornamo-la pessoal.",
    "home.trust.subtitle":
      "Somos uma empresa jovem fundada em 2026 com uma convicção clara: viajar pela Índia deve sentir-se seguro, caloroso e sem pressa — seja a sua primeira viagem ao estrangeiro ou a quinquagésima.",

    "home.trust.smallGroups.title": "Máximo 7–10 pessoas por grupo",
    "home.trust.smallGroups.body":
      "Pequeno o suficiente para ser íntimo, flexível o suficiente para se adaptar a si. Cada partida está limitada a 7–10 viajantes para que receba sempre atenção real — não multidões.",
    "home.trust.localGuides.title": "Guias locais escolhidos a dedo",
    "home.trust.localGuides.body":
      "Os nossos guias são antes de tudo contadores de histórias — historiadores, fotógrafos e cozinheiros que vivem nas regiões que visitamos. Sem discursos decorados, sem comissões ocultas.",
    "home.trust.female.title": "Adaptado a mulheres e viajantes a solo",
    "home.trust.female.body":
      "Fundado por uma mulher, pensado para viajantes a solo e mulheres. Alojamentos verificados, apoio 24/7 e sem pressão sobre o ritmo.",
    "home.trust.transparent.title": "Totalmente personalizável",
    "home.trust.transparent.body":
      "Sem itinerários fixos. Cada viagem é moldada em torno do seu ritmo, interesses e orçamento — diga-nos o que importa e construímo-la do zero.",

    "home.testimonials.chip": "O que dizem os viajantes",
    "home.testimonials.title": "Histórias da estrada.",
    "home.testimonials.sampleNote":
      "* Os testemunhos são exemplos ilustrativos para uma nova empresa.",

    "home.faq.chip": "Bom saber",
    "home.faq.title": "Perguntas frequentes",

    "home.finalCTA.title": "O seu verão indiano está à espera.",
    "home.finalCTA.subtitle":
      "Reserve um lugar numa partida de junho ou julho de 2026, ou diga-nos as suas datas e desenhamos uma viagem privada à sua medida.",

    // Journeys listing
    "tours.chip": "As nossas viagens",
    "tours.title": "Viagens em grupos pequenos por toda a Índia.",
    "tours.subtitle":
      "Cada viagem inclui tudo: transfers, alojamento, guias, licenças e as refeições indicadas. Junte-se a um grupo existente ou peça-nos para o organizar em privado nas suas datas.",
    "tours.filter.all": "Todas",
    "tours.filter.himalayan": "Himalaia",
    "tours.filter.cultural": "Cultural",
    "tours.customCTA.title": "Quer uma viagem feita só para si?",
    "tours.customCTA.subtitle":
      "Cada viagem que realizamos pode também ser construída de raiz — as suas datas, o tamanho do seu grupo, o seu ritmo. Famílias, casais, viajantes a solo, retiros corporativos. Escolhe as regiões; nós cuidamos de cada detalhe, desde a primeira consulta até ao transfer para o aeroporto.",
    "tours.customCTA.wa": "Planear a minha viagem personalizada →",

    // Journey card
    "tourCard.from": "A partir de",
    "tourCard.perPerson": "/ pessoa",

    // Journey detail
    "tourDetail.duration": "Duração",
    "tourDetail.groupSize": "Tamanho do grupo",
    "tourDetail.region": "Região",
    "tourDetail.startsFrom": "A partir de",
    "tourDetail.overview": "Resumo da viagem",
    "tourDetail.route": "Itinerário",
    "tourDetail.highlights": "Destaques da viagem",
    "tourDetail.itinerary": "Programa dia a dia",
    "tourDetail.included": "Incluído",
    "tourDetail.notIncluded": "Não incluído",
    "tourDetail.startingFrom": "A partir de",
    "tourDetail.perPerson": "por pessoa",
    "tourDetail.deposit": "Garanta o seu lugar com 30% de depósito",
    "tourDetail.departures": "Próximas partidas",
    "tourDetail.pricingOptions": "Opções de preço",
    "tourDetail.otherJourneys": "Outras viagens que pode adorar",
    "tourDetail.difficultyLabel": "Dificuldade",
    "tourDetail.travelTips": "Bom saber — para viajantes europeus",
    "tourDetail.waMessage":
      "Olá! Tenho interesse na viagem {tour}. Pode partilhar mais detalhes?",

    // Journey difficulty labels
    "difficulty.Easy": "Fácil",
    "difficulty.Moderate": "Moderado",
    "difficulty.Challenging": "Exigente",

    // About
    "about.chip": "A nossa história",
    "about.title": "Uma equipa pequena obcecada com cada detalhe.",
    "about.p1":
      "A GoTrustelle é uma jovem empresa de viagens indiana, fundada em 2026 por uma equipa que cresceu a viajar e a receber hóspedes por toda a Índia.",
    "about.p2":
      "Por isso criámos as viagens que queríamos que os nossos amigos do estrangeiro fizessem — grupos pequenos, longas noites, refeições reais com pessoas reais e a liberdade de ir devagar.",
    "about.principles.chip": "No que acreditamos",
    "about.principles.title": "Os nossos princípios de viagem.",
    "about.team.chip": "Com quem vai viajar",
    "about.team.title": "A equipa por trás da sua viagem.",
    "about.team.subtitle":
      "Fundada na Índia, com uma parceira na Alemanha — para ter uma pessoa de confiança dos dois lados da sua viagem.",
    "about.team.hoverHint": "Passe o cursor sobre os cartões para saber mais",
    "about.heroAlt": "Paisagem himalaia, norte da Índia",
    "about.bios.chip": "A história longa",
    "about.bios.title": "Conheça as pessoas por trás da viagem.",
    "about.bios.subtitle":
      "Cada mensagem, cada itinerário, cada resposta de WhatsApp a altas horas vem de uma de nós duas.",
    "about.bios.readShikha": "Mais sobre Shikha",
    "about.bios.readMelissa": "Mais sobre Melissa",

    "about.story.backToAbout": "← Voltar a Sobre nós",
    "about.story.readFullStory": "Ler a história completa →",
    "about.story.meetOther": "Conhecer a nossa parceira na Alemanha",
    "about.story.ctaTitle": "Pronto/a para viajar connosco?",
    "about.story.ctaSubtitle":
      "Veja as partidas em grupo de 2026 ou escreva-nos diretamente.",
    "about.story.sectionStory": "A minha história",
    "about.story.sectionConnect": "Dizer olá",

    "about.founder.tag": "Fundadora",
    "about.founder.country": "Com base na Índia",
    "about.founder.role": "Fundadora · A sua anfitriã no local",
    "about.founder.quote":
      "\"Quero que sinta a Índia — não apenas que a veja.\"",
    "about.founder.chip1": "🎒 Mochileira a solo",
    "about.founder.chip2": "🏔️ Trabalha a partir das montanhas",
    "about.founder.chip3": "🧭 Guiou viagens pelo norte da Índia",
    "about.founder.signature": "— Shikha",
    "about.founder.followIG": "Seguir no Instagram",
    "about.founder.viewLinkedIn": "Conectar no LinkedIn",
    "about.founder.emailDirect": "Escrever-me diretamente",
    "about.founder.photoCaption": "Shikha · Fundadora",

    "about.partner.tag": "Parceira · Alemanha",
    "about.partner.country": "Com base na Alemanha",
    "about.partner.role": "Parceira · Ligação de viagens na Europa",
    "about.partner.quote":
      "\"A Índia não é melhor nem pior — é simplesmente diferente.\"",
    "about.partner.signature": "— Melissa",

    "about.founder.story1":
      "Olá — sou a Shikha. A GoTrustelle é o meu projeto de coração, e honestamente, aquele que quis construir há anos.",
    "about.founder.story2":
      "De profissão sou programadora. Por paixão, sou mochileira.",
    "about.founder.story3":
      "Há alguns anos comecei a organizar pequenas viagens em grupo para amigos de amigos que visitavam a Índia.",
    "about.founder.story4":
      "Sou a pessoa que vai realmente conhecer no local.",
    "about.founder.story5":
      "O que quero da sua viagem é simples: que parta tendo realmente sentido a Índia.",

    "about.partner.story1":
      "Sou a Melissa, vivo na Alemanha e estou discretamente fascinada com a Índia há quase uma década.",
    "about.partner.story2":
      "Tenho voltado todos os anos desde então.",
    "about.partner.story3":
      "Profissionalmente, trabalhei no setor das viagens na Alemanha durante anos.",
    "about.partner.story4":
      "O meu papel na GoTrustelle é tratar de tudo do lado europeu.",
    "about.partner.story5":
      "Se tinha curiosidade sobre a Índia mas não sabia por onde começar — é exatamente esse espaço que queríamos preencher.",

    "about.stats.inhouseLabel": "Planeado internamente",
    "about.stats.inhouseBody":
      "Sem revendedores externos. Gerimos cada reserva nós próprios.",
    "about.stats.supportLabel": "Apoio durante a viagem",
    "about.stats.supportBody":
      "Um ser humano real no WhatsApp a qualquer hora, todos os dias da sua viagem.",
    "about.stats.groupLabel": "Grupos pequenos (máx. 10)",
    "about.stats.groupBody": "Íntimo, pessoal e totalmente adaptável ao seu ritmo e interesses.",
    "about.stats.customLabel": "Personalizável",
    "about.stats.customBody": "Cada itinerário é construído em torno de si — datas, ritmo, interesses. Sem modelos fixos.",

    // About principles list
    "about.v.smallGroups.title": "Grupos pequenos. Sempre 7–10 máx.",
    "about.v.smallGroups.body":
      "Limitamos cada partida a 7–10 viajantes.",
    "about.v.local.title": "Contratar local, pagar justo.",
    "about.v.local.body":
      "Os nossos guias, motoristas e anfitriões vivem nas regiões que visitamos e são pagos acima das tarifas locais.",
    "about.v.leaveBetter.title": "Deixar melhor do que encontrámos.",
    "about.v.leaveBetter.body":
      "Compensamos carbono em cada viagem, evitamos plásticos de uso único e colaboramos com coletivos artesanais liderados por mulheres.",
    "about.v.transparent.title": "Transparência, sempre.",
    "about.v.transparent.body":
      "Sem paragens ocultas em lojas, sem comissões. O que publicamos é o que entregamos.",
    "about.v.safety.title": "A segurança em primeiro lugar.",
    "about.v.safety.body":
      "Hotéis verificados, apoio 24/7 e um protocolo de segurança adaptado para viajantes a solo e mulheres.",
    "about.v.slow.title": "A lentidão é uma vantagem.",
    "about.v.slow.body":
      "Incluímos dias de folga em cada itinerário. Não precisa de ver tudo — precisa de ver bem.",

    // Contact
    "contact.chip": "Entre em contacto",
    "contact.title": "Vamos planear a sua viagem à Índia.",
    "contact.subtitle":
      "Escreva-nos no WhatsApp para uma resposta rápida, ou preencha o formulário abaixo e respondemos em poucas horas (hora padrão da Índia).",
    "contact.form.name": "O seu nome",
    "contact.form.email": "E-mail",
    "contact.form.country": "País",
    "contact.form.countryPlaceholder": "ex. Portugal",
    "contact.form.whatsapp": "WhatsApp (opcional)",
    "contact.form.tour": "Qual/quais viagem/ns lhe interessa(m)?",
    "contact.form.tourSelect": "Selecionar uma viagem",
    "contact.form.tourCustom": "Viagem privada personalizada",
    "contact.form.tourUnsure": "Ainda não sei",
    "contact.form.dates": "Datas de viagem aproximadas",
    "contact.form.datesPlaceholder": "ex. 10–20 junho 2026",
    "contact.form.startDate": "Data de início",
    "contact.form.endDate": "Data de fim",
    "contact.form.travelers": "Número de viajantes",
    "contact.form.travelersPlaceholder": "ex. 2 adultos",
    "contact.form.message": "Mais alguma coisa que devemos saber?",
    "contact.form.messagePlaceholder":
      "Necessidades alimentares, acessibilidade, experiências que adoraria ter…",
    "contact.form.privacy":
      "Ao enviar, aceita que o contactemos sobre a sua consulta. Nunca partilhamos os seus dados.",
    "contact.sidebar.fastest.title": "Resposta mais rápida",
    "contact.sidebar.fastest.body":
      "O WhatsApp é a nossa caixa de entrada principal — normalmente respondemos em uma hora durante o horário de trabalho (IST).",
    "contact.sidebar.email.title": "Ou escreva-nos por e-mail",
    "contact.sidebar.hours.title": "Horário de atendimento",
    "contact.sidebar.hours.body":
      "Segunda – Sábado · 9:00 – 21:00 IST\nDomingo · Apenas apoio de emergência durante a viagem",
    "contact.sidebar.phone": "Telefone",
    "contact.sidebar.basedIn": "Sediado em",

    // Consult
    "nav.consult": "Consulta gratuita",
    "consult.chip": "Pergunte-nos qualquer coisa",
    "consult.title": "Está pensando na Índia? Vamos conversar.",
    "consult.subtitle":
      "Quer acabe viajando com a gente ou não, temos prazer em responder às suas perguntas sobre visitar a Índia. Os primeiros 30 minutos são gratuitos — sem qualquer compromisso.",
    "consult.pricing.free.title": "Primeiros 30 minutos",
    "consult.pricing.free.price": "Gratuito",
    "consult.pricing.free.body":
      "Uma conversa tranquila para responder ao que estiver em sua mente — segurança, rotas, orçamentos, melhor época para ir, ou qualquer outra coisa sobre viajar na Índia.",
    "consult.pricing.extra.body":
      "Se 30 minutos não forem suficientes, reserve uma sessão estendida abaixo. A mesma chamada, só com mais tempo para se aprofundar.",
    "consult.pricing.perMinutes": "min de sessão",
    "consult.pricing.book": "Reservar e pagar",
    "consult.pricing.comingSoon": "Link de pagamento em breve — fale conosco no WhatsApp para reservar",
    "consult.form.title": "Reserve sua chamada gratuita de 30 minutos",
    "consult.form.subtitle":
      "Conte-nos um pouco sobre sua viagem e horários preferidos, e confirmaremos um horário por WhatsApp ou e-mail.",
    "consult.form.name": "Seu nome",
    "consult.form.email": "E-mail",
    "consult.form.whatsapp": "Número de WhatsApp",
    "consult.form.topic": "Sobre o que você gostaria de falar?",
    "consult.form.topicPlaceholder":
      "ex.: O nordeste da Índia é seguro para mulheres viajando sozinhas em dezembro?",
    "consult.form.availabilityDate": "Data preferida para a chamada",
    "consult.form.availabilityTime": "Horário e fuso horário preferidos",
    "consult.form.availabilityTimePlaceholder": "ex.: Noites de dias de semana, CET",
    "consult.form.submit": "Solicitar minha chamada gratuita",
    "consult.form.privacy":
      "Ao enviar, você concorda que podemos contatá-lo para agendar a chamada. Nunca compartilhamos seus dados.",

    // Footer
    "footer.explore": "Explorar",
    "footer.exploreAll": "Todas as viagens",
    "footer.contact": "Contacto",
    "footer.waChat": "Chat WhatsApp",
    "footer.copyright": "Feito com cuidado na Índia.",
    "footer.subline": "Viagens independentes em grupos pequenos · Sediado em Nova Deli",

    // Months
    "month.June": "Junho",
    "month.July": "Julho",
    "month.August": "Agosto",
    "month.September": "Setembro",

    // Brand name breakdown
    "about.brand.chip": "O nome",
    "about.brand.titlePrefix": "Porquê",
    "about.brand.titleSuffix": "?",
    "about.brand.desc": "A GoTrustelle assenta em três ideias simples — a liberdade de explorar, o conforto da confiança e o calor de uma viagem liderada por uma mulher.",
    "brand.go.title": "Liberdade de explorar",
    "brand.go.body": "Movimento, aventura e a coragem de descobrir a Índia para lá dos guias turísticos.",
    "brand.trust.title": "O conforto da confiança",
    "brand.trust.body": "Cada detalhe planeado, cada parceiro verificado. Você viaja — nós tratamos do resto.",
    "brand.elle.title": "Uma viagem liderada por uma mulher",
    "brand.elle.body": "Elle — «ela» em francês. Construído por uma mulher, pensado para si.",
    "home.teaser.eyebrow": "O nome por trás de cada viagem",

    // Founding story
    "about.origin.chip": "A nossa história",
    "about.origin.titleBefore": "Como a GoTrustelle começou —",
    "about.origin.titleHighlight": "um café, um bebé e uma conversa real",
    "about.origin.p1": "Começou com o sorriso de um bebé no Freedom Café em Rishikesh.",
    "about.origin.p2": "Mantivemo-nos em contacto ao longo de continentes durante anos, fazendo planos que a vida foi gentilmente adiando.",
    "about.origin.p3a": "Na última noite, disse algo em que tenho pensado todos os dias desde então:",
    "about.origin.quote": "É isso que nos falta quando viajamos para a Índia. Não queremos apenas ver a Índia — queremos sentir a Índia.",
    "about.origin.p3b": "Essa frase tornou-se tudo.",
    "about.origin.signature": "— Shikha, Fundadora",
    "about.origin.gallery.label": "Momentos reais · não fotos de stock",
    "about.origin.photo1": "Rishikesh — a primeira vez que nos conhecemos",
    "about.origin.photo2": "A brincar com a filha da Melissa — o momento em que falámos pela primeira vez",
    "about.origin.photo3": "Melissa com um sari indiano tradicional com a mãe de Shikha",
    "about.origin.photo4": "Shikha e Melissa na estrada juntas, 2026",
    "about.origin.photo5": "Melissa participa na pooja da festa local",
    "about.origin.photo6": "Petiscos de viagem e conversas reais",
    "about.origin.video.caption": "Um momento real do nosso tempo juntas na Índia",
    "about.origin.closing.title": "Venha — não explore apenas a Índia, sinta-a.",
    "about.origin.closing.body": "Cada viagem que criamos é um convite a ir além da superfície.",
    "about.origin.closing.cta1": "Ver as nossas viagens",
    "about.origin.closing.cta2": "Escrever à Shikha",

    // Footer tagline
    "footer.tagline": "Experiências de viagem na Índia · por uma mulher, para si",

    // Misc
    "common.season": "2026",
    "common.loading": "A carregar…",
    "lang.label": "Idioma",
  },

  nl: {
    // Navigation
    "nav.home": "Home",
    "nav.tours": "Reizen",
    "nav.about": "Over ons",
    "nav.why": "Waarom GoTrustelle",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.planTrip": "Mijn reis plannen",
    "nav.toggleMenu": "Menu openen/sluiten",

    // Buttons / CTA
    "cta.viewDepartures": "Bekijk vertrekdata 2026",
    "cta.chatWhatsApp": "Chatten op WhatsApp",
    "cta.browseTours": "Reizen ontdekken",
    "cta.talkToUs": "Praat met ons",
    "cta.viewAll": "Alle reizen bekijken →",
    "cta.viewTrip": "Reis bekijken →",
    "cta.reserveWA": "Reserveren via WhatsApp",
    "cta.requestEmail": "Details aanvragen per e-mail",
    "cta.sayHello": "Zeg hallo",
    "cta.sendInquiry": "Aanvraag versturen",
    "cta.openWhatsApp": "WhatsApp-chat openen",
    "cta.emailUs": "Stuur ons een e-mail",
    "cta.messageFounderWA": "Shikha een bericht sturen via WhatsApp",
    "cta.ourTours": "Onze reizen bekijken",

    "validation.email": "Voer een geldig e-mailadres in",
    "validation.phone": "Voer een geldig telefoonnummer in, bijv. +31 6 12345678",
    "validation.futureDate": "Kies een datum in de toekomst",

    "popup.chip": "Gratis gesprek",
    "popup.title": "Voordat u vertrekt — laten we over India praten.",
    "popup.subtitle":
      "Gratis advies van 30 minuten over routes, veiligheid en budget. Zonder enige verplichting.",
    "popup.name": "Uw naam",
    "popup.email": "E-mailadres",
    "popup.consent": "Stuur mij ook reisideeën & updates",
    "popup.cta": "Boek mijn gratis gesprek →",
    "popup.later": "Niet nu",
    "popup.privacy":
      "Door te verzenden gaat u ermee akkoord dat wij contact met u opnemen om het gesprek in te plannen. Wij delen uw gegevens nooit.",
    "popup.success": "Bedankt! We nemen binnenkort contact op om een tijdstip af te spreken.",

    // Home hero
    "home.hero.season": "Kleine groepsreizen · 2026",
    "home.hero.titleLine1": "Reis door India met iemand die het begrijpt —",
    "home.hero.titleLine2": "en die jou begrijpt.",
    "home.hero.title":
      "Reis door India met iemand die het begrijpt — en die jou begrijpt.",
    "home.hero.subtitle":
      "Zorgvuldig begeleide reizen voor vrouwen en nieuwsgierige reizigers die India diepgaand, veilig en zonder overweldiging willen beleven.",
    "home.hero.rating": "Gemiddelde reizigersrating 4,9/5",
    "home.hero.countries": "Reizigers uit meer dan 20 landen",
    "home.hero.support": "24/7 ondersteuning tijdens de reis",

    // Home sections
    "home.featured.chip": "REIZEN DIE JE ZAL LIEFHEBBEN",
    "home.featured.title": "Met zorg gemaakte reizen, vol echte momenten.",
    "home.featured.subtitle":
      "Drie handtekeningreizen voor zomer 2026. Reserveer je plek met 30% aanbetaling — restbedrag verschuldigd bij aankomst.",

    "home.weSeeYou.chip": "Wij begrijpen je ♡",
    "home.weSeeYou.titleLine1": "India kan",
    "home.weSeeYou.titleEm": "ongelooflijk zijn.",
    "home.weSeeYou.titleLine2": "Maar het kan ook veel zijn.",
    "home.weSeeYou.point1": "Het lawaai. Het tempo. De aandacht.",
    "home.weSeeYou.point2":
      "De momenten waarop je niet helemaal zeker weet wat er gebeurt — of wie je kunt vertrouwen.",
    "home.weSeeYou.point3": "Wij hebben het gezien.",
    "home.weSeeYou.point4": "Daarom hebben we dit precies zo gemaakt.",
    "home.weSeeYou.footerLine1":
      "Wij staan naast je — we laten je niet alleen plekken zien,",
    "home.weSeeYou.footerLine2": "we helpen je je er thuis te voelen.",

    "home.promise.chip": "Onze belofte ♡",
    "home.promise.titleLine1": "Je bent niet zomaar nog een boeking.",
    "home.promise.titleLine2": "Je bent",
    "home.promise.titleGuest": "onze gast.",
    "home.promise.body":
      "Wij regelen de details, de logistiek en de kleine lettertjes — zodat jij volledig aanwezig kunt zijn voor de schoonheid, de mensen en de verhalen die ertoe doen.",
    "home.promise.point1": "Geen verborgen kosten",
    "home.promise.point2": "Zorgvuldig gekozen lokale gidsen",
    "home.promise.point3": "Verantwoord en bewust reizen",
    "home.promise.cta": "Plan je reis met ons →",

    "home.consult.chip": "Ons kenmerk · Gratis gesprek",
    "home.consult.title": "Praat met ons voordat u iets boekt.",
    "home.consult.subtitle":
      "Persoonlijk advies staat centraal bij GoTrustelle. Boek een gratis gesprek van 30 minuten met onze oprichtster — eerlijk advies over routes, veiligheid en budget, zonder enige druk.",
    "home.consult.point1": "30 minuten, volledig gratis",
    "home.consult.point2": "Geen verplichting om bij ons te boeken",
    "home.consult.point3": "Eerlijke antwoorden van iemand die het zelf heeft meegemaakt",
    "home.consult.cta": "Boek uw gratis gesprek →",
    "home.consult.statLabel": "Gratis, drukvrij gesprek",
    "home.consult.statNote": "Meestal binnen 24 uur bevestigd",

    "home.trust.chip": "Waarom reizigers voor ons kiezen",
    "home.trust.title": "India is enorm. Wij maken het persoonlijk.",
    "home.trust.subtitle":
      "We zijn een jong bedrijf opgericht in 2026 met één duidelijke overtuiging: reizen in India moet veilig, warm en zonder haast aanvoelen — of het nu je eerste buitenlandse reis is of je vijftigste.",

    "home.trust.smallGroups.title": "Maximaal 7–10 personen per groep",
    "home.trust.smallGroups.body":
      "Klein genoeg om persoonlijk te voelen, flexibel genoeg om zich aan jou aan te passen. Elke vertrekdatum is beperkt tot 7–10 reizigers zodat je altijd echte aandacht krijgt — geen menigte.",
    "home.trust.localGuides.title": "Handpicked lokale gidsen",
    "home.trust.localGuides.body":
      "Onze gidsen zijn in de eerste plaats verhalenvertellers — historici, fotografen en koks die in de regio's leven die we bezoeken. Geen ingestudeerde praatjes, geen verborgen commissies.",
    "home.trust.female.title": "Vriendelijk voor vrouwen en soloreizenden",
    "home.trust.female.body":
      "Opgericht door een vrouw, gebouwd met solo- en vrouwelijke reizigers in gedachten. Geverifieerde verblijven, 24/7 ondersteuning en nul druk op tempo.",
    "home.trust.transparent.title": "Volledig aanpasbaar",
    "home.trust.transparent.body":
      "Geen vaste reisschema's. Elke reis is gevormd rond jouw tempo, interesses en budget — vertel ons wat belangrijk is en we bouwen het from scratch.",

    "home.testimonials.chip": "Wat reizigers zeggen",
    "home.testimonials.title": "Verhalen van onderweg.",
    "home.testimonials.sampleNote":
      "* Getuigenissen zijn illustratieve voorbeelden voor een nieuw bedrijf.",

    "home.faq.chip": "Goed om te weten",
    "home.faq.title": "Veelgestelde vragen",

    "home.finalCTA.title": "Je Indiase zomer wacht.",
    "home.finalCTA.subtitle":
      "Reserveer een plek op een vertrek in juni of juli 2026, of geef ons je data en we ontwerpen een privéreis speciaal voor jou.",

    // Journeys listing
    "tours.chip": "Onze reizen",
    "tours.title": "Kleine groepsreizen door India.",
    "tours.subtitle":
      "Elke reis hieronder is all-inclusive: transfers, verblijven, gidsen, vergunningen en de vermelde maaltijden. Sluit je aan bij een bestaande groep of vraag ons om een privé-uitvoering op jouw data.",
    "tours.filter.all": "Alle",
    "tours.filter.himalayan": "Himalaya",
    "tours.filter.cultural": "Cultureel",
    "tours.customCTA.title": "Wil je een reis speciaal voor jou?",
    "tours.customCTA.subtitle":
      "Elke reis die we uitvoeren kan ook from scratch worden gebouwd — jouw data, jouw groepsgrootte, jouw tempo. Gezinnen, koppels, soloreizigers, bedrijfsretreats. Jij kiest de regio's; wij regelen elk detail van de eerste aanvraag tot de drop-off op het vliegveld.",
    "tours.customCTA.wa": "Mijn maatwerkreis plannen →",

    // Journey card
    "tourCard.from": "Vanaf",
    "tourCard.perPerson": "/ persoon",

    // Journey detail
    "tourDetail.duration": "Duur",
    "tourDetail.groupSize": "Groepsgrootte",
    "tourDetail.region": "Regio",
    "tourDetail.startsFrom": "Vanaf",
    "tourDetail.overview": "Reisoverzicht",
    "tourDetail.route": "Route",
    "tourDetail.highlights": "Hoogtepunten",
    "tourDetail.itinerary": "Dag-voor-dag programma",
    "tourDetail.included": "Inbegrepen",
    "tourDetail.notIncluded": "Niet inbegrepen",
    "tourDetail.startingFrom": "Vanaf",
    "tourDetail.perPerson": "per persoon",
    "tourDetail.deposit": "Reserveer je plek met 30% aanbetaling",
    "tourDetail.departures": "Komende vertrekdata",
    "tourDetail.pricingOptions": "Prijsopties",
    "tourDetail.otherJourneys": "Andere reizen die je misschien leuk vindt",
    "tourDetail.difficultyLabel": "Moeilijkheidsgraad",
    "tourDetail.travelTips": "Goed om te weten — voor Europese reizigers",
    "tourDetail.waMessage":
      "Hoi! Ik ben geïnteresseerd in de {tour} reis. Kun je meer details delen?",

    // Journey difficulty labels
    "difficulty.Easy": "Gemakkelijk",
    "difficulty.Moderate": "Matig",
    "difficulty.Challenging": "Uitdagend",

    // About
    "about.chip": "Ons verhaal",
    "about.title": "Een klein team geobsedeerd door elk detail.",
    "about.p1":
      "GoTrustelle is een jong Indiaas reisbureau, opgericht in 2026 door een team dat opgroeide met reizen en het ontvangen van gasten door heel India.",
    "about.p2":
      "Dus bouwden we de reizen die we zouden willen dat onze vrienden uit het buitenland zouden maken — kleine groepen, lange avonden, echte maaltijden met echte mensen en de vrijheid om te vertragen.",
    "about.principles.chip": "Waar we in geloven",
    "about.principles.title": "Onze reisprincipes.",
    "about.team.chip": "Met wie je reist",
    "about.team.title": "Het team achter jouw reis.",
    "about.team.subtitle":
      "Opgericht in India, ondersteund door een partner in Duitsland — zodat je een vertrouwd persoon hebt aan beide kanten van je reis.",
    "about.team.hoverHint": "Hover over de kaarten voor meer informatie",
    "about.heroAlt": "Himalaya-landschap, Noord-India",
    "about.bios.chip": "Het langere verhaal",
    "about.bios.title": "Ontmoet de mensen achter de reis.",
    "about.bios.subtitle":
      "Elk bericht, elk reisschema, elke late WhatsApp-reactie komt van een van ons tweeën.",
    "about.bios.readShikha": "Meer over Shikha",
    "about.bios.readMelissa": "Meer over Melissa",

    "about.story.backToAbout": "← Terug naar Over ons",
    "about.story.readFullStory": "Volledig verhaal lezen →",
    "about.story.meetOther": "Ontmoet onze partner in Duitsland",
    "about.story.ctaTitle": "Klaar om met ons te reizen?",
    "about.story.ctaSubtitle":
      "Bekijk de groepsvertrekken voor 2026 of schrijf ons direct.",
    "about.story.sectionStory": "Mijn verhaal",
    "about.story.sectionConnect": "Zeg hallo",

    "about.founder.tag": "Oprichtster",
    "about.founder.country": "Gevestigd in India",
    "about.founder.role": "Oprichtster · Jouw gastheer ter plaatse",
    "about.founder.quote":
      "\"Ik wil dat je India voelt — niet alleen ziet.\"",
    "about.founder.chip1": "🎒 Solo backpacker",
    "about.founder.chip2": "🏔️ Werkt vanuit de bergen",
    "about.founder.chip3": "🧭 Leidde reizen door Noord-India",
    "about.founder.signature": "— Shikha",
    "about.founder.followIG": "Volgen op Instagram",
    "about.founder.viewLinkedIn": "Verbinden op LinkedIn",
    "about.founder.emailDirect": "Mij direct e-mailen",
    "about.founder.photoCaption": "Shikha · Oprichtster",

    "about.partner.tag": "Partner · Duitsland",
    "about.partner.country": "Gevestigd in Duitsland",
    "about.partner.role": "Partner · Europees reiscontactpersoon",
    "about.partner.quote":
      "\"India is niet beter of slechter — het is gewoon anders.\"",
    "about.partner.signature": "— Melissa",

    "about.founder.story1":
      "Hoi — ik ben Shikha. GoTrustelle is mijn kindje, en eerlijk gezegd het project dat ik al jaren wilde bouwen.",
    "about.founder.story2":
      "Van beroep ben ik softwareontwikkelaar. Uit passie ben ik backpacker.",
    "about.founder.story3":
      "Een paar jaar geleden begon ik kleine groepsreizen te organiseren voor vrienden van vrienden die India bezochten.",
    "about.founder.story4":
      "Ik ben de persoon die je echt ter plaatse ontmoet.",
    "about.founder.story5":
      "Wat ik voor jouw reis wil, is eenvoudig: dat je vertrekt met het gevoel India echt te hebben gevoeld.",

    "about.partner.story1":
      "Ik ben Melissa, woonachtig in Duitsland, en ik ben al bijna een decennium stil geobsedeerd door India.",
    "about.partner.story2":
      "Ik ga er elk jaar naartoe sindsdien.",
    "about.partner.story3":
      "Professioneel heb ik jarenlang in de reisbranche in Duitsland gewerkt.",
    "about.partner.story4":
      "Mijn rol bij GoTrustelle is alles aan de Europese kant te regelen.",
    "about.partner.story5":
      "Als je nieuwsgierig was naar India maar niet wist waar te beginnen — dat is precies de kloof die we wilden vullen.",

    "about.stats.inhouseLabel": "In eigen beheer gepland",
    "about.stats.inhouseBody":
      "Geen derde partijen. We regelen elke boeking zelf.",
    "about.stats.supportLabel": "Ondersteuning tijdens de reis",
    "about.stats.supportBody":
      "Een echt mens op WhatsApp, elk uur, elke dag van je reis.",
    "about.stats.groupLabel": "Kleine groepen (max. 10)",
    "about.stats.groupBody": "Intiem, persoonlijk en volledig aanpasbaar aan jouw tempo en interesses.",
    "about.stats.customLabel": "Aanpasbaar",
    "about.stats.customBody": "Elk reisschema wordt rond jou gebouwd — data, tempo, interesses. Geen vaste sjablonen.",

    // About principles list
    "about.v.smallGroups.title": "Kleine groepen. Altijd max. 7–10.",
    "about.v.smallGroups.body":
      "We beperken elke vertrekdatum tot 7–10 reizigers.",
    "about.v.local.title": "Lokaal inhuren, eerlijk betalen.",
    "about.v.local.body":
      "Onze gidsen, chauffeurs en gastheren wonen in de regio's die we bezoeken en worden boven de lokale markttarieven betaald.",
    "about.v.leaveBetter.title": "Beter achterlaten.",
    "about.v.leaveBetter.body":
      "We compenseren koolstof op elke reis, vermijden wegwerpplastics onderweg en werken samen met door vrouwen geleide ambachtelijke collectieven.",
    "about.v.transparent.title": "Transparantie, altijd.",
    "about.v.transparent.body":
      "Geen verborgen winkeltussenpozen, geen commissies. Wat we publiceren is wat we leveren.",
    "about.v.safety.title": "Veiligheid eerst.",
    "about.v.safety.body":
      "Geverifieerde hotels, 24/7 ondersteuning en een veiligheidsprotocol op maat voor solo- en vrouwelijke reizigers.",
    "about.v.slow.title": "Langzaam is een functie.",
    "about.v.slow.body":
      "We bouwen bufferdagen in elk reisschema. Je hoeft niet alles te zien — je moet het goed zien.",

    // Contact
    "contact.chip": "Neem contact op",
    "contact.title": "Laten we jouw India-reis plannen.",
    "contact.subtitle":
      "Stuur ons een bericht op WhatsApp voor de snelste reactie, of vul het onderstaande formulier in en we nemen binnen een paar uur contact op (Indiase standaardtijd).",
    "contact.form.name": "Jouw naam",
    "contact.form.email": "E-mail",
    "contact.form.country": "Land",
    "contact.form.countryPlaceholder": "bijv. Nederland",
    "contact.form.whatsapp": "WhatsApp (optioneel)",
    "contact.form.tour": "Welke reis/reizen interesse jou?",
    "contact.form.tourSelect": "Selecteer een reis",
    "contact.form.tourCustom": "Privé maatwerkreis",
    "contact.form.tourUnsure": "Nog niet zeker",
    "contact.form.dates": "Geschatte reisdata",
    "contact.form.datesPlaceholder": "bijv. 10–20 juni 2026",
    "contact.form.startDate": "Startdatum",
    "contact.form.endDate": "Einddatum",
    "contact.form.travelers": "Aantal reizigers",
    "contact.form.travelersPlaceholder": "bijv. 2 volwassenen",
    "contact.form.message": "Nog iets anders dat we moeten weten?",
    "contact.form.messagePlaceholder":
      "Dieetwensen, toegankelijkheid, ervaringen die je graag wil beleven…",
    "contact.form.privacy":
      "Door te versturen ga je ermee akkoord dat we contact met je opnemen over je aanvraag. We delen je gegevens nooit.",
    "contact.sidebar.fastest.title": "Snelste reactie",
    "contact.sidebar.fastest.body":
      "WhatsApp is onze primaire inbox — we reageren meestal binnen een uur tijdens kantooruren (IST).",
    "contact.sidebar.email.title": "Of e-mail ons",
    "contact.sidebar.hours.title": "Kantooruren",
    "contact.sidebar.hours.body":
      "Maandag – Zaterdag · 9:00 – 21:00 IST\nZondag · Alleen noodondersteuning tijdens de reis",
    "contact.sidebar.phone": "Telefoon",
    "contact.sidebar.basedIn": "Gevestigd in",

    // Consult
    "nav.consult": "Gratis adviesgesprek",
    "consult.chip": "Vraag ons alles",
    "consult.title": "Denk je aan India? Laten we erover praten.",
    "consult.subtitle":
      "Of je nu wel of niet met ons reist, we beantwoorden graag je vragen over een bezoek aan India. De eerste 30 minuten zijn gratis — zonder verplichtingen.",
    "consult.pricing.free.title": "Eerste 30 minuten",
    "consult.pricing.free.price": "Gratis",
    "consult.pricing.free.body":
      "Een ontspannen gesprek om al je vragen te beantwoorden — veiligheid, routes, budgetten, beste reistijd, of iets anders over reizen in India.",
    "consult.pricing.extra.body":
      "Als 30 minuten niet genoeg zijn, boek dan hieronder een langere sessie. Hetzelfde gesprek, maar meer tijd om de diepte in te gaan.",
    "consult.pricing.perMinutes": "min sessie",
    "consult.pricing.book": "Boek & betaal",
    "consult.pricing.comingSoon": "Betaallink volgt binnenkort — app ons op WhatsApp om te boeken",
    "consult.form.title": "Boek je gratis gesprek van 30 minuten",
    "consult.form.subtitle":
      "Vertel ons iets over je reis en gewenste tijden, en we bevestigen een moment via WhatsApp of e-mail.",
    "consult.form.name": "Je naam",
    "consult.form.email": "E-mail",
    "consult.form.whatsapp": "WhatsApp-nummer",
    "consult.form.topic": "Waarover wil je graag praten?",
    "consult.form.topicPlaceholder":
      "bijv.: Is Noordoost-India veilig voor alleenreizende vrouwen in december?",
    "consult.form.availabilityDate": "Gewenste datum voor het gesprek",
    "consult.form.availabilityTime": "Gewenste tijd & tijdzone",
    "consult.form.availabilityTimePlaceholder": "bijv.: Doordeweeks 's avonds, CET",
    "consult.form.submit": "Vraag mijn gratis gesprek aan",
    "consult.form.privacy":
      "Door te versturen ga je ermee akkoord dat we contact met je opnemen om het gesprek in te plannen. We delen je gegevens nooit.",

    // Footer
    "footer.explore": "Ontdekken",
    "footer.exploreAll": "Alle reizen",
    "footer.contact": "Contact",
    "footer.waChat": "WhatsApp-chat",
    "footer.copyright": "Met zorg gemaakt in India.",
    "footer.subline": "Onafhankelijke kleine groepsreizen · Gevestigd in New Delhi",

    // Months
    "month.June": "Juni",
    "month.July": "Juli",
    "month.August": "Augustus",
    "month.September": "September",

    // Brand name breakdown
    "about.brand.chip": "De naam",
    "about.brand.titlePrefix": "Waarom",
    "about.brand.titleSuffix": "?",
    "about.brand.desc": "GoTrustelle is gebouwd op drie eenvoudige ideeën — de vrijheid om te verkennen, het comfort van vertrouwen en de warmte van een door een vrouw geleide reis.",
    "brand.go.title": "Vrijheid om te verkennen",
    "brand.go.body": "Beweging, avontuur en de moed om India voorbij de reisgids te ontdekken.",
    "brand.trust.title": "Het comfort van vertrouwen",
    "brand.trust.body": "Elk detail gepland, elke partner geverifieerd. Jij reist — wij zorgen voor de rest.",
    "brand.elle.title": "Een door een vrouw geleide reis",
    "brand.elle.body": "Elle — Frans voor «zij». Gebouwd door een vrouw, ontworpen met jou in gedachten.",
    "home.teaser.eyebrow": "De naam achter elke reis",

    // Founding story
    "about.origin.chip": "Ons verhaal",
    "about.origin.titleBefore": "Hoe GoTrustelle begon —",
    "about.origin.titleHighlight": "een café, een baby en een echt gesprek",
    "about.origin.p1": "Het begon met de glimlach van een baby in het Freedom Café in Rishikesh.",
    "about.origin.p2": "We bleven over continenten jarenlang contact houden, plannen makend die het leven vriendelijk bleef uitstellen.",
    "about.origin.p3a": "Op de laatste avond zei ze iets waar ik sindsdien elke dag aan denk:",
    "about.origin.quote": "Dit is wat we missen als we naar India reizen. We willen India niet alleen zien — we willen India voelen.",
    "about.origin.p3b": "Die ene zin werd alles.",
    "about.origin.signature": "— Shikha, Oprichtster",
    "about.origin.gallery.label": "Echte momenten · geen stockfoto's",
    "about.origin.photo1": "Rishikesh — de allereerste keer dat we elkaar ontmoetten",
    "about.origin.photo2": "Spelen met Melissa's dochter — het moment dat we voor het eerst spraken",
    "about.origin.photo3": "Melissa in een traditionele Indiase sari met Shikha's moeder",
    "about.origin.photo4": "Shikha & Melissa samen onderweg, 2026",
    "about.origin.photo5": "Melissa doet mee aan de pooja bij het lokale festival",
    "about.origin.photo6": "Wegsnoepjes en echte gesprekken",
    "about.origin.video.caption": "Een echt moment van onze tijd samen in India",
    "about.origin.closing.title": "Kom — verken India niet alleen, voel het.",
    "about.origin.closing.body": "Elke reis die we maken is een uitnodiging om voorbij de oppervlakte te stappen.",
    "about.origin.closing.cta1": "Onze reizen bekijken",
    "about.origin.closing.cta2": "Schrijf aan Shikha",

    // Footer tagline
    "footer.tagline": "Reiservaringen in India · door een vrouw, voor jou",

    // Misc
    "common.season": "2026",
    "common.loading": "Laden…",
    "lang.label": "Taal",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
