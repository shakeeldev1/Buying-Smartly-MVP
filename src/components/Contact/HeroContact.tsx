import React from "react";

const HeroContact: React.FC = () => {
  return (
    <section className="relative h-[70vh] min-h-125 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop"
          alt="Contact Background"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#A18244]/40 bg-[#A18244]/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#A18244] backdrop-blur-md">
            Contact BuySmartly
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-white md:text-7xl">
            Let's Build Something
            <span className="text-[#A18244]"> Extraordinary</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300">
            Whether you're exploring partnerships, business opportunities,
            premium sourcing, or platform support, our team is ready to assist
            you with personalized guidance and professional service.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="h-[2px] w-24 bg-[#A18244]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;