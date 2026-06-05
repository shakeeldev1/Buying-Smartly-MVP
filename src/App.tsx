import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
const MainFunction = ()=>{
  return(
    <div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainFunction />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
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
