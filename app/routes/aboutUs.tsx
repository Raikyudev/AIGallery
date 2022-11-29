import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import bg from "../assets/AI_BG (2).png";
import logo3 from "../assets/logo3.png";
import jasonpfp from "../assets/giphy (1).gif";
import sebpfp from "../assets/sebpfp.jpg";
import ab from "../assets/ab.png";
import ted from "../assets/tec_in_ted.png";

const aboutUs = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <h1 className="text-3xl font-raleway,font-bold mt-5 text-center font-black">
        About Us
      </h1>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          <p className="text-left w-96 text-2xl font-raleway, p-4 font-bold mt-20">
            We are a group of students from Aston University who are passionate
            about the uncapped potential of A.I and it's ability to bring
            imagination to life. A.I art is fascniating, how it evokes emotion
            but is created entirely by machine. Our ambition is to create a
            platform that allows humans to see the true potential of A.I art and
            to allow them to interact with it in a way that is both fun and
            educational.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center mt-20 ml-60 items-end">
          <img
            src={logo3}
            alt="AI"
            className="w-96 border-solid border-black border-4 "
          />
        </div>
      </div>
      <h1 className="text-center text-3xl mt-5 font-black">The Team</h1>
      <div className="flex flex-row items-center justify-center mt-20 ">
        <div className="flex flex-col items-center justify-center mx-8">
          <img
            src={jasonpfp}
            alt="
                AI"
            className="lg:w-64 lg:h-64 w-32 h-32 rounded-full "
          />
          <p className="text-xl font-raleway, p-4 font-bold mt-5">
            Jason Cenaj
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mx-8">
          <img
            src={sebpfp}
            alt="
                AI"
            className="lg:w-64 lg:h-64 w-32 h-32 rounded-full border-solid border-black border-4 "
          />
          <p className="text-xl font-raleway, p-4 font-bold mt-5">
            Sebastian Glados
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mx-8">
          <img
            src={ab}
            alt="
                AI"
            className="lg:w-64 lg:h-64 w-32 h-32 rounded-full border-solid border-black border-4 "
          />
          <p className="text-xl font-raleway, p-4 font-bold mt-5">
            Avjit Basra
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mx-8">
          <img
            src={ted}
            alt="
                AI"
            className="lg:w-64 lg:h-64 w-32 h-32 border-solid border-black border-4 rounded-full "
          />
          <p className="text-xl font-raleway, p-4 font-bold mt-5">Ayush Bush</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center mt-20 mb-20">
        <div className="flex flex-col items-center justify-center mx-8">
          <img
            src={bg}
            alt="
                AI"
            className="lg:w-64 lg:h-64 w-32 h-32 border-solid border-black border-4 "
          />
          <p className="text-xl font-raleway, p-4 font-bold mt-5">Hatem Chahir</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-8">
          <img
            src={bg}
            alt="
                AI"
            className="lg:w-64 lg:h-64 w-32 h-32 border-solid border-black border-4 "
          />
          <p className="text-xl font-raleway, p-4 font-bold mt-5">Ahdil Butt</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-8">
          <img
            src={bg}
            alt="
                AI"
            className="lg:w-64 lg:h-64 w-32 h-32 border-solid border-black border-4 "
          />
          <p className="text-xl font-raleway, p-4 font-bold mt-5">Abdulla Al-Hashmi</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-8">
          <img
            src={bg}
            alt="
                AI"
            className="lg:w-64 lg:h-64 w-32 h-32 border-solid border-black border-4 "
          />
          <p className="text-xl font-raleway, p-4 font-bold mt-5">Oluwasuyi Ajayi</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default aboutUs;
