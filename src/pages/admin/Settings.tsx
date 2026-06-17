import { User, Mail, Phone, MapPin, Camera, Save, ShieldCheck } from 'lucide-react'

function Settings() {
  return (
    <div className="space-y-6 max-w-[1000px] mx-auto select-none">
      {/* Top Controls Header Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Account Profile</h2>
          <p className="text-sm text-slate-500 mt-0.5">Update your personal identification photo, credentials, and regional details</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-white rounded-lg hover:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-200 font-semibold text-sm">
          <Save className="h-4 w-4" />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left Card: Profile Avatar & Meta Status */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm text-center flex flex-col items-center">
          <div className="relative group cursor-pointer mb-4">
            {/* User Profile Avatar Wrapper */}
            <div className="w-28 h-28 bg-slate-100 border-2 border-slate-200 rounded-full flex items-center justify-center shadow-inner overflow-hidden relative">
              <span className="text-3xl font-bold text-slate-400 group-hover:opacity-20 transition-opacity duration-200">AU</span>
              {/* Optional: Add an actual <img src="..." className="object-cover w-full h-full" /> alternative */}
            </div>
            {/* Interactive Image Upload Hover Mask Overlay */}
            <div className="absolute inset-0 bg-slate-900/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Camera className="h-5 w-5 text-white" />
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-bold text-slate-900 tracking-tight">Admin User</h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">admin@buysmartly.com</p>
          </div>

          <div className="w-full border-t border-slate-100 mt-5 pt-4 flex items-center justify-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50/50 py-2 rounded-lg border border-emerald-100/60">
            <ShieldCheck className="h-4 w-4" />
            <span>Verified System Admin</span>
          </div>
        </div>

        {/* Right Card: Pure, Clean Core Profile Fields Form */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6 shadow-sm md:col-span-2 space-y-5">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Personal Information</h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative group">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Full Profile Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-[#D4AF37] transition-colors" />
                <input
                  type="text"
                  defaultValue="Admin User"
                  placeholder="Enter your name"
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50/30 focus:bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all text-slate-700 font-semibold"
                />
              </div>
            </div>

            <div className="relative group">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Mobile Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-[#D4AF37] transition-colors" />
                <input
                  type="tel"
                  defaultValue="+63 917 123 4567"
                  placeholder="+63 9XX XXX XXXX"
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50/30 focus:bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all text-slate-700 font-mono font-medium"
                />
              </div>
            </div>
          </div>

          <div className="relative group">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Primary Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-[#D4AF37] transition-colors" />
              <input
                type="email"
                defaultValue="admin@buysmartly.com"
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50/30 focus:bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all text-slate-700 font-medium"
              />
            </div>
          </div>

          <div className="relative group">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Delivery or Business Address</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-slate-400 group-focus-within:text-[#D4AF37] transition-colors" />
              <textarea
                defaultValue="123 Luxury Lane, Bonifacio Global City, Taguig, Metro Manila"
                placeholder="Enter complete address details..."
                rows={2}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50/30 focus:bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all text-slate-700 font-medium resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings