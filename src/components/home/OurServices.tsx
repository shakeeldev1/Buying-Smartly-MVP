
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
  },
  {
    icon: Plane,
    title: "Travel Experiences",
    desc: "Book curated luxury travel opportunities.",
  },
  {
    icon: Briefcase,
    title: "Jobs & Careers",
    desc: "Find executive career opportunities worldwide.",
  },
  {
    icon: Building2,
    title: "Business Opportunities",
    desc: "Explore investment and corporate partnership deals.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Access elite learning and professional certification programs.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Connect with premium medical services and health networks.",
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "Find integrated shipping and supply chain solutions.",
  },
  {
    icon: Package,
    title: "Supplier Sourcing",
    desc: "Source directly from fully verified international suppliers.",
  },
  {
    icon: UserRound,
    title: "Professional Services",
    desc: "Hire top-tier experts across specialized business disciplines.",
  },
];

function OurServices() {
  return (
    <section className="bg-white py-20">
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
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-[0_25px_50px_rgba(212,175,55,0.12)]"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#D4AF37]/15">
                  <Icon size={26} />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[#D4AF37]">
                  {service.title}
                </h3>

                <p className="leading-relaxed text-slate-600">
                  {service.desc}
                </p>

                {/* Bottom Center Line */}
                <div className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-[#D4AF37] transition-all duration-500 group-hover:w-24" />

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D4AF37]/5 blur-3xl" />
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