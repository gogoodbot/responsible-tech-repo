import Image from "next/image";
import "./globals.css";
import Navbar from "./comps/Navbar";
import Hero from "./comps/Hero";
import Search from "./comps/Search";
import ResultsCard from "./comps/ResultCard";

export default function Home() {
  return (
    <main className="font-openSans">
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">

      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        GoodBot strengthens technology governance
        <br className="hidden sm:inline" /> 
        we&apos;re working towards building a more humane technology ecosystem.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel fringilla metus, vel pulvinar eros. Duis accumsan ligula in sem vestibulum mollis. Mauris at sagittis velit.
        </p>
      </div>
      <Search />  

      <div className="flex gap-4">
        <ResultsCard />
        <ResultsCard />
        <ResultsCard />

      </div>
      <div className="flex gap-4">
        <ResultsCard />
        <ResultsCard />
        <ResultsCard />

      </div>
    </section>

    </main>
  );
}
