import { Navbar } from "../components/Navbar";
import { useState } from 'react';
import {Users} from "../assets/users";
import Table from "~/assets/Table";


const admin = () => {

    const [query, setQuery] = useState("");
    const keys = ["first_name","last_name","email"]

    const search =(data) => {
        return data.filter((item) =>
       keys.some((key) => item[key].toLowerCase().includes(query))
     );
   };
  
      return (
          <div>
            
            <Navbar />
  
            <h1 className="text-3xl font-raleway,font-bold mt-5 text-center font-black">
          Customers
          </h1>
          <hr></hr>

          <br></br>

          <div className="flex flex-row items-center justify-center">
          <input type="text" placeholder="search..." className="search" onChange={(e) => setQuery(e.target.value)}/>
          </div>
          <br></br>
          <div className="flex flex-row items-center justify-center">
          <Table data={search(Users)}/>
          </div>

  
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
