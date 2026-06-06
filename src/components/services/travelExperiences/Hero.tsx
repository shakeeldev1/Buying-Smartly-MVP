import React from 'react'
import { MapPin, Compass, Sunrise, ArrowUpRight } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-950 py-12">
      {/* Editorial geometric light beam & subtle mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.12),_transparent_48%)]" />
      <div className="absolute -top-40 -right-40  w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">

          {/* Left Text Block */}
          <div className="max-w-xl space-y-8 lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#D4AF37]">
              <MapPin className="h-3.5 w-3.5 animate-pulse" /> Corporate Expeditionary Desk
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-slate-950 leading-[1.1]">
              Curated trade journeys for modern explorers.
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">
              Coordinate custom business, cultural, and logistics itineraries with on-the-ground intelligence and white‑glove support.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#services" className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-[#c7a52d] shadow-lg shadow-amber-500/10 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]">
                Explore Itineraries <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#purchase" className="rounded-xl border border-slate-200 bg-slate-100 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200">
                Show Booked Trips
              </a>
            </div>
          </div>

          {/* Right Layout Block - Overlapping Media & Feature Collage */}
          <div className="relative w-full lg:col-span-6 h-[520px] sm:h-[600px] lg:h-[550px]">
            
            {/* Card 1: Media Card (Sits slightly below/behind) */}
            <div className="absolute top-0 left-0 w-[85%] sm:w-[75%] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                  alt="Modern business terminal architecture" 
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
              </div>
              <div className="flex items-start gap-4 mt-5 px-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Compass className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950">Dynamic Itinerary Architecture</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">Multi-stop flight lanes matching local factory hubs.</p>
                </div>
              </div>
            </div>

            {/* Card 2: Floating Text Card (Overlaps the bottom right of the image card) */}
            <div className="absolute bottom-4 right-0 w-[75%] sm:w-[65%] rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/30">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Sunrise className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-950">Elite Access Passports</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    Private terminal arrivals, translation support, and invitation-only wholesale gallery previews.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero