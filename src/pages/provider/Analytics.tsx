import React from 'react';
import { useProviderState } from '../../context/ProviderState';
import { TrendingUp, Eye, MousePointer, FileText, Percent, BarChart2, Sparkles } from 'lucide-react';
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  BarChart, Bar
} from 'recharts';

const Analytics: React.FC = () => {
  const { services } = useProviderState();

  const metrics = [
    { label: 'Profile Views',    val: '1,840', delta: '+12.4% vs last month', icon: Eye },
    { label: 'Service Clicks',   val: '870',   delta: '+8.2% vs last month',  icon: MousePointer },
    { label: 'Incoming Requests',val: '88',    delta: '+14.8% vs last month', icon: FileText },
    { label: 'Conversion Rate',  val: '4.8%',  delta: '+0.5% vs last month',  icon: Percent },
  ];

  const trafficPoints = [
    { month: 'Jan', views: 240, clicks: 120 },
    { month: 'Feb', views: 320, clicks: 150 },
    { month: 'Mar', views: 450, clicks: 210 },
    { month: 'Apr', views: 600, clicks: 290 },
    { month: 'May', views: 780, clicks: 380 },
    { month: 'Jun', views: 950, clicks: 480 },
  ];

  const requestTrends = [
    { month: 'Jan', count: 8 },  { month: 'Feb', count: 12 },
    { month: 'Mar', count: 18 }, { month: 'Apr', count: 24 },
    { month: 'May', count: 32 }, { month: 'Jun', count: 28 },
  ];

  const popular = [...services].sort((a, b) => b.views - a.views).slice(0, 3);
  const maxViews = popular.length ? Math.max(...popular.map(s => s.views)) : 1000;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#111827] text-white text-[11px] font-bold px-3 py-2 rounded-lg shadow-xl border border-gray-700">
          <p className="text-gray-400 font-medium mb-1">{label}</p>
          {payload.map((entry: any, i: number) => (
            <p key={i} className="text-white text-[13px]" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-5 animate-in fade-in duration-300">

      {/* Header */}
      <div>
        <h2 className="text-[15px] font-bold text-[#111827] tracking-tight">Performance Analytics</h2>
        <p className="text-[11px] text-[#9CA3AF] mt-0.5">Examine visitor traffic, conversions, and request trends.</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-[#E5E7EB] space-y-3 hover:border-[#D1D5DB] transition-colors group">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider">{m.label}</p>
              <m.icon className="h-4 w-4 text-[#D1D5DB] group-hover:text-[#374151] transition-colors shrink-0" />
            </div>
            <p className="text-2xl font-black text-[#111827] tracking-tight">{m.val}</p>
            <p className="text-[10px] font-semibold text-emerald-600">{m.delta}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* Traffic Overview */}
        <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] flex flex-col">
          <div className="mb-6 shrink-0">
            <h3 className="text-[13px] font-bold text-[#111827] flex items-center gap-1.5">
              Traffic Overview <Sparkles className="h-3.5 w-3.5 text-[#9CA3AF]" />
            </h3>
            <p className="text-[11px] text-[#9CA3AF]">Monthly views vs. service clicks over 6 months.</p>
          </div>

          <div className="flex-1 w-full -ml-6 min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficPoints} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#111827" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#111827" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9CA3AF', fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9CA3AF', fontWeight: 600 }} />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#9CA3AF', strokeWidth: 1, strokeDasharray: '4 4' }} />
                <Area type="monotone" dataKey="views" name="Views" stroke="#111827" strokeWidth={2} fillOpacity={1} fill="url(#colorViews)" activeDot={{ r: 4 }} />
                <Area type="monotone" dataKey="clicks" name="Clicks" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorClicks)" activeDot={{ r: 4 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center gap-4 mt-6 pt-4 border-t border-[#F3F4F6] text-[10px] font-semibold text-[#9CA3AF] shrink-0">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#111827] shrink-0" />Views</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" />Clicks</span>
          </div>
        </div>

        {/* Request Trends */}
        <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] flex flex-col">
          <div className="mb-6 shrink-0">
            <h3 className="text-[13px] font-bold text-[#111827] flex items-center gap-1.5">
              Request Trends <TrendingUp className="h-3.5 w-3.5 text-[#9CA3AF]" />
            </h3>
            <p className="text-[11px] text-[#9CA3AF]">Monthly inquiry volume across all service categories.</p>
          </div>

          <div className="flex-1 w-full -ml-4 min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={requestTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9CA3AF', fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9CA3AF', fontWeight: 600 }} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F9FAFB' }} />
                <Bar dataKey="count" name="Inquiries" fill="#6366F1" radius={[4, 4, 0, 0]} barSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#F3F4F6] text-[10px] font-semibold shrink-0">
            <span className="text-[#9CA3AF]">Total: 122 inquiries</span>
            <span className="text-emerald-600">+22.4% MoM growth</span>
          </div>
        </div>
      </div>

      {/* Popular Listings */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
        <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[#F3F4F6]">
          <BarChart2 className="h-4 w-4 text-[#374151] shrink-0" />
          <div>
            <h3 className="text-[13px] font-bold text-[#111827]">Popular Listings Ranking</h3>
            <p className="text-[11px] text-[#9CA3AF]">Traffic distribution across your active service offerings.</p>
          </div>
        </div>

        {popular.length > 0 ? (
          <div className="space-y-4">
            {popular.map((svc, i) => {
              const w = Math.max(8, Math.round((svc.views / maxViews) * 100));
              return (
                <div key={svc.id} className="space-y-2 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-[10px] font-bold text-[#9CA3AF] w-4 shrink-0">{i + 1}.</span>
                      <p className="text-[13px] font-semibold text-[#111827] truncate">{svc.title}</p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0 ml-3 text-[11px]">
                      <span className="text-[#9CA3AF]">{svc.views} views</span>
                      <span className="text-[#9CA3AF]">{svc.clicks} clicks</span>
                      <span className="font-bold text-[#111827]">{svc.requestsCount} inquiries</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-[#F3F4F6] rounded-full overflow-hidden border border-[#F3F4F6]">
                    <div
                      style={{ width: `${w}%` }}
                      className="h-full bg-[#111827] rounded-full transition-all duration-700"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-10 text-center">
            <p className="text-[13px] font-semibold text-[#374151]">No Services Yet</p>
            <p className="text-[11px] text-[#9CA3AF] mt-1">Add services to see analytics data here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;
