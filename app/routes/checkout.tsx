import { useCart } from "~/hooks/useCart";
import { Navbar } from "~/components/Navbar"
import { Footer } from "~/components/Footer"

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
