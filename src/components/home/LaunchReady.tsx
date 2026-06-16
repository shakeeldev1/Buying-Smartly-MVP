import React from 'react';
import { Search, Eye, Users, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Search-First Discovery',
    detail: 'Search across shopping, travel, logistics, services, and business opportunities with rich vertical filters.',
  },
  {
    icon: Eye,
    title: 'Preview Engine',
    detail: 'Deliver a powerful pre-signup experience with curated results that build trust and drive onboarding.',
  },
  {
    icon: Users,
    title: 'User & Provider Onboarding',
    detail: 'Support seeker registration, provider enrollment, and business listings with a clean operational flow.',
  },
  {
    icon: BarChart3,
    title: 'Launch-Ready Metrics',
    detail: 'Prepare analytics, lead capture, and subscription-ready monetization for rapid commercial activation.',
  },
];

function LaunchReady() {
  return (
    <section id="launch" className="py-5 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 antialiased">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#D4AF37] uppercase mb-3 inline-block">
            Launch-Ready MVP
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Premium, market-ready Phase 1 assets.
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-light leading-relaxed">
            BuySmartly is built to establish brand presence, capture leads, and validate demand with a polished discovery experience.
          </p>
        </div>

        {/* --- Updated 4 Feature Cards Section --- */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-gradient-to-b from-white to-slate-50 rounded-2xl border border-slate-200/80 p-6 shadow-sm shadow-slate-900/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D4AF37]/15 hover:border-[#D4AF37]/50 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Subtle Hover Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center">
                  {/* Centered Icon with Premium Hover Effect */}
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/10 to-transparent text-[#D4AF37] ring-1 ring-[#D4AF37]/20 shadow-sm mb-4 group-hover:bg-[#D4AF37] group-hover:text-white group-hover:ring-[#D4AF37] group-hover:scale-110 transition-all duration-500">
                    <Icon className="h-6 w-6 transition-colors duration-500" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 tracking-tight mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 leading-relaxed font-light">
                    {feature.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* --- End of Updated Section --- */}

        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="group relative bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-1 transition-all duration-500 text-center overflow-hidden flex flex-col justify-center items-center">
            {/* Animated Top Accent Line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <h4 className="text-4xl font-extrabold text-slate-800 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
              9
            </h4>
            <p className="mt-2 text-sm text-slate-500 font-medium tracking-wide">
              Verticals supported in MVP focus
            </p>
          </div>

          {/* Card 2 (Highlighted) */}
          <div className="group relative bg-gradient-to-b from-[#D4AF37]/5 to-transparent rounded-2xl border border-[#D4AF37]/30 p-6 shadow-md hover:shadow-xl hover:shadow-[#D4AF37]/15 hover:-translate-y-1 transition-all duration-500 text-center overflow-hidden flex flex-col justify-center items-center">
            {/* Static Top Accent Line for the highlighted card */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent scale-x-100" />
            
            <h4 className="text-4xl font-extrabold text-[#D4AF37] tracking-tight drop-shadow-sm">
              24/7
            </h4>
            <p className="mt-2 text-sm text-slate-600 font-medium tracking-wide">
              Optimized search and preview
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-1 transition-all duration-500 text-center overflow-hidden flex flex-col justify-center items-center">
            {/* Animated Top Accent Line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <h4 className="text-4xl font-extrabold text-slate-800 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
              Launch
            </h4>
            <p className="mt-2 text-sm text-slate-500 font-medium tracking-wide">
              Fast validation and lead capture
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default LaunchReady;