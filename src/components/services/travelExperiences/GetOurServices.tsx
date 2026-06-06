import { useState } from 'react'
import { MapPin, Compass, Sunrise, Heart, Star, Sparkles } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Market Immersion Trip',
    description: 'Three-day buying tour with supplier visits, product sampling, and logistics planning.',
    price: '$349',
    img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Curated Trade Safari',
    description: 'Luxury business travel package for sourcing new brands and vendor partnerships.',
    price: '$599',
    img: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Rapid Supply Visit',
    description: 'One-day express sourcing and sampling itinerary with local sourcing experts.',
    price: '$219',
    img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Tech Hardware Expedition',
    description: 'Deep-dive tour through industrial electronics hubs, assembly facilities, and components markets.',
    price: '$680',
    img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Textile & Apparel Summit',
    description: 'Direct entry into fabric milling clusters, garment production floors, and custom print centers.',
    price: '$450',
    img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Sustainable Sourcing Retreat',
    description: 'Eco-conscious trade journey analyzing green manufacturing networks and organic crop supply blocks.',
    price: '$520',
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 7,
    title: 'Artisanal Ceramic Matrix Tour',
    description: 'Heritage craft collective visits focusing on premium custom earthenware, clay moulding, and hand-kilned homeware.',
    price: '$299',
    img: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 8,
    title: 'Wellness & Botanicals Track',
    description: 'Wholesale ingredient exploration across premium essential oil distilleries and skincare formulation facilities.',
    price: '$410',
    img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 9,
    title: 'Heavy Logistics Grid Review',
    description: 'Behind-the-scenes clearance review across commercial deepsea ports, air freight freight lanes, and intermodal depots.',
    price: '$750',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 10,
    title: 'Smart Home IoT Showcase',
    description: 'Exclusive reservation passes for private firmware demos, embedded chip arrays, and smart automation yards.',
    price: '$620',
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 11,
    title: 'Culinary Wholesale Run',
    description: 'Gastronomy export review featuring cold-chain packaging hubs, premium spice auctions, and estate coffee farms.',
    price: '$380',
    img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 12,
    title: 'Micro-Mobility Fleet Workshop',
    description: 'On-site factory inspection focusing on lightweight electric vehicle frames, cell pack setups, and structural chassis stress tests.',
    price: '$890',
    img: 'https://images.unsplash.com/photo-1558441719-ff34b0524a24?q=80&w=800&auto=format&fit=crop'
  }
];

function GetOurServices() {
  const [bookings, setBookings] = useState([])

  const bookExperience = (id) => {
    setBookings((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  const booked = experiences.filter((item) => bookings.includes(item.id))

  return (
    <section id="services" className="bg-slate-50 text-slate-950 py-16 md:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Layout Row Header Split */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between border-b border-slate-200 pb-12 mb-12 md:mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Premium Class Packages</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              Book corporate routes & trace operational runs.
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
            Secure priority passes to active global supply markets and access custom curated operational paths instantly.
          </p>
        </div>

        {/* Big Editorial Header Image */}
        <div className="relative mb-16 md:mb-24 overflow-hidden rounded-3xl group shadow-2xl bg-slate-100">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50/90 via-transparent to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop"
            alt="travel destination view"
            className="w-full h-[280px] sm:h-[340px] md:h-[380px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 z-20 flex items-center gap-3 pr-4">
            <div className="rounded-full bg-white p-2 sm:p-2.5 backdrop-blur-md text-[#D4AF37] border border-slate-200 shrink-0">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase text-amber-500 tracking-widest">Featured Route</p>
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-950 line-clamp-1 sm:line-clamp-none">
                East Asian Commercial Hub Openings (2026)
              </h4>
            </div>
          </div>
        </div>

        {/* Feature Highlights Row */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 border-b border-slate-200 pb-16">
          {[
            { icon: MapPin, title: "Curated Itineraries", text: "Hand-crafted schedules aligning corporate agendas and regional trade calendars." },
            { icon: Compass, title: "Local Market Masters", text: "On-ground specialists who know hidden boutique lanes and factory gates." },
            { icon: Sunrise, title: "Five-Star Coordinates", text: "High-end corporate hotel agreements featuring business suites." },
            { icon: Heart, title: "Elite Travel Concierge", text: "Full diplomatic-level customs, transportation, and meeting management support." }
          ].map((feat, idx) => (
            <div key={idx} className="space-y-3 rounded-3xl bg-white p-6 shadow-sm border border-slate-200 flex flex-col justify-between sm:justify-start">
              <feat.icon className="h-5 w-5 text-[#D4AF37] shrink-0" />
              <div>
                <h4 className="text-base font-bold text-slate-950 tracking-tight">{feat.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{feat.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Column-Split Section: Tiers and Testimonials Side-by-Side */}
        <div className="mt-16 md:mt-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left Block: Modern Stacked Layout for Packages */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold uppercase tracking-wider text-slate-950 mb-6">Tier Program Matrix</h4>

            {/* Tier 1 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tier 01</span>
                <h5 className="text-base font-bold text-slate-950 mt-0.5">Discovery Run</h5>
                <p className="text-xs text-slate-600 mt-1">Standard 3-day regional sourcing itinerary and basic factory entry slots.</p>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <p className="text-2xl font-black text-[#D4AF37]">$349</p>
                <span className="text-[10px] text-slate-500 font-medium">Flat Rate</span>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border-2 border-[#D4AF37] bg-white p-6 relative pt-10 sm:pt-6">
              <div className="absolute top-3 right-4 rounded-full bg-[#D4AF37] px-2 py-0.5 text-[9px] font-extrabold uppercase text-slate-950">Recommended</div>
              <div>
                <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Tier 02</span>
                <h5 className="text-base font-bold text-slate-950 mt-0.5">Curated Expedition</h5>
                <p className="text-xs text-slate-600 mt-1">Luxury business plans with 24/7 dedicated language interpreters and drivers.</p>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <p className="text-2xl font-black text-slate-950">$599</p>
                <span className="text-[10px] text-slate-500 font-medium">Flat Rate</span>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tier 03</span>
                <h5 className="text-base font-bold text-slate-950 mt-0.5">Express Dispatch</h5>
                <p className="text-xs text-slate-600 mt-1">Single-day fast-track visit managed by expert local trade handlers.</p>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <p className="text-2xl font-black text-[#D4AF37]">$219</p>
                <span className="text-[10px] text-slate-500 font-medium">Flat Rate</span>
              </div>
            </div>
          </div>

          {/* Right Block: Quotes */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold uppercase tracking-wider text-slate-950 mb-6">User Validation</h4>
            {[
              { text: "An incredible market visit — the product previews were top-notch.", name: "Ana R.", role: "Lead Buyer" },
              { text: "Seamless logistics and excellent local arrangements.", name: "Tom H.", role: "Co-Founder" },
              { text: "Highly recommend for any sourcing-focused travel.", name: "Mei L.", role: "Product Lead" }
            ].map((q, idx) => (
              <blockquote key={idx} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex text-amber-400 gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                </div>
                <p className="text-sm italic text-slate-700">"{q.text}"</p>
                <cite className="mt-3 block text-xs not-italic font-semibold text-slate-950">— {q.name} ({q.role})</cite>
              </blockquote>
            ))}
          </div>

        </div>

        {/* Global Travel Network Logos */}
        <div className="mt-20 border-t border-slate-200 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 opacity-80 text-center sm:text-left">
          <span className="text-xs font-black uppercase tracking-widest text-slate-500">Carrier Matrix:</span>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200&q=60&auto=format&fit=crop" alt="airline partner logo" className="h-6 object-contain grayscale" />
            <img src="https://images.unsplash.com/photo-1505765050963-8c3b6d9b3f98?w=200&q=60&auto=format&fit=crop" alt="transit partner logo" className="h-6 object-contain grayscale" />
            <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=200&q=60&auto=format&fit=crop" alt="hotel partner logo" className="h-6 object-contain grayscale" />
          </div>
        </div>

        {/* Sourcing Call to Action Banner Box */}
        <div className="mt-20 rounded-3xl bg-white border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-950">Book custom merchant routes</h3>
            <p className="mt-1 text-xs text-slate-600">Collaborate with our corporate logistics team to establish a tailored trade run.</p>
          </div>
          <button className="rounded-xl bg-[#D4AF37] px-6 py-3 text-xs font-bold text-slate-950 shadow-md hover:bg-[#bda033] md:whitespace-nowrap shrink-0 transition-transform active:scale-98 w-full md:w-auto">
            Consult Planner Now
          </button>
        </div>

        {/* Package Offer Inventory List */}
        <div className="mt-24">
          <h3 className="text-xl font-bold tracking-tight text-slate-950 mb-8 border-l-2 border-[#D4AF37] pl-3">
            Open Booking Run Sheets
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
              <article key={experience.id} className="group overflow-hidden rounded-2xl bg-white border border-slate-200 flex flex-col shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={experience.img}
                    alt={experience.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-bold text-amber-500 border border-slate-200">
                    ID #{experience.id}
                  </div>
                </div>
                <div className="p-5 md:p-6 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-base md:text-lg font-bold text-slate-950 tracking-tight leading-snug">{experience.title}</h4>
                      <span className="text-base font-black text-[#D4AF37] shrink-0">{experience.price}</span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-3">{experience.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => bookExperience(experience.id)}
                    className={`mt-6 w-full rounded-xl py-2.5 text-xs font-bold transition-all duration-200 ${
                      bookings.includes(experience.id)
                        ? 'cursor-not-allowed bg-slate-200 text-slate-500 border border-slate-300'
                        : 'bg-[#D4AF37] text-slate-950 hover:bg-[#c7a52d]'
                    }`}
                    disabled={bookings.includes(experience.id)}
                  >
                    {bookings.includes(experience.id) ? 'Manifest Secured' : 'Lock Package Rate'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Real-Time Manifest Confirmation Block */}
        {booked.length > 0 && (
          <div id="purchase" className="mt-20 rounded-2xl border border-[#D4AF37]/30 bg-white p-6 md:p-8 shadow-lg scroll-mt-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Active Credentials</p>
                <h3 className="mt-1 text-xl font-bold text-slate-950">Confirmed Itinerary Run Sheets</h3>
              </div>
              <span className="rounded-full bg-amber-100 border border-amber-200 px-3 py-1 text-xs font-semibold text-amber-700 self-start sm:self-center">
                {booked.length} Event(s) Registered
              </span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {booked.map((experience) => (
                <div key={experience.id} className="rounded-xl border border-slate-200 bg-slate-100 p-5 transition hover:border-slate-300">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2 gap-2">
                    <p className="text-xs font-bold text-slate-950 uppercase tracking-wider">{experience.title}</p>
                    <span className="text-xs font-black text-[#D4AF37] shrink-0">{experience.price}</span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">{experience.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default GetOurServices