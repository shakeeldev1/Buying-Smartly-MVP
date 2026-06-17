import { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Contact from './pages/Contact'
import Login from './components/common/Login'
import Signup from './components/common/Signup'
import LogisticsNetworks from './pages/LogisticsNetworks'
import ProfessionalServices from './pages/ProfessionalServices'
import ShoppingSourcing from './pages/ShoppingSourcing'
import TravelExperiences from './pages/TravelExperiences'
import ProductDetail from './pages/ProductDetail'

// Admin Components
import AdminSidebar from './components/admin/common/AdminSidebar'
import AdminTopbar from './components/admin/common/AdminTopbar'

// Admin Pages
import Overview from './pages/admin/Overview'
import Products from './pages/admin/Products'
import Orders from './pages/admin/Orders'
import Users from './pages/admin/Users'

// Provider Portal imports
import { ProviderStateProvider } from './context/ProviderState'
import ProviderLayout from './components/provider/ProviderLayout'
import Dashboard from './pages/provider/Dashboard'
import Profile from './pages/provider/Profile'
import Services from './pages/provider/Services'
import CreateService from './pages/provider/CreateService'
import EditService from './pages/provider/EditService'
import Requests from './pages/provider/Requests'
import RequestDetail from './pages/provider/RequestDetail'
import Messages from './pages/provider/Messages'
import Analytics from './pages/provider/Analytics'
import Settings from './pages/provider/Settings'

const MainFunction = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

// Admin Dashboard Layout (Now with Responsive Drawer Logic)
const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Component */}
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 md:ml-64 transition-all duration-300">
        {/* Topbar Component */}
        <AdminTopbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Dynamic Page Content */}
        <main className="p-4 md:p-6 lg:p-8 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainFunction />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <Contact /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/services/shopping', element: <ShoppingSourcing /> },
      { path: '/product/:id', element: <ProductDetail /> },
      { path: '/services/travel', element: <TravelExperiences /> },
      { path: '/services/logistics', element: <LogisticsNetworks /> },
      { path: '/services/professional', element: <ProfessionalServices /> }
    ]
  },
  {
    path: '/admin',
    element: <AdminDashboard />,
    children: [
      {
        index: true,
        element: <Overview />
      },
      { path: 'products', element: <Products /> },
      { path: 'orders', element: <Orders /> },
      { path: 'users', element: <Users /> },
      { path: 'analytics', element: <Analytics /> },
      { path: 'settings', element: <Settings /> }
    ]
  },
  {
    path: '/provider',
    element: (
      <ProviderStateProvider>
        <ProviderLayout />
      </ProviderStateProvider>
    ),
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'services',
        element: <Services />,
        children: [
          {
            path: 'create',
            element: <CreateService />
          },
          {
            path: ':id/edit',
            element: <EditService />
          }
        ]
      },
      {
        path: 'requests',
        element: <Requests />
      },
      {
        path: 'requests/:id',
        element: <RequestDetail />
      },
      {
        path: 'messages',
        element: <Messages />
      },
      {
        path: 'analytics',
        element: <Analytics />
      },
      {
        path: 'settings',
        element: <Settings />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App

