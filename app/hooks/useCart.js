import { useState, useEffect } from "react";

export const useCart = () => {
  const getInitialCart = () => JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const initialCart = getInitialCart();
    if(initialCart){
      setCart(initialCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart]);

  const addToCart = (item) => {
    setCart((cart) => [...cart, item]);
    
  };

  const removeFromCart = (item) => {
    setCart((cart) => cart.filter((i) => i.art_name !== item.art_name));
  };

  return { cart, addToCart, removeFromCart };
};
