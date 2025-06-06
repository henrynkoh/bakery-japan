'use client';

import { ArrowLeft, Calendar, Award, Star } from 'lucide-react';
import { BRANDS, HERITAGE_CONTENT } from '@/lib/data';
import Link from 'next/link';

export default function HeritagePage() {
  const sortedHeritage = HERITAGE_CONTENT.sort((a, b) => a.year - b.year);

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
                <span className="text-sm text-gray-500 hidden sm:block font-medium">Heritage</span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Heritage Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="section-title">
              150+ Years of Baking Heritage
            </h1>
            <p className="section-subtitle">
              Journey through time to discover how six legendary brands shaped Japan's bakery culture, from the revolutionary anpan of 1869 to modern digital innovations.
            </p>
          </div>

          {/* Timeline Overview */}
          <div className="feature-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Heritage Timeline Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {sortedHeritage.map((item, index) => {
                const brand = BRANDS[item.brand as keyof typeof BRANDS];
                return (
                  <div key={index} className="text-center">
                    <div 
                      className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold shadow-lg"
                      style={{ backgroundColor: brand?.color || '#f59e0b' }}
                    >
                      {item.year}
                    </div>
                    <h3 className="font-bold text-sm mb-1" style={{ color: brand?.color }}>{brand?.name}</h3>
                    <p className="text-xs text-gray-600">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Timeline */}
          <div className="relative mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Historical Journey</h2>
            
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-300 via-orange-400 to-red-400 rounded-full"></div>
            
            <div className="space-y-20">
              {sortedHeritage.map((item, index) => {
                const brand = BRANDS[item.brand as keyof typeof BRANDS];
                const isLeft = index % 2 === 0;
                
                return (
                  <div key={index} className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} relative`}>
                    {/* Timeline dot */}
                    <div 
                      className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-xl z-10 flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: brand?.color || '#f59e0b' }}
                    >
                      {index + 1}
                    </div>
                    
                    <div className={`w-5/12 ${isLeft ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div className="feature-card p-8 relative">
                        {/* Brand indicator */}
                        <div className={`absolute top-4 ${isLeft ? 'right-4' : 'left-4'}`}>
                          <div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-lg"
                            style={{ backgroundColor: brand?.color || '#f59e0b' }}
                          >
                            {brand?.name.charAt(0)}
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <div className={`flex items-center mb-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                            <div className="mr-4">
                              <h3 className="font-bold text-2xl" style={{ color: brand?.color }}>{item.year}</h3>
                              <p className="text-lg font-semibold text-gray-800">{item.title}</p>
                              <p className="text-sm text-gray-500">{brand?.name}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className={`space-y-4 ${isLeft ? 'text-right' : 'text-left'}`}>
                          <p className="text-gray-700 leading-relaxed text-lg">{item.content}</p>
                          
                          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border-l-4" style={{ borderColor: brand?.color }}>
                            <h4 className="font-bold text-amber-800 mb-2 flex items-center">
                              <Award className="w-4 h-4 mr-2" />
                              Historical Significance
                            </h4>
                            <p className="text-amber-700 leading-relaxed">{item.significance}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cultural Impact */}
          <div className="feature-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Cultural Impact & Innovation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-l-4 border-amber-500">
                <div className="flex items-center mb-4">
                  <Calendar className="w-8 h-8 text-amber-600 mr-3" />
                  <h3 className="font-bold text-xl text-amber-800">1869-1900</h3>
                </div>
                <h4 className="font-semibold text-lg mb-2">Foundation Era</h4>
                <p className="text-gray-700">The birth of Japanese bakery culture with Kimuraya's revolutionary anpan, bridging Western bread-making with traditional Japanese flavors.</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <Star className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="font-bold text-xl text-blue-800">1940-1980</h3>
                </div>
                <h4 className="font-semibold text-lg mb-2">Expansion Era</h4>
                <p className="text-gray-700">Post-war reconstruction brought European techniques and American innovations, establishing the modern Japanese bakery landscape.</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="font-bold text-xl text-green-800">2000-Present</h3>
                </div>
                <h4 className="font-semibold text-lg mb-2">Digital Innovation</h4>
                <p className="text-gray-700">Modern era combining traditional craftsmanship with digital platforms, loyalty programs, and unified customer experiences.</p>
              </div>
            </div>
          </div>

          {/* Brand Legacy Comparison */}
          <div className="feature-card p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Brand Legacy Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-bold text-gray-800">Brand</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-800">Founded</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-800">Years Active</th>
                    <th className="text-left py-4 px-4 font-bold text-gray-800">Key Innovation</th>
                    <th className="text-left py-4 px-4 font-bold text-gray-800">Cultural Legacy</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedHeritage.map((item, index) => {
                    const brand = BRANDS[item.brand as keyof typeof BRANDS];
                    const yearsActive = 2024 - item.year;
                    
                    return (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <div 
                              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold mr-3"
                              style={{ backgroundColor: brand?.color }}
                            >
                              {brand?.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-bold">{brand?.name}</div>
                              <div className="text-sm text-gray-500">{item.title}</div>
                            </div>
                          </div>
                        </td>
                        <td className="text-center py-4 px-4 font-bold text-xl" style={{ color: brand?.color }}>{item.year}</td>
                        <td className="text-center py-4 px-4 font-semibold">{yearsActive} years</td>
                        <td className="py-4 px-4 text-gray-700 max-w-xs">{item.content.substring(0, 100)}...</td>
                        <td className="py-4 px-4 text-gray-600 max-w-xs">{item.significance.substring(0, 80)}...</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Heritage Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center p-6 feature-card">
              <div className="text-4xl font-bold text-amber-600 mb-2">155</div>
              <div className="text-gray-600 font-medium">Years of Combined Heritage</div>
            </div>
            <div className="text-center p-6 feature-card">
              <div className="text-4xl font-bold text-orange-600 mb-2">6</div>
              <div className="text-gray-600 font-medium">Historic Brands United</div>
            </div>
            <div className="text-center p-6 feature-card">
              <div className="text-4xl font-bold text-red-600 mb-2">12</div>
              <div className="text-gray-600 font-medium">Revolutionary Innovations</div>
            </div>
            <div className="text-center p-6 feature-card">
              <div className="text-4xl font-bold text-yellow-600 mb-2">810+</div>
              <div className="text-gray-600 font-medium">Combined Store Locations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 