import { Globe, ShieldCheck, Settings, ArrowUpRight } from 'lucide-react';

const CORE_PILLARS = [
  {
    icon: Globe,
    title: "Global Sourcing Network",
    description: "BuySmartly is a dominant connective portal to global sourcing networks, ensuring elite business operations at scale.",
    bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArdt9oXuu3b8z-sz-c7RFkdu7E38xrpb2-g&s" // Global logistics/shipping image
  },
  {
    icon: ShieldCheck,
    title: "Uncompromised Integrity",
    description: "Built on absolute trust, transparency, and top-tier direct channels across verified networks.",
    bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" // Handshake/Trust image
  },
  {
    icon: Settings,
    title: "The Monetization Engine",
    description: "Driving cross-vertical corporate capitalization and premium strategic connection pathways.",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" // Business strategy/finance image
  }
];

function AboutUs() {
  return (
    <div className="bg-white text-slate-900 selection:bg-[#D4AF37]/10 selection:text-[#D4AF37]">

      {/* --- Oopar Wala Section (Unchanged) --- */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-10">
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-3">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            About <span className="text-[#D4AF37]">Us</span>
          </h1>
          <p className="text-lg sm:text-xl font-normal text-slate-600 tracking-wide max-w-xl">
            Pioneering Global <span className="font-serif italic text-[#D4AF37] font-medium">Connectivity</span>
          </p>
          <div className="w-12 h-[2px] bg-[#D4AF37]/30 mt-6 rounded-full" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-stretch relative z-10">
              <div className="col-span-8 rounded-3xl overflow-hidden shadow-xl shadow-slate-900/10 border border-slate-200/80 h-80 transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="Corporate Team Meeting"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="col-span-4 flex flex-col gap-4">
                <div className="rounded-3xl overflow-hidden shadow-lg shadow-slate-900/10 border border-slate-200/80 h-44 transition-transform duration-500 hover:scale-[1.03]">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    alt="Corporate Architecture skyscraper"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg shadow-slate-900/10 border border-slate-200/80 h-32 transition-transform duration-500 hover:scale-[1.03]">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2074&auto=format&fit=crop"
                    alt="Digital Workspace Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -left-4 -top-12 w-72 h-56 opacity-[0.12] pointer-events-none z-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/15/World_map_blank_black_white.svg')] bg-contain bg-no-repeat filter sepia hue-rotate-[15deg] saturate-[2.5]" />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                BuySmartly relationship with Elroix Holdings
              </h3>
              <p className="text-slate-600 text-base font-light leading-relaxed">
                BuySmartly maintains an integral framework relationship with Elroix Holdings, creating an interconnected ecosystem with direct focus on global compliance sourcing, retail networks, luxury travel corridors, and optimized multi-vertical connectivity channels managed across high-yield systems.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-1.5 border-l-2 border-[#D4AF37]/40 pl-6 relative group">
                <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-[#D4AF37] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <h4 className="text-base font-semibold text-slate-900 group-hover:text-[#D4AF37] transition-colors duration-200">
                  Sourcing, Retail Integration
                </h4>
                <p className="text-slate-600 text-sm font-light leading-relaxed">
                  Seamless coordination frameworks that connect premium corporate layers directly to direct-to-provider routes safely.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 border-l-2 border-[#D4AF37]/40 pl-6 relative group">
                <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-[#D4AF37] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <h4 className="text-base font-semibold text-slate-900 group-hover:text-[#D4AF37] transition-colors duration-200">
                  Advanced Monetization Strategy
                </h4>
                <p className="text-slate-600 text-sm font-light leading-relaxed">
                  Architecting high-performance digital environments for portfolio monitoring and capital discovery pipelines.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- Updated Cards Section (Background Images Added) --- */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                style={{ backgroundImage: `url(${pillar.bgImage})` }}
                className="relative group bg-cover bg-center rounded-3xl border border-slate-700/50 p-8 shadow-lg shadow-slate-900/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#D4AF37]/20 hover:border-[#D4AF37]/50 flex flex-col justify-between overflow-hidden min-h-[320px]"
              >
                {/* Dark Overlay so text is readable over the image */}
                <div className="absolute inset-0 bg-slate-900/85 group-hover:bg-slate-900/75 transition-colors duration-500 z-0" />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/30 to-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 shadow-md shadow-black/20 group-hover:shadow-lg group-hover:shadow-[#D4AF37]/30 transition-all duration-300 group-hover:scale-110 backdrop-blur-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    {/* Changed text color to white for contrast */}
                    <h3 className="text-xl font-semibold text-white tracking-tight mb-3 group-hover:text-[#D4AF37] transition-colors duration-200">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-300 text-sm font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 flex justify-end text-slate-400 group-hover:text-[#D4AF37] transition-colors duration-300">
                    <ArrowUpRight className="h-5 w-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
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