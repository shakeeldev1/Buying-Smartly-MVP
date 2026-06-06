const steps = [
  {
    title: 'Curate products',
    description: 'Choose bundles from verified suppliers with quality and pricing data built in.',
  },
  {
    title: 'Source smarter',
    description: 'Check vendors, compare offers, and lock in stock with global delivery plans.',
  },
  {
    title: 'Purchase and confirm',
    description: 'Buy the right inventory and validate the order before shipment begins.',
  },
  {
    title: 'Receive on time',
    description: 'Follow deliveries and get your goods prepared for resale or distribution.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="bg-white text-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Header Grid */}
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">How sourcing works</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">One streamlined path from order to delivery</h2>
        </div>

        {/* Step Cards Loop */}
        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[28px] border border-slate-200 bg-[#fff8f1] p-8 shadow-sm">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#D4AF37] text-slate-950 text-lg font-semibold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-4 text-slate-600 leading-7">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Tailored Sourcing Callout Card Block */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-slate-950 to-slate-900 p-8 shadow-xl shadow-slate-950/20 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Need a tailored sourcing plan?</h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Schedule a deep-dive architecture strategy session with an enterprise logistics architect to map custom regulatory constraints, bespoke MOQs, and private multi-region supply parameters.
            </p>
          </div>
          <button className="whitespace-nowrap rounded-xl bg-[#D4AF37] px-6 py-3.5 text-xs font-bold text-slate-950 transition-all hover:bg-[#c3a02f] active:scale-95">
            Talk to Sales
          </button>
        </div>

      </div>
    </section>
  )
}