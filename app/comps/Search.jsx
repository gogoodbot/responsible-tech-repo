import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="flex w-full max-w-7xl items-center space-x-2 mt-14 text-goodbot-primary-starryNightBlack font-poppins font-bold">
      <Input type="text" placeholder="Search Goodbot" />
      <Button
        className="bg-goodbot-secondary-lightBlue text-goodbot-primary-starryNightBlack flex justify-between gap-1 "
        type="submit"
      >
        <AiOutlineSearch />
        <span>SEARCH</span>
      </Button>
    </div>
  );
};

export default Search;
