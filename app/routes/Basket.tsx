import { Navbar } from "~/components/Navbar";
import bg from "~/assets/mountain_guardian.jpg";
import { Footer } from "~/components/Footer";

}
const Basket = () => {
  return (
    <div>
      <Navbar />
      <div className="text-3xl font-bold mt-5 mx-10 w-1/2 border-b border-solid border-1 border-black pb-5">
        <h1>Your Basket</h1>
      </div>
      <div className="flex flex-row items-center  mt-20 ">
        <div className="flex flex-col items-left  mx-8">
          <img
            src={bg}
            alt="ai"
            className="md:w-80 md:h-80 w-32 h-32 rounded-lg"
          />
        </div>
        <div className="flex flex-col items-left  mx-8">
          <p className="text-xl font-raleway, p-4 font-bold flex flex-col">
            Name
          </p>
        </div>
      </div>
      <div className="mt-20 mx-10 border-b  border-solid border-black border-1 w-1/2"></div>
      <div className="flex flex-row items-center  mt-20 ">
        <div className="flex flex-col items-left  mx-8">
          <img
            src={bg}
            alt="ai"
            className="md:w-80 md:h-80 w-32 h-32 rounded-lg"
          />
        </div>
        <div className="flex flex-col items-left  mx-8">
          <p className="text-xl font-raleway, p-4 font-bold flex flex-col">
            Name
          </p>
        </div>
      </div>
      <div className="mt-20 mx-10 border-b  border-solid border-black border-1 w-1/2"></div>
      <div className="mt-44">
        <Footer />
      </div>
    </div>
  );
};

export default Basket;
