import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  className?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ 
  value, 
  onChange, 
  options, 
  placeholder = "Select an option",
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative group ${isOpen ? 'z-[100]' : ''} ${className}`} ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full min-h-[44px] rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] hover:bg-white px-4 text-left text-[14px] font-medium text-[#111827] outline-none focus:outline-none focus-visible:outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 flex items-center justify-between shadow-sm"
      >
        <span className={value ? "text-[#111827]" : "text-[#9CA3AF]"}>{value || placeholder}</span>
        <ChevronDown className={`h-4.5 w-4.5 text-[#9CA3AF] transition-all duration-200 ${isOpen ? 'rotate-180 text-indigo-500' : 'group-hover:text-[#6B7280]'}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-[#E5E7EB] rounded-xl shadow-xl shadow-black/10 py-1.5 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden max-h-60 overflow-y-auto no-scrollbar">
          {options.map((opt: string) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2.5 text-left text-[13px] font-semibold text-[#374151] hover:bg-indigo-50/80 hover:text-indigo-700 flex items-center justify-between transition-colors"
            >
              {opt}
              {value === opt && <Check className="h-4 w-4 text-indigo-600 shrink-0 ml-2" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
