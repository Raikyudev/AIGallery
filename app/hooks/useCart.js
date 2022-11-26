import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((cart) => [...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart((cart) => cart.filter((i) => i.art_name !== item.art_name));
  };

  return { cart, addToCart, removeFromCart };
};
