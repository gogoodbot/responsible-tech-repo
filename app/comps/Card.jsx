import React from "react";

const Card = () => {
    return (
        <div className="h-[474px] w-full bg-white rounded-2xl overflow-hidden flex flex-col gap-y-5">
            <div className="h-[163px] bg-[#d9d9d9] "></div>
            <div className="px-6 flex flex-col gap-y-4">
                <h4 className="text-base font-bold">Canada's Digital Charter</h4>
                <p className="text-sm font-medium text-[#64748B]">November 27, 2023</p>
                <p className="text-base text-[#020817] line-clamp-5">10-item charter to guide Canadian gov't work to strengthen privacy protections for Canadians as they engage in commercial activities 10-item charter to guide....</p>
            </div>
            <div className="flex items-center p-4 gap-4 flex-wrap">
                <p className="bg-[#a3e2ec] text-base px-4 py-2 inline-block rounded-lg min-w-[106px]">Tag Name</p>
                <p className="bg-[#a3e2ec] text-base px-4 py-2 inline-block rounded-lg min-w-[106px]">Tag Name</p>
            </div>
        </div>
    )
}

export default Card;