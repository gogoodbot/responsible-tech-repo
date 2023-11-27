import Image from "next/image";
import "./globals.css";
import Navbar from "./comps/Navbar";
import Hero from "./comps/Hero";

export default function Home() {
  return (
    <main className="font-openSans">
      <Hero />
    </main>
  );
}
