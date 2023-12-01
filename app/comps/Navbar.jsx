import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-goodbot-primary-gray sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="logo">
          <Link href="/" className="font-poppins font-bold text-4xl">
            goodbot
          </Link>
        </div>
        <h1 className="font-poppins font-semibold text-lg">
          Responsible Tech Repo
        </h1>
        <div>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
