import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, Outlet } from 'react-router-dom';
import { useProviderState } from '../../context/ProviderState';
import type { Service } from '../../context/ProviderState';
import { 
  Plus, Search, Edit2, Trash2, Eye, DollarSign, Tag, Clock, X, 
  CheckCircle, LayoutGrid, List as ListIcon, Layers, Activity, 
  MousePointerClick, TrendingUp, Image as ImageIcon
} from 'lucide-react';
import { CustomSelect } from '../../components/common/CustomSelect';

const Services: React.FC = () => {
  const navigate = useNavigate();
  const { services, deleteService, updateService } = useProviderState();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [preview, setPreview] = useState<Service | null>(null);
  const [activePreviewImage, setActivePreviewImage] = useState<string | null>(null);

  useEffect(() => {
    if (preview) {
      setActivePreviewImage(preview.images[0] || null);
    } else {
      setActivePreviewImage(null);
    }
  }, [preview]);

  // Computed Values
  const filtered = services.filter(s => {
    const q = search.toLowerCase();
    const matchSearch = s.title.toLowerCase().includes(q) || s.category.toLowerCase().includes(q) || s.description.toLowerCase().includes(q);
    const matchStatus = statusFilter === 'All' || s.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const totalServices = services.length;
  const activeServices = services.filter(s => s.status === 'Active').length;
  const totalEngagement = services.reduce((acc, s) => acc + (s.views || 0) + (s.clicks || 0), 0);

  // Helpers
  const statusCls = (status: string) => {
    const map: Record<string, string> = {
      Active: 'bg-emerald-50 text-emerald-700 border-emerald-200 shadow-sm',
      Draft: 'bg-amber-50 text-amber-700 border-amber-200 shadow-sm',
      Inactive: 'bg-rose-50 text-rose-700 border-rose-200 shadow-sm',
    };
    return `${map[status] || 'bg-gray-50 text-gray-600 border-gray-200'} border`;
  };

  const toggleStatus = (id: string, cur: Service['status']) => {
    updateService(id, { status: cur === 'Active' ? 'Inactive' : 'Active' });
  };

  const INPUT_STYLE = "w-full min-h-[44px] rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] hover:bg-white pl-11 pr-4 text-[13px] font-medium text-[#111827] placeholder-[#9CA3AF] outline-none focus:outline-none focus-visible:outline-none focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 shadow-sm";

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-12">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-[20px] font-semibold text-[#111827] tracking-tight">Services Directory</h2>
          <p className="text-[13px] font-medium text-[#6B7280] mt-1">Manage your catalog, pricing, and active listings.</p>
        </div>
        <button
          onClick={() => navigate('/provider/services/create')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111827] hover:bg-[#1F2937] hover:shadow-lg hover:shadow-black/10 text-white font-medium text-[13px] transition-all active:scale-[0.98] shrink-0"
        >
          <Plus className="h-4.5 w-4.5" /> Add New Service
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-sm flex items-center gap-4 group hover:border-[#D1D5DB] transition-all">
          <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Layers className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <p className="text-[11px] font-medium text-[#6B7280] uppercase tracking-wider">Total Services</p>
            <p className="text-2xl font-semibold text-[#111827] mt-0.5">{totalServices}</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-sm flex items-center gap-4 group hover:border-[#D1D5DB] transition-all">
          <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Activity className="h-6 w-6 text-emerald-600" />
          </div>
          <div>
            <p className="text-[11px] font-medium text-[#6B7280] uppercase tracking-wider">Active Listings</p>
            <p className="text-2xl font-semibold text-[#111827] mt-0.5">{activeServices}</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-sm flex items-center gap-4 group hover:border-[#D1D5DB] transition-all">
          <div className="h-12 w-12 rounded-xl bg-rose-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <TrendingUp className="h-6 w-6 text-rose-600" />
          </div>
          <div>
            <p className="text-[11px] font-medium text-[#6B7280] uppercase tracking-wider">Total Engagement</p>
            <p className="text-2xl font-semibold text-[#111827] mt-0.5">{totalEngagement}</p>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-3 flex-1 max-w-2xl">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#9CA3AF] group-focus-within:text-indigo-500 transition-colors" />
            <input
              type="text"
              placeholder="Search by title, category, or keyword..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className={INPUT_STYLE}
            />
          </div>
          <div className="w-full sm:w-48 z-20">
            <CustomSelect 
              value={statusFilter} 
              onChange={setStatusFilter} 
              options={['All', 'Active', 'Draft', 'Inactive']} 
            />
          </div>
        </div>

        <div className="flex items-center gap-1.5 p-1.5 bg-[#F3F4F6] rounded-xl self-start md:self-auto shrink-0 border border-[#E5E7EB]">
          <button 
            onClick={() => setViewType('grid')}
            className={`p-2 rounded-lg transition-all flex items-center gap-2 ${viewType === 'grid' ? 'bg-white text-[#111827] shadow-sm font-medium' : 'text-[#6B7280] hover:text-[#111827]'}`}
          >
            <LayoutGrid className="h-4.5 w-4.5" />
            <span className="text-[13px] hidden sm:block pr-1">Grid</span>
          </button>
          <button 
            onClick={() => setViewType('list')}
            className={`p-2 rounded-lg transition-all flex items-center gap-2 ${viewType === 'list' ? 'bg-white text-[#111827] shadow-sm font-medium' : 'text-[#6B7280] hover:text-[#111827]'}`}
          >
            <ListIcon className="h-4.5 w-4.5" />
            <span className="text-[13px] hidden sm:block pr-1">List</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      {filtered.length > 0 ? (
        <>
          {viewType === 'grid' ? (
            /* Grid View */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map(svc => (
                <div key={svc.id} className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/5 hover:border-[#D1D5DB] transition-all duration-300 group flex flex-col">
                  {/* Image Header */}
                  <div className="aspect-[4/3] w-full relative overflow-hidden bg-[#F3F4F6]">
                    <img src={svc.images[0]} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    
                    {/* Badge Overlay */}
                    <div className="absolute top-3 left-3">
                      {svc.images.length > 1 && (
                        <span className="px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider backdrop-blur-md bg-[#111827]/80 text-white shadow-sm flex items-center gap-1.5">
                          <ImageIcon className="h-3 w-3" /> {svc.images.length} Photos
                        </span>
                      )}
                    </div>
                    
                    <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md ${
                        svc.status === 'Active' ? 'bg-emerald-500/90 text-white shadow-sm' :
                        svc.status === 'Draft' ? 'bg-amber-500/90 text-white shadow-sm' :
                        'bg-rose-500/90 text-white shadow-sm'
                      }`}>
                        {svc.status}
                      </span>
                    </div>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-[10px] font-medium text-[#6B7280] uppercase tracking-wider mb-1">{svc.category}</p>
                    <h3 className="text-[15px] font-semibold text-[#111827] leading-snug line-clamp-2 mb-2 group-hover:text-indigo-600 transition-colors">{svc.title}</h3>
                    
                    <div className="mt-auto pt-4 border-t border-[#F3F4F6] flex items-center justify-between">
                      <p className="text-[15px] font-semibold text-[#111827]">{svc.price}</p>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0 duration-200">
                        <button onClick={() => setPreview(svc)} className="p-1.5 rounded-lg text-[#9CA3AF] hover:text-[#111827] hover:bg-[#F3F4F6] transition-colors"><Eye className="h-4.5 w-4.5" /></button>
                        <button onClick={() => navigate(`/provider/services/${svc.id}/edit`)} className="p-1.5 rounded-lg text-[#9CA3AF] hover:text-[#111827] hover:bg-[#F3F4F6] transition-colors"><Edit2 className="h-4.5 w-4.5" /></button>
                        <button onClick={() => { if (confirm(`Delete "${svc.title}"?`)) deleteService(svc.id); }} className="p-1.5 rounded-lg text-[#9CA3AF] hover:text-rose-600 hover:bg-rose-50 transition-colors"><Trash2 className="h-4.5 w-4.5" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#F3F4F6] bg-[#FAFAFA] text-[11px] font-medium text-[#6B7280] uppercase tracking-wider">
                      <th className="px-6 py-4">Service Details</th>
                      <th className="px-6 py-4 hidden md:table-cell">Pricing</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 hidden lg:table-cell text-center">Engagement</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F3F4F6]">
                    {filtered.map(svc => (
                      <tr key={svc.id} className="hover:bg-[#FAFAFA] transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <img src={svc.images[0]} alt={svc.title} className="h-12 w-12 rounded-xl object-cover border border-[#E5E7EB] shrink-0 shadow-sm" />
                            <div className="min-w-0">
                              <h3 className="text-[14px] font-semibold text-[#111827] truncate group-hover:text-indigo-600 transition-colors">{svc.title}</h3>
                              <p className="text-[11px] font-medium text-[#6B7280] truncate mt-0.5">{svc.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 hidden md:table-cell">
                          <p className="text-[14px] font-semibold text-[#111827]">{svc.price}</p>
                          <p className="text-[11px] font-medium text-[#6B7280] mt-0.5">{svc.pricingModel}</p>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => toggleStatus(svc.id, svc.status)}
                            title="Click to toggle status"
                            className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all hover:brightness-95 active:scale-95 ${statusCls(svc.status)}`}
                          >
                            {svc.status}
                          </button>
                        </td>
                        <td className="px-6 py-4 hidden lg:table-cell text-center">
                          <div className="inline-flex items-center gap-3 text-[12px] font-medium text-[#374151]">
                            <span className="flex items-center gap-1.5" title="Views"><Eye className="h-3.5 w-3.5 text-[#9CA3AF]" /> {svc.views || 0}</span>
                            <span className="flex items-center gap-1.5" title="Clicks"><MousePointerClick className="h-3.5 w-3.5 text-[#9CA3AF]" /> {svc.clicks || 0}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => setPreview(svc)} className="p-2 rounded-xl border border-[#E5E7EB] bg-white text-[#6B7280] hover:text-[#111827] hover:border-[#D1D5DB] hover:shadow-sm transition-all shadow-black/5">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button onClick={() => navigate(`/provider/services/${svc.id}/edit`)} className="p-2 rounded-xl border border-[#E5E7EB] bg-white text-[#6B7280] hover:text-[#111827] hover:border-[#D1D5DB] hover:shadow-sm transition-all shadow-black/5">
                              <Edit2 className="h-4 w-4" />
                            </button>
                            <button onClick={() => { if (confirm(`Delete "${svc.title}"?`)) deleteService(svc.id); }} className="p-2 rounded-xl border border-rose-100 bg-rose-50 text-rose-500 hover:text-white hover:bg-rose-500 hover:border-rose-500 hover:shadow-sm transition-all shadow-black/5">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className="py-24 px-6 text-center bg-white rounded-2xl border border-[#E5E7EB] border-dashed flex flex-col items-center">
          <div className="relative mb-5">
            <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full" />
            <div className="h-16 w-16 relative rounded-2xl bg-white border border-[#E5E7EB] shadow-xl shadow-black/5 flex items-center justify-center">
              <Search className="h-7 w-7 text-[#9CA3AF]" />
            </div>
          </div>
          <h3 className="text-[18px] font-semibold text-[#111827]">No services found</h3>
          <p className="text-[13px] font-medium text-[#6B7280] mt-2 max-w-sm mx-auto leading-relaxed">
            {search || statusFilter !== 'All' 
              ? "We couldn't find anything matching your current filters. Try adjusting them or clear your search." 
              : "You haven't created any services yet. Start offering your expertise to thousands of global buyers."}
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            {(search || statusFilter !== 'All') ? (
              <button onClick={() => { setSearch(''); setStatusFilter('All'); }} className="px-5 py-2.5 rounded-xl bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#111827] font-medium text-[13px] transition-colors">
                Clear Filters
              </button>
            ) : (
              <button onClick={() => navigate('/provider/services/create')} className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-[13px] shadow-lg shadow-indigo-600/20 transition-all active:scale-[0.98]">
                Create Your First Service
              </button>
            )}
          </div>
        </div>
      )}

      {/* Premium Centered Preview Modal */}
      {preview && createPortal(
        <>
          <div onClick={() => setPreview(null)} className="fixed inset-0 bg-[#030712]/50 backdrop-blur-md z-[998] animate-in fade-in duration-200" />
          <div className="fixed inset-0 flex items-center justify-center z-[999] p-4 sm:p-6 lg:p-8 pointer-events-none">
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 w-full max-w-[840px] h-full max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300 border border-[#E5E7EB] pointer-events-auto">
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#F3F4F6] shrink-0 bg-white">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-semibold uppercase tracking-widest border border-indigo-100">
                    {preview.category}
                  </span>
                  <h2 className="text-[18px] font-semibold text-[#111827] truncate max-w-[400px]">{preview.title}</h2>
                </div>
                <button onClick={() => setPreview(null)} className="p-2 rounded-xl text-[#9CA3AF] hover:text-[#111827] hover:bg-[#F3F4F6] transition-colors group">
                  <X className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Body (2 columns on md+) */}
              <div className="flex-1 overflow-y-auto no-scrollbar p-6 sm:p-8 bg-[#FAFAFA] flex flex-col md:flex-row gap-8">
                
                {/* Left Column */}
                <div className="flex-1 space-y-8">
                  {/* Image Gallery */}
                  <div className="space-y-3">
                    <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm bg-[#F3F4F6]">
                      <img src={activePreviewImage || preview.images[0]} alt={preview.title} className="w-full h-full object-cover transition-opacity duration-300" />
                    </div>
                    
                    {preview.images.length > 1 && (
                      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
                        {preview.images.map((img, i) => (
                          <button 
                            key={i} 
                            onClick={() => setActivePreviewImage(img)}
                            className={`relative h-16 w-24 sm:h-20 sm:w-28 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                              (activePreviewImage || preview.images[0]) === img ? 'border-[#111827] ring-2 ring-[#111827]/10' : 'border-transparent hover:border-[#E5E7EB] opacity-70 hover:opacity-100'
                            }`}
                          >
                            <img src={img} alt={`Thumbnail ${i}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-[11px] text-[#6B7280] font-medium uppercase tracking-wider mb-2.5">Service Overview</p>
                    <div className="bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-sm">
                      <p className="text-[13px] font-medium text-[#374151] leading-relaxed whitespace-pre-wrap">{preview.description}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  {preview.tags && preview.tags.length > 0 && (
                    <div>
                      <p className="text-[11px] text-[#6B7280] font-medium uppercase tracking-wider mb-2.5">Search Tags</p>
                      <div className="flex flex-wrap gap-2">
                        {preview.tags.map((t, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#111827] bg-white px-3 py-1.5 rounded-xl border border-[#E5E7EB] shadow-sm">
                            <Tag className="h-3 w-3 text-[#9CA3AF]" />{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column */}
                <div className="w-full md:w-[320px] space-y-6 shrink-0">
                  {/* Quick Metrics */}
                  <div className="bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-sm">
                    <div className="mb-4">
                      <p className="text-[10px] text-[#6B7280] font-medium uppercase tracking-wider mb-1">Pricing Model</p>
                      <p className="text-[20px] font-semibold text-[#111827]">{preview.price}</p>
                      <p className="text-[12px] font-medium text-[#9CA3AF] mt-0.5">{preview.pricingModel}</p>
                    </div>
                    <div className="pt-4 border-t border-[#F3F4F6]">
                      <p className="text-[10px] text-[#6B7280] font-medium uppercase tracking-wider mb-2">Current Status</p>
                      <span className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider ${statusCls(preview.status)}`}>
                        {preview.status}
                      </span>
                    </div>
                  </div>

                  {/* Logistics */}
                  <div>
                    <p className="text-[11px] text-[#6B7280] font-medium uppercase tracking-wider mb-2.5">Logistics</p>
                    <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
                      <div className="p-4 flex items-center gap-3 border-b border-[#F3F4F6]">
                        <div className="h-8 w-8 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                          <Clock className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-[11px] font-medium text-[#6B7280] uppercase tracking-wider">Availability</p>
                          <p className="text-[13px] font-semibold text-[#111827] mt-0.5">{preview.availability}</p>
                        </div>
                      </div>
                      {preview.deliveryTime && (
                        <div className="p-4 flex items-center gap-3">
                          <div className="h-8 w-8 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                          </div>
                          <div>
                            <p className="text-[11px] font-medium text-[#6B7280] uppercase tracking-wider">Est. Delivery</p>
                            <p className="text-[13px] font-semibold text-[#111827] mt-0.5">{preview.deliveryTime}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  {preview.features && preview.features.length > 0 && (
                    <div>
                      <p className="text-[11px] text-[#6B7280] font-medium uppercase tracking-wider mb-2.5">Included Features</p>
                      <div className="bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-sm">
                        <ul className="space-y-3">
                          {preview.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-[13px] font-medium text-[#374151]">
                              <CheckCircle className="h-4.5 w-4.5 text-[#10B981] shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Modal Footer Actions */}
              <div className="border-t border-[#E5E7EB] px-6 py-4 bg-white flex justify-end shrink-0 gap-3">
                <button
                  onClick={() => setPreview(null)}
                  className="px-6 py-2.5 bg-white border border-[#E5E7EB] text-[#374151] hover:bg-[#F9FAFB] font-semibold text-[13px] rounded-xl transition-colors">
                  Close
                </button>
                <button
                  onClick={() => { setPreview(null); navigate(`/provider/services/${preview.id}/edit`); }}
                  className="px-6 py-2.5 bg-[#111827] hover:bg-[#1F2937] text-white font-medium text-[13px] rounded-xl transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2">
                  <Edit2 className="h-4 w-4" /> Edit Service
                </button>
              </div>

            </div>
          </div>
        </>,
        document.body
      )}

      {/* Nested Create/Edit Modals */}
      <Outlet />
    </div>
  );
};

export default Services;
