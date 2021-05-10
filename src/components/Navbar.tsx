import React from "react";
import { Button } from "./Button";
import Image from "next/image";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-8">
      <a href="/">
        <Image
          src="/edumango-logo.svg"
          alt="Learning"
          width={200}
          height={49}
          layout="intrinsic"
          quality={100}
        />
      </a>

      <ul className="flex items-center space-x-6 md:space-x-10">
        <li>
          <a href="/about" className="text-accent-secondary">
            <h4>About Us</h4>
          </a>
        </li>
        <li>
          <a href="/courses" className="text-accent-secondary">
            <h4>Courses</h4>
          </a>
        </li>
      </ul>
    </nav>
  );
};
