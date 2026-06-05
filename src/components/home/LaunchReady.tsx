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
    <section id="launch" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 antialiased">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#D4AF37] uppercase mb-3 inline-block">
            Launch-Ready MVP
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Phase 1 assets designed to feel complete, premium, and market-ready.
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-light leading-relaxed">
            BuySmartly is built to establish brand presence, capture leads, and validate demand with a polished discovery experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-lg shadow-slate-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:border-[#D4AF37]/40 flex flex-col">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 text-[#D4AF37] mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#D4AF37] transition-colors">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">{feature.detail}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-md shadow-slate-900/5 text-center hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300">
            <p className="text-5xl font-bold text-slate-900">9</p>
            <p className="mt-3 text-sm text-slate-600 font-light">Verticals supported in MVP focus</p>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-md shadow-slate-900/5 text-center hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300">
            <p className="text-5xl font-bold text-[#D4AF37]">24/7</p>
            <p className="mt-3 text-sm text-slate-600 font-light">Optimized search and preview availability</p>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-md shadow-slate-900/5 text-center hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300">
            <p className="text-5xl font-bold text-slate-900">Launch</p>
            <p className="mt-3 text-sm text-slate-600 font-light">Designed for fast validation and lead capture</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LaunchReady;
