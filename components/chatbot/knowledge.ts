import { site } from "@/lib/site";

export interface Intent {
  id: string;
  patterns: string[];
  response: string;
  quickReply?: boolean;
}

export const intents: Intent[] = [
  {
    id: "greeting",
    patterns: ["hello", "hi", "hey", "good morning", "good evening", "namaste"],
    response: `Welcome to ${site.name}! 🌿 How can I help you today? You can ask me about the waterfall, rooms, dining, or anything about your stay.`,
    quickReply: true,
  },
  {
    id: "waterfall",
    patterns: ["waterfall", "cascade", "attukad", "fall", "stream"],
    response:
      "The Attukad Waterfall is the soul of this property — it's just a 5-minute walk through the forest from your room. You can hear it from your balcony. The best time to visit is early morning when the mist creates rainbows over the cascade.",
    quickReply: true,
  },
  {
    id: "checkin",
    patterns: ["check in", "check-in", "checkin", "arrival", "arrive", "timing"],
    response: "Check-in is from 12:00 PM. Check-out is by 10:00 AM. Early check-in and late check-out can be arranged based on availability — just let us know.",
    quickReply: true,
  },
  {
    id: "dining",
    patterns: ["food", "dining", "restaurant", "meal", "breakfast", "dinner", "eat", "chef", "cook"],
    response:
      "We don't have a commercial restaurant. Instead, a private chef prepares fresh, home-cooked meals for you. Breakfast and dinner are included — think Kerala-style fish curry, appams, fresh juices, and local delicacies made with ingredients from the region.",
    quickReply: true,
  },
  {
    id: "pricing",
    patterns: ["price", "cost", "rate", "pricing", "how much", "charges", "tariff"],
    response:
      "Our rates vary by season and room type. For current pricing, please use the booking widget or message us on WhatsApp — we'll get back to you within minutes with an exact quote.",
  },
  {
    id: "rooms",
    patterns: ["room", "rooms", "suite", "cottage", "accommodation", "stay", "bedroom"],
    response:
      `We have three accommodation types: the Waterfall View Room (2 guests, balcony with cascade view), the Garden Cottage (3 guests, private garden), and the Premium Suite (4 guests, living area + bathtub). Each is designed to blend with the surroundings. Check the Rooms section above for details!`,
    quickReply: true,
  },
  {
    id: "location",
    patterns: ["where", "location", "address", "munnar", "pallivasal", "how to reach", "distance"],
    response:
      `We're at ${site.address.full}, about 7-8 km south of Munnar town. The last stretch is a nature trail — vehicles can't drive to the door, but our staff carries all luggage. The drive from Munnar takes about 20 minutes.`,
    quickReply: true,
  },
  {
    id: "luggage",
    patterns: ["luggage", "baggage", "bags", "carry", "trail", "walk", "terrain"],
    response:
      "Yes! Since the property sits on a nature trail, vehicles don't go all the way to the rooms. But don't worry — our dedicated staff carries every piece of luggage for you. Just park at the trailhead and we'll take it from there.",
    quickReply: true,
  },
  {
    id: "lgbtq",
    patterns: ["lgbt", "lgbtq", "gay", "queer", "friendly", "pride", "rainbow"],
    response:
      "Absolutely — we are a certified LGBTQ+ friendly establishment. Everyone is welcome here with warmth, respect, and privacy. Saravana Pavilion is a safe, inclusive space for all.",
    quickReply: true,
  },
  {
    id: "nearby",
    patterns: ["nearby", "attractions", "sightseeing", "places", "tourist", "visit", "around"],
    response:
      "Besides our own waterfall trail, nearby attractions include Mattupetty Dam (15 km), Echo Point, the Tea Museum in Munnar, and Eravikulam National Park (home to the Nilgiri Tahr). We're happy to help plan your itinerary!",
    quickReply: true,
  },
  {
    id: "booking",
    patterns: ["book", "booking", "reserve", "reservation", "how to book"],
    response:
      "You can use the booking widget right here on the website — select your dates, room, and contact details, and we'll get back to you on WhatsApp. Or simply message us directly on WhatsApp and we'll handle everything.",
    quickReply: true,
  },
  {
    id: "contact",
    patterns: ["contact", "phone", "call", "reach", "whatsapp", "email"],
    response:
      `You can call us at ${site.phoneDisplay}, email ${site.email}, or message us on WhatsApp. We're responsive and happy to help with anything.`,
    quickReply: true,
  },
  {
    id: "weather",
    patterns: ["weather", "climate", "rain", "cold", "temperature", "best time"],
    response:
      "Munnar is pleasant year-round. September to March is peak season with clear skies and 15-25°C. June-August (monsoon) is magical — lush green, dramatic mist, and the waterfall at its fullest. Pack a light jacket regardless of when you visit!",
  },
  {
    id: "activities",
    patterns: ["activity", "activities", "things to do", "experience", "campfire", "walk", "trek"],
    response:
      "Our guests love the guided waterfall walk, evening campfires under the stars, private chef dining on the veranda, and walks through the neighbouring tea gardens. It's a slow, immersive kind of holiday.",
    quickReply: true,
  },
  {
    id: "thanks",
    patterns: ["thank", "thanks", "thank you", "appreciate", "grateful"],
    response:
      "You're most welcome! 😊 We can't wait to host you at Saravana Pavilion. If you have any more questions, I'm here. Otherwise, feel free to check the booking section!",
    quickReply: true,
  },
  {
    id: "fallback",
    patterns: [],
    response:
      "I'm not sure I have the answer to that. Would you like to message us on WhatsApp? Our team will respond personally and quickly.",
  },
];
