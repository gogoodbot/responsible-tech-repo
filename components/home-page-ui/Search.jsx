"use client";

import React from "react";
import { Search as SearchIcon } from "lucide-react";
import FilterDropdown from "./FilterDropdown";



const Search = () => {
  return (
    <form className="flex w-full gap-2">
      <input type="text" placeholder="Search Goodbot ex. Digital Charter Canada" className="w-full shadow-sm border border-[#A1A1A1] rounded-md px-3 py-1.5 text-sm" />
      <button className="shadow text-base font-bold uppercase flex items-center justify-center gap-2 bg-[#A3E2EC] px-2 py-2.5 rounded-md min-w-[116px]"><SearchIcon size={20} />search</button>
      <FilterDropdown />
    </form>
  );
};

export default Search;


