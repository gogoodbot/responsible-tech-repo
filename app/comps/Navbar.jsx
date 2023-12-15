import React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  return (
    <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
      <div className="logo">
        <Link href="/" className="font-poppins font-bold text-4xl">
          goodbot
        </Link>
      </div>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link href="/about" className="ml-6 flex items-center space-x-2">
          About
        </Link>
        <ModeToggle />
      </nav>
    </div>
  );
};

export default Navbar;
