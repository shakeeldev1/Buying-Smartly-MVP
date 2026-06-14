import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProviderState } from '../../context/ProviderState';
import { Save, Clock, Tag as TagIcon, Image as ImageIcon, X } from 'lucide-react';

const FIELD = "w-full h-10 rounded-lg border border-[#E5E7EB] bg-white px-3.5 text-[13px] text-[#111827] placeholder-[#9CA3AF] outline-none focus:border-[#111827] transition-colors";
const LABEL = "block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider mb-1.5";

const EditService: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { services, updateService } = useProviderState();

  const [form, setForm] = useState({
    title: '', category: '', description: '', price: '',
    availability: '', imageUrl: '', tagsInput: '',
    status: 'Active' as 'Active' | 'Draft' | 'Inactive',
  });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const svc = services.find(s => s.id === id);
    if (svc) {
      setForm({
        title: svc.title, category: svc.category, description: svc.description,
        price: svc.price.replace('$', ''), availability: svc.availability,
        imageUrl: svc.images[0] || '', tagsInput: svc.tags.join(', '),
        status: svc.status,
      });
      setReady(true);
    } else {
      navigate('/provider/services');
    }
  }, [id, services, navigate]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tags = form.tagsInput.split(',').map(t => t.trim()).filter(Boolean);
    updateService(id!, {
      title: form.title, category: form.category, description: form.description,
      price: form.price.startsWith('$') ? form.price : `$${form.price}`,
      status: form.status, availability: form.availability,
      images: [form.imageUrl],
      tags: tags.length ? tags : [form.category.split(' ')[0]],
    });
    navigate('/provider/services');
  };

  const close = () => navigate('/provider/services');

  if (!ready) return null;

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
              <p className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Edit Listing</p>
              <h3 className="text-[15px] font-bold text-[#111827] mt-0.5">Modify Service</h3>
            </div>
            <button type="button" onClick={close}
              className="p-1.5 rounded-lg text-[#9CA3AF] hover:text-[#111827] hover:bg-[#F9FAFB] border border-transparent hover:border-[#E5E7EB] transition-all">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto no-scrollbar flex flex-col">
            <div className="flex-1 px-6 py-5 space-y-4">

              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className={LABEL}>Service Title</label>
                  <input name="title" type="text" value={form.title} onChange={onChange} required className={FIELD} />
                </div>

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
                  <label className={LABEL}>Status</label>
                  <select name="status" value={form.status} onChange={onChange}
                    className="w-full h-10 rounded-lg border border-[#E5E7EB] bg-white px-3 text-[13px] text-[#111827] outline-none focus:border-[#111827] transition-colors cursor-pointer">
                    <option value="Active">Active</option>
                    <option value="Draft">Draft</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                <div>
                  <label className={LABEL}>Base Price (USD)</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-[#111827] text-[13px]">$</span>
                    <input name="price" type="text" value={form.price} onChange={onChange} required
                      className="w-full h-10 rounded-lg border border-[#E5E7EB] bg-white pl-7 pr-3 text-[13px] text-[#111827] outline-none focus:border-[#111827] transition-colors" />
                  </div>
                </div>

                <div>
                  <label className={LABEL}>Schedule</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#9CA3AF]" />
                    <input name="availability" type="text" value={form.availability} onChange={onChange} required
                      className="w-full h-10 rounded-lg border border-[#E5E7EB] bg-white pl-9 pr-3 text-[13px] text-[#111827] outline-none focus:border-[#111827] transition-colors" />
                  </div>
                </div>

                <div className="col-span-2">
                  <label className={LABEL}>Tags (comma separated)</label>
                  <div className="relative">
                    <TagIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#9CA3AF]" />
                    <input name="tagsInput" type="text" value={form.tagsInput} onChange={onChange}
                      className="w-full h-10 rounded-lg border border-[#E5E7EB] bg-white pl-9 pr-3 text-[13px] text-[#111827] outline-none focus:border-[#111827] transition-colors" />
                  </div>
                </div>

                <div className="col-span-2">
                  <label className={LABEL}>Description</label>
                  <textarea name="description" value={form.description} onChange={onChange} required rows={3}
                    className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-3 text-[13px] text-[#111827] outline-none focus:border-[#111827] transition-colors resize-none" />
                </div>

                <div className="col-span-2">
                  <label className={LABEL}>Cover Image Upload</label>
                  <label className="flex items-center justify-center w-full h-10 border border-[#E5E7EB] border-dashed rounded-lg bg-[#FAFAFA] text-[13px] font-medium text-[#6B7280] hover:bg-[#F3F4F6] transition-colors cursor-pointer">
                    <ImageIcon className="h-4 w-4 text-[#9CA3AF] mr-2" />
                    Click to upload new cover image
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                  </label>
                </div>
              </div>

              {form.imageUrl && (
                <div className="rounded-xl overflow-hidden border border-[#E5E7EB] h-28">
                  <img src={form.imageUrl} alt="cover" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-[#F3F4F6] px-6 py-4 bg-[#FAFAFA] flex items-center justify-end gap-2.5 shrink-0">
              <button type="button" onClick={close}
                className="px-4 py-2 rounded-lg border border-[#E5E7EB] text-[#374151] text-[12px] font-semibold hover:bg-[#F9FAFB] transition-colors">
                Cancel
              </button>
              <button type="submit"
                className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[#111827] text-white font-semibold text-[12px] hover:bg-[#1F2937] transition-colors shadow-sm">
                <Save className="h-3.5 w-3.5" /> Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditService;
