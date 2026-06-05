import React from 'react';
import { CheckCircle2, User, Briefcase } from 'lucide-react';

function EcosystemOnboarding() {
  return (
    <section className="py-16 bg-[#F8FAFC] text-slate-800 antialiased">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-3">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] mb-4">
            Join the <span className="text-[#D4AF37]">Ecosystem</span>
          </h2>
          <p className="text-slate-500 font-light max-w-md leading-relaxed">
            Select your primary operational gateway to begin interacting with the network.
          </p>
          <div className="w-12 h-[2px] bg-[#D4AF37]/30 mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <div className="group relative p-8 sm:p-10 bg-[#0F172A] rounded-2xl border border-[#1E293B] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#D4AF37]/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-[#1E293B] border border-[#1E293B] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0F172A] transition-all duration-300">
                  <User className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">For Seekers</h3>
              </div>
              
              <p className="text-slate-300 text-sm font-light leading-relaxed mb-8">
                Search, discover, and efficiently link directly into verified opportunities across all nine ecosystem verticals.
              </p>
              
              <ul className="text-sm text-slate-200 space-y-3.5 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="font-light">Save and monitor favorite opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="font-light">Submit personalized operational requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="font-light">Direct real-time messaging with providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="font-light">Access customized user data dashboard</span>
                </li>
              </ul>
            </div>

            <a 
              href="/register" 
              className="block w-full py-3.5 text-center rounded-xl bg-[#D4AF37] text-[#0F172A] font-medium hover:bg-[#e5c158] shadow-lg shadow-[#D4AF37]/10 transition-colors duration-200 mt-4"
            >
              Sign Up as Seeker
            </a>
          </div>

          <div className="group relative p-8 sm:p-10 bg-[#0F172A] rounded-2xl border border-[#1E293B] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#D4AF37]/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-[#1E293B] border border-[#1E293B] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0F172A] transition-all duration-300">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">For Providers</h3>
              </div>
              
              <p className="text-slate-300 text-sm font-light leading-relaxed mb-8">
                List your core channels, showcase services, and integrate directly with targeted vertical intent seekers globally.
              </p>
              
              <ul className="text-sm text-slate-200 space-y-3.5 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="font-light">Deploy structural infrastructure listings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="font-light">Receive verified, unfiltered inbound inquiries</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="font-light">Earn premium framework verification badge</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="font-light">Track interactions via analytics control desk</span>
                </li>
              </ul>
            </div>

            <a 
              href="/register/provider" 
              className="block w-full py-3.5 text-center rounded-xl border border-[#D4AF37] text-[#D4AF37] font-medium hover:bg-[#D4AF37] hover:text-[#0F172A] transition-all duration-200 mt-4"
            >
              Apply as Provider
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default EcosystemOnboarding;
