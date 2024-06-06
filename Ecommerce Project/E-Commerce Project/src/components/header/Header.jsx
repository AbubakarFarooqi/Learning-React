import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faUser,faSearch } from '@fortawesome/free-solid-svg-icons';



function Header() {

    const [navUlActive,setNavUlActive] = useState(true)
    const onToggleClick = ()=>{
        setNavUlActive(!navUlActive)
    }
  return (
    <>
     <div className='container'>
     <div onClick={onToggleClick} className = "toggle-button toggle-button-active">
            <div></div>
            <div></div>
            <div></div>
        </div>
    <nav>
       
        <NavLink id='site-name' to= "/" > SHOP.CO </NavLink>
        <ul className={ `${(navUlActive)?'nav-ul nav-ul-active':'nav-ul nav-ul-in-active'}` }>
            <li>
                <NavLink className={({isActive})=>{
                    return `nav-link ${(isActive)?'active-nav-link':''}`
                }} to = "/shop">
                    Shop
                </NavLink>
            </li>
            <li><NavLink className={({isActive})=>{
                    return `nav-link ${(isActive)?'active-nav-link':''}`
                }}  to = "/home">
                    On Sale
                </NavLink></li>
                <li><NavLink className="nav-link">
                    New Arrivals
                </NavLink></li>
                <li><NavLink className="nav-link">
                    Brands
                </NavLink></li>
        </ul>
        
    </nav>

    <div id = "nav-search">
        <FontAwesomeIcon className='icons' icon={faSearch} />
        <input type="text" name="" id="" placeholder='Search for Products' />
    </div>
       <div className="nav-right-icons">
       <FontAwesomeIcon className='icons' icon={faCartShopping} />
       <FontAwesomeIcon className='icons' icon={faUser} />
       </div>
     </div>
    </>
  )
}

export default Header