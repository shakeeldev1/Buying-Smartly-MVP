import { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/95 backdrop-blur-xl text-slate-900 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-17 items-center justify-between">

          {/* Brand Logo -> Acts as Home Link */}
          <div className="flex flex-shrink-0 items-center">
            <a href="/" className="text-xl font-bold tracking-widest text-[#D4AF37] uppercase">
              BuySmartly<span className="text-slate-900">.</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide text-slate-600">
            <a href="/" className="hover:text-[#D4AF37] transition-colors duration-200 text-slate-900">Home</a>
            <a href="/about" className="hover:text-[#D4AF37] transition-colors duration-200">About</a>

            {/* Services Dropdown Trigger */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors duration-200 focus:outline-none text-slate-700"
              >
                Services <ChevronDown className="h-4 w-4" />
              </button>

              {servicesOpen && (
                <div
                  className="absolute left-0 mt-2 w-72 rounded-2xl bg-white border border-slate-200/80 p-3 shadow-xl shadow-slate-900/10"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <a href="/services/shopping" className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all">View all services</a>
                  <div className="h-px my-2 bg-slate-100" />
                  <a href="/services/shopping" className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all">Shopping & Sourcing</a>
                  <a href="/services/travel" className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all">Travel Experiences</a>
                  <a href="/services/logistics" className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all">Logistics Networks</a>
                  <a href="/services/professional" className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all">Professional Services</a>
                </div>
              )}
            </div>

            <a href="/contact" className="hover:text-[#D4AF37] transition-colors duration-200">Contact</a>
          </div>

          {/* Right Action CTA Elements */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-slate-400 hover:text-[#D4AF37] transition-colors">
              <Globe className="h-5 w-5" />
            </button>
            <a href="/login" className="text-sm font-medium text-slate-600 hover:text-[#D4AF37] transition-colors duration-200">
              Login
            </a>
            <a href="/signup" className="bg-[#D4AF37] px-6 rounded-full py-2.5 text-sm font-semibold text-slate-900 hover:bg-[#e5c158] transition-all duration-300 shadow-lg shadow-[#D4AF37]/20">
              Sign Up
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200/50">
          <div className="space-y-1 px-2 pb-4 pt-2 sm:px-3">
            <a href="/" className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-900 hover:bg-slate-100">Home</a>
            <a href="/about" className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-[#D4AF37]">About</a>
            <a href="/services/shopping" className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-[#D4AF37]">Services</a>
            <a href="/contact" className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-[#D4AF37]">Contact</a>
          </div>
          <div className="border-t border-slate-200/50 pb-4 pt-4 px-4 space-y-3">
            <a href="/login" className="block text-center rounded-lg border border-slate-300 px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100">Login</a>
            <a href="/signup" className="block text-center rounded-full bg-[#D4AF37] px-3 py-2.5 text-base font-semibold text-slate-900 shadow-lg shadow-[#D4AF37]/20">Sign Up</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;