import { useState } from 'react'
import { Truck, Package, MapPin, Clock, ArrowUpRight } from 'lucide-react'

const offers = [
  {
    id: 1,
    title: 'Freight Booking Suite',
    description: 'Instant freight quotes across air, sea and road shipments with customs advisory.',
    price: '$89',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Storage & Fulfillment',
    description: 'Flexible warehouse allocation plus order consolidation and last-mile delivery.',
    price: '$125',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'End-to-end Tracking',
    description: 'Real-time shipment visibility, alerts, and performance analytics for each load.',
    price: '$49',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Customs Brokerage Matrix',
    description: 'Automated tariff classification, entry declarations, and rapid clearance clearing ports.',
    price: '$150',
    img: 'https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Cold-Chain Network',
    description: 'Temperature-monitored lanes with proactive exception control for sensory products.',
    price: '$210',
    img: 'https://images.unsplash.com/photo-1585713181935-d5f622cc2415?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Last-Mile Micro Dispatch',
    description: 'Hyper-local inner city fleet deployment with crowdsourced and electric vehicle support.',
    price: '$65',
    img: 'https://images.unsplash.com/photo-1558441719-ff34b0524a24?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 7,
    title: 'Intermodal Port Transfer',
    description: 'Cross-docking operations aligning deepsea terminal lanes directly into rail grids.',
    price: '$310',
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 8,
    title: 'Consolidated LCL Cargo',
    description: 'Less-than-container loading operations helping small brands group freight costs.',
    price: '$75',
    img: 'https://images.unsplash.com/photo-1569056187428-b97f66b6226c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 9,
    title: 'Reverse Supply Routing',
    description: 'Closed-loop item returns, multi-point grading systems, and remanufacturing intake links.',
    price: '$95',
    img: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 10,
    title: 'IoT Telemetry Sensors',
    description: 'Live physical orientation tracking, humidity logs, and smart impact yard meters.',
    price: '$110',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 11,
    title: 'Hazardous Cargo Escort',
    description: 'Certified tactical management routines for industrial batteries and complex component fields.',
    price: '$450',
    img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 12,
    title: 'Air Charter Priority Deck',
    description: 'Full plane bookings for premium peak sourcing cycles requiring overnight regional access.',
    price: '$980',
    img: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=800&auto=format&fit=crop'
  }
];

function GetOurServices() {
  const [purchasedServices, setPurchasedServices] = useState([])

  const handleBuy = (id) => {
    setPurchasedServices((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  const purchasedItems = offers.filter((offer) => purchasedServices.includes(offer.id))

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      
      {/* Header section */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Logistics services</p>
        <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl leading-tight">
          Choose the shipping product that matches your trade flow.
        </h2>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl shadow-xl">
        <img 
          src="https://images.unsplash.com/photo-1519452575417-5648b6b53a28?w=1200&q=80&auto=format&fit=crop" 
          alt="logistics terminal grid background" 
          className="w-full h-[300px] md:h-[400px] object-cover" 
        />
      </div>

      {/* Core Operational Features */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 border-b border-slate-200 pb-16">
        <div className="flex flex-col items-start gap-4">
          <div className="rounded-xl bg-[#D4AF37]/10 p-2.5 text-[#D4AF37]"><Truck className="h-5 w-5" /></div>
          <h4 className="text-lg font-bold text-slate-950 tracking-tight">Fast Booking</h4>
          <p className="text-sm text-slate-600 leading-relaxed">Get instant quotes across modes and carriers.</p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="rounded-xl bg-[#D4AF37]/10 p-2.5 text-[#D4AF37]"><Package className="h-5 w-5" /></div>
          <h4 className="text-lg font-bold text-slate-950 tracking-tight">Warehousing</h4>
          <p className="text-sm text-slate-600 leading-relaxed">Integrated storage, kitting and fulfillment options.</p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="rounded-xl bg-[#D4AF37]/10 p-2.5 text-[#D4AF37]"><MapPin className="h-5 w-5" /></div>
          <h4 className="text-lg font-bold text-slate-950 tracking-tight">Route Optimization</h4>
          <p className="text-sm text-slate-600 leading-relaxed">Lower costs with smarter routing and consolidation.</p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="rounded-xl bg-[#D4AF37]/10 p-2.5 text-[#D4AF37]"><Clock className="h-5 w-5" /></div>
          <h4 className="text-lg font-bold text-slate-950 tracking-tight">SLA & Alerts</h4>
          <p className="text-sm text-slate-600 leading-relaxed">SLA-backed delivery windows and exception alerts.</p>
        </div>
      </div>

      {/* Tier Matrix pricing options */}
      <div className="mt-20 grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-slate-300">
          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Standard Tier</h5>
          <p className="mt-3 text-3xl font-black text-slate-950">$49 <span className="text-xs font-medium text-slate-500">/ mo</span></p>
          <p className="mt-4 text-xs leading-relaxed text-slate-600">Basic tracking coordinates and standard monthly pipeline reporting profiles.</p>
        </div>
        <div className="rounded-2xl border-2 border-[#D4AF37] bg-amber-50/20 p-8 shadow-lg shadow-amber-500/5 relative">
          <div className="absolute top-4 right-4 rounded-full bg-[#D4AF37] px-2 py-0.5 text-[9px] font-extrabold uppercase text-slate-950">Recommended</div>
          <h5 className="text-xs font-bold text-[#bda033] uppercase tracking-widest">Business Tier</h5>
          <p className="mt-3 text-3xl font-black text-slate-950">$129 <span className="text-xs font-medium text-slate-500">/ mo</span></p>
          <p className="mt-4 text-xs leading-relaxed text-slate-600">Preferred carrier arrangements with full priority tier SLA operational guarantees.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-slate-300">
          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enterprise Tier</h5>
          <p className="mt-3 text-3xl font-black text-slate-950">Custom</p>
          <p className="mt-4 text-xs leading-relaxed text-slate-600">Full API integration nodes and a completely dedicated regional operations team.</p>
        </div>
      </div>

      {/* Grid Client Quotes Review */}
      <div className="mt-12 grid gap-6 md:grid-cols-3 border-b border-slate-200 pb-20">
        <blockquote className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
          <p className="text-xs leading-relaxed text-slate-600 italic">"Shipment exceptions used to derail us — now we handle them before they impact customers."</p>
          <cite className="mt-4 block text-xs not-italic font-bold text-slate-950">— Ahmed P. (Ops Lead)</cite>
        </blockquote>
        <blockquote className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
          <p className="text-xs leading-relaxed text-slate-600 italic">"Consolidation saved us thousands on ocean freight last quarter."</p>
          <cite className="mt-4 block text-xs not-italic font-bold text-slate-950">— Marta L. (Supply Chain)</cite>
        </blockquote>
        <blockquote className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
          <p className="text-xs leading-relaxed text-slate-600 italic">"Real-time tracking cut our customer support volume in half."</p>
          <cite className="mt-4 block text-xs not-italic font-bold text-slate-950">— Jason C. (CS Manager)</cite>
        </blockquote>
      </div>

      {/* Extended Run Sheet Inventory - 12 Unique Services */}
      <div className="mt-24">
        <h3 className="text-xl font-bold tracking-tight text-slate-950 mb-8 border-l-2 border-[#D4AF37] pl-3">
          Open Booking Freight Modules
        </h3>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <article key={offer.id} className="group overflow-hidden rounded-2xl bg-white border border-slate-200 flex flex-col shadow-sm transition hover:shadow-md">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute top-3 right-3 rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-bold text-amber-600 border border-slate-200">
                  ID #{offer.id}
                </div>
              </div>
              
              <div className="p-6 flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-base font-bold text-slate-950 tracking-tight leading-snug">{offer.title}</h4>
                    <span className="text-base font-black text-[#D4AF37] shrink-0">{offer.price}</span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">{offer.description}</p>
                </div>
                
                <button
                  type="button"
                  onClick={() => handleBuy(offer.id)}
                  className={`mt-6 w-full rounded-xl py-2.5 text-xs font-bold transition-all duration-200 ${
                    purchasedServices.includes(offer.id)
                      ? 'cursor-not-allowed bg-slate-100 text-slate-400 border border-slate-200'
                      : 'bg-[#D4AF37] text-slate-950 hover:bg-[#c7a52d]'
                  }`}
                  disabled={purchasedServices.includes(offer.id)}
                >
                  {purchasedServices.includes(offer.id) ? 'Manifest Secured' : 'Lock Module Rate'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Live State Summary Sheet Manifest */}
      {purchasedItems.length > 0 && (
        <div id="purchase" className="mt-20 rounded-2xl border border-[#D4AF37]/30 bg-amber-50/10 p-6 md:p-8 shadow-xl shadow-amber-500/5 scroll-mt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Active Manifest Credentials</p>
              <h3 className="mt-1 text-xl font-bold text-slate-950">Confirmed Supply Chain Allocations</h3>
            </div>
            <span className="rounded-full bg-amber-100 border border-amber-200 px-3 py-1 text-xs font-semibold text-amber-800 self-start sm:self-center">
              {purchasedItems.length} Product(s) Activated
            </span>
          </div>
          
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {purchasedItems.map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-300">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 gap-2">
                  <p className="text-xs font-bold text-slate-950 uppercase tracking-wider">{item.title}</p>
                  <span className="text-xs font-black text-[#D4AF37] shrink-0">{item.price}</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA Conversion Banner Box */}
      <div className="mt-24 rounded-3xl border border-slate-200 bg-white p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-slate-950 tracking-tight">Optimize your distribution costs</h3>
          <p className="text-xs md:text-sm text-slate-600">Schedule an enterprise supply chain health-check with our regional logistics brokers.</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md hover:bg-[#bda033] md:whitespace-nowrap shrink-0 transition-transform active:scale-98 w-full md:w-auto">
          Schedule Review <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
        </button>
      </div>

      {/* Bottom Transit Logos Row */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-40 grayscale">
        <img src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=200&q=60&auto=format&fit=crop" alt="carrier trans" className="h-6 object-contain" />
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200&q=60&auto=format&fit=crop" alt="carrier trans" className="h-6 object-contain" />
        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=200&q=60&auto=format&fit=crop" alt="carrier trans" className="h-6 object-contain" />
      </div>

    </section>
  )
}

export default GetOurServices