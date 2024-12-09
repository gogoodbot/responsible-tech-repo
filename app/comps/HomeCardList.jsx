import React from "react";
import Card from "./Card";
import SeeMoreButton from "./SeeMoreButton";

const HomeCardList = ({ title }) => {
    return (
        <div className="flex flex-col gap-10 items-start">
            <h2 className="font-bold text-2xl">{title}</h2>
            <div className="grid grid-cols-3 grid-rows-2 gap-6"><Card /><Card /><Card /><Card /><Card /><Card /></div>
            <SeeMoreButton />
        </div>
    )
}

export default HomeCardList;