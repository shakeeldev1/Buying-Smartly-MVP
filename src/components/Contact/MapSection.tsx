import React from "react";

const MapSection = () => {
  return (
    <section className="bg-[#f8f6f1] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center rounded-full border border-[#A18244]/30 bg-[#A18244]/10 px-5 py-2 text-xs font-medium tracking-[0.25em] uppercase text-[#A18244]">
            Our Location
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-black">
            Visit Our Office
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-zinc-600 leading-relaxed">
            We welcome meetings, partnerships, and business discussions.
            Connect with us at our office location or reach out through our
            contact channels.
          </p>
        </div>

        {/* Map Container */}
        <div className="overflow-hidden rounded-4xl border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <iframe
            title="Bahawalpur Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111256.59449734687!2d71.60760971101362!3d29.377064566356026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Pakistan!5e0!3m2!1sen!2s!4v1780657930378!5m2!1sen!2s"
            className="w-full h-150"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Bottom Info Card */}
        <div className="relative mt-10 overflow-hidden rounded-4xl border border-[#A18244]/20 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          {/* Decorative Glow */}
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#A18244]/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#A18244]/10 blur-3xl" />

          <div className="relative z-10 text-center">
            <span className="inline-flex items-center rounded-full border border-[#A18244]/30 bg-[#A18244]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#A18244]">
              BuySmartly Ecosystem
            </span>

            <h3 className="mt-6 text-3xl font-bold text-black">
              Building Meaningful Business Connections
            </h3>

            <div className="mx-auto mt-5 h-0.5 w-20 bg-[#A18244]" />

            <p className="mt-6 max-w-3xl mx-auto text-zinc-600 leading-relaxed">
              BuySmartly connects businesses, entrepreneurs, suppliers, and
              strategic partners through a trusted ecosystem designed to
              encourage collaboration, unlock new opportunities, and support
              sustainable growth across international markets.
            </p>

            <p className="mt-4 max-w-2xl mx-auto text-zinc-500 leading-relaxed">
              Whether you're seeking partnerships, sourcing solutions, or
              expansion opportunities, our team is committed to providing
              professional support, valuable connections, and long-term business
              success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;