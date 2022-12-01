import { Navbar } from "../components/Navbar";

const admin = () => {
    return (
        <div>
          <Navbar />
          <h1 className="text-3xl font-raleway,font-bold mt-5 text-center font-black">
        Customers
        </h1>
        <hr></hr>
        <h1 className="text-3xl font-raleway,font-bold mt-5 text-center font-black">
        Orders
        </h1>
        <hr></hr>
        <h1 className="text-3xl font-raleway,font-bold mt-5 text-center font-black">
        Products in Stock
        </h1>
        <hr></hr>
          </div>
  );
};

export default admin;