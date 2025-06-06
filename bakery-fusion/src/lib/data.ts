// Brand definitions for the 6 premier Japanese bakery chains
export const BRANDS = {
  "mister-donut": {
    name: "Mister Donut",
    color: "#FF6B35",
    monthlyVisits: "3.0M",
    storeCount: 500,
    founded: 1971,
    specialty: "Pon de Ring & Classic Donuts",
    keyFeatures: ["Net Order System", "E-gift Codes"]
  },
  "krispy-kreme": {
    name: "Krispy Kreme Japan",
    color: "#00A651", 
    monthlyVisits: "275K",
    storeCount: 65,
    founded: 2006,
    specialty: "Original Glazed & Seasonal Specials",
    keyFeatures: ["Quick Order Platform", "Tiered Loyalty System"]
  },
  "andersen": {
    name: "Andersen Group",
    color: "#8B4513",
    monthlyVisits: "61K", 
    storeCount: 180,
    founded: 1948,
    specialty: "Danish Pastries & Artisan Breads",
    keyFeatures: ["Frozen Shipping", "Outlet Corner"]
  },
  "pompadour": {
    name: "Pompadour", 
    color: "#9B59B6",
    monthlyVisits: "54K",
    storeCount: 25,
    founded: 1969,
    specialty: "French Pastries & Custom Loaves",
    keyFeatures: ["Custom Celebration Loaves", "Online-only Specials"]
  },
  "la-terre": {
    name: "La Terre",
    color: "#2ECC71",
    monthlyVisits: "44K", 
    storeCount: 32,
    founded: 1985,
    specialty: "Artisan Breads & Cold-chain Delivery",
    keyFeatures: ["Multi-brand Cart", "Cold-chain Delivery"]
  },
  "kimuraya": {
    name: "Kimuraya Sohonten",
    color: "#F39C12",
    monthlyVisits: "32K",
    storeCount: 8,
    founded: 1869,
    specialty: "Traditional Anpan & Historical Sweets", 
    keyFeatures: ["Subscription Service", "Heritage Storytelling"]
  }
};

// Sample menu items across all brands
export const SAMPLE_ITEMS = [
  {
    id: "md-001",
    name: "Pon de Ring Original",
    brand: "mister-donut",
    price: 162,
    category: "donut",
    image: "/items/pon-de-ring.jpg",
    description: "Mister Donut's iconic chewy ring donut with simple glaze",
    isPopular: true,
    prepTime: 5
  },
  {
    id: "kk-002", 
    name: "Original Glazed Dozen",
    brand: "krispy-kreme",
    price: 1944,
    category: "donut",
    image: "/items/original-glazed.jpg", 
    description: "12 fresh Original Glazed donuts, our signature recipe",
    isPopular: true,
    prepTime: 10
  },
  {
    id: "and-003",
    name: "Danish Pastry Selection",
    brand: "andersen", 
    price: 890,
    category: "pastry",
    image: "/items/danish-selection.jpg",
    description: "Assorted Danish pastries with seasonal fruit fillings",
    isPopular: false,
    prepTime: 15
  },
  {
    id: "pom-004",
    name: "Custom Birthday Loaf (1kg)",
    brand: "pompadour",
    price: 3240,
    category: "celebration",
    image: "/items/birthday-loaf.jpg", 
    description: "Customizable 1kg celebration bread with personal message",
    isPopular: true,
    prepTime: 120
  },
  {
    id: "lt-005",
    name: "Artisan Sourdough",
    brand: "la-terre",
    price: 648,
    category: "bread", 
    image: "/items/sourdough.jpg",
    description: "Traditional sourdough with 48-hour fermentation",
    isPopular: false,
    prepTime: 0
  },
  {
    id: "kim-006",
    name: "Traditional Anpan (4-pack)",
    brand: "kimuraya",
    price: 756,
    category: "traditional",
    image: "/items/anpan.jpg",
    description: "Original anpan recipe from 1874, sweet red bean filling",
    isPopular: true,
    prepTime: 8
  },
  {
    id: "md-007",
    name: "Chocolate Mochitto",
    brand: "mister-donut", 
    price: 194,
    category: "specialty",
    image: "/items/mochitto.jpg",
    description: "Chewy mochi texture donut with rich chocolate coating",
    isPopular: false,
    prepTime: 5
  },
  {
    id: "kk-008",
    name: "Seasonal Sakura Special",
    brand: "krispy-kreme",
    price: 324,
    category: "seasonal",
    image: "/items/sakura-donut.jpg",
    description: "Limited spring donut with sakura flavor and pink glaze",
    isPopular: true,
    prepTime: 8
  }
];

// Loyalty program tiers
export const LOYALTY_TIERS = [
  {
    name: "Bronze",
    pointsRequired: 0,
    color: "#CD7F32",
    benefits: [
      "1 point per ¥100 spent",
      "Birthday discount coupon", 
      "Monthly newsletter"
    ]
  },
  {
    name: "Silver", 
    pointsRequired: 1000,
    color: "#C0C0C0",
    benefits: [
      "1.5 points per ¥100 spent",
      "Free birthday item",
      "Early access to seasonal items",
      "Exclusive member-only events"
    ]
  },
  {
    name: "Gold",
    pointsRequired: 5000, 
    color: "#FFD700",
    benefits: [
      "2 points per ¥100 spent",
      "Free monthly item selection",
      "Priority customer service",
      "Advance booking for custom orders",
      "Member-only product tastings"
    ]
  },
  {
    name: "Platinum",
    pointsRequired: 15000,
    color: "#E5E4E2", 
    benefits: [
      "3 points per ¥100 spent",
      "Quarterly premium gift box",
      "Dedicated concierge service", 
      "Invitation to exclusive baking workshops",
      "Early access to all new products",
      "Custom recipe consultations"
    ]
  }
];

// Heritage and historical content
export const HERITAGE_CONTENT = [
  {
    brand: "kimuraya",
    year: 1869,
    title: "Birth of the Anpan",
    content: "Kimuraya Sohonten created Japan's first anpan (sweet bread with red bean filling), revolutionizing Japanese confectionery by combining Western bread-making with traditional azuki flavors.",
    significance: "This innovation marked the beginning of Japan's unique bakery culture, blending Western techniques with Japanese tastes."
  },
  {
    brand: "andersen",
    year: 1948, 
    title: "Post-war Bread Revival",
    content: "Founded in Hiroshima, Andersen helped rebuild Japan's food culture after WWII, introducing Danish pastry techniques and European bread-making traditions.",
    significance: "Played a crucial role in diversifying Japan's post-war diet and establishing artisan baking standards."
  },
  {
    brand: "pompadour",
    year: 1969,
    title: "French Patisserie Excellence", 
    content: "Established as Japan's premier French patisserie, bringing authentic Parisian baking techniques and introducing custom celebration breads to Japanese celebrations.",
    significance: "Elevated special occasion baking in Japan, making custom breads a centerpiece of celebrations."
  },
  {
    brand: "mister-donut",
    year: 1971,
    title: "American Donuts, Japanese Style",
    content: "Introduced American-style donuts to Japan with localized flavors. The iconic Pon de Ring, created specifically for Japanese preferences, became a cultural phenomenon.",
    significance: "Proved that Western foods could be successfully adapted for Japanese tastes, inspiring countless food innovations."
  },
  {
    brand: "la-terre", 
    year: 1985,
    title: "Artisan Bread Movement",
    content: "Pioneered the artisan bread movement in Japan, focusing on traditional fermentation methods and high-quality ingredients sourced both locally and internationally.",
    significance: "Established appreciation for craft bread-making and slow-food principles in Japanese bakery culture."
  },
  {
    brand: "krispy-kreme",
    year: 2006,
    title: "Global Glazed Perfection",
    content: "Brought the world-famous Original Glazed donut to Japan, creating massive lines and 'donut boom' while maintaining authentic recipes and introducing tiered loyalty programs.",
    significance: "Demonstrated the power of authentic global brands in Japan and revolutionized customer loyalty in the bakery sector."
  }
];
