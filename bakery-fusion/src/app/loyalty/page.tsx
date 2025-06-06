'use client';

import React, { useState } from 'react';
import { ArrowLeft, Award, Star, Gift, Crown, Zap } from 'lucide-react';
import { LOYALTY_TIERS, BRANDS } from '@/lib/data';
import Link from 'next/link';

export default function LoyaltyPage() {
  const [selectedTier, setSelectedTier] = useState<number>(0);

  const simulatedProgress = {
    currentPoints: 347,
    currentTier: 0,
    nextTierPoints: 1000,
    ordersThisMonth: 23,
    totalSpent: 25680,
    memberSince: '2023-03-15'
  };

  const tierIcons = [Award, Star, Crown, Zap];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
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
                <span className="text-sm text-gray-500 hidden sm:block font-medium">Loyalty Program</span>
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
              Unified Loyalty Program
            </h1>
            <p className="section-subtitle">
              Earn points across all 6 legendary brands and unlock exclusive benefits as you progress through our innovative tier system.
            </p>
          </div>

          {/* Current Status Dashboard */}
          <div className="feature-card p-8 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full transform translate-x-20 -translate-y-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-center mb-8">Your Loyalty Journey</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{simulatedProgress.currentPoints.toLocaleString()}</div>
                  <div className="text-gray-600 font-medium">Total Points</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-amber-600 mb-2">{simulatedProgress.ordersThisMonth}</div>
                  <div className="text-gray-600 font-medium">Orders This Month</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">¥{simulatedProgress.totalSpent.toLocaleString()}</div>
                  <div className="text-gray-600 font-medium">Total Spent</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                  <div className="text-gray-600 font-medium">Brands Tried</div>
                </div>
              </div>

              <div className="bg-white/60 p-6 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg">Current Status:</span>
                  <span 
                    className="px-4 py-2 rounded-full font-bold text-white"
                    style={{ backgroundColor: LOYALTY_TIERS[simulatedProgress.currentTier].color }}
                  >
                    {LOYALTY_TIERS[simulatedProgress.currentTier].name} Member
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress to {LOYALTY_TIERS[simulatedProgress.currentTier + 1]?.name || 'Max Level'}</span>
                    <span>{simulatedProgress.currentPoints} / {simulatedProgress.nextTierPoints} points</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className="h-4 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${(simulatedProgress.currentPoints / simulatedProgress.nextTierPoints) * 100}%`,
                        background: `linear-gradient(90deg, ${LOYALTY_TIERS[simulatedProgress.currentTier].color}dd, ${LOYALTY_TIERS[simulatedProgress.currentTier].color})`
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Only {simulatedProgress.nextTierPoints - simulatedProgress.currentPoints} points until Silver!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tier Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {LOYALTY_TIERS.map((tier, index) => {
              const IconComponent = tierIcons[index];
              const isSelected = selectedTier === index;
              
              return (
                <div 
                  key={index} 
                  className={`feature-card p-6 cursor-pointer transition-all duration-300 ${isSelected ? 'scale-105 shadow-2xl' : ''}`}
                  onClick={() => setSelectedTier(index)}
                >
                  <div className="text-center relative overflow-hidden">
                    <div 
                      className="absolute top-0 right-0 w-16 h-16 transform rotate-45 translate-x-8 -translate-y-8"
                      style={{ backgroundColor: tier.color, opacity: 0.1 }}
                    ></div>
                    
                    <div className="relative z-10">
                      <div 
                        className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white shadow-lg"
                        style={{ backgroundColor: tier.color }}
                      >
                        <IconComponent className="w-10 h-10" />
                      </div>
                      
                      <h3 className="font-bold text-2xl mb-2" style={{ color: tier.color }}>{tier.name}</h3>
                      <p className="text-gray-600 mb-4">
                        {tier.pointsRequired === 0 ? 'Starting tier' : `${tier.pointsRequired.toLocaleString()} points required`}
                      </p>
                      
                      <button 
                        className="w-full py-2 px-4 rounded-lg font-medium transition-colors"
                        style={{ 
                          backgroundColor: isSelected ? tier.color : 'transparent',
                          color: isSelected ? 'white' : tier.color,
                          border: `2px solid ${tier.color}`
                        }}
                      >
                        {isSelected ? 'Selected' : 'View Details'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Tier Details */}
          <div className="feature-card p-8 mb-16">
            <div className="text-center mb-8">
              <div 
                className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white shadow-xl"
                style={{ backgroundColor: LOYALTY_TIERS[selectedTier].color }}
              >
                {React.createElement(tierIcons[selectedTier], { className: "w-12 h-12" })}
              </div>
              <h2 className="text-4xl font-bold mb-2" style={{ color: LOYALTY_TIERS[selectedTier].color }}>
                {LOYALTY_TIERS[selectedTier].name} Tier
              </h2>
              <p className="text-xl text-gray-600">
                {LOYALTY_TIERS[selectedTier].pointsRequired === 0 
                  ? 'Welcome tier - join today!' 
                  : `Unlock at ${LOYALTY_TIERS[selectedTier].pointsRequired.toLocaleString()} points`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Exclusive Benefits</h3>
                <div className="space-y-4">
                  {LOYALTY_TIERS[selectedTier].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start p-4 bg-white/60 rounded-lg">
                      <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">How to Earn Points</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white/60 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">¥</div>
                    <div>
                      <p className="font-semibold">Regular Purchases</p>
                      <p className="text-sm text-gray-600">
                        {selectedTier === 0 ? '1 point per ¥100' : 
                         selectedTier === 1 ? '1.5 points per ¥100' :
                         selectedTier === 2 ? '2 points per ¥100' : '3 points per ¥100'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-white/60 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">🎂</div>
                    <div>
                      <p className="font-semibold">Birthday Bonus</p>
                      <p className="text-sm text-gray-600">Extra points during your birthday month</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-white/60 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">⭐</div>
                    <div>
                      <p className="font-semibold">Special Promotions</p>
                      <p className="text-sm text-gray-600">Double points during special events</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Integration */}
          <div className="feature-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Earn Points Across All Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {Object.entries(BRANDS).map(([key, brand]) => (
                <div key={key} className="text-center p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors">
                  <div 
                    className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                    style={{ backgroundColor: brand.color }}
                  >
                    {brand.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-sm mb-1">{brand.name}</h3>
                  <p className="text-xs text-gray-600">{brand.storeCount} locations</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tier Progression Timeline */}
          <div className="feature-card p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Your Path to Platinum</h2>
            <div className="relative">
              <div className="absolute left-0 right-0 top-8 h-1 bg-gradient-to-r from-amber-300 via-purple-300 to-blue-300 rounded-full"></div>
              
              <div className="flex justify-between items-center relative">
                {LOYALTY_TIERS.map((tier, index) => {
                  const IconComponent = tierIcons[index];
                  const isAchieved = simulatedProgress.currentPoints >= tier.pointsRequired;
                  const isCurrent = index === simulatedProgress.currentTier;
                  
                  return (
                    <div key={index} className="text-center relative">
                      <div 
                        className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold shadow-xl border-4 border-white ${
                          isCurrent ? 'animate-pulse' : ''
                        }`}
                        style={{ 
                          backgroundColor: isAchieved ? tier.color : '#e5e7eb',
                          opacity: isAchieved ? 1 : 0.5
                        }}
                      >
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="mt-4">
                        <h3 className="font-bold text-sm" style={{ color: isAchieved ? tier.color : '#9ca3af' }}>
                          {tier.name}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {tier.pointsRequired === 0 ? 'Start' : `${tier.pointsRequired.toLocaleString()}pts`}
                        </p>
                        {isCurrent && (
                          <div className="mt-2 bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-medium">
                            Current
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 