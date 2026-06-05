import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(161,130,68,0.15),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <span className="inline-flex items-center rounded-full border border-[#A18244]/30 bg-[#A18244]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#A18244]">
            Contact Us
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold">
            Let's Build Something
            <span className="text-[#A18244]"> Together </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed">
            Have questions, partnership opportunities, or need support?
            Reach out to our team and we'll get back to you promptly.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Get In Touch
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-10">
              We are committed to providing premium support and
              building meaningful business relationships worldwide.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-[#A18244]/50 transition-all">
                <div className="p-3 rounded-xl bg-[#A18244]/15">
                  <Mail className="text-[#A18244]" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">Email Address</h3>
                  <p className="text-zinc-400">
                    contact@buysmartly.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-[#A18244]/50 transition-all">
                <div className="p-3 rounded-xl bg-[#A18244]/15">
                  <Phone className="text-[#A18244]" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">Phone Number</h3>
                  <p className="text-zinc-400">
                    +92 307 6341312
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-[#A18244]/50 transition-all">
                <div className="p-3 rounded-xl bg-[#A18244]/15">
                  <MapPin className="text-[#A18244]" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">Office Location</h3>
                  <p className="text-zinc-400">
                    Global Business Network
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-[#A18244]/50 transition-all">
                <div className="p-3 rounded-xl bg-[#A18244]/15">
                  <Clock className="text-[#A18244]" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-zinc-400">
                    Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-8">
            <h2 className="text-2xl font-bold mb-8">
              Send a Message
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-sm text-zinc-300">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 outline-none focus:border-[#A18244]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-zinc-300">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 outline-none focus:border-[#A18244]"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 outline-none focus:border-[#A18244]"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 outline-none focus:border-[#A18244]"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 outline-none resize-none focus:border-[#A18244]"
                />
              </div>

              <button
                type="submit"
                className="group w-full rounded-xl bg-[#A18244] px-6 py-4 font-semibold text-black transition-all hover:bg-[#b79758]"
              >
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <Send
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;