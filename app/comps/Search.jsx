"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((searchTerm) => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("query", searchTerm);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="flex w-full max-w-7xl items-center space-x-2 mt-14 text-goodbot-primary-starryNightBlack font-poppins font-bold">
      <Input
        htmlFor="search"
        type="text"
        placeholder="Search Goodbot"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <Button className="flex justify-between gap-1 " type="submit">
        <AiOutlineSearch />
        <span className="font-bold">SEARCH</span>
      </Button>
    </div>
  );
};

export default Search;
