'use client';

import React, { useState } from 'react';
import { ArrowLeft, Award, Star, Gift, Crown, Zap, TrendingUp, Users, Heart } from 'lucide-react';
import { BRANDS, LOYALTY_TIERS } from '@/lib/data';
import Link from 'next/link';

export default function LoyaltyPage() {
  const [selectedTier, setSelectedTier] = useState('bronze');
  const [userPoints, setUserPoints] = useState(2400);

  const loyaltyInnovations = [
    {
      brand: 'krispy-kreme',
      innovation: 'AI-Driven Personalization Engine',
      description: 'Machine learning algorithms analyze purchase patterns, seasonal preferences, and location data to create hyper-personalized reward experiences',
      impact: 'Increased engagement by 234% and tier advancement speed by 89%',
      technology: 'Neural networks with real-time adaptation'
    },
    {
      brand: 'mister-donut',
      innovation: 'Gamified Achievement System',
      description: 'Badge collection, streak rewards, and seasonal challenges that turn purchasing into an engaging game experience',
      impact: 'Boosted repeat visits by 156% and social sharing by 203%',
      technology: 'Progressive reward algorithms with social integration'
    },
    {
      brand: 'la-terre',
      innovation: 'Cross-Brand Point Accumulation',
      description: 'Revolutionary unified system allowing point earning across multiple partner bakeries and redemption flexibility',
      impact: 'Expanded customer lifetime value by 287% through ecosystem approach',
      technology: 'Blockchain-based point tracking with smart contracts'
    },
    {
      brand: 'pompadour',
      innovation: 'Exclusive Access Hierarchy',
      description: 'Tiered access to limited-edition products, master class workshops, and private tasting events',
      impact: 'Premium tier retention rate of 94% with 340% higher spending',
      technology: 'Behavioral prediction with inventory integration'
    },
    {
      brand: 'kimuraya',
      innovation: 'Heritage Learning Rewards',
      description: 'Points earned through cultural engagement - learning about bread history, participating in traditional workshops',
      impact: 'Created new engagement channel worth ¥450M annually',
      technology: 'Interactive content platform with progress tracking'
    },
    {
      brand: 'andersen',
      innovation: 'Artisan Mentorship Program',
      description: 'Top-tier members gain access to exclusive workshops with master bakers and European technique training',
      impact: 'Highest tier customer lifetime value exceeds ¥2.3M per member',
      technology: 'Skill tracking with master baker scheduling systems'
    }
  ];

  const tierBenefits = {
    bronze: {
      pointsRequired: 0,
      color: '#CD7F32',
      benefits: [
        '1 point per ¥100 spent',
        'Birthday bonus: 100 points',
        'Basic seasonal offers',
        'Email newsletters'
      ],
      exclusives: ['Welcome gift worth ¥500'],
      nextTier: 'silver',
      pointsToNext: 1000
    },
    silver: {
      pointsRequired: 1000,
      color: '#C0C0C0',
      benefits: [
        '1.5 points per ¥100 spent',
        'Birthday bonus: 200 points',
        'Priority customer service',
        'Advanced seasonal previews',
        'Free item on anniversary'
      ],
      exclusives: ['Silver member exclusive items', 'Early access to limited editions'],
      nextTier: 'gold',
      pointsToNext: 4000
    },
    gold: {
      pointsRequired: 5000,
      color: '#FFD700',
      benefits: [
        '2 points per ¥100 spent',
        'Birthday bonus: 500 points',
        'VIP customer service line',
        'Exclusive seasonal collections',
        'Free monthly featured item',
        'Workshop invitations'
      ],
      exclusives: ['Gold tier secret menu', 'Custom product consultations', 'Master baker meet & greets'],
      nextTier: 'platinum',
      pointsToNext: 10000
    },
    platinum: {
      pointsRequired: 15000,
      color: '#E5E4E2',
      benefits: [
        '3 points per ¥100 spent',
        'Birthday bonus: 1000 points',
        'Dedicated account manager',
        'First access to all limited editions',
        'Quarterly luxury gift box',
        'Exclusive event invitations',
        'Artisan workshop priority'
      ],
      exclusives: [
        'Platinum-only products designed by master bakers',
        'Private bakery tours with tastings',
        'Annual European technique workshop access',
        'Custom celebration cake design service'
      ],
      nextTier: null,
      pointsToNext: null
    }
  };

  const getCurrentTier = () => {
    if (userPoints >= 15000) return 'platinum';
    if (userPoints >= 5000) return 'gold';
    if (userPoints >= 1000) return 'silver';
    return 'bronze';
  };

  const getProgressToNextTier = () => {
    const currentTierKey = getCurrentTier();
    const currentTier = tierBenefits[currentTierKey as keyof typeof tierBenefits];
    
    if (!currentTier.nextTier) return 100;
    
    const nextTierKey = currentTier.nextTier;
    const nextTier = tierBenefits[nextTierKey as keyof typeof tierBenefits];
    const progress = ((userPoints - currentTier.pointsRequired) / (nextTier.pointsRequired - currentTier.pointsRequired)) * 100;
    
    return Math.min(progress, 100);
  };

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
                <span className="text-sm text-gray-500 hidden sm:block font-medium">Loyalty Revolution</span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Loyalty Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="section-title">
              Revolutionary Loyalty System: Beyond Points & Rewards
            </h1>
            <p className="section-subtitle">
              Experience Japan's most advanced loyalty ecosystem featuring AI personalization, cross-brand integration, 
              cultural education rewards, and exclusive access to master artisan experiences.
            </p>
          </div>

          {/* User Progress Simulation */}
          <div className="feature-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Your Loyalty Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold" style={{ color: tierBenefits[getCurrentTier() as keyof typeof tierBenefits].color }}>
                    {getCurrentTier().toUpperCase()} MEMBER
                  </h3>
                  <p className="text-gray-600">Current Points: <span className="font-bold text-2xl text-amber-600">{userPoints.toLocaleString()}</span></p>
                </div>
                <div className="text-right">
                  {tierBenefits[getCurrentTier() as keyof typeof tierBenefits].nextTier && (
                    <div>
                      <p className="text-gray-600">Points to {tierBenefits[getCurrentTier() as keyof typeof tierBenefits].nextTier?.toUpperCase()}</p>
                      <p className="text-2xl font-bold text-green-600">
                        {(tierBenefits[tierBenefits[getCurrentTier() as keyof typeof tierBenefits].nextTier as keyof typeof tierBenefits].pointsRequired - userPoints).toLocaleString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative mb-8">
                <div className="flex justify-between items-center mb-2">
                  {Object.entries(tierBenefits).map(([tierKey, tier]) => (
                    <div key={tierKey} className="text-center flex-1">
                      <div 
                        className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-sm ${
                          userPoints >= tier.pointsRequired ? 'shadow-lg' : 'opacity-30'
                        }`}
                        style={{ backgroundColor: tier.color }}
                      >
                        {tierKey === 'bronze' && '🥉'}
                        {tierKey === 'silver' && '🥈'}
                        {tierKey === 'gold' && '🥇'}
                        {tierKey === 'platinum' && '💎'}
                      </div>
                      <p className={`text-xs font-semibold ${userPoints >= tier.pointsRequired ? 'text-gray-800' : 'text-gray-400'}`}>
                        {tierKey.toUpperCase()}
                      </p>
                      <p className={`text-xs ${userPoints >= tier.pointsRequired ? 'text-gray-600' : 'text-gray-400'}`}>
                        {tier.pointsRequired.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 relative overflow-hidden">
                  <div 
                    className="h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-700"
                    style={{ width: `${getProgressToNextTier()}%` }}
                  ></div>
                </div>
              </div>

              {/* Point Adjustment Controls */}
              <div className="flex justify-center space-x-4 mb-8">
                <button 
                  onClick={() => setUserPoints(Math.max(0, userPoints - 500))}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  -500 Points
                </button>
                <button 
                  onClick={() => setUserPoints(userPoints + 500)}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  +500 Points
                </button>
                <button 
                  onClick={() => setUserPoints(userPoints + 2000)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  +2000 Points
                </button>
              </div>
            </div>
          </div>

          {/* Tier Benefits Details */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Tier Benefits & Exclusive Access</h2>
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2 bg-white/50 p-2 rounded-xl">
                {Object.entries(tierBenefits).map(([tierKey, tier]) => (
                  <button
                    key={tierKey}
                    onClick={() => setSelectedTier(tierKey)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      selectedTier === tierKey 
                        ? 'text-white shadow-lg transform scale-105' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                    style={{ 
                      backgroundColor: selectedTier === tierKey ? tier.color : 'transparent'
                    }}
                  >
                    {tierKey.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="feature-card p-8">
              {Object.entries(tierBenefits).map(([tierKey, tier]) => (
                selectedTier === tierKey && (
                  <div key={tierKey} className="animate-fade-in-up">
                    <div className="flex items-center justify-center mb-8">
                      <div 
                        className="w-20 h-20 rounded-3xl flex items-center justify-center text-white text-3xl shadow-xl mr-6"
                        style={{ backgroundColor: tier.color }}
                      >
                        {tierKey === 'bronze' && '🥉'}
                        {tierKey === 'silver' && '🥈'}
                        {tierKey === 'gold' && '🥇'}
                        {tierKey === 'platinum' && '💎'}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold" style={{ color: tier.color }}>
                          {tierKey.toUpperCase()} TIER
                        </h3>
                        <p className="text-gray-600">
                          {tier.pointsRequired.toLocaleString()} points required
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-xl mb-4 flex items-center">
                          <Star className="w-5 h-5 mr-2" style={{ color: tier.color }} />
                          Standard Benefits
                        </h4>
                        <div className="space-y-3">
                          {tier.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start">
                              <Zap className="w-4 h-4 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-xl mb-4 flex items-center">
                          <Crown className="w-5 h-5 mr-2" style={{ color: tier.color }} />
                          Exclusive Access
                        </h4>
                        <div className="space-y-3">
                          {tier.exclusives.map((exclusive, idx) => (
                            <div key={idx} className="flex items-start">
                              <Gift className="w-4 h-4 mr-3 mt-1 flex-shrink-0" style={{ color: tier.color }} />
                              <span className="text-gray-700">{exclusive}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {tier.nextTier && (
                      <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
                        <h5 className="font-bold text-green-800 mb-2">Next Tier: {tier.nextTier.toUpperCase()}</h5>
                        <p className="text-green-700">
                          Earn {(tierBenefits[tier.nextTier as keyof typeof tierBenefits].pointsRequired - tier.pointsRequired).toLocaleString()} more points to unlock exclusive {tier.nextTier} benefits!
                        </p>
                      </div>
                    )}
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Loyalty Innovations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Revolutionary Loyalty Innovations</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {loyaltyInnovations.map((innovation, index) => {
                const brand = BRANDS[innovation.brand as keyof typeof BRANDS];
                
                return (
                  <div key={index} className="feature-card p-6">
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4"
                        style={{ backgroundColor: brand.color }}
                      >
                        {brand.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg" style={{ color: brand.color }}>
                          {innovation.innovation}
                        </h3>
                        <p className="text-gray-600 text-sm">{brand.name}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{innovation.description}</p>

                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
                        <h5 className="font-bold text-green-800 mb-1 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Business Impact
                        </h5>
                        <p className="text-green-700 text-sm">{innovation.impact}</p>
                      </div>
                      
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-500">
                        <h5 className="font-bold text-blue-800 mb-1 flex items-center">
                          <Zap className="w-4 h-4 mr-2" />
                          Technology Stack
                        </h5>
                        <p className="text-blue-700 text-sm">{innovation.technology}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Loyalty Impact Statistics */}
          <div className="feature-card p-8">
            <h2 className="text-3xl font-bold text-center mb-12">Loyalty Program Impact Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">6.7M</div>
                <div className="text-gray-600 font-medium">Active Loyalty Members</div>
                <div className="text-sm text-gray-500 mt-1">Across all 6 brands</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">156%</div>
                <div className="text-gray-600 font-medium">Average Repeat Visit Increase</div>
                <div className="text-sm text-gray-500 mt-1">Vs non-members</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
                <div className="text-gray-600 font-medium">Premium Tier Retention Rate</div>
                <div className="text-sm text-gray-500 mt-1">Gold & Platinum combined</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-amber-600 mb-2">¥4.2B</div>
                <div className="text-gray-600 font-medium">Annual Loyalty Revenue</div>
                <div className="text-sm text-gray-500 mt-1">Member-driven sales</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 