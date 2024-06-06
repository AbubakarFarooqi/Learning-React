import React from 'react'

import './Footer.css'


function Footer() {
  return (
    <>
    
    {/* <!-- ..............................Foooter........................... --> */}

   <div className="footer-above">
    <div className="flex-row" style={{margin:"30px"}}>
        <span>STAY UPTO DATE ABOUT OUR LATEST OFFERS</span>
    <div className="footer-above-input">
        <input type="text" placeholder="Enter your email address"/>
        <button>Subscribe to Newsletter</button>
    </div>
    </div>
   </div>




   <footer className="footer">
    <div className="flex-row footer-container">
        <div className="footer-first footer-divs">
            <span className="nav-span">SHOP.CO</span>
            <p className="footer-text">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <div className="footer-icons-container">
                <i className="fa-brands fa-twitter footer-icon"></i>
                <i className="fa-brands fa-facebook footer-icon"></i>
                <i className="fa-brands fa-instagram footer-icon"></i>
                <i className="fa-brands fa-github footer-icon"></i>
            </div>
        </div>
        <div className="footer-divs">
            <h2>COMPANY</h2>
            <a href="">About</a>
            <a href="">Features</a>
            <a href="">Works</a>
            <a href="">Career</a>
        </div>
        <div className="footer-divs">
            <h2>HELP</h2>
            <a href="">Customer Support</a>
            <a href="">Delivery Details</a>
            <a href="">Terms and Conditions</a>
            <a href="">Privacy Policy</a>
        </div>
        <div className="footer-divs">
            <h2>FAQ</h2>
            <a href="">Account</a>
            <a href="">Manage Delivery</a>
            <a href="">Orders</a>
            <a href="">Payments</a>
        </div>
        <div className="footer-divs">
            <h2>RESOURCES</h2>
            <a href="">Free eBooks</a>
            <a href="">Development Tutorials</a>
            <a href="">How to - Blog</a>
            <a href="">Youtube Playlist</a>
        </div>
    </div>
    
   </footer>
    
    
    </>
  )
}

export default Footer