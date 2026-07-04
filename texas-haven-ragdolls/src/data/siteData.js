// ============================================================
// SITE DATA — edit this file to update your cattery content
// ============================================================

export const CATTERY = {
  name: "TexasHaven Ragdolls",
  tagline: "Gentle giants, raised with love in Arlington, TX",
  location: "Arlington, Texas",
  email: "stacisoutherland24@gmail.com",
  phone: "(682)7151933",
  instagram: "",
  facebook: "",
  tica: "TICA Registered Cattery",
  established: "2026",
};

export const QUEENS = [
  {
    id: "luna",
    name: "Luna",
    pattern: "Seal Bicolor",
    dob: "March 2022",
    weight: "10 lbs",
    titles: "TICA Distinguished Merit",
    bio: "Luna is our gentle matriarch — calm, affectionate, and impossibly photogenic. She loves being draped across laps and greeting every visitor at the door. Her kittens inherit her famously laid-back temperament.",
    color: "dust-200",
    emoji: "🐈",
    image: "/Assets/queen1.jpg",
    nextLitter: "Spring 2025",
    hcmTested: true,
    pkdTested: true,
  },
  {
    id: "nova",
    name: "Nova",
    pattern: "Blue Mitted",
    dob: "July 2023",
    weight: "9 lbs",
    titles: "TICA Champion",
    bio: "Nova is our playful younger queen with an incredibly silky coat and the brightest blue eyes you've ever seen. She's curious, bold, and loves fetch — yes, fetch. Her kittens tend to be particularly interactive and social.",
    color: "dust-300",
    emoji: "🐈‍⬛",
    image: "/Assets/queen2.jpg",
    nextLitter: "Fall 2025",
    hcmTested: true,
    pkdTested: true,
  },
];

export const KITTENS = [
  {
    id: "k1",
    name: "Frost",
    gender: "Male",
    pattern: "Blue Bicolor",
    mother: "Luna",
    dob: "March 12, 2025",
    goHome: "June 7, 2025",
    status: "available", // available | reserved | sold
    price: 1800,
    emoji: "🐱",
    description: "Frost is the biggest of the litter and already showing the classic ragdoll flop. He loves to be held and has the most incredible blue-gray coat.",
    traits: ["Laid-back", "Cuddly", "Quiet"],
  },
  {
    id: "k2",
    name: "Atlas",
    gender: "Male",
    pattern: "Seal Colorpoint",
    mother: "Luna",
    dob: "March 12, 2025",
    goHome: "June 7, 2025",
    status: "available",
    price: 1800,
    emoji: "🐾",
    description: "Atlas is curious and bold — always the first to investigate something new. Deep seal points and the fluffiest tail in the litter.",
    traits: ["Playful", "Bold", "Social"],
  },
  {
    id: "k3",
    name: "Pearl",
    gender: "Female",
    pattern: "Blue Mitted",
    mother: "Luna",
    dob: "March 12, 2025",
    goHome: "June 7, 2025",
    status: "reserved",
    price: 1900,
    emoji: "✨",
    description: "Pearl is dainty and sweet — she purrs the moment you pick her up. Already spoken for by a wonderful family in Dallas.",
    traits: ["Sweet", "Gentle", "Vocal"],
  },
  {
    id: "k4",
    name: "Mochi",
    gender: "Male",
    pattern: "Seal Mitted",
    mother: "Luna",
    dob: "March 12, 2025",
    goHome: "June 7, 2025",
    status: "available",
    price: 1800,
    emoji: "🌙",
    description: "Mochi is round, fluffy, and the definition of a lap cat. He sleeps through everything and will absolutely ruin your productivity.",
    traits: ["Mellow", "Cuddly", "Easygoing"],
  },
  {
    id: "k5",
    name: "Sage",
    gender: "Female",
    pattern: "Lilac Bicolor",
    mother: "Luna",
    dob: "March 12, 2025",
    goHome: "June 7, 2025",
    status: "sold",
    price: 1900,
    emoji: "💜",
    description: "Sage has the most unique coloring in the litter — a rare lilac bicolor with pale lavender points. She's already in her forever home.",
    traits: ["Confident", "Playful", "Affectionate"],
  },
];

export const FAQS = [
  {
    q: "What makes ragdolls different from other cats?",
    a: "Ragdolls are known for going limp when held — hence the name. They're one of the largest domestic cat breeds, famously docile, and they follow their people around like dogs. They rarely scratch and are excellent with children and other pets.",
  },
  {
    q: "How much do your kittens cost?",
    a: "Our pet kittens are $1,800–$1,900 depending on pattern and gender. Pricing includes TICA registration, first vaccinations, deworming, microchip, a health certificate, and a take-home package. We do not negotiate on price — our kittens are health tested and well-socialized.",
  },
  {
    q: "Do you do health testing?",
    a: "Absolutely. Both of our queens are tested clear for HCM (hypertrophic cardiomyopathy) and PKD (polycystic kidney disease) — the two most important genetic conditions in ragdolls. We only breed HCM-negative cats.",
  },
  {
    q: "How does your waitlist work?",
    a: "A $300 non-refundable deposit secures your spot on the waitlist. When a litter is born, waitlist families choose in deposit order. Deposits apply toward the final kitten price.",
  },
  {
    q: "Can I visit before committing?",
    a: "Yes! We welcome visits to meet our queens. Kitten visits are scheduled around 5–6 weeks of age. We're located in Fort Worth — reach out to schedule.",
  },
  {
    q: "Do you ship kittens?",
    a: "We prefer in-person pickup. We may consider nanny transport (a person flies with the kitten in-cabin) for families outside Texas at an additional cost. We never ship kittens as cargo.",
  },
  {
    q: "What age do kittens go home?",
    a: "Our kittens go home at 12 weeks minimum — some at 13–14 weeks depending on development. This is non-negotiable for socialization and health.",
  },
  {
    q: "Are your cats indoor-only?",
    a: "We require all adopters to keep kittens indoors only. Ragdolls are trusting and not street-savvy. Outdoor access puts them at serious risk.",
  },
];

export const GALLERY_IMAGES = [
  { id: 1, caption: "Luna enjoying her morning spot", category: "queens", emoji: "🐈", bg: "from-dust-100 to-dust-200" },
  { id: 2, caption: "Nova at 18 months", category: "queens", emoji: "🐈‍⬛", bg: "from-dust-200 to-dust-300" },
  { id: 3, caption: "Spring litter — day 1", category: "kittens", emoji: "🐱", bg: "from-cream-100 to-dust-100" },
  { id: 4, caption: "Three weeks old", category: "kittens", emoji: "✨", bg: "from-dust-100 to-cream-100" },
  { id: 5, caption: "Frost at 6 weeks", category: "kittens", emoji: "🌙", bg: "from-dust-200 to-dust-100" },
  { id: 6, caption: "Atlas exploring", category: "kittens", emoji: "🐾", bg: "from-cream-100 to-dust-200" },
  { id: 7, caption: "Luna & Nova together", category: "queens", emoji: "💙", bg: "from-dust-100 to-dust-200" },
  { id: 8, caption: "The whole litter napping", category: "kittens", emoji: "😴", bg: "from-dust-50 to-cream-100" },
  { id: 9, caption: "Pearl's first day home", category: "adopted", emoji: "🏠", bg: "from-cream-100 to-dust-100" },
];
