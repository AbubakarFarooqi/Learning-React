import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/home/Home.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path :'/',
        element:<Home/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
