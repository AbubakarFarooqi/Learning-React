import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='/contact' element={<Contact />} />
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
