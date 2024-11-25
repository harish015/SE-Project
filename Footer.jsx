import React from 'react'
import {assets} from '../assets/assets'
const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsam quam voluptatibus veritatis, aspernatur dicta itaque tempora soluta quis consequatur, animi sapiente nisi iusto consectetur odio asperiores accusantium. Placeat, error.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>FOREVER</p>
                <ul className='flex flex-col gap-1 text-gray-700'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-700'>
                    <li>+91-9962264416</li>
                    <li>221801015@rajalakshmi.edu.in</li>
                    
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyrights 2024@ forever.com - All rights reserved</p>
        </div>
        <div class="bg-blue-500 sm:bg-green-500 md:bg-red-500 lg:bg-yellow-500 xl:bg-purple-500">
    Responsive Div
</div>
    </div>
  )
}

export default Footer