import React, { useState } from 'react'

const categories = [
  'Shopping',
  'Travel',
  'Jobs',
  'Business Opportunities',
  'Education',
  'Healthcare',
  'Logistics',
  'Supplier Sourcing',
  'Professional Services',
]

function SearchHub() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Search & Discover Opportunities
          </h2>
          <p className="mt-4 text-zinc-600">
            Preview limited results before registering
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                type="text"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-300 text-black placeholder-zinc-500 focus:border-[#A18244] focus:outline-none transition-colors"
              />
            </div>
            <button className="px-6 py-3 rounded-lg bg-[#A18244] text-black font-semibold hover:bg-[#8a6e3b] transition-all">
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === 'All'
                ? 'bg-[#A18244] text-black'
                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#A18244] text-black'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-5 bg-zinc-50 rounded-lg border border-zinc-200">
              <h3 className="font-semibold text-black mb-2">Preview Result #{i}</h3>
              <p className="text-sm text-zinc-600 mb-3">
                Sign up to unlock full search results and detailed information.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-zinc-500">Category: {selectedCategory}</span>
                <span className="text-xs text-[#A18244]">Preview Only</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="/register" className="text-[#A18244] hover:text-[#8a6e3b] font-medium transition-colors">
            Register to see full results →
          </a>
        </div>
      </div>
    </section>
  )
}

export default SearchHub