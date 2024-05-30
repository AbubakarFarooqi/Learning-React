import React, { useEffect, useState } from 'react'
import './Home.css'
import CountUp from 'react-countup';
function Home() {

  


  return (
    <>
      <section id = "home-page">
        <div className='flex-row'>
          <div className='flex-col' id='home-left-section'>
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button>Shop Now</button>
            <div className='flex-row'>
              <div className='flex-col m80'>
                <span className='left-section-span-head'><CountUp end={200} duration={0.8}/>+</span>
                <span className='span-under-span-head'>International Bands</span>
              </div>
              <div class="vertical-line"></div>
              <div className='flex-col m80'>
                {/* <span className='left-section-span-head'>2000+</span> */}
                <span className='left-section-span-head'><CountUp end={2000} duration={0.8} />+</span>
                <span className='span-under-span-head'>High Quality Products</span>
              </div>
              <div className="vertical-line"></div>
              <div className='flex-col'>
                <span className='left-section-span-head'><CountUp end={30000} duration={0.8}/>+</span>
                <span className='span-under-span-head'>Happy Customers</span>
              </div>
            </div>
          </div>

          <img className='landing-section-img' src="src\assets\images\home page image.png"  />

        </div>
      </section>
      ajja
    </>
  )
}

export default Home