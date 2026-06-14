import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useProviderState } from '../../context/ProviderState';
import type { Service } from '../../context/ProviderState';
import { Plus, Search, Filter, Edit2, Trash2, Eye, DollarSign, Tag, Clock, X } from 'lucide-react';

const Services: React.FC = () => {
  const navigate = useNavigate();
  const { services, deleteService, updateService } = useProviderState();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Active' | 'Draft' | 'Inactive'>('All');
  const [preview, setPreview] = useState<Service | null>(null);

  const filtered = services.filter(s => {
    const q = search.toLowerCase();
    const matchSearch = s.title.toLowerCase().includes(q) || s.category.toLowerCase().includes(q) || s.description.toLowerCase().includes(q);
    const matchStatus = statusFilter === 'All' || s.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const statusCls = (status: string) => {
    const map: Record<string, string> = {
      Active: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      Draft: 'bg-gray-100 text-gray-500 border-gray-200',
      Inactive: 'bg-rose-50 text-rose-700 border-rose-100',
    };
    return `${map[status] || 'bg-gray-100 text-gray-500 border-gray-200'} border`;
  };

  const toggleStatus = (id: string, cur: Service['status']) => {
    updateService(id, { status: cur === 'Active' ? 'Inactive' : 'Active' });
  };

  return (
    <div className="space-y-5 animate-in fade-in duration-300">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-[15px] font-bold text-[#111827] tracking-tight">Services Directory</h2>
          <p className="text-[11px] text-[#9CA3AF] mt-0.5">Configure catalog details, pricing, and active states.</p>
        </div>
        <button
          onClick={() => navigate('/provider/services/create')}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#111827] hover:bg-[#1F2937] text-white font-semibold text-[12px] transition-colors shadow-sm self-start sm:self-auto"
        >
          <Plus className="h-4 w-4" /> Add Service
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-white px-4 py-3 rounded-xl border border-[#E5E7EB]">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#9CA3AF]" />
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full h-9 rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] pl-9 pr-3 text-[13px] text-[#111827] placeholder-[#9CA3AF] outline-none focus:border-[#111827] focus:bg-white transition-all"
          />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider mr-1 flex items-center gap-1">
            <Filter className="h-3 w-3" /> Filter
          </span>
          {(['All', 'Active', 'Draft', 'Inactive'] as const).map(s => (
            <button key={s} onClick={() => setStatusFilter(s)}
              className={`text-[12px] font-semibold px-3 py-1.5 rounded-lg transition-all ${
                statusFilter === s
                  ? 'bg-[#111827] text-white'
                  : 'text-[#6B7280] hover:text-[#111827] hover:bg-[#F3F4F6]'
              }`}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
        <div className="overflow-x-auto">
          {filtered.length > 0 ? (
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#F3F4F6] bg-[#FAFAFA] text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider">
                  <th className="px-6 py-3.5">Service</th>
                  <th className="px-6 py-3.5 hidden md:table-cell">Category</th>
                  <th className="px-6 py-3.5">Price</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5 hidden lg:table-cell">Created</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F9FAFB]">
                {filtered.map(svc => (
                  <tr key={svc.id} className="hover:bg-[#FAFAFA] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={svc.images[0] || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&q=80'}
                          alt={svc.title}
                          className="h-9 w-9 rounded-lg object-cover border border-[#E5E7EB] shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-[13px] font-semibold text-[#111827] truncate group-hover:text-indigo-600 transition-colors">{svc.title}</p>
                          <p className="text-[10px] text-[#9CA3AF] truncate mt-0.5">{svc.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="text-[12px] text-[#6B7280]">{svc.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[13px] font-bold text-[#111827]">{svc.price}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleStatus(svc.id, svc.status)}
                        title="Click to toggle"
                        className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider transition-all hover:brightness-95 cursor-pointer ${statusCls(svc.status)}`}
                      >
                        {svc.status}
                      </button>
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <span className="text-[12px] text-[#6B7280]">{svc.created}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button onClick={() => setPreview(svc)} title="Preview"
                          className="p-2 rounded-lg border border-[#E5E7EB] text-[#9CA3AF] hover:text-[#111827] hover:border-[#D1D5DB] hover:bg-[#FAFAFA] transition-all">
                          <Eye className="h-3.5 w-3.5" />
                        </button>
                        <button onClick={() => navigate(`/provider/services/${svc.id}/edit`)} title="Edit"
                          className="p-2 rounded-lg border border-[#E5E7EB] text-[#9CA3AF] hover:text-[#111827] hover:border-[#D1D5DB] hover:bg-[#FAFAFA] transition-all">
                          <Edit2 className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => { if (confirm(`Delete "${svc.title}"?`)) deleteService(svc.id); }}
                          title="Delete"
                          className="p-2 rounded-lg border border-[#E5E7EB] text-[#9CA3AF] hover:text-rose-600 hover:border-rose-100 hover:bg-rose-50 transition-all">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="py-16 text-center">
              <div className="h-10 w-10 rounded-xl bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center mx-auto mb-3">
                <Search className="h-5 w-5 text-[#9CA3AF]" />
              </div>
              <p className="text-[13px] font-semibold text-[#374151]">No Services Found</p>
              <p className="text-[11px] text-[#9CA3AF] mt-1">Try adjusting your search or filter.</p>
              <button onClick={() => { setSearch(''); setStatusFilter('All'); }}
                className="mt-3 text-[12px] text-indigo-600 font-semibold hover:underline">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Preview Modal */}
      {preview && (
        <>
          <div onClick={() => setPreview(null)} className="fixed inset-0 bg-[#111827]/25 backdrop-blur-[2px] z-[90] animate-in fade-in duration-150" />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white border-l border-[#E5E7EB] z-[100] flex flex-col shadow-2xl animate-in slide-in-from-right duration-250">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#F3F4F6] shrink-0">
              <div>
                <p className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider">{preview.category}</p>
                <h3 className="text-[14px] font-bold text-[#111827] mt-0.5 truncate">{preview.title}</h3>
              </div>
              <button onClick={() => setPreview(null)}
                className="p-1.5 rounded-lg text-[#9CA3AF] hover:text-[#111827] hover:bg-[#F9FAFB] border border-transparent hover:border-[#E5E7EB] transition-all shrink-0">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar p-5 space-y-5">
              <div className="h-44 w-full rounded-xl overflow-hidden border border-[#E5E7EB]">
                <img src={preview.images[0]} alt={preview.title} className="w-full h-full object-cover" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#FAFAFA] p-3.5 rounded-xl border border-[#E5E7EB]">
                  <p className="text-[9px] text-[#9CA3AF] font-semibold uppercase tracking-wider mb-1">Pricing Rate</p>
                  <p className="text-base font-black text-[#111827] flex items-center">
                    <DollarSign className="h-3.5 w-3.5 text-indigo-500 shrink-0" />{preview.price}
                  </p>
                </div>
                <div className="bg-[#FAFAFA] p-3.5 rounded-xl border border-[#E5E7EB]">
                  <p className="text-[9px] text-[#9CA3AF] font-semibold uppercase tracking-wider mb-1">Status</p>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${statusCls(preview.status)}`}>{preview.status}</span>
                </div>
              </div>

              <div>
                <p className="text-[9px] text-[#9CA3AF] font-semibold uppercase tracking-wider mb-1.5">Service Overview</p>
                <p className="text-[12px] text-[#374151] leading-relaxed">{preview.description}</p>
              </div>

              <div>
                <p className="text-[9px] text-[#9CA3AF] font-semibold uppercase tracking-wider mb-1.5">Availability</p>
                <div className="flex items-center gap-2 text-[12px] text-[#374151]">
                  <Clock className="h-3.5 w-3.5 text-[#9CA3AF]" />{preview.availability}
                </div>
              </div>

              <div>
                <p className="text-[9px] text-[#9CA3AF] font-semibold uppercase tracking-wider mb-1.5">Keywords</p>
                <div className="flex flex-wrap gap-1.5">
                  {preview.tags.map((t, i) => (
                    <span key={i} className="flex items-center gap-1 text-[10px] font-semibold text-[#374151] bg-[#F3F4F6] px-2.5 py-1 rounded-lg border border-[#E5E7EB]">
                      <Tag className="h-2.5 w-2.5 text-[#9CA3AF]" />{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#F3F4F6] pt-4">
                <p className="text-[9px] text-[#9CA3AF] font-semibold uppercase tracking-wider mb-3">Performance</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    { label: 'Views', val: preview.views },
                    { label: 'Clicks', val: preview.clicks },
                    { label: 'Inquiries', val: preview.requestsCount },
                  ].map(({ label, val }) => (
                    <div key={label} className="bg-[#FAFAFA] p-2.5 rounded-xl border border-[#E5E7EB]">
                      <p className="text-[9px] text-[#9CA3AF] font-semibold uppercase tracking-wider">{label}</p>
                      <p className="text-sm font-black text-[#111827] mt-0.5">{val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-[#F3F4F6] p-4 flex gap-2.5 shrink-0">
              <button
                onClick={() => { setPreview(null); navigate(`/provider/services/${preview.id}/edit`); }}
                className="flex-1 py-2.5 bg-[#111827] hover:bg-[#1F2937] text-white font-semibold text-[12px] rounded-xl transition-colors">
                Edit Details
              </button>
              <button onClick={() => setPreview(null)}
                className="flex-1 py-2.5 bg-white border border-[#E5E7EB] text-[#374151] hover:bg-[#F9FAFB] font-semibold text-[12px] rounded-xl transition-colors">
                Dismiss
              </button>
            </div>
          </div>
        </>
      )}

      {/* Nested Create/Edit Modals */}
      <Outlet />
    </div>
  );
};

export default Services;
