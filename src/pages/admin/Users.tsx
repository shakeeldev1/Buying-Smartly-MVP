import { Plus, Search, Edit2, Trash2 } from 'lucide-react'

const roles = ['All Roles', 'Admin', 'Manager', 'Customer', 'Vendor']

const users = [
  { id: 'USR-001', name: 'Admin User', email: 'admin@buysmartly.com', role: 'Admin', status: 'Active', joined: '2025-06-01' },
  { id: 'USR-002', name: 'Maria Santos', email: 'maria@example.com', role: 'Vendor', status: 'Active', joined: '2025-08-15' },
  { id: 'USR-003', name: 'Juan Dela Cruz', email: 'juan@example.com', role: 'Customer', status: 'Active', joined: '2025-09-22' },
  { id: 'USR-004', name: 'Pedro Reyes', email: 'pedro@example.com', role: 'Customer', status: 'Inactive', joined: '2025-10-03' },
  { id: 'USR-005', name: 'Ana Garcia', email: 'ana@example.com', role: 'Manager', status: 'Active', joined: '2025-11-10' },
  { id: 'USR-006', name: 'Carlos Mendoza', email: 'carlos@example.com', role: 'Vendor', status: 'Active', joined: '2025-12-01' },
  { id: 'USR-007', name: 'Elena Cruz', email: 'elena@example.com', role: 'Customer', status: 'Inactive', joined: '2026-01-05' },
]

function getRoleBadge(role: string) {
  const styles: Record<string, string> = {
    Admin: 'bg-purple-50 text-purple-700 border-purple-200/60',
    Manager: 'bg-blue-50 text-blue-700 border-blue-200/60',
    Vendor: 'bg-amber-50 text-amber-700 border-amber-200/60',
    Customer: 'bg-slate-50 text-slate-700 border-slate-200/60'
  }
  return styles[role] || 'bg-slate-50 text-slate-700 border-slate-200/60'
}

function getStatusBadge(status: string) {
  const styles: Record<string, string> = {
    Active: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    Inactive: 'bg-rose-50 text-rose-700 border-rose-200/60'
  }
  return styles[status] || 'bg-slate-50 text-slate-700 border-slate-200/60'
}

function Users() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto select-none">
      {/* Header section structure */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Users</h2>
          <p className="text-sm text-slate-500 mt-0.5">Manage user accounts, roles, and administrative permissions</p>
        </div>

        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#D4AF37] text-white rounded-lg hover:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-200 group">
          <Plus className="h-4 w-4 transition-transform group-hover:rotate-90 duration-200" />
          <span className="text-sm font-semibold">Add User</span>
        </button>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Users</p>
          <p className="text-2xl font-bold text-slate-900 tracking-tight mt-2">8,943</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active</p>
          <p className="text-2xl font-bold text-emerald-600 tracking-tight mt-2">7,521</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Inactive</p>
          <p className="text-2xl font-bold text-rose-600 tracking-tight mt-2">1,422</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">New This Month</p>
          <p className="text-2xl font-bold text-blue-600 tracking-tight mt-2">324</p>
        </div>
      </div>

      {/* Search Filters Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-[#D4AF37] transition-colors" />
          <input
            type="search"
            placeholder="Search users by name profile or unique email address..."
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all placeholder:text-slate-400 text-slate-700"
          />
        </div>

        <select className="px-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50/50 text-slate-700 focus:bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all cursor-pointer font-medium">
          {roles.map((role) => (
            <option key={role} className="font-medium">{role}</option>
          ))}
        </select>
      </div>

      {/* Central Users Data Table Layout */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-200/60">
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">User</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Joined</th>
                <th className="px-6 py-3.5 text-center text-xs font-semibold text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/80 transition-colors group">
                  {/* User Profile Info Cell */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 border border-slate-200/60 rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-xs font-bold text-slate-600">
                          {user.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 group-hover:text-[#D4AF37] transition-colors">{user.name}</p>
                        <p className="text-xs font-medium text-slate-400 mt-0.5">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  
                  {/* Role Badge Cell */}
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border ${getRoleBadge(user.role)}`}>
                      {user.role}
                    </span>
                  </td>

                  {/* Status Badge Cell */}
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border ${getStatusBadge(user.status)}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 opacity-80" />
                      {user.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-400 font-medium">{user.joined}</td>
                  
                  {/* Inline Functional Row Controls */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1">
                      <button className="p-2 text-slate-400 hover:text-[#D4AF37] hover:bg-amber-50 rounded-lg transition-all" title="Edit Profile Details">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all" title="Revoke Permissions / Delete">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Premium Data Pagination Interface Footer */}
        <div className="px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50/30">
          <p className="text-xs font-medium text-slate-500">Showing <span className="font-bold text-slate-700">1 to 7</span> of <span className="font-bold text-slate-700">8,943</span> entry profiles</p>
          <div className="flex items-center gap-1.5">
            <button className="px-3 py-1.5 text-xs font-semibold border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-slate-50 transition-all">Previous</button>
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

export default Users