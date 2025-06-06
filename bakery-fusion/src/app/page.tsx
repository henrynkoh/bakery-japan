'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Clock, Gift, Star, Truck, Calendar, Award, MapPin } from 'lucide-react';
import { BRANDS, SAMPLE_ITEMS, LOYALTY_TIERS, HERITAGE_CONTENT } from '@/lib/data';

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const featuredItems = SAMPLE_ITEMS.slice(0, 8);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-100/10 to-orange-100/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="glass-effect sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 animate-fade-in-up">
              <div className="w-12 h-12 bakery-gradient rounded-2xl flex items-center justify-center animate-pulse-glow shadow-lg">
                <span className="text-white font-bold text-xl">🥐</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Bakery Fusion
                </h1>
                <span className="text-sm text-gray-500 hidden sm:block font-medium">6 Premium Brands United</span>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link 
                href="/features"
                className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group"
              >
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/brands"
                className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group"
              >
                Brands
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/heritage"
                className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group"
              >
                Heritage
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/loyalty"
                className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group"
              >
                Loyalty
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            <div className="flex items-center space-x-4 animate-slide-in-right">
              <button className="relative p-3 text-gray-600 hover:text-amber-600 transition-all duration-300 hover:bg-amber-50 rounded-xl group">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                  0
                </span>
              </button>
              <button className="btn-primary flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Quick Order</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden hero-gradient">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-amber-200/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-orange-200/20 rounded-full animate-float [animation-delay:1s]"></div>
          <div className="absolute bottom-20 left-1/2 w-56 h-56 bg-yellow-200/20 rounded-full animate-float [animation-delay:2s]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight font-serif">
                Japan's Finest
                <span className="block text-gradient mt-4">
                  Bakery Experience
                </span>
              </h1>
            </div>
            
            <div className="animate-fade-in-up [animation-delay:0.3s]">
              <p className="text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
                Experience the best of 6 legendary Japanese bakery chains in one unified platform. 
                From Mister Donut's iconic Pon de Ring to Kimuraya's 150-year-old anpan tradition.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up [animation-delay:0.6s]">
              <button className="btn-primary text-xl px-10 py-4 flex items-center justify-center space-x-3 group">
                <Clock className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Quick Order (15 min pickup)</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-sm">⚡ Fast</span>
              </button>
              <button className="btn-secondary text-xl px-10 py-4 flex items-center justify-center space-x-3 group">
                <Gift className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span>Send E-Gift</span>
                <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm">💝 Popular</span>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up [animation-delay:0.9s]">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">6</div>
                <div className="text-gray-600 font-medium">Premium Brands</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">900+</div>
                <div className="text-gray-600 font-medium">Store Locations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">12</div>
                <div className="text-gray-600 font-medium">Unique Features</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">150</div>
                <div className="text-gray-600 font-medium">Years Heritage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Features */}
      <section id="features" className="py-24 bg-gradient-to-br from-white via-gray-50/30 to-amber-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              12 Revolutionary Features from Japan's Top Bakeries
            </h2>
            <p className="section-subtitle">
              Each feature represents years of innovation from Japan's most beloved bakery chains, 
              now unified into one seamless experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mister Donut Features */}
            <div className="feature-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Net Order System</h3>
                  <p className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full inline-block">Mister Donut</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">Reserve donuts online for timed pickup with guest checkout. No registration required.</p>
              <div className="flex items-center text-sm text-gray-500">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <span>15-min guarantee</span>
              </div>
            </div>

            <div className="feature-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">E-Gift Codes</h3>
                  <p className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full inline-block">Mister Donut</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">Send digital gift codes via email or LINE for any occasion.</p>
              <div className="flex items-center text-sm text-gray-500">
                <Gift className="w-4 h-4 text-pink-500 mr-1" />
                <span>Digital delivery</span>
              </div>
            </div>

            {/* Krispy Kreme Features */}
            <div className="feature-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Quick Order Platform</h3>
                  <p className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full inline-block">Krispy Kreme</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">Advanced ordering with transparent preparation times and auto-cancellation for impossible orders.</p>
              <div className="flex items-center text-sm text-gray-500">
                <Star className="w-4 h-4 text-green-500 mr-1" />
                <span>Smart automation</span>
              </div>
            </div>

            <div className="feature-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Tiered Loyalty System</h3>
                  <p className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full inline-block">Krispy Kreme</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">Bronze to Platinum tiers with escalating perks, app-only items, and special member weeks.</p>
              <div className="flex items-center text-sm text-gray-500">
                <Award className="w-4 h-4 text-emerald-500 mr-1" />
                <span>Premium benefits</span>
              </div>
            </div>

            {/* Continue with other features... */}
            <div className="feature-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Frozen Shipping</h3>
                  <p className="text-sm font-medium text-amber-600 bg-amber-100 px-3 py-1 rounded-full inline-block">Andersen Group</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">Nationwide frozen bread delivery maintaining oven-fresh quality.</p>
              <div className="flex items-center text-sm text-gray-500">
                <Truck className="w-4 h-4 text-amber-500 mr-1" />
                <span>Quality preserved</span>
              </div>
            </div>

            <div className="feature-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Heritage Storytelling</h3>
                  <p className="text-sm font-medium text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full inline-block">Kimuraya Sohonten</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">Rich brand lore, historical timelines, and cultural significance of traditional Japanese baking.</p>
              <div className="flex items-center text-sm text-gray-500">
                <div className="w-4 h-4 bg-amber-600 rounded text-white text-xs flex items-center justify-center mr-1 font-bold">150</div>
                <span>Years of tradition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section id="brands" className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              6 Premier Japanese Bakery Brands
            </h2>
            <p className="section-subtitle">
              Each brand brings decades of expertise and unique innovations to our unified platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(BRANDS).map(([key, brand]) => (
              <div key={key} className="feature-card p-8 cursor-pointer" onClick={() => setSelectedBrand(selectedBrand === key ? null : key)}>
                <div className="flex items-center mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300"
                    style={{ background: brand.color }}
                  >
                    {brand.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">{brand.name}</h3>
                    <p className="text-sm text-gray-500">Founded {brand.founded}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Visits:</span>
                    <span className="font-bold" style={{ color: brand.color }}>{brand.monthlyVisits}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Store Count:</span>
                    <span className="font-bold">{brand.storeCount}</span>
                  </div>
                  <div className="text-gray-600">
                    <span className="font-medium">Specialty:</span>
                    <p className="text-sm mt-1">{brand.specialty}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Key Features:</p>
                  {brand.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: brand.color }}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {selectedBrand === key && (
                  <div className="mt-6 p-4 bg-white/60 rounded-xl animate-fade-in-up">
                    <h4 className="font-bold text-lg mb-3" style={{ color: brand.color }}>Featured Items:</h4>
                    <div className="space-y-3">
                      {SAMPLE_ITEMS.filter(item => item.brand === key).map(item => (
                        <div key={item.id} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">¥{item.price}</p>
                            {item.isPopular && <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">Popular</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section id="heritage" className="py-24 bg-gradient-to-br from-white via-gray-50/30 to-amber-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              150+ Years of Baking Heritage
            </h2>
            <p className="section-subtitle">
              From the birth of anpan in 1869 to modern donut innovations, discover the rich history that shaped Japanese bakery culture.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-300 to-orange-400 rounded-full"></div>
            
            <div className="space-y-16">
              {HERITAGE_CONTENT.sort((a, b) => a.year - b.year).map((item, index) => {
                const brand = BRANDS[item.brand as keyof typeof BRANDS];
                return (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}>
                    {/* Timeline dot */}
                    <div 
                      className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10"
                      style={{ backgroundColor: brand?.color || '#f59e0b' }}
                    ></div>
                    
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="feature-card p-6">
                        <div className="flex items-center mb-4">
                          <div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold mr-3"
                            style={{ backgroundColor: brand?.color || '#f59e0b' }}
                          >
                            {item.year}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="text-sm text-gray-500">{brand?.name}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">{item.content}</p>
                        <div className="bg-amber-50 p-3 rounded-lg">
                          <p className="text-sm font-medium text-amber-800 mb-1">Historical Significance:</p>
                          <p className="text-sm text-amber-700">{item.significance}</p>
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
      </section>

      {/* Loyalty Program */}
      <section id="loyalty" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Unified Loyalty Program
            </h2>
            <p className="section-subtitle">
              Earn points across all 6 brands and unlock exclusive benefits as you progress through our tier system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {LOYALTY_TIERS.map((tier, index) => (
              <div key={index} className="feature-card p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 transform rotate-45 translate-x-10 -translate-y-10" style={{ backgroundColor: tier.color, opacity: 0.1 }}></div>
                
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl"
                    style={{ backgroundColor: tier.color }}
                  >
                    <Award className="w-8 h-8" />
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2" style={{ color: tier.color }}>{tier.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {tier.pointsRequired === 0 ? 'Starting tier' : `${tier.pointsRequired.toLocaleString()} points`}
                  </p>
                  
                  <div className="space-y-2">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-700">
                        <Star className="w-3 h-3 mr-2 text-yellow-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress simulator */}
          <div className="feature-card p-8 max-w-4xl mx-auto">
            <h3 className="font-bold text-2xl mb-6 text-center">Your Loyalty Journey</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-medium">Current Status:</span>
                <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-bold">Bronze Member</span>
              </div>
              
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress to Silver (1,000 points)</span>
                  <span>347 / 1,000 points</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-3 rounded-full" style={{ width: '34.7%' }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">347</div>
                  <div className="text-sm text-gray-600">Total Points</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">23</div>
                  <div className="text-sm text-gray-600">Orders This Month</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">6</div>
                  <div className="text-sm text-gray-600">Brands Tried</div>
                </div>
              </div>

              <div className="text-center">
                <button className="btn-primary">
                  <Award className="w-5 h-5 mr-2" />
                  View Detailed Benefits
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-8 h-8 bakery-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold">BF</span>
              </div>
              <h3 className="text-xl font-bold">Bakery Fusion</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Bringing together 6 legendary Japanese bakery chains with modern technology, 
              n8n workflows, and MCP integration for the ultimate bakery experience.
            </p>
            <div className="text-sm text-gray-500">
              <p>Featuring: Mister Donut • Krispy Kreme Japan • Andersen Group • Pompadour • La Terre • Kimuraya Sohonten</p>
              <p className="mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
