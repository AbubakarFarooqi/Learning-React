import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faUser,faSearch } from '@fortawesome/free-solid-svg-icons';



function Header() {
  return (
    <>
    <nav>
        <NavLink id='site-name' to= "/" > SHOP.CO </NavLink>
        <ul>
            <li>
                <NavLink className={({isActive})=>{
                    return `nav-link ${(isActive)?'active-nav-link':''}`
                }} to = "/shop">
                    Shop
                </NavLink>
                <NavLink className={({isActive})=>{
                    return `nav-link ${(isActive)?'active-nav-link':''}`
                }}  to = "/home">
                    On Sale
                </NavLink>
                <NavLink className="nav-link">
                    New Arrivals
                </NavLink>
                <NavLink className="nav-link">
                    Brands
                </NavLink>
            </li>
        </ul>
        <div id = "nav-search">
            <FontAwesomeIcon className='icons' icon={faSearch} />
            <input type="text" name="" id="" placeholder='Search for Products' />
        </div>
        <FontAwesomeIcon className='icons' icon={faCartShopping} />
        <FontAwesomeIcon className='icons' icon={faUser} />
    </nav>
    </>
  )
}

export default Header