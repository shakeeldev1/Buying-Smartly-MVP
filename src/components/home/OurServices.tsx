import React from 'react'
import { ShoppingCart, Plane, Briefcase, GraduationCap, HeartPulse, Truck, Building2, Package, UserRound } from 'lucide-react'

const services = [
  { icon: ShoppingCart, title: 'Shopping & Sourcing', desc: 'Discover products and suppliers globally' },
  { icon: Plane, title: 'Travel Experiences', desc: 'Book unique travel opportunities' },
  { icon: Briefcase, title: 'Jobs', desc: 'Find career opportunities worldwide' },
  { icon: Building2, title: 'Business Opportunities', desc: 'Explore investment and partnership deals' },
  { icon: GraduationCap, title: 'Education', desc: 'Access learning and certification programs' },
  { icon: HeartPulse, title: 'Healthcare', desc: 'Connect with medical services and resources' },
  { icon: Truck, title: 'Logistics', desc: 'Find shipping and supply chain solutions' },
  { icon: Package, title: 'Supplier Sourcing', desc: 'Source from verified suppliers' },
  { icon: UserRound, title: 'Professional Services', desc: 'Hire experts across disciplines' },
]

function OurServices() {
  return (
    <section className="py-20 bg-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Nine Vertical Ecosystem
          </h2>
          <p className="mt-4 text-zinc-700">
            Our core service categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="p-6 bg-white rounded-lg border border-zinc-200 hover:border-[#A18244]/50 transition-all group">
              <service.icon className="h-10 w-10 text-[#A18244] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-sm text-zinc-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices