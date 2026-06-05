import React, { useState } from 'react'

function RequestSubmission() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    description: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="py-20 bg-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Submit Your Request
          </h2>
          <p className="mt-4 text-zinc-700">
            Tell us what you're looking for and we'll connect you with providers
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg border border-zinc-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-50 border border-zinc-300 text-black placeholder-zinc-500 focus:border-[#A18244] focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-50 border border-zinc-300 text-black placeholder-zinc-500 focus:border-[#A18244] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-zinc-700 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-zinc-50 border border-zinc-300 text-black focus:border-[#A18244] focus:outline-none"
              >
                <option value="">Select a category</option>
                <option>Shopping & Sourcing</option>
                <option>Travel Experiences</option>
                <option>Jobs</option>
                <option>Business Opportunities</option>
                <option>Education</option>
                <option>Healthcare</option>
                <option>Logistics</option>
                <option>Professional Services</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-zinc-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-zinc-50 border border-zinc-300 text-black placeholder-zinc-500 focus:border-[#A18244] focus:outline-none resize-none"
                placeholder="What are you looking for? Be specific..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#A18244] text-black font-semibold hover:bg-[#8a6e3b] transition-all"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RequestSubmission