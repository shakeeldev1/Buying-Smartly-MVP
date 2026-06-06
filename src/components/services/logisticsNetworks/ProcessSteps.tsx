import React from 'react'

const steps = [
  {
    title: 'Connect with carriers',
    description: 'Match your shipment with the ideal logistics partner, fast and secure.',
  },
  {
    title: 'Plan the route',
    description: 'Optimize transit time, customs, and inventory handoffs with intelligent routing.',
  },
  {
    title: 'Execute the move',
    description: 'Book transport, manage warehouse handoffs and keep goods moving smoothly.',
  },
  {
    title: 'Track every mile',
    description: 'Monitor live status updates, exceptions, and delivery milestones in one place.',
  },
]

function ProcessSteps() {
  return (
    <section className="bg-slate-950 text-white py-20 md:py-28 relative overflow-hidden">
      {/* Structural background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">How logistics works</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white leading-tight">
            Four steps to reliable logistics delivery
          </h2>
        </div>

        {/* Pipeline Layout Container */}
        <div className="relative px-2 sm:px-0">
          
          {/* Vertical Track Line (Mobile/Tablet viewport targets) */}
          <div className="absolute top-6 bottom-6 left-12 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent sm:left-1/2 lg:hidden" />

          {/* Horizontal Connection Bar Line (Large Desktop viewports only) */}
          <div className="absolute top-14 left-16 right-16 hidden h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

          {/* Cards Grid Architecture */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div 
                key={step.title} 
                className="group relative flex flex-col items-start rounded-[24px] border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl shadow-black/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30 hover:bg-white/[0.08]"
              >
                
                {/* Custom Number Counter Node */}
                <div className="relative z-10 mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-base font-bold text-[#D4AF37] shadow-sm transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-slate-950 group-hover:scale-105 group-hover:border-[#D4AF37]">
                  0{index + 1}
                </div>

                {/* Text Layout Block */}
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block">
                    Phase 0{index + 1}
                  </span>
                  
                  <h3 className="text-xl font-bold text-white tracking-tight transition-colors duration-200 group-hover:text-[#D4AF37]">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-slate-400 transition-colors duration-200 group-hover:text-slate-300">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProcessSteps