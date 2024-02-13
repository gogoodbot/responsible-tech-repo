"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

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
        placeholder="Search for companies, policies, and trends..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        className="px-4 border border-gray-300 rounded-md"
      />
      <Button
        variant="ghost"
        className="outline-none cursor-pointer border-2 border-transparent rounded-md font-openSans text-white bg-goodbot-primary-darkGrey px-5 py-3 text-center transition duration-150 ease-in-out hover:bg-goodbot-primary-blue hover:border-goodbot-primary-starryNightBlack hover:text-white  dark:bg-goodbot-primary-gray dark:text-black dark:border-white dark:hover:bg-goodbot-primary-blue dark:hover:text-white"
        type="submit"
      >
        Search
        <SearchIcon className="mx-1" />
      </Button>
    </form>
  );
};

export default Search;