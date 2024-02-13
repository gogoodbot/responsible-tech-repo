import { searchTags } from '@/lib/actions';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import Hero from './comps/Hero';
import Search from './comps/Search';
import SearchTabs from './comps/SearchTabs';
import './globals.css';

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
                      <Image
                        src="https://img.icons8.com/nolan/64/ffffff/hashtag-key.png"
                        alt="hashtag-key"
                        width={32}
                        height={32}
                        className="mr-1"
                      />
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
