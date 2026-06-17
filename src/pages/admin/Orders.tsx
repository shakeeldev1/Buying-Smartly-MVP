import { Search, Eye } from 'lucide-react'

const statuses = ['All Statuses', 'Completed', 'Processing', 'Shipped', 'Cancelled']

const orders = [
  { id: '#ORD-00678', customer: 'Juan Dela Cruz', email: 'juan@example.com', items: '3 items', total: '₱52,800.00', status: 'Completed', date: '2026-01-15' },
  { id: '#ORD-00679', customer: 'Maria Santos', email: 'maria@example.com', items: '1 item', total: '₱3,500.00', status: 'Processing', date: '2026-01-15' },
  { id: '#ORD-00680', customer: 'Pedro Reyes', email: 'pedro@example.com', items: '2 items', total: '₱9,400.00', status: 'Shipped', date: '2026-01-14' },
  { id: '#ORD-00681', customer: 'Ana Garcia', email: 'ana@example.com', items: '1 item', total: '₱850.00', status: 'Completed', date: '2026-01-14' },
  { id: '#ORD-00682', customer: 'Carlos Mendoza', email: 'carlos@example.com', items: '2 items', total: '₱4,300.00', status: 'Processing', date: '2026-01-13' },
  { id: '#ORD-00683', customer: 'Elena Cruz', email: 'elena@example.com', items: '1 item', total: '₱1,200.00', status: 'Cancelled', date: '2026-01-13' },
  { id: '#ORD-00684', customer: 'Mark Villanueva', email: 'mark@example.com', items: '4 items', total: '₱18,700.00', status: 'Completed', date: '2026-01-12' },
  { id: '#ORD-00685', customer: 'Sofia Reyes', email: 'sofia@example.com', items: '1 item', total: '₱6,900.00', status: 'Shipped', date: '2026-01-12' },
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

function Orders() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto select-none">
      {/* Header View */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Orders</h2>
        <p className="text-sm text-slate-500 mt-0.5">Manage, filter, and track customer fulfillments</p>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Orders</p>
          <p className="text-2xl font-bold text-slate-900 tracking-tight mt-2">1,234</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Processing</p>
          <p className="text-2xl font-bold text-amber-600 tracking-tight mt-2">23</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Shipped</p>
          <p className="text-2xl font-bold text-blue-600 tracking-tight mt-2">156</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Cancelled</p>
          <p className="text-2xl font-bold text-rose-600 tracking-tight mt-2">12</p>
        </div>
      </div>

      {/* Filters Form Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-[#D4AF37] transition-colors" />
          <input
            type="search"
            placeholder="Search orders by ID or customer keywords..."
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all placeholder:text-slate-400 text-slate-700"
          />
        </div>

        <select className="px-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50/50 text-slate-700 focus:bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all cursor-pointer font-medium">
          {statuses.map((s) => (
            <option key={s} className="font-medium">{s}</option>
          ))}
        </select>
      </div>

      {/* Orders Core Data Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-200/60">
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Items</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3.5 text-center text-xs font-semibold text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900 group-hover:text-[#D4AF37] transition-colors">
                    {order.id}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{order.customer}</p>
                      <p className="text-xs font-medium text-slate-400 mt-0.5">{order.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600">{order.items}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border ${getStatusBadge(order.status)}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 opacity-80" />
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-medium">{order.date}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#D4AF37] border border-[#D4AF37] rounded-lg hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200">
                      <Eye className="h-3.5 w-3.5" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Premium Data Pagination Interface Footer */}
        <div className="px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50/30">
          <p className="text-xs font-medium text-slate-500">Showing <span className="font-bold text-slate-700">1 to 8</span> of <span className="font-bold text-slate-700">1,234</span> entry orders</p>
          <div className="flex items-center gap-1.5">
            <button className="px-3 py-1.5 text-xs font-semibold border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-slate-50 transition-all disabled:opacity-50">Previous</button>
            <button className="px-3 py-1.5 text-xs font-bold bg-[#D4AF37] text-white rounded-lg shadow-sm">1</button>
            <button className="px-3 py-1.5 text-xs font-semibold border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-slate-50 transition-all">2</button>
            <button className="px-3 py-1.5 text-xs font-semibold border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-slate-50 transition-all">3</button>
            <button className="px-3 py-1.5 text-xs font-semibold border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-slate-50 transition-all">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders