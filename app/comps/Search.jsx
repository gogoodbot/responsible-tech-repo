"use client";

import React from "react";
import { Search as SearchIcon } from "lucide-react";
import { SlidersHorizontal as FilterIcon } from 'lucide-react';



const Search = () => {
  return (
    <form className="flex w-full gap-2">
      <input type="text" placeholder="Search Goodbot ex. Digital Charter Canada" className="w-full border border-[#A1A1A1] rounded-md px-3 py-1.5 text-sm" />
      <button className="text-base font-bold uppercase flex items-center justify-center gap-2 bg-[#A3E2EC] px-2 py-2.5 rounded-md min-w-[116px]"><SearchIcon size={20} />search</button>
      <button className="text-base font-bold text-sky-900 uppercase flex items-center justify-center gap-2 px-2 py-2.5 rounded-md border border-sky-900 min-w-[116px]"><FilterIcon size={20} />filter</button>
    </form>
  );
};

export default Search;


