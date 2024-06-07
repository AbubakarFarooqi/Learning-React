import React, { useEffect, useState } from 'react'
import './Home.css'
import CountUp from 'react-countup';
import { Rating } from 'react-simple-star-rating'
import axios from 'axios';




function Home() {

  const [products,setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);


  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const response = await axios.get("http://localhost:8080/api/v1/product/get-all")
  
        // setLoading(false)
  
        setProducts(response.data.data)
        console.log(response.data.data)
  
      } catch (error) {
        setErr(error)
      }
      finally {
        // Set loading to false
        setLoading(false);
      }
    }

    // calling

    fetchData()
  },[]);

  // if(loading){
  //   return <h1>Loading</h1>
  // }

  // if (err) {
  //   return <h1>Error: {String(err)}</h1>;
  // }
  return (
    <>
      <section id = "home-page">
        <div className='home-page-lading-container flex-row'>
          <div className='flex-col' id='home-left-section'>
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className='round-button'>Shop Now</button>
            <div className='site-counts flex-row'>
              <div className='flex-col m80'>
                <span className='left-section-span-head'><CountUp end={200} duration={0.8}/>+</span>
                <span className='span-under-span-head'>International Bands</span>
              </div>
              <div class="hide vertical-line"></div>
              <div className='flex-col m80'>
                {/* <span className='left-section-span-head'>2000+</span> */}
                <span className='left-section-span-head'><CountUp end={2000} duration={0.8} />+</span>
                <span className='span-under-span-head'>High Quality Products</span>
              </div>
              <div className="hide vertical-line"></div>
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

{/* 
      {products.map(product =>(

<div key={product._id} class="new-arrival-card">
<div className='new-arrival-img-container'>
         <img src={product.picture} alt=""/>
         </div>
<h2>{product.name}</h2>
  {(product.rating !== 0 && product.rating != null)?<div class="div-rating-star">
   <Rating size={20} initialValue={product.rating} readonly = {true} allowFraction = {true}
/>
    <span class="rating-number">{product.rating}/5</span>
</div> : <div class="div-rating-star">
   <Rating size={20} initialValue={0} readonly = {true} allowFraction = {true}
/>
    <span class="rating-number">N/A</span>
</div>} 

<div class="flex-row flex-align-center">
             <span class="new-arrival-price">${product.price}</span>
            
             {(product.discountPercentage
 !== 0 && product.discountPercentage
 != null)?<>
            <del class="strikethrough">
                 ${product.price - product.price*(product.discountPercentage/100)}
             </del>
             <div class="discount">
                 <span>-{product.discountPercentage}%</span>
             </div>
            </>:<></>}
         </div>


</div>

      ))} */}

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


{/* <!-- .................Browse By Dress Style .................... --> */}
   <section  id = "section-brows-by-dress-style">
    <h1>
        BROWSE BY DRESS STYLE
    </h1>
        <div class="flex-row sec-browse-by-dress-cards-container">
            <div class="sec-browse-by-dress-casual">
                <span>Casual</span>
                <img src="src\assets\images\casual.png" alt=""/>
            </div>
            <div class="sec-browse-by-dress-formal">
                <span>Formal</span>
                <img src="src\assets\images\formal.png" alt=""/>
            </div>
        </div>
        <div class="flex-row sec-browse-by-dress-cards-container">
            <div class="sec-browse-by-dress-formal">
                <span>Party</span>
                <img src="src\assets\images\party.png" alt=""/>
            </div>
            <div class="sec-browse-by-dress-casual">
                <span>Gym</span>
                <img src="src\assets\images\gym.png" alt=""/>
            </div>
        </div>
   </section>


    </>
  )
}

export default Home