import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { useProviderState } from '../../context/ProviderState';
import {
  ArrowLeft, ArrowRight, CheckCircle, Clock, Tag as TagIcon, X,
  Image as ImageIcon, DollarSign, List, Info, LayoutTemplate, Briefcase, Zap, Edit2
} from 'lucide-react';
import { CustomSelect } from '../../components/common/CustomSelect';

const FIELD = "w-full min-h-[44px] rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] hover:bg-white px-4 text-[13px] font-medium text-[#111827] placeholder-[#9CA3AF] outline-none focus:outline-none focus-visible:outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 shadow-sm";
const FIELD_ERROR = "border-rose-300 focus:border-rose-500 focus:ring-rose-500/10";
const LABEL = "block text-[12px] font-bold text-[#374151] mb-2";
const HELP_TEXT = "text-[11px] text-[#6B7280] mt-1.5";

const PRESET_IMAGES = [
  { name: 'Shopping', url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80&auto=format&fit=crop' },
  { name: 'Logistics', url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80&auto=format&fit=crop' },
  { name: 'Warehouse', url: 'https://images.unsplash.com/photo-1550565099-8b8c7db9b0ff?w=1200&q=80&auto=format&fit=crop' },
  { name: 'Services', url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop' },
  { name: 'Travel', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop' },
];

const STEPS = [
  { n: 1, id: 'overview', title: 'Service Overview', desc: 'Title, category, and basic info', icon: LayoutTemplate },
  { n: 2, id: 'pricing', title: 'Pricing & Scope', desc: 'Rates, timeline, and features', icon: DollarSign },
  { n: 3, id: 'media', title: 'Media & Requirements', desc: 'Cover image and prerequisites', icon: Briefcase },
  { n: 4, id: 'review', title: 'Review & Publish', desc: 'Final check before saving', icon: Zap },
];

type ServiceFormValues = {
  title: string;
  category: string;
  description: string;
  pricingModel: string;
  price: string;
  deliveryTime: string;
  availability: string;
  features: { value: string }[];
  requirements: string;
  images: string[];
  tagsInput: string;
  status: 'Active' | 'Draft' | 'Inactive';
};

const EditService: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { services, updateService } = useProviderState();
  const [step, setStep] = useState(1);
  const [ready, setReady] = useState(false);

  const { register, handleSubmit, control, watch, setValue, trigger, reset, formState: { errors } } = useForm<ServiceFormValues>({
    defaultValues: {
      title: '', category: 'Shopping & Sourcing', description: '',
      pricingModel: 'Fixed Price', price: '', deliveryTime: '3-5 Business Days',
      availability: 'Mon – Fri, 9 AM – 5 PM EST', features: [{ value: '' }],
      requirements: '', images: [PRESET_IMAGES[0].url], tagsInput: '',
      status: 'Active',
    },
    mode: 'onChange'
  });

  useEffect(() => {
    const svc = services.find(s => s.id === id);
    if (svc) {
      reset({
        title: svc.title,
        category: svc.category,
        description: svc.description,
        pricingModel: svc.pricingModel || 'Fixed Price',
        price: svc.price.replace('$', ''),
        deliveryTime: svc.deliveryTime || '3-5 Business Days',
        availability: svc.availability,
        features: svc.features && svc.features.length > 0 ? svc.features.map(f => ({ value: f })) : [{ value: '' }],
        requirements: svc.requirements || 'Please provide details.',
        images: svc.images && svc.images.length > 0 ? svc.images : [PRESET_IMAGES[0].url],
        tagsInput: svc.tags.join(', '),
        status: svc.status as any,
      });
      setReady(true);
    } else {
      navigate('/provider/services');
    }
  }, [id, services, navigate, reset]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "features"
  });

  const formValues = watch();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length) {
      const readers = files.map(file => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });
      });
      Promise.all(readers).then(results => {
        const currentImages = watch('images') || [];
        setValue('images', [...currentImages, ...results], { shouldValidate: true });
      });
    }
  };

  const setAsCover = (index: number) => {
    const currentImages = [...watch('images')];
    if (index > 0 && index < currentImages.length) {
      const temp = currentImages[0];
      currentImages[0] = currentImages[index];
      currentImages[index] = temp;
      setValue('images', currentImages, { shouldValidate: true });
    }
  };

  const removeImage = (index: number) => {
    const currentImages = watch('images').filter((_, i) => i !== index);
    setValue('images', currentImages, { shouldValidate: true });
  };

  const addPreset = (url: string) => {
    const currentImages = watch('images') || [];
    if (!currentImages.includes(url)) {
      setValue('images', [...currentImages, url], { shouldValidate: true });
    }
  };

  const next = async () => {
    let fieldsToValidate: (keyof ServiceFormValues)[] = [];
    if (step === 1) fieldsToValidate = ['title', 'category', 'description'];
    if (step === 2) fieldsToValidate = ['pricingModel', 'price', 'deliveryTime'];
    if (step === 3) fieldsToValidate = ['images', 'requirements'];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep(p => Math.min(4, p + 1));
    }
  };

  const onSubmit = (data: ServiceFormValues) => {
    if (!id) return;
    const tags = data.tagsInput.split(',').map(t => t.trim()).filter(Boolean);
    const validFeatures = data.features.map(f => f.value).filter(f => f.trim() !== '');
    
    updateService(id, {
      title: data.title, 
      category: data.category, 
      description: data.description,
      price: data.price.startsWith('$') ? data.price : `$${data.price}`,
      pricingModel: data.pricingModel,
      deliveryTime: data.deliveryTime,
      features: validFeatures,
      requirements: data.requirements,
      status: data.status, 
      availability: data.availability,
      images: data.images,
      tags: tags.length ? tags : [data.category.split(' ')[0]],
    });
    navigate('/provider/services');
  };

  const close = () => navigate('/provider/services');

  const ErrorText = ({ msg }: { msg?: string }) => msg ? <p className="text-[11px] font-bold text-rose-500 mt-1.5 flex items-center gap-1"><Info className="h-3 w-3" />{msg}</p> : null;

  if (!ready) return null;

  return createPortal(
    <>
      <div onClick={close} className="fixed inset-0 bg-[#030712]/50 backdrop-blur-md z-[998] animate-in fade-in duration-200" />

      <div className="fixed inset-0 flex items-center justify-center z-[999] p-4 sm:p-6 lg:p-8 pointer-events-none">
        <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 w-full max-w-[960px] h-full max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300 border border-[#E5E7EB] pointer-events-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-[#F3F4F6] bg-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#111827] flex items-center justify-center shadow-inner">
                <Edit2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-[18px] font-bold text-[#111827] tracking-tight">Edit Service</h2>
                <p className="text-[13px] text-[#6B7280] mt-0.5">Modify your offering's details and settings.</p>
              </div>
            </div>
            <button onClick={close} className="p-2 rounded-xl text-[#9CA3AF] hover:text-[#111827] hover:bg-[#F3F4F6] transition-colors group">
              <X className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar Steps */}
            <div className="hidden md:flex flex-col w-[280px] bg-[#FAFAFA] border-r border-[#E5E7EB] p-6">
              <div className="space-y-6">
                {STEPS.map((s, i) => {
                  const isActive = step === s.n;
                  const isCompleted = step > s.n;
                  const Icon = s.icon;
                  return (
                    <div key={s.id} className="relative">
                      {i !== STEPS.length - 1 && (
                        <div className={`absolute left-[19px] top-10 w-[2px] h-[calc(100%+16px)] rounded-full transition-colors duration-300 ${isCompleted ? 'bg-[#111827]' : 'bg-[#E5E7EB]'}`} />
                      )}
                      <div className={`flex gap-4 relative z-10 transition-all duration-300 ${isActive ? 'opacity-100' : isCompleted ? 'opacity-70' : 'opacity-40 grayscale'}`}>
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 border-2 transition-all duration-300 ${
                          isActive ? 'bg-white border-[#111827] text-[#111827] shadow-md shadow-black/5 scale-110' : 
                          isCompleted ? 'bg-[#111827] border-[#111827] text-white' : 
                          'bg-white border-[#E5E7EB] text-[#9CA3AF]'
                        }`}>
                          {isCompleted ? <CheckCircle className="h-5 w-5" /> : <Icon className="h-4 w-4" />}
                        </div>
                        <div className="pt-1">
                          <p className={`text-[13px] font-bold ${isActive ? 'text-[#111827]' : isCompleted ? 'text-[#374151]' : 'text-[#6B7280]'}`}>{s.title}</p>
                          <p className="text-[11px] text-[#6B7280] mt-0.5 leading-snug">{s.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 p-4 bg-[#F3F4F6] rounded-xl border border-[#E5E7EB]">
                <div className="flex items-start gap-2.5">
                  <Info className="h-4 w-4 text-[#6B7280] shrink-0 mt-0.5" />
                  <p className="text-[11px] text-[#4B5563] leading-relaxed">
                    Keeping your service details up-to-date helps maintain buyer trust and improves your search ranking.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar bg-white p-6 sm:p-8 lg:p-10 scroll-smooth">
              <div className="max-w-[520px] mx-auto pb-12">
                
                {step === 1 && (
                  <div className="space-y-8 animate-in slide-in-from-right-4 fade-in duration-300">
                    <div>
                      <h3 className="text-[20px] font-bold text-[#111827] mb-1">Overview</h3>
                      <p className="text-[13px] text-[#6B7280]">Update the basic details that clients will see first.</p>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className={LABEL}>Service Title</label>
                        <input 
                          {...register('title', { required: 'Service title is required', minLength: { value: 5, message: 'Title must be at least 5 characters' } })}
                          placeholder="e.g. Italian calfskin leather sourcing" 
                          className={`${FIELD} ${errors.title ? FIELD_ERROR : ''}`} 
                          autoFocus 
                        />
                        <ErrorText msg={errors.title?.message} />
                        {!errors.title && <p className={HELP_TEXT}>Keep it short, descriptive, and keyword-rich.</p>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className={LABEL}>Category</label>
                          <Controller
                            name="category"
                            control={control}
                            rules={{ required: 'Category is required' }}
                            render={({ field }) => (
                              <CustomSelect 
                                value={field.value} 
                                onChange={field.onChange} 
                                options={['Shopping & Sourcing', 'Logistics Networks', 'Travel Experiences', 'Professional Services']}
                              />
                            )}
                          />
                          <ErrorText msg={errors.category?.message} />
                        </div>
                        <div>
                          <label className={LABEL}>Tags</label>
                          <div className="relative">
                            <TagIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
                            <input 
                              {...register('tagsInput')}
                              placeholder="Leather, Italian..." 
                              className={`${FIELD} pl-10`} 
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className={LABEL}>Detailed Description</label>
                        <textarea 
                          {...register('description', { required: 'Description is required', minLength: { value: 20, message: 'Please provide more detail (min 20 chars)' } })}
                          rows={5}
                          placeholder="Describe capabilities, delivery timeline, and quality standards..."
                          className={`w-full rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] hover:bg-white px-4 py-3 text-[13px] font-medium text-[#111827] placeholder-[#9CA3AF] outline-none focus:outline-none focus-visible:outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all resize-y min-h-[120px] shadow-sm ${errors.description ? FIELD_ERROR : ''}`} 
                        />
                        <ErrorText msg={errors.description?.message} />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8 animate-in slide-in-from-right-4 fade-in duration-300">
                    <div>
                      <h3 className="text-[20px] font-bold text-[#111827] mb-1">Pricing & Scope</h3>
                      <p className="text-[13px] text-[#6B7280]">Update expectations around cost and what is included.</p>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className={LABEL}>Pricing Model</label>
                          <Controller
                            name="pricingModel"
                            control={control}
                            rules={{ required: 'Pricing model is required' }}
                            render={({ field }) => (
                              <CustomSelect 
                                value={field.value} 
                                onChange={field.onChange} 
                                options={['Fixed Price', 'Starting at', 'Hourly Rate', 'Retainer']}
                              />
                            )}
                          />
                        </div>
                        <div>
                          <label className={LABEL}>Base Rate (USD)</label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-[#111827] text-[14px]">$</span>
                            <input 
                              type="number"
                              {...register('price', { required: 'Base rate is required', min: { value: 1, message: 'Rate must be > 0' } })}
                              placeholder="250" 
                              className={`${FIELD} pl-8 ${errors.price ? FIELD_ERROR : ''}`} 
                              autoFocus 
                            />
                          </div>
                          <ErrorText msg={errors.price?.message} />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className={LABEL}>Delivery Time</label>
                          <div className="relative">
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
                            <input 
                              {...register('deliveryTime', { required: 'Delivery time is required' })}
                              placeholder="e.g. 3-5 Business Days" 
                              className={`${FIELD} pl-10 ${errors.deliveryTime ? FIELD_ERROR : ''}`} 
                            />
                          </div>
                          <ErrorText msg={errors.deliveryTime?.message} />
                        </div>
                        <div>
                          <label className={LABEL}>Availability</label>
                          <input 
                            {...register('availability', { required: 'Availability is required' })}
                            placeholder="e.g. Mon-Fri, 9-5 EST" 
                            className={`${FIELD} ${errors.availability ? FIELD_ERROR : ''}`} 
                          />
                          <ErrorText msg={errors.availability?.message} />
                        </div>
                      </div>

                      <div className="pt-2">
                        <label className={LABEL}>Features Included</label>
                        <p className={`${HELP_TEXT} mb-3`}>List the specific deliverables or features of this service.</p>
                        <div className="space-y-3">
                          {fields.map((field, idx) => (
                            <div key={field.id} className="flex items-center gap-2">
                              <div className="relative flex-1">
                                <List className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
                                <input 
                                  {...register(`features.${idx}.value`)}
                                  placeholder={`Feature ${idx + 1}...`} 
                                  className={`${FIELD} pl-10`} 
                                />
                              </div>
                              <button 
                                type="button" 
                                onClick={() => remove(idx)}
                                className={`p-2 rounded-xl transition-colors ${fields.length > 1 ? 'text-[#9CA3AF] hover:text-rose-600 hover:bg-rose-50' : 'text-gray-300 cursor-not-allowed'}`}
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </div>
                          ))}
                        </div>
                        <button type="button" onClick={() => append({ value: '' })} className="mt-3 text-[13px] font-bold text-[#111827] hover:text-indigo-600 flex items-center gap-1 transition-colors">
                          + Add another feature
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8 animate-in slide-in-from-right-4 fade-in duration-300">
                    <div>
                      <h3 className="text-[20px] font-bold text-[#111827] mb-1">Media & Requirements</h3>
                      <p className="text-[13px] text-[#6B7280]">Update your imagery and prerequisites.</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <label className={LABEL}>Service Gallery</label>
                            <p className={HELP_TEXT}>Upload high-quality images. The first image will be your cover.</p>
                          </div>
                        </div>
                        
                        {/* Hidden input to register the array so rules apply */}
                        <input type="hidden" {...register('images', { validate: v => v && v.length > 0 || 'At least one image is required' })} />

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                          {formValues.images?.map((img, i) => (
                            <div key={i} className={`group relative aspect-[4/3] rounded-xl overflow-hidden border-2 ${i === 0 ? 'border-[#111827] ring-2 ring-[#111827]/10' : 'border-[#E5E7EB]'}`}>
                              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                              
                              {i === 0 && (
                                <div className="absolute top-2 left-2 bg-[#111827] text-white text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-wider shadow-sm z-10">
                                  COVER
                                </div>
                              )}

                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                {i !== 0 && (
                                  <button type="button" onClick={() => setAsCover(i)} className="bg-white text-[#111827] text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                                    Make Cover
                                  </button>
                                )}
                                <button type="button" onClick={() => removeImage(i)} className="bg-rose-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm hover:bg-rose-600 transition-colors">
                                  Remove
                                </button>
                              </div>
                            </div>
                          ))}
                          
                          <label className={`aspect-[4/3] rounded-xl border-2 border-dashed border-[#E5E7EB] bg-[#FAFAFA] hover:bg-[#F3F4F6] hover:border-[#111827] transition-all cursor-pointer flex flex-col items-center justify-center text-[#6B7280] ${errors.images ? 'border-rose-400' : ''}`}>
                            <div className="h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center mb-2">
                              <ImageIcon className="h-4 w-4 text-[#9CA3AF]" />
                            </div>
                            <p className="text-[11px] font-bold text-[#111827]">Add Photo</p>
                            <input type="file" accept="image/*" multiple className="hidden" onChange={handleImageUpload} />
                          </label>
                        </div>
                        <ErrorText msg={errors.images?.message as string} />

                        <div className="mt-5">
                          <p className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2.5">Or Add a Preset</p>
                          <div className="grid grid-cols-5 gap-3">
                            {PRESET_IMAGES.map((img, i) => {
                              const isSelected = formValues.images?.includes(img.url);
                              return (
                                <button 
                                  key={i} 
                                  type="button" 
                                  onClick={() => addPreset(img.url)}
                                  disabled={isSelected}
                                  className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                                    isSelected ? 'border-[#111827] ring-2 ring-[#111827]/10 opacity-50 cursor-not-allowed' : 'border-transparent hover:border-[#E5E7EB]'
                                  }`}
                                >
                                  <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-1.5">
                                    <span className="text-[9px] font-bold text-white truncate w-full text-center">{img.name}</span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className={LABEL}>Client Requirements</label>
                        <p className={`${HELP_TEXT} mb-3`}>What do you need from the client to start the project?</p>
                        <textarea 
                          {...register('requirements', { required: 'Please specify requirements for clients' })}
                          rows={4}
                          placeholder="e.g. Please provide your brand guidelines, target audience, and initial budget constraints..."
                          className={`w-full rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] hover:bg-white px-4 py-3 text-[13px] font-medium text-[#111827] placeholder-[#9CA3AF] outline-none focus:outline-none focus-visible:outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all resize-y min-h-[100px] shadow-sm ${errors.requirements ? FIELD_ERROR : ''}`} 
                        />
                        <ErrorText msg={errors.requirements?.message} />
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                    <div>
                      <h3 className="text-[20px] font-bold text-[#111827] mb-1">Review & Save</h3>
                      <p className="text-[13px] text-[#6B7280]">Review your changes before saving.</p>
                    </div>

                    <div className="rounded-2xl border border-[#E5E7EB] overflow-hidden bg-white shadow-sm">
                      <div className="aspect-[21/9] relative bg-[#F3F4F6]">
                        {formValues.images?.[0] && <img src={formValues.images[0]} alt="Preview" className="w-full h-full object-cover" />}
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider text-[#111827] shadow-sm">
                          {formValues.category}
                        </div>
                        <div className="absolute top-4 right-4 bg-[#111827] text-white px-3 py-1.5 rounded-lg text-[13px] font-black shadow-sm">
                          {formValues.price ? (formValues.price.startsWith('$') ? formValues.price : `$${formValues.price}`) : '$0'}
                          <span className="text-[10px] font-semibold text-white/70 ml-1 uppercase tracking-wide">{formValues.pricingModel === 'Hourly Rate' ? '/ hr' : ''}</span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h4 className="text-[18px] font-bold text-[#111827] mb-2">{formValues.title || 'Untitled Service'}</h4>
                        <p className="text-[14px] text-[#4B5563] leading-relaxed line-clamp-3 mb-6">{formValues.description || 'No description provided.'}</p>
                        
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#F3F4F6]">
                          <div className="flex items-start gap-2.5">
                            <Clock className="h-4 w-4 text-[#9CA3AF] mt-0.5 shrink-0" />
                            <div>
                              <p className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">Delivery Time</p>
                              <p className="text-[13px] font-semibold text-[#111827] mt-0.5">{formValues.deliveryTime || 'Not specified'}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <CheckCircle className="h-4 w-4 text-[#9CA3AF] mt-0.5 shrink-0" />
                            <div>
                              <p className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">Features</p>
                              <p className="text-[13px] font-semibold text-[#111827] mt-0.5">{formValues.features.filter(f => f.value.trim()).length} Included</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className={LABEL}>Visibility Status</label>
                      <Controller
                        name="status"
                        control={control}
                        render={({ field }) => (
                          <CustomSelect 
                            value={field.value} 
                            onChange={field.onChange} 
                            options={['Active', 'Draft']}
                          />
                        )}
                      />
                    </div>

                    <div className="p-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl flex items-start gap-3 mt-4">
                      <div className="h-8 w-8 rounded-full bg-white shadow-sm border border-[#E5E7EB] flex items-center justify-center shrink-0">
                        <CheckCircle className="h-4 w-4 text-[#10B981]" />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-[#111827]">Ready to save</p>
                        <p className="text-[12px] text-[#6B7280] mt-0.5 leading-relaxed">
                          Your changes will be live immediately across the BuySmartly platform.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="border-t border-[#E5E7EB] px-6 sm:px-8 py-5 bg-white flex items-center justify-between shrink-0">
            <button
              type="button"
              onClick={() => setStep(p => Math.max(1, p - 1))}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all ${
                step === 1 ? 'opacity-0 pointer-events-none' : 'text-[#374151] bg-white border border-[#E5E7EB] hover:bg-[#F9FAFB] hover:border-[#D1D5DB] shadow-sm'
              }`}
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>

            {step < 4 ? (
              <button 
                type="button" 
                onClick={next} 
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#111827] text-white font-bold text-[13px] hover:bg-[#1F2937] hover:shadow-lg hover:shadow-black/10 transition-all active:scale-[0.98]"
              >
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button 
                type="button" 
                onClick={handleSubmit(onSubmit)} 
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#111827] text-white font-bold text-[13px] hover:bg-[#1F2937] hover:shadow-lg hover:shadow-black/10 transition-all active:scale-[0.98] group"
              >
                <CheckCircle className="h-4 w-4 group-hover:scale-110 transition-transform" /> Save Changes
              </button>
            )}
          </div>

        </div>
      </div>
    </>,
    document.body
  );
};

export default EditService;
