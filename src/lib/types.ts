// Core types for Bakery Fusion App

export interface BakeryItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'donut' | 'bread' | 'pastry' | 'cake' | 'seasonal';
  brand: 'mister-donut' | 'krispy-kreme' | 'andersen' | 'pompadour' | 'la-terre' | 'kimuraya';
  images: string[];
  nutritionInfo?: NutritionInfo;
  ingredients: string[];
  allergens: string[];
  isOnlineOnly: boolean;
  isCustomizable: boolean;
  freezable: boolean;
  tags: string[];
  availability: {
    inStore: boolean;
    online: boolean;
    delivery: boolean;
    pickup: boolean;
  };
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  sugar: number;
  fiber: number;
  sodium: number;
}

// Mister Donut Features: Net Order System + E-gift
export interface NetOrder {
  id: string;
  items: OrderItem[];
  pickupTime: Date;
  storeId: string;
  customerInfo: CustomerInfo;
  status: 'pending' | 'confirmed' | 'ready' | 'completed' | 'cancelled';
  totalAmount: number;
  paymentMethod: 'cash' | 'card' | 'gift';
}

export interface EGift {
  id: string;
  code: string;
  amount: number;
  message: string;
  senderEmail: string;
  recipientEmail: string;
  expiryDate: Date;
  isUsed: boolean;
  createdAt: Date;
}

// Krispy Kreme Features: Quick Order + Tiered Loyalty
export interface QuickOrder {
  id: string;
  items: OrderItem[];
  orderType: 'pickup' | 'delivery';
  scheduledTime: Date;
  customerId: string;
  status: 'confirmed' | 'preparing' | 'ready' | 'delivered';
  estimatedTime: number; // minutes
}

export interface LoyaltyTier {
  level: 'bronze' | 'silver' | 'gold' | 'platinum';
  pointsRequired: number;
  benefits: string[];
  discountPercentage: number;
}

export interface CustomerLoyalty {
  customerId: string;
  currentTier: LoyaltyTier['level'];
  points: number;
  lifetimeSpend: number;
  specialPerks: string[];
}

// Andersen Features: Frozen Shipping + Outlet System
export interface FrozenShipping {
  orderId: string;
  items: BakeryItem[];
  shippingMethod: 'frozen-express' | 'frozen-standard';
  packagingType: 'individual' | 'bulk';
  deliveryDate: Date;
  specialInstructions?: string;
}

export interface OutletItem extends BakeryItem {
  originalPrice: number;
  discountPercentage: number;
  discountReason: 'surplus' | 'near-expiry' | 'seasonal-end' | 'imperfect';
  quantity: number;
}

// Pompadour Features: Custom Orders + Online Specials
export interface CustomOrder {
  id: string;
  itemType: 'celebration-loaf' | 'custom-cake' | 'gift-set';
  specifications: {
    weight?: number; // for 一升パン (1kg loaves)
    message?: string;
    decorations?: string[];
    flavors: string[];
  };
  deliveryDate: Date;
  customerId: string;
  status: 'pending' | 'approved' | 'in-production' | 'ready';
  estimatedCompletionTime: number; // hours
}

export interface OnlineSpecial extends BakeryItem {
  specialType: 'monthly-new' | 'seasonal-limited' | 'online-exclusive';
  availabilityPeriod: {
    start: Date;
    end: Date;
  };
  limitedQuantity?: number;
}

// La Terre Features: Multi-brand Cart + Cold Chain
export interface MultiBrandCart {
  id: string;
  customerId: string;
  brands: {
    brandId: string;
    items: OrderItem[];
    subtotal: number;
  }[];
  totalAmount: number;
  shippingMethod: ColdChainOption;
}

export interface ColdChainOption {
  method: 'frozen' | 'chilled' | 'ambient';
  carrier: string;
  deliveryTime: string;
  cost: number;
  temperatureRange: {
    min: number;
    max: number;
  };
}

// Kimuraya Features: Subscription + Heritage Content
export interface BreadSubscription {
  id: string;
  customerId: string;
  plan: 'weekly' | 'biweekly' | 'monthly';
  items: BakeryItem[];
  nextDelivery: Date;
  status: 'active' | 'paused' | 'cancelled';
  preferences: {
    substituteOutOfStock: boolean;
    specialRequests: string[];
  };
}

export interface HeritageContent {
  id: string;
  title: string;
  content: string;
  type: 'timeline' | 'story' | 'tradition' | 'trivia';
  relatedProducts: string[]; // BakeryItem IDs
  images: string[];
  publishedAt: Date;
}

// Core entities
export interface OrderItem {
  itemId: string;
  quantity: number;
  customizations?: Record<string, any>;
  unitPrice: number;
  totalPrice: number;
}

export interface CustomerInfo {
  id: string;
  name: string;
  email: string;
  phone: string;
  preferences: {
    favoriteItems: string[];
    dietaryRestrictions: string[];
    communicationPreferences: string[];
  };
}

export interface Store {
  id: string;
  name: string;
  brand: BakeryItem['brand'];
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  hours: {
    [key: string]: {
      open: string;
      close: string;
    };
  };
  services: ('pickup' | 'delivery' | 'dine-in' | 'custom-orders')[];
  contact: {
    phone: string;
    email: string;
  };
}

// n8n and MCP integration types
export interface WorkflowTrigger {
  type: 'order-placed' | 'subscription-due' | 'inventory-low' | 'custom-order-approved';
  payload: Record<string, any>;
  timestamp: Date;
}

export interface MCPContext {
  sessionId: string;
  userId: string;
  currentPage: string;
  cart: MultiBrandCart;
  preferences: CustomerInfo['preferences'];
  history: {
    orders: string[];
    searches: string[];
    views: string[];
  };
} 