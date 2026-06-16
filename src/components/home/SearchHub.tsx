import { useState, useRef } from 'react';
import { Search, SlidersHorizontal, Layers, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredPreviews = REALISTIC_PREVIEWS.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollTabs = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 240;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pb-12 bg-gradient-to-b from-white via-slate-50/50 to-white text-slate-900 antialiased overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Module Header Area */}
        <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-[#D4AF37] text-[11px] font-bold tracking-[0.18em] px-3 py-1 uppercase mb-4 shadow-sm">
            <Layers className="h-3 w-3 stroke-[2.5]" /> Discovery Engine
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Search & <span className="text-[#D4AF37]">Discover</span> Opportunities
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium max-w-md leading-relaxed">
            Real-time multi-vertical ecosystem tracking. Preview select verified active channels below.
          </p>
          <div className="w-10 h-[3px] bg-[#D4AF37]/40 mt-5 rounded-full" />
        </div>

        <div className="space-y-6 max-w-6xl mx-auto">
          
          {/* Main Search Input Form Panel */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 p-2 flex flex-col sm:flex-row items-center gap-2 hover:shadow-2xl hover:shadow-[#D4AF37]/5 transition-all duration-300">
              <div className="flex items-center flex-1 w-full bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                <Search className="h-5 w-5 text-slate-400 mr-3 flex-shrink-0 stroke-[2.2]" />
                <input
                  type="text"
                  placeholder="Query by asset, corridor, industry, or service parameter..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 font-medium focus:outline-none"
                />
              </div>
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-xs font-bold text-white tracking-wider uppercase hover:bg-[#D4AF37] hover:text-slate-950 transition-all duration-200 shadow-md">
                <SlidersHorizontal className="h-3.5 w-3.5 stroke-[2.5]" /> Execute Search
              </button>
            </div>
          </div>

          {/* Fluid Horizontal Category Filter Controls */}
          <div className="relative flex items-center group/nav py-2 border-b border-slate-100">
            <button 
              onClick={() => scrollTabs('left')}
              className="absolute left-0 z-10 p-1.5 rounded-lg bg-white shadow-md border border-slate-100 text-slate-500 hover:text-slate-900 hidden sm:block opacity-0 group-hover/nav:opacity-100 transition-opacity duration-200 -ml-4"
            >
              <ChevronLeft className="h-4 w-4 stroke-[2.5]" />
            </button>

            <div 
              ref={scrollContainerRef}
              className="flex items-center gap-2 overflow-x-auto scrollbar-none w-full py-1 px-1 mask-linear-edges"
            >
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-xl text-[11px] font-bold tracking-wider transition-all duration-200 uppercase border whitespace-nowrap shrink-0 ${
                  selectedCategory === 'All'
                    ? 'bg-[#D4AF37] text-slate-950 border-[#D4AF37] shadow-sm shadow-[#D4AF37]/20'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                All Ecosystems
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-[11px] font-bold tracking-wider transition-all duration-200 uppercase border whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-[#D4AF37] text-slate-950 border-[#D4AF37] shadow-sm shadow-[#D4AF37]/20'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <button 
              onClick={() => scrollTabs('right')}
              className="absolute right-0 z-10 p-1.5 rounded-lg bg-white shadow-md border border-slate-100 text-slate-500 hover:text-slate-900 hidden sm:block opacity-0 group-hover/nav:opacity-100 transition-opacity duration-200 -mr-4"
            >
              <ChevronRight className="h-4 w-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Directory Showcase Data Grid Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {filteredPreviews.length > 0 ? (
              filteredPreviews.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative p-6 bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-[#D4AF37]/5 hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col justify-between items-stretch overflow-hidden hover:-translate-y-1 cursor-pointer"
                >
                  <div className="absolute -inset-px bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="flex justify-between items-center gap-4 mb-4">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#A18244] bg-[#D4AF37]/10 px-2.5 py-1 rounded-md shrink-0">
                        {item.category}
                      </span>
                      <span className="text-[11px] text-slate-400 font-bold tracking-tight text-right uppercase">{item.location}</span>
                    </div>
                    
                    <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-[#A18244] transition-colors line-clamp-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6 line-clamp-2 opacity-95">
                      Secure connection pathway validated via high-yield organizational framework parameters.
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between gap-4 mt-auto">
                    <span className="text-[11px] font-semibold text-slate-400 italic truncate tracking-tight">{item.meta}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#A18244] font-bold group-hover:translate-x-0.5 transition-transform shrink-0 uppercase tracking-wider">
                      <Eye className="h-3.5 w-3.5 text-[#D4AF37] stroke-[2.5]" /> 
                      <span>Preview</span>
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16 bg-white rounded-3xl border border-slate-200/80 text-slate-400 text-sm font-medium tracking-wide shadow-sm">
                No preview rows matching this specialized filter parameter.
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default SearchHub;