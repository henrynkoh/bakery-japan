import { NextRequest, NextResponse } from 'next/server';
import { MCPContext } from '@/lib/types';
import { SAMPLE_ITEMS, BRANDS } from '@/lib/data';

// MCP Context Management
let activeContexts: Map<string, MCPContext> = new Map();

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('sessionId');

  if (sessionId) {
    const context = activeContexts.get(sessionId);
    if (!context) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }
    return NextResponse.json({ context });
  }

  return NextResponse.json({ 
    activeContexts: Array.from(activeContexts.keys()),
    totalContexts: activeContexts.size
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, sessionId, ...data } = body;

    switch (action) {
      case 'initialize':
        return initializeContext(sessionId, data);
      case 'update':
        return updateContext(sessionId, data);
      case 'recommend':
        return generateRecommendations(sessionId);
      case 'analyze':
        return analyzeUserBehavior(sessionId);
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('MCP API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

function initializeContext(sessionId: string, data: any) {
  const context: MCPContext = {
    sessionId,
    userId: data.userId || `user-${Date.now()}`,
    currentPage: data.currentPage || 'home',
    cart: {
      id: `cart-${Date.now()}`,
      customerId: data.userId || `user-${Date.now()}`,
      brands: [],
      totalAmount: 0,
      shippingMethod: {
        method: 'ambient',
        carrier: 'Japan Post',
        deliveryTime: '2-3 days',
        cost: 400,
        temperatureRange: { min: 15, max: 25 }
      }
    },
    preferences: {
      favoriteItems: [],
      dietaryRestrictions: data.dietaryRestrictions || [],
      communicationPreferences: data.communicationPreferences || ['email']
    },
    history: {
      orders: [],
      searches: [],
      views: []
    }
  };

  activeContexts.set(sessionId, context);

  return NextResponse.json({ 
    context,
    message: 'MCP context initialized successfully'
  });
}

function updateContext(sessionId: string, data: any) {
  const context = activeContexts.get(sessionId);
  if (!context) {
    return NextResponse.json({ error: 'Context not found' }, { status: 404 });
  }

  // Update various context fields
  if (data.currentPage) context.currentPage = data.currentPage;
  if (data.cartItems) {
    // Update cart with new items
    const brandGroups = groupItemsByBrand(data.cartItems);
    context.cart.brands = brandGroups;
    context.cart.totalAmount = calculateCartTotal(data.cartItems);
  }
  if (data.searchQuery) {
    context.history.searches.push(data.searchQuery);
  }
  if (data.viewedItem) {
    context.history.views.push(data.viewedItem);
  }

  activeContexts.set(sessionId, context);

  return NextResponse.json({ 
    context,
    message: 'Context updated successfully'
  });
}

function generateRecommendations(sessionId: string) {
  const context = activeContexts.get(sessionId);
  if (!context) {
    return NextResponse.json({ error: 'Context not found' }, { status: 404 });
  }

  // AI-powered recommendations based on context
  const recommendations = {
    featuredItems: getPersonalizedItems(context),
    brandSuggestions: getBrandRecommendations(context),
    loyaltyActions: getLoyaltyRecommendations(context),
    seasonalOffers: getSeasonalRecommendations(context)
  };

  return NextResponse.json({ 
    recommendations,
    context: context.sessionId
  });
}

function analyzeUserBehavior(sessionId: string) {
  const context = activeContexts.get(sessionId);
  if (!context) {
    return NextResponse.json({ error: 'Context not found' }, { status: 404 });
  }

  const analysis = {
    preferredCategories: analyzePreferredCategories(context),
    spendingPattern: analyzeSpendingPattern(context),
    brandLoyalty: analyzeBrandLoyalty(context),
    timingPatterns: analyzeTimingPatterns(context),
    recommendations: generateBehaviorBasedRecommendations(context)
  };

  return NextResponse.json({ 
    analysis,
    insights: generateInsights(analysis)
  });
}

// Helper functions for MCP functionality
function groupItemsByBrand(items: any[]) {
  const brands: { [key: string]: any } = {};
  
  items.forEach(item => {
    if (!brands[item.brand]) {
      brands[item.brand] = {
        brandId: item.brand,
        items: [],
        subtotal: 0
      };
    }
    brands[item.brand].items.push(item);
    brands[item.brand].subtotal += item.totalPrice;
  });

  return Object.values(brands);
}

function calculateCartTotal(items: any[]): number {
  return items.reduce((total, item) => total + item.totalPrice, 0);
}

function getPersonalizedItems(context: MCPContext) {
  // Filter items based on user preferences and history
  const viewedBrands = new Set(context.history.views.map((v: any) => v.brand));
  return SAMPLE_ITEMS.filter(item => 
    viewedBrands.has(item.brand) || 
    context.preferences.favoriteItems.includes(item.id)
  ).slice(0, 6);
}

function getBrandRecommendations(context: MCPContext) {
  // Recommend brands based on current cart and history
  const currentBrands = new Set(context.cart.brands.map(b => b.brandId));
  return Object.entries(BRANDS)
    .filter(([key]) => !currentBrands.has(key))
    .slice(0, 3)
    .map(([key, brand]) => ({ id: key, ...brand }));
}

function getLoyaltyRecommendations(context: MCPContext) {
  return [
    'Complete your order to earn 50 points',
    'Add ¥500 more for free shipping',
    'Try a new brand for bonus points'
  ];
}

function getSeasonalRecommendations(context: MCPContext) {
  const currentMonth = new Date().getMonth();
  const seasonal = SAMPLE_ITEMS.filter(item => 
    item.tags.includes('seasonal') || 
    item.tags.includes('limited')
  );
  return seasonal.slice(0, 4);
}

function analyzePreferredCategories(context: MCPContext) {
  const categories: { [key: string]: number } = {};
  context.history.views.forEach((view: any) => {
    categories[view.category] = (categories[view.category] || 0) + 1;
  });
  return Object.entries(categories)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3);
}

function analyzeSpendingPattern(context: MCPContext) {
  const cartTotal = context.cart.totalAmount;
  return {
    currentCart: cartTotal,
    averageOrderValue: cartTotal > 0 ? cartTotal : 1500, // Estimated
    spendingTier: cartTotal > 3000 ? 'high' : cartTotal > 1000 ? 'medium' : 'low'
  };
}

function analyzeBrandLoyalty(context: MCPContext) {
  const brandCounts: { [key: string]: number } = {};
  context.history.views.forEach((view: any) => {
    brandCounts[view.brand] = (brandCounts[view.brand] || 0) + 1;
  });
  return Object.entries(brandCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 2);
}

function analyzeTimingPatterns(context: MCPContext) {
  return {
    sessionDuration: '15 minutes', // Estimated
    pageViews: context.history.views.length,
    searchActivity: context.history.searches.length
  };
}

function generateBehaviorBasedRecommendations(context: MCPContext) {
  return [
    'Enable notifications for new seasonal items',
    'Try our subscription service for your favorite items',
    'Join our loyalty program for exclusive benefits'
  ];
}

function generateInsights(analysis: any) {
  return [
    `User shows preference for ${analysis.preferredCategories[0]?.[0] || 'bakery'} items`,
    `Spending pattern indicates ${analysis.spendingPattern.spendingTier} value customer`,
    `Strong loyalty to ${analysis.brandLoyalty[0]?.[0] || 'premium'} brands`
  ];
} 