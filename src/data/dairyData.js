export const STORE_INFO = {
  name: "Heaven's Dairy",
  alternateName: "Doodh Ghar",
  tagline: "An Elevated Dairy Experience",
  subTagline: "Farm-Fresh Milk, Traditional Yogurt, Artisan Cheese, Pure Butter & Shahi Kulfi",
  phone: "+92 335 9131316",
  phoneDisplay: "0335 9131316",
  whatsapp: "923359131316",
  location: "Soan Gardens Phase 2, Islamabad",
  mapsUrl: "https://yandex.com/maps/org/doodh_ghar/156788084341/",
  rating: 4.6,
  reviewsCount: 83,
  deliveryAreas: [
    { name: "Soan Gardens (Phase 1 & 2)", time: "6:00 AM - 7:30 AM", freeOver: 500, activeRiders: 4 },
    { name: "PWD Housing Society", time: "6:15 AM - 7:45 AM", freeOver: 500, activeRiders: 3 },
    { name: "Media Town", time: "6:30 AM - 8:00 AM", freeOver: 500, activeRiders: 2 },
    { name: "Bahria Town (Phases 1-8)", time: "6:00 AM - 8:15 AM", freeOver: 700, activeRiders: 6 },
    { name: "Police Foundation / CBR", time: "6:45 AM - 8:00 AM", freeOver: 500, activeRiders: 2 }
  ],
  slots: [
    { id: "morning", label: "Morning Sunrise (6:00 AM – 8:00 AM)", desc: "Fresh from the 4:30 AM milking cycle for your morning chai & cereal" },
    { id: "evening", label: "Evening Fresh (5:00 PM – 7:30 PM)", desc: "Fresh evening batch for dinner, baking and nightly milk" }
  ]
};

export const PRODUCTS = [
  {
    id: "buffalo-milk",
    title: "Pure Buffalo Milk",
    subtitle: "Khalis Bhains Ka Doodh",
    category: "Fresh Milk",
    tag: "Bestseller",
    price: 240,
    unit: "per Litre",
    fat: "6.5% - 7.5% Natural Fat",
    description: "Thick, nutrient-dense morning milk with a golden malai layer. 100% water-free, tested daily, chilled to 4°C within minutes of milking.",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
    detail: "Available in tamper-proof chilled bottles or hygienic food-grade pouches.",
    subscriptionAvailable: true
  },
  {
    id: "a2-cow-milk",
    title: "Pure A2 Cow Milk",
    subtitle: "Khalis Gaye Ka Doodh",
    category: "Fresh Milk",
    tag: "Light & Wholesome",
    price: 260,
    unit: "per Litre",
    fat: "3.8% - 4.2% Natural Fat",
    description: "Gentle on digestion, rich in natural beta-carotene and A2 proteins. Ideal for toddlers, health enthusiasts, and light aromatic lattes.",
    image: "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=800&q=80",
    detail: "Directly sourced from pasture-fed indigenous cows.",
    subscriptionAvailable: true
  },
  {
    id: "matka-dahi",
    title: "Traditional Matka Dahi",
    subtitle: "Clay-Pot Set Sweet Yogurt",
    category: "Yogurt",
    tag: "Thick Malai Layer",
    price: 320,
    unit: "per Kg",
    fat: "Probiotic Rich",
    description: "Slow-fermented in traditional porous red clay pots. Thick spoonable texture with zero sourness, topped with velvety organic cream.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    detail: "Clay pots absorb excess moisture, leaving pure concentrated curd.",
    subscriptionAvailable: true
  },
  {
    id: "desi-lassi",
    title: "Fresh Desi Sweet Lassi",
    subtitle: "Traditional Churned Drink",
    category: "Yogurt",
    tag: "Probiotic Refresher",
    price: 180,
    unit: "500ml Bottle",
    fat: "100% Curd Churned",
    description: "Slow-churned clay-pot curd infused with green cardamom, light sugar, and a thick dollop of fresh clotted malai.",
    image: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=800&q=80",
    detail: "Freshly churned every dawn without preservatives.",
    subscriptionAvailable: true
  },
  {
    id: "farm-malai",
    title: "Pure Farm Malai (Cream)",
    subtitle: "Fresh Buffalo Milk Cream",
    category: "Fresh Milk",
    tag: "Golden Crust",
    price: 380,
    unit: "250g Jar",
    fat: "Pure Milk Fat",
    description: "Natural golden cream skimmed from slow-simmered whole buffalo milk. Velvet texture for breakfast toasts and parathas.",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80",
    detail: "100% pure thick crust cream skimmed fresh daily.",
    subscriptionAvailable: false
  },
  {
    id: "desi-makhan-ghee",
    title: "Hand-Churned Desi Butter",
    subtitle: "Valoda Makhan & Khalis Ghee",
    category: "Butter & Ghee",
    tag: "Aromatic Golden",
    price: 650,
    unit: "450g Pack",
    fat: "100% Cultured Cream",
    description: "Traditional biloba/valoda churned butter with earthy grass notes. Melts into liquid gold over parathas or clarifies into pure Desi Ghee.",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80",
    detail: "Crafted strictly from cultured cream without food colors.",
    subscriptionAvailable: false
  },
  {
    id: "artisan-paneer",
    title: "Artisan Fresh Malai Paneer",
    subtitle: "Fresh Country Cottage Cheese",
    category: "Cheese",
    tag: "High Protein",
    price: 420,
    unit: "400g Block",
    fat: "22g Protein / 100g",
    description: "Ultra-soft, melt-in-mouth cottage cheese pressed fresh every morning. Zero starch or fillers, soaking up gravies like a dream.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    detail: "Pressed in muslin cloth without chemical coagulants.",
    subscriptionAvailable: false
  },
  {
    id: "shahi-kulfi",
    title: "Shahi Khoya Kulfi & Rabri",
    subtitle: "Slow-Simmered Traditional Treat",
    category: "Kulfi",
    tag: "Pure Khoya",
    price: 180,
    unit: "per Stick",
    fat: "Pure Reduced Milk",
    description: "8-hour slow reduced whole milk infused with green cardamom, Irani saffron, roasted pistachios and silver leaf. Real old-fashioned indulgence.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80",
    detail: "No artificial flavors, just caramelized milk solids and nuts.",
    subscriptionAvailable: false
  },
  {
    id: "pure-khoya",
    title: "Pure Organic Khoya (Mawa)",
    subtitle: "Reduced Milk Solids",
    category: "Kulfi",
    tag: "Zero Sugar Added",
    price: 480,
    unit: "500g Pack",
    fat: "100% Whole Milk",
    description: "Slow-simmered for 6 hours into pure fragrant mawa. Perfect for festive halwas, gulab jamuns, and traditional sweets.",
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=800&q=80",
    detail: "Crafted entirely from whole unskimmed buffalo milk.",
    subscriptionAvailable: false
  },
  {
    id: "herbed-paneer",
    title: "Artisan Herb & Cumin Paneer",
    subtitle: "Zesty Country Cheese",
    category: "Cheese",
    tag: "Chef Special",
    price: 450,
    unit: "400g Block",
    fat: "22g Protein / 100g",
    description: "Handcrafted fresh cheese infused with roasted cumin seeds and farm-fresh herbs. Slices firmly without crumbling.",
    image: "https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&w=800&q=80",
    detail: "Pressed in muslin cloth with pure spices.",
    subscriptionAvailable: false
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Tariq Mahmood",
    area: "Bahria Town Phase 4",
    role: "Verified Subscriber (8 Mos)",
    rating: 5,
    text: "The malai layer on Heaven's Dairy morning milk is just like my ancestral village. Our morning chai and kids' breakfast has reached a completely different level of richness."
  },
  {
    id: 2,
    name: "Farah Zafar",
    area: "Soan Gardens Phase 2",
    role: "Daily Subscriber (1.2 Yrs)",
    rating: 5,
    text: "We switched to their 6:30 AM doorstep delivery in Soan Gardens. Rain or cold, the milk is on our porch before the alarm rings. The rider app alerts make life so easy!"
  },
  {
    id: 3,
    name: "Hamza Malik",
    area: "PWD Housing Society",
    role: "Customer Review",
    rating: 5,
    text: "Their Matka Dahi and hand-churned Desi Makhan are unmatched in PWD. You can taste the genuine creaminess without any starch or artificial thickening."
  },
  {
    id: 4,
    name: "Ayesha Siddiqui",
    area: "Media Town",
    role: "Daily Subscriber (6 Mos)",
    rating: 5,
    text: "Knowing my toddlers are drinking 100% water-free, lab-tested milk gives me complete peace of mind. Delivery before 7 AM is consistently reliable."
  }
];
