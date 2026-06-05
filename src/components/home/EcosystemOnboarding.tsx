import React from 'react'

function EcosystemOnboarding() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Join the Ecosystem
          </h2>
          <p className="mt-4 text-zinc-700">
            Choose your path to get started
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 bg-zinc-50 rounded-lg border border-zinc-200 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">For Users</h3>
            <p className="text-zinc-600 mb-6">
              Search, discover, and connect with opportunities across nine verticals
            </p>
            <ul className="text-left text-sm text-zinc-600 mb-6 space-y-2">
              <li>• Save favorite opportunities</li>
              <li>• Submit custom requests</li>
              <li>• Direct messaging with providers</li>
              <li>• Personalized dashboard</li>
            </ul>
            <a href="/register" className="inline-block w-full py-3 rounded-lg bg-[#A18244] text-black font-semibold hover:bg-[#8a6e3b] transition-all">
              Sign Up as User
            </a>
          </div>

          <div className="p-8 bg-zinc-50 rounded-lg border border-zinc-200 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">For Providers</h3>
            <p className="text-zinc-600 mb-6">
              List your services and connect with opportunity seekers
            </p>
            <ul className="text-left text-sm text-zinc-600 mb-6 space-y-2">
              <li>• Create service listings</li>
              <li>• Receive direct inquiries</li>
              <li>• Verification badge</li>
              <li>• Analytics dashboard</li>
            </ul>
            <a href="/register/provider" className="inline-block w-full py-3 rounded-lg bg-[#A18244] text-black font-semibold hover:bg-[#8a6e3b] transition-all">
              Apply as Provider
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EcosystemOnboarding