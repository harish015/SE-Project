import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Content/ShopContext'
import { assets } from '../assets/assets'
import Title from '../Components/Title'
import ProductItems from '../Components/ProductItems'

const Collection = () => {

  const {products,search,showbar} = useContext(ShopContext)
  const [showFilter,setshowFilter] = useState(false)
  const [filterProducts,setfilterProducts] = useState([])
  const [category,setCategory] = useState([])
  const [Subcategory,setSubCategory] = useState([])
  const [sortType,setsortType] = useState('relevant')

  const togglecategory = (e) => {
      if(category.includes(e.target.value)){
        setCategory(prev => prev.filter(item => item!==e.target.value))
      }
      else{
        setCategory(prev => [...prev,e.target.value])
      }
  }

  const toggleSubcategory = (e) => {
      if(Subcategory.includes(e.target.value)){
        setSubCategory(prev => prev.filter(item => item!==e.target.value))
      }
      else{
        setSubCategory(prev => [...prev,e.target.value])
      }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if(search && showbar){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

   if (Subcategory.length > 0){
      productsCopy = productsCopy.filter( item => Subcategory.includes(item.Subcategory))
   }


    setfilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let filpro = filterProducts.slice()
    switch(sortType) {
        case 'low-high':
          setfilterProducts(filpro.sort((a,b) => (a.price - b.price)))
          break
        case 'high-low':
          setfilterProducts(filpro.sort((a,b) => (b.price - a.price)))
          break
        default:
          applyFilter();
          break

    }
  }

  useEffect(() => {
    sortProduct();
  },[sortType])


  useEffect(() => {
    applyFilter()
  },[category,Subcategory,search,showbar])

  return (
   <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p onClick={()=>setshowFilter(!showFilter)}className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTER
          <img className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? " " : "hidden"} sm:block` }>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Men"} onChange={togglecategory}/>MEN
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Women"} onChange={togglecategory}/>WOMEN
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Kids"} onChange={togglecategory}/>KIDS
            </p>
          </div>
        </div>
         {/* <div className={`border border-gray-300 pl-5 py-3 my-5 mt-6 ${showFilter ? " " : "hidden"} sm:block` }>
        <p className='mb-3 text-sm font-medium'>TYPE</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input className='w-3' type="checkbox" value={"Topwear"} onChange={toggleSubcategory}/>TOPWEAR
          </p>
          <p className='flex gap-2'> */}
            {/* <input className='w-3' type="checkbox" value={"Bottomwear"} onChange={toggleSubcategory}/>BOTTOMWEAR */}
          {/* </p> */}
          {/* <p className='flex gap-2'> */}
            {/* <input className='w-3' type="checkbox" value={"Winterwear"} onChange={toggleSubcategory}/>WINTERWEAR */}
          {/* </p> */}
        {/* </div> */}
      {/* </div> */}
      </div>

      {/*Right Side*/}
      <div className='flex-1'>
        <div className='flex justify-between test-base sm:text-2xl mb-4'>
          <Title text1={"ALL"} text2={"COLLECTIONS"}/>
          <select onChange={(e) => setsortType(e.target.value)}className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by : relevant</option>
            <option value="low-high">Sort by : Low-High</option>
            <option value="high-low">Sort by : High-Low</option>
          </select>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
         {
           filterProducts.map((item,index) => (
                <ProductItems key={index} name={item.name} price={item.price} image={item.image} id={item._id}/>
           ))

         }
        </div>
      </div>
   </div>
  )
}

export default Collection