import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const [search,setSearch] = useState('')
    const [showbar,setShowbar] = useState(false)
    const [cartItems,setcartItems] = useState({})
    const Navigate = useNavigate()

    const currency = '$';
    const deliveryCharge = 10;

    const addtocart = async (itemId,size) => {
         
      if(!size) {
        toast.error("Select Product Size");
        return ;
      }

        let cartData = structuredClone(cartItems)

        if(cartData[itemId]){
          if(cartData[itemId][size]){
            cartData[itemId][size] += 1
          }
          else{
            cartData[itemId][size] = 1
          }
        }
        else{
          cartData[itemId] = {}
          cartData[itemId][size] = 1
        }

        setcartItems(cartData)
    }

    const getCartCount = () => {
      let totalcount = 0;
      for(const items in cartItems){
        for(const item in cartItems[items]){
          try {
            if(cartItems[items][item] > 0){
              totalcount += cartItems[items][item]
            }
          } catch (error) {
            
          }
        }
      }
      return totalcount
    }

    const UpdateCartData = async (itemId,size,quantity) => {

       let cartData = structuredClone(cartItems);

       cartData[itemId][size] = quantity;

       setcartItems(cartData)

    }
    
    const getCartAmount =  () => {
      let totalAmt = 0
      for(const items in cartItems){
        let itemInfo = products.find((product) => product._id === items)
        for(const item in cartItems[items]){
          try {
            if(cartItems[items][item] > 0){
              totalAmt += itemInfo.price * cartItems[items][item]
            }
            
          } catch (error) {
            
          }
        }
      }
      return totalAmt
    }


    useEffect(() => {
      console.log(cartItems)
    },[cartItems])

    const value = {
         products,currency,deliveryCharge,search,
         setSearch,showbar,setShowbar,cartItems,addtocart,
         getCartCount,UpdateCartData,getCartAmount,Navigate
    }

    return (
       <ShopContext.Provider value={value}>
         {props.children}
       </ShopContext.Provider>

    )

}

export default ShopContextProvider