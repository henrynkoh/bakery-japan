'use client';

import { Clock, Gift, Star, Truck, Calendar, Award, MapPin, ArrowLeft } from 'lucide-react';
import { BRANDS, SAMPLE_ITEMS } from '@/lib/data';
import Link from 'next/link';

export default function FeaturesPage() {
  const allFeatures = [
    {
      id: 'net-order',
      name: 'Net Order System',
      brand: 'mister-donut',
      icon: Clock,
      description: 'Reserve donuts online for timed pickup with guest checkout. No registration required.',
      details: 'Revolutionary pre-ordering system that allows customers to reserve specific donuts for pickup at exact times. Features guest checkout, real-time inventory updates, and 15-minute pickup guarantee.',
      benefits: ['No registration required', '15-minute pickup guarantee', 'Real-time inventory', 'Mobile optimized']
    },
    {
      id: 'egift-codes',
      name: 'E-Gift Codes', 
      brand: 'mister-donut',
      icon: Gift,
      description: 'Send digital gift codes via email or LINE for any occasion.',
      details: 'Digital gifting platform integrated with LINE messaging and email delivery. Perfect for birthdays, holidays, or corporate gifts.',
      benefits: ['Instant delivery', 'LINE integration', 'Custom messages', 'No expiration limits']
    },
    {
      id: 'quick-order',
      name: 'Quick Order Platform',
      brand: 'krispy-kreme', 
      icon: Star,
      description: 'Advanced ordering with transparent preparation times and auto-cancellation for impossible orders.',
      details: 'Intelligent ordering system that calculates real-time preparation times and automatically prevents impossible orders from being placed.',
      benefits: ['Smart timing', 'Auto-cancellation', 'Transparent ETAs', 'Quality assurance']
    },
    {
      id: 'tiered-loyalty',
      name: 'Tiered Loyalty System',
      brand: 'krispy-kreme',
      icon: Award, 
      description: 'Bronze to Platinum tiers with escalating perks, app-only items, and special member weeks.',
      details: 'Four-tier loyalty program with increasing benefits, exclusive access to limited items, and member-only events.',
      benefits: ['4 tier levels', 'Exclusive items', 'Member events', 'Point multipliers']
    },
    {
      id: 'frozen-shipping',
      name: 'Frozen Shipping',
      brand: 'andersen',
      icon: Truck,
      description: 'Nationwide frozen bread delivery maintaining oven-fresh quality.',
      details: 'Advanced cold-chain logistics that preserves bread quality during nationwide shipping, allowing customers to enjoy fresh bakery items anywhere in Japan.',
      benefits: ['Nationwide delivery', 'Quality preservation', 'Eco-friendly packaging', 'Temperature tracking']
    },
    {
      id: 'outlet-corner', 
      name: 'Outlet Corner',
      brand: 'andersen',
      icon: MapPin,
      description: 'Discounted surplus items available for immediate pickup.',
      details: 'End-of-day discounts on surplus bakery items, reducing food waste while offering great value to customers.',
      benefits: ['Up to 50% off', 'Reduces waste', 'Fresh quality', 'Daily updates']
    },
    {
      id: 'custom-loaves',
      name: 'Custom Celebration Loaves', 
      brand: 'pompadour',
      icon: Calendar,
      description: 'Customizable 1kg celebration bread with personal messages.',
      details: 'Artisan celebration breads customized for special occasions with personal messages, custom shapes, and premium ingredients.',
      benefits: ['Personal messages', 'Custom shapes', 'Premium ingredients', '72-hour notice']
    },
    {
      id: 'online-specials',
      name: 'Online-only Specials',
      brand: 'pompadour', 
      icon: Star,
      description: 'Exclusive seasonal items available only through online ordering.',
      details: 'Limited-edition seasonal pastries and breads available exclusively online, featuring unique flavors and premium ingredients.',
      benefits: ['Exclusive access', 'Seasonal flavors', 'Limited quantities', 'Premium quality']
    },
    {
      id: 'multi-brand-cart',
      name: 'Multi-brand Cart',
      brand: 'la-terre',
      icon: Award,
      description: 'Unified checkout across all partner brands in a single order.',
      details: 'Revolutionary unified shopping cart that allows customers to order from multiple bakery brands in a single transaction.',
      benefits: ['Single checkout', 'Combined shipping', 'Unified loyalty', 'Bulk discounts']
    },
    {
      id: 'cold-chain',
      name: 'Cold-chain Delivery',
      brand: 'la-terre',
      icon: Truck,
      description: 'Temperature-controlled shipping for delicate pastries and perishables.',
      details: 'Specialized temperature-controlled delivery system ensuring delicate pastries and cream-filled items arrive in perfect condition.',
      benefits: ['Temperature control', 'Delicate handling', 'Quality guarantee', 'Real-time tracking']
    },
    {
      id: 'subscription',
      name: 'Subscription Service',
      brand: 'kimuraya',
      icon: Calendar,
      description: 'Weekly/monthly curated selections delivered to your door.',
      details: 'Curated bakery subscriptions featuring seasonal selections, traditional favorites, and new product previews delivered regularly.',
      benefits: ['Curated selection', 'Flexible timing', 'Exclusive previews', 'Convenience']
    },
    {
      id: 'heritage-story',
      name: 'Heritage Storytelling',
      brand: 'kimuraya',
      icon: Award,
      description: 'Rich brand lore, historical timelines, and cultural significance.',
      details: '150+ years of baking heritage brought to life through interactive content, historical timelines, and cultural education.',
      benefits: ['Historical depth', 'Cultural education', 'Interactive content', 'Authentic stories']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3 animate-fade-in-up">
              <ArrowLeft className="w-6 h-6 text-gray-600 hover:text-amber-600 transition-colors" />
              <div className="w-12 h-12 bakery-gradient rounded-2xl flex items-center justify-center animate-pulse-glow shadow-lg">
                <span className="text-white font-bold text-xl">🥐</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Bakery Fusion
                </h1>
                <span className="text-sm text-gray-500 hidden sm:block font-medium">Features</span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Features Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="section-title">
              12 Revolutionary Features
            </h1>
            <p className="section-subtitle">
              Discover the innovative features that make Bakery Fusion the ultimate platform for Japanese bakery experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFeatures.map((feature) => {
              const brand = BRANDS[feature.brand as keyof typeof BRANDS];
              const IconComponent = feature.icon;
              
              return (
                <div key={feature.id} className="feature-card p-8">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: `linear-gradient(135deg, ${brand.color}dd, ${brand.color})` }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">{feature.name}</h3>
                      <p 
                        className="text-sm font-medium px-3 py-1 rounded-full inline-block text-white"
                        style={{ backgroundColor: brand.color }}
                      >
                        {brand.name}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{feature.details}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">Key Benefits:</h4>
                    {feature.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <div 
                          className="w-2 h-2 rounded-full mr-3"
                          style={{ backgroundColor: brand.color }}
                        ></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feature Comparison */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison by Brand</h2>
            <div className="feature-card p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 font-bold text-gray-800">Brand</th>
                      <th className="text-left py-4 px-4 font-bold text-gray-800">Features</th>
                      <th className="text-left py-4 px-4 font-bold text-gray-800">Specialty</th>
                      <th className="text-left py-4 px-4 font-bold text-gray-800">Founded</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(BRANDS).map(([key, brand]) => (
                      <tr key={key} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <div 
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3"
                              style={{ backgroundColor: brand.color }}
                            >
                              {brand.name.charAt(0)}
                            </div>
                            {brand.name}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            {brand.keyFeatures.map((feature, index) => (
                              <div key={index} className="text-sm text-gray-600">• {feature}</div>
                            ))}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-600">{brand.specialty}</td>
                        <td className="py-4 px-4 text-gray-600">{brand.founded}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 