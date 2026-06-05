import React from 'react';
import { ArrowUpRight, Globe, Share2, MessageSquare } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 text-zinc-700 font-sans">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Brand Mission Statement Column */}
          <div className="space-y-6 xl:col-span-1">
            <span className="text-xl font-bold tracking-widest text-[#A18244] uppercase block">
              BuySmartly<span className="text-black">.</span>
            </span>
            <p className="text-sm max-w-md text-zinc-600 leading-relaxed">
              The premium Search, Discovery, Connection, and Monetization ecosystem bridging global opportunities across multi-vertical industries.
            </p>
            <div className="flex space-x-5 text-zinc-500">
              <span className="flex items-center gap-1 text-xs"><Globe className="h-4 w-4" /> Global</span>
              <span className="flex items-center gap-1 text-xs"><Share2 className="h-4 w-4" /> Social</span>
              <span className="flex items-center gap-1 text-xs"><MessageSquare className="h-4 w-4" /> Hub</span>
            </div>
          </div>

          {/* Corporate Navigation Infrastructure */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-3">
            
            {/* Core Pages Column */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-800">Company</h3>
              <ul role="list" className="mt-4 space-y-2 text-sm">
                <li><a href="/" className="hover:text-black transition-colors">Home Base</a></li>
                <li><a href="/about" className="hover:text-black transition-colors">Our Story (About)</a></li>
                <li><a href="/services" className="hover:text-black transition-colors">Core Services</a></li>
                <li><a href="/contact" className="hover:text-black transition-colors">Get In Touch (Contact)</a></li>
              </ul>
            </div>

            {/* Ecosystem Verticals Column */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-800">Ecosystem Hubs</h3>
              <ul role="list" className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-black transition-colors">Shopping & Sourcing</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Travel Experiences</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Logistics Networks</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Healthcare Access</a></li>
              </ul>
            </div>

            {/* Partnerships & Onboarding Column */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-800">Partnerships</h3>
              <ul role="list" className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="/register/provider" className="inline-flex items-center text-[#A18244] hover:text-[#8a6e3b] font-medium">
                    Apply as Provider <ArrowUpRight className="ml-1 h-3 w-3" />
                  </a>
                </li>
                <li><a href="#" className="hover:text-black transition-colors">Membership Tiers</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Listing Parameters</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Lower Legal Bar */}
        <div className="mt-12 border-t border-zinc-200 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>&copy; 2026 BuySmartly by ELROIX HOLDINGS LLC. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-zinc-600">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-600">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;