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
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
