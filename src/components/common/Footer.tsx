import React from 'react';
import { ArrowUpRight, Globe, Share2, MessageSquare } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-white text-slate-600 font-sans">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          
          {/* Brand Mission Statement Column */}
          <div className="space-y-6 xl:col-span-1">
            <div>
              <span className="text-xl font-bold tracking-widest text-[#D4AF37] uppercase block">
                BuySmartly<span className="text-slate-900">.</span>
              </span>
              <div className="h-1 w-12 bg-[#D4AF37] rounded-full mt-2" />
            </div>
            <p className="text-sm max-w-md text-slate-600 leading-relaxed font-light">
              The premium Search, Discovery, Connection, and Monetization ecosystem bridging global opportunities across multi-vertical industries.
            </p>
            <div className="flex space-x-5 text-slate-500 pt-4">
              <button className="p-2.5 rounded-lg bg-slate-100 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all text-sm font-medium">
                <Globe className="h-4 w-4" />
              </button>
              <button className="p-2.5 rounded-lg bg-slate-100 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all text-sm font-medium">
                <Share2 className="h-4 w-4" />
              </button>
              <button className="p-2.5 rounded-lg bg-slate-100 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all text-sm font-medium">
                <MessageSquare className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Corporate Navigation Infrastructure */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-3">
            
            {/* Core Pages Column */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">Company</h3>
              <ul role="list" className="space-y-3 text-sm">
                <li><a href="/" className="text-slate-600 hover:text-[#D4AF37] font-medium transition-colors">Home Base</a></li>
                <li><a href="/about" className="text-slate-600 hover:text-[#D4AF37] font-medium transition-colors">Our Story (About)</a></li>
                <li><a href="/services" className="text-slate-600 hover:text-[#D4AF37] font-medium transition-colors">Core Services</a></li>
                <li><a href="/contact" className="text-slate-600 hover:text-[#D4AF37] font-medium transition-colors">Get In Touch (Contact)</a></li>
              </ul>
            </div>

            {/* Ecosystem Verticals Column */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">Ecosystem Hubs</h3>
              <ul role="list" className="space-y-3 text-sm">
                <li><a href="#" className="text-slate-600 hover:text-[#D4AF37] font-medium transition-colors">Shopping & Sourcing</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#D4AF37] font-medium transition-colors">Travel Experiences</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#D4AF37] font-medium transition-colors">Logistics Networks</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#D4AF37] font-medium transition-colors">Healthcare Access</a></li>
              </ul>
            </div>

            {/* Partnerships & Onboarding Column */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">Partnerships</h3>
              <ul role="list" className="space-y-3 text-sm">
                <li>
                  <a href="/register/provider" className="inline-flex items-center text-[#D4AF37] hover:text-[#e5c158] font-semibold transition-colors">
                    Apply as Provider <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                  </a>
                </li>
                <li><a href="#" className="text-slate-600 hover:text-[#D4AF37] font-medium transition-colors">Membership Tiers</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#D4AF37] font-medium transition-colors">Listing Parameters</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Lower Legal Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; 2026 BuySmartly by ELROIX HOLDINGS LLC. All rights reserved.</p>
          <div className="flex space-x-8 font-medium">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;