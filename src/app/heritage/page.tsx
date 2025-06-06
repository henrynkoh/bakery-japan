'use client';

import { ArrowLeft, Calendar, Award, Star, Book, Globe, Heart, Crown } from 'lucide-react';
import { BRANDS, HERITAGE_CONTENT } from '@/lib/data';
import Link from 'next/link';

export default function HeritagePage() {
  const extendedHeritage = [
    {
      year: 1869,
      brand: 'kimuraya',
      title: 'Birth of Anpan - Japan\'s Culinary Revolution',
      content: 'Kimura Yasubei creates the first anpan in Ginza, Tokyo, revolutionizing Japanese food culture by introducing Western bread-making techniques combined with traditional Japanese sweet red bean paste. This innovation represents the first successful fusion of Western and Japanese culinary traditions.',
      significance: 'Marked the beginning of Japan\'s modern bakery industry and established the foundation for East-West culinary fusion that would define Japanese food culture for centuries.',
      culturalContext: 'During the Meiji Restoration, Japan was rapidly modernizing and opening to Western influences. Anpan became a symbol of successful cultural adaptation.',
      globalImpact: 'Influenced Asian bakery traditions and pioneered the concept of localized adaptation of foreign foods.',
      modernLegacy: 'Anpan remains Japan\'s most iconic bread product, inspiring countless variations and establishing the template for Japanese bakery innovation.'
    },
    {
      year: 1948,
      brand: 'andersen',
      title: 'European Artisan Tradition Arrives in Japan',
      content: 'Andersen introduces authentic European bread-making techniques to post-war Japan, bringing Danish pastry traditions and establishing European-style bakeries. Their commitment to traditional methods elevates Japanese bread standards and introduces concepts of artisan craftsmanship.',
      significance: 'Elevated Japanese bread from basic sustenance to artisan craft, introducing quality standards and techniques that would reshape the entire industry.',
      culturalContext: 'Post-war Japan was rebuilding and eager to learn from international expertise. European bread represented sophistication and quality.',
      globalImpact: 'Demonstrated how traditional European techniques could be successfully transplanted to Asian markets while maintaining authenticity.',
      modernLegacy: 'Established the premium bakery segment in Japan and influenced generations of Japanese bakers in European techniques.'
    },
    {
      year: 1969,
      brand: 'pompadour',
      title: 'French Luxury Pastry Culture Introduction',
      content: 'Pompadour brings authentic French pastry-making to Japan, introducing croissants, éclairs, and other French classics with uncompromising quality standards. Their approach emphasizes technique mastery and premium ingredients, establishing French pastry as the pinnacle of bakery luxury.',
      significance: 'Created Japan\'s luxury pastry market and established French technique as the gold standard for premium baked goods.',
      culturalContext: 'Japan\'s economic growth enabled appreciation for luxury goods and international cuisine, creating demand for authentic French pastries.',
      globalImpact: 'Proved that French pastry techniques could be successfully exported while maintaining authenticity and quality standards.',
      modernLegacy: 'Continues to influence Japanese pastry standards and train master pastry chefs who spread French techniques throughout Asia.'
    },
    {
      year: 1971,
      brand: 'mister-donut',
      title: 'American Donut Culture Adaptation',
      content: 'Mister Donut introduces American-style donuts to Japan but adapts flavors, textures, and presentation to Japanese preferences. They create unique products like Pon de Ring and develop seasonal flavor strategies that become industry standards.',
      significance: 'Successfully adapted American food concepts to Japanese taste preferences, creating a new category of casual indulgence foods.',
      culturalContext: 'Japan\'s growing prosperity and Westernization created appetite for American-style casual foods, but required local adaptation.',
      globalImpact: 'Demonstrated successful localization of American food concepts and influenced donut culture throughout Asia.',
      modernLegacy: 'Remains Japan\'s dominant donut chain and continues to innovate with Japan-specific flavors and formats.'
    },
    {
      year: 1999,
      brand: 'la-terre',
      title: 'Technology-Driven Bakery Innovation',
      content: 'La Terre emerges as a technology-first bakery company, pioneering online ordering, cold-chain logistics, and multi-brand platform concepts. They represent the digital transformation of traditional bakery retail.',
      significance: 'Bridged traditional bakery craftsmanship with modern technology and logistics, creating new possibilities for bakery retail.',
      culturalContext: 'Japan\'s technological advancement and internet adoption created opportunities for digital innovation in traditional industries.',
      globalImpact: 'Pioneered concepts in bakery technology and logistics that influenced food retail innovation globally.',
      modernLegacy: 'Continues to lead in bakery technology innovation and platform-based retail models.'
    },
    {
      year: 2006,
      brand: 'krispy-kreme',
      title: 'Premium American Brand Experience',
      content: 'Krispy Kreme enters Japan with focus on authentic American donut experience and premium positioning. Their hot glazed donuts and transparent production process create new standards for food entertainment and quality demonstration.',
      significance: 'Elevated donuts from casual snack to premium experience and introduced transparent production as entertainment.',
      culturalContext: 'Japan\'s mature market demanded authentic premium experiences and appreciated food theater and craftsmanship demonstration.',
      globalImpact: 'Showed how premium American food brands could succeed in sophisticated international markets through authentic experience delivery.',
      modernLegacy: 'Maintains premium positioning and continues to influence Japanese standards for food quality demonstration and customer experience.'
    }
  ];

  const culturalEras = [
    {
      period: '1869-1920',
      name: 'Meiji Innovation Era',
      description: 'Foundation of modern Japanese bakery culture through East-West fusion',
      characteristics: ['Cultural adaptation', 'Western technique introduction', 'Traditional ingredient integration'],
      impact: 'Established the framework for Japanese bakery innovation that continues today'
    },
    {
      period: '1945-1980',
      name: 'Post-War Reconstruction & International Learning',
      description: 'Rapid adoption of international techniques and quality standards',
      characteristics: ['European technique mastery', 'Quality standardization', 'International ingredient access'],
      impact: 'Created the foundation for Japan\'s reputation for bakery excellence and attention to detail'
    },
    {
      period: '1980-2000',
      name: 'Economic Prosperity & Luxury Development',
      description: 'Development of premium market and sophisticated consumer preferences',
      characteristics: ['Luxury positioning', 'Artisan appreciation', 'Premium ingredient sourcing'],
      impact: 'Established Japan as a global leader in bakery quality and innovation'
    },
    {
      period: '2000-Present',
      name: 'Digital Transformation & Platform Innovation',
      description: 'Integration of technology with traditional craftsmanship',
      characteristics: ['Digital ordering systems', 'AI personalization', 'Platform business models'],
      impact: 'Created new paradigms for food retail that influence global bakery industry development'
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
                <span className="text-sm text-gray-500 hidden sm:block font-medium">Cultural Heritage</span>
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
              155 Years of Japanese Bakery Heritage
            </h1>
            <p className="section-subtitle">
              A comprehensive exploration of Japan's bakery evolution, from the revolutionary anpan of 1869 to today's 
              AI-powered innovations, revealing how six legendary brands shaped a unique culinary culture.
            </p>
          </div>

          {/* Cultural Eras Overview */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Cultural Evolution Eras</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {culturalEras.map((era, index) => (
                <div key={index} className="feature-card p-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h3 className="font-bold text-lg text-amber-800">{era.period}</h3>
                    <p className="text-amber-600 font-semibold text-sm">{era.name}</p>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{era.description}</p>
                  <div className="space-y-2">
                    {era.characteristics.map((char, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <Star className="w-3 h-3 text-amber-500 mr-2 flex-shrink-0" />
                        {char}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                    <p className="text-amber-700 text-xs"><strong>Impact:</strong> {era.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Historical Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Heritage Timeline - Deep Historical Analysis</h2>
            <div className="space-y-16">
              {extendedHeritage.map((event, index) => {
                const brand = BRANDS[event.brand as keyof typeof BRANDS];
                const isLeft = index % 2 === 0;
                
                return (
                  <div key={index} className="relative">
                    <div className={`flex items-start gap-12 ${!isLeft ? 'flex-row-reverse' : ''}`}>
                      <div className="flex-1">
                        <div className="feature-card p-8">
                          <div className="flex items-center mb-6">
                            <div 
                              className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 text-white font-bold text-2xl shadow-lg"
                              style={{ backgroundColor: brand.color }}
                            >
                              {event.year}
                            </div>
                            <div>
                              <h3 className="font-bold text-2xl mb-1" style={{ color: brand.color }}>{event.title}</h3>
                              <p className="text-lg font-semibold text-gray-700">{brand.name}</p>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h4 className="font-bold text-lg mb-3 text-gray-800">Historical Context</h4>
                              <p className="text-gray-700 leading-relaxed">{event.content}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-500">
                                <h5 className="font-bold text-blue-800 mb-2 flex items-center">
                                  <Calendar className="w-4 h-4 mr-2" />
                                  Cultural Context
                                </h5>
                                <p className="text-blue-700 text-sm">{event.culturalContext}</p>
                              </div>
                              
                              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
                                <h5 className="font-bold text-green-800 mb-2 flex items-center">
                                  <Globe className="w-4 h-4 mr-2" />
                                  Global Impact
                                </h5>
                                <p className="text-green-700 text-sm">{event.globalImpact}</p>
                              </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500">
                              <h5 className="font-bold text-purple-800 mb-2 flex items-center">
                                <Award className="w-4 h-4 mr-2" />
                                Historical Significance
                              </h5>
                              <p className="text-purple-700 leading-relaxed">{event.significance}</p>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-l-4 border-amber-500">
                              <h5 className="font-bold text-amber-800 mb-2 flex items-center">
                                <Crown className="w-4 h-4 mr-2" />
                                Modern Legacy
                              </h5>
                              <p className="text-amber-700 leading-relaxed">{event.modernLegacy}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-80 flex-shrink-0">
                        <div className="feature-card p-6 sticky top-24">
                          <h4 className="font-bold text-lg mb-4 text-center" style={{ color: brand.color }}>
                            {brand.name} Today
                          </h4>
                          <div className="space-y-4">
                            <div className="text-center p-4 bg-white/60 rounded-lg">
                              <div className="text-2xl font-bold mb-1" style={{ color: brand.color }}>
                                {2024 - event.year}
                              </div>
                              <div className="text-sm text-gray-600">Years of Innovation</div>
                            </div>
                            <div className="p-4 bg-white/60 rounded-lg">
                              <h5 className="font-semibold mb-2" style={{ color: brand.color }}>Current Specialty</h5>
                              <p className="text-sm text-gray-700">{brand.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Heritage Impact Analysis */}
          <div className="feature-card p-8">
            <h2 className="text-3xl font-bold text-center mb-12">Heritage Impact on Modern Japan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Cultural Fusion Mastery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Japanese bakeries pioneered the art of cultural fusion, successfully adapting Western techniques 
                  while preserving Japanese aesthetic and taste preferences, creating a unique global food culture.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Book className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Technique Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  From anpan's sweet bean filling to Pon de Ring's unique texture, Japanese bakers continuously 
                  innovated techniques that influenced global bakery practices and ingredient applications.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Global Influence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Japanese bakery innovations influenced Asian food culture, introduced quality standards that 
                  elevated global expectations, and demonstrated successful cultural adaptation strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 