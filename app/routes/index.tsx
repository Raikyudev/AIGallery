import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import background from "../assets/background.webp";
import photo1 from "../assets/peakpx.jpg";
import photo2 from "../assets/wallpaperflare.com_wallpaper (1).jpg";
import photo3 from "../assets/wallpaperflare.com_wallpaper.jpg";
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <Navbar />
      <div className="font-raleway, font-bold  z-10 text-white  text-3xl sm:w-60 md:text-6xl  md:w-full text-center mt-32 md:mt-44 drop-shadow-lg text-center mx-4 ">
        The art of the future. Made by the future.
      </div>
      <div className="font-raleway, flex flex-col items-center justify-center">
        <button className=" font-raleway,font-bold text-center rounded-lg  bg-white p-2 md:p-4 cl:p-6  ml-auto mr-auto z-10 mt-12 md:mt-32  border-solid border-black border-2 ">
          <Link to="/main">Explore A.I Gallery</Link>
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-20  mb-20 md:mb-40 ">
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <img
            src="/assets/peakpx.jpg"
            className=" w-60  md:w-80 md:ml-4 mb-4 mt-2 rounded-lg shadow-2xl hover:transform hover:scale-110 transition duration-500 ease-in-out"
          />
          <div className="font-raleway, font-bold text-white text-md md:text-2xl text-center mt-4 w-60 md:w-1/3 justify-center md:ml-24 font-light ">
            A.I GALLERY is a platform to demonstrate the power and beauty of A.I
            generated art. Beautifully curated to create images that are both
            visually stunning and thought provoking. Beyond the constraints of
            human creativity, A.I Gallery is a place to explore the art of the
            future.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
