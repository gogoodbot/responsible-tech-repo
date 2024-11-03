import React from "react";
import Link from "next/link";
import { Eye } from 'lucide-react';

const OrganizationCard = () => {
    return (
        <div className="flex flex-col gap-2 bg-white w-full p-4 rounded-lg border border-[#979797]">
            <div className="flex items-start justify-between w-full">
                <div className="text-sm px-9 py-3 bg-[#D9D9D9]">Logo</div>
                <Link href='/' className="flex items-center gap-2 text-sm text-sky-900 font-medium"><Eye size={20} />Preview</Link>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-sm font-bold">Sentinel Project </p>
                <p className="text-sm">Our mission is to prevent mass atrocities.</p>
                <p className="text-sm text-[#1daeef]">#Social Media, Gaming & Entertainment #techforgood </p>
            </div>
        </div>
    )
}

export default OrganizationCard;