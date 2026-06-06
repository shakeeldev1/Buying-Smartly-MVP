import React from 'react'

const steps = [
  {
    title: 'Explore destinations',
    description: 'Review curated travel packages aligned with your sourcing or business goals.',
  },
  {
    title: 'Plan the journey',
    description: 'Choose dates, logistics, and supplier meetings with our travel concierge.',
  },
  {
    title: 'Book the experience',
    description: 'Confirm your premium itinerary and product preview sessions for the trip.',
  },
  {
    title: 'Arrive and activate',
    description: 'Execute the journey with on-ground support and delivery coordination.',
  },
]

function ProcessSteps() {
  return (
    <section className="bg-slate-100 text-slate-950 py-16 md:py-24 relative overflow-hidden">
      {/* Editorial subtle light gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(212,175,55,0.08),_transparent_30%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title Header */}
        <div className="mb-16 md:mb-20 text-center max-w-xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Deployment Strategy</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-950 leading-tight">
            The operational process to activate your booking
          </h2>
        </div>

        {/* Pipeline Layout Container */}
        <div className="relative px-2 sm:px-0">

          {/* Vertical Pipeline Tracker Line (Mobile & Tablet Viewports Only) */}
          <div className="absolute top-6 bottom-6 left-12 w-[1px] bg-gradient-to-b from-amber-500/0 via-slate-300 to-amber-500/0 sm:left-1/2 lg:hidden" />

          {/* Central Connecting Bar Line (Large Desktop Viewports Only) */}
          <div className="absolute top-12 left-16 right-16 hidden h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent lg:block" />

          {/* Card Items Grid Matrix */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div 
                key={step.title} 
                className="group relative flex flex-col items-start rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300/80"
              >

                {/* Custom Number Counter Indicator Node */}
                <div className="relative z-10 mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-bold text-[#D4AF37] shadow-sm transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-slate-950 group-hover:scale-105 group-hover:border-[#D4AF37]">
                  0{index + 1}
                </div>

                {/* Content Block Details */}
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                    Stage 0{index + 1}
                  </span>
                  
                  <h3 className="text-lg font-bold text-slate-950 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-200">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs leading-relaxed text-slate-600">
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