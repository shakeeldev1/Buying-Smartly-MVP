import { Bell, Menu, Search, User } from 'lucide-react'

interface AdminTopbarProps {
  onMenuClick: () => void
}

function AdminTopbar({ onMenuClick }: AdminTopbarProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6 sticky top-0 z-40 select-none">
      {/* Left side: Mobile Toggle & Search */}
      <div className="flex items-center gap-3 flex-1 max-w-xs sm:max-w-md">
        {/* Mobile Sidebar Toggle Trigger - Matches sidebar text/hover curves */}
        <button 
          onClick={onMenuClick}
          className="p-2 text-slate-600 hover:text-white hover:bg-slate-900 rounded-lg md:hidden transition-all duration-200"
          aria-label="Open Sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Search Input Container */}
        <div className="relative w-full group">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-[#D4AF37] transition-colors" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all placeholder:text-slate-400 text-slate-700"
          />
        </div>
      </div>

      {/* Right side: Notifications & Profile Action Group */}
      <div className="flex items-center gap-2 md:gap-4 ml-4">
        {/* Notifications Trigger Button - Turns slate with white icon on hover */}
        <button 
          className="p-2 text-slate-600 hover:text-white hover:bg-slate-900 rounded-lg transition-all duration-200 relative group"
          aria-label="View notifications"
        >
          <Bell className="h-5 w-5" />
          {/* Active indicator badge: matches premium gold theme flavor */}
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#D4AF37] rounded-full ring-2 ring-white group-hover:ring-slate-900 transition-all duration-200"></span>
        </button>
        
        {/* Decorative Divider Line */}
        <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>

        {/* User Profile Info Trigger - Dark slate toggle container layout */}
        <button className="flex items-center gap-2.5 p-1.5 text-slate-600 hover:text-white hover:bg-slate-900 rounded-lg transition-all duration-200 text-left group">
          <div className="w-8 h-8 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center group-hover:bg-slate-800 group-hover:border-slate-700 transition-colors">
            <User className="h-4 w-4 text-slate-600 group-hover:text-white transition-colors" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-medium text-slate-700 group-hover:text-white leading-none">Admin User</span>
            <span className="text-[11px] text-slate-400 group-hover:text-slate-300 mt-1 leading-none">Manage Account</span>
          </div>
        </button>
      </div>
    </header>
  )
}

export default AdminTopbar