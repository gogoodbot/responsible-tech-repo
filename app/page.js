import Image from "next/image";
import "./globals.css";
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
import Card from "./comps/Card";
import OrganizationCard from "./comps/OrganizationCard";
import TopVoiceCard from "./comps/TopVoiceCard";

export const revalidate = 3600; // revalidate at most every hour

export default async function Home() {
  const tags = await searchTags();
  return (
    <section className="container relative flex flex-col gap-16">
      <Hero />
      <Search />
      <hr />
      <section>
        <div>
          Tabs
        </div>
        <div className="p-10 bg-zinc-100 rounded-3xl font-poppins flex flex-col gap-10 items-start">
          <div>Sub Tabs</div>
          <div className="flex flex-col gap-10 items-start w-full">
            <h2 className="font-bold text-2xl">Community</h2>
            <div className="flex flex-col gap-4 items-start w-full">
              <h3 className="font-bold text-base">Organizations</h3>
              <div className="w-full grid grid-cols-4 grid-rows-1 gap-4">
                <OrganizationCard />
                <OrganizationCard />
                <OrganizationCard />
                <OrganizationCard />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start w-full">
              <h3 className="font-bold text-base">Top Vocies</h3>
              <div className="w-full grid grid-cols-4 grid-rows-1 gap-4">
                <TopVoiceCard />
                <TopVoiceCard />
                <TopVoiceCard />
                <TopVoiceCard />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-start">
            <h2 className="font-bold text-2xl">Legislation</h2>
            <div className="flex justify-between items-center gap-6"><Card /><Card /><Card /></div>
          </div>
          <div className="flex flex-col gap-10 items-start">
            <h2 className="font-bold text-2xl">Legal Processes</h2>
            <div className="flex justify-between items-center gap-6"><Card /><Card /><Card /></div>
          </div>
          <div className="flex flex-col gap-10 items-start">
            <h2 className="font-bold text-2xl">Resources</h2>
            <div className="grid grid-cols-3 grid-rows-2 gap-6"><Card /><Card /><Card /><Card /><Card /><Card /></div>
          </div>
        </div>
      </section>

      {/* <section className="overflow-hidden rounded-lg border bg-background dark:bg-transparent shadow bg-slate-50 ">
        <div className=" flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">

            </div>
          </div>
          <div className="flex-1 space-y-4 p-8 pt-6">
           
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
      </section> */}
    </section>
  );
}
