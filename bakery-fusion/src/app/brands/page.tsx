'use client';

import { useState } from 'react';
import { ArrowLeft, Star, MapPin, Clock, Users } from 'lucide-react';
import { BRANDS, SAMPLE_ITEMS } from '@/lib/data';
import Link from 'next/link';

export default function BrandsPage() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

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
                <span className="text-sm text-gray-500 hidden sm:block font-medium">Brands</span>
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
              6 Premier Japanese Bakery Brands
            </h1>
            <p className="section-subtitle">
              Discover the legendary bakery chains that have shaped Japan's culinary landscape for over 150 years.
            </p>
          </div>

          {/* Brand Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(BRANDS).map(([key, brand]) => (
              <div 
                key={key} 
                className="feature-card p-8 cursor-pointer transform transition-all duration-300 hover:scale-105" 
                onClick={() => setSelectedBrand(selectedBrand === key ? null : key)}
              >
                <div className="flex items-center mb-6">
                  <div 
                    className="w-20 h-20 rounded-3xl flex items-center justify-center mr-4 text-white font-bold text-3xl shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${brand.color}dd, ${brand.color})` }}
                  >
                    {brand.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-1" style={{ color: brand.color }}>{brand.name}</h3>
                    <p className="text-sm text-gray-500 font-medium">Founded {brand.founded}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-white/50 rounded-xl">
                    <div className="text-2xl font-bold" style={{ color: brand.color }}>{brand.monthlyVisits}</div>
                    <div className="text-xs text-gray-600">Monthly Visits</div>
                  </div>
                  <div className="text-center p-3 bg-white/50 rounded-xl">
                    <div className="text-2xl font-bold" style={{ color: brand.color }}>{brand.storeCount}</div>
                    <div className="text-xs text-gray-600">Store Locations</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Specialty:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{brand.specialty}</p>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-800">Key Features:</h4>
                  {brand.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: brand.color }}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button 
                  className="w-full btn-primary text-sm py-3"
                  style={{ background: `linear-gradient(135deg, ${brand.color}dd, ${brand.color})` }}
                >
                  {selectedBrand === key ? 'Hide Details' : 'View Details'}
                </button>

                {selectedBrand === key && (
                  <div className="mt-6 p-6 bg-white/60 rounded-xl animate-fade-in-up border-l-4" style={{ borderColor: brand.color }}>
                    <h4 className="font-bold text-xl mb-4" style={{ color: brand.color }}>Featured Menu Items</h4>
                    <div className="space-y-4">
                      {SAMPLE_ITEMS.filter(item => item.brand === key).map(item => (
                        <div key={item.id} className="flex justify-between items-start p-4 bg-white/80 rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <h5 className="font-bold text-lg mr-2">{item.name}</h5>
                              {item.isPopular && (
                                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                            <div className="flex items-center text-xs text-gray-500">
                              <Clock className="w-3 h-3 mr-1" />
                              {item.prepTime > 0 ? `${item.prepTime} min prep` : 'Ready to serve'}
                            </div>
                          </div>
                          <div className="text-right ml-4">
                            <p className="font-bold text-xl" style={{ color: brand.color }}>¥{item.price.toLocaleString()}</p>
                            <p className="text-xs text-gray-500 capitalize">{item.category}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Brand Comparison */}
          <div className="feature-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Brand Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-bold text-gray-800">Brand</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-800">Founded</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-800">Stores</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-800">Monthly Visits</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-800">Primary Focus</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(BRANDS).map(([key, brand]) => (
                    <tr key={key} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <div 
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold mr-3"
                            style={{ backgroundColor: brand.color }}
                          >
                            {brand.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold">{brand.name}</div>
                            <div className="text-sm text-gray-500">{brand.specialty.split(' &')[0]}</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-4 px-4 font-semibold">{brand.founded}</td>
                      <td className="text-center py-4 px-4 font-semibold">{brand.storeCount}</td>
                      <td className="text-center py-4 px-4 font-semibold" style={{ color: brand.color }}>{brand.monthlyVisits}</td>
                      <td className="text-center py-4 px-4 text-gray-600">{brand.keyFeatures[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Market Share Visualization */}
          <div className="feature-card p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Market Presence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Monthly Website Visits</h3>
                <div className="space-y-4">
                  {Object.entries(BRANDS)
                    .sort((a, b) => parseFloat(b[1].monthlyVisits) - parseFloat(a[1].monthlyVisits))
                    .map(([key, brand]) => {
                      const visits = parseFloat(brand.monthlyVisits);
                      const maxVisits = 3.0; // Mister Donut's visits
                      const percentage = (visits / maxVisits) * 100;
                      
                      return (
                        <div key={key} className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{brand.name}</span>
                            <span className="font-bold" style={{ color: brand.color }}>{brand.monthlyVisits}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className="h-3 rounded-full transition-all duration-1000"
                              style={{ 
                                width: `${percentage}%`,
                                background: `linear-gradient(90deg, ${brand.color}dd, ${brand.color})`
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6">Store Network</h3>
                <div className="space-y-4">
                  {Object.entries(BRANDS)
                    .sort((a, b) => b[1].storeCount - a[1].storeCount)
                    .map(([key, brand]) => {
                      const maxStores = 500; // Mister Donut's store count
                      const percentage = (brand.storeCount / maxStores) * 100;
                      
                      return (
                        <div key={key} className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{brand.name}</span>
                            <span className="font-bold" style={{ color: brand.color }}>{brand.storeCount} stores</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className="h-3 rounded-full transition-all duration-1000"
                              style={{ 
                                width: `${percentage}%`,
                                background: `linear-gradient(90deg, ${brand.color}dd, ${brand.color})`
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 