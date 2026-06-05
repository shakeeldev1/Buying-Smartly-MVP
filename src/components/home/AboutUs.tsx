import React from 'react'

function AboutUs() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-black mb-6">
              Our Mission
            </h2>
            <p className="text-zinc-700 mb-4">
              BuySmartly connects seekers with providers across nine verticals, creating a seamless ecosystem for opportunity discovery and monetization.
            </p>
            <p className="text-zinc-700 mb-6">
              We bridge global markets with intelligent matching, making it easier than ever to find what you need or offer what you provide.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A18244]">9</div>
                <div className="text-sm text-zinc-600">Verticals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A18244]">Global</div>
                <div className="text-sm text-zinc-600">Reach</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A18244]">24/7</div>
                <div className="text-sm text-zinc-600">Access</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-zinc-50 rounded-lg border border-zinc-200">
              <h3 className="font-semibold text-black mb-2">Search & Discovery</h3>
              <p className="text-sm text-zinc-600">Find opportunities across multiple industries</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-lg border border-zinc-200">
              <h3 className="font-semibold text-black mb-2">Connection</h3>
              <p className="text-sm text-zinc-600">Connect directly with providers and seekers</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-lg border border-zinc-200">
              <h3 className="font-semibold text-black mb-2">Execution</h3>
              <p className="text-sm text-zinc-600">Streamlined process management</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-lg border border-zinc-200">
              <h3 className="font-semibold text-black mb-2">Monetization</h3>
              <p className="text-sm text-zinc-600">Multiple revenue streams for providers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs