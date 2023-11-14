import Image from "next/image";
import "./globals.css";
import Nav from "./comps/Nav";
import Hero from "./comps/Hero";

export default function Home() {
  return (
    <main className="font-openSans">
      <Nav />
      <Hero />
    </main>
  );
}
