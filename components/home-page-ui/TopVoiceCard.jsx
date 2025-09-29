import React from "react";

const TopVoiceCard = ({ topVoice }) => {

    const getInitials = (first, last) => {
        const firstInitial = first?.charAt(0).toUpperCase() || "";
        const lastInitial = last?.charAt(0).toUpperCase() || "";
        return firstInitial + lastInitial;
    };

    return (
        <div className="flex flex-col bg-white w-full  rounded-lg border border-[var(--medium-gray)] overflow-hidden">
            <div className="flex items-start justify-between w-full relative bg-[var(--button-primary)] p-4">
                <div className="flex gap-3 items-start justify-start">
                    <div className="w-10 h-10 rounded-full bg-[#2c2c2c] border border-[#fff] flex justify-center items-center text-[#f5f5f5] shadow-md">
                        {getInitials(topVoice.first_name, topVoice.last_name)}
                    </div>
                </div>
            </div>
            <div className="p-4">
                <p className="text-base font-semibold text-[var(--dark-gray)]">{topVoice.first_name} {topVoice.last_name}</p>
                <p className="text-sm font-medium text-gray-400">{topVoice.title}</p>
                <p className="text-sm mt-2 line-clamp-3">{topVoice.about}</p>
            </div>
        </div>
    )
}

export default TopVoiceCard;