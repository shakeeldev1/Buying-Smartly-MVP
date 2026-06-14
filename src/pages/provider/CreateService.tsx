import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProviderState } from '../../context/ProviderState';
import {
  ArrowLeft, ArrowRight, Sparkles, Layers, DollarSign,
  Image as ImageIcon, CheckCircle, Clock, Tag as TagIcon, X
} from 'lucide-react';

const FIELD = "w-full h-10 rounded-lg border border-[#E5E7EB] bg-white px-3.5 text-[13px] text-[#111827] placeholder-[#9CA3AF] outline-none focus:border-[#111827] transition-colors";
const LABEL = "block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider mb-1.5";

const PRESET_IMAGES = [
  { name: 'Shopping', url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80&auto=format&fit=crop' },
  { name: 'Logistics', url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80&auto=format&fit=crop' },
  { name: 'Warehouse', url: 'https://images.unsplash.com/photo-1550565099-8b8c7db9b0ff?w=1200&q=80&auto=format&fit=crop' },
  { name: 'Services', url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop' },
  { name: 'Travel', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop' },
];

const CreateService: React.FC = () => {
  const navigate = useNavigate();
  const { addService } = useProviderState();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    title: '', category: 'Shopping & Sourcing', description: '',
    price: '', availability: 'Mon – Fri, 9 AM – 5 PM EST',
    imageUrl: PRESET_IMAGES[0].url, tagsInput: '',
    status: 'Active' as 'Active' | 'Draft' | 'Inactive',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm(p => ({ ...p, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const next = () => {
    if (step === 1 && (!form.title.trim() || !form.description.trim())) {
      alert('Please provide a title and description.');
      return;
    }
    if (step === 2 && !form.price.trim()) {
      alert('Please enter a price.');
      return;
    }
    setStep(p => Math.min(4, p + 1));
  };

  const publish = () => {
    const tags = form.tagsInput.split(',').map(t => t.trim()).filter(Boolean);
    addService({
      title: form.title, category: form.category, description: form.description,
      price: form.price.startsWith('$') ? form.price : `$${form.price}`,
      status: form.status, availability: form.availability,
      images: [form.imageUrl],
      tags: tags.length ? tags : [form.category.split(' ')[0]],
    });
    navigate('/provider/services');
  };

  const close = () => navigate('/provider/services');

  const STEPS = [
    { n: 1, label: 'Basic Info' }, { n: 2, label: 'Pricing' },
    { n: 3, label: 'Media' }, { n: 4, label: 'Review' },
  ];

  const statusColors: Record<string, string> = {
    Active: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    Draft: 'bg-gray-100 text-gray-500 border-gray-200',
    Inactive: 'bg-rose-50 text-rose-700 border-rose-100',
  };

  return (
    <>
      {/* Backdrop */}
      <div onClick={close} className="fixed inset-0 bg-[#111827]/25 backdrop-blur-[2px] z-[90] animate-in fade-in duration-150" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-2xl shadow-black/8 w-full max-w-[560px] max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#F3F4F6] shrink-0">
            <div>
              <p className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider">New Listing</p>
              <h3 className="text-[15px] font-bold text-[#111827] mt-0.5">Add Service</h3>
            </div>
            <button onClick={close} className="p-1.5 rounded-lg text-[#9CA3AF] hover:text-[#111827] hover:bg-[#F9FAFB] border border-transparent hover:border-[#E5E7EB] transition-all">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Step Indicator */}
          <div className="px-6 pt-4 pb-3 bg-[#FAFAFA] border-b border-[#F3F4F6] shrink-0">
            <div className="flex items-center gap-0">
              {STEPS.map((s, i) => (
                <div key={s.n} className="flex items-center flex-1">
                  <div className="flex items-center gap-2 shrink-0">
                    <div className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                      s.n < step ? 'bg-[#111827] text-white' :
                      s.n === step ? 'bg-[#111827] text-white ring-2 ring-[#111827]/15 ring-offset-1' :
                      'bg-[#E5E7EB] text-[#9CA3AF]'
                    }`}>
                      {s.n < step ? '✓' : s.n}
                    </div>
                    <span className={`text-[10px] font-semibold hidden sm:block ${
                      s.n === step ? 'text-[#111827]' : s.n < step ? 'text-[#6B7280]' : 'text-[#D1D5DB]'
                    }`}>{s.label}</span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`flex-1 h-px mx-2 ${s.n < step ? 'bg-[#111827]' : 'bg-[#E5E7EB]'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto no-scrollbar px-6 py-5 space-y-4">

            {/* Step 1 — Basic Info */}
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div>
                  <label className={LABEL}>Service Title</label>
                  <input name="title" type="text" value={form.title} onChange={onChange}
                    placeholder="e.g. Italian calfskin leather sourcing" className={FIELD} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={LABEL}>Category</label>
                    <select name="category" value={form.category} onChange={onChange}
                      className="w-full h-10 rounded-lg border border-[#E5E7EB] bg-white px-3 text-[13px] text-[#111827] outline-none focus:border-[#111827] transition-colors cursor-pointer">
                      <option>Shopping &amp; Sourcing</option>
                      <option>Logistics Networks</option>
                      <option>Travel Experiences</option>
                      <option>Professional Services</option>
                    </select>
                  </div>
                  <div>
                    <label className={LABEL}>Tags (comma separated)</label>
                    <div className="relative">
                      <TagIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#9CA3AF]" />
                      <input name="tagsInput" type="text" value={form.tagsInput} onChange={onChange}
                        placeholder="Leather, Italian..." className="w-full h-10 rounded-lg border border-[#E5E7EB] bg-white pl-9 pr-3 text-[13px] text-[#111827] placeholder-[#9CA3AF] outline-none focus:border-[#111827] transition-colors" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className={LABEL}>Description</label>
                  <textarea name="description" value={form.description} onChange={onChange} rows={4}
                    placeholder="Describe capabilities, delivery timeline, and quality standards..."
                    className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-3 text-[13px] text-[#111827] placeholder-[#9CA3AF] outline-none focus:border-[#111827] transition-colors resize-none" />
                </div>
              </div>
            )}

            {/* Step 2 — Pricing */}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={LABEL}>Base Rate (USD)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-[#111827] text-[13px]">$</span>
                      <input type="text" name="price"
                        value={form.price.replace('$', '')}
                        onChange={e => setForm(p => ({ ...p, price: e.target.value }))}
                        placeholder="250"
                        className="w-full h-10 rounded-lg border border-[#E5E7EB] bg-white pl-7 pr-3 text-[13px] text-[#111827] placeholder-[#9CA3AF] outline-none focus:border-[#111827] transition-colors" />
                    </div>
                    <p className="text-[10px] text-[#9CA3AF] mt-1">Per project baseline rate</p>
                  </div>
                  <div>
                    <label className={LABEL}>Operating Schedule</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#9CA3AF]" />
                      <input name="availability" type="text" value={form.availability} onChange={onChange}
                        className="w-full h-10 rounded-lg border border-[#E5E7EB] bg-white pl-9 pr-3 text-[13px] text-[#111827] outline-none focus:border-[#111827] transition-colors" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className={LABEL}>Initial Listing Status</label>
                  <select name="status" value={form.status} onChange={onChange}
                    className="w-full h-10 rounded-lg border border-[#E5E7EB] bg-white px-3 text-[13px] text-[#111827] outline-none focus:border-[#111827] transition-colors cursor-pointer">
                    <option value="Active">Active — Publish live in directory</option>
                    <option value="Draft">Draft — Keep hidden from search</option>
                    <option value="Inactive">Inactive — Disable listing</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3 — Media */}
            {step === 3 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div>
                  <label className={LABEL}>Cover Image Upload</label>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center justify-center w-full h-10 border border-[#E5E7EB] border-dashed rounded-lg bg-[#FAFAFA] text-[13px] font-medium text-[#6B7280] hover:bg-[#F3F4F6] transition-colors cursor-pointer">
                      <ImageIcon className="h-4 w-4 text-[#9CA3AF] mr-2" />
                      Click to upload cover image
                      <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    </label>
                  </div>
                </div>
                <div>
                  <label className={LABEL}>Quick Presets</label>
                  <div className="grid grid-cols-5 gap-2">
                    {PRESET_IMAGES.map((img, i) => (
                      <button key={i} type="button"
                        onClick={() => setForm(p => ({ ...p, imageUrl: img.url }))}
                        className={`relative aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all ${
                          form.imageUrl === img.url
                            ? 'border-[#111827] ring-2 ring-[#111827]/10'
                            : 'border-[#E5E7EB] hover:border-[#9CA3AF]'
                        }`}>
                        <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-x-0 bottom-0 bg-[#111827]/55 px-1 py-0.5">
                          <span className="text-[7px] font-semibold text-white truncate block">{img.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                {form.imageUrl && (
                  <div className="rounded-xl overflow-hidden border border-[#E5E7EB] h-32">
                    <img src={form.imageUrl} alt="preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            )}

            {/* Step 4 — Review */}
            {step === 4 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div className="rounded-xl border border-[#E5E7EB] overflow-hidden">
                  <div className="h-36 relative">
                    <img src={form.imageUrl} alt={form.title} className="w-full h-full object-cover" />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase text-[#111827] border border-[#E5E7EB] shadow-sm">
                      {form.category}
                    </div>
                  </div>
                  <div className="p-4 space-y-2.5 bg-white">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-[13px] font-bold text-[#111827]">{form.title || 'Untitled Service'}</p>
                      <p className="text-[13px] font-black text-[#111827] shrink-0">${form.price || '0'}</p>
                    </div>
                    <p className="text-[11px] text-[#6B7280] leading-relaxed line-clamp-2">{form.description || 'No description.'}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-[#F3F4F6]">
                      <span className="text-[10px] text-[#9CA3AF] flex items-center gap-1"><Clock className="h-3 w-3" />{form.availability}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border ${statusColors[form.status]}`}>{form.status}</span>
                    </div>
                  </div>
                </div>
                <div className="p-3.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-[#374151] shrink-0 mt-0.5" />
                  <p className="text-[11px] text-[#6B7280] leading-relaxed">
                    By publishing, you confirm you are capable to deliver this service and agree to BuySmartly's provider terms.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-[#F3F4F6] px-6 py-4 bg-[#FAFAFA] flex items-center justify-between shrink-0">
            <button
              onClick={() => setStep(p => Math.max(1, p - 1))}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12px] font-semibold border transition-all ${
                step === 1 ? 'opacity-0 pointer-events-none' : 'text-[#374151] bg-white border-[#E5E7EB] hover:bg-[#F9FAFB]'
              }`}
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back
            </button>

            {step < 4
              ? <button onClick={next} className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#111827] text-white font-semibold text-[12px] hover:bg-[#1F2937] transition-colors">
                  Continue <ArrowRight className="h-3.5 w-3.5" />
                </button>
              : <button onClick={publish} className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[#111827] text-white font-semibold text-[12px] hover:bg-[#1F2937] transition-colors">
                  <CheckCircle className="h-3.5 w-3.5" /> Publish Listing
                </button>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateService;
