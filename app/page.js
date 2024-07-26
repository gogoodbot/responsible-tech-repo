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
import { Hash } from "lucide-react";

export const revalidate = 3600; // revalidate at most every hour

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
            {/* tags component */}
            <div className="relative">
              <div className="mb-4 flex items-center">
                {tags &&
                  tags.map((tag) => (
                    <Badge
                      className="cursor-pointer mr-4 bg-goodbot-primary-blue text-white hover:text-white hover:bg-black"
                      key={tag.keyword}
                    >
                      <Hash className="mr-1" size={16} />
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
