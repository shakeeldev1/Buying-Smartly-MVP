import React, { useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useProviderState } from '../../context/ProviderState';
import {
  LayoutDashboard, User, Layers, FileText, MessageSquare,
  BarChart3, Settings, LogOut, Menu, X, Bell,
  CheckCircle, AlertCircle, Info
} from 'lucide-react';

const ProviderLayout: React.FC = () => {
  const { profile, conversations, requests, toasts, removeToast } = useProviderState();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const unread = conversations.filter(c => c.unread).length;
  const newReqs = requests.filter(r => r.status === 'New').length;

  const closeSidebar = () => setSidebarOpen(false);

  const getPageTitle = () => {
    const p = location.pathname;
    if (p.includes('/dashboard')) return 'Dashboard';
    if (p.includes('/profile')) return 'My Profile';
    if (p.includes('/services/create')) return 'New Service';
    if (p.includes('/services') && p.includes('/edit')) return 'Edit Service';
    if (p.includes('/services')) return 'Services';
    if (p.includes('/requests/')) return 'Request Detail';
    if (p.includes('/requests')) return 'Request Pipeline';
    if (p.includes('/messages')) return 'Messages';
    if (p.includes('/analytics')) return 'Analytics';
    if (p.includes('/settings')) return 'Settings';
    return 'Provider Portal';
  };

  const navLink = (path: string, icon: React.ReactNode, label: string, badge?: number) => (
    <NavLink
      to={path}
      onClick={closeSidebar}
      className={({ isActive }) =>
        `flex items-center justify-between px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all border ${
          isActive
            ? 'bg-[#1F2937] text-white border-[#374151]'
            : 'text-[#9CA3AF] hover:text-white hover:bg-[#1F2937]/50 border-transparent'
        }`
      }
    >
      <span className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </span>
      {badge !== undefined && badge > 0 && (
        <span className="bg-indigo-500 text-white font-bold text-[9px] px-1.5 py-0.5 rounded-full shrink-0 leading-none">
          {badge}
        </span>
      )}
    </NavLink>
  );

  const ICON = 'h-4 w-4 shrink-0';

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-[#111827] flex flex-col md:flex-row antialiased">

      {/* ── Toast Stack ── */}
      <div className="fixed top-5 right-5 z-[200] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E5E7EB] shadow-xl shadow-black/5 pointer-events-auto animate-in fade-in slide-in-from-top-3 duration-300"
          >
            {toast.type === 'success' && <CheckCircle className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />}
            {toast.type === 'error'   && <AlertCircle  className="h-4.5 w-4.5 text-rose-500 shrink-0 mt-0.5" />}
            {toast.type === 'info'    && <Info          className="h-4.5 w-4.5 text-indigo-500 shrink-0 mt-0.5" />}
            <p className="text-[13px] font-medium text-[#374151] flex-1 leading-snug">{toast.message}</p>
            <button onClick={() => removeToast(toast.id)} className="text-[#9CA3AF] hover:text-[#374151] transition-colors mt-0.5 shrink-0">
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* ── Mobile Top Bar ── */}
      <div className="flex md:hidden items-center justify-between bg-[#111827] border-b border-[#1F2937] px-4 py-3 sticky top-0 z-40">
        <NavLink to="/" className="text-[14px] font-black tracking-widest text-white uppercase">
          BuySmartly<span className="text-indigo-400">.</span>
        </NavLink>
        <div className="flex items-center gap-3">
          <button className="relative text-[#9CA3AF] hover:text-white p-1 transition-colors">
            <Bell className="h-5 w-5" />
            {(newReqs + unread) > 0 && <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-indigo-500 rounded-full ring-2 ring-[#111827]" />}
          </button>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-[#9CA3AF] hover:text-white p-1 transition-colors">
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ── Sidebar ── */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-[236px] bg-[#111827] border-r border-[#1F2937]
        flex flex-col justify-between
        transition-transform duration-300 ease-in-out
        md:sticky md:top-0 md:h-screen md:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Top section */}
        <div className="flex flex-col overflow-hidden">

          {/* Logo */}
          <div className="h-[60px] flex items-center justify-between px-5 border-b border-[#1F2937] shrink-0">
            <NavLink to="/" className="text-[14px] font-black tracking-widest text-white uppercase">
              BuySmartly<span className="text-indigo-400">.</span>
            </NavLink>
            <button onClick={closeSidebar} className="md:hidden text-[#9CA3AF] hover:text-white p-1 transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Profile Card */}
          <div className="px-4 py-3.5 border-b border-[#1F2937] shrink-0">
            <div className="flex items-center gap-2.5">
              <img
                src={profile.logo}
                alt={profile.businessName}
                className="h-8 w-8 rounded-lg object-cover border border-[#374151] shrink-0 bg-[#1F2937]"
              />
              <div className="min-w-0">
                <p className="text-[12px] font-bold text-white truncate">{profile.businessName}</p>
                <p className="text-[10px] text-[#9CA3AF] truncate mt-0.5">{profile.contact}</p>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex-1 p-3 space-y-1 overflow-y-auto no-scrollbar">
            <p className="text-[9px] font-bold text-[#6B7280] uppercase tracking-widest px-3 mb-2 mt-1">Main</p>

            {navLink('/provider/dashboard', <LayoutDashboard className={ICON} />, 'Dashboard')}
            {navLink('/provider/profile',   <User className={ICON} />, 'My Profile')}
            {navLink('/provider/services',  <Layers className={ICON} />, 'Services')}

            <p className="text-[9px] font-bold text-[#6B7280] uppercase tracking-widest px-3 pt-4 mb-2">Workspace</p>

            {navLink('/provider/requests',  <FileText className={ICON} />, 'Requests', newReqs)}
            {navLink('/provider/messages',  <MessageSquare className={ICON} />, 'Messages', unread)}
            {navLink('/provider/analytics', <BarChart3 className={ICON} />, 'Analytics')}
            {navLink('/provider/settings',  <Settings className={ICON} />, 'Settings')}
          </nav>
        </div>

        {/* Logout */}
        <div className="p-3 border-t border-[#1F2937] shrink-0">
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium text-[#9CA3AF] hover:text-rose-400 hover:bg-rose-500/10 border border-transparent transition-all"
          >
            <LogOut className="h-4 w-4 shrink-0" /> Logout
          </button>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Desktop Header */}
        <header className="hidden md:flex h-[64px] items-center justify-between px-8 bg-white/80 backdrop-blur-md border-b border-[#E5E7EB] sticky top-0 z-30 shrink-0">
          <div className="flex items-center gap-3">
            <h1 className="text-[15px] font-bold text-[#111827] tracking-tight">{getPageTitle()}</h1>
          </div>
          <div className="flex items-center gap-5">
            <div className="relative">
              <button className="text-[#9CA3AF] hover:text-[#111827] transition-colors p-1.5 rounded-lg hover:bg-[#F3F4F6]">
                <Bell className="h-4.5 w-4.5" />
                {(newReqs + unread) > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-500 rounded-full ring-2 ring-white" />
                )}
              </button>
            </div>
            <div className="w-px h-5 bg-[#E5E7EB]" />
            <button className="flex items-center gap-2.5 hover:bg-[#F9FAFB] p-1.5 pr-3 rounded-xl transition-all border border-transparent hover:border-[#E5E7EB]">
              <img
                src={profile.logo}
                alt={profile.businessName}
                className="h-7 w-7 rounded-md object-cover border border-[#E5E7EB] bg-white shadow-sm"
              />
              <div className="text-left hidden lg:block">
                <p className="text-[12px] font-bold text-[#111827] leading-none mb-1">{profile.businessName}</p>
                <p className="text-[10px] text-[#6B7280] leading-none font-medium">Provider Account</p>
              </div>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-7 overflow-y-auto">
          <div className="max-w-[1440px] mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-[#111827]/40 backdrop-blur-[2px] z-40 md:hidden"
        />
      )}
    </div>
  );
};

export default ProviderLayout;
