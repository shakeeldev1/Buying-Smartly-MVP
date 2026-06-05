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
    <section className="p-12 bg-[#FAF9F6] text-zinc-800 antialiased">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* TWO-COLUMN CORE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: CONTEXT HEADER & VISUAL ANCHOR */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 space-y-8">
            <div className="flex flex-col items-start text-left">
              <span className="text-xs font-bold tracking-[0.25em] text-[#A18244] uppercase mb-3">
                Support Center
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-4 leading-tight">
                Frequently Asked <span className="text-[#A18244]">Questions</span>
              </h2>
              <p className="text-zinc-500 font-light max-w-sm leading-relaxed">
                Clear insights and support definitions explaining the architecture of the BuySmartly connection network.
              </p>
              <div className="w-12 h-[2px] bg-[#A18244]/30 mt-6 rounded-full" />
            </div>

            {/* Premium Anchor Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-zinc-200/60 h-72 hidden sm:block relative transition-transform duration-500 hover:scale-[1.01]">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Corporate Advisory Workspace" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#A18244]/5 mix-blend-multiply pointer-events-none" />
            </div>
          </div>

          {/* RIGHT COLUMN: DARK INTERACTIVE ACCORDIONS */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div 
                  key={i} 
                  className={`bg-[#181818] rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-[#A18244]/50 shadow-lg shadow-[#A18244]/5' : 'border-zinc-800 shadow-md'
                  }`}
                >
                  {/* Trigger Header Button */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full px-5 py-2 sm:px-5 text-left flex justify-between items-center gap-4 bg-transparent select-none group"
                  >
                    <span className={`font-semibold tracking-tight transition-colors duration-200 ${
                      isOpen ? 'text-[#A18244]' : 'text-white group-hover:text-[#A18244]/90'
                    }`}>
                      {faq.q}
                    </span>
                    <div className={`h-8 w-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 text-[#A18244] transition-all duration-300 ${
                      isOpen ? 'bg-[#A18244] text-white rotate-180' : 'group-hover:border-[#A18244]/30'
                    }`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  {/* Expandable Panel Body */}
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2 sm:px-8 sm:pb-6 border-t border-zinc-800 bg-zinc-900/20">
                      <p className="text-zinc-400 text-sm font-light leading-relaxed">
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