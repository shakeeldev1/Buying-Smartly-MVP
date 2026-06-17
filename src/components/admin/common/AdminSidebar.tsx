import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, BarChart3, X } from 'lucide-react'

interface AdminSidebarProps {
  isOpen: boolean
  onClose: () => void
}

function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  // Shared styling logic for cleaner layout code
  const navItemStyles = ({ isActive }: { isActive: boolean }) => {
    const baseClasses = "flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group"
    
    return isActive
      ? `${baseClasses} bg-[#D4AF37] text-white shadow-sm`
      : `${baseClasses} text-slate-600 hover:text-white hover:bg-slate-900`
  }

  return (
    <>
      {/* Mobile Dark Overlay Layer */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 md:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col h-full
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0
      `}>
        {/* Sidebar Header Branding */}
        <div className="p-4 h-16 border-b border-slate-200 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-900">
            BuySmartly<span className="text-[#D4AF37]"> Admin</span>
          </h1>
          {/* Mobile Close Button */}
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:bg-slate-100 rounded-lg md:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          <NavLink to="/admin" end className={navItemStyles} onClick={onClose}>
            <LayoutDashboard className="h-5 w-5 text-slate-400 group-[.active]:text-white group-hover:text-white transition-colors" />
            Overview
          </NavLink>

           <NavLink to="/admin/users" className={navItemStyles} onClick={onClose}>
            <Users className="h-5 w-5 text-slate-400 group-[.active]:text-white group-hover:text-white transition-colors" />
            Users
          </NavLink>

          <NavLink to="/admin/products" className={navItemStyles} onClick={onClose}>
            <Package className="h-5 w-5 text-slate-400 group-[.active]:text-white group-hover:text-white transition-colors" />
            Products
          </NavLink>

          <NavLink to="/admin/orders" className={navItemStyles} onClick={onClose}>
            <ShoppingCart className="h-5 w-5 text-slate-400 group-[.active]:text-white group-hover:text-white transition-colors" />
            Orders
          </NavLink>

         

          <NavLink to="/admin/analytics" className={navItemStyles} onClick={onClose}>
            <BarChart3 className="h-5 w-5 text-slate-400 group-[.active]:text-white group-hover:text-white transition-colors" />
            Analytics
          </NavLink>

          <NavLink to="/admin/settings" className={navItemStyles} onClick={onClose}>
            <Settings className="h-5 w-5 text-slate-400 group-[.active]:text-white group-hover:text-white transition-colors" />
            Settings
          </NavLink>
        </nav>
      </aside>
    </>
  )
}

export default AdminSidebar