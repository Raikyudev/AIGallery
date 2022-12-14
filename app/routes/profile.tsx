import { Navbar } from "../components/Navbar";
import profileIcon from "../assets/profile-icon.png";
import { Link } from "@remix-run/react";
import { Footer } from "../components/Footer";

const profile = () => {
  return (
    <div className="h-screen">
      <Navbar />

      <div className=" border-solid border-2 border-black rounded-md mt-5 mx-2 grid-cols-2 md:w-96">
        <div className="flex flex-col items-center justify-center -mt-5">
          <img
            className="w-32 rounded-full "
            src={profileIcon}
            alt="Profile Picture"
          />
        </div>
        <div className="text-center ">
          <h1 className="text-2xl mb-3 -mt-5">Username</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="font-raleway,font-bold text-center rounded-lg border-2 border-solid border-black p-2 mb-3">
            <Link to="/edit">Edit Profile</Link>
          </button>
        </div>
      </div>

      <div className="border-solid border-2 border-black rounded-md mt-5 mx-2 grid-cols-2 md:w-96">
        <h1 className="font-raleway,text-left ml-2 mt-2">
          PERSONAL INFORMATION
        </h1>
        <form className="flex flex-col items-left justify-left  mx-2 ">
          <label className="text-left ml-2 mt-2">First Name</label>
          <input
            className="bg-white p-2 border-b border-0 border-black"
            type="text"
            name="firstname"
            placeholder="First Name"
          />
          <label className="text-left ml-2 mt-2">Last Name</label>
          <input
            className="bg-white p-2 border-b border-0 border-black"
            type="text"
            name="lastname"
            placeholder="Last Name"
          />
          <label className="text-left ml-2 mt-2">Birthday</label>
          <input
            className="bg-white p-2 border-b border-0 border-black"
            type="date"
            name="birthday"
            placeholder="Birthday"
          />
          <button className="font-raleway,font-bold text-center rounded-lg border-2 border-solid border-black  bg-white p-2 mt-3 mb-2">
            <Link to="/edit">Save Changes</Link>
          </button>
        </form>
      </div>
      <div className="border-solid border-2 border-black rounded-md mt-5 mx-2 grid-cols-2 md:w-96">
        <h1 className="font-raleway, text-left ml-2 mt-2">
          CONTACT INFORMATION
        </h1>
        <form className="flex flex-col items-left justify-left  mx-2">
          <label className="text-left ml-2 mt-2">Email</label>
          <input
            className="bg-white p-2 border-b border-0 border-black"
            type="text"
            name="email"
            placeholder="Email"
          />
          <label className="text-left ml-2 mt-2">Phone Number</label>
          <input
            className="bg-white p-2 border-b border-0 border-black"
            type="text"
            name="phonenumber"
            placeholder="Phone Number"
          />
          <button className="font-raleway,font-bold text-center rounded-lg  bg-white p-2 mt-3 mb-2 border-2 border-solid border-black">
            <Link to="/edit">Save Changes</Link>
          </button>
        </form>
      </div>

      <div className="border-solid border-2 border-black rounded-md mt-5 mx-2 grid-cols-2 mb-2 md:w-96">
        <h1 className="font-raleway, text-left ml-2 mt-2">DELIVERY ADDRESS</h1>
        <form className="flex flex-col items-left justify-left  mx-2">
          <label className="text-left ml-2 mt-2">Address</label>
          <input
            className="bg-white  p-2 border-b border-0 border-black"
            type="text"
            name="address"
            placeholder="Address"
          />
          <label className="text-left ml-2 mt-2">City</label>
          <input
            className="bg-white  p-2 border-b border-0 border-black"
            type="text"
            name="city"
            placeholder="City"
          />
          <label className="text-left ml-2 mt-2">County</label>
          <input
            className="bg-white  p-2 border-b border-0 border-black"
            type="text"
            name="county"
            placeholder="County"
          />
          <label className="text-left ml-2 mt-2">Post Code</label>
          <input
            className="bg-white p-2 border-b border-0 border-black"
            type="text"
            name="postcode"
            placeholder="Post Code"
          />

          <button className="font-raleway,font-bold text-center rounded-lg  bg-white p-2 mt-3 mb-2">
            <Link to="/edit">Save Changes</Link>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default profile;
