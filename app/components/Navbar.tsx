import logo from "../assets/A.I._GALLERY.png";
import { useState } from "react";

export const Navbar = () => {
  const [isTriggered, setIsTriggered] = useState(true);
  return (
    <nav className="p-3 bg-black dark:bg-black border-bottom-blue-solid">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/main" className="flex items-center">
          <img
            src={logo}
            className={`${
              isTriggered ? "visible" : "hidden"
            }    rounded-full mr-3 h-28 lg:h-18 border-2  border-solid border-white`}
            alt="AI Gallery Logo"
          />
        </a>
        <button
          onClick={() => setIsTriggered(!isTriggered)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-black focus:ring-gray-600 md-only"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isTriggered ? "hidden" : "visible"
          } w-full md:block md:w-auto`}
          id="navbar-default "
        >
          <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-white">
            <li>
              <a
                href="/main"
                className=" block py-2 pr-4 pl-3 text-white rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Store
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" block py-2 pr-4 pl-3 text-white rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Sign In
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Basket
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
