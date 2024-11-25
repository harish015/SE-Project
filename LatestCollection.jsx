import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Content/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems'

const LatestCollection = () => {

  const {products} = useContext(ShopContext)
  const [latestProduct,setLatestProduct] = useState([])

  useEffect(()=> {
     setLatestProduct(products.slice(0,10))
  },[])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'Latest'} text2={'Collections'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi corrupti blanditiis recusandae atque tenetur illum nobis labore nisi corporis aut. Rem eaque iure fuga aliquid et recusandae ab eius aperiam!
        </p>
      </div>

    <div className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProduct.map((items,index) => (
               <ProductItems key={index} id={items._id} image={items.image} name={items.name} price={items.price}/>
          ))

        }

    </div>
     
    </div>
  )
}

export default LatestCollection