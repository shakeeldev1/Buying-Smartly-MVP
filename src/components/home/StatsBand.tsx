import React from 'react';
import { Globe, ShieldCheck, Activity, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Globe,
    value: '190+',
    label: 'Countries Covered',
    detail: 'Direct corridors operative',
  },
  {
    icon: ShieldCheck,
    value: '2.4K',
    label: 'Verified Providers',
    detail: 'Compliance audited networks',
  },
  {
    icon: Activity,
    value: '$8.1B',
    label: 'Capital Tracked',
    detail: 'Multi-vertical pipelines',
  },
  {
    icon: TrendingUp,
    value: '98.7%',
    label: 'Operator Match Rate',
    detail: 'High precision connections',
  },
];

function StatsBand() {
  return (
    <section className="relative bg-[#0F172A] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_55%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-[#1E293B]/60">
          {stats.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="py-10 px-4 sm:px-6 flex flex-col items-center text-center"
              >
                <div className="h-10 w-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  {item.value}
                </span>
                <span className="mt-1 text-xs sm:text-sm font-semibold tracking-wider text-[#D4AF37] uppercase">
                  {item.label}
                </span>
                <span className="mt-2 text-xs text-slate-400 font-light">
                  {item.detail}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsBand;
