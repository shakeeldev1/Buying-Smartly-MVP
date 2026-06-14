import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProviderState } from '../../context/ProviderState';
import {
  Plus, ArrowRight, TrendingUp, TrendingDown, Activity,
  ShieldCheck, ArrowUpRight, BarChart3, Users, Lightbulb
} from 'lucide-react';
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { profile, services, requests, updateRequestStatus } = useProviderState();
  const [activeTab, setActiveTab] = useState<'views' | 'requests'>('views');

  // Dynamic greeting
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  // Stats
  const totalServices = services.length;
  const activeListings = services.filter(s => s.status === 'Active').length;
  const activeRequests = requests.filter(r => r.status !== 'Completed' && r.status !== 'Rejected').length;
  const completedCount = requests.filter(r => r.status === 'Completed').length;

  // Chart data
  const chartData = {
    views: [
      { label: 'Jan', val: 240 }, { label: 'Feb', val: 380 }, { label: 'Mar', val: 510 },
      { label: 'Apr', val: 460 }, { label: 'May', val: 720 }, { label: 'Jun', val: 840 },
    ],
    requests: [
      { label: 'Jan', val: 5 }, { label: 'Feb', val: 12 }, { label: 'Mar', val: 18 },
      { label: 'Apr', val: 14 }, { label: 'May', val: 28 }, { label: 'Jun', val: 32 },
    ]
  };

  const current = chartData[activeTab];

  const SparklineChart = ({ pts, color }: { pts: number[], color: string }) => {
    const data = pts.map((v, i) => ({ val: v, index: i }));
    return (
      <div className="h-10 w-24">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`grad-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="val" stroke={color} strokeWidth={2} fillOpacity={1} fill={`url(#grad-${color.replace('#','')})`} isAnimationActive={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const recentRequests = [...requests].slice(0, 4);

  const statusBadge = (s: string) => {
    const map: Record<string, string> = {
      'New': 'bg-blue-50 text-blue-700 border-blue-200',
      'In Review': 'bg-amber-50 text-amber-700 border-amber-200',
      'Accepted': 'bg-indigo-50 text-indigo-700 border-indigo-200',
      'Completed': 'bg-emerald-50 text-emerald-700 border-emerald-200',
      'Rejected': 'bg-rose-50 text-rose-700 border-rose-200',
    };
    return `${map[s] || 'bg-gray-50 text-gray-600 border-gray-200'} border`;
  };

  const metrics = [
    {
      label: 'Total Services', value: totalServices, trend: '+1 this month',
      up: true, sparkPts: [2, 2, 3, 3, 4, totalServices], color: '#6366F1'
    },
    {
      label: 'Active Listings', value: activeListings, trend: `${activeListings} live now`,
      up: true, sparkPts: [1, 2, 2, 3, 3, activeListings], color: '#10B981'
    },
    {
      label: 'Open Requests', value: activeRequests, trend: 'In pipeline',
      up: true, sparkPts: [4, 6, 3, 8, 5, activeRequests], color: '#F59E0B'
    },
    {
      label: 'Completed', value: completedCount, trend: '+0.2% conversion',
      up: false, sparkPts: [1, 1, 2, 2, 2, completedCount], color: '#8B5CF6'
    },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#111827] text-white text-[11px] font-bold px-3 py-2 rounded-lg shadow-xl border border-gray-700">
          <p className="text-gray-400 font-medium mb-1">{label}</p>
          <p className="text-white text-[13px]">{payload[0].value} {activeTab}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-10">

      {/* ── Premium Hero Banner ── */}
      <div className="relative overflow-hidden bg-[#111827] rounded-2xl border border-[#1F2937] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-2xl shadow-black/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 blur-[100px] pointer-events-none rounded-full transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 blur-[80px] pointer-events-none rounded-full transform -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 flex items-center gap-6">
          <div className="h-20 w-20 rounded-2xl bg-white/10 border border-white/20 p-1.5 shrink-0 backdrop-blur-md shadow-inner">
            <img src={profile.logo} alt="logo" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div>
            <p className="text-[12px] font-bold text-indigo-400 uppercase tracking-widest mb-1.5">{greeting}</p>
            <h1 className="text-3xl font-black text-white tracking-tight leading-none mb-3">
              {profile.businessName}
            </h1>
            <p className="text-[14px] text-[#9CA3AF] max-w-md leading-relaxed">
              Here is what's happening with your provider account today. View your pipeline, analytics, and manage listings.
            </p>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-8 shrink-0 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl">
          <div className="space-y-2 w-36">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest">Profile Strength</p>
              <span className="text-[12px] font-black text-white">{profile.completionPercentage}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div style={{ width: `${profile.completionPercentage}%` }} className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
            </div>
          </div>

          <div className="w-px h-12 bg-white/10" />

          <div className="flex flex-col items-center gap-1.5">
            <div className="h-10 w-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Verified</span>
          </div>
        </div>
      </div>

      {/* ── Metrics Grid ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity blur-2xl" style={{ backgroundColor: m.color }} />
            
            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider truncate">{m.label}</p>
                <div className={`p-2 rounded-xl transition-colors ${m.up ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100' : 'bg-rose-50 text-rose-600 group-hover:bg-rose-100'}`}>
                  {m.up ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                </div>
              </div>
              
              <div>
                <p className="text-3xl font-black text-[#111827] tracking-tight leading-none">{m.value}</p>
                <p className={`text-[12px] font-semibold mt-2 ${m.up ? 'text-emerald-600' : 'text-[#6B7280]'}`}>{m.trend}</p>
              </div>
              
              <div className="pt-2">
                <SparklineChart pts={m.sparkPts} color={m.color} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Chart + Quick Actions ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Chart */}
        <div className="lg:col-span-2 bg-white border border-[#E5E7EB] rounded-2xl p-6 lg:p-8 flex flex-col">
          <div className="flex items-center justify-between border-b border-[#F3F4F6] pb-5 mb-6 shrink-0">
            <div>
              <h3 className="text-[15px] font-bold text-[#111827] flex items-center gap-2">
                <BarChart3 className="h-4.5 w-4.5 text-indigo-500" /> Performance Overview
              </h3>
              <p className="text-[12px] text-[#6B7280] mt-1">Visitor views and request trends over 6 months.</p>
            </div>
            <div className="flex bg-[#F3F4F6] p-1 rounded-xl border border-[#E5E7EB]">
              {(['views', 'requests'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-[12px] font-bold capitalize transition-all ${
                    activeTab === tab
                      ? 'bg-white text-[#111827] shadow-sm border border-[#E5E7EB]'
                      : 'text-[#9CA3AF] hover:text-[#6B7280]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full -ml-4 min-h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={current} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9CA3AF', fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9CA3AF', fontWeight: 600 }} dx={-10} />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#6366F1', strokeWidth: 1, strokeDasharray: '4 4' }} />
                <Area type="monotone" dataKey="val" stroke="#6366F1" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" activeDot={{ r: 6, strokeWidth: 0, fill: '#6366F1' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 flex flex-col gap-5">
          <div>
            <h3 className="text-[15px] font-bold text-[#111827]">Quick Actions</h3>
            <p className="text-[12px] text-[#6B7280] mt-1">Shortcuts to manage your workspace.</p>
          </div>

          <div className="space-y-3 flex-1">
            {[
              { label: 'Add New Service', sub: 'List a new capability', to: '/provider/services/create', icon: Plus },
              { label: 'View Requests', sub: 'Respond to buyer briefs', to: '/provider/requests', icon: ArrowRight },
              { label: 'Update Profile', sub: 'Optimise listing visibility', to: '/provider/profile', icon: ArrowRight },
              { label: 'Analytics', sub: 'Review traffic performance', to: '/provider/analytics', icon: ArrowUpRight },
            ].map(({ label, sub, to, icon: Icon }) => (
              <button
                key={to}
                onClick={() => navigate(to)}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5E7EB] hover:border-indigo-200 hover:bg-indigo-50/50 text-left transition-all duration-200 group shadow-sm hover:shadow-md"
              >
                <div>
                  <p className="text-[13px] font-bold text-[#111827] group-hover:text-indigo-900 transition-colors">{label}</p>
                  <p className="text-[11px] font-medium text-[#6B7280] mt-0.5">{sub}</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-[#F3F4F6] group-hover:bg-indigo-100 flex items-center justify-center transition-colors shrink-0">
                  <Icon className="h-4 w-4 text-[#6B7280] group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                </div>
              </button>
            ))}
          </div>

          <div className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl p-4 flex gap-3">
            <div className="mt-0.5">
              <Lightbulb className="h-4.5 w-4.5 text-amber-500" />
            </div>
            <p className="text-[12px] font-medium text-[#6B7280] leading-relaxed">
              Complete your profile with a website link to get featured in standard category search results.
            </p>
          </div>
        </div>
      </div>

      {/* ── Recent Inquiries Table ── */}
      <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm">
        <div className="px-6 md:px-8 py-5 border-b border-[#F3F4F6] flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-b from-white to-[#FAFAFA]">
          <div>
            <h3 className="text-[15px] font-bold text-[#111827] flex items-center gap-2">
              <Users className="h-4.5 w-4.5 text-indigo-500" /> Recent Customer Inquiries
            </h3>
            <p className="text-[12px] font-medium text-[#6B7280] mt-1">Latest requests awaiting your response.</p>
          </div>
          <button
            onClick={() => navigate('/provider/requests')}
            className="flex items-center gap-1.5 px-4 py-2 bg-white border border-[#E5E7EB] rounded-lg text-[12px] font-bold text-[#374151] hover:bg-[#F9FAFB] hover:text-[#111827] transition-colors shadow-sm"
          >
            View pipeline <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {recentRequests.length > 0 ? (
          <div className="w-full overflow-x-auto no-scrollbar">
            <table className="w-full text-left min-w-[900px]">
              <thead>
                <tr className="border-b border-[#F3F4F6] bg-white text-[10px] font-bold text-[#6B7280] uppercase tracking-widest">
                  <th className="px-5 py-4 w-[25%]">Customer</th>
                  <th className="px-5 py-4 w-[35%]">Requirement</th>
                  <th className="px-5 py-4 whitespace-nowrap">Category</th>
                  <th className="px-5 py-4 whitespace-nowrap">Date</th>
                  <th className="px-5 py-4 whitespace-nowrap">Status</th>
                  <th className="px-5 py-4 text-right whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F9FAFB]">
                {recentRequests.map(req => (
                  <tr key={req.id} className="hover:bg-[#FAFAFA] transition-colors group">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3.5">
                        {req.customerAvatar
                          ? <img src={req.customerAvatar} alt={req.customerName} className="h-8 w-8 rounded-full object-cover border border-[#E5E7EB] shrink-0 shadow-sm" />
                          : <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] border border-[#D1D5DB] flex items-center justify-center text-[12px] font-bold text-[#374151] shrink-0 shadow-sm">{req.customerName.charAt(0)}</div>
                        }
                        <div className="min-w-0">
                          <p className="text-[13px] font-bold text-[#111827] truncate">{req.customerName}</p>
                          <p className="text-[11px] font-medium text-[#6B7280] truncate">{req.customerEmail}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="pr-4 max-w-[280px] lg:max-w-[320px]">
                        <p className="text-[13px] font-bold text-[#111827] leading-snug truncate">{req.title}</p>
                        <p className="text-[11px] font-medium text-[#6B7280] mt-1 leading-snug line-clamp-2">{req.description}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <span className="text-[12px] font-medium text-[#6B7280] bg-[#F3F4F6] px-2.5 py-1 rounded-md">{req.category}</span>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <span className="text-[12px] font-medium text-[#6B7280]">{req.date}</span>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${statusBadge(req.status)}`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => navigate(`/provider/requests/${req.id}`)}
                          className="text-[12px] font-bold px-3 py-1.5 rounded-lg border border-[#E5E7EB] text-[#374151] hover:bg-white hover:shadow-sm hover:border-[#D1D5DB] transition-all bg-[#FAFAFA]"
                        >
                          Details
                        </button>
                        {req.status === 'New' && (
                          <button
                            onClick={() => updateRequestStatus(req.id, 'Accepted')}
                            className="text-[12px] font-bold px-3 py-1.5 rounded-lg bg-[#111827] text-white hover:bg-[#1F2937] hover:shadow-md hover:-translate-y-0.5 transition-all"
                          >
                            Accept
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-20 text-center bg-[#FAFAFA]">
            <div className="h-12 w-12 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center mx-auto mb-4">
              <Activity className="h-6 w-6 text-[#9CA3AF]" />
            </div>
            <p className="text-[14px] font-bold text-[#111827]">No Requests Yet</p>
            <p className="text-[12px] font-medium text-[#6B7280] mt-1.5 max-w-sm mx-auto">Customer inquiries will appear here once your services receive traffic and requests.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
