import React from 'react';
import { Globe, ShieldCheck, Settings, ArrowUpRight } from 'lucide-react';

const CORE_PILLARS = [
  {
    icon: Globe,
    title: "Global Sourcing Network",
    description: "BuySmartly is a dominant connective portal to global sourcing networks, ensuring elite business operations at scale."
  },
  {
    icon: ShieldCheck,
    title: "Uncompromised Integrity",
    description: "Built on absolute trust, transparency, and top-tier direct channels across verified networks."
  },
  {
    icon: Settings,
    title: "The Monetization Engine",
    description: "Driving cross-vertical corporate capitalization and premium strategic connection pathways."
  }
];



function AboutUs() {
  return (
    <div className="bg-[#FAF9F6] text-zinc-800 selection:bg-[#A18244]/10 selection:text-[#A18244]">
      
      {/* SECTION 1: CENTERED HEADER BLOCK */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-8">
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.2em] text-[#A18244] uppercase mb-3">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            About <span className="text-[#A18244]">Us</span>
          </h1>
          <p className="text-lg sm:text-xl font-normal text-zinc-500 tracking-wide max-w-xl">
            Pioneering Global <span className="font-serif italic text-[#A18244] font-medium">Connectivity</span>
          </p>
          {/* Elegant Minimal Accent Line */}
          <div className="w-12 h-[2px] bg-[#A18244]/30 mt-6 rounded-full" />
        </div>
      </section>

      {/* SECTION 2: CONTENT & IMAGES GRID LAYOUT */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Multi-Image Grid Stack */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-stretch relative z-10">
              {/* Main Corporate Team Image */}
              <div className="col-span-8 rounded-2xl overflow-hidden shadow-xl shadow-zinc-200/50 border border-zinc-200/80 h-80 transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Corporate Team Meeting" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Stacked Architecture Images Right */}
              <div className="col-span-4 flex flex-col gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-zinc-200/80 h-44 transition-transform duration-500 hover:scale-[1.03]">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                    alt="Corporate Architecture skyscraper" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-zinc-200/80 h-32 transition-transform duration-500 hover:scale-[1.03]">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2074&auto=format&fit=crop" 
                    alt="Digital Workspace Collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Subtle Gold World Map Underlay Vector Effect */}
            <div className="absolute -left-4 -top-12 w-72 h-56 opacity-[0.12] pointer-events-none z-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/15/World_map_blank_black_white.svg')] bg-contain bg-no-repeat filter sepia hue-rotate-[15deg] saturate-[2.5]" />
          </div>

          {/* Right Column: Institutional Context Paragraphs */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">
                BuySmartly relationship with Elroix Holdings
              </h3>
              <p className="text-zinc-600 text-base font-light leading-relaxed">
                BuySmartly maintains an integral framework relationship with Elroix Holdings, creating an interconnected ecosystem with direct focus on global compliance sourcing, retail networks, luxury travel corridors, and optimized multi-vertical connectivity channels managed across high-yield systems.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-1.5 border-l-2 border-[#A18244]/40 pl-5 relative group">
                <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-[#A18244] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <h4 className="text-base font-semibold text-zinc-900 group-hover:text-[#A18244] transition-colors duration-200">
                  Sourcing, Retail Integration
                </h4>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">
                  Seamless coordination frameworks that connect premium corporate layers directly to direct-to-provider routes safely.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 border-l-2 border-[#A18244]/40 pl-5 relative group">
                <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-[#A18244] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <h4 className="text-base font-semibold text-zinc-900 group-hover:text-[#A18244] transition-colors duration-200">
                  Advanced Monetization Strategy
                </h4>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">
                  Architecting high-performance digital environments for portfolio monitoring and capital discovery pipelines.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: CORE PILLARS LIGHT CARDS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl border border-zinc-200/80 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/40 hover:border-[#A18244]/40 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="h-12 w-12 rounded-xl bg-[#FAF9F6] border border-zinc-200/60 flex items-center justify-center text-[#A18244] mb-6 group-hover:bg-[#A18244] group-hover:text-white transition-all duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 tracking-tight mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                
                {/* Micro Action Trigger */}
                <div className="mt-8 flex justify-end text-zinc-400 group-hover:text-[#A18244] transition-colors duration-300">
                  <ArrowUpRight className="h-5 w-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      

    </div>
  );
}

export default AboutUs;