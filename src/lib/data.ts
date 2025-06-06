import { BakeryItem, LoyaltyTier, OutletItem, OnlineSpecial, HeritageContent, Store } from './types';

export const BRANDS = {
  'mister-donut': {
    name: 'Mister Donut',
    color: '#FF6B35',
    description: "Japan's dominant doughnut chain with 900+ shops nationwide"
  },
  'krispy-kreme': {
    name: 'Krispy Kreme',
    color: '#00A651',
    description: 'U.S. brand with Japan-exclusive flavors and premium experience'
  },
  'andersen': {
    name: 'Andersen Group',
    color: '#8B4513',
    description: 'European-style bakery group with premium artisan breads'
  },
  'pompadour': {
    name: 'Pompadour',
    color: '#D2691E',
    description: 'France-meets-Japan boulangerie with custom celebration loaves'
  },
  'la-terre': {
    name: 'La Terre',
    color: '#228B22',
    description: 'Artisan bakery focused on 100% domestic organic ingredients'
  },
  'kimuraya': {
    name: 'Kimuraya Sohonten',
    color: '#B8860B',
    description: '150-year-old inventor of the signature sakadane anpan'
  }
};

export const SAMPLE_ITEMS = [
  {
    id: 'md-001',
    name: 'Pon de Ring',
    description: 'Signature chewy ring donut with unique texture',
    price: 140,
    category: 'donut',
    brand: 'mister-donut',
    images: ['/products/pon-de-ring.jpg'],
    ingredients: ['flour', 'sugar', 'eggs', 'oil', 'yeast'],
    allergens: ['wheat', 'eggs'],
    isOnlineOnly: false,
    isCustomizable: false,
    freezable: true,
    tags: ['signature', 'popular', 'chewy'],
    availability: { inStore: true, online: true, delivery: true, pickup: true }
  },
  {
    id: 'md-002',
    name: 'Sakura Mochi Donut',
    description: 'Limited spring donut with cherry blossom and mochi flavors',
    price: 200,
    category: 'seasonal',
    brand: 'mister-donut',
    images: ['/products/sakura-mochi.jpg'],
    ingredients: ['flour', 'sakura extract', 'mochi powder', 'sugar'],
    allergens: ['wheat'],
    isOnlineOnly: false,
    isCustomizable: false,
    freezable: true,
    tags: ['seasonal', 'sakura', 'limited'],
    availability: { inStore: true, online: true, delivery: true, pickup: true }
  },
  {
    id: 'kk-001',
    name: 'Original Glazed',
    description: 'The world-famous original glazed donut, made fresh daily',
    price: 190,
    category: 'donut',
    brand: 'krispy-kreme',
    images: ['/products/original-glazed.jpg'],
    ingredients: ['enriched flour', 'sugar', 'vegetable oil', 'eggs', 'yeast'],
    allergens: ['wheat', 'eggs', 'soy', 'milk'],
    isOnlineOnly: false,
    isCustomizable: false,
    freezable: true,
    tags: ['signature', 'glazed', 'classic'],
    availability: { inStore: true, online: true, delivery: true, pickup: true }
  },
  {
    id: 'kk-002',
    name: 'Matcha Azuki Japan Limited',
    description: 'Japan-exclusive matcha glaze with sweet azuki bean filling',
    price: 280,
    category: 'donut',
    brand: 'krispy-kreme',
    images: ['/products/matcha-azuki.jpg'],
    ingredients: ['flour', 'matcha powder', 'azuki beans', 'sugar', 'cream'],
    allergens: ['wheat', 'milk', 'eggs'],
    isOnlineOnly: false,
    isCustomizable: false,
    freezable: true,
    tags: ['japan-exclusive', 'matcha', 'azuki', 'premium'],
    availability: { inStore: true, online: true, delivery: true, pickup: true }
  },
  {
    id: 'an-001',
    name: 'European Sourdough Loaf',
    description: 'Traditional European-style sourdough, perfect for freezing',
    price: 450,
    category: 'bread',
    brand: 'andersen',
    images: ['/products/sourdough-loaf.jpg'],
    ingredients: ['organic flour', 'sourdough starter', 'sea salt', 'water'],
    allergens: ['wheat'],
    isOnlineOnly: false,
    isCustomizable: false,
    freezable: true,
    tags: ['artisan', 'sourdough', 'european', 'organic'],
    availability: { inStore: true, online: true, delivery: true, pickup: true }
  },
  {
    id: 'pp-001',
    name: 'Ichigo Pan (1kg Celebration Loaf)',
    description: 'Customizable 1-kilogram celebration bread for special occasions',
    price: 3500,
    category: 'bread',
    brand: 'pompadour',
    images: ['/products/ichigo-pan.jpg'],
    ingredients: ['premium flour', 'butter', 'eggs', 'sugar', 'custom decorations'],
    allergens: ['wheat', 'eggs', 'milk'],
    isOnlineOnly: false,
    isCustomizable: true,
    freezable: false,
    tags: ['celebration', 'custom', '1kg', 'special-occasion'],
    availability: { inStore: false, online: true, delivery: true, pickup: true }
  },
  {
    id: 'lt-001',
    name: 'Organic Whole Grain Bread',
    description: '100% domestic organic grains, stone-ground flour',
    price: 580,
    category: 'bread',
    brand: 'la-terre',
    images: ['/products/organic-whole-grain.jpg'],
    ingredients: ['organic whole wheat flour', 'organic rye', 'sea salt', 'natural yeast'],
    allergens: ['wheat'],
    isOnlineOnly: false,
    isCustomizable: false,
    freezable: true,
    tags: ['organic', '100%-domestic', 'whole-grain', 'healthy'],
    availability: { inStore: true, online: true, delivery: true, pickup: true }
  },
  {
    id: 'km-001',
    name: 'Original Sakadane Anpan',
    description: 'The original sweet roll that started it all, 150 years of tradition',
    price: 160,
    category: 'bread',
    brand: 'kimuraya',
    images: ['/products/sakadane-anpan.jpg'],
    ingredients: ['flour', 'sakadane (sake lees)', 'anko (sweet bean paste)', 'sugar'],
    allergens: ['wheat'],
    isOnlineOnly: false,
    isCustomizable: false,
    freezable: true,
    tags: ['original', 'traditional', 'anpan', 'heritage', '150-years'],
    availability: { inStore: true, online: true, delivery: true, pickup: true }
  }
];

export const LOYALTY_TIERS = [
  {
    level: 'bronze',
    pointsRequired: 0,
    benefits: ['Birthday discount', 'Order notifications'],
    discountPercentage: 0
  },
  {
    level: 'silver',
    pointsRequired: 1000,
    benefits: ['5% discount on orders', 'Early access to new items', 'Free shipping on orders over ¥3000'],
    discountPercentage: 5
  },
  {
    level: 'gold',
    pointsRequired: 3000,
    benefits: ['10% discount on orders', 'Monthly free item', 'Priority customer service', 'Exclusive events'],
    discountPercentage: 10
  },
  {
    level: 'platinum',
    pointsRequired: 8000,
    benefits: ['15% discount on orders', 'Weekly free item', 'Personal shopper service', 'VIP events', 'Custom order priority'],
    discountPercentage: 15
  }
];

export const HERITAGE_CONTENT = [
  {
    id: 'heritage-001',
    title: 'The Birth of Anpan: A 150-Year Journey',
    content: 'In 1874, Yasubei Kimura created the first anpan at his small bakery in Ginza. This revolutionary combination of Western bread-making techniques with traditional Japanese sweet bean paste would change Japan\'s culinary landscape forever...',
    type: 'timeline',
    relatedProducts: ['km-001'],
    images: ['/heritage/anpan-birth.jpg', '/heritage/kimuraya-1874.jpg'],
    publishedAt: new Date('2024-01-15')
  },
  {
    id: 'heritage-002',
    title: 'The Art of Pon de Ring: Creating the Perfect Texture',
    content: 'The unique chewy texture of Pon de Ring comes from a carefully guarded blend of tapioca starch and wheat flour. This signature donut represents decades of innovation in Japanese confectionery...',
    type: 'story',
    relatedProducts: ['md-001'],
    images: ['/heritage/pon-de-ring-making.jpg'],
    publishedAt: new Date('2024-02-20')
  },
  {
    id: 'heritage-003',
    title: 'April 4th: Anpan Day Celebration',
    content: 'Did you know that April 4th is officially Anpan Day in Japan? This date commemorates the first time anpan was presented to Emperor Meiji in 1875, marking its acceptance into Japanese society...',
    type: 'trivia',
    relatedProducts: ['km-001'],
    images: ['/heritage/anpan-day.jpg'],
    publishedAt: new Date('2024-04-04')
  }
];

export const SAMPLE_STORES: Store[] = [
  {
    id: 'store-001',
    name: 'Mister Donut Shibuya',
    brand: 'mister-donut',
    address: '2-24-1 Shibuya, Shibuya City, Tokyo 150-0002',
    coordinates: { lat: 35.6598, lng: 139.7036 },
    hours: {
      monday: { open: '07:00', close: '22:00' },
      tuesday: { open: '07:00', close: '22:00' },
      wednesday: { open: '07:00', close: '22:00' },
      thursday: { open: '07:00', close: '22:00' },
      friday: { open: '07:00', close: '23:00' },
      saturday: { open: '08:00', close: '23:00' },
      sunday: { open: '08:00', close: '22:00' }
    },
    services: ['pickup', 'delivery', 'dine-in'],
    contact: {
      phone: '+81-3-1234-5678',
      email: 'shibuya@misterdonut.jp'
    }
  },
  {
    id: 'store-002',
    name: 'Krispy Kreme Shinjuku',
    brand: 'krispy-kreme',
    address: '3-38-2 Shinjuku, Shinjuku City, Tokyo 160-0022',
    coordinates: { lat: 35.6938, lng: 139.7034 },
    hours: {
      monday: { open: '08:00', close: '21:00' },
      tuesday: { open: '08:00', close: '21:00' },
      wednesday: { open: '08:00', close: '21:00' },
      thursday: { open: '08:00', close: '21:00' },
      friday: { open: '08:00', close: '22:00' },
      saturday: { open: '09:00', close: '22:00' },
      sunday: { open: '09:00', close: '21:00' }
    },
    services: ['pickup', 'delivery', 'dine-in'],
    contact: {
      phone: '+81-3-2345-6789',
      email: 'shinjuku@krispykreme.jp'
    }
  },
  {
    id: 'store-003',
    name: 'Andersen Ginza',
    brand: 'andersen',
    address: '5-6-12 Ginza, Chuo City, Tokyo 104-0061',
    coordinates: { lat: 35.6719, lng: 139.7658 },
    hours: {
      monday: { open: '10:00', close: '20:00' },
      tuesday: { open: '10:00', close: '20:00' },
      wednesday: { open: '10:00', close: '20:00' },
      thursday: { open: '10:00', close: '20:00' },
      friday: { open: '10:00', close: '20:00' },
      saturday: { open: '10:00', close: '20:00' },
      sunday: { open: '10:00', close: '19:00' }
    },
    services: ['pickup', 'dine-in', 'custom-orders'],
    contact: {
      phone: '+81-3-3456-7890',
      email: 'ginza@andersen.jp'
    }
  }
];

export const COLD_CHAIN_OPTIONS = [
  {
    method: 'frozen' as const,
    carrier: 'Yamato Cool TA-Q-BIN',
    deliveryTime: '1-2 days',
    cost: 800,
    temperatureRange: { min: -18, max: -15 }
  },
  {
    method: 'chilled' as const,
    carrier: 'Sagawa Refrigerated',
    deliveryTime: '1-2 days',
    cost: 600,
    temperatureRange: { min: 0, max: 5 }
  },
  {
    method: 'ambient' as const,
    carrier: 'Japan Post',
    deliveryTime: '2-3 days',
    cost: 400,
    temperatureRange: { min: 15, max: 25 }
  }
]; 