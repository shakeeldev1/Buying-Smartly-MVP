import React, { useState, useRef, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useProviderState } from '../../context/ProviderState';
import { Building2, Mail, MapPin, Globe, FileText, Save, ShieldCheck, ShieldAlert, Check, Camera, ImagePlus, ChevronDown } from 'lucide-react';
import { CustomSelect } from '../../components/common/CustomSelect';

type ProfileFormValues = {
  businessName: string;
  logo: string;
  description: string;
  category: string;
  location: string;
  contact: string;
  website: string;
};



const Profile: React.FC = () => {
  const { profile, updateProfile } = useProviderState();
  const [saved, setSaved] = useState(false);

  const { register, handleSubmit, setValue, watch, control, formState: { errors } } = useForm<ProfileFormValues>({
    defaultValues: {
      businessName: profile.businessName,
      logo: profile.logo,
      description: profile.description,
      category: profile.category,
      location: profile.location,
      contact: profile.contact,
      website: profile.website,
    }
  });

  const logoValue = watch('logo');

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue('logo', reader.result as string, { shouldDirty: true });
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: ProfileFormValues) => {
    updateProfile(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const LABEL = "block text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2";
  const INPUT_WRAPPER = "relative group";
  const INPUT_CLASS = "w-full h-11 rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] hover:bg-white pl-10 pr-4 text-[13px] font-medium text-[#111827] outline-none focus:outline-none focus-visible:outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 placeholder-[#9CA3AF] shadow-sm";
  const ICON_CLASS = "absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#9CA3AF] group-focus-within:text-indigo-500 transition-colors";

  const checks = [
    { label: 'Email Verified',      done: true,  icon: Check },
    { label: 'Profile Complete',    done: true,  icon: Check },
    { label: 'Company Registered',  done: true,  icon: ShieldCheck },
    { label: 'Escrow Cleared',      done: false, icon: ShieldAlert },
  ];

  return (
    <div className="space-y-6 w-full animate-in fade-in duration-300 pb-10">

      {/* ── Premium Profile Summary Row ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Completion Score */}
        <div className="bg-[#111827] rounded-2xl border border-[#1F2937] p-6 md:p-8 flex items-center justify-between gap-4 relative overflow-hidden shadow-xl shadow-black/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[60px] pointer-events-none rounded-full transform translate-x-1/2 -translate-y-1/2" />
          
          <div className="space-y-1.5 relative z-10">
            <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Profile Strength</p>
            <h3 className="text-xl font-black text-white tracking-tight">Completion Score</h3>
            <p className="text-[12px] text-[#9CA3AF] font-medium mt-1 max-w-[160px]">Add a website to unlock verified provider status.</p>
          </div>
          <div className="relative shrink-0 z-10">
            <svg className="h-20 w-20 -rotate-90 filter drop-shadow-lg">
              <circle cx="40" cy="40" r="34" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
              <circle
                cx="40" cy="40" r="34" fill="transparent" stroke="#6366F1" strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 34}
                strokeDashoffset={2 * Math.PI * 34 * (1 - profile.completionPercentage / 100)}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[15px] font-black text-white rotate-90">
              {profile.completionPercentage}%
            </span>
          </div>
        </div>

        {/* Verification Checklist */}
        <div className="md:col-span-2 bg-white rounded-2xl border border-[#E5E7EB] p-6 md:p-8 shadow-sm">
          <p className="text-[11px] font-bold text-[#6B7280] uppercase tracking-widest mb-5">Verification Checklist</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {checks.map(({ label, done, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3.5 group">
                <div className={`p-2.5 rounded-xl border shrink-0 transition-all ${
                  done 
                    ? 'bg-emerald-50 text-emerald-600 border-emerald-200 shadow-sm' 
                    : 'bg-[#F9FAFB] text-[#D1D5DB] border-[#E5E7EB]'
                }`}>
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className={`text-[13px] font-bold transition-colors ${done ? 'text-[#111827]' : 'text-[#9CA3AF]'}`}>{label}</p>
                  <p className="text-[11px] font-medium text-[#6B7280] mt-0.5">
                    {done ? 'Verified and secured' : 'Action required'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Premium Form Details ── */}
      <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm">
        {/* Header */}
        <div className="px-6 md:px-8 py-6 border-b border-[#F3F4F6] flex flex-col sm:flex-row sm:items-center justify-between gap-5 bg-gradient-to-b from-white to-[#FAFAFA]">
          <div>
            <h3 className="text-[18px] font-black text-[#111827] tracking-tight">Provider Details</h3>
            <p className="text-[13px] font-medium text-[#6B7280] mt-1">Configure public listing credentials visible in client search catalogs.</p>
          </div>
          {/* Avatar preview */}
          <div className="relative shrink-0 group">
            <label className="cursor-pointer block relative">
              <div className="absolute inset-0 rounded-2xl bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 backdrop-blur-[2px]">
                <Camera className="h-5 w-5 text-white" />
              </div>
              <img
                src={logoValue || 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&auto=format&fit=crop'}
                alt="logo"
                className="h-16 w-16 rounded-2xl object-cover border-2 border-white shadow-md bg-white"
              />
              <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
            </label>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7">

            {/* Business Name */}
            <div>
              <label className={LABEL}>Business Name</label>
              <div className={INPUT_WRAPPER}>
                <Building2 className={ICON_CLASS} />
                <input 
                  type="text" 
                  {...register('businessName', { required: 'Business name is required' })} 
                  className={INPUT_CLASS} 
                  placeholder="Enter your business name"
                />
              </div>
              {errors.businessName && <p className="text-rose-500 text-[11px] font-semibold mt-1.5">{errors.businessName.message}</p>}
            </div>

            {/* Category */}
            <div>
              <label className={LABEL}>Primary Category</label>
              <Controller
                name="category"
                control={control}
                rules={{ required: 'Category is required' }}
                render={({ field }) => (
                  <CustomSelect
                    value={field.value}
                    onChange={field.onChange}
                    options={[
                      'Shopping & Sourcing',
                      'Logistics Networks',
                      'Travel Experiences',
                      'Professional Services'
                    ]}
                  />
                )}
              />
            </div>

            {/* Location */}
            <div>
              <label className={LABEL}>Headquarters Location</label>
              <div className={INPUT_WRAPPER}>
                <MapPin className={ICON_CLASS} />
                <input 
                  type="text" 
                  {...register('location', { required: 'Location is required' })} 
                  className={INPUT_CLASS} 
                  placeholder="City, Country"
                />
              </div>
              {errors.location && <p className="text-rose-500 text-[11px] font-semibold mt-1.5">{errors.location.message}</p>}
            </div>

            {/* Website */}
            <div>
              <label className={LABEL}>Website URL</label>
              <div className={INPUT_WRAPPER}>
                <Globe className={ICON_CLASS} />
                <input 
                  type="url" 
                  {...register('website')} 
                  className={INPUT_CLASS} 
                  placeholder="https://example.com"
                />
              </div>
            </div>

            {/* Contact Email */}
            <div>
              <label className={LABEL}>Contact Email</label>
              <div className={INPUT_WRAPPER}>
                <Mail className={ICON_CLASS} />
                <input 
                  type="email" 
                  {...register('contact', { 
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                  })} 
                  className={INPUT_CLASS} 
                  placeholder="contact@business.com"
                />
              </div>
              {errors.contact && <p className="text-rose-500 text-[11px] font-semibold mt-1.5">{errors.contact.message}</p>}
            </div>

            {/* Logo Upload (Alternative Button) */}
            <div>
              <label className={LABEL}>Brand Logo</label>
              <label className="flex items-center justify-center w-full h-11 border-2 border-[#E5E7EB] border-dashed rounded-xl bg-[#FAFAFA] text-[13px] font-bold text-[#6B7280] hover:bg-indigo-50/50 hover:border-indigo-200 hover:text-indigo-600 transition-all cursor-pointer group">
                <ImagePlus className="h-4.5 w-4.5 text-[#9CA3AF] group-hover:text-indigo-500 mr-2.5 transition-colors" />
                Upload new image
                <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
              </label>
            </div>
          </div>

          {/* Description */}
          <div className="pt-2">
            <label className={LABEL}>Business Description</label>
            <div className={INPUT_WRAPPER}>
              <FileText className="absolute left-3.5 top-4 h-4.5 w-4.5 text-[#9CA3AF] group-focus-within:text-indigo-500 transition-colors" />
              <textarea 
                {...register('description', { required: 'Description is required' })} 
                rows={5}
                className="w-full rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] hover:bg-white pl-10 pr-4 py-3.5 text-[13px] font-medium text-[#111827] outline-none focus:outline-none focus-visible:outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 resize-none placeholder-[#9CA3AF] leading-relaxed shadow-sm" 
                placeholder="Describe your services and capabilities..."
              />
            </div>
            {errors.description && <p className="text-rose-500 text-[11px] font-semibold mt-1.5">{errors.description.message}</p>}
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#F3F4F6]">
            <p className="text-[12px] font-medium text-[#9CA3AF]">
              Changes are auto-synced with your public directory listing.
            </p>
            <button type="submit"
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-[13px] transition-all shadow-md shrink-0 ${
                saved 
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-500/20' 
                  : 'bg-[#111827] hover:bg-[#1F2937] text-white hover:shadow-black/20 hover:-translate-y-0.5'
              }`}>
              {saved ? (
                <><Check className="h-4.5 w-4.5" /> Saved changes!</>
              ) : (
                <><Save className="h-4.5 w-4.5" /> Save Changes</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
