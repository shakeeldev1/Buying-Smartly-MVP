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
    <section className="py-20 bg-white text-slate-900 antialiased">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-3">
            Strategic Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Nine Vertical <span className="text-[#D4AF37]">Ecosystem</span>
          </h2>
          <p className="text-slate-500 font-light max-w-lg leading-relaxed">
            Our multi-vertical core infrastructure powering seamless global connection pathways.
          </p>
          <div className="w-12 h-[2px] bg-[#D4AF37]/30 mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div 
                key={i} 
                className="group relative bg-white border border-slate-200/80 p-8 rounded-3xl shadow-lg shadow-slate-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:border-[#D4AF37]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:shadow-lg group-hover:shadow-[#D4AF37]/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2 group-hover:text-[#D4AF37] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm font-light text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="absolute bottom-0 right-0 w-0 h-[3px] bg-[#D4AF37]/40 group-hover:w-12 transition-all duration-500 rounded-bl-3xl" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OurServices;
