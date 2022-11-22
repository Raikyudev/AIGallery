import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import background from "../assets/background.webp";
import photo1 from "../assets/peakpx.jpg";
import photo2 from "../assets/wallpaperflare.com_wallpaper (1).jpg";
import photo3 from "../assets/wallpaperflare.com_wallpaper.jpg";
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="h-screen bg-black overflow-hidden">
      <Navbar />
      <img
        src={background}
        className="w-full  z-0 absolute blur-sm"
        alt="background"
      />

      <div className=" relative items-center justify-center  grid md:grid-cols-3 gap-2  mt-32 md:mt-56 ml-2 sm:ml-6 xl:ml-32 blur-sm xl:mt-96">
        <div className="col-span-1 ">
          <img
            src={photo3}
            className="w-40 sm:w-60 xl:w-80 z-10 absolute drop-shadow-2xl"
            alt="background2"
          />
        </div>
        <div className="col-span-1">
          <img
            src={photo1}
            className="w-40 sm:w-60 xl:w-80 z-10 absolute drop-shadow-2xl "
            alt="background1"
          />
        </div>
        <div className="col-span-1">
          <img
            src={photo2}
            className="w-40 sm:w-60 xl:w-80 z-10 absolute drop-shadow-2xl "
            alt="background2"
          />
        </div>
      </div>
      <div className="font-raleway, font-bold absolute z-10 text-white text-4xl text-3xl sm:w-60 md:text-6xl  md:w-full text-center -mt-20 drop-shadow-lg text-center  ">
        The art of the future. Made by machines.
      </div>
      <div className="flex flex-col items-center justify-center">
        <button className=" font-raleway,font-bold text-center rounded-lg  bg-white p-2 md:p-4 cl:p-6 absolute ml-auto mr-auto z-10 mt-32 sm:mt-80 xl:mt-96 border-solid border-black border-2">
          <Link to="/main">Explore A.I Gallery</Link>
        </button>
      </div>
      <Footer />
    </div>
  );
}
