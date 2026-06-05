import React, { useState } from 'react';
import { Search, SlidersHorizontal, Lock, Layers, Eye, ShieldCheck } from 'lucide-react';

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

// High-fidelity curated discovery data
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

  // Filter items logic combining search inputs and active pill selections
  const filteredPreviews = REALISTIC_PREVIEWS.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12 bg-[#e6e5e2] text-zinc-800 font-sans antialiased">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 text-[#A18244] text-xs font-semibold tracking-wider px-2 py-1 uppercase mb-4 shadow-sm">
            <Layers className="h-3.5 w-3.5" /> Discovery Engine
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Search & <span className="text-[#A18244]">Discover</span> Opportunities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-500 font-light leading-relaxed">
            Real-time multi-vertical ecosystem tracking. Preview select verified active channels below.
          </p>
        </div>

        {/* Master Row Structural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Layout Pane: Dynamic Filter Dashboard Controls and Results Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Search Execution Bar */}
            <div className="relative rounded-xl shadow-sm bg-white border border-zinc-200 p-2 flex items-center gap-2">
              <div className="flex items-center flex-1 pl-3">
                <Search className="h-5 w-5 text-zinc-400 mr-2" />
                <input
                  type="text"
                  placeholder="Query by asset, corridor, industry, or service parameter..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2 bg-transparent text-zinc-900 placeholder-zinc-400 focus:outline-none text-sm font-normal"
                />
              </div>
              <button className="flex items-center gap-1.5 px-6 py-2.5 rounded-lg bg-zinc-950 text-white hover:bg-zinc-800 transition-all font-medium text-xs tracking-wider uppercase">
                <SlidersHorizontal className="h-3.5 w-3.5" /> Execute
              </button>
            </div>

            {/* Premium Modular Horizontal Category Filters List Container */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all uppercase border ${
                  selectedCategory === 'All'
                    ? 'bg-[#A18244] text-black border-[#A18244] shadow-sm'
                    : 'bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50'
                }`}
              >
                All Ecosystems
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all uppercase border ${
                    selectedCategory === cat
                      ? 'bg-[#A18244] text-black border-[#A18244] shadow-sm'
                      : 'bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Opportunities List Rows Interface */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredPreviews.length > 0 ? (
                filteredPreviews.map((item) => (
                  <div key={item.id} className="group relative p-6 bg-white rounded-xl border border-zinc-200 shadow-sm hover:border-[#A18244]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    <div>
                      <div className="flex justify-between items-start gap-4 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#A18244] bg-[#FAF9F6] border border-zinc-200 px-2.5 py-1 rounded">
                          {item.category}
                        </span>
                        <span className="text-xs text-zinc-400 font-medium">{item.location}</span>
                      </div>
                      <h3 className="font-bold text-zinc-900 text-base mb-2 group-hover:text-[#A18244] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-500 font-light leading-relaxed mb-4">
                        Secure connection pathway validated via high-yield organizational framework parameters.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between mt-auto">
                      <span className="text-[11px] font-medium text-zinc-400 italic">{item.meta}</span>
                      <span className="inline-flex items-center gap-1 text-xs text-[#A18244] font-semibold">
                        <Eye className="h-3 w-3" /> Live Preview
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12 bg-white rounded-xl border border-zinc-200 text-zinc-400 text-sm font-light">
                  No preview rows matching this specialized filter parameter.
                </div>
              )}
            </div>
          </div>

          {/* Right Layout Pane: Premium Ambient Gated Media Image Showcase Card */}
          <div className="lg:col-span-4 h-full">
            <div className="relative rounded-2xl bg-zinc-950 text-white overflow-hidden p-6 border border-zinc-800 shadow-xl flex flex-col justify-between h-[480px] group">
              
              {/* Media Visual Layer with CSS Gradient Backdrop Filter Map */}
              <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-105 transition-transform duration-700">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4E10AQG3fpdp-n80xA/image-shrink_800/B4EZmkZy3lHcAc-/0/1759399850137?e=2147483647&v=beta&t=9JjpsMZOKinlcAXYXRpr28ZYubUNcS-_Jjwn35Nq6nQ" 
                  alt="Global digital logistics telemetry networks dashboard image mockup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
              </div>

              {/* Functional Component Controls Context Content Block */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-center">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#A18244] bg-[#A18244]/10 border border-[#A18244]/20 px-2.5 py-1 rounded-md backdrop-blur-md">
                    Ecosystem Briefing
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-zinc-400 font-medium">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#A18244]" /> Encrypted Feeds
                  </span>
                </div>

                {/* Central Callout Anchor Action */}
                <div className="my-auto flex flex-col items-center justify-center text-center px-4">
                  <a 
                    href="/register" 
                    className="h-14 w-14 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#A18244] hover:text-white mb-4 group-hover:shadow-amber-500/10"
                  >
                    <Eye className="h-5 w-5" />
                  </a>
                  <h4 className="text-lg font-bold text-white tracking-tight mb-1">
                    Watch Platform Explainer
                  </h4>
                  <p className="text-xs text-zinc-300 font-light max-w-xs leading-relaxed">
                    A comprehensive walk-through highlighting our search infrastructure and monetization mechanics.
                  </p>
                </div>

                {/* Secure Gateway Restriction Layer Notification Block */}
                <div className="mt-auto bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
                    <Lock className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white tracking-wide">Advanced Metrics Gated</h5>
                    <p className="text-[11px] text-zinc-400 font-light leading-snug">
                      Data feeds, transaction ledger records, and contact nodes require secure verified onboarding accounts.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Global Conversion Target Link Footnote Area */}
        <div className="text-center pt-4 border-t border-zinc-200/60 max-w-2xl mx-auto">
          <a 
            href="/register" 
            className="inline-flex items-center gap-2 group text-sm font-semibold text-zinc-950 hover:text-[#A18244] transition-colors"
          >
            Unlock All Multi-Vertical Verified Pipelines 
            <span className="text-[#A18244] group-hover:translate-x-1 transition-transform font-bold">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default SearchHub;