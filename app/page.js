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

      <section className="overflow-hidden rounded-lg border bg-background shadow">
        <div className=" flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <Search />
            </div>
          </div>
          <div className="flex-1 space-y-4 p-8 pt-6">
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
