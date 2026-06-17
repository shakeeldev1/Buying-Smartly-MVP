import { ArrowDownRight, ArrowUpRight, DollarSign, ShoppingBag, TrendingUp, Users } from 'lucide-react'

const stats = [
  {
    title: 'Total Revenue',
    value: '₱45,231.89',
    change: '+20.1%',
    trend: 'up',
    icon: DollarSign,
    iconColor: 'text-[#D4AF37]',
    lightBg: 'bg-[#D4AF37]/10'
  },
  {
    title: 'Total Orders',
    value: '1,234',
    change: '+12.5%',
    trend: 'up',
    icon: ShoppingBag,
    iconColor: 'text-blue-600',
    lightBg: 'bg-blue-50'
  },
  {
    title: 'Total Products',
    value: '567',
    change: '+8.2%',
    trend: 'up',
    icon: TrendingUp,
    iconColor: 'text-emerald-600',
    lightBg: 'bg-emerald-50'
  },
  {
    title: 'Total Users',
    value: '8,943',
    change: '-2.4%',
    trend: 'down',
    icon: Users,
    iconColor: 'text-orange-600',
    lightBg: 'bg-orange-50'
  }
]

const recentOrders = [
  { id: '#ORD-001', customer: 'Juan Dela Cruz', product: 'Premium Laptop', amount: '₱45,000.00', status: 'Completed', date: '2026-01-15' },
  { id: '#ORD-002', customer: 'Maria Santos', product: 'Wireless Headphones', amount: '₱3,500.00', status: 'Processing', date: '2026-01-15' },
  { id: '#ORD-003', customer: 'Pedro Reyes', product: 'Smart Watch', amount: '₱8,200.00', status: 'Completed', date: '2026-01-14' },
  { id: '#ORD-004', customer: 'Ana Garcia', product: 'Smartphone Case', amount: '₱850.00', status: 'Shipped', date: '2026-01-14' },
  { id: '#ORD-005', customer: 'Carlos Mendoza', product: 'Bluetooth Speaker', amount: '₱2,100.00', status: 'Completed', date: '2026-01-13' },
  { id: '#ORD-006', customer: 'Elena Cruz', product: 'Tablet Stylus', amount: '₱1,200.00', status: 'Cancelled', date: '2026-01-13' },
]

function getStatusBadge(status: string) {
  const styles: Record<string, string> = {
    Completed: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    Processing: 'bg-amber-50 text-amber-700 border-amber-200/60',
    Shipped: 'bg-blue-50 text-blue-700 border-blue-200/60',
    Cancelled: 'bg-rose-50 text-rose-700 border-rose-200/60'
  }
  return styles[status] || 'bg-slate-50 text-slate-700 border-slate-200/60'
}

function Overview() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto select-none">
      {/* Welcome Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Overview</h2>
        <p className="text-sm text-slate-500 mt-0.5">Manage and track your store's performance metrics</p>
      </div>

      {/* Stats Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {stats.map((stat) => (
          <div 
            key={stat.title} 
            className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{stat.title}</p>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-xl transition-transform group-hover:scale-105 duration-200 ${stat.lightBg}`}>
                <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
              </div>
            </div>

            {/* Performance Change Section */}
            <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-slate-50">
              <div className={`flex items-center rounded px-1 py-0.5 text-xs font-bold ${
                stat.trend === 'up' ? 'text-emerald-700 bg-emerald-50' : 'text-rose-700 bg-rose-50'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="h-3 w-3 mr-0.5 stroke-[3]" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 mr-0.5 stroke-[3]" />
                )}
                {stat.change}
              </div>
              <span className="text-xs text-slate-400 font-medium">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders Data Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Table Subheader Control Bar */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900">Recent Orders</h3>
          <button className="text-xs font-semibold text-[#D4AF37] hover:text-slate-900 px-3 py-1.5 hover:bg-slate-50 rounded-lg transition-all border border-slate-100">
            View All Orders
          </button>
        </div>

        {/* Scrollable Layout Responsive wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-200/60">
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900 group-hover:text-[#D4AF37] transition-colors">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{order.product}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border ${getStatusBadge(order.status)}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 opacity-80" />
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-medium">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Overview