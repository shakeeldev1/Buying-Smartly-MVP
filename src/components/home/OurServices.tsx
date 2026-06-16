
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

const services = [
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
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            Strategic Architecture
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Nine Vertical{" "}
            <span className="text-[#D4AF37]">
              Ecosystem
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500 leading-relaxed">
            Our multi-vertical core infrastructure powering
            seamless global connection pathways.
          </p>

          <div className="mx-auto mt-6 h-[2px] w-14 rounded-full bg-[#D4AF37]" />
        </div>

        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                style={{ backgroundImage: `url(${service.bgImage})` }}
                className="group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-cover bg-center p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_25px_50px_rgba(212,175,55,0.2)] min-h-[280px] flex flex-col justify-between"
              >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-slate-900/85 transition-colors duration-500 group-hover:bg-slate-900/75 z-0" />

                {/* Relative Wrapper for Content to sit above overlay */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/20 text-[#D4AF37] backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-white shadow-md">
                    <Icon size={26} />
                  </div>

                  <div>
                    {/* Content */}
                    <h3 className="mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
                      {service.title}
                    </h3>

                    <p className="leading-relaxed text-slate-300">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Center Line */}
                <div className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 z-20 rounded-full bg-[#D4AF37] transition-all duration-500 group-hover:w-24" />

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-10">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D4AF37]/20 blur-3xl" />
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