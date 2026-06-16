import { Plus, Search, Edit2, Trash2 } from 'lucide-react'

const categories = ['All Categories', 'Electronics', 'Clothing', 'Home & Garden', 'Automotive', 'Sports', 'Books']

const products = [
  { id: 'PRD-001', name: 'Premium Laptop Pro 15"', category: 'Electronics', price: '₱45,000.00', stock: 24, status: 'Active' },
  { id: 'PRD-002', name: 'Wireless Headphones X500', category: 'Electronics', price: '₱3,500.00', stock: 156, status: 'Active' },
  { id: 'PRD-003', name: 'Smart Watch Ultra', category: 'Electronics', price: '₱8,200.00', stock: 42, status: 'Active' },
  { id: 'PRD-004', name: 'Ergonomic Office Chair', category: 'Home & Garden', price: '₱12,500.00', stock: 8, status: 'Low Stock' },
  { id: 'PRD-005', name: 'Running Shoes Elite', category: 'Sports', price: '₱4,800.00', stock: 0, status: 'Out of Stock' },
  { id: 'PRD-006', name: 'Cotton T-Shirt Pack', category: 'Clothing', price: '₱1,200.00', stock: 320, status: 'Active' },
]

function getStatusBadge(status: string) {
  const styles: Record<string, string> = {
    Active: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    'Low Stock': 'bg-amber-50 text-amber-700 border-amber-200/60',
    'Out of Stock': 'bg-rose-50 text-rose-700 border-rose-200/60'
  }
  return styles[status] || 'bg-slate-50 text-slate-700 border-slate-200/60'
}

function Products() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto select-none">
      {/* Header section structure */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Products</h2>
          <p className="text-sm text-slate-500 mt-0.5">Manage and monitor your central product inventory</p>
        </div>

        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#D4AF37] text-white rounded-lg hover:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-200 group">
          <Plus className="h-4 w-4 transition-transform group-hover:rotate-90 duration-200" />
          <span className="text-sm font-semibold">Add Product</span>
        </button>
      </div>

      {/* Search filters controller menu */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-[#D4AF37] transition-colors" />
          <input
            type="search"
            placeholder="Search products by title, SKU code..."
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all placeholder:text-slate-400 text-slate-700"
          />
        </div>

        <select className="px-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50/50 text-slate-700 focus:bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all cursor-pointer font-medium">
          {categories.map((cat) => (
            <option key={cat} className="font-medium">{cat}</option>
          ))}
        </select>
      </div>

      {/* Main Core Products Table Layout Container */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-200/60">
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Product Info</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Stock Levels</th>
                <th className="px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3.5 text-center text-xs font-semibold text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50/80 transition-colors group">
                  {/* Info cell including inline placeholder frame layouts */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 border border-slate-200/60 rounded-lg flex items-center justify-center font-bold text-[10px] text-slate-400 tracking-wider">
                        IMG
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 group-hover:text-[#D4AF37] transition-colors">{product.name}</p>
                        <p className="text-xs font-medium text-slate-400 mt-0.5">{product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600">{product.category}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{product.price}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-600">
                    {product.stock === 0 ? (
                      <span className="text-rose-600 font-bold">Out of stock</span>
                    ) : (
                      `${product.stock} units`
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border ${getStatusBadge(product.status)}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 opacity-80" />
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1">
                      <button className="p-2 text-slate-400 hover:text-[#D4AF37] hover:bg-amber-50 rounded-lg transition-all" title="Edit Product">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all" title="Delete Product">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dynamic Premium Data Pagination Interface */}
        <div className="px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50/30">
          <p className="text-xs font-medium text-slate-500">Showing <span className="font-bold text-slate-700">1 to 6</span> of <span className="font-bold text-slate-700">567</span> entry products</p>
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

export default Products