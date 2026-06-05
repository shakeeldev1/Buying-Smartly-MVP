import React from 'react'
import { Shield, Zap, Globe, Users } from 'lucide-react'

const reasons = [
  { icon: Shield, title: 'Trust & Verification', desc: 'All providers are verified for quality and reliability' },
  { icon: Zap, title: 'Fast Matching', desc: 'Our system connects you with opportunities quickly' },
  { icon: Globe, title: 'Global Reach', desc: 'Access opportunities from around the world' },
  { icon: Users, title: 'Community Driven', desc: 'Join a growing ecosystem of seekers and providers' },
]

function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Why Choose BuySmartly?
          </h2>
          <p className="mt-4 text-zinc-700">
            Premium features for serious opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div key={i} className="text-center p-6">
              <reason.icon className="h-12 w-12 text-[#A18244] mx-auto mb-4" />
              <h3 className="font-semibold text-black mb-2">{reason.title}</h3>
              <p className="text-sm text-zinc-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose