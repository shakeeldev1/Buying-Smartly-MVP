import { ArrowUpRight, Globe, Share2, MessageSquare } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white text-slate-500 antialiased overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 xl:gap-8 max-w-6xl mx-auto">

          {/* Brand Mission Statement Column */}
          <div className="space-y-5 xl:col-span-1">
            <div>
              <span className="text-xl font-extrabold tracking-[0.15em] text-[#A18244] uppercase block">
                BuySmartly<span className="text-slate-900">.</span>
              </span>
              <div className="w-8 h-[3px] bg-[#D4AF37]/40 rounded-full mt-2" />
            </div>
            
            <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-sm leading-relaxed opacity-95">
              The premium Search, Discovery, Connection, and Monetization ecosystem bridging global opportunities across multi-vertical industries.
            </p>
            
            {/* Social & Ecosystem Button Arrays */}
            <div className="flex space-x-3 pt-2">
              <button className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/20 hover:text-[#A18244] transition-all duration-200 shadow-sm cursor-pointer">
                <Globe className="h-4 w-4 stroke-[2.2]" />
              </button>
              <button className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/20 hover:text-[#A18244] transition-all duration-200 shadow-sm cursor-pointer">
                <Share2 className="h-4 w-4 stroke-[2.2]" />
              </button>
              <button className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/20 hover:text-[#A18244] transition-all duration-200 shadow-sm cursor-pointer">
                <MessageSquare className="h-4 w-4 stroke-[2.2]" />
              </button>
            </div>
          </div>

          {/* Corporate Navigation Infrastructure Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 xl:col-span-2">

            {/* Core Corporate Information Pillar */}
            <div>
              <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 mb-4">Company</h3>
              <ul className="space-y-3 text-xs sm:text-sm font-medium">
                <li>
                  <a href="/" className="text-slate-500 hover:text-[#A18244] transition-colors inline-block hover:translate-x-0.5 transform duration-200">Home Base</a>
                </li>
                <li>
                  <a href="/about" className="text-slate-500 hover:text-[#A18244] transition-colors inline-block hover:translate-x-0.5 transform duration-200">Our Story (About)</a>
                </li>
                <li>
                  <a href="/services" className="text-slate-500 hover:text-[#A18244] transition-colors inline-block hover:translate-x-0.5 transform duration-200">Core Services</a>
                </li>
                <li>
                  <a href="/contact" className="text-slate-500 hover:text-[#A18244] transition-colors inline-block hover:translate-x-0.5 transform duration-200">Get In Touch (Contact)</a>
                </li>
              </ul>
            </div>

            {/* Ecosystem Verticals Dynamic Pipeline Pillar */}
            <div>
              <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 mb-4">Ecosystem Hubs</h3>
              <ul className="space-y-3 text-xs sm:text-sm font-medium">
                <li>
                  <a href="/services/shopping" className="text-slate-500 hover:text-[#A18244] transition-colors inline-block hover:translate-x-0.5 transform duration-200">Shopping & Sourcing</a>
                </li>
                <li>
                  <a href="/services/travel" className="text-slate-500 hover:text-[#A18244] transition-colors inline-block hover:translate-x-0.5 transform duration-200">Travel Experiences</a>
                </li>
                <li>
                  <a href="/services/logistics" className="text-slate-500 hover:text-[#A18244] transition-colors inline-block hover:translate-x-0.5 transform duration-200">Logistics Networks</a>
                </li>
                <li>
                  <a href="/services/professional" className="text-slate-500 hover:text-[#A18244] transition-colors inline-block hover:translate-x-0.5 transform duration-200">Professional Services</a>
                </li>
              </ul>
            </div>

            {/* Partnerships Onboarding Action Item Pillar */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 mb-4">Partnerships</h3>
              <ul className="space-y-3 text-xs sm:text-sm font-medium">
                <li>
                  <a href="/register/provider" className="inline-flex items-center text-[#A18244] hover:text-[#D4AF37] font-bold uppercase text-[11px] tracking-wider transition-colors duration-200 group">
                    Apply as Provider 
                    <ArrowUpRight className="ml-1 h-3.5 w-3.5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-[#A18244] transition-colors inline-block hover:translate-x-0.5 transform duration-200">Membership Tiers</a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-[#A18244] transition-colors inline-block hover:translate-x-0.5 transform duration-200">Listing Parameters</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Lower Legal Compliance Footnote Bar */}
        <div className="mt-16 pt-8 border-t border-slate-100 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] font-bold text-slate-400 tracking-tight gap-4">
          <p className="uppercase text-center sm:text-left">&copy; 2026 BuySmartly by ELROIX HOLDINGS LLC. All rights reserved.</p>
          <div className="flex space-x-6 uppercase tracking-wider">
            <a href="#" className="hover:text-[#A18244] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#A18244] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;