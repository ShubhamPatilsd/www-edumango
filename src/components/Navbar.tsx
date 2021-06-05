import React from "react";
import { Button } from "./Button";
import Image from "next/image";

export const Navbar: React.FC = () => {
  return (
    
    <nav className="flex bg-white  items-center justify-between py-8">
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

      <ul className="flex items-center space-x-6 md:space-x-10">
        <li>
          <a href="/our-team" className="hover:underline text-accent-secondary">
            <h4>Team</h4>
          </a>
        </li>
        <li>
          <a href="/courses" className="hover:underline text-accent-secondary">
            <h4>Courses</h4>
          </a>
        </li>
      </ul>
    </nav>
    
  );
};
