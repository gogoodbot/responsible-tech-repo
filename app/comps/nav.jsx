import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-goodbot-primary-gray w-full h-16 flex justify-between items-center px-8">
      <div className="logo">
        <Link href="/" className="font-poppins font-bold text-4xl">
          goodbot
        </Link>
      </div>
      <h1 className="font-poppins font-semibold text-lg">
        Responsible Tech Repo
      </h1>
      <div className="login">
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
};

export default Nav;
