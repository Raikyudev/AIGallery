import { useCart } from "~/hooks/useCart";
import { Navbar } from "~/components/Navbar"
import { Footer } from "~/components/Footer"
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export default function Checkout() {
  const {cart} = useCart();
  const clicked = () => {
    console.log(cart);
  }

  
  return (
    <div className="" >
      <Navbar />
      <h1 onClick={clicked}>Hi</h1>
      <Footer />
    </div>
  );
}

