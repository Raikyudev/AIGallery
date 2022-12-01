import { ActionFunction, json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { useCart } from "~/hooks/useCart";

import { createFileUploadHandler } from "@remix-run/node/dist/upload/fileUploadHandler";
import { PrismaClient } from "@prisma/client";
import { useSubmit, useTransition } from "@remix-run/react";

export const basketItem = (props: {
  image: string;
  price: number;
  art_name: string;
  size: string;
}) => {
  const displayMenu = () => {
    setIsShown((current) => !current);
  };
  const closeMenu = () => {
    setIsShown(false);
  };

  const data = useLoaderData();
  const [isShown, setIsShown] = useState(false);
  const [currentPrice, changePrice] = useState(props.priceS);

  const artNameArray = props.art_name.split("_");
  const artName = artNameArray.join(" ").toUpperCase();

  return (
    <Form method="post" action="/checkout" name="basketItemForm">
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
              <p className="font-bold text-white">{artName}</p>
              <p className="font-bold text-white">
                Price: £{currentPrice.toFixed(2)}
              </p>
            </div>
            <div className="flex gap-2 mb-4 h-20 items-center ml-2">
              <p className="font-bold text-white">Size: {props.size} </p>

              <input
                type="hidden"
                id="artName"
                name="artName"
                value={props.art_name}
                defaultValue="name"
              />
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
    </Form>
  );
};
