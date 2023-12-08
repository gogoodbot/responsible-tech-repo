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
    <form onSubmit={handleSubmit} className="flex w-full max-w-7xl items-center space-x-2 text-goodbot-primary-starryNightBlack font-poppins font-bold">
      <Input
        htmlFor="search"
        type="text"
        placeholder="Search Goodbot"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <Button className="flex justify-between gap-1" type="submit">
        <AiOutlineSearch />
        <span className="font-bold">SEARCH</span>
      </Button>
    </form>
  );
};

export default Search;

