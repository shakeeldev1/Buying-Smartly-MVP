import { TrendingUp, Users, Eye, Clock, ArrowUpRight } from 'lucide-react'

const chartData = [
  { label: 'Mon', value: 35 },
  { label: 'Tue', value: 55 },
  { label: 'Wed', value: 45 },
  { label: 'Thu', value: 70 },
  { label: 'Fri', value: 60 },
  { label: 'Sat', value: 85 },
  { label: 'Sun', value: 50 },
]

const topPages = [
  { page: '/product/laptop-pro-15', views: '3,421', bounceRate: '32%' },
  { page: '/product/wireless-headphones', views: '2,853', bounceRate: '28%' },
  { page: '/product/smart-watch', views: '2,100', bounceRate: '35%' },
  { page: '/product/bluetooth-speaker', views: '1,850', bounceRate: '41%' },
  { page: '/product/office-chair', views: '1,420', bounceRate: '25%' },
]

const trafficSources = [
  { source: 'Direct', percentage: 40, color: 'bg-[#D4AF37]' },
  { source: 'Organic Search', percentage: 30, color: 'bg-blue-500' },
  { source: 'Social Media', percentage: 20, color: 'bg-emerald-500' },
  { source: 'Referral', percentage: 10, color: 'bg-orange-500' },
]

function Analytics() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto select-none">
      {/* Header text container */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Analytics</h2>
        <p className="text-sm text-slate-500 mt-0.5">Track your real-time store performance and key visitor metrics</p>
      </div>

      {/* KPI Stats Top Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {/* Page views card */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-50 rounded-xl transition-transform group-hover:scale-105 duration-200">
              <Eye className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Page Views</p>
              <p className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">24.5K</p>
            </div>
          </div>
          <p className="text-xs font-semibold text-emerald-600 mt-4 pt-2 border-t border-slate-100 flex items-center gap-1">
            <ArrowUpRight className="h-3 w-3 stroke-[3]" /> +12.5% <span className="text-slate-400 font-medium">from last week</span>
          </p>
        </div>

        {/* Unique Visitors card */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-xl transition-transform group-hover:scale-105 duration-200">
              <Users className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Unique Visitors</p>
              <p className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">8,932</p>
            </div>
          </div>
          <p className="text-xs font-semibold text-emerald-600 mt-4 pt-2 border-t border-slate-100 flex items-center gap-1">
            <ArrowUpRight className="h-3 w-3 stroke-[3]" /> +8.2% <span className="text-slate-400 font-medium">from last week</span>
          </p>
        </div>

        {/* Bounce rate card */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-50 rounded-xl transition-transform group-hover:scale-105 duration-200">
              <TrendingUp className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Bounce Rate</p>
              <p className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">32.4%</p>
            </div>
          </div>
          <p className="text-xs font-semibold text-emerald-600 mt-4 pt-2 border-t border-slate-100 flex items-center gap-1">
            <span className="text-emerald-600 font-bold">-3.1%</span> <span className="text-slate-400 font-medium">from last week</span>
          </p>
        </div>

        {/* Session card */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-50 rounded-xl transition-transform group-hover:scale-105 duration-200">
              <Clock className="h-5 w-5 text-emerald-500" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Avg. Session</p>
              <p className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">4m 32s</p>
            </div>
          </div>
          <p className="text-xs font-semibold text-emerald-600 mt-4 pt-2 border-t border-slate-100 flex items-center gap-1">
            <ArrowUpRight className="h-3 w-3 stroke-[3]" /> +0.8% <span className="text-slate-400 font-medium">from last week</span>
          </p>
        </div>
      </div>

      {/* Analytics Mid Grid Section Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Visitors Custom CSS Layout Column Chart */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="mb-6">
            <h3 className="text-base font-bold text-slate-900 tracking-tight">Weekly Visitors</h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Analysis of unique logins throughout the current cycle</p>
          </div>
          
          <div className="flex items-end justify-between h-48 gap-2.5 sm:gap-4 px-2 pt-6">
            {chartData.map((item) => (
              <div key={item.label} className="flex-1 flex flex-col items-center gap-2.5 group cursor-pointer">
                <div
                  className="w-full bg-[#D4AF37]/90 hover:bg-[#D4AF37] rounded-t-md relative transition-colors duration-150 flex justify-center"
                  style={{ height: `${item.value * 1.6}px` }}
                >
                  {/* Absolute hovering values element indicator */}
                  <span className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm pointer-events-none whitespace-nowrap z-10">
                    {item.value}
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-800 transition-colors">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources progress bar layout block */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="mb-6">
            <h3 className="text-base font-bold text-slate-900 tracking-tight">Traffic Sources</h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Primary inbound distribution pipelines</p>
          </div>
          
          <div className="space-y-4.5 pt-1">
            {trafficSources.map((source) => (
              <div key={source.source} className="group">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">{source.source}</span>
                  <span className="text-sm font-bold text-slate-900">{source.percentage}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/20">
                  <div
                    className={`h-full rounded-full transition-all duration-500 opacity-90 group-hover:opacity-100 ${source.color}`}
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pages distribution breakdown lower component table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200">
          <h3 className="text-base font-bold text-slate-900 tracking-tight">Top Performing Pages</h3>
          <p className="text-xs text-slate-400 font-medium mt-0.5">Most viewed product path links and their respective bounce stats</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-200/60">
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Page Router Link</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Views Volume</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Bounce Rate Percentage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {topPages.map((page) => (
                <tr key={page.page} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 group-hover:text-[#D4AF37] transition-colors font-mono tracking-tight">
                    {page.page}
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-700">{page.views}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-500">{page.bounceRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Analytics