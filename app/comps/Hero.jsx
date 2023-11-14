import React from "react";
import Search from "./Search";
import Tags from "./Tags";

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
    </section>
  );
};

export default Hero;
