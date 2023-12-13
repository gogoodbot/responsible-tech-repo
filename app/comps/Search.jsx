"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("query") || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      replace(`/results?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-7xl items-center space-x-2 "
    >
      <Input
        htmlFor="search"
        type="text"
        placeholder="Search for companies, policies, and trends."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        className="  border-4 
        rounded-md
        h-12
        leading-normal
        border-[ #3F4354]
        block
        w-full
        box-border
        select-auto
        text-base
        px-1.5
        pl-3
        "
      />
      <Button
        className="flex justify-between gap-1 outline-none items-center bg-[#91CAC9] text-black
  border border-black roundedcursor-pointer  shrink-0 h-11  text-base leading-6 overflow-hidden px-4 py-3 no-underline transition-all duration-140 ease-out  whitespace-nowrap  hover:shadow-[4px_4px_0_#000] hover:-translate-x-1 hover:-translate-y-1focus-visible:outline-offset-1"
        type="submit"
      >
        <AiOutlineSearch />
        <span className="font-bold">SEARCH</span>
      </Button>
    </form>
  );
};

export default Search;
