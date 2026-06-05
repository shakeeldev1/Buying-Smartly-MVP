import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-md text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Brand Logo -> Acts as Home Link */}
          <div className="flex flex-shrink-0 items-center">
            <a href="/" className="text-xl font-bold tracking-widest text-[#A18244] uppercase">
              BuySmartly<span className="text-black">.</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-zinc-600">
            <a href="/" className="hover:text-[#A18244] transition-colors duration-200 text-black">Home</a>
            <a href="/about" className="hover:text-[#A18244] transition-colors duration-200">About</a>
            
            {/* Services Dropdown Trigger */}
            <div className="relative">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className="flex items-center gap-1 hover:text-[#A18244] transition-colors duration-200 focus:outline-none"
              >
                Services <ChevronDown className="h-4 w-4" />
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute left-0 mt-3 w-64 rounded-md bg-white border border-zinc-200 p-2 shadow-xl"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <a href="/services/shopping" className="block rounded px-4 py-2.5 text-xs text-zinc-600 hover:bg-zinc-100 hover:text-[#8a6e3b] transition-all">Shopping & Sourcing</a>
                  <a href="/services/travel" className="block rounded px-4 py-2.5 text-xs text-zinc-600 hover:bg-zinc-100 hover:text-[#8a6e3b] transition-all">Travel Experiences</a>
                  <a href="/services/logistics" className="block rounded px-4 py-2.5 text-xs text-zinc-600 hover:bg-zinc-100 hover:text-[#8a6e3b] transition-all">Logistics Networks</a>
                  <a href="/services/professional" className="block rounded px-4 py-2.5 text-xs text-zinc-600 hover:bg-zinc-100 hover:text-[#8a6e3b] transition-all">Professional Services</a>
                </div>
              )}
            </div>

            <a href="/contact" className="hover:text-[#A18244] transition-colors duration-200">Contact</a>
          </div>

          {/* Right Action CTA Elements */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-zinc-500 hover:text-black transition-colors">
              <Globe className="h-5 w-5" />
            </button>
            <a href="/auth/signin" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors duration-200">
              Sign In
            </a>
            <a href="/register" className="rounded-full bg-[#A18244] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#8a6e3b] transition-all duration-200 shadow-md shadow-[#A18244]/10">
              Join Ecosystem
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-black focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200">
          <div className="space-y-1 px-2 pb-4 pt-2 sm:px-3">
            <a href="/" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-zinc-100">Home</a>
            <a href="/about" className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 hover:bg-zinc-100 hover:text-[#A18244]">About</a>
            <a href="/services" className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 hover:bg-zinc-100 hover:text-[#A18244]">Services</a>
            <a href="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 hover:bg-zinc-100 hover:text-[#A18244]">Contact</a>
          </div>
          <div className="border-t border-zinc-200 pb-4 pt-4 px-4 space-y-3">
            <a href="/auth/signin" className="block text-center rounded-md border border-zinc-300 px-3 py-2 text-base font-medium text-zinc-600 hover:bg-zinc-100">Sign In</a>
            <a href="/register" className="block text-center rounded-md bg-[#A18244] px-3 py-2 text-base font-medium text-black font-semibold">Join Ecosystem</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;