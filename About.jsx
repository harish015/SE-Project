import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
           <Title text1={"ABOUT"} text2={"US"}/>
       </div>
       <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
             <p>FOREVER is a cutting-edge e-commerce platform designed to offer customers a seamless 
             and personalized shopping experience. Built with the latest technology, 
             FOREVER provides a diverse range of products, from fashion and beauty 
             to electronics and home essentials, all in one place.</p>
             <p> The app focuses 
             on delivering top-quality customer service, fast shipping, and an intuitive 
             user interface that makes browsing and purchasing effortless</p>
             <b className='text-gray-800'>OUR MISSION</b>
             <p>With a user-centric approach, FOREVER allows customers to explore curated 
             collections, enjoy exclusive discounts, and track their orders with ease. 
             Whether you're looking for the latest trends or everyday necessities, 
             FOREVER is your go-to destination for a hassle-free shopping experience.</p>
          </div>
       </div>

       <div className='text-xl py-4'>
          <Title text1={"WHY"} text2={"CHOOSE US"}/>
       </div>
       <div className='flex flex-col md:flex-row text-sm mb-20'>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>QUALITY ASSURANCE : </b>
           <p className='text-gray-700'> FOREVER allows customers to explore curated collections, 
           enjoy exclusive discounts, and track their orders with ease. 
           Whether you're looking for the latest trends or everyday necessities,
            FOREVER is your go-to destination for a hassle-free shopping experience.</p>
         </div>

         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>CONVENINENCE : </b>
           <p className='text-gray-700'> FOREVER allows customers to explore curated collections, 
           enjoy exclusive discounts, and track their orders with ease. 
           Whether you're looking for the latest trends or everyday necessities,
            FOREVER is your go-to destination for a hassle-free shopping experience.</p>
         </div>

         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>EXCEPTIONAL CUSTOMER SERVICE : </b>
           <p className='text-gray-700'> FOREVER allows customers to explore curated collections, 
           enjoy exclusive discounts, and track their orders with ease. 
           Whether you're looking for the latest trends or everyday necessities,
            FOREVER is your go-to destination for a hassle-free shopping experience.</p>
         </div>
       </div>
        
    </div>
  
    
  )
}

export default About