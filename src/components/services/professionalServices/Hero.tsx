
import { Briefcase, Sparkles, Users, ArrowRight, TrendingUp } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-950 py-16 md:py-24 lg:py-32">
      {/* Subtle Background Pattern Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 h-[450px] w-[450px] rounded-full bg-amber-100/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Text Column */}
          <div className="space-y-8 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              <Briefcase className="h-3.5 w-3.5 stroke-[2.5]" /> Professional Advisory Services
            </span>
            
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl text-slate-900 leading-[1.1]">
              Advisory, talent and{' '}
              <span className="bg-gradient-to-r from-[#D4AF37] via-amber-400 to-[#bfa033] bg-clip-text text-transparent">
                growth services
              </span>{' '}
              for ambitious businesses.
            </h1>
            
            <p className="max-w-xl text-base md:text-lg leading-relaxed text-slate-600">
              Connect to validated experts in high-tier corporate strategy, automated systems compliance, and modern brand scale architecture execution.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-[#D4AF37]/20 transition-all duration-300 hover:bg-[#c7a52d] active:scale-98 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
              >
                Explore consulting bundles <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="#purchase" 
                className="rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
              >
                View purchase details
              </a>
            </div>
          </div>

          {/* Right Rich Media Column */}
          <div className="relative lg:col-span-5 w-full max-w-xl mx-auto lg:max-w-none">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] xl:aspect-[1] border border-slate-200 shadow-2xl rounded-3xl overflow-hidden bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1000&auto=format&fit=crop" 
                alt="Executive consulting roundtable workshop overview" 
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
              />
              {/* Image Gradient Overlay Cover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Floating Card Badge 1: Team Enablement */}
            <div className="absolute -left-6 bottom-32 hidden sm:flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl max-w-xs backdrop-blur-md">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-950">Team enablement</h4>
                <p className="text-[11px] text-slate-500 leading-normal mt-0.5">Scale operations with elite coaching profiles.</p>
              </div>
            </div>

            {/* Floating Card Badge 2: Growth Strategy (Now Themed Gold #D4AF37) */}
            <div className="absolute -right-4 -bottom-6 flex items-center gap-4 rounded-2xl border-[#D4AF37]/30 bg-amber-50/95 p-4 shadow-xl max-w-xs backdrop-blur-md">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37] text-slate-950">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-950 inline-flex items-center gap-1.5">
                  Growth planning <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />
                </h4>
                <p className="text-[11px] text-slate-600 leading-normal mt-0.5">Maximize multi-channel operational value yield.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero