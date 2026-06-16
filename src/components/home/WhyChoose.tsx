import React from 'react';
import { Shield, Zap, Globe, Users } from 'lucide-react';

const reasons = [
  { icon: Shield, title: 'Trust & Verification', desc: 'All providers undergo rigorous vetting processes to guarantee elite quality and total transaction reliability.' },
  { icon: Zap, title: 'Fast Matching Systems', desc: 'Our high-performance automated networks connect your operations with live global opportunities instantly.' },
  { icon: Globe, title: 'Global Infrastructure', desc: 'Break regional barriers and cross-navigate opportunities across dynamic international corridors easily.' },
  { icon: Users, title: 'Ecosystem Driven', desc: 'Join an interconnected, high-yield marketplace tailored for both enterprise providers and seekers.' },
];

function WhyChoose() {
  return (
    <section className="py-10 bg-slate-50 text-slate-900 antialiased">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-3">
            Core Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Why Choose <span className="text-[#D4AF37]">BuySmartly</span> ?
          </h2>
          <p className="text-slate-500 font-light max-w-md leading-relaxed">
            Premium infrastructure engineered to accelerate secure cross-border operational pathways.
          </p>
          <div className="w-25 h-[2px] bg-[#D4AF37]/60 mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="group relative bg-white border border-slate-200/80 p-8 rounded-3xl shadow-lg shadow-slate-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:border-[#D4AF37]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="h-14 w-14 rounded-2xl bg-linear-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:shadow-lg group-hover:shadow-[#D4AF37]/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3 group-hover:text-[#D4AF37] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;