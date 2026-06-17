import { Shield, Zap, Globe, Users } from 'lucide-react';

const REASONS = [
  { 
    icon: Shield, 
    title: 'Trust & Verification', 
    desc: 'All providers undergo rigorous vetting processes to guarantee elite quality and total transaction reliability.' 
  },
  { 
    icon: Zap, 
    title: 'Fast Matching Systems', 
    desc: 'Our high-performance automated networks connect your operations with live global opportunities instantly.' 
  },
  { 
    icon: Globe, 
    title: 'Global Infrastructure', 
    desc: 'Break regional barriers and cross-navigate opportunities across dynamic international corridors easily.' 
  },
  { 
    icon: Users, 
    title: 'Ecosystem Driven', 
    desc: 'Join an interconnected, high-yield marketplace tailored for both enterprise providers and seekers.' 
  },
];

function WhyChoose() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 text-slate-900 antialiased overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Module Header Block Area */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#A18244] bg-[#D4AF37]/10 px-3 py-1 rounded-full mb-3">
            Core Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Why Choose <span className="text-[#D4AF37]">BuySmartly</span>?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 font-medium max-w-md leading-relaxed">
            Premium infrastructure engineered to accelerate secure cross-border operational pathways.
          </p>
          <div className="w-10 h-[3px] bg-[#D4AF37]/40 mt-5 rounded-full" />
        </div>

        {/* Dynamic Structural Grid Framework */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {REASONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="group relative bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-[#D4AF37]/5 hover:border-[#D4AF37]/30 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between items-stretch overflow-hidden cursor-pointer"
              >
                {/* Micro Ambient Glow Layer */}
                <div className="absolute -inset-px bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex flex-col flex-1 justify-between items-stretch">
                  <div>
                    {/* Icon Shield Blueprint */}
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-6 shadow-sm group-hover:bg-[#D4AF37] group-hover:text-slate-950 group-hover:border-[#D4AF37] transition-all duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5 stroke-[2.2]" />
                    </div>
                    
                    {/* Card Title Metadata */}
                    <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2 group-hover:text-[#A18244] transition-colors duration-200">
                      {item.title}
                    </h3>
                    
                    {/* Card Description Block */}
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed opacity-95">
                      {item.desc}
                    </p>
                  </div>
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