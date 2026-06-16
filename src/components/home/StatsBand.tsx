
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
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.15),_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(212,175,55,0.08),_transparent_70%)] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative py-12 px-6 sm:px-8 flex flex-col items-center text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-[#D4AF37]/40 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#D4AF37] uppercase mb-2">
                  {item.label}
                </span>
                <span className="text-xs text-slate-300 font-light">
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
