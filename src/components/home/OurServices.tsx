import {
  ShoppingCart,
  Plane,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Truck,
  Building2,
  Package,
  UserRound,
} from "lucide-react";

const SERVICES = [
  {
    icon: ShoppingCart,
    title: "Shopping & Sourcing",
    desc: "Discover products and premium suppliers globally.",
    bgImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Plane,
    title: "Travel Experiences",
    desc: "Book curated luxury travel opportunities.",
    bgImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
  },
  {
    icon: Briefcase,
    title: "Jobs & Careers",
    desc: "Find executive career opportunities worldwide.",
    bgImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
  },
  {
    icon: Building2,
    title: "Business Opportunities",
    desc: "Explore investment and corporate partnership deals.",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Access elite learning and professional certification programs.",
    bgImage: "https://kinnaird.edu.pk/wp-content/uploads/2024/03/bachelor-education.jpg"
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Connect with premium medical services and health networks.",
    bgImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "Find integrated shipping and supply chain solutions.",
    bgImage: "https://etimg.etb2bimg.com/photo/118316548.cms"
  },
  {
    icon: Package,
    title: "Supplier Sourcing",
    desc: "Source directly from fully verified international suppliers.",
    bgImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: UserRound,
    title: "Professional Services",
    desc: "Hire top-tier experts across specialized business disciplines.",
    bgImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069&auto=format&fit=crop"
  },
];

function OurServices() {
  return (
    <section className="bg-white py-12 text-slate-900 antialiased overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Global Component Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center flex flex-col items-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#A18244] bg-[#D4AF37]/10 px-3 py-1 rounded-full mb-3">
            Strategic Architecture
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Nine Vertical <span className="text-[#D4AF37]">Ecosystem</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-500 font-medium max-w-md leading-relaxed">
            Our multi-vertical core infrastructure powering seamless global connection pathways.
          </p>

          <div className="w-10 h-[3px] bg-[#D4AF37]/40 mt-5 rounded-full" />
        </div>

        {/* Services Structural Layout Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/5 min-h-[300px] flex flex-col justify-between items-stretch cursor-pointer"
              >
                {/* Visual Media Rendering Foundation Layer */}
                <img 
                  src={service.bgImage} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />

                {/* Micro-Contrast High Legibility Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/85 to-slate-950/95 z-0" />

                {/* Relative Content Frame Matrix */}
                <div className="relative z-10 flex flex-col flex-1 justify-between items-stretch">
                  
                  {/* Glassmorphic Icon Wrapper Container */}
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#D4AF37] group-hover:text-slate-950 group-hover:border-[#D4AF37] shadow-sm">
                    <Icon className="h-5 w-5 stroke-[2.2]" />
                  </div>

                  {/* Text Description Segment Blocks */}
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-white tracking-tight transition-colors duration-200 group-hover:text-[#D4AF37]">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed opacity-85">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Centered Decorative Dynamic Anchor Track */}
                <div className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 z-20 rounded-full bg-[#D4AF37] transition-all duration-500 group-hover:w-24" />

                {/* Subtle Ambient Radial Lighting Flares */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-10">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D4AF37]/10 blur-3xl" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OurServices;