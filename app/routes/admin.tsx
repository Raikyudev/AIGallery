import { Navbar } from "../components/Navbar";

const admin = () => {
    return (
        <div>
          <Navbar />
          <h1 className="text-3xl font-raleway,font-bold mt-5 text-center font-black">
        Live customers
        </h1>
        <h1 className="text-3xl font-raleway,font-bold mt-5 text-center font-black">
        Live Orders
        </h1>
        <h1 className="text-3xl font-raleway,font-bold mt-5 text-center font-black">
        Products in Stock
        </h1>
          </div>
  );
};

export default admin;