import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How do I get started with BuySmartly?',
    a: 'Simply register for free and start searching or submitting requests. Our dashboard will guide you through the process.',
  },
  {
    q: 'Is there a cost to join?',
    a: 'Basic registration is free. Premium features and featured listings will be available through subscription plans.',
  },
  {
    q: 'How are providers verified?',
    a: 'We verify providers through documentation review and cross-referencing to ensure quality and legitimacy.',
  },
  {
    q: 'Can I submit requests anonymously?',
    a: 'You can preview results anonymously, but submitting requests requires registration for communication purposes.',
  },
  {
    q: 'What verticals do you cover?',
    a: 'We cover nine verticals: Shopping & Sourcing, Travel, Jobs, Business Opportunities, Education, Healthcare, Logistics, Supplier Sourcing, and Professional Services.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-zinc-700">
            Answers to common questions about BuySmartly
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-zinc-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-zinc-50"
              >
                <span className="font-medium text-black">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 text-[#A18244] transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 py-4 bg-white border-t border-zinc-200">
                  <p className="text-zinc-700">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ