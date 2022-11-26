import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const qnt = cart.find((i) => i.art_name === item.art_name);
    if (qnt) {
      qnt.quantity++;
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setCart((cart) => [...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart((cart) => cart.filter((i) => i.art_name !== item.art_name));
  };

  return { cart, addToCart, removeFromCart };
};
