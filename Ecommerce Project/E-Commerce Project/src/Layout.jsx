import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/header/Header.jsx'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default Layout