import React, { Children, createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);
  return (
    <>
      <CartContext.Provider
        value={{ cart, setCart, cartLength, setCartLength,CartContext }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};1

export default CartProvider;
