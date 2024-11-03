import React from "react";
import Link from "next/link";
import { Eye } from 'lucide-react';

const TopVoiceCard = () => {
    return (
        <div className="flex flex-col gap-2 bg-white w-full p-4 rounded-lg border border-[#979797]">
            <div className="flex items-start justify-between w-full relative">
                <div className="flex gap-3 items-start justify-start">
                    <div className="w-8 h-8 rounded-full bg-[#d9d9d9]"></div>
                    <div>
                        <p className="text-base font-semibold text-[#757575]">Leigh Bardu</p>
                        <p className="text-sm font-medium text-[#b3b3b3]">PhD Researcher in Biology, MIT </p>
                    </div>
                </div>
                <Link href='/' className="flex items-center gap-2 text-sm text-sky-900 font-medium absolute top-0 right-0"><Eye size={20} />Preview</Link>
            </div>
            <p className="text-sm">Wrote Network effect on disadvantaged populations(2021)</p>
        </div>
    )
}

export default TopVoiceCard;