import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

const router = createBrowserRouter([

                          {
                            path:"/",
                            element:<App />,
                            children:[
                              {
                                path:"",
                                element:<Home />
                              },
                              {
                                path:"/About",
                                element:<About />
                              },
                              {
                                path:"/Contact",
                                element:<Contact />
                              }
                            ]
                          }



])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
