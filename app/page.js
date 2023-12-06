import Image from "next/image";
import "./globals.css";
import Navbar from "./comps/Navbar";
import Hero from "./comps/Hero";
import Search from "./comps/Search";
import Results from "./results/page";
import ResultCard from "./comps/ResultCard";
import SearchTabs from "./comps/SearchTabs";
import Tags from "./comps/Tags";
import { Badge } from "../components/ui/badge";
import { searchTags } from "@/lib/actions";
import Link from "next/link";

export default async function Home() {
  const tags = await searchTags();
  return (
    <section className="container relative">
      <Hero />
      <section className="overflow-hidden rounded-lg border bg-background shadow">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Search />

          <div className="flex-1 items-center space-x-4">
            {tags &&
              tags.map((tag) => (
                <Badge className="cursor-pointer" key={tag.keyword}>
                  <Link href={`/results?query=${tag.keyword}`}>
                    {tag.keyword}
                  </Link>
                </Badge>
              ))}
          </div>

          <div className="border-b">
            <div className="flex items-center px-4"></div>
          </div>

          <div className="">
            <SearchTabs />
          </div>
        </div>
      </section>
    </section>
  );
}
