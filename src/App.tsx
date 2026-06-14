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

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainFunction />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/services/shopping',
        element: <ShoppingSourcing />
      },
      {
        path: '/product/:id',
        element: <ProductDetail />
      },
      {
        path: '/services/travel',
        element: <TravelExperiences />
      },
      {
        path: '/services/logistics',
        element: <LogisticsNetworks />
      },
      {
        path: '/services/professional',
        element: <ProfessionalServices />
      }
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
  return (
    <RouterProvider router={router} />
  )
}

export default App

