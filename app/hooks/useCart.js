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
    const qnt = cart.find((i) => i.art_name === item.art_name);
    if (qnt) {
      qnt.quantity++;
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setCart((cart) => [...cart, item]);
    console.log(getInitialCart());
  };
  const removeFromCart = (item) => {
    setCart((cart) => cart.filter((i) => i.art_name !== item.art_name));
  };

  return { cart, addToCart, removeFromCart };
};
