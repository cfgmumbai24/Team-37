import React, { createContext, useState } from "react";
import all_product from "../../../components/buyers/assets/all_product"

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index <= all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // console.log(cartItems);
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const getTotalCartAmt = () => {
    let totalAmt = 0;
    for (const item in cartItems) {
      if(cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item))
        totalAmt += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmt;
  }

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmt, getTotalCartItems };
  // console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;