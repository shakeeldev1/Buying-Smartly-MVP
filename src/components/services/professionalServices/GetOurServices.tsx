import { useState } from 'react'
import { Briefcase, Users, BarChart2, CheckCircle, ArrowRight } from 'lucide-react'

type ServicePackage = {
  id: number
  title: string
  description: string
  price: string
  img: string
}

const packages: ServicePackage[] = [
  {
    id: 1,
    title: 'Strategy Blueprint',
    description: 'A premium corporate roadmap outlining market positioning, vector product fit, and scalable ecosystem launches.',
    price: '$199',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Talent Sourcing matrix',
    description: 'On-demand structural recruitment pipelines for specialized operators, senior staff execs, and system architects.',
    price: '$149',
    img: 'https://images.unsplash.com/photo-1521791136368-1a46827d0af1?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Compliance & Audit Review',
    description: 'In-depth international regulatory audit metrics designed to reduce multi-channel operational risks and secure deals.',
    price: '$129',
    img: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'AI Workflow Integration',
    description: 'Complete operational pipeline evaluation to embed customized LLM agents, automated nodes, and custom tool stacks.',
    price: '$299',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Cross-Border Fiscal Map',
    description: 'Multi-jurisdictional financial blueprints optimizing tax mitigation structures across modern operating markets.',
    price: '$249',
    img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Brand Growth Playbook',
    description: 'High-fidelity audience acquisition and community framework strategies engineered to amplify visual market authority.',
    price: '$179',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 7,
    title: 'M&A Deal Diligence',
    description: 'Rigorous transactional screening, clean asset evaluations, and target liability risk profiling systems.',
    price: '$450',
    img: 'https://images.unsplash.com/photo-1444653389962-8149286c578a?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 8,
    title: 'Supply-Chain Resilience',
    description: 'Comprehensive global vector tracking protocols designed to mitigate multi-tier supplier bottlenecks.',
    price: '$189',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 9,
    title: 'Cloud Security Systems',
    description: 'Enterprise penetration testing and continuous network authorization framework compliance mappings.',
    price: '$329',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 10,
    title: 'Executive Leadership Playbook',
    description: 'Tailored dynamic operational workshops focusing on high-growth scaling management routines.',
    price: '$159',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 11,
    title: 'IP Legal Architecture',
    description: 'Strategic structural filings for high-value dynamic software systems, trademarks, and design parameters.',
    price: '$279',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 12,
    title: 'Product Scale Framework',
    description: 'UX engineering review metrics engineered to supercharge customer retention loops within web SaaS products.',
    price: '$219',
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop'
  }
];

function GetOurServices() {
  const [selectedPackages, setSelectedPackages] = useState<number[]>([])

  const addPackage = (id: number) => {
    setSelectedPackages((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  const purchased = packages.filter((item) => selectedPackages.includes(item.id))

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 bg-white">
      
      {/* Header layout */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Professional packages</p>
        <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl tracking-tight leading-tight">
          Service bundles built for teams that want to move faster.
        </h2>
      </div>

      {/* Main Image Frame Banner */}
      <div className="mt-8 overflow-hidden rounded-2xl shadow-xl shadow-slate-900/5">
        <img 
          src="https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&q=80&auto=format&fit=crop" 
          alt="Professional consulting workspace alignment context" 
          className="w-full h-[320px] md:h-[450px] object-cover" 
        />
      </div>

      {/* Functional Value Pillars Row */}
      <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 border-b border-slate-200 pb-16">
        <div className="flex flex-col items-start gap-4">
          <div className="rounded-xl bg-[#D4AF37]/10 p-2.5 text-[#D4AF37]"><Briefcase className="h-5 w-5" /></div>
          <h4 className="text-lg font-bold text-slate-950 tracking-tight">Strategy Design</h4>
          <p className="text-sm text-slate-600 leading-relaxed">Market and product-fit blueprints built for your custom rapid enterprise launch matrix.</p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="rounded-xl bg-[#D4AF37]/10 p-2.5 text-[#D4AF37]"><Users className="h-5 w-5" /></div>
          <h4 className="text-lg font-bold text-slate-950 tracking-tight">Talent & Teams</h4>
          <p className="text-sm text-slate-600 leading-relaxed">On-demand corporate experts deployed instantly to scale your internal operations grids.</p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="rounded-xl bg-[#D4AF37]/10 p-2.5 text-[#D4AF37]"><BarChart2 className="h-5 w-5" /></div>
          <h4 className="text-lg font-bold text-slate-950 tracking-tight">Growth Planning</h4>
          <p className="text-sm text-slate-600 leading-relaxed">Revenue playbooks and multi-point conversion optimization tracks to unlock capital value.</p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="rounded-xl bg-[#D4AF37]/10 p-2.5 text-[#D4AF37]"><CheckCircle className="h-5 w-5" /></div>
          <h4 className="text-lg font-bold text-slate-950 tracking-tight">Compliance</h4>
          <p className="text-sm text-slate-600 leading-relaxed">Regulatory structure checks engineered to confidently unlock cross-border trade flow systems.</p>
        </div>
      </div>

      {/* Pricing Matrix Architecture */}
      <div className="mt-24 grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-slate-300">
          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Workshop Tier</h5>
          <p className="mt-3 text-3xl font-black text-slate-950">$4,900</p>
          <p className="mt-4 text-xs leading-relaxed text-slate-600">Two-day high-fidelity strategic analysis, milestone assessment workshops, and execution roadmaps.</p>
        </div>
        <div className="rounded-2xl border-2 border-[#D4AF37] bg-amber-50/10 p-8 shadow-xl shadow-amber-500/5 relative">
          <div className="absolute top-4 right-4 rounded-full bg-[#D4AF37] px-2.5 py-0.5 text-[9px] font-extrabold uppercase text-slate-950">Recommended</div>
          <h5 className="text-xs font-bold text-[#bda033] uppercase tracking-widest">Engagement Tier</h5>
          <p className="mt-3 text-3xl font-black text-slate-950">$12,500</p>
          <p className="mt-4 text-xs leading-relaxed text-slate-600">90-day comprehensive operational scaling deployment with custom high-speed weekly engineering sprints.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-slate-300">
          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Retainer Tier</h5>
          <p className="mt-3 text-3xl font-black text-slate-950">Custom Strategy</p>
          <p className="mt-4 text-xs leading-relaxed text-slate-600">Ongoing dedicated fractional advisory, architectural guidance, and implementation support lines.</p>
        </div>
      </div>

      {/* Corporate Testimonials Block */}
      <div className="mt-12 grid gap-6 md:grid-cols-3 border-b border-slate-200 pb-24">
        <blockquote className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
          <p className="text-xs leading-relaxed text-slate-600 italic">"The strategy blueprint unlocked a new revenue stream for our enterprise platform mechanics within two cycles."</p>
          <cite className="mt-4 block text-xs not-italic font-bold text-slate-950">— Daniel S. (Founder)</cite>
        </blockquote>
        <blockquote className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
          <p className="text-xs leading-relaxed text-slate-600 italic">"Their specialized engineering recruitment pipelines located 3 high-tier leads in under a business calendar month."</p>
          <cite className="mt-4 block text-xs not-italic font-bold text-slate-950">— Olivia T. (HR Director)</cite>
        </blockquote>
        <blockquote className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
          <p className="text-xs leading-relaxed text-slate-600 italic">"Hands-on architectural code reviews and compliance oversight meant we cleared milestones securely."</p>
          <cite className="mt-4 block text-xs not-italic font-bold text-slate-950">— Marco V. (COO)</cite>
        </blockquote>
      </div>

      {/* Comprehensive 12-Item Extended Run Grid */}
      <div className="mt-24">
        <h3 className="text-xl font-bold tracking-tight text-slate-950 mb-8 border-l-2 border-[#D4AF37] pl-3">
          Available Strategic Business Bundles
        </h3>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.id} className="group overflow-hidden rounded-2xl bg-white border border-slate-200 flex flex-col shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute top-3 right-3 rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-bold text-slate-800 border border-slate-200">
                  Asset ID #{pkg.id}
                </div>
              </div>
              
              <div className="p-6 flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-base font-bold text-slate-950 tracking-tight leading-snug">{pkg.title}</h4>
                    <span className="text-base font-black text-[#D4AF37] shrink-0">{pkg.price}</span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">{pkg.description}</p>
                </div>
                
                <button
                  type="button"
                  onClick={() => addPackage(pkg.id)}
                  className={`mt-6 w-full rounded-xl py-2.5 text-xs font-bold transition-all duration-200 ${
                    selectedPackages.includes(pkg.id)
                      ? 'cursor-not-allowed bg-slate-100 text-slate-400 border border-slate-200'
                      : 'bg-slate-950 text-white hover:bg-slate-800 active:scale-98'
                  }`}
                  disabled={selectedPackages.includes(pkg.id)}
                >
                  {selectedPackages.includes(pkg.id) ? 'Bundle Secured' : 'Deploy This Module'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Selected Packages Checkout Manifest Console */}
      {purchased.length > 0 && (
        <div id="purchase" className="mt-20 rounded-2xl border border-[#D4AF37]/30 bg-amber-50/5 p-6 md:p-8 shadow-xl shadow-amber-500/5 scroll-mt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Active Support Console</p>
              <h3 className="mt-1 text-xl font-bold text-slate-950">Your Professional Operational Support Stack</h3>
            </div>
            <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold text-slate-800 self-start sm:self-center">
              {purchased.length} Module(s) Selected
            </span>
          </div>
          
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {purchased.map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-300">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 gap-2">
                  <p className="text-xs font-bold text-slate-950 uppercase tracking-wider">{item.title}</p>
                  <span className="text-xs font-black text-[#D4AF37] shrink-0">{item.price}</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Conversion CTA Banner */}
      <div className="mt-24 rounded-3xl border border-slate-200 bg-white p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-slate-950 tracking-tight">Scale with expert partners</h3>
          <p className="text-xs md:text-sm text-slate-600">Book a comprehensive discovery call to structure and design your precise enterprise transformation engagement.</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-xs font-bold text-white shadow-md hover:bg-slate-800 md:whitespace-nowrap shrink-0 transition-transform active:scale-98 w-full md:w-auto">
          Book Discovery Session <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Ecosystem Trust Brand Logos Footer */}
      <div className="mt-16 flex flex-wrap items-center justify-between gap-6 overflow-x-auto opacity-30 grayscale px-4">
        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=150&q=60&auto=format&fit=crop" alt="partner corporate emblem" className="h-8 object-contain" />
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&q=60&auto=format&fit=crop" alt="partner corporate emblem" className="h-8 object-contain" />
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=150&q=60&auto=format&fit=crop" alt="partner corporate emblem" className="h-8 object-contain" />
      </div>

    </section>
  )
}

export default GetOurServices