import { CheckCircle2, User, Briefcase, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

function EcosystemOnboarding() {
  return (
    <section className="py-12 bg-white text-slate-900 antialiased overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Content */}
        <div className="text-center mb-14 max-w-2xl mx-auto flex flex-col items-center space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37]/10 text-[#A18244] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em]">
            <Sparkles className="h-3 w-3 stroke-[2.5]" />
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Join the <span className="text-[#D4AF37]">Ecosystem</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium max-w-md leading-relaxed">
            Select your primary operational gateway to begin interacting with the network.
          </p>
          <div className="w-10 h-[3px] bg-[#D4AF37]/40 mt-4 rounded-full" />
        </div>

        {/* 3-Column Center-Focused Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* COLUMN 1: SEEKERS PORTAL CARD (Left) */}
          <div className="lg:col-span-4 group relative p-6 sm:p-8 bg-white border border-slate-200/80 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-[#D4AF37]/5 hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute -inset-px bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-amber-50 group-hover:border-amber-100 flex items-center justify-center text-slate-600 group-hover:text-[#D4AF37] transition-all duration-300">
                  <User className="h-5 w-5 stroke-[2.2]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">For Seekers</h3>
              </div>
              
              <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                Search, discover, and efficiently link directly into verified opportunities across all nine ecosystem verticals.
              </p>
              
              <ul className="text-xs sm:text-sm text-slate-700 space-y-3 mb-8">
                {[
                  "Save and monitor favorite opportunities",
                  "Submit personalized operational requests",
                  "Direct real-time messaging with providers",
                  "Access customized user data dashboard"
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#D4AF37] mt-0.5 shrink-0 stroke-[2.5]" />
                    <span className="font-medium text-slate-600">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="/register" 
              className="relative z-10 w-full py-3 flex items-center justify-center gap-1.5 rounded-xl bg-[#D4AF37] text-white font-bold text-xs shadow-sm hover:bg-slate-900 hover:shadow-md transition-all duration-200 group/btn"
            >
              <span>Sign Up as Seeker</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
            </a>
          </div>

          {/* COLUMN 2: VISUAL MEDIA DISPLAY CARD (Centered Anchor) */}
          <div className="lg:col-span-4 relative group hidden lg:block overflow-hidden rounded-3xl border border-slate-200 shadow-sm min-h-[400px]">
            {/* Background Ambient Aura Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* High-Contrast Core Image Asset */}
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Ecosystem Network Hub" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Deep Dynamic Linear Dark Gradient Vignette Shield */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
            
            {/* Floating Live Metric Activity Badge Overlay */}
            <div className="absolute top-4 left-4 backdrop-blur-md bg-white/90 border border-white/20 py-1.5 px-3 rounded-xl flex items-center gap-2 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold text-slate-800 tracking-tight uppercase flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-emerald-600" />
                +12.4k Active Networks
              </span>
            </div>

            {/* Bottom Brand Context Text Area */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
              <h4 className="text-base font-bold tracking-tight">The Modern Standard</h4>
              <p className="text-slate-300 text-xs font-medium leading-relaxed">
                Connecting multi-vertical operational vectors through highly secure, continuously verified infrastructure pathways.
              </p>
            </div>
          </div>

          {/* COLUMN 3: PROVIDERS PORTAL CARD (Right) */}
          <div className="lg:col-span-4 group relative p-6 sm:p-8 bg-white border border-slate-200/80 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-[#D4AF37]/5 hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute -inset-px bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-amber-50 group-hover:border-amber-100 flex items-center justify-center text-slate-600 group-hover:text-[#D4AF37] transition-all duration-300">
                  <Briefcase className="h-5 w-5 stroke-[2.2]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">For Providers</h3>
              </div>
              
              <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                List your core channels, showcase services, and integrate directly with targeted vertical intent seekers globally.
              </p>
              
              <ul className="text-xs sm:text-sm text-slate-700 space-y-3 mb-8">
                {[
                  "Deploy structural infrastructure listings",
                  "Receive verified, unfiltered inbound inquiries",
                  "Earn premium framework verification badge",
                  "Track interactions via analytics control desk"
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#D4AF37] mt-0.5 shrink-0 stroke-[2.5]" />
                    <span className="font-medium text-slate-600">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="/register/provider" 
              className="relative z-10 w-full py-3 flex items-center justify-center gap-1.5 rounded-xl border border-[#D4AF37]/80 text-[#A18244] font-bold text-xs bg-white hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all duration-200 group/btn shadow-sm"
            >
              <span>Apply as Provider</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default EcosystemOnboarding;