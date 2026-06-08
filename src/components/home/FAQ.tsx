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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)] gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-8 space-y-4">

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/10 text-[#A18244] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em]">
                <ChevronDown className="h-3.5 w-3.5" />
                FAQ Hub
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
                Frequently asked questions for the BuySmartly ecosystem
              </h2>

              <p className="mt-4 text-slate-600">
                Get concise clarity on onboarding, verification, vertical coverage, request submission, and provider access.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE */}
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

                  {/* QUESTION */}
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
                      className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-300 ${
                        isOpen
                          ? "bg-[#D4AF37] border-[#D4AF37] text-white rotate-180"
                          : "bg-white border-slate-200 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </button>

                  {/* ANSWER */}
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
      </div>
    </section>
  );
}

export default FAQ;