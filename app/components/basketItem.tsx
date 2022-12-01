import { ActionFunction, json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { useCart } from "~/hooks/useCart";

import { createFileUploadHandler } from "@remix-run/node/dist/upload/fileUploadHandler";
import { PrismaClient } from "@prisma/client";
import { useSubmit, useTransition } from "@remix-run/react";

export const BasketItem = (props: {
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
          src={"/assets/" + props.art_name + ".jpg"}
          className="w-60 h-60 md:w-80 md:h-80 mb-4 mt-2 rounded-lg shadow-2xl"
        />
        {isShown && (
          <div>
            <div className="ml-2 flex flex-col items-start w-60 md:w-72 mb-1">
              <p className="font-bold text-white">{artName}</p>
              <p className="font-bold text-white">Price: £{props.price}</p>
            </div>
            <div className="flex gap-2 mb-4 h-20 items-center ml-2">
              <p className="font-bold text-white">Size: {props.size} </p>

              <input
                type="hidden"
                id="artName"
                name="artName"
                value={props.art_name}
              />
            </div>

            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Remove Item</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </Form>
  );
};
