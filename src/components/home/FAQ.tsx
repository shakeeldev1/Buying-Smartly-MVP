import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I get started with BuySmartly?",
    a: "Simply register for free and start searching or submitting structural network requests. Our integrated control panel dashboard will guide you through the initial onboarding pathways.",
  },
  {
    q: "Is there a cost to join?",
    a: "Basic platform access and cross-vertical path searches are completely free. Enterprise multi-vertical monetization features and verification listings are managed through scaling subscription plans.",
  },
  {
    q: "How are providers verified?",
    a: "We verify ecosystem providers through rigid corporate documentation reviews, legal identity cross-referencing, and continuous operational performance checks.",
  },
  {
    q: "Can I submit requests anonymously?",
    a: "You can explore framework channels and preview public listings anonymously, but active operational request deployment requires secure workspace authentication.",
  },
  {
    q: "What verticals do you cover?",
    a: "We manage nine core vertical corridors: Shopping & Sourcing, Travel, Jobs, Business Opportunities, Education, Healthcare, Logistics, Supplier Sourcing, and Professional Services.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* 2 Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT SIDE: Heading + Original FAQ Layout */}
          <div className="space-y-10">

            {/* Header Content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/10 text-[#A18244] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em]">
                <ChevronDown className="h-3.5 w-3.5" />
                FAQ Hub
              </span>

              <h2 className="mt-4 text-2xl sm:text-3xl font-bold leading-tight">
                BuySmartly Questions
              </h2>

              <p className="mt-4 text-slate-600">
                Get concise clarity on onboarding, verification, vertical coverage, request submission, and provider access.
              </p>
            </div>

            {/* Original FAQs Sizing and Styles */}
            <div className="space-y-2">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;

                return (
                  <div
                    key={i}
                    className={`rounded-xl border bg-white overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "border-[#D4AF37]/30 shadow-lg"
                        : "border-slate-200 shadow-sm"
                    }`}
                  >
                    {/* QUESTION (Restored to your exact original height/width & padding) */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 cursor-pointer py-2 text-left"
                    >
                      <span
                        className={`text-sm sm:text-base font-semibold leading-relaxed ${
                          isOpen ? "text-slate-900" : "text-slate-800"
                        }`}
                      >
                        {faq.q}
                      </span>

                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                          isOpen
                            ? "bg-[#D4AF37] border-[#D4AF37] text-white rotate-180"
                            : "bg-white border-slate-200 text-slate-500"
                        }`}
                      >
                        <ChevronDown className="h-5 w-5" />
                      </span>
                    </button>

                    {/* ANSWER (Restored to your exact original padding & background) */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-5 pt-2 bg-slate-50 border-t border-slate-200">
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

          {/* RIGHT SIDE: Fixed Image Card (Stays completely still on click) */}
          <div className="lg:sticky lg:top-8 relative group hidden md:block select-none">
            {/* Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#D4AF37]/15 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Image Box with Fixed Height to Prevent Layout Shifting */}
            <div className="relative h-[500px] w-specific rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-900/10">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop" 
                alt="Customer Support" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
              
              {/* Text Badge inside image */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold text-white mb-2">Need more help?</h3>
                  <p className="text-slate-200 text-sm font-light leading-relaxed">
                    Our dedicated enterprise support team is available 24/7 to guide you through verification and network pathways.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQ;