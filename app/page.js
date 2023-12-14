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
import { Separator } from "../components/ui/separator";

export default async function Home() {
  const tags = await searchTags();
  return (
    <section className="container relative">
      <Hero />



      <section className="overflow-hidden rounded-lg border bg-background dark:bg-transparent shadow bg-slate-50 ">
        <div className=" flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <Search />
            </div>
          </div>



          <div className="flex-1 space-y-4 p-8 pt-6">

            

          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Explore</h2>
            <div className="flex items-center space-x-2">
              {/* @todo add feedback button */}
            </div>
          </div>
          <Separator />
    {/* tags component */}
          <div className="relative">
        <div className="mb-4 flex items-center">
          {tags &&
            tags.map((tag) => (
              <Badge className="cursor-pointer mr-4" key={tag.keyword}>
                <Link
                  className="flex items-center"
                  href={`/results?query=${tag.keyword}`}
                >
                  {tag.keyword}
                </Link>
              </Badge>
            ))}
        </div>
      </div>

      <Separator />

            <div className="flex items-center justify-between space-y-2">
              <SearchTabs />
            </div>
          </div>

          <div className=""></div>
        </div>
      </section>
    </section>
  );
}
