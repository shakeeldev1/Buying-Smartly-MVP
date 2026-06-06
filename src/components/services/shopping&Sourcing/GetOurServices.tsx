import { useState } from 'react'
import { CheckCircle, Globe, Users, Tag, Star } from 'lucide-react'

const products = [
  {
    id: 1,
    title: "Electronics Sourcing Pack",
    price: "$239",
    description: "Verified consumer electronics from top manufacturers with global delivery support.",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Fashion & Apparel Bundle",
    price: "$179",
    description: "Curated apparel and accessories sourced from trusted suppliers with quality checks.",
    img: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Sustainable Home Goods",
    price: "$139",
    description: "Eco-friendly household products ready for marketplace resale and direct fulfillment.",
    img: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Premium Wellness & Skincare Lot",
    price: "$310",
    description: "Organic, dermatologically-tested personal care formulas ready for white-label brand packaging.",
    img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Ergonomic Office Furniture Set",
    price: "$850",
    description: "Commercial grade height-adjustable desks and mesh chairs certified for corporate facility deployment.",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Smart Home Automation Node",
    price: "$420",
    description: "IoT integrated ambient controllers, switches, and edge relays featuring universal Zigbee firmware.",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Artisanal Culinary Ware Matrix",
    price: "$195",
    description: "Handcrafted stoneware ceramics, restaurant-grade kitchen tools, and premium forged knife bundles.",
    img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Fitness & Recovery Gear Pack",
    price: "$280",
    description: "High-density resistance loops, textured structural rollers, and deep-tissue percussion muscle massagers.",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Urban Micro-Mobility Fleet Lot",
    price: "$1,450",
    description: "Aviation-grade aluminum frame electric scooters with modular hot-swappable battery arrays.",
    img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Renewable Solar Power Grid Kit",
    price: "$980",
    description: "High-efficiency monocrystalline PV panels paired with intelligent pure sine wave charge inverters.",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Pet Care Architecture Bundle",
    price: "$165",
    description: "Hypoallergenic composite materials woven into orthopedic pet bedding and smart automated feeding stations.",
    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "Next-Gen Mobile Telemetry Pack",
    price: "$340",
    description: "High-capacity magnetic charging docks, braided ballistic fiber cables, and dynamic audio monitors.",
    img: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=600&auto=format&fit=crop"
  }
];

export default function GetOurServices() {
  const [cart, setCart] = useState<number[]>([])

  const addToCart = (id: number) => {
    setCart((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  const purchasedProducts = products.filter((product) => cart.includes(product.id))

  return (
    <section id="services" className="relative overflow-hidden bg-slate-50 px-4 py-24 sm:px-6 lg:px-8 text-slate-900">

      {/* Decorative background flare */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_50%)]" />

      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#B07B12] border border-amber-200/60">
          Global Infrastructure
        </span>
        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
          Source engineered products, verify transparent delivery.
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Scale your enterprise inventory pipelines using direct tier-1 production matching frameworks.
        </p>
      </div>

      {/* Feature Grid Section */}
      <div className="mx-auto max-w-7xl mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: CheckCircle, title: "Verified Suppliers", desc: "Vetted manufacturers with strict ongoing quality assurance protocols." },
          { icon: Globe, title: "Global Reach", desc: "Unlock container-level allocation lanes across all key trade corridors." },
          { icon: Users, title: "Supplier Matching", desc: "Algorithmic pairing optimized for custom product MOQs and lead targets." },
          { icon: Tag, title: "Preferred Pricing", desc: "Pre-negotiated contract margins with key wholesale ecosystem vendors." }
        ].map((item, idx) => (
          <div key={idx} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:shadow-md hover:border-slate-300">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-[#B07B12] transition-colors group-hover:bg-[#D4AF37] group-hover:text-slate-950">
              <item.icon className="h-5 w-5" />
            </div>
            <h4 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Pricing Matrix Section */}
      <div className="mx-auto max-w-7xl mt-24">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">

          {/* Starter Plan */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-xs transition-all duration-300 hover:shadow-md">
            <div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400">Starter Asset Pool</h5>
              <div className="mt-4 flex items-baseline text-slate-950">
                <span className="text-5xl font-extrabold tracking-tight">$0</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">Standard vendor discovery tools, public catalog indexes, and raw sample query workflows.</p>
            </div>
            <button className="mt-8 w-full rounded-xl border border-slate-300 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              Get Started Free
            </button>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="relative flex flex-col justify-between rounded-3xl border-2 border-[#D4AF37] bg-slate-950 p-8 shadow-xl text-white transform lg:-translate-y-2">
            <div className="absolute -top-4 right-6 inline-flex rounded-full bg-[#D4AF37] px-4 py-1 text-xs font-bold uppercase tracking-wide text-slate-950">
              Most Popular
            </div>
            <div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-amber-400">Pro Sourcing Tier</h5>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-white">$149</span>
                <span className="ml-1 text-xl font-semibold text-slate-400">/ mo</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">Priority production allocation slots, automated broker legal desk, and cargo escrow infrastructure protocols.</p>
            </div>
            <button className="mt-8 w-full rounded-xl bg-[#D4AF37] py-3 text-sm font-bold text-slate-950 transition hover:bg-[#c7a52d]">
              Upgrade to Pro Plan
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-xs transition-all duration-300 hover:shadow-md">
            <div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400">Custom Infrastructure</h5>
              <div className="mt-4 flex items-baseline text-slate-950">
                <span className="text-5xl font-extrabold tracking-tight">Custom</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">Tailored multi-region logistics systems, integrated APIs, and dedicated onsite trade inspectors.</p>
            </div>
            <button className="mt-8 w-full rounded-xl border border-slate-300 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              Contact Procurement Desk
            </button>
          </div>

        </div>
      </div>

      {/* Testimonials Block */}
      <div className="mx-auto max-w-7xl mt-24 grid gap-8 lg:grid-cols-3">
        {[
          { quote: "BuySmartly helped us reduce lead times and find a reliable supplier within days.", author: "Sara M.", role: "Head of Procurement" },
          { quote: "High-quality samples and predictable shipping made onboarding easier.", author: "Leon R.", role: "E‑commerce Manager" },
          { quote: "The sourcing dashboard is a huge time-saver for our buying team.", author: "Priya K.", role: "Merchandising Lead" }
        ].map((t, idx) => (
          <div key={idx} className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
            <div className="flex gap-1 text-amber-400 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-base italic leading-relaxed text-slate-700">"{t.quote}"</p>
            <div className="mt-6 border-t border-slate-100 pt-4">
              <p className="font-bold text-slate-950 text-sm">{t.author}</p>
              <p className="text-xs text-slate-500 mt-0.5">{t.role}</p>
            </div>
          </div>
        ))}
      </div>





      {/* Catalog Cards Loop Section */}
      <div className="mx-auto max-w-7xl mt-28">
        <div className="flex items-end justify-between border-b border-slate-200 pb-6 mb-12">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-950">Active Catalog Manifests</h3>
            <p className="text-sm text-slate-500 mt-1">Real-time dynamic batch pricing available for immediate deployment.</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative overflow-hidden aspect-video bg-slate-100">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-md bg-slate-950/80 px-2.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-xs">
                  Batch #{product.id}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-slate-950 transition-colors group-hover:text-[#B07B12] line-clamp-1">{product.title}</h4>
                  <span className="text-lg font-black text-slate-950 pl-2">{product.price}</span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-2">{product.description}</p>
                <button
                  type="button"
                  onClick={() => addToCart(product.id)}
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-xl py-3 text-sm font-bold transition-all ${cart.includes(product.id)
                      ? 'cursor-not-allowed bg-slate-100 text-slate-400 border border-slate-200'
                      : 'bg-[#D4AF37] text-slate-950 hover:bg-[#c7a52d] shadow-xs'
                    }`}
                  disabled={cart.includes(product.id)}
                >
                  {cart.includes(product.id) ? 'Added to Manifest' : 'Secure Allocation'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Sticky Cart Summary Row Footer */}
      {purchasedProducts.length > 0 && (
        <div id="purchase" className="mx-auto max-w-7xl mt-20 rounded-2xl border border-amber-200 bg-amber-50/60 p-6 backdrop-blur-xs shadow-xs animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-amber-200/60 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B07B12]">Verified Commitments</span>
              <h3 className="mt-1 text-xl font-bold text-slate-950">Active Manifest Run-sheet</h3>
            </div>
            <span className="inline-flex items-center rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">
              {purchasedProducts.length} Allocation Matrix Line(s)
            </span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {purchasedProducts.map((product) => (
              <div key={product.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs transition hover:border-amber-300">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-bold text-slate-950 line-clamp-1">{product.title}</p>
                  <span className="text-sm font-extrabold text-[#B07B12] whitespace-nowrap">{product.price}</span>
                </div>
                <p className="mt-1 text-xs text-slate-500 line-clamp-1">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}