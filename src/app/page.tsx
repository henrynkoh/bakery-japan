'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Clock, Gift, Star, Truck, Calendar, Award, MapPin } from 'lucide-react';
import { BRANDS, SAMPLE_ITEMS, LOYALTY_TIERS, HERITAGE_CONTENT } from '@/lib/data';

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const featuredItems = SAMPLE_ITEMS.slice(0, 8);
  const premiumItems = SAMPLE_ITEMS.filter(item => item.price > 1000);

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
              <Link href="/features" className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group">
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/brands" className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group">
                Brands
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/heritage" className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group">
                Heritage
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/loyalty" className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group">
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
        {/* Animated background elements */}
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

      {/* Top Features Grid */}
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

            {/* Andersen Group Features */}
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
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white font-bold text-xl">%</div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Outlet Corner</h3>
                  <p className="text-sm font-medium text-amber-600 bg-amber-100 px-3 py-1 rounded-full inline-block">Andersen Group</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">Discounted surplus and limited bakes at special outlet prices.</p>
              <div className="flex items-center text-sm text-gray-500">
                <div className="w-4 h-4 bg-yellow-500 rounded text-white text-xs flex items-center justify-center mr-1">%</div>
                <span>Special pricing</span>
              </div>
            </div>

            {/* Pompadour Features */}
            <div className="feature-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white font-bold text-lg">1kg</div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Custom Celebration Loaves</h3>
                  <p className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full inline-block">Pompadour</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">1-kilogram custom celebration breads for birthdays and special occasions.</p>
              <div className="flex items-center text-sm text-gray-500">
                <div className="w-4 h-4 bg-orange-600 rounded text-white text-xs flex items-center justify-center mr-1 font-bold">1kg</div>
                <span>Custom made</span>
              </div>
            </div>

            <div className="feature-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Online-Only Specials</h3>
                  <p className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full inline-block">Pompadour</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">Exclusive seasonal items and monthly specials not available in stores.</p>
              <div className="flex items-center text-sm text-gray-500">
                <Star className="w-4 h-4 text-red-500 mr-1" />
                <span>Exclusive items</span>
              </div>
            </div>

            {/* La Terre Features */}
            <div className="feature-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Multi-Brand Cart</h3>
                  <p className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full inline-block">La Terre</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">Single checkout for multiple brands (bakery + patisserie) with unified loyalty.</p>
              <div className="flex items-center text-sm text-gray-500">
                <ShoppingCart className="w-4 h-4 text-green-500 mr-1" />
                <span>Unified experience</span>
              </div>
            </div>

            <div className="feature-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Cold-Chain Delivery</h3>
                  <p className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full inline-block">La Terre</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">Temperature-controlled shipping options for delicate pastries and organic items.</p>
              <div className="flex items-center text-sm text-gray-500">
                <Truck className="w-4 h-4 text-teal-500 mr-1" />
                <span>Temperature controlled</span>
              </div>
            </div>

            {/* Kimuraya Features */}
            <div className="feature-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Subscription Service</h3>
                  <p className="text-sm font-medium text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full inline-block">Kimuraya Sohonten</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">Weekly, bi-weekly, or monthly curated anpan selections with seasonal varieties.</p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 text-yellow-500 mr-1" />
                <span>Curated selections</span>
              </div>
            </div>

            <div className="feature-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white font-bold text-lg">150</div>
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
      <section id="brands" className="py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Unified Brand Experience</h2>
            <p className="section-subtitle">
              Six legendary bakery chains, each with decades of tradition, now working together 
              to deliver an unprecedented culinary experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(BRANDS).map(([key, brand], index) => (
              <div 
                key={key} 
                className={`brand-card p-8 text-center animate-fade-in-up ${
                  selectedBrand === key ? 'ring-4 ring-amber-300 bg-gradient-to-br from-amber-50 to-orange-50' : ''
                } ${index === 1 ? '[animation-delay:0.1s]' : index === 2 ? '[animation-delay:0.2s]' : index === 3 ? '[animation-delay:0.3s]' : index === 4 ? '[animation-delay:0.4s]' : index === 5 ? '[animation-delay:0.5s]' : ''}`}
                onClick={() => setSelectedBrand(selectedBrand === key ? null : key)}
              >
                <div 
                  className={`w-20 h-20 rounded-3xl mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                    key === 'mister-donut' ? 'bg-gradient-to-br from-orange-500 to-red-500' :
                    key === 'krispy-kreme' ? 'bg-gradient-to-br from-green-500 to-emerald-500' :
                    key === 'andersen' ? 'bg-gradient-to-br from-amber-600 to-yellow-600' :
                    key === 'pompadour' ? 'bg-gradient-to-br from-orange-600 to-red-600' :
                    key === 'la-terre' ? 'bg-gradient-to-br from-green-600 to-lime-600' :
                    'bg-gradient-to-br from-yellow-600 to-amber-600'
                  }`}
                >
                  {brand.name.includes('Donut') ? '🍩' : 
                   brand.name.includes('Krispy') ? '🥯' : 
                   brand.name.includes('Andersen') ? '🥖' : 
                   brand.name.includes('Pompadour') ? '🥐' : 
                   brand.name.includes('Terre') ? '🌾' : '🍞'}
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-amber-600 transition-colors duration-300">{brand.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{brand.description}</p>
                <div className="inline-flex items-center text-sm text-amber-600 bg-amber-100 px-4 py-2 rounded-full font-medium">
                  <Star className="w-4 h-4 mr-2" />
                  {key === 'mister-donut' ? '3.0M visits' :
                   key === 'krispy-kreme' ? '275K visits' :
                   key === 'andersen' ? '61K visits' :
                   key === 'pompadour' ? '54K visits' :
                   key === 'la-terre' ? '44K visits' : '32K visits'}
                </div>
              </div>
            ))}
          </div>

          {selectedBrand && (
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">
                {BRANDS[selectedBrand as keyof typeof BRANDS].name} Featured Items
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredItems
                  .filter(item => item.brand === selectedBrand)
                  .map(item => (
                    <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="h-32 bg-gray-200 rounded mb-3 flex items-center justify-center">
                        <span className="text-gray-500">Image</span>
                      </div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="font-bold">¥{item.price}</span>
                        <div className="flex gap-1">
                          {item.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="px-2 py-1 bg-gray-200 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Heritage Content */}
      <section id="heritage" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Heritage & Tradition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HERITAGE_CONTENT.map(content => (
              <div key={content.id} className="card p-6">
                <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Heritage Image</span>
                </div>
                <div className="flex items-center mb-3">
                  <span className={`px-2 py-1 rounded text-sm font-medium ${
                    content.type === 'timeline' ? 'bg-blue-100 text-blue-800' :
                    content.type === 'story' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {content.type}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2">{content.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {content.content.substring(0, 150)}...
                </p>
                <button className="text-amber-600 hover:text-amber-700 text-sm font-semibold mt-3">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section id="loyalty" className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Unified Loyalty Program</h2>
            <p className="text-lg opacity-90">
              Earn points across all 6 brands and unlock exclusive tier benefits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {LOYALTY_TIERS.map(tier => (
              <div key={tier.level} className="glass-effect rounded-xl p-6 text-gray-900">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-lg ${
                    tier.level === 'bronze' ? 'bg-amber-600 text-white' :
                    tier.level === 'silver' ? 'bg-gray-400 text-white' :
                    tier.level === 'gold' ? 'bg-yellow-500 text-white' :
                    'bg-purple-600 text-white'
                  }`}>
                    {tier.level.charAt(0).toUpperCase()}
                  </div>
                  <h3 className="font-bold text-lg capitalize">{tier.level}</h3>
                  <p className="text-sm text-gray-600">{tier.pointsRequired} points</p>
                </div>
                
                <ul className="space-y-2 text-sm">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <Star className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                {tier.discountPercentage > 0 && (
                  <div className="mt-4 p-3 bg-white rounded-lg text-center">
                    <span className="text-2xl font-bold text-amber-600">
                      {tier.discountPercentage}% OFF
                    </span>
                    <p className="text-xs text-gray-600">All orders</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Start Your Journey</h2>
            <p className="text-lg text-gray-300">
              Experience the best of Japanese bakery culture in minutes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button className="bg-white text-gray-900 p-6 rounded-xl hover:bg-gray-100 transition-colors text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-amber-600" />
              <h3 className="font-bold mb-2">Quick Order</h3>
              <p className="text-sm text-gray-600">15-minute pickup guarantee</p>
            </button>
            
            <button className="bg-white text-gray-900 p-6 rounded-xl hover:bg-gray-100 transition-colors text-center">
              <Gift className="w-8 h-8 mx-auto mb-3 text-green-600" />
              <h3 className="font-bold mb-2">Send E-Gift</h3>
              <p className="text-sm text-gray-600">Digital gifts via email/LINE</p>
            </button>
            
            <button className="bg-white text-gray-900 p-6 rounded-xl hover:bg-gray-100 transition-colors text-center">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-purple-600" />
              <h3 className="font-bold mb-2">Subscribe</h3>
              <p className="text-sm text-gray-600">Monthly curated selections</p>
            </button>
            
            <button className="bg-white text-gray-900 p-6 rounded-xl hover:bg-gray-100 transition-colors text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-bold mb-2">Find Stores</h3>
              <p className="text-sm text-gray-600">900+ locations nationwide</p>
            </button>
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