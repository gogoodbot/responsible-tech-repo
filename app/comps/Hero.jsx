import React from "react";
import Search from "./Search";
import Tags from "./Tags";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col items-center font-openSans w-[700px] mx-auto my-10">
      <div className="flex flex-col items-center ">
        <p className="text-center font-poppins tracking-normal leading-relaxed font-bold text-4xl">
          GoodBot strengthens technology governance towards building a more
          humane technology ecosystem.
        </p>
        <Search />
      </div>
      <div className="flex flex-col items-start justify-start w-[700px] my-5 font-poppins font-semibold">
        <h3>POPULAR TOPICS</h3>
        <Tags />
      </div>
      <div className="bg-goodbot-primary-skyBlue mt-10 relative">
        <Image
          className="object-fill"
          alt="banner hero section"
          src="/images/newsletter.png"
          width={700}
          height={200}
        />
        <div className="absolute bottom-14 left-[450px] bg-goodbot-secondary-neonGreen w-[160px] h-[200px] z-50 shadow-lg shadow-black font-poppins font-semibold flex flex-col justify-between py-5 px-2">
          <h5>goodbot</h5>
          <div>
            <h6>Headline Guide</h6>
            <p className="font-light">Title of guide goes here</p>
          </div>
        </div>
        <div className="flex flex-col justify-between font-poppins absolute bottom-0 left-5 w-1/2 h-full p-5">
          <h3 className="font-bold text-white text-2xl">goodbot</h3>
          <div>
            <h6 className="font-bold text-3xl">Headline Guide</h6>
            <p className="font-light text-2xl">Title of guide goes here</p>
          </div>
          <Button className="bg-white w-1/2 rounded-full text-goodbot-primary-starryNightBlack font-bold mb-5 hover:text-white">
            Download Here
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
