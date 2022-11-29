import { ActionFunction, json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { useCart } from "~/hooks/useCart";
import { getSession, commitSession, destroySession } from "~/utils/items-session";

import { createFileUploadHandler } from "@remix-run/node/dist/upload/fileUploadHandler";
import { PrismaClient } from "@prisma/client";



export const Item = (props: {
  image: string;
  priceS: number;
  priceM: number;
  priceL: number;
  priceXl: number;
  art_name: string;
} ) => {

  const data = useLoaderData();
  console.log(data.orders)
  const [isShown, setIsShown] = useState(false);
  const [currentPrice, changePrice] = useState(props.priceS);

  const displayMenu = () => {
    setIsShown((current) => !current);
  };
  const closeMenu = () => {
    setIsShown(false);
  };
  
  const handleClick = () => {
    
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("nice");
    
  }

  return (
    <form method="POST" action="/main">
    <div
      onMouseLeave={closeMenu}
      onMouseEnter={displayMenu}
      className={`${
        isShown && "border-white border-2 shadow-inner"
      } flex flex-col items-center w-64 md:w-96 pt-2 pb-2  transition ease-in-out hover:scale-105 duration-1000`}
    >
      <img
        src={"/assets/" + props.image}
        className="w-60 h-60 md:w-80 md:h-80 mb-4 mt-2 rounded-lg shadow-2xl"
        
      />
      {isShown && (
        <div>
          <div className="ml-2 flex flex-col items-start w-60 md:w-72 mb-1">
            <p className="font-bold text-white">{props.art_name}</p>
            <p className="font-bold text-white">Price: £{currentPrice.toFixed(2)}</p>
          </div>
          <div className="flex gap-2 mb-4 h-20 items-center ml-2">
            <p className="font-bold text-white">Size: </p>
            <label htmlFor="S" className="">
              <input
                className="hidden peer"
                type="radio"
                id="S"
                name="size"
                value="S"
                required
              />

              <div onClick={() => changePrice(props.priceS)} className="border-white border-2 w-10 h-15 md:w-14 md:h-14 flex flex-col items-center text-center peer-checked:bg-black peer-checked:text-white peer-checked:[&>*]:border-white">
                <p className="font-bold border-b-2 border-white w-9 text-white mb-1">
                  S
                </p>
                <p className="text-xs text-white font-bold">8" x 12"</p>
              </div>
            </label>
            <label htmlFor="M" className="">
              <input
                className="hidden peer"
                type="radio"
                id="M"
                value="M"
                name="size"
              />
              <div id="m" onClick={() => changePrice(props.priceM)} className="border-white border-2 w-10 h-15 md:w-14 md:h-14 flex flex-col items-center text-center peer-checked:bg-black peer-checked:text-white peer-checked:[&>*]:border-white">
                <p className="font-bold border-b-2 border-white w-9 mb-1 text-white">
                  M
                </p>
                <p className="text-xs font-bold text-white">12" x 18"</p>
              </div>
            </label>
            <label htmlFor="L" className="">
              <input
                className="hidden peer"
                type="radio"
                id="L"
                value="L"
                name="size"
              />
              <div id="l" onClick={() => changePrice(props.priceL)} className="border-white border-2 w-10 h-15 md:w-14 md:h-14 flex flex-col items-center text-center peer-checked:bg-black peer-checked:text-white peer-checked:[&>*]:border-white">
                <p className="font-bold border-b-2 border-white w-9 mb-1 text-white">
                  L
                </p>
                <p className="text-xs font-bold text-white">16" x 24"</p>
              </div>
            </label>
            <label htmlFor="XL" className="">
              <input
                className="hidden peer"
                type="radio"
                id="XL"
                value="XL"
                name="size"
              />
              <div id="xl" onClick={() => changePrice(props.priceXl)} className="border-white border-2 w-10 h-15 md:w-14 md:h-14 flex flex-col items-center text-center peer-checked:bg-black peer-checked:text-white peer-checked:[&>*]:border-white">
                <p className="font-bold border-b-2 border-white text-white w-9 mb-1">
                  XL
                </p>
                <p className="text-xs font-bold text-white">20" x 30"</p>
              </div>
            </label>
          </div>
          <button
            className="font-bold bg-white text-black px-10 w-60 h-10 md:w-72 md:h-10 ml-1 md:ml-2"
            
            type="submit"
          >
            Add to basket
          </button>
        </div>
      )}
    </div>
    </form>
    
  );
};
