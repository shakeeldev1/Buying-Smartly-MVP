import { Globe, ShieldCheck, Settings, ArrowUpRight } from 'lucide-react';

const CORE_PILLARS = [
  {
    icon: Globe,
    title: "Global Sourcing Network",
    description: "BuySmartly is a dominant connective portal to global sourcing networks, ensuring elite business operations at scale.",
    bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArdt9oXuu3b8z-sz-c7RFkdu7E38xrpb2-g&s"
  },
  {
    icon: ShieldCheck,
    title: "Uncompromised Integrity",
    description: "Built on absolute trust, transparency, and top-tier direct channels across verified networks.",
    bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Settings,
    title: "The Monetization Engine",
    description: "Driving cross-vertical corporate capitalization and premium strategic connection pathways.",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  }
];

function AboutUs() {
  return (
    <div className="bg-white text-slate-900 selection:bg-[#D4AF37]/10 selection:text-[#D4AF37] antialiased overflow-hidden select-none">

      {/* --- Oopar Wala Section (Header Content Block) --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#A18244] bg-[#D4AF37]/10 px-3 py-1 rounded-full uppercase mb-3">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-2">
            About <span className="text-[#D4AF37]">Us</span>
          </h1>
          <p className="text-base sm:text-lg font-medium text-slate-500 tracking-wide max-w-xl">
            Pioneering Global <span className="font-serif italic text-[#D4AF37] font-normal">Connectivity</span>
          </p>
          <div className="w-10 h-[3px] bg-[#D4AF37]/40 mt-5 rounded-full" />
        </div>
      </section>

      {/* --- Corporate Identity Matrix Section --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: Modern Geometric Media Grid */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-stretch relative z-10">
              <div className="col-span-8 rounded-3xl overflow-hidden shadow-xl shadow-slate-900/5 border border-slate-200/60 h-80 transition-transform duration-500 hover:scale-[1.015]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="Corporate Team Meeting"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="col-span-4 flex flex-col gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md shadow-slate-900/5 border border-slate-200/60 h-44 transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    alt="Corporate Architecture Skyscraper"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md shadow-slate-900/5 border border-slate-200/60 h-32 transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2074&auto=format&fit=crop"
                    alt="Digital Workspace Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Premium Vector Background Map Shield Accents */}
            <div className="absolute -left-6 -top-14 w-80 h-64 opacity-[0.08] pointer-events-none z-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/15/World_map_blank_black_white.svg')] bg-contain bg-no-repeat filter sepia hue-rotate-[15deg] saturate-[2.5]" />
          </div>

          {/* Right Side: Structural Framework Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                BuySmartly relationship with Elroix Holdings
              </h3>
              <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
                BuySmartly maintains an integral framework relationship with Elroix Holdings, creating an interconnected ecosystem with direct focus on global compliance sourcing, retail networks, luxury travel corridors, and optimized multi-vertical connectivity channels managed across high-yield systems.
              </p>
            </div>

            {/* Interactive Vertical Timeline Node Anchors */}
            <div className="space-y-6">
              <div className="flex flex-col gap-1.5 border-l-2 border-slate-100 pl-6 relative group">
                <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-[#D4AF37] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <h4 className="text-base font-bold text-slate-800 group-hover:text-[#A18244] transition-colors duration-200">
                  Sourcing, Retail Integration
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                  Seamless coordination frameworks that connect premium corporate layers directly to direct-to-provider routes safely.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 border-l-2 border-slate-100 pl-6 relative group">
                <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-[#D4AF37] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <h4 className="text-base font-bold text-slate-800 group-hover:text-[#A18244] transition-colors duration-200">
                  Advanced Monetization Strategy
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                  Architecting high-performance digital environments for portfolio monitoring and capital discovery pipelines.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- Pillars Core Grid Section (Background Image Optimization) --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="relative group rounded-3xl border border-slate-200/80 p-8 shadow-sm hover:shadow-xl hover:shadow-[#D4AF37]/5 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden min-h-[340px]"
              >
                {/* Clean Layered Asset Engine Engine */}
                <img 
                  src={pillar.bgImage} 
                  alt={pillar.title} 
                  className="absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
                
                {/* Advanced Multi-Gradient Composite Shield For Elite Legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/85 to-slate-950/95 transition-colors duration-500 z-0" />

                {/* Card Content Matrix Layer */}
                <div className="relative z-10 flex flex-col h-full justify-between items-stretch">
                  <div>
                    {/* Floating Icon Base Node */}
                    <div className="h-12 w-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-6 shadow-sm group-hover:bg-[#D4AF37] group-hover:text-slate-950 group-hover:border-[#D4AF37] transition-all duration-300 backdrop-blur-sm">
                      <Icon className="h-5 w-5 stroke-[2.2]" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-[#D4AF37] transition-colors duration-200">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed opacity-85">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Micro Interaction Control Pointer Link */}
                  <div className="mt-8 flex justify-end text-slate-400 group-hover:text-[#D4AF37] transition-colors duration-300">
                    <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/30 transition-all duration-300">
                      <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
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