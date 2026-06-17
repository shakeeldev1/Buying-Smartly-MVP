import React, { useState } from 'react';
import { useProviderState } from '../../context/ProviderState';
import {
  User, Bell, Lock, Sliders, Save, Key, Eye, EyeOff, Copy, Check
} from 'lucide-react';

type Tab = 'account' | 'notifications' | 'security' | 'preferences';

const TABS: { key: Tab; label: string; icon: React.FC<{ className?: string }> }[] = [
  { key: 'account',       label: 'Account Profile',  icon: User    },
  { key: 'notifications', label: 'Notifications',    icon: Bell    },
  { key: 'security',      label: 'Security & Auth',  icon: Lock    },
  { key: 'preferences',  label: 'Preferences',      icon: Sliders },
];

const FIELD = "w-full h-10 rounded-lg border border-[#E5E7EB] bg-white px-3.5 text-[13px] text-[#111827] placeholder-[#9CA3AF] outline-none focus:border-[#111827] transition-colors";
const LABEL = "block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider mb-1.5";

const SaveBtn: React.FC<{ label?: string }> = ({ label = 'Save Changes' }) => (
  <button type="submit"
    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#111827] hover:bg-[#1F2937] text-white font-semibold text-[12px] transition-colors shadow-sm">
    <Save className="h-3.5 w-3.5" /> {label}
  </button>
);

const SectionHeader: React.FC<{ title: string; sub: string }> = ({ title, sub }) => (
  <div className="border-b border-[#F3F4F6] pb-4 mb-5">
    <h3 className="text-[14px] font-bold text-[#111827]">{title}</h3>
    <p className="text-[11px] text-[#9CA3AF] mt-0.5">{sub}</p>
  </div>
);

const Settings: React.FC = () => {
  const { profile, updateProfile, addToast } = useProviderState();
  const [activeTab, setActiveTab] = useState<Tab>('account');

  // Account
  const [account, setAccount] = useState({
    businessName: profile.businessName,
    contact: profile.contact,
    website: profile.website,
    location: profile.location,
  });

  // Notifications
  const [notifs, setNotifs] = useState({
    emailNewRequests: true,
    emailWeeklyDigest: false,
    toastNotifications: true,
  });

  // Security
  const [passwords, setPasswords] = useState({ current: '', newPass: '', confirm: '' });
  const [showPw, setShowPw] = useState(false);

  // Preferences
  const [prefs, setPrefs] = useState({ defaultView: 'dashboard', currency: 'USD' });

  // API Key
  const [apiKey, setApiKey] = useState('bs_live_49f82d0193cf82bb3d940a92');
  const [copied, setCopied] = useState(false);

  const onAccountSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(account);
  };

  const onNotifSave = (e: React.FormEvent) => {
    e.preventDefault();
    addToast('Notification preferences saved successfully');
  };

  const onSecuritySave = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.newPass !== passwords.confirm) {
      addToast('Passwords do not match.', 'error');
      return;
    }
    addToast('Security credentials updated successfully');
    setPasswords({ current: '', newPass: '', confirm: '' });
  };

  const onPrefsSave = (e: React.FormEvent) => {
    e.preventDefault();
    addToast('Portal preferences saved successfully');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    addToast('API key copied to clipboard', 'info');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRotate = () => {
    const next = `bs_live_${Math.random().toString(36).substring(2, 26)}`;
    setApiKey(next);
    addToast('New API key generated', 'success');
  };

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden flex flex-col md:flex-row h-[calc(100vh-144px)] animate-in fade-in duration-300">

      {/* ── Left Nav ── */}
      <div className="md:w-56 border-b md:border-b-0 md:border-r border-[#F3F4F6] bg-[#FAFAFA] p-3 shrink-0 flex flex-row md:flex-col gap-1">
        <p className="hidden md:block text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider px-3 mb-2">Settings</p>
        {TABS.map(t => {
          const Icon = t.icon;
          const isActive = activeTab === t.key;
          return (
            <button key={t.key} onClick={() => setActiveTab(t.key)}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[12px] font-semibold transition-all border flex-1 md:flex-none ${
                isActive
                  ? 'bg-white text-[#111827] border-[#E5E7EB] shadow-sm'
                  : 'text-[#6B7280] hover:text-[#111827] hover:bg-white/60 border-transparent'
              }`}>
              <Icon className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden md:block">{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── Right Panel ── */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-6 md:p-8">

        {/* ─ Account ─ */}
        {activeTab === 'account' && (
          <form onSubmit={onAccountSave} className="max-w-lg space-y-5 animate-in fade-in duration-200">
            <SectionHeader title="Account Profile" sub="Configure key email addresses and directory-facing details." />
            <div className="space-y-4">
              <div>
                <label className={LABEL}>Business Name</label>
                <input type="text" value={account.businessName} required
                  onChange={e => setAccount(p => ({ ...p, businessName: e.target.value }))} className={FIELD} />
              </div>
              <div>
                <label className={LABEL}>Contact Email</label>
                <input type="email" value={account.contact} required
                  onChange={e => setAccount(p => ({ ...p, contact: e.target.value }))} className={FIELD} />
              </div>
              <div>
                <label className={LABEL}>Headquarters Location</label>
                <input type="text" value={account.location} required
                  onChange={e => setAccount(p => ({ ...p, location: e.target.value }))} className={FIELD} />
              </div>
              <div>
                <label className={LABEL}>Corporate Website</label>
                <input type="url" value={account.website} required
                  onChange={e => setAccount(p => ({ ...p, website: e.target.value }))} className={FIELD} />
              </div>
            </div>
            <div className="pt-4 border-t border-[#F3F4F6]">
              <SaveBtn label="Save Account Profile" />
            </div>
          </form>
        )}

        {/* ─ Notifications ─ */}
        {activeTab === 'notifications' && (
          <form onSubmit={onNotifSave} className="max-w-lg space-y-5 animate-in fade-in duration-200">
            <SectionHeader title="Notification Preferences" sub="Manage dispatch triggers and automated notification channels." />
            <div className="space-y-3">
              {[
                { key: 'emailNewRequests', label: 'Email alerts on new requests', sub: 'Receive immediate notifications when buyers submit new inquiries.' },
                { key: 'emailWeeklyDigest', label: 'Weekly pipeline summary', sub: 'Receive a weekly digest of metrics, conversions and clicks.' },
                { key: 'toastNotifications', label: 'In-app toast alerts', sub: 'Display live success confirmations and status updates in the dashboard.' },
              ].map(({ key, label, sub }) => (
                <label key={key}
                  className="flex items-start gap-3.5 p-4 rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] cursor-pointer hover:border-[#D1D5DB] hover:bg-white transition-all">
                  <input type="checkbox"
                    checked={notifs[key as keyof typeof notifs]}
                    onChange={e => setNotifs(p => ({ ...p, [key]: e.target.checked }))}
                    className="accent-[#111827] mt-0.5 h-3.5 w-3.5 shrink-0"
                  />
                  <div>
                    <p className="text-[13px] font-semibold text-[#111827]">{label}</p>
                    <p className="text-[11px] text-[#9CA3AF] mt-0.5 leading-relaxed">{sub}</p>
                  </div>
                </label>
              ))}
            </div>
            <div className="pt-4 border-t border-[#F3F4F6]">
              <SaveBtn label="Save Preferences" />
            </div>
          </form>
        )}

        {/* ─ Security ─ */}
        {activeTab === 'security' && (
          <div className="max-w-lg space-y-6 animate-in fade-in duration-200">
            <SectionHeader title="Security Credentials" sub="Update your password and manage API access tokens." />

            {/* Password Form */}
            <form onSubmit={onSecuritySave} className="space-y-4">
              <div>
                <label className={LABEL}>Current Password</label>
                <input type="password" value={passwords.current} required
                  onChange={e => setPasswords(p => ({ ...p, current: e.target.value }))} className={FIELD} />
              </div>
              <div>
                <label className={LABEL}>New Password</label>
                <div className="relative">
                  <input type={showPw ? 'text' : 'password'} value={passwords.newPass} required
                    onChange={e => setPasswords(p => ({ ...p, newPass: e.target.value }))}
                    className="w-full h-10 rounded-lg border border-[#E5E7EB] bg-white px-3.5 pr-10 text-[13px] text-[#111827] outline-none focus:border-[#111827] transition-colors" />
                  <button type="button" onClick={() => setShowPw(!showPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#374151] transition-colors">
                    {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div>
                <label className={LABEL}>Confirm New Password</label>
                <input type="password" value={passwords.confirm} required
                  onChange={e => setPasswords(p => ({ ...p, confirm: e.target.value }))} className={FIELD} />
              </div>
              <div className="pt-2">
                <SaveBtn label="Update Credentials" />
              </div>
            </form>

            {/* API Key Block */}
            <div className="border-t border-[#F3F4F6] pt-5 space-y-3">
              <div className="flex items-center gap-2">
                <Key className="h-4 w-4 text-[#374151] shrink-0" />
                <div>
                  <p className="text-[13px] font-bold text-[#111827]">API Access Token</p>
                  <p className="text-[11px] text-[#9CA3AF]">Use in REST headers for inventory integrations.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-3">
                <span className="font-mono text-[12px] text-[#374151] truncate flex-1 select-all">{apiKey}</span>
                <button onClick={handleCopy}
                  className="p-1.5 rounded-lg border border-[#E5E7EB] bg-white text-[#9CA3AF] hover:text-[#374151] hover:border-[#D1D5DB] transition-all shrink-0">
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </div>
              <button onClick={handleRotate}
                className="text-[11px] font-semibold text-rose-600 hover:text-rose-700 transition-colors">
                Rotate token credentials →
              </button>
            </div>
          </div>
        )}

        {/* ─ Preferences ─ */}
        {activeTab === 'preferences' && (
          <form onSubmit={onPrefsSave} className="max-w-lg space-y-5 animate-in fade-in duration-200">
            <SectionHeader title="Portal Preferences" sub="Customise display, language, and workspace defaults." />
            <div className="space-y-4">
              <div>
                <label className={LABEL}>Default Starting Screen</label>
                <select value={prefs.defaultView}
                  onChange={e => setPrefs(p => ({ ...p, defaultView: e.target.value }))}
                  className="w-full h-10 rounded-lg border border-[#E5E7EB] bg-white px-3 text-[13px] text-[#111827] outline-none focus:border-[#111827] transition-colors cursor-pointer">
                  <option value="dashboard">Dashboard Overview</option>
                  <option value="services">Services Catalog</option>
                  <option value="requests">Request Pipeline</option>
                  <option value="messages">Message Workspace</option>
                </select>
              </div>
              <div>
                <label className={LABEL}>Theme Mode</label>
                <select className="w-full h-10 rounded-lg border border-[#E5E7EB] bg-white px-3 text-[13px] text-[#111827] outline-none focus:border-[#111827] transition-colors cursor-pointer">
                  <option>Premium White (Light Mode)</option>
                  <option disabled>Luxury Slate (Dark Mode — Premium)</option>
                </select>
              </div>
              <div>
                <label className={LABEL}>Billing Currency</label>
                <select value={prefs.currency}
                  onChange={e => setPrefs(p => ({ ...p, currency: e.target.value }))}
                  className="w-full h-10 rounded-lg border border-[#E5E7EB] bg-white px-3 text-[13px] text-[#111827] outline-none focus:border-[#111827] transition-colors cursor-pointer">
                  <option value="USD">USD ($) — US Dollars</option>
                  <option value="EUR">EUR (€) — Euros</option>
                  <option value="GBP">GBP (£) — British Pounds</option>
                  <option value="AED">AED (د.إ) — UAE Dirham</option>
                </select>
              </div>
            </div>
            <div className="pt-4 border-t border-[#F3F4F6]">
              <SaveBtn label="Save Preferences" />
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

export default Settings;
