import React from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Template from './Pages/Template'

const route = createBrowserRouter ([
  {
    path: "/",
    element: <Template />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {route} />
  </React.StrictMode>,
)

