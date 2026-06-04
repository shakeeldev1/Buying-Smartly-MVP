import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'

const MainFunction = ()=>{
  return(
    <div>
      <Outlet />
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
        element: "Home"
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
