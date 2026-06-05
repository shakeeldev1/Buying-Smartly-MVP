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
    <section className="py-12 bg-[#FAF9F6] text-zinc-800 antialiased">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* HEADER BLOCK */}
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#A18244] uppercase mb-3">
            Core Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Why Choose <span className="text-[#A18244]">BuySmartly</span>?
          </h2>
          <p className="text-zinc-500 font-light max-w-md leading-relaxed">
            Premium infrastructure engineered to accelerate secure cross-border operational pathways.
          </p>
          <div className="w-12 h-[2px] bg-[#A18244]/30 mt-6 rounded-full" />
        </div>

        {/* REASONS GRID WITH DARK CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="group relative bg-[#181818] p-8 rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#A18244]/5 hover:border-[#A18244]/40 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Wrapper Frame */}
                  <div className="h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#A18244] mb-6 group-hover:bg-[#A18244] group-hover:text-white transition-all duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5 transition-transform duration-300" />
                  </div>
                  
                  {/* Content Elements */}
                  <h3 className="text-lg font-semibold text-white tracking-tight mb-3 group-hover:text-[#A18244] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle Structural Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#A18244]/40 transition-colors duration-500 rounded-b-2xl" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;