import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from "lucide-react";

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
    <section className="py-12 bg-white text-slate-900 overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 2-Column Balanced Grid Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Heading Header + Accordion List Node */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header Core Content */}
            <div className="space-y-3.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37]/10 text-[#A18244] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em]">
                <Sparkles className="h-3 w-3 stroke-[2.5]" />
                Knowledge Base
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                Frequently Asked Questions
              </h2>

              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-xl">
                Get concise clarity on onboarding, verification, vertical coverage, request submission, and provider access rules.
              </p>
            </div>

            {/* Accordion List Component Container */}
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;

                return (
                  <div
                    key={i}
                    className={`rounded-xl border bg-white overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "border-[#D4AF37]/40 shadow-md shadow-[#D4AF37]/5 bg-slate-50/20"
                        : "border-slate-200/80 hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    {/* Toggle Trigger Node */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer hover:bg-slate-50/40 transition-colors duration-200 group"
                    >
                      <span
                        className={`text-sm sm:text-base font-bold tracking-tight transition-colors duration-200 ${
                          isOpen ? "text-slate-900" : "text-slate-800 group-hover:text-slate-900"
                        }`}
                      >
                        {faq.q}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                          isOpen
                            ? "bg-[#D4AF37] border-[#D4AF37] text-white rotate-180 shadow-sm shadow-[#D4AF37]/20"
                            : "bg-slate-50 border-slate-200 text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-100"
                        }`}
                      >
                        <ChevronDown className="h-4 w-4 stroke-[2.5]" />
                      </span>
                    </button>

                    {/* CSS Grid-Based Smooth Height Transition Panel */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-4 pt-1 bg-slate-50/50 border-t border-slate-100">
                          <p className="text-sm leading-6 text-slate-500 font-medium tracking-tight">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Fixed Contextual Callout Display Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 relative group hidden lg:block">
            {/* Soft Ambient Background Glow Grid */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Main Visual Frame Layer */}
            <div className="relative h-[540px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-900/5">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop" 
                alt="BuySmartly Enterprise Support Center" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              
              {/* Core Linear Gradients Frame Shield */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
              
              {/* Internal Float Layout Info Card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="backdrop-blur-md bg-slate-900/40 border border-white/10 p-5 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 bg-[#D4AF37] text-white rounded-md">
                      <HelpCircle className="h-4 w-4 stroke-[2.5]" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">Still have questions?</h3>
                  </div>
                  
                  <p className="text-slate-200 text-xs font-medium leading-relaxed">
                    Our dedicated enterprise support team is available around the clock to guide you through operational verification and network workflows.
                  </p>

                  <button className="mt-4 w-full flex items-center justify-center gap-1.5 px-4 py-2 bg-white text-slate-900 hover:bg-[#D4AF37] hover:text-white rounded-xl font-bold text-xs shadow-sm transition-all duration-200 cursor-pointer group/btn">
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Contact Support Team</span>
                  </button>
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