import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import background from "../assets/background.webp";
import photo1 from "../assets/peakpx.jpg";
import photo2 from "../assets/wallpaperflare.com_wallpaper (1).jpg";
import photo3 from "../assets/wallpaperflare.com_wallpaper.jpg";

export default function Index() {
  return (
    <div>
      <Navbar />
      <img
        src={background}
        className=" w-full  z-0 absolute  overflow-hidden blur-sm"
        alt="background"
      />
      <div className="relative  grid grid-cols-3 gap-2 w-full mt-32 md:mt-56 ml-2 sm:ml-6 blur-sm">
        <div className="col-span-1 ">
          <img
            src={photo3}
            className="w-40 sm:w-60 z-10 absolute drop-shadow-2xl"
            alt="background2"
          />
        </div>
        <div className="col-span-1">
          <img
            src={photo1}
            className="w-40 sm:w-60  z-10 absolute object-left drop-shadow-2xl "
            alt="background1"
          />
        </div>
        <div className="col-span-1">
          <img
            src={photo2}
            className="w-40 sm:w-60 z-10 absolute drop-shadow-2xl "
            alt="background2"
          />
        </div>
      </div>
      <div className="font-raleway, font-bold absolute z-10 text-white text-4xl md:text-6xl w-96 md:w-full text-center -mt-20 drop-shadow-lg ">
        The art of the future. Made by machines.
      </div>
      <div className="flex flex-col items-center justify-center">
        <button className=" font-raleway,font-bold text-center rounded-lg  bg-white p-2 md:p-4 absolute ml-auto mr-auto z-10 mt-32 sm:mt-80 border-solid border-black border-2">
          Explore A.I Gallery
        </button>
      </div>

      <Footer />
    </div>
  );
}
