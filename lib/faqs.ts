export type FaqItem = {
  q: string;
  a: string;
  bullets?: string[];
  after?: string;
};

export type FaqCategory = {
  icon: string;
  label: string;
  items: FaqItem[];
};

export const faqs: { en: FaqCategory[]; de: FaqCategory[] } = {
  en: [
    {
      icon: "🧭",
      label: "General",
      items: [
        {
          q: "What kind of experience can I expect in Ladakh, Spiti Valley, or Kashmir?",
          a: "These regions are very different from the rest of India. They are remote, quiet, and deeply connected to nature. Instead of cities, you'll experience mountains, vast landscapes, and small local communities. Travel here is slower and simpler — but also more meaningful.",
        },
        {
          q: "Is this a typical tourist trip?",
          a: "No. This is not a fast-paced sightseeing trip. We focus on fewer places, more time, and deeper experiences — so you can truly connect with the region instead of just passing through.",
        },
      ],
    },
    {
      icon: "🏔",
      label: "Altitude & physical conditions",
      items: [
        {
          q: "How high are these regions?",
          a: "Ladakh and Spiti Valley are located at high altitudes, typically between 3,000 and 4,500 meters. This is something we take seriously when planning your trip.",
        },
        {
          q: "Should I worry about altitude sickness?",
          a: "It's something to be aware of, but manageable. We carefully design the itinerary with:",
          bullets: ["gradual acclimatization", "rest days", "slow altitude gain"],
          after: "With proper planning, most travelers adjust well.",
        },
        {
          q: "Do I need to be very fit?",
          a: "No extreme fitness is required. However, you should:",
          bullets: [
            "be generally healthy",
            "be comfortable with longer drives",
            "be open to simple conditions",
          ],
          after: "A flexible mindset is more important than physical fitness.",
        },
      ],
    },
    {
      icon: "🚗",
      label: "Transport & roads",
      items: [
        {
          q: "What are the roads like?",
          a: "Road conditions vary. Some are smooth, while others — especially in Spiti Valley — can be rough. We work with experienced local drivers who are very familiar with these routes.",
        },
        {
          q: "How long are the drives?",
          a: "Travel days can be longer than in other parts of India. However, the journey itself is part of the experience, with constantly changing landscapes along the way.",
        },
      ],
    },
    {
      icon: "🏨",
      label: "Accommodation",
      items: [
        {
          q: "What kind of accommodation can I expect?",
          a: "Accommodation is simple, clean, and authentic. Depending on the location, you may stay in:",
          bullets: ["small hotels", "guesthouses", "homestays"],
          after: "This is not luxury travel, but we always select the best available options.",
        },
        {
          q: "Will I always have hot water and heating?",
          a: "Not always. In remote areas, infrastructure is limited. We prioritise comfort wherever possible, but some flexibility is required.",
        },
      ],
    },
    {
      icon: "📡",
      label: "Connectivity",
      items: [
        {
          q: "Will I have internet and phone signal?",
          a: "Connectivity is limited. In many areas:",
          bullets: [
            "mobile networks may not work",
            "only local SIM cards function",
            "internet can be slow or unavailable",
          ],
          after: "This is part of the experience and allows you to disconnect.",
        },
      ],
    },
    {
      icon: "🛡",
      label: "Safety",
      items: [
        {
          q: "Is it safe to travel to these regions?",
          a: "Yes — with proper planning. These areas are generally peaceful, but they are remote. We ensure safety through careful planning and experienced local partners.",
        },
        {
          q: "What happens in case of an emergency?",
          a: "We have:",
          bullets: ["trusted local contacts", "experienced drivers", "contingency plans in place"],
          after: "In remote areas, response times may be longer — which is why preparation is essential.",
        },
      ],
    },
    {
      icon: "✨",
      label: "Experience & expectations",
      items: [
        {
          q: "Is this a comfortable trip?",
          a: "It is comfortable for the region, but not luxury. You should expect:",
          bullets: ["simple conditions", "nature-focused experiences", "occasional unpredictability"],
        },
        {
          q: "What makes this trip special?",
          a: "Authenticity and access. You'll experience:",
          bullets: [
            "real life in remote regions",
            "local culture beyond tourist routes",
            "landscapes most travelers never reach",
          ],
        },
      ],
    },
    {
      icon: "💰",
      label: "Booking & suitability",
      items: [
        {
          q: "How does booking work?",
          a: "After your inquiry, we first understand your expectations — especially regarding comfort and altitude. You will then receive a personalised itinerary and can decide at your own pace.",
        },
        {
          q: "Is this suitable for everyone?",
          a: "Not necessarily. This trip is best suited for travelers who:",
          bullets: [
            "are open to simpler conditions",
            "are curious about remote regions",
            "are comfortable with some unpredictability",
          ],
        },
      ],
    },
  ],

  de: [
    {
      icon: "🧭",
      label: "Allgemein",
      items: [
        {
          q: "Welche Art von Erlebnis erwartet mich in Ladakh, im Spiti-Tal oder in Kaschmir?",
          a: "Diese Regionen unterscheiden sich stark vom übrigen Indien. Sie sind abgelegen, ruhig und eng mit der Natur verbunden. Statt Städten erleben Sie Berge, weite Landschaften und kleine lokale Gemeinschaften. Das Reisen hier ist langsamer und einfacher — dafür aber bedeutsamer.",
        },
        {
          q: "Ist das eine typische Touristenreise?",
          a: "Nein. Das ist keine schnelle Sightseeing-Tour. Wir konzentrieren uns auf weniger Orte, mehr Zeit und tiefere Erlebnisse — damit Sie die Region wirklich kennenlernen, statt nur durchzureisen.",
        },
      ],
    },
    {
      icon: "🏔",
      label: "Höhe & körperliche Bedingungen",
      items: [
        {
          q: "Wie hoch liegen diese Regionen?",
          a: "Ladakh und das Spiti-Tal liegen in großer Höhe, typischerweise zwischen 3.000 und 4.500 Metern. Das nehmen wir bei der Planung Ihrer Reise sehr ernst.",
        },
        {
          q: "Sollte ich mir Sorgen wegen Höhenkrankheit machen?",
          a: "Es ist etwas, das man im Blick haben sollte — aber gut beherrschbar. Wir gestalten das Programm sorgfältig mit:",
          bullets: ["schrittweiser Akklimatisierung", "Ruhetagen", "langsamem Höhengewinn"],
          after: "Mit guter Planung passen sich die meisten Reisenden gut an.",
        },
        {
          q: "Muss ich sehr fit sein?",
          a: "Extreme Fitness ist nicht erforderlich. Allerdings sollten Sie:",
          bullets: [
            "grundsätzlich gesund sein",
            "längere Autofahrten aushalten können",
            "offen für einfache Bedingungen sein",
          ],
          after: "Eine flexible Einstellung ist wichtiger als körperliche Fitness.",
        },
      ],
    },
    {
      icon: "🚗",
      label: "Transport & Straßen",
      items: [
        {
          q: "Wie sind die Straßen?",
          a: "Die Straßenverhältnisse sind unterschiedlich. Manche sind gut ausgebaut, andere — besonders im Spiti-Tal — können rau sein. Wir arbeiten mit erfahrenen lokalen Fahrern, die diese Strecken bestens kennen.",
        },
        {
          q: "Wie lang sind die Fahrten?",
          a: "Reisetage können länger sein als in anderen Teilen Indiens. Die Fahrt selbst ist jedoch Teil des Erlebnisses — mit ständig wechselnden Landschaften.",
        },
      ],
    },
    {
      icon: "🏨",
      label: "Unterkunft",
      items: [
        {
          q: "Welche Art von Unterkunft erwartet mich?",
          a: "Die Unterkünfte sind einfach, sauber und authentisch. Je nach Ort übernachten Sie in:",
          bullets: ["kleinen Hotels", "Gästehäusern", "Homestays"],
          after: "Das ist kein Luxusreisen, aber wir wählen stets die besten verfügbaren Optionen.",
        },
        {
          q: "Habe ich immer warmes Wasser und Heizung?",
          a: "Nicht immer. In abgelegenen Gebieten ist die Infrastruktur begrenzt. Wir legen Wert auf Komfort, wo es möglich ist — etwas Flexibilität ist jedoch nötig.",
        },
      ],
    },
    {
      icon: "📡",
      label: "Konnektivität",
      items: [
        {
          q: "Habe ich Internet und Mobilfunkempfang?",
          a: "Die Verbindung ist eingeschränkt. In vielen Gebieten:",
          bullets: [
            "funktionieren Mobilfunknetze unter Umständen nicht",
            "laufen nur lokale SIM-Karten",
            "ist Internet langsam oder nicht verfügbar",
          ],
          after: "Das gehört zum Erlebnis dazu und erlaubt Ihnen, wirklich abzuschalten.",
        },
      ],
    },
    {
      icon: "🛡",
      label: "Sicherheit",
      items: [
        {
          q: "Ist es sicher, in diese Regionen zu reisen?",
          a: "Ja — mit guter Planung. Diese Gebiete sind in der Regel friedlich, aber abgelegen. Wir sorgen durch sorgfältige Planung und erfahrene lokale Partner für Sicherheit.",
        },
        {
          q: "Was passiert im Notfall?",
          a: "Wir haben:",
          bullets: ["verlässliche lokale Kontakte", "erfahrene Fahrer", "Notfallpläne bereit"],
          after: "In abgelegenen Gebieten können Reaktionszeiten länger sein — deshalb ist Vorbereitung essenziell.",
        },
      ],
    },
    {
      icon: "✨",
      label: "Erwartungen & Erlebnis",
      items: [
        {
          q: "Ist das eine komfortable Reise?",
          a: "Für die Region ist sie komfortabel, aber nicht luxuriös. Sie sollten Folgendes erwarten:",
          bullets: ["einfache Bedingungen", "naturnahe Erlebnisse", "gelegentliche Unvorhersehbarkeit"],
        },
        {
          q: "Was macht diese Reise besonders?",
          a: "Authentizität und Zugang. Sie erleben:",
          bullets: [
            "das echte Leben in abgelegenen Regionen",
            "lokale Kultur abseits der Touristenrouten",
            "Landschaften, die die meisten Reisenden nie erreichen",
          ],
        },
      ],
    },
    {
      icon: "💰",
      label: "Buchung & Eignung",
      items: [
        {
          q: "Wie funktioniert die Buchung?",
          a: "Nach Ihrer Anfrage verstehen wir zuerst Ihre Erwartungen — besonders zu Komfort und Höhe. Sie erhalten dann eine individuelle Reiseplanung und können in Ruhe entscheiden.",
        },
        {
          q: "Ist das für jeden geeignet?",
          a: "Nicht unbedingt. Diese Reise eignet sich am besten für Reisende, die:",
          bullets: [
            "offen für einfachere Bedingungen sind",
            "neugierig auf abgelegene Regionen sind",
            "mit etwas Unvorhersehbarkeit umgehen können",
          ],
        },
      ],
    },
  ],
};
