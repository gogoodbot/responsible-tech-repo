import Image from "next/image";
import "./globals.css";
import Navbar from "./comps/Navbar";
import Hero from "./comps/Hero";
import Search from "./comps/Search";
import ResultsCard from "./comps/ResultCard";

export default function Home() {
  return (
    <main className="font-openSans">
      {/* <Hero /> */}
      <Search />  
      <ResultsCard />
    </main>
  );
}
