import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-goodbot-primary-gray w-full h-16 absolute top-0 block">
      <div className="flex justify-between items-center px-8 py-3 my-auto">
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
