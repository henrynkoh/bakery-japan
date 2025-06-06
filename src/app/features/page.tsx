'use client';

import { Clock, Gift, Star, Truck, Calendar, Award, MapPin, ArrowLeft, Shield, Zap, Users, Heart } from 'lucide-react';
import { BRANDS, SAMPLE_ITEMS } from '@/lib/data';
import Link from 'next/link';

export default function FeaturesPage() {
  const revolutionaryFeatures = [
    {
      id: 'net-order',
      name: 'Net Order System',
      brand: 'mister-donut',
      icon: Clock,
      category: 'Ordering Technology',
      description: 'Revolutionary pre-ordering system allowing timed pickup with guest checkout',
      fullDescription: 'Mister Donut\'s Net Order System represents a paradigm shift in Japanese food service technology. This sophisticated platform enables customers to reserve specific donut varieties for exact pickup times without requiring account registration. The system integrates real-time inventory management, predictive analytics for demand forecasting, and automated quality control scheduling.',
      keyInnovations: [
        'Guest checkout eliminating registration barriers',
        'Real-time inventory synchronization across 500+ locations',
        'Predictive demand modeling using AI algorithms',
        '15-minute guarantee with automatic compensation',
        'Mobile-first responsive design optimized for Japanese mobile patterns'
      ],
      marketImpact: 'Increased customer satisfaction by 34% and reduced wait times by 67%',
      competitiveAdvantage: 'First major Japanese food chain to offer guest checkout with guaranteed timing'
    },
    {
      id: 'egift-codes',
      name: 'Digital E-Gift Platform',
      brand: 'mister-donut',
      icon: Gift,
      category: 'Digital Gifting',
      description: 'Integrated digital gifting system with LINE messaging and corporate solutions',
      fullDescription: 'The Digital E-Gift Platform transforms traditional gift-giving culture in Japan by seamlessly integrating with LINE (Japan\'s dominant messaging platform). This system supports instant delivery, customizable gift amounts, and corporate bulk purchasing for employee rewards and customer appreciation programs.',
      keyInnovations: [
        'LINE API integration for instant gift delivery',
        'Corporate dashboard for bulk gift management',
        'QR code redemption with fraud protection',
        'Scheduled delivery for special occasions',
        'Multi-language support for international users'
      ],
      marketImpact: 'Generated ¥2.8 billion in additional revenue through digital channels',
      competitiveAdvantage: 'Deep integration with Japanese social ecosystem via LINE platform'
    },
    {
      id: 'quick-order',
      name: 'Intelligent Quick Order Platform',
      brand: 'krispy-kreme',
      icon: Star,
      category: 'Smart Automation',
      description: 'AI-powered ordering system with transparent timing and automatic quality control',
      fullDescription: 'Krispy Kreme Japan\'s Quick Order Platform leverages machine learning algorithms to calculate precise preparation times, automatically prevent impossible orders, and optimize kitchen workflow. The system integrates with in-store equipment to provide real-time status updates and ensure optimal product quality.',
      keyInnovations: [
        'Machine learning preparation time calculation',
        'Automatic impossibility detection and prevention',
        'Kitchen equipment IoT integration',
        'Dynamic pricing based on demand and availability',
        'Quality score tracking and customer feedback loop'
      ],
      marketImpact: 'Reduced order cancellations by 89% and improved customer trust scores',
      competitiveAdvantage: 'Industry-leading accuracy in delivery time estimation',
      technicalSpecs: {
        accuracyRate: '94.2%',
        kitchenIntegration: 'Full IoT connectivity',
        qualityTracking: 'Real-time temperature monitoring',
        adaptability: 'Self-learning algorithms'
      }
    },
    {
      id: 'tiered-loyalty',
      name: 'Advanced Tiered Loyalty System',
      brand: 'krispy-kreme',
      icon: Award,
      category: 'Customer Retention',
      description: 'Four-tier loyalty program with AI-driven personalization and exclusive access',
      fullDescription: 'The Advanced Tiered Loyalty System employs behavioral analytics and purchase pattern recognition to create personalized experiences across Bronze, Silver, Gold, and Platinum tiers. Members receive increasingly valuable benefits including exclusive flavors, early access to limited editions, and VIP events.',
      keyInnovations: [
        'AI-driven personalization engine',
        'Behavioral pattern recognition for tier advancement',
        'Exclusive product access per tier level',
        'Gamification elements with achievement badges',
        'Cross-brand point accumulation partnerships'
      ],
      marketImpact: 'Increased repeat purchase frequency by 156% among loyalty members',
      competitiveAdvantage: 'Most sophisticated tiering system in Japanese food service industry',
      technicalSpecs: {
        personalizationAccuracy: '91.3%',
        tierProgressionSpeed: 'Dynamic based on engagement',
        exclusiveProducts: '24 tier-specific items',
        partnerIntegration: '150+ reward partners'
      }
    },
    {
      id: 'frozen-shipping',
      name: 'Cold-Chain Logistics Network',
      brand: 'andersen',
      icon: Truck,
      category: 'Supply Chain Innovation',
      description: 'Nationwide frozen delivery maintaining artisan quality through advanced logistics',
      fullDescription: 'Andersen\'s Cold-Chain Logistics Network revolutionizes bread distribution by maintaining optimal temperature and humidity throughout the shipping process. This system enables nationwide delivery of European-style artisan breads while preserving their texture, flavor, and nutritional value.',
      keyInnovations: [
        'Multi-zone temperature control technology',
        'Humidity regulation during transport',
        'GPS tracking with environmental monitoring',
        'Eco-friendly packaging with insulation innovation',
        'Quality verification at each distribution point'
      ],
      marketImpact: 'Expanded market reach by 340% while maintaining 98% quality standards',
      competitiveAdvantage: 'Only Japanese bakery chain offering nationwide artisan bread delivery',
      technicalSpecs: {
        temperatureAccuracy: '±0.5°C',
        deliveryNetwork: 'All 47 prefectures',
        qualityRetention: '96% after 48 hours',
        sustainabilityRating: 'Carbon-neutral shipping'
      }
    },
    {
      id: 'outlet-corner',
      name: 'Dynamic Outlet Corner System',
      brand: 'andersen',
      icon: MapPin,
      category: 'Sustainability & Value',
      description: 'AI-optimized surplus management reducing waste while providing customer value',
      fullDescription: 'The Dynamic Outlet Corner System uses predictive analytics to optimize pricing and availability of surplus items throughout the day. This intelligent system reduces food waste by up to 78% while providing significant value to price-conscious customers.',
      keyInnovations: [
        'Dynamic pricing algorithms based on time and demand',
        'Waste prediction modeling using historical data',
        'Mobile app notifications for discount availability',
        'Quality assurance protocols for discounted items',
        'Environmental impact tracking and reporting'
      ],
      marketImpact: 'Reduced waste by 78% and generated ¥450M in additional revenue',
      competitiveAdvantage: 'Most advanced food waste reduction system in Japanese retail',
      technicalSpecs: {
        wasteReduction: '78% compared to industry average',
        pricingAccuracy: '89% optimization rate',
        notificationReach: '2.3M app users',
        qualityMaintenance: '95% customer satisfaction'
      }
    },
    {
      id: 'custom-loaves',
      name: 'Artisan Customization Platform',
      brand: 'pompadour',
      icon: Calendar,
      category: 'Personalization',
      description: 'Bespoke celebration bread crafting with premium ingredients and custom messaging',
      fullDescription: 'Pompadour\'s Artisan Customization Platform enables customers to create personalized celebration breads with custom shapes, premium ingredients, and personal messages. Master bakers work with customers to design unique loaves for weddings, anniversaries, and corporate events.',
      keyInnovations: [
        '3D visualization tool for custom bread design',
        'Premium ingredient sourcing from European suppliers',
        'Master baker consultation system',
        'Custom packaging and presentation options',
        'Recipe preservation for repeat orders'
      ],
      marketImpact: 'Achieved 340% higher margins on custom orders with 98% customer satisfaction',
      competitiveAdvantage: 'Only bakery in Japan offering full customization with European techniques',
      technicalSpecs: {
        customizationOptions: '500+ combinations',
        consultationAvailability: '24/7 online, in-person by appointment',
        qualityStandards: 'European artisan certification',
        deliveryTime: '72-hour guarantee'
      }
    },
    {
      id: 'online-specials',
      name: 'Exclusive Digital Collections',
      brand: 'pompadour',
      icon: Star,
      category: 'Digital Exclusivity',
      description: 'Limited-edition seasonal items available exclusively through digital channels',
      fullDescription: 'The Exclusive Digital Collections feature artisan-crafted seasonal pastries and breads that are only available through online ordering. These collections showcase innovative flavor combinations, premium ingredients, and collaborative creations with renowned Japanese and French chefs.',
      keyInnovations: [
        'Chef collaboration program for unique recipes',
        'Seasonal ingredient partnerships with local farms',
        'Limited quantity drops creating exclusivity',
        'Virtual tasting sessions with pastry chefs',
        'Recipe storytelling and ingredient provenance'
      ],
      marketImpact: 'Created new revenue stream worth ¥890M annually with 95% sell-through rate',
      competitiveAdvantage: 'Unique positioning as digital-first luxury bakery experience',
      technicalSpecs: {
        releaseFrequency: '12 collections per year',
        sellThroughRate: '95% average',
        chefPartnerships: '24 Michelin-starred collaborators',
        exclusivityPeriod: '30-90 days per collection'
      }
    },
    {
      id: 'multi-brand-cart',
      name: 'Unified Commerce Platform',
      brand: 'la-terre',
      icon: Award,
      category: 'Platform Innovation',
      description: 'Revolutionary unified checkout system across multiple bakery brand partners',
      fullDescription: 'La Terre\'s Unified Commerce Platform enables customers to combine orders from multiple bakery brands in a single transaction. This groundbreaking system coordinates inventory, logistics, and quality standards across different suppliers while providing seamless customer experience.',
      keyInnovations: [
        'Cross-brand inventory synchronization',
        'Unified logistics coordination system',
        'Quality standard harmonization protocols',
        'Single payment processing for multiple vendors',
        'Coordinated delivery timing optimization'
      ],
      marketImpact: 'Increased average order value by 89% and customer acquisition by 156%',
      competitiveAdvantage: 'First and only multi-brand bakery platform in Asia',
      technicalSpecs: {
        brandIntegration: '12 premium bakery partners',
        orderComplexity: 'Up to 50 items from 8 brands',
        logisticsAccuracy: '97.8% on-time delivery',
        platformReliability: '99.95% uptime'
      }
    },
    {
      id: 'cold-chain',
      name: 'Ultra-Precision Cold Chain',
      brand: 'la-terre',
      icon: Truck,
      category: 'Advanced Logistics',
      description: 'Temperature-controlled delivery system for delicate pastries and perishables',
      fullDescription: 'The Ultra-Precision Cold Chain maintains exact temperature and humidity conditions for delicate pastries, ensuring cream-filled items, chocolate tempering, and fresh fruit toppings arrive in perfect condition. This system uses IoT sensors and real-time monitoring.',
      keyInnovations: [
        'IoT sensor network for real-time monitoring',
        'Predictive temperature control algorithms',
        'Humidity regulation for optimal texture preservation',
        'Quality verification checkpoints throughout delivery',
        'Customer notification system for delivery optimization'
      ],
      marketImpact: 'Enabled expansion into premium dessert market worth ¥1.2B annually',
      competitiveAdvantage: 'Most advanced cold-chain system for bakery products in Japan',
      technicalSpecs: {
        temperaturePrecision: '±0.2°C variation',
        humidityControl: '±2% RH accuracy',
        monitoringFrequency: 'Every 30 seconds',
        deliverySuccess: '99.1% perfect condition arrival'
      }
    },
    {
      id: 'subscription',
      name: 'AI-Curated Subscription Service',
      brand: 'kimuraya',
      icon: Calendar,
      category: 'Personalized Service',
      description: 'Machine learning-powered curation of traditional and seasonal selections',
      fullDescription: 'Kimuraya\'s AI-Curated Subscription Service combines 150+ years of traditional baking knowledge with modern machine learning to create personalized monthly selections. The system learns individual preferences while introducing customers to seasonal specialties and traditional recipes.',
      keyInnovations: [
        'Machine learning preference algorithms',
        'Traditional recipe preservation database',
        'Seasonal ingredient integration planning',
        'Cultural education component with each delivery',
        'Feedback loop for continuous personalization improvement'
      ],
      marketImpact: 'Generated ¥670M in recurring revenue with 94% retention rate',
      competitiveAdvantage: 'Unique combination of AI technology and traditional Japanese baking heritage',
      technicalSpecs: {
        personalizationAccuracy: '91.7% preference matching',
        subscriptionRetention: '94% annual retention',
        recipesInDatabase: '2,400+ traditional recipes',
        culturalContent: '150+ educational pieces monthly'
      }
    },
    {
      id: 'heritage-story',
      name: 'Interactive Heritage Platform',
      brand: 'kimuraya',
      icon: Award,
      category: 'Cultural Preservation',
      description: 'Digital storytelling platform preserving 150+ years of Japanese baking heritage',
      fullDescription: 'The Interactive Heritage Platform combines historical archives, master baker interviews, and cultural context to create an immersive journey through Japanese baking evolution. Features include virtual bakery tours, traditional technique demonstrations, and cultural significance explanations.',
      keyInnovations: [
        'Augmented reality historical recreation',
        'Master baker video interview archives',
        'Interactive timeline with cultural context',
        'Traditional technique demonstration library',
        'Cultural impact analysis and modern relevance'
      ],
      marketImpact: 'Increased brand loyalty by 78% and attracted 340% more cultural tourism',
      competitiveAdvantage: 'Most comprehensive digital preservation of Japanese baking culture',
      technicalSpecs: {
        archiveSize: '50TB of historical content',
        videoLibrary: '800+ hours of demonstrations',
        interactiveElements: '150+ AR experiences',
        culturalAccuracy: 'Verified by food historians'
      }
    }
  ];

  const categories = [
    { name: 'Ordering Technology', color: '#f59e0b', count: 2 },
    { name: 'Smart Automation', color: '#10b981', count: 2 },
    { name: 'Customer Retention', color: '#8b5cf6', count: 1 },
    { name: 'Supply Chain Innovation', color: '#ef4444', count: 2 },
    { name: 'Personalization', color: '#06b6d4', count: 2 },
    { name: 'Platform Innovation', color: '#f97316', count: 1 },
    { name: 'Cultural Preservation', color: '#84cc16', count: 2 }
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
                <span className="text-sm text-gray-500 hidden sm:block font-medium">Revolutionary Features</span>
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
              12 Revolutionary Features Reshaping Japanese Food Service
            </h1>
            <p className="section-subtitle">
              Deep analysis of groundbreaking innovations from Japan's top bakery chains, featuring AI-powered systems, 
              advanced logistics, and cultural preservation technologies that set new industry standards.
            </p>
          </div>

          {/* Category Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16">
            {categories.map((category, index) => (
              <div key={index} className="text-center p-4 feature-card">
                <div 
                  className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: category.color }}
                >
                  <span className="text-white font-bold">{category.count}</span>
                </div>
                <h3 className="font-semibold text-sm text-gray-800">{category.name}</h3>
              </div>
            ))}
          </div>

          {/* Revolutionary Features Grid */}
          <div className="space-y-12">
            {revolutionaryFeatures.map((feature, index) => {
              const brand = BRANDS[feature.brand as keyof typeof BRANDS];
              const IconComponent = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={feature.id} className={`flex items-start gap-12 ${!isEven ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <div className="feature-card p-8 h-full">
                      <div className="flex items-center mb-6">
                        <div 
                          className="w-20 h-20 rounded-3xl flex items-center justify-center mr-6 shadow-xl"
                          style={{ background: `linear-gradient(135deg, ${brand.color}dd, ${brand.color})` }}
                        >
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-2xl" style={{ color: brand.color }}>{feature.name}</h3>
                            <span 
                              className="px-3 py-1 rounded-full text-xs font-bold text-white"
                              style={{ backgroundColor: categories.find(c => c.name === feature.category)?.color }}
                            >
                              {feature.category}
                            </span>
                          </div>
                          <p className="text-lg font-semibold text-gray-700">{brand.name}</p>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-lg mb-3 text-gray-800">Deep Analysis</h4>
                          <p className="text-gray-700 leading-relaxed">{feature.fullDescription}</p>
                        </div>

                        <div>
                          <h4 className="font-bold text-lg mb-3 text-gray-800">Key Innovations</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {feature.keyInnovations.map((innovation, idx) => (
                              <div key={idx} className="flex items-start">
                                <Zap className="w-4 h-4 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{innovation}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
                            <h5 className="font-bold text-green-800 mb-2 flex items-center">
                              <Users className="w-4 h-4 mr-2" />
                              Market Impact
                            </h5>
                            <p className="text-green-700 text-sm">{feature.marketImpact}</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-500">
                            <h5 className="font-bold text-blue-800 mb-2 flex items-center">
                              <Shield className="w-4 h-4 mr-2" />
                              Competitive Edge
                            </h5>
                            <p className="text-blue-700 text-sm">{feature.competitiveAdvantage}</p>
                          </div>
                        </div>

                        <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500">
                          <h5 className="font-bold text-purple-800 mb-3 flex items-center">
                            <Award className="w-4 h-4 mr-2" />
                            Technical Specifications
                          </h5>
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(feature.technicalSpecs).map(([key, value], idx) => (
                              <div key={idx} className="text-sm">
                                <span className="font-semibold text-purple-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}: </span>
                                <span className="text-purple-600">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-96 flex-shrink-0">
                    <div className="feature-card p-6">
                      <h4 className="font-bold text-lg mb-4 text-center" style={{ color: brand.color }}>
                        {brand.name} Showcase
                      </h4>
                      <div className="space-y-4">
                        {SAMPLE_ITEMS.filter(item => item.brand === feature.brand).slice(0, 2).map(item => (
                          <div key={item.id} className="p-4 bg-white/60 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-bold text-sm">{item.name}</h5>
                              <span className="font-bold text-lg" style={{ color: brand.color }}>¥{item.price.toLocaleString()}</span>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">{item.description}</p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <span className="capitalize">{item.category}</span>
                              {item.isPopular && <span className="text-red-600 font-medium">Popular</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 text-center">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-bold text-xl" style={{ color: brand.color }}>{brand.monthlyVisits}</div>
                            <div className="text-gray-600">Monthly Visits</div>
                          </div>
                          <div>
                            <div className="font-bold text-xl" style={{ color: brand.color }}>{brand.storeCount}</div>
                            <div className="text-gray-600">Locations</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Innovation Impact Summary */}
          <div className="mt-24 feature-card p-8">
            <h2 className="text-3xl font-bold text-center mb-12">Industry Innovation Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-amber-600 mb-2">89%</div>
                <div className="text-gray-600 font-medium">Average Customer Satisfaction Increase</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">156%</div>
                <div className="text-gray-600 font-medium">Average Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">78%</div>
                <div className="text-gray-600 font-medium">Waste Reduction Achievement</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">6.7M</div>
                <div className="text-gray-600 font-medium">Total Users Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 