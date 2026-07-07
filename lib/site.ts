export const site = {
  name: "SARAVANA PAVILION STAY",
  shortName: "Saravana Pavilion",
  tagline: "Where the waterfall meets the hills",
  description:
    "A secluded hillside homestay on the Attukad Waterfall Road in Pallivasal, Munnar. Surrounded by tea gardens and monsoon forests, every room breathes the mist of the Western Ghats.",
  rating: 4.7,
  ratingSource: "Google Maps",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@saravanapavilion.example.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919995587444",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+91 99955 87444",
  address: {
    line: "Attukad Waterfall Rd",
    area: "Pallivasal",
    region: "Munnar, Kerala",
    postal: "685565",
    country: "India",
    full: "Attukad Waterfall Rd, Pallivasal, Kerala 685565, India",
  },
  location: {
    lat: 10.025,
    lng: 77.057,
    distanceFromMunnar: "7–8 km south of Munnar town",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.5!2d77.057!3d10.025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDAxJzMwLjAiTiA3N8KwMDMnMjUuMiJF!5e0!3m2!1sen!2sin!4v1",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Attukad+Waterfall+Rd+Pallivasal+Munnar+Kerala",
  },
  since: 2023,
  lgbtqFriendly: true,
};

export const images = {
  atmosphire: "/images/atmosphire.webp",
  balcony: "/images/balcony.webp",
  campfire: "/images/campfire.webp",
  front: "/images/front.webp",
  moreDetails: "/images/MoreDetails.webp",
  nearby: "/images/nearbyareas.webp",
  nightfront: "/images/nightfront.webp",
  saravana: "/images/saravana.webp",
  waterfall: "/images/waterfall.webp",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Waterfall", href: "#waterfall" },
  { label: "Rooms", href: "#rooms" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Reviews", href: "#reviews" },
];

export const amenities: string[] = [
  "Direct waterfall view",
  "Tea garden surrounds",
  "Private chef (breakfast & dinner)",
  "Luggage assistance",
  "LGBTQ+ friendly",
  "Campfire setup",
  "Nature trails",
  "Free Wi‑Fi",
  "Hot water",
  "Room service",
];

export const rooms = [
  {
    id: "waterfall-view",
    name: "Waterfall View Room",
    description:
      "Wake up to the symphony of falling water. Large windows frame the cascade, while the private balcony invites you to sit with a cup of local chai and watch the mist roll over the valley.",
    image: "balcony",
    capacity: 2,
    bed: "Queen bed",
    size: "280 sq ft",
    perks: ["Balcony", "Waterfall view", "Ensuite bathroom"],
  },
  {
    id: "garden-cottage",
    name: "Garden Cottage",
    description:
      "Tucked among the tea shrubs and wild ferns, this cozy cottage offers complete privacy. Step out onto the grass, breathe the cool mountain air, and let the forest lull you to sleep.",
    image: "front",
    capacity: 3,
    bed: "King bed + single",
    size: "340 sq ft",
    perks: ["Private garden", "Sit-out area", "Ensuite bathroom"],
  },
  {
    id: "premium-suite",
    name: "Premium Suite",
    description:
      "Our most spacious accommodation blends rustic charm with modern comfort. A separate living area, a deep-soaking tub, and views that stretch across the tea estates to the waterfall.",
    image: "atmosphire",
    capacity: 4,
    bed: "King bed + sofa bed",
    size: "480 sq ft",
    perks: ["Living area", "Bathtub", "Panoramic view", "Mini‑bar"],
  },
];

export const experiences = [
  {
    title: "Waterfall Trail",
    description:
      "A short guided walk through the monsoon forest leads you right to the base of the Attukad cascade. Feel the spray on your face and the raw energy of the Western Ghats.",
    image: "waterfall",
  },
  {
    title: "Campfire Evenings",
    description:
      "As the mountain chill settles, gather around a crackling campfire beneath a ceiling of stars. Stories, warm drinks, and the hush of the forest — this is Munnar at its finest.",
    image: "campfire",
  },
  {
    title: "Private Chef Dining",
    description:
      "No restaurant, no menu — just a chef who listens and cooks. Fresh, locally sourced home-style Kerala meals served on the veranda or in the garden.",
    image: "moreDetails",
  },
  {
    title: "Tea Garden Walks",
    description:
      "The neighbouring estates invite you to walk among centuries-old tea bushes. Watch pluckers at work, learn the craft, and taste the region‘s legendary single-estate brews.",
    image: "nearby",
  },
];

export const testimonials = [
  {
    name: "Aarav Mehta",
    location: "Bangalore",
    quote:
      "The moment we stepped in, the world went silent. Just the waterfall and the birds. Anbu took care of everything — we didn‘t lift a finger for three days. Absolute peace.",
    rating: 5,
  },
  {
    name: "Priya & Sneha",
    location: "Chennai",
    quote:
      "Finding an LGBTQ+ friendly place in the hills was such a relief. The staff treated us like family, the room was spotless, and waking up to the waterfall every morning was pure magic.",
    rating: 5,
  },
  {
    name: "Rajesh Iyer",
    location: "Mumbai",
    quote:
      "Immaculate rooms, incredible hospitality. The private chef made the best Kerala-style fish curry I‘ve ever had. The campfire night under the stars — unforgettable.",
    rating: 5,
  },
];

export const faqItems = [
  { question: "How far is the property from Munnar town?", answer: "We are 7–8 km south of Munnar town centre, about a 20‑minute drive." },
  { question: "Is there a restaurant on site?", answer: "We don't have a commercial restaurant. A private chef prepares fresh home‑cooked breakfast and dinner with locally sourced ingredients." },
  { question: "Can vehicles drive up to the rooms?", answer: "The property sits on a nature trail, so vehicles can't reach the front door. Our staff carries all luggage to your room." },
  { question: "What is the best time to visit?", answer: "September to March offers pleasant weather and clear views. The monsoon months (June–August) are magical if you love the rain and dramatic mist." },
  { question: "Is the property LGBTQ+ friendly?", answer: "Yes, we are certified as an LGBTQ+ friendly establishment and welcome everyone with warmth and respect." },
  { question: "How do I book a stay?", answer: "Use our booking widget below, or message us directly on WhatsApp for personal assistance." },
];

export const highlights = [
  { value: "4.7", label: "Google Rating", sub: "from guest reviews" },
  { value: "7+", label: "Acres of Nature", sub: "tea gardens & forest" },
  { value: "24×7", label: "Staff Support", sub: "including luggage" },
  { value: "100%", label: "LGBTQ+ Friendly", sub: "certified" },
];
