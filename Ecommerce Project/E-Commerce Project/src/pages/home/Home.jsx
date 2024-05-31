import React, { useEffect, useState } from 'react'
import './Home.css'
import CountUp from 'react-countup';
import { Rating } from 'react-simple-star-rating'




function Home() {

  


  return (
    <>
      <section id = "home-page">
        <div className='flex-row'>
          <div className='flex-col' id='home-left-section'>
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className='round-button'>Shop Now</button>
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
      

    {/* new arivals section ................................*/}


<section id = "home-page-new-arrival">
 <h1>NEW ARRIVALS</h1>
 <div class="flex-row home-page-new-arrival-cards">
     <div class="new-arrival-card">
         <img src="src\assets\images\Frame 32.png" alt=""/>
         <h2>T-shirt with Tape Details</h2>

         <div class="div-rating-star">
            <Rating size={20} initialValue={4.5} readonly = {true} allowFraction = {true}
      />
             <span class="rating-number">4.5/5</span>
         </div>

         <span class="new-arrival-price">$120</span>

     </div>
     <div class="new-arrival-card">
         <img src="src\assets\images\Frame 33.png" alt=""/>
         <h2>Skinny Fit Jeans</h2>

         <div class="div-rating-star">
         <Rating size={20} initialValue={3.5} readonly = {true} allowFraction = {true}
      />
             <span class="rating-number">3.5/5</span>
         </div>


         <div class="flex-row flex-align-center">
             <span class="new-arrival-price">$240</span>
             <del class="strikethrough">
                 $260
             </del>
             <div class="discount">
                 <span>-20%</span>
             </div>
         </div>
     </div>
     <div class="new-arrival-card">
         <img src="src\assets\images\Frame 34.png" alt=""/>
         <h2>Checked Shirt</h2>

         <div class="div-rating-star">
         <Rating size={20} initialValue={4.5} readonly = {true} allowFraction = {true}
      />
             <span class="rating-number">4.5/5</span>
         </div>

         <span class="new-arrival-price">$180</span>
     </div>
     <div class="new-arrival-card">
         <img src="src\assets\images\Frame 38.png" alt=""/>
         <h2>sleeve Striped T-Shirt</h2>
         <div class="div-rating-star">
         <Rating size={20} initialValue={4.5} readonly = {true} allowFraction = {true}
      />
             <span class="rating-number">4.5/5</span>
         </div>
         <div class="flex-row flex-align-center">
             <span class="new-arrival-price">$160</span>
             <del class="strikethrough">
                 $160
             </del>
             <div class="discount">
                 <span>-30%</span>
             </div>
         </div>
         
     </div>
 </div>
 <div className="container-btn-new-arrival">
 <button className='round-button btn-new-arrival'>
  View All
 </button>
 </div>

 
</section>





    </>
  )
}

export default Home