import React from 'react'
import { ShoppingBag, Sparkles, Globe } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-[#FFF6EB] text-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* Left Text Block */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/15 px-4 py-2 text-sm font-semibold text-[#B07B12]">
              <ShoppingBag className="h-4 w-4" /> Shopping & Sourcing
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Curated sourcing for smart buyers and commerce teams.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-700">
              Discover verified suppliers, buy curated products, and source the items your business needs with speed and transparency.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#services" className="rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#c7a52d]">
                Browse sourcing bundles
              </a>
              <a href="#purchase" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                See purchase details
              </a>
            </div>
          </div>

          {/* Right Value Cards Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#D4AF37] text-slate-950">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Global catalogs</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Reach suppliers from every region with curated products and protected sourcing.</p>
            </div>
            
            <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#D4AF37] text-slate-950">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Preferred deals</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Exclusive sourcing packages for quality, price, and inventory reliability.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}