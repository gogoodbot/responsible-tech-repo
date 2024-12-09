import React from "react";
import TopVoiceCard from "./TopVoiceCard";
import SeeMoreButton from "./SeeMoreButton";

const TopVoiceCardList = () => {
    return (
        <div className="flex flex-col gap-4 items-start w-full">
            <h3 className="font-bold text-base">Top Vocies</h3>
            <div className="w-full grid grid-cols-4 grid-rows-1 gap-4">
                <TopVoiceCard />
                <TopVoiceCard />
                <TopVoiceCard />
                <TopVoiceCard />
            </div>
            <SeeMoreButton />
        </div>
    )
}

export default TopVoiceCardList;