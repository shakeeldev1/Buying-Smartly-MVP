

const steps = [
  {
    title: 'Discover intent',
    description: 'Understand the client challenge, current operations, and growth priorities.',
  },
  {
    title: 'Design a playbook',
    description: 'Create a custom plan with execution milestones, talent support, and compliance checks.',
  },
  {
    title: 'Deliver outcomes',
    description: 'Deploy the team, implement the roadmap, and begin measurable improvements quickly.',
  },
  {
    title: 'Optimize continuously',
    description: 'Refine processes with data, stakeholder feedback, and ongoing advisory support.',
  },
]

function ProcessSteps() {
  return (
    <section className="bg-slate-50 text-slate-950 py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background ambient graphic */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/[0.02] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Block */}
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">How we deliver</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
            A business service workflow that scales with you
          </h2>
        </div>

        {/* Pipeline Layout Grid Container */}
        <div className="relative px-2 sm:px-0">
          
          {/* Vertical Connecting Track Line (Mobile/Tablet breakpoints) */}
          <div className="absolute top-8 bottom-8 left-12 w-[1px] bg-gradient-to-b from-transparent via-slate-200 to-transparent sm:left-1/2 lg:hidden" />

          {/* Horizontal Connecting Bar Line (Large Desktop Viewports Only) */}
          <div className="absolute top-14 left-16 right-16 hidden h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block" />

          {/* Steps Cards Wrapper Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div 
                key={step.title} 
                className="group relative flex flex-col items-start rounded-3xl border border-slate-200/80 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-xl hover:shadow-slate-200/50"
              >
                
                {/* Custom Step Counter Bubble Node */}
                <div className="relative z-10 mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-base font-bold text-[#D4AF37] shadow-inner transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-slate-950 group-hover:scale-105 group-hover:border-[#D4AF37]">
                  0{index + 1}
                </div>

                {/* Content Layout Stack */}
                <div className="space-y-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                    Phase 0{index + 1}
                  </span>
                  
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight transition-colors duration-200 group-hover:text-[#D4AF37]">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-slate-600 transition-colors duration-200 group-hover:text-slate-700">
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