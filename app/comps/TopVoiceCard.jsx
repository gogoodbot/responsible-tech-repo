import React from "react";
import Link from "next/link";
import { Eye } from 'lucide-react';

const TopVoiceCard = () => {
    return (
        <div className="flex flex-col bg-white w-full  rounded-lg border border-[#979797] overflow-hidden">
            <div className="flex items-start justify-between w-full relative bg-[#a3e2ec] p-4">
                <div className="flex gap-3 items-start justify-start">
                    <div className="w-10 h-10 rounded-full bg-[#d9d9d9]"></div>
                </div>
                <Link href='/' className="flex items-center gap-2 text-sm text-sky-900 font-medium"><Eye size={20} />Preview</Link>
            </div>
            <div className="p-4">
                <p className="text-base font-semibold text-[#757575]">Leigh Bardu</p>
                <p className="text-sm font-medium text-[#b3b3b3]">PhD Researcher in Biology, MIT </p>
                <p className="text-sm mt-2">Wrote Network effect on disadvantaged populations(2021)</p>
            </div>
        </div>
    )
}

export default TopVoiceCard;