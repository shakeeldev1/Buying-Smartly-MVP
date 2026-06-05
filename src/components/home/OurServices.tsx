import React from 'react';
import { ShoppingCart, Plane, Briefcase, GraduationCap, HeartPulse, Truck, Building2, Package, UserRound } from 'lucide-react';

const services = [
  { icon: ShoppingCart, title: 'Shopping & Sourcing', desc: 'Discover products and premium suppliers globally.' },
  { icon: Plane, title: 'Travel Experiences', desc: 'Book curated luxury travel opportunities.' },
  { icon: Briefcase, title: 'Jobs & Careers', desc: 'Find executive career opportunities worldwide.' },
  { icon: Building2, title: 'Business Opportunities', desc: 'Explore investment and corporate partnership deals.' },
  { icon: GraduationCap, title: 'Education', desc: 'Access elite learning and professional certification programs.' },
  { icon: HeartPulse, title: 'Healthcare', desc: 'Connect with premium medical services and health networks.' },
  { icon: Truck, title: 'Logistics', desc: 'Find integrated shipping and supply chain solutions.' },
  { icon: Package, title: 'Supplier Sourcing', desc: 'Source directly from fully verified international suppliers.' },
  { icon: UserRound, title: 'Professional Services', desc: 'Hire top-tier experts across specialized business disciplines.' },
];

function OurServices() {
  return (
    <section className="py-24 bg-[#FAF9F6] text-zinc-800 antialiased">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* HEADER BLOCK */}
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#A18244] uppercase mb-3">
            Strategic Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Nine Vertical <span className="text-[#A18244]">Ecosystem</span>
          </h2>
          <p className="text-zinc-500 font-light max-w-lg leading-relaxed">
            Our multi-vertical core infrastructure powering seamless global connection pathways.
          </p>
          <div className="w-12 h-[2px] bg-[#A18244]/30 mt-6 rounded-full" />
        </div>

        {/* SERVICES GRID WITH DARK CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div 
                key={i} 
                className="group relative bg-[#181818] p-8 rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#A18244]/5 hover:border-[#A18244]/40 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className="h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#A18244] mb-6 group-hover:bg-[#A18244] group-hover:text-white transition-all duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5 transition-transform duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white tracking-tight mb-2 group-hover:text-[#A18244] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm font-light text-zinc-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Decorative bottom corner line */}
                <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#A18244]/40 group-hover:w-16 transition-all duration-500 rounded-br-2xl" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OurServices;