import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How do I get started with BuySmartly?',
    a: 'Simply register for free and start searching or submitting structural network requests. Our integrated control panel dashboard will guide you through the initial onboarding pathways.',
  },
  {
    q: 'Is there a cost to join?',
    a: 'Basic platform access and cross-vertical path searches are completely free. Enterprise multi-vertical monetization features and verification listings are managed through scaling subscription plans.',
  },
  {
    q: 'How are providers verified?',
    a: 'We verify ecosystem providers through rigid corporate documentation reviews, legal identity cross-referencing, and continuous operational performance checks.',
  },
  {
    q: 'Can I submit requests anonymously?',
    a: 'You can explore framework channels and preview public listings anonymously, but active operational request deployment requires secure workspace authentication.',
  },
  {
    q: 'What verticals do you cover?',
    a: 'We manage nine core vertical corridors: Shopping & Sourcing, Travel, Jobs, Business Opportunities, Education, Healthcare, Logistics, Supplier Sourcing, and Professional Services.',
  },
  {
    q: 'What is the role of Elroix Holdings in the ecosystem?',
    a: 'BuySmartly operates within an integrated corporate framework managed alongside Elroix Holdings. This relationship ensures absolute compliance, legal integrity, and premium capitalization pipelines across international corridors.',
  },
  {
    q: 'How does the Request Submission system work for businesses?',
    a: 'Verified business entities can instantly post tailored capital, sourcing, or logistical opportunities. The automated intake engine evaluates the metrics against our global network to establish rapid direct-to-provider routing.',
  },
  {
    q: 'How can our company list as an ecosystem provider?',
    a: 'Interested providers can apply via the portal. After completing our rigorous onboarding compliance check, selected partners receive dedicated tier placement allowing active monetization of their services.',
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white text-slate-900 antialiased">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-8 space-y-8">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/10 text-[#A18244] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] shadow-sm">
                <ChevronDown className="h-3.5 w-3.5 text-[#A18244]" />
                FAQ Hub
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Frequently asked questions for the BuySmartly ecosystem
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Get concise clarity on onboarding, verification, vertical coverage, request submission, and provider access in a premium support experience.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#A18244] font-semibold mb-2">Designed for professionals</p>
                <p className="text-sm leading-6 text-slate-700">Structured answers designed to guide verified buyers and providers through the BuySmartly network fast.</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm hidden sm:block">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#A18244] font-semibold mb-2">Premium support</p>
                <p className="text-sm leading-6 text-slate-700">Our platform combines curated verification, global corridors and trusted partner workflows in one place.</p>
              </div>
            </div>

            <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl h-72 hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Corporate Advisory Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`rounded-[2rem] border bg-white transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-[#D4AF37]/30 shadow-xl shadow-[#D4AF37]/10' : 'border-slate-200 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 bg-white focus:outline-none"
                  >
                    <span className={`block text-left text-sm sm:text-base font-semibold tracking-tight transition-colors duration-200 ${
                      isOpen ? 'text-slate-900' : 'text-slate-800'
                    }`}>
                      {faq.q}
                    </span>
                    <span className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen ? 'border-[#D4AF37] bg-[#D4AF37] text-white rotate-180' : 'border-slate-200 bg-white text-slate-500 group-hover:border-[#D4AF37]/50'
                    }`}>
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6 pt-2 bg-slate-50 border-t border-slate-200">
                      <p className="text-sm leading-7 text-slate-600">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;