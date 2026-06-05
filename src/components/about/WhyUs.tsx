import React from "react";

const WhyUs: React.FC = () => {
  const features = [
    {
      title: "Smart Discovery",
      description:
        "Quickly find trusted businesses, suppliers, services, and opportunities through one powerful platform.",
    },
    {
      title: "Trusted Connections",
      description:
        "Connect with verified providers and businesses to build valuable long-term relationships.",
    },
    {
      title: "Growth Opportunities",
      description:
        "Unlock new possibilities and discover opportunities that help individuals and businesses grow.",
    },
  ];
  return (
    <section className="bg-white py-2 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Images */}
          <div className="relative flex items-center justify-center min-h-[650px]">

            {/* Small Floating Image */}
            <div className="absolute left-0 top-0 z-20 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1974&auto=format&fit=crop"
                alt="Business Meeting"
                className="h-64 w-52 rounded-3xl object-cover shadow-2xl border-4 border-white"
              />
            </div>

            <div className="relative ml-0 md:ml-20 mt-20 md:mt-10">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1974&auto=format&fit=crop"
                alt="Why Choose BuySmartly"
                className="h-[500px] w-full max-w-lg rounded-[32px] object-cover shadow-[0_25px_80px_rgba(0,0,0,0.15)]"
              />

              <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-3xl bg-[#A18244] opacity-90"></div>
            </div>
          </div>

          <div className="flex flex-col justify-center">

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#191919] lg:text-5xl">
                Why Choose BuySmartly?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              BuySmartly is designed to simplify how people discover
              opportunities, connect with trusted businesses, and access
              valuable services. We bring everything together in one modern
              ecosystem built for growth.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-[#A18244] hover:shadow-xl"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#A18244]/10 font-bold text-[#A18244]">
                      0{index + 1}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#191919]">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-6 w-fit cursor-pointer rounded-full bg-[#191919] px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#A18244] hover:text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;