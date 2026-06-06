import React from 'react'
import { Truck, Package, Globe, ArrowUpRight } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-20 md:py-28 lg:py-36">
      {/* Background Grid Mesh and Lighting Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_40%)] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Side Content Block */}
          <div className="space-y-8 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              <Truck className="h-3.5 w-3.5" /> Logistics Innovation
            </span>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white leading-[1.15]">
              Global logistics designed for{' '}
              <span className="bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#c7a52d] bg-clip-text text-transparent">
                modern trade.
              </span>
            </h1>
            
            <p className="max-w-xl text-base md:text-lg leading-relaxed text-slate-300">
              Move cargo faster, reduce supply chain risk, and instantly connect with carriers, customs, and delivery networks across continents.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-[#D4AF37]/10 transition-all duration-300 hover:bg-[#c7a52d] active:scale-98 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
              >
                Browse logistic plans <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </a>
              <a 
                href="#purchase" 
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View available products
              </a>
            </div>
          </div>

          {/* Right Side Card Grids */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 w-full">
            
            {/* Card 1 */}
            <div className="group space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/30">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-slate-950">
                <Package className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Warehousing</p>
                <h3 className="text-xl font-bold text-white tracking-tight">Secure storage plans</h3>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">Monitored climate-controlled regional storage architecture networks.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/30">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-slate-950">
                <Globe className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Global reach</p>
                <h3 className="text-xl font-bold text-white tracking-tight">Door-to-door coverage</h3>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">Integrated customs clearing across intermodal deepsea ports.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero