import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Content/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

const Bestseller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller,setbestSeller] = useState([]);

    useEffect(()=> {
        const bestProduct = products.filter((item)=> (item.bestseller))
        setbestSeller(bestProduct.slice(0,5))
    })

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'Best'} text2={'Seller'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis doloremque nemo quas eum? Molestiae qui fuga amet magni vel dignissimos iure, deserunt in? Ad, voluptatibus sunt! Ipsa voluptatibus ducimus exercitationem?
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
         {
            bestSeller.map((items,index) => ( 
                <ProductItems key={index} id={items._id} name={items.name} image={items.image} price={items.price}/>
            ))
         }
        </div>
    </div>
  )
}

export default Bestseller