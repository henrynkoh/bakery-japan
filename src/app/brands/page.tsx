'use client';

import { useState } from 'react';
import { ArrowLeft, Star, MapPin, Clock, Users, TrendingUp, Award, Target } from 'lucide-react';
import { BRANDS, SAMPLE_ITEMS } from '@/lib/data';
import Link from 'next/link';

export default function BrandsPage() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const brandAnalysis = {
    'mister-donut': {
      founded: 1971,
      marketPosition: 'Market Leader',
      uniqueValue: 'American-inspired donuts adapted for Japanese taste preferences',
      culturalImpact: 'Introduced donut culture to Japan and became synonymous with casual indulgence',
      innovations: ['Pon de Ring texture innovation', 'Seasonal flavor strategy', 'Character collaborations'],
      targetDemographic: 'Families, children, and young adults seeking affordable treats',
      businessModel: 'High-volume, low-margin with consistent quality and wide accessibility',
      futureStrategy: 'Digital transformation and premium product line expansion',
      competitiveEdge: 'Unmatched brand recognition and distribution network in Japan'
    },
    'krispy-kreme': {
      founded: 2006,
      marketPosition: 'Premium American Brand',
      uniqueValue: 'Authentic American donut experience with Japanese service standards',
      culturalImpact: 'Elevated donuts from casual snack to premium indulgence experience',
      innovations: ['Hot & Fresh concept', 'Glazed donut perfection', 'Experience-focused retail'],
      targetDemographic: 'Urban professionals and premium-conscious consumers',
      businessModel: 'Premium positioning with focus on experience and quality',
      futureStrategy: 'Subscription services and limited-edition collaborations',
      competitiveEdge: 'Authentic American heritage with Japanese operational excellence'
    },
    'andersen': {
      founded: 1948,
      marketPosition: 'European Heritage Leader',
      uniqueValue: 'Authentic European bread-making techniques and premium ingredients',
      culturalImpact: 'Introduced artisan bread culture and elevated Japanese baking standards',
      innovations: ['Frozen distribution technology', 'European technique mastery', 'Premium positioning'],
      targetDemographic: 'Affluent consumers seeking authentic European bakery experience',
      businessModel: 'Premium artisan products with nationwide distribution capability',
      futureStrategy: 'Sustainability leadership and artisan technique preservation',
      competitiveEdge: 'Unparalleled European authenticity and craftsmanship legacy'
    },
    'pompadour': {
      founded: 1969,
      marketPosition: 'French Luxury Specialist',
      uniqueValue: 'Authentic French pastry techniques with Japanese precision and service',
      culturalImpact: 'Elevated pastry appreciation and introduced French culinary culture',
      innovations: ['Custom celebration products', 'French technique mastery', 'Luxury positioning'],
      targetDemographic: 'High-income consumers and special occasion purchasers',
      businessModel: 'Ultra-premium with focus on craftsmanship and exclusivity',
      futureStrategy: 'Personalization technology and master artisan program expansion',
      competitiveEdge: 'Authentic French heritage with uncompromising quality standards'
    },
    'la-terre': {
      founded: 1999,
      marketPosition: 'Multi-Brand Platform Innovator',
      uniqueValue: 'Unified platform connecting multiple premium bakery brands',
      culturalImpact: 'Revolutionized bakery retail through platform innovation',
      innovations: ['Multi-brand platform', 'Cold-chain logistics', 'Technology integration'],
      targetDemographic: 'Tech-savvy consumers seeking convenience and variety',
      businessModel: 'Platform-based with technology-driven efficiency and scale',
      futureStrategy: 'AI-powered personalization and ecosystem expansion',
      competitiveEdge: 'First-mover advantage in multi-brand bakery platform space'
    },
    'kimuraya': {
      founded: 1869,
      marketPosition: 'Historical Heritage Brand',
      uniqueValue: '150+ years of traditional Japanese baking innovation and cultural significance',
      culturalImpact: 'Created anpan and bridged Western and Japanese culinary traditions',
      innovations: ['Anpan invention', 'Cultural bridge-building', 'Heritage preservation'],
      targetDemographic: 'Culture-conscious consumers and tradition appreciators',
      businessModel: 'Heritage-based premium positioning with cultural education',
      futureStrategy: 'Digital heritage preservation and cultural tourism integration',
      competitiveEdge: 'Unmatched historical significance and cultural authenticity'
    }
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
                <span className="text-sm text-gray-500 hidden sm:block font-medium">Brand Analysis</span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Brands Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="section-title">
              6 Legendary Japanese Bakery Brands
            </h1>
            <p className="section-subtitle">
              Comprehensive analysis of Japan's most influential bakery chains, from 150-year heritage to cutting-edge innovation, 
              examining their market positions, cultural impact, and strategic advantages.
            </p>
          </div>

          {/* Brand Overview Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {Object.entries(BRANDS).map(([key, brand]) => {
              const analysis = brandAnalysis[key as keyof typeof brandAnalysis];
              const isSelected = selectedBrand === key;
              
              return (
                <div 
                  key={key} 
                  className={`feature-card p-8 cursor-pointer transition-all duration-300 ${isSelected ? 'ring-4 ring-opacity-50' : ''}`}
                  style={{ ringColor: isSelected ? brand.color : 'transparent' }}
                  onClick={() => setSelectedBrand(isSelected ? null : key)}
                >
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-20 h-20 rounded-3xl flex items-center justify-center mr-6 text-white font-bold text-3xl shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${brand.color}dd, ${brand.color})` }}
                    >
                      {brand.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-2xl mb-1" style={{ color: brand.color }}>{brand.name}</h3>
                      <p className="text-lg font-semibold text-gray-700">{analysis.marketPosition}</p>
                      <p className="text-sm text-gray-500">Founded {analysis.founded}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Unique Value Proposition</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{analysis.uniqueValue}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Cultural Impact</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{analysis.culturalImpact}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Key Innovations</h4>
                      <div className="space-y-1">
                        {analysis.innovations.map((innovation, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: brand.color }}></div>
                            {innovation}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center p-3 bg-white/50 rounded-xl">
                        <TrendingUp className="w-6 h-6 mx-auto mb-2" style={{ color: brand.color }} />
                        <div className="text-xs text-gray-600">Market Position</div>
                        <div className="font-bold text-sm" style={{ color: brand.color }}>{analysis.marketPosition}</div>
                      </div>
                      <div className="text-center p-3 bg-white/50 rounded-xl">
                        <Target className="w-6 h-6 mx-auto mb-2" style={{ color: brand.color }} />
                        <div className="text-xs text-gray-600">Heritage</div>
                        <div className="font-bold text-sm" style={{ color: brand.color }}>{2024 - analysis.founded} years</div>
                      </div>
                    </div>

                    <button 
                      className="w-full py-3 px-4 rounded-lg font-medium transition-colors text-white"
                      style={{ backgroundColor: brand.color }}
                    >
                      {isSelected ? 'Hide Deep Analysis' : 'View Deep Analysis'}
                    </button>

                    {isSelected && (
                      <div className="mt-6 space-y-6 animate-fade-in-up">
                        <div className="p-6 bg-white/60 rounded-xl border-l-4" style={{ borderColor: brand.color }}>
                          <h4 className="font-bold text-xl mb-4" style={{ color: brand.color }}>Strategic Analysis</h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-semibold text-gray-800 mb-2">Target Demographics</h5>
                              <p className="text-gray-700 text-sm">{analysis.targetDemographic}</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-800 mb-2">Business Model</h5>
                              <p className="text-gray-700 text-sm">{analysis.businessModel}</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-800 mb-2">Future Strategy</h5>
                              <p className="text-gray-700 text-sm">{analysis.futureStrategy}</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-800 mb-2">Competitive Edge</h5>
                              <p className="text-gray-700 text-sm">{analysis.competitiveEdge}</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-white/60 rounded-xl">
                          <h4 className="font-bold text-xl mb-4" style={{ color: brand.color }}>Signature Products</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {SAMPLE_ITEMS.filter(item => item.brand === key).slice(0, 4).map(item => (
                              <div key={item.id} className="p-4 bg-white/80 rounded-lg">
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-bold">{item.name}</h5>
                                  <span className="font-bold text-lg" style={{ color: brand.color }}>¥{item.price.toLocaleString()}</span>
                                </div>
                                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                                <div className="flex justify-between items-center text-xs text-gray-500">
                                  <span className="capitalize">{item.category}</span>
                                  <div className="flex space-x-2">
                                    {item.tags.slice(0, 2).map((tag, tagIdx) => (
                                      <span key={tagIdx} className="px-2 py-1 bg-gray-100 rounded-full">{tag}</span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Market Analysis */}
          <div className="feature-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Market Dynamics & Competitive Landscape</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Market Segmentation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Premium (Andersen, Pompadour), Mass Market (Mister Donut), Technology-First (La Terre), 
                  Heritage (Kimuraya), and International Premium (Krispy Kreme) segments each serve distinct consumer needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Growth Drivers</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Digital transformation, premiumization trends, convenience demand, cultural tourism, 
                  and health-conscious innovations are reshaping the Japanese bakery landscape.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation Focus</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  AI-powered personalization, sustainable practices, cultural preservation, 
                  and omnichannel experiences define the competitive frontier for market leadership.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="feature-card p-8">
            <h2 className="text-3xl font-bold text-center mb-12">Brand Evolution Timeline</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-300 via-orange-400 to-red-400 rounded-full"></div>
              
              <div className="space-y-12">
                {Object.entries(brandAnalysis)
                  .sort((a, b) => a[1].founded - b[1].founded)
                  .map(([key, analysis], index) => {
                    const brand = BRANDS[key as keyof typeof BRANDS];
                    const isLeft = index % 2 === 0;
                    
                    return (
                      <div key={key} className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} relative`}>
                        <div 
                          className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-xl z-10 flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: brand.color }}
                        >
                          {index + 1}
                        </div>
                        
                        <div className={`w-5/12 ${isLeft ? 'pr-12 text-right' : 'pl-12'}`}>
                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                            <div className={`flex items-center mb-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                              <div>
                                <h3 className="font-bold text-2xl" style={{ color: brand.color }}>{analysis.founded}</h3>
                                <p className="text-lg font-semibold text-gray-800">{brand.name}</p>
                                <p className="text-sm text-gray-500">{analysis.marketPosition}</p>
                              </div>
                            </div>
                            
                            <p className="text-gray-700 leading-relaxed mb-4">{analysis.culturalImpact}</p>
                            
                            <div className="p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-l-4" style={{ borderColor: brand.color }}>
                              <p className="text-amber-700 text-sm"><strong>Legacy:</strong> {analysis.competitiveEdge}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="w-5/12"></div>
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