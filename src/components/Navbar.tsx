import React, { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:flex py-8  items-center justify-between">
      <nav className="flex bg-white justify-between items-center">
        <a className="sm:block hidden" href="/">
          <Image
            src="/edumango-logo.svg"
            alt="Learning"
            width={200}
            height={49}
            layout="intrinsic"
            quality={100}
            className="sm:hidden"
          />
        </a>
        <a className="sm:hidden block" href="/">
          <Image
            src="/mango.png"
            alt="Learning"
            width={45}
            height={45}
            layout="intrinsic"
            quality={100}
            className="sm:hidden"
          />
        </a>
        {/* <button
          className="md:hidden border border-gray-200 rounded-md flex items-center p-1 focus:outline-none"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className={`material-icons-round transition ease-in-out`}>
            {isOpen ? "close" : "menu"}
          </span>
        </button> */}

        <button
          className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </nav>
      <div className="relative md:flex">
        <ul
          className={`absolute md:static w-max right-0 transform ${
            !isOpen && "hidden"
          } bg-white md:flex items-center md:space-x-7 md:border-0 border border-gray-100 md:shadow-none shadow-lg md:rounded-none rounded-md md:space-y-0 space-y-2 md:p-0 p-4 md:h-auto`}
        >
          <li className="flex justify-end md:block">
            <a
              href="/our-team"
              className="hover:underline text-accent-secondary"
            >
              <h4 className="text-xl sm:text-2xl">Our Team</h4>
            </a>
          </li>
          <li className="flex justify-end md:block">
            <a
              href="/courses"
              className="hover:underline text-accent-secondary"
            >
              <h4 className="text-xl sm:text-2xl">Courses</h4>
            </a>
          </li>
          <li className="flex justify-end md:block ">
            <a
              href="/our-sponsors"
              className="hover:underline text-accent-secondary"
            >
              <h4 className="text-xl sm:text-2xl">Sponsors</h4>
            </a>
          </li>
          <li className="flex justify-end md:block">
            <a
              href="/support-us"
              className="hover:underline text-accent-secondary"
            >
              <h4 className="text-xl sm:text-2xl">Support Us</h4>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
