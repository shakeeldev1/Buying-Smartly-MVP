import { useState } from 'react';
import { Search, SlidersHorizontal, Layers, Eye } from 'lucide-react';

const CATEGORIES = [
  'Shopping',
  'Travel',
  'Jobs',
  'Business Opportunities',
  'Education',
  'Healthcare',
  'Logistics',
  'Supplier Sourcing',
  'Professional Services',
];

const REALISTIC_PREVIEWS = [
  {
    id: 1,
    title: "Luxury Textile Sourcing Corridor",
    category: "Supplier Sourcing",
    location: "Dubai / Milan",
    meta: "Verified Tier-1 Factory Group"
  },
  {
    id: 2,
    title: "Cross-Border Freight Logistics Route",
    category: "Logistics",
    location: "Global / Multi-Port",
    meta: "Secured Capacity Allocation"
  },
  {
    id: 3,
    title: "Premium Hospitality Distribution",
    category: "Travel",
    location: "MENA Region",
    meta: "Exclusive Operations Framework"
  },
  {
    id: 4,
    title: "Automated Fulfillment Frameworks",
    category: "Business Opportunities",
    location: "Singapore Hub",
    meta: "High-Yield Portfolio Allocation"
  },
  {
    id: 5,
    title: "Corporate Healthcare Infrastructure",
    category: "Healthcare",
    location: "London / EU",
    meta: "Compliance Monitored Network"
  },
  {
    id: 6,
    title: "Bespoke Enterprise Development",
    category: "Professional Services",
    location: "New York City",
    meta: "Elite Strategic Consultation"
  }
];

function SearchHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPreviews = REALISTIC_PREVIEWS.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 font-sans antialiased">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-[#D4AF37] text-[10px] sm:text-xs font-semibold tracking-wider px-3 py-1.5 uppercase mb-4 shadow-sm">
            <Layers className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Discovery Engine
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Search & <span className="text-[#D4AF37]">Discover</span> Opportunities
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-light leading-relaxed">
            Real-time multi-vertical ecosystem tracking. Preview select verified active channels below.
          </p>
        </div>

        <div className="space-y-5 sm:space-y-6">
          
          {/* Search Bar */}
          <div className="relative rounded-2xl sm:rounded-3xl shadow-lg shadow-slate-900/10 bg-white border border-slate-200/80 p-2.5 sm:p-3 lg:p-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 hover:shadow-xl hover:shadow-[#D4AF37]/5 transition-all duration-300">
            <div className="flex items-center flex-1 w-full sm:w-auto pl-2 sm:pl-4">
              <Search className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Query by asset, corridor, industry, or service parameter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2.5 sm:py-3 bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none text-xs sm:text-sm font-normal"
              />
            </div>
            <button className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-slate-900 text-white hover:bg-[#D4AF37] hover:text-slate-900 transition-all duration-300 font-medium text-xs tracking-wider uppercase shadow-md hover:shadow-lg">
              <SlidersHorizontal className="h-4 w-4" /> Execute
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-2 sm:pt-3">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold tracking-wide transition-all duration-300 uppercase border whitespace-nowrap ${
                selectedCategory === 'All'
                  ? 'bg-[#D4AF37] text-slate-900 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-[#D4AF37]/30'
              }`}
            >
              All Ecosystems
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold tracking-wide transition-all duration-300 uppercase border whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-slate-900 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-[#D4AF37]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {filteredPreviews.length > 0 ? (
                filteredPreviews.map((item) => (
                  <div key={item.id} className="group relative p-5 sm:p-6 lg:p-7 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-md shadow-slate-900/5 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 cursor-pointer">
                    <div>
                      <div className="flex justify-between items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg flex-shrink-0">
                          {item.category}
                        </span>
                        <span className="text-[10px] sm:text-xs text-slate-500 font-medium text-right">{item.location}</span>
                      </div>
                      <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-2 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-4 line-clamp-2">
                        Secure connection pathway validated via high-yield organizational framework parameters.
                      </p>
                    </div>

                    <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 italic truncate">{item.meta}</span>
                      <span className="inline-flex items-center gap-1 text-xs text-[#D4AF37] font-semibold group-hover:translate-x-1 transition-transform flex-shrink-0">
                        <Eye className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> 
                        <span className="hidden sm:inline">Preview</span>
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-10 sm:py-12 lg:py-16 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 text-slate-400 text-xs sm:text-sm font-light shadow-sm">
                  No preview rows matching this specialized filter parameter.
                </div>
              )}
            </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-6 sm:pt-8 border-t border-slate-200/60 max-w-2xl mx-auto mt-8 sm:mt-12">
          <a 
            href="/register" 
            className="inline-flex items-center justify-center gap-2 group text-xs sm:text-sm font-semibold text-slate-900 hover:text-[#D4AF37] transition-colors"
          >
            Explore Advanced Multi-Vertical Channels 
            <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform font-bold">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default SearchHub;
