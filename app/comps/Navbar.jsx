import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">

      <div className="logo">
        <Link href="/" className="font-poppins font-bold text-4xl">
          goodbot
        </Link>
      </div>
        <div className="">
        <Link href="/about" className="ml-6 flex items-center space-x-2">
          About
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
