import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

const ContactMe: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      value: "contact@buysmartly.com",
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: "+92 307 6341312",
    },
    {
      icon: MapPin,
      title: "Office Location",
      value: "Global Business Network",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Friday | 09:00 AM - 06:00 PM",
    },
  ];

  return (
    <section className="bg-[#f8f6f1] py-16 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Side */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Get In Touch
            </h2>

            <p className="text-zinc-600 leading-relaxed mb-8 md:mb-10 text-sm md:text-base">
              Our global team is committed to helping businesses,
              professionals, and partners unlock opportunities
              through the BuySmartly ecosystem.
            </p>

            <div className="space-y-4 md:space-y-5">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 md:gap-5 rounded-3xl border border-zinc-800 bg-[#0f0f10] p-5 md:p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#A18244] hover:shadow-[0_15px_40px_rgba(161,130,68,0.15)]"
                >
                  <div className="rounded-2xl bg-[#A18244]/15 p-3 md:p-4 shrink-0">
                    <item.icon
                      className="text-[#A18244]"
                      size={22}
                    />
                  </div>

                  <div>
                    <h3 className="text-base md:text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm md:text-base text-zinc-400 break-words">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 md:mt-12">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-[#A18244]">
                  24h
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Response Time
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-[#A18244]">
                  50+
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Countries
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-[#A18244]">
                  100%
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Professional
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="rounded-[32px] border border-zinc-200 bg-white p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <h2 className="mb-3 text-2xl md:text-3xl font-bold text-black">
              Send a Message
            </h2>

            <p className="mb-8 text-sm md:text-base text-zinc-500">
              Fill out the form below and our team will
              contact you shortly.
            </p>

            <form className="space-y-5 md:space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-[#A18244]"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-[#A18244]"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-[#A18244]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-[#A18244]"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your requirements..."
                className="w-full resize-none rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-[#A18244]"
              />

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#A18244] px-6 py-4 font-semibold text-black transition-all duration-300 hover:bg-[#b99855]"
              >
                Send Message

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMe;