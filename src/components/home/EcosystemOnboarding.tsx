import React from 'react';
import { CheckCircle2, User, Briefcase } from 'lucide-react';

function EcosystemOnboarding() {
  return (
    <section className="py-24 bg-[#FAF9F6] text-zinc-800 antialiased">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* HEADER BLOCK */}
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#A18244] uppercase mb-3">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Join the <span className="text-[#A18244]">Ecosystem</span>
          </h2>
          <p className="text-zinc-500 font-light max-w-md leading-relaxed">
            Select your primary operational gateway to begin interacting with the network.
          </p>
          <div className="w-12 h-[2px] bg-[#A18244]/30 mt-6 rounded-full" />
        </div>

        {/* ONBOARDING DUAL CARD SPLIT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* USER PATHWAY CARD */}
          <div className="group relative p-8 sm:p-10 bg-[#181818] rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#A18244]/5 flex flex-col justify-between">
            <div>
              {/* Context Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#A18244] group-hover:bg-[#A18244] group-hover:text-white transition-all duration-300">
                  <User className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">For Seekers</h3>
              </div>
              
              <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8">
                Search, discover, and efficiently link directly into verified opportunities across all nine ecosystem verticals.
              </p>
              
              {/* Features List */}
              <ul className="text-sm text-zinc-300 space-y-3.5 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#A18244] mt-0.5 flex-shrink-0" />
                  <span className="font-light">Save and monitor favorite opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#A18244] mt-0.5 flex-shrink-0" />
                  <span className="font-light">Submit personalized operational requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#A18244] mt-0.5 flex-shrink-0" />
                  <span className="font-light">Direct real-time messaging with providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#A18244] mt-0.5 flex-shrink-0" />
                  <span className="font-light">Access customized user data dashboard</span>
                </li>
              </ul>
            </div>

            {/* Action Call */}
            <a 
              href="/register" 
              className="block w-full py-3.5 text-center rounded-xl bg-[#A18244] text-white font-medium hover:bg-[#8a6e3b] shadow-lg shadow-[#A18244]/10 transition-colors duration-200 mt-4"
            >
              Sign Up as Seeker
            </a>
          </div>

          {/* PROVIDER PATHWAY CARD */}
          <div className="group relative p-8 sm:p-10 bg-[#181818] rounded-2xl border border-zinc-800 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#A18244]/5 flex flex-col justify-between">
            <div>
              {/* Context Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#A18244] group-hover:bg-[#A18244] group-hover:text-white transition-all duration-300">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">For Providers</h3>
              </div>
              
              <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8">
                List your core channels, showcase services, and integrate directly with targeted vertical intent seekers globally.
              </p>
              
              {/* Features List */}
              <ul className="text-sm text-zinc-300 space-y-3.5 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#A18244] mt-0.5 flex-shrink-0" />
                  <span className="font-light">Deploy structural infrastructure listings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#A18244] mt-0.5 flex-shrink-0" />
                  <span className="font-light">Receive verified, unfiltered inbound inquiries</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#A18244] mt-0.5 flex-shrink-0" />
                  <span className="font-light">Earn premium framework verification badge</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#A18244] mt-0.5 flex-shrink-0" />
                  <span className="font-light">Track interactions via analytics control desk</span>
                </li>
              </ul>
            </div>

            {/* Action Call */}
            <a 
              href="/register/provider" 
              className="block w-full py-3.5 text-center rounded-xl border border-[#A18244] text-[#A18244] font-medium hover:bg-[#A18244] hover:text-white transition-all duration-200 mt-4"
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