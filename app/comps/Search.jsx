"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams } from "next/navigation";

const Search = () => {

  const searchParams = useSearchParams();

  function handleSearch(searchTerm) {
    console.log(searchTerm);
  }


  return (
    <div className="flex w-full max-w-7xl items-center space-x-2 mt-14 text-goodbot-primary-starryNightBlack font-poppins font-bold">
      <Input htmlFor="search" type="text" placeholder="Search Goodbot" 
        onChange={(e) => handleSearch(e.target.value)}      
      />
      <Button className="flex justify-between gap-1 " type="submit">
        <AiOutlineSearch />
        <span className="font-bold">SEARCH</span>
      </Button>
    </div>
  );
};

export default Search;
