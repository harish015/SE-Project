import React, { useContext } from 'react'
import { ShopContext } from '../Content/ShopContext'
import { Link } from 'react-router-dom'

const ProductItems = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext)

  return (
    <Link to = {`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItems